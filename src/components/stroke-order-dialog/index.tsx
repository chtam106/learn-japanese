import { Box, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
  /** Sibling cells (e.g. the current row) enabling in-modal prev/next navigation. */
  cells?: AlphabetCell[];
  /** Called to navigate to another cell in `cells`. */
  onSelectCell?: (cell: AlphabetCell) => void;
};

/**
 * Shows a kana's animated stroke order in a modal. Tapping the glyph replays the
 * animation; falls back to the static glyph when the character has no stroke data.
 * When `cells` + `onSelectCell` are provided, arrows step through the siblings.
 */
export function StrokeOrderDialog({
  cell,
  open,
  onClose,
  cells,
  onSelectCell
}: StrokeOrderDialogProps) {
  const { t } = useTranslation();
  const hasStrokes = cell ? Boolean(kanaStrokes[cell.char]) : false;

  const currentIndex = cell && cells ? cells.findIndex((item) => item.char === cell.char) : -1;
  const canNavigate = Boolean(onSelectCell) && currentIndex !== -1 && (cells?.length ?? 0) > 1;
  const goToPrevious = () => {
    if (cells && currentIndex > 0) {
      onSelectCell?.(cells[currentIndex - 1]);
    }
  };
  const goToNext = () => {
    if (cells && currentIndex !== -1 && currentIndex < cells.length - 1) {
      onSelectCell?.(cells[currentIndex + 1]);
    }
  };

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

          <Box
            sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            {canNavigate && (
              <IconButton
                aria-label={t('exercise.strokeOrderPrevious')}
                onClick={goToPrevious}
                sx={{
                  position: 'absolute',
                  left: { xs: -12, sm: 0 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  visibility: currentIndex <= 0 ? 'hidden' : 'visible'
                }}
              >
                <ChevronLeftIcon sx={{ fontSize: 30 }} />
              </IconButton>
            )}
            {cell && hasStrokes && (
              <KanaStrokeOrder
                char={cell.char}
                size={{ xs: 160, sm: 200 }}
                ariaLabel={cell.romaji}
              />
            )}
            {cell && !hasStrokes && (
              <Stack spacing={1} sx={{ alignItems: 'center', py: 2 }}>
                <KanaDisplay cell={cell} variant="prompt" />
                <HintText sx={{ justifyContent: 'center' }}>
                  {t('exercise.strokeOrderUnavailable')}
                </HintText>
              </Stack>
            )}
            {canNavigate && (
              <IconButton
                aria-label={t('exercise.strokeOrderNext')}
                onClick={goToNext}
                sx={{
                  position: 'absolute',
                  right: { xs: -12, sm: 0 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  visibility: cells && currentIndex < cells.length - 1 ? 'visible' : 'hidden'
                }}
              >
                <ChevronRightIcon sx={{ fontSize: 30 }} />
              </IconButton>
            )}
          </Box>

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
