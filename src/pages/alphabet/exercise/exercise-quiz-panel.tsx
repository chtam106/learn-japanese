import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import {
  getOptionValue,
  isQuizAnswerCorrect,
  usesCharacterOptions,
  type ExerciseMode,
  type QuizQuestion,
} from '@/pages/alphabet/exercise/exercise-quiz.ts'
import { resultBorderSx } from '@/pages/alphabet/exercise/exercise-ui.ts'
import { KanaDisplay } from '@/components/kana-display.tsx'
import { useTranslation } from '@/i18n/use-translation.ts'
import { playKanaAudio } from '@/utils/kana-audio.ts'

type ExerciseQuizPanelProps = {
  mode: ExerciseMode
  scriptLabel: string
  question: QuizQuestion
  wrongAnswers: string[]
  answeredCorrectly: boolean
  onAnswer: (answer: string) => void
}

function getQuestionLabel(
  mode: ExerciseMode,
  scriptLabel: string,
  t: (key: string, params?: Record<string, string>) => string,
  pairDirection?: QuizQuestion['pairDirection'],
) {
  switch (mode) {
    case 'romaji':
      return t('exercise.questionRomaji', { script: scriptLabel })
    case 'character':
      return t('exercise.questionCharacter', { script: scriptLabel })
    case 'listen':
      return t('exercise.questionListen', { script: scriptLabel })
    case 'script-pair':
      return pairDirection === 'hiragana-to-katakana'
        ? t('exercise.questionScriptPairHiraToKata')
        : t('exercise.questionScriptPairKataToHira')
  }
}

export function ExerciseQuizPanel({
  mode,
  scriptLabel,
  question,
  wrongAnswers,
  answeredCorrectly,
  onAnswer,
}: ExerciseQuizPanelProps) {
  const { t } = useTranslation()
  const characterOptions = usesCharacterOptions(mode)

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: 1,
        borderColor: 'divider',
        textAlign: 'center',
      }}
    >
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
          justifyContent: 'center',
        }}
      >
        {mode === 'romaji' ? (
          <>
            <KanaDisplay cell={question.correctItem} variant="prompt" />
            <IconButton
              aria-label={t('chart.playAudio', {
                char: question.correctItem.char,
                romaji: question.correctItem.romaji,
              })}
              onClick={() => playKanaAudio(question.correctItem.romaji, question.correctItem.char)}
              sx={{ color: 'text.secondary' }}
            >
              <VolumeUpIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </>
        ) : null}

        {mode === 'character' ? (
          <Typography variant="h2" component="span" sx={{ lineHeight: 1.1 }}>
            {question.correctItem.romaji}
          </Typography>
        ) : null}

        {mode === 'listen' ? (
          <IconButton
            aria-label={t('exercise.replayAudio')}
            onClick={() => playKanaAudio(question.correctItem.romaji, question.correctItem.char)}
            sx={{
              color: 'primary.main',
              bgcolor: 'action.hover',
              width: 72,
              height: 72,
              '&:hover': { bgcolor: 'action.selected' },
            }}
          >
            <VolumeUpIcon sx={{ fontSize: 40 }} />
          </IconButton>
        ) : null}

        {mode === 'script-pair' && question.promptItem ? (
          <KanaDisplay cell={question.promptItem} variant="prompt" />
        ) : null}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
        }}
      >
        {question.optionItems.map((item) => {
          const value = getOptionValue(item, mode)
          const isWrongAnswer = wrongAnswers.includes(value)
          const isCorrectAnswer = isQuizAnswerCorrect(question, value)
          const showGreen = answeredCorrectly && isCorrectAnswer
          const showRed = isWrongAnswer && !answeredCorrectly

          return (
            <Button
              key={`${item.romaji}-${item.char}`}
              variant="outlined"
              onClick={() => onAnswer(value)}
              disabled={answeredCorrectly || isWrongAnswer}
              sx={{
                py: 2,
                fontSize: characterOptions ? '1.5rem' : '1rem',
                ...(showGreen && resultBorderSx('success.main')),
                ...(showRed && resultBorderSx('error.main')),
              }}
            >
              {characterOptions ? <KanaDisplay cell={item} variant="option" /> : item.romaji}
            </Button>
          )
        })}
      </Box>
    </Paper>
  )
}
