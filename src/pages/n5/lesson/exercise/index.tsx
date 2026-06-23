import { useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ReplayIcon from '@mui/icons-material/Replay'
import {
  Box,
  Button,
  Chip,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { getN5Lesson, n5LessonPath, type N5Lesson } from '@/constants/n5-course.ts'
import { PageContainer } from '@/components/page-container.tsx'
import { SpeakButton } from '@/components/speak-button.tsx'
import { routes } from '@/constants/routes.ts'
import { useTranslation } from '@/i18n/use-translation.ts'
import { elevatedSurfaceSx } from '@/theme/surfaces.ts'
import { buildLessonQuiz, normalizeAnswer, type QuizQuestion } from './n5-quiz.ts'

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

function LessonQuiz({ lesson }: { lesson: N5Lesson }) {
  const { locale, t } = useTranslation()

  const [questions, setQuestions] = useState<QuizQuestion[]>(() => buildLessonQuiz(lesson, locale))
  const [index, setIndex] = useState(0)
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  const [inputValue, setInputValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const total = questions.length
  const question = questions[index]
  const isLast = index === total - 1
  const answered = question.format === 'choice' ? selectedId !== undefined : submitted
  const isCorrect =
    question.format === 'choice'
      ? selectedId === question.correctId
      : question.accepted.includes(normalizeAnswer(inputValue))

  const handleSelect = (optionId: string) => {
    if (question.format !== 'choice' || answered) {
      return
    }

    setSelectedId(optionId)

    if (optionId === question.correctId) {
      setScore((previous) => previous + 1)
    }
  }

  const handleSubmitInput = () => {
    if (question.format !== 'input' || submitted || inputValue.trim() === '') {
      return
    }

    setSubmitted(true)

    if (question.accepted.includes(normalizeAnswer(inputValue))) {
      setScore((previous) => previous + 1)
    }
  }

  const handleNext = () => {
    if (isLast) {
      setFinished(true)

      return
    }

    setIndex((previous) => previous + 1)
    setSelectedId(undefined)
    setInputValue('')
    setSubmitted(false)
  }

  const handleRetry = () => {
    setQuestions(buildLessonQuiz(lesson, locale))
    setIndex(0)
    setSelectedId(undefined)
    setInputValue('')
    setSubmitted(false)
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
            {lesson.title[locale]} · {t('n5.exercise')}
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

            <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
              <Typography variant="overline" color="text.secondary">
                {question.format === 'input' ? t('n5.typeAnswer') : t('n5.chooseAnswer')}
              </Typography>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start', mt: 0.5 }}>
                <Typography
                  variant="h4"
                  component="p"
                  sx={{ flex: 1, fontWeight: 600 }}
                  lang={question.promptJa ? 'ja' : undefined}
                >
                  {question.promptPrimary}
                </Typography>
                {question.promptJa && question.kind !== 'grammar-pattern' ? (
                  <SpeakButton text={question.promptPrimary} size="medium" />
                ) : null}
              </Stack>
              {question.promptSecondary ? (
                <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                  {question.promptSecondary}
                </Typography>
              ) : null}
            </Paper>

            {question.format === 'choice' ? (
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
            ) : (
              <Box
                component="form"
                onSubmit={(event) => {
                  event.preventDefault()
                  handleSubmitInput()
                }}
              >
                <Stack direction="row" spacing={1.5}>
                  <TextField
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder={t('n5.inputPlaceholder')}
                    fullWidth
                    autoComplete="off"
                    autoFocus
                    color={submitted ? (isCorrect ? 'success' : 'error') : 'primary'}
                    focused={submitted || undefined}
                    slotProps={{
                      input: { readOnly: submitted },
                      htmlInput: {
                        autoCapitalize: 'none',
                        autoCorrect: 'off',
                        spellCheck: false,
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={submitted || inputValue.trim() === ''}
                  >
                    {t('n5.check')}
                  </Button>
                </Stack>
              </Box>
            )}

            <Box sx={{ minHeight: 56 }}>
              {answered ? (
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: isCorrect ? 'success.main' : 'error.main' }}
                    >
                      {isCorrect ? t('n5.correct') : t('n5.incorrect')}
                    </Typography>
                    {question.format === 'input' && !isCorrect ? (
                      <Typography variant="body2" color="text.secondary">
                        {t('n5.answerWas', { answer: question.answer })}
                      </Typography>
                    ) : null}
                  </Box>
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

function N5LessonExercisePage() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const { locale } = useTranslation()
  const lesson = lessonId ? getN5Lesson(lessonId) : undefined

  if (!lesson) {
    return <LessonNotFound />
  }

  return <LessonQuiz key={`${lesson.id}:${locale}`} lesson={lesson} />
}

export default N5LessonExercisePage
