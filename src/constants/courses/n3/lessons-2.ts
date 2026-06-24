import type { Lesson } from '../types.ts';

export const n3LessonsB: Lesson[] = [
  {
    id: 'lesson-9',
    number: 9,
    title: {
      en: 'While & Before It Changes',
      vi: 'Trong khi & Trước khi thay đổi'
    },
    focus: {
      en: 'Do something within a window of time using 〜うちに and 〜ないうちに.',
      vi: 'Làm gì đó trong một khoảng thời gian với 〜うちに và 〜ないうちに.'
    },
    vocab: [
      {
        kana: 'わかい',
        kanji: '若い',
        romaji: 'wakai',
        meaning: { en: 'young', vi: 'trẻ' }
      },
      {
        kana: 'あかるい',
        kanji: '明るい',
        romaji: 'akarui',
        meaning: { en: 'bright, light', vi: 'sáng' }
      },
      {
        kana: 'くらい',
        kanji: '暗い',
        romaji: 'kurai',
        meaning: { en: 'dark', vi: 'tối' }
      },
      {
        kana: 'さめる',
        kanji: '冷める',
        romaji: 'sameru',
        meaning: { en: 'to cool down', vi: 'nguội đi' }
      },
      {
        kana: 'わすれる',
        kanji: '忘れる',
        romaji: 'wasureru',
        meaning: { en: 'to forget', vi: 'quên' }
      },
      {
        kana: 'なれる',
        kanji: '慣れる',
        romaji: 'nareru',
        meaning: { en: 'to get used to', vi: 'quen với' }
      },
      {
        kana: 'るすばん',
        kanji: '留守番',
        romaji: 'rusuban',
        meaning: { en: 'looking after the house', vi: 'trông nhà' }
      },
      {
        kana: 'ひるね',
        kanji: '昼寝',
        romaji: 'hirune',
        meaning: { en: 'nap', vi: 'giấc ngủ trưa' }
      },
      {
        kana: 'あめ',
        kanji: '雨',
        romaji: 'ame',
        meaning: { en: 'rain', vi: 'mưa' }
      },
      {
        kana: 'やむ',
        kanji: '止む',
        romaji: 'yamu',
        meaning: { en: 'to stop (rain)', vi: 'tạnh, ngừng' }
      },
      {
        kana: 'あつい',
        kanji: '熱い',
        romaji: 'atsui',
        meaning: { en: 'hot (to the touch)', vi: 'nóng' }
      },
      {
        kana: 'いまのうちに',
        romaji: 'ima no uchi ni',
        meaning: { en: 'while you still can', vi: 'nhân lúc bây giờ' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る / N の / Adj うちに',
        title: { en: 'While (a state lasts)', vi: 'Trong khi (một trạng thái còn)' },
        explanation: {
          en: 'うちに means "while" a favorable state continues; do the action before that state ends.',
          vi: 'うちに nghĩa là "trong khi" một trạng thái thuận lợi còn kéo dài; hãy làm trước khi nó kết thúc.'
        },
        examples: [
          {
            jp: '若いうちに、いろいろな国を旅行したいです。',
            romaji: 'Wakai uchi ni, iroiro na kuni o ryokō shitai desu.',
            meaning: {
              en: 'While I am young, I want to travel to many countries.',
              vi: 'Khi còn trẻ, tôi muốn đi du lịch nhiều nước.'
            }
          },
          {
            jp: '明るいうちに家に帰りましょう。',
            romaji: 'Akarui uchi ni ie ni kaerimashō.',
            meaning: {
              en: "Let's go home while it is still light.",
              vi: 'Hãy về nhà khi trời còn sáng.'
            }
          }
        ]
      },
      {
        pattern: 'V-ない うちに',
        title: { en: 'Before it happens', vi: 'Trước khi điều gì xảy ra' },
        explanation: {
          en: '〜ないうちに means "before (something) happens" - act before an unwanted change occurs.',
          vi: '〜ないうちに nghĩa là "trước khi (điều gì) xảy ra" - hãy hành động trước khi có thay đổi không mong muốn.'
        },
        examples: [
          {
            jp: '雨が降らないうちに帰りましょう。',
            romaji: 'Ame ga furanai uchi ni kaerimashō.',
            meaning: {
              en: "Let's go home before it rains.",
              vi: 'Hãy về nhà trước khi trời mưa.'
            }
          },
          {
            jp: '忘れないうちにメモしておきます。',
            romaji: 'Wasurenai uchi ni memo shite okimasu.',
            meaning: {
              en: 'I will jot it down before I forget.',
              vi: 'Tôi sẽ ghi chú lại trước khi quên.'
            }
          }
        ]
      },
      {
        pattern: 'あついうちに V',
        title: { en: 'While it is still hot', vi: 'Khi còn nóng' },
        explanation: {
          en: 'A common use with adjectives describing a temporary condition such as あつい (hot).',
          vi: 'Cách dùng thường gặp với tính từ chỉ trạng thái tạm thời như あつい (nóng).'
        },
        examples: [
          {
            jp: 'スープが冷めないうちに飲んでください。',
            romaji: 'Sūpu ga samenai uchi ni nonde kudasai.',
            meaning: {
              en: 'Please drink the soup before it cools down.',
              vi: 'Hãy uống súp trước khi nó nguội.'
            }
          },
          {
            jp: '熱いうちに食べたほうがおいしいです。',
            romaji: 'Atsui uchi ni tabeta hō ga oishii desu.',
            meaning: {
              en: 'It tastes better if you eat it while it is hot.',
              vi: 'Ăn khi còn nóng thì ngon hơn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A rainy afternoon', vi: 'Một buổi chiều mưa' },
        lines: [
          {
            jp: '空が暗くなってきました。',
            romaji: 'Sora ga kuraku natte kimashita.',
            meaning: { en: 'The sky has started to darken.', vi: 'Trời đã bắt đầu tối.' }
          },
          {
            jp: '雨が降らないうちに、買い物に行きます。',
            romaji: 'Ame ga furanai uchi ni, kaimono ni ikimasu.',
            meaning: {
              en: 'I will go shopping before it rains.',
              vi: 'Tôi sẽ đi mua sắm trước khi trời mưa.'
            }
          },
          {
            jp: '明るいうちに帰りたいです。',
            romaji: 'Akarui uchi ni kaeritai desu.',
            meaning: {
              en: 'I want to come home while it is still light.',
              vi: 'Tôi muốn về nhà khi trời còn sáng.'
            }
          },
          {
            jp: '家に着いてから、温かいスープを冷めないうちに飲みました。',
            romaji: 'Ie ni tsuite kara, atatakai sūpu o samenai uchi ni nomimashita.',
            meaning: {
              en: 'After getting home, I drank the warm soup before it cooled down.',
              vi: 'Sau khi về đến nhà, tôi uống súp ấm trước khi nó nguội.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why does the writer hurry to go shopping?',
              vi: 'Tại sao người viết vội đi mua sắm?'
            },
            choices: [
              { id: 'a', label: { en: 'Before it rains', vi: 'Trước khi trời mưa' } },
              { id: 'b', label: { en: 'Before the shop closes', vi: 'Trước khi cửa hàng đóng' } },
              { id: 'c', label: { en: 'Before a friend comes', vi: 'Trước khi bạn đến' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'When did the writer drink the soup?',
              vi: 'Người viết uống súp khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'After it cooled down', vi: 'Sau khi nó nguội' } },
              { id: 'b', label: { en: 'Before it cooled down', vi: 'Trước khi nó nguội' } },
              { id: 'c', label: { en: 'The next morning', vi: 'Sáng hôm sau' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-10',
    number: 10,
    title: {
      en: 'Every Time & While You Are At It',
      vi: 'Mỗi lần & Tiện thể'
    },
    focus: {
      en: 'Link recurring events with 〜たびに and add a bonus action with 〜ついでに.',
      vi: 'Nối các sự việc lặp lại với 〜たびに và thêm hành động tiện thể với 〜ついでに.'
    },
    vocab: [
      {
        kana: 'りょこう',
        kanji: '旅行',
        romaji: 'ryokō',
        meaning: { en: 'travel, trip', vi: 'chuyến du lịch' }
      },
      {
        kana: 'みやげ',
        kanji: '土産',
        romaji: 'miyage',
        meaning: { en: 'souvenir', vi: 'quà lưu niệm' }
      },
      {
        kana: 'さんぽ',
        kanji: '散歩',
        romaji: 'sanpo',
        meaning: { en: 'a walk', vi: 'đi dạo' }
      },
      {
        kana: 'ゆうびんきょく',
        kanji: '郵便局',
        romaji: 'yūbinkyoku',
        meaning: { en: 'post office', vi: 'bưu điện' }
      },
      {
        kana: 'よる',
        kanji: '寄る',
        romaji: 'yoru',
        meaning: { en: 'to drop by', vi: 'ghé qua' }
      },
      {
        kana: 'かいぎ',
        kanji: '会議',
        romaji: 'kaigi',
        meaning: { en: 'meeting', vi: 'cuộc họp' }
      },
      {
        kana: 'おもいだす',
        kanji: '思い出す',
        romaji: 'omoidasu',
        meaning: { en: 'to recall', vi: 'nhớ lại' }
      },
      {
        kana: 'そうじ',
        kanji: '掃除',
        romaji: 'sōji',
        meaning: { en: 'cleaning', vi: 'dọn dẹp' }
      },
      {
        kana: 'まど',
        kanji: '窓',
        romaji: 'mado',
        meaning: { en: 'window', vi: 'cửa sổ' }
      },
      {
        kana: 'あう',
        kanji: '会う',
        romaji: 'au',
        meaning: { en: 'to meet', vi: 'gặp' }
      },
      {
        kana: 'せいちょう',
        kanji: '成長',
        romaji: 'seichō',
        meaning: { en: 'growth', vi: 'sự trưởng thành' }
      },
      {
        kana: 'おどろく',
        kanji: '驚く',
        romaji: 'odoroku',
        meaning: { en: 'to be surprised', vi: 'ngạc nhiên' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る / N の たびに',
        title: { en: 'Every time', vi: 'Mỗi lần' },
        explanation: {
          en: '〜たびに means "every time (something happens), …" - the second clause happens each time.',
          vi: '〜たびに nghĩa là "mỗi lần (điều gì xảy ra), …" - mệnh đề sau xảy ra mỗi lần.'
        },
        examples: [
          {
            jp: '旅行のたびに、お土産を買います。',
            romaji: 'Ryokō no tabi ni, omiyage o kaimasu.',
            meaning: {
              en: 'Every time I travel, I buy souvenirs.',
              vi: 'Mỗi lần đi du lịch, tôi đều mua quà.'
            }
          },
          {
            jp: '彼に会うたびに、その話を思い出します。',
            romaji: 'Kare ni au tabi ni, sono hanashi o omoidashimasu.',
            meaning: {
              en: 'Every time I meet him, I recall that story.',
              vi: 'Mỗi lần gặp anh ấy, tôi lại nhớ tới câu chuyện đó.'
            }
          }
        ]
      },
      {
        pattern: 'V-る / N の ついでに',
        title: { en: 'While you are at it', vi: 'Tiện thể' },
        explanation: {
          en: '〜ついでに means "while doing A, also do B" - B is a convenient extra during A.',
          vi: '〜ついでに nghĩa là "nhân tiện làm A thì làm luôn B" - B là việc làm thêm thuận tiện.'
        },
        examples: [
          {
            jp: '散歩のついでに、郵便局に寄りました。',
            romaji: 'Sanpo no tsuide ni, yūbinkyoku ni yorimashita.',
            meaning: {
              en: 'While I was out for a walk, I dropped by the post office.',
              vi: 'Tiện đi dạo, tôi ghé qua bưu điện.'
            }
          },
          {
            jp: '掃除をするついでに、窓も拭きました。',
            romaji: 'Sōji o suru tsuide ni, mado mo fukimashita.',
            meaning: {
              en: 'While cleaning, I also wiped the windows.',
              vi: 'Tiện dọn dẹp, tôi lau luôn cửa sổ.'
            }
          }
        ]
      },
      {
        pattern: 'V-る たびに、変化',
        title: { en: 'Noticing change each time', vi: 'Nhận ra thay đổi mỗi lần' },
        explanation: {
          en: '〜たびに often shows a gradual change noticed on each occasion.',
          vi: '〜たびに thường diễn tả sự thay đổi dần dần được nhận ra qua mỗi lần.'
        },
        examples: [
          {
            jp: '会うたびに、子どもの成長に驚きます。',
            romaji: 'Au tabi ni, kodomo no seichō ni odorokimasu.',
            meaning: {
              en: "Every time I see them, I am surprised at the child's growth.",
              vi: 'Mỗi lần gặp, tôi đều ngạc nhiên về sự lớn lên của đứa bé.'
            }
          },
          {
            jp: 'この曲を聞くたびに、ふるさとを思い出します。',
            romaji: 'Kono kyoku o kiku tabi ni, furusato o omoidashimasu.',
            meaning: {
              en: 'Every time I hear this song, I remember my hometown.',
              vi: 'Mỗi lần nghe bài hát này, tôi lại nhớ quê.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A weekend errand', vi: 'Việc vặt cuối tuần' },
        lines: [
          {
            jp: '私は週末に散歩をするのが好きです。',
            romaji: 'Watashi wa shūmatsu ni sanpo o suru no ga suki desu.',
            meaning: {
              en: 'I like taking walks on weekends.',
              vi: 'Tôi thích đi dạo vào cuối tuần.'
            }
          },
          {
            jp: '散歩のついでに、郵便局に寄って手紙を出しました。',
            romaji: 'Sanpo no tsuide ni, yūbinkyoku ni yotte tegami o dashimashita.',
            meaning: {
              en: 'While walking, I dropped by the post office and mailed a letter.',
              vi: 'Tiện đi dạo, tôi ghé bưu điện gửi thư.'
            }
          },
          {
            jp: '友だちに会うたびに、旅行の話をします。',
            romaji: 'Tomodachi ni au tabi ni, ryokō no hanashi o shimasu.',
            meaning: {
              en: 'Every time I meet my friend, we talk about traveling.',
              vi: 'Mỗi lần gặp bạn, chúng tôi đều nói về du lịch.'
            }
          },
          {
            jp: '今度の旅行のついでに、お土産も買うつもりです。',
            romaji: 'Kondo no ryokō no tsuide ni, omiyage mo kau tsumori desu.',
            meaning: {
              en: 'On my next trip, I also plan to buy souvenirs while I am at it.',
              vi: 'Chuyến du lịch tới, tôi tính tiện thể mua luôn quà.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the writer do while walking?',
              vi: 'Người viết làm gì khi đi dạo?'
            },
            choices: [
              { id: 'a', label: { en: 'Mailed a letter', vi: 'Gửi thư' } },
              { id: 'b', label: { en: 'Bought souvenirs', vi: 'Mua quà' } },
              { id: 'c', label: { en: 'Cleaned the windows', vi: 'Lau cửa sổ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happens every time the writer meets the friend?',
              vi: 'Mỗi lần gặp bạn thì điều gì xảy ra?'
            },
            choices: [
              { id: 'a', label: { en: 'They talk about travel', vi: 'Họ nói về du lịch' } },
              { id: 'b', label: { en: 'They go to the post office', vi: 'Họ đi bưu điện' } },
              { id: 'c', label: { en: 'They clean the house', vi: 'Họ dọn nhà' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-11',
    number: 11,
    title: {
      en: 'On the Occasion & In the Process',
      vi: 'Vào dịp & Trong quá trình'
    },
    focus: {
      en: 'Use formal 〜際(に) for occasions and 〜上で for purpose or process.',
      vi: 'Dùng 〜際(に) trang trọng cho dịp và 〜上で cho mục đích hay quá trình.'
    },
    vocab: [
      {
        kana: 'てつづき',
        kanji: '手続き',
        romaji: 'tetsuzuki',
        meaning: { en: 'procedure', vi: 'thủ tục' }
      },
      {
        kana: 'みぶんしょうめいしょ',
        kanji: '身分証明書',
        romaji: 'mibunshōmeisho',
        meaning: { en: 'ID card', vi: 'giấy tờ tùy thân' }
      },
      {
        kana: 'ひつよう',
        kanji: '必要',
        romaji: 'hitsuyō',
        meaning: { en: 'necessary', vi: 'cần thiết' }
      },
      {
        kana: 'けいやく',
        kanji: '契約',
        romaji: 'keiyaku',
        meaning: { en: 'contract', vi: 'hợp đồng' }
      },
      {
        kana: 'けんとう',
        kanji: '検討',
        romaji: 'kentō',
        meaning: { en: 'consideration, review', vi: 'sự xem xét' }
      },
      {
        kana: 'りかい',
        kanji: '理解',
        romaji: 'rikai',
        meaning: { en: 'understanding', vi: 'sự hiểu' }
      },
      {
        kana: 'はんだん',
        kanji: '判断',
        romaji: 'handan',
        meaning: { en: 'judgment, decision', vi: 'sự phán đoán' }
      },
      {
        kana: 'りよう',
        kanji: '利用',
        romaji: 'riyō',
        meaning: { en: 'use, utilization', vi: 'sự sử dụng' }
      },
      {
        kana: 'たいざい',
        kanji: '滞在',
        romaji: 'taizai',
        meaning: { en: 'stay', vi: 'sự lưu trú' }
      },
      {
        kana: 'ちゅうい',
        kanji: '注意',
        romaji: 'chūi',
        meaning: { en: 'caution', vi: 'sự lưu ý' }
      },
      {
        kana: 'ていしゅつ',
        kanji: '提出',
        romaji: 'teishutsu',
        meaning: { en: 'submission', vi: 'sự nộp' }
      },
      {
        kana: 'かくにん',
        kanji: '確認',
        romaji: 'kakunin',
        meaning: { en: 'confirmation', vi: 'sự xác nhận' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る / V-た / N の 際(に)',
        title: { en: 'On the occasion of', vi: 'Vào dịp, khi' },
        explanation: {
          en: '〜際(に) is a formal way to say "when / on the occasion of"; common in notices and business.',
          vi: '〜際(に) là cách nói trang trọng cho "khi / vào dịp"; thường gặp trong thông báo, công việc.'
        },
        examples: [
          {
            jp: 'お申し込みの際に、身分証明書が必要です。',
            romaji: 'O-mōshikomi no sai ni, mibunshōmeisho ga hitsuyō desu.',
            meaning: {
              en: 'When you apply, an ID card is required.',
              vi: 'Khi đăng ký, cần có giấy tờ tùy thân.'
            }
          },
          {
            jp: '退室する際は、電気を消してください。',
            romaji: 'Taishitsu suru sai wa, denki o keshite kudasai.',
            meaning: {
              en: 'When you leave the room, please turn off the lights.',
              vi: 'Khi ra khỏi phòng, hãy tắt đèn.'
            }
          }
        ]
      },
      {
        pattern: 'V-た / N の 上で',
        title: { en: 'After / upon doing', vi: 'Sau khi, trên cơ sở' },
        explanation: {
          en: '〜上で after a verb means "after doing A, then B"; A is a prerequisite step for B.',
          vi: '〜上で sau động từ nghĩa là "sau khi làm A rồi mới B"; A là bước tiền đề cho B.'
        },
        examples: [
          {
            jp: 'よく検討した上で、お返事します。',
            romaji: 'Yoku kentō shita ue de, o-henji shimasu.',
            meaning: {
              en: 'I will reply after carefully considering it.',
              vi: 'Tôi sẽ trả lời sau khi xem xét kỹ.'
            }
          },
          {
            jp: '内容を確認した上で、契約してください。',
            romaji: 'Naiyō o kakunin shita ue de, keiyaku shite kudasai.',
            meaning: {
              en: 'Please sign the contract after confirming its contents.',
              vi: 'Hãy ký hợp đồng sau khi đã xác nhận nội dung.'
            }
          }
        ]
      },
      {
        pattern: 'V-る 上で',
        title: { en: 'For the purpose of', vi: 'Để, trong việc' },
        explanation: {
          en: 'With a dictionary-form verb, 〜上で means "in the process of / when it comes to" doing something.',
          vi: 'Với động từ nguyên dạng, 〜上で nghĩa là "trong quá trình / khi nói đến việc" làm gì đó.'
        },
        examples: [
          {
            jp: '日本で生活する上で、漢字の理解は大切です。',
            romaji: 'Nihon de seikatsu suru ue de, kanji no rikai wa taisetsu desu.',
            meaning: {
              en: 'When living in Japan, understanding kanji is important.',
              vi: 'Để sống ở Nhật, việc hiểu kanji là quan trọng.'
            }
          },
          {
            jp: '判断する上で、必要な情報を集めます。',
            romaji: 'Handan suru ue de, hitsuyō na jōhō o atsumemasu.',
            meaning: {
              en: 'I gather the information needed in order to make a decision.',
              vi: 'Tôi thu thập thông tin cần thiết để đưa ra phán đoán.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Opening an account', vi: 'Mở tài khoản' },
        lines: [
          {
            jp: '口座を作る際には、身分証明書が必要です。',
            romaji: 'Kōza o tsukuru sai ni wa, mibunshōmeisho ga hitsuyō desu.',
            meaning: {
              en: 'When opening an account, an ID card is required.',
              vi: 'Khi mở tài khoản, cần có giấy tờ tùy thân.'
            }
          },
          {
            jp: '書類を確認した上で、申し込みをしてください。',
            romaji: 'Shorui o kakunin shita ue de, mōshikomi o shite kudasai.',
            meaning: {
              en: 'Please apply after checking the documents.',
              vi: 'Hãy đăng ký sau khi đã kiểm tra giấy tờ.'
            }
          },
          {
            jp: '日本で生活する上で、銀行口座はとても便利です。',
            romaji: 'Nihon de seikatsu suru ue de, ginkō kōza wa totemo benri desu.',
            meaning: {
              en: 'When living in Japan, a bank account is very convenient.',
              vi: 'Để sống ở Nhật, tài khoản ngân hàng rất tiện lợi.'
            }
          },
          {
            jp: '手続きの際は、係の人に注意して聞きましょう。',
            romaji: 'Tetsuzuki no sai wa, kakari no hito ni chūi shite kikimashō.',
            meaning: {
              en: 'During the procedure, listen carefully to the staff.',
              vi: 'Khi làm thủ tục, hãy chú ý nghe nhân viên hướng dẫn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is required when opening an account?',
              vi: 'Khi mở tài khoản cần gì?'
            },
            choices: [
              { id: 'a', label: { en: 'An ID card', vi: 'Giấy tờ tùy thân' } },
              { id: 'b', label: { en: 'A souvenir', vi: 'Quà lưu niệm' } },
              { id: 'c', label: { en: 'A contract pen', vi: 'Bút ký hợp đồng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What should you do before applying?',
              vi: 'Trước khi đăng ký nên làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Check the documents', vi: 'Kiểm tra giấy tờ' } },
              { id: 'b', label: { en: 'Turn off the lights', vi: 'Tắt đèn' } },
              { id: 'c', label: { en: 'Take a nap', vi: 'Ngủ trưa' } }
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
    title: {
      en: 'Right at That Moment',
      vi: 'Ngay lúc đó'
    },
    focus: {
      en: 'Mark the exact moment an action is interrupted with 〜ところに / 〜ところへ / 〜ところを.',
      vi: 'Đánh dấu đúng thời điểm một hành động bị ngắt với 〜ところに / 〜ところへ / 〜ところを.'
    },
    vocab: [
      {
        kana: 'でかける',
        kanji: '出かける',
        romaji: 'dekakeru',
        meaning: { en: 'to go out', vi: 'ra ngoài' }
      },
      {
        kana: 'でんわ',
        kanji: '電話',
        romaji: 'denwa',
        meaning: { en: 'phone call', vi: 'điện thoại' }
      },
      {
        kana: 'なる',
        kanji: '鳴る',
        romaji: 'naru',
        meaning: { en: 'to ring', vi: 'reo, kêu' }
      },
      {
        kana: 'ねぼう',
        kanji: '寝坊',
        romaji: 'nebō',
        meaning: { en: 'oversleeping', vi: 'ngủ quên' }
      },
      {
        kana: 'みつける',
        kanji: '見つける',
        romaji: 'mitsukeru',
        meaning: { en: 'to find', vi: 'tìm thấy' }
      },
      {
        kana: 'よびとめる',
        kanji: '呼び止める',
        romaji: 'yobitomeru',
        meaning: { en: 'to call out and stop', vi: 'gọi lại' }
      },
      {
        kana: 'たすける',
        kanji: '助ける',
        romaji: 'tasukeru',
        meaning: { en: 'to help, rescue', vi: 'giúp, cứu' }
      },
      {
        kana: 'けいかん',
        kanji: '警官',
        romaji: 'keikan',
        meaning: { en: 'police officer', vi: 'cảnh sát' }
      },
      {
        kana: 'にげる',
        kanji: '逃げる',
        romaji: 'nigeru',
        meaning: { en: 'to flee', vi: 'chạy trốn' }
      },
      {
        kana: 'つかまえる',
        kanji: '捕まえる',
        romaji: 'tsukamaeru',
        meaning: { en: 'to catch', vi: 'bắt giữ' }
      },
      {
        kana: 'ちょうど',
        romaji: 'chōdo',
        meaning: { en: 'exactly, just', vi: 'vừa đúng' }
      },
      {
        kana: 'まさに',
        romaji: 'masa ni',
        meaning: { en: 'precisely', vi: 'đúng lúc' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る / V-ている ところに / ところへ',
        title: { en: 'Just as (something arrives)', vi: 'Đúng lúc (có gì đó tới)' },
        explanation: {
          en: '〜ところに/〜ところへ marks the moment an event breaks in on what you are doing.',
          vi: '〜ところに/〜ところへ đánh dấu khoảnh khắc một sự việc xen vào việc bạn đang làm.'
        },
        examples: [
          {
            jp: '出かけるところに、電話が鳴りました。',
            romaji: 'Dekakeru tokoro ni, denwa ga narimashita.',
            meaning: {
              en: 'Just as I was about to go out, the phone rang.',
              vi: 'Đúng lúc tôi định ra ngoài thì điện thoại reo.'
            }
          },
          {
            jp: '困っているところへ、友だちが来てくれました。',
            romaji: 'Komatte iru tokoro e, tomodachi ga kite kuremashita.',
            meaning: {
              en: 'Just when I was in trouble, a friend came for me.',
              vi: 'Đúng lúc tôi đang gặp khó thì bạn đến giúp.'
            }
          }
        ]
      },
      {
        pattern: 'V-ている ところを',
        title: { en: 'Caught in the act', vi: 'Đúng lúc đang làm' },
        explanation: {
          en: '〜ところを marks the action as the object that someone sees, catches, or stops.',
          vi: '〜ところを đánh dấu hành động như đối tượng mà ai đó nhìn thấy, bắt được hoặc chặn lại.'
        },
        examples: [
          {
            jp: '逃げるところを、警官に捕まえられました。',
            romaji: 'Nigeru tokoro o, keikan ni tsukamaeraremashita.',
            meaning: {
              en: 'He was caught by a police officer as he was fleeing.',
              vi: 'Anh ta bị cảnh sát bắt ngay khi đang chạy trốn.'
            }
          },
          {
            jp: '寝ているところを、母に起こされました。',
            romaji: 'Nete iru tokoro o, haha ni okosaremashita.',
            meaning: {
              en: 'I was woken up by my mother while sleeping.',
              vi: 'Tôi bị mẹ đánh thức ngay khi đang ngủ.'
            }
          }
        ]
      },
      {
        pattern: 'V-た ところに',
        title: { en: 'Right after finishing', vi: 'Ngay sau khi xong' },
        explanation: {
          en: 'With a past verb, 〜ところに means an event happens right after the action is completed.',
          vi: 'Với động từ quá khứ, 〜ところに nghĩa là một sự việc xảy ra ngay sau khi hành động hoàn tất.'
        },
        examples: [
          {
            jp: '家を出たところに、雨が降ってきました。',
            romaji: 'Ie o deta tokoro ni, ame ga futte kimashita.',
            meaning: {
              en: 'Right after I left the house, it started to rain.',
              vi: 'Ngay sau khi ra khỏi nhà thì trời đổ mưa.'
            }
          },
          {
            jp: '料理ができたところに、お客さんが来ました。',
            romaji: 'Ryōri ga dekita tokoro ni, o-kyaku-san ga kimashita.',
            meaning: {
              en: 'Just as the food was ready, a guest arrived.',
              vi: 'Đúng lúc món ăn xong thì khách đến.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A busy morning', vi: 'Một buổi sáng bận rộn' },
        lines: [
          {
            jp: '今朝、寝坊して急いでいました。',
            romaji: 'Kesa, nebō shite isoide imashita.',
            meaning: {
              en: 'This morning I overslept and was in a hurry.',
              vi: 'Sáng nay tôi ngủ quên nên vội vàng.'
            }
          },
          {
            jp: '家を出るところに、電話が鳴りました。',
            romaji: 'Ie o deru tokoro ni, denwa ga narimashita.',
            meaning: {
              en: 'Just as I was leaving the house, the phone rang.',
              vi: 'Đúng lúc tôi ra khỏi nhà thì điện thoại reo.'
            }
          },
          {
            jp: '急いで駅に向かっているところを、友だちに呼び止められました。',
            romaji: 'Isoide eki ni mukatte iru tokoro o, tomodachi ni yobitomeraremashita.',
            meaning: {
              en: 'While I was hurrying to the station, a friend called out and stopped me.',
              vi: 'Khi tôi đang vội ra ga thì bị bạn gọi lại.'
            }
          },
          {
            jp: 'ちょうど駅に着いたところに、電車が来ました。',
            romaji: 'Chōdo eki ni tsuita tokoro ni, densha ga kimashita.',
            meaning: {
              en: 'Right as I reached the station, the train arrived.',
              vi: 'Vừa đúng lúc tôi tới ga thì tàu đến.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened as the writer was leaving home?',
              vi: 'Điều gì xảy ra khi người viết ra khỏi nhà?'
            },
            choices: [
              { id: 'a', label: { en: 'The phone rang', vi: 'Điện thoại reo' } },
              { id: 'b', label: { en: 'It started raining', vi: 'Trời đổ mưa' } },
              { id: 'c', label: { en: 'A guest arrived', vi: 'Khách đến' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened right as the writer reached the station?',
              vi: 'Điều gì xảy ra ngay khi người viết tới ga?'
            },
            choices: [
              { id: 'a', label: { en: 'A friend called out', vi: 'Bạn gọi lại' } },
              { id: 'b', label: { en: 'The train arrived', vi: 'Tàu đến' } },
              { id: 'c', label: { en: 'The phone rang again', vi: 'Điện thoại lại reo' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-13',
    number: 13,
    title: {
      en: 'Just As I Was Told',
      vi: 'Đúng như đã được dặn'
    },
    focus: {
      en: 'Say that something is done exactly as described using 〜とおり(に).',
      vi: 'Diễn đạt làm đúng như đã mô tả với 〜とおり(に).'
    },
    vocab: [
      {
        kana: 'せつめい',
        kanji: '説明',
        romaji: 'setsumei',
        meaning: { en: 'explanation', vi: 'sự giải thích' }
      },
      {
        kana: 'しじ',
        kanji: '指示',
        romaji: 'shiji',
        meaning: { en: 'instructions', vi: 'chỉ thị' }
      },
      {
        kana: 'よそう',
        kanji: '予想',
        romaji: 'yosō',
        meaning: { en: 'expectation', vi: 'dự đoán' }
      },
      {
        kana: 'レシピ',
        romaji: 'reshipi',
        meaning: { en: 'recipe', vi: 'công thức' }
      },
      {
        kana: 'くみたてる',
        kanji: '組み立てる',
        romaji: 'kumitateru',
        meaning: { en: 'to assemble', vi: 'lắp ráp' }
      },
      {
        kana: 'すすむ',
        kanji: '進む',
        romaji: 'susumu',
        meaning: { en: 'to proceed', vi: 'tiến triển' }
      },
      {
        kana: 'ちず',
        kanji: '地図',
        romaji: 'chizu',
        meaning: { en: 'map', vi: 'bản đồ' }
      },
      {
        kana: 'やくそく',
        kanji: '約束',
        romaji: 'yakusoku',
        meaning: { en: 'promise', vi: 'lời hứa' }
      },
      {
        kana: 'まちがえる',
        kanji: '間違える',
        romaji: 'machigaeru',
        meaning: { en: 'to make a mistake', vi: 'làm sai' }
      },
      {
        kana: 'てじゅん',
        kanji: '手順',
        romaji: 'tejun',
        meaning: { en: 'steps, procedure', vi: 'trình tự' }
      },
      {
        kana: 'まなぶ',
        kanji: '学ぶ',
        romaji: 'manabu',
        meaning: { en: 'to learn', vi: 'học' }
      },
      {
        kana: 'かんせい',
        kanji: '完成',
        romaji: 'kansei',
        meaning: { en: 'completion', vi: 'sự hoàn thành' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る / V-た とおり(に)',
        title: { en: 'Just as (someone did)', vi: 'Đúng như (ai đó đã làm)' },
        explanation: {
          en: '〜とおりに means "in the way that"; the action matches what was said, shown, or done.',
          vi: '〜とおりに nghĩa là "theo cách mà"; hành động khớp với điều đã nói, đã chỉ, hay đã làm.'
        },
        examples: [
          {
            jp: '先生が言ったとおりに、書いてみました。',
            romaji: 'Sensei ga itta tōri ni, kaite mimashita.',
            meaning: {
              en: 'I tried writing it just as the teacher said.',
              vi: 'Tôi đã thử viết đúng như cô giáo dặn.'
            }
          },
          {
            jp: 'レシピのとおりに作れば、失敗しません。',
            romaji: 'Reshipi no tōri ni tsukureba, shippai shimasen.',
            meaning: {
              en: 'If you cook exactly by the recipe, you will not fail.',
              vi: 'Nếu nấu đúng theo công thức thì sẽ không thất bại.'
            }
          }
        ]
      },
      {
        pattern: 'N の とおり(に)',
        title: { en: 'According to (a noun)', vi: 'Theo (danh từ)' },
        explanation: {
          en: 'After a noun use 〜のとおりに to mean "according to that map / plan / instructions".',
          vi: 'Sau danh từ dùng 〜のとおりに để nói "theo bản đồ / kế hoạch / chỉ thị đó".'
        },
        examples: [
          {
            jp: '地図のとおりに歩いたら、駅に着きました。',
            romaji: 'Chizu no tōri ni aruitara, eki ni tsukimashita.',
            meaning: {
              en: 'When I walked according to the map, I reached the station.',
              vi: 'Đi theo đúng bản đồ, tôi đã tới được nhà ga.'
            }
          },
          {
            jp: '指示のとおりに、手続きを進めてください。',
            romaji: 'Shiji no tōri ni, tetsuzuki o susumete kudasai.',
            meaning: {
              en: 'Please proceed with the procedure as instructed.',
              vi: 'Hãy tiến hành thủ tục theo đúng chỉ thị.'
            }
          }
        ]
      },
      {
        pattern: '予想 / 思った とおり',
        title: { en: 'Just as expected', vi: 'Đúng như dự đoán' },
        explanation: {
          en: '〜とおり often expresses that an outcome matched what you expected or thought.',
          vi: '〜とおり thường diễn tả kết quả khớp với điều bạn dự đoán hoặc nghĩ.'
        },
        examples: [
          {
            jp: '予想したとおり、試験は難しかったです。',
            romaji: 'Yosō shita tōri, shiken wa muzukashikatta desu.',
            meaning: {
              en: 'Just as I expected, the exam was difficult.',
              vi: 'Đúng như tôi dự đoán, bài thi rất khó.'
            }
          },
          {
            jp: '思ったとおり、彼は約束を守りました。',
            romaji: 'Omotta tōri, kare wa yakusoku o mamorimashita.',
            meaning: {
              en: 'Just as I thought, he kept his promise.',
              vi: 'Đúng như tôi nghĩ, anh ấy đã giữ lời hứa.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Assembling a desk', vi: 'Lắp ráp một chiếc bàn' },
        lines: [
          {
            jp: '新しい机を買ったので、自分で組み立てました。',
            romaji: 'Atarashii tsukue o katta node, jibun de kumitatemashita.',
            meaning: {
              en: 'I bought a new desk, so I assembled it myself.',
              vi: 'Vì mua bàn mới nên tôi tự lắp ráp.'
            }
          },
          {
            jp: '説明書のとおりに、手順を進めました。',
            romaji: 'Setsumeisho no tōri ni, tejun o susumemashita.',
            meaning: {
              en: 'I followed the steps just as the manual said.',
              vi: 'Tôi làm theo đúng trình tự trong sách hướng dẫn.'
            }
          },
          {
            jp: '思ったとおり、すぐに完成しました。',
            romaji: 'Omotta tōri, sugu ni kansei shimashita.',
            meaning: {
              en: 'Just as I thought, it was finished quickly.',
              vi: 'Đúng như tôi nghĩ, nó hoàn thành rất nhanh.'
            }
          },
          {
            jp: '指示のとおりに作れば、間違えません。',
            romaji: 'Shiji no tōri ni tsukureba, machigaemasen.',
            meaning: {
              en: 'If you build it as instructed, you will not make mistakes.',
              vi: 'Nếu làm theo đúng chỉ dẫn thì sẽ không sai.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the writer assemble the desk?',
              vi: 'Người viết lắp bàn như thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'By following the manual', vi: 'Theo sách hướng dẫn' } },
              { id: 'b', label: { en: 'By asking a friend', vi: 'Bằng cách nhờ bạn' } },
              { id: 'c', label: { en: 'By guessing', vi: 'Bằng cách đoán' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How did the assembly turn out?',
              vi: 'Việc lắp ráp diễn ra ra sao?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It finished quickly, as expected', vi: 'Xong nhanh, đúng như nghĩ' }
              },
              { id: 'b', label: { en: 'It failed', vi: 'Thất bại' } },
              { id: 'c', label: { en: 'It took several days', vi: 'Mất vài ngày' } }
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
    title: {
      en: 'Leaving Things As They Are',
      vi: 'Để nguyên trạng thái'
    },
    focus: {
      en: 'Describe a state left unchanged with 〜まま.',
      vi: 'Miêu tả trạng thái để nguyên không đổi với 〜まま.'
    },
    vocab: [
      {
        kana: 'つける',
        kanji: '付ける',
        romaji: 'tsukeru',
        meaning: { en: 'to turn on', vi: 'bật' }
      },
      {
        kana: 'けす',
        kanji: '消す',
        romaji: 'kesu',
        meaning: { en: 'to turn off', vi: 'tắt' }
      },
      {
        kana: 'あける',
        kanji: '開ける',
        romaji: 'akeru',
        meaning: { en: 'to open', vi: 'mở' }
      },
      {
        kana: 'くつ',
        kanji: '靴',
        romaji: 'kutsu',
        meaning: { en: 'shoes', vi: 'giày' }
      },
      {
        kana: 'はく',
        kanji: '履く',
        romaji: 'haku',
        meaning: { en: 'to wear (shoes)', vi: 'đi (giày)' }
      },
      {
        kana: 'たつ',
        kanji: '立つ',
        romaji: 'tatsu',
        meaning: { en: 'to stand', vi: 'đứng' }
      },
      {
        kana: 'すわる',
        kanji: '座る',
        romaji: 'suwaru',
        meaning: { en: 'to sit', vi: 'ngồi' }
      },
      {
        kana: 'むかし',
        kanji: '昔',
        romaji: 'mukashi',
        meaning: { en: 'long ago', vi: 'ngày xưa' }
      },
      {
        kana: 'かわる',
        kanji: '変わる',
        romaji: 'kawaru',
        meaning: { en: 'to change', vi: 'thay đổi' }
      },
      {
        kana: 'でんき',
        kanji: '電気',
        romaji: 'denki',
        meaning: { en: 'light, electricity', vi: 'đèn, điện' }
      },
      {
        kana: 'まど',
        kanji: '窓',
        romaji: 'mado',
        meaning: { en: 'window', vi: 'cửa sổ' }
      },
      {
        kana: 'ねむる',
        kanji: '眠る',
        romaji: 'nemuru',
        meaning: { en: 'to fall asleep', vi: 'ngủ thiếp' }
      }
    ],
    grammar: [
      {
        pattern: 'V-た まま',
        title: {
          en: 'In the state left after an action',
          vi: 'Trong trạng thái còn lại sau hành động'
        },
        explanation: {
          en: '〜たまま means doing something while a previous state is left unchanged (often unintended).',
          vi: '〜たまま nghĩa là làm gì đó trong khi vẫn để nguyên trạng thái trước (thường ngoài ý muốn).'
        },
        examples: [
          {
            jp: '電気をつけたまま、寝てしまいました。',
            romaji: 'Denki o tsuketa mama, nete shimaimashita.',
            meaning: {
              en: 'I fell asleep with the light left on.',
              vi: 'Tôi ngủ thiếp đi mà vẫn để đèn bật.'
            }
          },
          {
            jp: '窓を開けたまま、出かけました。',
            romaji: 'Mado o aketa mama, dekakemashita.',
            meaning: {
              en: 'I went out with the window left open.',
              vi: 'Tôi ra ngoài mà vẫn để cửa sổ mở.'
            }
          }
        ]
      },
      {
        pattern: 'N の / Adj まま',
        title: { en: 'Staying the same', vi: 'Giữ nguyên như cũ' },
        explanation: {
          en: 'After a noun (の) or adjective, 〜まま means "in that same state, unchanged".',
          vi: 'Sau danh từ (の) hoặc tính từ, 〜まま nghĩa là "trong cùng trạng thái đó, không đổi".'
        },
        examples: [
          {
            jp: 'この町は昔のまま、何も変わっていません。',
            romaji: 'Kono machi wa mukashi no mama, nani mo kawatte imasen.',
            meaning: {
              en: 'This town is just as it was long ago; nothing has changed.',
              vi: 'Thị trấn này vẫn như xưa, không có gì thay đổi.'
            }
          },
          {
            jp: '熱いまま食べると、口をやけどします。',
            romaji: 'Atsui mama taberu to, kuchi o yakedo shimasu.',
            meaning: {
              en: 'If you eat it while still hot, you will burn your mouth.',
              vi: 'Nếu ăn khi còn nóng, bạn sẽ bị bỏng miệng.'
            }
          }
        ]
      },
      {
        pattern: 'V-た まま V',
        title: { en: 'Doing B without undoing A', vi: 'Làm B mà không thay đổi A' },
        explanation: {
          en: 'A second action is done without resetting the first state, often awkwardly or rudely.',
          vi: 'Hành động thứ hai được làm mà không thay đổi trạng thái đầu, thường vụng về hay bất lịch sự.'
        },
        examples: [
          {
            jp: '靴を履いたまま、部屋に入らないでください。',
            romaji: 'Kutsu o haita mama, heya ni hairanaide kudasai.',
            meaning: {
              en: 'Please do not enter the room with your shoes on.',
              vi: 'Xin đừng vào phòng khi vẫn đi giày.'
            }
          },
          {
            jp: '立ったまま話を聞きました。',
            romaji: 'Tatta mama hanashi o kikimashita.',
            meaning: {
              en: 'I listened to the talk while standing.',
              vi: 'Tôi đứng nghe câu chuyện.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A tired night', vi: 'Một đêm mệt mỏi' },
        lines: [
          {
            jp: '昨夜はとても疲れていました。',
            romaji: 'Sakuya wa totemo tsukarete imashita.',
            meaning: { en: 'Last night I was very tired.', vi: 'Đêm qua tôi rất mệt.' }
          },
          {
            jp: '電気をつけたまま、ソファで眠ってしまいました。',
            romaji: 'Denki o tsuketa mama, sofa de nemutte shimaimashita.',
            meaning: {
              en: 'I fell asleep on the sofa with the light left on.',
              vi: 'Tôi ngủ thiếp trên ghế sofa mà vẫn để đèn bật.'
            }
          },
          {
            jp: '窓も開けたままだったので、朝は寒かったです。',
            romaji: 'Mado mo aketa mama datta node, asa wa samukatta desu.',
            meaning: {
              en: 'The window was also left open, so the morning was cold.',
              vi: 'Cửa sổ cũng để mở nên buổi sáng rất lạnh.'
            }
          },
          {
            jp: '靴を履いたまま寝ていたことに、あとで気づきました。',
            romaji: 'Kutsu o haita mama nete ita koto ni, ato de kizukimashita.',
            meaning: {
              en: 'I later realized I had slept with my shoes still on.',
              vi: 'Sau đó tôi mới nhận ra mình đã ngủ mà vẫn đi giày.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the writer fall asleep?',
              vi: 'Người viết ngủ thiếp như thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'With the light left on', vi: 'Vẫn để đèn bật' } },
              { id: 'b', label: { en: 'With the light off', vi: 'Đã tắt đèn' } },
              { id: 'c', label: { en: 'In bed', vi: 'Trên giường' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why was the morning cold?',
              vi: 'Tại sao buổi sáng lạnh?'
            },
            choices: [
              { id: 'a', label: { en: 'The window was left open', vi: 'Cửa sổ để mở' } },
              { id: 'b', label: { en: 'It was snowing', vi: 'Trời có tuyết' } },
              { id: 'c', label: { en: 'The heater broke', vi: 'Máy sưởi hỏng' } }
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
    title: {
      en: 'Doing It Completely',
      vi: 'Làm cho xong hẳn'
    },
    focus: {
      en: 'Express finishing fully or failing to with 〜きる / 〜きれる / 〜きれない.',
      vi: 'Diễn đạt làm xong trọn vẹn hoặc không thể với 〜きる / 〜きれる / 〜きれない.'
    },
    vocab: [
      {
        kana: 'たべきる',
        kanji: '食べ切る',
        romaji: 'tabekiru',
        meaning: { en: 'to eat all up', vi: 'ăn hết' }
      },
      {
        kana: 'つかいきる',
        kanji: '使い切る',
        romaji: 'tsukaikiru',
        meaning: { en: 'to use up', vi: 'dùng hết' }
      },
      {
        kana: 'はしりきる',
        kanji: '走り切る',
        romaji: 'hashirikiru',
        meaning: { en: 'to run all the way', vi: 'chạy hết quãng đường' }
      },
      {
        kana: 'りょう',
        kanji: '量',
        romaji: 'ryō',
        meaning: { en: 'amount, quantity', vi: 'lượng' }
      },
      {
        kana: 'おおい',
        kanji: '多い',
        romaji: 'ōi',
        meaning: { en: 'many, a lot', vi: 'nhiều' }
      },
      {
        kana: 'マラソン',
        romaji: 'marason',
        meaning: { en: 'marathon', vi: 'chạy ma-ra-tông' }
      },
      {
        kana: 'さいご',
        kanji: '最後',
        romaji: 'saigo',
        meaning: { en: 'the end, last', vi: 'cuối cùng' }
      },
      {
        kana: 'がんばる',
        kanji: '頑張る',
        romaji: 'ganbaru',
        meaning: { en: 'to do one\u2019s best', vi: 'cố gắng' }
      },
      {
        kana: 'のこる',
        kanji: '残る',
        romaji: 'nokoru',
        meaning: { en: 'to be left over', vi: 'còn lại' }
      },
      {
        kana: 'おぼえる',
        kanji: '覚える',
        romaji: 'oboeru',
        meaning: { en: 'to memorize', vi: 'ghi nhớ' }
      },
      {
        kana: 'たんご',
        kanji: '単語',
        romaji: 'tango',
        meaning: { en: 'vocabulary word', vi: 'từ vựng' }
      },
      {
        kana: 'よみおわる',
        kanji: '読み終わる',
        romaji: 'yomiowaru',
        meaning: { en: 'to finish reading', vi: 'đọc xong' }
      }
    ],
    grammar: [
      {
        pattern: 'V-ます-stem ＋ きる',
        title: { en: 'To do completely', vi: 'Làm cho xong hẳn' },
        explanation: {
          en: '〜きる attaches to a verb stem and means to do the action thoroughly, to the very end.',
          vi: '〜きる gắn vào thân động từ, nghĩa là làm hành động một cách trọn vẹn, đến tận cùng.'
        },
        examples: [
          {
            jp: '料理が多かったですが、全部食べきりました。',
            romaji: 'Ryōri ga ōkatta desu ga, zenbu tabekirimashita.',
            meaning: {
              en: 'There was a lot of food, but I ate it all up.',
              vi: 'Món ăn nhiều nhưng tôi đã ăn hết sạch.'
            }
          },
          {
            jp: '今月のお金を使いきってしまいました。',
            romaji: 'Kongetsu no o-kane o tsukaikitte shimaimashita.',
            meaning: {
              en: "I used up all of this month's money.",
              vi: 'Tôi đã tiêu hết sạch tiền của tháng này.'
            }
          }
        ]
      },
      {
        pattern: 'V-ます-stem ＋ きれる',
        title: { en: 'Can finish completely', vi: 'Có thể làm hết' },
        explanation: {
          en: '〜きれる is the potential form: to be able to finish the action completely.',
          vi: '〜きれる là thể khả năng: có thể làm hành động đến hết.'
        },
        examples: [
          {
            jp: '最後まで走りきれて、うれしかったです。',
            romaji: 'Saigo made hashirikirete, ureshikatta desu.',
            meaning: {
              en: 'I was happy that I could run all the way to the end.',
              vi: 'Tôi vui vì đã chạy được đến hết.'
            }
          },
          {
            jp: 'この本は一日で読みきれます。',
            romaji: 'Kono hon wa ichinichi de yomikiremasu.',
            meaning: {
              en: 'I can finish reading this book in one day.',
              vi: 'Quyển sách này tôi có thể đọc xong trong một ngày.'
            }
          }
        ]
      },
      {
        pattern: 'V-ます-stem ＋ きれない',
        title: { en: 'Cannot finish', vi: 'Không thể làm hết' },
        explanation: {
          en: '〜きれない means the amount is too great to finish; often "too many to …".',
          vi: '〜きれない nghĩa là lượng quá nhiều không làm hết được; thường là "nhiều đến mức không thể …".'
        },
        examples: [
          {
            jp: '単語が多すぎて、覚えきれません。',
            romaji: 'Tango ga ōsugite, oboekiremasen.',
            meaning: {
              en: 'There are too many words; I cannot memorize them all.',
              vi: 'Từ vựng quá nhiều, tôi không nhớ hết nổi.'
            }
          },
          {
            jp: '料理が多くて、食べきれませんでした。',
            romaji: 'Ryōri ga ōkute, tabekiremasen deshita.',
            meaning: {
              en: 'There was so much food that I could not finish it.',
              vi: 'Đồ ăn nhiều quá nên tôi không ăn hết được.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The marathon', vi: 'Cuộc chạy ma-ra-tông' },
        lines: [
          {
            jp: '先週、初めてマラソンに参加しました。',
            romaji: 'Senshū, hajimete marason ni sanka shimashita.',
            meaning: {
              en: 'Last week I took part in a marathon for the first time.',
              vi: 'Tuần trước, lần đầu tiên tôi tham gia chạy ma-ra-tông.'
            }
          },
          {
            jp: '途中でとても疲れて、走りきれないと思いました。',
            romaji: 'Tochū de totemo tsukarete, hashirikirenai to omoimashita.',
            meaning: {
              en: 'Halfway through I got very tired and thought I could not finish.',
              vi: 'Giữa chừng tôi rất mệt và nghĩ mình không chạy hết nổi.'
            }
          },
          {
            jp: 'でも、最後まで頑張って走りきりました。',
            romaji: 'Demo, saigo made ganbatte hashirikirimashita.',
            meaning: {
              en: 'But I did my best and ran all the way to the end.',
              vi: 'Nhưng tôi đã cố gắng và chạy được đến hết.'
            }
          },
          {
            jp: '家に帰ってから、大きなお弁当も全部食べきりました。',
            romaji: 'Ie ni kaette kara, ōkina o-bentō mo zenbu tabekirimashita.',
            meaning: {
              en: 'After getting home, I also ate up a whole big lunch box.',
              vi: 'Sau khi về nhà, tôi còn ăn hết cả hộp cơm lớn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the writer think halfway through?',
              vi: 'Giữa chừng người viết nghĩ gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'That they could not finish', vi: 'Rằng mình không chạy hết nổi' }
              },
              { id: 'b', label: { en: 'That it was easy', vi: 'Rằng nó dễ' } },
              { id: 'c', label: { en: 'That they would quit', vi: 'Rằng sẽ bỏ cuộc' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How did the marathon end for the writer?',
              vi: 'Cuộc chạy kết thúc thế nào với người viết?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'They ran all the way to the end', vi: 'Họ chạy được đến hết' }
              },
              { id: 'b', label: { en: 'They stopped halfway', vi: 'Họ dừng giữa chừng' } },
              { id: 'c', label: { en: 'They got lost', vi: 'Họ bị lạc đường' } }
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
    title: {
      en: 'Prone To & Tends To',
      vi: 'Hay bị & Dễ có khuynh hướng'
    },
    focus: {
      en: 'Describe a tendency, often negative, with 〜がち.',
      vi: 'Miêu tả một khuynh hướng, thường tiêu cực, với 〜がち.'
    },
    vocab: [
      {
        kana: 'びょうき',
        kanji: '病気',
        romaji: 'byōki',
        meaning: { en: 'illness', vi: 'bệnh' }
      },
      {
        kana: 'かぜ',
        kanji: '風邪',
        romaji: 'kaze',
        meaning: { en: 'a cold', vi: 'cảm' }
      },
      {
        kana: 'ひく',
        kanji: '引く',
        romaji: 'hiku',
        meaning: { en: 'to catch (a cold)', vi: 'bị (cảm)' }
      },
      {
        kana: 'やすむ',
        kanji: '休む',
        romaji: 'yasumu',
        meaning: { en: 'to rest, be absent', vi: 'nghỉ' }
      },
      {
        kana: 'おくれる',
        kanji: '遅れる',
        romaji: 'okureru',
        meaning: { en: 'to be late', vi: 'trễ' }
      },
      {
        kana: 'むり',
        kanji: '無理',
        romaji: 'muri',
        meaning: { en: 'overdoing it', vi: 'quá sức' }
      },
      {
        kana: 'うんどうぶそく',
        kanji: '運動不足',
        romaji: 'undōbusoku',
        meaning: { en: 'lack of exercise', vi: 'thiếu vận động' }
      },
      {
        kana: 'くもり',
        kanji: '曇り',
        romaji: 'kumori',
        meaning: { en: 'cloudy weather', vi: 'trời nhiều mây' }
      },
      {
        kana: 'わすれもの',
        kanji: '忘れ物',
        romaji: 'wasuremono',
        meaning: { en: 'forgotten item', vi: 'đồ để quên' }
      },
      {
        kana: 'えんりょ',
        kanji: '遠慮',
        romaji: 'enryo',
        meaning: { en: 'holding back', vi: 'sự ngần ngại' }
      },
      {
        kana: 'けんこう',
        kanji: '健康',
        romaji: 'kenkō',
        meaning: { en: 'health', vi: 'sức khỏe' }
      },
      {
        kana: 'きをつける',
        kanji: '気を付ける',
        romaji: 'ki o tsukeru',
        meaning: { en: 'to take care', vi: 'để ý, cẩn thận' }
      }
    ],
    grammar: [
      {
        pattern: 'V-ます-stem / N ＋ がち',
        title: { en: 'Tends to (often negative)', vi: 'Hay, dễ (thường tiêu cực)' },
        explanation: {
          en: '〜がち means "tends to / is prone to", usually for unwanted, frequent occurrences.',
          vi: '〜がち nghĩa là "hay / dễ", thường cho điều không mong muốn, xảy ra thường xuyên.'
        },
        examples: [
          {
            jp: '冬は風邪をひきがちです。',
            romaji: 'Fuyu wa kaze o hikigachi desu.',
            meaning: {
              en: 'I tend to catch colds in winter.',
              vi: 'Mùa đông tôi hay bị cảm.'
            }
          },
          {
            jp: '彼は学校を休みがちです。',
            romaji: 'Kare wa gakkō o yasumigachi desu.',
            meaning: {
              en: 'He tends to be absent from school.',
              vi: 'Cậu ấy hay nghỉ học.'
            }
          }
        ]
      },
      {
        pattern: 'N の 〜がち',
        title: { en: 'A noun describing the tendency', vi: 'Danh từ chỉ khuynh hướng' },
        explanation: {
          en: 'After a noun, 〜がち describes a state that frequently occurs, like 病気がち (sickly).',
          vi: 'Sau danh từ, 〜がち miêu tả trạng thái hay xảy ra, như 病気がち (hay ốm).'
        },
        examples: [
          {
            jp: '子どものころは病気がちでした。',
            romaji: 'Kodomo no koro wa byōkigachi deshita.',
            meaning: {
              en: 'As a child I was often sick.',
              vi: 'Hồi nhỏ tôi hay ốm.'
            }
          },
          {
            jp: '今週は曇りがちの天気が続きます。',
            romaji: 'Konshū wa kumorigachi no tenki ga tsuzukimasu.',
            meaning: {
              en: 'This week, cloudy weather will continue.',
              vi: 'Tuần này trời sẽ tiếp tục nhiều mây.'
            }
          }
        ]
      },
      {
        pattern: '〜がち な N',
        title: { en: 'Modifying a noun', vi: 'Bổ nghĩa cho danh từ' },
        explanation: {
          en: '〜がち can take な before a noun to describe a habitual tendency.',
          vi: '〜がち có thể thêm な trước danh từ để miêu tả khuynh hướng quen thuộc.'
        },
        examples: [
          {
            jp: '忘れがちな約束は、メモしておきましょう。',
            romaji: 'Wasuregachi na yakusoku wa, memo shite okimashō.',
            meaning: {
              en: 'For promises you tend to forget, write them down.',
              vi: 'Những lời hứa hay quên thì nên ghi chú lại.'
            }
          },
          {
            jp: '遅れがちな人は、早めに出発したほうがいいです。',
            romaji: 'Okuregachi na hito wa, hayame ni shuppatsu shita hō ga ii desu.',
            meaning: {
              en: 'People who tend to be late had better leave early.',
              vi: 'Người hay trễ thì nên xuất phát sớm.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Staying healthy', vi: 'Giữ gìn sức khỏe' },
        lines: [
          {
            jp: '私は子どものころ、病気がちでした。',
            romaji: 'Watashi wa kodomo no koro, byōkigachi deshita.',
            meaning: {
              en: 'When I was a child, I was often sick.',
              vi: 'Hồi nhỏ tôi hay ốm.'
            }
          },
          {
            jp: '運動不足だと、風邪をひきがちになります。',
            romaji: 'Undōbusoku da to, kaze o hikigachi ni narimasu.',
            meaning: {
              en: 'If you lack exercise, you tend to catch colds.',
              vi: 'Nếu thiếu vận động, bạn dễ bị cảm.'
            }
          },
          {
            jp: '最近は忙しくて、朝ごはんを抜きがちです。',
            romaji: 'Saikin wa isogashikute, asagohan o nukigachi desu.',
            meaning: {
              en: 'Lately I am busy and tend to skip breakfast.',
              vi: 'Gần đây tôi bận nên hay bỏ bữa sáng.'
            }
          },
          {
            jp: '健康のために、毎日少し運動するように気を付けています。',
            romaji: 'Kenkō no tame ni, mainichi sukoshi undō suru yō ni ki o tsukete imasu.',
            meaning: {
              en: 'For my health, I am careful to exercise a little every day.',
              vi: 'Vì sức khỏe, tôi chú ý vận động một chút mỗi ngày.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What was the writer like as a child?',
              vi: 'Hồi nhỏ người viết như thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Often sick', vi: 'Hay ốm' } },
              { id: 'b', label: { en: 'Very athletic', vi: 'Rất thể thao' } },
              { id: 'c', label: { en: 'Always on time', vi: 'Luôn đúng giờ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer tend to do lately?',
              vi: 'Gần đây người viết hay làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Skip breakfast', vi: 'Bỏ bữa sáng' } },
              { id: 'b', label: { en: 'Exercise a lot', vi: 'Vận động nhiều' } },
              { id: 'c', label: { en: 'Sleep early', vi: 'Ngủ sớm' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
