import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { HintText } from '@/components/hint-text';
import { SpeakButton } from '@/components/speak-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import { speakJapanese } from '@/utils/speech.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { ExercisePageLayout } from '@/pages/alphabet/exercise/exercise-page-layout.tsx';
import { SENTENCES, type SentenceType } from '@/pages/alphabet/exercise/sentence/sentences.ts';
import {
  isSentenceAnswerCorrect,
  transliterateSentence
} from '@/pages/alphabet/exercise/sentence/transliterate.ts';

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

type AnswerStatus = 'idle' | 'correct' | 'wrong';

type SentenceQuizProps = {
  type: SentenceType;
};

function SentenceQuiz({ type }: SentenceQuizProps) {
  const { t } = useTranslation();
  const [order, setOrder] = useState(() => shuffle(SENTENCES[type]));
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<AnswerStatus>('idle');
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const total = order.length;
  const current = order[index];
  const kanaText = current.replace(/\s+/g, '');
  const { display, accepted } = useMemo(() => transliterateSentence(current), [current]);
  const answerShown = revealed;

  const handleCheck = () => {
    if (status === 'correct' || value.trim().length === 0) {
      return;
    }

    if (isSentenceAnswerCorrect(value, accepted)) {
      setStatus('correct');
      setCorrectCount((previous) => previous + 1);
    } else {
      setStatus('wrong');
    }
  };

  const handleToggleAnswer = () => {
    setRevealed((previous) => !previous);
  };

  // Auto-advance to the next sentence shortly after a correct answer.
  useEffect(() => {
    if (status !== 'correct') {
      return;
    }

    const timer = window.setTimeout(() => {
      const nextIndex = index + 1;
      if (nextIndex >= total) {
        setCompleted(true);
        return;
      }
      setIndex(nextIndex);
      setValue('');
      setStatus('idle');
      setRevealed(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [status, index, total]);

  const handleRestart = () => {
    setOrder(shuffle(SENTENCES[type]));
    setIndex(0);
    setValue('');
    setStatus('idle');
    setRevealed(false);
    setCorrectCount(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <Paper elevation={0} sx={[elevatedSurfaceSx, { p: 4, textAlign: 'center' }]}>
        <Typography variant="h5" component="p" sx={{ fontWeight: 600, mb: 1 }}>
          {t('exercise.sentenceComplete')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {t('exercise.sentenceScore', { correct: String(correctCount), total: String(total) })}
        </Typography>
        <Button variant="contained" onClick={handleRestart}>
          {t('exercise.sentenceRestart')}
        </Button>
      </Paper>
    );
  }

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: 3 }]}>
      <Stack
        direction="row"
        sx={{ mb: 2, color: 'text.secondary', justifyContent: 'space-between' }}
      >
        <Typography variant="subtitle2">
          {t('exercise.sentenceProgress', { current: String(index + 1), total: String(total) })}
        </Typography>
        <Typography variant="subtitle2">
          {t('exercise.sentenceScore', { correct: String(correctCount), total: String(total) })}
        </Typography>
      </Stack>

      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 4 }}>
        <SpeakButton text={kanaText} size="medium" />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            component="p"
            lang="ja"
            role="button"
            tabIndex={0}
            aria-label={t('common.playAudio')}
            onClick={() => speakJapanese(kanaText)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                speakJapanese(kanaText);
              }
            }}
            sx={{
              fontSize: { xs: 26, sm: 32 },
              lineHeight: 1.4,
              fontWeight: 500,
              cursor: 'pointer',
              borderRadius: 1,
              '&:focus-visible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: 2
              }
            }}
          >
            {kanaText}
          </Typography>

          <Box aria-live="polite" sx={{ mt: 1, display: 'grid', justifyItems: 'start' }}>
            <Link
              component="button"
              type="button"
              variant="body1"
              underline="hover"
              onClick={handleToggleAnswer}
              sx={{
                gridArea: '1 / 1',
                lineHeight: 1.66,
                visibility: answerShown ? 'hidden' : 'visible'
              }}
            >
              {t('exercise.showAnswer')}
            </Link>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                gridArea: '1 / 1',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                visibility: answerShown ? 'visible' : 'hidden'
              }}
            >
              <Link
                component="button"
                type="button"
                variant="body1"
                underline="hover"
                onClick={handleToggleAnswer}
                sx={{ lineHeight: 1.66 }}
              >
                {t('exercise.hideAnswer')}
              </Link>
              <Typography
                lang="en"
                variant="body1"
                sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.66 }}
              >
                {display}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleCheck();
        }}
      >
        <Stack spacing={2}>
          <TextField
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (status === 'wrong') {
                setStatus('idle');
              }
            }}
            placeholder={t('exercise.sentenceInputPlaceholder')}
            autoComplete="off"
            spellCheck={false}
            autoFocus
            fullWidth
            focused={status === 'correct' || undefined}
            color={status === 'correct' ? 'success' : undefined}
            error={status === 'wrong'}
            slotProps={{
              input: { readOnly: status === 'correct' },
              htmlInput: {
                'aria-label': t('exercise.sentencePrompt'),
                lang: 'en',
                autoCapitalize: 'none',
                autoCorrect: 'off'
              }
            }}
          />

          <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              disabled={status === 'correct' || value.trim().length === 0}
            >
              {t('exercise.check')}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
}

const SENTENCE_TYPE_LABEL_KEYS: Record<SentenceType, string> = {
  hiragana: 'exercise.sentenceTypeHiragana',
  katakana: 'exercise.sentenceTypeKatakana',
  mixed: 'exercise.sentenceTypeMixed'
};

const SENTENCE_TYPES: SentenceType[] = ['hiragana', 'katakana', 'mixed'];

function SentenceExercisePage() {
  const { t } = useTranslation();
  const [type, setType] = useState<SentenceType>('hiragana');

  const handleTypeChange = (event: SelectChangeEvent<SentenceType>) => {
    setType(event.target.value as SentenceType);
  };

  return (
    <ExercisePageLayout
      title={t('exercise.sentenceTitle')}
      subtitle={t('exercise.sentenceDescription')}
      note={
        <Stack spacing={0.5}>
          <HintText>{t('exercise.sentenceHint1')}</HintText>
          <HintText>{t('exercise.sentenceHint2')}</HintText>
          <HintText>{t('exercise.sentenceHint3')}</HintText>
        </Stack>
      }
    >
      <Box sx={{ maxWidth: { xs: '100%', sm: 560 }, mx: 'auto' }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="sentence-type-select-label">{t('exercise.sentenceType')}</InputLabel>
          <Select<SentenceType>
            labelId="sentence-type-select-label"
            id="sentence-type-select"
            value={type}
            label={t('exercise.sentenceType')}
            onChange={handleTypeChange}
          >
            {SENTENCE_TYPES.map((value) => (
              <MenuItem key={value} value={value}>
                {t(SENTENCE_TYPE_LABEL_KEYS[value])}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <SentenceQuiz key={type} type={type} />
      </Box>
    </ExercisePageLayout>
  );
}

export default SentenceExercisePage;
