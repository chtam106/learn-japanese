import type { CourseLevel } from './types.ts'

export const COURSE_LEVELS: CourseLevel[] = ['n5', 'n4', 'n3', 'n2', 'n1', 'frontend']

export function isCourseLevel(value: string): value is CourseLevel {
  return (COURSE_LEVELS as string[]).includes(value)
}

export function coursePath(level: CourseLevel): string {
  return `/${level}`
}

export function lessonPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}`
}

export function lessonExercisePath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/exercise`
}

export function lessonListeningPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/listening`
}

export function lessonReadingPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/reading`
}
