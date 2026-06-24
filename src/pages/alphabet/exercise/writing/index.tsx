import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { AlphabetCell } from '@/constants/alphabet-charts.ts';
import { hiraganaChartRows, katakanaChartRows } from '@/constants/alphabet-charts.ts';
import { HintText } from '@/components/hint-text.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx';
import type { Script } from '@/pages/alphabet/exercise/exercise-quiz.ts';
import { speakJapanese } from '@/utils/speech.ts';

function getAnimCjkFileName(character: string) {
  const codePoint = character.codePointAt(0);
  return codePoint ? `${codePoint}.svg` : '';
}

function getStrokeOrderSvgUrl(character: string, replayToken = 0) {
  const fileName = getAnimCjkFileName(character);
  return `https://raw.githubusercontent.com/parsimonhi/animCJK/master/svgsJaKana/${fileName}?v=${replayToken}`;
}

function drawCanvasGuides(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.14)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.rect(0.5, 0.5, width - 1, height - 1);
  ctx.stroke();
}

function configurePen(ctx: CanvasRenderingContext2D) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#101828';
}

function WritingCanvas({ ariaLabel, clearLabel }: { ariaLabel: string; clearLabel: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawCanvasGuides(ctx, width, height);
    configurePen(ctx);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    redrawCanvas();

    const observer = new ResizeObserver(() => {
      redrawCanvas();
    });
    observer.observe(canvas);

    return () => {
      observer.disconnect();
    };
  }, [redrawCanvas]);

  const getContext = useCallback(() => {
    const canvas = canvasRef.current;
    return canvas?.getContext('2d');
  }, []);

  const getPoint = useCallback((event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return null;
    }

    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }, []);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      const ctx = getContext();
      const point = getPoint(event);

      if (!canvas || !ctx || !point) {
        return;
      }

      event.preventDefault();
      canvas.setPointerCapture(event.pointerId);
      isDrawingRef.current = true;
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
    },
    [getContext, getPoint]
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLCanvasElement>) => {
      if (!isDrawingRef.current) {
        return;
      }

      const ctx = getContext();
      const point = getPoint(event);

      if (!ctx || !point) {
        return;
      }

      event.preventDefault();
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    },
    [getContext, getPoint]
  );

  const handlePointerUp = useCallback(() => {
    if (!isDrawingRef.current) {
      return;
    }

    const ctx = getContext();
    if (!ctx) {
      return;
    }

    isDrawingRef.current = false;
    ctx.closePath();
  }, [getContext]);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <IconButton
        aria-label={clearLabel}
        size="small"
        onClick={redrawCanvas}
        onPointerUp={(event) => {
          if (event.pointerType === 'touch' || event.pointerType === 'pen') {
            event.preventDefault();
            redrawCanvas();
          }
        }}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          touchAction: 'manipulation'
        }}
      >
        <CleaningServicesOutlinedIcon sx={{ fontSize: 28, transform: 'rotate(30deg)' }} />
      </IconButton>
      <Box
        component="canvas"
        ref={canvasRef}
        role="img"
        aria-label={ariaLabel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        sx={{
          width: '100%',
          aspectRatio: '1 / 1',
          borderRadius: 2,
          touchAction: 'none',
          bgcolor: '#ffffff',
          boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.08)'
        }}
      />
    </Box>
  );
}

/** A single stroke-order guide; tapping replays the animation and speaks the kana. */
function StrokeGuide({ cell, script }: { cell: AlphabetCell; script: Script }) {
  const { t } = useTranslation();
  const [replayTick, setReplayTick] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleActivate = () => {
    setReplayTick((previous) => previous + 1);
    setHasError(false);
    speakJapanese(cell.char);
  };

  const guideSize = { xs: 40, sm: 48 };

  return (
    <Stack spacing={0.5} sx={{ alignItems: 'center', width: { xs: 46, sm: 56 } }}>
      {hasError && (
        <Box
          sx={{
            width: guideSize,
            height: guideSize,
            borderRadius: 1.5,
            bgcolor: '#ffffff',
            boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="caption" color="text.secondary">
            N/A
          </Typography>
        </Box>
      )}
      {!hasError && (
        <Box
          component="img"
          src={getStrokeOrderSvgUrl(cell.char, replayTick)}
          role="button"
          tabIndex={0}
          alt={t('exercise.writingGuideAlt', {
            char: cell.char,
            script: script === 'hiragana' ? t('nav.hiragana') : t('nav.katakana')
          })}
          onClick={handleActivate}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleActivate();
            }
          }}
          onError={() => setHasError(true)}
          sx={{
            width: guideSize,
            height: guideSize,
            objectFit: 'contain',
            display: 'block',
            cursor: 'pointer',
            borderRadius: 1,
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: 2
            }
          }}
        />
      )}
      <Typography variant="caption" color="text.secondary">
        {cell.romaji}
      </Typography>
    </Stack>
  );
}

function WritingExercisePage() {
  const { t } = useTranslation();
  const [script, setScript] = useState<Script>('hiragana');
  const [rowIndex, setRowIndex] = useState(0);

  const rows = useMemo(
    () => (script === 'hiragana' ? hiraganaChartRows : katakanaChartRows),
    [script]
  );
  const safeRowIndex = Math.min(rowIndex, rows.length - 1);
  const cells = useMemo(
    () => (rows[safeRowIndex]?.seion ?? []).filter((cell): cell is AlphabetCell => cell !== null),
    [rows, safeRowIndex]
  );

  const handleScriptChange = (event: SelectChangeEvent<Script>) => {
    setScript(event.target.value as Script);
    setRowIndex(0);
  };
  const handleRowChange = (event: SelectChangeEvent<number>) => {
    setRowIndex(Number(event.target.value));
  };
  const goToPreviousRow = () => setRowIndex((previous) => Math.max(0, previous - 1));
  const goToNextRow = () => setRowIndex((previous) => Math.min(rows.length - 1, previous + 1));

  const rowLabel = (rowCells: (AlphabetCell | null)[]) => {
    const first = rowCells.find((cell): cell is AlphabetCell => cell !== null);
    if (!first) {
      return t('exercise.rowDefault');
    }
    const name = first.romaji.charAt(0).toUpperCase() + first.romaji.slice(1);
    return t('exercise.rowLabel', { name, char: first.char });
  };

  return (
    <ExercisePageLayout
      title={t('exercise.writing')}
      subtitle={t('exercise.writingDescription')}
      note={<HintText>{t('exercise.writingReplayHint')}</HintText>}
    >
      <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 380, md: 420 }, mx: 'auto' }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="writing-script-select-label">{t('exercise.script')}</InputLabel>
              <Select<Script>
                labelId="writing-script-select-label"
                value={script}
                label={t('exercise.script')}
                onChange={handleScriptChange}
              >
                <MenuItem value="hiragana">{t('nav.hiragana')}</MenuItem>
                <MenuItem value="katakana">{t('nav.katakana')}</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="writing-row-select-label">{t('exercise.writingRow')}</InputLabel>
              <Select<number>
                labelId="writing-row-select-label"
                value={safeRowIndex}
                label={t('exercise.writingRow')}
                onChange={handleRowChange}
              >
                {rows.map((row, index) => (
                  <MenuItem key={index} value={index} lang="ja">
                    {rowLabel(row.seion)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Stack direction="row" spacing={{ xs: 0, sm: 0.5 }} sx={{ alignItems: 'center' }}>
            <IconButton
              aria-label={t('exercise.writingPreviousRow')}
              size="small"
              disabled={safeRowIndex === 0}
              onClick={goToPreviousRow}
            >
              <ChevronLeftIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Stack
              direction="row"
              spacing={{ xs: 0.25, sm: 0.75 }}
              useFlexGap
              sx={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center', minHeight: 80 }}
            >
              {cells.map((cell) => (
                <StrokeGuide key={`${script}:${cell.char}`} cell={cell} script={script} />
              ))}
            </Stack>
            <IconButton
              aria-label={t('exercise.writingNextRow')}
              size="small"
              disabled={safeRowIndex === rows.length - 1}
              onClick={goToNextRow}
            >
              <ChevronRightIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Stack>

          <WritingCanvas
            key={`${script}:${safeRowIndex}`}
            ariaLabel={t('exercise.writingCanvasAria')}
            clearLabel={t('exercise.writingClear')}
          />
        </Stack>
      </Box>
    </ExercisePageLayout>
  );
}

export default WritingExercisePage;
