import { n5Lessons, type N5Lesson } from '@/constants/n5-course.ts'
import type { Locale } from '@/i18n/translations.ts'

export type ListeningOption = {
  id: string
  label: string
  ja: boolean
}

export type ListeningKind = 'word-meaning' | 'word-script' | 'sentence-meaning'

export type ListeningReveal = {
  jp: string
  romaji: string
  meaning: string
}

export type ListeningQuestion = {
  id: string
  kind: ListeningKind
  audioText: string
  optionsJa: boolean
  options: ListeningOption[]
  correctId: string
  reveal: ListeningReveal
}

const QUESTION_LIMIT = 10
const OPTION_COUNT = 4

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]]
  }

  return copy
}

function vocabWord(item: { kana: string; kanji?: string }): string {
  return item.kanji ?? item.kana
}

function buildOptions(
  correctLabel: string,
  ja: boolean,
  pool: string[],
): { options: ListeningOption[]; correctId: string } {
  const distractors = shuffle(
    Array.from(new Set(pool.filter((label) => label !== correctLabel))),
  ).slice(0, OPTION_COUNT - 1)

  const labels = shuffle([correctLabel, ...distractors])
  const options = labels.map((label, index) => ({ id: `opt-${index}`, label, ja }))
  const correctId = options.find((option) => option.label === correctLabel)!.id

  return { options, correctId }
}

type ListeningPools = {
  meanings: string[]
  words: string[]
  sentenceMeanings: string[]
}

function buildPools(locale: Locale): ListeningPools {
  const meanings: string[] = []
  const words: string[] = []
  const sentenceMeanings: string[] = []

  for (const lesson of n5Lessons) {
    for (const item of lesson.vocab) {
      meanings.push(item.meaning[locale])
      words.push(vocabWord(item))
    }

    for (const point of lesson.grammar) {
      for (const example of point.examples) {
        sentenceMeanings.push(example.meaning[locale])
      }
    }
  }

  return { meanings, words, sentenceMeanings }
}

export function buildLessonListening(lesson: N5Lesson, locale: Locale): ListeningQuestion[] {
  const pools = buildPools(locale)
  const candidates: ListeningQuestion[] = []

  lesson.vocab.forEach((item, index) => {
    const word = vocabWord(item)
    const meaning = item.meaning[locale]
    const reveal: ListeningReveal = { jp: word, romaji: item.romaji, meaning }

    if (index % 2 === 0) {
      const { options, correctId } = buildOptions(meaning, false, pools.meanings)
      candidates.push({
        id: `listen-word-meaning-${index}`,
        kind: 'word-meaning',
        audioText: item.kana,
        optionsJa: false,
        options,
        correctId,
        reveal,
      })
    } else {
      const { options, correctId } = buildOptions(word, true, pools.words)
      candidates.push({
        id: `listen-word-script-${index}`,
        kind: 'word-script',
        audioText: item.kana,
        optionsJa: true,
        options,
        correctId,
        reveal,
      })
    }
  })

  lesson.grammar.forEach((point, pointIndex) => {
    point.examples.forEach((example, exampleIndex) => {
      const { options, correctId } = buildOptions(
        example.meaning[locale],
        false,
        pools.sentenceMeanings,
      )
      candidates.push({
        id: `listen-sentence-${pointIndex}-${exampleIndex}`,
        kind: 'sentence-meaning',
        audioText: example.jp,
        optionsJa: false,
        options,
        correctId,
        reveal: { jp: example.jp, romaji: example.romaji, meaning: example.meaning[locale] },
      })
    })
  })

  return shuffle(candidates).slice(0, Math.min(QUESTION_LIMIT, candidates.length))
}
