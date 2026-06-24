import { withSequentialNumbers, type Course } from '../types.ts';
import { n1LessonsA } from './lessons-1.ts';
import { n1LessonsB } from './lessons-2.ts';
import { n1LessonsC } from './lessons-3.ts';
import { n1LessonsD } from './lessons-4.ts';
import { n1LessonsE } from './lessons-5.ts';

export const n1Course: Course = {
  level: 'n1',
  code: 'N1',
  name: { en: 'JLPT N1 Course', vi: 'Khóa học JLPT N1' },
  subtitle: {
    en: 'Master advanced, literary, and idiomatic Japanese.',
    vi: 'Làm chủ tiếng Nhật nâng cao, văn viết và thành ngữ.'
  },
  intro: {
    en: 'A step-by-step JLPT N1 path that builds on N2. Each lesson covers the advanced, formal, and literary grammar found in editorials, literature, and professional writing, with example sentences and reading practice in English and Vietnamese.',
    vi: 'Lộ trình JLPT N1 từng bước, nối tiếp N2. Mỗi bài bao gồm ngữ pháp nâng cao, trang trọng và văn viết xuất hiện trong xã luận, văn học và văn bản chuyên môn, kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  seoTitle: {
    en: 'JLPT N1 Course - Vocabulary & Grammar',
    vi: 'Khóa học JLPT N1 - Từ vựng & Ngữ pháp'
  },
  seoDescription: {
    en: 'A free, structured JLPT N1 course. Each lesson teaches advanced Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
    vi: 'Khóa học JLPT N1 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật nâng cao kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  lessons: withSequentialNumbers([
    ...n1LessonsA,
    ...n1LessonsB,
    ...n1LessonsC,
    ...n1LessonsD,
    ...n1LessonsE
  ])
};
