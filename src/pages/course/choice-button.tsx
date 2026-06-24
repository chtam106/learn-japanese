import type { ReactNode } from 'react';
import { Box, Button } from '@mui/material';
import { pink } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';

type ChoiceState = 'default' | 'correct' | 'wrong';

type ChoiceButtonProps = {
  children: ReactNode;
  state: ChoiceState;
  dimmed: boolean;
  onClick: () => void;
  lang?: string;
};

/**
 * A quiz answer button. It always uses the `outlined` variant so the border width stays
 * constant across states (correct/wrong only fill the background) — this avoids the layout
 * shift caused by switching between outlined and contained variants.
 */
export function ChoiceButton({ children, state, dimmed, onClick, lang }: ChoiceButtonProps) {
  const filled = state === 'correct' || state === 'wrong';

  return (
    <Button
      onClick={onClick}
      disabled={dimmed}
      variant="outlined"
      color="primary"
      fullWidth
      size="large"
      sx={(theme) => {
        const feedbackMain = state === 'correct' ? theme.palette.info.main : pink[400];
        const feedbackText = state === 'correct' ? theme.palette.info.dark : pink[700];

        return {
          justifyContent: 'space-between',
          textAlign: 'left',
          py: 1.5,
          textTransform: 'none',
          fontSize: '1.05rem',
          borderWidth: 1,
          '&.Mui-disabled': { opacity: 0.6 },
          ...(filled && {
            bgcolor: alpha(feedbackMain, 0.14),
            borderColor: alpha(feedbackMain, 0.45),
            color: feedbackText,
            '&:hover': {
              bgcolor: alpha(feedbackMain, 0.2),
              borderColor: alpha(feedbackMain, 0.62)
            }
          })
        };
      }}
    >
      <Box component="span" lang={lang}>
        {children}
      </Box>
    </Button>
  );
}
