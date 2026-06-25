import { useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, Button, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import {
  getOptionValue,
  isQuizAnswerCorrect,
  usesCharacterOptions,
  type ExerciseMode,
  type ExerciseScope,
  type ExerciseScript,
  type QuizQuestion,
  type ScriptPairDirection
} from '@/pages/alphabet/exercise/exercise-quiz.ts';
import { resultBorderSx } from '@/pages/alphabet/exercise/exercise-ui.ts';
import { useExerciseQuiz } from '@/pages/alphabet/exercise/use-exercise-quiz.ts';
import { KanaDisplay } from '@/components/kana-display.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { playKanaAudio } from '@/utils/kana-audio.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type ExerciseQuizPanelProps = {
  mode: ExerciseMode;
  scriptLabel: string;
  question: QuizQuestion;
  questionNumber: number;
  wrongAnswers: string[];
  answeredCorrectly: boolean;
  onAnswer: (answer: string) => void;
};

/** Map common Kunrei-shiki / typo spellings to the Hepburn romaji used in data. */
const ROMAJI_ALIASES: Record<string, string> = {
  si: 'shi',
  ti: 'chi',
  tu: 'tsu',
  hu: 'fu',
  zi: 'ji',
  di: 'ji',
  du: 'zu',
  sya: 'sha',
  syu: 'shu',
  syo: 'sho',
  tya: 'cha',
  tyu: 'chu',
  tyo: 'cho',
  zya: 'ja',
  zyu: 'ju',
  zyo: 'jo',
  jya: 'ja',
  jyu: 'ju',
  jyo: 'jo',
  cya: 'cha',
  cyu: 'chu',
  cyo: 'cho'
};

function canonicalizeRomaji(value: string) {
  const normalized = value.trim().toLowerCase();
  return ROMAJI_ALIASES[normalized] ?? normalized;
}

/** Free-text romaji answer: type the romaji for the shown kana. */
function RomajiInputAnswer({
  correctRomaji,
  answeredCorrectly,
  wrongAnswers,
  onAnswer
}: {
  correctRomaji: string;
  answeredCorrectly: boolean;
  wrongAnswers: string[];
  onAnswer: (answer: string) => void;
}) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [revealed, setRevealed] = useState(false);

  const canonical = canonicalizeRomaji(value);
  const isWrong = !answeredCorrectly && canonical.length > 0 && wrongAnswers.includes(canonical);
  const answerShown = revealed;

  const handleSubmit = () => {
    if (answeredCorrectly || canonical.length === 0) {
      return;
    }

    onAnswer(canonical);
  };

  return (
    <Stack spacing={4} sx={{ alignItems: 'center' }}>
      <Box aria-live="polite" sx={{ display: 'grid', justifyItems: 'center' }}>
        <Link
          component="button"
          type="button"
          variant="body1"
          underline="hover"
          onClick={() => setRevealed(true)}
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
            onClick={() => setRevealed(false)}
            sx={{ lineHeight: 1.66 }}
          >
            {t('exercise.hideAnswer')}
          </Link>
          <Typography
            lang="en"
            variant="body1"
            sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.66 }}
          >
            {correctRomaji}
          </Typography>
        </Stack>
      </Box>

      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', alignItems: 'center' }}
      >
        <TextField
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={t('exercise.romajiInputPlaceholder')}
          autoComplete="off"
          spellCheck={false}
          autoFocus
          focused={answeredCorrectly || undefined}
          color={answeredCorrectly ? 'success' : undefined}
          error={isWrong}
          slotProps={{
            input: { readOnly: answeredCorrectly },
            htmlInput: {
              'aria-label': t('exercise.romajiInputPlaceholder'),
              lang: 'en',
              autoCapitalize: 'none',
              autoCorrect: 'off'
            }
          }}
          sx={{
            maxWidth: 200,
            '& .MuiOutlinedInput-root': { height: 48 },
            '& .MuiOutlinedInput-notchedOutline': { borderWidth: 1 },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1
            },
            '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1
            }
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={answeredCorrectly}
          sx={{ height: 48, flexShrink: 0 }}
        >
          {t('exercise.check')}
        </Button>
      </Box>
    </Stack>
  );
}

function getQuestionLabel(
  mode: ExerciseMode,
  scriptLabel: string,
  t: (key: string, params?: Record<string, string>) => string,
  pairDirection?: QuizQuestion['pairDirection']
) {
  switch (mode) {
    case 'romaji':
      return t('exercise.questionRomaji', { script: scriptLabel });
    case 'character':
      return t('exercise.questionCharacter', { script: scriptLabel });
    case 'listen':
      return t('exercise.questionListen', { script: scriptLabel });
    case 'script-pair':
      return pairDirection === 'hiragana-to-katakana'
        ? t('exercise.questionScriptPairHiraToKata')
        : t('exercise.questionScriptPairKataToHira');
  }
}

export function ExerciseQuizPanel({
  mode,
  scriptLabel,
  question,
  questionNumber,
  wrongAnswers,
  answeredCorrectly,
  onAnswer
}: ExerciseQuizPanelProps) {
  const { t } = useTranslation();
  const characterOptions = usesCharacterOptions(mode);
  const playPromptAudio = () =>
    playKanaAudio(question.correctItem.romaji, question.correctItem.char);

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: 3, textAlign: 'center' }]}>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
        {getQuestionLabel(mode, scriptLabel, t, question.pairDirection)}
      </Typography>

      <Box
        sx={{
          mb: mode === 'romaji' ? 1.5 : 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          minHeight: 88,
          justifyContent: 'center'
        }}
      >
        {mode === 'romaji' && (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Box
                onClick={playPromptAudio}
                role="button"
                tabIndex={0}
                aria-label={t('chart.playAudio', {
                  char: question.correctItem.char,
                  romaji: question.correctItem.romaji
                })}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    playPromptAudio();
                  }
                }}
                sx={{ cursor: 'pointer' }}
              >
                <KanaDisplay cell={question.correctItem} variant="prompt" />
              </Box>
              <IconButton
                aria-label={t('chart.playAudio', {
                  char: question.correctItem.char,
                  romaji: question.correctItem.romaji
                })}
                onClick={playPromptAudio}
                sx={{
                  color: 'text.secondary',
                  position: 'absolute',
                  right: '100%',
                  top: 0,
                  bottom: 0,
                  my: 'auto',
                  mr: 0.5
                }}
              >
                <VolumeUpIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Box>
          </Box>
        )}

        {mode === 'character' && (
          <Typography variant="h2" component="span" sx={{ lineHeight: 1.1 }}>
            {question.correctItem.romaji}
          </Typography>
        )}

        {mode === 'listen' && (
          <IconButton
            aria-label={t('exercise.replayAudio')}
            onClick={playPromptAudio}
            sx={{
              color: 'primary.main',
              bgcolor: 'action.hover',
              width: 72,
              height: 72,
              '&:hover': { bgcolor: 'action.selected' }
            }}
          >
            <VolumeUpIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}

        {mode === 'script-pair' && question.promptItem && (
          <KanaDisplay cell={question.promptItem} variant="prompt" />
        )}
      </Box>

      {mode === 'romaji' && (
        <RomajiInputAnswer
          key={questionNumber}
          correctRomaji={question.correctItem.romaji}
          answeredCorrectly={answeredCorrectly}
          wrongAnswers={wrongAnswers}
          onAnswer={onAnswer}
        />
      )}

      {mode !== 'romaji' && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2
          }}
        >
          {question.optionItems.map((item) => {
            const value = getOptionValue(item, mode);
            const isWrongAnswer = wrongAnswers.includes(value);
            const isCorrectAnswer = isQuizAnswerCorrect(question, value);
            const showCorrect = answeredCorrectly && isCorrectAnswer;
            const showWrong = isWrongAnswer && !answeredCorrectly;

            return (
              <Button
                key={`${item.romaji}-${item.char}`}
                variant="outlined"
                onClick={() => onAnswer(value)}
                disabled={answeredCorrectly || isWrongAnswer}
                sx={{
                  py: 2,
                  fontSize: characterOptions ? '1.5rem' : '1rem',
                  borderWidth: 1,
                  '&.Mui-disabled': { borderWidth: 1 },
                  ...(showCorrect && resultBorderSx('correct')),
                  ...(showWrong && resultBorderSx('wrong'))
                }}
              >
                {characterOptions && <KanaDisplay cell={item} variant="option" />}
                {!characterOptions && item.romaji}
              </Button>
            );
          })}
        </Box>
      )}
    </Paper>
  );
}

type ExerciseQuizProps = {
  mode: ExerciseMode;
  script: ExerciseScript;
  scope: ExerciseScope;
  pairDirection?: ScriptPairDirection;
  scriptLabel: string;
};

/**
 * Container that owns the quiz session. Mount it with a `key` derived from the
 * current options so changing script/scope/direction remounts (and resets) it
 * instead of resetting state from inside an effect.
 */
export function ExerciseQuiz({
  mode,
  script,
  scope,
  pairDirection,
  scriptLabel
}: ExerciseQuizProps) {
  const quiz = useExerciseQuiz({ mode, script, scope, pairDirection });

  return (
    <ExerciseQuizPanel
      mode={mode}
      scriptLabel={scriptLabel}
      question={quiz.question}
      questionNumber={quiz.questionNumber}
      wrongAnswers={quiz.wrongAnswers}
      answeredCorrectly={quiz.answeredCorrectly}
      onAnswer={quiz.handleAnswer}
    />
  );
}
