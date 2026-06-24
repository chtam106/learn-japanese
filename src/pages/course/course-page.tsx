import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { getCourse, lessonPath, type CourseLevel } from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

function CoursePage({ level }: { level: CourseLevel }) {
  const { locale, t } = useTranslation();
  const course = getCourse(level);
  const coreLessons = course.lessons.filter((lesson) => lesson.track !== 'frontend');
  const frontendLessons = course.lessons.filter((lesson) => lesson.track === 'frontend');

  const renderLessonCards = (trackLessons: typeof course.lessons) => (
    <Stack spacing={1.5}>
      {trackLessons.map((lesson) => (
        <Card key={lesson.id} elevation={0} sx={interactiveSurfaceSx}>
          <CardActionArea component={RouterLink} to={lessonPath(level, lesson.id)}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                sx={{ alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ alignItems: 'center', mb: 1, flexWrap: 'wrap' }}
                  >
                    <Chip
                      label={t('course.lessonLabel', { number: lesson.number })}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    {lesson.track === 'frontend' ? (
                      <Chip
                        label={t('course.frontendTrackTag')}
                        size="small"
                        color="secondary"
                        variant="outlined"
                      />
                    ) : null}
                  </Stack>
                  <Heading component="h3">{lesson.title[locale]}</Heading>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {lesson.focus[locale]}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: 1, display: 'block' }}
                  >
                    {t('course.counts', {
                      vocab: lesson.vocab.length,
                      grammar: lesson.grammar.length,
                    })}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );

  return (
    <PageContainer>
      <Stack spacing={4}>
        <Box>
          <Heading component="h1" gutterBottom>
            {course.name[locale]}
          </Heading>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 2 }}>
            {course.subtitle[locale]}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 620 }}>
            {course.intro[locale]}
          </Typography>
        </Box>

        <Box>
          <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
            {t('course.lessonsHeading')}
          </Heading>

          {frontendLessons.length > 0 ? (
            <Stack spacing={3}>
              {coreLessons.length > 0 ? (
                <Box>
                  <Heading component="h3" sx={{ mb: 1.5 }}>
                    {t('course.coreTrackHeading')}
                  </Heading>
                  {renderLessonCards(coreLessons)}
                </Box>
              ) : null}

              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ alignItems: 'center', mb: 1, flexWrap: 'wrap' }}
                >
                  <Heading component="h3">{t('course.frontendTrackHeading')}</Heading>
                  <Chip
                    label={t('course.frontendTrackTag')}
                    size="small"
                    color="secondary"
                    variant="outlined"
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  {t('course.frontendTrackDescription')}
                </Typography>
                {renderLessonCards(frontendLessons)}
              </Box>
            </Stack>
          ) : (
            renderLessonCards(course.lessons)
          )}
        </Box>

        {course.lessons.length > 0 ? (
          <Box>
            <Button
              component={RouterLink}
              to={lessonPath(level, course.lessons[0].id)}
              variant="contained"
              size="large"
            >
              {t('course.openLesson')}
            </Button>
          </Box>
        ) : null}
      </Stack>
    </PageContainer>
  );
}

export default CoursePage;
