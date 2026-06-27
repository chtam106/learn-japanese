import type { ExerciseOverviewScope, ExerciseRowScope } from '@/constants/alphabet-charts.ts';
import { STORAGE_PREFIX } from '@/constants/site.ts';
import type {
  ExerciseScript,
  Script,
  ScriptPairDirection
} from '@/pages/alphabet/exercise/exercise-quiz.ts';
import type { SentenceType } from '@/pages/alphabet/exercise/sentence/sentences.ts';

/**
 * Every alphabet exercise persists its own selections under its own key so the
 * choices made in one exercise never bleed into another. Keys are UPPERCASE
 * with underscores, derived from the shared storage prefix.
 */
const EXERCISE_KEY_PREFIX = `${STORAGE_PREFIX.toUpperCase()}_EXERCISE`;

export const EXERCISE_STORAGE_KEYS = {
  romaji: `${EXERCISE_KEY_PREFIX}_ROMAJI`,
  character: `${EXERCISE_KEY_PREFIX}_CHARACTER`,
  listen: `${EXERCISE_KEY_PREFIX}_LISTEN`,
  scriptPair: `${EXERCISE_KEY_PREFIX}_SCRIPT_PAIR`,
  writing: `${EXERCISE_KEY_PREFIX}_WRITING`,
  sentence: `${EXERCISE_KEY_PREFIX}_SENTENCE`
} as const;

export type CharacterDirection = 'character' | 'kana-romaji';
export type WritingMode = 'row' | 'romaji';
/** A writing-exercise row selection, shared across both modes ("All" or an index). */
export type WritingRow = number | 'all';

export type ScopeSelection = {
  overviewScope: ExerciseOverviewScope;
  rowFrom: ExerciseRowScope | '';
  rowTo: ExerciseRowScope | '';
};

export type ScriptScopePreferences = ScopeSelection & {
  script: ExerciseScript;
};

export type CharacterPreferences = ScriptScopePreferences & {
  direction: CharacterDirection;
};

export type ScriptPairPreferences = ScopeSelection & {
  pairDirection: ScriptPairDirection;
};

export type WritingPreferences = {
  mode: WritingMode;
  script: Script;
  row: WritingRow;
};

export type SentencePreferences = {
  type: SentenceType;
};

const OVERVIEW_SCOPES = new Set<ExerciseOverviewScope>([
  'all',
  'seion',
  'dakuten',
  'handakuten',
  'yoon'
]);

const SCRIPTS = new Set<ExerciseScript>(['hiragana', 'katakana', 'all']);

const WRITING_SCRIPTS = new Set<Script>(['hiragana', 'katakana']);

const PAIR_DIRECTIONS = new Set<ScriptPairDirection>([
  'hiragana-to-katakana',
  'katakana-to-hiragana',
  'mixed'
]);

const CHARACTER_DIRECTIONS = new Set<CharacterDirection>(['character', 'kana-romaji']);

const WRITING_MODES = new Set<WritingMode>(['row', 'romaji']);

const SENTENCE_TYPES = new Set<SentenceType>(['hiragana', 'katakana', 'mixed']);

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === 'object' && value !== null ? (value as Record<string, unknown>) : {};
}

function pickScript(value: unknown, fallback: ExerciseScript): ExerciseScript {
  return SCRIPTS.has(value as ExerciseScript) ? (value as ExerciseScript) : fallback;
}

function pickOverviewScope(value: unknown): ExerciseOverviewScope {
  return OVERVIEW_SCOPES.has(value as ExerciseOverviewScope)
    ? (value as ExerciseOverviewScope)
    : 'all';
}

function pickRowScope(value: unknown): ExerciseRowScope | '' {
  return typeof value === 'string' ? (value as ExerciseRowScope | '') : '';
}

function pickScope(record: Record<string, unknown>): ScopeSelection {
  return {
    overviewScope: pickOverviewScope(record.overviewScope),
    rowFrom: pickRowScope(record.rowFrom),
    rowTo: pickRowScope(record.rowTo)
  };
}

export const DEFAULT_SCRIPT_SCOPE_PREFERENCES: ScriptScopePreferences = {
  script: 'all',
  overviewScope: 'all',
  rowFrom: '',
  rowTo: ''
};

export const DEFAULT_CHARACTER_PREFERENCES: CharacterPreferences = {
  ...DEFAULT_SCRIPT_SCOPE_PREFERENCES,
  direction: 'character'
};

export const DEFAULT_SCRIPT_PAIR_PREFERENCES: ScriptPairPreferences = {
  pairDirection: 'hiragana-to-katakana',
  overviewScope: 'all',
  rowFrom: '',
  rowTo: ''
};

export const DEFAULT_WRITING_PREFERENCES: WritingPreferences = {
  mode: 'row',
  script: 'hiragana',
  row: 'all'
};

export const DEFAULT_SENTENCE_PREFERENCES: SentencePreferences = {
  type: 'hiragana'
};

export function sanitizeScriptScopePreferences(value: unknown): ScriptScopePreferences {
  const record = asRecord(value);
  return {
    script: pickScript(record.script, DEFAULT_SCRIPT_SCOPE_PREFERENCES.script),
    ...pickScope(record)
  };
}

export function sanitizeCharacterPreferences(value: unknown): CharacterPreferences {
  const record = asRecord(value);
  return {
    ...sanitizeScriptScopePreferences(value),
    direction: CHARACTER_DIRECTIONS.has(record.direction as CharacterDirection)
      ? (record.direction as CharacterDirection)
      : DEFAULT_CHARACTER_PREFERENCES.direction
  };
}

export function sanitizeScriptPairPreferences(value: unknown): ScriptPairPreferences {
  const record = asRecord(value);
  return {
    pairDirection: PAIR_DIRECTIONS.has(record.pairDirection as ScriptPairDirection)
      ? (record.pairDirection as ScriptPairDirection)
      : DEFAULT_SCRIPT_PAIR_PREFERENCES.pairDirection,
    ...pickScope(record)
  };
}

function isWritingRow(value: unknown): value is WritingRow {
  return value === 'all' || (typeof value === 'number' && Number.isInteger(value) && value >= 0);
}

export function sanitizeWritingPreferences(value: unknown): WritingPreferences {
  const record = asRecord(value);
  return {
    mode: WRITING_MODES.has(record.mode as WritingMode)
      ? (record.mode as WritingMode)
      : DEFAULT_WRITING_PREFERENCES.mode,
    script: WRITING_SCRIPTS.has(record.script as Script)
      ? (record.script as Script)
      : DEFAULT_WRITING_PREFERENCES.script,
    row: isWritingRow(record.row) ? record.row : DEFAULT_WRITING_PREFERENCES.row
  };
}

export function sanitizeSentencePreferences(value: unknown): SentencePreferences {
  const record = asRecord(value);
  return {
    type: SENTENCE_TYPES.has(record.type as SentenceType)
      ? (record.type as SentenceType)
      : DEFAULT_SENTENCE_PREFERENCES.type
  };
}
