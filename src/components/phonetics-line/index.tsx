import { useState, type KeyboardEvent } from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

type PhoneticsLineProps = {
  romaji: string;
};

/**
 * The romaji (phonetics) line for a vocab/example item. Hidden by default and
 * shown only when the inline button is tapped; once shown, a "hide" button sits
 * to the left of the romaji. Both states overlap in a single grid cell (only the
 * visibility flips) so toggling never shifts or vertically jumps the line. Stops
 * click/key propagation so it doesn't trigger a surrounding speakable surface.
 */
export function PhoneticsLine({ romaji }: PhoneticsLineProps) {
  const { t } = useTranslation();
  const [shown, setShown] = useState(false);

  const stopKeyPropagation = (event: KeyboardEvent<HTMLButtonElement>) => event.stopPropagation();

  return (
    <Box sx={{ display: 'grid', justifyItems: 'start' }}>
      <Link
        component="button"
        type="button"
        variant="body2"
        underline="hover"
        onClick={(event) => {
          event.stopPropagation();
          setShown(true);
        }}
        onKeyDown={stopKeyPropagation}
        sx={{ gridArea: '1 / 1', lineHeight: 1.66, visibility: shown ? 'hidden' : 'visible' }}
      >
        {t('course.showPhonetics')}
      </Link>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          gridArea: '1 / 1',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          visibility: shown ? 'visible' : 'hidden'
        }}
      >
        <Link
          component="button"
          type="button"
          variant="body2"
          underline="hover"
          onClick={(event) => {
            event.stopPropagation();
            setShown(false);
          }}
          onKeyDown={stopKeyPropagation}
          sx={{ lineHeight: 1.66 }}
        >
          {t('course.hidePhonetics')}
        </Link>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.66 }}>
          {romaji}
        </Typography>
      </Stack>
    </Box>
  );
}
