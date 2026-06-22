import type { ExerciseScript } from '@/pages/alphabet/exercise/exercise-quiz.ts'

export function getScriptLabel(script: ExerciseScript, t: (key: string) => string) {
  if (script === 'all') {
    return t('exercise.scriptBoth')
  }

  return t(script === 'hiragana' ? 'nav.hiragana' : 'nav.katakana')
}
