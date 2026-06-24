import { Link as RouterLink } from 'react-router-dom';
import type { ComponentType } from 'react';
import type { SvgIconProps } from '@mui/material';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Box, Card, CardActionArea, CardContent, Paper, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { interactiveSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

type AlphabetCard = {
  to: string;
  title: string;
  description: string;
  symbol?: string;
  icon?: ComponentType<SvgIconProps>;
};

function AlphabetPage() {
  const { t } = useTranslation();

  const cards: AlphabetCard[] = [
    {
      to: routes.alphabet.hiragana,
      title: t('nav.hiragana'),
      symbol: 'あ',
      description: t('alphabet.hiraganaDescription')
    },
    {
      to: routes.alphabet.katakana,
      title: t('nav.katakana'),
      symbol: 'ア',
      description: t('alphabet.katakanaDescription')
    },
    {
      to: routes.alphabet.combined,
      title: t('nav.combined'),
      symbol: 'あ/ア',
      description: t('alphabet.combinedDescription')
    },
    {
      to: routes.alphabet.exercise.index,
      title: t('nav.exercise'),
      icon: QuizOutlinedIcon,
      description: t('alphabet.exerciseDescription')
    }
  ];

  const writingSystems = [
    t('alphabet.systemHiragana'),
    t('alphabet.systemKatakana'),
    t('alphabet.systemKanji')
  ];

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {t('alphabet.title')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {t('alphabet.intro')}
      </Typography>

      <Paper elevation={0} sx={[subtleSurfaceSx, { p: 2.5, mb: 3 }]}>
        <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
          {t('alphabet.systemsHeading')}
        </Heading>
        <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.5 }}>
          {writingSystems.map((system) => (
            <Box component="li" key={system}>
              <Typography variant="body2" color="text.secondary">
                {system}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Paper>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {t('alphabet.subtitle')}
      </Typography>

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
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
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
    </PageContainer>
  );
}

export default AlphabetPage;
