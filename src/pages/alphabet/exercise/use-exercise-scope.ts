import { useMemo, useState } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select';
import {
  getExerciseOverviewScopeOptions,
  getExerciseRowScopeOptionsForOverview,
  resolveExerciseScope,
  type ExerciseOverviewScope,
  type ExerciseRowScope,
  type ExerciseScope,
} from '@/constants/alphabet-charts.ts';
import {
  persistExercisePreferences,
  readStoredExercisePreferences,
} from '@/pages/alphabet/exercise/exercise-preferences.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

export const ALL_ROWS_VALUE = '__all-rows__' as const;

type RowSelectOption = { value: ExerciseScope | typeof ALL_ROWS_VALUE; label: string };

function isValidRowScope(value: ExerciseRowScope | '', options: RowSelectOption[]) {
  return !value || options.some((option) => option.value === value);
}

export function useExerciseScope() {
  const { t } = useTranslation();
  const stored = readStoredExercisePreferences();
  const [overviewScope, setOverviewScope] = useState<ExerciseOverviewScope>(stored.overviewScope);
  const [rowFrom, setRowFrom] = useState<ExerciseRowScope | ''>(stored.rowFrom);
  const [rowTo, setRowTo] = useState<ExerciseRowScope | ''>(stored.rowTo);

  const rowScopeOptions = useMemo(
    () => getExerciseRowScopeOptionsForOverview(overviewScope, t),
    [overviewScope, t],
  );

  const allRowsOption = useMemo<RowSelectOption>(
    () => ({ value: ALL_ROWS_VALUE, label: t('exercise.allRows') }),
    [t],
  );

  const showRowRangeControls = rowScopeOptions.length > 1;

  const rowSelectOptions = useMemo<RowSelectOption[]>(() => {
    if (!showRowRangeControls) {
      return rowScopeOptions;
    }

    return [allRowsOption, ...rowScopeOptions];
  }, [allRowsOption, rowScopeOptions, showRowRangeControls]);

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

  const rowToSelectOptions = useMemo<RowSelectOption[]>(() => {
    if (!showRowRangeControls) {
      return rowSelectOptions;
    }

    if (rowFromIndex === -1) {
      return rowSelectOptions;
    }

    return [allRowsOption, ...rowScopeOptions.slice(rowFromIndex)];
  }, [allRowsOption, rowFromIndex, rowScopeOptions, rowSelectOptions, showRowRangeControls]);

  const rowToSelectValue = effectiveRowTo || (showRowRangeControls ? ALL_ROWS_VALUE : '');

  const scope = useMemo(
    () => resolveExerciseScope(overviewScope, effectiveRowFrom, effectiveRowTo, rowScopeOptions),
    [effectiveRowFrom, effectiveRowTo, overviewScope, rowScopeOptions],
  );

  const overviewScopeOptions = useMemo(() => getExerciseOverviewScopeOptions(t), [t]);

  const handleOverviewScopeChange = (event: SelectChangeEvent<ExerciseOverviewScope>) => {
    const value = event.target.value;
    setOverviewScope(value);
    setRowFrom('');
    setRowTo('');
    persistExercisePreferences({ overviewScope: value, rowFrom: '', rowTo: '' });
  };

  const handleRowFromSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;

    if (value === ALL_ROWS_VALUE) {
      setRowFrom('');
      setRowTo('');
      persistExercisePreferences({ rowFrom: '', rowTo: '' });
      return;
    }

    const nextRowFrom = value as ExerciseRowScope;
    setRowFrom(nextRowFrom);

    if (
      rowTo &&
      rowScopeOptions.findIndex((option) => option.value === rowTo) <
        rowScopeOptions.findIndex((option) => option.value === nextRowFrom)
    ) {
      setRowTo('');
      persistExercisePreferences({ rowFrom: nextRowFrom, rowTo: '' });
      return;
    }

    persistExercisePreferences({ rowFrom: nextRowFrom });
  };

  const handleRowToSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;

    if (value === ALL_ROWS_VALUE) {
      setRowTo('');
      persistExercisePreferences({ rowTo: '' });
      return;
    }

    const nextRowTo = value as ExerciseRowScope;
    setRowTo(nextRowTo);
    persistExercisePreferences({ rowTo: nextRowTo });
  };

  return {
    scope,
    overviewScope,
    overviewScopeOptions,
    rowFromSelectValue,
    rowToSelectValue,
    rowFromSelectOptions: rowSelectOptions,
    rowToSelectOptions,
    showRowRangeControls,
    handleOverviewScopeChange,
    handleRowFromSelectChange,
    handleRowToSelectChange,
  };
}
