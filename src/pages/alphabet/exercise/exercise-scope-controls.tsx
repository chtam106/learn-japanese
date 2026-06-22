import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import type { ExerciseOverviewScope } from '@/constants/alphabet-charts.ts'
import { useTranslation } from '@/i18n/use-translation.ts'
import type { useExerciseScope } from '@/pages/alphabet/exercise/use-exercise-scope.ts'

type ExerciseScopeControlsProps = Pick<
  ReturnType<typeof useExerciseScope>,
  | 'overviewScope'
  | 'overviewScopeOptions'
  | 'rowSelectOptions'
  | 'rowSelectValue'
  | 'showAllRowsOption'
  | 'handleOverviewScopeChange'
  | 'handleRowScopeSelectChange'
>

export function ExerciseScopeControls({
  overviewScope,
  overviewScopeOptions,
  rowSelectOptions,
  rowSelectValue,
  showAllRowsOption,
  handleOverviewScopeChange,
  handleRowScopeSelectChange,
}: ExerciseScopeControlsProps) {
  const { t } = useTranslation()

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="scope-select-label">{t('exercise.scope')}</InputLabel>
        <Select<ExerciseOverviewScope>
          labelId="scope-select-label"
          id="scope-select"
          value={overviewScope}
          label={t('exercise.scope')}
          onChange={handleOverviewScopeChange}
        >
          {overviewScopeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value as ExerciseOverviewScope}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth disabled={!showAllRowsOption}>
        <InputLabel id="row-select-label">{t('exercise.row')}</InputLabel>
        <Select<string>
          key={overviewScope}
          labelId="row-select-label"
          id="row-select"
          value={rowSelectValue}
          label={t('exercise.row')}
          onChange={handleRowScopeSelectChange}
          MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
        >
          {rowSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
