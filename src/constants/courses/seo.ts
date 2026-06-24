import type { Bilingual, CourseLevel } from './types.ts';

// SEO title/description per course, used by `page-meta.tsx` (loaded on every
// route). Like `summaries.ts`, this intentionally DUPLICATES the `seoTitle` /
// `seoDescription` of each `Course` in `<level>/index.ts` rather than deriving
// from them, to keep the heavy per-level lesson data out of the main bundle.
// Keep these strings in sync with the matching `Course` objects.

export type CourseSeo = {
  seoTitle: Bilingual;
  seoDescription: Bilingual;
};

const courseSeoByLevel: Record<CourseLevel, CourseSeo> = {
  n5: {
    seoTitle: {
      en: 'JLPT N5 Course - Vocabulary & Grammar',
      vi: 'Khóa học JLPT N5 - Từ vựng & Ngữ pháp'
    },
    seoDescription: {
      en: 'A free, structured JLPT N5 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
      vi: 'Khóa học JLPT N5 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
    }
  },
  n4: {
    seoTitle: {
      en: 'JLPT N4 Course - Vocabulary & Grammar',
      vi: 'Khóa học JLPT N4 - Từ vựng & Ngữ pháp'
    },
    seoDescription: {
      en: 'A free, structured JLPT N4 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
      vi: 'Khóa học JLPT N4 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
    }
  },
  n3: {
    seoTitle: {
      en: 'JLPT N3 Course - Vocabulary & Grammar',
      vi: 'Khóa học JLPT N3 - Từ vựng & Ngữ pháp'
    },
    seoDescription: {
      en: 'A free, structured JLPT N3 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
      vi: 'Khóa học JLPT N3 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
    }
  },
  n2: {
    seoTitle: {
      en: 'JLPT N2 Course - Vocabulary & Grammar',
      vi: 'Khóa học JLPT N2 - Từ vựng & Ngữ pháp'
    },
    seoDescription: {
      en: 'A free, structured JLPT N2 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
      vi: 'Khóa học JLPT N2 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
    }
  },
  n1: {
    seoTitle: {
      en: 'JLPT N1 Course - Vocabulary & Grammar',
      vi: 'Khóa học JLPT N1 - Từ vựng & Ngữ pháp'
    },
    seoDescription: {
      en: 'A free, structured JLPT N1 course. Each lesson teaches advanced Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
      vi: 'Khóa học JLPT N1 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật nâng cao kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
    }
  },
  frontend: {
    seoTitle: {
      en: 'Frontend Japanese Track - Vocabulary & Communication',
      vi: 'Lộ trình tiếng Nhật Frontend - Từ vựng & Giao tiếp'
    },
    seoDescription: {
      en: 'A practical Japanese course for frontend developers. Learn technical vocabulary, project communication patterns, and real workplace expressions with exercises and reading practice.',
      vi: 'Khóa tiếng Nhật thực hành cho frontend developer. Học từ vựng kỹ thuật, mẫu giao tiếp dự án và cách diễn đạt nơi làm việc với bài tập và đọc hiểu.'
    }
  }
};

export function getCourseSeo(level: CourseLevel): CourseSeo {
  return courseSeoByLevel[level];
}
