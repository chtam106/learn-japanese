import type { Locale } from '@/i18n/translations.ts';

export type Bilingual = Record<Locale, string>;

export type CourseLevel = 'n5' | 'n4' | 'n3' | 'n2' | 'n1' | 'frontend';
export type LessonTrack = 'core' | 'frontend';

export type VocabItem = {
  kana: string;
  kanji?: string;
  romaji: string;
  meaning: Bilingual;
};

export type GrammarExample = {
  jp: string;
  romaji: string;
  meaning: Bilingual;
};

export type GrammarPoint = {
  pattern: string;
  title: Bilingual;
  explanation: Bilingual;
  examples: GrammarExample[];
};

export type ReadingLine = {
  jp: string;
  romaji: string;
  meaning: Bilingual;
};

export type ReadingChoice = {
  id: string;
  label: Bilingual;
};

export type ReadingQuestion = {
  id: string;
  question: Bilingual;
  choices: ReadingChoice[];
  correctId: string;
};

export type ReadingPassage = {
  id: string;
  title: Bilingual;
  lines: ReadingLine[];
  questions: ReadingQuestion[];
};

export type Lesson = {
  id: string;
  number: number;
  track?: LessonTrack;
  title: Bilingual;
  focus: Bilingual;
  vocab: VocabItem[];
  grammar: GrammarPoint[];
  reading?: ReadingPassage[];
};

/** Optional thematic grouping of a course's lessons, by inclusive lesson-number range. */
export type CourseModule = {
  title: Bilingual;
  from: number;
  to: number;
};

export type Course = {
  level: CourseLevel;
  code: string;
  name: Bilingual;
  subtitle: Bilingual;
  intro: Bilingual;
  seoTitle: Bilingual;
  seoDescription: Bilingual;
  lessons: Lesson[];
  modules?: CourseModule[];
};

/**
 * Renumbers a composed list of lessons sequentially (1..N), so course content can be
 * split across part files and reordered freely without worrying about `id`/`number`.
 */
export function withSequentialNumbers(lessons: Lesson[]): Lesson[] {
  return lessons.map((lesson, index) => ({
    ...lesson,
    number: index + 1,
    id: `lesson-${index + 1}`
  }));
}
