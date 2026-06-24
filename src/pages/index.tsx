import { Link as RouterLink } from 'react-router-dom';
import type { ComponentType } from 'react';
import type { SvgIconProps } from '@mui/material';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { COURSE_SUMMARIES } from '@/constants/courses/summaries.ts';
import { coursePath } from '@/constants/courses/levels.ts';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

type StudyCard = {
  to: string;
  title: string;
  description: string;
  symbol?: string;
  icon?: ComponentType<SvgIconProps>;
};

function StudyCardGrid({ cards }: { cards: StudyCard[] }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 2
      }}
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.to} elevation={0} sx={[interactiveSurfaceSx, { height: '100%' }]}>
            <CardActionArea
              component={RouterLink}
              to={card.to}
              sx={{ height: '100%', alignItems: 'stretch' }}
            >
              <CardContent>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{ display: 'inline-flex', lineHeight: 1 }}
                  >
                    {card.symbol}
                    {card.symbol == null && Icon && <Icon fontSize="inherit" />}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    {card.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
}

function HomePage() {
  const { locale, t } = useTranslation();

  const alphabetCards: StudyCard[] = [
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

  const courseCards: StudyCard[] = COURSE_SUMMARIES.map((course) => ({
    to: coursePath(course.level),
    title: course.name[locale],
    icon: SchoolOutlinedIcon,
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
          <StudyCardGrid cards={alphabetCards} />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {t('home.coursesSection')}
          </Typography>
          <StudyCardGrid cards={courseCards} />
        </Stack>
      </Stack>
    </PageContainer>
  );
}

export default HomePage;
