import { useCallback } from 'react';
import type {
  ExerciseScript,
  Script,
  ScriptPairDirection
} from '@/pages/alphabet/exercise/exercise-quiz.ts';
import type { SentenceType } from '@/pages/alphabet/exercise/sentence/sentences.ts';
import {
  DEFAULT_CHARACTER_PREFERENCES,
  DEFAULT_SCRIPT_PAIR_PREFERENCES,
  DEFAULT_SCRIPT_SCOPE_PREFERENCES,
  DEFAULT_SENTENCE_PREFERENCES,
  DEFAULT_WRITING_PREFERENCES,
  EXERCISE_STORAGE_KEYS,
  sanitizeCharacterPreferences,
  sanitizeScriptPairPreferences,
  sanitizeScriptScopePreferences,
  sanitizeSentencePreferences,
  sanitizeWritingPreferences,
  type CharacterDirection,
  type ScopeSelection,
  type WritingMode,
  type WritingRow
} from '@/pages/alphabet/exercise/exercise-preferences.ts';
import { useExerciseScope } from '@/pages/alphabet/exercise/use-exercise-scope.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';

type ScriptScopeExercise = 'romaji' | 'listen';

function useScriptScopeExercise(exercise: ScriptScopeExercise) {
  const [prefs, setPrefs] = usePersistentState(
    EXERCISE_STORAGE_KEYS[exercise],
    DEFAULT_SCRIPT_SCOPE_PREFERENCES,
    sanitizeScriptScopePreferences
  );

  const handleScopeChange = useCallback(
    (next: ScopeSelection) => setPrefs((previous) => ({ ...previous, ...next })),
    [setPrefs]
  );

  const scopeState = useExerciseScope(prefs, handleScopeChange);

  const setScript = useCallback(
    (script: ExerciseScript) => setPrefs((previous) => ({ ...previous, script })),
    [setPrefs]
  );

  return { script: prefs.script, setScript, scopeState };
}

export function useRomajiExercisePreferences() {
  return useScriptScopeExercise('romaji');
}

export function useListenExercisePreferences() {
  return useScriptScopeExercise('listen');
}

export function useCharacterExercisePreferences() {
  const [prefs, setPrefs] = usePersistentState(
    EXERCISE_STORAGE_KEYS.character,
    DEFAULT_CHARACTER_PREFERENCES,
    sanitizeCharacterPreferences
  );

  const handleScopeChange = useCallback(
    (next: ScopeSelection) => setPrefs((previous) => ({ ...previous, ...next })),
    [setPrefs]
  );

  const scopeState = useExerciseScope(prefs, handleScopeChange);

  const setScript = useCallback(
    (script: ExerciseScript) => setPrefs((previous) => ({ ...previous, script })),
    [setPrefs]
  );

  const setDirection = useCallback(
    (direction: CharacterDirection) => setPrefs((previous) => ({ ...previous, direction })),
    [setPrefs]
  );

  return {
    script: prefs.script,
    setScript,
    direction: prefs.direction,
    setDirection,
    scopeState
  };
}

export function useScriptPairExercisePreferences() {
  const [prefs, setPrefs] = usePersistentState(
    EXERCISE_STORAGE_KEYS.scriptPair,
    DEFAULT_SCRIPT_PAIR_PREFERENCES,
    sanitizeScriptPairPreferences
  );

  const handleScopeChange = useCallback(
    (next: ScopeSelection) => setPrefs((previous) => ({ ...previous, ...next })),
    [setPrefs]
  );

  const scopeState = useExerciseScope(prefs, handleScopeChange);

  const setPairDirection = useCallback(
    (pairDirection: ScriptPairDirection) =>
      setPrefs((previous) => ({ ...previous, pairDirection })),
    [setPrefs]
  );

  return { pairDirection: prefs.pairDirection, setPairDirection, scopeState };
}

export function useWritingExercisePreferences() {
  const [prefs, setPrefs] = usePersistentState(
    EXERCISE_STORAGE_KEYS.writing,
    DEFAULT_WRITING_PREFERENCES,
    sanitizeWritingPreferences
  );

  const setMode = useCallback(
    (mode: WritingMode) => setPrefs((previous) => ({ ...previous, mode })),
    [setPrefs]
  );

  const setScript = useCallback(
    (script: Script) => setPrefs((previous) => ({ ...previous, script })),
    [setPrefs]
  );

  const setRow = useCallback(
    (row: WritingRow) => setPrefs((previous) => ({ ...previous, row })),
    [setPrefs]
  );

  return {
    mode: prefs.mode,
    setMode,
    script: prefs.script,
    setScript,
    row: prefs.row,
    setRow
  };
}

export function useSentenceExercisePreferences() {
  const [prefs, setPrefs] = usePersistentState(
    EXERCISE_STORAGE_KEYS.sentence,
    DEFAULT_SENTENCE_PREFERENCES,
    sanitizeSentencePreferences
  );

  const setType = useCallback((type: SentenceType) => setPrefs({ type }), [setPrefs]);

  return { type: prefs.type, setType };
}
