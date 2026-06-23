import { n5Lessons, type N5Lesson } from '@/constants/n5-course.ts'
import type { Locale } from '@/i18n/translations.ts'

export type QuestionKind =
  | 'vocab-meaning'
  | 'vocab-word'
  | 'grammar-translate'
  | 'grammar-pattern'
  | 'grammar-cloze'

export type QuizOption = {
  id: string
  label: string
  ja: boolean
}

export type ChoiceQuestion = {
  format: 'choice'
  id: string
  kind: Exclude<QuestionKind, 'grammar-cloze'>
  promptPrimary: string
  promptSecondary?: string
  promptJa: boolean
  options: QuizOption[]
  correctId: string
}

export type InputQuestion = {
  format: 'input'
  id: string
  kind: 'grammar-cloze'
  promptPrimary: string
  promptSecondary?: string
  promptJa: boolean
  accepted: string[]
  answer: string
}

export type QuizQuestion = ChoiceQuestion | InputQuestion

const QUESTION_LIMIT = 12
const OPTION_COUNT = 4

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
  'made',
])

const PARTICLE_ALTERNATES: Record<string, string[]> = {
  o: ['wo'],
  e: ['he'],
  wa: ['ha'],
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]]
  }

  return copy
}

export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.。!?！？、，,]/g, '')
}

function vocabWord(item: { kana: string; kanji?: string }): string {
  return item.kanji ?? item.kana
}

function buildOptions(
  correctLabel: string,
  ja: boolean,
  pool: string[],
): { options: QuizOption[]; correctId: string } {
  const distractors = shuffle(
    Array.from(new Set(pool.filter((label) => label !== correctLabel))),
  ).slice(0, OPTION_COUNT - 1)

  const labels = shuffle([correctLabel, ...distractors])
  const options = labels.map((label, index) => ({ id: `opt-${index}`, label, ja }))
  const correctId = options.find((option) => option.label === correctLabel)!.id

  return { options, correctId }
}

type CoursePools = {
  meanings: string[]
  words: string[]
  exampleMeanings: string[]
  patternTitles: string[]
}

function buildCoursePools(locale: Locale): CoursePools {
  const meanings: string[] = []
  const words: string[] = []
  const exampleMeanings: string[] = []
  const patternTitles: string[] = []

  for (const lesson of n5Lessons) {
    for (const item of lesson.vocab) {
      meanings.push(item.meaning[locale])
      words.push(vocabWord(item))
    }

    for (const point of lesson.grammar) {
      patternTitles.push(point.title[locale])

      for (const example of point.examples) {
        exampleMeanings.push(example.meaning[locale])
      }
    }
  }

  return { meanings, words, exampleMeanings, patternTitles }
}

function trailingPunctuation(token: string): string {
  return token.match(/[.。!?！？、，,]+$/)?.[0] ?? ''
}

function buildClozeQuestion(romaji: string, meaning: string, id: string): InputQuestion | null {
  const tokens = romaji.split(' ')
  const particleIndexes = tokens
    .map((token, index) => ({ index, particle: normalizeAnswer(token) }))
    .filter((entry) => PARTICLES.has(entry.particle))

  if (particleIndexes.length === 0) {
    return null
  }

  const chosen = particleIndexes[Math.floor(Math.random() * particleIndexes.length)]
  const blanked = tokens
    .map((token, index) => (index === chosen.index ? `____${trailingPunctuation(token)}` : token))
    .join(' ')

  return {
    format: 'input',
    id,
    kind: 'grammar-cloze',
    promptPrimary: blanked,
    promptSecondary: meaning,
    promptJa: false,
    accepted: [chosen.particle, ...(PARTICLE_ALTERNATES[chosen.particle] ?? [])],
    answer: chosen.particle,
  }
}

export function buildLessonQuiz(lesson: N5Lesson, locale: Locale): QuizQuestion[] {
  const pools = buildCoursePools(locale)
  const candidates: QuizQuestion[] = []

  lesson.vocab.forEach((item, index) => {
    const word = vocabWord(item)
    const meaning = item.meaning[locale]

    if (index % 2 === 0) {
      const { options, correctId } = buildOptions(meaning, false, pools.meanings)
      candidates.push({
        format: 'choice',
        id: `vocab-meaning-${index}`,
        kind: 'vocab-meaning',
        promptPrimary: word,
        promptSecondary: item.romaji,
        promptJa: true,
        options,
        correctId,
      })
    } else {
      const { options, correctId } = buildOptions(word, true, pools.words)
      candidates.push({
        format: 'choice',
        id: `vocab-word-${index}`,
        kind: 'vocab-word',
        promptPrimary: meaning,
        promptJa: false,
        options,
        correctId,
      })
    }
  })

  lesson.grammar.forEach((point, pointIndex) => {
    const { options: patternOptions, correctId: patternCorrect } = buildOptions(
      point.title[locale],
      false,
      pools.patternTitles,
    )
    candidates.push({
      format: 'choice',
      id: `grammar-pattern-${pointIndex}`,
      kind: 'grammar-pattern',
      promptPrimary: point.pattern,
      promptJa: true,
      options: patternOptions,
      correctId: patternCorrect,
    })

    point.examples.forEach((example, exampleIndex) => {
      const cloze =
        exampleIndex % 2 === 0
          ? buildClozeQuestion(
              example.romaji,
              example.meaning[locale],
              `grammar-cloze-${pointIndex}-${exampleIndex}`,
            )
          : null

      if (cloze) {
        candidates.push(cloze)

        return
      }

      const { options, correctId } = buildOptions(
        example.meaning[locale],
        false,
        pools.exampleMeanings,
      )
      candidates.push({
        format: 'choice',
        id: `grammar-translate-${pointIndex}-${exampleIndex}`,
        kind: 'grammar-translate',
        promptPrimary: example.jp,
        promptSecondary: example.romaji,
        promptJa: true,
        options,
        correctId,
      })
    })
  })

  return shuffle(candidates).slice(0, Math.min(QUESTION_LIMIT, candidates.length))
}
