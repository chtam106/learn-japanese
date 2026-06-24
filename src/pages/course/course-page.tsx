import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography
} from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { getCourse, lessonPath, type CourseLevel } from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

function CoursePage({ level }: { level: CourseLevel }) {
  const { locale, t } = useTranslation();
  const course = getCourse(level);

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
          <Typography variant="body1" color="text.secondary">
            {course.intro[locale]}
          </Typography>
        </Box>

        <Box>
          <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
            {t('course.lessonsHeading')}
          </Heading>

          <Stack spacing={1.5}>
            {course.lessons.map((lesson) => (
              <Card key={lesson.id} elevation={0} sx={interactiveSurfaceSx}>
                <CardActionArea component={RouterLink} to={lessonPath(level, lesson.id)}>
                  <CardContent>
                    <Box sx={{ minWidth: 0 }}>
                      <Chip
                        label={t('course.lessonLabel', { number: lesson.number })}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
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
                          grammar: lesson.grammar.length
                        })}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </Box>

        {course.lessons.length > 0 && (
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
        )}
      </Stack>
    </PageContainer>
  );
}

export default CoursePage;
