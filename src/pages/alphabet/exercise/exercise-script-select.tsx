import { type MouseEvent } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { ExerciseScript } from '@/pages/alphabet/exercise/exercise-quiz.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type ExerciseScriptSelectProps = {
  script: ExerciseScript;
  onChange: (script: ExerciseScript) => void;
};

export function ExerciseScriptSelect({ script, onChange }: ExerciseScriptSelectProps) {
  const { t } = useTranslation();

  const handleChange = (_event: MouseEvent<HTMLElement>, value: ExerciseScript | null) => {
    if (value) {
      onChange(value);
    }
  };

  return (
    <ToggleButtonGroup
      exclusive
      fullWidth
      color="primary"
      value={script}
      onChange={handleChange}
      aria-label={t('exercise.script')}
      sx={{ gridColumn: { xs: '1 / -1', lg: 'span 2' } }}
    >
      <ToggleButton value="hiragana">{t('nav.hiragana')}</ToggleButton>
      <ToggleButton value="katakana">{t('nav.katakana')}</ToggleButton>
      <ToggleButton value="all">{t('exercise.scriptAll')}</ToggleButton>
    </ToggleButtonGroup>
  );
}
