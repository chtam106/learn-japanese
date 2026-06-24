import type { TranslationTree } from '@/i18n/translations.ts';

export const viTranslations: TranslationTree = {
  common: {
    playAudio: 'Nghe phát âm',
    back: 'Quay lại'
  },
  errorBoundary: {
    title: 'Đã có lỗi xảy ra',
    body: 'Ứng dụng gặp lỗi không mong muốn. Hãy tải lại trang để tiếp tục.',
    reload: 'Tải lại trang'
  },
  audio: {
    settings: 'Cài đặt âm thanh',
    voice: 'Giọng đọc',
    auto: 'Tự động',
    speed: 'Tốc độ',
    test: 'Nghe thử',
    noVoices: 'Trình duyệt của bạn không có giọng tiếng Nhật.'
  },
  seo: {
    home: {
      title: 'Học Hiragana & Katakana tiếng Nhật',
      description:
        'Bắt đầu học bảng chữ kana với hiragana, katakana, audio bản xứ và bài luyện tập miễn phí.'
    },
    alphabet: {
      title: 'Bảng chữ cái tiếng Nhật - Hiragana & Katakana',
      description:
        'Khám phá hiragana và katakana với bảng chữ đầy đủ, phát âm chuẩn và bài tập có hướng dẫn.',
      hiragana: {
        title: 'Bảng Hiragana & Luyện tập (ひらがな)',
        description:
          'Học hiragana qua bảng tương tác gồm seion, dakuten, handakuten và yoon. Chạm để nghe phát âm chuẩn.'
      },
      katakana: {
        title: 'Bảng Katakana & Luyện tập (カタカナ)',
        description:
          'Luyện katakana với bảng chữ đầy đủ, phát âm bản xứ và bài tập cho từ mượn và nhấn mạnh.'
      },
      exercise: {
        title: 'Bài tập & Quiz Kana tiếng Nhật',
        description:
          'Luyện hiragana và katakana qua quiz romaji, chọn chữ, nghe chọn chữ và ghép cặp bảng chữ.',
        romaji: {
          title: 'Quiz Romaji - Luyện Hiragana & Katakana',
          description:
            'Nhìn chữ kana và chọn romaji đúng. Luyện đọc hiragana và katakana từng bước.'
        },
        character: {
          title: 'Quiz Chọn chữ Kana',
          description:
            'Nhìn romaji và chọn chữ hiragana hoặc katakana đúng. Rèn nhận diện kana với phản hồi tức thì.'
        },
        listen: {
          title: 'Quiz Nghe & Chọn chữ Kana',
          description: 'Nghe phát âm chuẩn và chọn đúng chữ hiragana hoặc katakana.'
        },
        scriptPair: {
          title: 'Quiz Ghép Hiragana ↔ Katakana',
          description: 'Ghép cặp hiragana và katakana để củng cố cả hai bảng chữ cùng lúc.'
        },
        writing: {
          title: 'Luyện viết Kana với animation thứ tự nét',
          description:
            'Chọn một chữ hiragana hoặc katakana cơ bản, tập viết bằng tay và làm theo animation hướng dẫn thứ tự nét.'
        }
      }
    }
  },
  language: {
    label: 'Ngôn ngữ',
    en: 'English',
    vi: 'Tiếng Việt'
  },
  nav: {
    home: 'Trang chủ',
    alphabet: 'Bảng chữ cái',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    exercise: 'Luyện tập',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    mainNavigation: 'Điều hướng chính',
    collapse: 'Thu gọn {{label}}',
    expand: 'Mở rộng {{label}}'
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
      'Luyện tập qua câu hỏi - chọn romaji, chọn chữ, nghe chọn chữ, ghép hiragana và katakana, hoặc luyện viết theo thứ tự nét.'
  },
  alphabet: {
    title: 'Bảng chữ cái',
    subtitle: 'Chọn bảng chữ để học.',
    hiraganaDescription: 'ひらがな - bảng âm tiếng Nhật cơ bản',
    katakanaDescription: 'カタカナ - dùng cho từ ngoại lai và nhấn mạnh',
    exerciseDescription: 'Luyện hiragana và katakana',
    hiraganaPageDescription: 'Học bảng chữ hiragana (ひらがな).',
    katakanaPageDescription: 'Học bảng chữ katakana (カタカナ).',
    tapHint: 'Nhấn vào chữ để nghe phát âm.'
  },
  chart: {
    seion: 'Seion',
    voiced: 'Dakuten / Handakuten ({{dakuten}} / {{handakuten}})',
    yoon: 'Yoon',
    yoonDescription: 'Âm ghép với ゃ, ゅ, ょ nhỏ - ví dụ: き + ゃ = きゃ (kya).',
    playAudio: 'Phát {{char}}, {{romaji}}'
  },
  exercise: {
    title: 'Luyện tập',
    hubSubtitle: 'Chọn loại bài tập.',
    romajiDescription: 'Nhìn chữ kana và chọn romaji đúng.',
    characterDescription: 'Nhìn romaji và chọn chữ kana đúng.',
    listenDescription: 'Nghe và chọn chữ kana đúng.',
    scriptPairDescription: 'Ghép cặp hiragana và katakana.',
    writing: 'Luyện viết',
    writingDescription: 'Chọn một chữ cơ bản và luyện viết theo animation hướng dẫn thứ tự nét.',
    writingCharacter: 'Chữ',
    writingGuideAlt: 'Thứ tự nét {{script}} cho chữ {{char}}',
    writingReplayHint: 'Nhấn vào hình chữ để xem lại thứ tự nét và nghe phát âm.',
    writingCanvasAria: 'Vùng viết cho chữ {{char}}',
    writingClear: 'Xóa nét viết',
    writingPreviousCharacter: 'Chữ trước {{char}}',
    writingNextCharacter: 'Chữ tiếp theo {{char}}',
    chooseCharacter: 'Chọn chữ',
    listenPickShort: 'Nghe & chọn',
    script: 'Bảng chữ',
    scriptAll: 'Tất cả',
    scriptBoth: 'Hiragana & Katakana',
    scope: 'Phạm vi',
    rowFrom: 'Từ hàng',
    rowTo: 'Đến hàng',
    allRows: 'Tất cả các hàng',
    guessRomaji: 'Chọn romaji',
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
    voicedRowLabel: 'Hàng {{name}} - {{mark}} ({{char}})'
  },
  course: {
    lessonsHeading: 'Danh sách bài học',
    coreTrackHeading: 'Lộ trình JLPT cốt lõi',
    frontendTrackHeading: 'Lộ trình Frontend',
    frontendTrackTag: 'Frontend',
    frontendTrackDescription:
      'Các bài thực hành cho kỹ thuật frontend và giao tiếp dự án trong môi trường team sản phẩm thực tế.',
    lessonLabel: 'Bài {{number}}',
    focusLabel: 'Trong bài này',
    vocabulary: 'Từ vựng',
    grammar: 'Ngữ pháp',
    examples: 'Ví dụ',
    openLesson: 'Học bài',
    previousLesson: 'Bài trước',
    nextLesson: 'Bài sau',
    counts: '{{vocab}} từ · {{grammar}} điểm ngữ pháp',
    notFoundTitle: 'Không tìm thấy bài học',
    notFoundBody: 'Bài học này không tồn tại. Hãy quay lại trang tổng quan khóa học.',
    practiceHeading: 'Luyện tập bài này',
    exercise: 'Bài tập',
    exerciseSubtitle: 'Tự kiểm tra từ vựng, ngữ pháp và đọc hiểu của bài này.',
    startExercise: 'Bắt đầu làm bài',
    listening: 'Luyện nghe',
    startListening: 'Bắt đầu luyện nghe',
    listenPrompt: 'Bạn nghe được gì?',
    play: 'Phát âm thanh',
    replay: 'Nghe lại',
    speechUnsupported: 'Trình duyệt của bạn không hỗ trợ phát âm thanh cho bài này.',
    reading: 'Đọc hiểu',
    startReading: 'Bắt đầu đọc hiểu',
    comprehension: 'Câu hỏi đọc hiểu',
    showTranslation: 'Hiện bản dịch',
    hideTranslation: 'Ẩn bản dịch',
    questionProgress: 'Câu {{current}} / {{total}}',
    chooseAnswer: 'Chọn đáp án đúng',
    typeAnswer: 'Điền từ còn thiếu',
    inputPlaceholder: 'Đáp án của bạn (kana)',
    check: 'Kiểm tra',
    answerWas: 'Đáp án: {{answer}}',
    correct: 'Correct',
    incorrect: 'Incorrect',
    next: 'Tiếp theo',
    seeResults: 'Xem kết quả',
    resultTitle: 'Hoàn thành bài tập!',
    resultGreat: 'Xuất sắc! Bạn nắm rất chắc bài này.',
    resultGood: 'Khá tốt - xem lại câu sai rồi thử lại nhé.',
    resultKeepGoing: 'Cố lên - hãy ôn lại bài rồi làm lại.',
    retry: 'Làm lại',
    reviewLesson: 'Xem lại bài học'
  }
};
