import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import {
  referenceGrammarPoints,
  referenceMeetingPhrases,
  referenceVocabGroups
} from '@/constants/courses/frontend/reference.ts';
import { Heading } from '@/components/heading.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { SpeakButton } from '@/components/speak-button.tsx';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

function VocabSection() {
  const { locale } = useTranslation();

  return (
    <Stack spacing={3}>
      {referenceVocabGroups.map((group) => (
        <Box key={group.id}>
          <Heading scale="subsection" component="h3" sx={{ mb: 1.5 }}>
            {group.title[locale]}
          </Heading>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 1.5
            }}
          >
            {group.items.map((item) => (
              <Paper
                key={`${item.kana}-${item.romaji}`}
                elevation={0}
                sx={[elevatedSurfaceSx, { p: 1.5, display: 'flex', gap: 0.5 }]}
              >
                <SpeakButton text={item.kana} />
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    lang="ja"
                    sx={{ fontWeight: 600 }}
                  >
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
              </Paper>
            ))}
          </Box>
        </Box>
      ))}
    </Stack>
  );
}

function GrammarSection() {
  const { locale, t } = useTranslation();

  return (
    <Stack spacing={2}>
      {referenceGrammarPoints.map((point) => (
        <Card key={point.pattern} elevation={0} sx={elevatedSurfaceSx}>
          <CardContent>
            <Chip label={point.pattern} size="small" sx={{ mb: 1, fontWeight: 600 }} lang="ja" />
            <Heading component="h3" gutterBottom>
              {point.title[locale]}
            </Heading>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {point.explanation[locale]}
            </Typography>

            <Typography
              variant="overline"
              color="text.secondary"
              sx={{ display: 'block', mb: 0.5 }}
            >
              {t('course.examples')}
            </Typography>
            <Stack spacing={1.5}>
              {point.examples.map((example) => (
                <Paper key={example.jp} elevation={0} sx={[elevatedSurfaceSx, { p: 1.5 }]}>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start' }}>
                    <SpeakButton text={example.jp} />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="body1" lang="ja" sx={{ fontWeight: 500 }}>
                        {example.jp}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block' }}
                      >
                        {example.romaji}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 0.25 }}>
                        {example.meaning[locale]}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

function MeetingSection() {
  const { locale } = useTranslation();

  return (
    <Stack spacing={3}>
      {referenceMeetingPhrases.map((group) => (
        <Box key={group.id}>
          <Heading scale="subsection" component="h3" sx={{ mb: 1.5 }}>
            {group.title[locale]}
          </Heading>
          <Stack spacing={1.5}>
            {group.phrases.map((phrase) => (
              <Paper key={phrase.jp} elevation={0} sx={[elevatedSurfaceSx, { p: 1.5 }]}>
                <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start' }}>
                  <SpeakButton text={phrase.jp} />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="body1" lang="ja" sx={{ fontWeight: 500 }}>
                      {phrase.jp}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      {phrase.romaji}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.25 }}>
                      {phrase.meaning[locale]}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

function FrontendReferencePage() {
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1.5 }}>
            <Button
              component={RouterLink}
              to={routes.frontend.index}
              startIcon={<ArrowBackIcon />}
              size="small"
              sx={{ ml: -0.5 }}
            >
              {t('common.back')}
            </Button>
          </Box>
          <Heading component="h1" gutterBottom>
            {t('course.referenceTitle')}
          </Heading>
          <Typography variant="body1" color="text.secondary">
            {t('course.referenceIntro')}
          </Typography>
        </Box>

        <Tabs
          value={tab}
          onChange={(_event, value: number) => setTab(value)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab
            icon={<MenuBookOutlinedIcon />}
            iconPosition="start"
            label={t('course.referenceVocabHeading')}
          />
          <Tab
            icon={<TranslateOutlinedIcon />}
            iconPosition="start"
            label={t('course.referenceGrammarHeading')}
          />
          <Tab
            icon={<ForumOutlinedIcon />}
            iconPosition="start"
            label={t('course.referenceMeetingHeading')}
          />
        </Tabs>

        {tab === 0 && <VocabSection />}
        {tab === 1 && <GrammarSection />}
        {tab === 2 && <MeetingSection />}
      </Stack>
    </PageContainer>
  );
}

export default FrontendReferencePage;
