import { Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import type { AlphabetCell } from '@/constants/alphabet-charts.ts';
import { kanaStrokes } from '@/constants/kana-strokes.ts';
import { KanaStrokeOrder } from '@/components/kana-stroke-order';
import { KanaDisplay } from '@/components/kana-display';
import { SpeakButton } from '@/components/speak-button';
import { HintText } from '@/components/hint-text';
import { useTranslation } from '@/i18n/use-translation.ts';

type StrokeOrderDialogProps = {
  cell: AlphabetCell | null;
  open: boolean;
  onClose: () => void;
};

/**
 * Shows a kana's animated stroke order in a modal. Tapping the glyph replays the
 * animation; falls back to the static glyph when the character has no stroke data.
 */
export function StrokeOrderDialog({ cell, open, onClose }: StrokeOrderDialogProps) {
  const { t } = useTranslation();
  const hasStrokes = cell ? Boolean(kanaStrokes[cell.char]) : false;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <Stack spacing={2} sx={{ alignItems: 'center', position: 'relative' }}>
          <IconButton
            aria-label={t('common.close')}
            onClick={onClose}
            size="small"
            sx={{ position: 'absolute', top: -8, right: -8 }}
          >
            <CloseOutlinedIcon />
          </IconButton>

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {t('exercise.strokeOrderTitle')}
            </Typography>
          </Stack>

          {cell && hasStrokes && (
            <KanaStrokeOrder char={cell.char} size={{ xs: 200, sm: 240 }} ariaLabel={cell.romaji} />
          )}
          {cell && !hasStrokes && (
            <Stack spacing={1} sx={{ alignItems: 'center', py: 2 }}>
              <KanaDisplay cell={cell} variant="prompt" />
              <HintText sx={{ justifyContent: 'center' }}>
                {t('exercise.strokeOrderUnavailable')}
              </HintText>
            </Stack>
          )}

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography lang="ja" sx={{ fontSize: '1.5rem', lineHeight: 1, fontWeight: 600 }}>
              {cell?.char}
            </Typography>
            <Typography color="text.secondary" sx={{ textTransform: 'uppercase' }}>
              {cell?.romaji}
            </Typography>
            {cell && <SpeakButton text={cell.char} size="medium" />}
          </Stack>

          {hasStrokes && (
            <HintText sx={{ justifyContent: 'center' }}>{t('exercise.strokeOrderReplay')}</HintText>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default StrokeOrderDialog;
