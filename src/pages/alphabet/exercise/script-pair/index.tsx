import { type MouseEvent } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { ScriptPairDirection } from '@/pages/alphabet/exercise/exercise-quiz.ts';
import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx';
import { ExerciseQuiz } from '@/pages/alphabet/exercise/exercise-quiz-panel.tsx';
import { ExerciseScopeControls } from '@/pages/alphabet/exercise/exercise-scope-controls.tsx';
import { ExerciseScopeHint } from '@/pages/alphabet/exercise/exercise-scope-hint.tsx';
import { compactToggleSx } from '@/pages/alphabet/exercise/control-styles.ts';
import { useScriptPairExercisePreferences } from '@/pages/alphabet/exercise/use-exercise-preferences.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function ScriptPairExercisePage() {
  const { t } = useTranslation();
  const { pairDirection, setPairDirection, scopeState } = useScriptPairExercisePreferences();

  const handlePairDirectionChange = (
    _event: MouseEvent<HTMLElement>,
    value: ScriptPairDirection | null
  ) => {
    if (value) {
      setPairDirection(value);
    }
  };

  return (
    <ExercisePageLayout
      title={t('exercise.scriptPair')}
      subtitle={t('exercise.scriptPairDescription')}
      note={<ExerciseScopeHint />}
      controls={
        <>
          <ToggleButtonGroup
            exclusive
            fullWidth
            color="primary"
            value={pairDirection}
            onChange={handlePairDirectionChange}
            aria-label={t('exercise.pairDirection')}
            sx={[compactToggleSx, { gridColumn: { xs: '1 / -1', lg: 'span 2' } }]}
          >
            <ToggleButton
              value="hiragana-to-katakana"
              aria-label={t('exercise.pairHiraToKataLabel')}
            >
              {t('exercise.pairHiraToKata')}
            </ToggleButton>
            <ToggleButton
              value="katakana-to-hiragana"
              aria-label={t('exercise.pairKataToHiraLabel')}
            >
              {t('exercise.pairKataToHira')}
            </ToggleButton>
            <ToggleButton value="mixed">{t('exercise.pairMixed')}</ToggleButton>
          </ToggleButtonGroup>
          <ExerciseScopeControls {...scopeState} />
        </>
      }
    >
      <ExerciseQuiz
        key={`${pairDirection}:${scopeState.scope}`}
        mode="script-pair"
        script="hiragana"
        scope={scopeState.scope}
        pairDirection={pairDirection}
        scriptLabel=""
      />
    </ExercisePageLayout>
  );
}

export default ScriptPairExercisePage;
