import {
  getAlphabetItems,
  type AlphabetCell,
  type ExerciseScope,
} from '@/constants/alphabet-charts.ts'

export type { ExerciseScope }

export type Script = 'hiragana' | 'katakana'
export type ExerciseScript = Script | 'all'
export type ExerciseMode = 'romaji' | 'character' | 'listen' | 'script-pair'
export type ScriptPairDirection = 'hiragana-to-katakana' | 'katakana-to-hiragana' | 'mixed'
export type ResolvedScriptPairDirection = 'hiragana-to-katakana' | 'katakana-to-hiragana'

export type QuizQuestion = {
  mode: ExerciseMode
  correctItem: AlphabetCell
  optionItems: AlphabetCell[]
  correctAnswers: string[]
  promptItem?: AlphabetCell
  pairDirection?: ResolvedScriptPairDirection
}

export type QuizSession = {
  next: () => QuizQuestion
  remaining: number
  total: number
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]]
  }

  return copy
}

function findScriptPair(allItems: AlphabetCell[], correctItem: AlphabetCell) {
  return allItems.find(
    (item) => item.romaji === correctItem.romaji && item.char !== correctItem.char,
  )
}

function pickOptionItems(
  allItems: AlphabetCell[],
  correctItem: AlphabetCell,
  includeScriptPair = false,
): AlphabetCell[] {
  const paired = includeScriptPair ? findScriptPair(allItems, correctItem) : undefined
  const otherItems = allItems.filter((item) => item.romaji !== correctItem.romaji)
  const distractorCount = paired ? Math.min(2, otherItems.length) : Math.min(3, otherItems.length)

  return shuffle([
    correctItem,
    ...(paired ? [paired] : []),
    ...shuffle(otherItems).slice(0, distractorCount),
  ])
}

function getCharacterCorrectAnswers(
  correctItem: AlphabetCell,
  allItems: AlphabetCell[],
  includeScriptPair: boolean,
) {
  const paired = includeScriptPair ? findScriptPair(allItems, correctItem) : undefined

  return paired ? [correctItem.char, paired.char] : [correctItem.char]
}

function resolvePairDirection(direction: ScriptPairDirection): ResolvedScriptPairDirection {
  if (direction === 'mixed') {
    return Math.random() < 0.5 ? 'hiragana-to-katakana' : 'katakana-to-hiragana'
  }

  return direction
}

function getAnswerScript(pairDirection: ResolvedScriptPairDirection): Script {
  return pairDirection === 'hiragana-to-katakana' ? 'katakana' : 'hiragana'
}

function getPromptScript(pairDirection: ResolvedScriptPairDirection): Script {
  return pairDirection === 'hiragana-to-katakana' ? 'hiragana' : 'katakana'
}

function getItemByRomaji(script: Script, scope: ExerciseScope, romaji: string) {
  return getAlphabetItems(script, scope).find((item) => item.romaji === romaji)
}

function buildQuestion(
  correctItem: AlphabetCell,
  allItems: AlphabetCell[],
  mode: ExerciseMode,
  script: ExerciseScript,
): QuizQuestion {
  const includeScriptPair = script === 'all' && (mode === 'character' || mode === 'listen')
  const optionItems = pickOptionItems(allItems, correctItem, includeScriptPair)

  if (mode === 'romaji') {
    return {
      mode,
      correctItem,
      optionItems,
      correctAnswers: [correctItem.romaji],
    }
  }

  return {
    mode,
    correctItem,
    optionItems,
    correctAnswers: getCharacterCorrectAnswers(correctItem, allItems, includeScriptPair),
  }
}

function buildScriptPairQuestion(
  promptRomaji: string,
  scope: ExerciseScope,
  pairDirection: ScriptPairDirection,
): QuizQuestion {
  const resolvedDirection = resolvePairDirection(pairDirection)
  const promptScript = getPromptScript(resolvedDirection)
  const answerScript = getAnswerScript(resolvedDirection)
  const promptItem = getItemByRomaji(promptScript, scope, promptRomaji)
  const correctItem = getItemByRomaji(answerScript, scope, promptRomaji)

  if (!promptItem || !correctItem) {
    throw new Error(`Missing script pair for romaji: ${promptRomaji}`)
  }

  const allAnswerItems = getAlphabetItems(answerScript, scope)

  return {
    mode: 'script-pair',
    promptItem,
    correctItem,
    pairDirection: resolvedDirection,
    optionItems: pickOptionItems(allAnswerItems, correctItem),
    correctAnswers: [correctItem.char],
  }
}

function getSessionItems(script: ExerciseScript, scope: ExerciseScope): AlphabetCell[] {
  if (script === 'all') {
    return [...getAlphabetItems('hiragana', scope), ...getAlphabetItems('katakana', scope)]
  }

  return getAlphabetItems(script, scope)
}

export function createQuizSession(
  script: ExerciseScript,
  mode: ExerciseMode,
  scope: ExerciseScope = 'all',
  pairDirection: ScriptPairDirection = 'hiragana-to-katakana',
): QuizSession {
  const allItems = getSessionItems(script, scope)
  let remaining = shuffle([...allItems])

  return {
    get remaining() {
      return remaining.length
    },
    total: allItems.length,
    next() {
      if (allItems.length === 0) {
        throw new Error(`No alphabet items for scope: ${scope}`)
      }

      if (remaining.length === 0) {
        remaining = shuffle([...allItems])
      }

      const correctItem = remaining.pop()!

      if (mode === 'script-pair') {
        return buildScriptPairQuestion(correctItem.romaji, scope, pairDirection)
      }

      return buildQuestion(correctItem, allItems, mode, script)
    },
  }
}

export function isQuizAnswerCorrect(question: QuizQuestion, answer: string) {
  return question.correctAnswers.includes(answer)
}

export function getOptionValue(item: AlphabetCell, mode: ExerciseMode) {
  return mode === 'romaji' ? item.romaji : item.char
}

export function usesCharacterOptions(mode: ExerciseMode) {
  return mode === 'character' || mode === 'listen' || mode === 'script-pair'
}
