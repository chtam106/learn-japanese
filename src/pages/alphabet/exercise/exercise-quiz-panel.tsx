import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
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
  wrongAnswers: string[];
  answeredCorrectly: boolean;
  onAnswer: (answer: string) => void;
};

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
          mb: 4,
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
                  left: '100%',
                  top: 0,
                  bottom: 0,
                  my: 'auto',
                  ml: 0.5
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
                borderWidth: 2,
                '&.Mui-disabled': { borderWidth: 2 },
                ...(showCorrect && resultBorderSx('correct')),
                ...(showWrong && resultBorderSx('wrong'))
              }}
            >
              {characterOptions ? <KanaDisplay cell={item} variant="option" /> : item.romaji}
            </Button>
          );
        })}
      </Box>
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
      wrongAnswers={quiz.wrongAnswers}
      answeredCorrectly={quiz.answeredCorrectly}
      onAnswer={quiz.handleAnswer}
    />
  );
}
