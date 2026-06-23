import { Link as RouterLink, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import {
  getN5Lesson,
  n5Lessons,
  n5LessonExercisePath,
  n5LessonListeningPath,
  n5LessonPath,
  type N5Lesson,
} from '@/constants/n5-course.ts'
import { PageContainer } from '@/components/page-container.tsx'
import { SpeakButton } from '@/components/speak-button.tsx'
import { routes } from '@/constants/routes.ts'
import { useTranslation } from '@/i18n/use-translation.ts'
import { elevatedSurfaceSx, subtleSurfaceSx, tonalSurfaceSx } from '@/theme/surfaces.ts'

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

function VocabularySection({ lesson }: { lesson: N5Lesson }) {
  const { locale, t } = useTranslation()

  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <MenuBookOutlinedIcon color="primary" />
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {t('n5.vocabulary')}
        </Typography>
      </Stack>

      <Paper elevation={0} sx={elevatedSurfaceSx}>
        <Stack divider={<Divider />}>
          {lesson.vocab.map((item) => (
            <Box
              key={`${item.kana}-${item.romaji}`}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: { xs: 0.5, sm: 2 },
                px: 2,
                py: 1.5,
              }}
            >
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start' }}>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="h6" component="span" lang="ja">
                    {item.kanji ?? item.kana}
                  </Typography>
                  {item.kanji ? (
                    <Typography
                      variant="body2"
                      component="span"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                      lang="ja"
                    >
                      {item.kana}
                    </Typography>
                  ) : null}
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                    {item.romaji}
                  </Typography>
                </Box>
                <SpeakButton text={item.kana} />
              </Stack>
              <Typography
                variant="body1"
                sx={{ alignSelf: 'center', textAlign: { xs: 'left', sm: 'right' } }}
              >
                {item.meaning[locale]}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  )
}

function GrammarSection({ lesson }: { lesson: N5Lesson }) {
  const { locale, t } = useTranslation()

  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <TranslateOutlinedIcon color="primary" />
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {t('n5.grammar')}
        </Typography>
      </Stack>

      <Stack spacing={2}>
        {lesson.grammar.map((point) => (
          <Card key={point.pattern} elevation={0} sx={elevatedSurfaceSx}>
            <CardContent>
              <Chip label={point.pattern} size="small" sx={{ mb: 1, fontWeight: 600 }} lang="ja" />
              <Typography variant="h6" component="h3" gutterBottom>
                {point.title[locale]}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {point.explanation[locale]}
              </Typography>

              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ display: 'block', mb: 0.5 }}
              >
                {t('n5.examples')}
              </Typography>
              <Stack spacing={1.5}>
                {point.examples.map((example) => (
                  <Box
                    key={example.jp}
                    sx={{ borderLeft: 3, borderColor: 'primary.main', pl: 1.5 }}
                  >
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start' }}>
                      <Typography variant="body1" lang="ja" sx={{ flex: 1, fontWeight: 500 }}>
                        {example.jp}
                      </Typography>
                      <SpeakButton text={example.jp} />
                    </Stack>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      {example.romaji}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.25 }}>
                      {example.meaning[locale]}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}

function N5LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const { locale, t } = useTranslation()

  const lesson = lessonId ? getN5Lesson(lessonId) : undefined

  if (!lesson) {
    return <LessonNotFound />
  }

  const index = n5Lessons.findIndex((item) => item.id === lesson.id)
  const previous = index > 0 ? n5Lessons[index - 1] : undefined
  const next = index < n5Lessons.length - 1 ? n5Lessons[index + 1] : undefined

  return (
    <PageContainer>
      <Stack spacing={4}>
        <Box>
          <Box sx={{ mb: 1.5 }}>
            <Button
              component={RouterLink}
              to={routes.n5.index}
              startIcon={<ArrowBackIcon />}
              size="small"
              sx={{ ml: -0.5 }}
            >
              {t('n5.backToCourse')}
            </Button>
          </Box>

          <Chip
            label={t('n5.lessonLabel', { number: lesson.number })}
            color="primary"
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
            {lesson.title[locale]}
          </Typography>

          <Paper elevation={0} sx={[subtleSurfaceSx, { p: 2, mt: 2 }]}>
            <Typography variant="overline" color="text.secondary">
              {t('n5.focusLabel')}
            </Typography>
            <Typography variant="body1">{lesson.focus[locale]}</Typography>
          </Paper>
        </Box>

        <VocabularySection lesson={lesson} />
        <GrammarSection lesson={lesson} />

        <Paper
          elevation={0}
          sx={[
            tonalSurfaceSx,
            {
              p: { xs: 2.5, md: 3 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
            },
          ]}
        >
          <Box>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
              {t('n5.exercise')} &amp; {t('n5.listening')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('n5.exerciseSubtitle')}
            </Typography>
          </Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ flexShrink: 0, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button
              component={RouterLink}
              to={n5LessonExercisePath(lesson.id)}
              variant="contained"
              size="large"
              startIcon={<FitnessCenterOutlinedIcon />}
            >
              {t('n5.startExercise')}
            </Button>
            <Button
              component={RouterLink}
              to={n5LessonListeningPath(lesson.id)}
              variant="outlined"
              size="large"
              startIcon={<HeadphonesOutlinedIcon />}
            >
              {t('n5.startListening')}
            </Button>
          </Stack>
        </Paper>

        <Divider />

        <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }}>
            {previous ? (
              <Button
                component={RouterLink}
                to={n5LessonPath(previous.id)}
                startIcon={<ArrowBackIcon />}
                variant="outlined"
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                {t('n5.previousLesson')}
              </Button>
            ) : null}
          </Box>
          <Box sx={{ flex: 1 }}>
            {next ? (
              <Button
                component={RouterLink}
                to={n5LessonPath(next.id)}
                endIcon={<ArrowForwardIcon />}
                variant="contained"
                fullWidth
                sx={{ justifyContent: 'flex-end' }}
              >
                {t('n5.nextLesson')}
              </Button>
            ) : null}
          </Box>
        </Stack>
      </Stack>
    </PageContainer>
  )
}

export default N5LessonPage
