import { withSequentialNumbers, type Course } from '../types.ts';
import { n2LessonsA } from './lessons-1.ts';
import { n2LessonsB } from './lessons-2.ts';
import { n2LessonsC } from './lessons-3.ts';
import { n2LessonsD } from './lessons-4.ts';
import { n2LessonsE } from './lessons-5.ts';

export const n2Course: Course = {
  level: 'n2',
  code: 'N2',
  name: { en: 'JLPT N2 Course', vi: 'Khóa học JLPT N2' },
  subtitle: {
    en: 'Handle abstract and formal Japanese with confidence.',
    vi: 'Tự tin xử lý tiếng Nhật trừu tượng và trang trọng.'
  },
  intro: {
    en: 'A step-by-step JLPT N2 path that builds on N3. Each lesson adds the formal connectives, set phrases, and nuanced expressions needed for news, business, and academic Japanese, with example sentences and reading practice in English and Vietnamese.',
    vi: 'Lộ trình JLPT N2 từng bước, nối tiếp N3. Mỗi bài bổ sung các liên từ trang trọng, cụm cố định và mẫu diễn đạt tinh tế cần cho tiếng Nhật báo chí, công việc và học thuật, kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  seoTitle: {
    en: 'JLPT N2 Course - Vocabulary & Grammar',
    vi: 'Khóa học JLPT N2 - Từ vựng & Ngữ pháp'
  },
  seoDescription: {
    en: 'A free, structured JLPT N2 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
    vi: 'Khóa học JLPT N2 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  lessons: withSequentialNumbers([
    ...n2LessonsA,
    ...n2LessonsB,
    ...n2LessonsC,
    ...n2LessonsD,
    ...n2LessonsE
  ])
};
