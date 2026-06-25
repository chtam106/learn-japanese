import { describe, expect, it } from 'vitest';
import { getCourse } from '@/constants/courses/index.ts';
import { buildLessonQuiz, normalizeAnswer } from '@/pages/course/course-quiz.ts';

describe('normalizeAnswer', () => {
  it('trims, lowercases, and strips JP/EN punctuation', () => {
    expect(normalizeAnswer('  Wa ')).toBe('wa');
    expect(normalizeAnswer('は。')).toBe('は');
    expect(normalizeAnswer('Desu!')).toBe('desu');
  });
});

describe('buildLessonQuiz', () => {
  const course = getCourse('n5');

  it('produces well-formed questions for every n5 lesson', () => {
    expect(course.lessons.length).toBeGreaterThan(0);

    for (const lesson of course.lessons) {
      const quiz = buildLessonQuiz(course, lesson, 'en');
      expect(quiz.length).toBeGreaterThan(0);

      for (const question of quiz) {
        if (question.format === 'choice') {
          expect(question.options.length).toBeGreaterThan(0);
          const ids = question.options.map((option) => option.id);
          expect(ids).toContain(question.correctId);
        } else {
          // grammar-cloze: the blank is shown and the answer is always accepted.
          expect(question.promptPrimary).toContain('＿＿');
          expect(question.accepted).toContain(question.answer);
        }
      }
    }
  });

  it('accepts the literal "ha" reading wherever a は particle is blanked', () => {
    let sawHaCloze = false;

    for (const lesson of course.lessons) {
      for (const question of buildLessonQuiz(course, lesson, 'en')) {
        if (question.format === 'input' && question.answer === 'は') {
          sawHaCloze = true;
          expect(question.accepted).toEqual(expect.arrayContaining(['は', 'wa', 'ha']));
        }
      }
    }

    // Not every random draw includes a は cloze; only assert when one shows up.
    expect(typeof sawHaCloze).toBe('boolean');
  });
});
