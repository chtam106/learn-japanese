import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import type { ScriptPairDirection } from '@/pages/alphabet/exercise/exercise-quiz.ts'
import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx'
import { ExerciseQuizPanel } from '@/pages/alphabet/exercise/exercise-quiz-panel.tsx'
import { ExerciseScopeControls } from '@/pages/alphabet/exercise/exercise-scope-controls.tsx'
import { useExerciseQuiz } from '@/pages/alphabet/exercise/use-exercise-quiz.ts'
import { useExerciseScope } from '@/pages/alphabet/exercise/use-exercise-scope.ts'
import { useExercisePairDirection } from '@/pages/alphabet/exercise/use-exercise-preferences.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

function ScriptPairExercisePage() {
  const { t } = useTranslation()
  const { pairDirection, handlePairDirectionChange } = useExercisePairDirection()
  const scopeState = useExerciseScope()
  const quiz = useExerciseQuiz({
    mode: 'script-pair',
    script: 'hiragana',
    scope: scopeState.scope,
    pairDirection,
  })

  return (
    <ExercisePageLayout
      title={t('exercise.scriptPair')}
      subtitle={t('exercise.scriptPairDescription')}
      controls={
        <>
          <FormControl fullWidth>
            <InputLabel id="pair-direction-select-label">{t('exercise.pairDirection')}</InputLabel>
            <Select<ScriptPairDirection>
              labelId="pair-direction-select-label"
              id="pair-direction-select"
              value={pairDirection}
              label={t('exercise.pairDirection')}
              onChange={handlePairDirectionChange}
            >
              <MenuItem value="hiragana-to-katakana">{t('exercise.pairHiraToKata')}</MenuItem>
              <MenuItem value="katakana-to-hiragana">{t('exercise.pairKataToHira')}</MenuItem>
              <MenuItem value="mixed">{t('exercise.pairMixed')}</MenuItem>
            </Select>
          </FormControl>
          <ExerciseScopeControls {...scopeState} />
        </>
      }
    >
      <ExerciseQuizPanel mode="script-pair" scriptLabel="" {...quiz} onAnswer={quiz.handleAnswer} />
    </ExercisePageLayout>
  )
}

export default ScriptPairExercisePage
