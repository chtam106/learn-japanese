import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Box, Stack, Typography } from '@mui/material';
import { AiDisclaimer } from '@/components/ai-disclaimer';
import { Heading } from '@/components/heading';
import { NavCardGrid, type NavCardItem } from '@/components/nav-card';
import { PageContainer } from '@/components/page-container';
import { COURSE_SUMMARIES } from '@/constants/courses/summaries.ts';
import { coursePath } from '@/constants/courses/levels.ts';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function HomePage() {
  const { locale, t } = useTranslation();

  const alphabetCards: NavCardItem[] = [
    {
      to: routes.alphabet.hiragana,
      title: t('nav.hiragana'),
      symbol: 'あ',
      description: t('home.hiraganaDescription')
    },
    {
      to: routes.alphabet.katakana,
      title: t('nav.katakana'),
      symbol: 'ア',
      description: t('home.katakanaDescription')
    },
    {
      to: routes.alphabet.combined,
      title: t('nav.combined'),
      symbol: 'あ/ア',
      description: t('home.combinedDescription')
    },
    {
      to: routes.alphabet.exercise.index,
      title: t('nav.exercise'),
      icon: QuizOutlinedIcon,
      description: t('home.exerciseDescription')
    }
  ];

  const courseCards: NavCardItem[] = COURSE_SUMMARIES.map((course) => ({
    to: coursePath(course.level),
    title: course.name[locale],
    icon: HistoryEduOutlinedIcon,
    description: course.subtitle[locale]
  }));

  return (
    <PageContainer>
      <Stack spacing={4}>
        <Box>
          <Heading component="h1" gutterBottom>
            {t('home.title')}
          </Heading>
          <Typography variant="body1" color="text.secondary">
            {t('home.intro')}
          </Typography>
        </Box>

        <Stack spacing={1.5}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {t('home.alphabetSection')}
          </Typography>
          <NavCardGrid items={alphabetCards} titleComponent="h3" />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {t('home.coursesSection')}
          </Typography>
          <AiDisclaimer text={t('course.aiDisclaimer')} />
          <NavCardGrid items={courseCards} titleComponent="h3" />
        </Stack>
      </Stack>
    </PageContainer>
  );
}

export default HomePage;
