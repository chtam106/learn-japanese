import type { Lesson } from '../types.ts';

export const frontendLessonsA: Lesson[] = [
  {
    id: 'lesson-1',
    number: 1,
    track: 'frontend',
    title: {
      en: 'Frontend Fundamentals: Components and State',
      vi: 'Nền tảng Frontend: Component và State'
    },
    focus: {
      en: 'Learn key React frontend vocabulary and practical grammar for explaining component design and team coding habits.',
      vi: 'Học từ vựng React frontend cốt lõi và ngữ pháp thực hành để mô tả thiết kế component và thói quen code trong team.'
    },
    vocab: [
      {
        kana: 'コンポーネント',
        romaji: 'konpōnento',
        meaning: { en: 'component', vi: 'thành phần (component)' }
      },
      {
        kana: 'プロップス',
        romaji: 'puroppusu',
        meaning: { en: 'props', vi: 'props (tham số component)' }
      },
      {
        kana: 'ステート',
        romaji: 'sutēto',
        meaning: { en: 'state', vi: 'state (trạng thái)' }
      },
      {
        kana: 'フック',
        romaji: 'fukku',
        meaning: { en: 'hook', vi: 'hook' }
      },
      {
        kana: 'さいりよう',
        kanji: '再利用',
        romaji: 'sairiyō',
        meaning: { en: 'reuse', vi: 'tái sử dụng' }
      },
      {
        kana: 'せきむぶんり',
        kanji: '責務分離',
        romaji: 'sekimu bunri',
        meaning: { en: 'separation of concerns', vi: 'tách biệt trách nhiệm' }
      },
      {
        kana: 'たんいつせきにん',
        kanji: '単一責任',
        romaji: 'tan-itsu sekinin',
        meaning: { en: 'single responsibility', vi: 'trách nhiệm đơn nhất' }
      },
      {
        kana: 'いちげんかんり',
        kanji: '一元管理',
        romaji: 'ichigen kanri',
        meaning: { en: 'centralized management', vi: 'quản lý tập trung' }
      },
      {
        kana: 'レンダリング',
        romaji: 'rendaringu',
        meaning: { en: 'rendering', vi: 'rendering (kết xuất)' }
      },
      {
        kana: 'せいのう',
        kanji: '性能',
        romaji: 'seinō',
        meaning: { en: 'performance', vi: 'hiệu năng' }
      },
      {
        kana: 'こうどくせい',
        kanji: '可読性',
        romaji: 'kadokusei',
        meaning: { en: 'readability', vi: 'tính dễ đọc' }
      },
      {
        kana: 'ほしゅ',
        kanji: '保守',
        romaji: 'hoshu',
        meaning: { en: 'maintenance', vi: 'bảo trì' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）+ ために',
        title: { en: 'For the purpose of (ために)', vi: 'Để (mục đích) (ために)' },
        explanation: {
          en: 'Use ために to explain technical design intent or development goals.',
          vi: 'Dùng ために để giải thích mục đích thiết kế kỹ thuật hoặc mục tiêu phát triển.'
        },
        examples: [
          {
            jp: '再利用しやすくするために、共通コンポーネントを作りました。',
            romaji: 'Sairiyō shiyasuku suru tame ni, kyōtsū konpōnento o tsukurimashita.',
            meaning: {
              en: 'We created shared components to make reuse easier.',
              vi: 'Chúng tôi tạo component dùng chung để việc tái sử dụng dễ hơn.'
            }
          },
          {
            jp: '性能を上げるために、不要なレンダリングを減らします。',
            romaji: 'Seinō o ageru tame ni, fuyō na rendaringu o herashimasu.',
            meaning: {
              en: 'To improve performance, we reduce unnecessary rendering.',
              vi: 'Để cải thiện hiệu năng, chúng tôi giảm render không cần thiết.'
            }
          }
        ]
      },
      {
        pattern: 'V（辞書形／ない形）ようにする',
        title: {
          en: 'Make it a habit to (ようにする)',
          vi: 'Cố gắng duy trì thói quen (ようにする)'
        },
        explanation: {
          en: 'Use this pattern for team coding habits and engineering best practices.',
          vi: 'Dùng mẫu này để nói về thói quen coding trong team và best practice kỹ thuật.'
        },
        examples: [
          {
            jp: '状態はできるだけ一か所で管理するようにしています。',
            romaji: 'Jōtai wa dekiru dake ikkasho de kanri suru yō ni shite imasu.',
            meaning: {
              en: 'We try to manage state in one place as much as possible.',
              vi: 'Chúng tôi cố gắng quản lý state ở một nơi duy nhất càng nhiều càng tốt.'
            }
          },
          {
            jp: '複雑なロジックはコンポーネントに書かないようにしています。',
            romaji: 'Fukuzatsu na rojikku wa konpōnento ni kakanai yō ni shite imasu.',
            meaning: {
              en: 'We try not to write complex logic directly in components.',
              vi: 'Chúng tôi cố gắng không viết logic phức tạp trực tiếp trong component.'
            }
          }
        ]
      },
      {
        pattern: 'V（辞書形／ない形）ことになっている',
        title: {
          en: 'It is a team rule that (ことになっている)',
          vi: 'Quy định là (ことになっている)'
        },
        explanation: {
          en: 'Use this for team conventions and established development rules.',
          vi: 'Dùng mẫu này để nói về convention team và quy định phát triển đã được đặt ra.'
        },
        examples: [
          {
            jp: '新しい画面はデザインレビューをしてから実装することになっています。',
            romaji: 'Atarashii gamen wa dezain rebyū o shite kara jissō suru koto ni natte imasu.',
            meaning: {
              en: 'It is a rule that new screens are implemented after design review.',
              vi: 'Quy định là màn hình mới phải qua design review rồi mới implement.'
            }
          },
          {
            jp: 'このチームでは、命名規則を必ず守ることになっています。',
            romaji: 'Kono chīmu de wa, meimei kisoku o kanarazu mamoru koto ni natte imasu.',
            meaning: {
              en: 'In this team, following naming conventions is mandatory.',
              vi: 'Trong team này, bắt buộc phải tuân thủ quy tắc đặt tên.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Building a shared UI library', vi: 'Xây dựng thư viện UI dùng chung' },
        lines: [
          {
            jp: '私たちのチームは、画面ごとに似たボタンを何度も作っていました。',
            romaji:
              'Watashitachi no chīmu wa, gamen goto ni nita botan o nando mo tsukutte imashita.',
            meaning: {
              en: 'Our team kept creating similar buttons for each screen.',
              vi: 'Team của chúng tôi liên tục tạo những nút giống nhau cho từng màn hình.'
            }
          },
          {
            jp: '保守を楽にするために、共通コンポーネントライブラリを作ることにしました。',
            romaji:
              'Hoshu o raku ni suru tame ni, kyōtsū konpōnento raiburari o tsukuru koto ni shimashita.',
            meaning: {
              en: 'To make maintenance easier, we decided to build a shared component library.',
              vi: 'Để việc bảo trì dễ hơn, chúng tôi quyết định xây dựng thư viện component dùng chung.'
            }
          },
          {
            jp: 'その結果、可読性が上がり、レビューの時間も短くなりました。',
            romaji: 'Sono kekka, kadokusei ga agari, rebyū no jikan mo mijikaku narimashita.',
            meaning: {
              en: 'As a result, readability improved and review time became shorter.',
              vi: 'Kết quả là tính dễ đọc tăng lên và thời gian review cũng ngắn hơn.'
            }
          },
          {
            jp: '今では、新機能を作るときも既存の部品を再利用するようにしています。',
            romaji:
              'Ima de wa, shinkinō o tsukuru toki mo kizon no buhin o saiyō suru yō ni shite imasu.',
            meaning: {
              en: 'Now, even when building new features, we try to reuse existing parts.',
              vi: 'Hiện tại, kể cả khi làm tính năng mới, chúng tôi cũng cố gắng tái sử dụng phần có sẵn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did the team build a shared component library?',
              vi: 'Vì sao team xây thư viện component dùng chung?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'To make maintenance easier', vi: 'Để việc bảo trì dễ hơn' }
              },
              { id: 'b', label: { en: 'To avoid code review', vi: 'Để tránh code review' } },
              { id: 'c', label: { en: 'To remove all state', vi: 'Để bỏ toàn bộ state' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What improved after introducing shared components?',
              vi: 'Điều gì được cải thiện sau khi có component dùng chung?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Readability and review speed', vi: 'Tính dễ đọc và tốc độ review' }
              },
              { id: 'b', label: { en: 'Internet speed', vi: 'Tốc độ internet' } },
              { id: 'c', label: { en: 'Number of meetings', vi: 'Số cuộc họp' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    track: 'frontend',
    title: {
      en: 'Debugging and Bug Reporting',
      vi: 'Debug và Báo cáo Bug'
    },
    focus: {
      en: 'Use practical Japanese for reproducing bugs, investigating causes, and sharing clear issue reports.',
      vi: 'Dùng tiếng Nhật thực tế để tái hiện bug, điều tra nguyên nhân và chia sẻ báo cáo issue rõ ràng.'
    },
    vocab: [
      {
        kana: 'バグ',
        romaji: 'bagu',
        meaning: { en: 'bug', vi: 'lỗi (bug)' }
      },
      {
        kana: 'さいげん',
        kanji: '再現',
        romaji: 'saigen',
        meaning: { en: 'reproduction', vi: 'tái hiện lỗi' }
      },
      {
        kana: 'てじゅん',
        kanji: '手順',
        romaji: 'tejun',
        meaning: { en: 'steps/procedure', vi: 'các bước thao tác' }
      },
      {
        kana: 'げんいん',
        kanji: '原因',
        romaji: 'gen-in',
        meaning: { en: 'cause', vi: 'nguyên nhân' }
      },
      {
        kana: 'しゅうせい',
        kanji: '修正',
        romaji: 'shūsei',
        meaning: { en: 'fix/correction', vi: 'sửa lỗi' }
      },
      {
        kana: 'けんしょう',
        kanji: '検証',
        romaji: 'kenshō',
        meaning: { en: 'verification', vi: 'xác minh/kiểm chứng' }
      },
      {
        kana: 'さいはつ',
        kanji: '再発',
        romaji: 'saihatsu',
        meaning: { en: 'recurrence', vi: 'tái phát lỗi' }
      },
      {
        kana: 'ログ',
        romaji: 'rogu',
        meaning: { en: 'log', vi: 'log' }
      },
      {
        kana: 'コンソール',
        romaji: 'konsōru',
        meaning: { en: 'console', vi: 'console' }
      },
      {
        kana: 'スタックトレース',
        romaji: 'sutakku torēsu',
        meaning: { en: 'stack trace', vi: 'stack trace' }
      },
      {
        kana: 'しょうさい',
        kanji: '詳細',
        romaji: 'shōsai',
        meaning: { en: 'details', vi: 'chi tiết' }
      },
      {
        kana: 'ほうこく',
        kanji: '報告',
        romaji: 'hōkoku',
        meaning: { en: 'report', vi: 'báo cáo' }
      }
    ],
    grammar: [
      {
        pattern: 'V（て形）+ しまう',
        title: { en: 'Unintended result (てしまう)', vi: 'Kết quả ngoài ý muốn (てしまう)' },
        explanation: {
          en: 'Use this pattern to describe accidental bugs or undesirable system behavior.',
          vi: 'Dùng mẫu này để mô tả lỗi phát sinh ngoài ý muốn hoặc hành vi hệ thống không mong đợi.'
        },
        examples: [
          {
            jp: 'ある条件で、画面が真っ白になってしまいます。',
            romaji: 'Aru jōken de, gamen ga masshiro ni natte shimaimasu.',
            meaning: {
              en: 'Under certain conditions, the screen ends up turning blank.',
              vi: 'Trong một số điều kiện, màn hình bị trắng.'
            }
          },
          {
            jp: '保存ボタンを二回押すと、同じデータが二重に登録されてしまいます。',
            romaji: 'Hozon botan o nikai osu to, onaji dēta ga nijū ni tōroku sarete shimaimasu.',
            meaning: {
              en: 'If the save button is clicked twice, the same data gets registered twice.',
              vi: 'Nếu nhấn nút lưu hai lần, cùng một dữ liệu sẽ bị ghi hai bản.'
            }
          }
        ]
      },
      {
        pattern: 'V（た形）ところ',
        title: {
          en: 'After trying, found that (たところ)',
          vi: 'Sau khi thử thì phát hiện (たところ)'
        },
        explanation: {
          en: 'Useful in debugging reports: after doing step A, we discovered result B.',
          vi: 'Hữu ích trong báo cáo debug: sau khi làm bước A thì phát hiện kết quả B.'
        },
        examples: [
          {
            jp: 'ログを確認したところ、APIのタイムアウトが原因だと分かりました。',
            romaji: 'Rogu o kakunin shita tokoro, API no taimuauto ga gen-in da to wakarimashita.',
            meaning: {
              en: 'After checking logs, we found that API timeout was the cause.',
              vi: 'Sau khi kiểm tra log, chúng tôi phát hiện timeout API là nguyên nhân.'
            }
          },
          {
            jp: '再現手順を試したところ、モバイル環境だけで発生しました。',
            romaji: 'Saigen tejun o tameshita tokoro, mobairu kankyō dake de hassei shimashita.',
            meaning: {
              en: 'After trying reproduction steps, it occurred only on mobile.',
              vi: 'Sau khi thử các bước tái hiện, lỗi chỉ xảy ra trên mobile.'
            }
          }
        ]
      },
      {
        pattern: 'V（ない形）+ ように',
        title: {
          en: 'So that it does not happen (ないように)',
          vi: 'Để không xảy ra (ないように)'
        },
        explanation: {
          en: 'Use this for prevention measures and regression prevention plans.',
          vi: 'Dùng mẫu này cho biện pháp phòng ngừa và kế hoạch tránh lỗi tái diễn.'
        },
        examples: [
          {
            jp: '同じ不具合が再発しないように、テストケースを追加しました。',
            romaji: 'Onaji fuguai ga saihatsu shinai yō ni, tesuto kēsu o tsuika shimashita.',
            meaning: {
              en: 'We added test cases so the same issue does not recur.',
              vi: 'Chúng tôi thêm test case để lỗi tương tự không tái phát.'
            }
          },
          {
            jp: 'ユーザーが誤操作しないように、確認ダイアログを表示します。',
            romaji: 'Yūzā ga gosōsa shinai yō ni, kakunin daiarogu o hyōji shimasu.',
            meaning: {
              en: 'We show a confirmation dialog so users do not misoperate.',
              vi: 'Chúng tôi hiển thị hộp thoại xác nhận để người dùng không thao tác nhầm.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A bug found before release', vi: 'Bug được phát hiện trước khi release' },
        lines: [
          {
            jp: 'リリース前の検証中に、ログイン画面でエラーが出てしまいました。',
            romaji: 'Rirīsu mae no kenshō-chū ni, roguin gamen de erā ga dete shimaimashita.',
            meaning: {
              en: 'During pre-release verification, an error appeared on the login screen.',
              vi: 'Trong lúc kiểm chứng trước release, màn hình đăng nhập đã xuất hiện lỗi.'
            }
          },
          {
            jp: '再現手順を確認したところ、古いブラウザだけで発生することが分かりました。',
            romaji:
              'Saigen tejun o kakunin shita tokoro, furui burauza dake de hassei suru koto ga wakarimashita.',
            meaning: {
              en: 'After checking reproduction steps, we found it occurred only in old browsers.',
              vi: 'Sau khi xác nhận các bước tái hiện, chúng tôi phát hiện lỗi chỉ xảy ra ở trình duyệt cũ.'
            }
          },
          {
            jp: 'チームはすぐに修正し、同じ問題が再発しないようにテストを追加しました。',
            romaji:
              'Chīmu wa sugu ni shūsei shi, onaji mondai ga saihatsu shinai yō ni tesuto o tsuika shimashita.',
            meaning: {
              en: 'The team fixed it immediately and added tests to prevent recurrence.',
              vi: 'Team đã sửa ngay lập tức và thêm test để tránh lỗi tái phát.'
            }
          },
          {
            jp: 'その日のうちに詳細な報告を書き、次のスプリントで改善案を共有しました。',
            romaji:
              'Sono hi no uchi ni shōsai na hōkoku o kaki, tsugi no supurinto de kaizen-an o kyōyū shimashita.',
            meaning: {
              en: 'We wrote a detailed report that day and shared improvements in the next sprint.',
              vi: 'Ngay trong ngày, chúng tôi viết báo cáo chi tiết và chia sẻ phương án cải thiện ở sprint kế tiếp.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Where did the bug occur?',
              vi: 'Bug xảy ra ở đâu?'
            },
            choices: [
              { id: 'a', label: { en: 'On the login screen', vi: 'Ở màn hình đăng nhập' } },
              { id: 'b', label: { en: 'In the admin dashboard', vi: 'Trong dashboard admin' } },
              { id: 'c', label: { en: 'On the settings page', vi: 'Ở trang cài đặt' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the team do to prevent recurrence?',
              vi: 'Team đã làm gì để tránh tái phát?'
            },
            choices: [
              { id: 'a', label: { en: 'Added test cases', vi: 'Thêm test case' } },
              { id: 'b', label: { en: 'Removed logging', vi: 'Bỏ logging' } },
              { id: 'c', label: { en: 'Skipped verification', vi: 'Bỏ qua kiểm chứng' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    track: 'frontend',
    title: {
      en: 'Code Review and Pull Requests',
      vi: 'Code Review và Pull Request'
    },
    focus: {
      en: 'Practice Japanese expressions for review feedback, implementation rationale, and collaborative PR discussions.',
      vi: 'Luyện mẫu câu tiếng Nhật cho phản hồi review, giải thích lý do triển khai và trao đổi PR trong nhóm.'
    },
    vocab: [
      {
        kana: 'プルリクエスト',
        romaji: 'puru rikuesuto',
        meaning: { en: 'pull request', vi: 'pull request' }
      },
      {
        kana: 'ブランチ',
        romaji: 'buranchi',
        meaning: { en: 'branch', vi: 'branch' }
      },
      {
        kana: 'コミット',
        romaji: 'komitto',
        meaning: { en: 'commit', vi: 'commit' }
      },
      {
        kana: 'マージ',
        romaji: 'māji',
        meaning: { en: 'merge', vi: 'merge' }
      },
      {
        kana: 'コンフリクト',
        romaji: 'konfurikuto',
        meaning: { en: 'conflict', vi: 'xung đột (merge conflict)' }
      },
      {
        kana: 'レビューアー',
        romaji: 'rebyūā',
        meaning: { en: 'reviewer', vi: 'người review' }
      },
      {
        kana: 'コメント',
        romaji: 'komento',
        meaning: { en: 'comment', vi: 'nhận xét' }
      },
      {
        kana: 'しょうにん',
        kanji: '承認',
        romaji: 'shōnin',
        meaning: { en: 'approval', vi: 'phê duyệt' }
      },
      {
        kana: 'さぶん',
        kanji: '差分',
        romaji: 'sabun',
        meaning: { en: 'diff', vi: 'phần thay đổi (diff)' }
      },
      {
        kana: 'しゅうせいいらい',
        kanji: '修正依頼',
        romaji: 'shūsei irai',
        meaning: { en: 'change request', vi: 'yêu cầu chỉnh sửa' }
      },
      {
        kana: 'こんきょ',
        kanji: '根拠',
        romaji: 'konkyo',
        meaning: { en: 'rationale/evidence', vi: 'cơ sở/lý do' }
      },
      {
        kana: 'ひんしつ',
        kanji: '品質',
        romaji: 'hinshitsu',
        meaning: { en: 'quality', vi: 'chất lượng' }
      }
    ],
    grammar: [
      {
        pattern: 'V（た形）+ うえで',
        title: { en: 'After doing, then (たうえで)', vi: 'Sau khi làm, rồi (たうえで)' },
        explanation: {
          en: 'Use this in review context for structured process: check first, then decide.',
          vi: 'Dùng mẫu này trong ngữ cảnh review để nói quy trình có thứ tự: kiểm tra trước, quyết định sau.'
        },
        examples: [
          {
            jp: '差分を確認したうえで、承認するか判断します。',
            romaji: 'Sabun o kakunin shita ue de, shōnin suru ka handan shimasu.',
            meaning: {
              en: 'After reviewing the diff, we decide whether to approve.',
              vi: 'Sau khi xem diff, chúng tôi quyết định có phê duyệt hay không.'
            }
          },
          {
            jp: '再現テストをしたうえで、修正をマージしました。',
            romaji: 'Saigen tesuto o shita ue de, shūsei o māji shimashita.',
            meaning: {
              en: 'After running reproduction tests, we merged the fix.',
              vi: 'Sau khi chạy test tái hiện, chúng tôi đã merge bản sửa.'
            }
          }
        ]
      },
      {
        pattern: 'V（辞書形）+ べきだ',
        title: { en: 'Should/ought to (べきだ)', vi: 'Nên/phải (べきだ)' },
        explanation: {
          en: 'Use this for technical recommendations in code review discussions.',
          vi: 'Dùng mẫu này để đưa khuyến nghị kỹ thuật trong thảo luận code review.'
        },
        examples: [
          {
            jp: 'この処理は共通フックに分けるべきです。',
            romaji: 'Kono shori wa kyōtsū fukku ni wakeru beki desu.',
            meaning: {
              en: 'This logic should be extracted into a shared hook.',
              vi: 'Phần xử lý này nên tách ra thành hook dùng chung.'
            }
          },
          {
            jp: '可読性のために、変数名をもっと明確にするべきです。',
            romaji: 'Kadokusei no tame ni, hensūmei o motto meikaku ni suru beki desu.',
            meaning: {
              en: 'For readability, variable names should be more explicit.',
              vi: 'Để dễ đọc hơn, tên biến nên rõ ràng hơn.'
            }
          }
        ]
      },
      {
        pattern: 'V（て形）+ もらえると助かる',
        title: {
          en: 'It would help if you could (てもらえると助かる)',
          vi: 'Nếu bạn có thể... thì sẽ rất hữu ích (てもらえると助かる)'
        },
        explanation: {
          en: 'A soft and collaborative way to request changes in review comments.',
          vi: 'Cách nói mềm mại và hợp tác để đề nghị chỉnh sửa trong comment review.'
        },
        examples: [
          {
            jp: 'この関数に型注釈を追加してもらえると助かります。',
            romaji: 'Kono kansū ni kata chūshaku o tsuika shite moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could add type annotations to this function.',
              vi: 'Nếu bạn có thể thêm chú thích kiểu cho hàm này thì rất tốt.'
            }
          },
          {
            jp: 'この意図をPR本文に書いてもらえると助かります。',
            romaji: 'Kono ito o PR honbun ni kaite moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could explain this intention in the PR description.',
              vi: 'Nếu bạn có thể ghi rõ ý định này trong phần mô tả PR thì rất hữu ích.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Before merging a PR', vi: 'Trước khi merge một PR' },
        lines: [
          {
            jp: '昨日、同僚が大きなプルリクエストを作成しました。',
            romaji: 'Kinō, dōryō ga ōkina puru rikuesuto o sakusei shimashita.',
            meaning: {
              en: 'Yesterday, a colleague created a large pull request.',
              vi: 'Hôm qua, một đồng nghiệp đã tạo pull request khá lớn.'
            }
          },
          {
            jp: 'レビューアーは差分を確認したうえで、いくつか修正依頼を出しました。',
            romaji: 'Rebyūā wa sabun o kakunin shita ue de, ikutsuka shūsei irai o dashimashita.',
            meaning: {
              en: 'After checking the diff, the reviewer requested several changes.',
              vi: 'Sau khi kiểm tra diff, reviewer đã đưa ra một số yêu cầu chỉnh sửa.'
            }
          },
          {
            jp: '「この処理は共通化するべきです」というコメントが特に重要でした。',
            romaji:
              '"Kono shori wa kyōtsūka suru beki desu" to iu komento ga toku ni jūyō deshita.',
            meaning: {
              en: 'The comment saying “this logic should be shared” was especially important.',
              vi: 'Comment “phần xử lý này nên được dùng chung” đặc biệt quan trọng.'
            }
          },
          {
            jp: '修正後に再レビューして承認され、チームは安心してマージできました。',
            romaji:
              'Shūsei-go ni sairebyū shite shōnin sare, chīmu wa anshin shite māji dekimashita.',
            meaning: {
              en: 'After fixes and re-review, it got approved and the team merged confidently.',
              vi: 'Sau khi sửa và review lại, PR được phê duyệt và team merge một cách yên tâm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the reviewer do first?',
              vi: 'Reviewer làm gì đầu tiên?'
            },
            choices: [
              { id: 'a', label: { en: 'Checked the diff', vi: 'Kiểm tra diff' } },
              { id: 'b', label: { en: 'Merged immediately', vi: 'Merge ngay lập tức' } },
              { id: 'c', label: { en: 'Closed the PR', vi: 'Đóng PR' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why could the team merge confidently?',
              vi: 'Vì sao team có thể merge một cách yên tâm?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Because fixes were reviewed and approved',
                  vi: 'Vì bản sửa đã được review và phê duyệt'
                }
              },
              { id: 'b', label: { en: 'Because no one reviewed', vi: 'Vì không ai review' } },
              { id: 'c', label: { en: 'Because tests were removed', vi: 'Vì đã bỏ test' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    track: 'frontend',
    title: {
      en: 'Sprint Planning and Estimation',
      vi: 'Lập kế hoạch Sprint và Estimation'
    },
    focus: {
      en: 'Build project-management Japanese for planning work scope, priorities, and release schedules.',
      vi: 'Xây dựng tiếng Nhật về quản lý dự án để lập kế hoạch phạm vi công việc, ưu tiên và lịch release.'
    },
    vocab: [
      {
        kana: 'スプリント',
        romaji: 'supurinto',
        meaning: { en: 'sprint', vi: 'sprint' }
      },
      {
        kana: 'バックログ',
        romaji: 'bakkurogu',
        meaning: { en: 'backlog', vi: 'backlog' }
      },
      {
        kana: 'ストーリーポイント',
        romaji: 'sutōrī pointo',
        meaning: { en: 'story points', vi: 'điểm ước lượng (story points)' }
      },
      {
        kana: 'みつもり',
        kanji: '見積もり',
        romaji: 'mitsumori',
        meaning: { en: 'estimation', vi: 'ước lượng' }
      },
      {
        kana: 'ゆうせんじゅんい',
        kanji: '優先順位',
        romaji: 'yūsen jun-i',
        meaning: { en: 'priority order', vi: 'thứ tự ưu tiên' }
      },
      {
        kana: 'のうき',
        kanji: '納期',
        romaji: 'nōki',
        meaning: { en: 'deadline/delivery date', vi: 'hạn giao' }
      },
      {
        kana: 'リリース',
        romaji: 'rirīsu',
        meaning: { en: 'release', vi: 'phát hành (release)' }
      },
      {
        kana: 'タスク',
        romaji: 'tasuku',
        meaning: { en: 'task', vi: 'task' }
      },
      {
        kana: 'ぶんかつ',
        kanji: '分割',
        romaji: 'bunkatsu',
        meaning: { en: 'splitting/dividing', vi: 'chia nhỏ' }
      },
      {
        kana: 'ちょうせい',
        kanji: '調整',
        romaji: 'chōsei',
        meaning: { en: 'adjustment', vi: 'điều chỉnh' }
      },
      {
        kana: 'しんちょく',
        kanji: '進捗',
        romaji: 'shinchoku',
        meaning: { en: 'progress', vi: 'tiến độ' }
      },
      {
        kana: 'たんとう',
        kanji: '担当',
        romaji: 'tantō',
        meaning: { en: 'person in charge', vi: 'người phụ trách' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）+ 予定だ',
        title: { en: 'Plan to do (予定だ)', vi: 'Dự định làm (予定だ)' },
        explanation: {
          en: 'Use this for sprint planning, roadmap discussion, and release forecast.',
          vi: 'Dùng mẫu này khi lên kế hoạch sprint, trao đổi roadmap và dự báo release.'
        },
        examples: [
          {
            jp: '次のスプリントで認証機能を改善する予定です。',
            romaji: 'Tsugi no supurinto de ninshō kinō o kaizen suru yotei desu.',
            meaning: {
              en: 'We plan to improve the authentication feature in the next sprint.',
              vi: 'Chúng tôi dự định cải thiện tính năng xác thực trong sprint tới.'
            }
          },
          {
            jp: '金曜日までに見積もりを完了する予定です。',
            romaji: 'Kin-yōbi made ni mitsumori o kanryō suru yotei desu.',
            meaning: {
              en: 'We plan to complete estimations by Friday.',
              vi: 'Chúng tôi dự định hoàn tất ước lượng trước thứ Sáu.'
            }
          }
        ]
      },
      {
        pattern: 'V（辞書形／ない形）ことにする',
        title: { en: 'Decide to do (ことにする)', vi: 'Quyết định làm (ことにする)' },
        explanation: {
          en: 'Use this for decisions made by the team during planning meetings.',
          vi: 'Dùng mẫu này cho quyết định được team đưa ra trong các buổi planning.'
        },
        examples: [
          {
            jp: '今週は優先度の高いバグ修正から対応することにしました。',
            romaji: 'Konshū wa yūsendo no takai bagu shūsei kara taiō suru koto ni shimashita.',
            meaning: {
              en: 'This week, we decided to handle high-priority bug fixes first.',
              vi: 'Tuần này, chúng tôi quyết định xử lý bug ưu tiên cao trước.'
            }
          },
          {
            jp: '大きいタスクは二つに分割することにしました。',
            romaji: 'Ōkii tasuku wa futatsu ni bunkatsu suru koto ni shimashita.',
            meaning: {
              en: 'We decided to split large tasks into two.',
              vi: 'Chúng tôi quyết định chia task lớn thành hai phần.'
            }
          }
        ]
      },
      {
        pattern: 'N に合わせて',
        title: {
          en: 'According to / aligned with (に合わせて)',
          vi: 'Theo / phù hợp với (に合わせて)'
        },
        explanation: {
          en: 'Useful for aligning implementation and release timing with constraints.',
          vi: 'Hữu ích khi căn chỉnh việc triển khai và thời điểm release theo các ràng buộc.'
        },
        examples: [
          {
            jp: 'リリース日程に合わせて、テスト計画を調整します。',
            romaji: 'Rirīsu nittei ni awasete, tesuto keikaku o chōsei shimasu.',
            meaning: {
              en: 'We adjust the test plan according to the release schedule.',
              vi: 'Chúng tôi điều chỉnh kế hoạch test theo lịch release.'
            }
          },
          {
            jp: 'チームの人数に合わせて、タスクの量を決めます。',
            romaji: 'Chīmu no ninzu ni awasete, tasuku no ryō o kimemasu.',
            meaning: {
              en: 'We decide task volume based on team size.',
              vi: 'Chúng tôi quyết định khối lượng task theo số lượng thành viên team.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Planning the next sprint', vi: 'Lên kế hoạch sprint tiếp theo' },
        lines: [
          {
            jp: '毎週月曜日に、私たちのチームはスプリント計画会議を行います。',
            romaji:
              'Maishū getsuyōbi ni, watashitachi no chīmu wa supurinto keikaku kaigi o okonaimasu.',
            meaning: {
              en: 'Every Monday, our team holds a sprint planning meeting.',
              vi: 'Mỗi thứ Hai, team chúng tôi tổ chức buổi họp lập kế hoạch sprint.'
            }
          },
          {
            jp: '今回は納期に合わせて、バックログの優先順位を見直すことにしました。',
            romaji:
              'Konkai wa nōki ni awasete, bakkurogu no yūsen jun-i o minaosu koto ni shimashita.',
            meaning: {
              en: 'This time, we decided to review backlog priorities according to the deadline.',
              vi: 'Lần này, chúng tôi quyết định xem lại ưu tiên backlog theo hạn giao.'
            }
          },
          {
            jp: '見積もりの結果、大きい機能は次のスプリントに回す予定です。',
            romaji: 'Mitsumori no kekka, ōkii kinō wa tsugi no supurinto ni mawasu yotei desu.',
            meaning: {
              en: 'Based on estimation results, large features are planned for the next sprint.',
              vi: 'Theo kết quả estimation, các tính năng lớn dự định chuyển sang sprint kế tiếp.'
            }
          },
          {
            jp: '会議のあと、担当を決めてすぐに実装を開始しました。',
            romaji: 'Kaigi no ato, tantō o kimete sugu ni jissō o kaishi shimashita.',
            meaning: {
              en: 'After the meeting, we assigned owners and started implementation immediately.',
              vi: 'Sau buổi họp, chúng tôi phân công phụ trách và bắt đầu implement ngay.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the team review in this planning session?',
              vi: 'Trong buổi planning này, team đã xem lại điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Backlog priorities', vi: 'Ưu tiên backlog' } },
              { id: 'b', label: { en: 'Office seating', vi: 'Chỗ ngồi trong văn phòng' } },
              { id: 'c', label: { en: 'Company logo', vi: 'Logo công ty' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened to large features?',
              vi: 'Các tính năng lớn được xử lý thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Moved to the next sprint', vi: 'Chuyển sang sprint kế tiếp' }
              },
              { id: 'b', label: { en: 'Deleted permanently', vi: 'Xóa vĩnh viễn' } },
              { id: 'c', label: { en: 'Released immediately', vi: 'Release ngay' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-5',
    number: 5,
    track: 'frontend',
    title: {
      en: 'Requirements and Stakeholder Communication',
      vi: 'Yêu cầu và Giao tiếp với Stakeholder'
    },
    focus: {
      en: 'Master useful Japanese for clarifying requirements, discussing scope, and aligning with product stakeholders.',
      vi: 'Làm chủ mẫu tiếng Nhật hữu ích để làm rõ yêu cầu, thảo luận phạm vi và đồng thuận với stakeholder sản phẩm.'
    },
    vocab: [
      {
        kana: 'ようけん',
        kanji: '要件',
        romaji: 'yōken',
        meaning: { en: 'requirement', vi: 'yêu cầu' }
      },
      {
        kana: 'しよう',
        kanji: '仕様',
        romaji: 'shiyō',
        meaning: { en: 'specification', vi: 'đặc tả' }
      },
      {
        kana: 'はんい',
        kanji: '範囲',
        romaji: 'han-i',
        meaning: { en: 'scope', vi: 'phạm vi' }
      },
      {
        kana: 'えいきょうはんい',
        kanji: '影響範囲',
        romaji: 'eikyō han-i',
        meaning: { en: 'impact scope', vi: 'phạm vi ảnh hưởng' }
      },
      {
        kana: 'ステークホルダー',
        romaji: 'sutēkuhorudā',
        meaning: { en: 'stakeholder', vi: 'stakeholder' }
      },
      {
        kana: 'フィードバック',
        romaji: 'fīdobakku',
        meaning: { en: 'feedback', vi: 'phản hồi' }
      },
      {
        kana: 'ごうい',
        kanji: '合意',
        romaji: 'gōi',
        meaning: { en: 'agreement/alignment', vi: 'đồng thuận' }
      },
      {
        kana: 'へんこういらい',
        kanji: '変更依頼',
        romaji: 'henkō irai',
        meaning: { en: 'change request', vi: 'yêu cầu thay đổi' }
      },
      {
        kana: 'じゅよう',
        kanji: '受容',
        romaji: 'juyō',
        meaning: { en: 'acceptance', vi: 'chấp nhận' }
      },
      {
        kana: 'じゅようきじゅん',
        kanji: '受容基準',
        romaji: 'juyō kijun',
        meaning: { en: 'acceptance criteria', vi: 'tiêu chí chấp nhận' }
      },
      {
        kana: 'せつめいせきにん',
        kanji: '説明責任',
        romaji: 'setsumei sekinin',
        meaning: { en: 'accountability', vi: 'trách nhiệm giải trình' }
      },
      {
        kana: 'ちょうせい',
        kanji: '調整',
        romaji: 'chōsei',
        meaning: { en: 'coordination', vi: 'điều phối/điều chỉnh' }
      }
    ],
    grammar: [
      {
        pattern: 'N に対して',
        title: { en: 'Toward / regarding (に対して)', vi: 'Đối với / liên quan tới (に対して)' },
        explanation: {
          en: 'Useful when discussing responses to stakeholder feedback or user needs.',
          vi: 'Hữu ích khi nói về cách phản hồi feedback của stakeholder hoặc nhu cầu người dùng.'
        },
        examples: [
          {
            jp: 'ステークホルダーの意見に対して、開発チームは三つの案を出しました。',
            romaji:
              'Sutēkuhorudā no iken ni taishite, kaihatsu chīmu wa mittsu no an o dashimashita.',
            meaning: {
              en: 'In response to stakeholder feedback, the dev team proposed three options.',
              vi: 'Để phản hồi ý kiến stakeholder, team dev đã đưa ra ba phương án.'
            }
          },
          {
            jp: 'この変更依頼に対して、影響範囲を先に確認する必要があります。',
            romaji:
              'Kono henkō irai ni taishite, eikyō han-i o saki ni kakunin suru hitsuyō ga arimasu.',
            meaning: {
              en: 'For this change request, we need to confirm impact scope first.',
              vi: 'Với yêu cầu thay đổi này, chúng ta cần xác nhận phạm vi ảnh hưởng trước.'
            }
          }
        ]
      },
      {
        pattern: 'N だけでなく N も',
        title: { en: 'Not only A but also B', vi: 'Không chỉ A mà còn B' },
        explanation: {
          en: 'Use it to explain multiple impacted systems, teams, or outcomes.',
          vi: 'Dùng để diễn đạt nhiều hệ thống, team hoặc kết quả cùng bị ảnh hưởng.'
        },
        examples: [
          {
            jp: 'この仕様変更はフロントエンドだけでなく、バックエンドにも影響します。',
            romaji: 'Kono shiyō henkō wa furontoendo dake de naku, bakkuendo ni mo eikyō shimasu.',
            meaning: {
              en: 'This spec change affects not only frontend but backend as well.',
              vi: 'Thay đổi đặc tả này ảnh hưởng không chỉ frontend mà cả backend.'
            }
          },
          {
            jp: 'ユーザー体験だけでなく、運用コストも改善できます。',
            romaji: 'Yūzā taiken dake de naku, un-yō kosuto mo kaizen dekimasu.',
            meaning: {
              en: 'We can improve not only user experience but also operation costs.',
              vi: 'Chúng ta có thể cải thiện không chỉ trải nghiệm người dùng mà cả chi phí vận hành.'
            }
          }
        ]
      },
      {
        pattern: '普通形 + 場合は',
        title: { en: 'In case / when (場合は)', vi: 'Trong trường hợp / khi (場合は)' },
        explanation: {
          en: 'Use this pattern to define requirement conditions and acceptance criteria.',
          vi: 'Dùng mẫu này để định nghĩa điều kiện yêu cầu và tiêu chí chấp nhận.'
        },
        examples: [
          {
            jp: '要件が変わる場合は、必ず見積もりを更新してください。',
            romaji: 'Yōken ga kawaru baai wa, kanarazu mitsumori o kōshin shite kudasai.',
            meaning: {
              en: 'If requirements change, please update estimations without fail.',
              vi: 'Nếu yêu cầu thay đổi, hãy luôn cập nhật ước lượng.'
            }
          },
          {
            jp: '受容基準を満たさない場合は、リリースを延期します。',
            romaji: 'Juyō kijun o mitasanai baai wa, rirīsu o enki shimasu.',
            meaning: {
              en: 'If acceptance criteria are not met, release will be postponed.',
              vi: 'Nếu không đạt tiêu chí chấp nhận, release sẽ được hoãn lại.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Aligning on product requirements', vi: 'Đồng thuận yêu cầu sản phẩm' },
        lines: [
          {
            jp: '新機能の要件について、プロダクト担当と開発チームで打ち合わせをしました。',
            romaji:
              'Shinkinō no yōken ni tsuite, purodakuto tantō to kaihatsu chīmu de uchiawase o shimashita.',
            meaning: {
              en: 'The product owner and dev team held a meeting about new feature requirements.',
              vi: 'PO và team dev đã họp về yêu cầu cho tính năng mới.'
            }
          },
          {
            jp: '議論の中で、この変更はフロントエンドだけでなく運用チームにも影響すると分かりました。',
            romaji:
              'Giron no naka de, kono henkō wa furontoendo dake de naku un-yō chīmu ni mo eikyō suru to wakarimashita.',
            meaning: {
              en: 'During discussion, we realized this change impacts not only frontend but operations too.',
              vi: 'Trong lúc thảo luận, chúng tôi nhận ra thay đổi này ảnh hưởng không chỉ frontend mà cả team vận hành.'
            }
          },
          {
            jp: '要件が変わる場合は、影響範囲と納期を同時に見直すことにしました。',
            romaji:
              'Yōken ga kawaru baai wa, eikyō han-i to nōki o dōji ni minaosu koto ni shimashita.',
            meaning: {
              en: 'If requirements change, we decided to review both impact scope and deadline together.',
              vi: 'Nếu yêu cầu thay đổi, chúng tôi quyết định xem lại đồng thời cả phạm vi ảnh hưởng và hạn giao.'
            }
          },
          {
            jp: '最後に受容基準を明確にして、全員で合意しました。',
            romaji: 'Saigo ni juyō kijun o meikaku ni shite, zen-in de gōi shimashita.',
            meaning: {
              en: 'Finally, we clarified acceptance criteria and reached team-wide agreement.',
              vi: 'Cuối cùng, chúng tôi làm rõ tiêu chí chấp nhận và đạt được đồng thuận toàn team.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Who joined the requirement meeting?',
              vi: 'Ai tham gia buổi họp yêu cầu?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Product owner and dev team', vi: 'PO và team dev' }
              },
              { id: 'b', label: { en: 'Only the design team', vi: 'Chỉ team thiết kế' } },
              { id: 'c', label: { en: 'Only the QA team', vi: 'Chỉ team QA' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did they do at the end?',
              vi: 'Cuối buổi họp họ đã làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Clarified acceptance criteria and aligned',
                  vi: 'Làm rõ tiêu chí chấp nhận và đồng thuận'
                }
              },
              { id: 'b', label: { en: 'Canceled the feature', vi: 'Hủy tính năng' } },
              { id: 'c', label: { en: 'Changed company policy', vi: 'Đổi chính sách công ty' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-6',
    number: 6,
    track: 'frontend',
    title: {
      en: 'Release, Incident Response, and Postmortem',
      vi: 'Release, Ứng phó Sự cố và Postmortem'
    },
    focus: {
      en: 'Learn production-incident Japanese for deployment risk, quick recovery, and team postmortem communication.',
      vi: 'Học tiếng Nhật về sự cố production: rủi ro deploy, phục hồi nhanh và trao đổi postmortem trong team.'
    },
    vocab: [
      {
        kana: 'デプロイ',
        romaji: 'depuroi',
        meaning: { en: 'deploy/deployment', vi: 'deploy/triển khai' }
      },
      {
        kana: 'ロールバック',
        romaji: 'rōrubakku',
        meaning: { en: 'rollback', vi: 'rollback' }
      },
      {
        kana: 'ダウンタイム',
        romaji: 'dauntaimu',
        meaning: { en: 'downtime', vi: 'thời gian downtime' }
      },
      {
        kana: 'しょうがい',
        kanji: '障害',
        romaji: 'shōgai',
        meaning: { en: 'incident/outage', vi: 'sự cố' }
      },
      {
        kana: 'ふっきゅう',
        kanji: '復旧',
        romaji: 'fukkyū',
        meaning: { en: 'recovery/restoration', vi: 'khôi phục' }
      },
      {
        kana: 'アラート',
        romaji: 'arāto',
        meaning: { en: 'alert', vi: 'cảnh báo' }
      },
      {
        kana: 'モニタリング',
        romaji: 'monitaringu',
        meaning: { en: 'monitoring', vi: 'giám sát hệ thống' }
      },
      {
        kana: 'ホットフィックス',
        romaji: 'hottofikkusu',
        meaning: { en: 'hotfix', vi: 'hotfix' }
      },
      {
        kana: 'げんいんぶんせき',
        kanji: '原因分析',
        romaji: 'gen-in bunseki',
        meaning: { en: 'root cause analysis', vi: 'phân tích nguyên nhân gốc' }
      },
      {
        kana: 'さいはつぼうし',
        kanji: '再発防止',
        romaji: 'saihatsu bōshi',
        meaning: { en: 'prevention of recurrence', vi: 'ngăn tái diễn' }
      },
      {
        kana: 'ふりかえり',
        kanji: '振り返り',
        romaji: 'furikaeri',
        meaning: { en: 'retrospective/postmortem review', vi: 'buổi nhìn lại/postmortem' }
      },
      {
        kana: 'たいおう',
        kanji: '対応',
        romaji: 'taiō',
        meaning: { en: 'response/handling', vi: 'xử lý/ứng phó' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）+ おそれがある',
        title: { en: 'There is a risk that (おそれがある)', vi: 'Có nguy cơ rằng (おそれがある)' },
        explanation: {
          en: 'Use this pattern for release risk communication and incident warnings.',
          vi: 'Dùng mẫu này khi truyền đạt rủi ro release và cảnh báo sự cố.'
        },
        examples: [
          {
            jp: 'この設定を変更すると、サービスが停止するおそれがあります。',
            romaji: 'Kono settei o henkō suru to, sābisu ga teishi suru osore ga arimasu.',
            meaning: {
              en: 'Changing this setting may risk stopping the service.',
              vi: 'Thay đổi cấu hình này có nguy cơ làm dịch vụ dừng hoạt động.'
            }
          },
          {
            jp: '監視が不十分だと、障害の発見が遅れるおそれがあります。',
            romaji: 'Kanshi ga fujūbun da to, shōgai no hakken ga okureru osore ga arimasu.',
            meaning: {
              en: 'If monitoring is insufficient, incident detection may be delayed.',
              vi: 'Nếu giám sát không đủ, việc phát hiện sự cố có nguy cơ bị chậm.'
            }
          }
        ]
      },
      {
        pattern: 'V（た形）+ らすぐ',
        title: {
          en: 'As soon as ~, immediately (たらすぐ)',
          vi: 'Hễ ~ thì ngay lập tức (たらすぐ)'
        },
        explanation: {
          en: 'Useful in incident runbooks for immediate response instructions.',
          vi: 'Hữu ích trong runbook sự cố để đưa chỉ dẫn phản ứng ngay lập tức.'
        },
        examples: [
          {
            jp: 'アラートが鳴ったらすぐ、担当者に連絡してください。',
            romaji: 'Arāto ga natta ra sugu, tantōsha ni renraku shite kudasai.',
            meaning: {
              en: 'As soon as an alert fires, contact the owner immediately.',
              vi: 'Hễ alert kích hoạt thì liên hệ người phụ trách ngay.'
            }
          },
          {
            jp: '異常を確認したらすぐ、ロールバックを実行します。',
            romaji: 'Ijō o kakunin shitara sugu, rōrubakku o jikkō shimasu.',
            meaning: {
              en: 'As soon as an anomaly is confirmed, we execute rollback.',
              vi: 'Ngay khi xác nhận bất thường, chúng tôi thực hiện rollback.'
            }
          }
        ]
      },
      {
        pattern: 'N のおかげで / N のせいで',
        title: {
          en: 'Thanks to / because of (おかげで / せいで)',
          vi: 'Nhờ / vì (おかげで / せいで)'
        },
        explanation: {
          en: 'Use おかげで for positive outcomes and せいで for negative incident causes.',
          vi: 'Dùng おかげで cho kết quả tích cực và せいで cho nguyên nhân tiêu cực trong sự cố.'
        },
        examples: [
          {
            jp: '監視アラートのおかげで、問題を早く発見できました。',
            romaji: 'Kanshi arāto no okage de, mondai o hayaku hakken dekimashita.',
            meaning: {
              en: 'Thanks to monitoring alerts, we detected the issue quickly.',
              vi: 'Nhờ alert giám sát, chúng tôi phát hiện vấn đề sớm.'
            }
          },
          {
            jp: '設定ミスのせいで、サービスが一時的に停止しました。',
            romaji: 'Settei misu no sei de, sābisu ga ichijiteki ni teishi shimashita.',
            meaning: {
              en: 'Because of a configuration mistake, the service temporarily stopped.',
              vi: 'Vì lỗi cấu hình, dịch vụ đã tạm thời dừng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'Recovering from a production incident',
          vi: 'Khôi phục sau sự cố production'
        },
        lines: [
          {
            jp: '夜のデプロイ後、モニタリングのアラートが連続で鳴りました。',
            romaji: 'Yoru no depuroi-go, monitaringu no arāto ga renzoku de narimashita.',
            meaning: {
              en: 'After a night deployment, monitoring alerts fired repeatedly.',
              vi: 'Sau đợt deploy buổi tối, alert giám sát đã kêu liên tục.'
            }
          },
          {
            jp: '担当者は異常を確認したらすぐ、ロールバックを実行しました。',
            romaji: 'Tantōsha wa ijō o kakunin shitara sugu, rōrubakku o jikkō shimashita.',
            meaning: {
              en: 'As soon as the owner confirmed anomalies, they executed rollback.',
              vi: 'Ngay khi người phụ trách xác nhận bất thường, họ đã thực hiện rollback.'
            }
          },
          {
            jp: '監視体制のおかげでダウンタイムは短く、ユーザーへの影響も小さくできました。',
            romaji:
              'Kanshi taisei no okage de dauntaimu wa mijikaku, yūzā e no eikyō mo chiisaku dekimashita.',
            meaning: {
              en: 'Thanks to monitoring readiness, downtime was short and user impact stayed small.',
              vi: 'Nhờ hệ thống giám sát, downtime ngắn và ảnh hưởng đến người dùng được giữ ở mức nhỏ.'
            }
          },
          {
            jp: '翌日の振り返りで原因分析を行い、再発防止のタスクを追加しました。',
            romaji:
              'Yokujitsu no furikaeri de gen-in bunseki o okonai, saihatsu bōshi no tasuku o tsuika shimashita.',
            meaning: {
              en: 'In the next day postmortem, we performed root cause analysis and added prevention tasks.',
              vi: 'Trong buổi postmortem ngày hôm sau, chúng tôi phân tích nguyên nhân gốc và thêm task phòng ngừa tái diễn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the owner do immediately after confirming the issue?',
              vi: 'Người phụ trách đã làm gì ngay sau khi xác nhận sự cố?'
            },
            choices: [
              { id: 'a', label: { en: 'Executed rollback', vi: 'Thực hiện rollback' } },
              { id: 'b', label: { en: 'Started a new feature', vi: 'Bắt đầu tính năng mới' } },
              { id: 'c', label: { en: 'Ignored alerts', vi: 'Bỏ qua alert' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened in the postmortem?',
              vi: 'Trong postmortem đã làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Root cause analysis and recurrence-prevention tasks',
                  vi: 'Phân tích nguyên nhân gốc và task ngăn tái diễn'
                }
              },
              { id: 'b', label: { en: 'Removed monitoring', vi: 'Bỏ giám sát' } },
              { id: 'c', label: { en: 'Canceled all releases', vi: 'Hủy mọi release' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
