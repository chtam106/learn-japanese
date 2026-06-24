import type { Lesson } from '../types.ts';

export const n4LessonsA: Lesson[] = [
  {
    id: 'lesson-1',
    number: 1,
    title: {
      en: 'Plain Form & Casual Speech',
      vi: 'Thể thông thường & Cách nói thân mật'
    },
    focus: {
      en: 'Use plain non-past forms (dictionary form and 〜ない) and know when casual speech is okay.',
      vi: 'Dùng thể thông thường phi quá khứ (thể từ điển và 〜ない) và biết khi nào nói thân mật là phù hợp.'
    },
    vocab: [
      { kana: 'いく', kanji: '行く', romaji: 'iku', meaning: { en: 'to go', vi: 'đi' } },
      {
        kana: 'たべる',
        kanji: '食べる',
        romaji: 'taberu',
        meaning: { en: 'to eat', vi: 'ăn' }
      },
      {
        kana: 'のむ',
        kanji: '飲む',
        romaji: 'nomu',
        meaning: { en: 'to drink', vi: 'uống' }
      },
      {
        kana: 'みる',
        kanji: '見る',
        romaji: 'miru',
        meaning: { en: 'to watch, to see', vi: 'xem, nhìn' }
      },
      { kana: 'する', romaji: 'suru', meaning: { en: 'to do', vi: 'làm' } },
      {
        kana: 'くる',
        kanji: '来る',
        romaji: 'kuru',
        meaning: { en: 'to come', vi: 'đến' }
      },
      {
        kana: 'わかる',
        kanji: '分かる',
        romaji: 'wakaru',
        meaning: { en: 'to understand', vi: 'hiểu' }
      },
      {
        kana: 'ともだち',
        kanji: '友達',
        romaji: 'tomodachi',
        meaning: { en: 'friend', vi: 'bạn bè' }
      },
      {
        kana: 'きょう',
        kanji: '今日',
        romaji: 'kyō',
        meaning: { en: 'today', vi: 'hôm nay' }
      },
      {
        kana: 'ぜんぜん',
        kanji: '全然',
        romaji: 'zenzen',
        meaning: { en: '(not) at all', vi: '(không) … chút nào' }
      },
      {
        kana: 'ていねい',
        kanji: '丁寧',
        romaji: 'teinei',
        meaning: { en: 'polite (な-adj)', vi: 'lịch sự (tính từ -な)' }
      },
      {
        kana: 'ふつうけい',
        kanji: '普通形',
        romaji: 'futsūkei',
        meaning: { en: 'plain form', vi: 'thể thông thường' }
      }
    ],
    grammar: [
      {
        pattern: 'V (じしょけい)',
        title: {
          en: 'Dictionary form (plain non-past)',
          vi: 'Thể từ điển (phi quá khứ thông thường)'
        },
        explanation: {
          en: 'The dictionary form is the plain non-past affirmative. It is the casual version of 〜ます and is used between friends.',
          vi: 'Thể từ điển là dạng khẳng định phi quá khứ thông thường. Đây là phiên bản thân mật của 〜ます, dùng giữa bạn bè.'
        },
        examples: [
          {
            jp: '毎日コーヒーを飲む。',
            romaji: 'Mainichi kōhī o nomu.',
            meaning: { en: 'I drink coffee every day.', vi: 'Mỗi ngày tôi uống cà phê.' }
          },
          {
            jp: '今日は友達のうちに行く。',
            romaji: 'Kyō wa tomodachi no uchi ni iku.',
            meaning: { en: "Today I'm going to a friend's house.", vi: 'Hôm nay tôi đến nhà bạn.' }
          }
        ]
      },
      {
        pattern: 'V〜ない',
        title: { en: 'Plain negative (〜ない)', vi: 'Phủ định thông thường (〜ない)' },
        explanation: {
          en: 'The 〜ない form is the plain non-past negative, the casual version of 〜ません.',
          vi: 'Thể 〜ない là dạng phủ định phi quá khứ thông thường, phiên bản thân mật của 〜ません.'
        },
        examples: [
          {
            jp: '今日はテレビを見ない。',
            romaji: 'Kyō wa terebi o minai.',
            meaning: { en: "I won't watch TV today.", vi: 'Hôm nay tôi không xem ti vi.' }
          },
          {
            jp: '意味が全然分からない。',
            romaji: 'Imi ga zenzen wakaranai.',
            meaning: {
              en: "I don't understand the meaning at all.",
              vi: 'Tôi hoàn toàn không hiểu nghĩa.'
            }
          }
        ]
      },
      {
        pattern: 'N だ / な-adj だ',
        title: { en: 'Plain copula だ', vi: 'Hệ từ thông thường だ' },
        explanation: {
          en: 'In casual speech, だ replaces です after nouns and な-adjectives. It is often dropped by women in conversation.',
          vi: 'Trong lối nói thân mật, だ thay cho です sau danh từ và tính từ -な. Trong hội thoại, nữ giới thường lược bỏ nó.'
        },
        examples: [
          {
            jp: 'あの人は私の友達だ。',
            romaji: 'Ano hito wa watashi no tomodachi da.',
            meaning: { en: 'That person is my friend.', vi: 'Người kia là bạn của tôi.' }
          },
          {
            jp: 'この店はとても丁寧だ。',
            romaji: 'Kono mise wa totemo teinei da.',
            meaning: { en: 'This shop is very polite.', vi: 'Cửa hàng này rất lịch sự.' }
          }
        ]
      },
      {
        pattern: 'ていねいけい ⇔ ふつうけい',
        title: { en: 'When to use casual speech', vi: 'Khi nào dùng lối nói thân mật' },
        explanation: {
          en: 'Use plain form with close friends, family, and people younger or junior to you. Keep 〜ます with strangers, teachers, and superiors.',
          vi: 'Dùng thể thông thường với bạn thân, người trong gia đình và người ít tuổi hoặc cấp dưới. Giữ 〜ます với người lạ, thầy cô và cấp trên.'
        },
        examples: [
          {
            jp: '友達には「行く」と言う。',
            romaji: 'Tomodachi ni wa "iku" to iu.',
            meaning: { en: 'To a friend you say "iku".', vi: 'Với bạn bè thì nói "iku".' }
          },
          {
            jp: '先生には「行きます」と言う。',
            romaji: 'Sensei ni wa "ikimasu" to iu.',
            meaning: {
              en: 'To a teacher you say "ikimasu".',
              vi: 'Với thầy cô thì nói "ikimasu".'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A message to a friend', vi: 'Tin nhắn cho bạn' },
        lines: [
          {
            jp: '今日はうちにいる。',
            romaji: 'Kyō wa uchi ni iru.',
            meaning: { en: "Today I'm staying home.", vi: 'Hôm nay tôi ở nhà.' }
          },
          {
            jp: '宿題が多いから、どこにも行かない。',
            romaji: 'Shukudai ga ōi kara, doko ni mo ikanai.',
            meaning: {
              en: "I have a lot of homework, so I won't go anywhere.",
              vi: 'Bài tập nhiều nên tôi không đi đâu cả.'
            }
          },
          {
            jp: '夜は友達とゲームをする。',
            romaji: 'Yoru wa tomodachi to gēmu o suru.',
            meaning: {
              en: "At night I'll play games with a friend.",
              vi: 'Buổi tối tôi chơi game với bạn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Why does the writer stay home?', vi: 'Tại sao người viết ở nhà?' },
            choices: [
              { id: 'a', label: { en: 'Because of homework', vi: 'Vì có bài tập' } },
              { id: 'b', label: { en: 'Because of the weather', vi: 'Vì thời tiết' } },
              { id: 'c', label: { en: 'Because of work', vi: 'Vì công việc' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What will the writer do at night?',
              vi: 'Buổi tối người viết làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Watch TV', vi: 'Xem ti vi' } },
              { id: 'b', label: { en: 'Play games with a friend', vi: 'Chơi game với bạn' } },
              { id: 'c', label: { en: 'Go out shopping', vi: 'Đi mua sắm' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: {
      en: 'Plain Past & Casual Questions',
      vi: 'Quá khứ thông thường & Câu hỏi thân mật'
    },
    focus: {
      en: 'Use plain past forms (〜た / 〜なかった) and ask casual questions with 〜の？ or rising intonation.',
      vi: 'Dùng thể quá khứ thông thường (〜た / 〜なかった) và đặt câu hỏi thân mật với 〜の？ hoặc lên giọng cuối câu.'
    },
    vocab: [
      {
        kana: 'しゅうまつ',
        kanji: '週末',
        romaji: 'shūmatsu',
        meaning: { en: 'weekend', vi: 'cuối tuần' }
      },
      {
        kana: 'えいが',
        kanji: '映画',
        romaji: 'eiga',
        meaning: { en: 'movie', vi: 'phim' }
      },
      {
        kana: 'かう',
        kanji: '買う',
        romaji: 'kau',
        meaning: { en: 'to buy', vi: 'mua' }
      },
      {
        kana: 'あう',
        kanji: '会う',
        romaji: 'au',
        meaning: { en: 'to meet', vi: 'gặp' }
      },
      {
        kana: 'よむ',
        kanji: '読む',
        romaji: 'yomu',
        meaning: { en: 'to read', vi: 'đọc' }
      },
      {
        kana: 'きく',
        kanji: '聞く',
        romaji: 'kiku',
        meaning: { en: 'to listen, to ask', vi: 'nghe, hỏi' }
      },
      {
        kana: 'たのしい',
        kanji: '楽しい',
        romaji: 'tanoshii',
        meaning: { en: 'fun, enjoyable', vi: 'vui' }
      },
      {
        kana: 'いそがしい',
        kanji: '忙しい',
        romaji: 'isogashii',
        meaning: { en: 'busy', vi: 'bận rộn' }
      },
      {
        kana: 'なに',
        kanji: '何',
        romaji: 'nani',
        meaning: { en: 'what', vi: 'cái gì' }
      },
      {
        kana: 'べんきょう',
        kanji: '勉強',
        romaji: 'benkyō',
        meaning: { en: 'study', vi: 'việc học' }
      },
      {
        kana: 'おもしろい',
        kanji: '面白い',
        romaji: 'omoshiroi',
        meaning: { en: 'interesting', vi: 'thú vị' }
      },
      {
        kana: 'パーティー',
        romaji: 'pātī',
        meaning: { en: 'party', vi: 'bữa tiệc' }
      }
    ],
    grammar: [
      {
        pattern: 'V〜た',
        title: {
          en: 'Plain past affirmative (〜た)',
          vi: 'Quá khứ khẳng định thông thường (〜た)'
        },
        explanation: {
          en: 'The 〜た form is the plain past, the casual version of 〜ました. It is built like the て-form (飲んで → 飲んだ, 見て → 見た).',
          vi: 'Thể 〜た là quá khứ thông thường, phiên bản thân mật của 〜ました. Cách chia giống thể て (飲んで → 飲んだ, 見て → 見た).'
        },
        examples: [
          {
            jp: '週末、映画を見た。',
            romaji: 'Shūmatsu, eiga o mita.',
            meaning: { en: 'I watched a movie on the weekend.', vi: 'Cuối tuần tôi đã xem phim.' }
          },
          {
            jp: '友達に会って、話した。',
            romaji: 'Tomodachi ni atte, hanashita.',
            meaning: { en: 'I met a friend and talked.', vi: 'Tôi đã gặp bạn và trò chuyện.' }
          }
        ]
      },
      {
        pattern: 'V〜なかった',
        title: {
          en: 'Plain past negative (〜なかった)',
          vi: 'Quá khứ phủ định thông thường (〜なかった)'
        },
        explanation: {
          en: 'Change the 〜ない form to 〜なかった for the plain past negative, the casual version of 〜ませんでした.',
          vi: 'Đổi thể 〜ない thành 〜なかった để có quá khứ phủ định thông thường, phiên bản thân mật của 〜ませんでした.'
        },
        examples: [
          {
            jp: '昨日は何も買わなかった。',
            romaji: 'Kinō wa nani mo kawanakatta.',
            meaning: { en: "I didn't buy anything yesterday.", vi: 'Hôm qua tôi không mua gì cả.' }
          },
          {
            jp: '忙しくて、本を読まなかった。',
            romaji: 'Isogashikute, hon o yomanakatta.',
            meaning: {
              en: "I was busy, so I didn't read.",
              vi: 'Vì bận nên tôi đã không đọc sách.'
            }
          }
        ]
      },
      {
        pattern: 'い-adj〜かった / N・な-adj だった',
        title: {
          en: 'Plain past of adjectives & nouns',
          vi: 'Quá khứ thông thường của tính từ & danh từ'
        },
        explanation: {
          en: 'い-adjectives become 〜かった (楽しい → 楽しかった). Nouns and な-adjectives take だった.',
          vi: 'Tính từ -い chuyển thành 〜かった (楽しい → 楽しかった). Danh từ và tính từ -な dùng だった.'
        },
        examples: [
          {
            jp: 'パーティーは楽しかった。',
            romaji: 'Pātī wa tanoshikatta.',
            meaning: { en: 'The party was fun.', vi: 'Bữa tiệc đã rất vui.' }
          },
          {
            jp: '昨日は休みだった。',
            romaji: 'Kinō wa yasumi datta.',
            meaning: { en: 'Yesterday was a day off.', vi: 'Hôm qua là ngày nghỉ.' }
          }
        ]
      },
      {
        pattern: 'V (ふつうけい) の？',
        title: { en: 'Casual questions (〜の？)', vi: 'Câu hỏi thân mật (〜の？)' },
        explanation: {
          en: 'In casual speech there is no か. Use rising intonation, or add の？ to ask softly and show interest.',
          vi: 'Trong lối nói thân mật không có か. Hãy lên giọng cuối câu, hoặc thêm の？ để hỏi nhẹ nhàng, thể hiện sự quan tâm.'
        },
        examples: [
          {
            jp: '週末、何をしたの？',
            romaji: 'Shūmatsu, nani o shita no?',
            meaning: { en: 'What did you do on the weekend?', vi: 'Cuối tuần bạn đã làm gì?' }
          },
          {
            jp: 'あの映画、面白かった？',
            romaji: 'Ano eiga, omoshirokatta?',
            meaning: { en: 'Was that movie interesting?', vi: 'Bộ phim đó có thú vị không?' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'How was the weekend?', vi: 'Cuối tuần thế nào?' },
        lines: [
          {
            jp: '土曜日、友達と映画を見た。',
            romaji: 'Doyōbi, tomodachi to eiga o mita.',
            meaning: {
              en: 'On Saturday I watched a movie with a friend.',
              vi: 'Thứ Bảy tôi đã xem phim với bạn.'
            }
          },
          {
            jp: 'とても面白かった。',
            romaji: 'Totemo omoshirokatta.',
            meaning: { en: 'It was very interesting.', vi: 'Phim rất thú vị.' }
          },
          {
            jp: '日曜日は忙しくて、どこにも行かなかった。',
            romaji: 'Nichiyōbi wa isogashikute, doko ni mo ikanakatta.',
            meaning: {
              en: "On Sunday I was busy, so I didn't go anywhere.",
              vi: 'Chủ Nhật tôi bận nên không đi đâu cả.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the writer do on Saturday?',
              vi: 'Thứ Bảy người viết đã làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Watched a movie', vi: 'Xem phim' } },
              { id: 'b', label: { en: 'Read a book', vi: 'Đọc sách' } },
              { id: 'c', label: { en: 'Bought a bag', vi: 'Mua một cái cặp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why did the writer stay in on Sunday?',
              vi: 'Tại sao Chủ Nhật người viết ở nhà?'
            },
            choices: [
              { id: 'a', label: { en: 'The movie was boring', vi: 'Phim chán' } },
              { id: 'b', label: { en: 'They were busy', vi: 'Vì bận rộn' } },
              { id: 'c', label: { en: 'It was raining', vi: 'Vì trời mưa' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    title: {
      en: 'Saying & Thinking (〜と思う / 〜と言う)',
      vi: 'Nói & Nghĩ (〜と思う / 〜と言う)'
    },
    focus: {
      en: 'Report thoughts and speech using plain form before と思う and と言う.',
      vi: 'Diễn đạt suy nghĩ và lời nói bằng thể thông thường trước と思う và と言う.'
    },
    vocab: [
      {
        kana: 'おもう',
        kanji: '思う',
        romaji: 'omou',
        meaning: { en: 'to think', vi: 'nghĩ' }
      },
      {
        kana: 'いう',
        kanji: '言う',
        romaji: 'iu',
        meaning: { en: 'to say', vi: 'nói' }
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
        kana: 'あつい',
        kanji: '暑い',
        romaji: 'atsui',
        meaning: { en: 'hot (weather)', vi: 'nóng (thời tiết)' }
      },
      {
        kana: 'たぶん',
        romaji: 'tabun',
        meaning: { en: 'probably, maybe', vi: 'có lẽ' }
      },
      {
        kana: 'かいぎ',
        kanji: '会議',
        romaji: 'kaigi',
        meaning: { en: 'meeting', vi: 'cuộc họp' }
      },
      {
        kana: 'おわる',
        kanji: '終わる',
        romaji: 'owaru',
        meaning: { en: 'to end, to finish', vi: 'kết thúc' }
      },
      {
        kana: 'だいじょうぶ',
        kanji: '大丈夫',
        romaji: 'daijōbu',
        meaning: { en: 'all right, okay (な-adj)', vi: 'ổn, không sao (tính từ -な)' }
      },
      {
        kana: 'しゃちょう',
        kanji: '社長',
        romaji: 'shachō',
        meaning: { en: 'company president', vi: 'giám đốc công ty' }
      },
      {
        kana: 'らいしゅう',
        kanji: '来週',
        romaji: 'raishū',
        meaning: { en: 'next week', vi: 'tuần sau' }
      },
      {
        kana: 'ニュース',
        romaji: 'nyūsu',
        meaning: { en: 'news', vi: 'tin tức' }
      }
    ],
    grammar: [
      {
        pattern: 'V (ふつうけい) と思う',
        title: { en: 'I think that … (〜と思う)', vi: 'Tôi nghĩ rằng … (〜と思う)' },
        explanation: {
          en: 'Put a plain-form clause before と思う to give your opinion or guess. と marks the quoted thought.',
          vi: 'Đặt mệnh đề ở thể thông thường trước と思う để nêu ý kiến hay phỏng đoán. と đánh dấu nội dung được nghĩ.'
        },
        examples: [
          {
            jp: '明日は雨が降ると思う。',
            romaji: 'Ashita wa ame ga furu to omou.',
            meaning: { en: 'I think it will rain tomorrow.', vi: 'Tôi nghĩ ngày mai sẽ mưa.' }
          },
          {
            jp: 'この映画は面白いと思う。',
            romaji: 'Kono eiga wa omoshiroi to omou.',
            meaning: {
              en: 'I think this movie is interesting.',
              vi: 'Tôi nghĩ bộ phim này thú vị.'
            }
          }
        ]
      },
      {
        pattern: 'V〜ないと思う',
        title: {
          en: "I don't think … (negative opinion)",
          vi: 'Tôi nghĩ là không … (ý kiến phủ định)'
        },
        explanation: {
          en: 'To say you think something is not the case, make the clause negative before と思う.',
          vi: 'Để nói bạn nghĩ điều gì đó không xảy ra, hãy để mệnh đề ở dạng phủ định trước と思う.'
        },
        examples: [
          {
            jp: '会議は今日終わらないと思う。',
            romaji: 'Kaigi wa kyō owaranai to omou.',
            meaning: {
              en: "I don't think the meeting will finish today.",
              vi: 'Tôi nghĩ cuộc họp hôm nay sẽ không xong.'
            }
          },
          {
            jp: '今日はそんなに暑くないと思う。',
            romaji: 'Kyō wa sonna ni atsuku nai to omou.',
            meaning: {
              en: "I don't think it's that hot today.",
              vi: 'Tôi nghĩ hôm nay không nóng đến vậy.'
            }
          }
        ]
      },
      {
        pattern: 'N は「…」と言う',
        title: { en: 'Someone says that … (〜と言う)', vi: 'Ai đó nói rằng … (〜と言う)' },
        explanation: {
          en: 'と言う reports speech. Use a plain-form clause before it; the speaker is marked with は or が.',
          vi: 'と言う dùng để thuật lại lời nói. Đặt mệnh đề thể thông thường trước nó; người nói được đánh dấu bằng は hoặc が.'
        },
        examples: [
          {
            jp: '社長は明日来ると言う。',
            romaji: 'Shachō wa ashita kuru to iu.',
            meaning: {
              en: 'The president says he will come tomorrow.',
              vi: 'Giám đốc nói ngày mai sẽ đến.'
            }
          },
          {
            jp: '友達はその店は大丈夫だと言う。',
            romaji: 'Tomodachi wa sono mise wa daijōbu da to iu.',
            meaning: {
              en: 'My friend says that shop is fine.',
              vi: 'Bạn tôi nói cửa hàng đó ổn.'
            }
          }
        ]
      },
      {
        pattern: 'N は…と言っていた',
        title: {
          en: 'Reporting what was said (〜と言っていた)',
          vi: 'Thuật lại điều đã được nói (〜と言っていた)'
        },
        explanation: {
          en: 'Use the past 〜と言っていた to report what someone said earlier, like "he said that …".',
          vi: 'Dùng dạng quá khứ 〜と言っていた để thuật lại điều ai đó đã nói, kiểu "anh ấy bảo rằng …".'
        },
        examples: [
          {
            jp: 'ハナさんは来週パーティーをすると言っていた。',
            romaji: 'Hana-san wa raishū pātī o suru to itte ita.',
            meaning: {
              en: 'Hana said she will have a party next week.',
              vi: 'Hana đã bảo tuần sau sẽ tổ chức tiệc.'
            }
          },
          {
            jp: 'ニュースで明日は雨だと言っていた。',
            romaji: 'Nyūsu de ashita wa ame da to itte ita.',
            meaning: {
              en: 'The news said it will rain tomorrow.',
              vi: 'Bản tin nói ngày mai trời mưa.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'About tomorrow', vi: 'Về ngày mai' },
        lines: [
          {
            jp: 'ニュースで明日は雨が降ると言っていた。',
            romaji: 'Nyūsu de ashita wa ame ga furu to itte ita.',
            meaning: {
              en: 'The news said it will rain tomorrow.',
              vi: 'Bản tin nói ngày mai sẽ mưa.'
            }
          },
          {
            jp: 'でも、私はそんなに降らないと思う。',
            romaji: 'Demo, watashi wa sonna ni furanai to omou.',
            meaning: {
              en: "But I don't think it will rain that much.",
              vi: 'Nhưng tôi nghĩ sẽ không mưa nhiều đến vậy.'
            }
          },
          {
            jp: '社長は会議は午後に終わると言っていた。',
            romaji: 'Shachō wa kaigi wa gogo ni owaru to itte ita.',
            meaning: {
              en: 'The president said the meeting will end in the afternoon.',
              vi: 'Giám đốc nói cuộc họp sẽ kết thúc vào buổi chiều.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What did the news say?', vi: 'Bản tin đã nói gì?' },
            choices: [
              { id: 'a', label: { en: 'It will rain tomorrow', vi: 'Ngày mai sẽ mưa' } },
              { id: 'b', label: { en: 'It will be hot tomorrow', vi: 'Ngày mai sẽ nóng' } },
              { id: 'c', label: { en: 'It will snow tomorrow', vi: 'Ngày mai sẽ có tuyết' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What does the writer think?', vi: 'Người viết nghĩ gì?' },
            choices: [
              {
                id: 'a',
                label: { en: 'It will rain a lot', vi: 'Trời sẽ mưa nhiều' }
              },
              {
                id: 'b',
                label: { en: 'It will not rain much', vi: 'Trời sẽ không mưa nhiều' }
              },
              { id: 'c', label: { en: 'The meeting is cancelled', vi: 'Cuộc họp bị hủy' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    title: {
      en: 'When … (〜とき)',
      vi: 'Khi … (〜とき)'
    },
    focus: {
      en: 'Connect two situations with とき, choosing a present or past clause for the right timing.',
      vi: 'Nối hai tình huống với とき, chọn mệnh đề hiện tại hay quá khứ để diễn đạt đúng thời điểm.'
    },
    vocab: [
      {
        kana: 'とき',
        kanji: '時',
        romaji: 'toki',
        meaning: { en: 'time, when', vi: 'lúc, khi' }
      },
      {
        kana: 'こども',
        kanji: '子供',
        romaji: 'kodomo',
        meaning: { en: 'child', vi: 'trẻ con' }
      },
      {
        kana: 'ひま',
        kanji: '暇',
        romaji: 'hima',
        meaning: { en: 'free time (な-adj)', vi: 'rảnh rỗi (tính từ -な)' }
      },
      {
        kana: 'ねる',
        kanji: '寝る',
        romaji: 'neru',
        meaning: { en: 'to sleep, to go to bed', vi: 'ngủ, đi ngủ' }
      },
      {
        kana: 'つかれる',
        kanji: '疲れる',
        romaji: 'tsukareru',
        meaning: { en: 'to get tired', vi: 'mệt' }
      },
      {
        kana: 'でかける',
        kanji: '出かける',
        romaji: 'dekakeru',
        meaning: { en: 'to go out', vi: 'đi ra ngoài' }
      },
      {
        kana: 'かさ',
        kanji: '傘',
        romaji: 'kasa',
        meaning: { en: 'umbrella', vi: 'cái ô' }
      },
      {
        kana: 'もつ',
        kanji: '持つ',
        romaji: 'motsu',
        meaning: { en: 'to hold, to carry', vi: 'cầm, mang' }
      },
      {
        kana: 'さびしい',
        kanji: '寂しい',
        romaji: 'sabishii',
        meaning: { en: 'lonely', vi: 'cô đơn, buồn' }
      },
      {
        kana: 'びょうき',
        kanji: '病気',
        romaji: 'byōki',
        meaning: { en: 'illness', vi: 'bệnh' }
      },
      {
        kana: 'こまる',
        kanji: '困る',
        romaji: 'komaru',
        meaning: { en: 'to be in trouble', vi: 'gặp khó khăn, bối rối' }
      },
      {
        kana: 'わかい',
        kanji: '若い',
        romaji: 'wakai',
        meaning: { en: 'young', vi: 'trẻ' }
      }
    ],
    grammar: [
      {
        pattern: 'V (じしょけい) とき',
        title: { en: 'When (about to / whenever) do', vi: 'Khi (sắp / mỗi khi) làm' },
        explanation: {
          en: 'A dictionary-form clause before とき means the main action happens before or at the same time as that action.',
          vi: 'Mệnh đề ở thể từ điển trước とき nghĩa là hành động chính xảy ra trước hoặc cùng lúc với hành động đó.'
        },
        examples: [
          {
            jp: '出かけるとき、傘を持つ。',
            romaji: 'Dekakeru toki, kasa o motsu.',
            meaning: {
              en: 'When I go out, I take an umbrella.',
              vi: 'Khi đi ra ngoài, tôi mang theo ô.'
            }
          },
          {
            jp: '暇なとき、よく映画を見る。',
            romaji: 'Hima na toki, yoku eiga o miru.',
            meaning: {
              en: 'When I have free time, I often watch movies.',
              vi: 'Khi rảnh, tôi hay xem phim.'
            }
          }
        ]
      },
      {
        pattern: 'V〜たとき',
        title: { en: 'When (after) did', vi: 'Khi (sau khi) đã làm' },
        explanation: {
          en: 'A past-form (〜た) clause before とき means the main action happens after that action is completed.',
          vi: 'Mệnh đề ở thể quá khứ (〜た) trước とき nghĩa là hành động chính xảy ra sau khi hành động đó hoàn tất.'
        },
        examples: [
          {
            jp: 'うちに帰ったとき、すぐ寝た。',
            romaji: 'Uchi ni kaetta toki, sugu neta.',
            meaning: {
              en: 'When I got home, I went to bed right away.',
              vi: 'Khi về đến nhà, tôi đi ngủ ngay.'
            }
          },
          {
            jp: '友達に会ったとき、その話を聞いた。',
            romaji: 'Tomodachi ni atta toki, sono hanashi o kiita.',
            meaning: {
              en: 'When I met my friend, I heard that story.',
              vi: 'Khi gặp bạn, tôi đã nghe câu chuyện đó.'
            }
          }
        ]
      },
      {
        pattern: 'N の とき / い-adj とき',
        title: { en: 'とき with nouns & adjectives', vi: 'とき với danh từ & tính từ' },
        explanation: {
          en: 'Nouns take の before とき (子供のとき). い-adjectives attach directly; な-adjectives add な.',
          vi: 'Danh từ cần の trước とき (子供のとき). Tính từ -い gắn trực tiếp; tính từ -な thêm な.'
        },
        examples: [
          {
            jp: '子供のとき、よく泣いた。',
            romaji: 'Kodomo no toki, yoku naita.',
            meaning: { en: 'When I was a child, I cried a lot.', vi: 'Hồi nhỏ, tôi hay khóc.' }
          },
          {
            jp: '一人のとき、少し寂しい。',
            romaji: 'Hitori no toki, sukoshi sabishii.',
            meaning: {
              en: 'When I am alone, I feel a little lonely.',
              vi: 'Khi ở một mình, tôi hơi buồn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'When I was a child', vi: 'Hồi tôi còn nhỏ' },
        lines: [
          {
            jp: '子供のとき、私はとても元気だった。',
            romaji: 'Kodomo no toki, watashi wa totemo genki datta.',
            meaning: {
              en: 'When I was a child, I was very energetic.',
              vi: 'Hồi nhỏ, tôi rất khỏe khoắn.'
            }
          },
          {
            jp: '病気になったとき、母はいつもそばにいた。',
            romaji: 'Byōki ni natta toki, haha wa itsumo soba ni ita.',
            meaning: {
              en: 'When I got sick, my mother was always by my side.',
              vi: 'Khi tôi bị ốm, mẹ luôn ở bên cạnh.'
            }
          },
          {
            jp: '今も疲れたとき、子供のときを思い出す。',
            romaji: 'Ima mo tsukareta toki, kodomo no toki o omoidasu.',
            meaning: {
              en: 'Even now, when I am tired, I remember my childhood.',
              vi: 'Bây giờ, khi mệt, tôi vẫn nhớ về thời thơ ấu.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What was the writer like as a child?',
              vi: 'Hồi nhỏ người viết thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Very energetic', vi: 'Rất khỏe khoắn' } },
              { id: 'b', label: { en: 'Often sick', vi: 'Hay ốm' } },
              { id: 'c', label: { en: 'Very quiet', vi: 'Rất ít nói' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Who stayed by the writer when sick?',
              vi: 'Ai ở bên người viết khi ốm?'
            },
            choices: [
              { id: 'a', label: { en: 'A friend', vi: 'Một người bạn' } },
              { id: 'b', label: { en: 'The mother', vi: 'Người mẹ' } },
              { id: 'c', label: { en: 'A teacher', vi: 'Một giáo viên' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-5',
    number: 5,
    title: {
      en: 'Conditional 〜たら (if / when)',
      vi: 'Điều kiện 〜たら (nếu / khi)'
    },
    focus: {
      en: 'Use 〜たら for "if" hypotheticals and for "when / after" something definitely happens.',
      vi: 'Dùng 〜たら cho giả định "nếu" và cho "khi / sau khi" điều gì đó chắc chắn xảy ra.'
    },
    vocab: [
      {
        kana: 'もし',
        romaji: 'moshi',
        meaning: { en: 'if (hypothetical)', vi: 'nếu (giả định)' }
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
        kana: 'やすみ',
        kanji: '休み',
        romaji: 'yasumi',
        meaning: { en: 'holiday, day off', vi: 'kỳ nghỉ, ngày nghỉ' }
      },
      {
        kana: 'ふる',
        kanji: '降る',
        romaji: 'furu',
        meaning: { en: 'to fall (rain, snow)', vi: 'rơi (mưa, tuyết)' }
      },
      {
        kana: 'つく',
        kanji: '着く',
        romaji: 'tsuku',
        meaning: { en: 'to arrive', vi: 'đến nơi' }
      },
      {
        kana: 'でんわ',
        kanji: '電話',
        romaji: 'denwa',
        meaning: { en: 'telephone, phone call', vi: 'điện thoại, cuộc gọi' }
      },
      {
        kana: 'れんらく',
        kanji: '連絡',
        romaji: 'renraku',
        meaning: { en: 'contact, getting in touch', vi: 'sự liên lạc' }
      },
      {
        kana: 'かいもの',
        kanji: '買い物',
        romaji: 'kaimono',
        meaning: { en: 'shopping', vi: 'việc mua sắm' }
      },
      {
        kana: 'やめる',
        romaji: 'yameru',
        meaning: { en: 'to quit, to stop', vi: 'bỏ, dừng' }
      },
      {
        kana: 'ほしい',
        kanji: '欲しい',
        romaji: 'hoshii',
        meaning: { en: 'to want (い-adj)', vi: 'muốn có (tính từ -い)' }
      },
      {
        kana: 'ゆっくり',
        romaji: 'yukkuri',
        meaning: { en: 'slowly, leisurely', vi: 'thong thả, từ từ' }
      }
    ],
    grammar: [
      {
        pattern: 'V〜たら',
        title: { en: 'Forming 〜たら', vi: 'Cách tạo 〜たら' },
        explanation: {
          en: 'Add ら to the plain past form: 行った → 行ったら, 来た → 来たら, い-adj 高かった → 高かったら, N だった → だったら.',
          vi: 'Thêm ら vào thể quá khứ thông thường: 行った → 行ったら, 来た → 来たら, tính từ -い 高かった → 高かったら, N だった → だったら.'
        },
        examples: [
          {
            jp: '駅に着いたら、電話する。',
            romaji: 'Eki ni tsuitara, denwa suru.',
            meaning: {
              en: "When I arrive at the station, I'll call you.",
              vi: 'Khi đến ga, tôi sẽ gọi điện.'
            }
          },
          {
            jp: '高かったら、買わない。',
            romaji: 'Takakattara, kawanai.',
            meaning: { en: "If it's expensive, I won't buy it.", vi: 'Nếu đắt thì tôi không mua.' }
          }
        ]
      },
      {
        pattern: 'もし〜たら',
        title: { en: 'Hypothetical "if" (もし〜たら)', vi: 'Giả định "nếu" (もし〜たら)' },
        explanation: {
          en: 'もし at the front signals a hypothetical situation. 〜たら then states what you would do.',
          vi: 'もし ở đầu câu báo hiệu một tình huống giả định. 〜たら sau đó nêu điều bạn sẽ làm.'
        },
        examples: [
          {
            jp: 'もしお金があったら、旅行に行きたい。',
            romaji: 'Moshi okane ga attara, ryokō ni ikitai.',
            meaning: {
              en: 'If I had money, I would like to travel.',
              vi: 'Nếu có tiền, tôi muốn đi du lịch.'
            }
          },
          {
            jp: 'もし雨が降ったら、出かけない。',
            romaji: 'Moshi ame ga futtara, dekakenai.',
            meaning: {
              en: "If it rains, I won't go out.",
              vi: 'Nếu trời mưa thì tôi không ra ngoài.'
            }
          }
        ]
      },
      {
        pattern: 'V〜たら、(けっか)',
        title: { en: '"When / after" something definite', vi: '"Khi / sau khi" điều chắc chắn' },
        explanation: {
          en: '〜たら also covers a definite future event: once the first thing happens, the second follows.',
          vi: '〜たら cũng diễn đạt một sự việc tương lai chắc chắn: khi việc thứ nhất xảy ra thì việc thứ hai tiếp theo.'
        },
        examples: [
          {
            jp: '休みになったら、ゆっくり休む。',
            romaji: 'Yasumi ni nattara, yukkuri yasumu.',
            meaning: {
              en: 'When the holidays come, I will rest leisurely.',
              vi: 'Khi đến kỳ nghỉ, tôi sẽ nghỉ ngơi thong thả.'
            }
          },
          {
            jp: '買い物が終わったら、連絡する。',
            romaji: 'Kaimono ga owattara, renraku suru.',
            meaning: {
              en: "After I finish shopping, I'll get in touch.",
              vi: 'Sau khi mua sắm xong, tôi sẽ liên lạc.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Plans for the holiday', vi: 'Kế hoạch cho kỳ nghỉ' },
        lines: [
          {
            jp: '来月、長い休みになる。',
            romaji: 'Raigetsu, nagai yasumi ni naru.',
            meaning: {
              en: 'Next month there will be a long holiday.',
              vi: 'Tháng sau sẽ có một kỳ nghỉ dài.'
            }
          },
          {
            jp: 'もしお金があったら、海の近くを旅行したい。',
            romaji: 'Moshi okane ga attara, umi no chikaku o ryokō shitai.',
            meaning: {
              en: 'If I have money, I want to travel near the sea.',
              vi: 'Nếu có tiền, tôi muốn đi du lịch gần biển.'
            }
          },
          {
            jp: '駅に着いたら、友達に電話する。',
            romaji: 'Eki ni tsuitara, tomodachi ni denwa suru.',
            meaning: {
              en: "When I arrive at the station, I'll call my friend.",
              vi: 'Khi đến ga, tôi sẽ gọi điện cho bạn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the writer want to do if they have money?',
              vi: 'Nếu có tiền người viết muốn làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Travel near the sea', vi: 'Du lịch gần biển' } },
              { id: 'b', label: { en: 'Buy a new car', vi: 'Mua xe mới' } },
              { id: 'c', label: { en: 'Stay home and rest', vi: 'Ở nhà nghỉ ngơi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What will the writer do after arriving at the station?',
              vi: 'Sau khi đến ga người viết sẽ làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Go shopping', vi: 'Đi mua sắm' } },
              { id: 'b', label: { en: 'Call a friend', vi: 'Gọi điện cho bạn' } },
              { id: 'c', label: { en: 'Take a nap', vi: 'Ngủ một giấc' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-6',
    number: 6,
    title: {
      en: 'Conditional 〜と (natural result)',
      vi: 'Điều kiện 〜と (kết quả tất yếu)'
    },
    focus: {
      en: 'Use 〜と for natural, inevitable results: directions, instructions, and facts of nature.',
      vi: 'Dùng 〜と cho kết quả tự nhiên, tất yếu: chỉ đường, hướng dẫn và quy luật tự nhiên.'
    },
    vocab: [
      {
        kana: 'みち',
        kanji: '道',
        romaji: 'michi',
        meaning: { en: 'road, street', vi: 'con đường' }
      },
      {
        kana: 'みぎ',
        kanji: '右',
        romaji: 'migi',
        meaning: { en: 'right', vi: 'bên phải' }
      },
      {
        kana: 'ひだり',
        kanji: '左',
        romaji: 'hidari',
        meaning: { en: 'left', vi: 'bên trái' }
      },
      {
        kana: 'まがる',
        kanji: '曲がる',
        romaji: 'magaru',
        meaning: { en: 'to turn', vi: 'rẽ' }
      },
      {
        kana: 'まっすぐ',
        romaji: 'massugu',
        meaning: { en: 'straight ahead', vi: 'thẳng' }
      },
      {
        kana: 'おす',
        kanji: '押す',
        romaji: 'osu',
        meaning: { en: 'to push, to press', vi: 'ấn, đẩy' }
      },
      {
        kana: 'ボタン',
        romaji: 'botan',
        meaning: { en: 'button', vi: 'nút bấm' }
      },
      {
        kana: 'はる',
        kanji: '春',
        romaji: 'haru',
        meaning: { en: 'spring (season)', vi: 'mùa xuân' }
      },
      {
        kana: 'さく',
        kanji: '咲く',
        romaji: 'saku',
        meaning: { en: 'to bloom', vi: 'nở (hoa)' }
      },
      {
        kana: 'はな',
        kanji: '花',
        romaji: 'hana',
        meaning: { en: 'flower', vi: 'hoa' }
      },
      {
        kana: 'あく',
        kanji: '開く',
        romaji: 'aku',
        meaning: { en: 'to open (intransitive)', vi: 'mở ra (tự động)' }
      },
      {
        kana: 'こうさてん',
        kanji: '交差点',
        romaji: 'kōsaten',
        meaning: { en: 'intersection', vi: 'ngã tư' }
      }
    ],
    grammar: [
      {
        pattern: 'V (じしょけい) と、(しぜんな けっか)',
        title: { en: 'Natural result (〜と)', vi: 'Kết quả tự nhiên (〜と)' },
        explanation: {
          en: 'A dictionary-form clause + と means "whenever / if A, then B always happens". The result is automatic and not a personal choice.',
          vi: 'Mệnh đề thể từ điển + と nghĩa là "mỗi khi / nếu A thì luôn xảy ra B". Kết quả mang tính tự động, không phải lựa chọn cá nhân.'
        },
        examples: [
          {
            jp: '春になると、花が咲く。',
            romaji: 'Haru ni naru to, hana ga saku.',
            meaning: {
              en: 'When spring comes, the flowers bloom.',
              vi: 'Khi mùa xuân đến, hoa nở.'
            }
          },
          {
            jp: 'ボタンを押すと、ドアが開く。',
            romaji: 'Botan o osu to, doa ga aku.',
            meaning: {
              en: 'When you press the button, the door opens.',
              vi: 'Khi bạn ấn nút, cửa mở ra.'
            }
          }
        ]
      },
      {
        pattern: 'V〜と、(みちあんない)',
        title: { en: 'Giving directions (〜と)', vi: 'Chỉ đường (〜と)' },
        explanation: {
          en: '〜と is the standard way to describe a route, because the result of each step follows naturally.',
          vi: '〜と là cách chuẩn để mô tả lộ trình, vì kết quả của mỗi bước nối tiếp một cách tự nhiên.'
        },
        examples: [
          {
            jp: 'この道をまっすぐ行くと、駅がある。',
            romaji: 'Kono michi o massugu iku to, eki ga aru.',
            meaning: {
              en: 'If you go straight along this road, there is a station.',
              vi: 'Đi thẳng con đường này thì có nhà ga.'
            }
          },
          {
            jp: '交差点を右に曲がると、銀行が見える。',
            romaji: 'Kōsaten o migi ni magaru to, ginkō ga mieru.',
            meaning: {
              en: 'If you turn right at the intersection, you can see the bank.',
              vi: 'Rẽ phải ở ngã tư thì thấy ngân hàng.'
            }
          }
        ]
      },
      {
        pattern: 'い-adj / N だ + と',
        title: { en: '〜と with states & facts', vi: '〜と với trạng thái & sự thật' },
        explanation: {
          en: 'い-adjectives attach directly to と; nouns and な-adjectives take だ. It expresses a general truth or tendency.',
          vi: 'Tính từ -い gắn trực tiếp với と; danh từ và tính từ -な dùng だ. Nó diễn đạt một sự thật hay xu hướng chung.'
        },
        examples: [
          {
            jp: '夜になると、この道は寂しい。',
            romaji: 'Yoru ni naru to, kono michi wa sabishii.',
            meaning: {
              en: 'When night falls, this road becomes lonely.',
              vi: 'Khi đêm xuống, con đường này trở nên vắng vẻ.'
            }
          },
          {
            jp: '暑いと、よく水を飲む。',
            romaji: 'Atsui to, yoku mizu o nomu.',
            meaning: {
              en: 'When it is hot, I drink a lot of water.',
              vi: 'Khi nóng, tôi hay uống nước.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The way to the park', vi: 'Đường đến công viên' },
        lines: [
          {
            jp: 'この道をまっすぐ行くと、交差点がある。',
            romaji: 'Kono michi o massugu iku to, kōsaten ga aru.',
            meaning: {
              en: 'If you go straight along this road, there is an intersection.',
              vi: 'Đi thẳng con đường này thì có một ngã tư.'
            }
          },
          {
            jp: 'そこを左に曲がると、公園が見える。',
            romaji: 'Soko o hidari ni magaru to, kōen ga mieru.',
            meaning: {
              en: 'If you turn left there, you can see the park.',
              vi: 'Rẽ trái ở đó thì thấy công viên.'
            }
          },
          {
            jp: '春になると、公園の花がきれいに咲く。',
            romaji: 'Haru ni naru to, kōen no hana ga kirei ni saku.',
            meaning: {
              en: 'When spring comes, the flowers in the park bloom beautifully.',
              vi: 'Khi xuân đến, hoa trong công viên nở rất đẹp.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What do you do at the intersection?', vi: 'Ở ngã tư thì làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Turn left', vi: 'Rẽ trái' } },
              { id: 'b', label: { en: 'Turn right', vi: 'Rẽ phải' } },
              { id: 'c', label: { en: 'Go straight', vi: 'Đi thẳng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What happens in spring?', vi: 'Mùa xuân thì điều gì xảy ra?' },
            choices: [
              { id: 'a', label: { en: 'The park closes', vi: 'Công viên đóng cửa' } },
              { id: 'b', label: { en: 'The flowers bloom', vi: 'Hoa nở' } },
              { id: 'c', label: { en: 'It rains a lot', vi: 'Trời mưa nhiều' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-7',
    number: 7,
    title: {
      en: 'Conditional 〜ば (if)',
      vi: 'Điều kiện 〜ば (nếu)'
    },
    focus: {
      en: 'Use the 〜ば conditional, including the negative 〜なければ, to state conditions and give advice.',
      vi: 'Dùng điều kiện 〜ば, bao gồm phủ định 〜なければ, để nêu điều kiện và đưa lời khuyên.'
    },
    vocab: [
      {
        kana: 'やすむ',
        kanji: '休む',
        romaji: 'yasumu',
        meaning: { en: 'to rest, to take a break', vi: 'nghỉ ngơi' }
      },
      {
        kana: 'がんばる',
        kanji: '頑張る',
        romaji: 'ganbaru',
        meaning: { en: 'to do one\u2019s best', vi: 'cố gắng' }
      },
      {
        kana: 'れんしゅう',
        kanji: '練習',
        romaji: 'renshū',
        meaning: { en: 'practice', vi: 'luyện tập' }
      },
      {
        kana: 'はやい',
        kanji: '早い',
        romaji: 'hayai',
        meaning: { en: 'early', vi: 'sớm' }
      },
      {
        kana: 'まにあう',
        kanji: '間に合う',
        romaji: 'maniau',
        meaning: { en: 'to be in time', vi: 'kịp giờ' }
      },
      {
        kana: 'くすり',
        kanji: '薬',
        romaji: 'kusuri',
        meaning: { en: 'medicine', vi: 'thuốc' }
      },
      {
        kana: 'なおる',
        kanji: '治る',
        romaji: 'naoru',
        meaning: { en: 'to get well, to heal', vi: 'khỏi bệnh, lành' }
      },
      {
        kana: 'うんどう',
        kanji: '運動',
        romaji: 'undō',
        meaning: { en: 'exercise', vi: 'vận động, thể dục' }
      },
      {
        kana: 'けんこう',
        kanji: '健康',
        romaji: 'kenkō',
        meaning: { en: 'health (な-adj)', vi: 'sức khỏe (tính từ -な)' }
      },
      {
        kana: 'もんだい',
        kanji: '問題',
        romaji: 'mondai',
        meaning: { en: 'problem, question', vi: 'vấn đề, câu hỏi' }
      },
      {
        kana: 'できる',
        romaji: 'dekiru',
        meaning: { en: 'to be able to', vi: 'có thể làm được' }
      },
      {
        kana: 'まいあさ',
        kanji: '毎朝',
        romaji: 'maiasa',
        meaning: { en: 'every morning', vi: 'mỗi sáng' }
      }
    ],
    grammar: [
      {
        pattern: 'V〜ば',
        title: { en: 'Forming 〜ば', vi: 'Cách tạo 〜ば' },
        explanation: {
          en: 'Change the final -u of a verb to -eba: 行く → 行けば, 食べる → 食べれば, する → すれば. It states a condition that leads to a result.',
          vi: 'Đổi âm -u cuối động từ thành -eba: 行く → 行けば, 食べる → 食べれば, する → すれば. Nó nêu một điều kiện dẫn đến kết quả.'
        },
        examples: [
          {
            jp: '毎日練習すれば、上手になる。',
            romaji: 'Mainichi renshū sureba, jōzu ni naru.',
            meaning: {
              en: 'If you practice every day, you will get good.',
              vi: 'Nếu luyện tập mỗi ngày, bạn sẽ giỏi lên.'
            }
          },
          {
            jp: '薬を飲めば、すぐ治る。',
            romaji: 'Kusuri o nomeba, sugu naoru.',
            meaning: {
              en: 'If you take the medicine, you will get well soon.',
              vi: 'Nếu uống thuốc, bạn sẽ nhanh khỏi.'
            }
          }
        ]
      },
      {
        pattern: 'V〜なければ',
        title: { en: 'Negative condition (〜なければ)', vi: 'Điều kiện phủ định (〜なければ)' },
        explanation: {
          en: 'Drop い from the 〜ない form and add ければ: 行かない → 行かなければ ("if you don\u2019t go"). It often pairs with ならない/だめ for obligation.',
          vi: 'Bỏ い của thể 〜ない rồi thêm ければ: 行かない → 行かなければ ("nếu không đi"). Nó thường đi với ならない/だめ để diễn đạt nghĩa vụ.'
        },
        examples: [
          {
            jp: '早く行かなければ、間に合わない。',
            romaji: 'Hayaku ikanakereba, maniawanai.',
            meaning: {
              en: "If you don't go early, you won't make it in time.",
              vi: 'Nếu không đi sớm thì sẽ không kịp.'
            }
          },
          {
            jp: '今日は勉強しなければならない。',
            romaji: 'Kyō wa benkyō shinakereba naranai.',
            meaning: { en: 'I have to study today.', vi: 'Hôm nay tôi phải học.' }
          }
        ]
      },
      {
        pattern: 'い-adj〜ければ / N・な-adj なら',
        title: { en: '〜ば with adjectives & nouns', vi: '〜ば với tính từ & danh từ' },
        explanation: {
          en: 'い-adjectives drop い and add ければ (安い → 安ければ). Nouns and な-adjectives use なら as their 〜ば equivalent.',
          vi: 'Tính từ -い bỏ い và thêm ければ (安い → 安ければ). Danh từ và tính từ -な dùng なら làm dạng tương đương của 〜ば.'
        },
        examples: [
          {
            jp: '安ければ、買う。',
            romaji: 'Yasukereba, kau.',
            meaning: { en: "If it's cheap, I'll buy it.", vi: 'Nếu rẻ thì tôi mua.' }
          },
          {
            jp: '体が健康なら、何でもできる。',
            romaji: 'Karada ga kenkō nara, nan demo dekiru.',
            meaning: {
              en: 'If your body is healthy, you can do anything.',
              vi: 'Nếu cơ thể khỏe mạnh thì làm gì cũng được.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Advice for good health', vi: 'Lời khuyên để khỏe mạnh' },
        lines: [
          {
            jp: '毎朝運動すれば、健康になる。',
            romaji: 'Maiasa undō sureba, kenkō ni naru.',
            meaning: {
              en: 'If you exercise every morning, you will become healthy.',
              vi: 'Nếu tập thể dục mỗi sáng, bạn sẽ khỏe mạnh.'
            }
          },
          {
            jp: 'でも、疲れたときは休まなければならない。',
            romaji: 'Demo, tsukareta toki wa yasumanakereba naranai.',
            meaning: {
              en: 'But when you are tired, you must rest.',
              vi: 'Nhưng khi mệt thì bạn phải nghỉ ngơi.'
            }
          },
          {
            jp: '問題があれば、すぐ医者に行く。',
            romaji: 'Mondai ga areba, sugu isha ni iku.',
            meaning: {
              en: 'If there is a problem, go to the doctor right away.',
              vi: 'Nếu có vấn đề, hãy đi bác sĩ ngay.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What makes you healthy?', vi: 'Điều gì giúp bạn khỏe mạnh?' },
            choices: [
              { id: 'a', label: { en: 'Exercising every morning', vi: 'Tập thể dục mỗi sáng' } },
              { id: 'b', label: { en: 'Sleeping all day', vi: 'Ngủ cả ngày' } },
              { id: 'c', label: { en: 'Eating a lot', vi: 'Ăn thật nhiều' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What must you do when tired?', vi: 'Khi mệt thì phải làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Keep working', vi: 'Tiếp tục làm việc' } },
              { id: 'b', label: { en: 'Rest', vi: 'Nghỉ ngơi' } },
              { id: 'c', label: { en: 'Exercise more', vi: 'Tập thêm' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-8',
    number: 8,
    title: {
      en: 'Conditional 〜なら & Comparing the Four',
      vi: 'Điều kiện 〜なら & So sánh bốn cách'
    },
    focus: {
      en: 'Use 〜なら to respond to a topic, and learn how たら, と, ば, and なら differ.',
      vi: 'Dùng 〜なら để đáp lại một chủ đề, và phân biệt たら, と, ば, なら khác nhau thế nào.'
    },
    vocab: [
      {
        kana: 'なら',
        romaji: 'nara',
        meaning: { en: 'if (it is the case that)', vi: 'nếu (là trường hợp)' }
      },
      {
        kana: 'おんせん',
        kanji: '温泉',
        romaji: 'onsen',
        meaning: { en: 'hot spring', vi: 'suối nước nóng' }
      },
      {
        kana: 'かんこう',
        kanji: '観光',
        romaji: 'kankō',
        meaning: { en: 'sightseeing', vi: 'tham quan' }
      },
      {
        kana: 'すすめる',
        kanji: '勧める',
        romaji: 'susumeru',
        meaning: { en: 'to recommend', vi: 'gợi ý, khuyên dùng' }
      },
      {
        kana: 'えらぶ',
        kanji: '選ぶ',
        romaji: 'erabu',
        meaning: { en: 'to choose', vi: 'chọn' }
      },
      {
        kana: 'じしょ',
        kanji: '辞書',
        romaji: 'jisho',
        meaning: { en: 'dictionary', vi: 'từ điển' }
      },
      {
        kana: 'パソコン',
        romaji: 'pasokon',
        meaning: { en: 'computer', vi: 'máy tính' }
      },
      {
        kana: 'せつめい',
        kanji: '説明',
        romaji: 'setsumei',
        meaning: { en: 'explanation', vi: 'lời giải thích' }
      },
      {
        kana: 'かんたん',
        kanji: '簡単',
        romaji: 'kantan',
        meaning: { en: 'easy, simple (な-adj)', vi: 'đơn giản, dễ (tính từ -な)' }
      },
      {
        kana: 'ばしょ',
        kanji: '場所',
        romaji: 'basho',
        meaning: { en: 'place, location', vi: 'địa điểm' }
      },
      {
        kana: 'きせつ',
        kanji: '季節',
        romaji: 'kisetsu',
        meaning: { en: 'season', vi: 'mùa' }
      },
      {
        kana: 'べんり',
        kanji: '便利',
        romaji: 'benri',
        meaning: { en: 'convenient (な-adj)', vi: 'tiện lợi (tính từ -な)' }
      }
    ],
    grammar: [
      {
        pattern: 'N なら',
        title: { en: 'If it\u2019s about N (N なら)', vi: 'Nếu nói về N (N なら)' },
        explanation: {
          en: 'なら picks up a topic someone just raised and gives advice about it: "if it\u2019s N (you\u2019re talking about), then …".',
          vi: 'なら đón lấy chủ đề mà ai đó vừa nêu và đưa lời khuyên về nó: "nếu là N (mà bạn đang nói tới) thì …".'
        },
        examples: [
          {
            jp: '旅行なら、温泉がいい。',
            romaji: 'Ryokō nara, onsen ga ii.',
            meaning: {
              en: "If it's about traveling, a hot spring is nice.",
              vi: 'Nếu là du lịch thì suối nước nóng hay đấy.'
            }
          },
          {
            jp: 'パソコンなら、あの店が安い。',
            romaji: 'Pasokon nara, ano mise ga yasui.',
            meaning: {
              en: 'If it\u2019s computers, that shop is cheap.',
              vi: 'Nếu là máy tính thì cửa hàng kia rẻ.'
            }
          }
        ]
      },
      {
        pattern: 'V (ふつうけい) なら',
        title: { en: '〜なら after a verb', vi: '〜なら sau động từ' },
        explanation: {
          en: 'After a plain-form verb, なら means "if you are going to / if it is true that". It often gives advice for that situation.',
          vi: 'Sau động từ thể thông thường, なら nghĩa là "nếu định / nếu quả thật". Nó thường đưa lời khuyên cho tình huống đó.'
        },
        examples: [
          {
            jp: '観光するなら、春が一番いい。',
            romaji: 'Kankō suru nara, haru ga ichiban ii.',
            meaning: {
              en: 'If you are going sightseeing, spring is best.',
              vi: 'Nếu định đi tham quan thì mùa xuân là tốt nhất.'
            }
          },
          {
            jp: '辞書を買うなら、これを勧める。',
            romaji: 'Jisho o kau nara, kore o susumeru.',
            meaning: {
              en: 'If you are going to buy a dictionary, I recommend this one.',
              vi: 'Nếu định mua từ điển, tôi gợi ý cuốn này.'
            }
          }
        ]
      },
      {
        pattern: 'たら・と・ば・なら',
        title: { en: 'Comparing the four conditionals', vi: 'So sánh bốn cách điều kiện' },
        explanation: {
          en: 'と = automatic natural result; たら = "once/after" a specific event, also general "if"; ば = pure condition, good for advice; なら = responding to a stated topic.',
          vi: 'と = kết quả tự nhiên tất yếu; たら = "khi/sau khi" một sự việc cụ thể, cũng dùng làm "nếu" chung; ば = điều kiện thuần túy, hợp để khuyên; なら = đáp lại một chủ đề đã nêu.'
        },
        examples: [
          {
            jp: '駅に着いたら、電話する。',
            romaji: 'Eki ni tsuitara, denwa suru.',
            meaning: {
              en: '(たら) When I arrive at the station, I will call.',
              vi: '(たら) Khi đến ga, tôi sẽ gọi điện.'
            }
          },
          {
            jp: '日本へ行くなら、この季節がいい。',
            romaji: 'Nihon e iku nara, kono kisetsu ga ii.',
            meaning: {
              en: '(なら) If you are going to Japan, this season is good.',
              vi: '(なら) Nếu định đi Nhật thì mùa này là đẹp.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Where should I travel?', vi: 'Nên đi du lịch đâu?' },
        lines: [
          {
            jp: '日本を旅行するなら、春か秋がいい。',
            romaji: 'Nihon o ryokō suru nara, haru ka aki ga ii.',
            meaning: {
              en: 'If you travel in Japan, spring or autumn is good.',
              vi: 'Nếu du lịch Nhật Bản, mùa xuân hoặc mùa thu là đẹp.'
            }
          },
          {
            jp: 'ゆっくり休みたいなら、温泉を勧める。',
            romaji: 'Yukkuri yasumitai nara, onsen o susumeru.',
            meaning: {
              en: 'If you want to rest leisurely, I recommend a hot spring.',
              vi: 'Nếu muốn nghỉ ngơi thong thả, tôi gợi ý suối nước nóng.'
            }
          },
          {
            jp: '場所を選んだら、すぐ連絡する。',
            romaji: 'Basho o erandara, sugu renraku suru.',
            meaning: {
              en: 'Once you choose a place, I will contact you right away.',
              vi: 'Khi chọn được địa điểm, tôi sẽ liên lạc ngay.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Which seasons are recommended for traveling in Japan?',
              vi: 'Mùa nào được gợi ý để du lịch Nhật Bản?'
            },
            choices: [
              { id: 'a', label: { en: 'Spring or autumn', vi: 'Mùa xuân hoặc mùa thu' } },
              { id: 'b', label: { en: 'Summer only', vi: 'Chỉ mùa hè' } },
              { id: 'c', label: { en: 'Winter only', vi: 'Chỉ mùa đông' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is recommended for a relaxing rest?',
              vi: 'Điều gì được gợi ý để nghỉ ngơi thư giãn?'
            },
            choices: [
              { id: 'a', label: { en: 'A hot spring', vi: 'Suối nước nóng' } },
              { id: 'b', label: { en: 'A big city', vi: 'Thành phố lớn' } },
              { id: 'c', label: { en: 'A long hike', vi: 'Chuyến leo núi dài' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
