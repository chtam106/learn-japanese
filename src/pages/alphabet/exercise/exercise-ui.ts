import { pink } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

export function resultBorderSx(state: 'correct' | 'wrong') {
  const isCorrect = state === 'correct';
  const getMainColor = (theme: Theme) => (isCorrect ? theme.palette.info.main : pink[400]);
  const getTextColor = (theme: Theme) => (isCorrect ? theme.palette.info.dark : pink[700]);

  return {
    borderWidth: 1,
    bgcolor: (theme: Theme) => alpha(getMainColor(theme), 0.14),
    borderColor: (theme: Theme) => alpha(getMainColor(theme), 0.45),
    color: getTextColor,
    '&:hover': {
      bgcolor: (theme: Theme) => alpha(getMainColor(theme), 0.2),
      borderColor: (theme: Theme) => alpha(getMainColor(theme), 0.62)
    },
    '&.Mui-disabled': {
      borderWidth: 1,
      bgcolor: (theme: Theme) => alpha(getMainColor(theme), 0.14),
      borderColor: (theme: Theme) => alpha(getMainColor(theme), 0.45),
      color: getTextColor,
      opacity: 1
    }
  };
}
