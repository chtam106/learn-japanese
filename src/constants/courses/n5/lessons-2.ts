import type { Lesson } from '../types.ts';

export const n5LessonsB: Lesson[] = [
  {
    id: 'lesson-9',
    number: 9,
    title: {
      en: 'Talking About the Past',
      vi: 'Nói về quá khứ'
    },
    focus: {
      en: 'Use the past tense of nouns and い / な-adjectives, positive and negative.',
      vi: 'Dùng thì quá khứ của danh từ và tính từ -い / -な, khẳng định và phủ định.'
    },
    vocab: [
      {
        kana: 'きのう',
        kanji: '昨日',
        romaji: 'kinō',
        meaning: { en: 'yesterday', vi: 'hôm qua' }
      },
      {
        kana: 'せんしゅう',
        kanji: '先週',
        romaji: 'senshū',
        meaning: { en: 'last week', vi: 'tuần trước' }
      },
      {
        kana: 'てんき',
        kanji: '天気',
        romaji: 'tenki',
        meaning: { en: 'weather', vi: 'thời tiết' }
      },
      {
        kana: 'あめ',
        kanji: '雨',
        romaji: 'ame',
        meaning: { en: 'rain', vi: 'mưa' }
      },
      {
        kana: 'たのしい',
        kanji: '楽しい',
        romaji: 'tanoshii',
        meaning: { en: 'fun, enjoyable (い-adj)', vi: 'vui (tính từ -い)' }
      },
      {
        kana: 'いそがしい',
        kanji: '忙しい',
        romaji: 'isogashii',
        meaning: { en: 'busy (い-adj)', vi: 'bận rộn (tính từ -い)' }
      },
      {
        kana: 'さむい',
        kanji: '寒い',
        romaji: 'samui',
        meaning: { en: 'cold (い-adj)', vi: 'lạnh (tính từ -い)' }
      },
      {
        kana: 'あつい',
        kanji: '暑い',
        romaji: 'atsui',
        meaning: { en: 'hot (い-adj)', vi: 'nóng (tính từ -い)' }
      },
      {
        kana: 'りょこう',
        kanji: '旅行',
        romaji: 'ryokō',
        meaning: { en: 'trip, travel', vi: 'chuyến du lịch' }
      },
      {
        kana: 'やすみ',
        kanji: '休み',
        romaji: 'yasumi',
        meaning: { en: 'holiday, day off', vi: 'kỳ nghỉ, ngày nghỉ' }
      },
      {
        kana: 'パーティー',
        romaji: 'pātī',
        meaning: { en: 'party', vi: 'bữa tiệc' }
      },
      {
        kana: 'たいへん',
        kanji: '大変',
        romaji: 'taihen',
        meaning: { en: 'tough, hard (な-adj)', vi: 'vất vả (tính từ -な)' }
      }
    ],
    grammar: [
      {
        pattern: 'N でした',
        title: { en: 'Past tense of nouns', vi: 'Thì quá khứ của danh từ' },
        explanation: {
          en: 'Change です to でした for the past, and じゃ ありませんでした for the past negative.',
          vi: 'Đổi です thành でした cho quá khứ, và じゃ ありませんでした cho quá khứ phủ định.'
        },
        examples: [
          {
            jp: 'きのうは やすみでした。',
            romaji: 'Kinō wa yasumi deshita.',
            meaning: { en: 'Yesterday was a day off.', vi: 'Hôm qua là ngày nghỉ.' }
          },
          {
            jp: 'あめじゃ ありませんでした。',
            romaji: 'Ame ja arimasen deshita.',
            meaning: { en: 'It was not rain.', vi: 'Đã không có mưa.' }
          }
        ]
      },
      {
        pattern: 'い-adjective かったです',
        title: { en: 'Past tense of い-adjectives', vi: 'Thì quá khứ của tính từ -い' },
        explanation: {
          en: 'Drop い and add かったです for the past; add くなかったです for the past negative.',
          vi: 'Bỏ い rồi thêm かったです cho quá khứ; thêm くなかったです cho quá khứ phủ định.'
        },
        examples: [
          {
            jp: 'りょこうは たのしかったです。',
            romaji: 'Ryokō wa tanoshikatta desu.',
            meaning: { en: 'The trip was fun.', vi: 'Chuyến du lịch đã rất vui.' }
          },
          {
            jp: 'きのうは さむくなかったです。',
            romaji: 'Kinō wa samuku nakatta desu.',
            meaning: { en: 'Yesterday was not cold.', vi: 'Hôm qua đã không lạnh.' }
          }
        ]
      },
      {
        pattern: 'な-adjective でした',
        title: { en: 'Past tense of な-adjectives', vi: 'Thì quá khứ của tính từ -な' },
        explanation: {
          en: 'な-adjectives use でした like nouns; the past negative is じゃ なかったです.',
          vi: 'Tính từ -な dùng でした như danh từ; quá khứ phủ định là じゃ なかったです.'
        },
        examples: [
          {
            jp: 'パーティーは にぎやかでした。',
            romaji: 'Pātī wa nigiyaka deshita.',
            meaning: { en: 'The party was lively.', vi: 'Bữa tiệc đã náo nhiệt.' }
          },
          {
            jp: 'しごとは たいへんじゃ なかったです。',
            romaji: 'Shigoto wa taihen ja nakatta desu.',
            meaning: { en: 'The work was not tough.', vi: 'Công việc đã không vất vả.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Last week', vi: 'Tuần trước' },
        lines: [
          {
            jp: 'せんしゅう ともだちと りょこうを しました。',
            romaji: 'Senshū tomodachi to ryokō o shimashita.',
            meaning: {
              en: 'Last week I traveled with a friend.',
              vi: 'Tuần trước tôi đã đi du lịch với bạn.'
            }
          },
          {
            jp: 'てんきは よくて、とても たのしかったです。',
            romaji: 'Tenki wa yokute, totemo tanoshikatta desu.',
            meaning: {
              en: 'The weather was good and it was very fun.',
              vi: 'Thời tiết tốt và rất vui.'
            }
          },
          {
            jp: 'でも、ホテルは あまり きれいじゃ なかったです。',
            romaji: 'Demo, hoteru wa amari kirei ja nakatta desu.',
            meaning: {
              en: 'But the hotel was not very clean.',
              vi: 'Nhưng khách sạn không sạch lắm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'How was the weather?', vi: 'Thời tiết thế nào?' },
            choices: [
              { id: 'a', label: { en: 'It was good', vi: 'Tốt' } },
              { id: 'b', label: { en: 'It was rainy', vi: 'Có mưa' } },
              { id: 'c', label: { en: 'It was cold', vi: 'Lạnh' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'How was the hotel?', vi: 'Khách sạn thế nào?' },
            choices: [
              { id: 'a', label: { en: 'Very clean', vi: 'Rất sạch' } },
              { id: 'b', label: { en: 'Not very clean', vi: 'Không sạch lắm' } },
              { id: 'c', label: { en: 'Very lively', vi: 'Rất náo nhiệt' } }
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
      en: 'Wants & Wishes',
      vi: 'Mong muốn & Ước ao'
    },
    focus: {
      en: 'Express what you want to do with 〜たいです and what you want with N が ほしいです.',
      vi: 'Diễn đạt điều muốn làm với 〜たいです và thứ muốn có với N が ほしいです.'
    },
    vocab: [
      {
        kana: 'りんご',
        romaji: 'ringo',
        meaning: { en: 'apple', vi: 'táo' }
      },
      {
        kana: 'おかね',
        kanji: 'お金',
        romaji: 'okane',
        meaning: { en: 'money', vi: 'tiền' }
      },
      {
        kana: 'りょこう',
        kanji: '旅行',
        romaji: 'ryokō',
        meaning: { en: 'trip, travel', vi: 'chuyến du lịch' }
      },
      {
        kana: 'うみ',
        kanji: '海',
        romaji: 'umi',
        meaning: { en: 'sea, beach', vi: 'biển' }
      },
      {
        kana: 'やすみます',
        kanji: '休みます',
        romaji: 'yasumimasu',
        meaning: { en: 'to rest', vi: 'nghỉ ngơi' }
      },
      {
        kana: 'かいます',
        kanji: '買います',
        romaji: 'kaimasu',
        meaning: { en: 'to buy', vi: 'mua' }
      },
      {
        kana: 'あいます',
        kanji: '会います',
        romaji: 'aimasu',
        meaning: { en: 'to meet', vi: 'gặp' }
      },
      {
        kana: 'ほしい',
        romaji: 'hoshii',
        meaning: { en: 'to want (an item)', vi: 'muốn (đồ vật)' }
      },
      {
        kana: 'あたらしい',
        kanji: '新しい',
        romaji: 'atarashii',
        meaning: { en: 'new (い-adj)', vi: 'mới (tính từ -い)' }
      },
      {
        kana: 'じかん',
        kanji: '時間',
        romaji: 'jikan',
        meaning: { en: 'time', vi: 'thời gian' }
      },
      {
        kana: 'いっしょに',
        kanji: '一緒に',
        romaji: 'isshoni',
        meaning: { en: 'together', vi: 'cùng nhau' }
      },
      {
        kana: 'なつやすみ',
        kanji: '夏休み',
        romaji: 'natsuyasumi',
        meaning: { en: 'summer vacation', vi: 'nghỉ hè' }
      }
    ],
    grammar: [
      {
        pattern: 'V-stem たいです',
        title: { en: 'Want to do something', vi: 'Muốn làm gì đó' },
        explanation: {
          en: 'Drop ます and add たいです to say you want to do an action. Negative: たくないです.',
          vi: 'Bỏ ます rồi thêm たいです để nói muốn làm hành động. Phủ định: たくないです.'
        },
        examples: [
          {
            jp: 'うみへ いきたいです。',
            romaji: 'Umi e ikitai desu.',
            meaning: { en: 'I want to go to the sea.', vi: 'Tôi muốn đi biển.' }
          },
          {
            jp: 'きょうは やすみたくないです。',
            romaji: 'Kyō wa yasumitaku nai desu.',
            meaning: { en: 'I do not want to rest today.', vi: 'Hôm nay tôi không muốn nghỉ.' }
          }
        ]
      },
      {
        pattern: 'N が ほしいです',
        title: { en: 'Want a thing', vi: 'Muốn một thứ' },
        explanation: {
          en: 'Mark the desired item with が and use ほしいです. Negative: ほしくないです.',
          vi: 'Đánh dấu thứ muốn có bằng が và dùng ほしいです. Phủ định: ほしくないです.'
        },
        examples: [
          {
            jp: 'あたらしい くるまが ほしいです。',
            romaji: 'Atarashii kuruma ga hoshii desu.',
            meaning: { en: 'I want a new car.', vi: 'Tôi muốn một chiếc xe mới.' }
          },
          {
            jp: 'いまは おかねが ほしくないです。',
            romaji: 'Ima wa okane ga hoshiku nai desu.',
            meaning: { en: 'I do not want money now.', vi: 'Bây giờ tôi không muốn tiền.' }
          }
        ]
      },
      {
        pattern: 'N を V-stem たいです',
        title: { en: 'Want to do with an object', vi: 'Muốn làm với tân ngữ' },
        explanation: {
          en: 'With たいです the object may take を or が; を is common in everyday speech.',
          vi: 'Với たいです, tân ngữ có thể đi với を hoặc が; を thường dùng trong hội thoại.'
        },
        examples: [
          {
            jp: 'りんごを かいたいです。',
            romaji: 'Ringo o kaitai desu.',
            meaning: { en: 'I want to buy an apple.', vi: 'Tôi muốn mua táo.' }
          },
          {
            jp: 'ともだちに あいたいです。',
            romaji: 'Tomodachi ni aitai desu.',
            meaning: { en: 'I want to meet my friend.', vi: 'Tôi muốn gặp bạn.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Summer plans', vi: 'Dự định mùa hè' },
        lines: [
          {
            jp: 'なつやすみに うみへ いきたいです。',
            romaji: 'Natsuyasumi ni umi e ikitai desu.',
            meaning: {
              en: 'I want to go to the sea over summer vacation.',
              vi: 'Vào kỳ nghỉ hè tôi muốn đi biển.'
            }
          },
          {
            jp: 'でも、おかねと じかんが ほしいです。',
            romaji: 'Demo, okane to jikan ga hoshii desu.',
            meaning: {
              en: 'But I want money and time.',
              vi: 'Nhưng tôi cần tiền và thời gian.'
            }
          },
          {
            jp: 'ともだちと いっしょに りょこうを したいです。',
            romaji: 'Tomodachi to isshoni ryokō o shitai desu.',
            meaning: {
              en: 'I want to travel together with a friend.',
              vi: 'Tôi muốn đi du lịch cùng bạn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Where does the writer want to go?', vi: 'Người viết muốn đi đâu?' },
            choices: [
              { id: 'a', label: { en: 'To the sea', vi: 'Ra biển' } },
              { id: 'b', label: { en: 'To school', vi: 'Đến trường' } },
              { id: 'c', label: { en: 'To the office', vi: 'Đến công ty' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What does the writer want?', vi: 'Người viết muốn gì?' },
            choices: [
              { id: 'a', label: { en: 'A new car', vi: 'Một chiếc xe mới' } },
              { id: 'b', label: { en: 'Money and time', vi: 'Tiền và thời gian' } },
              { id: 'c', label: { en: 'An apple', vi: 'Một quả táo' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-11',
    number: 11,
    title: {
      en: 'Comparing Things',
      vi: 'So sánh sự vật'
    },
    focus: {
      en: 'Compare two things with より / のほうが and pick the best with いちばん.',
      vi: 'So sánh hai thứ với より / のほうが và chọn cái nhất với いちばん.'
    },
    vocab: [
      {
        kana: 'なつ',
        kanji: '夏',
        romaji: 'natsu',
        meaning: { en: 'summer', vi: 'mùa hè' }
      },
      {
        kana: 'ふゆ',
        kanji: '冬',
        romaji: 'fuyu',
        meaning: { en: 'winter', vi: 'mùa đông' }
      },
      {
        kana: 'やま',
        kanji: '山',
        romaji: 'yama',
        meaning: { en: 'mountain', vi: 'núi' }
      },
      {
        kana: 'かわ',
        kanji: '川',
        romaji: 'kawa',
        meaning: { en: 'river', vi: 'sông' }
      },
      {
        kana: 'はやい',
        kanji: '速い',
        romaji: 'hayai',
        meaning: { en: 'fast (い-adj)', vi: 'nhanh (tính từ -い)' }
      },
      {
        kana: 'ながい',
        kanji: '長い',
        romaji: 'nagai',
        meaning: { en: 'long (い-adj)', vi: 'dài (tính từ -い)' }
      },
      {
        kana: 'いちばん',
        kanji: '一番',
        romaji: 'ichiban',
        meaning: { en: 'the most, number one', vi: 'nhất, số một' }
      },
      {
        kana: 'くだもの',
        kanji: '果物',
        romaji: 'kudamono',
        meaning: { en: 'fruit', vi: 'trái cây' }
      },
      {
        kana: 'きせつ',
        kanji: '季節',
        romaji: 'kisetsu',
        meaning: { en: 'season', vi: 'mùa' }
      },
      {
        kana: 'どちら',
        romaji: 'dochira',
        meaning: { en: 'which (of two)', vi: 'cái nào (trong hai)' }
      },
      {
        kana: 'どれ',
        romaji: 'dore',
        meaning: { en: 'which one (of three+)', vi: 'cái nào (trong nhiều)' }
      },
      {
        kana: 'みかん',
        romaji: 'mikan',
        meaning: { en: 'mandarin orange', vi: 'quýt' }
      }
    ],
    grammar: [
      {
        pattern: 'A は B より adjective です',
        title: { en: 'A is more … than B', vi: 'A … hơn B' },
        explanation: {
          en: 'より marks the thing being compared against ("than B").',
          vi: 'より đánh dấu đối tượng bị đem ra so sánh ("hơn B").'
        },
        examples: [
          {
            jp: 'でんしゃは バスより はやいです。',
            romaji: 'Densha wa basu yori hayai desu.',
            meaning: { en: 'The train is faster than the bus.', vi: 'Tàu điện nhanh hơn xe buýt.' }
          },
          {
            jp: 'かわは やまより ながいです。',
            romaji: 'Kawa wa yama yori nagai desu.',
            meaning: { en: 'The river is longer than the mountain.', vi: 'Sông dài hơn núi.' }
          }
        ]
      },
      {
        pattern: 'A のほうが B より adjective です',
        title: { en: 'A is the more … one', vi: 'A thì … hơn' },
        explanation: {
          en: 'のほうが highlights the side that wins the comparison. Ask with どちらのほうが.',
          vi: 'のほうが nhấn mạnh bên thắng trong so sánh. Hỏi bằng どちらのほうが.'
        },
        examples: [
          {
            jp: 'なつのほうが ふゆより すきです。',
            romaji: 'Natsu no hō ga fuyu yori suki desu.',
            meaning: {
              en: 'I like summer more than winter.',
              vi: 'Tôi thích mùa hè hơn mùa đông.'
            }
          },
          {
            jp: 'なつと ふゆと どちらのほうが すきですか。',
            romaji: 'Natsu to fuyu to dochira no hō ga suki desu ka.',
            meaning: {
              en: 'Which do you like more, summer or winter?',
              vi: 'Mùa hè và mùa đông, bạn thích cái nào hơn?'
            }
          }
        ]
      },
      {
        pattern: 'N の中で N が いちばん adjective です',
        title: { en: 'The most … among a group', vi: 'Nhất trong một nhóm' },
        explanation: {
          en: 'の中で sets the group; いちばん means "the most". Ask the choice with どれ / なに.',
          vi: 'の中で nêu phạm vi nhóm; いちばん nghĩa là "nhất". Hỏi lựa chọn bằng どれ / なに.'
        },
        examples: [
          {
            jp: 'くだものの中で みかんが いちばん すきです。',
            romaji: 'Kudamono no naka de mikan ga ichiban suki desu.',
            meaning: {
              en: 'Among fruits, I like mandarins the most.',
              vi: 'Trong các loại trái cây, tôi thích quýt nhất.'
            }
          },
          {
            jp: 'きせつの中で どれが いちばん すきですか。',
            romaji: 'Kisetsu no naka de dore ga ichiban suki desu ka.',
            meaning: {
              en: 'Which season do you like the most?',
              vi: 'Trong các mùa, bạn thích mùa nào nhất?'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Favorite season', vi: 'Mùa yêu thích' },
        lines: [
          {
            jp: 'わたしは なつより ふゆのほうが すきです。',
            romaji: 'Watashi wa natsu yori fuyu no hō ga suki desu.',
            meaning: {
              en: 'I like winter more than summer.',
              vi: 'Tôi thích mùa đông hơn mùa hè.'
            }
          },
          {
            jp: 'ふゆは さむいですが、とても しずかです。',
            romaji: 'Fuyu wa samui desu ga, totemo shizuka desu.',
            meaning: {
              en: 'Winter is cold, but it is very quiet.',
              vi: 'Mùa đông lạnh, nhưng rất yên tĩnh.'
            }
          },
          {
            jp: 'くだものの中で みかんが いちばん すきです。',
            romaji: 'Kudamono no naka de mikan ga ichiban suki desu.',
            meaning: {
              en: 'Among fruits, I like mandarins the most.',
              vi: 'Trong các loại trái cây, tôi thích quýt nhất.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Which season does the writer prefer?',
              vi: 'Người viết thích mùa nào hơn?'
            },
            choices: [
              { id: 'a', label: { en: 'Summer', vi: 'Mùa hè' } },
              { id: 'b', label: { en: 'Winter', vi: 'Mùa đông' } },
              { id: 'c', label: { en: 'Both the same', vi: 'Cả hai như nhau' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'Which fruit does the writer like most?',
              vi: 'Người viết thích loại trái cây nào nhất?'
            },
            choices: [
              { id: 'a', label: { en: 'Apples', vi: 'Táo' } },
              { id: 'b', label: { en: 'Mandarins', vi: 'Quýt' } },
              { id: 'c', label: { en: 'None', vi: 'Không loại nào' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-12',
    number: 12,
    title: {
      en: 'Counting Things & People',
      vi: 'Đếm đồ vật & người'
    },
    focus: {
      en: 'Use counters such as 〜つ, 〜人, 〜枚, 〜本, 〜台, 〜回, 〜歳 with verbs.',
      vi: 'Dùng các trợ số đếm như 〜つ, 〜人, 〜枚, 〜本, 〜台, 〜回, 〜歳 với động từ.'
    },
    vocab: [
      {
        kana: 'ひとつ',
        kanji: '一つ',
        romaji: 'hitotsu',
        meaning: { en: 'one (thing)', vi: 'một (vật)' }
      },
      {
        kana: 'ふたつ',
        kanji: '二つ',
        romaji: 'futatsu',
        meaning: { en: 'two (things)', vi: 'hai (vật)' }
      },
      {
        kana: 'ひとり',
        kanji: '一人',
        romaji: 'hitori',
        meaning: { en: 'one person', vi: 'một người' }
      },
      {
        kana: 'ふたり',
        kanji: '二人',
        romaji: 'futari',
        meaning: { en: 'two people', vi: 'hai người' }
      },
      {
        kana: 'まい',
        kanji: '枚',
        romaji: 'mai',
        meaning: { en: 'counter for flat things', vi: 'tờ, tấm (đồ phẳng)' }
      },
      {
        kana: 'ほん / ぼん / ぽん',
        kanji: '本',
        romaji: 'hon / bon / pon',
        meaning: { en: 'counter for long things', vi: 'cái (vật dài)' }
      },
      {
        kana: 'だい',
        kanji: '台',
        romaji: 'dai',
        meaning: { en: 'counter for machines', vi: 'chiếc (máy móc)' }
      },
      {
        kana: 'かい',
        kanji: '回',
        romaji: 'kai',
        meaning: { en: 'counter for times', vi: 'lần' }
      },
      {
        kana: 'さい',
        kanji: '歳',
        romaji: 'sai',
        meaning: { en: 'counter for age (years old)', vi: 'tuổi' }
      },
      {
        kana: 'きって',
        kanji: '切手',
        romaji: 'kitte',
        meaning: { en: 'postage stamp', vi: 'tem' }
      },
      {
        kana: 'コーヒー',
        romaji: 'kōhī',
        meaning: { en: 'coffee', vi: 'cà phê' }
      },
      {
        kana: 'いちにち',
        kanji: '一日',
        romaji: 'ichinichi',
        meaning: { en: 'one day', vi: 'một ngày' }
      }
    ],
    grammar: [
      {
        pattern: 'N を 数 V ます',
        title: { en: 'Quantity + verb', vi: 'Số lượng + động từ' },
        explanation: {
          en: 'The counter goes after the object phrase, just before the verb, with no particle.',
          vi: 'Trợ số đếm đặt sau cụm tân ngữ, ngay trước động từ, không cần trợ từ.'
        },
        examples: [
          {
            jp: 'りんごを ふたつ かいます。',
            romaji: 'Ringo o futatsu kaimasu.',
            meaning: { en: 'I buy two apples.', vi: 'Tôi mua hai quả táo.' }
          },
          {
            jp: 'きってを さんまい ください。',
            romaji: 'Kitte o san-mai kudasai.',
            meaning: { en: 'Three stamps, please.', vi: 'Cho tôi ba con tem.' }
          }
        ]
      },
      {
        pattern: '〜人 / 〜歳',
        title: { en: 'Counting people & age', vi: 'Đếm người & tuổi' },
        explanation: {
          en: 'Use 〜人 for people (ひとり, ふたり are irregular) and 〜歳 for age.',
          vi: 'Dùng 〜人 cho người (ひとり, ふたり là bất quy tắc) và 〜歳 cho tuổi.'
        },
        examples: [
          {
            jp: 'がくせいが ふたり います。',
            romaji: 'Gakusei ga futari imasu.',
            meaning: { en: 'There are two students.', vi: 'Có hai học sinh.' }
          },
          {
            jp: 'いもうとは ななさいです。',
            romaji: 'Imōto wa nana-sai desu.',
            meaning: { en: 'My little sister is seven.', vi: 'Em gái tôi bảy tuổi.' }
          }
        ]
      },
      {
        pattern: '〜本 / 〜台 / 〜回',
        title: { en: 'Long things, machines, times', vi: 'Vật dài, máy móc, số lần' },
        explanation: {
          en: '〜本 counts long objects, 〜台 machines, and 〜回 the number of times.',
          vi: '〜本 đếm vật dài, 〜台 đếm máy móc, và 〜回 đếm số lần.'
        },
        examples: [
          {
            jp: 'コーヒーを いっぱい のみました。',
            romaji: 'Kōhī o ippai nomimashita.',
            meaning: { en: 'I drank one cup of coffee.', vi: 'Tôi đã uống một ly cà phê.' }
          },
          {
            jp: 'いちにちに さんかい たべます。',
            romaji: 'Ichinichi ni san-kai tabemasu.',
            meaning: { en: 'I eat three times a day.', vi: 'Tôi ăn ba lần một ngày.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'At the post office', vi: 'Ở bưu điện' },
        lines: [
          {
            jp: 'きのう きってを ごまい かいました。',
            romaji: 'Kinō kitte o go-mai kaimashita.',
            meaning: {
              en: 'Yesterday I bought five stamps.',
              vi: 'Hôm qua tôi đã mua năm con tem.'
            }
          },
          {
            jp: 'いえに くるまが いちだい あります。',
            romaji: 'Ie ni kuruma ga ichi-dai arimasu.',
            meaning: {
              en: 'There is one car at my house.',
              vi: 'Ở nhà tôi có một chiếc xe ô tô.'
            }
          },
          {
            jp: 'おとうとは じゅっさいで、いちにちに にかい べんきょうします。',
            romaji: 'Otōto wa jus-sai de, ichinichi ni ni-kai benkyō shimasu.',
            meaning: {
              en: 'My little brother is ten and studies twice a day.',
              vi: 'Em trai tôi mười tuổi và học hai lần một ngày.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How many stamps did the writer buy?',
              vi: 'Người viết đã mua bao nhiêu con tem?'
            },
            choices: [
              { id: 'a', label: { en: 'Three', vi: 'Ba' } },
              { id: 'b', label: { en: 'Five', vi: 'Năm' } },
              { id: 'c', label: { en: 'Ten', vi: 'Mười' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'How old is the little brother?',
              vi: 'Em trai bao nhiêu tuổi?'
            },
            choices: [
              { id: 'a', label: { en: 'Seven', vi: 'Bảy' } },
              { id: 'b', label: { en: 'Ten', vi: 'Mười' } },
              { id: 'c', label: { en: 'Two', vi: 'Hai' } }
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
      en: 'The て-form & Requests',
      vi: 'Thể て & Lời đề nghị'
    },
    focus: {
      en: 'Make the て-form, ask politely with 〜てください, and link actions with 〜て、〜.',
      vi: 'Tạo thể て, nhờ vả lịch sự với 〜てください, và nối hành động với 〜て、〜.'
    },
    vocab: [
      {
        kana: 'まちます',
        kanji: '待ちます',
        romaji: 'machimasu',
        meaning: { en: 'to wait', vi: 'chờ' }
      },
      {
        kana: 'ききます',
        kanji: '聞きます',
        romaji: 'kikimasu',
        meaning: { en: 'to listen, ask', vi: 'nghe, hỏi' }
      },
      {
        kana: 'はなします',
        kanji: '話します',
        romaji: 'hanashimasu',
        meaning: { en: 'to speak', vi: 'nói chuyện' }
      },
      {
        kana: 'かきます',
        kanji: '書きます',
        romaji: 'kakimasu',
        meaning: { en: 'to write', vi: 'viết' }
      },
      {
        kana: 'おきます',
        kanji: '起きます',
        romaji: 'okimasu',
        meaning: { en: 'to wake up', vi: 'thức dậy' }
      },
      {
        kana: 'なまえ',
        kanji: '名前',
        romaji: 'namae',
        meaning: { en: 'name', vi: 'tên' }
      },
      {
        kana: 'ここ',
        romaji: 'koko',
        meaning: { en: 'here', vi: 'ở đây' }
      },
      {
        kana: 'ちょっと',
        romaji: 'chotto',
        meaning: { en: 'a little, a moment', vi: 'một chút' }
      },
      {
        kana: 'もういちど',
        kanji: 'もう一度',
        romaji: 'mō ichido',
        meaning: { en: 'one more time', vi: 'một lần nữa' }
      },
      {
        kana: 'ゆっくり',
        romaji: 'yukkuri',
        meaning: { en: 'slowly', vi: 'chậm rãi' }
      },
      {
        kana: 'シャワー',
        romaji: 'shawā',
        meaning: { en: 'shower', vi: 'vòi sen, tắm' }
      },
      {
        kana: 'あびます',
        kanji: '浴びます',
        romaji: 'abimasu',
        meaning: { en: 'to take (a shower)', vi: 'tắm (vòi sen)' }
      }
    ],
    grammar: [
      {
        pattern: 'V て (て-form)',
        title: { en: 'Forming the て-form', vi: 'Cách tạo thể て' },
        explanation: {
          en: 'The て-form connects verbs and many patterns: たべます→たべて, いきます→いって, のみます→のんで.',
          vi: 'Thể て nối động từ và nhiều mẫu câu: たべます→たべて, いきます→いって, のみます→のんで.'
        },
        examples: [
          {
            jp: 'ほんを よんで、ねます。',
            romaji: 'Hon o yonde, nemasu.',
            meaning: { en: 'I read a book and go to sleep.', vi: 'Tôi đọc sách rồi đi ngủ.' }
          },
          {
            jp: 'シャワーを あびて、でかけます。',
            romaji: 'Shawā o abite, dekakemasu.',
            meaning: { en: 'I take a shower and go out.', vi: 'Tôi tắm rồi ra ngoài.' }
          }
        ]
      },
      {
        pattern: 'V てください',
        title: { en: 'Please do …', vi: 'Hãy … đi' },
        explanation: {
          en: 'Add ください to the て-form to make a polite request or instruction.',
          vi: 'Thêm ください vào thể て để tạo lời nhờ vả hoặc hướng dẫn lịch sự.'
        },
        examples: [
          {
            jp: 'ここで まってください。',
            romaji: 'Koko de matte kudasai.',
            meaning: { en: 'Please wait here.', vi: 'Hãy chờ ở đây.' }
          },
          {
            jp: 'もういちど はなしてください。',
            romaji: 'Mō ichido hanashite kudasai.',
            meaning: { en: 'Please say it one more time.', vi: 'Hãy nói lại một lần nữa.' }
          }
        ]
      },
      {
        pattern: 'V て、V ます',
        title: { en: 'Linking actions in order', vi: 'Nối hành động theo thứ tự' },
        explanation: {
          en: 'Use the て-form to list actions done in sequence; the final verb carries the tense.',
          vi: 'Dùng thể て để liệt kê hành động theo trình tự; động từ cuối quyết định thì.'
        },
        examples: [
          {
            jp: 'あさ おきて、ごはんを たべます。',
            romaji: 'Asa okite, gohan o tabemasu.',
            meaning: {
              en: 'I wake up in the morning and eat.',
              vi: 'Buổi sáng tôi thức dậy rồi ăn cơm.'
            }
          },
          {
            jp: 'なまえを かいて、せんせいに わたします。',
            romaji: 'Namae o kaite, sensei ni watashimasu.',
            meaning: {
              en: 'I write my name and hand it to the teacher.',
              vi: 'Tôi viết tên rồi đưa cho giáo viên.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'In the classroom', vi: 'Trong lớp học' },
        lines: [
          {
            jp: 'せんせいは「ここに なまえを かいてください」と いいました。',
            romaji: 'Sensei wa "koko ni namae o kaite kudasai" to iimashita.',
            meaning: {
              en: 'The teacher said, "Please write your name here."',
              vi: 'Giáo viên nói: "Hãy viết tên vào đây."'
            }
          },
          {
            jp: 'わたしは なまえを かいて、ほんを よみました。',
            romaji: 'Watashi wa namae o kaite, hon o yomimashita.',
            meaning: {
              en: 'I wrote my name and read the book.',
              vi: 'Tôi đã viết tên rồi đọc sách.'
            }
          },
          {
            jp: 'ともだちは「ゆっくり はなしてください」と いいました。',
            romaji: 'Tomodachi wa "yukkuri hanashite kudasai" to iimashita.',
            meaning: {
              en: 'My friend said, "Please speak slowly."',
              vi: 'Bạn tôi nói: "Hãy nói chậm lại."'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the teacher ask?',
              vi: 'Giáo viên đã yêu cầu gì?'
            },
            choices: [
              { id: 'a', label: { en: 'To write your name', vi: 'Viết tên' } },
              { id: 'b', label: { en: 'To wait outside', vi: 'Chờ bên ngoài' } },
              { id: 'c', label: { en: 'To read aloud', vi: 'Đọc to' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the friend ask?',
              vi: 'Người bạn đã yêu cầu gì?'
            },
            choices: [
              { id: 'a', label: { en: 'To speak slowly', vi: 'Nói chậm lại' } },
              { id: 'b', label: { en: 'To speak loudly', vi: 'Nói to lên' } },
              { id: 'c', label: { en: 'To stay quiet', vi: 'Giữ yên lặng' } }
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
      en: 'Ongoing Actions & States',
      vi: 'Hành động đang diễn ra & Trạng thái'
    },
    focus: {
      en: 'Use 〜ています for actions in progress and for resulting states.',
      vi: 'Dùng 〜ています cho hành động đang diễn ra và cho trạng thái kết quả.'
    },
    vocab: [
      {
        kana: 'はたらきます',
        kanji: '働きます',
        romaji: 'hatarakimasu',
        meaning: { en: 'to work', vi: 'làm việc' }
      },
      {
        kana: 'すみます',
        kanji: '住みます',
        romaji: 'sumimasu',
        meaning: { en: 'to live, reside', vi: 'sống, cư trú' }
      },
      {
        kana: 'しっています',
        kanji: '知っています',
        romaji: 'shitte imasu',
        meaning: { en: 'to know', vi: 'biết' }
      },
      {
        kana: 'もっています',
        kanji: '持っています',
        romaji: 'motte imasu',
        meaning: { en: 'to have, hold', vi: 'có, cầm' }
      },
      {
        kana: 'べんきょうします',
        kanji: '勉強します',
        romaji: 'benkyō shimasu',
        meaning: { en: 'to study', vi: 'học' }
      },
      {
        kana: 'ぎんこう',
        kanji: '銀行',
        romaji: 'ginkō',
        meaning: { en: 'bank', vi: 'ngân hàng' }
      },
      {
        kana: 'びょういん',
        kanji: '病院',
        romaji: 'byōin',
        meaning: { en: 'hospital', vi: 'bệnh viện' }
      },
      {
        kana: 'けっこん',
        kanji: '結婚',
        romaji: 'kekkon',
        meaning: { en: 'marriage', vi: 'kết hôn' }
      },
      {
        kana: 'いま',
        kanji: '今',
        romaji: 'ima',
        meaning: { en: 'now', vi: 'bây giờ' }
      },
      {
        kana: 'でんわ',
        kanji: '電話',
        romaji: 'denwa',
        meaning: { en: 'telephone, call', vi: 'điện thoại' }
      },
      {
        kana: 'かぞく',
        kanji: '家族',
        romaji: 'kazoku',
        meaning: { en: 'family', vi: 'gia đình' }
      },
      {
        kana: 'いしゃ',
        kanji: '医者',
        romaji: 'isha',
        meaning: { en: 'doctor', vi: 'bác sĩ' }
      }
    ],
    grammar: [
      {
        pattern: 'V ています (in progress)',
        title: { en: 'Action in progress', vi: 'Hành động đang diễn ra' },
        explanation: {
          en: 'Attach います to the て-form to say an action is happening right now.',
          vi: 'Gắn います vào thể て để nói hành động đang diễn ra ngay lúc này.'
        },
        examples: [
          {
            jp: 'いま ごはんを たべています。',
            romaji: 'Ima gohan o tabete imasu.',
            meaning: { en: 'I am eating now.', vi: 'Bây giờ tôi đang ăn cơm.' }
          },
          {
            jp: 'ともだちは でんわで はなしています。',
            romaji: 'Tomodachi wa denwa de hanashite imasu.',
            meaning: {
              en: 'My friend is talking on the phone.',
              vi: 'Bạn tôi đang nói chuyện điện thoại.'
            }
          }
        ]
      },
      {
        pattern: 'V ています (state)',
        title: { en: 'Resulting state', vi: 'Trạng thái kết quả' },
        explanation: {
          en: 'Some verbs (すみます, けっこんします, しっています) use 〜ています for a current state.',
          vi: 'Một số động từ (すみます, けっこんします, しっています) dùng 〜ています cho trạng thái hiện tại.'
        },
        examples: [
          {
            jp: 'とうきょうに すんでいます。',
            romaji: 'Tōkyō ni sunde imasu.',
            meaning: { en: 'I live in Tokyo.', vi: 'Tôi đang sống ở Tokyo.' }
          },
          {
            jp: 'あの ひとを しっています。',
            romaji: 'Ano hito o shitte imasu.',
            meaning: { en: 'I know that person.', vi: 'Tôi biết người đó.' }
          }
        ]
      },
      {
        pattern: 'しごと / 職業 V ています',
        title: { en: 'Talking about a job', vi: 'Nói về nghề nghiệp' },
        explanation: {
          en: '〜ています also describes habitual work, like where someone works.',
          vi: '〜ています cũng diễn tả công việc thường xuyên, như nơi ai đó làm việc.'
        },
        examples: [
          {
            jp: 'ぎんこうで はたらいています。',
            romaji: 'Ginkō de hataraite imasu.',
            meaning: { en: 'I work at a bank.', vi: 'Tôi làm việc ở ngân hàng.' }
          },
          {
            jp: 'あねは びょういんで はたらいています。',
            romaji: 'Ane wa byōin de hataraite imasu.',
            meaning: {
              en: 'My older sister works at a hospital.',
              vi: 'Chị tôi làm việc ở bệnh viện.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: "Mai's family", vi: 'Gia đình của Mai' },
        lines: [
          {
            jp: 'マイさんは とうきょうに すんでいます。',
            romaji: 'Mai-san wa Tōkyō ni sunde imasu.',
            meaning: { en: 'Mai lives in Tokyo.', vi: 'Mai sống ở Tokyo.' }
          },
          {
            jp: 'おとうさんは びょういんで はたらいています。いしゃです。',
            romaji: 'Otōsan wa byōin de hataraite imasu. Isha desu.',
            meaning: {
              en: 'Her father works at a hospital. He is a doctor.',
              vi: 'Bố cô ấy làm việc ở bệnh viện. Ông là bác sĩ.'
            }
          },
          {
            jp: 'いま マイさんは にほんごを べんきょうしています。',
            romaji: 'Ima Mai-san wa nihongo o benkyō shite imasu.',
            meaning: {
              en: 'Right now Mai is studying Japanese.',
              vi: 'Bây giờ Mai đang học tiếng Nhật.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Where does Mai live?', vi: 'Mai sống ở đâu?' },
            choices: [
              { id: 'a', label: { en: 'Tokyo', vi: 'Tokyo' } },
              { id: 'b', label: { en: 'Osaka', vi: 'Osaka' } },
              { id: 'c', label: { en: 'Vietnam', vi: 'Việt Nam' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: "What is Mai's father's job?",
              vi: 'Bố của Mai làm nghề gì?'
            },
            choices: [
              { id: 'a', label: { en: 'A teacher', vi: 'Giáo viên' } },
              { id: 'b', label: { en: 'A doctor', vi: 'Bác sĩ' } },
              { id: 'c', label: { en: 'A bank employee', vi: 'Nhân viên ngân hàng' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-15',
    number: 15,
    title: {
      en: 'Permission & Prohibition',
      vi: 'Cho phép & Cấm đoán'
    },
    focus: {
      en: 'Give permission with 〜てもいいです and forbid with 〜てはいけません.',
      vi: 'Cho phép với 〜てもいいです và cấm với 〜てはいけません.'
    },
    vocab: [
      {
        kana: 'すわります',
        kanji: '座ります',
        romaji: 'suwarimasu',
        meaning: { en: 'to sit', vi: 'ngồi' }
      },
      {
        kana: 'はいります',
        kanji: '入ります',
        romaji: 'hairimasu',
        meaning: { en: 'to enter', vi: 'vào' }
      },
      {
        kana: 'つかいます',
        kanji: '使います',
        romaji: 'tsukaimasu',
        meaning: { en: 'to use', vi: 'sử dụng' }
      },
      {
        kana: 'とります',
        kanji: '撮ります',
        romaji: 'torimasu',
        meaning: { en: 'to take (a photo)', vi: 'chụp (ảnh)' }
      },
      {
        kana: 'すいます',
        kanji: '吸います',
        romaji: 'suimasu',
        meaning: { en: 'to smoke, inhale', vi: 'hút (thuốc)' }
      },
      {
        kana: 'たばこ',
        romaji: 'tabako',
        meaning: { en: 'cigarette', vi: 'thuốc lá' }
      },
      {
        kana: 'しゃしん',
        kanji: '写真',
        romaji: 'shashin',
        meaning: { en: 'photograph', vi: 'bức ảnh' }
      },
      {
        kana: 'としょかん',
        kanji: '図書館',
        romaji: 'toshokan',
        meaning: { en: 'library', vi: 'thư viện' }
      },
      {
        kana: 'びじゅつかん',
        kanji: '美術館',
        romaji: 'bijutsukan',
        meaning: { en: 'art museum', vi: 'bảo tàng mỹ thuật' }
      },
      {
        kana: 'けいたい',
        kanji: '携帯',
        romaji: 'keitai',
        meaning: { en: 'mobile phone', vi: 'điện thoại di động' }
      },
      {
        kana: 'ここで',
        romaji: 'koko de',
        meaning: { en: 'here (place of action)', vi: 'ở đây (nơi làm việc gì)' }
      },
      {
        kana: 'だめ',
        romaji: 'dame',
        meaning: { en: 'not allowed, no good', vi: 'không được' }
      }
    ],
    grammar: [
      {
        pattern: 'V てもいいです',
        title: { en: 'You may do …', vi: 'Được phép …' },
        explanation: {
          en: 'Add もいいです to the て-form to give or ask for permission.',
          vi: 'Thêm もいいです vào thể て để cho phép hoặc xin phép.'
        },
        examples: [
          {
            jp: 'ここに すわってもいいです。',
            romaji: 'Koko ni suwatte mo ii desu.',
            meaning: { en: 'You may sit here.', vi: 'Bạn có thể ngồi ở đây.' }
          },
          {
            jp: 'けいたいを つかってもいいですか。',
            romaji: 'Keitai o tsukatte mo ii desu ka.',
            meaning: {
              en: 'May I use my mobile phone?',
              vi: 'Tôi dùng điện thoại được không?'
            }
          }
        ]
      },
      {
        pattern: 'V てはいけません',
        title: { en: 'You must not do …', vi: 'Không được …' },
        explanation: {
          en: 'Add はいけません to the て-form to forbid an action.',
          vi: 'Thêm はいけません vào thể て để cấm một hành động.'
        },
        examples: [
          {
            jp: 'ここで たばこを すってはいけません。',
            romaji: 'Koko de tabako o sutte wa ikemasen.',
            meaning: { en: 'You must not smoke here.', vi: 'Không được hút thuốc ở đây.' }
          },
          {
            jp: 'しゃしんを とってはいけません。',
            romaji: 'Shashin o totte wa ikemasen.',
            meaning: { en: 'You must not take photos.', vi: 'Không được chụp ảnh.' }
          }
        ]
      },
      {
        pattern: 'V なくてもいいです',
        title: { en: 'You do not have to …', vi: 'Không cần phải …' },
        explanation: {
          en: 'For "do not have to", use the ない-form plus くてもいいです.',
          vi: 'Để nói "không cần", dùng thể ない rồi thêm くてもいいです.'
        },
        examples: [
          {
            jp: 'あした こなくてもいいです。',
            romaji: 'Ashita konakute mo ii desu.',
            meaning: {
              en: 'You do not have to come tomorrow.',
              vi: 'Ngày mai bạn không cần đến.'
            }
          },
          {
            jp: 'いま はらわなくてもいいです。',
            romaji: 'Ima harawanakute mo ii desu.',
            meaning: { en: 'You do not have to pay now.', vi: 'Bây giờ bạn không cần trả.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Museum rules', vi: 'Nội quy bảo tàng' },
        lines: [
          {
            jp: 'びじゅつかんに はいってもいいです。',
            romaji: 'Bijutsukan ni haitte mo ii desu.',
            meaning: {
              en: 'You may enter the art museum.',
              vi: 'Bạn có thể vào bảo tàng mỹ thuật.'
            }
          },
          {
            jp: 'でも、しゃしんを とってはいけません。',
            romaji: 'Demo, shashin o totte wa ikemasen.',
            meaning: {
              en: 'But you must not take photos.',
              vi: 'Nhưng không được chụp ảnh.'
            }
          },
          {
            jp: 'なかで たばこを すってはいけません。',
            romaji: 'Naka de tabako o sutte wa ikemasen.',
            meaning: {
              en: 'You must not smoke inside.',
              vi: 'Không được hút thuốc bên trong.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is not allowed in the museum?',
              vi: 'Điều gì không được phép trong bảo tàng?'
            },
            choices: [
              { id: 'a', label: { en: 'Entering', vi: 'Đi vào' } },
              { id: 'b', label: { en: 'Taking photos', vi: 'Chụp ảnh' } },
              { id: 'c', label: { en: 'Walking', vi: 'Đi lại' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'Can you smoke inside?',
              vi: 'Có được hút thuốc bên trong không?'
            },
            choices: [
              { id: 'a', label: { en: 'Yes', vi: 'Có' } },
              { id: 'b', label: { en: 'No', vi: 'Không' } },
              { id: 'c', label: { en: 'Only in the morning', vi: 'Chỉ buổi sáng' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-16',
    number: 16,
    title: {
      en: 'Order & Timing of Actions',
      vi: 'Thứ tự & Thời điểm của hành động'
    },
    focus: {
      en: 'Sequence actions with 〜てから, 〜まえに, and 〜あとで.',
      vi: 'Sắp xếp hành động với 〜てから, 〜まえに và 〜あとで.'
    },
    vocab: [
      {
        kana: 'ねます',
        kanji: '寝ます',
        romaji: 'nemasu',
        meaning: { en: 'to sleep', vi: 'ngủ' }
      },
      {
        kana: 'はみがき',
        kanji: '歯磨き',
        romaji: 'hamigaki',
        meaning: { en: 'brushing teeth', vi: 'đánh răng' }
      },
      {
        kana: 'しゅくだい',
        kanji: '宿題',
        romaji: 'shukudai',
        meaning: { en: 'homework', vi: 'bài tập về nhà' }
      },
      {
        kana: 'しょくじ',
        kanji: '食事',
        romaji: 'shokuji',
        meaning: { en: 'meal', vi: 'bữa ăn' }
      },
      {
        kana: 'まえ',
        kanji: '前',
        romaji: 'mae',
        meaning: { en: 'before, front', vi: 'trước' }
      },
      {
        kana: 'あと',
        kanji: '後',
        romaji: 'ato',
        meaning: { en: 'after, later', vi: 'sau' }
      },
      {
        kana: 'てを あらいます',
        kanji: '手を洗います',
        romaji: 'te o araimasu',
        meaning: { en: 'to wash hands', vi: 'rửa tay' }
      },
      {
        kana: 'でかけます',
        kanji: '出かけます',
        romaji: 'dekakemasu',
        meaning: { en: 'to go out', vi: 'ra ngoài' }
      },
      {
        kana: 'うんどう',
        kanji: '運動',
        romaji: 'undō',
        meaning: { en: 'exercise', vi: 'tập thể dục' }
      },
      {
        kana: 'ごご',
        kanji: '午後',
        romaji: 'gogo',
        meaning: { en: 'afternoon, p.m.', vi: 'buổi chiều' }
      },
      {
        kana: 'まいばん',
        kanji: '毎晩',
        romaji: 'maiban',
        meaning: { en: 'every night', vi: 'mỗi tối' }
      },
      {
        kana: 'すぐ',
        romaji: 'sugu',
        meaning: { en: 'right away, soon', vi: 'ngay lập tức' }
      }
    ],
    grammar: [
      {
        pattern: 'V てから、V ます',
        title: { en: 'After doing A, then B', vi: 'Sau khi làm A, rồi B' },
        explanation: {
          en: '〜てから stresses that the second action happens only after the first finishes.',
          vi: '〜てから nhấn mạnh hành động sau chỉ xảy ra khi hành động trước đã xong.'
        },
        examples: [
          {
            jp: 'しゅくだいを してから、ねます。',
            romaji: 'Shukudai o shite kara, nemasu.',
            meaning: {
              en: 'After I do my homework, I sleep.',
              vi: 'Sau khi làm bài tập xong, tôi đi ngủ.'
            }
          },
          {
            jp: 'てを あらってから、たべます。',
            romaji: 'Te o aratte kara, tabemasu.',
            meaning: {
              en: 'I eat after washing my hands.',
              vi: 'Tôi rửa tay xong rồi mới ăn.'
            }
          }
        ]
      },
      {
        pattern: 'V る まえに / N の まえに',
        title: { en: 'Before doing …', vi: 'Trước khi …' },
        explanation: {
          en: 'Use the dictionary form + まえに for verbs, or N の まえに for nouns.',
          vi: 'Dùng thể từ điển + まえに cho động từ, hoặc N の まえに cho danh từ.'
        },
        examples: [
          {
            jp: 'ねる まえに はみがきを します。',
            romaji: 'Neru mae ni hamigaki o shimasu.',
            meaning: {
              en: 'I brush my teeth before sleeping.',
              vi: 'Trước khi ngủ tôi đánh răng.'
            }
          },
          {
            jp: 'しょくじの まえに てを あらいます。',
            romaji: 'Shokuji no mae ni te o araimasu.',
            meaning: {
              en: 'I wash my hands before a meal.',
              vi: 'Trước bữa ăn tôi rửa tay.'
            }
          }
        ]
      },
      {
        pattern: 'V た あとで / N の あとで',
        title: { en: 'After doing …', vi: 'Sau khi …' },
        explanation: {
          en: 'Use the past plain form (た) + あとで for verbs, or N の あとで for nouns.',
          vi: 'Dùng thể quá khứ thông thường (た) + あとで cho động từ, hoặc N の あとで cho danh từ.'
        },
        examples: [
          {
            jp: 'うんどうした あとで、シャワーを あびます。',
            romaji: 'Undō shita ato de, shawā o abimasu.',
            meaning: {
              en: 'After exercising, I take a shower.',
              vi: 'Sau khi tập thể dục, tôi tắm.'
            }
          },
          {
            jp: 'しょくじの あとで、すこし やすみます。',
            romaji: 'Shokuji no ato de, sukoshi yasumimasu.',
            meaning: {
              en: 'After the meal, I rest a little.',
              vi: 'Sau bữa ăn, tôi nghỉ một chút.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'My evening routine', vi: 'Thói quen buổi tối của tôi' },
        lines: [
          {
            jp: 'まいばん しょくじの あとで、しゅくだいを します。',
            romaji: 'Maiban shokuji no ato de, shukudai o shimasu.',
            meaning: {
              en: 'Every night I do my homework after the meal.',
              vi: 'Mỗi tối sau bữa ăn tôi làm bài tập.'
            }
          },
          {
            jp: 'しゅくだいを してから、ほんを よみます。',
            romaji: 'Shukudai o shite kara, hon o yomimasu.',
            meaning: {
              en: 'After doing my homework, I read a book.',
              vi: 'Sau khi làm bài tập, tôi đọc sách.'
            }
          },
          {
            jp: 'ねる まえに、いつも はみがきを します。',
            romaji: 'Neru mae ni, itsumo hamigaki o shimasu.',
            meaning: {
              en: 'Before sleeping, I always brush my teeth.',
              vi: 'Trước khi ngủ, tôi luôn đánh răng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'When does the writer do homework?',
              vi: 'Người viết làm bài tập khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'After the meal', vi: 'Sau bữa ăn' } },
              { id: 'b', label: { en: 'Before the meal', vi: 'Trước bữa ăn' } },
              { id: 'c', label: { en: 'In the morning', vi: 'Buổi sáng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer do before sleeping?',
              vi: 'Người viết làm gì trước khi ngủ?'
            },
            choices: [
              { id: 'a', label: { en: 'Reads a book', vi: 'Đọc sách' } },
              { id: 'b', label: { en: 'Brushes teeth', vi: 'Đánh răng' } },
              { id: 'c', label: { en: 'Exercises', vi: 'Tập thể dục' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  }
];
