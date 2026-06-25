import LanguageIcon from '@mui/icons-material/Language';
import { Box, ButtonBase, Typography } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/i18n/translations.ts';

const locales: { code: Locale; shortLabel: string; labelKey: 'language.en' | 'language.vi' }[] = [
  { code: 'en', shortLabel: 'EN', labelKey: 'language.en' },
  { code: 'vi', shortLabel: 'VI', labelKey: 'language.vi' }
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  return (
    <Box
      role="group"
      aria-label={t('language.label')}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        p: 0.625,
        px: 1,
        borderRadius: 999,
        bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.100' : 'action.selected')
      }}
    >
      <LanguageIcon sx={{ fontSize: 17, mr: 0.25, color: 'text.secondary' }} />

      {locales.map(({ code, shortLabel, labelKey }) => {
        const selected = locale === code;

        return (
          <ButtonBase
            key={code}
            onClick={() => setLocale(code)}
            aria-pressed={selected}
            aria-label={t(labelKey)}
            sx={{
              px: 1.25,
              py: 0.5,
              borderRadius: 999,
              minWidth: 40,
              bgcolor: selected ? 'background.paper' : 'transparent',
              boxShadow: selected
                ? '0 1px 2px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)'
                : 'none',
              transition: 'background-color 0.15s, box-shadow 0.15s',
              '&:hover': {
                bgcolor: selected ? 'background.paper' : 'action.hover'
              },
              '&.Mui-focusVisible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: 2
              }
            }}
          >
            <Typography
              variant="caption"
              component="span"
              sx={{
                fontWeight: selected ? 700 : 500,
                color: selected ? 'text.primary' : 'text.secondary',
                letterSpacing: 0.4,
                lineHeight: 1
              }}
            >
              {shortLabel}
            </Typography>
          </ButtonBase>
        );
      })}
    </Box>
  );
}
