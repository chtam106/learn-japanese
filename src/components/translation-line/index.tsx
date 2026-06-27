import { useState, type KeyboardEvent } from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

type TranslationLineProps = {
  translation: string;
};

/**
 * The meaning (translation) line for an example sentence. Hidden by default and
 * shown only when the inline button is tapped; once shown, a "hide" button sits
 * to the left of the translation. Both states overlap in a single grid cell (only
 * the visibility flips) so toggling never shifts the surrounding layout. Stops
 * click/key propagation so it doesn't trigger a surrounding speakable surface.
 */
export function TranslationLine({ translation }: TranslationLineProps) {
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
        {t('course.showTranslation')}
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
          sx={{ lineHeight: 1.66, flexShrink: 0 }}
        >
          {t('course.hideTranslation')}
        </Link>
        <Typography variant="body2" sx={{ lineHeight: 1.66 }}>
          {translation}
        </Typography>
      </Stack>
    </Box>
  );
}
