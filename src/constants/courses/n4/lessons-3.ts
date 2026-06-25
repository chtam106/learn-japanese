import type { Lesson } from '@/constants/courses/types.ts';

export const n4LessonsC: Lesson[] = [
  {
    id: 'lesson-17',
    number: 17,
    title: {
      en: 'Transitive & Intransitive Verb Pairs',
      vi: 'Cặp động từ tự động & tha động'
    },
    focus: {
      en: 'Tell paired verbs apart: 自動詞 (が, happens on its own) vs 他動詞 (を, someone does it).',
      vi: 'Phân biệt cặp động từ: 自動詞 (が, tự xảy ra) và 他動詞 (を, ai đó làm).'
    },
    vocab: [
      {
        kana: 'あく',
        kanji: '開く',
        romaji: 'aku',
        meaning: { en: 'to open (intransitive)', vi: 'mở ra (tự động)' }
      },
      {
        kana: 'あける',
        kanji: '開ける',
        romaji: 'akeru',
        meaning: { en: 'to open (transitive)', vi: 'mở (tha động)' }
      },
      {
        kana: 'しまる',
        kanji: '閉まる',
        romaji: 'shimaru',
        meaning: { en: 'to close (intransitive)', vi: 'đóng lại (tự động)' }
      },
      {
        kana: 'しめる',
        kanji: '閉める',
        romaji: 'shimeru',
        meaning: { en: 'to close (transitive)', vi: 'đóng (tha động)' }
      },
      {
        kana: 'つく',
        romaji: 'tsuku',
        meaning: { en: 'to turn on, light up (intransitive)', vi: 'bật sáng (tự động)' }
      },
      {
        kana: 'つける',
        romaji: 'tsukeru',
        meaning: { en: 'to turn on (transitive)', vi: 'bật (tha động)' }
      },
      {
        kana: 'きえる',
        kanji: '消える',
        romaji: 'kieru',
        meaning: { en: 'to go out, disappear (intransitive)', vi: 'tắt, biến mất (tự động)' }
      },
      {
        kana: 'けす',
        kanji: '消す',
        romaji: 'kesu',
        meaning: { en: 'to turn off, erase (transitive)', vi: 'tắt, xóa (tha động)' }
      },
      { kana: 'まど', kanji: '窓', romaji: 'mado', meaning: { en: 'window', vi: 'cửa sổ' } },
      { kana: 'ドア', romaji: 'doa', meaning: { en: 'door', vi: 'cửa' } },
      {
        kana: 'でんき',
        kanji: '電気',
        romaji: 'denki',
        meaning: { en: 'light, electricity', vi: 'đèn, điện' }
      },
      { kana: 'エアコン', romaji: 'eakon', meaning: { en: 'air conditioner', vi: 'máy lạnh' } }
    ],
    grammar: [
      {
        pattern: 'N が V(自動詞)',
        title: { en: 'Intransitive verbs (が)', vi: 'Động từ tự động (が)' },
        explanation: {
          en: 'An intransitive verb describes a change that happens by itself; the thing that changes is marked with が. No doer is mentioned.',
          vi: 'Động từ tự động mô tả sự thay đổi tự xảy ra; sự vật thay đổi được đánh dấu bằng が. Không nhắc đến người thực hiện.'
        },
        examples: [
          {
            jp: 'ドアが あきました。',
            romaji: 'Doa ga akimashita.',
            meaning: { en: 'The door opened.', vi: 'Cửa đã mở ra.' }
          },
          {
            jp: 'でんきが きえました。',
            romaji: 'Denki ga kiemashita.',
            meaning: { en: 'The light went out.', vi: 'Đèn đã tắt.' }
          }
        ]
      },
      {
        pattern: 'N を V(他動詞)',
        title: { en: 'Transitive verbs (を)', vi: 'Động từ tha động (を)' },
        explanation: {
          en: 'A transitive verb has someone act on an object, which is marked with を. The doer causes the change on purpose.',
          vi: 'Động từ tha động có người tác động lên một đối tượng, đánh dấu bằng を. Người thực hiện chủ động gây ra sự thay đổi.'
        },
        examples: [
          {
            jp: 'わたしは ドアを あけました。',
            romaji: 'Watashi wa doa o akemashita.',
            meaning: { en: 'I opened the door.', vi: 'Tôi đã mở cửa.' }
          },
          {
            jp: 'でんきを けして ください。',
            romaji: 'Denki o keshite kudasai.',
            meaning: { en: 'Please turn off the light.', vi: 'Hãy tắt đèn giúp tôi.' }
          }
        ]
      },
      {
        pattern: '〜が 自動詞 / 〜を 他動詞',
        title: { en: 'Same event, two viewpoints', vi: 'Cùng sự việc, hai góc nhìn' },
        explanation: {
          en: 'Pairs like 開く/開ける describe the same event. Use the intransitive to focus on the result, the transitive to name the doer.',
          vi: 'Các cặp như 開く/開ける mô tả cùng một sự việc. Dùng tự động để nhấn vào kết quả, tha động để nêu người làm.'
        },
        examples: [
          {
            jp: 'まどが しまりました。',
            romaji: 'Mado ga shimarimashita.',
            meaning: { en: 'The window closed.', vi: 'Cửa sổ đã đóng lại.' }
          },
          {
            jp: 'りんさんが まどを しめました。',
            romaji: 'Rin-san ga mado o shimemashita.',
            meaning: { en: 'Rin closed the window.', vi: 'Rin đã đóng cửa sổ.' }
          }
        ]
      },
      {
        pattern: 'スイッチを つける / でんきが つく',
        title: { en: 'Turning things on and off', vi: 'Bật và tắt thiết bị' },
        explanation: {
          en: 'つける/けす (transitive) take を for the device; つく/きえる (intransitive) take が for what turns on or goes off.',
          vi: 'つける/けす (tha động) dùng を cho thiết bị; つく/きえる (tự động) dùng が cho cái bật lên hoặc tắt đi.'
        },
        examples: [
          {
            jp: 'エアコンを つけます。',
            romaji: 'Eakon o tsukemasu.',
            meaning: { en: 'I will turn on the air conditioner.', vi: 'Tôi sẽ bật máy lạnh.' }
          },
          {
            jp: 'エアコンが つきました。',
            romaji: 'Eakon ga tsukimashita.',
            meaning: { en: 'The air conditioner came on.', vi: 'Máy lạnh đã bật lên.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A cold room', vi: 'Căn phòng lạnh' },
        lines: [
          {
            jp: 'へやに はいると、まどが あいて いました。',
            romaji: 'Heya ni hairu to, mado ga aite imashita.',
            meaning: {
              en: 'When I entered the room, the window was open.',
              vi: 'Khi vào phòng, cửa sổ đang mở.'
            }
          },
          {
            jp: 'さむかったので、わたしは まどを しめました。',
            romaji: 'Samukatta node, watashi wa mado o shimemashita.',
            meaning: {
              en: 'Because it was cold, I closed the window.',
              vi: 'Vì lạnh nên tôi đã đóng cửa sổ.'
            }
          },
          {
            jp: 'それから、でんきを つけて、エアコンを けしました。',
            romaji: 'Sorekara, denki o tsukete, eakon o keshimashita.',
            meaning: {
              en: 'Then I turned on the light and turned off the air conditioner.',
              vi: 'Sau đó tôi bật đèn và tắt máy lạnh.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What was the state of the window?',
              vi: 'Cửa sổ đang ở trạng thái nào?'
            },
            choices: [
              { id: 'a', label: { en: 'It was open', vi: 'Đang mở' } },
              { id: 'b', label: { en: 'It was closed', vi: 'Đang đóng' } },
              { id: 'c', label: { en: 'It was broken', vi: 'Bị hỏng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the writer do with the air conditioner?',
              vi: 'Người viết đã làm gì với máy lạnh?'
            },
            choices: [
              { id: 'a', label: { en: 'Turned it on', vi: 'Bật nó lên' } },
              { id: 'b', label: { en: 'Turned it off', vi: 'Tắt nó đi' } },
              { id: 'c', label: { en: 'Repaired it', vi: 'Sửa nó' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-18',
    number: 18,
    title: {
      en: 'Resultant State: 〜てある',
      vi: 'Trạng thái kết quả: 〜てある'
    },
    focus: {
      en: 'Use 〜てある to say something is in a state because someone did it on purpose and left it that way.',
      vi: 'Dùng 〜てある để nói cái gì đó ở trạng thái vì ai đó đã cố ý làm và để nguyên như vậy.'
    },
    vocab: [
      { kana: 'はる', kanji: '貼る', romaji: 'haru', meaning: { en: 'to stick, post', vi: 'dán' } },
      { kana: 'かべ', kanji: '壁', romaji: 'kabe', meaning: { en: 'wall', vi: 'tường' } },
      { kana: 'メモ', romaji: 'memo', meaning: { en: 'memo, note', vi: 'ghi chú' } },
      { kana: 'かみ', kanji: '紙', romaji: 'kami', meaning: { en: 'paper', vi: 'giấy' } },
      {
        kana: 'れいぞうこ',
        kanji: '冷蔵庫',
        romaji: 'reizōko',
        meaning: { en: 'refrigerator', vi: 'tủ lạnh' }
      },
      {
        kana: 'よやく',
        kanji: '予約',
        romaji: 'yoyaku',
        meaning: { en: 'reservation', vi: 'sự đặt chỗ' }
      },
      {
        kana: 'じゅんび',
        kanji: '準備',
        romaji: 'junbi',
        meaning: { en: 'preparation', vi: 'sự chuẩn bị' }
      },
      {
        kana: 'ならべる',
        kanji: '並べる',
        romaji: 'naraberu',
        meaning: { en: 'to line up, arrange', vi: 'xếp, bày' }
      },
      {
        kana: 'かざる',
        kanji: '飾る',
        romaji: 'kazaru',
        meaning: { en: 'to decorate', vi: 'trang trí' }
      },
      {
        kana: 'りょうり',
        kanji: '料理',
        romaji: 'ryōri',
        meaning: { en: 'food, dish', vi: 'món ăn' }
      },
      { kana: 'テーブル', romaji: 'tēburu', meaning: { en: 'table', vi: 'bàn' } },
      { kana: 'もう', romaji: 'mō', meaning: { en: 'already', vi: 'đã, rồi' } }
    ],
    grammar: [
      {
        pattern: 'N が V(他)てある',
        title: { en: 'Something has been done', vi: 'Cái gì đó đã được làm sẵn' },
        explanation: {
          en: '〜てある attaches to a transitive verb to show a state left behind by a deliberate action. The object usually takes が.',
          vi: '〜てある gắn vào động từ tha động để chỉ trạng thái còn lại sau một hành động có chủ ý. Đối tượng thường dùng が.'
        },
        examples: [
          {
            jp: 'かべに ポスターが はって あります。',
            romaji: 'Kabe ni posutā ga hatte arimasu.',
            meaning: {
              en: 'A poster has been put up on the wall.',
              vi: 'Trên tường có dán sẵn áp phích.'
            }
          },
          {
            jp: 'まどが あけて あります。',
            romaji: 'Mado ga akete arimasu.',
            meaning: { en: 'The window has been left open.', vi: 'Cửa sổ đã được mở sẵn.' }
          }
        ]
      },
      {
        pattern: '〜てある vs 〜ている',
        title: { en: 'On purpose vs by itself', vi: 'Cố ý và tự nhiên' },
        explanation: {
          en: 'てある (transitive) implies someone arranged it on purpose; the intransitive ている just states the condition with no doer in mind.',
          vi: 'てある (tha động) hàm ý ai đó sắp đặt có chủ ý; ている (tự động) chỉ nêu tình trạng, không nghĩ tới người làm.'
        },
        examples: [
          {
            jp: 'でんきが つけて あります。',
            romaji: 'Denki ga tsukete arimasu.',
            meaning: {
              en: 'The light has been left on (on purpose).',
              vi: 'Đèn được bật sẵn (có chủ ý).'
            }
          },
          {
            jp: 'でんきが ついて います。',
            romaji: 'Denki ga tsuite imasu.',
            meaning: { en: 'The light is on.', vi: 'Đèn đang sáng.' }
          }
        ]
      },
      {
        pattern: 'もう N が V てある',
        title: { en: 'Already prepared', vi: 'Đã chuẩn bị sẵn' },
        explanation: {
          en: 'Add もう to stress that preparation is already finished and the result is ready.',
          vi: 'Thêm もう để nhấn mạnh việc chuẩn bị đã xong và kết quả đã sẵn sàng.'
        },
        examples: [
          {
            jp: 'りょうりは もう つくって あります。',
            romaji: 'Ryōri wa mō tsukutte arimasu.',
            meaning: { en: 'The food has already been made.', vi: 'Món ăn đã được làm sẵn rồi.' }
          },
          {
            jp: 'ホテルは よやくして あります。',
            romaji: 'Hoteru wa yoyaku shite arimasu.',
            meaning: { en: 'The hotel has been reserved.', vi: 'Khách sạn đã được đặt sẵn.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Getting ready for guests', vi: 'Chuẩn bị đón khách' },
        lines: [
          {
            jp: 'きょうは ともだちが きます。じゅんびは もう して あります。',
            romaji: 'Kyō wa tomodachi ga kimasu. Junbi wa mō shite arimasu.',
            meaning: {
              en: 'Friends are coming today. The preparations have already been made.',
              vi: 'Hôm nay bạn bè sẽ đến. Việc chuẩn bị đã làm xong rồi.'
            }
          },
          {
            jp: 'テーブルに りょうりが ならべて あります。',
            romaji: 'Tēburu ni ryōri ga narabete arimasu.',
            meaning: {
              en: 'Dishes have been arranged on the table.',
              vi: 'Các món ăn đã được bày sẵn trên bàn.'
            }
          },
          {
            jp: 'かべには はなも かざって あります。',
            romaji: 'Kabe ni wa hana mo kazatte arimasu.',
            meaning: {
              en: 'Flowers have also been put up on the wall.',
              vi: 'Trên tường cũng đã trang trí sẵn hoa.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Why is the writer preparing?', vi: 'Tại sao người viết chuẩn bị?' },
            choices: [
              { id: 'a', label: { en: 'Friends are coming', vi: 'Bạn bè sắp đến' } },
              { id: 'b', label: { en: 'They are moving house', vi: 'Họ chuyển nhà' } },
              { id: 'c', label: { en: 'They are going out', vi: 'Họ sắp ra ngoài' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What has been arranged on the table?',
              vi: 'Trên bàn đã được bày gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Books', vi: 'Sách' } },
              { id: 'b', label: { en: 'Dishes', vi: 'Các món ăn' } },
              { id: 'c', label: { en: 'Memos', vi: 'Ghi chú' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-19',
    number: 19,
    title: {
      en: 'Doing in Advance: 〜ておく',
      vi: 'Làm trước: 〜ておく'
    },
    focus: {
      en: 'Use 〜ておく to do something in advance for the future, or to leave something as it is.',
      vi: 'Dùng 〜ておく để làm gì đó trước cho tương lai, hoặc để cứ để nguyên như vậy.'
    },
    vocab: [
      {
        kana: 'りょこう',
        kanji: '旅行',
        romaji: 'ryokō',
        meaning: { en: 'trip, travel', vi: 'chuyến du lịch' }
      },
      { kana: 'きっぷ', kanji: '切符', romaji: 'kippu', meaning: { en: 'ticket', vi: 'vé' } },
      { kana: 'ホテル', romaji: 'hoteru', meaning: { en: 'hotel', vi: 'khách sạn' } },
      {
        kana: 'よやくする',
        kanji: '予約する',
        romaji: 'yoyaku suru',
        meaning: { en: 'to reserve, book', vi: 'đặt chỗ' }
      },
      {
        kana: 'しらべる',
        kanji: '調べる',
        romaji: 'shiraberu',
        meaning: { en: 'to look up, check', vi: 'tra cứu' }
      },
      {
        kana: 'かくにんする',
        kanji: '確認する',
        romaji: 'kakunin suru',
        meaning: { en: 'to confirm', vi: 'xác nhận' }
      },
      {
        kana: 'れんらくする',
        kanji: '連絡する',
        romaji: 'renraku suru',
        meaning: { en: 'to contact', vi: 'liên lạc' }
      },
      {
        kana: 'ひやす',
        kanji: '冷やす',
        romaji: 'hiyasu',
        meaning: { en: 'to chill, cool', vi: 'làm lạnh' }
      },
      { kana: 'ビール', romaji: 'bīru', meaning: { en: 'beer', vi: 'bia' } },
      {
        kana: 'まえに',
        kanji: '前に',
        romaji: 'mae ni',
        meaning: { en: 'beforehand', vi: 'trước khi, từ trước' }
      },
      { kana: 'かう', kanji: '買う', romaji: 'kau', meaning: { en: 'to buy', vi: 'mua' } },
      { kana: 'そのまま', romaji: 'sonomama', meaning: { en: 'as it is', vi: 'cứ để nguyên' } }
    ],
    grammar: [
      {
        pattern: 'V て おく',
        title: { en: 'Do something in advance', vi: 'Làm gì đó trước' },
        explanation: {
          en: '〜ておく means doing an action ahead of time so things are ready for later.',
          vi: '〜ておく nghĩa là làm một việc từ trước để mọi thứ sẵn sàng cho sau này.'
        },
        examples: [
          {
            jp: 'りょこうの まえに ホテルを よやくして おきます。',
            romaji: 'Ryokō no mae ni hoteru o yoyaku shite okimasu.',
            meaning: {
              en: 'I will book the hotel in advance before the trip.',
              vi: 'Tôi sẽ đặt khách sạn trước khi đi du lịch.'
            }
          },
          {
            jp: 'パーティーの まえに ビールを ひやして おきました。',
            romaji: 'Pātī no mae ni bīru o hiyashite okimashita.',
            meaning: {
              en: 'I chilled the beer before the party.',
              vi: 'Tôi đã làm lạnh bia trước bữa tiệc.'
            }
          }
        ]
      },
      {
        pattern: 'V て おく (leave as is)',
        title: { en: 'Leave something as it is', vi: 'Cứ để nguyên như vậy' },
        explanation: {
          en: '〜ておく can also mean leaving a current state unchanged because it is convenient.',
          vi: '〜ておく cũng có thể nghĩa là cứ giữ nguyên trạng thái hiện tại vì như vậy thì tiện.'
        },
        examples: [
          {
            jp: 'まどは あけて おいて ください。',
            romaji: 'Mado wa akete oite kudasai.',
            meaning: { en: 'Please leave the window open.', vi: 'Hãy cứ để cửa sổ mở.' }
          },
          {
            jp: 'その かみは そのまま おいて おきます。',
            romaji: 'Sono kami wa sonomama oite okimasu.',
            meaning: {
              en: 'I will leave that paper as it is.',
              vi: 'Tôi sẽ cứ để tờ giấy đó như vậy.'
            }
          }
        ]
      },
      {
        pattern: 'V とく (casual)',
        title: { en: 'Casual contraction 〜とく', vi: 'Rút gọn thông tục 〜とく' },
        explanation: {
          en: 'In casual speech, 〜ておく often becomes 〜とく (and 〜でおく becomes 〜どく).',
          vi: 'Trong văn nói thân mật, 〜ておく thường thành 〜とく (và 〜でおく thành 〜どく).'
        },
        examples: [
          {
            jp: 'きっぷを かっとくね。',
            romaji: 'Kippu o kattoku ne.',
            meaning: {
              en: "I'll buy the tickets (in advance), okay?",
              vi: 'Tớ sẽ mua vé trước nhé.'
            }
          },
          {
            jp: 'あとで しらべとくよ。',
            romaji: 'Ato de shirabetoku yo.',
            meaning: { en: "I'll look it up later.", vi: 'Lát nữa tớ tra giúp cho.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Planning a trip', vi: 'Lên kế hoạch chuyến đi' },
        lines: [
          {
            jp: 'らいしゅう りょこうに いきますから、いろいろ じゅんびして おきます。',
            romaji: 'Raishū ryokō ni ikimasu kara, iroiro junbi shite okimasu.',
            meaning: {
              en: 'Since I am going on a trip next week, I will prepare various things in advance.',
              vi: 'Tuần sau tôi đi du lịch nên sẽ chuẩn bị nhiều thứ trước.'
            }
          },
          {
            jp: 'きのう きっぷを かって、ホテルも よやくして おきました。',
            romaji: 'Kinō kippu o katte, hoteru mo yoyaku shite okimashita.',
            meaning: {
              en: 'Yesterday I bought the tickets and also reserved a hotel in advance.',
              vi: 'Hôm qua tôi đã mua vé và cũng đặt khách sạn trước.'
            }
          },
          {
            jp: 'いく まえに、てんきも しらべて おきます。',
            romaji: 'Iku mae ni, tenki mo shirabete okimasu.',
            meaning: {
              en: 'Before going, I will also check the weather beforehand.',
              vi: 'Trước khi đi, tôi cũng sẽ tra trước thời tiết.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the writer do yesterday?',
              vi: 'Hôm qua người viết đã làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Bought tickets and booked a hotel', vi: 'Mua vé và đặt khách sạn' }
              },
              { id: 'b', label: { en: 'Went on the trip', vi: 'Đi du lịch' } },
              { id: 'c', label: { en: 'Checked the weather', vi: 'Tra thời tiết' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What will the writer do before going?',
              vi: 'Trước khi đi người viết sẽ làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Check the weather', vi: 'Tra thời tiết' } },
              { id: 'b', label: { en: 'Buy a hotel', vi: 'Mua khách sạn' } },
              { id: 'c', label: { en: 'Cancel the trip', vi: 'Hủy chuyến đi' } }
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
    title: {
      en: 'Completion & Regret: 〜てしまう',
      vi: 'Hoàn thành & Tiếc nuối: 〜てしまう'
    },
    focus: {
      en: 'Use 〜てしまう (casual 〜ちゃう/〜じゃう) to mark finishing completely or doing something regrettable.',
      vi: 'Dùng 〜てしまう (thông tục 〜ちゃう/〜じゃう) để chỉ làm xong hoàn toàn hoặc làm điều đáng tiếc.'
    },
    vocab: [
      {
        kana: 'しゅくだい',
        kanji: '宿題',
        romaji: 'shukudai',
        meaning: { en: 'homework', vi: 'bài tập về nhà' }
      },
      {
        kana: 'わすれる',
        kanji: '忘れる',
        romaji: 'wasureru',
        meaning: { en: 'to forget', vi: 'quên' }
      },
      { kana: 'なくす', romaji: 'nakusu', meaning: { en: 'to lose', vi: 'làm mất' } },
      {
        kana: 'おとす',
        kanji: '落とす',
        romaji: 'otosu',
        meaning: { en: 'to drop', vi: 'làm rơi' }
      },
      { kana: 'さいふ', kanji: '財布', romaji: 'saifu', meaning: { en: 'wallet', vi: 'ví' } },
      {
        kana: 'ぜんぶ',
        kanji: '全部',
        romaji: 'zenbu',
        meaning: { en: 'all, everything', vi: 'tất cả' }
      },
      {
        kana: 'こわす',
        kanji: '壊す',
        romaji: 'kowasu',
        meaning: { en: 'to break', vi: 'làm hỏng' }
      },
      {
        kana: 'おくれる',
        kanji: '遅れる',
        romaji: 'okureru',
        meaning: { en: 'to be late', vi: 'trễ, muộn' }
      },
      {
        kana: 'まちがえる',
        kanji: '間違える',
        romaji: 'machigaeru',
        meaning: { en: 'to make a mistake', vi: 'nhầm lẫn' }
      },
      {
        kana: 'おわる',
        kanji: '終わる',
        romaji: 'owaru',
        meaning: { en: 'to finish, end', vi: 'kết thúc' }
      },
      {
        kana: 'よみおわる',
        kanji: '読み終わる',
        romaji: 'yomiowaru',
        meaning: { en: 'to finish reading', vi: 'đọc xong' }
      },
      {
        kana: 'ねぼう',
        kanji: '寝坊',
        romaji: 'nebō',
        meaning: { en: 'oversleeping', vi: 'việc ngủ quên' }
      }
    ],
    grammar: [
      {
        pattern: 'V て しまう (completion)',
        title: { en: 'Finishing completely', vi: 'Làm xong hoàn toàn' },
        explanation: {
          en: '〜てしまう can stress that an action is done thoroughly or all the way to the end.',
          vi: '〜てしまう có thể nhấn rằng hành động được làm trọn vẹn, đến tận cùng.'
        },
        examples: [
          {
            jp: 'しゅくだいを ぜんぶ やって しまいました。',
            romaji: 'Shukudai o zenbu yatte shimaimashita.',
            meaning: { en: 'I finished all the homework.', vi: 'Tôi đã làm xong toàn bộ bài tập.' }
          },
          {
            jp: 'この ほんを よみおわって しまいました。',
            romaji: 'Kono hon o yomiowatte shimaimashita.',
            meaning: { en: 'I finished reading this book.', vi: 'Tôi đã đọc xong quyển sách này.' }
          }
        ]
      },
      {
        pattern: 'V て しまう (regret)',
        title: { en: 'Doing something regrettable', vi: 'Làm điều đáng tiếc' },
        explanation: {
          en: '〜てしまう also shows that something happened by mistake or with a feeling of regret.',
          vi: '〜てしまう cũng diễn tả việc xảy ra do lỡ tay hoặc kèm cảm giác tiếc nuối.'
        },
        examples: [
          {
            jp: 'でんしゃに さいふを わすれて しまいました。',
            romaji: 'Densha ni saifu o wasurete shimaimashita.',
            meaning: { en: 'I forgot my wallet on the train.', vi: 'Tôi lỡ để quên ví trên tàu.' }
          },
          {
            jp: 'コップを おとして しまいました。',
            romaji: 'Koppu o otoshite shimaimashita.',
            meaning: { en: 'I dropped the cup.', vi: 'Tôi lỡ làm rơi cái cốc.' }
          }
        ]
      },
      {
        pattern: 'V ちゃう / V じゃう',
        title: { en: 'Casual 〜ちゃう・〜じゃう', vi: 'Thông tục 〜ちゃう・〜じゃう' },
        explanation: {
          en: 'In casual speech 〜てしまう becomes 〜ちゃう, and 〜でしまう becomes 〜じゃう.',
          vi: 'Trong văn nói thân mật, 〜てしまう thành 〜ちゃう, còn 〜でしまう thành 〜じゃう.'
        },
        examples: [
          {
            jp: 'ケーキを ぜんぶ たべちゃった。',
            romaji: 'Kēki o zenbu tabechatta.',
            meaning: { en: 'I ate all the cake.', vi: 'Tớ ăn hết cả bánh rồi.' }
          },
          {
            jp: 'スマホが こわれちゃった。',
            romaji: 'Sumaho ga kowarechatta.',
            meaning: { en: 'My phone broke.', vi: 'Điện thoại tớ hỏng mất rồi.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A bad morning', vi: 'Một buổi sáng tồi tệ' },
        lines: [
          {
            jp: 'けさ ねぼうして しまいました。',
            romaji: 'Kesa nebō shite shimaimashita.',
            meaning: { en: 'This morning I overslept.', vi: 'Sáng nay tôi đã ngủ quên mất.' }
          },
          {
            jp: 'いそいで いえを でましたが、でんしゃに おくれて しまいました。',
            romaji: 'Isoide ie o demashita ga, densha ni okurete shimaimashita.',
            meaning: {
              en: 'I left home in a hurry, but I was late for the train.',
              vi: 'Tôi vội vàng ra khỏi nhà, nhưng đã trễ tàu mất.'
            }
          },
          {
            jp: 'そのうえ、かいしゃに さいふを わすれて しまいました。',
            romaji: 'Sono ue, kaisha ni saifu o wasurete shimaimashita.',
            meaning: {
              en: 'On top of that, I forgot my wallet at the office.',
              vi: 'Hơn nữa, tôi còn để quên ví ở công ty.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What happened this morning?', vi: 'Sáng nay đã xảy ra chuyện gì?' },
            choices: [
              { id: 'a', label: { en: 'The writer overslept', vi: 'Người viết ngủ quên' } },
              { id: 'b', label: { en: 'The writer got up early', vi: 'Người viết dậy sớm' } },
              { id: 'c', label: { en: 'The train was early', vi: 'Tàu đến sớm' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What did the writer forget?', vi: 'Người viết đã quên gì?' },
            choices: [
              { id: 'a', label: { en: 'A wallet', vi: 'Cái ví' } },
              { id: 'b', label: { en: 'Homework', vi: 'Bài tập' } },
              { id: 'c', label: { en: 'A ticket', vi: 'Cái vé' } }
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
    title: {
      en: 'In the Middle, Just Finished, Just Did',
      vi: 'Đang giữa chừng, vừa xong, vừa mới'
    },
    focus: {
      en: 'Contrast 〜ているところ (in the middle of), 〜たところ (just finished), and 〜たばかり (just did recently).',
      vi: 'Phân biệt 〜ているところ (đang giữa chừng), 〜たところ (vừa xong), và 〜たばかり (vừa mới làm gần đây).'
    },
    vocab: [
      { kana: 'いま', kanji: '今', romaji: 'ima', meaning: { en: 'now', vi: 'bây giờ' } },
      { kana: 'しょくじ', kanji: '食事', romaji: 'shokuji', meaning: { en: 'meal', vi: 'bữa ăn' } },
      {
        kana: 'はじめる',
        kanji: '始める',
        romaji: 'hajimeru',
        meaning: { en: 'to begin', vi: 'bắt đầu' }
      },
      { kana: 'つく', kanji: '着く', romaji: 'tsuku', meaning: { en: 'to arrive', vi: 'đến nơi' } },
      {
        kana: 'おきる',
        kanji: '起きる',
        romaji: 'okiru',
        meaning: { en: 'to wake up', vi: 'thức dậy' }
      },
      {
        kana: 'つくる',
        kanji: '作る',
        romaji: 'tsukuru',
        meaning: { en: 'to make', vi: 'làm, nấu' }
      },
      {
        kana: 'そつぎょうする',
        kanji: '卒業する',
        romaji: 'sotsugyō suru',
        meaning: { en: 'to graduate', vi: 'tốt nghiệp' }
      },
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
        meaning: { en: 'phone call', vi: 'cuộc gọi điện' }
      },
      {
        kana: 'かえる',
        kanji: '帰る',
        romaji: 'kaeru',
        meaning: { en: 'to return home', vi: 'về nhà' }
      },
      {
        kana: 'にゅうしゃする',
        kanji: '入社する',
        romaji: 'nyūsha suru',
        meaning: { en: 'to join a company', vi: 'vào làm công ty' }
      },
      { kana: 'ちょうど', romaji: 'chōdo', meaning: { en: 'exactly, just', vi: 'vừa đúng' } }
    ],
    grammar: [
      {
        pattern: 'V て いる ところ',
        title: { en: 'In the middle of doing', vi: 'Đang giữa chừng làm' },
        explanation: {
          en: '〜ているところ shows you are right in the middle of the action at this moment.',
          vi: '〜ているところ chỉ rằng bạn đang ở ngay giữa chừng hành động vào lúc này.'
        },
        examples: [
          {
            jp: 'いま ばんごはんを つくって いる ところです。',
            romaji: 'Ima bangohan o tsukutte iru tokoro desu.',
            meaning: {
              en: 'I am right in the middle of making dinner now.',
              vi: 'Bây giờ tôi đang nấu bữa tối giữa chừng.'
            }
          },
          {
            jp: 'しゅくだいを やって いる ところです。',
            romaji: 'Shukudai o yatte iru tokoro desu.',
            meaning: {
              en: 'I am in the middle of doing my homework.',
              vi: 'Tôi đang làm bài tập giữa chừng.'
            }
          }
        ]
      },
      {
        pattern: 'V た ところ',
        title: { en: 'Just finished doing', vi: 'Vừa làm xong' },
        explanation: {
          en: '〜たところ shows the action ended a moment ago; the result is fresh right now.',
          vi: '〜たところ chỉ rằng hành động vừa kết thúc; kết quả còn rất mới ngay lúc này.'
        },
        examples: [
          {
            jp: 'いま えきに ついた ところです。',
            romaji: 'Ima eki ni tsuita tokoro desu.',
            meaning: { en: 'I have just arrived at the station.', vi: 'Tôi vừa mới đến nhà ga.' }
          },
          {
            jp: 'しょくじが おわった ところです。',
            romaji: 'Shokuji ga owatta tokoro desu.',
            meaning: { en: 'The meal has just finished.', vi: 'Bữa ăn vừa mới kết thúc.' }
          }
        ]
      },
      {
        pattern: 'V た ばかり',
        title: { en: 'Just did (recently)', vi: 'Vừa mới làm (gần đây)' },
        explanation: {
          en: '〜たばかり means an action happened recently in the speaker\u2019s feeling, even if some time has passed.',
          vi: '〜たばかり nghĩa là hành động mới xảy ra gần đây theo cảm nhận của người nói, dù có thể đã trôi qua chút thời gian.'
        },
        examples: [
          {
            jp: 'せんげつ にゅうしゃした ばかりです。',
            romaji: 'Sengetsu nyūsha shita bakari desu.',
            meaning: {
              en: 'I just joined the company last month.',
              vi: 'Tôi vừa mới vào công ty hồi tháng trước.'
            }
          },
          {
            jp: 'この スマホは かった ばかりです。',
            romaji: 'Kono sumaho wa katta bakari desu.',
            meaning: { en: 'I just bought this phone.', vi: 'Cái điện thoại này tôi vừa mới mua.' }
          }
        ]
      },
      {
        pattern: '〜た ところ vs 〜た ばかり',
        title: { en: 'Just now vs recently', vi: 'Ngay lúc nãy và gần đây' },
        explanation: {
          en: 'たところ points to the very moment just after finishing; たばかり covers a recent period and can include things finished days ago.',
          vi: 'たところ chỉ đúng khoảnh khắc ngay sau khi xong; たばかり chỉ một khoảng gần đây, có thể gồm cả việc xong mấy ngày trước.'
        },
        examples: [
          {
            jp: 'たった いま おきた ところです。',
            romaji: 'Tatta ima okita tokoro desu.',
            meaning: {
              en: 'I just woke up this very moment.',
              vi: 'Tôi vừa mới thức dậy ngay lúc này.'
            }
          },
          {
            jp: 'せんしゅう そつぎょうした ばかりです。',
            romaji: 'Senshū sotsugyō shita bakari desu.',
            meaning: {
              en: 'I just graduated last week.',
              vi: 'Tôi vừa mới tốt nghiệp tuần trước.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A phone call', vi: 'Một cuộc điện thoại' },
        lines: [
          {
            jp: 'りんさんから でんわが きました。',
            romaji: 'Rin-san kara denwa ga kimashita.',
            meaning: { en: 'A call came from Rin.', vi: 'Có cuộc gọi từ Rin.' }
          },
          {
            jp: '「いま なにを して いますか。」「ばんごはんを たべて いる ところです。」',
            romaji:
              '\u201cIma nani o shite imasu ka.\u201d \u201cBangohan o tabete iru tokoro desu.\u201d',
            meaning: {
              en: '"What are you doing now?" "I am in the middle of eating dinner."',
              vi: '"Bây giờ bạn đang làm gì?" "Mình đang ăn tối giữa chừng."'
            }
          },
          {
            jp: 'りんさんは いえに かえった ばかりだと いいました。',
            romaji: 'Rin-san wa ie ni kaetta bakari da to iimashita.',
            meaning: {
              en: 'Rin said she had just returned home.',
              vi: 'Rin nói rằng cô ấy vừa mới về đến nhà.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What was the writer doing during the call?',
              vi: 'Lúc gọi điện người viết đang làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Eating dinner', vi: 'Ăn tối' } },
              { id: 'b', label: { en: 'Going to bed', vi: 'Đi ngủ' } },
              { id: 'c', label: { en: 'Leaving home', vi: 'Ra khỏi nhà' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What had Rin just done?', vi: 'Rin vừa mới làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Just returned home', vi: 'Vừa về đến nhà' } },
              { id: 'b', label: { en: 'Just woke up', vi: 'Vừa thức dậy' } },
              { id: 'c', label: { en: 'Just graduated', vi: 'Vừa tốt nghiệp' } }
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
    title: {
      en: 'Giving & Receiving Objects',
      vi: 'Cho & Nhận đồ vật'
    },
    focus: {
      en: 'Use あげる, くれる, and もらう to talk about who gives and who receives things.',
      vi: 'Dùng あげる, くれる và もらう để nói ai cho và ai nhận đồ vật.'
    },
    vocab: [
      {
        kana: 'あげる',
        romaji: 'ageru',
        meaning: { en: 'to give (to others)', vi: 'cho, tặng (cho người khác)' }
      },
      {
        kana: 'くれる',
        romaji: 'kureru',
        meaning: { en: 'to give (to me/my group)', vi: 'cho (tôi/nhóm tôi)' }
      },
      { kana: 'もらう', romaji: 'morau', meaning: { en: 'to receive', vi: 'nhận, được cho' } },
      {
        kana: 'プレゼント',
        romaji: 'purezento',
        meaning: { en: 'present, gift', vi: 'món quà' }
      },
      { kana: 'はな', kanji: '花', romaji: 'hana', meaning: { en: 'flower', vi: 'hoa' } },
      {
        kana: 'おみやげ',
        kanji: 'お土産',
        romaji: 'omiyage',
        meaning: { en: 'souvenir', vi: 'quà lưu niệm' }
      },
      {
        kana: 'たんじょうび',
        kanji: '誕生日',
        romaji: 'tanjōbi',
        meaning: { en: 'birthday', vi: 'sinh nhật' }
      },
      { kana: 'てがみ', kanji: '手紙', romaji: 'tegami', meaning: { en: 'letter', vi: 'lá thư' } },
      {
        kana: 'はは',
        kanji: '母',
        romaji: 'haha',
        meaning: { en: 'mother (my own)', vi: 'mẹ (của tôi)' }
      },
      {
        kana: 'ちち',
        kanji: '父',
        romaji: 'chichi',
        meaning: { en: 'father (my own)', vi: 'bố (của tôi)' }
      },
      {
        kana: 'こども',
        kanji: '子供',
        romaji: 'kodomo',
        meaning: { en: 'child', vi: 'trẻ con, con' }
      },
      {
        kana: 'おかし',
        kanji: 'お菓子',
        romaji: 'okashi',
        meaning: { en: 'sweets, snacks', vi: 'bánh kẹo' }
      }
    ],
    grammar: [
      {
        pattern: 'A は B に N を あげる',
        title: { en: 'A gives B something (あげる)', vi: 'A cho B cái gì (あげる)' },
        explanation: {
          en: 'あげる describes giving from the speaker\u2019s side outward to someone else. The receiver is marked with に.',
          vi: 'あげる diễn tả việc cho từ phía người nói hướng ra người khác. Người nhận đánh dấu bằng に.'
        },
        examples: [
          {
            jp: 'わたしは りんさんに はなを あげました。',
            romaji: 'Watashi wa Rin-san ni hana o agemashita.',
            meaning: { en: 'I gave Rin flowers.', vi: 'Tôi đã tặng Rin hoa.' }
          },
          {
            jp: 'ハナさんは こどもに おかしを あげます。',
            romaji: 'Hana-san wa kodomo ni okashi o agemasu.',
            meaning: { en: 'Hana gives the child sweets.', vi: 'Hana cho đứa trẻ bánh kẹo.' }
          }
        ]
      },
      {
        pattern: 'A は わたしに N を くれる',
        title: { en: 'Someone gives me something (くれる)', vi: 'Ai đó cho tôi cái gì (くれる)' },
        explanation: {
          en: 'くれる is used when the receiver is the speaker or the speaker\u2019s in-group. You cannot use あげる here.',
          vi: 'くれる dùng khi người nhận là người nói hoặc nhóm thân của người nói. Không thể dùng あげる ở đây.'
        },
        examples: [
          {
            jp: 'ともだちが わたしに プレゼントを くれました。',
            romaji: 'Tomodachi ga watashi ni purezento o kuremashita.',
            meaning: { en: 'My friend gave me a present.', vi: 'Bạn tôi đã tặng tôi một món quà.' }
          },
          {
            jp: 'せんせいが おとうとに ほんを くれました。',
            romaji: 'Sensei ga otōto ni hon o kuremashita.',
            meaning: {
              en: 'The teacher gave my little brother a book.',
              vi: 'Thầy giáo đã tặng em trai tôi quyển sách.'
            }
          }
        ]
      },
      {
        pattern: 'A は B に / から N を もらう',
        title: { en: 'A receives something (もらう)', vi: 'A nhận cái gì (もらう)' },
        explanation: {
          en: 'もらう views the event from the receiver. The giver is marked with に or から.',
          vi: 'もらう nhìn sự việc từ phía người nhận. Người cho đánh dấu bằng に hoặc から.'
        },
        examples: [
          {
            jp: 'わたしは ははから てがみを もらいました。',
            romaji: 'Watashi wa haha kara tegami o moraimashita.',
            meaning: {
              en: 'I received a letter from my mother.',
              vi: 'Tôi đã nhận được thư từ mẹ.'
            }
          },
          {
            jp: 'りんさんは ともだちに おみやげを もらいました。',
            romaji: 'Rin-san wa tomodachi ni omiyage o moraimashita.',
            meaning: {
              en: 'Rin received a souvenir from a friend.',
              vi: 'Rin đã được bạn tặng quà lưu niệm.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Birthday presents', vi: 'Quà sinh nhật' },
        lines: [
          {
            jp: 'きのうは わたしの たんじょうびでした。',
            romaji: 'Kinō wa watashi no tanjōbi deshita.',
            meaning: { en: 'Yesterday was my birthday.', vi: 'Hôm qua là sinh nhật của tôi.' }
          },
          {
            jp: 'ともだちが わたしに きれいな はなを くれました。',
            romaji: 'Tomodachi ga watashi ni kirei na hana o kuremashita.',
            meaning: {
              en: 'My friend gave me beautiful flowers.',
              vi: 'Bạn tôi đã tặng tôi những bông hoa đẹp.'
            }
          },
          {
            jp: 'ははからは てがみを もらいました。わたしは いもうとに おかしを あげました。',
            romaji: 'Haha kara wa tegami o moraimashita. Watashi wa imōto ni okashi o agemashita.',
            meaning: {
              en: 'From my mother I received a letter. I gave my little sister some sweets.',
              vi: 'Tôi nhận được thư từ mẹ. Tôi đã cho em gái bánh kẹo.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the friend give the writer?',
              vi: 'Người bạn đã tặng người viết gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Flowers', vi: 'Hoa' } },
              { id: 'b', label: { en: 'A letter', vi: 'Lá thư' } },
              { id: 'c', label: { en: 'Sweets', vi: 'Bánh kẹo' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Who did the writer give sweets to?',
              vi: 'Người viết đã cho ai bánh kẹo?'
            },
            choices: [
              { id: 'a', label: { en: 'Her little sister', vi: 'Em gái' } },
              { id: 'b', label: { en: 'Her mother', vi: 'Mẹ' } },
              { id: 'c', label: { en: 'Her friend', vi: 'Người bạn' } }
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
    title: {
      en: 'Giving & Receiving Favors',
      vi: 'Cho & Nhận hành động giúp đỡ'
    },
    focus: {
      en: 'Add 〜てあげる, 〜てくれる, 〜てもらう to verbs to express doing and receiving favors.',
      vi: 'Thêm 〜てあげる, 〜てくれる, 〜てもらう vào động từ để diễn tả làm và nhận sự giúp đỡ.'
    },
    vocab: [
      {
        kana: 'てつだう',
        kanji: '手伝う',
        romaji: 'tetsudau',
        meaning: { en: 'to help', vi: 'giúp đỡ' }
      },
      {
        kana: 'おしえる',
        kanji: '教える',
        romaji: 'oshieru',
        meaning: { en: 'to teach, tell', vi: 'dạy, chỉ' }
      },
      { kana: 'かす', kanji: '貸す', romaji: 'kasu', meaning: { en: 'to lend', vi: 'cho mượn' } },
      {
        kana: 'あんないする',
        kanji: '案内する',
        romaji: 'annai suru',
        meaning: { en: 'to show around, guide', vi: 'dẫn đi, hướng dẫn' }
      },
      {
        kana: 'つれていく',
        kanji: '連れて行く',
        romaji: 'tsurete iku',
        meaning: { en: 'to take (a person) along', vi: 'dẫn (ai đó) đi' }
      },
      {
        kana: 'なおす',
        kanji: '直す',
        romaji: 'naosu',
        meaning: { en: 'to fix, repair', vi: 'sửa' }
      },
      {
        kana: 'おくる',
        kanji: '送る',
        romaji: 'okuru',
        meaning: { en: 'to send, see off', vi: 'gửi, tiễn' }
      },
      {
        kana: 'せつめいする',
        kanji: '説明する',
        romaji: 'setsumei suru',
        meaning: { en: 'to explain', vi: 'giải thích' }
      },
      {
        kana: 'にもつ',
        kanji: '荷物',
        romaji: 'nimotsu',
        meaning: { en: 'luggage, baggage', vi: 'hành lý' }
      },
      { kana: 'みち', kanji: '道', romaji: 'michi', meaning: { en: 'road, way', vi: 'con đường' } },
      {
        kana: 'しんせつ',
        kanji: '親切',
        romaji: 'shinsetsu',
        meaning: { en: 'kind (な-adj)', vi: 'tử tế (tính từ -な)' }
      },
      {
        kana: 'ひっこし',
        kanji: '引っ越し',
        romaji: 'hikkoshi',
        meaning: { en: 'moving house', vi: 'việc chuyển nhà' }
      }
    ],
    grammar: [
      {
        pattern: 'V て あげる',
        title: { en: 'Doing a favor for someone', vi: 'Làm giúp ai đó' },
        explanation: {
          en: '〜てあげる means doing an action for someone else\u2019s benefit. Use it carefully, as it can sound condescending to a superior.',
          vi: '〜てあげる nghĩa là làm một việc vì lợi ích của người khác. Dùng cẩn thận vì có thể nghe bề trên với người trên.'
        },
        examples: [
          {
            jp: 'わたしは ともだちの ひっこしを てつだって あげました。',
            romaji: 'Watashi wa tomodachi no hikkoshi o tetsudatte agemashita.',
            meaning: {
              en: 'I helped my friend with the move.',
              vi: 'Tôi đã giúp bạn chuyển nhà.'
            }
          },
          {
            jp: 'りんさんに みちを おしえて あげました。',
            romaji: 'Rin-san ni michi o oshiete agemashita.',
            meaning: { en: 'I told Rin the way.', vi: 'Tôi đã chỉ đường cho Rin.' }
          }
        ]
      },
      {
        pattern: 'V て くれる',
        title: { en: 'Someone does a favor for me', vi: 'Ai đó làm giúp tôi' },
        explanation: {
          en: '〜てくれる shows someone does something for the speaker or the speaker\u2019s group, often with gratitude.',
          vi: '〜てくれる chỉ ai đó làm gì đó cho người nói hoặc nhóm của người nói, thường kèm lòng biết ơn.'
        },
        examples: [
          {
            jp: 'ともだちが にもつを もって くれました。',
            romaji: 'Tomodachi ga nimotsu o motte kuremashita.',
            meaning: {
              en: 'My friend carried my luggage for me.',
              vi: 'Bạn tôi đã xách hành lý giúp tôi.'
            }
          },
          {
            jp: 'せんせいが もんだいを せつめいして くれました。',
            romaji: 'Sensei ga mondai o setsumei shite kuremashita.',
            meaning: {
              en: 'The teacher explained the problem for me.',
              vi: 'Thầy giáo đã giải thích bài giúp tôi.'
            }
          }
        ]
      },
      {
        pattern: 'V て もらう',
        title: { en: 'Having someone do a favor', vi: 'Nhờ ai đó làm giúp' },
        explanation: {
          en: '〜てもらう views the favor from the receiver\u2019s side: I had/got someone do it. The doer takes に.',
          vi: '〜てもらう nhìn sự giúp đỡ từ phía người nhận: tôi được/nhờ ai đó làm. Người làm đánh dấu bằng に.'
        },
        examples: [
          {
            jp: 'わたしは ともだちに じてんしゃを かして もらいました。',
            romaji: 'Watashi wa tomodachi ni jitensha o kashite moraimashita.',
            meaning: {
              en: 'I had my friend lend me a bicycle.',
              vi: 'Tôi đã được bạn cho mượn xe đạp.'
            }
          },
          {
            jp: 'りんさんに まちを あんないして もらいました。',
            romaji: 'Rin-san ni machi o annai shite moraimashita.',
            meaning: {
              en: 'I had Rin show me around the town.',
              vi: 'Tôi đã được Rin dẫn đi tham quan thị trấn.'
            }
          }
        ]
      },
      {
        pattern: 'V て くれて、ありがとう',
        title: { en: 'Thanking for a favor', vi: 'Cảm ơn vì đã giúp' },
        explanation: {
          en: 'Combine 〜てくれて with ありがとう to thank someone for doing something for you.',
          vi: 'Kết hợp 〜てくれて với ありがとう để cảm ơn ai đó đã làm gì cho bạn.'
        },
        examples: [
          {
            jp: 'てつだって くれて、ありがとう。',
            romaji: 'Tetsudatte kurete, arigatō.',
            meaning: { en: 'Thank you for helping me.', vi: 'Cảm ơn vì đã giúp mình.' }
          },
          {
            jp: 'えきまで おくって くれて、ありがとう ございました。',
            romaji: 'Eki made okutte kurete, arigatō gozaimashita.',
            meaning: {
              en: 'Thank you for seeing me off to the station.',
              vi: 'Cảm ơn vì đã tiễn tôi ra đến nhà ga.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A kind friend', vi: 'Một người bạn tử tế' },
        lines: [
          {
            jp: 'きのう ひっこしを しました。',
            romaji: 'Kinō hikkoshi o shimashita.',
            meaning: { en: 'Yesterday I moved house.', vi: 'Hôm qua tôi đã chuyển nhà.' }
          },
          {
            jp: 'ともだちが にもつを はこんで くれました。',
            romaji: 'Tomodachi ga nimotsu o hakonde kuremashita.',
            meaning: {
              en: 'My friend carried the luggage for me.',
              vi: 'Bạn tôi đã khuân hành lý giúp tôi.'
            }
          },
          {
            jp: 'わたしは ともだちに ばんごはんを つくって あげました。とても しんせつな ともだちです。',
            romaji:
              'Watashi wa tomodachi ni bangohan o tsukutte agemashita. Totemo shinsetsu na tomodachi desu.',
            meaning: {
              en: 'I made dinner for my friend. He is a very kind friend.',
              vi: 'Tôi đã nấu bữa tối cho bạn. Đó là một người bạn rất tử tế.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the friend do for the writer?',
              vi: 'Người bạn đã làm gì giúp người viết?'
            },
            choices: [
              { id: 'a', label: { en: 'Carried the luggage', vi: 'Khuân hành lý' } },
              { id: 'b', label: { en: 'Cooked dinner', vi: 'Nấu bữa tối' } },
              { id: 'c', label: { en: 'Lent a bicycle', vi: 'Cho mượn xe đạp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the writer do for the friend?',
              vi: 'Người viết đã làm gì cho bạn?'
            },
            choices: [
              { id: 'a', label: { en: 'Made dinner', vi: 'Nấu bữa tối' } },
              { id: 'b', label: { en: 'Showed the way', vi: 'Chỉ đường' } },
              { id: 'c', label: { en: 'Sent a letter', vi: 'Gửi thư' } }
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
    title: {
      en: 'Volition & Intention',
      vi: 'Ý chí & Dự định'
    },
    focus: {
      en: 'Express plans with the volitional 〜(よ)う, 〜ようと思う, 〜つもり, and 〜予定.',
      vi: 'Diễn đạt kế hoạch với thể ý chí 〜(よ)う, 〜ようと思う, 〜つもり và 〜予定.'
    },
    vocab: [
      { kana: 'おもう', kanji: '思う', romaji: 'omou', meaning: { en: 'to think', vi: 'nghĩ' } },
      {
        kana: 'つもり',
        romaji: 'tsumori',
        meaning: { en: 'intention, plan', vi: 'ý định, dự định' }
      },
      {
        kana: 'よてい',
        kanji: '予定',
        romaji: 'yotei',
        meaning: { en: 'schedule, plan', vi: 'lịch trình, kế hoạch' }
      },
      {
        kana: 'りゅうがく',
        kanji: '留学',
        romaji: 'ryūgaku',
        meaning: { en: 'studying abroad', vi: 'du học' }
      },
      {
        kana: 'ひっこす',
        kanji: '引っ越す',
        romaji: 'hikkosu',
        meaning: { en: 'to move house', vi: 'chuyển nhà' }
      },
      {
        kana: 'さがす',
        kanji: '探す',
        romaji: 'sagasu',
        meaning: { en: 'to look for', vi: 'tìm kiếm' }
      },
      {
        kana: 'きめる',
        kanji: '決める',
        romaji: 'kimeru',
        meaning: { en: 'to decide', vi: 'quyết định' }
      },
      {
        kana: 'しょうらい',
        kanji: '将来',
        romaji: 'shōrai',
        meaning: { en: 'the future', vi: 'tương lai' }
      },
      {
        kana: 'ゆめ',
        kanji: '夢',
        romaji: 'yume',
        meaning: { en: 'dream', vi: 'giấc mơ, ước mơ' }
      },
      {
        kana: 'けいかく',
        kanji: '計画',
        romaji: 'keikaku',
        meaning: { en: 'plan, project', vi: 'kế hoạch' }
      },
      {
        kana: 'らいねん',
        kanji: '来年',
        romaji: 'rainen',
        meaning: { en: 'next year', vi: 'năm sau' }
      },
      {
        kana: 'はたらく',
        kanji: '働く',
        romaji: 'hataraku',
        meaning: { en: 'to work', vi: 'làm việc' }
      }
    ],
    grammar: [
      {
        pattern: 'V(よ)う',
        title: { en: 'Volitional form (let\u2019s / I will)', vi: 'Thể ý chí (cùng / sẽ)' },
        explanation: {
          en: 'The plain volitional (たべよう, いこう, しよう) suggests "let\u2019s do" among friends or states your own resolve.',
          vi: 'Thể ý chí thường (たべよう, いこう, しよう) dùng để rủ "cùng làm" giữa bạn bè hoặc nêu quyết tâm của bản thân.'
        },
        examples: [
          {
            jp: 'いっしょに ひるごはんを たべよう。',
            romaji: 'Issho ni hirugohan o tabeyō.',
            meaning: { en: "Let's eat lunch together.", vi: 'Cùng ăn trưa nào.' }
          },
          {
            jp: 'らいねんから もっと はたらこう。',
            romaji: 'Rainen kara motto hatarakō.',
            meaning: {
              en: "I'll work harder from next year.",
              vi: 'Từ năm sau mình sẽ làm việc chăm hơn.'
            }
          }
        ]
      },
      {
        pattern: 'V(よ)うと 思う',
        title: { en: 'I intend to (〜ようと思う)', vi: 'Tôi định (〜ようと思う)' },
        explanation: {
          en: 'Add と思う to the volitional to say you intend to do something; 思っている stresses an ongoing intention.',
          vi: 'Thêm と思う vào thể ý chí để nói bạn định làm gì; 思っている nhấn ý định đã có từ trước và còn tiếp diễn.'
        },
        examples: [
          {
            jp: 'らいねん にほんに りゅうがくしようと おもって います。',
            romaji: 'Rainen Nihon ni ryūgaku shiyō to omotte imasu.',
            meaning: {
              en: 'I am thinking of studying abroad in Japan next year.',
              vi: 'Tôi đang định năm sau đi du học Nhật Bản.'
            }
          },
          {
            jp: 'あたらしい しごとを さがそうと おもいます。',
            romaji: 'Atarashii shigoto o sagasō to omoimasu.',
            meaning: {
              en: 'I intend to look for a new job.',
              vi: 'Tôi định tìm một công việc mới.'
            }
          }
        ]
      },
      {
        pattern: 'V(る/ない)つもり',
        title: { en: 'Plan / intention (つもり)', vi: 'Dự định (つもり)' },
        explanation: {
          en: '〜つもり after the dictionary form states a firm intention; the negative form expresses no intention to do it.',
          vi: '〜つもり sau thể từ điển nêu ý định chắc chắn; thể phủ định diễn đạt không có ý định làm.'
        },
        examples: [
          {
            jp: 'らいねん ひっこす つもりです。',
            romaji: 'Rainen hikkosu tsumori desu.',
            meaning: { en: 'I plan to move next year.', vi: 'Tôi dự định năm sau sẽ chuyển nhà.' }
          },
          {
            jp: 'きょうは でかけない つもりです。',
            romaji: 'Kyō wa dekakenai tsumori desu.',
            meaning: {
              en: "I don't plan to go out today.",
              vi: 'Hôm nay tôi không định ra ngoài.'
            }
          }
        ]
      },
      {
        pattern: 'V(る) / N の 予定',
        title: { en: 'Scheduled plan (予定)', vi: 'Kế hoạch đã định (予定)' },
        explanation: {
          en: '予定 states a fixed schedule that is more objective than つもり. A noun connects with の before 予定.',
          vi: '予定 nêu lịch trình đã định, khách quan hơn つもり. Danh từ nối bằng の trước 予定.'
        },
        examples: [
          {
            jp: 'らいしゅう かいぎが ある よていです。',
            romaji: 'Raishū kaigi ga aru yotei desu.',
            meaning: { en: 'There is a meeting scheduled next week.', vi: 'Tuần sau có lịch họp.' }
          },
          {
            jp: 'りょこうは みっかかんの よていです。',
            romaji: 'Ryokō wa mikkakan no yotei desu.',
            meaning: {
              en: 'The trip is scheduled for three days.',
              vi: 'Chuyến đi dự kiến ba ngày.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Plans for the future', vi: 'Kế hoạch cho tương lai' },
        lines: [
          {
            jp: 'わたしの ゆめは にほんで はたらく ことです。',
            romaji: 'Watashi no yume wa Nihon de hataraku koto desu.',
            meaning: {
              en: 'My dream is to work in Japan.',
              vi: 'Ước mơ của tôi là làm việc ở Nhật.'
            }
          },
          {
            jp: 'らいねん にほんに りゅうがくしようと おもって います。',
            romaji: 'Rainen Nihon ni ryūgaku shiyō to omotte imasu.',
            meaning: {
              en: 'I am thinking of studying abroad in Japan next year.',
              vi: 'Tôi đang định năm sau đi du học Nhật.'
            }
          },
          {
            jp: 'だいがくを そつぎょうしたら、にほんの かいしゃで はたらく つもりです。',
            romaji: 'Daigaku o sotsugyō shitara, Nihon no kaisha de hataraku tsumori desu.',
            meaning: {
              en: 'After I graduate from university, I plan to work at a Japanese company.',
              vi: 'Sau khi tốt nghiệp đại học, tôi dự định làm ở một công ty Nhật.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: "What is the writer's dream?", vi: 'Ước mơ của người viết là gì?' },
            choices: [
              { id: 'a', label: { en: 'To work in Japan', vi: 'Làm việc ở Nhật' } },
              { id: 'b', label: { en: 'To move house', vi: 'Chuyển nhà' } },
              { id: 'c', label: { en: 'To buy a car', vi: 'Mua ô tô' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer plan to do next year?',
              vi: 'Năm sau người viết định làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Study abroad in Japan', vi: 'Đi du học Nhật' } },
              { id: 'b', label: { en: 'Graduate from university', vi: 'Tốt nghiệp đại học' } },
              { id: 'c', label: { en: 'Start a company', vi: 'Mở công ty' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
