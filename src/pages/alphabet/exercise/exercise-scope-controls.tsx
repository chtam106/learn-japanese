import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import type { ExerciseOverviewScope } from '@/constants/alphabet-charts.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { useExerciseScope } from '@/pages/alphabet/exercise/use-exercise-scope.ts';

type ExerciseScopeControlsProps = Pick<
  ReturnType<typeof useExerciseScope>,
  | 'overviewScope'
  | 'overviewScopeOptions'
  | 'rowFromSelectOptions'
  | 'rowToSelectOptions'
  | 'rowFromSelectValue'
  | 'rowToSelectValue'
  | 'showRowRangeControls'
  | 'handleOverviewScopeChange'
  | 'handleRowFromSelectChange'
  | 'handleRowToSelectChange'
>;

export function ExerciseScopeControls({
  overviewScope,
  overviewScopeOptions,
  rowFromSelectOptions,
  rowToSelectOptions,
  rowFromSelectValue,
  rowToSelectValue,
  showRowRangeControls,
  handleOverviewScopeChange,
  handleRowFromSelectChange,
  handleRowToSelectChange,
}: ExerciseScopeControlsProps) {
  const { t } = useTranslation();

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

      <FormControl fullWidth disabled={!showRowRangeControls}>
        <InputLabel id="row-from-select-label">{t('exercise.rowFrom')}</InputLabel>
        <Select<string>
          key={`${overviewScope}-from`}
          labelId="row-from-select-label"
          id="row-from-select"
          value={rowFromSelectValue}
          label={t('exercise.rowFrom')}
          onChange={handleRowFromSelectChange}
          MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
        >
          {rowFromSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth disabled={!showRowRangeControls}>
        <InputLabel id="row-to-select-label">{t('exercise.rowTo')}</InputLabel>
        <Select<string>
          key={`${overviewScope}-to-${rowFromSelectValue}`}
          labelId="row-to-select-label"
          id="row-to-select"
          value={rowToSelectValue}
          label={t('exercise.rowTo')}
          onChange={handleRowToSelectChange}
          MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
        >
          {rowToSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
