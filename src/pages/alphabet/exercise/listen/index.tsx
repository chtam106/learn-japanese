import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx'
import { ExerciseQuizPanel } from '@/pages/alphabet/exercise/exercise-quiz-panel.tsx'
import { ExerciseScopeControls } from '@/pages/alphabet/exercise/exercise-scope-controls.tsx'
import { ExerciseScriptSelect } from '@/pages/alphabet/exercise/exercise-script-select.tsx'
import { getScriptLabel } from '@/pages/alphabet/exercise/exercise-script-label.ts'
import { useExerciseQuiz } from '@/pages/alphabet/exercise/use-exercise-quiz.ts'
import { useExerciseScope } from '@/pages/alphabet/exercise/use-exercise-scope.ts'
import { useExerciseScript } from '@/pages/alphabet/exercise/use-exercise-preferences.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

function ListenExercisePage() {
  const { t } = useTranslation()
  const { script, handleScriptChange } = useExerciseScript()
  const scopeState = useExerciseScope()
  const quiz = useExerciseQuiz({ mode: 'listen', script, scope: scopeState.scope })
  const scriptLabel = getScriptLabel(script, t)

  return (
    <ExercisePageLayout
      title={t('exercise.listenPickShort')}
      subtitle={t('exercise.listenDescription')}
      controls={
        <>
          <ExerciseScriptSelect script={script} onChange={handleScriptChange} />
          <ExerciseScopeControls {...scopeState} />
        </>
      }
    >
      <ExerciseQuizPanel
        mode="listen"
        scriptLabel={scriptLabel}
        {...quiz}
        onAnswer={quiz.handleAnswer}
      />
    </ExercisePageLayout>
  )
}

export default ListenExercisePage
