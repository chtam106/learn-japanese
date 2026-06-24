import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import type { GrammarPoint } from '@/constants/courses/types.ts';
import { Heading } from '@/components/heading.tsx';
import { SpeakButton } from '@/components/speak-button.tsx';
import { SpeakableSurface } from '@/components/speakable-surface.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

/** A grammar point: pattern chip, title, explanation, and speakable examples. */
export function GrammarPointCard({ point }: { point: GrammarPoint }) {
  const { locale, t } = useTranslation();

  return (
    <Card elevation={0} sx={elevatedSurfaceSx}>
      <CardContent>
        <Chip label={point.pattern} size="small" sx={{ mb: 1, fontWeight: 600 }} lang="ja" />
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
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                    {example.romaji}
                  </Typography>
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
