import { type MouseEvent } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx';
import { ExerciseQuiz } from '@/pages/alphabet/exercise/exercise-quiz-panel.tsx';
import { ExerciseScopeControls } from '@/pages/alphabet/exercise/exercise-scope-controls.tsx';
import { ExerciseScopeHint } from '@/pages/alphabet/exercise/exercise-scope-hint.tsx';
import { ExerciseScriptSelect } from '@/pages/alphabet/exercise/exercise-script-select.tsx';
import { compactToggleSx } from '@/pages/alphabet/exercise/control-styles.ts';
import { getScriptLabel } from '@/pages/alphabet/exercise/exercise-script-label.ts';
import type { CharacterDirection } from '@/pages/alphabet/exercise/exercise-preferences.ts';
import { useCharacterExercisePreferences } from '@/pages/alphabet/exercise/use-exercise-preferences.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function CharacterExercisePage() {
  const { t } = useTranslation();
  const { script, setScript, direction, setDirection, scopeState } =
    useCharacterExercisePreferences();
  const scriptLabel = getScriptLabel(script, t);

  const handleDirectionChange = (
    _event: MouseEvent<HTMLElement>,
    value: CharacterDirection | null
  ) => {
    if (value) {
      setDirection(value);
    }
  };

  return (
    <ExercisePageLayout
      title={t('exercise.chooseCharacter')}
      subtitle={t('exercise.characterDescription')}
      note={<ExerciseScopeHint />}
      controls={
        <>
          <ToggleButtonGroup
            exclusive
            fullWidth
            color="primary"
            value={direction}
            onChange={handleDirectionChange}
            aria-label={t('exercise.chooseCharacter')}
            sx={[compactToggleSx, { gridColumn: { xs: '1 / -1', lg: 'span 2' } }]}
          >
            <ToggleButton value="kana-romaji">
              {t('exercise.characterTabChooseRomaji')}
            </ToggleButton>
            <ToggleButton value="character">{t('exercise.characterTabChooseKana')}</ToggleButton>
          </ToggleButtonGroup>
          <ExerciseScriptSelect script={script} onChange={setScript} />
          <ExerciseScopeControls {...scopeState} overviewFullWidth />
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
