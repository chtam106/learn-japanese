import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts'

export type Locale = 'en' | 'vi'

export type TranslationParams = Record<string, string | number>

const en: TranslationTree = {
  app: {
    title: 'Langwish',
    tagline: 'Learn Japanese',
  },
  common: {
    playAudio: 'Play pronunciation',
  },
  audio: {
    settings: 'Audio settings',
    voice: 'Voice',
    auto: 'Automatic',
    speed: 'Speed',
    test: 'Test voice',
    noVoices: 'No Japanese voice was found in your browser.',
  },
  footer: {
    vibe: 'Vibe-coded by CHT, pair-programming with an AI that never sleeps.',
    note: '© {{year}} Langwish · All rights not reserved.',
  },
  seo: {
    defaultTitle: 'Langwish - Learn Japanese Hiragana, Katakana & Kana Quiz',
    defaultDescription:
      'Free interactive app to learn Japanese hiragana and katakana. Browse kana charts, listen to native audio, and practice with quizzes.',
    home: {
      title: 'Learn Japanese Hiragana & Katakana',
      description:
        'Start learning Japanese kana with interactive hiragana and katakana charts, native audio, and free practice quizzes.',
    },
    alphabet: {
      title: 'Japanese Alphabet - Hiragana & Katakana',
      description:
        'Explore hiragana and katakana writing systems with complete charts, pronunciation audio, and guided exercises.',
      hiragana: {
        title: 'Hiragana Chart & Practice (ひらがな)',
        description:
          'Learn hiragana with an interactive chart covering seion, dakuten, handakuten, and yoon. Tap any character to hear native audio.',
      },
      katakana: {
        title: 'Katakana Chart & Practice (カタカナ)',
        description:
          'Master katakana with a full interactive chart, native pronunciation, and practice exercises for loanwords and emphasis.',
      },
      exercise: {
        title: 'Japanese Kana Exercises & Quizzes',
        description:
          'Practice hiragana and katakana with romaji, character, listening, and script-matching quizzes.',
        romaji: {
          title: 'Romaji Quiz - Hiragana & Katakana Practice',
          description:
            'See a kana character and choose the correct romaji. Practice hiragana and katakana reading step by step.',
        },
        character: {
          title: 'Choose the Kana Character Quiz',
          description:
            'See romaji and pick the matching hiragana or katakana character. Build kana recognition with instant feedback.',
        },
        listen: {
          title: 'Listen & Choose Kana Quiz',
          description:
            'Train your ear with native audio and pick the correct hiragana or katakana character.',
        },
        scriptPair: {
          title: 'Hiragana ↔ Katakana Matching Quiz',
          description:
            'Match hiragana and katakana pairs to strengthen both Japanese syllabaries at once.',
        },
      },
    },
    n5: {
      title: 'JLPT N5 Course - Vocabulary & Grammar',
      description:
        'A free, structured JLPT N5 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences in English and Vietnamese.',
    },
  },
  language: {
    label: 'Language',
    en: 'English',
    vi: 'Tiếng Việt',
  },
  nav: {
    home: 'Home',
    alphabet: 'Alphabet',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    exercise: 'Exercise',
    n5: 'N5 Course',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNavigation: 'Main navigation',
    collapse: 'Collapse {{label}}',
    expand: 'Expand {{label}}',
  },
  home: {
    subtitle: 'Start with the alphabet - hiragana and katakana.',
    intro:
      'This app helps you read and practice kana step by step: browse interactive charts, listen to native pronunciation, and test yourself with exercises.',
    startHiragana: 'Start with Hiragana',
    jumpExercise: 'Jump to Exercise',
    hiraganaDescription: 'Learn the basic syllabary used for native Japanese words.',
    katakanaDescription: 'Learn the script used for loanwords and emphasis.',
    exerciseDescription: 'Quiz yourself on romaji and characters with audio feedback.',
    featuresTitle: 'What you can do here',
    featureCharts:
      'View seion, dakuten ({{dakuten}}), handakuten ({{handakuten}}), and yoon charts for hiragana and katakana.',
    featureAudio: 'Tap any character to hear NHK-style audio pronunciation.',
    featureQuiz:
      'Practice with quizzes - choose romaji, choose the character, listen and pick, or match hiragana and katakana.',
  },
  alphabet: {
    title: 'Alphabet',
    subtitle: 'Choose a writing system to study.',
    hiraganaDescription: 'ひらがな - basic Japanese syllabary',
    katakanaDescription: 'カタカナ - used for foreign words and emphasis',
    exerciseDescription: 'Practice hiragana and katakana',
    hiraganaPageDescription: 'Learn the hiragana alphabet (ひらがな).',
    katakanaPageDescription: 'Learn the katakana alphabet (カタカナ).',
    back: 'Back to alphabet',
  },
  chart: {
    seion: 'Seion',
    voiced: 'Dakuten / Handakuten ({{dakuten}} / {{handakuten}})',
    yoon: 'Yoon',
    yoonDescription: 'Combined sounds with small ゃ, ゅ, ょ - e.g. き + ゃ = きゃ (kya).',
    playAudio: 'Play {{char}}, {{romaji}}',
  },
  exercise: {
    title: 'Exercise',
    subtitle: 'Practice the Japanese alphabet.',
    hubSubtitle: 'Choose an exercise type.',
    back: 'All exercises',
    romajiDescription: 'See kana and choose the matching romaji.',
    characterDescription: 'See romaji and choose the matching kana.',
    listenDescription: 'Listen and choose the matching kana.',
    scriptPairDescription: 'Match hiragana and katakana pairs.',
    chooseCharacter: 'Choose character',
    listenPickShort: 'Listen & choose',
    script: 'Script',
    scriptAll: 'All',
    scriptBoth: 'Hiragana & Katakana',
    mode: 'Mode',
    scope: 'Scope',
    row: 'Row',
    rowFrom: 'From row',
    rowTo: 'To row',
    rowPlaceholder: 'Pick a row',
    allRows: 'All rows',
    guessRomaji: 'Choose romaji',
    guessCharacter: 'Choose {{script}}',
    listenPick: 'Listen & pick {{script}}',
    scriptPair: 'Hiragana ↔ Katakana',
    pairDirection: 'Direction',
    pairHiraToKata: 'Hiragana → Katakana',
    pairKataToHira: 'Katakana → Hiragana',
    pairMixed: 'Mixed',
    questionListen: 'Which {{script}} character do you hear?',
    questionScriptPairHiraToKata: 'What is the matching katakana?',
    questionScriptPairKataToHira: 'What is the matching hiragana?',
    replayAudio: 'Replay audio',
    questionRomaji: 'What is the romaji for this {{script}}?',
    questionCharacter: 'What is the {{script}} character?',
    scopeAll: 'All characters',
    scopeSeion: 'Seion',
    scopeDakuten: 'Dakuten ({{mark}})',
    scopeHandakuten: 'Handakuten ({{mark}})',
    scopeYoon: 'Yoon',
    groupSeionRows: 'Seion rows',
    groupYoonRows: 'Yoon rows',
    rowDefault: 'Row',
    yoonRowDefault: 'Yoon row',
    rowLabel: '{{name}} row ({{char}})',
    voicedRowLabel: '{{name}} row - {{mark}} ({{char}})',
  },
  n5: {
    title: 'JLPT N5 Course',
    subtitle: 'Build a solid foundation, one lesson at a time.',
    intro:
      'A step-by-step JLPT N5 path inspired by top courses like Genki and Minna no Nihongo. Every lesson pairs core vocabulary with the grammar you need to start making sentences.',
    lessonsHeading: 'Lessons',
    lessonLabel: 'Lesson {{number}}',
    focusLabel: 'In this lesson',
    vocabulary: 'Vocabulary',
    grammar: 'Grammar',
    examples: 'Examples',
    openLesson: 'Study lesson',
    backToCourse: 'Back to course',
    previousLesson: 'Previous',
    nextLesson: 'Next',
    reading: 'Reading',
    meaning: 'Meaning',
    counts: '{{vocab}} words · {{grammar}} grammar points',
    notFoundTitle: 'Lesson not found',
    notFoundBody: 'This lesson does not exist. Go back to the course overview.',
    exercise: 'Practice',
    exerciseSubtitle: "Test yourself on this lesson's vocabulary and grammar.",
    startExercise: 'Start practice',
    listening: 'Listening',
    listeningSubtitle: 'Train your ear: listen and choose what you heard.',
    startListening: 'Start listening',
    listenPrompt: 'What did you hear?',
    play: 'Play audio',
    replay: 'Replay',
    speechUnsupported: 'Your browser does not support audio playback for this exercise.',
    questionProgress: 'Question {{current}} of {{total}}',
    chooseAnswer: 'Choose the correct answer',
    typeAnswer: 'Type the missing word',
    inputPlaceholder: 'Your answer (romaji)',
    check: 'Check',
    answerWas: 'Answer: {{answer}}',
    correct: 'Correct!',
    incorrect: 'Not quite.',
    next: 'Next',
    seeResults: 'See results',
    resultTitle: 'Practice complete!',
    resultScore: 'You got {{correct}} of {{total}} correct.',
    resultGreat: 'Excellent work! You know this lesson well.',
    resultGood: 'Nice progress - review the misses and try again.',
    resultKeepGoing: 'Keep practicing - revisit the lesson and try again.',
    retry: 'Try again',
    reviewLesson: 'Review lesson',
  },
} satisfies TranslationTree

const vi: TranslationTree = {
  app: {
    title: 'Langwish',
    tagline: 'Học tiếng Nhật',
  },
  common: {
    playAudio: 'Nghe phát âm',
  },
  audio: {
    settings: 'Cài đặt âm thanh',
    voice: 'Giọng đọc',
    auto: 'Tự động',
    speed: 'Tốc độ',
    test: 'Nghe thử',
    noVoices: 'Trình duyệt của bạn không có giọng tiếng Nhật.',
  },
  footer: {
    vibe: 'Vibe code bởi CHT, kết đôi cùng một con AI không bao giờ ngủ.',
    note: '© {{year}} Langwish · Mọi quyền không được bảo lưu.',
  },
  seo: {
    defaultTitle: 'Langwish - Học Hiragana, Katakana & Luyện Kana',
    defaultDescription:
      'Ứng dụng miễn phí học hiragana và katakana. Xem bảng chữ tương tác, nghe phát âm chuẩn và luyện tập qua bài quiz.',
    home: {
      title: 'Học Hiragana & Katakana tiếng Nhật',
      description:
        'Bắt đầu học bảng chữ kana với hiragana, katakana, audio bản xứ và bài luyện tập miễn phí.',
    },
    alphabet: {
      title: 'Bảng chữ cái tiếng Nhật - Hiragana & Katakana',
      description:
        'Khám phá hiragana và katakana với bảng chữ đầy đủ, phát âm chuẩn và bài tập có hướng dẫn.',
      hiragana: {
        title: 'Bảng Hiragana & Luyện tập (ひらがな)',
        description:
          'Học hiragana qua bảng tương tác gồm seion, dakuten, handakuten và yoon. Chạm để nghe phát âm chuẩn.',
      },
      katakana: {
        title: 'Bảng Katakana & Luyện tập (カタカナ)',
        description:
          'Luyện katakana với bảng chữ đầy đủ, phát âm bản xứ và bài tập cho từ mượn và nhấn mạnh.',
      },
      exercise: {
        title: 'Bài tập & Quiz Kana tiếng Nhật',
        description:
          'Luyện hiragana và katakana qua quiz romaji, chọn chữ, nghe chọn chữ và ghép cặp bảng chữ.',
        romaji: {
          title: 'Quiz Romaji - Luyện Hiragana & Katakana',
          description:
            'Nhìn chữ kana và chọn romaji đúng. Luyện đọc hiragana và katakana từng bước.',
        },
        character: {
          title: 'Quiz Chọn chữ Kana',
          description:
            'Nhìn romaji và chọn chữ hiragana hoặc katakana đúng. Rèn nhận diện kana với phản hồi tức thì.',
        },
        listen: {
          title: 'Quiz Nghe & Chọn chữ Kana',
          description: 'Nghe phát âm chuẩn và chọn đúng chữ hiragana hoặc katakana.',
        },
        scriptPair: {
          title: 'Quiz Ghép Hiragana ↔ Katakana',
          description: 'Ghép cặp hiragana và katakana để củng cố cả hai bảng chữ cùng lúc.',
        },
      },
    },
    n5: {
      title: 'Khóa học JLPT N5 - Từ vựng & Ngữ pháp',
      description:
        'Khóa học JLPT N5 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ song ngữ Anh - Việt.',
    },
  },
  language: {
    label: 'Ngôn ngữ',
    en: 'English',
    vi: 'Tiếng Việt',
  },
  nav: {
    home: 'Trang chủ',
    alphabet: 'Bảng chữ cái',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    exercise: 'Luyện tập',
    n5: 'Khóa N5',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    mainNavigation: 'Điều hướng chính',
    collapse: 'Thu gọn {{label}}',
    expand: 'Mở rộng {{label}}',
  },
  home: {
    subtitle: 'Bắt đầu với bảng chữ cái - hiragana và katakana.',
    intro:
      'Ứng dụng giúp bạn đọc và luyện kana từng bước: xem bảng tương tác, nghe phát âm, và tự kiểm tra qua bài tập.',
    startHiragana: 'Bắt đầu với Hiragana',
    jumpExercise: 'Vào Luyện tập',
    hiraganaDescription: 'Học bảng âm cơ bản dùng cho từ tiếng Nhật thuần.',
    katakanaDescription: 'Học bảng chữ dùng cho từ mượn và nhấn mạnh.',
    exerciseDescription: 'Tự kiểm tra romaji và chữ kana, có phản hồi âm thanh.',
    featuresTitle: 'Bạn có thể làm gì ở đây',
    featureCharts:
      'Xem bảng seion, dakuten ({{dakuten}}), handakuten ({{handakuten}}) và yoon cho hiragana và katakana.',
    featureAudio: 'Chạm vào chữ để nghe phát âm kiểu NHK.',
    featureQuiz:
      'Luyện tập qua câu hỏi - chọn romaji, chọn chữ, nghe chọn chữ, hoặc ghép hiragana và katakana.',
  },
  alphabet: {
    title: 'Bảng chữ cái',
    subtitle: 'Chọn bảng chữ để học.',
    hiraganaDescription: 'ひらがな - bảng âm tiếng Nhật cơ bản',
    katakanaDescription: 'カタカナ - dùng cho từ ngoại lai và nhấn mạnh',
    exerciseDescription: 'Luyện hiragana và katakana',
    hiraganaPageDescription: 'Học bảng chữ hiragana (ひらがな).',
    katakanaPageDescription: 'Học bảng chữ katakana (カタカナ).',
    back: 'Quay lại bảng chữ cái',
  },
  chart: {
    seion: 'Seion',
    voiced: 'Dakuten / Handakuten ({{dakuten}} / {{handakuten}})',
    yoon: 'Yoon',
    yoonDescription: 'Âm ghép với ゃ, ゅ, ょ nhỏ - ví dụ: き + ゃ = きゃ (kya).',
    playAudio: 'Phát {{char}}, {{romaji}}',
  },
  exercise: {
    title: 'Luyện tập',
    subtitle: 'Luyện bảng chữ cái tiếng Nhật.',
    hubSubtitle: 'Chọn loại bài tập.',
    back: 'Tất cả bài tập',
    romajiDescription: 'Nhìn chữ kana và chọn romaji đúng.',
    characterDescription: 'Nhìn romaji và chọn chữ kana đúng.',
    listenDescription: 'Nghe và chọn chữ kana đúng.',
    scriptPairDescription: 'Ghép cặp hiragana và katakana.',
    chooseCharacter: 'Chọn chữ',
    listenPickShort: 'Nghe & chọn',
    script: 'Bảng chữ',
    scriptAll: 'Tất cả',
    scriptBoth: 'Hiragana & Katakana',
    mode: 'Chế độ',
    scope: 'Phạm vi',
    row: 'Hàng',
    rowFrom: 'Từ hàng',
    rowTo: 'Đến hàng',
    rowPlaceholder: 'Chọn hàng',
    allRows: 'Tất cả các hàng',
    guessRomaji: 'Chọn romaji',
    guessCharacter: 'Chọn {{script}}',
    listenPick: 'Nghe & chọn {{script}}',
    scriptPair: 'Hiragana ↔ Katakana',
    pairDirection: 'Hướng',
    pairHiraToKata: 'Hiragana → Katakana',
    pairKataToHira: 'Katakana → Hiragana',
    pairMixed: 'Ngẫu nhiên',
    questionListen: 'Bạn nghe thấy chữ {{script}} nào?',
    questionScriptPairHiraToKata: 'Katakana tương ứng là gì?',
    questionScriptPairKataToHira: 'Hiragana tương ứng là gì?',
    replayAudio: 'Nghe lại',
    questionRomaji: 'Romaji của {{script}} này là gì?',
    questionCharacter: 'Chữ {{script}} này là gì?',
    scopeAll: 'Tất cả chữ',
    scopeSeion: 'Seion',
    scopeDakuten: 'Dakuten ({{mark}})',
    scopeHandakuten: 'Handakuten ({{mark}})',
    scopeYoon: 'Yoon',
    groupSeionRows: 'Hàng seion',
    groupYoonRows: 'Hàng yoon',
    rowDefault: 'Hàng',
    yoonRowDefault: 'Hàng yoon',
    rowLabel: 'Hàng {{name}} ({{char}})',
    voicedRowLabel: 'Hàng {{name}} - {{mark}} ({{char}})',
  },
  n5: {
    title: 'Khóa học JLPT N5',
    subtitle: 'Xây nền tảng vững chắc, từng bài một.',
    intro:
      'Lộ trình JLPT N5 từng bước, lấy cảm hứng từ các giáo trình hàng đầu như Genki và Minna no Nihongo. Mỗi bài kết hợp từ vựng cốt lõi với ngữ pháp cần thiết để bắt đầu đặt câu.',
    lessonsHeading: 'Danh sách bài học',
    lessonLabel: 'Bài {{number}}',
    focusLabel: 'Trong bài này',
    vocabulary: 'Từ vựng',
    grammar: 'Ngữ pháp',
    examples: 'Ví dụ',
    openLesson: 'Học bài',
    backToCourse: 'Về trang khóa học',
    previousLesson: 'Bài trước',
    nextLesson: 'Bài sau',
    reading: 'Cách đọc',
    meaning: 'Nghĩa',
    counts: '{{vocab}} từ · {{grammar}} điểm ngữ pháp',
    notFoundTitle: 'Không tìm thấy bài học',
    notFoundBody: 'Bài học này không tồn tại. Hãy quay lại trang tổng quan khóa học.',
    exercise: 'Bài tập',
    exerciseSubtitle: 'Tự kiểm tra từ vựng và ngữ pháp của bài này.',
    startExercise: 'Bắt đầu làm bài',
    listening: 'Luyện nghe',
    listeningSubtitle: 'Luyện tai: nghe và chọn nội dung bạn nghe được.',
    startListening: 'Bắt đầu luyện nghe',
    listenPrompt: 'Bạn nghe được gì?',
    play: 'Phát âm thanh',
    replay: 'Nghe lại',
    speechUnsupported: 'Trình duyệt của bạn không hỗ trợ phát âm thanh cho bài này.',
    questionProgress: 'Câu {{current}} / {{total}}',
    chooseAnswer: 'Chọn đáp án đúng',
    typeAnswer: 'Điền từ còn thiếu',
    inputPlaceholder: 'Đáp án của bạn (romaji)',
    check: 'Kiểm tra',
    answerWas: 'Đáp án: {{answer}}',
    correct: 'Chính xác!',
    incorrect: 'Chưa đúng.',
    next: 'Tiếp theo',
    seeResults: 'Xem kết quả',
    resultTitle: 'Hoàn thành bài tập!',
    resultScore: 'Bạn đúng {{correct}} / {{total}} câu.',
    resultGreat: 'Xuất sắc! Bạn nắm rất chắc bài này.',
    resultGood: 'Khá tốt - xem lại câu sai rồi thử lại nhé.',
    resultKeepGoing: 'Cố lên - hãy ôn lại bài rồi làm lại.',
    retry: 'Làm lại',
    reviewLesson: 'Xem lại bài học',
  },
}

type TranslationLeaf = string
type TranslationNode = { [key: string]: TranslationLeaf | TranslationNode }
export type TranslationTree = TranslationNode

export const translations: Record<Locale, TranslationTree> = { en, vi }

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_STORAGE_KEY = 'langwish-locale'

export function getChartSectionLabels(t: (key: string, params?: TranslationParams) => string) {
  return {
    seion: t('chart.seion'),
    voiced: t('chart.voiced', { dakuten: DAKUTEN_MARK, handakuten: HANDAKUTEN_MARK }),
    yoon: t('chart.yoon'),
  }
}
