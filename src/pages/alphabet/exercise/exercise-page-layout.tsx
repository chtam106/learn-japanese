import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Typography } from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type ExercisePageLayoutProps = {
  title: string;
  subtitle: string;
  note?: ReactNode;
  controls?: ReactNode;
  children: ReactNode;
};

export function ExercisePageLayout({
  title,
  subtitle,
  note,
  controls,
  children
}: ExercisePageLayoutProps) {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Button
        component={RouterLink}
        to={routes.alphabet.exercise.index}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2, ml: -1 }}
      >
        {t('common.back')}
      </Button>

      <Heading component="h1" gutterBottom>
        {title}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: note ? 1.5 : 3 }}>
        {subtitle}
      </Typography>

      {note && <Box sx={{ mb: 3 }}>{note}</Box>}

      {controls && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))'
            },
            gap: 2,
            mb: 4
          }}
        >
          {controls}
        </Box>
      )}

      {children}
    </PageContainer>
  );
}
