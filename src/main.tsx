import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './index.css';
import App from './app.tsx';
import { ErrorBoundary } from '@/components/error-boundary';
import { LanguageProvider } from '@/i18n/context.tsx';
import { readStoredLocale } from '@/i18n/language-context.ts';
import type { TranslationTree } from '@/i18n/translations.ts';
import { appTheme } from '@/theme/app-theme.ts';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '');

async function bootstrap() {
  const initialLocale = readStoredLocale();
  let initialViTranslations: TranslationTree | undefined;

  if (initialLocale === 'vi') {
    const { viTranslations } = await import('@/i18n/translations-vi.ts');
    initialViTranslations = viTranslations;
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <LanguageProvider
          initialLocale={initialLocale}
          initialTranslations={initialViTranslations ? { vi: initialViTranslations } : undefined}
        >
          <ErrorBoundary>
            <BrowserRouter basename={routerBasename || undefined}>
              <App />
            </BrowserRouter>
          </ErrorBoundary>
        </LanguageProvider>
      </ThemeProvider>
    </StrictMode>
  );
}

void bootstrap();
