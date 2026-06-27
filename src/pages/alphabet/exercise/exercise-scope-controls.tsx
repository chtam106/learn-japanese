import { type MouseEvent } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import type { ExerciseOverviewScope } from '@/constants/alphabet-charts.ts';
import { compactSelectSx, compactToggleSx } from '@/pages/alphabet/exercise/control-styles.ts';
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
  | 'rowToDisabled'
  | 'handleOverviewScopeChange'
  | 'handleRowFromSelectChange'
  | 'handleRowToSelectChange'
> & {
  /** When true the scope picker spans the whole controls row instead of half on desktop. */
  overviewFullWidth?: boolean;
};

export function ExerciseScopeControls({
  overviewScope,
  overviewScopeOptions,
  rowFromSelectOptions,
  rowToSelectOptions,
  rowFromSelectValue,
  rowToSelectValue,
  showRowRangeControls,
  rowToDisabled,
  handleOverviewScopeChange,
  handleRowFromSelectChange,
  handleRowToSelectChange,
  overviewFullWidth = false
}: ExerciseScopeControlsProps) {
  const { t } = useTranslation();

  const handleOverviewToggle = (
    _event: MouseEvent<HTMLElement>,
    value: ExerciseOverviewScope | null
  ) => {
    if (value) {
      handleOverviewScopeChange(value);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        exclusive
        fullWidth
        color="primary"
        value={overviewScope}
        onChange={handleOverviewToggle}
        aria-label={t('exercise.scope')}
        sx={[
          compactToggleSx,
          { gridColumn: overviewFullWidth ? '1 / -1' : { xs: '1 / -1', lg: 'span 2' } }
        ]}
      >
        {overviewScopeOptions.map((option) => (
          <ToggleButton key={option.value} value={option.value as ExerciseOverviewScope}>
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <FormControl
        fullWidth
        disabled={!showRowRangeControls}
        sx={[compactSelectSx, { gridColumn: { lg: 'span 2' } }]}
      >
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

      <FormControl
        fullWidth
        disabled={rowToDisabled}
        sx={[compactSelectSx, { gridColumn: { lg: 'span 2' } }]}
      >
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
