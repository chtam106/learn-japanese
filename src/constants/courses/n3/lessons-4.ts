import type { Lesson } from '@/constants/courses/types.ts';

export const n3LessonsD: Lesson[] = [
  {
    id: 'lesson-25',
    number: 25,
    title: {
      en: 'Emphasis with こそ',
      vi: 'Nhấn mạnh với こそ'
    },
    focus: {
      en: 'Emphasize "this very thing" with 〜こそ and explain "precisely because" with 〜からこそ / 〜てこそ.',
      vi: 'Nhấn mạnh "chính cái này" với 〜こそ và giải thích "chính vì" với 〜からこそ / 〜てこそ.'
    },
    vocab: [
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'nỗ lực' }
      },
      {
        kana: 'かんしゃ',
        kanji: '感謝',
        romaji: 'kansha',
        meaning: { en: 'gratitude', vi: 'sự biết ơn' }
      },
      {
        kana: 'しんらい',
        kanji: '信頼',
        romaji: 'shinrai',
        meaning: { en: 'trust', vi: 'sự tin tưởng' }
      },
      {
        kana: 'せいこう',
        kanji: '成功',
        romaji: 'seikō',
        meaning: { en: 'success', vi: 'thành công' }
      },
      {
        kana: 'しっぱい',
        kanji: '失敗',
        romaji: 'shippai',
        meaning: { en: 'failure', vi: 'thất bại' }
      },
      {
        kana: 'けいけん',
        kanji: '経験',
        romaji: 'keiken',
        meaning: { en: 'experience', vi: 'kinh nghiệm' }
      },
      {
        kana: 'がんばる',
        kanji: '頑張る',
        romaji: 'ganbaru',
        meaning: { en: 'to do one\u2019s best', vi: 'cố gắng hết sức' }
      },
      {
        kana: 'ささえる',
        kanji: '支える',
        romaji: 'sasaeru',
        meaning: { en: 'to support', vi: 'hỗ trợ, nâng đỡ' }
      },
      {
        kana: 'みとめる',
        kanji: '認める',
        romaji: 'mitomeru',
        meaning: { en: 'to acknowledge, recognize', vi: 'công nhận, thừa nhận' }
      },
      {
        kana: 'おたがい',
        kanji: 'お互い',
        romaji: 'otagai',
        meaning: { en: 'each other', vi: 'lẫn nhau' }
      },
      {
        kana: 'のりこえる',
        kanji: '乗り越える',
        romaji: 'norikoeru',
        meaning: { en: 'to overcome', vi: 'vượt qua' }
      },
      {
        kana: 'なかま',
        kanji: '仲間',
        romaji: 'nakama',
        meaning: { en: 'companion, fellow', vi: 'đồng đội, bạn đồng hành' }
      }
    ],
    grammar: [
      {
        pattern: 'N こそ',
        title: { en: 'こそ (this very one, emphasis)', vi: 'こそ (chính, nhấn mạnh)' },
        explanation: {
          en: 'こそ attaches to a noun or phrase to single it out emphatically: "this is exactly the one / this time for sure".',
          vi: 'こそ gắn vào danh từ hay cụm từ để nhấn mạnh, làm nổi bật: "chính cái này / lần này nhất định".'
        },
        examples: [
          {
            jp: '今年こそ、試験に合格したいです。',
            romaji: 'Kotoshi koso, shiken ni gōkaku shitai desu.',
            meaning: {
              en: 'This year for sure, I want to pass the exam.',
              vi: 'Năm nay nhất định tôi muốn thi đỗ.'
            }
          },
          {
            jp: 'こちらこそ、ありがとうございます。',
            romaji: 'Kochira koso, arigatō gozaimasu.',
            meaning: {
              en: 'It is I who should thank you.',
              vi: 'Chính tôi mới phải cảm ơn bạn.'
            }
          }
        ]
      },
      {
        pattern: '〜からこそ',
        title: { en: 'からこそ (precisely because)', vi: 'からこそ (chính vì)' },
        explanation: {
          en: 'からこそ strengthens から ("because") to mean "it is exactly because ...", stressing the reason.',
          vi: 'からこそ tăng cường nghĩa của から ("vì") thành "chính vì ...", nhấn mạnh lý do.'
        },
        examples: [
          {
            jp: 'あなたを信頼しているからこそ、本当のことを言います。',
            romaji: 'Anata o shinrai shite iru kara koso, hontō no koto o iimasu.',
            meaning: {
              en: 'It is precisely because I trust you that I tell you the truth.',
              vi: 'Chính vì tin tưởng bạn nên tôi mới nói sự thật.'
            }
          },
          {
            jp: '努力したからこそ、成功できたのです。',
            romaji: 'Doryoku shita kara koso, seikō dekita no desu.',
            meaning: {
              en: 'It is exactly because I made an effort that I could succeed.',
              vi: 'Chính vì đã nỗ lực nên tôi mới thành công được.'
            }
          }
        ]
      },
      {
        pattern: '〜てこそ',
        title: { en: 'てこそ (only by doing)', vi: 'てこそ (chỉ khi làm)' },
        explanation: {
          en: 'Verb て-form + こそ means "only by doing X (does something truly hold true)".',
          vi: 'Động từ thể て + こそ nghĩa là "chỉ khi làm X thì (điều gì đó mới thực sự đúng)".'
        },
        examples: [
          {
            jp: '失敗を経験してこそ、人は成長する。',
            romaji: 'Shippai o keiken shite koso, hito wa seichō suru.',
            meaning: {
              en: 'Only by experiencing failure do people grow.',
              vi: 'Chỉ khi trải qua thất bại con người mới trưởng thành.'
            }
          },
          {
            jp: '仲間がいてこそ、困難を乗り越えられる。',
            romaji: 'Nakama ga ite koso, konnan o norikoerareru.',
            meaning: {
              en: 'It is only because we have companions that we can overcome hardship.',
              vi: 'Chính vì có đồng đội nên ta mới vượt qua được khó khăn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Thanks to my senior', vi: 'Nhờ có tiền bối' },
        lines: [
          {
            jp: '私は今、仕事で成功しています。',
            romaji: 'Watashi wa ima, shigoto de seikō shite imasu.',
            meaning: {
              en: 'I am now successful in my work.',
              vi: 'Bây giờ tôi đang thành công trong công việc.'
            }
          },
          {
            jp: 'でも、それは先輩が支えてくれたからこそです。',
            romaji: 'Demo, sore wa senpai ga sasaete kureta kara koso desu.',
            meaning: {
              en: 'But that is precisely because my senior supported me.',
              vi: 'Nhưng đó chính là nhờ tiền bối đã nâng đỡ tôi.'
            }
          },
          {
            jp: '失敗した時こそ、先輩は私を認めてくれました。',
            romaji: 'Shippai shita toki koso, senpai wa watashi o mitomete kuremashita.',
            meaning: {
              en: 'It was exactly when I failed that my senior acknowledged me.',
              vi: 'Chính lúc tôi thất bại, tiền bối đã công nhận tôi.'
            }
          },
          {
            jp: '苦しい経験をしてこそ、本当の信頼が生まれると思います。',
            romaji: 'Kurushii keiken o shite koso, hontō no shinrai ga umareru to omoimasu.',
            meaning: {
              en: 'I think true trust is born only through painful experiences.',
              vi: 'Tôi nghĩ chính khi trải qua kinh nghiệm gian khổ, sự tin tưởng thật sự mới nảy sinh.'
            }
          },
          {
            jp: 'だからこそ、私は先輩に心から感謝しています。',
            romaji: 'Dakara koso, watashi wa senpai ni kokoro kara kansha shite imasu.',
            meaning: {
              en: 'That is exactly why I am grateful to my senior from the heart.',
              vi: 'Chính vì vậy, tôi biết ơn tiền bối từ tận đáy lòng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Why is the writer successful?', vi: 'Vì sao người viết thành công?' },
            choices: [
              {
                id: 'a',
                label: { en: 'Because the senior supported them', vi: 'Vì tiền bối đã nâng đỡ' }
              },
              { id: 'b', label: { en: 'Because they were lucky', vi: 'Vì họ may mắn' } },
              { id: 'c', label: { en: 'Because the work was easy', vi: 'Vì công việc dễ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'When did the senior acknowledge the writer?',
              vi: 'Tiền bối công nhận người viết khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'When they succeeded', vi: 'Khi họ thành công' } },
              { id: 'b', label: { en: 'When they failed', vi: 'Khi họ thất bại' } },
              { id: 'c', label: { en: 'When they quit', vi: 'Khi họ nghỉ việc' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-26',
    number: 26,
    title: {
      en: 'Not Only ... But Also',
      vi: 'Không chỉ ... mà còn'
    },
    focus: {
      en: 'Add information with 〜ばかりでなく and 〜だけでなく〜も ("not only ... but also").',
      vi: 'Bổ sung thông tin với 〜ばかりでなく và 〜だけでなく〜も ("không chỉ ... mà còn").'
    },
    vocab: [
      {
        kana: 'どうりょう',
        kanji: '同僚',
        romaji: 'dōryō',
        meaning: { en: 'coworker, colleague', vi: 'đồng nghiệp' }
      },
      {
        kana: 'さいのう',
        kanji: '才能',
        romaji: 'sainō',
        meaning: { en: 'talent', vi: 'tài năng' }
      },
      {
        kana: 'せいかく',
        kanji: '性格',
        romaji: 'seikaku',
        meaning: { en: 'personality', vi: 'tính cách' }
      },
      {
        kana: 'ちしき',
        kanji: '知識',
        romaji: 'chishiki',
        meaning: { en: 'knowledge', vi: 'kiến thức' }
      },
      {
        kana: 'のうりょく',
        kanji: '能力',
        romaji: 'nōryoku',
        meaning: { en: 'ability', vi: 'năng lực' }
      },
      {
        kana: 'まじめ',
        kanji: '真面目',
        romaji: 'majime',
        meaning: { en: 'serious, diligent', vi: 'nghiêm túc, chăm chỉ' }
      },
      {
        kana: 'やさしい',
        kanji: '優しい',
        romaji: 'yasashii',
        meaning: { en: 'kind', vi: 'hiền, tốt bụng' }
      },
      {
        kana: 'がいこくご',
        kanji: '外国語',
        romaji: 'gaikokugo',
        meaning: { en: 'foreign language', vi: 'ngoại ngữ' }
      },
      {
        kana: 'けいさん',
        kanji: '計算',
        romaji: 'keisan',
        meaning: { en: 'calculation', vi: 'tính toán' }
      },
      {
        kana: 'とくい',
        kanji: '得意',
        romaji: 'tokui',
        meaning: { en: 'good at, strong point', vi: 'giỏi, sở trường' }
      },
      {
        kana: 'ひょうばん',
        kanji: '評判',
        romaji: 'hyōban',
        meaning: { en: 'reputation', vi: 'tiếng tăm, danh tiếng' }
      },
      {
        kana: 'にんき',
        kanji: '人気',
        romaji: 'ninki',
        meaning: { en: 'popularity', vi: 'sự nổi tiếng, được yêu thích' }
      }
    ],
    grammar: [
      {
        pattern: '〜ばかりでなく',
        title: { en: 'ばかりでなく (not only)', vi: 'ばかりでなく (không chỉ)' },
        explanation: {
          en: 'ばかりでなく means "not only X". A な-adjective takes な and a noun stands alone before it.',
          vi: 'ばかりでなく nghĩa là "không chỉ X". Tính từ -な thêm な, danh từ đứng nguyên trước nó.'
        },
        examples: [
          {
            jp: '彼は頭がいいばかりでなく、性格も優しい。',
            romaji: 'Kare wa atama ga ii bakari de naku, seikaku mo yasashii.',
            meaning: {
              en: 'He is not only smart but also kind in personality.',
              vi: 'Anh ấy không chỉ thông minh mà tính cách cũng hiền.'
            }
          },
          {
            jp: '彼女は知識が豊富なばかりでなく、努力家でもある。',
            romaji: 'Kanojo wa chishiki ga hōfu na bakari de naku, doryokuka demo aru.',
            meaning: {
              en: 'She is not only rich in knowledge but also a hard worker.',
              vi: 'Cô ấy không chỉ giàu kiến thức mà còn là người chăm chỉ.'
            }
          }
        ]
      },
      {
        pattern: '〜だけでなく 〜も',
        title: {
          en: 'だけでなく〜も (not only ... but also)',
          vi: 'だけでなく〜も (không chỉ ... mà còn)'
        },
        explanation: {
          en: 'だけでなく marks the first item and も marks the added one: "not only A but also B".',
          vi: 'だけでなく đánh dấu vế thứ nhất và も đánh dấu vế thêm vào: "không chỉ A mà còn B".'
        },
        examples: [
          {
            jp: '彼は英語だけでなく、中国語も話せる。',
            romaji: 'Kare wa eigo dake de naku, chūgokugo mo hanaseru.',
            meaning: {
              en: 'He can speak not only English but also Chinese.',
              vi: 'Anh ấy không chỉ nói được tiếng Anh mà còn nói được tiếng Trung.'
            }
          },
          {
            jp: '彼女は才能があるだけでなく、努力もしている。',
            romaji: 'Kanojo wa sainō ga aru dake de naku, doryoku mo shite iru.',
            meaning: {
              en: 'She not only has talent but also makes an effort.',
              vi: 'Cô ấy không chỉ có tài năng mà còn nỗ lực.'
            }
          }
        ]
      },
      {
        pattern: 'N も N も',
        title: { en: 'も〜も (both ... and ...)', vi: 'も〜も (cả ... lẫn ...)' },
        explanation: {
          en: 'Repeating も lists two items together: "both A and B (alike)".',
          vi: 'Lặp lại も để liệt kê hai đối tượng cùng nhau: "cả A lẫn B".'
        },
        examples: [
          {
            jp: '田中さんは計算も得意だし、外国語も上手だ。',
            romaji: 'Tanaka-san wa keisan mo tokui dashi, gaikokugo mo jōzu da.',
            meaning: {
              en: 'Tanaka is good at both calculation and foreign languages.',
              vi: 'Anh Tanaka giỏi cả tính toán lẫn ngoại ngữ.'
            }
          },
          {
            jp: '彼は才能も能力もある。',
            romaji: 'Kare wa sainō mo nōryoku mo aru.',
            meaning: {
              en: 'He has both talent and ability.',
              vi: 'Anh ấy có cả tài năng lẫn năng lực.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A popular coworker', vi: 'Người đồng nghiệp được yêu mến' },
        lines: [
          {
            jp: '新しい同僚の山田さんは、評判がとてもいい。',
            romaji: 'Atarashii dōryō no Yamada-san wa, hyōban ga totemo ii.',
            meaning: {
              en: 'The new coworker Yamada has a very good reputation.',
              vi: 'Anh Yamada, đồng nghiệp mới, có tiếng tăm rất tốt.'
            }
          },
          {
            jp: '彼は知識が豊富なだけでなく、性格も真面目だ。',
            romaji: 'Kare wa chishiki ga hōfu na dake de naku, seikaku mo majime da.',
            meaning: {
              en: 'He is not only knowledgeable but also serious in character.',
              vi: 'Anh ấy không chỉ giàu kiến thức mà tính cách cũng nghiêm túc.'
            }
          },
          {
            jp: '英語ばかりでなく、中国語も話せる。',
            romaji: 'Eigo bakari de naku, chūgokugo mo hanaseru.',
            meaning: {
              en: 'He can speak not only English but also Chinese.',
              vi: 'Anh ấy không chỉ nói được tiếng Anh mà còn nói được tiếng Trung.'
            }
          },
          {
            jp: '仕事ができるだけでなく、みんなに優しい。',
            romaji: 'Shigoto ga dekiru dake de naku, minna ni yasashii.',
            meaning: {
              en: 'He is not only good at work but also kind to everyone.',
              vi: 'Anh ấy không chỉ giỏi việc mà còn tốt bụng với mọi người.'
            }
          },
          {
            jp: 'だから、彼は会社で人気がある。',
            romaji: 'Dakara, kare wa kaisha de ninki ga aru.',
            meaning: {
              en: 'That is why he is popular at the company.',
              vi: 'Vì vậy, anh ấy được yêu mến ở công ty.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Which languages can Yamada speak?',
              vi: 'Anh Yamada nói được những thứ tiếng nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Only English', vi: 'Chỉ tiếng Anh' } },
              {
                id: 'b',
                label: { en: 'English and Chinese', vi: 'Tiếng Anh và tiếng Trung' }
              },
              { id: 'c', label: { en: 'Only Chinese', vi: 'Chỉ tiếng Trung' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'Why is Yamada popular?',
              vi: 'Vì sao Yamada được yêu mến?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'He is good at work and kind to everyone',
                  vi: 'Anh ấy giỏi việc và tốt bụng với mọi người'
                }
              },
              { id: 'b', label: { en: 'He is rich', vi: 'Anh ấy giàu có' } },
              { id: 'c', label: { en: 'He is the boss', vi: 'Anh ấy là sếp' } }
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
    title: {
      en: 'Aimed At / Suited For',
      vi: 'Dành cho / Phù hợp với'
    },
    focus: {
      en: 'State an intended target with 〜向け and natural suitability with 〜向き.',
      vi: 'Nêu đối tượng nhắm tới với 〜向け và sự phù hợp tự nhiên với 〜向き.'
    },
    vocab: [
      {
        kana: 'こども',
        kanji: '子供',
        romaji: 'kodomo',
        meaning: { en: 'child', vi: 'trẻ em' }
      },
      {
        kana: 'しょしんしゃ',
        kanji: '初心者',
        romaji: 'shoshinsha',
        meaning: { en: 'beginner', vi: 'người mới bắt đầu' }
      },
      {
        kana: 'こうれいしゃ',
        kanji: '高齢者',
        romaji: 'kōreisha',
        meaning: { en: 'elderly person', vi: 'người cao tuổi' }
      },
      {
        kana: 'しょうひん',
        kanji: '商品',
        romaji: 'shōhin',
        meaning: { en: 'product, goods', vi: 'hàng hóa, sản phẩm' }
      },
      {
        kana: 'せいひん',
        kanji: '製品',
        romaji: 'seihin',
        meaning: { en: 'manufactured product', vi: 'sản phẩm chế tạo' }
      },
      {
        kana: 'たいしょう',
        kanji: '対象',
        romaji: 'taishō',
        meaning: { en: 'target, intended audience', vi: 'đối tượng' }
      },
      {
        kana: 'きのう',
        kanji: '機能',
        romaji: 'kinō',
        meaning: { en: 'function, feature', vi: 'chức năng' }
      },
      {
        kana: 'せっけい',
        kanji: '設計',
        romaji: 'sekkei',
        meaning: { en: 'design (engineering)', vi: 'thiết kế' }
      },
      {
        kana: 'そうさ',
        kanji: '操作',
        romaji: 'sōsa',
        meaning: { en: 'operation (of a device)', vi: 'thao tác, vận hành' }
      },
      {
        kana: 'かんたん',
        kanji: '簡単',
        romaji: 'kantan',
        meaning: { en: 'simple, easy', vi: 'đơn giản, dễ' }
      },
      {
        kana: 'ゆしゅつ',
        kanji: '輸出',
        romaji: 'yushutsu',
        meaning: { en: 'export', vi: 'xuất khẩu' }
      },
      {
        kana: 'しじょう',
        kanji: '市場',
        romaji: 'shijō',
        meaning: { en: 'market', vi: 'thị trường' }
      }
    ],
    grammar: [
      {
        pattern: 'N 向け',
        title: { en: '向け (aimed at, intended for)', vi: '向け (nhắm tới, dành cho)' },
        explanation: {
          en: 'Noun + 向け shows the audience something was deliberately made or intended for.',
          vi: 'Danh từ + 向け cho biết đối tượng mà cái gì đó được cố ý làm ra hoặc nhắm tới.'
        },
        examples: [
          {
            jp: 'これは子供向けのアニメです。',
            romaji: 'Kore wa kodomo-muke no anime desu.',
            meaning: {
              en: 'This is anime aimed at children.',
              vi: 'Đây là phim hoạt hình dành cho trẻ em.'
            }
          },
          {
            jp: '会社は輸出向けの製品を作っています。',
            romaji: 'Kaisha wa yushutsu-muke no seihin o tsukutte imasu.',
            meaning: {
              en: 'The company makes products intended for export.',
              vi: 'Công ty làm ra sản phẩm dành cho xuất khẩu.'
            }
          }
        ]
      },
      {
        pattern: 'N 向き',
        title: { en: '向き (suited for, facing)', vi: '向き (phù hợp với, hướng về)' },
        explanation: {
          en: 'Noun + 向き describes natural suitability for someone, or the direction something faces.',
          vi: 'Danh từ + 向き mô tả sự phù hợp tự nhiên với ai đó, hoặc hướng mà cái gì đó quay về.'
        },
        examples: [
          {
            jp: 'このスマホは初心者向きです。',
            romaji: 'Kono sumaho wa shoshinsha-muki desu.',
            meaning: {
              en: 'This smartphone is suited for beginners.',
              vi: 'Chiếc điện thoại này phù hợp với người mới bắt đầu.'
            }
          },
          {
            jp: 'この部屋は南向きで明るい。',
            romaji: 'Kono heya wa minami-muki de akarui.',
            meaning: {
              en: 'This room faces south and is bright.',
              vi: 'Căn phòng này hướng nam và sáng sủa.'
            }
          }
        ]
      },
      {
        pattern: 'N 向けに / N 向きに',
        title: { en: '向けに / 向きに (adverbial use)', vi: '向けに / 向きに (dùng như trạng từ)' },
        explanation: {
          en: 'Add に to use them adverbially before a verb: "made/done with that target in mind".',
          vi: 'Thêm に để dùng như trạng từ trước động từ: "làm với đối tượng đó trong đầu".'
        },
        examples: [
          {
            jp: '高齢者向けに、操作が簡単な機能を設計した。',
            romaji: 'Kōreisha-muke ni, sōsa ga kantan na kinō o sekkei shita.',
            meaning: {
              en: 'We designed easy-to-operate functions for the elderly.',
              vi: 'Chúng tôi đã thiết kế chức năng thao tác đơn giản dành cho người cao tuổi.'
            }
          },
          {
            jp: '子供向きに、優しい言葉で説明した。',
            romaji: 'Kodomo-muki ni, yasashii kotoba de setsumei shita.',
            meaning: {
              en: 'I explained it in gentle words suited for children.',
              vi: 'Tôi đã giải thích bằng lời lẽ dễ hiểu phù hợp với trẻ em.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A new product', vi: 'Một sản phẩm mới' },
        lines: [
          {
            jp: '新しい商品は高齢者向けに作られました。',
            romaji: 'Atarashii shōhin wa kōreisha-muke ni tsukuraremashita.',
            meaning: {
              en: 'The new product was made for the elderly.',
              vi: 'Sản phẩm mới được làm ra dành cho người cao tuổi.'
            }
          },
          {
            jp: '操作がとても簡単で、初心者向きです。',
            romaji: 'Sōsa ga totemo kantan de, shoshinsha-muki desu.',
            meaning: {
              en: 'It is very easy to operate and suited for beginners.',
              vi: 'Thao tác rất đơn giản và phù hợp với người mới bắt đầu.'
            }
          },
          {
            jp: 'でも、子供向けの商品ではありません。',
            romaji: 'Demo, kodomo-muke no shōhin de wa arimasen.',
            meaning: {
              en: 'However, it is not a product aimed at children.',
              vi: 'Tuy nhiên, đây không phải sản phẩm dành cho trẻ em.'
            }
          },
          {
            jp: 'この製品は海外の市場にも輸出される予定です。',
            romaji: 'Kono seihin wa kaigai no shijō ni mo yushutsu sareru yotei desu.',
            meaning: {
              en: 'This product is also planned to be exported to overseas markets.',
              vi: 'Sản phẩm này cũng được dự định xuất khẩu sang thị trường nước ngoài.'
            }
          },
          {
            jp: '会社はこの商品の機能に自信を持っています。',
            romaji: 'Kaisha wa kono shōhin no kinō ni jishin o motte imasu.',
            meaning: {
              en: 'The company is confident in this product\u2019s functions.',
              vi: 'Công ty tự tin vào các chức năng của sản phẩm này.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Who is the new product aimed at?',
              vi: 'Sản phẩm mới nhắm tới ai?'
            },
            choices: [
              { id: 'a', label: { en: 'The elderly', vi: 'Người cao tuổi' } },
              { id: 'b', label: { en: 'Children', vi: 'Trẻ em' } },
              { id: 'c', label: { en: 'Companies', vi: 'Các công ty' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Is the product aimed at children?',
              vi: 'Sản phẩm có dành cho trẻ em không?'
            },
            choices: [
              { id: 'a', label: { en: 'Yes, it is', vi: 'Có' } },
              { id: 'b', label: { en: 'No, it is not', vi: 'Không' } },
              { id: 'c', label: { en: 'Only for babies', vi: 'Chỉ dành cho em bé' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-28',
    number: 28,
    title: {
      en: 'How Things Should Be (ものだ)',
      vi: 'Lẽ thường (ものだ)'
    },
    focus: {
      en: 'Express general truths and proper behavior with 〜ものだ, and what one shouldn\u2019t do with 〜ものではない.',
      vi: 'Diễn đạt chân lý chung và lẽ phải với 〜ものだ, và điều không nên làm với 〜ものではない.'
    },
    vocab: [
      {
        kana: 'じょうしき',
        kanji: '常識',
        romaji: 'jōshiki',
        meaning: { en: 'common sense', vi: 'lẽ thường, kiến thức chung' }
      },
      {
        kana: 'れいぎ',
        kanji: '礼儀',
        romaji: 'reigi',
        meaning: { en: 'manners, etiquette', vi: 'lễ nghĩa, phép tắc' }
      },
      {
        kana: 'やくそく',
        kanji: '約束',
        romaji: 'yakusoku',
        meaning: { en: 'promise', vi: 'lời hứa' }
      },
      {
        kana: 'まもる',
        kanji: '守る',
        romaji: 'mamoru',
        meaning: { en: 'to keep, protect', vi: 'giữ, bảo vệ' }
      },
      {
        kana: 'あいさつ',
        kanji: '挨拶',
        romaji: 'aisatsu',
        meaning: { en: 'greeting', vi: 'lời chào hỏi' }
      },
      {
        kana: 'としうえ',
        kanji: '年上',
        romaji: 'toshiue',
        meaning: { en: 'one\u2019s senior, older person', vi: 'người lớn tuổi hơn' }
      },
      {
        kana: 'うやまう',
        kanji: '敬う',
        romaji: 'uyamau',
        meaning: { en: 'to respect (elders)', vi: 'kính trọng' }
      },
      {
        kana: 'あたりまえ',
        kanji: '当たり前',
        romaji: 'atarimae',
        meaning: { en: 'natural, a matter of course', vi: 'đương nhiên, lẽ tất nhiên' }
      },
      {
        kana: 'めいわく',
        kanji: '迷惑',
        romaji: 'meiwaku',
        meaning: { en: 'trouble, nuisance', vi: 'sự phiền hà' }
      },
      {
        kana: 'うそ',
        kanji: '嘘',
        romaji: 'uso',
        meaning: { en: 'lie', vi: 'lời nói dối' }
      },
      {
        kana: 'ぎょうぎ',
        kanji: '行儀',
        romaji: 'gyōgi',
        meaning: { en: 'manners, behavior', vi: 'cách cư xử' }
      },
      {
        kana: 'おや',
        kanji: '親',
        romaji: 'oya',
        meaning: { en: 'parent', vi: 'cha mẹ' }
      }
    ],
    grammar: [
      {
        pattern: '〜ものだ',
        title: { en: 'ものだ (general truth / should)', vi: 'ものだ (lẽ thường / nên)' },
        explanation: {
          en: 'Dictionary-form verb + ものだ states how things naturally are or what one ought to do.',
          vi: 'Động từ thể từ điển + ものだ nêu lên điều vốn dĩ như vậy hoặc điều nên làm.'
        },
        examples: [
          {
            jp: '子供は元気に遊ぶものだ。',
            romaji: 'Kodomo wa genki ni asobu mono da.',
            meaning: {
              en: 'Children are meant to play energetically.',
              vi: 'Trẻ con thì vốn chơi đùa hoạt bát.'
            }
          },
          {
            jp: '約束は守るものだ。',
            romaji: 'Yakusoku wa mamoru mono da.',
            meaning: {
              en: 'Promises are meant to be kept.',
              vi: 'Lời hứa thì phải giữ.'
            }
          }
        ]
      },
      {
        pattern: '〜ものではない',
        title: { en: 'ものではない (one shouldn\u2019t)', vi: 'ものではない (không nên)' },
        explanation: {
          en: 'ものではない states that something is not done, as a matter of good sense or morals.',
          vi: 'ものではない nêu rằng điều gì đó không được làm, theo lẽ phải hay đạo lý.'
        },
        examples: [
          {
            jp: '人に嘘をつくものではない。',
            romaji: 'Hito ni uso o tsuku mono de wa nai.',
            meaning: {
              en: 'One should not tell lies to people.',
              vi: 'Không nên nói dối người khác.'
            }
          },
          {
            jp: '人に迷惑をかけるものではない。',
            romaji: 'Hito ni meiwaku o kakeru mono de wa nai.',
            meaning: {
              en: 'One should not cause trouble to others.',
              vi: 'Không nên gây phiền hà cho người khác.'
            }
          }
        ]
      },
      {
        pattern: '〜たものだ',
        title: { en: 'たものだ (used to, nostalgia)', vi: 'たものだ (hồi xưa thường)' },
        explanation: {
          en: 'Past-form verb + ものだ recalls something that often happened in the past with feeling.',
          vi: 'Động từ thể quá khứ + ものだ hồi tưởng điều thường xảy ra trong quá khứ với cảm xúc.'
        },
        examples: [
          {
            jp: '子供の頃、よく親に叱られたものだ。',
            romaji: 'Kodomo no koro, yoku oya ni shikarareta mono da.',
            meaning: {
              en: 'When I was a child, I often used to be scolded by my parents.',
              vi: 'Hồi nhỏ, tôi thường hay bị cha mẹ mắng.'
            }
          },
          {
            jp: '昔はここでよく遊んだものだ。',
            romaji: 'Mukashi wa koko de yoku asonda mono da.',
            meaning: {
              en: 'I used to play here often long ago.',
              vi: 'Ngày xưa tôi thường hay chơi ở đây.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Manners my parents taught me', vi: 'Phép tắc cha mẹ dạy tôi' },
        lines: [
          {
            jp: '年上の人には礼儀正しく挨拶をするものだ。',
            romaji: 'Toshiue no hito ni wa reigi tadashiku aisatsu o suru mono da.',
            meaning: {
              en: 'One should greet older people politely.',
              vi: 'Với người lớn tuổi hơn thì nên chào hỏi cho lễ phép.'
            }
          },
          {
            jp: '人に迷惑をかけるものではない、と親に教えられた。',
            romaji: 'Hito ni meiwaku o kakeru mono de wa nai, to oya ni oshierareta.',
            meaning: {
              en: 'I was taught by my parents that one should not cause trouble to others.',
              vi: 'Tôi được cha mẹ dạy rằng không nên gây phiền hà cho người khác.'
            }
          },
          {
            jp: '約束を守るのは当たり前のことだ。',
            romaji: 'Yakusoku o mamoru no wa atarimae no koto da.',
            meaning: {
              en: 'Keeping a promise is a matter of course.',
              vi: 'Giữ lời hứa là chuyện đương nhiên.'
            }
          },
          {
            jp: '子供の頃は、よく行儀が悪いと叱られたものだ。',
            romaji: 'Kodomo no koro wa, yoku gyōgi ga warui to shikarareta mono da.',
            meaning: {
              en: 'As a child, I often used to be scolded for bad manners.',
              vi: 'Hồi nhỏ, tôi thường hay bị mắng vì cư xử không phải phép.'
            }
          },
          {
            jp: 'でも今は、それも大切な常識だと分かる。',
            romaji: 'Demo ima wa, sore mo taisetsu na jōshiki da to wakaru.',
            meaning: {
              en: 'But now I understand that it too is important common sense.',
              vi: 'Nhưng giờ tôi hiểu rằng đó cũng là lẽ thường quan trọng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the parents teach?',
              vi: 'Cha mẹ đã dạy điều gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Not to cause trouble to others',
                  vi: 'Không gây phiền hà cho người khác'
                }
              },
              { id: 'b', label: { en: 'To make a lot of money', vi: 'Phải kiếm thật nhiều tiền' } },
              { id: 'c', label: { en: 'To play all day', vi: 'Chơi cả ngày' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'As a child, why was the writer scolded?',
              vi: 'Hồi nhỏ, người viết bị mắng vì điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'For studying too much', vi: 'Vì học quá nhiều' } },
              { id: 'b', label: { en: 'For bad manners', vi: 'Vì cư xử không phải phép' } },
              { id: 'c', label: { en: 'For sleeping late', vi: 'Vì ngủ dậy muộn' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-29',
    number: 29,
    title: {
      en: 'Can\u2019t Possibly (わけにはいかない)',
      vi: 'Không thể nào (わけにはいかない)'
    },
    focus: {
      en: 'Say you can\u2019t do something for social or moral reasons with 〜わけにはいかない / 〜ないわけにはいかない.',
      vi: 'Nói rằng không thể làm gì vì lý do xã hội hay đạo lý với 〜わけにはいかない / 〜ないわけにはいかない.'
    },
    vocab: [
      {
        kana: 'せきにん',
        kanji: '責任',
        romaji: 'sekinin',
        meaning: { en: 'responsibility', vi: 'trách nhiệm' }
      },
      {
        kana: 'しめきり',
        kanji: '締め切り',
        romaji: 'shimekiri',
        meaning: { en: 'deadline', vi: 'hạn chót' }
      },
      {
        kana: 'たんとう',
        kanji: '担当',
        romaji: 'tantō',
        meaning: { en: 'being in charge', vi: 'phụ trách' }
      },
      {
        kana: 'かいぎ',
        kanji: '会議',
        romaji: 'kaigi',
        meaning: { en: 'meeting', vi: 'cuộc họp' }
      },
      {
        kana: 'けっせき',
        kanji: '欠席',
        romaji: 'kesseki',
        meaning: { en: 'absence', vi: 'vắng mặt' }
      },
      {
        kana: 'ぎむ',
        kanji: '義務',
        romaji: 'gimu',
        meaning: { en: 'duty, obligation', vi: 'nghĩa vụ' }
      },
      {
        kana: 'たちば',
        kanji: '立場',
        romaji: 'tachiba',
        meaning: { en: 'position, standpoint', vi: 'lập trường, vị trí' }
      },
      {
        kana: 'ことわる',
        kanji: '断る',
        romaji: 'kotowaru',
        meaning: { en: 'to refuse, decline', vi: 'từ chối' }
      },
      {
        kana: 'ひきうける',
        kanji: '引き受ける',
        romaji: 'hikiukeru',
        meaning: { en: 'to take on (a task)', vi: 'nhận lãnh (công việc)' }
      },
      {
        kana: 'あきらめる',
        kanji: '諦める',
        romaji: 'akirameru',
        meaning: { en: 'to give up', vi: 'từ bỏ' }
      },
      {
        kana: 'きたい',
        kanji: '期待',
        romaji: 'kitai',
        meaning: { en: 'expectation', vi: 'kỳ vọng' }
      },
      {
        kana: 'まかせる',
        kanji: '任せる',
        romaji: 'makaseru',
        meaning: { en: 'to entrust, leave to', vi: 'giao phó' }
      }
    ],
    grammar: [
      {
        pattern: '〜わけにはいかない',
        title: {
          en: 'わけにはいかない (can\u2019t possibly)',
          vi: 'わけにはいかない (không thể nào)'
        },
        explanation: {
          en: 'Dictionary-form verb + わけにはいかない means you can\u2019t do it because of circumstances or social reasons.',
          vi: 'Động từ thể từ điển + わけにはいかない nghĩa là không thể làm vì hoàn cảnh hay lý do xã hội.'
        },
        examples: [
          {
            jp: '大事な会議だから、欠席するわけにはいかない。',
            romaji: 'Daiji na kaigi da kara, kesseki suru wake ni wa ikanai.',
            meaning: {
              en: 'Since it is an important meeting, I can\u2019t very well be absent.',
              vi: 'Vì là cuộc họp quan trọng nên tôi không thể vắng mặt.'
            }
          },
          {
            jp: '担当者として、この仕事を断るわけにはいかない。',
            romaji: 'Tantō-sha to shite, kono shigoto o kotowaru wake ni wa ikanai.',
            meaning: {
              en: 'As the person in charge, I can\u2019t refuse this job.',
              vi: 'Với tư cách người phụ trách, tôi không thể từ chối công việc này.'
            }
          }
        ]
      },
      {
        pattern: '〜ないわけにはいかない',
        title: { en: 'ないわけにはいかない (must do)', vi: 'ないわけにはいかない (buộc phải làm)' },
        explanation: {
          en: 'The negative verb + わけにはいかない means "cannot not do it", i.e. you have no choice but to do it.',
          vi: 'Động từ phủ định + わけにはいかない nghĩa là "không thể không làm", tức là buộc phải làm.'
        },
        examples: [
          {
            jp: 'みんなが期待しているので、引き受けないわけにはいかない。',
            romaji: 'Minna ga kitai shite iru node, hikiukenai wake ni wa ikanai.',
            meaning: {
              en: 'Everyone is expecting it, so I have no choice but to take it on.',
              vi: 'Vì mọi người đều kỳ vọng nên tôi không thể không nhận.'
            }
          },
          {
            jp: '責任があるから、最後までやらないわけにはいかない。',
            romaji: 'Sekinin ga aru kara, saigo made yaranai wake ni wa ikanai.',
            meaning: {
              en: 'I have responsibility, so I cannot not do it to the end.',
              vi: 'Vì có trách nhiệm nên tôi không thể không làm đến cùng.'
            }
          }
        ]
      },
      {
        pattern: '立場上、〜わけにはいかない',
        title: { en: 'Given one\u2019s position', vi: 'Xét theo lập trường' },
        explanation: {
          en: 'Often the reason is one\u2019s social position or duty: "given my position, I can\u2019t ...".',
          vi: 'Lý do thường là vị trí xã hội hay nghĩa vụ: "xét theo lập trường, tôi không thể ...".'
        },
        examples: [
          {
            jp: '義務があるので、途中で諦めるわけにはいかない。',
            romaji: 'Gimu ga aru node, tochū de akirameru wake ni wa ikanai.',
            meaning: {
              en: 'I have a duty, so I can\u2019t give up halfway.',
              vi: 'Vì có nghĩa vụ nên tôi không thể bỏ cuộc giữa chừng.'
            }
          },
          {
            jp: '任された仕事だから、適当にやるわけにはいかない。',
            romaji: 'Makasareta shigoto da kara, tekitō ni yaru wake ni wa ikanai.',
            meaning: {
              en: 'Since it is a job I was entrusted with, I can\u2019t do it carelessly.',
              vi: 'Vì là công việc được giao phó nên tôi không thể làm qua loa.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The night before the deadline', vi: 'Đêm trước hạn chót' },
        lines: [
          {
            jp: '明日は大切な締め切りがある。',
            romaji: 'Ashita wa taisetsu na shimekiri ga aru.',
            meaning: {
              en: 'Tomorrow there is an important deadline.',
              vi: 'Ngày mai có một hạn chót quan trọng.'
            }
          },
          {
            jp: '私はこのプロジェクトの担当だから、休むわけにはいかない。',
            romaji: 'Watashi wa kono purojekuto no tantō da kara, yasumu wake ni wa ikanai.',
            meaning: {
              en: 'I am in charge of this project, so I can\u2019t take a day off.',
              vi: 'Tôi phụ trách dự án này nên không thể nghỉ.'
            }
          },
          {
            jp: 'みんなが私に期待しているので、諦めるわけにはいかない。',
            romaji: 'Minna ga watashi ni kitai shite iru node, akirameru wake ni wa ikanai.',
            meaning: {
              en: 'Everyone is counting on me, so I can\u2019t give up.',
              vi: 'Mọi người đều kỳ vọng vào tôi nên tôi không thể bỏ cuộc.'
            }
          },
          {
            jp: '責任がある立場だから、仕事を断ることもできない。',
            romaji: 'Sekinin ga aru tachiba da kara, shigoto o kotowaru koto mo dekinai.',
            meaning: {
              en: 'I am in a position of responsibility, so I can\u2019t refuse the work either.',
              vi: 'Vì ở vị trí có trách nhiệm nên tôi cũng không thể từ chối công việc.'
            }
          },
          {
            jp: '今夜は最後まで頑張らないわけにはいかない。',
            romaji: 'Kon\u2019ya wa saigo made ganbaranai wake ni wa ikanai.',
            meaning: {
              en: 'Tonight I have no choice but to work hard to the end.',
              vi: 'Tối nay tôi không thể không cố gắng đến cùng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why can\u2019t the writer take a day off?',
              vi: 'Vì sao người viết không thể nghỉ?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Because they are in charge of the project',
                  vi: 'Vì họ phụ trách dự án'
                }
              },
              { id: 'b', label: { en: 'Because they are sick', vi: 'Vì họ bị ốm' } },
              { id: 'c', label: { en: 'Because it is a holiday', vi: 'Vì hôm đó là ngày lễ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What will the writer do tonight?',
              vi: 'Tối nay người viết sẽ làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Give up', vi: 'Bỏ cuộc' } },
              {
                id: 'b',
                label: { en: 'Work hard to the end', vi: 'Cố gắng đến cùng' }
              },
              { id: 'c', label: { en: 'Go to a party', vi: 'Đi dự tiệc' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-30',
    number: 30,
    title: {
      en: 'No Choice But To (ざるを得ない)',
      vi: 'Buộc phải (ざるを得ない)'
    },
    focus: {
      en: 'Express a reluctant, unavoidable decision with 〜ざるを得ない.',
      vi: 'Diễn đạt một quyết định miễn cưỡng, không thể tránh khỏi với 〜ざるを得ない.'
    },
    vocab: [
      {
        kana: 'じょうきょう',
        kanji: '状況',
        romaji: 'jōkyō',
        meaning: { en: 'situation', vi: 'tình hình' }
      },
      {
        kana: 'じじょう',
        kanji: '事情',
        romaji: 'jijō',
        meaning: { en: 'circumstances', vi: 'hoàn cảnh, lý do' }
      },
      {
        kana: 'ちゅうし',
        kanji: '中止',
        romaji: 'chūshi',
        meaning: { en: 'cancellation', vi: 'sự hủy bỏ' }
      },
      {
        kana: 'けいかく',
        kanji: '計画',
        romaji: 'keikaku',
        meaning: { en: 'plan', vi: 'kế hoạch' }
      },
      {
        kana: 'けつろん',
        kanji: '結論',
        romaji: 'ketsuron',
        meaning: { en: 'conclusion', vi: 'kết luận' }
      },
      {
        kana: 'しかたがない',
        kanji: '仕方がない',
        romaji: 'shikata ga nai',
        meaning: { en: 'it can\u2019t be helped', vi: 'không còn cách nào khác' }
      },
      {
        kana: 'へんこう',
        kanji: '変更',
        romaji: 'henkō',
        meaning: { en: 'change, alteration', vi: 'sự thay đổi' }
      },
      {
        kana: 'えんき',
        kanji: '延期',
        romaji: 'enki',
        meaning: { en: 'postponement', vi: 'sự hoãn lại' }
      },
      {
        kana: 'したがう',
        kanji: '従う',
        romaji: 'shitagau',
        meaning: { en: 'to obey, follow', vi: 'tuân theo' }
      },
      {
        kana: 'めいれい',
        kanji: '命令',
        romaji: 'meirei',
        meaning: { en: 'order, command', vi: 'mệnh lệnh' }
      },
      {
        kana: 'ざんねん',
        kanji: '残念',
        romaji: 'zannen',
        meaning: { en: 'regrettable, a pity', vi: 'đáng tiếc' }
      },
      {
        kana: 'えいきょう',
        kanji: '影響',
        romaji: 'eikyō',
        meaning: { en: 'influence, effect', vi: 'ảnh hưởng' }
      }
    ],
    grammar: [
      {
        pattern: '〜ざるを得ない',
        title: { en: 'ざるを得ない (have no choice but to)', vi: 'ざるを得ない (buộc phải)' },
        explanation: {
          en: 'Attach ざるを得ない to a verb\u2019s ない-stem to mean "have no choice but to do it", often reluctantly.',
          vi: 'Gắn ざるを得ない vào gốc ない của động từ để nói "buộc phải làm", thường là miễn cưỡng.'
        },
        examples: [
          {
            jp: '台風のため、試合を中止せざるを得ない。',
            romaji: 'Taifū no tame, shiai o chūshi sezaru o enai.',
            meaning: {
              en: 'Due to the typhoon, we have no choice but to cancel the match.',
              vi: 'Vì bão nên chúng tôi buộc phải hủy trận đấu.'
            }
          },
          {
            jp: '上司の命令だから、従わざるを得ない。',
            romaji: 'Jōshi no meirei da kara, shitagawazaru o enai.',
            meaning: {
              en: 'Since it is the boss\u2019s order, I have no choice but to obey.',
              vi: 'Vì là mệnh lệnh của cấp trên nên tôi buộc phải tuân theo.'
            }
          }
        ]
      },
      {
        pattern: 'する → せざるを得ない',
        title: { en: 'The irregular する form', vi: 'Dạng bất quy tắc của する' },
        explanation: {
          en: 'する becomes せざるを得ない. This pattern is common with する-verbs like 変更する, 延期する.',
          vi: 'する trở thành せざるを得ない. Mẫu này hay đi với động từ する như 変更する, 延期する.'
        },
        examples: [
          {
            jp: 'こんな状況では、計画を変更せざるを得ない。',
            romaji: 'Konna jōkyō de wa, keikaku o henkō sezaru o enai.',
            meaning: {
              en: 'In a situation like this, we have no choice but to change the plan.',
              vi: 'Trong tình hình thế này, chúng tôi buộc phải thay đổi kế hoạch.'
            }
          },
          {
            jp: '残念だが、旅行を延期せざるを得ない。',
            romaji: 'Zannen da ga, ryokō o enki sezaru o enai.',
            meaning: {
              en: 'It is a pity, but we have no choice but to postpone the trip.',
              vi: 'Đáng tiếc, nhưng chúng tôi buộc phải hoãn chuyến đi.'
            }
          }
        ]
      },
      {
        pattern: '事情を考えると、〜ざるを得ない',
        title: { en: 'Reaching an unavoidable conclusion', vi: 'Đi đến kết luận không tránh khỏi' },
        explanation: {
          en: 'Often used to admit a conclusion forced by the circumstances one is considering.',
          vi: 'Thường dùng để thừa nhận một kết luận bị hoàn cảnh ép buộc khi cân nhắc.'
        },
        examples: [
          {
            jp: '事情を考えると、その結論を出さざるを得ない。',
            romaji: 'Jijō o kangaeru to, sono ketsuron o dasazaru o enai.',
            meaning: {
              en: 'Considering the circumstances, we cannot but reach that conclusion.',
              vi: 'Xét đến hoàn cảnh, chúng tôi buộc phải đưa ra kết luận đó.'
            }
          },
          {
            jp: '失敗を認めざるを得なかった。',
            romaji: 'Shippai o mitomezaru o enakatta.',
            meaning: {
              en: 'I had no choice but to admit the failure.',
              vi: 'Tôi buộc phải thừa nhận thất bại.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Canceling the event', vi: 'Hủy bỏ sự kiện' },
        lines: [
          {
            jp: '大きな台風が近づいている。',
            romaji: 'Ōkina taifū ga chikazuite iru.',
            meaning: {
              en: 'A big typhoon is approaching.',
              vi: 'Một cơn bão lớn đang đến gần.'
            }
          },
          {
            jp: 'この状況では、週末のイベントを中止せざるを得ない。',
            romaji: 'Kono jōkyō de wa, shūmatsu no ibento o chūshi sezaru o enai.',
            meaning: {
              en: 'In this situation, we have no choice but to cancel the weekend event.',
              vi: 'Trong tình hình này, chúng tôi buộc phải hủy sự kiện cuối tuần.'
            }
          },
          {
            jp: '残念だが、安全を考えると仕方がない。',
            romaji: 'Zannen da ga, anzen o kangaeru to shikata ga nai.',
            meaning: {
              en: 'It is a pity, but considering safety, it can\u2019t be helped.',
              vi: 'Đáng tiếc, nhưng vì sự an toàn thì không còn cách nào khác.'
            }
          },
          {
            jp: '計画を変更して、来月に延期することにした。',
            romaji: 'Keikaku o henkō shite, raigetsu ni enki suru koto ni shita.',
            meaning: {
              en: 'We changed the plan and decided to postpone it to next month.',
              vi: 'Chúng tôi đã thay đổi kế hoạch và quyết định hoãn sang tháng sau.'
            }
          },
          {
            jp: 'お客様にも事情を説明し、理解してもらわざるを得ない。',
            romaji: 'Okyaku-sama ni mo jijō o setsumei shi, rikai shite morawazaru o enai.',
            meaning: {
              en: 'We have no choice but to explain the circumstances to customers and ask for their understanding.',
              vi: 'Chúng tôi buộc phải giải thích hoàn cảnh với khách hàng và mong họ thông cảm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why must the event be canceled?',
              vi: 'Vì sao phải hủy sự kiện?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Because a big typhoon is approaching',
                  vi: 'Vì một cơn bão lớn đang đến gần'
                }
              },
              { id: 'b', label: { en: 'Because there are no tickets', vi: 'Vì không có vé' } },
              { id: 'c', label: { en: 'Because the staff quit', vi: 'Vì nhân viên nghỉ việc' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'When was the event postponed to?',
              vi: 'Sự kiện được hoãn đến khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Next week', vi: 'Tuần sau' } },
              { id: 'b', label: { en: 'Next month', vi: 'Tháng sau' } },
              { id: 'c', label: { en: 'Next year', vi: 'Năm sau' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-31',
    number: 31,
    title: {
      en: 'Rules & Personal Habits',
      vi: 'Quy định & Thói quen cá nhân'
    },
    focus: {
      en: 'Describe an established rule with 〜ことになっている and a habit you\u2019ve set for yourself with 〜ことにしている.',
      vi: 'Mô tả một quy định đã định với 〜ことになっている và thói quen bạn tự đặt ra với 〜ことにしている.'
    },
    vocab: [
      {
        kana: 'きそく',
        kanji: '規則',
        romaji: 'kisoku',
        meaning: { en: 'rule, regulation', vi: 'quy tắc, quy định' }
      },
      {
        kana: 'せいふく',
        kanji: '制服',
        romaji: 'seifuku',
        meaning: { en: 'uniform', vi: 'đồng phục' }
      },
      {
        kana: 'ていしゅつ',
        kanji: '提出',
        romaji: 'teishutsu',
        meaning: { en: 'submission', vi: 'sự nộp' }
      },
      {
        kana: 'きげん',
        kanji: '期限',
        romaji: 'kigen',
        meaning: { en: 'deadline, time limit', vi: 'kỳ hạn' }
      },
      {
        kana: 'きんし',
        kanji: '禁止',
        romaji: 'kinshi',
        meaning: { en: 'prohibition', vi: 'sự cấm' }
      },
      {
        kana: 'きょか',
        kanji: '許可',
        romaji: 'kyoka',
        meaning: { en: 'permission', vi: 'sự cho phép' }
      },
      {
        kana: 'はやおき',
        kanji: '早起き',
        romaji: 'hayaoki',
        meaning: { en: 'early rising', vi: 'việc dậy sớm' }
      },
      {
        kana: 'うんどう',
        kanji: '運動',
        romaji: 'undō',
        meaning: { en: 'exercise', vi: 'vận động, tập thể dục' }
      },
      {
        kana: 'しゅうかん',
        kanji: '習慣',
        romaji: 'shūkan',
        meaning: { en: 'habit, custom', vi: 'thói quen' }
      },
      {
        kana: 'きまり',
        kanji: '決まり',
        romaji: 'kimari',
        meaning: { en: 'rule, arrangement', vi: 'quy định, lệ' }
      },
      {
        kana: 'ほうこく',
        kanji: '報告',
        romaji: 'hōkoku',
        meaning: { en: 'report', vi: 'báo cáo' }
      },
      {
        kana: 'かならず',
        kanji: '必ず',
        romaji: 'kanarazu',
        meaning: { en: 'without fail, surely', vi: 'nhất định, chắc chắn' }
      }
    ],
    grammar: [
      {
        pattern: '〜ことになっている',
        title: {
          en: 'ことになっている (an established rule)',
          vi: 'ことになっている (quy định đã có)'
        },
        explanation: {
          en: 'Describes a rule or arrangement decided by others or society, in effect now.',
          vi: 'Mô tả một quy định hay sự sắp đặt do người khác hoặc xã hội quyết định, đang có hiệu lực.'
        },
        examples: [
          {
            jp: 'この学校では、制服を着ることになっている。',
            romaji: 'Kono gakkō de wa, seifuku o kiru koto ni natte iru.',
            meaning: {
              en: 'At this school, students are supposed to wear uniforms.',
              vi: 'Ở trường này, học sinh phải mặc đồng phục (theo quy định).'
            }
          },
          {
            jp: '会議の前に、資料を提出することになっている。',
            romaji: 'Kaigi no mae ni, shiryō o teishutsu suru koto ni natte iru.',
            meaning: {
              en: 'Before the meeting, you are supposed to submit the documents.',
              vi: 'Trước cuộc họp, theo quy định phải nộp tài liệu.'
            }
          }
        ]
      },
      {
        pattern: '〜ことにしている',
        title: {
          en: 'ことにしている (a personal habit)',
          vi: 'ことにしている (thói quen cá nhân)'
        },
        explanation: {
          en: 'Describes something you have decided to make a personal rule or habit, and keep doing.',
          vi: 'Mô tả điều bạn đã quyết định coi là quy tắc hay thói quen của bản thân và duy trì.'
        },
        examples: [
          {
            jp: '私は毎朝運動することにしている。',
            romaji: 'Watashi wa maiasa undō suru koto ni shite iru.',
            meaning: {
              en: 'I make it a rule to exercise every morning.',
              vi: 'Tôi luôn tập thể dục mỗi sáng (thành thói quen).'
            }
          },
          {
            jp: 'お酒は飲まないことにしている。',
            romaji: 'Osake wa nomanai koto ni shite iru.',
            meaning: {
              en: 'I make it a policy not to drink alcohol.',
              vi: 'Tôi đã quyết định không uống rượu.'
            }
          }
        ]
      },
      {
        pattern: 'Comparing the two',
        title: { en: 'Rule vs. personal choice', vi: 'Quy định và lựa chọn cá nhân' },
        explanation: {
          en: 'なっている = a rule from outside; にしている = a habit you chose for yourself.',
          vi: 'なっている = quy định từ bên ngoài; にしている = thói quen do chính bạn chọn.'
        },
        examples: [
          {
            jp: '図書館では静かにすることになっている。',
            romaji: 'Toshokan de wa shizuka ni suru koto ni natte iru.',
            meaning: {
              en: 'In the library, you are supposed to keep quiet.',
              vi: 'Ở thư viện, theo quy định phải giữ yên lặng.'
            }
          },
          {
            jp: '私は寝る前に日記を書くことにしている。',
            romaji: 'Watashi wa neru mae ni nikki o kaku koto ni shite iru.',
            meaning: {
              en: 'I make it a habit to write a diary before going to bed.',
              vi: 'Tôi có thói quen viết nhật ký trước khi đi ngủ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Company rules and my routine', vi: 'Quy định công ty và thói quen của tôi' },
        lines: [
          {
            jp: 'うちの会社では、朝九時までに来ることになっている。',
            romaji: 'Uchi no kaisha de wa, asa ku-ji made ni kuru koto ni natte iru.',
            meaning: {
              en: 'At our company, you are supposed to arrive by 9 a.m.',
              vi: 'Ở công ty tôi, theo quy định phải đến trước 9 giờ sáng.'
            }
          },
          {
            jp: '毎週金曜日に、仕事の報告を提出する決まりだ。',
            romaji: 'Maishū kin\u2019yōbi ni, shigoto no hōkoku o teishutsu suru kimari da.',
            meaning: {
              en: 'There is a rule to submit a work report every Friday.',
              vi: 'Có quy định phải nộp báo cáo công việc vào thứ Sáu hằng tuần.'
            }
          },
          {
            jp: 'だから私は、必ず期限を守ることにしている。',
            romaji: 'Dakara watashi wa, kanarazu kigen o mamoru koto ni shite iru.',
            meaning: {
              en: 'So I make it a policy to always keep the deadline.',
              vi: 'Vì vậy tôi luôn tự nhủ phải giữ đúng kỳ hạn.'
            }
          },
          {
            jp: 'また、健康のために早起きして運動することにしている。',
            romaji: 'Mata, kenkō no tame ni hayaoki shite undō suru koto ni shite iru.',
            meaning: {
              en: 'Also, for my health, I make it a habit to get up early and exercise.',
              vi: 'Ngoài ra, vì sức khỏe, tôi có thói quen dậy sớm và tập thể dục.'
            }
          },
          {
            jp: '良い習慣を続けるのは大切だと思う。',
            romaji: 'Yoi shūkan o tsuzukeru no wa taisetsu da to omou.',
            meaning: {
              en: 'I think continuing good habits is important.',
              vi: 'Tôi nghĩ duy trì thói quen tốt là điều quan trọng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is the company rule about arriving?',
              vi: 'Quy định của công ty về việc đến là gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Arrive by 9 a.m.', vi: 'Đến trước 9 giờ sáng' } },
              { id: 'b', label: { en: 'Arrive by 10 a.m.', vi: 'Đến trước 10 giờ sáng' } },
              { id: 'c', label: { en: 'Arrive any time', vi: 'Đến lúc nào cũng được' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer do for health?',
              vi: 'Người viết làm gì vì sức khỏe?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Gets up early and exercises', vi: 'Dậy sớm và tập thể dục' }
              },
              { id: 'b', label: { en: 'Sleeps a lot', vi: 'Ngủ thật nhiều' } },
              { id: 'c', label: { en: 'Drinks alcohol', vi: 'Uống rượu' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-32',
    number: 32,
    title: {
      en: 'Certainty & Definitions',
      vi: 'Sự chắc chắn & Định nghĩa'
    },
    focus: {
      en: 'Draw conclusions with 〜に違いない / 〜に決まっている, and give a definition with 〜とは.',
      vi: 'Đưa ra kết luận với 〜に違いない / 〜に決まっている, và nêu định nghĩa với 〜とは.'
    },
    vocab: [
      {
        kana: 'しょうこ',
        kanji: '証拠',
        romaji: 'shōko',
        meaning: { en: 'evidence', vi: 'bằng chứng' }
      },
      {
        kana: 'はんにん',
        kanji: '犯人',
        romaji: 'hannin',
        meaning: { en: 'culprit, criminal', vi: 'thủ phạm' }
      },
      {
        kana: 'しんじつ',
        kanji: '真実',
        romaji: 'shinjitsu',
        meaning: { en: 'truth', vi: 'sự thật' }
      },
      {
        kana: 'たしかに',
        kanji: '確かに',
        romaji: 'tashika ni',
        meaning: { en: 'certainly, surely', vi: 'quả thực, chắc chắn' }
      },
      {
        kana: 'うたがう',
        kanji: '疑う',
        romaji: 'utagau',
        meaning: { en: 'to doubt, suspect', vi: 'nghi ngờ' }
      },
      {
        kana: 'そうぞう',
        kanji: '想像',
        romaji: 'sōzō',
        meaning: { en: 'imagination', vi: 'sự tưởng tượng' }
      },
      {
        kana: 'ひょうじょう',
        kanji: '表情',
        romaji: 'hyōjō',
        meaning: { en: 'facial expression', vi: 'nét mặt, biểu cảm' }
      },
      {
        kana: 'ようす',
        kanji: '様子',
        romaji: 'yōsu',
        meaning: { en: 'appearance, state', vi: 'vẻ, tình trạng' }
      },
      {
        kana: 'いみ',
        kanji: '意味',
        romaji: 'imi',
        meaning: { en: 'meaning', vi: 'ý nghĩa' }
      },
      {
        kana: 'じゆう',
        kanji: '自由',
        romaji: 'jiyū',
        meaning: { en: 'freedom', vi: 'tự do' }
      },
      {
        kana: 'しあわせ',
        kanji: '幸せ',
        romaji: 'shiawase',
        meaning: { en: 'happiness', vi: 'hạnh phúc' }
      },
      {
        kana: 'ぜったい',
        kanji: '絶対',
        romaji: 'zettai',
        meaning: { en: 'absolutely', vi: 'tuyệt đối' }
      }
    ],
    grammar: [
      {
        pattern: '〜に違いない',
        title: { en: 'に違いない (must be, no doubt)', vi: 'に違いない (chắc chắn là)' },
        explanation: {
          en: 'に違いない expresses a confident conclusion based on evidence: "it must be / surely is".',
          vi: 'に違いない diễn đạt kết luận tự tin dựa trên bằng chứng: "chắc chắn là / hẳn là".'
        },
        examples: [
          {
            jp: '電気がついている。誰か家にいるに違いない。',
            romaji: 'Denki ga tsuite iru. Dareka ie ni iru ni chigainai.',
            meaning: {
              en: 'The lights are on. Someone must be home.',
              vi: 'Đèn đang sáng. Chắc chắn có ai đó ở nhà.'
            }
          },
          {
            jp: 'あの様子では、彼は何かを隠しているに違いない。',
            romaji: 'Ano yōsu de wa, kare wa nanika o kakushite iru ni chigainai.',
            meaning: {
              en: 'From the way he looks, he must be hiding something.',
              vi: 'Nhìn vẻ đó, chắc chắn anh ta đang giấu điều gì đó.'
            }
          }
        ]
      },
      {
        pattern: '〜に決まっている',
        title: {
          en: 'に決まっている (surely, bound to be)',
          vi: 'に決まっている (chắc chắn, đương nhiên)'
        },
        explanation: {
          en: 'に決まっている shows the speaker\u2019s strong conviction that something is obviously so.',
          vi: 'に決まっている thể hiện niềm tin mạnh mẽ của người nói rằng điều gì đó hiển nhiên là vậy.'
        },
        examples: [
          {
            jp: '一人で全部やるのは無理に決まっている。',
            romaji: 'Hitori de zenbu yaru no wa muri ni kimatte iru.',
            meaning: {
              en: 'Doing it all alone is surely impossible.',
              vi: 'Làm tất cả một mình thì chắc chắn là không thể.'
            }
          },
          {
            jp: 'そんなに勉強したのだから、合格するに決まっている。',
            romaji: 'Sonna ni benkyō shita no da kara, gōkaku suru ni kimatte iru.',
            meaning: {
              en: 'Since you studied that much, you are bound to pass.',
              vi: 'Vì đã học nhiều như vậy nên chắc chắn sẽ đỗ.'
            }
          }
        ]
      },
      {
        pattern: '〜とは',
        title: { en: 'とは (X means / the definition of X)', vi: 'とは (X nghĩa là / định nghĩa)' },
        explanation: {
          en: 'Noun + とは introduces a definition or explanation: "X is ..." / "by X, we mean ...".',
          vi: 'Danh từ + とは giới thiệu một định nghĩa hay lời giải thích: "X là ..." / "X có nghĩa là ...".'
        },
        examples: [
          {
            jp: '自由とは、自分で選べることだ。',
            romaji: 'Jiyū to wa, jibun de eraberu koto da.',
            meaning: {
              en: 'Freedom means being able to choose for yourself.',
              vi: 'Tự do nghĩa là có thể tự mình lựa chọn.'
            }
          },
          {
            jp: '幸せとは何か、よく考える。',
            romaji: 'Shiawase to wa nani ka, yoku kangaeru.',
            meaning: {
              en: 'I often think about what happiness is.',
              vi: 'Tôi thường suy nghĩ hạnh phúc là gì.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'At the scene', vi: 'Tại hiện trường' },
        lines: [
          {
            jp: '部屋の電気がついていて、ドアも開いている。',
            romaji: 'Heya no denki ga tsuite ite, doa mo aite iru.',
            meaning: {
              en: 'The room\u2019s light is on, and the door is open too.',
              vi: 'Đèn trong phòng đang sáng, và cửa cũng đang mở.'
            }
          },
          {
            jp: 'この証拠から見ると、犯人はまだ近くにいるに違いない。',
            romaji: 'Kono shōko kara miru to, hannin wa mada chikaku ni iru ni chigainai.',
            meaning: {
              en: 'Judging from this evidence, the culprit must still be nearby.',
              vi: 'Nhìn từ bằng chứng này, thủ phạm chắc chắn vẫn còn ở gần đây.'
            }
          },
          {
            jp: '彼の表情を見れば、何か隠しているに決まっている。',
            romaji: 'Kare no hyōjō o mireba, nanika kakushite iru ni kimatte iru.',
            meaning: {
              en: 'If you look at his expression, he is surely hiding something.',
              vi: 'Nhìn nét mặt anh ta thì chắc chắn là đang giấu điều gì đó.'
            }
          },
          {
            jp: 'でも、証拠がなければ、人を疑うべきではない。',
            romaji: 'Demo, shōko ga nakereba, hito o utagau beki de wa nai.',
            meaning: {
              en: 'But without evidence, one should not suspect people.',
              vi: 'Nhưng nếu không có bằng chứng thì không nên nghi ngờ người khác.'
            }
          },
          {
            jp: '真実とは、確かな証拠から生まれるものだ。',
            romaji: 'Shinjitsu to wa, tashika na shōko kara umareru mono da.',
            meaning: {
              en: 'The truth is something born from solid evidence.',
              vi: 'Sự thật là thứ sinh ra từ bằng chứng chắc chắn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'According to the evidence, where must the culprit be?',
              vi: 'Theo bằng chứng, thủ phạm chắc chắn ở đâu?'
            },
            choices: [
              { id: 'a', label: { en: 'Far away', vi: 'Ở rất xa' } },
              { id: 'b', label: { en: 'Still nearby', vi: 'Vẫn còn ở gần' } },
              { id: 'c', label: { en: 'In another country', vi: 'Ở một nước khác' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'According to the writer, what is the truth born from?',
              vi: 'Theo người viết, sự thật sinh ra từ đâu?'
            },
            choices: [
              { id: 'a', label: { en: 'Imagination', vi: 'Sự tưởng tượng' } },
              { id: 'b', label: { en: 'Solid evidence', vi: 'Bằng chứng chắc chắn' } },
              { id: 'c', label: { en: 'Rumors', vi: 'Tin đồn' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  }
];
