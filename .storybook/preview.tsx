import { MemoryRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Decorator, Preview } from '@storybook/react-vite';
import '@/index.css';
import { LanguageProvider } from '@/i18n/context.tsx';
import type { Locale } from '@/i18n/translations.ts';
import { viTranslations } from '@/i18n/translations-vi.ts';
import { appTheme } from '@/theme/app-theme.ts';

const withProviders: Decorator = (Story, context) => {
  const locale = context.globals.locale as Locale;

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {/* Remount on locale change so LanguageProvider re-reads its initial locale. */}
      <LanguageProvider
        key={locale}
        initialLocale={locale}
        initialTranslations={{ vi: viTranslations }}
      >
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withProviders],
  initialGlobals: {
    locale: 'en'
  },
  globalTypes: {
    locale: {
      description: 'Display language',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'vi', title: 'Tiếng Việt' }
        ],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  }
};

export default preview;
