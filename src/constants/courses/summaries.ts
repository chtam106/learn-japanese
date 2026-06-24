import type { Bilingual, CourseLevel } from './types.ts';
import { COURSE_LEVELS } from './levels.ts';

// Lightweight course metadata (name + subtitle) used by always-loaded surfaces:
// the home page, the nav drawer, etc. It intentionally DUPLICATES the `name` /
// `subtitle` of each `Course` in `<level>/index.ts` instead of deriving from
// them — importing the course objects here would statically pull every level's
// (heavy) lesson data into the main bundle and defeat code-splitting. Keep these
// strings in sync with the matching `Course` objects.

export type CourseSummary = {
  level: CourseLevel;
  name: Bilingual;
  subtitle: Bilingual;
};

const summaryByLevel: Record<CourseLevel, CourseSummary> = {
  n5: {
    level: 'n5',
    name: { en: 'JLPT N5 Course', vi: 'Khóa học JLPT N5' },
    subtitle: {
      en: 'Build a solid foundation, one lesson at a time.',
      vi: 'Xây nền tảng vững chắc, từng bài một.'
    }
  },
  n4: {
    level: 'n4',
    name: { en: 'JLPT N4 Course', vi: 'Khóa học JLPT N4' },
    subtitle: {
      en: 'Move beyond the basics into everyday Japanese.',
      vi: 'Vượt qua nền tảng, tiến tới tiếng Nhật đời thường.'
    }
  },
  n3: {
    level: 'n3',
    name: { en: 'JLPT N3 Course', vi: 'Khóa học JLPT N3' },
    subtitle: {
      en: 'Bridge to fluent, natural Japanese.',
      vi: 'Cầu nối tới tiếng Nhật trôi chảy, tự nhiên.'
    }
  },
  n2: {
    level: 'n2',
    name: { en: 'JLPT N2 Course', vi: 'Khóa học JLPT N2' },
    subtitle: {
      en: 'Handle abstract and formal Japanese with confidence.',
      vi: 'Tự tin xử lý tiếng Nhật trừu tượng và trang trọng.'
    }
  },
  n1: {
    level: 'n1',
    name: { en: 'JLPT N1 Course', vi: 'Khóa học JLPT N1' },
    subtitle: {
      en: 'Master advanced, literary, and idiomatic Japanese.',
      vi: 'Làm chủ tiếng Nhật nâng cao, văn viết và thành ngữ.'
    }
  },
  frontend: {
    level: 'frontend',
    name: { en: 'Frontend Japanese Track', vi: 'Lộ trình tiếng Nhật Frontend' },
    subtitle: {
      en: 'Practical Japanese for frontend engineers and product teams.',
      vi: 'Tiếng Nhật thực chiến cho frontend engineer và team sản phẩm.'
    }
  }
};

export const COURSE_SUMMARIES: CourseSummary[] = COURSE_LEVELS.map(
  (level) => summaryByLevel[level]
);
