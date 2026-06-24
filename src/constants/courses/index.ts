import { frontendCourse } from './frontend/index.ts';
import { n1Course } from './n1/index.ts';
import { n2Course } from './n2/index.ts';
import { n3Course } from './n3/index.ts';
import { n4Course } from './n4/index.ts';
import { n5Course } from './n5/index.ts';
import type { Course, CourseLevel, Lesson } from './types.ts';
import {
  COURSE_LEVELS,
  coursePath,
  lessonExercisePath,
  lessonListeningPath,
  lessonPath,
  lessonReadingPath
} from './levels.ts';

export * from './types.ts';
export * from './levels.ts';
export * from './summaries.ts';
export * from './seo.ts';

const courses: Record<CourseLevel, Course> = {
  n5: n5Course,
  n4: n4Course,
  n3: n3Course,
  n2: n2Course,
  n1: n1Course,
  frontend: frontendCourse
};

export function getCourse(level: CourseLevel): Course {
  return courses[level];
}

export function getLesson(level: CourseLevel, id: string): Lesson | undefined {
  return courses[level].lessons.find((lesson) => lesson.id === id);
}

export function lessonHasReading(lesson: Lesson): boolean {
  return Boolean(lesson.reading && lesson.reading.length > 0);
}

export const COURSE_SITEMAP_PATHS: string[] = COURSE_LEVELS.flatMap((level) => {
  const { lessons } = courses[level];

  return [
    coursePath(level),
    ...lessons.map((lesson) => lessonPath(level, lesson.id)),
    ...lessons.map((lesson) => lessonExercisePath(level, lesson.id)),
    ...lessons.map((lesson) => lessonListeningPath(level, lesson.id)),
    ...lessons.filter(lessonHasReading).map((lesson) => lessonReadingPath(level, lesson.id))
  ];
});
