import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Button, Typography } from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { NavCardGrid, type NavCardItem } from '@/components/nav-card.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function ExerciseHubPage() {
  const { t } = useTranslation();

  const cards: NavCardItem[] = [
    {
      to: routes.alphabet.exercise.romaji,
      title: t('exercise.guessRomaji'),
      description: t('exercise.romajiDescription'),
      icon: TranslateOutlinedIcon
    },
    {
      to: routes.alphabet.exercise.character,
      title: t('exercise.chooseCharacter'),
      description: t('exercise.characterDescription'),
      icon: SpellcheckOutlinedIcon
    },
    {
      to: routes.alphabet.exercise.listen,
      title: t('exercise.listenPickShort'),
      description: t('exercise.listenDescription'),
      icon: HeadphonesOutlinedIcon
    },
    {
      to: routes.alphabet.exercise.scriptPair,
      title: t('exercise.scriptPair'),
      description: t('exercise.scriptPairDescription'),
      icon: SwapHorizOutlinedIcon
    },
    {
      to: routes.alphabet.exercise.writing,
      title: t('exercise.writing'),
      description: t('exercise.writingDescription'),
      icon: DrawOutlinedIcon
    }
  ];

  return (
    <PageContainer>
      <Button
        component={RouterLink}
        to={routes.alphabet.index}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2, ml: -1 }}
      >
        {t('common.back')}
      </Button>

      <Heading component="h1" gutterBottom>
        {t('exercise.title')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('exercise.hubSubtitle')}
      </Typography>

      <NavCardGrid items={cards} />
    </PageContainer>
  );
}

export default ExerciseHubPage;
