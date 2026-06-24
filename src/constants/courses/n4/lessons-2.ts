import type { Lesson } from '../types.ts';

export const n4LessonsB: Lesson[] = [
  {
    id: 'lesson-9',
    number: 9,
    title: {
      en: 'Saying What You Can Do',
      vi: 'Nói điều bạn có thể làm'
    },
    focus: {
      en: 'Express ability with the potential form (のめる / たべられる / できる / 来られる).',
      vi: 'Diễn đạt khả năng với thể khả năng (のめる / たべられる / できる / 来られる).'
    },
    vocab: [
      { kana: 'およぐ', kanji: '泳ぐ', romaji: 'oyogu', meaning: { en: 'to swim', vi: 'bơi' } },
      {
        kana: 'はなす',
        kanji: '話す',
        romaji: 'hanasu',
        meaning: { en: 'to speak, talk', vi: 'nói chuyện' }
      },
      {
        kana: 'うんてん',
        kanji: '運転',
        romaji: 'unten',
        meaning: { en: 'driving', vi: 'lái xe' }
      },
      { kana: 'ピアノ', romaji: 'piano', meaning: { en: 'piano', vi: 'đàn piano' } },
      {
        kana: 'えいご',
        kanji: '英語',
        romaji: 'eigo',
        meaning: { en: 'English (language)', vi: 'tiếng Anh' }
      },
      {
        kana: 'かんじ',
        kanji: '漢字',
        romaji: 'kanji',
        meaning: { en: 'kanji, Chinese character', vi: 'chữ Hán' }
      },
      { kana: 'テニス', romaji: 'tenisu', meaning: { en: 'tennis', vi: 'quần vợt' } },
      {
        kana: 'ひく',
        kanji: '弾く',
        romaji: 'hiku',
        meaning: { en: 'to play (an instrument)', vi: 'chơi (nhạc cụ)' }
      },
      {
        kana: 'ならう',
        kanji: '習う',
        romaji: 'narau',
        meaning: { en: 'to learn', vi: 'học (kỹ năng)' }
      },
      {
        kana: 'ぜんぜん',
        kanji: '全然',
        romaji: 'zenzen',
        meaning: { en: '(not) at all', vi: '(không)… chút nào' }
      },
      {
        kana: 'すこし',
        kanji: '少し',
        romaji: 'sukoshi',
        meaning: { en: 'a little', vi: 'một chút' }
      },
      { kana: 'もう', romaji: 'mō', meaning: { en: 'already', vi: 'đã, rồi' } }
    ],
    grammar: [
      {
        pattern: 'Group 1: う → える',
        title: {
          en: 'Potential form (Group 1 verbs)',
          vi: 'Thể khả năng (động từ nhóm 1)'
        },
        explanation: {
          en: 'For Group 1 (う-verbs), change the final -u sound to -eru: のむ→のめる (can drink), はなす→はなせる (can speak).',
          vi: 'Với động từ nhóm 1 (đuôi う), đổi âm -u cuối thành -eru: のむ→のめる (uống được), はなす→はなせる (nói được).'
        },
        examples: [
          {
            jp: 'わたしは えいごが はなせます。',
            romaji: 'Watashi wa eigo ga hanasemasu.',
            meaning: { en: 'I can speak English.', vi: 'Tôi có thể nói tiếng Anh.' }
          },
          {
            jp: 'かんじが すこし よめます。',
            romaji: 'Kanji ga sukoshi yomemasu.',
            meaning: { en: 'I can read kanji a little.', vi: 'Tôi đọc được một chút chữ Hán.' }
          }
        ]
      },
      {
        pattern: 'Group 2: 〜る → られる',
        title: {
          en: 'Potential form (Group 2 verbs)',
          vi: 'Thể khả năng (động từ nhóm 2)'
        },
        explanation: {
          en: 'For Group 2 (る-verbs), drop る and add られる: たべる→たべられる (can eat), おぼえる→おぼえられる (can memorize).',
          vi: 'Với động từ nhóm 2 (đuôi る), bỏ る và thêm られる: たべる→たべられる (ăn được), おぼえる→おぼえられる (nhớ được).'
        },
        examples: [
          {
            jp: 'この かんじは おぼえられます。',
            romaji: 'Kono kanji wa oboeraremasu.',
            meaning: { en: 'I can memorize this kanji.', vi: 'Tôi có thể nhớ chữ Hán này.' }
          },
          {
            jp: 'よる はやく ねられません。',
            romaji: 'Yoru hayaku neraremasen.',
            meaning: {
              en: 'I cannot sleep early at night.',
              vi: 'Buổi tối tôi không ngủ sớm được.'
            }
          }
        ]
      },
      {
        pattern: 'する → できる、来る → 来られる',
        title: {
          en: 'Irregular potential: できる / 来られる',
          vi: 'Khả năng bất quy tắc: できる / 来られる'
        },
        explanation: {
          en: 'する becomes できる (can do) and 来る becomes 来られる (can come). The thing you can do takes が.',
          vi: 'する thành できる (làm được) và 来る thành 来られる (đến được). Đối tượng bạn làm được dùng が.'
        },
        examples: [
          {
            jp: 'わたしは うんてんが できます。',
            romaji: 'Watashi wa unten ga dekimasu.',
            meaning: { en: 'I can drive.', vi: 'Tôi biết lái xe.' }
          },
          {
            jp: 'あした がっこうに 来られません。',
            romaji: 'Ashita gakkō ni koraremasen.',
            meaning: {
              en: 'I cannot come to school tomorrow.',
              vi: 'Ngày mai tôi không đến trường được.'
            }
          }
        ]
      },
      {
        pattern: 'N が V(potential)',
        title: { en: 'Marking ability with が', vi: 'Đánh dấu khả năng với が' },
        explanation: {
          en: 'With potential verbs, the thing you can do is usually marked with が instead of を.',
          vi: 'Với động từ thể khả năng, đối tượng bạn làm được thường được đánh dấu bằng が thay cho を.'
        },
        examples: [
          {
            jp: 'ピアノが ひけます。',
            romaji: 'Piano ga hikemasu.',
            meaning: { en: 'I can play the piano.', vi: 'Tôi chơi được đàn piano.' }
          },
          {
            jp: 'テニスが すこし できます。',
            romaji: 'Tenisu ga sukoshi dekimasu.',
            meaning: { en: 'I can play tennis a little.', vi: 'Tôi chơi quần vợt được một chút.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'What Ken can do', vi: 'Những điều Ken làm được' },
        lines: [
          {
            jp: 'ケンさんは えいごと にほんごが はなせます。',
            romaji: 'Ken-san wa eigo to nihongo ga hanasemasu.',
            meaning: {
              en: 'Ken can speak English and Japanese.',
              vi: 'Ken có thể nói tiếng Anh và tiếng Nhật.'
            }
          },
          {
            jp: 'くるまの うんてんも できます。',
            romaji: 'Kuruma no unten mo dekimasu.',
            meaning: { en: 'He can also drive a car.', vi: 'Anh ấy cũng biết lái xe.' }
          },
          {
            jp: 'でも、ピアノは ぜんぜん ひけません。',
            romaji: 'Demo, piano wa zenzen hikemasen.',
            meaning: {
              en: 'But he cannot play the piano at all.',
              vi: 'Nhưng anh ấy hoàn toàn không chơi được piano.'
            }
          },
          {
            jp: 'いま、ピアノを ならって います。',
            romaji: 'Ima, piano o naratte imasu.',
            meaning: { en: 'Now he is learning the piano.', vi: 'Bây giờ anh ấy đang học piano.' }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What can Ken do?', vi: 'Ken có thể làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Speak two languages', vi: 'Nói được hai thứ tiếng' } },
              { id: 'b', label: { en: 'Play the piano well', vi: 'Chơi piano giỏi' } },
              { id: 'c', label: { en: 'Cook well', vi: 'Nấu ăn giỏi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What can Ken not do at all?', vi: 'Ken hoàn toàn không làm được gì?' },
            choices: [
              { id: 'a', label: { en: 'Drive a car', vi: 'Lái xe' } },
              { id: 'b', label: { en: 'Play the piano', vi: 'Chơi piano' } },
              { id: 'c', label: { en: 'Speak English', vi: 'Nói tiếng Anh' } }
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
      en: 'Even If & No Matter What',
      vi: 'Dù… vẫn & Bất kể thế nào'
    },
    focus: {
      en: 'Use 〜ても and question word + ても to say "even if" and "no matter what/who/how".',
      vi: 'Dùng 〜ても và từ để hỏi + ても để nói "dù… vẫn" và "bất kể gì/ai/thế nào".'
    },
    vocab: [
      {
        kana: 'てんき',
        kanji: '天気',
        romaji: 'tenki',
        meaning: { en: 'weather', vi: 'thời tiết' }
      },
      { kana: 'あめ', kanji: '雨', romaji: 'ame', meaning: { en: 'rain', vi: 'mưa' } },
      { kana: 'ゆき', kanji: '雪', romaji: 'yuki', meaning: { en: 'snow', vi: 'tuyết' } },
      { kana: 'さむい', kanji: '寒い', romaji: 'samui', meaning: { en: 'cold', vi: 'lạnh' } },
      { kana: 'あつい', kanji: '暑い', romaji: 'atsui', meaning: { en: 'hot', vi: 'nóng' } },
      {
        kana: 'ねむい',
        kanji: '眠い',
        romaji: 'nemui',
        meaning: { en: 'sleepy', vi: 'buồn ngủ' }
      },
      {
        kana: 'つかれる',
        kanji: '疲れる',
        romaji: 'tsukareru',
        meaning: { en: 'to get tired', vi: 'mệt' }
      },
      {
        kana: 'がんばる',
        kanji: '頑張る',
        romaji: 'ganbaru',
        meaning: { en: "to do one's best", vi: 'cố gắng' }
      },
      {
        kana: 'やすむ',
        kanji: '休む',
        romaji: 'yasumu',
        meaning: { en: 'to rest, take a day off', vi: 'nghỉ' }
      },
      {
        kana: 'でかける',
        kanji: '出かける',
        romaji: 'dekakeru',
        meaning: { en: 'to go out', vi: 'ra ngoài' }
      },
      {
        kana: 'どんなに',
        romaji: 'donna ni',
        meaning: { en: 'no matter how', vi: 'dù… đến đâu' }
      },
      {
        kana: 'いくら',
        romaji: 'ikura',
        meaning: { en: 'no matter how much', vi: 'dù… bao nhiêu' }
      }
    ],
    grammar: [
      {
        pattern: 'V て + も',
        title: { en: 'Even if (verb て-form + も)', vi: 'Dù (động từ thể て + も)' },
        explanation: {
          en: 'Add も to the て-form to mean "even if". The result is unexpected or unchanged by the condition.',
          vi: 'Thêm も vào thể て nghĩa là "dù… thì vẫn". Kết quả không bị điều kiện làm thay đổi.'
        },
        examples: [
          {
            jp: 'あめが ふっても、でかけます。',
            romaji: 'Ame ga futte mo, dekakemasu.',
            meaning: {
              en: 'Even if it rains, I will go out.',
              vi: 'Dù trời mưa tôi vẫn ra ngoài.'
            }
          },
          {
            jp: 'つかれても、がんばります。',
            romaji: 'Tsukarete mo, ganbarimasu.',
            meaning: {
              en: 'Even if I am tired, I will do my best.',
              vi: 'Dù mệt tôi vẫn cố gắng.'
            }
          }
        ]
      },
      {
        pattern: 'い-adj／な-adj／N + ても',
        title: {
          en: 'Even if (adjectives and nouns)',
          vi: 'Dù (tính từ và danh từ)'
        },
        explanation: {
          en: 'For い-adjectives use 〜くても (さむくても); for な-adjectives and nouns use 〜でも (べんりでも、あめでも).',
          vi: 'Với tính từ -い dùng 〜くても (さむくても); với tính từ -な và danh từ dùng 〜でも (べんりでも、あめでも).'
        },
        examples: [
          {
            jp: 'さむくても、でかけます。',
            romaji: 'Samukute mo, dekakemasu.',
            meaning: { en: 'Even if it is cold, I go out.', vi: 'Dù lạnh tôi vẫn ra ngoài.' }
          },
          {
            jp: 'ゆきでも、がっこうへ いきます。',
            romaji: 'Yuki demo, gakkō e ikimasu.',
            meaning: {
              en: 'Even if it snows, I go to school.',
              vi: 'Dù có tuyết tôi vẫn đến trường.'
            }
          }
        ]
      },
      {
        pattern: '疑問詞 + ても',
        title: {
          en: 'No matter what / who / how (question word + ても)',
          vi: 'Bất kể gì / ai / thế nào (từ để hỏi + ても)'
        },
        explanation: {
          en: 'A question word plus 〜ても means "no matter…": なにを たべても, だれが きても, どんなに さむくても.',
          vi: 'Từ để hỏi cộng 〜ても nghĩa là "bất kể…": なにを たべても, だれが きても, どんなに さむくても.'
        },
        examples: [
          {
            jp: 'どんなに ねむくても、べんきょうします。',
            romaji: 'Donna ni nemukute mo, benkyō shimasu.',
            meaning: {
              en: 'No matter how sleepy I am, I study.',
              vi: 'Dù buồn ngủ đến mấy tôi vẫn học.'
            }
          },
          {
            jp: 'だれが きても、わたしは やすみません。',
            romaji: 'Dare ga kite mo, watashi wa yasumimasen.',
            meaning: {
              en: 'No matter who comes, I will not take a day off.',
              vi: 'Bất kể ai đến, tôi cũng không nghỉ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A diligent student', vi: 'Một học sinh chăm chỉ' },
        lines: [
          {
            jp: 'ハナさんは あめが ふっても、あるいて がっこうへ いきます。',
            romaji: 'Hana-san wa ame ga futte mo, aruite gakkō e ikimasu.',
            meaning: {
              en: 'Even if it rains, Hana walks to school.',
              vi: 'Dù trời mưa, Hana vẫn đi bộ đến trường.'
            }
          },
          {
            jp: 'どんなに さむくても、やすみません。',
            romaji: 'Donna ni samukute mo, yasumimasen.',
            meaning: {
              en: 'No matter how cold it is, she does not take a day off.',
              vi: 'Dù lạnh đến đâu, cô ấy cũng không nghỉ.'
            }
          },
          {
            jp: 'ねむくても、よる おそくまで べんきょうします。',
            romaji: 'Nemukute mo, yoru osoku made benkyō shimasu.',
            meaning: {
              en: 'Even when sleepy, she studies until late at night.',
              vi: 'Dù buồn ngủ, cô ấy vẫn học đến tối muộn.'
            }
          },
          {
            jp: 'だから、テストは いつも いいです。',
            romaji: 'Dakara, tesuto wa itsumo ii desu.',
            meaning: {
              en: 'So her test results are always good.',
              vi: 'Vì vậy điểm kiểm tra của cô ấy luôn tốt.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does Hana do even when it rains?',
              vi: 'Hana làm gì ngay cả khi trời mưa?'
            },
            choices: [
              { id: 'a', label: { en: 'Walks to school', vi: 'Đi bộ đến trường' } },
              { id: 'b', label: { en: 'Stays home', vi: 'Ở nhà' } },
              { id: 'c', label: { en: 'Takes the bus', vi: 'Đi xe buýt' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why are her test results always good?',
              vi: 'Tại sao điểm của cô ấy luôn tốt?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Because she studies even when sleepy',
                  vi: 'Vì cô ấy học cả khi buồn ngủ'
                }
              },
              { id: 'b', label: { en: 'Because the tests are easy', vi: 'Vì bài kiểm tra dễ' } },
              { id: 'c', label: { en: 'Because she rests a lot', vi: 'Vì cô ấy nghỉ nhiều' } }
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
      en: 'Things You Must Do',
      vi: 'Những việc bạn phải làm'
    },
    focus: {
      en: 'Express obligation with 〜なければならない / 〜なくてはいけない and the casual 〜なきゃ / 〜なくちゃ.',
      vi: 'Diễn đạt nghĩa vụ với 〜なければならない / 〜なくてはいけない và dạng thân mật 〜なきゃ / 〜なくちゃ.'
    },
    vocab: [
      {
        kana: 'しゅくだい',
        kanji: '宿題',
        romaji: 'shukudai',
        meaning: { en: 'homework', vi: 'bài tập về nhà' }
      },
      {
        kana: 'くすり',
        kanji: '薬',
        romaji: 'kusuri',
        meaning: { en: 'medicine', vi: 'thuốc' }
      },
      {
        kana: 'はやく',
        kanji: '早く',
        romaji: 'hayaku',
        meaning: { en: 'early', vi: 'sớm' }
      },
      {
        kana: 'おきる',
        kanji: '起きる',
        romaji: 'okiru',
        meaning: { en: 'to get up', vi: 'thức dậy' }
      },
      {
        kana: 'しごと',
        kanji: '仕事',
        romaji: 'shigoto',
        meaning: { en: 'work, job', vi: 'công việc' }
      },
      {
        kana: 'だす',
        kanji: '出す',
        romaji: 'dasu',
        meaning: { en: 'to hand in, submit', vi: 'nộp' }
      },
      {
        kana: 'はらう',
        kanji: '払う',
        romaji: 'harau',
        meaning: { en: 'to pay', vi: 'trả (tiền)' }
      },
      {
        kana: 'まもる',
        kanji: '守る',
        romaji: 'mamoru',
        meaning: { en: 'to obey, protect', vi: 'tuân theo, bảo vệ' }
      },
      { kana: 'ルール', romaji: 'rūru', meaning: { en: 'rule', vi: 'quy tắc' } },
      {
        kana: 'やくそく',
        kanji: '約束',
        romaji: 'yakusoku',
        meaning: { en: 'promise', vi: 'lời hứa' }
      },
      {
        kana: 'たいへん',
        kanji: '大変',
        romaji: 'taihen',
        meaning: { en: 'tough, hard', vi: 'vất vả' }
      },
      {
        kana: 'おかね',
        kanji: 'お金',
        romaji: 'okane',
        meaning: { en: 'money', vi: 'tiền' }
      }
    ],
    grammar: [
      {
        pattern: 'V なければ ならない',
        title: { en: 'Must do (〜なければならない)', vi: 'Phải làm (〜なければならない)' },
        explanation: {
          en: 'Take the ない-form, drop ない, and add 〜なければ ならない. It states an obligation: "must / have to".',
          vi: 'Lấy thể ない, bỏ ない, rồi thêm 〜なければ ならない. Diễn đạt nghĩa vụ: "phải".'
        },
        examples: [
          {
            jp: 'くすりを のまなければ なりません。',
            romaji: 'Kusuri o nomanakereba narimasen.',
            meaning: { en: 'I have to take medicine.', vi: 'Tôi phải uống thuốc.' }
          },
          {
            jp: 'しゅくだいを ださなければ なりません。',
            romaji: 'Shukudai o dasanakereba narimasen.',
            meaning: { en: 'I must hand in the homework.', vi: 'Tôi phải nộp bài tập.' }
          }
        ]
      },
      {
        pattern: 'V なくては いけない',
        title: { en: 'Must do (〜なくてはいけない)', vi: 'Phải làm (〜なくてはいけない)' },
        explanation: {
          en: 'Another way to say "must": drop ない and add 〜なくては いけない (or 〜なくては ならない). Close in meaning to 〜なければ ならない.',
          vi: 'Một cách khác để nói "phải": bỏ ない và thêm 〜なくては いけない (hoặc 〜なくては ならない). Nghĩa gần với 〜なければ ならない.'
        },
        examples: [
          {
            jp: 'はやく おきなくては いけません。',
            romaji: 'Hayaku okinakute wa ikemasen.',
            meaning: { en: 'I have to get up early.', vi: 'Tôi phải dậy sớm.' }
          },
          {
            jp: 'ルールを まもらなくては いけません。',
            romaji: 'Rūru o mamoranakute wa ikemasen.',
            meaning: { en: 'You must obey the rules.', vi: 'Bạn phải tuân theo quy tắc.' }
          }
        ]
      },
      {
        pattern: 'casual 〜なきゃ／〜なくちゃ',
        title: {
          en: 'Casual obligation (〜なきゃ / 〜なくちゃ)',
          vi: 'Nghĩa vụ thân mật (〜なきゃ / 〜なくちゃ)'
        },
        explanation: {
          en: 'In casual speech, 〜なければ shortens to 〜なきゃ and 〜なくては to 〜なくちゃ. The ending (ならない / いけない) is usually dropped.',
          vi: 'Trong văn nói thân mật, 〜なければ rút thành 〜なきゃ và 〜なくては thành 〜なくちゃ. Phần đuôi (ならない / いけない) thường được lược bỏ.'
        },
        examples: [
          {
            jp: 'もう いかなきゃ。',
            romaji: 'Mō ikanakya.',
            meaning: { en: 'I have to go now.', vi: 'Mình phải đi rồi.' }
          },
          {
            jp: 'おかねを はらわなくちゃ。',
            romaji: 'Okane o harawanakucha.',
            meaning: { en: 'I have to pay.', vi: 'Mình phải trả tiền.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A busy Monday', vi: 'Thứ Hai bận rộn' },
        lines: [
          {
            jp: 'げつようびは とても たいへんです。',
            romaji: 'Getsuyōbi wa totemo taihen desu.',
            meaning: { en: 'Mondays are very tough.', vi: 'Thứ Hai rất vất vả.' }
          },
          {
            jp: 'あさ はやく おきなければ なりません。',
            romaji: 'Asa hayaku okinakereba narimasen.',
            meaning: {
              en: 'I have to get up early in the morning.',
              vi: 'Buổi sáng tôi phải dậy sớm.'
            }
          },
          {
            jp: 'がっこうで しゅくだいを ださなくては いけません。',
            romaji: 'Gakkō de shukudai o dasanakute wa ikemasen.',
            meaning: {
              en: 'I must hand in homework at school.',
              vi: 'Ở trường tôi phải nộp bài tập.'
            }
          },
          {
            jp: 'よる くすりも のまなきゃ。',
            romaji: 'Yoru kusuri mo nomanakya.',
            meaning: {
              en: 'At night I also have to take medicine.',
              vi: 'Buổi tối mình cũng phải uống thuốc.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What must the writer do in the morning?',
              vi: 'Buổi sáng người viết phải làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Get up early', vi: 'Dậy sớm' } },
              { id: 'b', label: { en: 'Pay money', vi: 'Trả tiền' } },
              { id: 'c', label: { en: 'Rest', vi: 'Nghỉ ngơi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What must be handed in at school?',
              vi: 'Phải nộp gì ở trường?'
            },
            choices: [
              { id: 'a', label: { en: 'Homework', vi: 'Bài tập' } },
              { id: 'b', label: { en: 'Medicine', vi: 'Thuốc' } },
              { id: 'c', label: { en: 'Money', vi: 'Tiền' } }
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
      en: "What You Don't Have to Do & How to Do It",
      vi: 'Điều không cần làm & Cách làm'
    },
    focus: {
      en: 'Say something is not necessary with 〜なくてもいい and describe the way of doing with 〜方.',
      vi: 'Nói điều gì đó không cần thiết với 〜なくてもいい và mô tả cách làm với 〜方.'
    },
    vocab: [
      {
        kana: 'つかいかた',
        kanji: '使い方',
        romaji: 'tsukaikata',
        meaning: { en: 'how to use', vi: 'cách dùng' }
      },
      {
        kana: 'つくりかた',
        kanji: '作り方',
        romaji: 'tsukurikata',
        meaning: { en: 'how to make', vi: 'cách làm' }
      },
      {
        kana: 'かきかた',
        kanji: '書き方',
        romaji: 'kakikata',
        meaning: { en: 'how to write', vi: 'cách viết' }
      },
      {
        kana: 'つかう',
        kanji: '使う',
        romaji: 'tsukau',
        meaning: { en: 'to use', vi: 'sử dụng' }
      },
      {
        kana: 'おぼえる',
        kanji: '覚える',
        romaji: 'oboeru',
        meaning: { en: 'to memorize, remember', vi: 'ghi nhớ' }
      },
      {
        kana: 'かんたん',
        kanji: '簡単',
        romaji: 'kantan',
        meaning: { en: 'simple, easy', vi: 'đơn giản' }
      },
      {
        kana: 'むずかしい',
        kanji: '難しい',
        romaji: 'muzukashii',
        meaning: { en: 'difficult', vi: 'khó' }
      },
      { kana: 'レシピ', romaji: 'reshipi', meaning: { en: 'recipe', vi: 'công thức nấu ăn' } },
      {
        kana: 'きかい',
        kanji: '機械',
        romaji: 'kikai',
        meaning: { en: 'machine', vi: 'máy móc' }
      },
      {
        kana: 'せつめい',
        kanji: '説明',
        romaji: 'setsumei',
        meaning: { en: 'explanation', vi: 'lời giải thích' }
      },
      {
        kana: 'しんぱい',
        kanji: '心配',
        romaji: 'shinpai',
        meaning: { en: 'worry', vi: 'lo lắng' }
      },
      {
        kana: 'ぜんぶ',
        kanji: '全部',
        romaji: 'zenbu',
        meaning: { en: 'all, everything', vi: 'tất cả' }
      }
    ],
    grammar: [
      {
        pattern: 'V なくても いい',
        title: {
          en: "Don't have to (〜なくてもいい)",
          vi: 'Không cần phải (〜なくてもいい)'
        },
        explanation: {
          en: 'Drop ない from the ない-form and add 〜なくても いい to say something is not necessary: "you don\'t have to…".',
          vi: 'Bỏ ない khỏi thể ない và thêm 〜なくても いい để nói điều gì đó không cần thiết: "không cần phải…".'
        },
        examples: [
          {
            jp: 'あした 来なくても いいです。',
            romaji: 'Ashita konakute mo ii desu.',
            meaning: { en: "You don't have to come tomorrow.", vi: 'Ngày mai bạn không cần đến.' }
          },
          {
            jp: 'ぜんぶ おぼえなくても いいです。',
            romaji: 'Zenbu oboenakute mo ii desu.',
            meaning: {
              en: "You don't have to memorize everything.",
              vi: 'Bạn không cần nhớ hết.'
            }
          }
        ]
      },
      {
        pattern: 'V-stem + 方（かた）',
        title: { en: 'The way of doing (〜方)', vi: 'Cách làm (〜方)' },
        explanation: {
          en: 'Attach 方（かた）to the verb stem to mean "the way of doing": 食べ方 (how to eat), 使い方 (how to use).',
          vi: 'Gắn 方（かた）vào thân động từ để chỉ "cách làm": 食べ方 (cách ăn), 使い方 (cách dùng).'
        },
        examples: [
          {
            jp: 'この きかいの つかいかたを おしえて ください。',
            romaji: 'Kono kikai no tsukaikata o oshiete kudasai.',
            meaning: {
              en: 'Please teach me how to use this machine.',
              vi: 'Hãy chỉ tôi cách dùng cái máy này.'
            }
          },
          {
            jp: 'かんじの かきかたは むずかしいです。',
            romaji: 'Kanji no kakikata wa muzukashii desu.',
            meaning: {
              en: 'The way to write kanji is difficult.',
              vi: 'Cách viết chữ Hán rất khó.'
            }
          }
        ]
      },
      {
        pattern: 'V ても いい',
        title: { en: 'May do (〜てもいい)', vi: 'Được phép làm (〜てもいい)' },
        explanation: {
          en: 'The て-form + も いい gives or asks permission: "may / it is OK to". Compare it with 〜なくても いい (don\'t have to).',
          vi: 'Thể て + も いい dùng để cho phép hoặc xin phép: "được phép". So sánh với 〜なくても いい (không cần phải).'
        },
        examples: [
          {
            jp: 'この ペンを つかっても いいですか。',
            romaji: 'Kono pen o tsukatte mo ii desu ka.',
            meaning: { en: 'May I use this pen?', vi: 'Tôi dùng cây bút này được không?' }
          },
          {
            jp: 'はい、つかっても いいです。',
            romaji: 'Hai, tsukatte mo ii desu.',
            meaning: { en: 'Yes, you may use it.', vi: 'Vâng, bạn cứ dùng.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A simple recipe', vi: 'Một công thức đơn giản' },
        lines: [
          {
            jp: 'この りょうりの つくりかたは とても かんたんです。',
            romaji: 'Kono ryōri no tsukurikata wa totemo kantan desu.',
            meaning: {
              en: 'The way to make this dish is very simple.',
              vi: 'Cách làm món này rất đơn giản.'
            }
          },
          {
            jp: 'レシピを ぜんぶ おぼえなくても いいです。',
            romaji: 'Reshipi o zenbu oboenakute mo ii desu.',
            meaning: {
              en: "You don't have to memorize the whole recipe.",
              vi: 'Bạn không cần nhớ hết công thức.'
            }
          },
          {
            jp: 'むずかしい きかいも つかわなくても いいです。',
            romaji: 'Muzukashii kikai mo tsukawanakute mo ii desu.',
            meaning: {
              en: "You don't have to use difficult machines either.",
              vi: 'Bạn cũng không cần dùng máy móc phức tạp.'
            }
          },
          {
            jp: 'だから、しんぱいしなくても いいですよ。',
            romaji: 'Dakara, shinpai shinakute mo ii desu yo.',
            meaning: { en: "So you don't have to worry.", vi: 'Vì vậy bạn không cần lo lắng đâu.' }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is said about making this dish?',
              vi: 'Việc làm món này được nói thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'It is very simple', vi: 'Rất đơn giản' } },
              { id: 'b', label: { en: 'It is very difficult', vi: 'Rất khó' } },
              { id: 'c', label: { en: 'It needs machines', vi: 'Cần máy móc' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What do you NOT have to do?', vi: 'Bạn KHÔNG cần làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Memorize the whole recipe', vi: 'Nhớ hết công thức' } },
              { id: 'b', label: { en: 'Buy ingredients', vi: 'Mua nguyên liệu' } },
              { id: 'c', label: { en: 'Cook the dish', vi: 'Nấu món ăn' } }
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
    title: {
      en: 'Commands & Prohibitions',
      vi: 'Mệnh lệnh & Cấm đoán'
    },
    focus: {
      en: 'Give orders with 〜なさい and the plain command form (命令形), and forbid with 〜な.',
      vi: 'Ra lệnh với 〜なさい và thể mệnh lệnh (命令形), và cấm đoán với 〜な.'
    },
    vocab: [
      {
        kana: 'しずかに',
        kanji: '静かに',
        romaji: 'shizuka ni',
        meaning: { en: 'quietly', vi: 'yên lặng' }
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
        kana: 'はしる',
        kanji: '走る',
        romaji: 'hashiru',
        meaning: { en: 'to run', vi: 'chạy' }
      },
      {
        kana: 'いそぐ',
        kanji: '急ぐ',
        romaji: 'isogu',
        meaning: { en: 'to hurry', vi: 'vội, gấp' }
      },
      {
        kana: 'さわる',
        kanji: '触る',
        romaji: 'sawaru',
        meaning: { en: 'to touch', vi: 'chạm vào' }
      },
      {
        kana: 'はいる',
        kanji: '入る',
        romaji: 'hairu',
        meaning: { en: 'to enter', vi: 'đi vào' }
      },
      {
        kana: 'きを つける',
        kanji: '気を付ける',
        romaji: 'ki o tsukeru',
        meaning: { en: 'to be careful', vi: 'cẩn thận' }
      },
      {
        kana: 'きけん',
        kanji: '危険',
        romaji: 'kiken',
        meaning: { en: 'danger, dangerous', vi: 'nguy hiểm' }
      },
      {
        kana: 'きんし',
        kanji: '禁止',
        romaji: 'kinshi',
        meaning: { en: 'prohibition', vi: 'cấm' }
      },
      {
        kana: 'こども',
        kanji: '子供',
        romaji: 'kodomo',
        meaning: { en: 'child', vi: 'trẻ con' }
      },
      {
        kana: 'かんばん',
        kanji: '看板',
        romaji: 'kanban',
        meaning: { en: 'sign, signboard', vi: 'biển báo' }
      }
    ],
    grammar: [
      {
        pattern: 'V-stem + なさい',
        title: { en: 'Gentle command (〜なさい)', vi: 'Mệnh lệnh nhẹ (〜なさい)' },
        explanation: {
          en: 'Add なさい to the verb stem for a firm but polite command, used by parents and teachers: 食べなさい (eat).',
          vi: 'Thêm なさい vào thân động từ để ra lệnh dứt khoát nhưng vẫn lịch sự, thường do cha mẹ và giáo viên dùng: 食べなさい (hãy ăn).'
        },
        examples: [
          {
            jp: 'はやく ねなさい。',
            romaji: 'Hayaku nenasai.',
            meaning: { en: 'Go to sleep early.', vi: 'Hãy đi ngủ sớm đi.' }
          },
          {
            jp: 'しずかに しなさい。',
            romaji: 'Shizuka ni shinasai.',
            meaning: { en: 'Be quiet.', vi: 'Hãy yên lặng.' }
          }
        ]
      },
      {
        pattern: 'Plain command (命令形)',
        title: { en: 'Strong command form (命令形)', vi: 'Thể mệnh lệnh mạnh (命令形)' },
        explanation: {
          en: 'Group 1: change -u to -e (はしる→はしれ). Group 2: drop る, add ろ (たべる→たべろ). Irregular: する→しろ, 来る→来い. It sounds very strong and rough.',
          vi: 'Nhóm 1: đổi -u thành -e (はしる→はしれ). Nhóm 2: bỏ る, thêm ろ (たべる→たべろ). Bất quy tắc: する→しろ, 来る→来い. Sắc thái rất mạnh và thô.'
        },
        examples: [
          {
            jp: 'はやく いそげ。',
            romaji: 'Hayaku isoge.',
            meaning: { en: 'Hurry up!', vi: 'Nhanh lên!' }
          },
          {
            jp: 'ここに 来い。',
            romaji: 'Koko ni koi.',
            meaning: { en: 'Come here!', vi: 'Đến đây!' }
          }
        ]
      },
      {
        pattern: 'dictionary + な',
        title: { en: 'Prohibition (〜な)', vi: 'Cấm đoán (〜な)' },
        explanation: {
          en: "Add な to the dictionary form for a strong \"Don't…!\": さわるな (don't touch), はいるな (don't enter). Common on warning signs.",
          vi: 'Thêm な vào thể từ điển để ra lệnh cấm mạnh "Đừng…!": さわるな (đừng chạm), はいるな (đừng vào). Thường thấy trên biển cảnh báo.'
        },
        examples: [
          {
            jp: 'ここに はいるな。',
            romaji: 'Koko ni hairu na.',
            meaning: { en: "Don't enter here.", vi: 'Đừng vào đây.' }
          },
          {
            jp: 'この きかいに さわるな。',
            romaji: 'Kono kikai ni sawaru na.',
            meaning: { en: "Don't touch this machine.", vi: 'Đừng chạm vào cái máy này.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Signs at the park', vi: 'Các biển báo ở công viên' },
        lines: [
          {
            jp: 'こうえんに いろいろな かんばんが あります。',
            romaji: 'Kōen ni iroiro na kanban ga arimasu.',
            meaning: {
              en: 'There are various signs in the park.',
              vi: 'Trong công viên có nhiều biển báo khác nhau.'
            }
          },
          {
            jp: 'みちで はしるな、と かいて あります。',
            romaji: 'Michi de hashiru na, to kaite arimasu.',
            meaning: {
              en: 'One says "Do not run on the path".',
              vi: 'Một biển ghi "Đừng chạy trên đường".'
            }
          },
          {
            jp: 'きけんですから、かわに はいるな。',
            romaji: 'Kiken desu kara, kawa ni hairu na.',
            meaning: {
              en: 'It is dangerous, so do not enter the river.',
              vi: 'Vì nguy hiểm nên đừng xuống sông.'
            }
          },
          {
            jp: 'こどもに「きを つけなさい」と いいます。',
            romaji: 'Kodomo ni "ki o tsukenasai" to iimasu.',
            meaning: {
              en: 'Parents tell children, "Be careful."',
              vi: 'Cha mẹ nói với trẻ: "Hãy cẩn thận".'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What does one sign prohibit?', vi: 'Một biển báo cấm điều gì?' },
            choices: [
              { id: 'a', label: { en: 'Running on the path', vi: 'Chạy trên đường' } },
              { id: 'b', label: { en: 'Eating food', vi: 'Ăn uống' } },
              { id: 'c', label: { en: 'Taking photos', vi: 'Chụp ảnh' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why must you not enter the river?',
              vi: 'Tại sao không được xuống sông?'
            },
            choices: [
              { id: 'a', label: { en: 'Because it is dangerous', vi: 'Vì nguy hiểm' } },
              { id: 'b', label: { en: 'Because it is dirty', vi: 'Vì bẩn' } },
              { id: 'c', label: { en: 'Because it is cold', vi: 'Vì lạnh' } }
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
      en: 'What Other People Want',
      vi: 'Điều người khác mong muốn'
    },
    focus: {
      en: 'Describe a third person\u2019s desire with 〜たがる / 〜ほしがる / 〜たがっている.',
      vi: 'Mô tả mong muốn của người khác với 〜たがる / 〜ほしがる / 〜たがっている.'
    },
    vocab: [
      {
        kana: 'ほしい',
        kanji: '欲しい',
        romaji: 'hoshii',
        meaning: { en: 'to want (a thing)', vi: 'muốn có' }
      },
      {
        kana: 'こども',
        kanji: '子供',
        romaji: 'kodomo',
        meaning: { en: 'child', vi: 'trẻ con' }
      },
      { kana: 'おもちゃ', romaji: 'omocha', meaning: { en: 'toy', vi: 'đồ chơi' } },
      { kana: 'ペット', romaji: 'petto', meaning: { en: 'pet', vi: 'thú cưng' } },
      {
        kana: 'かう',
        kanji: '買う',
        romaji: 'kau',
        meaning: { en: 'to buy', vi: 'mua' }
      },
      {
        kana: 'あそぶ',
        kanji: '遊ぶ',
        romaji: 'asobu',
        meaning: { en: 'to play', vi: 'chơi' }
      },
      {
        kana: 'いもうと',
        kanji: '妹',
        romaji: 'imōto',
        meaning: { en: 'younger sister', vi: 'em gái' }
      },
      {
        kana: 'おとうと',
        kanji: '弟',
        romaji: 'otōto',
        meaning: { en: 'younger brother', vi: 'em trai' }
      },
      {
        kana: 'りゅうがく',
        kanji: '留学',
        romaji: 'ryūgaku',
        meaning: { en: 'studying abroad', vi: 'du học' }
      },
      {
        kana: 'しょうらい',
        kanji: '将来',
        romaji: 'shōrai',
        meaning: { en: 'the future', vi: 'tương lai' }
      },
      {
        kana: 'プレゼント',
        romaji: 'purezento',
        meaning: { en: 'present, gift', vi: 'món quà' }
      },
      { kana: 'ずっと', romaji: 'zutto', meaning: { en: 'all the time, far', vi: 'mãi, suốt' } }
    ],
    grammar: [
      {
        pattern: 'V-stem + たがる',
        title: {
          en: 'Third person wants to do (〜たがる)',
          vi: 'Người khác muốn làm (〜たがる)'
        },
        explanation: {
          en: "For someone else's desire to do something, use the verb stem + たがる instead of たい. たい describes only the speaker.",
          vi: 'Để diễn tả mong muốn làm gì đó của người khác, dùng thân động từ + たがる thay cho たい. たい chỉ dùng cho người nói.'
        },
        examples: [
          {
            jp: 'おとうとは そとで あそびたがります。',
            romaji: 'Otōto wa soto de asobitagarimasu.',
            meaning: {
              en: 'My little brother wants to play outside.',
              vi: 'Em trai tôi muốn chơi bên ngoài.'
            }
          },
          {
            jp: 'いもうとは にほんへ いきたがります。',
            romaji: 'Imōto wa Nihon e ikitagarimasu.',
            meaning: {
              en: 'My little sister wants to go to Japan.',
              vi: 'Em gái tôi muốn đi Nhật.'
            }
          }
        ]
      },
      {
        pattern: 'N を ほしがる',
        title: {
          en: 'Third person wants a thing (〜ほしがる)',
          vi: 'Người khác muốn có vật (〜ほしがる)'
        },
        explanation: {
          en: 'For another person wanting an object, use を + ほしがる. ほしい (with が) is reserved for the speaker.',
          vi: 'Khi người khác muốn một vật, dùng を + ほしがる. ほしい (đi với が) dành cho người nói.'
        },
        examples: [
          {
            jp: 'こどもは あたらしい おもちゃを ほしがって います。',
            romaji: 'Kodomo wa atarashii omocha o hoshigatte imasu.',
            meaning: { en: 'The child wants a new toy.', vi: 'Đứa trẻ muốn có món đồ chơi mới.' }
          },
          {
            jp: 'いもうとは ペットを ほしがります。',
            romaji: 'Imōto wa petto o hoshigarimasu.',
            meaning: { en: 'My little sister wants a pet.', vi: 'Em gái tôi muốn nuôi thú cưng.' }
          }
        ]
      },
      {
        pattern: '〜たがって いる',
        title: {
          en: 'Currently showing desire (〜たがっている)',
          vi: 'Đang thể hiện mong muốn (〜たがっている)'
        },
        explanation: {
          en: 'Use 〜たがって いる (the ている form) for a desire someone is showing right now or these days. It sounds more natural than plain たがる.',
          vi: 'Dùng 〜たがって いる (dạng ている) cho mong muốn ai đó đang thể hiện lúc này hoặc dạo này. Nghe tự nhiên hơn たがる đơn thuần.'
        },
        examples: [
          {
            jp: 'おとうとは ペットを かいたがって います。',
            romaji: 'Otōto wa petto o kaitagatte imasu.',
            meaning: {
              en: 'My little brother is wanting to buy a pet.',
              vi: 'Em trai tôi đang muốn mua thú cưng.'
            }
          },
          {
            jp: 'こどもは ずっと あそびたがって います。',
            romaji: 'Kodomo wa zutto asobitagatte imasu.',
            meaning: { en: 'The child keeps wanting to play.', vi: 'Đứa trẻ cứ muốn chơi mãi.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: "My brother's dream", vi: 'Ước mơ của em trai tôi' },
        lines: [
          {
            jp: 'おとうとは しょうらい にほんで はたらきたがって います。',
            romaji: 'Otōto wa shōrai Nihon de hatarakitagatte imasu.',
            meaning: {
              en: 'My little brother wants to work in Japan in the future.',
              vi: 'Trong tương lai, em trai tôi muốn làm việc ở Nhật.'
            }
          },
          {
            jp: 'だから、いま にほんごを べんきょうしたがって います。',
            romaji: 'Dakara, ima nihongo o benkyō shitagatte imasu.',
            meaning: {
              en: 'So he wants to study Japanese now.',
              vi: 'Vì vậy bây giờ em ấy muốn học tiếng Nhật.'
            }
          },
          {
            jp: 'りゅうがくも したがって います。',
            romaji: 'Ryūgaku mo shitagatte imasu.',
            meaning: { en: 'He also wants to study abroad.', vi: 'Em ấy cũng muốn đi du học.' }
          },
          {
            jp: 'でも、いもうとは にほんへ いきたがりません。',
            romaji: 'Demo, imōto wa Nihon e ikitagarimasen.',
            meaning: {
              en: "But my little sister doesn't want to go to Japan.",
              vi: 'Nhưng em gái tôi không muốn đi Nhật.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the brother want to do in the future?',
              vi: 'Trong tương lai em trai muốn làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Work in Japan', vi: 'Làm việc ở Nhật' } },
              { id: 'b', label: { en: 'Buy a pet', vi: 'Mua thú cưng' } },
              { id: 'c', label: { en: 'Play outside', vi: 'Chơi bên ngoài' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How does the sister feel about going to Japan?',
              vi: 'Em gái cảm thấy thế nào về việc đi Nhật?'
            },
            choices: [
              { id: 'a', label: { en: "She doesn't want to go", vi: 'Không muốn đi' } },
              { id: 'b', label: { en: 'She really wants to go', vi: 'Rất muốn đi' } },
              { id: 'c', label: { en: 'She already went', vi: 'Đã đi rồi' } }
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
      en: 'Too Much, Easy & Hard to Do',
      vi: 'Quá mức, Dễ & Khó làm'
    },
    focus: {
      en: 'Say "too much" with 〜すぎる and "easy / hard to do" with 〜やすい / 〜にくい.',
      vi: 'Nói "quá mức" với 〜すぎる và "dễ / khó làm" với 〜やすい / 〜にくい.'
    },
    vocab: [
      {
        kana: 'たべすぎる',
        kanji: '食べ過ぎる',
        romaji: 'tabesugiru',
        meaning: { en: 'to eat too much', vi: 'ăn quá nhiều' }
      },
      {
        kana: 'のみすぎる',
        kanji: '飲み過ぎる',
        romaji: 'nomisugiru',
        meaning: { en: 'to drink too much', vi: 'uống quá nhiều' }
      },
      {
        kana: 'ねだん',
        kanji: '値段',
        romaji: 'nedan',
        meaning: { en: 'price', vi: 'giá cả' }
      },
      {
        kana: 'からい',
        kanji: '辛い',
        romaji: 'karai',
        meaning: { en: 'spicy', vi: 'cay' }
      },
      {
        kana: 'あまい',
        kanji: '甘い',
        romaji: 'amai',
        meaning: { en: 'sweet', vi: 'ngọt' }
      },
      {
        kana: 'やわらかい',
        kanji: '柔らかい',
        romaji: 'yawarakai',
        meaning: { en: 'soft', vi: 'mềm' }
      },
      {
        kana: 'かたい',
        kanji: '硬い',
        romaji: 'katai',
        meaning: { en: 'hard, tough', vi: 'cứng, dai' }
      },
      { kana: 'おなか', romaji: 'onaka', meaning: { en: 'stomach, belly', vi: 'bụng' } },
      {
        kana: 'ふとる',
        kanji: '太る',
        romaji: 'futoru',
        meaning: { en: 'to gain weight', vi: 'tăng cân' }
      },
      {
        kana: 'けんこう',
        kanji: '健康',
        romaji: 'kenkō',
        meaning: { en: 'health', vi: 'sức khỏe' }
      },
      {
        kana: 'じ',
        kanji: '字',
        romaji: 'ji',
        meaning: { en: 'character, handwriting', vi: 'chữ' }
      },
      { kana: 'やさい', kanji: '野菜', romaji: 'yasai', meaning: { en: 'vegetable', vi: 'rau' } }
    ],
    grammar: [
      {
        pattern: 'V-stem / adj-stem + すぎる',
        title: { en: 'Too much (〜すぎる)', vi: 'Quá mức (〜すぎる)' },
        explanation: {
          en: 'Attach すぎる to the verb stem or adjective stem to mean "too much / overly": 食べすぎる, 高すぎる, 静かすぎる.',
          vi: 'Gắn すぎる vào thân động từ hoặc thân tính từ để nói "quá mức": 食べすぎる, 高すぎる, 静かすぎる.'
        },
        examples: [
          {
            jp: 'きのう たべすぎて、おなかが いたいです。',
            romaji: 'Kinō tabesugite, onaka ga itai desu.',
            meaning: {
              en: 'I ate too much yesterday, so my stomach hurts.',
              vi: 'Hôm qua tôi ăn quá nhiều nên đau bụng.'
            }
          },
          {
            jp: 'この りょうりは からすぎます。',
            romaji: 'Kono ryōri wa karasugimasu.',
            meaning: { en: 'This dish is too spicy.', vi: 'Món này cay quá.' }
          }
        ]
      },
      {
        pattern: 'V-stem + やすい',
        title: { en: 'Easy to do (〜やすい)', vi: 'Dễ làm (〜やすい)' },
        explanation: {
          en: 'Verb stem + やすい means something is easy to do: わかりやすい (easy to understand), たべやすい (easy to eat). It conjugates like an い-adjective.',
          vi: 'Thân động từ + やすい nghĩa là điều gì đó dễ làm: わかりやすい (dễ hiểu), たべやすい (dễ ăn). Chia như tính từ -い.'
        },
        examples: [
          {
            jp: 'この ほんは よみやすいです。',
            romaji: 'Kono hon wa yomiyasui desu.',
            meaning: { en: 'This book is easy to read.', vi: 'Quyển sách này dễ đọc.' }
          },
          {
            jp: 'やわらかい パンは たべやすいです。',
            romaji: 'Yawarakai pan wa tabeyasui desu.',
            meaning: { en: 'Soft bread is easy to eat.', vi: 'Bánh mì mềm thì dễ ăn.' }
          }
        ]
      },
      {
        pattern: 'V-stem + にくい',
        title: { en: 'Hard to do (〜にくい)', vi: 'Khó làm (〜にくい)' },
        explanation: {
          en: 'Verb stem + にくい means something is hard to do: わかりにくい (hard to understand), たべにくい (hard to eat). It is the opposite of やすい.',
          vi: 'Thân động từ + にくい nghĩa là điều gì đó khó làm: わかりにくい (khó hiểu), たべにくい (khó ăn). Trái nghĩa với やすい.'
        },
        examples: [
          {
            jp: 'この じは ちいさくて、よみにくいです。',
            romaji: 'Kono ji wa chiisakute, yominikui desu.',
            meaning: {
              en: 'This handwriting is small and hard to read.',
              vi: 'Chữ này nhỏ nên khó đọc.'
            }
          },
          {
            jp: 'かたい にくは たべにくいです。',
            romaji: 'Katai niku wa tabenikui desu.',
            meaning: { en: 'Tough meat is hard to eat.', vi: 'Thịt dai thì khó ăn.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Eating habits', vi: 'Thói quen ăn uống' },
        lines: [
          {
            jp: 'ケンさんは よく あまい ものを たべすぎます。',
            romaji: 'Ken-san wa yoku amai mono o tabesugimasu.',
            meaning: {
              en: 'Ken often eats too many sweet things.',
              vi: 'Ken thường ăn quá nhiều đồ ngọt.'
            }
          },
          {
            jp: 'だから、すこし ふとりました。',
            romaji: 'Dakara, sukoshi futorimashita.',
            meaning: {
              en: 'So he gained a little weight.',
              vi: 'Vì vậy anh ấy tăng cân một chút.'
            }
          },
          {
            jp: 'やさいは けんこうに よくて、たべやすいです。',
            romaji: 'Yasai wa kenkō ni yokute, tabeyasui desu.',
            meaning: {
              en: 'Vegetables are good for health and easy to eat.',
              vi: 'Rau tốt cho sức khỏe và dễ ăn.'
            }
          },
          {
            jp: 'でも、からい りょうりは ケンさんに たべにくいです。',
            romaji: 'Demo, karai ryōri wa Ken-san ni tabenikui desu.',
            meaning: {
              en: 'But spicy food is hard for Ken to eat.',
              vi: 'Nhưng món cay thì Ken khó ăn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Why did Ken gain weight?', vi: 'Tại sao Ken tăng cân?' },
            choices: [
              { id: 'a', label: { en: 'He ate too many sweets', vi: 'Ăn quá nhiều đồ ngọt' } },
              { id: 'b', label: { en: 'He ate too many vegetables', vi: 'Ăn quá nhiều rau' } },
              { id: 'c', label: { en: 'He drank too much water', vi: 'Uống quá nhiều nước' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What is hard for Ken to eat?', vi: 'Ken khó ăn món gì?' },
            choices: [
              { id: 'a', label: { en: 'Spicy food', vi: 'Món cay' } },
              { id: 'b', label: { en: 'Sweet food', vi: 'Món ngọt' } },
              { id: 'c', label: { en: 'Vegetables', vi: 'Rau' } }
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
      en: 'Listing & Doing Two Things at Once',
      vi: 'Liệt kê & Làm hai việc cùng lúc'
    },
    focus: {
      en: 'List reasons and qualities with 〜し、〜し and combine two simultaneous actions with 〜ながら.',
      vi: 'Liệt kê lý do và tính chất với 〜し、〜し và kết hợp hai hành động đồng thời với 〜ながら.'
    },
    vocab: [
      {
        kana: 'やさしい',
        kanji: '優しい',
        romaji: 'yasashii',
        meaning: { en: 'kind, gentle', vi: 'hiền, dịu dàng' }
      },
      {
        kana: 'あたま',
        kanji: '頭',
        romaji: 'atama',
        meaning: { en: 'head', vi: 'đầu' }
      },
      {
        kana: 'ひろい',
        kanji: '広い',
        romaji: 'hiroi',
        meaning: { en: 'spacious, wide', vi: 'rộng' }
      },
      {
        kana: 'せまい',
        kanji: '狭い',
        romaji: 'semai',
        meaning: { en: 'narrow, cramped', vi: 'chật, hẹp' }
      },
      {
        kana: 'ちかい',
        kanji: '近い',
        romaji: 'chikai',
        meaning: { en: 'near, close', vi: 'gần' }
      },
      {
        kana: 'きゅうりょう',
        kanji: '給料',
        romaji: 'kyūryō',
        meaning: { en: 'salary, pay', vi: 'lương' }
      },
      {
        kana: 'うたう',
        kanji: '歌う',
        romaji: 'utau',
        meaning: { en: 'to sing', vi: 'hát' }
      },
      {
        kana: 'あるく',
        kanji: '歩く',
        romaji: 'aruku',
        meaning: { en: 'to walk', vi: 'đi bộ' }
      },
      {
        kana: 'はたらく',
        kanji: '働く',
        romaji: 'hataraku',
        meaning: { en: 'to work', vi: 'làm việc' }
      },
      { kana: 'テレビ', romaji: 'terebi', meaning: { en: 'television', vi: 'ti vi' } },
      { kana: 'コーヒー', romaji: 'kōhī', meaning: { en: 'coffee', vi: 'cà phê' } },
      {
        kana: 'しゃちょう',
        kanji: '社長',
        romaji: 'shachō',
        meaning: { en: 'company president, boss', vi: 'giám đốc' }
      }
    ],
    grammar: [
      {
        pattern: '〜し、〜し (qualities)',
        title: { en: 'Listing qualities (〜し、〜し)', vi: 'Liệt kê tính chất (〜し、〜し)' },
        explanation: {
          en: 'し connects clauses to list several facts or qualities ("and what\'s more"). Use the plain form before し.',
          vi: 'し nối các mệnh đề để liệt kê nhiều sự việc hay tính chất ("vả lại, hơn nữa"). Dùng thể thường trước し.'
        },
        examples: [
          {
            jp: 'この みせは やすいし、ちかいし、べんりです。',
            romaji: 'Kono mise wa yasui shi, chikai shi, benri desu.',
            meaning: {
              en: 'This shop is cheap, close, and convenient.',
              vi: 'Cửa hàng này rẻ, lại gần nên tiện.'
            }
          },
          {
            jp: 'かのじょは やさしいし、あたまも いいです。',
            romaji: 'Kanojo wa yasashii shi, atama mo ii desu.',
            meaning: { en: 'She is kind, and smart too.', vi: 'Cô ấy hiền, lại còn thông minh.' }
          }
        ]
      },
      {
        pattern: '〜し (reasons)',
        title: { en: 'Listing reasons (〜し)', vi: 'Nêu nhiều lý do (〜し)' },
        explanation: {
          en: 'し can also give one or more reasons for a conclusion, often softer than から: "since A, and since B…".',
          vi: 'し còn dùng để nêu một hay nhiều lý do cho kết luận, nhẹ hơn から: "vì A, vả lại vì B…".'
        },
        examples: [
          {
            jp: 'きょうは あめだし、つかれたし、いえに います。',
            romaji: 'Kyō wa ame da shi, tsukareta shi, ie ni imasu.',
            meaning: {
              en: "It's rainy and I'm tired, so I'll stay home.",
              vi: 'Hôm nay trời mưa, lại mệt nên tôi ở nhà.'
            }
          },
          {
            jp: 'この しごとは きゅうりょうも いいし、やります。',
            romaji: 'Kono shigoto wa kyūryō mo ii shi, yarimasu.',
            meaning: {
              en: 'This job has good pay and all, so I will do it.',
              vi: 'Công việc này lương cũng tốt nên tôi sẽ làm.'
            }
          }
        ]
      },
      {
        pattern: 'V-stem + ながら',
        title: {
          en: 'Doing two things at once (〜ながら)',
          vi: 'Làm hai việc cùng lúc (〜ながら)'
        },
        explanation: {
          en: 'Verb stem + ながら links two actions by the same person at the same time; the main action comes after ながら.',
          vi: 'Thân động từ + ながら nối hai hành động của cùng một người diễn ra đồng thời; hành động chính đứng sau ながら.'
        },
        examples: [
          {
            jp: 'コーヒーを のみながら、テレビを みます。',
            romaji: 'Kōhī o nominagara, terebi o mimasu.',
            meaning: {
              en: 'I watch TV while drinking coffee.',
              vi: 'Tôi vừa uống cà phê vừa xem ti vi.'
            }
          },
          {
            jp: 'うたを うたいながら、あるきます。',
            romaji: 'Uta o utainagara, arukimasu.',
            meaning: { en: 'I walk while singing a song.', vi: 'Tôi vừa hát vừa đi bộ.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A good workplace', vi: 'Một nơi làm việc tốt' },
        lines: [
          {
            jp: 'わたしの かいしゃは えきから ちかいし、ひろいです。',
            romaji: 'Watashi no kaisha wa eki kara chikai shi, hiroi desu.',
            meaning: {
              en: 'My company is close to the station and spacious.',
              vi: 'Công ty tôi gần ga, lại rộng rãi.'
            }
          },
          {
            jp: 'しゃちょうは やさしいし、きゅうりょうも いいです。',
            romaji: 'Shachō wa yasashii shi, kyūryō mo ii desu.',
            meaning: {
              en: 'The boss is kind, and the salary is good too.',
              vi: 'Giám đốc hiền, lương cũng tốt.'
            }
          },
          {
            jp: 'わたしは よく おんがくを ききながら、はたらきます。',
            romaji: 'Watashi wa yoku ongaku o kikinagara, hatarakimasu.',
            meaning: {
              en: 'I often work while listening to music.',
              vi: 'Tôi thường vừa nghe nhạc vừa làm việc.'
            }
          },
          {
            jp: 'しごとが すきだし、まいにち たのしいです。',
            romaji: 'Shigoto ga suki da shi, mainichi tanoshii desu.',
            meaning: {
              en: 'I like my job, so every day is fun.',
              vi: 'Tôi thích công việc nên ngày nào cũng vui.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What is said about the company?', vi: 'Công ty được nói thế nào?' },
            choices: [
              {
                id: 'a',
                label: { en: 'Close to the station and spacious', vi: 'Gần ga và rộng rãi' }
              },
              { id: 'b', label: { en: 'Far and small', vi: 'Xa và nhỏ' } },
              { id: 'c', label: { en: 'Old and dark', vi: 'Cũ và tối' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer do while working?',
              vi: 'Người viết làm gì trong khi làm việc?'
            },
            choices: [
              { id: 'a', label: { en: 'Listens to music', vi: 'Nghe nhạc' } },
              { id: 'b', label: { en: 'Watches TV', vi: 'Xem ti vi' } },
              { id: 'c', label: { en: 'Drinks coffee', vi: 'Uống cà phê' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
