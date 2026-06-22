import type { ExerciseOverviewScope, ExerciseRowScope } from '@/constants/alphabet-charts.ts'
import type {
  ExerciseScript,
  ScriptPairDirection,
} from '@/pages/alphabet/exercise/exercise-quiz.ts'

export const EXERCISE_PREFS_STORAGE_KEY = 'langwish.exercise-preferences'

export type StoredExercisePreferences = {
  script: ExerciseScript
  overviewScope: ExerciseOverviewScope
  rowScope: ExerciseRowScope | ''
  pairDirection: ScriptPairDirection
}

const DEFAULTS: StoredExercisePreferences = {
  script: 'all',
  overviewScope: 'all',
  rowScope: '',
  pairDirection: 'hiragana-to-katakana',
}

const OVERVIEW_SCOPES = new Set<ExerciseOverviewScope>([
  'all',
  'seion',
  'dakuten',
  'handakuten',
  'yoon',
])

const SCRIPTS = new Set<ExerciseScript>(['hiragana', 'katakana', 'all'])

const PAIR_DIRECTIONS = new Set<ScriptPairDirection>([
  'hiragana-to-katakana',
  'katakana-to-hiragana',
  'mixed',
])

function isOverviewScope(value: unknown): value is ExerciseOverviewScope {
  return typeof value === 'string' && OVERVIEW_SCOPES.has(value as ExerciseOverviewScope)
}

function isScript(value: unknown): value is ExerciseScript {
  return typeof value === 'string' && SCRIPTS.has(value as ExerciseScript)
}

function isPairDirection(value: unknown): value is ScriptPairDirection {
  return typeof value === 'string' && PAIR_DIRECTIONS.has(value as ScriptPairDirection)
}

function isRowScope(value: unknown): value is ExerciseRowScope | '' {
  return typeof value === 'string'
}

export function readStoredExercisePreferences(): StoredExercisePreferences {
  if (typeof window === 'undefined') {
    return DEFAULTS
  }

  try {
    const raw = window.localStorage.getItem(EXERCISE_PREFS_STORAGE_KEY)

    if (!raw) {
      return DEFAULTS
    }

    const parsed = JSON.parse(raw) as Partial<StoredExercisePreferences>

    return {
      script: isScript(parsed.script) ? parsed.script : DEFAULTS.script,
      overviewScope: isOverviewScope(parsed.overviewScope)
        ? parsed.overviewScope
        : DEFAULTS.overviewScope,
      rowScope: isRowScope(parsed.rowScope) ? parsed.rowScope : DEFAULTS.rowScope,
      pairDirection: isPairDirection(parsed.pairDirection)
        ? parsed.pairDirection
        : DEFAULTS.pairDirection,
    }
  } catch {
    return DEFAULTS
  }
}

export function persistExercisePreferences(partial: Partial<StoredExercisePreferences>) {
  const next = { ...readStoredExercisePreferences(), ...partial }
  window.localStorage.setItem(EXERCISE_PREFS_STORAGE_KEY, JSON.stringify(next))
}
