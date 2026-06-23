import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material'
import { n5Lessons, n5LessonPath, type Bilingual } from '@/constants/n5-course.ts'
import { routes } from '@/constants/routes.ts'

export type NavItem = {
  labelKey?: 'nav.hiragana' | 'nav.katakana' | 'nav.exercise'
  label?: Bilingual
  path: string
  icon?: ComponentType<SvgIconProps>
  symbol?: string
}

export type NavGroup = {
  labelKey: 'nav.home' | 'nav.alphabet' | 'nav.n5'
  path: string
  icon?: ComponentType<SvgIconProps>
  children: NavItem[]
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
  {
    labelKey: 'nav.n5',
    path: routes.n5.index,
    icon: SchoolOutlinedIcon,
    children: n5Lessons.map((lesson) => ({
      label: lesson.title,
      path: n5LessonPath(lesson.id),
      symbol: String(lesson.number),
    })),
  },
]

export function isNavGroupActive(group: NavGroup, pathname: string) {
  if (pathname === group.path) {
    return true
  }

  return group.children.some(
    (child) => child.path === pathname || pathname.startsWith(`${child.path}/`),
  )
}
