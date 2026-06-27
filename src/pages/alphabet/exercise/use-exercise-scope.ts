import { useMemo } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select';
import {
  getExerciseOverviewScopeOptions,
  getExerciseRowScopeOptionsForOverview,
  resolveExerciseScope,
  type ExerciseOverviewScope,
  type ExerciseRowScope,
  type ExerciseScope
} from '@/constants/alphabet-charts.ts';
import type { ScopeSelection } from '@/pages/alphabet/exercise/exercise-preferences.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

export const ALL_ROWS_VALUE = '__all-rows__' as const;

type RowSelectOption = { value: ExerciseScope | typeof ALL_ROWS_VALUE; label: string };

function isValidRowScope(value: ExerciseRowScope | '', options: RowSelectOption[]) {
  return !value || options.some((option) => option.value === value);
}

/**
 * Controlled scope picker: the selection lives in the caller (so it can be
 * persisted per exercise) and every change is reported via `onSelectionChange`.
 */
export function useExerciseScope(
  selection: ScopeSelection,
  onSelectionChange: (next: ScopeSelection) => void
) {
  const { t } = useTranslation();
  const { overviewScope, rowFrom, rowTo } = selection;

  const rowScopeOptions = useMemo(
    () => getExerciseRowScopeOptionsForOverview(overviewScope, t),
    [overviewScope, t]
  );

  const allRowsOption = useMemo<RowSelectOption>(
    () => ({ value: ALL_ROWS_VALUE, label: t('exercise.allRows') }),
    [t]
  );

  const showRowRangeControls = rowScopeOptions.length > 1;

  const effectiveRowFrom = useMemo((): ExerciseRowScope | '' => {
    if (!rowFrom || !isValidRowScope(rowFrom, rowScopeOptions)) {
      return '';
    }

    return rowFrom;
  }, [rowFrom, rowScopeOptions]);

  const effectiveRowTo = useMemo((): ExerciseRowScope | '' => {
    if (!rowTo || !isValidRowScope(rowTo, rowScopeOptions)) {
      return '';
    }

    return rowTo;
  }, [rowTo, rowScopeOptions]);

  const rowFromSelectValue = effectiveRowFrom || (showRowRangeControls ? ALL_ROWS_VALUE : '');
  const rowFromIndex = rowScopeOptions.findIndex((option) => option.value === effectiveRowFrom);
  const rowToIndex = rowScopeOptions.findIndex((option) => option.value === effectiveRowTo);

  // From can't start after To: cap the From list at the chosen To row so the
  // range never inverts (e.g. picking "Ta" as To hides "Ya" from the From list).
  const rowFromSelectOptions = useMemo<RowSelectOption[]>(() => {
    if (!showRowRangeControls) {
      return rowScopeOptions;
    }

    if (rowToIndex === -1) {
      return [allRowsOption, ...rowScopeOptions];
    }

    return [allRowsOption, ...rowScopeOptions.slice(0, rowToIndex + 1)];
  }, [allRowsOption, rowScopeOptions, rowToIndex, showRowRangeControls]);

  // "From = All rows" means the whole set, so a "To" bound is meaningless then:
  // the To picker is locked to All and disabled until a concrete From is chosen.
  const rowToDisabled = !showRowRangeControls || !effectiveRowFrom;

  const rowToSelectOptions = useMemo<RowSelectOption[]>(() => {
    if (!showRowRangeControls) {
      return rowScopeOptions;
    }

    if (rowFromIndex === -1) {
      return [allRowsOption];
    }

    return [allRowsOption, ...rowScopeOptions.slice(rowFromIndex)];
  }, [allRowsOption, rowFromIndex, rowScopeOptions, showRowRangeControls]);

  const rowToSelectValue = (() => {
    if (!showRowRangeControls) {
      return effectiveRowTo || '';
    }

    if (!effectiveRowFrom) {
      return ALL_ROWS_VALUE;
    }

    return effectiveRowTo || ALL_ROWS_VALUE;
  })();

  const scope = useMemo(
    () => resolveExerciseScope(overviewScope, effectiveRowFrom, effectiveRowTo, rowScopeOptions),
    [effectiveRowFrom, effectiveRowTo, overviewScope, rowScopeOptions]
  );

  const overviewScopeOptions = useMemo(() => getExerciseOverviewScopeOptions(t), [t]);

  const handleOverviewScopeChange = (event: SelectChangeEvent<ExerciseOverviewScope>) => {
    onSelectionChange({ overviewScope: event.target.value, rowFrom: '', rowTo: '' });
  };

  const handleRowFromSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;

    if (value === ALL_ROWS_VALUE) {
      onSelectionChange({ overviewScope, rowFrom: '', rowTo: '' });
      return;
    }

    const nextRowFrom = value as ExerciseRowScope;
    const rowToBeforeFrom =
      rowTo &&
      rowScopeOptions.findIndex((option) => option.value === rowTo) <
        rowScopeOptions.findIndex((option) => option.value === nextRowFrom);

    onSelectionChange({
      overviewScope,
      rowFrom: nextRowFrom,
      rowTo: rowToBeforeFrom ? '' : rowTo
    });
  };

  const handleRowToSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;

    if (value === ALL_ROWS_VALUE) {
      onSelectionChange({ overviewScope, rowFrom, rowTo: '' });
      return;
    }

    onSelectionChange({ overviewScope, rowFrom, rowTo: value as ExerciseRowScope });
  };

  return {
    scope,
    overviewScope,
    overviewScopeOptions,
    rowFromSelectValue,
    rowToSelectValue,
    rowFromSelectOptions,
    rowToSelectOptions,
    showRowRangeControls,
    rowToDisabled,
    handleOverviewScopeChange,
    handleRowFromSelectChange,
    handleRowToSelectChange
  };
}
