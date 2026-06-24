import type { Lesson } from '../types.ts';

export const frontendLessonsC: Lesson[] = [
  {
    id: 'lesson-11',
    number: 11,
    track: 'frontend',
    title: {
      en: 'Testing Strategy and QA Collaboration',
      vi: 'Chiến lược testing và phối hợp QA'
    },
    focus: {
      en: 'Learn practical Japanese for writing test cases, triaging defects, and collaborating with QA engineers.',
      vi: 'Học tiếng Nhật thực tế để viết test case, phân loại lỗi và phối hợp với QA engineer.'
    },
    vocab: [
      {
        kana: 'テストケース',
        romaji: 'tesuto kēsu',
        meaning: { en: 'test case', vi: 'test case' }
      },
      {
        kana: 'テストシナリオ',
        romaji: 'tesuto shinario',
        meaning: { en: 'test scenario', vi: 'kịch bản test' }
      },
      {
        kana: 'しょうがい',
        kanji: '障害',
        romaji: 'shōgai',
        meaning: { en: 'defect/incident', vi: 'sự cố/lỗi' }
      },
      {
        kana: 'ふぐあい',
        kanji: '不具合',
        romaji: 'fuguai',
        meaning: { en: 'bug/malfunction', vi: 'lỗi bất thường' }
      },
      {
        kana: 'ゆうせんど',
        kanji: '優先度',
        romaji: 'yūsendo',
        meaning: { en: 'priority', vi: 'mức ưu tiên' }
      },
      {
        kana: 'さいげんせい',
        kanji: '再現性',
        romaji: 'saigensei',
        meaning: { en: 'reproducibility', vi: 'tính tái hiện' }
      },
      {
        kana: 'しょうさい',
        kanji: '詳細',
        romaji: 'shōsai',
        meaning: { en: 'details', vi: 'chi tiết' }
      },
      {
        kana: 'けんしょう',
        kanji: '検証',
        romaji: 'kenshō',
        meaning: { en: 'verification', vi: 'kiểm chứng' }
      }
    ],
    grammar: [
      {
        pattern: 'V（た形）ところ',
        title: { en: 'After trying, found that', vi: 'Sau khi thử thì phát hiện' },
        explanation: {
          en: 'Use this pattern in defect reports to explain what you observed after executing steps.',
          vi: 'Dùng mẫu này trong bug report để nêu điều quan sát được sau khi thực hiện thao tác.'
        },
        examples: [
          {
            jp: '同じ手順で検証したところ、モバイルだけで不具合が再現しました。',
            romaji:
              'Onaji tejun de kenshō shita tokoro, mobairu dake de fuguai ga saigen shimashita.',
            meaning: {
              en: 'After verifying with the same steps, the bug reproduced only on mobile.',
              vi: 'Sau khi kiểm chứng cùng thao tác, lỗi chỉ tái hiện trên mobile.'
            }
          },
          {
            jp: 'ログを確認したところ、通信エラーが原因だと分かりました。',
            romaji: 'Rogu o kakunin shita tokoro, tsūshin erā ga gen-in da to wakarimashita.',
            meaning: {
              en: 'After checking logs, we found communication error was the cause.',
              vi: 'Sau khi kiểm tra log, chúng tôi phát hiện lỗi giao tiếp là nguyên nhân.'
            }
          }
        ]
      },
      {
        pattern: 'V（ない形）ように',
        title: { en: 'So that it does not happen', vi: 'Để không xảy ra' },
        explanation: {
          en: 'Use this to describe preventive actions and regression prevention plans.',
          vi: 'Dùng mẫu này để diễn đạt hành động phòng ngừa và kế hoạch tránh lỗi lặp lại.'
        },
        examples: [
          {
            jp: '同じ障害が再発しないように、回帰テストを追加しました。',
            romaji: 'Onaji shōgai ga saihatsu shinai yō ni, kaiki tesuto o tsuika shimashita.',
            meaning: {
              en: 'We added regression tests so the same incident does not recur.',
              vi: 'Chúng tôi thêm regression test để sự cố tương tự không tái diễn.'
            }
          },
          {
            jp: '見落としがないように、レビュー項目を明文化します。',
            romaji: 'Miotoshi ga nai yō ni, rebyū kōmoku o meibunka shimasu.',
            meaning: {
              en: 'We document review items to avoid missing anything.',
              vi: 'Chúng tôi văn bản hóa hạng mục review để tránh bỏ sót.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Bug triage meeting', vi: 'Cuộc họp triage bug' },
        lines: [
          {
            jp: '朝のミーティングで、QAチームから三件の不具合報告がありました。',
            romaji: 'Asa no mītingu de, QA chīmu kara san-ken no fuguai hōkoku ga arimashita.',
            meaning: {
              en: 'In the morning meeting, QA reported three defects.',
              vi: 'Trong buổi họp sáng, team QA báo ba lỗi.'
            }
          },
          {
            jp: '再現性とユーザー影響を確認したところ、一件は最優先だと判断されました。',
            romaji:
              'Saigensei to yūzā eikyō o kakunin shita tokoro, ikken wa sai-yūsen da to handan saremashita.',
            meaning: {
              en: 'After checking reproducibility and user impact, one issue was judged top priority.',
              vi: 'Sau khi kiểm tra tính tái hiện và ảnh hưởng người dùng, một lỗi được xác định là ưu tiên cao nhất.'
            }
          },
          {
            jp: 'チームは本日中に修正して、再発しないようにテストを強化することにしました。',
            romaji:
              'Chīmu wa honjitsu-chū ni shūsei shite, saihatsu shinai yō ni tesuto o kyōka suru koto ni shimashita.',
            meaning: {
              en: 'The team decided to fix it today and strengthen tests to prevent recurrence.',
              vi: 'Team quyết định sửa trong hôm nay và tăng cường test để tránh tái diễn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'How many defects were reported?', vi: 'Có bao nhiêu lỗi được báo?' },
            choices: [
              { id: 'a', label: { en: 'Three defects', vi: 'Ba lỗi' } },
              { id: 'b', label: { en: 'One defect', vi: 'Một lỗi' } },
              { id: 'c', label: { en: 'Five defects', vi: 'Năm lỗi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What did the team decide?', vi: 'Team đã quyết định gì?' },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Fix it today and strengthen tests',
                  vi: 'Sửa trong hôm nay và tăng cường test'
                }
              },
              { id: 'b', label: { en: 'Postpone all fixes', vi: 'Hoãn toàn bộ sửa lỗi' } },
              { id: 'c', label: { en: 'Remove QA process', vi: 'Bỏ quy trình QA' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-12',
    number: 12,
    track: 'frontend',
    title: {
      en: 'CI/CD and Safe Deployment',
      vi: 'CI/CD và triển khai an toàn'
    },
    focus: {
      en: 'Use Japanese expressions for CI pipeline checks, staged rollout, and safe deployment decisions.',
      vi: 'Dùng mẫu tiếng Nhật cho kiểm tra pipeline CI, rollout theo giai đoạn và quyết định deploy an toàn.'
    },
    vocab: [
      { kana: 'パイプライン', romaji: 'paipurain', meaning: { en: 'pipeline', vi: 'pipeline' } },
      {
        kana: 'じどうか',
        kanji: '自動化',
        romaji: 'jidōka',
        meaning: { en: 'automation', vi: 'tự động hóa' }
      },
      { kana: 'ロールアウト', romaji: 'rōruauto', meaning: { en: 'rollout', vi: 'rollout' } },
      {
        kana: 'かいきテスト',
        kanji: '回帰テスト',
        romaji: 'kaiki tesuto',
        meaning: { en: 'regression test', vi: 'regression test' }
      },
      {
        kana: 'ほんばん',
        kanji: '本番',
        romaji: 'honban',
        meaning: { en: 'production', vi: 'production' }
      },
      {
        kana: 'てんかい',
        kanji: '展開',
        romaji: 'tenkai',
        meaning: { en: 'deployment/rollout', vi: 'triển khai' }
      },
      { kana: 'ロールバック', romaji: 'rōrubakku', meaning: { en: 'rollback', vi: 'rollback' } },
      {
        kana: 'けいかい',
        kanji: '警戒',
        romaji: 'keikai',
        meaning: { en: 'alert/caution', vi: 'cảnh báo, đề phòng' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）おそれがある',
        title: { en: 'There is a risk that', vi: 'Có nguy cơ rằng' },
        explanation: {
          en: 'Use formal risk expressions in release and incident communication.',
          vi: 'Dùng mẫu diễn đạt rủi ro trang trọng khi trao đổi release và sự cố.'
        },
        examples: [
          {
            jp: 'この変更を一度に反映すると、表示速度が落ちるおそれがあります。',
            romaji:
              'Kono henkō o ichido ni han-ei suru to, hyōji sokudo ga ochiru osore ga arimasu.',
            meaning: {
              en: 'If we apply this change all at once, there is a risk rendering speed drops.',
              vi: 'Nếu áp dụng thay đổi này một lần, có nguy cơ tốc độ hiển thị giảm.'
            }
          },
          {
            jp: '監視が不足すると、障害検知が遅れるおそれがあります。',
            romaji: 'Kanshi ga fusoku suru to, shōgai kenchi ga okureru osore ga arimasu.',
            meaning: {
              en: 'If monitoring is insufficient, incident detection may be delayed.',
              vi: 'Nếu giám sát thiếu, việc phát hiện sự cố có thể bị chậm.'
            }
          }
        ]
      },
      {
        pattern: 'V（た形）うえで',
        title: { en: 'After doing and then', vi: 'Sau khi làm rồi' },
        explanation: {
          en: 'Useful for explaining ordered deployment checks before go-live decisions.',
          vi: 'Hữu ích để giải thích thứ tự kiểm tra trước khi quyết định go-live.'
        },
        examples: [
          {
            jp: '検証環境で確認したうえで、本番にデプロイします。',
            romaji: 'Kenshō kankyō de kakunin shita ue de, honban ni depuroi shimasu.',
            meaning: {
              en: 'After verifying in staging, we deploy to production.',
              vi: 'Sau khi xác minh ở staging, chúng tôi deploy lên production.'
            }
          },
          {
            jp: '指標を評価したうえで、ロールアウト範囲を広げます。',
            romaji: 'Shihyō o hyōka shita ue de, rōruauto han-i o hirogemasu.',
            meaning: {
              en: 'After evaluating metrics, we expand rollout scope.',
              vi: 'Sau khi đánh giá chỉ số, chúng tôi mở rộng phạm vi rollout.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Staged rollout decision', vi: 'Quyết định rollout theo giai đoạn' },
        lines: [
          {
            jp: '金曜日のデプロイは、障害が起きるおそれがあるので避けることにしました。',
            romaji:
              "Kin'yōbi no depuroi wa, shōgai ga okiru osore ga aru node sakeru koto ni shimashita.",
            meaning: {
              en: 'We decided to avoid Friday deploys because there is a risk of incidents.',
              vi: 'Chúng tôi quyết định tránh deploy thứ Sáu vì có nguy cơ xảy ra sự cố.'
            }
          },
          {
            jp: 'CIのテストとステージング確認を終えたうえで、本番にリリースします。',
            romaji: 'CI no tesuto to sutējingu kakunin o oeta ue de, honban ni rirīsu shimasu.',
            meaning: {
              en: 'After finishing CI tests and staging checks, we release to production.',
              vi: 'Sau khi hoàn tất test CI và kiểm tra staging, chúng tôi mới release lên production.'
            }
          },
          {
            jp: 'まず一部のユーザーに公開して、問題がなければ全体に広げます。',
            romaji: 'Mazu ichibu no yūzā ni kōkai shite, mondai ga nakereba zentai ni hirogemasu.',
            meaning: {
              en: 'First we release to some users, then expand to everyone if there are no problems.',
              vi: 'Đầu tiên mở cho một phần người dùng, nếu không có vấn đề thì mở rộng cho tất cả.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did they avoid Friday deploys?',
              vi: 'Vì sao họ tránh deploy thứ Sáu?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'There is a risk of incidents', vi: 'Có nguy cơ xảy ra sự cố' }
              },
              { id: 'b', label: { en: 'No one works on Friday', vi: 'Thứ Sáu không ai làm việc' } },
              { id: 'c', label: { en: 'CI runs faster then', vi: 'CI chạy nhanh hơn khi đó' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happens before the production release?',
              vi: 'Điều gì diễn ra trước khi release production?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'CI tests and staging checks', vi: 'Test CI và kiểm tra staging' }
              },
              { id: 'b', label: { en: 'Nothing at all', vi: 'Không gì cả' } },
              { id: 'c', label: { en: 'All tests are deleted', vi: 'Xóa toàn bộ test' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-13',
    number: 13,
    track: 'frontend',
    title: {
      en: 'Accessibility and Inclusive UI',
      vi: 'Accessibility và giao diện bao trùm'
    },
    focus: {
      en: 'Discuss accessibility requirements in Japanese and describe inclusive UI implementation strategies.',
      vi: 'Trao đổi yêu cầu accessibility bằng tiếng Nhật và mô tả chiến lược triển khai UI bao trùm.'
    },
    vocab: [
      {
        kana: 'アクセシビリティ',
        romaji: 'akuseshibiriti',
        meaning: { en: 'accessibility', vi: 'khả năng tiếp cận' }
      },
      {
        kana: 'キーボードそうさ',
        kanji: 'キーボード操作',
        romaji: 'kībōdo sōsa',
        meaning: { en: 'keyboard operation', vi: 'thao tác bằng bàn phím' }
      },
      {
        kana: 'たいひど',
        kanji: '対比度',
        romaji: 'taihido',
        meaning: { en: 'contrast ratio', vi: 'độ tương phản' }
      },
      {
        kana: 'スクリーンリーダー',
        romaji: 'sukurīn rīdā',
        meaning: { en: 'screen reader', vi: 'trình đọc màn hình' }
      },
      { kana: 'ラベル', romaji: 'raberu', meaning: { en: 'label', vi: 'nhãn' } },
      {
        kana: 'ariaぞくせい',
        kanji: 'ARIA属性',
        romaji: 'ARIA zokusei',
        meaning: { en: 'ARIA attribute', vi: 'thuộc tính ARIA' }
      },
      {
        kana: 'りようしゃ',
        kanji: '利用者',
        romaji: 'riyōsha',
        meaning: { en: 'user', vi: 'người dùng' }
      },
      {
        kana: 'しえんぎじゅつ',
        kanji: '支援技術',
        romaji: 'shien gijutsu',
        meaning: { en: 'assistive technology', vi: 'công nghệ hỗ trợ' }
      }
    ],
    grammar: [
      {
        pattern: 'N に配慮して',
        title: { en: 'With consideration for', vi: 'Có cân nhắc tới' },
        explanation: {
          en: 'Use this to explain accessibility-aware design decisions.',
          vi: 'Dùng mẫu này để giải thích quyết định thiết kế có cân nhắc accessibility.'
        },
        examples: [
          {
            jp: '視覚に配慮して、ボタンの対比度を上げました。',
            romaji: 'Shikaku ni hairyo shite, botan no taihido o agemashita.',
            meaning: {
              en: 'With visual accessibility in mind, we increased button contrast.',
              vi: 'Có cân nhắc khả năng nhìn, chúng tôi tăng độ tương phản nút.'
            }
          },
          {
            jp: '支援技術に配慮して、入力欄のラベルを明確にしました。',
            romaji: 'Shien gijutsu ni hairyo shite, nyūryokuran no raberu o meikaku ni shimashita.',
            meaning: {
              en: 'Considering assistive technology, we clarified input labels.',
              vi: 'Có cân nhắc công nghệ hỗ trợ, chúng tôi làm rõ nhãn ô nhập.'
            }
          }
        ]
      },
      {
        pattern: 'V（ない形）ようにする',
        title: { en: 'Try to avoid / ensure not', vi: 'Cố gắng tránh / đảm bảo không' },
        explanation: {
          en: 'Use this for UX constraints and accessibility quality practices.',
          vi: 'Dùng mẫu này cho ràng buộc UX và thực hành chất lượng accessibility.'
        },
        examples: [
          {
            jp: 'キーボード操作で迷わないように、タブ順を調整します。',
            romaji: 'Kībōdo sōsa de mayowanai yō ni, tabu-jun o chōsei shimasu.',
            meaning: {
              en: 'We adjust tab order so users do not get lost with keyboard operation.',
              vi: 'Chúng tôi điều chỉnh tab order để người dùng không bị lạc khi thao tác bàn phím.'
            }
          },
          {
            jp: '読み上げが途切れないように、ARIA属性を見直しました。',
            romaji: 'Yomiage ga togirenai yō ni, ARIA zokusei o minaoshimashita.',
            meaning: {
              en: 'We reviewed ARIA attributes so screen reading does not break.',
              vi: 'Chúng tôi xem lại thuộc tính ARIA để trình đọc không bị ngắt quãng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Accessibility review', vi: 'Review về accessibility' },
        lines: [
          {
            jp: '色覚に配慮して、色だけでなくアイコンでも状態を示すようにしました。',
            romaji:
              'Shikikaku ni hairyo shite, iro dake de naku aikon demo jōtai o shimesu yō ni shimashita.',
            meaning: {
              en: 'With consideration for color vision, we show state with icons, not only color.',
              vi: 'Cân nhắc tới thị giác màu, chúng tôi thể hiện trạng thái bằng cả icon chứ không chỉ màu.'
            }
          },
          {
            jp: 'スクリーンリーダーのために、すべての画像に代替テキストを付けます。',
            romaji: 'Sukurīn rīdā no tame ni, subete no gazō ni daitai tekisuto o tsukemasu.',
            meaning: {
              en: 'For screen readers, we add alternative text to every image.',
              vi: 'Vì screen reader, chúng tôi thêm văn bản thay thế cho mọi ảnh.'
            }
          },
          {
            jp: 'キーボードだけで操作できないページが残らないように確認します。',
            romaji: 'Kībōdo dake de sōsa dekinai pēji ga nokoranai yō ni kakunin shimasu.',
            meaning: {
              en: 'We check so that no page remains unusable with the keyboard alone.',
              vi: 'Chúng tôi kiểm tra để không còn trang nào không thao tác được chỉ bằng bàn phím.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How is state shown besides color?',
              vi: 'Trạng thái được thể hiện bằng gì ngoài màu?'
            },
            choices: [
              { id: 'a', label: { en: 'With icons', vi: 'Bằng icon' } },
              { id: 'b', label: { en: 'With sound only', vi: 'Chỉ bằng âm thanh' } },
              { id: 'c', label: { en: 'It is not shown', vi: 'Không thể hiện' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'Why add alternative text?', vi: 'Vì sao thêm văn bản thay thế?' },
            choices: [
              { id: 'a', label: { en: 'For screen readers', vi: 'Vì screen reader' } },
              { id: 'b', label: { en: 'To load faster', vi: 'Để tải nhanh hơn' } },
              { id: 'c', label: { en: 'To hide the image', vi: 'Để ẩn ảnh' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-14',
    number: 14,
    track: 'frontend',
    title: {
      en: 'Performance Optimization and Bundle Strategy',
      vi: 'Tối ưu hiệu năng và chiến lược bundle'
    },
    focus: {
      en: 'Use frontend performance vocabulary in Japanese and explain optimization actions with clear rationale.',
      vi: 'Dùng từ vựng hiệu năng frontend bằng tiếng Nhật và giải thích hành động tối ưu có cơ sở.'
    },
    vocab: [
      { kana: 'バンドル', romaji: 'bandoru', meaning: { en: 'bundle', vi: 'bundle' } },
      {
        kana: 'ぶんかつ',
        kanji: '分割',
        romaji: 'bunkatsu',
        meaning: { en: 'split/chunking', vi: 'chia tách' }
      },
      {
        kana: 'よびだし',
        kanji: '呼び出し',
        romaji: 'yobidashi',
        meaning: { en: 'invocation/call', vi: 'gọi thực thi' }
      },
      {
        kana: 'ちえんよみこみ',
        kanji: '遅延読み込み',
        romaji: 'chien yomikomi',
        meaning: { en: 'lazy loading', vi: 'tải trễ' }
      },
      { kana: 'キャッシュ', romaji: 'kyasshu', meaning: { en: 'cache', vi: 'cache' } },
      {
        kana: 'しょりじかん',
        kanji: '処理時間',
        romaji: 'shori jikan',
        meaning: { en: 'processing time', vi: 'thời gian xử lý' }
      },
      {
        kana: 'しひょう',
        kanji: '指標',
        romaji: 'shihyō',
        meaning: { en: 'metric', vi: 'chỉ số' }
      },
      {
        kana: 'そくてい',
        kanji: '測定',
        romaji: 'sokutei',
        meaning: { en: 'measurement', vi: 'đo lường' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）ために',
        title: { en: 'For the purpose of', vi: 'Nhằm mục đích' },
        explanation: {
          en: 'Use this to justify performance optimization decisions.',
          vi: 'Dùng mẫu này để nêu lý do cho quyết định tối ưu hiệu năng.'
        },
        examples: [
          {
            jp: '初回表示を速くするために、バンドルを分割しました。',
            romaji: 'Shokai hyōji o hayaku suru tame ni, bandoru o bunkatsu shimashita.',
            meaning: {
              en: 'To speed up initial render, we split the bundle.',
              vi: 'Để tăng tốc hiển thị lần đầu, chúng tôi chia bundle.'
            }
          },
          {
            jp: '処理時間を減らすために、重い計算をメモ化しました。',
            romaji: 'Shori jikan o herasu tame ni, omoi keisan o memoka shimashita.',
            meaning: {
              en: 'To reduce processing time, we memoized heavy computations.',
              vi: 'Để giảm thời gian xử lý, chúng tôi memo hóa các phép tính nặng.'
            }
          }
        ]
      },
      {
        pattern: 'V（た形）結果',
        title: { en: 'As a result of doing', vi: 'Kết quả sau khi làm' },
        explanation: {
          en: 'Use this pattern to connect optimization actions to measurable outcomes.',
          vi: 'Dùng mẫu này để nối hành động tối ưu với kết quả đo được.'
        },
        examples: [
          {
            jp: '画像を最適化した結果、ページ速度が改善しました。',
            romaji: 'Gazō o saitekika shita kekka, pēji sokudo ga kaizen shimashita.',
            meaning: {
              en: 'As a result of image optimization, page speed improved.',
              vi: 'Kết quả của việc tối ưu ảnh là tốc độ trang đã cải thiện.'
            }
          },
          {
            jp: 'キャッシュ設定を見直した結果、再訪問時の読み込みが速くなりました。',
            romaji:
              'Kyasshu settei o minaoshita kekka, sai-hōmonji no yomikomi ga hayaku narimashita.',
            meaning: {
              en: 'After reviewing cache settings, revisit load time became faster.',
              vi: 'Sau khi xem lại cấu hình cache, tốc độ tải ở lần truy cập lại nhanh hơn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Bundle size reduction', vi: 'Giảm kích thước bundle' },
        lines: [
          {
            jp: '表示速度を上げるために、画像を遅延読み込みにしました。',
            romaji: 'Hyōji sokudo o ageru tame ni, gazō o chien yomikomi ni shimashita.',
            meaning: {
              en: 'To improve display speed, we switched images to lazy loading.',
              vi: 'Để tăng tốc độ hiển thị, chúng tôi cho ảnh tải trễ (lazy load).'
            }
          },
          {
            jp: '不要なライブラリを削除した結果、バンドルサイズが三割減りました。',
            romaji:
              'Fuyō na raiburari o sakujo shita kekka, bandoru saizu ga san-wari herimashita.',
            meaning: {
              en: 'As a result of removing unused libraries, the bundle size dropped by 30%.',
              vi: 'Kết quả của việc xóa thư viện không cần thiết, bundle giảm 30%.'
            }
          },
          {
            jp: '初回表示が速くなり、離脱率も改善しました。',
            romaji: 'Shokai hyōji ga hayaku nari, ridatsu-ritsu mo kaizen shimashita.',
            meaning: {
              en: 'First paint became faster and the bounce rate improved too.',
              vi: 'Lần hiển thị đầu nhanh hơn và tỉ lệ thoát cũng cải thiện.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did they do to improve speed?',
              vi: 'Họ làm gì để tăng tốc độ?'
            },
            choices: [
              { id: 'a', label: { en: 'Lazy-loaded images', vi: 'Cho ảnh tải trễ' } },
              { id: 'b', label: { en: 'Added more libraries', vi: 'Thêm nhiều thư viện hơn' } },
              { id: 'c', label: { en: 'Removed all images', vi: 'Xóa toàn bộ ảnh' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'How much did the bundle size drop?', vi: 'Bundle giảm bao nhiêu?' },
            choices: [
              { id: 'a', label: { en: 'About 30%', vi: 'Khoảng 30%' } },
              { id: 'b', label: { en: 'About 3%', vi: 'Khoảng 3%' } },
              { id: 'c', label: { en: 'It did not change', vi: 'Không thay đổi' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-15',
    number: 15,
    track: 'frontend',
    title: {
      en: 'Frontend Security Basics',
      vi: 'Nền tảng bảo mật frontend'
    },
    focus: {
      en: 'Practice Japanese for discussing common web security risks and mitigation strategies in frontend apps.',
      vi: 'Luyện tiếng Nhật để trao đổi rủi ro bảo mật web phổ biến và chiến lược giảm thiểu trong app frontend.'
    },
    vocab: [
      { kana: 'セキュリティ', romaji: 'sekyuriti', meaning: { en: 'security', vi: 'bảo mật' } },
      {
        kana: 'ぜいじゃくせい',
        kanji: '脆弱性',
        romaji: 'zeijakusei',
        meaning: { en: 'vulnerability', vi: 'lỗ hổng' }
      },
      {
        kana: 'にんしょう',
        kanji: '認証',
        romaji: 'ninshō',
        meaning: { en: 'authentication', vi: 'xác thực' }
      },
      {
        kana: 'にんか',
        kanji: '認可',
        romaji: 'ninka',
        meaning: { en: 'authorization', vi: 'phân quyền' }
      },
      { kana: 'トークン', romaji: 'tōkun', meaning: { en: 'token', vi: 'token' } },
      {
        kana: 'サニタイズ',
        romaji: 'sanitaizu',
        meaning: { en: 'sanitize', vi: 'làm sạch dữ liệu' }
      },
      {
        kana: 'えんごうか',
        kanji: '暗号化',
        romaji: 'angōka',
        meaning: { en: 'encryption', vi: 'mã hóa' }
      },
      {
        kana: 'こうげき',
        kanji: '攻撃',
        romaji: 'kōgeki',
        meaning: { en: 'attack', vi: 'tấn công' }
      }
    ],
    grammar: [
      {
        pattern: 'V（ない形）ために',
        title: { en: 'In order not to', vi: 'Để không' },
        explanation: {
          en: 'Use this to describe preventive security controls.',
          vi: 'Dùng mẫu này để mô tả kiểm soát phòng ngừa bảo mật.'
        },
        examples: [
          {
            jp: '不正アクセスを防ぐために、多要素認証を導入しました。',
            romaji: 'Fusei akusesu o fusegu tame ni, ta-yōso ninshō o dōnyū shimashita.',
            meaning: {
              en: 'To prevent unauthorized access, we introduced multi-factor authentication.',
              vi: 'Để ngăn truy cập trái phép, chúng tôi áp dụng xác thực đa yếu tố.'
            }
          },
          {
            jp: 'XSSを起こさないために、入力値をサニタイズします。',
            romaji: 'XSS o okosanai tame ni, nyūryokuchi o sanitaizu shimasu.',
            meaning: {
              en: 'To avoid XSS, we sanitize input values.',
              vi: 'Để tránh XSS, chúng tôi làm sạch dữ liệu đầu vào.'
            }
          }
        ]
      },
      {
        pattern: 'N によって',
        title: { en: 'Depending on / by', vi: 'Tùy theo / bởi' },
        explanation: {
          en: 'Useful for explaining security impact differences by environment or implementation.',
          vi: 'Hữu ích khi giải thích mức ảnh hưởng bảo mật tùy môi trường hoặc cách triển khai.'
        },
        examples: [
          {
            jp: '実装方法によって、脆弱性のリスクが大きく変わります。',
            romaji: 'Jissō hōhō ni yotte, zeijakusei no risuku ga ōkiku kawarimasu.',
            meaning: {
              en: 'Vulnerability risk changes greatly depending on implementation method.',
              vi: 'Rủi ro lỗ hổng thay đổi đáng kể tùy theo cách triển khai.'
            }
          },
          {
            jp: '運用環境によって、必要な対策が異なります。',
            romaji: 'Un-yō kankyō ni yotte, hitsuyō na taisaku ga kotonarimasu.',
            meaning: {
              en: 'Required countermeasures differ depending on operating environment.',
              vi: 'Biện pháp cần thiết khác nhau tùy môi trường vận hành.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Preventing XSS', vi: 'Phòng chống XSS' },
        lines: [
          {
            jp: 'XSSを起こさないために、ユーザー入力を必ずエスケープします。',
            romaji: 'XSS o okosanai tame ni, yūzā nyūryoku o kanarazu esukēpu shimasu.',
            meaning: {
              en: 'In order not to cause XSS, we always escape user input.',
              vi: 'Để không gây XSS, chúng tôi luôn escape input người dùng.'
            }
          },
          {
            jp: '攻撃の影響は実装によって大きく変わります。',
            romaji: 'Kōgeki no eikyō wa jissō ni yotte ōkiku kawarimasu.',
            meaning: {
              en: 'The impact of an attack changes greatly depending on the implementation.',
              vi: 'Mức ảnh hưởng của tấn công thay đổi nhiều tùy theo cách triển khai.'
            }
          },
          {
            jp: '重要な操作には、トークンによる検証を追加しました。',
            romaji: 'Jūyō na sōsa ni wa, tōkun ni yoru kenshō o tsuika shimashita.',
            meaning: {
              en: 'For important actions, we added token-based verification.',
              vi: 'Với thao tác quan trọng, chúng tôi thêm xác thực bằng token.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'How do they prevent XSS?', vi: 'Họ phòng XSS bằng cách nào?' },
            choices: [
              { id: 'a', label: { en: 'Escape user input', vi: 'Escape input người dùng' } },
              { id: 'b', label: { en: 'Disable JavaScript', vi: 'Tắt JavaScript' } },
              { id: 'c', label: { en: 'Hide the URL', vi: 'Ẩn URL' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What was added for important actions?',
              vi: 'Thao tác quan trọng được thêm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Token-based verification', vi: 'Xác thực bằng token' } },
              { id: 'b', label: { en: 'Nothing', vi: 'Không gì' } },
              { id: 'c', label: { en: 'More advertisements', vi: 'Thêm quảng cáo' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-16',
    number: 16,
    track: 'frontend',
    title: {
      en: 'Design System Operations',
      vi: 'Vận hành design system'
    },
    focus: {
      en: 'Learn Japanese for managing component libraries, token governance, and UI consistency across products.',
      vi: 'Học tiếng Nhật cho việc quản lý thư viện component, governance token và tính nhất quán UI xuyên sản phẩm.'
    },
    vocab: [
      {
        kana: 'デザインシステム',
        romaji: 'dezain shisutemu',
        meaning: { en: 'design system', vi: 'design system' }
      },
      {
        kana: 'デザイントークン',
        romaji: 'dezain tōkun',
        meaning: { en: 'design token', vi: 'design token' }
      },
      {
        kana: 'いっかんせい',
        kanji: '一貫性',
        romaji: 'ikkansei',
        meaning: { en: 'consistency', vi: 'tính nhất quán' }
      },
      {
        kana: 'さいりよう',
        kanji: '再利用',
        romaji: 'sairiyō',
        meaning: { en: 'reuse', vi: 'tái sử dụng' }
      },
      {
        kana: 'ドキュメント',
        romaji: 'dokyumento',
        meaning: { en: 'documentation', vi: 'tài liệu' }
      },
      {
        kana: 'はんえい',
        kanji: '反映',
        romaji: 'han-ei',
        meaning: { en: 'reflect/apply', vi: 'phản ánh, áp dụng' }
      },
      {
        kana: 'ひょうじルール',
        kanji: '表示ルール',
        romaji: 'hyōji rūru',
        meaning: { en: 'display rules', vi: 'quy tắc hiển thị' }
      },
      {
        kana: 'けっていじこう',
        kanji: '決定事項',
        romaji: 'kettei jikō',
        meaning: { en: 'decisions made', vi: 'hạng mục đã quyết' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）ようにする',
        title: { en: 'Make it a practice to', vi: 'Duy trì thói quen làm' },
        explanation: {
          en: 'Use this to describe team conventions in design system operations.',
          vi: 'Dùng mẫu này để mô tả convention team trong vận hành design system.'
        },
        examples: [
          {
            jp: '新しいコンポーネントは必ずドキュメント化するようにしています。',
            romaji: 'Atarashii konpōnento wa kanarazu dokyumentoka suru yō ni shite imasu.',
            meaning: {
              en: 'We make it a practice to document every new component.',
              vi: 'Chúng tôi duy trì việc tài liệu hóa mọi component mới.'
            }
          },
          {
            jp: '変更点はすぐにトークンへ反映するようにしています。',
            romaji: 'Henkōten wa sugu ni tōkun e han-ei suru yō ni shite imasu.',
            meaning: {
              en: 'We try to reflect changes in tokens immediately.',
              vi: 'Chúng tôi cố gắng phản ánh điểm thay đổi vào token ngay lập tức.'
            }
          }
        ]
      },
      {
        pattern: 'N ことになっている',
        title: { en: 'It is a rule that', vi: 'Quy định là' },
        explanation: {
          en: 'Use this for process rules that keep UI consistency.',
          vi: 'Dùng mẫu này cho các quy định quy trình giúp giữ UI nhất quán.'
        },
        examples: [
          {
            jp: '共通ボタンはdesign systemから使うことになっています。',
            romaji: 'Kyōtsū botan wa design system kara tsukau koto ni natte imasu.',
            meaning: {
              en: 'It is a rule to use common buttons from the design system.',
              vi: 'Quy định là dùng nút chung từ design system.'
            }
          },
          {
            jp: '新規画面はUIレビューを通してから公開することになっています。',
            romaji: 'Shinki gamen wa UI rebyū o tōshite kara kōkai suru koto ni natte imasu.',
            meaning: {
              en: 'It is required that new screens pass UI review before release.',
              vi: 'Quy định là màn hình mới phải qua UI review trước khi phát hành.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Token governance', vi: 'Governance token' },
        lines: [
          {
            jp: '色は直接指定せず、必ずトークンを使うようにしています。',
            romaji: 'Iro wa chokusetsu shitei sezu, kanarazu tōkun o tsukau yō ni shite imasu.',
            meaning: {
              en: 'We make it a practice to always use tokens instead of specifying colors directly.',
              vi: 'Chúng tôi duy trì thói quen luôn dùng token thay vì chỉ định màu trực tiếp.'
            }
          },
          {
            jp: '新しいコンポーネントはレビューを通すことになっています。',
            romaji: 'Atarashii konpōnento wa rebyū o tōsu koto ni natte imasu.',
            meaning: {
              en: 'It is a rule that new components go through review.',
              vi: 'Quy định là component mới phải qua review.'
            }
          },
          {
            jp: 'これにより、製品間でUIの一貫性を保てます。',
            romaji: 'Kore ni yori, seihin-kan de UI no ikkansei o tamotemasu.',
            meaning: {
              en: 'This keeps UI consistency across products.',
              vi: 'Nhờ vậy, giữ được tính nhất quán UI giữa các sản phẩm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What do they use instead of direct colors?',
              vi: 'Họ dùng gì thay cho chỉ định màu trực tiếp?'
            },
            choices: [
              { id: 'a', label: { en: 'Design tokens', vi: 'Token thiết kế' } },
              { id: 'b', label: { en: 'Random hex values', vi: 'Mã hex ngẫu nhiên' } },
              { id: 'c', label: { en: 'Background images', vi: 'Ảnh nền' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What must new components do?', vi: 'Component mới phải làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Go through review', vi: 'Qua review' } },
              { id: 'b', label: { en: 'Skip review', vi: 'Bỏ qua review' } },
              { id: 'c', label: { en: 'Be deleted', vi: 'Bị xóa' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-17',
    number: 17,
    track: 'frontend',
    title: {
      en: 'API Integration and Data Fetching',
      vi: 'Tích hợp API và lấy dữ liệu'
    },
    focus: {
      en: 'Use practical Japanese to discuss API integration, error handling, and data consistency in frontend apps.',
      vi: 'Dùng tiếng Nhật thực tế để trao đổi tích hợp API, xử lý lỗi và tính nhất quán dữ liệu trong frontend app.'
    },
    vocab: [
      {
        kana: 'データフェッチ',
        romaji: 'dēta fetchi',
        meaning: { en: 'data fetching', vi: 'lấy dữ liệu' }
      },
      {
        kana: 'えらーしょり',
        kanji: 'エラー処理',
        romaji: 'erā shori',
        meaning: { en: 'error handling', vi: 'xử lý lỗi' }
      },
      { kana: 'レスポンス', romaji: 'resuponsu', meaning: { en: 'response', vi: 'response' } },
      {
        kana: 'たいきじかん',
        kanji: '待機時間',
        romaji: 'taiki jikan',
        meaning: { en: 'latency', vi: 'độ trễ' }
      },
      {
        kana: 'しんらいせい',
        kanji: '信頼性',
        romaji: 'shinraisei',
        meaning: { en: 'reliability', vi: 'độ tin cậy' }
      },
      {
        kana: 'せいごうせい',
        kanji: '整合性',
        romaji: 'seigōsei',
        meaning: { en: 'consistency', vi: 'tính nhất quán' }
      },
      {
        kana: 'キャッシュせいぎょ',
        kanji: 'キャッシュ制御',
        romaji: 'kyasshu seigyo',
        meaning: { en: 'cache control', vi: 'kiểm soát cache' }
      },
      { kana: 'リトライ', romaji: 'ritorai', meaning: { en: 'retry', vi: 'thử lại' } }
    ],
    grammar: [
      {
        pattern: 'N に対して',
        title: { en: 'In response to / for', vi: 'Để phản hồi / đối với' },
        explanation: {
          en: 'Use this for frontend responses to backend behavior and API changes.',
          vi: 'Dùng mẫu này cho cách frontend phản hồi hành vi backend và thay đổi API.'
        },
        examples: [
          {
            jp: 'タイムアウトに対して、リトライ処理を実装しました。',
            romaji: 'Taimuauto ni taishite, ritorai shori o jissō shimashita.',
            meaning: {
              en: 'We implemented retry logic in response to timeouts.',
              vi: 'Chúng tôi triển khai logic retry để phản hồi timeout.'
            }
          },
          {
            jp: 'API変更に対して、画面側の型定義を更新しました。',
            romaji: 'API henkō ni taishite, gamen-gawa no kata teigi o kōshin shimashita.',
            meaning: {
              en: 'In response to API changes, we updated type definitions on UI side.',
              vi: 'Để phản hồi thay đổi API, chúng tôi cập nhật định nghĩa kiểu phía giao diện.'
            }
          }
        ]
      },
      {
        pattern: 'V（ない形）ことには～ない',
        title: { en: 'Unless ~, cannot', vi: 'Nếu không ~ thì không thể' },
        explanation: {
          en: 'Useful for expressing required prerequisites in integration workflows.',
          vi: 'Hữu ích để diễn đạt điều kiện tiên quyết trong luồng tích hợp.'
        },
        examples: [
          {
            jp: '仕様を確認しないことには、正しく実装できません。',
            romaji: 'Shiyō o kakunin shinai koto ni wa, tadashiku jissō dekimasen.',
            meaning: {
              en: 'Unless we verify the spec, we cannot implement correctly.',
              vi: 'Nếu không xác nhận đặc tả thì không thể triển khai đúng.'
            }
          },
          {
            jp: 'エラーパターンを集めないことには、十分な対策は立てられません。',
            romaji: 'Erā patān o atsumenai koto ni wa, jūbun na taisaku wa tateraremasen.',
            meaning: {
              en: 'Unless we gather error patterns, we cannot prepare sufficient countermeasures.',
              vi: 'Nếu không thu thập pattern lỗi thì không thể xây biện pháp đầy đủ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Handling API errors', vi: 'Xử lý lỗi API' },
        lines: [
          {
            jp: 'サーバーエラーに対して、再試行と分かりやすい通知を用意します。',
            romaji: 'Sābā erā ni taishite, saishikō to wakariyasui tsūchi o yōi shimasu.',
            meaning: {
              en: 'In response to server errors, we prepare retries and clear notifications.',
              vi: 'Đối với lỗi server, chúng tôi chuẩn bị retry và thông báo dễ hiểu.'
            }
          },
          {
            jp: '仕様が決まらないことには、実装を始められません。',
            romaji: 'Shiyō ga kimaranai koto ni wa, jissō o hajimeraremasen.',
            meaning: {
              en: 'Unless the spec is decided, we cannot start implementation.',
              vi: 'Nếu chưa chốt spec thì không thể bắt đầu implement.'
            }
          },
          {
            jp: 'データの整合性を保つため、取得後に必ず検証します。',
            romaji: 'Dēta no seigōsei o tamotsu tame, shutoku-go ni kanarazu kenshō shimasu.',
            meaning: {
              en: 'To keep data consistency, we always validate after fetching.',
              vi: 'Để giữ tính nhất quán dữ liệu, chúng tôi luôn kiểm chứng sau khi lấy.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What do they prepare for server errors?',
              vi: 'Họ chuẩn bị gì cho lỗi server?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Retries and clear notifications', vi: 'Retry và thông báo dễ hiểu' }
              },
              { id: 'b', label: { en: 'Nothing', vi: 'Không gì' } },
              { id: 'c', label: { en: 'Only raw logs', vi: 'Chỉ log thô' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is required before implementation?',
              vi: 'Cần gì trước khi implement?'
            },
            choices: [
              { id: 'a', label: { en: 'The spec is decided', vi: 'Spec đã được chốt' } },
              { id: 'b', label: { en: 'The deploy is done', vi: 'Đã deploy xong' } },
              { id: 'c', label: { en: 'The team is on leave', vi: 'Cả team đang nghỉ' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-18',
    number: 18,
    track: 'frontend',
    title: {
      en: 'State Management at Scale',
      vi: 'Quản lý state ở quy mô lớn'
    },
    focus: {
      en: 'Discuss scalable state architecture and data-flow decisions with practical workplace Japanese.',
      vi: 'Trao đổi kiến trúc state có thể mở rộng và quyết định data-flow bằng tiếng Nhật nơi làm việc.'
    },
    vocab: [
      {
        kana: 'じょうたいかんり',
        kanji: '状態管理',
        romaji: 'jōtai kanri',
        meaning: { en: 'state management', vi: 'quản lý trạng thái' }
      },
      {
        kana: 'データフロー',
        romaji: 'dēta furō',
        meaning: { en: 'data flow', vi: 'luồng dữ liệu' }
      },
      {
        kana: 'ぐローバルステート',
        romaji: 'gurōbaru sutēto',
        meaning: { en: 'global state', vi: 'state toàn cục' }
      },
      {
        kana: 'ローカルステート',
        romaji: 'rōkaru sutēto',
        meaning: { en: 'local state', vi: 'state cục bộ' }
      },
      {
        kana: 'しんらいせい',
        kanji: '信頼性',
        romaji: 'shinraisei',
        meaning: { en: 'reliability', vi: 'độ tin cậy' }
      },
      {
        kana: 'ふくざつか',
        kanji: '複雑化',
        romaji: 'fukuzatsuka',
        meaning: { en: 'increasing complexity', vi: 'sự phức tạp hóa' }
      },
      {
        kana: 'かんし',
        kanji: '監視',
        romaji: 'kanshi',
        meaning: { en: 'monitoring', vi: 'giám sát' }
      },
      {
        kana: 'いぞん',
        kanji: '依存',
        romaji: 'izon',
        meaning: { en: 'dependency', vi: 'phụ thuộc' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）につれて',
        title: { en: 'As ~ changes gradually', vi: 'Càng ~ thì càng' },
        explanation: {
          en: 'Use this for discussing architecture complexity as product scale grows.',
          vi: 'Dùng mẫu này khi nói độ phức tạp kiến trúc tăng theo quy mô sản phẩm.'
        },
        examples: [
          {
            jp: '機能が増えるにつれて、状態管理も複雑になります。',
            romaji: 'Kinō ga fueru ni tsurete, jōtai kanri mo fukuzatsu ni narimasu.',
            meaning: {
              en: 'As features increase, state management also becomes more complex.',
              vi: 'Càng nhiều tính năng, quản lý state càng phức tạp.'
            }
          },
          {
            jp: '利用者が増えるにつれて、監視の重要性が高まります。',
            romaji: 'Riyōsha ga fueru ni tsurete, kanshi no jūyōsei ga takamarimasu.',
            meaning: {
              en: 'As users increase, monitoring importance rises.',
              vi: 'Càng nhiều người dùng, tầm quan trọng của giám sát càng tăng.'
            }
          }
        ]
      },
      {
        pattern: 'N を踏まえて',
        title: { en: 'Taking ~ into account', vi: 'Tính đến ~' },
        explanation: {
          en: 'Useful for explaining architectural decisions with context.',
          vi: 'Hữu ích để giải thích quyết định kiến trúc có xét bối cảnh.'
        },
        examples: [
          {
            jp: '依存関係を踏まえて、global stateの範囲を縮小しました。',
            romaji: 'Izon kankei o fumaete, global state no han-i o shukushō shimashita.',
            meaning: {
              en: 'Taking dependencies into account, we reduced global state scope.',
              vi: 'Tính đến quan hệ phụ thuộc, chúng tôi thu hẹp phạm vi global state.'
            }
          },
          {
            jp: '運用コストを踏まえて、段階的に移行します。',
            romaji: 'Un-yō kosuto o fumaete, dankai-teki ni ikō shimasu.',
            meaning: {
              en: 'Considering operation cost, we migrate in phases.',
              vi: 'Tính đến chi phí vận hành, chúng tôi chuyển đổi theo giai đoạn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Scaling state', vi: 'Mở rộng state' },
        lines: [
          {
            jp: '機能が増えるにつれて、状態管理が複雑になってきました。',
            romaji: 'Kinō ga fueru ni tsurete, jōtai kanri ga fukuzatsu ni natte kimashita.',
            meaning: {
              en: 'As features increased, state management became more complex.',
              vi: 'Càng nhiều tính năng thì quản lý state càng phức tạp.'
            }
          },
          {
            jp: '現状の課題を踏まえて、状態を機能ごとに分割する方針にしました。',
            romaji:
              'Genjō no kadai o fumaete, jōtai o kinō-goto ni bunkatsu suru hōshin ni shimashita.',
            meaning: {
              en: 'Taking the current issues into account, we decided to split state per feature.',
              vi: 'Tính đến vấn đề hiện tại, chúng tôi chọn phương án tách state theo từng tính năng.'
            }
          },
          {
            jp: 'これにより、影響範囲が分かりやすくなります。',
            romaji: "Kore ni yori, eikyō han'i ga wakariyasuku narimasu.",
            meaning: {
              en: 'This makes the scope of impact easier to understand.',
              vi: 'Nhờ vậy phạm vi ảnh hưởng dễ hiểu hơn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened as features increased?',
              vi: 'Điều gì xảy ra khi tính năng tăng?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'State management got more complex', vi: 'Quản lý state phức tạp hơn' }
              },
              { id: 'b', label: { en: 'State disappeared', vi: 'State biến mất' } },
              { id: 'c', label: { en: 'Nothing changed', vi: 'Không có gì thay đổi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What did they decide to do?', vi: 'Họ quyết định làm gì?' },
            choices: [
              {
                id: 'a',
                label: { en: 'Split state per feature', vi: 'Tách state theo tính năng' }
              },
              { id: 'b', label: { en: 'Merge all state into one', vi: 'Gộp hết state làm một' } },
              { id: 'c', label: { en: 'Remove all state', vi: 'Bỏ hết state' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-19',
    number: 19,
    track: 'frontend',
    title: {
      en: 'Analytics, Metrics, and Experimentation',
      vi: 'Analytics, metrics và thử nghiệm'
    },
    focus: {
      en: 'Learn Japanese for product metrics, tracking plans, and A/B testing communication.',
      vi: 'Học tiếng Nhật cho metric sản phẩm, kế hoạch tracking và giao tiếp A/B testing.'
    },
    vocab: [
      {
        kana: 'しひょう',
        kanji: '指標',
        romaji: 'shihyō',
        meaning: { en: 'metric', vi: 'chỉ số' }
      },
      {
        kana: 'コンバージョン',
        romaji: 'konbājhon',
        meaning: { en: 'conversion', vi: 'chuyển đổi' }
      },
      {
        kana: 'りだつりつ',
        kanji: '離脱率',
        romaji: 'ridatsuritsu',
        meaning: { en: 'drop-off rate', vi: 'tỷ lệ rời bỏ' }
      },
      { kana: 'ABテスト', romaji: 'AB tesuto', meaning: { en: 'A/B test', vi: 'A/B test' } },
      {
        kana: 'けんしょうこうもく',
        kanji: '検証項目',
        romaji: 'kenshō kōmoku',
        meaning: { en: 'validation item', vi: 'hạng mục kiểm chứng' }
      },
      {
        kana: 'こうかそくてい',
        kanji: '効果測定',
        romaji: 'kōka sokutei',
        meaning: { en: 'effect measurement', vi: 'đo lường hiệu quả' }
      },
      {
        kana: 'かせつ',
        kanji: '仮説',
        romaji: 'kasetsu',
        meaning: { en: 'hypothesis', vi: 'giả thuyết' }
      },
      {
        kana: 'けつろん',
        kanji: '結論',
        romaji: 'ketsuron',
        meaning: { en: 'conclusion', vi: 'kết luận' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形）ことで',
        title: { en: 'By doing ~, result', vi: 'Bằng cách ~ thì' },
        explanation: {
          en: 'Use this pattern to explain how product changes affect metrics.',
          vi: 'Dùng mẫu này để giải thích thay đổi sản phẩm ảnh hưởng chỉ số ra sao.'
        },
        examples: [
          {
            jp: '入力項目を減らすことで、完了率が上がりました。',
            romaji: 'Nyūryoku kōmoku o herasu koto de, kanryōritsu ga agarimashita.',
            meaning: {
              en: 'By reducing input fields, completion rate increased.',
              vi: 'Bằng cách giảm trường nhập, tỷ lệ hoàn thành đã tăng.'
            }
          },
          {
            jp: '案内文を改善することで、離脱率を下げられます。',
            romaji: 'An-naibun o kaizen suru koto de, ridatsuritsu o sageraremasu.',
            meaning: {
              en: 'By improving guidance copy, we can reduce drop-off rate.',
              vi: 'Bằng cách cải thiện nội dung hướng dẫn, chúng tôi có thể giảm tỷ lệ rời bỏ.'
            }
          }
        ]
      },
      {
        pattern: 'N に基づいて',
        title: { en: 'Based on', vi: 'Dựa trên' },
        explanation: {
          en: 'Use this for data-driven product decisions.',
          vi: 'Dùng mẫu này cho quyết định sản phẩm dựa trên dữ liệu.'
        },
        examples: [
          {
            jp: '実験結果に基づいて、次の施策を決めます。',
            romaji: 'Jikken kekka ni motozuite, tsugi no shisaku o kimemasu.',
            meaning: {
              en: 'Based on experiment results, we decide the next action.',
              vi: 'Dựa trên kết quả thử nghiệm, chúng tôi quyết định bước tiếp theo.'
            }
          },
          {
            jp: '利用データに基づいて、仮説を修正しました。',
            romaji: 'Riyō dēta ni motozuite, kasetsu o shūsei shimashita.',
            meaning: {
              en: 'Based on usage data, we refined the hypothesis.',
              vi: 'Dựa trên dữ liệu sử dụng, chúng tôi chỉnh lại giả thuyết.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'An A/B test decision', vi: 'Một quyết định A/B test' },
        lines: [
          {
            jp: 'ボタンの色を変えることで、クリック率が上がるか検証します。',
            romaji: 'Botan no iro o kaeru koto de, kurikku-ritsu ga agaru ka kenshō shimasu.',
            meaning: {
              en: 'By changing the button color, we test whether the click rate goes up.',
              vi: 'Bằng cách đổi màu nút, chúng tôi kiểm chứng tỉ lệ click có tăng không.'
            }
          },
          {
            jp: 'テスト結果に基づいて、どちらの案を採用するか決めます。',
            romaji: 'Tesuto kekka ni motozuite, dochira no an o saiyō suru ka kimemasu.',
            meaning: {
              en: 'Based on the test results, we decide which option to adopt.',
              vi: 'Dựa trên kết quả test, chúng tôi quyết định chọn phương án nào.'
            }
          },
          {
            jp: '計測が正しくできるように、事前にトラッキングを設計します。',
            romaji: 'Keisoku ga tadashiku dekiru yō ni, jizen ni torakkingu o sekkei shimasu.',
            meaning: {
              en: 'So that measurement is correct, we design tracking in advance.',
              vi: 'Để đo đúng, chúng tôi thiết kế tracking trước.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What are they testing by changing the button color?',
              vi: 'Đổi màu nút để kiểm chứng điều gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Whether the click rate goes up', vi: 'Tỉ lệ click có tăng không' }
              },
              { id: 'b', label: { en: 'The server speed', vi: 'Tốc độ server' } },
              { id: 'c', label: { en: 'The font family', vi: 'Phông chữ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What decides which option to adopt?',
              vi: 'Dựa vào đâu để chọn phương án?'
            },
            choices: [
              { id: 'a', label: { en: 'The test results', vi: 'Kết quả test' } },
              { id: 'b', label: { en: "The manager's mood", vi: 'Tâm trạng quản lý' } },
              { id: 'c', label: { en: 'A coin flip', vi: 'Tung đồng xu' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-20',
    number: 20,
    track: 'frontend',
    title: {
      en: 'Agile Communication and Team Rituals',
      vi: 'Giao tiếp agile và nghi thức team'
    },
    focus: {
      en: 'Practice workplace Japanese for standups, sprint retrospectives, and cross-functional alignment.',
      vi: 'Luyện tiếng Nhật nơi làm việc cho standup, retrospective sprint và đồng bộ liên chức năng.'
    },
    vocab: [
      {
        kana: 'デイリースタンドアップ',
        romaji: 'deirī sutandoappu',
        meaning: { en: 'daily standup', vi: 'daily standup' }
      },
      {
        kana: 'ふりかえり',
        kanji: '振り返り',
        romaji: 'furikaeri',
        meaning: { en: 'retrospective', vi: 'retrospective' }
      },
      {
        kana: 'しんちょく',
        kanji: '進捗',
        romaji: 'shinchoku',
        meaning: { en: 'progress', vi: 'tiến độ' }
      },
      {
        kana: 'かだい',
        kanji: '課題',
        romaji: 'kadai',
        meaning: { en: 'issue/task', vi: 'vấn đề, đầu việc' }
      },
      {
        kana: 'そしき',
        kanji: '阻止',
        romaji: 'soshi',
        meaning: { en: 'blocking prevention', vi: 'ngăn chặn trì hoãn' }
      },
      {
        kana: 'ちょうせい',
        kanji: '調整',
        romaji: 'chōsei',
        meaning: { en: 'coordination', vi: 'điều phối' }
      },
      {
        kana: 'ごういけいせい',
        kanji: '合意形成',
        romaji: 'gōi keisei',
        meaning: { en: 'consensus building', vi: 'xây đồng thuận' }
      },
      {
        kana: 'いらい',
        kanji: '依頼',
        romaji: 'irai',
        meaning: { en: 'request', vi: 'đề nghị, yêu cầu' }
      }
    ],
    grammar: [
      {
        pattern: 'N に関して',
        title: { en: 'Regarding', vi: 'Liên quan đến' },
        explanation: {
          en: 'Formal and useful for standup and planning communication.',
          vi: 'Trang trọng, hữu ích trong giao tiếp standup và planning.'
        },
        examples: [
          {
            jp: '今週の進捗に関して、三点共有します。',
            romaji: 'Konshū no shinchoku ni kanshite, san-ten kyōyū shimasu.',
            meaning: {
              en: "Regarding this week's progress, I will share three points.",
              vi: 'Liên quan đến tiến độ tuần này, tôi sẽ chia sẻ ba điểm.'
            }
          },
          {
            jp: 'リリース計画に関して、確認したい点があります。',
            romaji: 'Rirīsu keikaku ni kanshite, kakunin shitai ten ga arimasu.',
            meaning: {
              en: 'Regarding the release plan, there are points I want to confirm.',
              vi: 'Liên quan kế hoạch release, có vài điểm tôi muốn xác nhận.'
            }
          }
        ]
      },
      {
        pattern: 'V（てもらえると助かる',
        title: { en: 'It would help if you could', vi: 'Nếu bạn có thể... thì rất tốt' },
        explanation: {
          en: 'A soft and collaborative request style useful in agile teamwork.',
          vi: 'Cách đề nghị mềm, mang tính hợp tác, hữu ích trong teamwork agile.'
        },
        examples: [
          {
            jp: 'この課題を今日中に確認してもらえると助かります。',
            romaji: 'Kono kadai o kyōjū ni kakunin shite moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could review this issue today.',
              vi: 'Nếu bạn có thể kiểm tra issue này trong hôm nay thì rất tốt.'
            }
          },
          {
            jp: '会議前に資料を共有してもらえると助かります。',
            romaji: 'Kaigi mae ni shiryō o kyōyū shite moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could share materials before the meeting.',
              vi: 'Nếu bạn có thể chia sẻ tài liệu trước cuộc họp thì rất hữu ích.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A standup update', vi: 'Cập nhật trong standup' },
        lines: [
          {
            jp: 'ログイン機能に関して、今日中にレビューを終える予定です。',
            romaji: 'Roguin kinō ni kanshite, kyō-jū ni rebyū o oeru yotei desu.',
            meaning: {
              en: 'Regarding the login feature, we plan to finish the review today.',
              vi: 'Liên quan đến tính năng đăng nhập, dự kiến xong review trong hôm nay.'
            }
          },
          {
            jp: '仕様の不明点を午前中に教えてもらえると助かります。',
            romaji: 'Shiyō no fumeiten o gozen-chū ni oshiete moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could tell me the unclear spec points by noon.',
              vi: 'Nếu bạn có thể cho biết các điểm spec chưa rõ trước trưa thì rất tốt.'
            }
          },
          {
            jp: 'ブロッカーがあれば、すぐに共有してください。',
            romaji: 'Burokkā ga areba, sugu ni kyōyū shite kudasai.',
            meaning: {
              en: 'If there are blockers, please share them right away.',
              vi: 'Nếu có blocker, hãy chia sẻ ngay.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'When do they plan to finish the login review?',
              vi: 'Khi nào họ dự kiến xong review đăng nhập?'
            },
            choices: [
              { id: 'a', label: { en: 'Today', vi: 'Trong hôm nay' } },
              { id: 'b', label: { en: 'Next month', vi: 'Tháng sau' } },
              { id: 'c', label: { en: 'After release', vi: 'Sau khi release' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the speaker request by noon?',
              vi: 'Người nói cần gì trước trưa?'
            },
            choices: [
              { id: 'a', label: { en: 'The unclear spec points', vi: 'Các điểm spec chưa rõ' } },
              { id: 'b', label: { en: 'A new laptop', vi: 'Một laptop mới' } },
              { id: 'c', label: { en: 'A day off', vi: 'Một ngày nghỉ' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-21',
    number: 21,
    track: 'frontend',
    title: {
      en: 'HTML Structure and Markup Bug Reports',
      vi: 'Cấu trúc HTML và báo lỗi markup'
    },
    focus: {
      en: 'Learn practical HTML vocabulary in Japanese and report markup bugs with clear reproduction details.',
      vi: 'Học từ vựng HTML thực tế bằng tiếng Nhật và báo lỗi markup với mô tả tái hiện rõ ràng.'
    },
    vocab: [
      {
        kana: 'HTMLこうぞう',
        kanji: 'HTML構造',
        romaji: 'HTML kōzō',
        meaning: { en: 'HTML structure', vi: 'cấu trúc HTML' }
      },
      { kana: 'マークアップ', romaji: 'mākuappu', meaning: { en: 'markup', vi: 'markup' } },
      { kana: 'ようそ', kanji: '要素', romaji: 'yōso', meaning: { en: 'element', vi: 'phần tử' } },
      {
        kana: 'ぞくせい',
        kanji: '属性',
        romaji: 'zokusei',
        meaning: { en: 'attribute', vi: 'thuộc tính' }
      },
      {
        kana: 'みだしタグ',
        kanji: '見出しタグ',
        romaji: 'midashi tagu',
        meaning: { en: 'heading tag', vi: 'thẻ tiêu đề' }
      },
      {
        kana: 'だんらく',
        kanji: '段落',
        romaji: 'danraku',
        meaning: { en: 'paragraph', vi: 'đoạn văn' }
      },
      { kana: 'フォーム', romaji: 'fōmu', meaning: { en: 'form', vi: 'biểu mẫu' } },
      {
        kana: 'にゅうりょくらん',
        kanji: '入力欄',
        romaji: 'nyūryokuran',
        meaning: { en: 'input field', vi: 'ô nhập liệu' }
      },
      {
        kana: 'けっそん',
        kanji: '欠損',
        romaji: 'kesson',
        meaning: { en: 'missing part', vi: 'phần bị thiếu' }
      },
      {
        kana: 'じゅうふく',
        kanji: '重複',
        romaji: 'jūfuku',
        meaning: { en: 'duplication', vi: 'trùng lặp' }
      }
    ],
    grammar: [
      {
        pattern: 'N が欠けている',
        title: { en: 'Something is missing', vi: 'Một thành phần bị thiếu' },
        explanation: {
          en: 'Use this pattern to report missing tags, labels, or attributes in bug reports.',
          vi: 'Dùng mẫu này để báo thiếu thẻ, nhãn, hoặc thuộc tính trong bug report.'
        },
        examples: [
          {
            jp: 'ログインフォームでlabel要素が欠けています。',
            romaji: 'Roguin fōmu de label yōso ga kakete imasu.',
            meaning: {
              en: 'The label element is missing in the login form.',
              vi: 'Phần tử label đang bị thiếu trong form đăng nhập.'
            }
          },
          {
            jp: 'このボタンにはtype属性が欠けています。',
            romaji: 'Kono botan ni wa type zokusei ga kakete imasu.',
            meaning: {
              en: 'This button is missing the type attribute.',
              vi: 'Nút này đang thiếu thuộc tính type.'
            }
          }
        ]
      },
      {
        pattern: 'N が重複している',
        title: { en: 'Something is duplicated', vi: 'Một thành phần bị trùng lặp' },
        explanation: {
          en: 'Use this to describe duplicated IDs, repeated DOM nodes, or repeated messages.',
          vi: 'Dùng mẫu này để mô tả ID trùng, node DOM lặp, hoặc thông báo hiển thị lặp.'
        },
        examples: [
          {
            jp: '同じidが重複しているため、正しく関連付けできません。',
            romaji: 'Onaji id ga jūfuku shite iru tame, tadashiku kanrenzuke dekimasen.',
            meaning: {
              en: 'Because the same ID is duplicated, elements cannot be linked correctly.',
              vi: 'Do cùng một ID bị trùng lặp nên không thể liên kết phần tử đúng cách.'
            }
          },
          {
            jp: 'エラーメッセージが二回重複して表示されています。',
            romaji: 'Erā messēji ga nikai jūfuku shite hyōji sarete imasu.',
            meaning: {
              en: 'The error message is displayed twice.',
              vi: 'Thông báo lỗi đang được hiển thị trùng hai lần.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A markup bug report', vi: 'Báo lỗi markup' },
        lines: [
          {
            jp: 'このフォームには、ラベルが欠けている入力があります。',
            romaji: 'Kono fōmu ni wa, raberu ga kakete iru nyūryoku ga arimasu.',
            meaning: {
              en: 'In this form, there is an input that is missing a label.',
              vi: 'Trong form này có ô nhập bị thiếu label.'
            }
          },
          {
            jp: 'ページ内で同じIDが重複しているため、スクリプトが誤作動します。',
            romaji: 'Pēji-nai de onaji ID ga jūfuku shite iru tame, sukuriputo ga gosadō shimasu.',
            meaning: {
              en: 'Because the same ID is duplicated on the page, the script misbehaves.',
              vi: 'Vì cùng một ID bị trùng trong trang, script chạy sai.'
            }
          },
          {
            jp: '修正後、アクセシビリティのチェックも再度行います。',
            romaji: 'Shūsei-go, akuseshibiriti no chekku mo saido okonaimasu.',
            meaning: {
              en: 'After fixing, we will run the accessibility check again.',
              vi: 'Sau khi sửa, chúng tôi sẽ chạy lại kiểm tra accessibility.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What is wrong with one input?', vi: 'Một ô nhập bị lỗi gì?' },
            choices: [
              { id: 'a', label: { en: 'It is missing a label', vi: 'Bị thiếu label' } },
              { id: 'b', label: { en: 'It is too large', vi: 'Quá lớn' } },
              { id: 'c', label: { en: 'It has the wrong color', vi: 'Sai màu' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'Why does the script misbehave?', vi: 'Vì sao script chạy sai?' },
            choices: [
              { id: 'a', label: { en: 'The same ID is duplicated', vi: 'Cùng một ID bị trùng' } },
              { id: 'b', label: { en: 'The page is empty', vi: 'Trang trống rỗng' } },
              { id: 'c', label: { en: 'There is no CSS', vi: 'Không có CSS' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-22',
    number: 22,
    track: 'frontend',
    title: {
      en: 'CSS Layout and Visual Bug Reporting',
      vi: 'Báo lỗi layout và hiển thị với CSS'
    },
    focus: {
      en: 'Use Japanese CSS vocabulary to report layout breaks, spacing problems, and responsive UI issues.',
      vi: 'Dùng từ vựng CSS tiếng Nhật để báo lỗi vỡ layout, lỗi khoảng cách và lỗi responsive.'
    },
    vocab: [
      { kana: 'レイアウト', romaji: 'reiauto', meaning: { en: 'layout', vi: 'bố cục' } },
      {
        kana: 'フレックスボックス',
        romaji: 'furekkusu bokkusu',
        meaning: { en: 'flexbox', vi: 'flexbox' }
      },
      { kana: 'グリッド', romaji: 'guriddo', meaning: { en: 'grid', vi: 'grid' } },
      {
        kana: 'よはく',
        kanji: '余白',
        romaji: 'yohaku',
        meaning: { en: 'spacing/whitespace', vi: 'khoảng trắng, khoảng cách' }
      },
      { kana: 'マージン', romaji: 'mājin', meaning: { en: 'margin', vi: 'margin' } },
      { kana: 'パディング', romaji: 'paddingu', meaning: { en: 'padding', vi: 'padding' } },
      {
        kana: 'かさなりじゅん',
        kanji: '重なり順',
        romaji: 'kasanari-jun',
        meaning: { en: 'stacking order', vi: 'thứ tự chồng lớp' }
      },
      {
        kana: 'レスポンシブ',
        romaji: 'resuponshibu',
        meaning: { en: 'responsive', vi: 'responsive' }
      },
      {
        kana: 'メディアクエリ',
        romaji: 'media kueri',
        meaning: { en: 'media query', vi: 'media query' }
      },
      {
        kana: 'はみだし',
        kanji: 'はみ出し',
        romaji: 'hamidashi',
        meaning: { en: 'overflow protrusion', vi: 'tràn ra ngoài' }
      }
    ],
    grammar: [
      {
        pattern: 'N のせいで',
        title: { en: 'Because of (negative cause)', vi: 'Vì (nguyên nhân tiêu cực)' },
        explanation: {
          en: 'Use this when identifying the probable CSS cause of a visual issue.',
          vi: 'Dùng mẫu này khi chỉ ra nguyên nhân CSS có khả năng gây lỗi hiển thị.'
        },
        examples: [
          {
            jp: 'margin設定のせいで、カード同士が重なっています。',
            romaji: 'Margin settei no sei de, kādo dōshi ga kasanatte imasu.',
            meaning: {
              en: 'Because of margin settings, cards are overlapping.',
              vi: 'Vì cấu hình margin, các card đang bị chồng lên nhau.'
            }
          },
          {
            jp: 'z-indexの指定ミスのせいで、モーダルが背景の下に表示されます。',
            romaji:
              'Z-index no shitei misu no sei de, mōdaru ga haikei no shita ni hyōji saremasu.',
            meaning: {
              en: 'Because of a z-index mistake, the modal appears under the background.',
              vi: 'Vì lỗi chỉ định z-index, modal hiển thị dưới lớp nền.'
            }
          }
        ]
      },
      {
        pattern: 'V（ない形）ために',
        title: { en: 'In order not to', vi: 'Để không' },
        explanation: {
          en: 'Use this for prevention actions in CSS bug fix plans.',
          vi: 'Dùng mẫu này cho hành động phòng ngừa trong kế hoạch sửa lỗi CSS.'
        },
        examples: [
          {
            jp: '画面幅で崩れないために、breakpointを見直します。',
            romaji: 'Gamen haba de kuzurenai tame ni, breakpoint o minaoshimasu.',
            meaning: {
              en: 'To avoid layout break on different widths, we will review breakpoints.',
              vi: 'Để layout không vỡ theo độ rộng màn hình, chúng tôi sẽ xem lại breakpoint.'
            }
          },
          {
            jp: '文字がはみ出さないために、折り返しルールを追加しました。',
            romaji: 'Moji ga hamidasanai tame ni, orikaeshi rūru o tsuika shimashita.',
            meaning: {
              en: 'To prevent text overflow, we added wrapping rules.',
              vi: 'Để chữ không bị tràn, chúng tôi đã thêm quy tắc xuống dòng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A layout break report', vi: 'Báo lỗi vỡ layout' },
        lines: [
          {
            jp: '固定幅のせいで、スマホで横スクロールが発生しています。',
            romaji: 'Kotei-haba no sei de, sumaho de yoko sukurōru ga hassei shite imasu.',
            meaning: {
              en: 'Because of the fixed width, horizontal scroll appears on mobile.',
              vi: 'Vì độ rộng cố định, trên điện thoại bị cuộn ngang.'
            }
          },
          {
            jp: 'レイアウトが崩れないために、相対単位を使うことにしました。',
            romaji: "Reiauto ga kuzurenai tame ni, sōtai tan'i o tsukau koto ni shimashita.",
            meaning: {
              en: 'So that the layout does not break, we decided to use relative units.',
              vi: 'Để layout không vỡ, chúng tôi quyết định dùng đơn vị tương đối.'
            }
          },
          {
            jp: '主要な画面幅で表示を確認してから、リリースします。',
            romaji: 'Shuyō na gamen-haba de hyōji o kakunin shite kara, rirīsu shimasu.',
            meaning: {
              en: 'We release after checking the display at the major screen widths.',
              vi: 'Chúng tôi release sau khi kiểm tra hiển thị ở các độ rộng màn hình chính.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What causes the horizontal scroll on mobile?',
              vi: 'Nguyên nhân cuộn ngang trên mobile?'
            },
            choices: [
              { id: 'a', label: { en: 'The fixed width', vi: 'Độ rộng cố định' } },
              { id: 'b', label: { en: 'Too many images', vi: 'Quá nhiều ảnh' } },
              { id: 'c', label: { en: 'Dark mode', vi: 'Chế độ tối' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What will they use to avoid breaking the layout?',
              vi: 'Họ dùng gì để layout không vỡ?'
            },
            choices: [
              { id: 'a', label: { en: 'Relative units', vi: 'Đơn vị tương đối' } },
              { id: 'b', label: { en: 'Fixed pixels everywhere', vi: 'Pixel cố định mọi nơi' } },
              { id: 'c', label: { en: 'Inline styles only', vi: 'Chỉ inline style' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-23',
    number: 23,
    track: 'frontend',
    title: {
      en: 'JavaScript Runtime Errors and Debug Reports',
      vi: 'Lỗi runtime JavaScript và báo cáo debug'
    },
    focus: {
      en: 'Practice Japanese expressions for reporting JavaScript exceptions, async failures, and debugging findings.',
      vi: 'Luyện mẫu tiếng Nhật để báo lỗi exception JavaScript, lỗi bất đồng bộ và kết quả debug.'
    },
    vocab: [
      {
        kana: 'JavaScriptじっこうじエラー',
        kanji: 'JavaScript実行時エラー',
        romaji: 'JavaScript jikkōji erā',
        meaning: { en: 'JavaScript runtime error', vi: 'lỗi runtime JavaScript' }
      },
      {
        kana: 'れいがい',
        kanji: '例外',
        romaji: 'reigai',
        meaning: { en: 'exception', vi: 'ngoại lệ' }
      },
      {
        kana: 'スタックトレース',
        romaji: 'sutakku torēsu',
        meaning: { en: 'stack trace', vi: 'stack trace' }
      },
      {
        kana: 'みていぎ',
        kanji: '未定義',
        romaji: 'miteigi',
        meaning: { en: 'undefined', vi: 'chưa định nghĩa' }
      },
      {
        kana: 'nullち',
        kanji: 'null値',
        romaji: 'null chi',
        meaning: { en: 'null value', vi: 'giá trị null' }
      },
      {
        kana: 'へんすうスコープ',
        kanji: '変数スコープ',
        romaji: 'hensū sukōpu',
        meaning: { en: 'variable scope', vi: 'phạm vi biến' }
      },
      {
        kana: 'ひどうきしょり',
        kanji: '非同期処理',
        romaji: 'hidōki shori',
        meaning: { en: 'asynchronous processing', vi: 'xử lý bất đồng bộ' }
      },
      {
        kana: 'Promiseきょひ',
        kanji: 'Promise拒否',
        romaji: 'Promise kyohi',
        meaning: { en: 'promise rejection', vi: 'promise bị reject' }
      },
      {
        kana: 'デバッグログ',
        romaji: 'debaggu rogu',
        meaning: { en: 'debug log', vi: 'log debug' }
      },
      {
        kana: 'さいげんてじゅん',
        kanji: '再現手順',
        romaji: 'saigen tejun',
        meaning: { en: 'reproduction steps', vi: 'các bước tái hiện' }
      }
    ],
    grammar: [
      {
        pattern: 'V（た形）ところ',
        title: { en: 'After trying, found that', vi: 'Sau khi thử thì phát hiện' },
        explanation: {
          en: 'Use this pattern to connect debugging action and discovered root cause.',
          vi: 'Dùng mẫu này để nối hành động debug với nguyên nhân tìm được.'
        },
        examples: [
          {
            jp: 'コンソールログを確認したところ、Promise拒否が発生していました。',
            romaji: 'Konsōru rogu o kakunin shita tokoro, Promise kyohi ga hassei shite imashita.',
            meaning: {
              en: 'After checking console logs, we found a promise rejection had occurred.',
              vi: 'Sau khi kiểm tra console log, chúng tôi phát hiện có promise rejection.'
            }
          },
          {
            jp: '再現手順を試したところ、null値参照が原因だと分かりました。',
            romaji:
              'Saigen tejun o tameshita tokoro, null chi sanshō ga gen-in da to wakarimashita.',
            meaning: {
              en: 'After trying reproduction steps, we found null reference was the cause.',
              vi: 'Sau khi thử các bước tái hiện, chúng tôi phát hiện truy cập null là nguyên nhân.'
            }
          }
        ]
      },
      {
        pattern: 'N によって',
        title: { en: 'Depending on / due to', vi: 'Tùy theo / do' },
        explanation: {
          en: 'Useful for describing environment-dependent JavaScript bugs.',
          vi: 'Hữu ích để mô tả lỗi JavaScript phụ thuộc môi trường chạy.'
        },
        examples: [
          {
            jp: 'ブラウザによって、同じコードでも例外の内容が異なります。',
            romaji: 'Burauza ni yotte, onaji kōdo demo reigai no naiyō ga kotonarimasu.',
            meaning: {
              en: 'Depending on the browser, exception details differ even for the same code.',
              vi: 'Tùy trình duyệt, chi tiết ngoại lệ khác nhau dù cùng một đoạn code.'
            }
          },
          {
            jp: '実行順序によって、変数スコープの問題が表面化します。',
            romaji: 'Jikkō junjo ni yotte, hensū sukōpu no mondai ga hyōmenka shimasu.',
            meaning: {
              en: 'Depending on execution order, variable scope issues become visible.',
              vi: 'Tùy theo thứ tự thực thi, vấn đề phạm vi biến sẽ lộ ra.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Debugging an exception', vi: 'Debug một exception' },
        lines: [
          {
            jp: 'エラーログを調べたところ、null参照が原因だと分かりました。',
            romaji: "Erā rogu o shirabeta tokoro, naru sanshō ga gen'in da to wakarimashita.",
            meaning: {
              en: 'After examining the error log, we found that a null reference was the cause.',
              vi: 'Sau khi kiểm tra log lỗi, chúng tôi phát hiện tham chiếu null là nguyên nhân.'
            }
          },
          {
            jp: 'この不具合は、ブラウザによって発生したりしなかったりします。',
            romaji: 'Kono fuguai wa, burauza ni yotte hassei shitari shinakattari shimasu.',
            meaning: {
              en: 'This bug happens or not depending on the browser.',
              vi: 'Lỗi này có hoặc không xảy ra tùy theo trình duyệt.'
            }
          },
          {
            jp: '非同期処理の順序を見直して、修正しました。',
            romaji: 'Hidōki shori no junjo o minaoshite, shūsei shimashita.',
            meaning: {
              en: 'We reviewed the order of the async processing and fixed it.',
              vi: 'Chúng tôi xem lại thứ tự xử lý bất đồng bộ và đã sửa.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What was the cause of the error?', vi: 'Nguyên nhân lỗi là gì?' },
            choices: [
              { id: 'a', label: { en: 'A null reference', vi: 'Tham chiếu null' } },
              { id: 'b', label: { en: 'A missing image', vi: 'Thiếu một ảnh' } },
              { id: 'c', label: { en: 'A slow network only', vi: 'Chỉ do mạng chậm' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What does the bug depend on?', vi: 'Lỗi phụ thuộc vào gì?' },
            choices: [
              { id: 'a', label: { en: 'The browser', vi: 'Trình duyệt' } },
              { id: 'b', label: { en: 'The time of day', vi: 'Thời điểm trong ngày' } },
              { id: 'c', label: { en: "The user's name", vi: 'Tên người dùng' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-24',
    number: 24,
    track: 'frontend',
    title: {
      en: 'BRSE Fundamentals: Requirement Hearing',
      vi: 'Nền tảng BRSE: Khai thác yêu cầu'
    },
    focus: {
      en: 'Build Japanese communication for requirement hearings, clarification questions, and scope alignment.',
      vi: 'Xây nền giao tiếp tiếng Nhật cho buổi khai thác yêu cầu, hỏi làm rõ và đồng bộ phạm vi.'
    },
    vocab: [
      {
        kana: 'ようけんていぎ',
        kanji: '要件定義',
        romaji: 'yōken teigi',
        meaning: { en: 'requirements definition', vi: 'định nghĩa yêu cầu' }
      },
      {
        kana: 'ひあリング',
        romaji: 'hiaringu',
        meaning: { en: 'hearing/interview', vi: 'buổi khai thác thông tin' }
      },
      {
        kana: 'まえてい',
        kanji: '前提',
        romaji: 'zentei',
        meaning: { en: 'assumption', vi: 'giả định ban đầu' }
      },
      {
        kana: 'もくてき',
        kanji: '目的',
        romaji: 'mokuteki',
        meaning: { en: 'objective', vi: 'mục tiêu' }
      },
      { kana: 'はんい', kanji: '範囲', romaji: 'han-i', meaning: { en: 'scope', vi: 'phạm vi' } },
      {
        kana: 'ぎもんてん',
        kanji: '疑問点',
        romaji: 'gimonten',
        meaning: { en: 'open question', vi: 'điểm còn thắc mắc' }
      },
      {
        kana: 'ゆうせんど',
        kanji: '優先度',
        romaji: 'yūsendo',
        meaning: { en: 'priority', vi: 'độ ưu tiên' }
      },
      {
        kana: 'かくにんじこう',
        kanji: '確認事項',
        romaji: 'kakunin jikō',
        meaning: { en: 'items to confirm', vi: 'hạng mục cần xác nhận' }
      }
    ],
    grammar: [
      {
        pattern: 'N に関して',
        title: { en: 'Regarding / about', vi: 'Liên quan đến' },
        explanation: {
          en: 'Use this formal pattern when asking stakeholders to clarify requirement details.',
          vi: 'Dùng mẫu trang trọng này để yêu cầu stakeholder làm rõ chi tiết yêu cầu.'
        },
        examples: [
          {
            jp: '決済フローに関して、例外ケースを確認したいです。',
            romaji: 'Kessai furō ni kanshite, reigai kēsu o kakunin shitai desu.',
            meaning: {
              en: 'Regarding the payment flow, I want to confirm exception cases.',
              vi: 'Liên quan đến luồng thanh toán, tôi muốn xác nhận các case ngoại lệ.'
            }
          },
          {
            jp: 'ログイン要件に関して、運用ルールも共有していただけますか。',
            romaji: 'Roguin yōken ni kanshite, un-yō rūru mo kyōyū shite itadakemasu ka.',
            meaning: {
              en: 'Regarding login requirements, could you also share operation rules?',
              vi: 'Liên quan yêu cầu đăng nhập, anh/chị có thể chia sẻ thêm rule vận hành không?'
            }
          }
        ]
      },
      {
        pattern: 'N を明確にするために',
        title: { en: 'In order to clarify', vi: 'Để làm rõ' },
        explanation: {
          en: 'Use this to explain why you ask additional questions during BRSE hearings.',
          vi: 'Dùng mẫu này để giải thích lý do đặt thêm câu hỏi trong buổi hearing BRSE.'
        },
        examples: [
          {
            jp: '要件を明確にするために、ユーザー種別ごとの操作を整理します。',
            romaji: 'Yōken o meikaku ni suru tame ni, yūzā shubetsu goto no sōsa o seiri shimasu.',
            meaning: {
              en: 'To clarify requirements, we organize actions by user type.',
              vi: 'Để làm rõ yêu cầu, chúng tôi tổng hợp thao tác theo từng loại người dùng.'
            }
          },
          {
            jp: '認識ずれを防ぐために、確認事項を文書化します。',
            romaji: 'Ninshiki zure o fusegu tame ni, kakunin jikō o bunshoka shimasu.',
            meaning: {
              en: 'To prevent misunderstandings, we document confirmation items.',
              vi: 'Để tránh lệch nhận thức, chúng tôi tài liệu hóa các mục xác nhận.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A requirement hearing', vi: 'Buổi khai thác yêu cầu' },
        lines: [
          {
            jp: '検索機能に関して、いくつか確認させてください。',
            romaji: 'Kensaku kinō ni kanshite, ikutsuka kakunin sasete kudasai.',
            meaning: {
              en: 'Regarding the search feature, please let me confirm a few points.',
              vi: 'Liên quan đến tính năng tìm kiếm, cho tôi xác nhận vài điểm.'
            }
          },
          {
            jp: '仕様を明確にするために、想定される利用者を教えてください。',
            romaji: 'Shiyō o meikaku ni suru tame ni, sōtei sareru riyōsha o oshiete kudasai.',
            meaning: {
              en: 'In order to clarify the spec, please tell me the assumed users.',
              vi: 'Để làm rõ spec, hãy cho biết đối tượng người dùng dự kiến.'
            }
          },
          {
            jp: '不明点は議事録にまとめて、後で共有します。',
            romaji: 'Fumeiten wa gijiroku ni matomete, ato de kyōyū shimasu.',
            meaning: {
              en: 'We will summarize unclear points in the minutes and share them later.',
              vi: 'Các điểm chưa rõ sẽ được tổng hợp vào biên bản và chia sẻ sau.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the speaker want to do about the search feature?',
              vi: 'Người nói muốn làm gì với tính năng tìm kiếm?'
            },
            choices: [
              { id: 'a', label: { en: 'Confirm a few points', vi: 'Xác nhận vài điểm' } },
              { id: 'b', label: { en: 'Delete it', vi: 'Xóa nó' } },
              { id: 'c', label: { en: 'Ship it immediately', vi: 'Phát hành ngay' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why ask about the assumed users?',
              vi: 'Vì sao hỏi về người dùng dự kiến?'
            },
            choices: [
              { id: 'a', label: { en: 'To clarify the spec', vi: 'Để làm rõ spec' } },
              { id: 'b', label: { en: 'To delay the project', vi: 'Để trì hoãn dự án' } },
              { id: 'c', label: { en: 'To reduce the team', vi: 'Để giảm nhân sự' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-25',
    number: 25,
    track: 'frontend',
    title: {
      en: 'BRSE: Writing Specifications and Acceptance Criteria',
      vi: 'BRSE: Viết đặc tả và tiêu chí chấp nhận'
    },
    focus: {
      en: 'Practice Japanese needed to document specifications and define clear acceptance criteria.',
      vi: 'Luyện tiếng Nhật cần thiết để viết đặc tả và định nghĩa tiêu chí chấp nhận rõ ràng.'
    },
    vocab: [
      {
        kana: 'しようしょ',
        kanji: '仕様書',
        romaji: 'shiyōsho',
        meaning: { en: 'specification document', vi: 'tài liệu đặc tả' }
      },
      {
        kana: 'じゅようきじゅん',
        kanji: '受容基準',
        romaji: 'juyō kijun',
        meaning: { en: 'acceptance criteria', vi: 'tiêu chí chấp nhận' }
      },
      {
        kana: 'けーすぶんき',
        kanji: 'ケース分岐',
        romaji: 'kēsu bunki',
        meaning: { en: 'case branching', vi: 'phân nhánh case' }
      },
      {
        kana: 'きのうようけん',
        kanji: '機能要件',
        romaji: 'kinō yōken',
        meaning: { en: 'functional requirement', vi: 'yêu cầu chức năng' }
      },
      {
        kana: 'ひきのうようけん',
        kanji: '非機能要件',
        romaji: 'hikinō yōken',
        meaning: { en: 'non-functional requirement', vi: 'yêu cầu phi chức năng' }
      },
      {
        kana: 'せいげんじこう',
        kanji: '制限事項',
        romaji: 'seigen jikō',
        meaning: { en: 'constraints', vi: 'điều kiện ràng buộc' }
      },
      {
        kana: 'ていぎずみ',
        kanji: '定義済み',
        romaji: 'teigi-zumi',
        meaning: { en: 'already defined', vi: 'đã được định nghĩa' }
      },
      {
        kana: 'れいがいしよう',
        kanji: '例外仕様',
        romaji: 'reigai shiyō',
        meaning: { en: 'exception specification', vi: 'đặc tả ngoại lệ' }
      }
    ],
    grammar: [
      {
        pattern: 'N として定義する',
        title: { en: 'Define as', vi: 'Định nghĩa là' },
        explanation: {
          en: 'Use this when documenting exact behavior in specification wording.',
          vi: 'Dùng mẫu này khi ghi rõ hành vi hệ thống trong câu chữ đặc tả.'
        },
        examples: [
          {
            jp: 'タイムアウトは30秒として定義します。',
            romaji: 'Taimuauto wa sanjū-byō to shite teigi shimasu.',
            meaning: {
              en: 'We define timeout as 30 seconds.',
              vi: 'Chúng tôi định nghĩa timeout là 30 giây.'
            }
          },
          {
            jp: '入力エラー時の表示文言を必須項目として定義しました。',
            romaji: 'Nyūryoku erāji no hyōji mongon o hissu kōmoku to shite teigi shimashita.',
            meaning: {
              en: 'We defined input error messages as mandatory items.',
              vi: 'Chúng tôi định nghĩa nội dung hiển thị lỗi nhập liệu là hạng mục bắt buộc.'
            }
          }
        ]
      },
      {
        pattern: '普通形 + 場合は',
        title: { en: 'In case / if', vi: 'Trong trường hợp / nếu' },
        explanation: {
          en: 'Use this to describe acceptance conditions and expected outcomes.',
          vi: 'Dùng mẫu này để mô tả điều kiện chấp nhận và kết quả mong đợi.'
        },
        examples: [
          {
            jp: '認証に失敗した場合は、エラーメッセージを表示します。',
            romaji: 'Ninshō ni shippai shita baai wa, erā messēji o hyōji shimasu.',
            meaning: {
              en: 'If authentication fails, an error message is shown.',
              vi: 'Nếu xác thực thất bại, hệ thống hiển thị thông báo lỗi.'
            }
          },
          {
            jp: '受容基準を満たさない場合は、リリース対象外とします。',
            romaji: 'Juyō kijun o mitasanai baai wa, rirīsu taishōgai to shimasu.',
            meaning: {
              en: 'If acceptance criteria are not met, it is excluded from release.',
              vi: 'Nếu không đạt tiêu chí chấp nhận, hạng mục sẽ bị loại khỏi release.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Acceptance criteria', vi: 'Tiêu chí chấp nhận' },
        lines: [
          {
            jp: '「成功」は、HTTP 200が返ることとして定義します。',
            romaji: '"Seikō" wa, HTTP 200 ga kaeru koto to shite teigi shimasu.',
            meaning: {
              en: 'We define "success" as returning HTTP 200.',
              vi: '"Thành công" được định nghĩa là trả về HTTP 200.'
            }
          },
          {
            jp: '入力が空の場合は、エラーメッセージを表示します。',
            romaji: 'Nyūryoku ga kara no baai wa, erā messēji o hyōji shimasu.',
            meaning: {
              en: 'If the input is empty, we show an error message.',
              vi: 'Trong trường hợp input rỗng, hiển thị thông báo lỗi.'
            }
          },
          {
            jp: 'これらの条件を満たせば、受け入れ完了とします。',
            romaji: 'Korera no jōken o mitaseba, ukeire kanryō to shimasu.',
            meaning: {
              en: 'If these conditions are met, we consider acceptance complete.',
              vi: 'Nếu thỏa các điều kiện này thì coi như chấp nhận xong.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How is "success" defined?',
              vi: '"Thành công" được định nghĩa thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Returning HTTP 200', vi: 'Trả về HTTP 200' } },
              { id: 'b', label: { en: 'A green button', vi: 'Một nút màu xanh' } },
              { id: 'c', label: { en: 'Fast loading only', vi: 'Chỉ cần tải nhanh' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happens if the input is empty?',
              vi: 'Nếu input rỗng thì sao?'
            },
            choices: [
              { id: 'a', label: { en: 'Show an error message', vi: 'Hiển thị thông báo lỗi' } },
              { id: 'b', label: { en: 'Crash the app', vi: 'Làm sập app' } },
              { id: 'c', label: { en: 'Submit anyway', vi: 'Vẫn gửi đi' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-26',
    number: 26,
    track: 'frontend',
    title: {
      en: 'BRSE: Estimation, Timeline, and Trade-offs',
      vi: 'BRSE: Ước lượng, timeline và đánh đổi'
    },
    focus: {
      en: 'Use Japanese for effort estimation, discussing schedule risks, and negotiating scope trade-offs.',
      vi: 'Dùng tiếng Nhật cho ước lượng công sức, trao đổi rủi ro tiến độ và đàm phán đánh đổi phạm vi.'
    },
    vocab: [
      {
        kana: 'こうすう',
        kanji: '工数',
        romaji: 'kōsū',
        meaning: { en: 'effort (man-hours)', vi: 'công sức (man-hour)' }
      },
      {
        kana: 'みつもり',
        kanji: '見積もり',
        romaji: 'mitsumori',
        meaning: { en: 'estimation', vi: 'ước lượng' }
      },
      {
        kana: 'のうき',
        kanji: '納期',
        romaji: 'nōki',
        meaning: { en: 'delivery deadline', vi: 'hạn giao' }
      },
      {
        kana: 'よゆう',
        kanji: '余裕',
        romaji: 'yoyū',
        meaning: { en: 'buffer/slack', vi: 'đệm thời gian' }
      },
      {
        kana: 'いぞんタスク',
        kanji: '依存タスク',
        romaji: 'izon tasuku',
        meaning: { en: 'dependent task', vi: 'task phụ thuộc' }
      },
      {
        kana: 'てまえ',
        kanji: '手前',
        romaji: 'temae',
        meaning: { en: 'beforehand', vi: 'trước mốc' }
      },
      {
        kana: 'きのうさくげん',
        kanji: '機能削減',
        romaji: 'kinō sakugen',
        meaning: { en: 'feature reduction', vi: 'giảm phạm vi tính năng' }
      },
      {
        kana: 'だんかいてき',
        kanji: '段階的',
        romaji: 'dankai-teki',
        meaning: { en: 'phased', vi: 'theo từng giai đoạn' }
      }
    ],
    grammar: [
      {
        pattern: 'N を踏まえて',
        title: { en: 'Taking into account', vi: 'Tính đến' },
        explanation: {
          en: 'Use this to explain estimation rationale with constraints and dependencies.',
          vi: 'Dùng mẫu này để giải thích cơ sở estimate khi có ràng buộc và phụ thuộc.'
        },
        examples: [
          {
            jp: '依存タスクを踏まえて、実装順を調整します。',
            romaji: 'Izon tasuku o fumaete, jissō jun o chōsei shimasu.',
            meaning: {
              en: 'Taking dependent tasks into account, we adjust implementation order.',
              vi: 'Tính đến task phụ thuộc, chúng tôi điều chỉnh thứ tự triển khai.'
            }
          },
          {
            jp: 'レビュー工数を踏まえて、二日分の余裕を確保しました。',
            romaji: 'Rebyū kōsū o fumaete, futsuka-bun no yoyū o kakuho shimashita.',
            meaning: {
              en: 'Considering review effort, we secured a two-day buffer.',
              vi: 'Tính đến công review, chúng tôi chừa đệm hai ngày.'
            }
          }
        ]
      },
      {
        pattern: '普通形 + おそれがある',
        title: { en: 'There is a risk that', vi: 'Có nguy cơ rằng' },
        explanation: {
          en: 'Use this formal phrase to communicate schedule and delivery risks early.',
          vi: 'Dùng mẫu trang trọng này để truyền đạt sớm rủi ro tiến độ và bàn giao.'
        },
        examples: [
          {
            jp: 'このまま仕様が増えると、納期に間に合わないおそれがあります。',
            romaji: 'Kono mama shiyō ga fueru to, nōki ni maniawanai osore ga arimasu.',
            meaning: {
              en: 'If specs keep increasing, there is a risk we miss the deadline.',
              vi: 'Nếu đặc tả cứ tăng thêm, có nguy cơ không kịp hạn giao.'
            }
          },
          {
            jp: '結合テストが遅れると、リリース判定に影響するおそれがあります。',
            romaji: 'Ketsugō tesuto ga okureru to, rirīsu hantei ni eikyō suru osore ga arimasu.',
            meaning: {
              en: 'If integration testing is delayed, release decision may be affected.',
              vi: 'Nếu integration test bị chậm, có nguy cơ ảnh hưởng quyết định release.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Estimation with risks', vi: 'Ước lượng kèm rủi ro' },
        lines: [
          {
            jp: '依存関係を踏まえて、この機能は二週間かかると見積もりました。',
            romaji: 'Izon kankei o fumaete, kono kinō wa ni-shūkan kakaru to mitsumorimashita.',
            meaning: {
              en: 'Taking dependencies into account, we estimated this feature takes two weeks.',
              vi: 'Tính đến phụ thuộc, chúng tôi ước lượng tính năng này mất hai tuần.'
            }
          },
          {
            jp: '仕様変更が続くと、納期に間に合わないおそれがあります。',
            romaji: 'Shiyō henkō ga tsuzuku to, nōki ni maniawanai osore ga arimasu.',
            meaning: {
              en: 'If spec changes continue, there is a risk of missing the deadline.',
              vi: 'Nếu spec tiếp tục thay đổi, có nguy cơ không kịp deadline.'
            }
          },
          {
            jp: '優先度の低い項目は、次のスプリントに回す提案をします。',
            romaji: 'Yūsendo no hikui kōmoku wa, tsugi no supurinto ni mawasu teian o shimasu.',
            meaning: {
              en: 'We propose moving low-priority items to the next sprint.',
              vi: 'Chúng tôi đề xuất chuyển các mục ưu tiên thấp sang sprint sau.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How long was the feature estimated to take?',
              vi: 'Tính năng được ước lượng mất bao lâu?'
            },
            choices: [
              { id: 'a', label: { en: 'Two weeks', vi: 'Hai tuần' } },
              { id: 'b', label: { en: 'Two days', vi: 'Hai ngày' } },
              { id: 'c', label: { en: 'Two months', vi: 'Hai tháng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is the risk if spec changes continue?',
              vi: 'Rủi ro nếu spec cứ thay đổi là gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Missing the deadline', vi: 'Không kịp deadline' } },
              { id: 'b', label: { en: 'Finishing early', vi: 'Xong sớm' } },
              { id: 'c', label: { en: 'Lower cost', vi: 'Giảm chi phí' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-27',
    number: 27,
    track: 'frontend',
    title: {
      en: 'BRSE: Meeting Facilitation and Minutes',
      vi: 'BRSE: Điều phối họp và biên bản'
    },
    focus: {
      en: 'Practice Japanese for chairing meetings, confirming decisions, and documenting action items.',
      vi: 'Luyện tiếng Nhật để điều phối họp, chốt quyết định và ghi lại action items.'
    },
    vocab: [
      {
        kana: 'しんこうやく',
        kanji: '進行役',
        romaji: 'shinkō-yaku',
        meaning: { en: 'facilitator', vi: 'người điều phối' }
      },
      {
        kana: 'ぎじろく',
        kanji: '議事録',
        romaji: 'gijiroku',
        meaning: { en: 'meeting minutes', vi: 'biên bản họp' }
      },
      {
        kana: 'けっていじこう',
        kanji: '決定事項',
        romaji: 'kettei jikō',
        meaning: { en: 'decisions made', vi: 'hạng mục đã quyết' }
      },
      {
        kana: 'みけってい',
        kanji: '未決定',
        romaji: 'mikettei',
        meaning: { en: 'pending decision', vi: 'chưa quyết định' }
      },
      {
        kana: 'じかい',
        kanji: '次回',
        romaji: 'jikai',
        meaning: { en: 'next time/next meeting', vi: 'cuộc họp tiếp theo' }
      },
      {
        kana: 'たんとうしゃ',
        kanji: '担当者',
        romaji: 'tantōsha',
        meaning: { en: 'owner/person in charge', vi: 'người phụ trách' }
      },
      {
        kana: 'しめきり',
        kanji: '締め切り',
        romaji: 'shimekiri',
        meaning: { en: 'deadline', vi: 'hạn chót' }
      },
      {
        kana: 'あくしょんあいてむ',
        romaji: 'akushon aitemu',
        meaning: { en: 'action item', vi: 'hành động cần thực hiện' }
      }
    ],
    grammar: [
      {
        pattern: 'N を確認したうえで',
        title: { en: 'After confirming', vi: 'Sau khi xác nhận' },
        explanation: {
          en: 'Use this pattern to structure meeting flow before moving to next topics.',
          vi: 'Dùng mẫu này để điều phối luồng họp trước khi sang chủ đề tiếp theo.'
        },
        examples: [
          {
            jp: '前回の決定事項を確認したうえで、本日の論点に入ります。',
            romaji: 'Zenkai no kettei jikō o kakunin shita ue de, honjitsu no ronten ni hairimasu.',
            meaning: {
              en: "After confirming previous decisions, we move to today's discussion points.",
              vi: 'Sau khi xác nhận quyết định kỳ trước, chúng ta vào các luận điểm hôm nay.'
            }
          },
          {
            jp: '担当者を確認したうえで、締め切りを確定しましょう。',
            romaji: 'Tantōsha o kakunin shita ue de, shimekiri o kakutei shimashō.',
            meaning: {
              en: 'After confirming owners, let us finalize deadlines.',
              vi: 'Sau khi xác nhận người phụ trách, chúng ta chốt deadline.'
            }
          }
        ]
      },
      {
        pattern: 'V（てもらえると助かる',
        title: { en: 'It would help if you could', vi: 'Nếu có thể... thì rất tốt' },
        explanation: {
          en: 'Useful for politely assigning follow-up tasks in multilingual meetings.',
          vi: 'Hữu ích để giao task follow-up một cách lịch sự trong họp đa ngôn ngữ.'
        },
        examples: [
          {
            jp: '本日の議事録を明日までに共有してもらえると助かります。',
            romaji: 'Honjitsu no gijiroku o ashita made ni kyōyū shite moraeru to tasukarimasu.',
            meaning: {
              en: "It would help if you could share today's minutes by tomorrow.",
              vi: 'Nếu bạn có thể chia sẻ biên bản hôm nay trước ngày mai thì rất tốt.'
            }
          },
          {
            jp: '未決定事項を一覧にまとめてもらえると助かります。',
            romaji: 'Mikettei jikō o ichiran ni matomete moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could summarize pending items in a list.',
              vi: 'Nếu bạn có thể tổng hợp hạng mục chưa chốt thành danh sách thì rất hữu ích.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Meeting wrap-up', vi: 'Chốt cuộc họp' },
        lines: [
          {
            jp: '前回の決定事項を確認したうえで、本日の議題に入ります。',
            romaji: 'Zenkai no kettei jikō o kakunin shita ue de, honjitsu no gidai ni hairimasu.',
            meaning: {
              en: "After confirming last time's decisions, we move into today's agenda.",
              vi: 'Sau khi xác nhận quyết định lần trước, chúng ta vào nội dung hôm nay.'
            }
          },
          {
            jp: '議事録を明日までに共有してもらえると助かります。',
            romaji: 'Gijiroku o ashita made ni kyōyū shite moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could share the minutes by tomorrow.',
              vi: 'Nếu bạn có thể chia sẻ biên bản trước ngày mai thì rất tốt.'
            }
          },
          {
            jp: '担当者と期限は、その場で決めるようにします。',
            romaji: 'Tantōsha to kigen wa, sono ba de kimeru yō ni shimasu.',
            meaning: {
              en: 'We make it a practice to decide the owner and deadline on the spot.',
              vi: 'Chúng tôi duy trì việc chốt người phụ trách và hạn ngay tại chỗ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: "What is done before today's agenda?",
              vi: 'Trước nội dung hôm nay cần làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: "Confirm last time's decisions", vi: 'Xác nhận quyết định lần trước' }
              },
              { id: 'b', label: { en: 'Order lunch', vi: 'Đặt cơm trưa' } },
              { id: 'c', label: { en: 'End the meeting', vi: 'Kết thúc họp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'When should the minutes be shared?',
              vi: 'Khi nào cần chia sẻ biên bản?'
            },
            choices: [
              { id: 'a', label: { en: 'By tomorrow', vi: 'Trước ngày mai' } },
              { id: 'b', label: { en: 'Next year', vi: 'Năm sau' } },
              { id: 'c', label: { en: 'Never', vi: 'Không bao giờ' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-28',
    number: 28,
    track: 'frontend',
    title: {
      en: 'BRSE: Risk Communication and Escalation',
      vi: 'BRSE: Truyền đạt rủi ro và escalation'
    },
    focus: {
      en: 'Use Japanese to report blockers, escalate critical risks, and propose mitigation plans.',
      vi: 'Dùng tiếng Nhật để báo blocker, escalation rủi ro nghiêm trọng và đề xuất phương án giảm thiểu.'
    },
    vocab: [
      {
        kana: 'しょうがいよういん',
        kanji: '障害要因',
        romaji: 'shōgai yōin',
        meaning: { en: 'blocking factor', vi: 'yếu tố cản trở' }
      },
      {
        kana: 'えすかれーしょん',
        romaji: 'esukarēshon',
        meaning: { en: 'escalation', vi: 'escalation' }
      },
      {
        kana: 'えいきょうど',
        kanji: '影響度',
        romaji: 'eikyōdo',
        meaning: { en: 'impact severity', vi: 'mức độ ảnh hưởng' }
      },
      {
        kana: 'はっせいかのうせい',
        kanji: '発生可能性',
        romaji: 'hassei kanōsei',
        meaning: { en: 'likelihood', vi: 'khả năng xảy ra' }
      },
      {
        kana: 'かいひさく',
        kanji: '回避策',
        romaji: 'kaihisaku',
        meaning: { en: 'avoidance strategy', vi: 'biện pháp né tránh' }
      },
      {
        kana: 'かんわさく',
        kanji: '緩和策',
        romaji: 'kanwasaku',
        meaning: { en: 'mitigation', vi: 'biện pháp giảm thiểu' }
      },
      {
        kana: 'たいおうあん',
        kanji: '対応案',
        romaji: 'taiō-an',
        meaning: { en: 'response proposal', vi: 'phương án xử lý' }
      },
      {
        kana: 'きんきゅうたいおう',
        kanji: '緊急対応',
        romaji: 'kinkyū taiō',
        meaning: { en: 'urgent response', vi: 'ứng phó khẩn cấp' }
      }
    ],
    grammar: [
      {
        pattern: 'N のおそれがある',
        title: { en: 'There is a risk of', vi: 'Có nguy cơ' },
        explanation: {
          en: 'Use this formal risk phrase when escalating project status to stakeholders.',
          vi: 'Dùng mẫu rủi ro trang trọng này khi escalation trạng thái dự án cho stakeholder.'
        },
        examples: [
          {
            jp: 'API仕様の未確定により、実装遅延のおそれがあります。',
            romaji: 'API shiyō no mikakutei ni yori, jissō chien no osore ga arimasu.',
            meaning: {
              en: 'Due to unresolved API specs, there is a risk of implementation delay.',
              vi: 'Do API spec chưa chốt, có nguy cơ chậm triển khai.'
            }
          },
          {
            jp: '対応が遅れると、品質低下のおそれがあります。',
            romaji: 'Taiō ga okureru to, hinshitsu teika no osore ga arimasu.',
            meaning: {
              en: 'If response is delayed, there is a risk of quality degradation.',
              vi: 'Nếu xử lý chậm, có nguy cơ giảm chất lượng.'
            }
          }
        ]
      },
      {
        pattern: 'N に対して N を提案する',
        title: { en: 'Propose measures for', vi: 'Đề xuất biện pháp cho' },
        explanation: {
          en: 'Use this to convert risk reports into concrete mitigation actions.',
          vi: 'Dùng mẫu này để chuyển báo cáo rủi ro thành hành động giảm thiểu cụ thể.'
        },
        examples: [
          {
            jp: '性能リスクに対して、段階的リリースを提案します。',
            romaji: 'Seinō risuku ni taishite, dankai-teki rirīsu o teian shimasu.',
            meaning: {
              en: 'For performance risk, we propose phased release.',
              vi: 'Đối với rủi ro hiệu năng, chúng tôi đề xuất release theo giai đoạn.'
            }
          },
          {
            jp: '仕様変更の頻発に対して、変更凍結期間を提案しました。',
            romaji: 'Shiyō henkō no hinpatsu ni taishite, henkō tōketsu kikan o teian shimashita.',
            meaning: {
              en: 'For frequent spec changes, we proposed a change-freeze period.',
              vi: 'Đối với việc đổi spec liên tục, chúng tôi đề xuất giai đoạn freeze thay đổi.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Escalating a risk', vi: 'Escalation rủi ro' },
        lines: [
          {
            jp: 'このままでは、リリース延期のおそれがあります。',
            romaji: 'Kono mama de wa, rirīsu enki no osore ga arimasu.',
            meaning: {
              en: 'As it stands, there is a risk of postponing the release.',
              vi: 'Cứ như hiện tại thì có nguy cơ phải hoãn release.'
            }
          },
          {
            jp: 'その問題に対して、機能を一部に絞る案を提案します。',
            romaji: 'Sono mondai ni taishite, kinō o ichibu ni shiboru an o teian shimasu.',
            meaning: {
              en: 'For that problem, we propose narrowing the features to a subset.',
              vi: 'Đối với vấn đề đó, chúng tôi đề xuất thu hẹp tính năng còn một phần.'
            }
          },
          {
            jp: '早めに関係者へ共有して、判断を仰ぎます。',
            romaji: 'Hayame ni kankeisha e kyōyū shite, handan o aogimasu.',
            meaning: {
              en: 'We share with stakeholders early and seek their decision.',
              vi: 'Chúng tôi chia sẻ sớm với các bên liên quan và xin quyết định.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What is the risk mentioned?', vi: 'Rủi ro được nêu là gì?' },
            choices: [
              { id: 'a', label: { en: 'Postponing the release', vi: 'Phải hoãn release' } },
              { id: 'b', label: { en: 'Hiring more staff', vi: 'Tuyển thêm người' } },
              { id: 'c', label: { en: 'Getting a bonus', vi: 'Được thưởng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is proposed for the problem?',
              vi: 'Đề xuất gì cho vấn đề?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Narrow the features to a subset',
                  vi: 'Thu hẹp tính năng còn một phần'
                }
              },
              { id: 'b', label: { en: 'Add more features', vi: 'Thêm nhiều tính năng' } },
              { id: 'c', label: { en: 'Cancel the project', vi: 'Hủy dự án' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-29',
    number: 29,
    track: 'frontend',
    title: {
      en: 'BRSE: Stakeholder Negotiation and Alignment',
      vi: 'BRSE: Đàm phán và đồng thuận với stakeholder'
    },
    focus: {
      en: 'Learn Japanese patterns for negotiating priorities, handling objections, and reaching stakeholder alignment.',
      vi: 'Học mẫu tiếng Nhật để đàm phán ưu tiên, xử lý phản biện và đạt đồng thuận với stakeholder.'
    },
    vocab: [
      {
        kana: 'りようしゃかち',
        kanji: '利用者価値',
        romaji: 'riyōsha kachi',
        meaning: { en: 'user value', vi: 'giá trị người dùng' }
      },
      {
        kana: 'じぎょうインパクト',
        romaji: 'jigyō inpakuto',
        meaning: { en: 'business impact', vi: 'ảnh hưởng kinh doanh' }
      },
      {
        kana: 'あいしょうもんだい',
        kanji: '相性問題',
        romaji: 'aishō mondai',
        meaning: { en: 'compatibility issue', vi: 'vấn đề tương thích' }
      },
      {
        kana: 'だとうあん',
        kanji: '妥当案',
        romaji: 'datō-an',
        meaning: { en: 'reasonable proposal', vi: 'phương án hợp lý' }
      },
      {
        kana: 'せんこうかいはつ',
        kanji: '先行開発',
        romaji: 'senkō kaihatsu',
        meaning: { en: 'prior development', vi: 'phát triển trước' }
      },
      {
        kana: 'しだん',
        kanji: '次段',
        romaji: 'jidan',
        meaning: { en: 'next phase', vi: 'giai đoạn kế tiếp' }
      },
      {
        kana: 'ごういけいせい',
        kanji: '合意形成',
        romaji: 'gōi keisei',
        meaning: { en: 'consensus building', vi: 'hình thành đồng thuận' }
      },
      {
        kana: 'たいあん',
        kanji: '対案',
        romaji: 'taian',
        meaning: { en: 'counterproposal', vi: 'phương án đối ứng' }
      }
    ],
    grammar: [
      {
        pattern: 'N だけでなく N も',
        title: { en: 'Not only A but also B', vi: 'Không chỉ A mà còn B' },
        explanation: {
          en: 'Useful when balancing technical constraints with business expectations.',
          vi: 'Hữu ích khi cân bằng ràng buộc kỹ thuật với kỳ vọng kinh doanh.'
        },
        examples: [
          {
            jp: 'この施策は開発効率だけでなく、利用者価値も高めます。',
            romaji: 'Kono shisaku wa kaihatsu kōritsu dake de naku, riyōsha kachi mo takamemasu.',
            meaning: {
              en: 'This measure improves not only development efficiency but also user value.',
              vi: 'Biện pháp này cải thiện không chỉ hiệu suất phát triển mà còn giá trị người dùng.'
            }
          },
          {
            jp: '短期効果だけでなく、保守性も考慮すべきです。',
            romaji: 'Tanki kōka dake de naku, hoshusei mo kōryo subeki desu.',
            meaning: {
              en: 'We should consider not only short-term effects but also maintainability.',
              vi: 'Chúng ta nên cân nhắc không chỉ hiệu quả ngắn hạn mà cả khả năng bảo trì.'
            }
          }
        ]
      },
      {
        pattern: 'N としては',
        title: { en: 'From the standpoint of', vi: 'Từ góc độ' },
        explanation: {
          en: 'Use this to separate viewpoints and negotiate decisions objectively.',
          vi: 'Dùng mẫu này để tách bạch góc nhìn và đàm phán quyết định một cách khách quan.'
        },
        examples: [
          {
            jp: '利用者としては、初回体験の分かりやすさが重要です。',
            romaji: 'Riyōsha to shite wa, shokai taiken no wakariyasusa ga jūyō desu.',
            meaning: {
              en: 'From a user standpoint, clarity of first-time experience is important.',
              vi: 'Từ góc độ người dùng, độ dễ hiểu ở lần trải nghiệm đầu là quan trọng.'
            }
          },
          {
            jp: '開発側としては、段階導入のほうが安全です。',
            romaji: 'Kaihatsu-gawa to shite wa, dankai dōnyū no hō ga anzen desu.',
            meaning: {
              en: 'From the development side, phased rollout is safer.',
              vi: 'Từ phía phát triển, triển khai theo giai đoạn an toàn hơn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Balancing priorities', vi: 'Cân bằng ưu tiên' },
        lines: [
          {
            jp: 'コストだけでなく、保守性も考える必要があります。',
            romaji: 'Kosuto dake de naku, hoshusei mo kangaeru hitsuyō ga arimasu.',
            meaning: {
              en: 'We need to consider not only cost but also maintainability.',
              vi: 'Cần cân nhắc không chỉ chi phí mà còn khả năng bảo trì.'
            }
          },
          {
            jp: '開発チームとしては、段階的な導入を希望します。',
            romaji: 'Kaihatsu chīmu to shite wa, dankaiteki na dōnyū o kibō shimasu.',
            meaning: {
              en: "From the development team's standpoint, we prefer a phased rollout.",
              vi: 'Từ góc độ team phát triển, chúng tôi mong muốn triển khai theo giai đoạn.'
            }
          },
          {
            jp: '双方の意見を踏まえて、優先順位を合意します。',
            romaji: 'Sōhō no iken o fumaete, yūsen-juni o gōi shimasu.',
            meaning: {
              en: "Taking both sides' opinions into account, we agree on the priorities.",
              vi: 'Dựa trên ý kiến hai bên, chúng tôi thống nhất thứ tự ưu tiên.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What must be considered besides cost?',
              vi: 'Ngoài chi phí cần cân nhắc gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Maintainability', vi: 'Khả năng bảo trì' } },
              { id: 'b', label: { en: 'Only the color', vi: 'Chỉ màu sắc' } },
              { id: 'c', label: { en: 'Nothing else', vi: 'Không gì khác' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What does the dev team prefer?', vi: 'Team phát triển mong muốn gì?' },
            choices: [
              { id: 'a', label: { en: 'A phased rollout', vi: 'Triển khai theo giai đoạn' } },
              { id: 'b', label: { en: 'A big-bang release', vi: 'Release một lần toàn bộ' } },
              { id: 'c', label: { en: 'No release at all', vi: 'Không release gì cả' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-30',
    number: 30,
    track: 'frontend',
    title: {
      en: 'BRSE: Delivery Reporting and Project Handover',
      vi: 'BRSE: Báo cáo bàn giao và chốt dự án'
    },
    focus: {
      en: 'Master Japanese used in final delivery reports, acceptance walkthroughs, and handover communication.',
      vi: 'Làm chủ tiếng Nhật dùng trong báo cáo bàn giao cuối kỳ, walkthrough nghiệm thu và giao tiếp handover.'
    },
    vocab: [
      {
        kana: 'のうひん',
        kanji: '納品',
        romaji: 'nōhin',
        meaning: { en: 'delivery', vi: 'bàn giao sản phẩm' }
      },
      {
        kana: 'けんしゅう',
        kanji: '検収',
        romaji: 'kenshū',
        meaning: { en: 'acceptance inspection', vi: 'nghiệm thu' }
      },
      {
        kana: 'ひきつぎ',
        kanji: '引き継ぎ',
        romaji: 'hikitsugi',
        meaning: { en: 'handover', vi: 'chuyển giao' }
      },
      {
        kana: 'うんようてじゅん',
        kanji: '運用手順',
        romaji: 'un-yō tejun',
        meaning: { en: 'operation procedure', vi: 'quy trình vận hành' }
      },
      {
        kana: 'かだいかんりひょう',
        kanji: '課題管理表',
        romaji: 'kadai kanrihyō',
        meaning: { en: 'issue tracker sheet', vi: 'bảng quản lý vấn đề' }
      },
      {
        kana: 'かんりょうほうこく',
        kanji: '完了報告',
        romaji: 'kanryō hōkoku',
        meaning: { en: 'completion report', vi: 'báo cáo hoàn thành' }
      },
      {
        kana: 'のこりかだい',
        kanji: '残り課題',
        romaji: 'nokori kadai',
        meaning: { en: 'remaining issues', vi: 'hạng mục còn lại' }
      },
      {
        kana: 'ほしゅけいやく',
        kanji: '保守契約',
        romaji: 'hoshu keiyaku',
        meaning: { en: 'maintenance contract', vi: 'hợp đồng bảo trì' }
      }
    ],
    grammar: [
      {
        pattern: 'V（た形）うえで',
        title: { en: 'After doing, then', vi: 'Sau khi làm rồi' },
        explanation: {
          en: 'Use this in handover to show sequence: verification first, acceptance next.',
          vi: 'Dùng mẫu này trong handover để thể hiện trình tự: xác minh trước, nghiệm thu sau.'
        },
        examples: [
          {
            jp: '最終テストを実施したうえで、納品手続きを進めます。',
            romaji: 'Saishū tesuto o jisshi shita ue de, nōhin tetsuzuki o susumemasu.',
            meaning: {
              en: 'After conducting final tests, we proceed with delivery procedures.',
              vi: 'Sau khi thực hiện test cuối, chúng tôi tiến hành thủ tục bàn giao.'
            }
          },
          {
            jp: '検収項目を確認したうえで、完了報告を提出します。',
            romaji: 'Kenshū kōmoku o kakunin shita ue de, kanryō hōkoku o teishutsu shimasu.',
            meaning: {
              en: 'After confirming acceptance items, we submit the completion report.',
              vi: 'Sau khi xác nhận hạng mục nghiệm thu, chúng tôi nộp báo cáo hoàn thành.'
            }
          }
        ]
      },
      {
        pattern: 'N として引き継ぐ',
        title: { en: 'Hand over as', vi: 'Chuyển giao dưới dạng' },
        explanation: {
          en: 'Use this to define what artifacts are transferred at project closure.',
          vi: 'Dùng mẫu này để xác định các artefact được chuyển giao khi kết thúc dự án.'
        },
        examples: [
          {
            jp: '運用手順書を正式版として引き継ぎます。',
            romaji: 'Un-yō tejunsho o seishiki-ban to shite hikitsugimasu.',
            meaning: {
              en: 'We hand over the operation manual as the official version.',
              vi: 'Chúng tôi chuyển giao tài liệu vận hành dưới dạng bản chính thức.'
            }
          },
          {
            jp: '残り課題は次フェーズの管理項目として引き継ぎます。',
            romaji: 'Nokori kadai wa ji-fēzu no kanri kōmoku to shite hikitsugimasu.',
            meaning: {
              en: 'Remaining issues are handed over as management items for the next phase.',
              vi: 'Các hạng mục còn lại được chuyển giao thành mục quản lý cho phase kế tiếp.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Project handover', vi: 'Bàn giao dự án' },
        lines: [
          {
            jp: '受け入れテストを終えたうえで、本番環境へ移行します。',
            romaji: 'Ukeire tesuto o oeta ue de, honban kankyō e ikō shimasu.',
            meaning: {
              en: 'After finishing acceptance testing, we migrate to the production environment.',
              vi: 'Sau khi hoàn tất test chấp nhận, chúng tôi chuyển sang môi trường production.'
            }
          },
          {
            jp: '残った課題は、運用チームへ引き継ぎ事項として引き継ぎます。',
            romaji: "Nokotta kadai wa, un'yō chīmu e hikitsugi jikō to shite hikitsugimasu.",
            meaning: {
              en: 'We hand over the remaining issues to the operations team as handover items.',
              vi: 'Các vấn đề còn lại được bàn giao cho team vận hành dưới dạng mục bàn giao.'
            }
          },
          {
            jp: 'ドキュメントと連絡先をまとめて、共有します。',
            romaji: 'Dokyumento to renrakusaki o matomete, kyōyū shimasu.',
            meaning: {
              en: 'We compile the documents and contacts and share them.',
              vi: 'Chúng tôi tổng hợp tài liệu và đầu mối liên hệ rồi chia sẻ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is done before migrating to production?',
              vi: 'Trước khi chuyển lên production cần làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Finish acceptance testing', vi: 'Hoàn tất test chấp nhận' }
              },
              { id: 'b', label: { en: 'Delete the repository', vi: 'Xóa repository' } },
              { id: 'c', label: { en: 'Start coding', vi: 'Bắt đầu code' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Who receives the remaining issues?',
              vi: 'Ai nhận các vấn đề còn lại?'
            },
            choices: [
              { id: 'a', label: { en: 'The operations team', vi: 'Team vận hành' } },
              { id: 'b', label: { en: 'No one', vi: 'Không ai' } },
              { id: 'c', label: { en: 'The customer directly', vi: 'Khách hàng trực tiếp' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
