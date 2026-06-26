import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { GrammarPoint } from '@/constants/courses/types.ts';
import { Heading } from '@/components/heading';
import { PhoneticsLine } from '@/components/phonetics-line';
import { SpeakButton } from '@/components/speak-button';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type GrammarPointCardProps = {
  point: GrammarPoint;
};

/** A grammar point: pattern chip, title, explanation, and speakable examples. */
export function GrammarPointCard({ point }: GrammarPointCardProps) {
  const { locale, t } = useTranslation();

  return (
    <Card elevation={0} sx={elevatedSurfaceSx}>
      <CardContent>
        <Box
          component="span"
          lang="ja"
          sx={(theme) => ({
            display: 'inline-block',
            mb: 1.5,
            px: 1.5,
            py: 0.75,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.error.main, theme.palette.mode === 'light' ? 0.12 : 0.24),
            color:
              theme.palette.mode === 'light' ? theme.palette.error.dark : theme.palette.error.light,
            fontWeight: 700,
            fontSize: '1.05rem',
            lineHeight: 1.5
          })}
        >
          {point.pattern}
        </Box>
        <Heading component="h3" gutterBottom>
          {point.title[locale]}
        </Heading>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {point.explanation[locale]}
        </Typography>

        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          {t('course.examples')}
        </Typography>
        <Stack spacing={1.5}>
          {point.examples.map((example) => (
            <SpeakableSurface key={example.jp} text={example.jp} sx={{ p: 1.5 }}>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start' }}>
                <SpeakButton text={example.jp} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="body1" lang="ja" sx={{ fontWeight: 500 }}>
                    {example.jp}
                  </Typography>
                  <PhoneticsLine romaji={example.romaji} />
                  <Typography variant="body2" sx={{ mt: 0.25 }}>
                    {example.meaning[locale]}
                  </Typography>
                </Box>
              </Stack>
            </SpeakableSurface>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
