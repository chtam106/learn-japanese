import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material'
import { COURSE_LEVELS, coursePath, lessonPath } from '@/constants/courses/levels.ts'
import { COURSE_SUMMARIES } from '@/constants/courses/summaries.ts'
import type { Bilingual, CourseLevel } from '@/constants/courses/types.ts'
import { routes } from '@/constants/routes.ts'

export type NavItem = {
  labelKey?: 'nav.hiragana' | 'nav.katakana' | 'nav.exercise'
  label?: Bilingual
  path: string
  icon?: ComponentType<SvgIconProps>
  symbol?: string
}

export type NavGroup = {
  labelKey?: 'nav.home' | 'nav.alphabet'
  label?: Bilingual
  path: string
  icon?: ComponentType<SvgIconProps>
  courseLevel?: CourseLevel
  children: NavItem[]
}

function formatLessonNavLabel(number: number, title: Bilingual): Bilingual {
  return {
    en: `Unit ${number}: ${title.en}`,
    vi: `Bài ${number}: ${title.vi}`,
  }
}

const courseSummaryByLevel = Object.fromEntries(
  COURSE_SUMMARIES.map((summary) => [summary.level, summary]),
) as Record<CourseLevel, (typeof COURSE_SUMMARIES)[number]>

const courseGroups: NavGroup[] = COURSE_LEVELS.map((level) => ({
  label: courseSummaryByLevel[level].name,
  path: coursePath(level),
  icon: SchoolOutlinedIcon,
  courseLevel: level,
  children: [],
}))

const courseLessonLoaders: Record<
  CourseLevel,
  () => Promise<Array<{ id: string; number: number; title: Bilingual }>>
> = {
  n5: () => import('@/constants/courses/n5/index.ts').then(({ n5Course }) => n5Course.lessons),
  n4: () => import('@/constants/courses/n4/index.ts').then(({ n4Course }) => n4Course.lessons),
  n3: () => import('@/constants/courses/n3/index.ts').then(({ n3Course }) => n3Course.lessons),
  n2: () => import('@/constants/courses/n2/index.ts').then(({ n2Course }) => n2Course.lessons),
  n1: () => import('@/constants/courses/n1/index.ts').then(({ n1Course }) => n1Course.lessons),
  frontend: () =>
    import('@/constants/courses/frontend/index.ts').then(({ frontendCourse }) => frontendCourse.lessons),
}

export const navGroups: NavGroup[] = [
  {
    labelKey: 'nav.home',
    path: routes.home,
    icon: HomeOutlinedIcon,
    children: [],
  },
  {
    labelKey: 'nav.alphabet',
    path: routes.alphabet.index,
    icon: MenuBookOutlinedIcon,
    children: [
      {
        labelKey: 'nav.hiragana',
        path: routes.alphabet.hiragana,
        symbol: 'あ',
      },
      {
        labelKey: 'nav.katakana',
        path: routes.alphabet.katakana,
        symbol: 'ア',
      },
      {
        labelKey: 'nav.exercise',
        path: routes.alphabet.exercise.index,
        icon: QuizOutlinedIcon,
      },
    ],
  },
  ...courseGroups,
]

export function isNavGroupActive(group: NavGroup, pathname: string) {
  if (pathname === group.path) {
    return true
  }

  if (group.courseLevel) {
    return pathname.startsWith(`${group.path}/lesson/`)
  }

  return group.children.some(
    (child) => child.path === pathname || pathname.startsWith(`${child.path}/`),
  )
}

export async function loadCourseLessonNavItems(level: CourseLevel): Promise<NavItem[]> {
  const lessons = await courseLessonLoaders[level]()

  return lessons.map((lesson) => ({
    label: formatLessonNavLabel(lesson.number, lesson.title),
    path: lessonPath(level, lesson.id),
  }))
}
