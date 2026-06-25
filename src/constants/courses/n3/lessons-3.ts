import type { Lesson } from '@/constants/courses/types.ts';

export const n3LessonsC: Lesson[] = [
  {
    id: 'lesson-17',
    number: 17,
    title: {
      en: 'Describing tendencies with っぽい',
      vi: 'Miêu tả xu hướng với っぽい'
    },
    focus: {
      en: 'Say something is "-ish" or tends to be a certain way with 〜っぽい.',
      vi: 'Nói cái gì đó "có vẻ", "hay" hoặc thiên về một tính chất với 〜っぽい.'
    },
    vocab: [
      {
        kana: 'せいかく',
        kanji: '性格',
        romaji: 'seikaku',
        meaning: { en: 'personality', vi: 'tính cách' }
      },
      {
        kana: 'こどもっぽい',
        kanji: '子供っぽい',
        romaji: 'kodomoppoi',
        meaning: { en: 'childish', vi: 'trẻ con, con nít' }
      },
      {
        kana: 'おとなっぽい',
        kanji: '大人っぽい',
        romaji: 'otonappoi',
        meaning: { en: 'grown-up, mature', vi: 'ra dáng người lớn' }
      },
      {
        kana: 'わすれっぽい',
        kanji: '忘れっぽい',
        romaji: 'wasureppoi',
        meaning: { en: 'forgetful', vi: 'hay quên' }
      },
      {
        kana: 'おこりっぽい',
        kanji: '怒りっぽい',
        romaji: 'okorippoi',
        meaning: { en: 'short-tempered', vi: 'hay cáu' }
      },
      {
        kana: 'あきっぽい',
        kanji: '飽きっぽい',
        romaji: 'akippoi',
        meaning: { en: 'easily bored, fickle', vi: 'mau chán' }
      },
      {
        kana: 'あぶらっぽい',
        kanji: '油っぽい',
        romaji: 'aburappoi',
        meaning: { en: 'greasy, oily', vi: 'nhiều dầu mỡ' }
      },
      {
        kana: 'しろっぽい',
        kanji: '白っぽい',
        romaji: 'shiroppoi',
        meaning: { en: 'whitish', vi: 'trăng trắng' }
      },
      {
        kana: 'やすっぽい',
        kanji: '安っぽい',
        romaji: 'yasuppoi',
        meaning: { en: 'cheap-looking', vi: 'trông rẻ tiền' }
      },
      {
        kana: 'みずっぽい',
        kanji: '水っぽい',
        romaji: 'mizuppoi',
        meaning: { en: 'watery', vi: 'loãng, nhiều nước' }
      },
      {
        kana: 'りゆう',
        kanji: '理由',
        romaji: 'riyū',
        meaning: { en: 'reason', vi: 'lý do' }
      }
    ],
    grammar: [
      {
        pattern: 'N / な-adj ＋ っぽい',
        title: { en: 'Seems like / -ish', vi: 'Có vẻ / mang tính' },
        explanation: {
          en: 'Attach っぽい to a noun to mean "like that / -ish", describing a quality something gives off.',
          vi: 'Gắn っぽい sau danh từ để diễn đạt "giống như / mang tính", tả ấn tượng mà sự vật toát ra.'
        },
        examples: [
          {
            jp: '彼はもう三十歳なのに、まだ子供っぽい。',
            romaji: 'Kare wa mō sanjus-sai na noni, mada kodomoppoi.',
            meaning: {
              en: 'He is already thirty, yet he is still childish.',
              vi: 'Anh ấy đã ba mươi tuổi rồi mà vẫn còn trẻ con.'
            }
          },
          {
            jp: 'このスープは少し水っぽいです。',
            romaji: 'Kono sūpu wa sukoshi mizuppoi desu.',
            meaning: { en: 'This soup is a little watery.', vi: 'Món súp này hơi loãng.' }
          }
        ]
      },
      {
        pattern: 'Vます-stem ＋ っぽい',
        title: { en: 'Tends to do', vi: 'Hay, dễ làm gì' },
        explanation: {
          en: 'Attach っぽい to a verb stem to say someone tends to do something (often a flaw).',
          vi: 'Gắn っぽい sau thể ます (bỏ ます) để nói ai đó hay làm gì (thường là nhược điểm).'
        },
        examples: [
          {
            jp: '年を取って、忘れっぽくなりました。',
            romaji: 'Toshi o totte, wasureppoku narimashita.',
            meaning: {
              en: 'As I have gotten older, I have become forgetful.',
              vi: 'Có tuổi rồi nên tôi đâm ra hay quên.'
            }
          },
          {
            jp: '弟は飽きっぽくて、何も続かない。',
            romaji: 'Otōto wa akippokute, nani mo tsuzukanai.',
            meaning: {
              en: 'My brother is fickle and never sticks with anything.',
              vi: 'Em trai tôi mau chán nên chẳng theo được việc gì.'
            }
          }
        ]
      },
      {
        pattern: 'color / texture ＋ っぽい',
        title: { en: 'Color & texture -ish', vi: 'っぽい cho màu sắc, chất cảm' },
        explanation: {
          en: 'With colors or textures, っぽい means "-ish": 白っぽい (whitish), 油っぽい (greasy), 安っぽい (cheap-looking).',
          vi: 'Với màu/chất cảm, っぽい nghĩa "hơi ...": 白っぽい (trăng trắng), 油っぽい (nhiều mỡ), 安っぽい (rẻ tiền).'
        },
        examples: [
          {
            jp: 'この料理は油っぽくて、あまり食べられない。',
            romaji: 'Kono ryōri wa aburappokute, amari taberarenai.',
            meaning: {
              en: 'This dish is greasy, so I cannot eat much of it.',
              vi: 'Món này nhiều dầu mỡ nên tôi không ăn được nhiều.'
            }
          },
          {
            jp: 'その安っぽいかばんは買わないほうがいい。',
            romaji: 'Sono yasuppoi kaban wa kawanai hō ga ii.',
            meaning: {
              en: 'You had better not buy that cheap-looking bag.',
              vi: 'Tốt nhất đừng mua cái túi trông rẻ tiền đó.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'My forgetful coworker', vi: 'Đồng nghiệp hay quên của tôi' },
        lines: [
          {
            jp: '同じ課の田中さんは、とても忘れっぽい人です。',
            romaji: 'Onaji ka no Tanaka-san wa, totemo wasureppoi hito desu.',
            meaning: {
              en: 'Mr. Tanaka in my section is a very forgetful person.',
              vi: 'Anh Tanaka cùng phòng tôi là người rất hay quên.'
            }
          },
          {
            jp: '会議の時間も書類もよく忘れます。',
            romaji: 'Kaigi no jikan mo shorui mo yoku wasuremasu.',
            meaning: {
              en: 'He often forgets both meeting times and documents.',
              vi: 'Anh ấy hay quên cả giờ họp lẫn tài liệu.'
            }
          },
          {
            jp: 'それに少し怒りっぽくて、注意するとすぐ機嫌が悪くなります。',
            romaji: 'Sore ni sukoshi okorippokute, chūi suru to sugu kigen ga waruku narimasu.',
            meaning: {
              en: 'On top of that he is a bit short-tempered, and gets in a bad mood as soon as you warn him.',
              vi: 'Hơn nữa anh ấy hơi hay cáu, nhắc nhở một cái là lập tức khó chịu.'
            }
          },
          {
            jp: 'でも仕事は丁寧なので、みんなに信頼されています。',
            romaji: 'Demo shigoto wa teinei na node, minna ni shinrai sarete imasu.',
            meaning: {
              en: 'But his work is careful, so everyone trusts him.',
              vi: 'Nhưng anh ấy làm việc cẩn thận nên được mọi người tin tưởng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does Mr. Tanaka often forget?',
              vi: 'Anh Tanaka hay quên những gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Meeting times and documents', vi: 'Giờ họp và tài liệu' }
              },
              { id: 'b', label: { en: "Coworkers' names", vi: 'Tên đồng nghiệp' } },
              { id: 'c', label: { en: 'His way home', vi: 'Đường về nhà' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why do people still trust him?',
              vi: 'Vì sao mọi người vẫn tin tưởng anh ấy?'
            },
            choices: [
              { id: 'a', label: { en: 'He is never angry', vi: 'Anh ấy không bao giờ cáu' } },
              { id: 'b', label: { en: 'His work is careful', vi: 'Anh ấy làm việc cẩn thận' } },
              { id: 'c', label: { en: 'He never forgets', vi: 'Anh ấy không bao giờ quên' } }
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
      en: 'A touch of (気味) & covered in (だらけ)',
      vi: 'Hơi ... (気味) & đầy ... (だらけ)'
    },
    focus: {
      en: 'Say something is slightly so with 〜気味, and that something is full of / covered in something with 〜だらけ.',
      vi: 'Nói có hơi hướng gì đó với 〜気味, và phủ đầy/lấm lem cái gì với 〜だらけ.'
    },
    vocab: [
      { kana: 'かぜ', kanji: '風邪', romaji: 'kaze', meaning: { en: 'a cold', vi: 'cảm lạnh' } },
      {
        kana: 'つかれ',
        kanji: '疲れ',
        romaji: 'tsukare',
        meaning: { en: 'tiredness', vi: 'sự mệt mỏi' }
      },
      {
        kana: 'ふとりぎみ',
        kanji: '太り気味',
        romaji: 'futori-gimi',
        meaning: { en: 'tending to gain weight', vi: 'hơi mập lên' }
      },
      {
        kana: 'おくれぎみ',
        kanji: '遅れ気味',
        romaji: 'okure-gimi',
        meaning: { en: 'tending to be behind/late', vi: 'có vẻ chậm trễ' }
      },
      {
        kana: 'まちがい',
        kanji: '間違い',
        romaji: 'machigai',
        meaning: { en: 'mistake', vi: 'lỗi sai' }
      },
      { kana: 'どろ', kanji: '泥', romaji: 'doro', meaning: { en: 'mud', vi: 'bùn' } },
      {
        kana: 'ほこり',
        romaji: 'hokori',
        meaning: { en: 'dust', vi: 'bụi' }
      },
      {
        kana: 'しゃっきん',
        kanji: '借金',
        romaji: 'shakkin',
        meaning: { en: 'debt', vi: 'nợ nần' }
      },
      {
        kana: 'きず',
        kanji: '傷',
        romaji: 'kizu',
        meaning: { en: 'wound, scratch', vi: 'vết thương, vết xước' }
      },
      {
        kana: 'けっせき',
        kanji: '欠席',
        romaji: 'kesseki',
        meaning: { en: 'absence', vi: 'sự vắng mặt' }
      },
      {
        kana: 'やすむ',
        kanji: '休む',
        romaji: 'yasumu',
        meaning: { en: 'to rest, take time off', vi: 'nghỉ' }
      }
    ],
    grammar: [
      {
        pattern: 'N / Vます-stem ＋ 気味',
        title: { en: 'A touch of / slightly', vi: 'Hơi, có hơi hướng' },
        explanation: {
          en: '〜気味 means "showing signs of / slightly", usually for a mild, undesirable tendency.',
          vi: '〜気味 nghĩa "hơi, có dấu hiệu", thường cho một xu hướng nhẹ và không mong muốn.'
        },
        examples: [
          {
            jp: '今日はちょっと風邪気味なので、早く帰ります。',
            romaji: 'Kyō wa chotto kaze-gimi na node, hayaku kaerimasu.',
            meaning: {
              en: 'I feel like I am coming down with a cold today, so I will go home early.',
              vi: 'Hôm nay tôi hơi cảm nên về sớm.'
            }
          },
          {
            jp: '最近、仕事が遅れ気味で困っている。',
            romaji: 'Saikin, shigoto ga okure-gimi de komatte iru.',
            meaning: {
              en: 'Lately my work has been falling behind and it is troubling me.',
              vi: 'Gần đây công việc có vẻ bị chậm khiến tôi đau đầu.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ だらけ',
        title: { en: 'Covered in / full of', vi: 'Đầy, lấm lem' },
        explanation: {
          en: '〜だらけ means "full of / covered with", almost always something negative (mud, mistakes, debt).',
          vi: '〜だらけ nghĩa "đầy, phủ kín", hầu như luôn mang nghĩa tiêu cực (bùn, lỗi, nợ).'
        },
        examples: [
          {
            jp: '子供たちは泥だらけになって遊んでいた。',
            romaji: 'Kodomo-tachi wa doro-darake ni natte asonde ita.',
            meaning: {
              en: 'The children were playing, covered in mud.',
              vi: 'Bọn trẻ chơi đến lấm lem bùn đất.'
            }
          },
          {
            jp: 'このレポートは間違いだらけだ。',
            romaji: 'Kono repōto wa machigai-darake da.',
            meaning: { en: 'This report is full of mistakes.', vi: 'Bản báo cáo này đầy lỗi.' }
          }
        ]
      },
      {
        pattern: '気味 vs だらけ',
        title: { en: 'Slight tendency vs covered all over', vi: 'Hơi ... so với đầy ...' },
        explanation: {
          en: 'Use 気味 for a slight degree/tendency; use だらけ when something is densely covered or full of many of a thing.',
          vi: 'Dùng 気味 cho mức độ/xu hướng nhẹ; dùng だらけ khi cái gì đó phủ kín hoặc đầy rất nhiều thứ.'
        },
        examples: [
          {
            jp: '疲れ気味だったので、休んだら傷だらけの手に気づいた。',
            romaji: 'Tsukare-gimi datta node, yasundara kizu-darake no te ni kizuita.',
            meaning: {
              en: 'I was a bit tired, and when I rested I noticed my hands were covered in scratches.',
              vi: 'Tôi hơi mệt, lúc nghỉ mới nhận ra hai tay đầy vết xước.'
            }
          },
          {
            jp: '彼は借金だらけで、いつも疲れ気味の顔をしている。',
            romaji: 'Kare wa shakkin-darake de, itsumo tsukare-gimi no kao o shite iru.',
            meaning: {
              en: 'He is up to his neck in debt and always looks a little worn out.',
              vi: 'Anh ta nợ nần đầm đìa, lúc nào mặt cũng có vẻ mệt mỏi.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A tiring week', vi: 'Một tuần mệt mỏi' },
        lines: [
          {
            jp: '先週は仕事が忙しくて、ずっと疲れ気味でした。',
            romaji: 'Senshū wa shigoto ga isogashikute, zutto tsukare-gimi deshita.',
            meaning: {
              en: 'Last week I was busy with work and felt a bit worn out the whole time.',
              vi: 'Tuần trước công việc bận nên tôi cứ mệt mỏi suốt.'
            }
          },
          {
            jp: '家に帰る時間もなく、部屋はほこりだらけになってしまいました。',
            romaji: 'Ie ni kaeru jikan mo naku, heya wa hokori-darake ni natte shimaimashita.',
            meaning: {
              en: 'I had no time even to go home properly, and my room ended up covered in dust.',
              vi: 'Không có cả thời gian về nhà, căn phòng đầy bụi.'
            }
          },
          {
            jp: '週末はやっと休んで、部屋をきれいに掃除しました。',
            romaji: 'Shūmatsu wa yatto yasunde, heya o kirei ni sōji shimashita.',
            meaning: {
              en: 'On the weekend I finally rested and cleaned my room.',
              vi: 'Cuối tuần tôi mới được nghỉ và dọn phòng sạch sẽ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the writer feel last week?',
              vi: 'Tuần trước người viết cảm thấy thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'A bit worn out', vi: 'Hơi mệt mỏi' } },
              { id: 'b', label: { en: 'Very happy', vi: 'Rất vui' } },
              { id: 'c', label: { en: 'Completely fine', vi: 'Hoàn toàn khỏe khoắn' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What state was the room in?',
              vi: 'Căn phòng ở trong tình trạng nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Covered in dust', vi: 'Đầy bụi' } },
              { id: 'b', label: { en: 'Newly painted', vi: 'Vừa sơn mới' } },
              { id: 'c', label: { en: 'Always spotless', vi: 'Luôn sạch bong' } }
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
    title: {
      en: 'Reproach with くせに',
      vi: 'Trách móc với くせに'
    },
    focus: {
      en: 'Criticize a contradiction ("even though..., yet...") with 〜くせに.',
      vi: 'Phê phán sự mâu thuẫn ("rõ ràng ..., thế mà ...") với 〜くせに.'
    },
    vocab: [
      {
        kana: 'えらそう',
        kanji: '偉そう',
        romaji: 'erasō',
        meaning: { en: 'arrogant, bossy', vi: 'ra vẻ ta đây' }
      },
      {
        kana: 'もんく',
        kanji: '文句',
        romaji: 'monku',
        meaning: { en: 'complaint', vi: 'lời phàn nàn' }
      },
      {
        kana: 'いいわけ',
        kanji: '言い訳',
        romaji: 'iiwake',
        meaning: { en: 'excuse', vi: 'lời bào chữa' }
      },
      {
        kana: 'しんじん',
        kanji: '新人',
        romaji: 'shinjin',
        meaning: { en: 'newcomer, rookie', vi: 'người mới' }
      },
      {
        kana: 'つよがる',
        kanji: '強がる',
        romaji: 'tsuyogaru',
        meaning: { en: 'to act tough', vi: 'tỏ ra mạnh mẽ' }
      },
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'sự nỗ lực' }
      },
      {
        kana: 'かねもち',
        kanji: '金持ち',
        romaji: 'kanemochi',
        meaning: { en: 'rich person', vi: 'người giàu' }
      },
      {
        kana: 'くわしい',
        kanji: '詳しい',
        romaji: 'kuwashii',
        meaning: { en: 'knowledgeable, detailed', vi: 'rành rẽ, chi tiết' }
      },
      {
        kana: 'てつだう',
        kanji: '手伝う',
        romaji: 'tetsudau',
        meaning: { en: 'to help', vi: 'giúp đỡ' }
      },
      {
        kana: 'なまける',
        kanji: '怠ける',
        romaji: 'namakeru',
        meaning: { en: 'to be lazy, slack off', vi: 'lười biếng' }
      }
    ],
    grammar: [
      {
        pattern: 'plain form ＋ くせに',
        title: { en: 'Even though... (blame)', vi: 'Rõ ràng ... thế mà (trách)' },
        explanation: {
          en: '〜くせに means "even though / despite", adding criticism or contempt. The subject is usually one person.',
          vi: '〜くせに nghĩa "rõ ràng/dù", kèm thái độ trách móc hoặc coi thường. Chủ ngữ thường là một người.'
        },
        examples: [
          {
            jp: '何も知らないくせに、偉そうに言わないでください。',
            romaji: 'Nani mo shiranai kuse ni, erasō ni iwanaide kudasai.',
            meaning: {
              en: "Don't talk so big when you don't even know anything.",
              vi: 'Chẳng biết gì cả thì đừng nói như ta đây.'
            }
          },
          {
            jp: '彼は新人のくせに、文句ばかり言っている。',
            romaji: 'Kare wa shinjin no kuse ni, monku bakari itte iru.',
            meaning: {
              en: 'Even though he is a newcomer, all he does is complain.',
              vi: 'Rõ là lính mới mà anh ta toàn phàn nàn.'
            }
          }
        ]
      },
      {
        pattern: '〜くせに vs 〜のに',
        title: { en: 'くせに vs のに', vi: 'くせに so với のに' },
        explanation: {
          en: 'Both mean "although", but くせに always carries blame/contempt and needs a personal subject; のに is neutral.',
          vi: 'Cả hai nghĩa "mặc dù", nhưng くせに luôn kèm chê trách và cần chủ ngữ là người; のに thì trung tính.'
        },
        examples: [
          {
            jp: 'できないくせに、人の手伝いを断る。',
            romaji: 'Dekinai kuse ni, hito no tetsudai o kotowaru.',
            meaning: {
              en: 'He refuses help even though he cannot do it himself.',
              vi: 'Tự làm không được mà lại từ chối người ta giúp.'
            }
          },
          {
            jp: '雨が降っているのに、彼は傘を持って行かなかった。',
            romaji: 'Ame ga futte iru noni, kare wa kasa o motte ikanakatta.',
            meaning: {
              en: 'Although it was raining, he did not take an umbrella. (neutral)',
              vi: 'Dù trời mưa nhưng anh ấy không mang ô đi. (trung tính)'
            }
          }
        ]
      },
      {
        pattern: 'sentence ＋ くせに (final)',
        title: { en: 'Sentence-final くせに', vi: 'くせに đứng cuối câu' },
        explanation: {
          en: 'くせに can end a sentence to throw the criticism back, leaving the rest unsaid.',
          vi: 'くせに có thể đứng cuối câu để bắt bẻ lại, phần sau bỏ ngỏ ngầm hiểu.'
        },
        examples: [
          {
            jp: '本当は寂しいくせに。',
            romaji: 'Hontō wa sabishii kuse ni.',
            meaning: {
              en: 'And yet, deep down, you are lonely (so stop pretending).',
              vi: 'Thật ra thì cô đơn lắm mà (còn làm bộ).'
            }
          },
          {
            jp: '自分だってできないくせに。',
            romaji: 'Jibun datte dekinai kuse ni.',
            meaning: {
              en: "And you can't even do it yourself.",
              vi: 'Chính bản thân cũng có làm được đâu.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The bossy senior', vi: 'Đàn anh hay ra vẻ' },
        lines: [
          {
            jp: '先輩のAさんは、いつも偉そうに指示を出します。',
            romaji: 'Senpai no A-san wa, itsumo erasō ni shiji o dashimasu.',
            meaning: {
              en: 'My senior, Mr. A, always gives orders in a bossy way.',
              vi: 'Anh A đàn anh lúc nào cũng ra lệnh với vẻ ta đây.'
            }
          },
          {
            jp: 'でも、自分は仕事をよく知らないくせに、人にばかりやらせます。',
            romaji: 'Demo, jibun wa shigoto o yoku shiranai kuse ni, hito ni bakari yarasemasu.',
            meaning: {
              en: 'But even though he does not really know the work himself, he makes others do everything.',
              vi: 'Nhưng chính anh ta không rành việc, vậy mà toàn bắt người khác làm.'
            }
          },
          {
            jp: '失敗すると、言い訳ばかりで、決して謝りません。',
            romaji: 'Shippai suru to, iiwake bakari de, kesshite ayamarimasen.',
            meaning: {
              en: 'When something goes wrong, he just makes excuses and never apologizes.',
              vi: 'Khi thất bại thì chỉ bào chữa, không bao giờ xin lỗi.'
            }
          },
          {
            jp: 'みんな、彼には少しうんざりしています。',
            romaji: 'Minna, kare ni wa sukoshi unzari shite imasu.',
            meaning: {
              en: 'Everyone is a little fed up with him.',
              vi: 'Mọi người hơi ngán anh ta.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is the problem with Mr. A?',
              vi: 'Vấn đề ở anh A là gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: "He acts bossy but doesn't know the work well",
                  vi: 'Ra vẻ chỉ huy nhưng không rành việc'
                }
              },
              { id: 'b', label: { en: 'He works too hard', vi: 'Anh ta làm việc quá sức' } },
              { id: 'c', label: { en: 'He is too quiet', vi: 'Anh ta quá trầm lặng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does he do when something goes wrong?',
              vi: 'Khi có sai sót anh ta làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Apologizes at once', vi: 'Xin lỗi ngay' } },
              { id: 'b', label: { en: 'Makes excuses', vi: 'Bào chữa' } },
              { id: 'c', label: { en: 'Fixes it himself', vi: 'Tự sửa lấy' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-20',
    number: 20,
    title: {
      en: 'Contrary to expectation: どころか',
      vi: 'Trái với mong đợi: どころか'
    },
    focus: {
      en: 'Say "far from X, actually the opposite" with 〜どころか.',
      vi: 'Nói "đừng nói là X, ngược lại còn ..." với 〜どころか.'
    },
    vocab: [
      {
        kana: 'ちょきん',
        kanji: '貯金',
        romaji: 'chokin',
        meaning: { en: 'savings', vi: 'tiền tiết kiệm' }
      },
      {
        kana: 'ふえる',
        kanji: '増える',
        romaji: 'fueru',
        meaning: { en: 'to increase', vi: 'tăng lên' }
      },
      {
        kana: 'へる',
        kanji: '減る',
        romaji: 'heru',
        meaning: { en: 'to decrease', vi: 'giảm đi' }
      },
      {
        kana: 'かんしゃ',
        kanji: '感謝',
        romaji: 'kansha',
        meaning: { en: 'gratitude', vi: 'sự biết ơn' }
      },
      {
        kana: 'やくにたつ',
        kanji: '役に立つ',
        romaji: 'yaku ni tatsu',
        meaning: { en: 'to be useful', vi: 'có ích' }
      },
      {
        kana: 'じゃま',
        kanji: '邪魔',
        romaji: 'jama',
        meaning: { en: 'hindrance, nuisance', vi: 'vướng víu, cản trở' }
      },
      {
        kana: 'かいふく',
        kanji: '回復',
        romaji: 'kaifuku',
        meaning: { en: 'recovery', vi: 'sự hồi phục' }
      },
      {
        kana: 'あっか',
        kanji: '悪化',
        romaji: 'akka',
        meaning: { en: 'worsening', vi: 'sự xấu đi' }
      },
      {
        kana: 'もうかる',
        kanji: '儲かる',
        romaji: 'mōkaru',
        meaning: { en: 'to be profitable', vi: 'sinh lời' }
      },
      {
        kana: 'そんをする',
        kanji: '損をする',
        romaji: 'son o suru',
        meaning: { en: 'to make a loss', vi: 'bị lỗ, thiệt' }
      },
      {
        kana: 'まったく',
        romaji: 'mattaku',
        meaning: { en: '(not) at all', vi: 'hoàn toàn (không)' }
      }
    ],
    grammar: [
      {
        pattern: 'N / plain form ＋ どころか',
        title: { en: 'Far from... , on the contrary', vi: 'Đừng nói ... , ngược lại' },
        explanation: {
          en: '〜どころか introduces something far beyond/opposite to expectation: "not only not X, but actually the reverse".',
          vi: '〜どころか nêu điều vượt xa hoặc ngược hẳn mong đợi: "đừng nói là X, ngược lại còn ...".'
        },
        examples: [
          {
            jp: '今年は貯金が増えるどころか、減ってしまった。',
            romaji: 'Kotoshi wa chokin ga fueru dokoroka, hette shimatta.',
            meaning: {
              en: 'Far from increasing, my savings actually decreased this year.',
              vi: 'Năm nay tiền tiết kiệm chẳng những không tăng mà còn giảm.'
            }
          },
          {
            jp: '彼は感謝するどころか、文句を言ってきた。',
            romaji: 'Kare wa kansha suru dokoroka, monku o itte kita.',
            meaning: {
              en: 'Far from thanking me, he came and complained.',
              vi: 'Đáng lẽ phải cảm ơn, anh ta lại còn đến phàn nàn.'
            }
          }
        ]
      },
      {
        pattern: 'N どころか N も〜ない',
        title: { en: 'Not even..., let alone...', vi: 'Đến cả ... cũng không, nói gì ...' },
        explanation: {
          en: 'With a negative, どころか means "let alone / not even": A どころか B (even B) is also impossible.',
          vi: 'Đi với phủ định, どころか nghĩa "nói chi đến, đến cả ... cũng không".'
        },
        examples: [
          {
            jp: '漢字どころか、ひらがなも読めない。',
            romaji: 'Kanji dokoroka, hiragana mo yomenai.',
            meaning: {
              en: 'Let alone kanji, I cannot even read hiragana.',
              vi: 'Đừng nói kanji, đến hiragana tôi cũng không đọc được.'
            }
          },
          {
            jp: '一万円どころか、百円も持っていない。',
            romaji: 'Ichiman-en dokoroka, hyaku-en mo motte inai.',
            meaning: {
              en: "Forget ten thousand yen, I don't even have a hundred.",
              vi: 'Đừng nói mười nghìn yên, đến trăm yên tôi cũng không có.'
            }
          }
        ]
      },
      {
        pattern: '役に立つどころか〜',
        title: { en: 'Useful? On the contrary...', vi: 'Có ích ư? Ngược lại ...' },
        explanation: {
          en: 'A common pattern contrasts a hoped-for good outcome with a worse reality.',
          vi: 'Mẫu thường gặp đối lập kết quả mong đợi tốt với thực tế tệ hơn.'
        },
        examples: [
          {
            jp: 'この道具は役に立つどころか、邪魔になっている。',
            romaji: 'Kono dōgu wa yaku ni tatsu dokoroka, jama ni natte iru.',
            meaning: {
              en: 'Far from being useful, this tool is actually getting in the way.',
              vi: 'Cái dụng cụ này chẳng những không có ích mà còn vướng víu.'
            }
          },
          {
            jp: '薬を飲んだが、回復するどころか悪化した。',
            romaji: 'Kusuri o nonda ga, kaifuku suru dokoroka akka shita.',
            meaning: {
              en: 'I took the medicine, but far from recovering, I got worse.',
              vi: 'Tôi đã uống thuốc nhưng chẳng những không đỡ mà còn nặng hơn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A failed investment', vi: 'Một vụ đầu tư thất bại' },
        lines: [
          {
            jp: '友達に勧められて、ある会社の株を買いました。',
            romaji: 'Tomodachi ni susumerarete, aru kaisha no kabu o kaimashita.',
            meaning: {
              en: 'On a friend\u2019s recommendation, I bought a certain company\u2019s stock.',
              vi: 'Theo lời bạn rủ, tôi đã mua cổ phiếu của một công ty.'
            }
          },
          {
            jp: '儲かると思っていたのに、儲かるどころか大きく損をしました。',
            romaji: 'Mōkaru to omotte ita noni, mōkaru dokoroka ōkiku son o shimashita.',
            meaning: {
              en: 'I thought I would profit, but far from profiting, I made a big loss.',
              vi: 'Tôi tưởng sẽ lời, nào ngờ chẳng những không lời mà còn lỗ nặng.'
            }
          },
          {
            jp: 'お金が増えるどころか、貯金も減ってしまいました。',
            romaji: 'Okane ga fueru dokoroka, chokin mo hette shimaimashita.',
            meaning: {
              en: 'Far from my money growing, even my savings shrank.',
              vi: 'Tiền chẳng những không tăng mà tiền tiết kiệm cũng vơi đi.'
            }
          },
          {
            jp: 'もう二度と株は買わないと決めました。',
            romaji: 'Mō nido to kabu wa kawanai to kimemashita.',
            meaning: {
              en: 'I decided I will never buy stocks again.',
              vi: 'Tôi quyết định không bao giờ mua cổ phiếu nữa.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What was the result of buying the stock?',
              vi: 'Kết quả mua cổ phiếu ra sao?'
            },
            choices: [
              { id: 'a', label: { en: 'A big profit', vi: 'Lời lớn' } },
              { id: 'b', label: { en: 'A big loss', vi: 'Lỗ nặng' } },
              { id: 'c', label: { en: 'No change', vi: 'Không thay đổi' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: { en: 'What did the writer decide?', vi: 'Người viết quyết định điều gì?' },
            choices: [
              { id: 'a', label: { en: 'To never buy stocks again', vi: 'Không mua cổ phiếu nữa' } },
              { id: 'b', label: { en: 'To buy more stocks', vi: 'Mua thêm cổ phiếu' } },
              { id: 'c', label: { en: 'To lend money to a friend', vi: 'Cho bạn vay tiền' } }
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
      en: 'Two sides: 反面 & 一方で',
      vi: 'Hai mặt: 反面 & 一方で'
    },
    focus: {
      en: 'Contrast two aspects of the same thing with 〜反面 and 〜一方(で).',
      vi: 'Đối chiếu hai mặt của cùng một sự việc với 〜反面 và 〜一方(で).'
    },
    vocab: [
      {
        kana: 'べんり',
        kanji: '便利',
        romaji: 'benri',
        meaning: { en: 'convenient', vi: 'tiện lợi' }
      },
      {
        kana: 'きけん',
        kanji: '危険',
        romaji: 'kiken',
        meaning: { en: 'dangerous, danger', vi: 'nguy hiểm' }
      },
      {
        kana: 'きゅうりょう',
        kanji: '給料',
        romaji: 'kyūryō',
        meaning: { en: 'salary', vi: 'lương' }
      },
      {
        kana: 'せきにん',
        kanji: '責任',
        romaji: 'sekinin',
        meaning: { en: 'responsibility', vi: 'trách nhiệm' }
      },
      {
        kana: 'きびしい',
        kanji: '厳しい',
        romaji: 'kibishii',
        meaning: { en: 'strict, harsh', vi: 'nghiêm khắc' }
      },
      { kana: 'とかい', kanji: '都会', romaji: 'tokai', meaning: { en: 'city', vi: 'thành thị' } },
      {
        kana: 'いなか',
        kanji: '田舎',
        romaji: 'inaka',
        meaning: { en: 'countryside', vi: 'vùng quê' }
      },
      {
        kana: 'ぶっか',
        kanji: '物価',
        romaji: 'bukka',
        meaning: { en: 'prices (of goods)', vi: 'vật giá' }
      },
      {
        kana: 'りてん',
        kanji: '利点',
        romaji: 'riten',
        meaning: { en: 'advantage', vi: 'ưu điểm' }
      },
      {
        kana: 'けってん',
        kanji: '欠点',
        romaji: 'ketten',
        meaning: { en: 'drawback, flaw', vi: 'nhược điểm' }
      }
    ],
    grammar: [
      {
        pattern: '〜反面',
        title: { en: 'On the one hand... on the other', vi: 'Mặt này ... mặt khác' },
        explanation: {
          en: '〜反面 contrasts two opposite sides of the SAME thing: convenient but also dangerous.',
          vi: '〜反面 đối chiếu hai mặt trái ngược của CÙNG một sự vật: vừa tiện vừa nguy hiểm.'
        },
        examples: [
          {
            jp: 'この車は便利な反面、維持費が高い。',
            romaji: 'Kono kuruma wa benri na hanmen, ijihi ga takai.',
            meaning: {
              en: 'This car is convenient, but on the other hand its upkeep is expensive.',
              vi: 'Chiếc xe này tiện lợi, nhưng mặt khác chi phí bảo trì cao.'
            }
          },
          {
            jp: 'インターネットは便利な反面、危険もある。',
            romaji: 'Intānetto wa benri na hanmen, kiken mo aru.',
            meaning: {
              en: 'The internet is convenient, but on the flip side it has dangers too.',
              vi: 'Internet tiện lợi nhưng mặt khác cũng có nguy hiểm.'
            }
          }
        ]
      },
      {
        pattern: '〜一方(で)',
        title: { en: 'While / on the other hand', vi: 'Trong khi / mặt khác' },
        explanation: {
          en: '〜一方(で) contrasts two situations or two sides, which may be about the same or different subjects.',
          vi: '〜一方(で) đối chiếu hai tình huống hoặc hai mặt, có thể cùng hoặc khác chủ thể.'
        },
        examples: [
          {
            jp: 'この仕事は給料が高い一方で、責任も重い。',
            romaji: 'Kono shigoto wa kyūryō ga takai ippō de, sekinin mo omoi.',
            meaning: {
              en: 'This job pays well, while at the same time the responsibility is heavy.',
              vi: 'Công việc này lương cao, mặt khác trách nhiệm cũng nặng.'
            }
          },
          {
            jp: '都会は便利な一方、田舎は自然が豊かだ。',
            romaji: 'Tokai wa benri na ippō, inaka wa shizen ga yutaka da.',
            meaning: {
              en: 'Cities are convenient, while the countryside is rich in nature.',
              vi: 'Thành thị tiện lợi, còn vùng quê thì thiên nhiên trù phú.'
            }
          }
        ]
      },
      {
        pattern: '〜一方だ',
        title: { en: 'Keeps getting more and more', vi: 'Ngày càng (một chiều)' },
        explanation: {
          en: 'Verb(dictionary) + 一方だ describes a one-way trend that keeps increasing.',
          vi: 'Động từ (thể từ điển) + 一方だ tả xu hướng một chiều ngày càng tăng.'
        },
        examples: [
          {
            jp: '最近、物価は上がる一方だ。',
            romaji: 'Saikin, bukka wa agaru ippō da.',
            meaning: {
              en: 'Lately, prices just keep going up.',
              vi: 'Gần đây vật giá cứ tăng liên tục.'
            }
          },
          {
            jp: '田舎の人口は減る一方だ。',
            romaji: 'Inaka no jinkō wa heru ippō da.',
            meaning: {
              en: 'The rural population just keeps declining.',
              vi: 'Dân số vùng quê cứ giảm mãi.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'City or countryside?', vi: 'Thành thị hay vùng quê?' },
        lines: [
          {
            jp: '都会の生活は便利な一方で、物価が高いという欠点があります。',
            romaji:
              'Tokai no seikatsu wa benri na ippō de, bukka ga takai to iu ketten ga arimasu.',
            meaning: {
              en: 'City life is convenient, but on the other hand it has the drawback of high prices.',
              vi: 'Cuộc sống thành thị tiện lợi, mặt khác lại có nhược điểm là vật giá cao.'
            }
          },
          {
            jp: '田舎は自然が豊かな反面、交通が不便です。',
            romaji: 'Inaka wa shizen ga yutaka na hanmen, kōtsū ga fuben desu.',
            meaning: {
              en: 'The countryside is rich in nature, but on the flip side transport is inconvenient.',
              vi: 'Vùng quê thiên nhiên trù phú, nhưng mặt khác giao thông bất tiện.'
            }
          },
          {
            jp: 'どちらにも利点と欠点があるので、よく考えて選びたいです。',
            romaji: 'Dochira ni mo riten to ketten ga aru node, yoku kangaete erabitai desu.',
            meaning: {
              en: 'Both have advantages and drawbacks, so I want to think carefully before choosing.',
              vi: 'Cả hai đều có ưu và nhược điểm, nên tôi muốn cân nhắc kỹ trước khi chọn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is a drawback of city life?',
              vi: 'Nhược điểm của cuộc sống thành thị là gì?'
            },
            choices: [
              { id: 'a', label: { en: 'High prices', vi: 'Vật giá cao' } },
              { id: 'b', label: { en: 'Too much nature', vi: 'Quá nhiều thiên nhiên' } },
              { id: 'c', label: { en: 'Inconvenient transport', vi: 'Giao thông bất tiện' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is said about the countryside?',
              vi: 'Vùng quê được nói thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Rich in nature but inconvenient transport',
                  vi: 'Thiên nhiên trù phú nhưng giao thông bất tiện'
                }
              },
              { id: 'b', label: { en: 'Cheap but dangerous', vi: 'Rẻ nhưng nguy hiểm' } },
              { id: 'c', label: { en: 'Convenient and lively', vi: 'Tiện lợi và náo nhiệt' } }
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
      en: 'Concession with ものの',
      vi: 'Nhượng bộ với ものの'
    },
    focus: {
      en: 'Admit one fact but state a contrary result with 〜ものの.',
      vi: 'Thừa nhận một điều nhưng nêu kết quả trái ngược với 〜ものの.'
    },
    vocab: [
      {
        kana: 'もうしこむ',
        kanji: '申し込む',
        romaji: 'mōshikomu',
        meaning: { en: 'to apply, sign up', vi: 'đăng ký, nộp đơn' }
      },
      {
        kana: 'ごうかく',
        kanji: '合格',
        romaji: 'gōkaku',
        meaning: { en: 'passing (an exam)', vi: 'đỗ, đậu' }
      },
      {
        kana: 'なれる',
        kanji: '慣れる',
        romaji: 'nareru',
        meaning: { en: 'to get used to', vi: 'quen với' }
      },
      {
        kana: 'じしん',
        kanji: '自信',
        romaji: 'jishin',
        meaning: { en: 'confidence', vi: 'sự tự tin' }
      },
      {
        kana: 'みとめる',
        kanji: '認める',
        romaji: 'mitomeru',
        meaning: { en: 'to admit, acknowledge', vi: 'thừa nhận' }
      },
      {
        kana: 'かいけつ',
        kanji: '解決',
        romaji: 'kaiketsu',
        meaning: { en: 'solution, resolving', vi: 'sự giải quyết' }
      },
      {
        kana: 'にがて',
        kanji: '苦手',
        romaji: 'nigate',
        meaning: { en: 'weak at, not good with', vi: 'kém, ngại' }
      },
      {
        kana: 'けっきょく',
        kanji: '結局',
        romaji: 'kekkyoku',
        meaning: { en: 'in the end, after all', vi: 'rốt cuộc' }
      },
      {
        kana: 'りかい',
        kanji: '理解',
        romaji: 'rikai',
        meaning: { en: 'understanding', vi: 'sự hiểu' }
      },
      {
        kana: 'じっさい',
        kanji: '実際',
        romaji: 'jissai',
        meaning: { en: 'in reality, actually', vi: 'thực tế' }
      }
    ],
    grammar: [
      {
        pattern: 'plain form ＋ ものの',
        title: { en: 'Although / even though', vi: 'Mặc dù / tuy ... nhưng' },
        explanation: {
          en: '〜ものの admits a fact, then states something contrary to what you would expect. It is rather written/formal.',
          vi: '〜ものの thừa nhận một sự thật rồi nêu điều trái với mong đợi. Mang sắc thái văn viết, trang trọng.'
        },
        examples: [
          {
            jp: '大学を卒業したものの、まだ仕事が見つからない。',
            romaji: 'Daigaku o sotsugyō shita mono no, mada shigoto ga mitsukaranai.',
            meaning: {
              en: 'Although I graduated from university, I still cannot find a job.',
              vi: 'Tuy đã tốt nghiệp đại học nhưng tôi vẫn chưa tìm được việc.'
            }
          },
          {
            jp: '日本語を勉強したものの、なかなか上手に話せない。',
            romaji: 'Nihongo o benkyō shita mono no, nakanaka jōzu ni hanasenai.',
            meaning: {
              en: 'Even though I studied Japanese, I still cannot speak it well.',
              vi: 'Tuy đã học tiếng Nhật nhưng tôi vẫn chưa nói giỏi được.'
            }
          }
        ]
      },
      {
        pattern: 'N である / な-adj な ＋ ものの',
        title: { en: 'With nouns & な-adjectives', vi: 'Với danh từ & tính từ -な' },
        explanation: {
          en: 'Use である + ものの for nouns and 〜な + ものの for な-adjectives.',
          vi: 'Dùng である + ものの với danh từ và 〜な + ものの với tính từ -な.'
        },
        examples: [
          {
            jp: '便利であるものの、この機械は値段が高すぎる。',
            romaji: 'Benri de aru mono no, kono kikai wa nedan ga takasugiru.',
            meaning: {
              en: 'Although it is convenient, this machine is far too expensive.',
              vi: 'Tuy tiện lợi nhưng cái máy này giá quá đắt.'
            }
          },
          {
            jp: '苦手なものの、英語で説明してみた。',
            romaji: 'Nigate na mono no, eigo de setsumei shite mita.',
            meaning: {
              en: 'Although I am not good at it, I tried explaining in English.',
              vi: 'Tuy còn ngại nhưng tôi vẫn thử giải thích bằng tiếng Anh.'
            }
          }
        ]
      },
      {
        pattern: 'とはいうものの',
        title: { en: 'Having said that...', vi: 'Tuy nói vậy nhưng ...' },
        explanation: {
          en: '〜とはいうものの starts a sentence to mean "that said / nevertheless".',
          vi: '〜とはいうものの mở đầu câu, nghĩa "tuy nói vậy / dù sao thì".'
        },
        examples: [
          {
            jp: 'もう春だ。とはいうものの、まだ寒い日が続いている。',
            romaji: 'Mō haru da. To wa iu mono no, mada samui hi ga tsuzuite iru.',
            meaning: {
              en: 'It is already spring. That said, cold days are still continuing.',
              vi: 'Đã sang xuân rồi. Tuy vậy những ngày lạnh vẫn còn kéo dài.'
            }
          },
          {
            jp: '行くと約束した。とはいうものの、本当は気が進まない。',
            romaji: 'Iku to yakusoku shita. To wa iu mono no, hontō wa ki ga susumanai.',
            meaning: {
              en: 'I promised to go. That said, I really do not feel like it.',
              vi: 'Tôi đã hứa sẽ đi. Tuy nói vậy nhưng thật ra tôi không muốn lắm.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A new gym membership', vi: 'Đăng ký phòng gym mới' },
        lines: [
          {
            jp: '健康のために、ジムに申し込みました。',
            romaji: 'Kenkō no tame ni, jimu ni mōshikomimashita.',
            meaning: {
              en: 'For my health, I signed up at a gym.',
              vi: 'Vì sức khỏe, tôi đã đăng ký phòng gym.'
            }
          },
          {
            jp: '申し込んだものの、忙しくてほとんど行っていません。',
            romaji: 'Mōshikonda mono no, isogashikute hotondo itte imasen.',
            meaning: {
              en: 'Although I signed up, I am busy and hardly go.',
              vi: 'Tuy đã đăng ký nhưng vì bận nên tôi hầu như không đi.'
            }
          },
          {
            jp: 'お金がもったいないとは思うものの、なかなか時間が作れません。',
            romaji: 'Okane ga mottainai to wa omou mono no, nakanaka jikan ga tsukuremasen.',
            meaning: {
              en: 'Although I think it is a waste of money, I just cannot make the time.',
              vi: 'Tuy thấy phí tiền nhưng tôi vẫn khó thu xếp được thời gian.'
            }
          },
          {
            jp: '来月こそは、週に二回通おうと思っています。',
            romaji: 'Raigetsu koso wa, shū ni nikai kayoō to omotte imasu.',
            meaning: {
              en: 'Next month for sure, I intend to go twice a week.',
              vi: 'Tháng sau nhất định tôi sẽ đi hai buổi mỗi tuần.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why does the writer hardly go to the gym?',
              vi: 'Vì sao người viết hầu như không đến gym?'
            },
            choices: [
              { id: 'a', label: { en: 'It is too far', vi: 'Quá xa' } },
              { id: 'b', label: { en: 'They are busy', vi: 'Vì bận' } },
              { id: 'c', label: { en: 'They dislike exercise', vi: 'Ghét tập luyện' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer plan for next month?',
              vi: 'Người viết dự định gì cho tháng sau?'
            },
            choices: [
              { id: 'a', label: { en: 'To quit the gym', vi: 'Bỏ phòng gym' } },
              { id: 'b', label: { en: 'To go twice a week', vi: 'Đi hai buổi mỗi tuần' } },
              { id: 'c', label: { en: 'To find a cheaper gym', vi: 'Tìm phòng gym rẻ hơn' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-23',
    number: 23,
    title: {
      en: 'Casual concession: たって & だって',
      vi: 'Nhượng bộ thân mật: たって & だって'
    },
    focus: {
      en: 'Use casual 〜たって ("even if") and 〜だって ("even / too") in everyday speech.',
      vi: 'Dùng 〜たって ("dù có ... thì") và 〜だって ("ngay cả / cũng") trong văn nói hằng ngày.'
    },
    vocab: [
      {
        kana: 'いそぐ',
        kanji: '急ぐ',
        romaji: 'isogu',
        meaning: { en: 'to hurry', vi: 'vội, gấp' }
      },
      {
        kana: 'まにあう',
        kanji: '間に合う',
        romaji: 'maniau',
        meaning: { en: 'to be in time', vi: 'kịp giờ' }
      },
      {
        kana: 'あやまる',
        kanji: '謝る',
        romaji: 'ayamaru',
        meaning: { en: 'to apologize', vi: 'xin lỗi' }
      },
      {
        kana: 'ゆるす',
        kanji: '許す',
        romaji: 'yurusu',
        meaning: { en: 'to forgive', vi: 'tha thứ' }
      },
      {
        kana: 'いまさら',
        kanji: '今さら',
        romaji: 'imasara',
        meaning: { en: 'now (after all this time)', vi: 'đến giờ này (mới)' }
      },
      {
        kana: 'むり',
        kanji: '無理',
        romaji: 'muri',
        meaning: { en: 'impossible, unreasonable', vi: 'vô lý, không thể' }
      },
      {
        kana: 'しっぱい',
        kanji: '失敗',
        romaji: 'shippai',
        meaning: { en: 'failure, mistake', vi: 'thất bại' }
      },
      { kana: 'だれ', kanji: '誰', romaji: 'dare', meaning: { en: 'who, anyone', vi: 'ai' } },
      {
        kana: 'どんなに',
        romaji: 'donna ni',
        meaning: { en: 'no matter how (much)', vi: 'dù có ... đến đâu' }
      },
      {
        kana: 'がんばる',
        kanji: '頑張る',
        romaji: 'ganbaru',
        meaning: { en: 'to try hard', vi: 'cố gắng' }
      }
    ],
    grammar: [
      {
        pattern: 'V/adj ＋ たって',
        title: { en: 'Even if (casual ても)', vi: 'Dù ... thì (ても thân mật)' },
        explanation: {
          en: '〜たって is the casual, spoken equivalent of 〜ても ("even if"). Attach it like the た-form.',
          vi: '〜たって là dạng thân mật của 〜ても ("dù có ... thì"). Gắn giống cách chia thể た.'
        },
        examples: [
          {
            jp: '今から急いだって、もう間に合わないよ。',
            romaji: 'Ima kara isoidatte, mō maniawanai yo.',
            meaning: {
              en: 'Even if you hurry now, you will not make it in time.',
              vi: 'Giờ có vội thì cũng không kịp nữa đâu.'
            }
          },
          {
            jp: 'いくら高くたって、これは買いたい。',
            romaji: 'Ikura takakutatte, kore wa kaitai.',
            meaning: {
              en: 'No matter how expensive it is, I want to buy this.',
              vi: 'Dù có đắt đến đâu, tôi vẫn muốn mua cái này.'
            }
          }
        ]
      },
      {
        pattern: 'N / な-adj ＋ だって',
        title: { en: 'Even / too (casual でも)', vi: 'Ngay cả / cũng (でも thân mật)' },
        explanation: {
          en: 'With nouns, 〜だって means "even" or "too": 子供だって (even a child), 私だって (me too).',
          vi: 'Với danh từ, 〜だって nghĩa "ngay cả" hoặc "cũng": 子供だって (đến cả trẻ con), 私だって (tôi cũng vậy).'
        },
        examples: [
          {
            jp: 'そんなこと、子供だって分かるよ。',
            romaji: 'Sonna koto, kodomo datte wakaru yo.',
            meaning: {
              en: 'Even a child understands something like that.',
              vi: 'Chuyện như thế đến trẻ con cũng hiểu mà.'
            }
          },
          {
            jp: '私だって、たまには休みたい。',
            romaji: 'Watashi datte, tama ni wa yasumitai.',
            meaning: {
              en: 'I too want to rest once in a while.',
              vi: 'Tôi cũng muốn nghỉ ngơi thỉnh thoảng chứ.'
            }
          }
        ]
      },
      {
        pattern: 'どんなに〜たって',
        title: { en: 'No matter how much...', vi: 'Dù ... đến mấy cũng' },
        explanation: {
          en: 'どんなに / いくら + 〜たって emphasizes "no matter how much, (still)".',
          vi: 'どんなに / いくら + 〜たって nhấn mạnh "dù có ... đến đâu thì cũng".'
        },
        examples: [
          {
            jp: 'どんなに謝ったって、彼はもう許してくれない。',
            romaji: 'Donna ni ayamattatte, kare wa mō yurushite kurenai.',
            meaning: {
              en: 'No matter how much I apologize, he will not forgive me anymore.',
              vi: 'Dù có xin lỗi đến đâu, anh ấy cũng không tha thứ nữa.'
            }
          },
          {
            jp: 'いくら頑張ったって、無理なものは無理だ。',
            romaji: 'Ikura ganbattatte, muri na mono wa muri da.',
            meaning: {
              en: 'No matter how hard I try, what is impossible is impossible.',
              vi: 'Dù có cố đến mấy, việc không thể thì vẫn là không thể.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Running late', vi: 'Trễ giờ' },
        lines: [
          {
            jp: '朝、目が覚めたらもう八時半だった。',
            romaji: 'Asa, me ga sametara mō hachi-ji han datta.',
            meaning: {
              en: 'When I woke up in the morning, it was already 8:30.',
              vi: 'Sáng tỉnh dậy thì đã 8 giờ rưỡi.'
            }
          },
          {
            jp: '会議は九時からだから、今から急いだって間に合わない。',
            romaji: 'Kaigi wa ku-ji kara dakara, ima kara isoidatte maniawanai.',
            meaning: {
              en: 'The meeting starts at nine, so even if I hurry now I will not make it.',
              vi: 'Cuộc họp bắt đầu từ 9 giờ, nên giờ có vội cũng không kịp.'
            }
          },
          {
            jp: '上司に謝ったって、きっと怒られるだろう。',
            romaji: 'Jōshi ni ayamattatte, kitto okorareru darō.',
            meaning: {
              en: 'Even if I apologize to my boss, I will surely be scolded.',
              vi: 'Dù có xin lỗi sếp thì chắc chắn vẫn bị mắng.'
            }
          },
          {
            jp: 'でも、連絡だけはすぐにしようと思う。',
            romaji: 'Demo, renraku dake wa sugu ni shiyō to omou.',
            meaning: {
              en: 'Still, I think I should at least contact them right away.',
              vi: 'Nhưng ít nhất tôi nghĩ nên liên lạc ngay.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Why will the writer be late?', vi: 'Vì sao người viết sẽ bị trễ?' },
            choices: [
              { id: 'a', label: { en: 'They woke up at 8:30', vi: 'Họ dậy lúc 8 giờ rưỡi' } },
              { id: 'b', label: { en: 'The train stopped', vi: 'Tàu dừng' } },
              { id: 'c', label: { en: 'They forgot the meeting', vi: 'Họ quên cuộc họp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer decide to do?',
              vi: 'Người viết quyết định làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Contact them right away', vi: 'Liên lạc ngay' } },
              { id: 'b', label: { en: 'Skip the meeting', vi: 'Bỏ cuộc họp' } },
              { id: 'c', label: { en: 'Go back to sleep', vi: 'Ngủ tiếp' } }
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
      en: 'Even & if only: さえ / さえ〜ば',
      vi: 'Ngay cả & chỉ cần: さえ / さえ〜ば'
    },
    focus: {
      en: 'Mark an extreme example with 〜さえ ("even") and a sole condition with 〜さえ〜ば ("if only").',
      vi: 'Nêu ví dụ cực điểm với 〜さえ ("ngay cả") và điều kiện duy nhất với 〜さえ〜ば ("chỉ cần").'
    },
    vocab: [
      {
        kana: 'けんこう',
        kanji: '健康',
        romaji: 'kenkō',
        meaning: { en: 'health', vi: 'sức khỏe' }
      },
      {
        kana: 'でんき',
        kanji: '電気',
        romaji: 'denki',
        meaning: { en: 'electricity, light', vi: 'điện' }
      },
      {
        kana: 'れんしゅう',
        kanji: '練習',
        romaji: 'renshū',
        meaning: { en: 'practice', vi: 'luyện tập' }
      },
      {
        kana: 'じょうけん',
        kanji: '条件',
        romaji: 'jōken',
        meaning: { en: 'condition', vi: 'điều kiện' }
      },
      {
        kana: 'せつめい',
        kanji: '説明',
        romaji: 'setsumei',
        meaning: { en: 'explanation', vi: 'lời giải thích' }
      },
      {
        kana: 'なまえ',
        kanji: '名前',
        romaji: 'namae',
        meaning: { en: 'name', vi: 'tên' }
      },
      {
        kana: 'プロ',
        romaji: 'puro',
        meaning: { en: 'a professional', vi: 'dân chuyên nghiệp' }
      },
      {
        kana: 'まちがえる',
        kanji: '間違える',
        romaji: 'machigaeru',
        meaning: { en: 'to make a mistake', vi: 'làm sai, nhầm' }
      },
      {
        kana: 'かいけつ',
        kanji: '解決',
        romaji: 'kaiketsu',
        meaning: { en: 'resolution, solving', vi: 'giải quyết' }
      },
      {
        kana: 'むちゅう',
        kanji: '夢中',
        romaji: 'muchū',
        meaning: { en: 'absorbed, crazy about', vi: 'mê mải' }
      }
    ],
    grammar: [
      {
        pattern: 'N ＋ さえ',
        title: { en: 'Even (extreme example)', vi: 'Ngay cả (ví dụ cực điểm)' },
        explanation: {
          en: '〜さえ highlights an extreme case: "even X (let alone the rest)". Often with a negative.',
          vi: '〜さえ nêu trường hợp cực điểm: "ngay cả X (huống chi cái khác)". Hay đi với phủ định.'
        },
        examples: [
          {
            jp: '忙しくて、食事をする時間さえない。',
            romaji: 'Isogashikute, shokuji o suru jikan sae nai.',
            meaning: {
              en: 'I am so busy I do not even have time to eat.',
              vi: 'Bận đến mức không có cả thời gian ăn cơm.'
            }
          },
          {
            jp: 'その子は自分の名前さえまだ書けない。',
            romaji: 'Sono ko wa jibun no namae sae mada kakenai.',
            meaning: {
              en: 'That child cannot even write his own name yet.',
              vi: 'Đứa bé đó đến tên mình cũng chưa viết được.'
            }
          }
        ]
      },
      {
        pattern: '〜さえ〜ば',
        title: { en: 'If only / as long as', vi: 'Chỉ cần ... là' },
        explanation: {
          en: '〜さえ〜ば states the one sufficient condition: "if only X (then everything is fine)".',
          vi: '〜さえ〜ば nêu điều kiện đủ duy nhất: "chỉ cần X (thì ổn)".'
        },
        examples: [
          {
            jp: 'お金さえあれば、何でもできるわけではない。',
            romaji: 'Okane sae areba, nan demo dekiru wake de wa nai.',
            meaning: {
              en: 'It is not as if you can do anything just as long as you have money.',
              vi: 'Không phải cứ có tiền là làm được mọi thứ.'
            }
          },
          {
            jp: '練習さえすれば、きっと上手になります。',
            romaji: 'Renshū sae sureba, kitto jōzu ni narimasu.',
            meaning: {
              en: 'As long as you practice, you will surely get better.',
              vi: 'Chỉ cần luyện tập là chắc chắn sẽ giỏi lên.'
            }
          }
        ]
      },
      {
        pattern: '〜でさえ',
        title: { en: 'Even (emphatic)', vi: 'Ngay đến cả (nhấn mạnh)' },
        explanation: {
          en: '〜でさえ adds emphasis to "even", often pointing out a surprising example.',
          vi: '〜でさえ nhấn mạnh ý "ngay cả", thường nêu một ví dụ gây bất ngờ.'
        },
        examples: [
          {
            jp: 'こんな問題は、プロでさえ間違えることがある。',
            romaji: 'Konna mondai wa, puro de sae machigaeru koto ga aru.',
            meaning: {
              en: 'Even a professional sometimes gets a problem like this wrong.',
              vi: 'Bài toán thế này, ngay cả dân chuyên nghiệp đôi khi cũng làm sai.'
            }
          },
          {
            jp: '先生でさえ答えられなかった。',
            romaji: 'Sensei de sae kotaerarenakatta.',
            meaning: {
              en: 'Even the teacher could not answer it.',
              vi: 'Ngay cả thầy giáo cũng không trả lời được.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The secret is practice', vi: 'Bí quyết là luyện tập' },
        lines: [
          {
            jp: 'ピアノが上手になりたいなら、特別な才能は要りません。',
            romaji: 'Piano ga jōzu ni naritai nara, tokubetsu na sainō wa irimasen.',
            meaning: {
              en: 'If you want to get good at the piano, you do not need special talent.',
              vi: 'Nếu muốn chơi piano giỏi thì không cần tài năng đặc biệt.'
            }
          },
          {
            jp: '毎日少しずつ練習さえすれば、必ず上達します。',
            romaji: 'Mainichi sukoshi zutsu renshū sae sureba, kanarazu jōtatsu shimasu.',
            meaning: {
              en: 'As long as you practice a little every day, you will definitely improve.',
              vi: 'Chỉ cần mỗi ngày luyện một chút là nhất định sẽ tiến bộ.'
            }
          },
          {
            jp: '最初は楽譜さえ読めなくても、心配いりません。',
            romaji: 'Saisho wa gakufu sae yomenakute mo, shinpai irimasen.',
            meaning: {
              en: 'Even if you cannot even read the score at first, do not worry.',
              vi: 'Lúc đầu đến cả bản nhạc cũng chưa đọc được thì cũng đừng lo.'
            }
          },
          {
            jp: '続けることさえできれば、誰でもプロのように弾けるようになります。',
            romaji: 'Tsuzukeru koto sae dekireba, dare demo puro no yō ni hikeru yō ni narimasu.',
            meaning: {
              en: 'As long as you can keep at it, anyone can come to play like a professional.',
              vi: 'Chỉ cần duy trì được thì ai cũng có thể chơi như dân chuyên nghiệp.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the writer say you need to get good at piano?',
              vi: 'Theo người viết, để giỏi piano cần gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Special talent', vi: 'Tài năng đặc biệt' } },
              { id: 'b', label: { en: 'Daily practice', vi: 'Luyện tập mỗi ngày' } },
              { id: 'c', label: { en: 'An expensive piano', vi: 'Một cây đàn đắt tiền' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer say about not being able to read the score at first?',
              vi: 'Người viết nói gì về việc lúc đầu chưa đọc được bản nhạc?'
            },
            choices: [
              { id: 'a', label: { en: 'You should give up', vi: 'Nên bỏ cuộc' } },
              { id: 'b', label: { en: 'There is no need to worry', vi: 'Không cần lo lắng' } },
              { id: 'c', label: { en: 'You need a teacher', vi: 'Cần một giáo viên' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  }
];
