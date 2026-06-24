import type { Course, Lesson } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';

type QuestionKind =
  | 'vocab-meaning'
  | 'vocab-word'
  | 'grammar-translate'
  | 'grammar-pattern'
  | 'grammar-cloze';

export type QuizOption = {
  id: string;
  label: string;
  ja: boolean;
};

export type ChoiceQuestion = {
  format: 'choice';
  id: string;
  kind: Exclude<QuestionKind, 'grammar-cloze'>;
  promptPrimary: string;
  promptSecondary?: string;
  promptJa: boolean;
  options: QuizOption[];
  correctId: string;
};

export type InputQuestion = {
  format: 'input';
  id: string;
  kind: 'grammar-cloze';
  promptPrimary: string;
  promptSecondary?: string;
  promptJa: boolean;
  accepted: string[];
  answer: string;
};

export type QuizQuestion = ChoiceQuestion | InputQuestion;

const QUESTION_LIMIT = 12;
const OPTION_COUNT = 4;

const PARTICLES = new Set([
  'wa',
  'o',
  'ga',
  'ni',
  'de',
  'e',
  'no',
  'to',
  'mo',
  'ka',
  'kara',
  'made'
]);

const PARTICLE_ALTERNATES: Record<string, string[]> = {
  o: ['wo'],
  e: ['he'],
  wa: ['ha']
};

const PARTICLE_KANA: Record<string, string> = {
  wa: 'は',
  o: 'を',
  ga: 'が',
  ni: 'に',
  de: 'で',
  e: 'へ',
  no: 'の',
  to: 'と',
  mo: 'も',
  ka: 'か',
  kara: 'から',
  made: 'まで'
};

const CLOZE_BLANK = '＿＿';

function countOccurrences(haystack: string, needle: string): number {
  return haystack.split(needle).length - 1;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.。!?！？、，,]/g, '');
}

function vocabWord(item: { kana: string; kanji?: string }): string {
  return item.kanji ?? item.kana;
}

function buildOptions(
  correctLabel: string,
  ja: boolean,
  pool: string[]
): { options: QuizOption[]; correctId: string } {
  const distractors = shuffle(
    Array.from(new Set(pool.filter((label) => label !== correctLabel)))
  ).slice(0, OPTION_COUNT - 1);

  const labels = shuffle([correctLabel, ...distractors]);
  const options = labels.map((label, index) => ({ id: `opt-${index}`, label, ja }));
  const correctId = options.find((option) => option.label === correctLabel)!.id;

  return { options, correctId };
}

type CoursePools = {
  meanings: string[];
  words: string[];
  exampleMeanings: string[];
  patternTitles: string[];
};

function buildCoursePools(course: Course, locale: Locale): CoursePools {
  const meanings: string[] = [];
  const words: string[] = [];
  const exampleMeanings: string[] = [];
  const patternTitles: string[] = [];

  for (const lesson of course.lessons) {
    for (const item of lesson.vocab) {
      meanings.push(item.meaning[locale]);
      words.push(vocabWord(item));
    }

    for (const point of lesson.grammar) {
      patternTitles.push(point.title[locale]);

      for (const example of point.examples) {
        exampleMeanings.push(example.meaning[locale]);
      }
    }
  }

  return { meanings, words, exampleMeanings, patternTitles };
}

function buildClozeQuestion(
  jp: string,
  romaji: string,
  meaning: string,
  id: string
): InputQuestion | null {
  const particles = romaji
    .split(' ')
    .map((token) => normalizeAnswer(token))
    .filter((token) => PARTICLES.has(token));

  if (particles.length === 0) {
    return null;
  }

  // Blank the particle directly in the Japanese sentence, but only when its kana occurs
  // exactly once so the blank is unambiguous. Otherwise fall back to a choice question.
  for (const particle of shuffle(Array.from(new Set(particles)))) {
    const kana = PARTICLE_KANA[particle];

    if (!kana || countOccurrences(jp, kana) !== 1) {
      continue;
    }

    return {
      format: 'input',
      id,
      kind: 'grammar-cloze',
      promptPrimary: jp.replace(kana, CLOZE_BLANK),
      promptSecondary: meaning,
      promptJa: true,
      accepted: [kana, particle, ...(PARTICLE_ALTERNATES[particle] ?? [])],
      answer: kana
    };
  }

  return null;
}

export function buildLessonQuiz(course: Course, lesson: Lesson, locale: Locale): QuizQuestion[] {
  const pools = buildCoursePools(course, locale);
  const candidates: QuizQuestion[] = [];

  lesson.vocab.forEach((item, index) => {
    const word = vocabWord(item);
    const meaning = item.meaning[locale];

    if (index % 2 === 0) {
      const { options, correctId } = buildOptions(meaning, false, pools.meanings);
      candidates.push({
        format: 'choice',
        id: `vocab-meaning-${index}`,
        kind: 'vocab-meaning',
        promptPrimary: word,
        promptJa: true,
        options,
        correctId
      });
    } else {
      const { options, correctId } = buildOptions(word, true, pools.words);
      candidates.push({
        format: 'choice',
        id: `vocab-word-${index}`,
        kind: 'vocab-word',
        promptPrimary: meaning,
        promptJa: false,
        options,
        correctId
      });
    }
  });

  lesson.grammar.forEach((point, pointIndex) => {
    const { options: patternOptions, correctId: patternCorrect } = buildOptions(
      point.title[locale],
      false,
      pools.patternTitles
    );
    candidates.push({
      format: 'choice',
      id: `grammar-pattern-${pointIndex}`,
      kind: 'grammar-pattern',
      promptPrimary: point.pattern,
      promptJa: true,
      options: patternOptions,
      correctId: patternCorrect
    });

    point.examples.forEach((example, exampleIndex) => {
      const cloze =
        exampleIndex % 2 === 0
          ? buildClozeQuestion(
              example.jp,
              example.romaji,
              example.meaning[locale],
              `grammar-cloze-${pointIndex}-${exampleIndex}`
            )
          : null;

      if (cloze) {
        candidates.push(cloze);

        return;
      }

      const { options, correctId } = buildOptions(
        example.meaning[locale],
        false,
        pools.exampleMeanings
      );
      candidates.push({
        format: 'choice',
        id: `grammar-translate-${pointIndex}-${exampleIndex}`,
        kind: 'grammar-translate',
        promptPrimary: example.jp,
        promptJa: true,
        options,
        correctId
      });
    });
  });

  return shuffle(candidates).slice(0, Math.min(QUESTION_LIMIT, candidates.length));
}
