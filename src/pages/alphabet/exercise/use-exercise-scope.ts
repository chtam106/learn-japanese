import { useMemo, useState } from 'react'
import type { SelectChangeEvent } from '@mui/material/Select'
import {
  getExerciseOverviewScopeOptions,
  getExerciseRowScopeOptionsForOverview,
  resolveExerciseScope,
  type ExerciseOverviewScope,
  type ExerciseRowScope,
  type ExerciseScope,
} from '@/constants/alphabet-charts.ts'
import {
  persistExercisePreferences,
  readStoredExercisePreferences,
} from '@/pages/alphabet/exercise/exercise-preferences.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

export const ALL_ROWS_VALUE = '__all-rows__' as const

type RowSelectOption = { value: ExerciseScope | typeof ALL_ROWS_VALUE; label: string }

export function useExerciseScope() {
  const { t } = useTranslation()
  const stored = readStoredExercisePreferences()
  const [overviewScope, setOverviewScope] = useState<ExerciseOverviewScope>(stored.overviewScope)
  const [rowScope, setRowScope] = useState<ExerciseRowScope | ''>(stored.rowScope)

  const rowScopeOptions = useMemo(
    () => getExerciseRowScopeOptionsForOverview(overviewScope, t),
    [overviewScope, t],
  )

  const allRowsOption = useMemo<RowSelectOption>(
    () => ({ value: ALL_ROWS_VALUE, label: t('exercise.allRows') }),
    [t],
  )

  const showAllRowsOption = rowScopeOptions.length > 1

  const rowSelectOptions = useMemo<RowSelectOption[]>(() => {
    if (!showAllRowsOption) {
      return rowScopeOptions
    }

    return [allRowsOption, ...rowScopeOptions]
  }, [allRowsOption, rowScopeOptions, showAllRowsOption])

  const effectiveRowScope = useMemo((): ExerciseRowScope | '' => {
    if (!rowScope || !rowScopeOptions.some((option) => option.value === rowScope)) {
      return ''
    }

    return rowScope
  }, [rowScope, rowScopeOptions])

  const scope = resolveExerciseScope(overviewScope, effectiveRowScope)
  const rowSelectValue = effectiveRowScope || (showAllRowsOption ? ALL_ROWS_VALUE : '')
  const overviewScopeOptions = useMemo(() => getExerciseOverviewScopeOptions(t), [t])

  const handleOverviewScopeChange = (event: SelectChangeEvent<ExerciseOverviewScope>) => {
    const value = event.target.value
    setOverviewScope(value)
    setRowScope('')
    persistExercisePreferences({ overviewScope: value, rowScope: '' })
  }

  const handleRowScopeSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value

    if (value === ALL_ROWS_VALUE) {
      setRowScope('')
      persistExercisePreferences({ rowScope: '' })
      return
    }

    const nextRowScope = value as ExerciseRowScope
    setRowScope(nextRowScope)
    persistExercisePreferences({ rowScope: nextRowScope })
  }

  return {
    scope,
    overviewScope,
    overviewScopeOptions,
    rowSelectOptions,
    rowSelectValue,
    showAllRowsOption,
    handleOverviewScopeChange,
    handleRowScopeSelectChange,
  }
}
