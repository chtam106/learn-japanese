import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import { Paper } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { isSpeechSupported, speakJapanese } from '@/utils/speech.ts';
import { elevatedSurfaceSx, interactiveSurfaceSx } from '@/theme/surfaces.ts';

type SpeakableSurfaceProps = {
  /** Japanese text spoken when the whole surface is activated. */
  text: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
};

/**
 * A card surface whose entire area plays the given Japanese text (click or
 * Enter/Space). Falls back to a plain elevated surface when speech is
 * unsupported. Pair with a `<SpeakButton>` inside for a visible affordance.
 */
export function SpeakableSurface({ text, sx, children }: SpeakableSurfaceProps) {
  const { t } = useTranslation();
  const canSpeak = isSpeechSupported();
  const sxOverrides = Array.isArray(sx) ? sx : [sx];

  return (
    <Paper
      elevation={0}
      role={canSpeak ? 'button' : undefined}
      tabIndex={canSpeak ? 0 : undefined}
      aria-label={canSpeak ? t('common.playAudio') : undefined}
      onClick={canSpeak ? () => speakJapanese(text) : undefined}
      onKeyDown={
        canSpeak
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                speakJapanese(text);
              }
            }
          : undefined
      }
      sx={[
        canSpeak ? interactiveSurfaceSx : elevatedSurfaceSx,
        { cursor: canSpeak ? 'pointer' : undefined },
        ...sxOverrides
      ]}
    >
      {children}
    </Paper>
  );
}
