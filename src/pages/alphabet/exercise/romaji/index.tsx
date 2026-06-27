import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx';
import { ExerciseQuiz } from '@/pages/alphabet/exercise/exercise-quiz-panel.tsx';
import { ExerciseScopeControls } from '@/pages/alphabet/exercise/exercise-scope-controls.tsx';
import { ExerciseScopeHint } from '@/pages/alphabet/exercise/exercise-scope-hint.tsx';
import { ExerciseScriptSelect } from '@/pages/alphabet/exercise/exercise-script-select.tsx';
import { getScriptLabel } from '@/pages/alphabet/exercise/exercise-script-label.ts';
import { useRomajiExercisePreferences } from '@/pages/alphabet/exercise/use-exercise-preferences.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function RomajiExercisePage() {
  const { t } = useTranslation();
  const { script, handleScriptChange, scopeState } = useRomajiExercisePreferences();
  const scriptLabel = getScriptLabel(script, t);

  return (
    <ExercisePageLayout
      title={t('exercise.guessRomaji')}
      subtitle={t('exercise.romajiDescription')}
      note={<ExerciseScopeHint />}
      controls={
        <>
          <ExerciseScriptSelect script={script} onChange={handleScriptChange} />
          <ExerciseScopeControls {...scopeState} />
        </>
      }
    >
      <ExerciseQuiz
        key={`${script}:${scopeState.scope}`}
        mode="romaji"
        script={script}
        scope={scopeState.scope}
        scriptLabel={scriptLabel}
      />
    </ExercisePageLayout>
  );
}

export default RomajiExercisePage;
