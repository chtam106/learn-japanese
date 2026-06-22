import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import type { ExerciseScript } from '@/pages/alphabet/exercise/exercise-quiz.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

type ExerciseScriptSelectProps = {
  script: ExerciseScript
  onChange: (event: SelectChangeEvent<ExerciseScript>) => void
}

export function ExerciseScriptSelect({ script, onChange }: ExerciseScriptSelectProps) {
  const { t } = useTranslation()

  return (
    <FormControl fullWidth>
      <InputLabel id="script-select-label">{t('exercise.script')}</InputLabel>
      <Select<ExerciseScript>
        labelId="script-select-label"
        id="script-select"
        value={script}
        label={t('exercise.script')}
        onChange={onChange}
      >
        <MenuItem value="all">{t('exercise.scriptAll')}</MenuItem>
        <MenuItem value="hiragana">{t('nav.hiragana')}</MenuItem>
        <MenuItem value="katakana">{t('nav.katakana')}</MenuItem>
      </Select>
    </FormControl>
  )
}
