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
      combined: {
        title: 'Bảng gộp Hiragana + Katakana',
        description:
          'Một bảng gojuon ghép hiragana và katakana trong từng ô kèm romaji và phát âm chuẩn - so sánh cả hai bảng chữ cạnh nhau.'
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
    combined: 'Bảng gộp',
    exercise: 'Luyện tập',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    mainNavigation: 'Điều hướng chính',
    collapse: 'Thu gọn {{label}}',
    expand: 'Mở rộng {{label}}'
  },
  home: {
    title: 'Học tiếng Nhật cùng Langwish',
    intro:
      'Đọc và luyện kana từng bước, rồi học tiếp với các khóa JLPT N5-N1 và tiếng Nhật frontend có lộ trình - bảng chữ tương tác, audio, quiz và luyện viết.',
    hiraganaDescription: 'Học bảng âm cơ bản dùng cho từ tiếng Nhật thuần.',
    katakanaDescription: 'Học bảng chữ dùng cho từ mượn và nhấn mạnh.',
    exerciseDescription: 'Tự kiểm tra romaji và chữ kana, có phản hồi âm thanh.',
    alphabetSection: 'Bảng chữ cái & luyện tập',
    coursesSection: 'Khóa học'
  },
  alphabet: {
    title: 'Bảng chữ cái',
    subtitle: 'Chọn bảng chữ để học.',
    intro:
      'Tiếng Nhật viết kết hợp ba hệ chữ. Hiragana và katakana là bảng âm tiết - mỗi chữ tương ứng đúng một âm - còn kanji là chữ biểu nghĩa mượn từ tiếng Hán. Hãy học hai bảng kana trước: chúng bao trùm mọi âm trong tiếng Nhật và là nền tảng cho mọi thứ về sau.',
    systemsHeading: 'Hệ thống chữ viết tiếng Nhật',
    systemHiragana:
      'Hiragana (ひらがな) - bảng âm tiết nét tròn gồm 46 âm cơ bản, dùng cho từ thuần Nhật, trợ từ ngữ pháp và đuôi từ.',
    systemKatakana:
      'Katakana (カタカナ) - cùng các âm đó nhưng nét vuông, dùng cho từ ngoại lai, tên nước ngoài và để nhấn mạnh.',
    systemKanji:
      'Kanji (漢字) - chữ biểu nghĩa mượn từ tiếng Hán; bạn sẽ học dần qua các khóa JLPT.',
    hiraganaDescription: 'ひらがな - bảng âm tiếng Nhật cơ bản',
    katakanaDescription: 'カタカナ - dùng cho từ ngoại lai và nhấn mạnh',
    combinedDescription: 'Xem hiragana và katakana cạnh nhau trong cùng một bảng',
    exerciseDescription: 'Luyện hiragana và katakana',
    hiraganaPageDescription:
      'Hiragana là nền tảng của chữ viết tiếng Nhật. 46 âm cơ bản (seion) dùng để viết trợ từ ngữ pháp, đuôi động từ và tính từ, cùng các từ thuần Nhật. Dấu hữu thanh (dakuten và handakuten) và âm ghép yoon với ゃ/ゅ/ょ nhỏ mở rộng bộ này để bao trùm mọi âm tiếng Nhật.',
    katakanaPageDescription:
      'Katakana có đúng các âm như hiragana nhưng nét vuông và sắc hơn. Nó dùng cho từ ngoại lai, tên nước ngoài, từ tượng thanh, thuật ngữ khoa học và những từ cần nhấn mạnh. Học cùng hiragana giúp bạn đọc được biển hiệu, thực đơn và tên sản phẩm.',
    combinedPageDescription:
      'Hai bảng kana dùng chung các âm, nên bảng này ghép chúng trong từng ô: hiragana bên trái, katakana bên phải. Dùng để so sánh hình dạng cạnh nhau và củng cố cả hai bảng cùng lúc.',
    tapHint: 'Nhấn vào chữ để nghe phát âm.'
  },
  chart: {
    seion: 'Seion',
    voiced: 'Dakuten / Handakuten ({{dakuten}} / {{handakuten}})',
    voicedDescription:
      'Thêm dấu dakuten ({{dakuten}}) để hữu thanh hóa: k→g, s→z, t→d, h→b. Dấu handakuten ({{handakuten}}) biến h→p. Ví dụ: {{base}} ({{baseRomaji}}) + {{dakuten}} = {{voiced}} ({{voicedRomaji}}).',
    yoon: 'Yoon',
    yoonDescription:
      'Âm ghép với {{small1}}, {{small2}}, {{small3}} nhỏ - ví dụ: {{base}} + {{small1}} = {{result}} ({{romaji}}).',
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
    chooseCharacter: 'Chọn chữ kana',
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
    frontendTrackTag: 'Frontend',
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
