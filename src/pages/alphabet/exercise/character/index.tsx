import { type SyntheticEvent } from 'react';
import { Stack, Tab, Tabs } from '@mui/material';
import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx';
import { ExerciseQuiz } from '@/pages/alphabet/exercise/exercise-quiz-panel.tsx';
import { ExerciseScopeControls } from '@/pages/alphabet/exercise/exercise-scope-controls.tsx';
import { ExerciseScopeHint } from '@/pages/alphabet/exercise/exercise-scope-hint.tsx';
import { ExerciseScriptSelect } from '@/pages/alphabet/exercise/exercise-script-select.tsx';
import { getScriptLabel } from '@/pages/alphabet/exercise/exercise-script-label.ts';
import type { CharacterDirection } from '@/pages/alphabet/exercise/exercise-preferences.ts';
import { useCharacterExercisePreferences } from '@/pages/alphabet/exercise/use-exercise-preferences.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function CharacterExercisePage() {
  const { t } = useTranslation();
  const { script, handleScriptChange, direction, setDirection, scopeState } =
    useCharacterExercisePreferences();
  const scriptLabel = getScriptLabel(script, t);

  const handleDirectionChange = (_event: SyntheticEvent, value: CharacterDirection) => {
    setDirection(value);
  };

  return (
    <ExercisePageLayout
      title={t('exercise.chooseCharacter')}
      subtitle={t('exercise.characterDescription')}
      note={
        <Stack spacing={1.5}>
          <ExerciseScopeHint />
          <Tabs value={direction} onChange={handleDirectionChange} variant="fullWidth">
            <Tab value="character" label={t('exercise.characterTabChooseKana')} />
            <Tab value="kana-romaji" label={t('exercise.characterTabChooseRomaji')} />
          </Tabs>
        </Stack>
      }
      controls={
        <>
          <ExerciseScriptSelect script={script} onChange={handleScriptChange} />
          <ExerciseScopeControls {...scopeState} />
        </>
      }
    >
      <ExerciseQuiz
        key={`${direction}:${script}:${scopeState.scope}`}
        mode={direction}
        script={script}
        scope={scopeState.scope}
        scriptLabel={scriptLabel}
      />
    </ExercisePageLayout>
  );
}

export default CharacterExercisePage;
