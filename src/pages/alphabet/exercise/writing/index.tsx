import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import {
  Box,
  Button,
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
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import type { AlphabetCell } from '@/constants/alphabet-charts.ts';
import {
  getAlphabetItems,
  hiraganaChartRows,
  katakanaChartRows
} from '@/constants/alphabet-charts.ts';
import { KanaDisplay } from '@/components/kana-display';
import { useTranslation } from '@/i18n/use-translation.ts';
import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx';
import type { Script } from '@/pages/alphabet/exercise/exercise-quiz.ts';
import { speakJapanese } from '@/utils/speech.ts';

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

type WritingCanvasProps = {
  ariaLabel: string;
  clearLabel: string;
  undoLabel: string;
};

function WritingCanvas({ ariaLabel, clearLabel, undoLabel }: WritingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const historyRef = useRef<ImageData[]>([]);
  const [canUndo, setCanUndo] = useState(false);

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

    historyRef.current = [];
    setCanUndo(false);
  }, []);

  const undoStroke = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    const snapshot = historyRef.current.pop();
    if (!ctx || !snapshot) {
      return;
    }

    ctx.putImageData(snapshot, 0, 0);
    setCanUndo(historyRef.current.length > 0);
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

      historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      if (historyRef.current.length > 50) {
        historyRef.current.shift();
      }
      setCanUndo(true);

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
      <Stack
        direction="row"
        spacing={2.5}
        sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
      >
        <IconButton
          aria-label={undoLabel}
          size="small"
          disabled={!canUndo}
          onClick={undoStroke}
          onPointerUp={(event) => {
            if (event.pointerType === 'touch' || event.pointerType === 'pen') {
              event.preventDefault();
              undoStroke();
            }
          }}
          sx={{ touchAction: 'manipulation' }}
        >
          <UndoOutlinedIcon sx={{ fontSize: 28 }} />
        </IconButton>
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
          sx={{ touchAction: 'manipulation' }}
        >
          <CleaningServicesOutlinedIcon sx={{ fontSize: 28, transform: 'rotate(30deg)' }} />
        </IconButton>
      </Stack>
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

type KanaSampleProps = {
  cell: AlphabetCell;
};

/** A reference glyph in the on-screen (gothic) font; tapping plays its audio. */
function KanaSample({ cell }: KanaSampleProps) {
  const { t } = useTranslation();

  return (
    <Stack spacing={0.5} sx={{ alignItems: 'center', width: { xs: 46, sm: 56 } }}>
      <Box
        role="button"
        tabIndex={0}
        aria-label={t('common.playAudio')}
        onClick={() => speakJapanese(cell.char)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            speakJapanese(cell.char);
          }
        }}
        sx={{
          width: { xs: 40, sm: 48 },
          height: { xs: 40, sm: 48 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: 1,
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2
          }
        }}
      >
        <KanaDisplay cell={cell} variant="chart" />
      </Box>
      <Typography variant="caption" color="text.secondary">
        {cell.romaji}
      </Typography>
    </Stack>
  );
}

type WritingMode = 'row' | 'romaji';

function pickRandomIndex(length: number, exclude: number) {
  if (length <= 1) {
    return 0;
  }

  let next = Math.floor(Math.random() * length);
  while (next === exclude) {
    next = Math.floor(Math.random() * length);
  }

  return next;
}

type RomajiPromptPracticeProps = {
  script: Script;
  rowIndex: number | 'all';
};

/** Show a random romaji prompt and let the user write the kana, then reveal it. */
function RomajiPromptPractice({ script, rowIndex }: RomajiPromptPracticeProps) {
  const { t } = useTranslation();
  const items = useMemo(() => {
    if (rowIndex === 'all') {
      return getAlphabetItems(script, 'seion');
    }

    const rows = script === 'hiragana' ? hiraganaChartRows : katakanaChartRows;
    return (rows[rowIndex]?.seion ?? []).filter((cell): cell is AlphabetCell => cell !== null);
  }, [script, rowIndex]);
  const [index, setIndex] = useState(() => Math.floor(Math.random() * items.length));
  const [revealed, setRevealed] = useState(false);
  const [round, setRound] = useState(0);

  const cell = items[index];

  const handleNext = () => {
    setIndex((previous) => pickRandomIndex(items.length, previous));
    setRevealed(false);
    setRound((previous) => previous + 1);
  };

  if (!cell) {
    return null;
  }

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
        <Typography variant="overline" color="text.secondary">
          {t('exercise.writingRomajiPrompt')}
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <Typography
            component="p"
            sx={{ fontSize: { xs: 48, sm: 56 }, lineHeight: 1, fontWeight: 600 }}
          >
            {cell.romaji}
          </Typography>
          <Typography
            component="p"
            lang="ja"
            role="button"
            tabIndex={revealed ? 0 : -1}
            aria-hidden={!revealed}
            aria-label={t('common.playAudio')}
            onClick={() => {
              if (revealed) {
                speakJapanese(cell.char);
              }
            }}
            onKeyDown={(event) => {
              if (revealed && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
                speakJapanese(cell.char);
              }
            }}
            sx={{
              position: 'absolute',
              left: '100%',
              top: '50%',
              transform: 'translateY(-50%)',
              ml: 2,
              fontSize: { xs: 48, sm: 56 },
              lineHeight: 1,
              visibility: revealed ? 'visible' : 'hidden',
              cursor: revealed ? 'pointer' : 'default',
              color: 'primary.main'
            }}
          >
            {cell.char}
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction="row"
        spacing={1.5}
        sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
        useFlexGap
      >
        <Button variant="outlined" onClick={() => setRevealed((previous) => !previous)}>
          {revealed ? t('exercise.writingHideAnswer') : t('exercise.writingReveal')}
        </Button>
        <Button variant="contained" onClick={handleNext}>
          {t('exercise.writingNext')}
        </Button>
      </Stack>

      <WritingCanvas
        key={`${script}:${round}`}
        ariaLabel={t('exercise.writingCanvasAria')}
        clearLabel={t('exercise.writingClear')}
        undoLabel={t('exercise.writingUndo')}
      />
    </Stack>
  );
}

function WritingExercisePage() {
  const { t } = useTranslation();
  const [mode, setMode] = useState<WritingMode>('row');
  const [script, setScript] = useState<Script>('hiragana');
  const [rowIndex, setRowIndex] = useState(0);
  const [romajiRow, setRomajiRow] = useState<number | 'all'>('all');

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
    <ExercisePageLayout title={t('exercise.writing')} subtitle={t('exercise.writingDescription')}>
      <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 380, md: 420 }, mx: 'auto' }}>
        <Stack spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="writing-mode-select-label">{t('exercise.writingMode')}</InputLabel>
            <Select<WritingMode>
              labelId="writing-mode-select-label"
              value={mode}
              label={t('exercise.writingMode')}
              onChange={(event) => setMode(event.target.value as WritingMode)}
            >
              <MenuItem value="row">{t('exercise.writingModeRow')}</MenuItem>
              <MenuItem value="romaji">{t('exercise.writingModeRomaji')}</MenuItem>
            </Select>
          </FormControl>

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
            {mode === 'row' && (
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
            )}
            {mode === 'romaji' && (
              <FormControl fullWidth>
                <InputLabel id="writing-romaji-row-select-label">
                  {t('exercise.writingRow')}
                </InputLabel>
                <Select<number | 'all'>
                  labelId="writing-romaji-row-select-label"
                  value={romajiRow}
                  label={t('exercise.writingRow')}
                  onChange={(event) => setRomajiRow(event.target.value as number | 'all')}
                >
                  <MenuItem value="all">{t('exercise.allRows')}</MenuItem>
                  {rows.map((row, index) => (
                    <MenuItem key={index} value={index} lang="ja">
                      {rowLabel(row.seion)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Stack>

          {mode === 'row' && (
            <>
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
                    <KanaSample key={`${script}:${cell.char}`} cell={cell} />
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
                key={script}
                ariaLabel={t('exercise.writingCanvasAria')}
                clearLabel={t('exercise.writingClear')}
                undoLabel={t('exercise.writingUndo')}
              />
            </>
          )}

          {mode === 'romaji' && (
            <RomajiPromptPractice
              key={`${script}:${romajiRow}`}
              script={script}
              rowIndex={romajiRow}
            />
          )}
        </Stack>
      </Box>
    </ExercisePageLayout>
  );
}

export default WritingExercisePage;
