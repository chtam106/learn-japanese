import type { Lesson } from '@/constants/courses/types.ts';

export const frontendLessonsB: Lesson[] = [
  {
    id: 'lesson-7',
    number: 7,
    track: 'frontend',
    title: {
      en: 'Architecture Decisions for Frontend Systems',
      vi: 'Quyết định kiến trúc cho hệ thống frontend'
    },
    focus: {
      en: 'Learn advanced technical Japanese for architecture trade-offs, state design, and long-term maintainability.',
      vi: 'Học tiếng Nhật kỹ thuật nâng cao cho việc đánh đổi kiến trúc, thiết kế state và khả năng bảo trì dài hạn.'
    },
    vocab: [
      {
        kana: 'アーキテクチャ',
        romaji: 'ākitekucha',
        meaning: { en: 'architecture', vi: 'kiến trúc hệ thống' }
      },
      {
        kana: 'こうせい',
        kanji: '構成',
        romaji: 'kōsei',
        meaning: { en: 'structure/composition', vi: 'cấu trúc, thành phần' }
      },
      {
        kana: 'せんたくし',
        kanji: '選択肢',
        romaji: 'sentakushi',
        meaning: { en: 'option/alternative', vi: 'phương án lựa chọn' }
      },
      {
        kana: 'トレードオフ',
        romaji: 'torēdoofu',
        meaning: { en: 'trade-off', vi: 'đánh đổi' }
      },
      {
        kana: 'かくちょうせい',
        kanji: '拡張性',
        romaji: 'kakuchōsei',
        meaning: { en: 'scalability/extensibility', vi: 'khả năng mở rộng' }
      },
      {
        kana: 'いじほしゅ',
        kanji: '維持保守',
        romaji: 'iji hoshu',
        meaning: { en: 'operation and maintenance', vi: 'vận hành và bảo trì' }
      },
      {
        kana: 'どくりつせい',
        kanji: '独立性',
        romaji: 'dokuritsusei',
        meaning: { en: 'independence/decoupling', vi: 'tính độc lập, tách rời' }
      },
      {
        kana: 'いぞんかんけい',
        kanji: '依存関係',
        romaji: 'izon kankei',
        meaning: { en: 'dependency relationship', vi: 'quan hệ phụ thuộc' }
      },
      {
        kana: 'いこうコスト',
        kanji: '移行コスト',
        romaji: 'ikō kosuto',
        meaning: { en: 'migration cost', vi: 'chi phí chuyển đổi' }
      },
      {
        kana: 'せっけいししん',
        kanji: '設計指針',
        romaji: 'sekkei shishin',
        meaning: { en: 'design guideline', vi: 'định hướng thiết kế' }
      },
      {
        kana: 'ぶんさん',
        kanji: '分散',
        romaji: 'bunsan',
        meaning: { en: 'distribution/decentralization', vi: 'phân tán' }
      },
      {
        kana: 'しゅうちゅう',
        kanji: '集中',
        romaji: 'shūchū',
        meaning: { en: 'centralization', vi: 'tập trung' }
      }
    ],
    grammar: [
      {
        pattern: 'N に基づいて',
        title: { en: 'Based on (に基づいて)', vi: 'Dựa trên (に基づいて)' },
        explanation: {
          en: 'Formal pattern to describe architecture choices grounded in data or requirements.',
          vi: 'Mẫu trang trọng để diễn đạt lựa chọn kiến trúc dựa trên dữ liệu hoặc yêu cầu.'
        },
        examples: [
          {
            jp: 'アクセスログに基づいて、状態管理の構成を見直しました。',
            romaji: 'Akusesu rogu ni motozuite, jōtai kanri no kōsei o minaoshimashita.',
            meaning: {
              en: 'Based on access logs, we revised the state-management structure.',
              vi: 'Dựa trên access log, chúng tôi đã xem lại cấu trúc quản lý state.'
            }
          },
          {
            jp: 'ユーザー要件に基づいて、画面の責務を再定義します。',
            romaji: 'Yūzā yōken ni motozuite, gamen no sekimu o saiteigi shimasu.',
            meaning: {
              en: 'Based on user requirements, we redefine responsibilities of each screen.',
              vi: 'Dựa trên yêu cầu người dùng, chúng tôi định nghĩa lại trách nhiệm của từng màn hình.'
            }
          }
        ]
      },
      {
        pattern: 'N を踏まえて',
        title: { en: 'Taking ~ into account (を踏まえて)', vi: 'Tính đến ~ (を踏まえて)' },
        explanation: {
          en: 'Used when deciding architecture after considering constraints and context.',
          vi: 'Dùng khi đưa ra quyết định kiến trúc sau khi cân nhắc các ràng buộc và bối cảnh.'
        },
        examples: [
          {
            jp: '移行コストを踏まえて、段階的にリファクタリングする方針です。',
            romaji: 'Ikō kosuto o fumaete, dankai-teki ni rifakutaringu suru hōshin desu.',
            meaning: {
              en: 'Taking migration cost into account, our policy is to refactor in phases.',
              vi: 'Tính đến chi phí chuyển đổi, định hướng của chúng tôi là refactor theo từng giai đoạn.'
            }
          },
          {
            jp: '依存関係の複雑さを踏まえて、モジュールを分割しました。',
            romaji: 'Izon kankei no fukuzatsusa o fumaete, mojūru o bunkatsu shimashita.',
            meaning: {
              en: 'Considering dependency complexity, we split modules.',
              vi: 'Tính đến độ phức tạp của quan hệ phụ thuộc, chúng tôi đã tách module.'
            }
          }
        ]
      },
      {
        pattern: 'V（辞書形）ことになる',
        title: { en: 'It ends up being decided that', vi: 'Kết quả là được quyết định rằng' },
        explanation: {
          en: 'Useful for documenting final architecture decisions at team level.',
          vi: 'Hữu ích để ghi nhận quyết định kiến trúc cuối cùng ở cấp độ team.'
        },
        examples: [
          {
            jp: '検討の結果、共通UI基盤を先に整備することになりました。',
            romaji: 'Kentō no kekka, kyōtsū UI kiban o saki ni seibi suru koto ni narimashita.',
            meaning: {
              en: 'After discussion, it was decided to prepare the shared UI foundation first.',
              vi: 'Sau khi cân nhắc, đã quyết định ưu tiên xây dựng nền tảng UI dùng chung trước.'
            }
          },
          {
            jp: '次期リリースでは、新しいルーティング方式を採用することになっています。',
            romaji:
              'Jiki rirīsu de wa, atarashii rūtingu hōshiki o saiyō suru koto ni natte imasu.',
            meaning: {
              en: 'For the next release, it has been decided to adopt a new routing approach.',
              vi: 'Ở release kế tiếp, đã có quyết định áp dụng cách routing mới.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Choosing a state architecture', vi: 'Chọn kiến trúc quản lý state' },
        lines: [
          {
            jp: '私たちのプロジェクトでは、画面が増えるにつれて状態管理が複雑になってきました。',
            romaji:
              'Watashitachi no purojekuto de wa, gamen ga fueru ni tsurete jōtai kanri ga fukuzatsu ni natte kimashita.',
            meaning: {
              en: 'In our project, state management became more complex as screens increased.',
              vi: 'Trong dự án của chúng tôi, quản lý state trở nên phức tạp khi số màn hình tăng lên.'
            }
          },
          {
            jp: 'チームはアクセスログと運用実績に基づいて、構成の見直しを始めました。',
            romaji:
              'Chīmu wa akusesu rogu to un-yō jisseki ni motozuite, kōsei no minaoshi o hajimemashita.',
            meaning: {
              en: 'Based on access logs and operational records, the team started architecture review.',
              vi: 'Dựa trên access log và kết quả vận hành, team bắt đầu xem lại cấu trúc.'
            }
          },
          {
            jp: '移行コストを踏まえて、一度に変更せず段階的に導入することにしました。',
            romaji:
              'Ikō kosuto o fumaete, ichido ni henkō sezu dankai-teki ni dōnyū suru koto ni shimashita.',
            meaning: {
              en: 'Taking migration cost into account, we decided to introduce it gradually, not all at once.',
              vi: 'Tính đến chi phí chuyển đổi, chúng tôi quyết định triển khai theo từng bước thay vì thay một lần.'
            }
          },
          {
            jp: 'その結果、可読性と保守性が向上し、レビューの負担も減りました。',
            romaji: 'Sono kekka, kadokusei to hoshusei ga kōjō shi, rebyū no futan mo herimashita.',
            meaning: {
              en: 'As a result, readability and maintainability improved, and review burden decreased.',
              vi: 'Kết quả là tính dễ đọc và bảo trì tăng lên, đồng thời gánh nặng review cũng giảm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did the team review architecture?',
              vi: 'Vì sao team xem lại kiến trúc?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'State management became complex',
                  vi: 'Quản lý state trở nên phức tạp'
                }
              },
              { id: 'b', label: { en: 'They had no logs', vi: 'Họ không có log' } },
              { id: 'c', label: { en: 'They removed all screens', vi: 'Họ xóa hết màn hình' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What was the outcome?',
              vi: 'Kết quả là gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Better readability and maintainability',
                  vi: 'Cải thiện tính dễ đọc và bảo trì'
                }
              },
              { id: 'b', label: { en: 'More review burden', vi: 'Tăng gánh nặng review' } },
              { id: 'c', label: { en: 'Canceled migration', vi: 'Hủy chuyển đổi' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-8',
    number: 8,
    track: 'frontend',
    title: {
      en: 'API Contracts and Cross-team Communication',
      vi: 'API contract và giao tiếp liên team'
    },
    focus: {
      en: 'Use practical Japanese for backend/frontend coordination, API specification updates, and impact sharing.',
      vi: 'Dùng tiếng Nhật thực tế cho phối hợp backend/frontend, cập nhật đặc tả API và chia sẻ ảnh hưởng.'
    },
    vocab: [
      {
        kana: 'APIしよう',
        kanji: 'API仕様',
        romaji: 'API shiyō',
        meaning: { en: 'API specification', vi: 'đặc tả API' }
      },
      {
        kana: 'けいやく',
        kanji: '契約',
        romaji: 'keiyaku',
        meaning: { en: 'contract/agreement', vi: 'thỏa thuận, contract' }
      },
      {
        kana: 'へんこうてん',
        kanji: '変更点',
        romaji: 'henkōten',
        meaning: { en: 'change points', vi: 'điểm thay đổi' }
      },
      {
        kana: 'かんれんきのう',
        kanji: '関連機能',
        romaji: 'kanren kinō',
        meaning: { en: 'related features', vi: 'tính năng liên quan' }
      },
      {
        kana: 'たいおうほうしん',
        kanji: '対応方針',
        romaji: 'taiō hōshin',
        meaning: { en: 'response policy', vi: 'định hướng xử lý' }
      },
      {
        kana: 'じぜんきょうゆう',
        kanji: '事前共有',
        romaji: 'jizen kyōyū',
        meaning: { en: 'advance sharing', vi: 'chia sẻ trước' }
      },
      {
        kana: 'しんこう',
        kanji: '進行',
        romaji: 'shinkō',
        meaning: { en: 'progression/proceeding', vi: 'tiến trình' }
      },
      { kana: 'ずれ', romaji: 'zure', meaning: { en: 'mismatch/gap', vi: 'độ lệch, không khớp' } },
      {
        kana: 'せいごうせい',
        kanji: '整合性',
        romaji: 'seigōsei',
        meaning: { en: 'consistency', vi: 'tính nhất quán' }
      },
      {
        kana: 'かいしゅう',
        kanji: '改修',
        romaji: 'kaishū',
        meaning: { en: 'modification/refinement', vi: 'chỉnh sửa, cải tiến' }
      },
      {
        kana: 'しんこうかんり',
        kanji: '進行管理',
        romaji: 'shinkō kanri',
        meaning: { en: 'progress management', vi: 'quản lý tiến độ' }
      },
      {
        kana: 'れんけい',
        kanji: '連携',
        romaji: 'renkei',
        meaning: { en: 'coordination/integration', vi: 'phối hợp, liên kết' }
      }
    ],
    grammar: [
      {
        pattern: 'N に対して',
        title: {
          en: 'Regarding / in response to (に対して)',
          vi: 'Đối với / để phản hồi (に対して)'
        },
        explanation: {
          en: 'Used when explaining how frontend responds to backend changes or requests.',
          vi: 'Dùng khi giải thích cách frontend phản hồi thay đổi hoặc yêu cầu từ backend.'
        },
        examples: [
          {
            jp: 'このAPI変更に対して、フロント側は二段階で対応します。',
            romaji: 'Kono API henkō ni taishite, furonto-gawa wa nidankai de taiō shimasu.',
            meaning: {
              en: 'For this API change, frontend will respond in two phases.',
              vi: 'Với thay đổi API này, phía frontend sẽ xử lý theo hai giai đoạn.'
            }
          },
          {
            jp: 'レビューコメントに対して、実装意図を補足しました。',
            romaji: 'Rebyū komento ni taishite, jissō ito o hosoku shimashita.',
            meaning: {
              en: 'In response to review comments, we added implementation rationale.',
              vi: 'Để phản hồi comment review, chúng tôi đã bổ sung ý định triển khai.'
            }
          }
        ]
      },
      {
        pattern: 'N に関して',
        title: { en: 'Concerning / with respect to (に関して)', vi: 'Liên quan đến (に関して)' },
        explanation: {
          en: 'Formal phrase for technical discussion points and documentation.',
          vi: 'Cụm trang trọng dùng cho điểm thảo luận kỹ thuật và tài liệu.'
        },
        examples: [
          {
            jp: '認証フローに関して、両チームで仕様を再確認しました。',
            romaji: 'Ninshō furō ni kanshite, ryōchīmu de shiyō o saikakunin shimashita.',
            meaning: {
              en: 'Concerning authentication flow, both teams reconfirmed the specification.',
              vi: 'Liên quan đến luồng xác thực, hai team đã xác nhận lại đặc tả.'
            }
          },
          {
            jp: 'データ整合性に関して、追加の検証項目を作成します。',
            romaji: 'Dēta seigōsei ni kanshite, tsuika no kenshō kōmoku o sakusei shimasu.',
            meaning: {
              en: 'Regarding data consistency, we will create additional verification items.',
              vi: 'Liên quan đến tính nhất quán dữ liệu, chúng tôi sẽ tạo thêm hạng mục kiểm chứng.'
            }
          }
        ]
      },
      {
        pattern: 'V（ない形）ようにする',
        title: {
          en: 'Try to avoid / ensure not (ないようにする)',
          vi: 'Cố gắng tránh / đảm bảo không (ないようにする)'
        },
        explanation: {
          en: 'Useful for preventing mismatches between teams and reducing regression.',
          vi: 'Hữu ích để tránh lệch thông tin giữa các team và giảm lỗi hồi quy.'
        },
        examples: [
          {
            jp: '実装のずれが出ないように、仕様変更は事前共有します。',
            romaji: 'Jissō no zure ga denai yō ni, shiyō henkō wa jizen kyōyū shimasu.',
            meaning: {
              en: 'To avoid implementation mismatch, we share spec changes in advance.',
              vi: 'Để không phát sinh lệch triển khai, chúng tôi chia sẻ thay đổi đặc tả từ trước.'
            }
          },
          {
            jp: '認識違いが起きないように、議事録を必ず残します。',
            romaji: 'Ninshiki chigai ga okinai yō ni, gijiroku o kanarazu nokoshimasu.',
            meaning: {
              en: 'To avoid misunderstandings, we always keep meeting notes.',
              vi: 'Để tránh hiểu nhầm, chúng tôi luôn lưu biên bản họp.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'When API specs change mid-sprint', vi: 'Khi đặc tả API đổi giữa sprint' },
        lines: [
          {
            jp: 'スプリントの途中で、バックエンド側からAPI仕様の変更連絡がありました。',
            romaji:
              'Supurinto no tochū de, bakkuendo-gawa kara API shiyō no henkō renraku ga arimashita.',
            meaning: {
              en: 'Mid-sprint, backend informed us of API spec changes.',
              vi: 'Giữa sprint, phía backend thông báo có thay đổi đặc tả API.'
            }
          },
          {
            jp: 'その変更に対して、フロントエンドは影響範囲を整理して対応方針を提案しました。',
            romaji:
              'Sono henkō ni taishite, furontoendo wa eikyō han-i o seiri shite taiō hōshin o teian shimashita.',
            meaning: {
              en: 'In response, frontend organized impact scope and proposed a response plan.',
              vi: 'Để phản hồi, frontend đã tổng hợp phạm vi ảnh hưởng và đề xuất hướng xử lý.'
            }
          },
          {
            jp: '整合性に関して不安があったため、両チームで追加の確認会を開きました。',
            romaji:
              'Seigōsei ni kanshite fuan ga atta tame, ryōchīmu de tsuika no kakunikai o hirakimashita.',
            meaning: {
              en: 'Because there were consistency concerns, both teams held an extra alignment meeting.',
              vi: 'Vì có lo ngại về tính nhất quán, hai team đã tổ chức thêm một buổi xác nhận.'
            }
          },
          {
            jp: 'その後は変更点を事前共有する運用にして、同じ問題が起きないようにしました。',
            romaji:
              'Sono go wa henkōten o jizen kyōyū suru un-yō ni shite, onaji mondai ga okinai yō ni shimashita.',
            meaning: {
              en: 'After that, we adopted advance-sharing of changes so the same issue would not recur.',
              vi: 'Sau đó, chúng tôi áp dụng quy trình chia sẻ thay đổi trước để tránh lặp lại vấn đề tương tự.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What happened mid-sprint?', vi: 'Điều gì xảy ra giữa sprint?' },
            choices: [
              { id: 'a', label: { en: 'API specs changed', vi: 'Đặc tả API thay đổi' } },
              { id: 'b', label: { en: 'Sprint was canceled', vi: 'Sprint bị hủy' } },
              { id: 'c', label: { en: 'No communication occurred', vi: 'Không có trao đổi nào' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How did they prevent recurrence?',
              vi: 'Họ ngăn tái diễn bằng cách nào?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Sharing change points in advance',
                  vi: 'Chia sẻ điểm thay đổi từ trước'
                }
              },
              { id: 'b', label: { en: 'Removing all meetings', vi: 'Bỏ hết cuộc họp' } },
              { id: 'c', label: { en: 'Freezing all APIs', vi: 'Đóng băng toàn bộ API' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-9',
    number: 9,
    track: 'frontend',
    title: {
      en: 'Release Strategy and Risk Management',
      vi: 'Chiến lược release và quản trị rủi ro'
    },
    focus: {
      en: 'Develop Japanese expressions for gradual rollout, risk checks, and release decision-making.',
      vi: 'Phát triển mẫu tiếng Nhật cho rollout theo giai đoạn, kiểm tra rủi ro và ra quyết định release.'
    },
    vocab: [
      {
        kana: 'だんかいてきリリース',
        kanji: '段階的リリース',
        romaji: 'dankai-teki rirīsu',
        meaning: { en: 'phased release', vi: 'release theo giai đoạn' }
      },
      { kana: 'ロールアウト', romaji: 'rōruauto', meaning: { en: 'rollout', vi: 'rollout' } },
      {
        kana: 'かんしこうもく',
        kanji: '監視項目',
        romaji: 'kanshi kōmoku',
        meaning: { en: 'monitoring item', vi: 'hạng mục giám sát' }
      },
      {
        kana: 'けいかいしきいち',
        kanji: '警戒しきい値',
        romaji: 'keikai shikiichi',
        meaning: { en: 'alert threshold', vi: 'ngưỡng cảnh báo' }
      },
      {
        kana: 'ひがい',
        kanji: '被害',
        romaji: 'higai',
        meaning: { en: 'damage/impact', vi: 'thiệt hại, ảnh hưởng' }
      },
      {
        kana: 'ふきゅう',
        kanji: '普及',
        romaji: 'fukyū',
        meaning: { en: 'adoption/spread', vi: 'mức độ phổ biến' }
      },
      {
        kana: 'けんしょうかんきょう',
        kanji: '検証環境',
        romaji: 'kenshō kankyō',
        meaning: { en: 'staging/test environment', vi: 'môi trường kiểm chứng' }
      },
      {
        kana: 'じっせきち',
        kanji: '実績値',
        romaji: 'jissekichi',
        meaning: { en: 'actual metric value', vi: 'giá trị thực tế' }
      },
      {
        kana: 'じょうたいかんし',
        kanji: '状態監視',
        romaji: 'jōtai kanshi',
        meaning: { en: 'state monitoring', vi: 'giám sát trạng thái' }
      },
      {
        kana: 'はんてい',
        kanji: '判定',
        romaji: 'hantei',
        meaning: { en: 'judgment/decision', vi: 'đánh giá, phán định' }
      },
      {
        kana: 'ていし',
        kanji: '停止',
        romaji: 'teishi',
        meaning: { en: 'halt/stop', vi: 'dừng, ngưng' }
      },
      {
        kana: 'さいかい',
        kanji: '再開',
        romaji: 'saikai',
        meaning: { en: 'resume/restart', vi: 'khởi động lại' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）おそれがある',
        title: { en: 'There is a risk that (おそれがある)', vi: 'Có nguy cơ rằng (おそれがある)' },
        explanation: {
          en: 'Formal warning expression used in release risk evaluations.',
          vi: 'Mẫu cảnh báo trang trọng được dùng trong đánh giá rủi ro release.'
        },
        examples: [
          {
            jp: 'この変更を一括で適用すると、表示速度が低下するおそれがあります。',
            romaji:
              'Kono henkō o ikkatsu de tekiyō suru to, hyōji sokudo ga teika suru osore ga arimasu.',
            meaning: {
              en: 'Applying this change all at once may risk slower rendering speed.',
              vi: 'Nếu áp dụng thay đổi này một lượt, có nguy cơ tốc độ hiển thị bị giảm.'
            }
          },
          {
            jp: '監視項目が不足していると、障害の発見が遅れるおそれがあります。',
            romaji:
              'Kanshi kōmoku ga fusoku shite iru to, shōgai no hakken ga okureru osore ga arimasu.',
            meaning: {
              en: 'If monitoring items are insufficient, incident detection may be delayed.',
              vi: 'Nếu hạng mục giám sát thiếu, có nguy cơ phát hiện sự cố chậm.'
            }
          }
        ]
      },
      {
        pattern: 'N + 限り',
        title: { en: 'As long as / while (限り)', vi: 'Miễn là / chừng nào (限り)' },
        explanation: {
          en: 'Useful for expressing release go/no-go conditions.',
          vi: 'Hữu ích để diễn đạt điều kiện quyết định go/no-go khi release.'
        },
        examples: [
          {
            jp: '重大なアラートが出ない限り、ロールアウトを続けます。',
            romaji: 'Jūdai na arāto ga denai kagiri, rōruauto o tsuzukemasu.',
            meaning: {
              en: 'As long as no critical alerts appear, we continue rollout.',
              vi: 'Miễn là không có alert nghiêm trọng, chúng tôi tiếp tục rollout.'
            }
          },
          {
            jp: '実績値が基準内にある限り、リリースを止める必要はありません。',
            romaji: 'Jissekichi ga kijun-nai ni aru kagiri, rirīsu o tomeru hitsuyō wa arimasen.',
            meaning: {
              en: 'As long as actual metrics stay within threshold, there is no need to stop release.',
              vi: 'Chừng nào chỉ số thực tế còn trong ngưỡng, không cần dừng release.'
            }
          }
        ]
      },
      {
        pattern: 'V（た形）うえで',
        title: {
          en: 'After doing and then deciding (たうえで)',
          vi: 'Sau khi làm rồi quyết định (たうえで)'
        },
        explanation: {
          en: 'Indicates sequence of verification before release decision.',
          vi: 'Diễn đạt thứ tự xác minh rồi mới ra quyết định release.'
        },
        examples: [
          {
            jp: '検証環境で十分に確認したうえで、本番反映を行います。',
            romaji: 'Kenshō kankyō de jūbun ni kakunin shita ue de, honban hanyō o okonaimasu.',
            meaning: {
              en: 'After thorough verification in staging, we deploy to production.',
              vi: 'Sau khi xác nhận đầy đủ ở môi trường kiểm chứng, chúng tôi mới đưa lên production.'
            }
          },
          {
            jp: 'チームで判定したうえで、リリース再開の可否を決めました。',
            romaji: 'Chīmu de hantei shita ue de, rirīsu saikai no kahi o kimemashita.',
            meaning: {
              en: 'After team evaluation, we decided whether to resume release.',
              vi: 'Sau khi team đánh giá, chúng tôi quyết định có khởi động lại release hay không.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'Deciding whether to continue rollout',
          vi: 'Quyết định có tiếp tục rollout hay không'
        },
        lines: [
          {
            jp: '新機能は段階的リリースで公開され、最初は全体の一割のユーザーだけに配信されました。',
            romaji:
              'Shinkinō wa dankai-teki rirīsu de kōkai sare, saisho wa zentai no ichiwari no yūzā dake ni haishin saremashita.',
            meaning: {
              en: 'The new feature was released in phases, first to only 10% of users.',
              vi: 'Tính năng mới được phát hành theo giai đoạn, ban đầu chỉ tới 10% người dùng.'
            }
          },
          {
            jp: 'チームは監視項目を確認したうえで、次の配信範囲を判断しました。',
            romaji:
              'Chīmu wa kanshi kōmoku o kakunin shita ue de, tsugi no haishin han-i o handan shimashita.',
            meaning: {
              en: 'After reviewing monitoring items, the team judged the next rollout scope.',
              vi: 'Sau khi kiểm tra hạng mục giám sát, team đã đánh giá phạm vi phát hành tiếp theo.'
            }
          },
          {
            jp: '重大なアラートが出ない限り、配信を続ける方針でした。',
            romaji: 'Jūdai na arāto ga denai kagiri, haishin o tsuzukeru hōshin deshita.',
            meaning: {
              en: 'The policy was to continue rollout as long as no critical alerts appeared.',
              vi: 'Định hướng là tiếp tục phát hành miễn là không xuất hiện alert nghiêm trọng.'
            }
          },
          {
            jp: '結果として問題は起きず、予定どおり全ユーザーに展開できました。',
            romaji: 'Kekka to shite mondai wa okizu, yotei-dōri zen-yūzā ni tenkai dekimashita.',
            meaning: {
              en: 'In the end, no major issues occurred and rollout reached all users as planned.',
              vi: 'Kết quả là không phát sinh vấn đề lớn và rollout tới toàn bộ người dùng đúng kế hoạch.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How was the feature released initially?',
              vi: 'Ban đầu tính năng được phát hành thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Phased to 10% of users first',
                  vi: 'Theo giai đoạn, trước cho 10% người dùng'
                }
              },
              {
                id: 'b',
                label: { en: 'To all users at once', vi: 'Cho tất cả người dùng cùng lúc' }
              },
              {
                id: 'c',
                label: {
                  en: 'Only to internal staff forever',
                  vi: 'Chỉ cho nội bộ và không mở rộng'
                }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What condition allowed rollout to continue?',
              vi: 'Điều kiện nào cho phép tiếp tục rollout?'
            },
            choices: [
              { id: 'a', label: { en: 'No critical alerts', vi: 'Không có alert nghiêm trọng' } },
              { id: 'b', label: { en: 'No monitoring at all', vi: 'Không giám sát gì cả' } },
              { id: 'c', label: { en: 'No team discussion', vi: 'Không thảo luận trong team' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-10',
    number: 10,
    track: 'frontend',
    title: {
      en: 'Mentoring and Technical Leadership',
      vi: 'Mentoring và lãnh đạo kỹ thuật'
    },
    focus: {
      en: 'Practice Japanese for mentoring junior developers, growing review culture, and sharing technical direction.',
      vi: 'Luyện tiếng Nhật để mentoring dev junior, phát triển văn hóa review và chia sẻ định hướng kỹ thuật.'
    },
    vocab: [
      { kana: 'メンタリング', romaji: 'mentaringu', meaning: { en: 'mentoring', vi: 'mentoring' } },
      {
        kana: 'しどう',
        kanji: '指導',
        romaji: 'shidō',
        meaning: { en: 'guidance', vi: 'hướng dẫn' }
      },
      {
        kana: 'こうはい',
        kanji: '後輩',
        romaji: 'kōhai',
        meaning: { en: 'junior colleague', vi: 'đàn em, thành viên junior' }
      },
      {
        kana: 'せいちょうきかい',
        kanji: '成長機会',
        romaji: 'seichō kikai',
        meaning: { en: 'growth opportunity', vi: 'cơ hội phát triển' }
      },
      {
        kana: 'ふりかえり',
        kanji: '振り返り',
        romaji: 'furikaeri',
        meaning: { en: 'retrospective', vi: 'nhìn lại, retrospective' }
      },
      {
        kana: 'もくひょうせってい',
        kanji: '目標設定',
        romaji: 'mokuhyō settei',
        meaning: { en: 'goal setting', vi: 'đặt mục tiêu' }
      },
      {
        kana: 'けいぞくてき',
        kanji: '継続的',
        romaji: 'keizoku-teki',
        meaning: { en: 'continuous', vi: 'liên tục' }
      },
      { kana: 'しえん', kanji: '支援', romaji: 'shien', meaning: { en: 'support', vi: 'hỗ trợ' } },
      {
        kana: 'かいぜんてん',
        kanji: '改善点',
        romaji: 'kaizenten',
        meaning: { en: 'improvement point', vi: 'điểm cần cải thiện' }
      },
      {
        kana: 'つよみ',
        kanji: '強み',
        romaji: 'tsuyomi',
        meaning: { en: 'strength', vi: 'điểm mạnh' }
      },
      {
        kana: 'じりつ',
        kanji: '自立',
        romaji: 'jiritsu',
        meaning: { en: 'independence', vi: 'tự lập' }
      },
      {
        kana: 'しなりお',
        kanji: 'シナリオ',
        romaji: 'shinario',
        meaning: { en: 'scenario', vi: 'kịch bản' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）ように促す',
        title: {
          en: 'Encourage someone to (ように促す)',
          vi: 'Khuyến khích ai đó làm (ように促す)'
        },
        explanation: {
          en: 'Useful for mentoring context when advising juniors to take action.',
          vi: 'Hữu ích trong ngữ cảnh mentoring khi khuyến khích junior chủ động hành động.'
        },
        examples: [
          {
            jp: '後輩には、まず自分で原因を調べるように促しています。',
            romaji: 'Kōhai ni wa, mazu jibun de gen-in o shiraberu yō ni unagashite imasu.',
            meaning: {
              en: 'I encourage juniors to investigate root causes on their own first.',
              vi: 'Tôi khuyến khích các bạn junior trước hết tự tìm nguyên nhân.'
            }
          },
          {
            jp: 'レビュー前にテスト結果を共有するように促しました。',
            romaji: 'Rebyū mae ni tesuto kekka o kyōyū suru yō ni unagashimashita.',
            meaning: {
              en: 'I encouraged them to share test results before review.',
              vi: 'Tôi đã khuyến khích họ chia sẻ kết quả test trước khi review.'
            }
          }
        ]
      },
      {
        pattern: 'N だけでなく N も',
        title: { en: 'Not only A but also B', vi: 'Không chỉ A mà còn B' },
        explanation: {
          en: 'Common for leadership communication about balanced feedback and growth.',
          vi: 'Thường dùng trong giao tiếp lãnh đạo để phản hồi cân bằng và phát triển.'
        },
        examples: [
          {
            jp: '改善点だけでなく、強みも具体的に伝えるようにしています。',
            romaji: 'Kaizenten dake de naku, tsuyomi mo gutaiteki ni tsutaeru yō ni shite imasu.',
            meaning: {
              en: 'I try to communicate not only improvement points but strengths concretely as well.',
              vi: 'Tôi cố gắng truyền đạt cụ thể không chỉ điểm cần cải thiện mà cả điểm mạnh.'
            }
          },
          {
            jp: '技術力だけでなく、説明力も評価します。',
            romaji: 'Gijutsuryoku dake de naku, setsumeiryoku mo hyōka shimasu.',
            meaning: {
              en: 'We evaluate not only technical skill but communication clarity too.',
              vi: 'Chúng tôi đánh giá không chỉ kỹ năng kỹ thuật mà cả khả năng giải thích.'
            }
          }
        ]
      },
      {
        pattern: 'V（辞書形）ことで',
        title: {
          en: 'By doing, result follows (ことで)',
          vi: 'Bằng cách làm, sẽ có kết quả (ことで)'
        },
        explanation: {
          en: 'Use this to explain how mentoring actions lead to team growth outcomes.',
          vi: 'Dùng mẫu này để giải thích hành động mentoring tạo ra kết quả phát triển của team.'
        },
        examples: [
          {
            jp: '毎週ふりかえりを行うことで、チームの課題が早く見えるようになります。',
            romaji:
              'Maishū furikaeri o okonau koto de, chīmu no kadai ga hayaku mieru yō ni narimasu.',
            meaning: {
              en: 'By doing weekly retrospectives, team issues become visible earlier.',
              vi: 'Bằng cách retrospective hàng tuần, vấn đề của team được nhìn thấy sớm hơn.'
            }
          },
          {
            jp: '目標設定を明確にすることで、後輩の自立を支援できます。',
            romaji: 'Mokuhyō settei o meikaku ni suru koto de, kōhai no jiritsu o shien dekimasu.',
            meaning: {
              en: "By clarifying goals, we can support junior developers' independence.",
              vi: 'Bằng cách làm rõ mục tiêu, chúng ta có thể hỗ trợ junior tự lập hơn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'Growing juniors through review culture',
          vi: 'Phát triển junior qua văn hóa review'
        },
        lines: [
          {
            jp: '新しい後輩がチームに入ってから、レビューの進め方を少し変えました。',
            romaji:
              'Atarashii kōhai ga chīmu ni haitte kara, rebyū no susumekata o sukoshi kaemashita.',
            meaning: {
              en: 'After a new junior joined, we adjusted the way we run reviews.',
              vi: 'Sau khi một junior mới vào team, chúng tôi đã thay đổi nhẹ cách review.'
            }
          },
          {
            jp: '改善点だけでなく強みも伝えることで、本人の自信が上がりました。',
            romaji:
              'Kaizenten dake de naku tsuyomi mo tsutaeru koto de, honnin no jishin ga agarimashita.',
            meaning: {
              en: 'By sharing strengths as well as improvements, their confidence improved.',
              vi: 'Bằng cách truyền đạt cả điểm mạnh lẫn điểm cần cải thiện, sự tự tin của bạn ấy tăng lên.'
            }
          },
          {
            jp: 'また、実装前に自分の案を説明するように促したところ、設計の質も高くなりました。',
            romaji:
              'Mata, jissō mae ni jibun no an o setsumei suru yō ni unagashita tokoro, sekkei no shitsu mo takaku narimashita.',
            meaning: {
              en: 'Also, after encouraging them to explain their approach before coding, design quality improved.',
              vi: 'Ngoài ra, sau khi khuyến khích bạn ấy giải thích phương án trước khi code, chất lượng thiết kế cũng cao hơn.'
            }
          },
          {
            jp: '継続的な支援を続けることで、後輩は一人でタスクを完了できるようになりました。',
            romaji:
              'Keizoku-teki na shien o tsuzukeru koto de, kōhai wa hitori de tasuku o kanryō dekiru yō ni narimashita.',
            meaning: {
              en: 'By continuing support, the junior became able to complete tasks independently.',
              vi: 'Nhờ duy trì hỗ trợ liên tục, junior đã có thể tự hoàn thành task.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What changed in their review approach?',
              vi: 'Họ đã thay đổi gì trong cách review?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'They shared strengths and improvements',
                  vi: 'Họ chia sẻ cả điểm mạnh và điểm cần cải thiện'
                }
              },
              { id: 'b', label: { en: 'They stopped all reviews', vi: 'Họ dừng toàn bộ review' } },
              { id: 'c', label: { en: 'They removed feedback', vi: 'Họ bỏ phản hồi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What was the long-term result?', vi: 'Kết quả dài hạn là gì?' },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The junior could finish tasks independently',
                  vi: 'Junior có thể tự hoàn thành task'
                }
              },
              { id: 'b', label: { en: 'Team quality decreased', vi: 'Chất lượng team giảm' } },
              {
                id: 'c',
                label: { en: 'No one explained designs', vi: 'Không ai giải thích thiết kế' }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
