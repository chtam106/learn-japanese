import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import { getAlphabetItems } from '@/constants/alphabet-charts.ts';
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
      y: event.clientY - rect.top,
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
    [getContext, getPoint],
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
    [getContext, getPoint],
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
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <IconButton
        aria-label={clearLabel}
        size="small"
        onClick={redrawCanvas}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
          '&:hover': {
            bgcolor: '#ffffff',
          },
        }}
      >
        <CleaningServicesOutlinedIcon fontSize="small" sx={{ transform: 'rotate(30deg)' }} />
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
          boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.08)',
        }}
      />
    </Box>
  );
}

function WritingExercisePage() {
  const { t } = useTranslation();
  const [script, setScript] = useState<Script>('hiragana');
  const [selectedRomaji, setSelectedRomaji] = useState('a');
  const [guideErrorKey, setGuideErrorKey] = useState<string | null>(null);
  const [replayTick, setReplayTick] = useState(0);

  const basicCharacters = useMemo(() => getAlphabetItems(script, 'seion'), [script]);
  const selectedCharacter = useMemo(
    () => basicCharacters.find((item) => item.romaji === selectedRomaji) ?? basicCharacters[0],
    [basicCharacters, selectedRomaji],
  );
  const selectedCharacterIndex = useMemo(
    () => basicCharacters.findIndex((item) => item.romaji === selectedCharacter?.romaji),
    [basicCharacters, selectedCharacter],
  );
  const previousCharacter = useMemo(() => {
    if (!selectedCharacter || basicCharacters.length === 0) {
      return null;
    }
    const previousIndex =
      selectedCharacterIndex <= 0 ? basicCharacters.length - 1 : selectedCharacterIndex - 1;
    return basicCharacters[previousIndex] ?? null;
  }, [basicCharacters, selectedCharacter, selectedCharacterIndex]);
  const nextCharacter = useMemo(() => {
    if (!selectedCharacter || basicCharacters.length === 0) {
      return null;
    }
    const nextIndex = (selectedCharacterIndex + 1) % basicCharacters.length;
    return basicCharacters[nextIndex] ?? null;
  }, [basicCharacters, selectedCharacter, selectedCharacterIndex]);

  const handleScriptChange = (event: SelectChangeEvent<Script>) => {
    setScript(event.target.value as Script);
  };

  const handleCharacterChange = (event: SelectChangeEvent<string>) => {
    setSelectedRomaji(event.target.value);
    setReplayTick(0);
  };
  const handlePreviousCharacter = useCallback(() => {
    if (!previousCharacter) {
      return;
    }
    setSelectedRomaji(previousCharacter.romaji);
  }, [previousCharacter]);
  const handleNextCharacter = useCallback(() => {
    if (!nextCharacter) {
      return;
    }
    setSelectedRomaji(nextCharacter.romaji);
  }, [nextCharacter]);
  const handleSpeakCharacter = useCallback(() => {
    speakJapanese(selectedCharacter.char);
  }, [selectedCharacter.char]);
  const handleReplay = useCallback(() => {
    setReplayTick((previous) => previous + 1);
    setGuideErrorKey(null);
  }, []);
  const handleGuideClick = useCallback(() => {
    handleReplay();
    handleSpeakCharacter();
  }, [handleReplay, handleSpeakCharacter]);

  if (!selectedCharacter) {
    return null;
  }

  const svgUrl = getStrokeOrderSvgUrl(selectedCharacter.char, replayTick);
  const guideKey = `${script}:${selectedCharacter.char}`;
  const isGuideUnavailable = guideErrorKey === guideKey;

  return (
    <ExercisePageLayout
      title={t('exercise.writing')}
      subtitle={t('exercise.writingDescription')}
      note={
        <Typography variant="body2" color="text.secondary">
          {t('exercise.writingReplayHint')}
        </Typography>
      }
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 380, md: 420 },
          mx: 'auto',
        }}
      >
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
              <InputLabel id="writing-character-select-label">
                {t('exercise.writingCharacter')}
              </InputLabel>
              <Select<string>
                labelId="writing-character-select-label"
                value={selectedCharacter.romaji}
                label={t('exercise.writingCharacter')}
                onChange={handleCharacterChange}
              >
                {basicCharacters.map((item) => (
                  <MenuItem key={item.romaji} value={item.romaji}>
                    {item.char} ({item.romaji})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Box
            sx={{
              position: 'relative',
              borderRadius: 2,
              px: 2,
              py: 1.5,
            }}
          >
            <IconButton
              aria-label={t('exercise.writingPreviousCharacter', {
                char: previousCharacter?.char ?? '',
              })}
              onClick={(event) => {
                event.stopPropagation();
                handlePreviousCharacter();
              }}
              sx={{
                position: 'absolute',
                top: '50%',
                left: 8,
                transform: 'translateY(-50%)',
                zIndex: 2,
                width: 40,
                height: 40,
              }}
            >
              <ChevronLeftOutlinedIcon />
            </IconButton>
            <Stack
              direction="row"
              spacing={{ xs: 2.5, sm: 3.5 }}
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 72,
                px: { xs: 5, sm: 6 },
              }}
            >
              {isGuideUnavailable && (
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 1.5,
                    bgcolor: '#ffffff',
                    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 1,
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
                    N/A
                  </Typography>
                </Box>
              )}
              {!isGuideUnavailable && (
                <Box
                  component="img"
                  src={svgUrl}
                  role="button"
                  tabIndex={0}
                  alt={t('exercise.writingGuideAlt', {
                    char: selectedCharacter.char,
                    script: script === 'hiragana' ? t('nav.hiragana') : t('nav.katakana'),
                  })}
                  onClick={handleGuideClick}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handleGuideClick();
                    }
                  }}
                  onError={() => {
                    setGuideErrorKey(guideKey);
                  }}
                  sx={{
                    width: { xs: 64, sm: 72 },
                    height: { xs: 64, sm: 72 },
                    objectFit: 'contain',
                    display: 'block',
                    cursor: 'pointer',
                    borderRadius: 1,
                    '&:focus-visible': {
                      outline: '2px solid',
                      outlineColor: 'primary.main',
                      outlineOffset: 2,
                    },
                  }}
                />
              )}
            </Stack>
            <IconButton
              aria-label={t('exercise.writingNextCharacter', { char: nextCharacter?.char ?? '' })}
              onClick={(event) => {
                event.stopPropagation();
                handleNextCharacter();
              }}
              sx={{
                position: 'absolute',
                top: '50%',
                right: 8,
                transform: 'translateY(-50%)',
                zIndex: 2,
                width: 40,
                height: 40,
              }}
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
          </Box>
          <WritingCanvas
            key={guideKey}
            ariaLabel={t('exercise.writingCanvasAria', { char: selectedCharacter.char })}
            clearLabel={t('exercise.writingClear')}
          />
        </Stack>
      </Box>
    </ExercisePageLayout>
  );
}

export default WritingExercisePage;
