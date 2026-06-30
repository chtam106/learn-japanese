import { Fragment, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '@/components/app-layout';
import HomePage from '@/pages/index.tsx';
import { COURSE_LEVELS, coursePath } from '@/constants/courses/levels.ts';
import { routes } from '@/constants/routes.ts';
import { PREFIXED_LOCALE } from '@/i18n/locale-routing.ts';
import * as Sentry from '@sentry/react';

const AlphabetPage = lazy(() => import('@/pages/alphabet/index.tsx'));
const HiraganaPage = lazy(() => import('@/pages/alphabet/hiragana/index.tsx'));
const KatakanaPage = lazy(() => import('@/pages/alphabet/katakana/index.tsx'));
const CombinedChartPage = lazy(() => import('@/pages/alphabet/combined/index.tsx'));
const ExerciseHubPage = lazy(() => import('@/pages/alphabet/exercise/index.tsx'));
const RomajiExercisePage = lazy(() => import('@/pages/alphabet/exercise/romaji/index.tsx'));
const CharacterExercisePage = lazy(() => import('@/pages/alphabet/exercise/character/index.tsx'));
const ListenExercisePage = lazy(() => import('@/pages/alphabet/exercise/listen/index.tsx'));
const ScriptPairExercisePage = lazy(
  () => import('@/pages/alphabet/exercise/script-pair/index.tsx')
);
const WritingExercisePage = lazy(() => import('@/pages/alphabet/exercise/writing/index.tsx'));
const SentenceExercisePage = lazy(() => import('@/pages/alphabet/exercise/sentence/index.tsx'));
const CoursePage = lazy(() => import('@/pages/course/course-page'));
const FrontendReferencePage = lazy(() => import('@/pages/course/frontend-reference'));
const LessonPage = lazy(() => import('@/pages/course/lesson-page'));
const ExercisePage = lazy(() => import('@/pages/course/exercise-page'));
const ListeningPage = lazy(() => import('@/pages/course/listening-page'));
const ReadingPage = lazy(() => import('@/pages/course/reading-page'));
const NotFoundPage = lazy(() => import('@/pages/not-found'));

/** Prefix a logical route path for a locale tree (vi at root, en under `/en`). */
function localizePath(logicalPath: string, prefix: string) {
  if (logicalPath === '/') {
    return prefix === '' ? '/' : prefix;
  }

  return `${prefix}${logicalPath}`;
}

/** The full route tree for one locale, mounted at the given path prefix. */
function localeRoutes(prefix: string) {
  return (
    <Fragment key={prefix || 'root'}>
      <Route path={localizePath(routes.home, prefix)} element={<HomePage />} />

      {COURSE_LEVELS.map((level) => {
        const base = localizePath(coursePath(level), prefix);

        return (
          <Fragment key={`${prefix}-${level}`}>
            <Route path={base} element={<CoursePage level={level} />} />
            <Route path={`${base}/lesson/:lessonId`} element={<LessonPage level={level} />} />
            <Route
              path={`${base}/lesson/:lessonId/exercise`}
              element={<ExercisePage level={level} />}
            />
            <Route
              path={`${base}/lesson/:lessonId/listening`}
              element={<ListeningPage level={level} />}
            />
            <Route
              path={`${base}/lesson/:lessonId/reading`}
              element={<ReadingPage level={level} />}
            />
          </Fragment>
        );
      })}

      <Route
        path={localizePath(routes.frontend.reference, prefix)}
        element={<FrontendReferencePage />}
      />

      <Route path={localizePath(routes.alphabet.index, prefix)} element={<AlphabetPage />} />
      <Route path={localizePath(routes.alphabet.hiragana, prefix)} element={<HiraganaPage />} />
      <Route path={localizePath(routes.alphabet.katakana, prefix)} element={<KatakanaPage />} />
      <Route
        path={localizePath(routes.alphabet.combined, prefix)}
        element={<CombinedChartPage />}
      />
      <Route
        path={localizePath(routes.alphabet.exercise.index, prefix)}
        element={<ExerciseHubPage />}
      />
      <Route
        path={localizePath(routes.alphabet.exercise.romaji, prefix)}
        element={<RomajiExercisePage />}
      />
      <Route
        path={localizePath(routes.alphabet.exercise.character, prefix)}
        element={<CharacterExercisePage />}
      />
      <Route
        path={localizePath(routes.alphabet.exercise.listen, prefix)}
        element={<ListenExercisePage />}
      />
      <Route
        path={localizePath(routes.alphabet.exercise.scriptPair, prefix)}
        element={<ScriptPairExercisePage />}
      />
      <Route
        path={localizePath(routes.alphabet.exercise.writing, prefix)}
        element={<WritingExercisePage />}
      />
      <Route
        path={localizePath(routes.alphabet.exercise.sentence, prefix)}
        element={<SentenceExercisePage />}
      />
    </Fragment>
  );
}

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: 'https://bf3133d22cc666760ff3802a937d83e4@o4511653477548032.ingest.us.sentry.io/4511653482004480',
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
  });
}

function App() {
  return (
    <Suspense fallback={<div aria-busy="true" style={{ minHeight: '100svh' }} />}>
      <Routes>
        <Route element={<AppLayout />}>
          {localeRoutes('')}
          {localeRoutes(`/${PREFIXED_LOCALE}`)}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
