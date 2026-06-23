import { Link as RouterLink } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { PageContainer } from '@/components/page-container.tsx'
import { n5Lessons, n5LessonPath } from '@/constants/n5-course.ts'
import { useTranslation } from '@/i18n/use-translation.ts'
import { interactiveSurfaceSx } from '@/theme/surfaces.ts'

function N5CoursePage() {
  const { locale, t } = useTranslation()

  return (
    <PageContainer>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            {t('n5.title')}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 2 }}>
            {t('n5.subtitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 620 }}>
            {t('n5.intro')}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
            {t('n5.lessonsHeading')}
          </Typography>

          <Stack spacing={1.5}>
            {n5Lessons.map((lesson) => (
              <Card key={lesson.id} elevation={0} sx={interactiveSurfaceSx}>
                <CardActionArea component={RouterLink} to={n5LessonPath(lesson.id)}>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                    >
                      <Box sx={{ minWidth: 0 }}>
                        <Chip
                          label={t('n5.lessonLabel', { number: lesson.number })}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                        <Typography variant="h6" component="h3">
                          {lesson.title[locale]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                          {lesson.focus[locale]}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ mt: 1, display: 'block' }}
                        >
                          {t('n5.counts', {
                            vocab: lesson.vocab.length,
                            grammar: lesson.grammar.length,
                          })}
                        </Typography>
                      </Box>
                      <ArrowForwardIcon color="action" />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </Box>

        <Box>
          <Button
            component={RouterLink}
            to={n5LessonPath(n5Lessons[0].id)}
            variant="contained"
            size="large"
          >
            {t('n5.openLesson')}
          </Button>
        </Box>
      </Stack>
    </PageContainer>
  )
}

export default N5CoursePage
