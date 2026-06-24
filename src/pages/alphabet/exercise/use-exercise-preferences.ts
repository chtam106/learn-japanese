import { useCallback, useState } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select';
import type {
  ExerciseScript,
  ScriptPairDirection
} from '@/pages/alphabet/exercise/exercise-quiz.ts';
import {
  persistExercisePreferences,
  readStoredExercisePreferences
} from '@/pages/alphabet/exercise/exercise-preferences.ts';

export function useExerciseScript() {
  const [script, setScriptState] = useState<ExerciseScript>(
    () => readStoredExercisePreferences().script
  );

  const setScript = useCallback((next: ExerciseScript) => {
    setScriptState(next);
    persistExercisePreferences({ script: next });
  }, []);

  const handleScriptChange = useCallback(
    (event: SelectChangeEvent<ExerciseScript>) => {
      setScript(event.target.value);
    },
    [setScript]
  );

  return { script, handleScriptChange };
}

export function useExercisePairDirection() {
  const [pairDirection, setPairDirectionState] = useState<ScriptPairDirection>(
    () => readStoredExercisePreferences().pairDirection
  );

  const setPairDirection = useCallback((next: ScriptPairDirection) => {
    setPairDirectionState(next);
    persistExercisePreferences({ pairDirection: next });
  }, []);

  const handlePairDirectionChange = useCallback(
    (event: SelectChangeEvent<ScriptPairDirection>) => {
      setPairDirection(event.target.value);
    },
    [setPairDirection]
  );

  return { pairDirection, handlePairDirectionChange };
}
