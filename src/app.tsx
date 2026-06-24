import { Fragment, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '@/components/app-layout.tsx'
import HomePage from '@/pages/index.tsx'
import { COURSE_LEVELS, coursePath } from '@/constants/courses/levels.ts'
import { routes } from '@/constants/routes.ts'

const AlphabetPage = lazy(() => import('@/pages/alphabet/index.tsx'))
const HiraganaPage = lazy(() => import('@/pages/alphabet/hiragana/index.tsx'))
const KatakanaPage = lazy(() => import('@/pages/alphabet/katakana/index.tsx'))
const ExerciseHubPage = lazy(() => import('@/pages/alphabet/exercise/index.tsx'))
const RomajiExercisePage = lazy(() => import('@/pages/alphabet/exercise/romaji/index.tsx'))
const CharacterExercisePage = lazy(() => import('@/pages/alphabet/exercise/character/index.tsx'))
const ListenExercisePage = lazy(() => import('@/pages/alphabet/exercise/listen/index.tsx'))
const ScriptPairExercisePage = lazy(() => import('@/pages/alphabet/exercise/script-pair/index.tsx'))
const CoursePage = lazy(() => import('@/pages/course/course-page.tsx'))
const LessonPage = lazy(() => import('@/pages/course/lesson-page.tsx'))
const ExercisePage = lazy(() => import('@/pages/course/exercise-page.tsx'))
const ListeningPage = lazy(() => import('@/pages/course/listening-page.tsx'))
const ReadingPage = lazy(() => import('@/pages/course/reading-page.tsx'))

function App() {
  return (
    <Suspense fallback={<div aria-busy="true" style={{ minHeight: '100svh' }} />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={routes.home} element={<HomePage />} />

          {COURSE_LEVELS.map((level) => {
            const base = coursePath(level)

            return (
              <Fragment key={level}>
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
            )
          })}

          <Route path={routes.alphabet.index} element={<AlphabetPage />} />
          <Route path={routes.alphabet.hiragana} element={<HiraganaPage />} />
          <Route path={routes.alphabet.katakana} element={<KatakanaPage />} />
          <Route path={routes.alphabet.exercise.index} element={<ExerciseHubPage />} />
          <Route path={routes.alphabet.exercise.romaji} element={<RomajiExercisePage />} />
          <Route path={routes.alphabet.exercise.character} element={<CharacterExercisePage />} />
          <Route path={routes.alphabet.exercise.listen} element={<ListenExercisePage />} />
          <Route path={routes.alphabet.exercise.scriptPair} element={<ScriptPairExercisePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
