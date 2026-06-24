import { Link as RouterLink, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import {
  coursePath,
  getCourse,
  getLesson,
  lessonExercisePath,
  lessonHasReading,
  lessonListeningPath,
  lessonPath,
  lessonReadingPath,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { GrammarPointCard } from '@/components/grammar-point-card.tsx';
import { Heading } from '@/components/heading.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { SpeakButton } from '@/components/speak-button.tsx';
import { SpeakableSurface } from '@/components/speakable-surface.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { subtleSurfaceSx, tonalSurfaceSx } from '@/theme/surfaces.ts';
import { LessonNotFound } from './shared.tsx';

function VocabularySection({ lesson }: { lesson: Lesson }) {
  const { locale, t } = useTranslation();

  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <MenuBookOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.vocabulary')}</Heading>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 1.5
        }}
      >
        {lesson.vocab.map((item) => (
          <SpeakableSurface
            key={`${item.kana}-${item.romaji}`}
            text={item.kana}
            sx={{ p: 1.5, display: 'flex', gap: 0.5, alignItems: 'flex-start' }}
          >
            <SpeakButton text={item.kana} />
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="subtitle1" component="span" lang="ja" sx={{ fontWeight: 600 }}>
                {item.kanji ?? item.kana}
              </Typography>
              {item.kanji && (
                <Typography
                  variant="body2"
                  component="span"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                  lang="ja"
                >
                  {item.kana}
                </Typography>
              )}
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                {item.romaji}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {item.meaning[locale]}
              </Typography>
            </Box>
          </SpeakableSurface>
        ))}
      </Box>
    </Box>
  );
}

function GrammarSection({ lesson }: { lesson: Lesson }) {
  const { t } = useTranslation();

  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <TranslateOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.grammar')}</Heading>
      </Stack>

      <Stack spacing={2}>
        {lesson.grammar.map((point) => (
          <GrammarPointCard key={point.pattern} point={point} />
        ))}
      </Stack>
    </Box>
  );
}

function PracticePanel({ level, lesson }: { level: CourseLevel; lesson: Lesson }) {
  const { t } = useTranslation();
  const hasReading = lessonHasReading(lesson);

  return (
    <Paper
      elevation={0}
      sx={[
        tonalSurfaceSx,
        {
          p: { xs: 2.5, md: 3 },
          display: 'flex',
          flexDirection: { xs: 'column', xl: 'row' },
          alignItems: { xl: 'center' },
          justifyContent: 'space-between',
          gap: 2
        }
      ]}
    >
      <Box>
        <Heading scale="subsection" component="h2">
          {t('course.practiceHeading')}
        </Heading>
        <Typography variant="body2" color="text.secondary">
          {t('course.exerciseSubtitle')}
        </Typography>
      </Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        sx={{ flexShrink: 0, width: { xs: '100%', xl: 'auto' }, flexWrap: 'wrap' }}
        useFlexGap
      >
        <Button
          component={RouterLink}
          to={lessonExercisePath(level, lesson.id)}
          variant="contained"
          size="large"
          startIcon={<FitnessCenterOutlinedIcon />}
        >
          {t('course.startExercise')}
        </Button>
        <Button
          component={RouterLink}
          to={lessonListeningPath(level, lesson.id)}
          variant="outlined"
          size="large"
          startIcon={<HeadphonesOutlinedIcon />}
        >
          {t('course.startListening')}
        </Button>
        {hasReading && (
          <Button
            component={RouterLink}
            to={lessonReadingPath(level, lesson.id)}
            variant="outlined"
            size="large"
            startIcon={<ImportContactsOutlinedIcon />}
          >
            {t('course.startReading')}
          </Button>
        )}
      </Stack>
    </Paper>
  );
}

function LessonPage({ level }: { level: CourseLevel }) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { locale, t } = useTranslation();

  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson) {
    return <LessonNotFound level={level} />;
  }

  const course = getCourse(level);
  const lessons = course.lessons;
  const index = lessons.findIndex((item) => item.id === lesson.id);
  const previous = index > 0 ? lessons[index - 1] : undefined;
  const next = index < lessons.length - 1 ? lessons[index + 1] : undefined;

  return (
    <PageContainer>
      <Stack spacing={4}>
        <Box>
          <Box sx={{ mb: 1.5 }}>
            <Button
              component={RouterLink}
              to={coursePath(level)}
              startIcon={<ArrowBackIcon />}
              size="small"
              sx={{ ml: -0.5 }}
            >
              {t('common.back')}
            </Button>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ mb: 1, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Chip
              label={t('course.lessonLabel', { number: lesson.number })}
              color="primary"
              variant="outlined"
            />
            {lesson.track === 'frontend' && (
              <Chip label={t('course.frontendTrackTag')} color="secondary" variant="outlined" />
            )}
            {lesson.track !== 'frontend' && (
              <Chip label={course.code} color="secondary" variant="outlined" />
            )}
          </Stack>
          <Heading component="h1">{lesson.title[locale]}</Heading>

          <Paper elevation={0} sx={[subtleSurfaceSx, { p: 2, mt: 2 }]}>
            <Typography variant="overline" color="text.secondary">
              {t('course.focusLabel')}
            </Typography>
            <Typography variant="body1">{lesson.focus[locale]}</Typography>
          </Paper>
        </Box>

        <VocabularySection lesson={lesson} />
        <GrammarSection lesson={lesson} />

        <PracticePanel level={level} lesson={lesson} />

        <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            {previous && (
              <Button
                component={RouterLink}
                to={lessonPath(level, previous.id)}
                startIcon={<ArrowBackIcon />}
                variant="outlined"
                sx={{
                  justifyContent: 'flex-start',
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: { sm: 180 },
                  maxWidth: { sm: 260 }
                }}
              >
                {t('course.previousLesson')}
              </Button>
            )}
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {next && (
              <Button
                component={RouterLink}
                to={lessonPath(level, next.id)}
                endIcon={<ArrowForwardIcon />}
                variant="contained"
                sx={{
                  justifyContent: 'flex-end',
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: { sm: 180 },
                  maxWidth: { sm: 260 }
                }}
              >
                {t('course.nextLesson')}
              </Button>
            )}
          </Box>
        </Stack>
      </Stack>
    </PageContainer>
  );
}

export default LessonPage;
