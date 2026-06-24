import { frontendLessonsA } from './lessons-a.ts';
import { frontendLessonsB } from './lessons-b.ts';
import { frontendLessonsC } from './lessons-c.ts';
import { withSequentialNumbers, type Course, type CourseModule } from '../types.ts';

const frontendModules: CourseModule[] = [
  {
    title: { en: 'Foundations: engineering & teamwork', vi: 'Nền tảng: kỹ thuật & làm việc nhóm' },
    from: 1,
    to: 10
  },
  {
    title: { en: 'Engineering quality & platform', vi: 'Chất lượng kỹ thuật & nền tảng' },
    from: 11,
    to: 23
  },
  {
    title: { en: 'BRSE communication', vi: 'Giao tiếp BRSE' },
    from: 24,
    to: 30
  }
];

export const frontendCourse: Course = {
  level: 'frontend',
  code: 'FE',
  name: { en: 'Frontend Japanese Track', vi: 'Lộ trình tiếng Nhật Frontend' },
  subtitle: {
    en: 'Practical Japanese for frontend engineers and product teams.',
    vi: 'Tiếng Nhật thực chiến cho frontend engineer và team sản phẩm.'
  },
  intro: {
    en: 'A dedicated frontend-focused course covering architecture, debugging, QA, CI/CD, accessibility, performance, security, design systems, product metrics, agile communication, and technical leadership. Content is structured as a long-form path for real product development scenarios with bilingual explanations and reading practice.',
    vi: 'Khóa học tách riêng cho frontend, bao gồm kiến trúc, debug, QA, CI/CD, accessibility, hiệu năng, bảo mật, design system, product metrics, giao tiếp agile và leadership kỹ thuật. Nội dung được tổ chức thành lộ trình dài hơi cho ngữ cảnh phát triển sản phẩm thực tế với giải thích song ngữ và bài đọc hiểu.'
  },
  seoTitle: {
    en: 'Frontend Japanese Track - Vocabulary & Communication',
    vi: 'Lộ trình tiếng Nhật Frontend - Từ vựng & Giao tiếp'
  },
  seoDescription: {
    en: 'A practical Japanese course for frontend developers. Learn technical vocabulary, project communication patterns, and real workplace expressions with exercises and reading practice.',
    vi: 'Khóa tiếng Nhật thực hành cho frontend developer. Học từ vựng kỹ thuật, mẫu giao tiếp dự án và cách diễn đạt nơi làm việc với bài tập và đọc hiểu.'
  },
  lessons: withSequentialNumbers([...frontendLessonsA, ...frontendLessonsB, ...frontendLessonsC]),
  modules: frontendModules
};
