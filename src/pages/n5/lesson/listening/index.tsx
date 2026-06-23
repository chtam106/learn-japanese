import { useEffect, useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ReplayIcon from '@mui/icons-material/Replay'
import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined'
import {
  Box,
  Button,
  Chip,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { getN5Lesson, n5LessonPath, type N5Lesson } from '@/constants/n5-course.ts'
import { PageContainer } from '@/components/page-container.tsx'
import { routes } from '@/constants/routes.ts'
import { useTranslation } from '@/i18n/use-translation.ts'
import { cancelSpeech, isSpeechSupported, speakJapanese } from '@/utils/speech.ts'
import { elevatedSurfaceSx } from '@/theme/surfaces.ts'
import { buildLessonListening, type ListeningQuestion } from './n5-listening.ts'

function LessonNotFound() {
  const { t } = useTranslation()

  return (
    <PageContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('n5.notFoundTitle')}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('n5.notFoundBody')}
      </Typography>
      <Button component={RouterLink} to={routes.n5.index} variant="contained">
        {t('n5.backToCourse')}
      </Button>
    </PageContainer>
  )
}

function ResultScreen({
  score,
  total,
  lessonId,
  onRetry,
}: {
  score: number
  total: number
  lessonId: string
  onRetry: () => void
}) {
  const { t } = useTranslation()
  const ratio = total === 0 ? 0 : score / total
  const message =
    ratio >= 0.8 ? t('n5.resultGreat') : ratio >= 0.5 ? t('n5.resultGood') : t('n5.resultKeepGoing')

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 3, md: 4 }, textAlign: 'center' }]}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        {t('n5.resultTitle')}
      </Typography>
      <Typography variant="h2" component="p" sx={{ fontWeight: 700, color: 'primary.main', my: 2 }}>
        {score} / {total}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {message}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        sx={{ justifyContent: 'center' }}
      >
        <Button variant="contained" startIcon={<ReplayIcon />} onClick={onRetry}>
          {t('n5.retry')}
        </Button>
        <Button variant="outlined" component={RouterLink} to={n5LessonPath(lessonId)}>
          {t('n5.reviewLesson')}
        </Button>
      </Stack>
    </Paper>
  )
}

function ListeningQuiz({ lesson }: { lesson: N5Lesson }) {
  const { locale, t } = useTranslation()

  const [questions, setQuestions] = useState<ListeningQuestion[]>(() =>
    buildLessonListening(lesson, locale),
  )
  const [index, setIndex] = useState(0)
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const total = questions.length
  const question = questions[index]
  const isLast = index === total - 1
  const answered = selectedId !== undefined

  useEffect(() => {
    if (finished) {
      return
    }

    speakJapanese(question.audioText)

    return () => {
      cancelSpeech()
    }
  }, [question.audioText, finished])

  const handleSelect = (optionId: string) => {
    if (answered) {
      return
    }

    setSelectedId(optionId)

    if (optionId === question.correctId) {
      setScore((previous) => previous + 1)
    }
  }

  const handleNext = () => {
    if (isLast) {
      cancelSpeech()
      setFinished(true)

      return
    }

    setIndex((previous) => previous + 1)
    setSelectedId(undefined)
  }

  const handleRetry = () => {
    setQuestions(buildLessonListening(lesson, locale))
    setIndex(0)
    setSelectedId(undefined)
    setScore(0)
    setFinished(false)
  }

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1 }}>
            <Button
              component={RouterLink}
              to={n5LessonPath(lesson.id)}
              startIcon={<ArrowBackIcon />}
              size="small"
              sx={{ ml: -0.5 }}
            >
              {t('n5.reviewLesson')}
            </Button>
          </Box>
          <Chip
            label={t('n5.lessonLabel', { number: lesson.number })}
            color="primary"
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
          />
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
            {lesson.title[locale]} · {t('n5.listening')}
          </Typography>
        </Box>

        {finished ? (
          <ResultScreen score={score} total={total} lessonId={lesson.id} onRetry={handleRetry} />
        ) : (
          <>
            <Box>
              <Stack
                direction="row"
                sx={{ justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}
              >
                <Typography variant="body2" color="text.secondary">
                  {t('n5.questionProgress', { current: index + 1, total })}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {score} / {total}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={total === 0 ? 0 : (index / total) * 100}
                sx={{ borderRadius: 1, height: 8 }}
              />
            </Box>

            <Paper
              elevation={0}
              sx={[
                elevatedSurfaceSx,
                {
                  p: { xs: 3, md: 4 },
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                },
              ]}
            >
              <Typography variant="overline" color="text.secondary">
                {t('n5.listenPrompt')}
              </Typography>
              <IconButton
                onClick={() => speakJapanese(question.audioText)}
                color="primary"
                aria-label={t('n5.play')}
                sx={{
                  width: 84,
                  height: 84,
                  border: 2,
                  borderColor: 'primary.main',
                  '& svg': { fontSize: 44 },
                }}
              >
                <VolumeUpIcon />
              </IconButton>
              <Button
                size="small"
                startIcon={<ReplayIcon />}
                onClick={() => speakJapanese(question.audioText)}
              >
                {t('n5.replay')}
              </Button>

              {answered ? (
                <Box sx={{ mt: 1 }}>
                  <Typography variant="h5" component="p" lang="ja" sx={{ fontWeight: 600 }}>
                    {question.reveal.jp}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {question.reveal.romaji}
                  </Typography>
                </Box>
              ) : null}
            </Paper>

            <Stack spacing={1.5}>
              {question.options.map((option) => {
                const isCorrectOption = option.id === question.correctId
                const showCorrect = answered && isCorrectOption
                const showWrong = answered && option.id === selectedId && !isCorrectOption

                return (
                  <Button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    disabled={answered && !showCorrect && !showWrong}
                    variant={showCorrect || showWrong ? 'contained' : 'outlined'}
                    color={showCorrect ? 'success' : showWrong ? 'error' : 'primary'}
                    fullWidth
                    size="large"
                    endIcon={
                      showCorrect ? (
                        <CheckCircleOutlineIcon />
                      ) : showWrong ? (
                        <HighlightOffIcon />
                      ) : undefined
                    }
                    sx={{
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      py: 1.5,
                      textTransform: 'none',
                      fontSize: '1.05rem',
                      '&.Mui-disabled': { opacity: 0.6 },
                    }}
                  >
                    <Box component="span" lang={option.ja ? 'ja' : undefined}>
                      {option.label}
                    </Box>
                  </Button>
                )
              })}
            </Stack>

            <Box sx={{ minHeight: 56 }}>
              {answered ? (
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: selectedId === question.correctId ? 'success.main' : 'error.main',
                    }}
                  >
                    {selectedId === question.correctId ? t('n5.correct') : t('n5.incorrect')}
                  </Typography>
                  <Button variant="contained" onClick={handleNext}>
                    {isLast ? t('n5.seeResults') : t('n5.next')}
                  </Button>
                </Stack>
              ) : null}
            </Box>
          </>
        )}
      </Stack>
    </PageContainer>
  )
}

function SpeechUnavailable({ lesson }: { lesson: N5Lesson }) {
  const { t } = useTranslation()

  return (
    <PageContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('n5.listening')}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('n5.speechUnsupported')}
      </Typography>
      <Button component={RouterLink} to={n5LessonPath(lesson.id)} variant="contained">
        {t('n5.reviewLesson')}
      </Button>
    </PageContainer>
  )
}

function N5LessonListeningPage() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const { locale } = useTranslation()
  const lesson = lessonId ? getN5Lesson(lessonId) : undefined

  if (!lesson) {
    return <LessonNotFound />
  }

  if (!isSpeechSupported()) {
    return <SpeechUnavailable lesson={lesson} />
  }

  return <ListeningQuiz key={`${lesson.id}:${locale}`} lesson={lesson} />
}

export default N5LessonListeningPage
