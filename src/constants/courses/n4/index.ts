import { withSequentialNumbers, type Course } from '../types.ts';
import { n4LessonsA } from './lessons-1.ts';
import { n4LessonsB } from './lessons-2.ts';
import { n4LessonsC } from './lessons-3.ts';
import { n4LessonsD } from './lessons-4.ts';

export const n4Course: Course = {
  level: 'n4',
  code: 'N4',
  name: { en: 'JLPT N4 Course', vi: 'Khóa học JLPT N4' },
  subtitle: {
    en: 'Move beyond the basics into everyday Japanese.',
    vi: 'Vượt qua nền tảng, tiến tới tiếng Nhật đời thường.'
  },
  intro: {
    en: 'A step-by-step JLPT N4 path that builds on N5. Each lesson adds plain forms, conditionals, intention, giving and receiving, conjecture, and more, with example sentences and reading practice in English and Vietnamese.',
    vi: 'Lộ trình JLPT N4 từng bước, nối tiếp N5. Mỗi bài bổ sung thể thường, câu điều kiện, ý chí, cho và nhận, suy đoán,… kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  seoTitle: {
    en: 'JLPT N4 Course - Vocabulary & Grammar',
    vi: 'Khóa học JLPT N4 - Từ vựng & Ngữ pháp'
  },
  seoDescription: {
    en: 'A free, structured JLPT N4 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
    vi: 'Khóa học JLPT N4 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  lessons: withSequentialNumbers([...n4LessonsA, ...n4LessonsB, ...n4LessonsC, ...n4LessonsD])
};
