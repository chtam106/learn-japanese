import { Link as RouterLink } from 'react-router-dom';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { coursePath, lessonPath, type CourseLevel } from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

export function LessonNotFound({ level }: { level: CourseLevel }) {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {t('course.notFoundTitle')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('course.notFoundBody')}
      </Typography>
      <Button component={RouterLink} to={coursePath(level)} variant="contained">
        {t('common.back')}
      </Button>
    </PageContainer>
  );
}

export function ResultScreen({
  score,
  total,
  level,
  lessonId,
  onRetry
}: {
  score: number;
  total: number;
  level: CourseLevel;
  lessonId: string;
  onRetry: () => void;
}) {
  const { t } = useTranslation();
  const ratio = total === 0 ? 0 : score / total;
  const message =
    ratio >= 0.8
      ? t('course.resultGreat')
      : ratio >= 0.5
        ? t('course.resultGood')
        : t('course.resultKeepGoing');

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 3, md: 4 }, textAlign: 'center' }]}>
      <Heading scale="page" component="h2" gutterBottom>
        {t('course.resultTitle')}
      </Heading>
      <Typography variant="h2" component="p" sx={{ fontWeight: 700, color: 'primary.main', my: 2 }}>
        {score} / {total}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {message}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
        useFlexGap
      >
        <Button variant="contained" startIcon={<ReplayIcon />} onClick={onRetry}>
          {t('course.retry')}
        </Button>
        <Button variant="outlined" component={RouterLink} to={lessonPath(level, lessonId)}>
          {t('course.reviewLesson')}
        </Button>
      </Stack>
    </Paper>
  );
}
