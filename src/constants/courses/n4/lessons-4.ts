import type { Lesson } from '../types.ts';

export const n4LessonsD: Lesson[] = [
  {
    id: 'lesson-25',
    number: 25,
    title: {
      en: 'It Looks Like… (Appearance)',
      vi: 'Trông có vẻ… (Phán đoán qua vẻ ngoài)'
    },
    focus: {
      en: 'Guess from appearance with 〜そうだ (looks tasty, about to rain).',
      vi: 'Phán đoán qua vẻ ngoài với 〜そうだ (trông ngon, sắp mưa).'
    },
    vocab: [
      {
        kana: 'おいしい',
        romaji: 'oishii',
        meaning: { en: 'delicious', vi: 'ngon' }
      },
      {
        kana: 'あめ',
        kanji: '雨',
        romaji: 'ame',
        meaning: { en: 'rain', vi: 'mưa' }
      },
      {
        kana: 'ふる',
        kanji: '降る',
        romaji: 'furu',
        meaning: { en: 'to fall (rain/snow)', vi: 'rơi (mưa, tuyết)' }
      },
      {
        kana: 'たおれる',
        kanji: '倒れる',
        romaji: 'taoreru',
        meaning: { en: 'to fall over, collapse', vi: 'đổ, ngã' }
      },
      {
        kana: 'げんき',
        kanji: '元気',
        romaji: 'genki',
        meaning: { en: 'healthy, lively', vi: 'khỏe, vui vẻ' }
      },
      {
        kana: 'たいへん',
        kanji: '大変',
        romaji: 'taihen',
        meaning: { en: 'tough, hard', vi: 'vất vả, gay go' }
      },
      {
        kana: 'さびしい',
        kanji: '寂しい',
        romaji: 'sabishii',
        meaning: { en: 'lonely', vi: 'cô đơn, buồn' }
      },
      {
        kana: 'なきます',
        kanji: '泣きます',
        romaji: 'nakimasu',
        meaning: { en: 'to cry', vi: 'khóc' }
      },
      {
        kana: 'そら',
        kanji: '空',
        romaji: 'sora',
        meaning: { en: 'sky', vi: 'bầu trời' }
      },
      {
        kana: 'くもり',
        kanji: '曇り',
        romaji: 'kumori',
        meaning: { en: 'cloudy weather', vi: 'trời nhiều mây' }
      },
      {
        kana: 'ケーキ',
        romaji: 'kēki',
        meaning: { en: 'cake', vi: 'bánh kem' }
      },
      {
        kana: 'おちる',
        kanji: '落ちる',
        romaji: 'ochiru',
        meaning: { en: 'to drop, fall', vi: 'rơi, rớt' }
      }
    ],
    grammar: [
      {
        pattern: 'い-adj／な-adj ＋ そうだ',
        title: {
          en: 'Looks … (adjective + そうだ)',
          vi: 'Trông … (tính từ + そうだ)'
        },
        explanation: {
          en: 'Drop the final い of い-adjectives and add そう (おいしい → おいしそう); for な-adjectives just add そう. It expresses a guess from what you see. いい becomes よさそう.',
          vi: 'Bỏ い cuối của tính từ -い rồi thêm そう (おいしい → おいしそう); với tính từ -な chỉ cần thêm そう. Diễn đạt phán đoán từ vẻ ngoài. いい đổi thành よさそう.'
        },
        examples: [
          {
            jp: 'この ケーキは おいしそうです。',
            romaji: 'Kono kēki wa oishisō desu.',
            meaning: { en: 'This cake looks delicious.', vi: 'Cái bánh này trông ngon quá.' }
          },
          {
            jp: 'かれは げんきそうです。',
            romaji: 'Kare wa genkisō desu.',
            meaning: { en: 'He looks healthy.', vi: 'Anh ấy trông khỏe mạnh.' }
          }
        ]
      },
      {
        pattern: 'V ます-stem ＋ そうだ',
        title: {
          en: 'Looks about to … (verb + そうだ)',
          vi: 'Trông sắp … (động từ + そうだ)'
        },
        explanation: {
          en: 'Take the verb ます-stem and add そう to say something looks about to happen. 降ります → 降りそう (looks about to rain).',
          vi: 'Lấy gốc ます của động từ rồi thêm そう để nói điều gì đó sắp xảy ra. 降ります → 降りそう (trông sắp mưa).'
        },
        examples: [
          {
            jp: 'あめが ふりそうです。',
            romaji: 'Ame ga furisō desu.',
            meaning: { en: 'It looks like it is going to rain.', vi: 'Trời có vẻ sắp mưa.' }
          },
          {
            jp: 'コップが おちそうです。',
            romaji: 'Koppu ga ochisō desu.',
            meaning: { en: 'The cup looks about to fall.', vi: 'Cái cốc trông sắp rơi.' }
          }
        ]
      },
      {
        pattern: '〜そうな N／〜そうに V',
        title: {
          en: 'Modifying with そう (な / に)',
          vi: 'Bổ nghĩa với そう (な / に)'
        },
        explanation: {
          en: 'Before a noun use そうな (おいしそうな ケーキ); before a verb use そうに (さびしそうに 泣く). The negative of appearance そう is なさそう.',
          vi: 'Trước danh từ dùng そうな (おいしそうな ケーキ); trước động từ dùng そうに (さびしそうに 泣く). Phủ định của そう vẻ ngoài là なさそう.'
        },
        examples: [
          {
            jp: 'おいしそうな ケーキを かいました。',
            romaji: 'Oishisō na kēki o kaimashita.',
            meaning: {
              en: 'I bought a cake that looked delicious.',
              vi: 'Tôi đã mua một cái bánh trông ngon.'
            }
          },
          {
            jp: 'こどもが さびしそうに ないて います。',
            romaji: 'Kodomo ga sabishisō ni naite imasu.',
            meaning: {
              en: 'The child is crying as if lonely.',
              vi: 'Đứa trẻ đang khóc với vẻ buồn bã.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Before the rain', vi: 'Trước cơn mưa' },
        lines: [
          {
            jp: 'そらが くらくて、あめが ふりそうです。',
            romaji: 'Sora ga kurakute, ame ga furisō desu.',
            meaning: {
              en: 'The sky is dark and it looks like it will rain.',
              vi: 'Bầu trời tối lại, trông có vẻ sắp mưa.'
            }
          },
          {
            jp: 'テーブルの ケーキは とても おいしそうです。',
            romaji: 'Tēburu no kēki wa totemo oishisō desu.',
            meaning: {
              en: 'The cake on the table looks very delicious.',
              vi: 'Cái bánh trên bàn trông rất ngon.'
            }
          },
          {
            jp: 'おとうとは げんきそうですが、いもうとは さびしそうです。',
            romaji: 'Otōto wa genkisō desu ga, imōto wa sabishisō desu.',
            meaning: {
              en: 'My little brother looks lively, but my little sister looks lonely.',
              vi: 'Em trai trông vui vẻ, nhưng em gái lại có vẻ buồn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What does the weather look like?', vi: 'Thời tiết trông thế nào?' },
            choices: [
              { id: 'a', label: { en: 'About to rain', vi: 'Sắp mưa' } },
              { id: 'b', label: { en: 'Sunny', vi: 'Nắng đẹp' } },
              { id: 'c', label: { en: 'Snowing', vi: 'Đang có tuyết' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'How does the little sister look?', vi: 'Em gái trông thế nào?' },
            choices: [
              { id: 'a', label: { en: 'Lively', vi: 'Vui vẻ' } },
              { id: 'b', label: { en: 'Lonely', vi: 'Buồn bã' } },
              { id: 'c', label: { en: 'Angry', vi: 'Tức giận' } }
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
      en: 'I Heard That… (Hearsay)',
      vi: 'Nghe nói rằng… (Tin nghe lại)'
    },
    focus: {
      en: 'Report what you heard with 〜そうだ and 〜らしい (apparently).',
      vi: 'Truyền lại điều nghe được với 〜そうだ và 〜らしい (hình như, nghe đâu).'
    },
    vocab: [
      {
        kana: 'ニュース',
        romaji: 'nyūsu',
        meaning: { en: 'news', vi: 'tin tức' }
      },
      {
        kana: 'てんきよほう',
        kanji: '天気予報',
        romaji: 'tenki yohō',
        meaning: { en: 'weather forecast', vi: 'dự báo thời tiết' }
      },
      {
        kana: 'ゆき',
        kanji: '雪',
        romaji: 'yuki',
        meaning: { en: 'snow', vi: 'tuyết' }
      },
      {
        kana: 'じしん',
        kanji: '地震',
        romaji: 'jishin',
        meaning: { en: 'earthquake', vi: 'động đất' }
      },
      {
        kana: 'けっこんします',
        kanji: '結婚します',
        romaji: 'kekkon shimasu',
        meaning: { en: 'to get married', vi: 'kết hôn' }
      },
      {
        kana: 'にゅういんします',
        kanji: '入院します',
        romaji: 'nyūin shimasu',
        meaning: { en: 'to be hospitalized', vi: 'nhập viện' }
      },
      {
        kana: 'ゆうめい',
        kanji: '有名',
        romaji: 'yūmei',
        meaning: { en: 'famous', vi: 'nổi tiếng' }
      },
      {
        kana: 'みせ',
        kanji: '店',
        romaji: 'mise',
        meaning: { en: 'shop', vi: 'cửa hàng' }
      },
      {
        kana: 'おとこ',
        kanji: '男',
        romaji: 'otoko',
        meaning: { en: 'man, male', vi: 'đàn ông, nam' }
      },
      {
        kana: 'たいふう',
        kanji: '台風',
        romaji: 'taifū',
        meaning: { en: 'typhoon', vi: 'bão' }
      },
      {
        kana: 'きます',
        kanji: '来ます',
        romaji: 'kimasu',
        meaning: { en: 'to come', vi: 'đến' }
      },
      {
        kana: 'らいしゅう',
        kanji: '来週',
        romaji: 'raishū',
        meaning: { en: 'next week', vi: 'tuần sau' }
      }
    ],
    grammar: [
      {
        pattern: 'plain form ＋ そうだ',
        title: {
          en: 'I hear that … (hearsay そうだ)',
          vi: 'Nghe nói rằng … (そうだ truyền tin)'
        },
        explanation: {
          en: 'Add そうだ to a plain (dictionary) form to report information from another source. Unlike appearance そう, the verb/adjective keeps its full plain form (降るそうだ, not 降りそう).',
          vi: 'Thêm そうだ vào thể thường (thể từ điển) để truyền lại thông tin từ nguồn khác. Khác với そう vẻ ngoài, động/tính từ giữ nguyên thể thường (降るそうだ, không phải 降りそう).'
        },
        examples: [
          {
            jp: 'てんきよほうに よると、あした ゆきが ふるそうです。',
            romaji: 'Tenki yohō ni yoru to, ashita yuki ga furu sō desu.',
            meaning: {
              en: 'According to the forecast, it will snow tomorrow.',
              vi: 'Theo dự báo thời tiết, ngày mai trời sẽ có tuyết.'
            }
          },
          {
            jp: 'あの みせの ラーメンは おいしいそうです。',
            romaji: 'Ano mise no rāmen wa oishii sō desu.',
            meaning: {
              en: 'I hear the ramen at that shop is delicious.',
              vi: 'Nghe nói mì ramen ở quán đó ngon.'
            }
          }
        ]
      },
      {
        pattern: 'N／plain form ＋ らしい',
        title: {
          en: 'It seems / apparently (らしい)',
          vi: 'Hình như / nghe đâu (らしい)'
        },
        explanation: {
          en: 'らしい attaches to a noun or plain form and reports a conclusion based on what one heard or saw. With nouns and な-adjectives, drop だ (有名らしい).',
          vi: 'らしい gắn vào danh từ hoặc thể thường, truyền lại kết luận dựa trên điều nghe hoặc thấy. Với danh từ và tính từ -な, bỏ だ (有名らしい).'
        },
        examples: [
          {
            jp: 'たなかさんは らいしゅう けっこんするらしいです。',
            romaji: 'Tanaka-san wa raishū kekkon suru rashii desu.',
            meaning: {
              en: 'Apparently Mr. Tanaka is getting married next week.',
              vi: 'Hình như tuần sau anh Tanaka kết hôn.'
            }
          },
          {
            jp: 'あの みせは とても ゆうめいらしいです。',
            romaji: 'Ano mise wa totemo yūmei rashii desu.',
            meaning: {
              en: 'That shop is apparently very famous.',
              vi: 'Nghe nói cửa hàng đó rất nổi tiếng.'
            }
          }
        ]
      },
      {
        pattern: 'N に よると、〜そうだ',
        title: {
          en: 'According to … (に よると)',
          vi: 'Theo … (に よると)'
        },
        explanation: {
          en: 'Use 〜に よると to name the source of the information, usually paired with hearsay そうだ at the end of the sentence.',
          vi: 'Dùng 〜に よると để nêu nguồn thông tin, thường đi cùng そうだ truyền tin ở cuối câu.'
        },
        examples: [
          {
            jp: 'ニュースに よると、らいしゅう たいふうが くるそうです。',
            romaji: 'Nyūsu ni yoru to, raishū taifū ga kuru sō desu.',
            meaning: {
              en: 'According to the news, a typhoon is coming next week.',
              vi: 'Theo tin tức, tuần sau sẽ có bão.'
            }
          },
          {
            jp: 'ともだちに よると、かれは にゅういんしたらしいです。',
            romaji: 'Tomodachi ni yoru to, kare wa nyūin shita rashii desu.',
            meaning: {
              en: 'According to my friend, he was hospitalized.',
              vi: 'Theo lời bạn tôi, anh ấy đã nhập viện.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Rumors at work', vi: 'Tin đồn ở chỗ làm' },
        lines: [
          {
            jp: 'てんきよほうに よると、あした ゆきが ふるそうです。',
            romaji: 'Tenki yohō ni yoru to, ashita yuki ga furu sō desu.',
            meaning: {
              en: 'According to the forecast, it will snow tomorrow.',
              vi: 'Theo dự báo thời tiết, ngày mai trời có tuyết.'
            }
          },
          {
            jp: 'それから、たなかさんは らいしゅう けっこんするらしいです。',
            romaji: 'Sorekara, Tanaka-san wa raishū kekkon suru rashii desu.',
            meaning: {
              en: 'Also, apparently Mr. Tanaka is getting married next week.',
              vi: 'Ngoài ra, hình như tuần sau anh Tanaka sẽ kết hôn.'
            }
          },
          {
            jp: 'えきの まえの あたらしい みせは とても ゆうめいらしいです。',
            romaji: 'Eki no mae no atarashii mise wa totemo yūmei rashii desu.',
            meaning: {
              en: 'The new shop in front of the station is apparently very famous.',
              vi: 'Cửa hàng mới trước nhà ga nghe đâu rất nổi tiếng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What will the weather be tomorrow?',
              vi: 'Ngày mai thời tiết sẽ thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'It will snow', vi: 'Trời có tuyết' } },
              { id: 'b', label: { en: 'It will be sunny', vi: 'Trời nắng' } },
              { id: 'c', label: { en: 'A typhoon will come', vi: 'Có bão' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is said about Mr. Tanaka?',
              vi: 'Người ta nói gì về anh Tanaka?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'He is getting married next week', vi: 'Tuần sau anh ấy kết hôn' }
              },
              { id: 'b', label: { en: 'He was hospitalized', vi: 'Anh ấy nhập viện' } },
              { id: 'c', label: { en: 'He opened a shop', vi: 'Anh ấy mở cửa hàng' } }
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
      en: 'It Seems Like… (ようだ / みたい)',
      vi: 'Có vẻ như… (ようだ / みたい)'
    },
    focus: {
      en: 'Express resemblance and personal guesses with 〜ようだ and 〜みたい.',
      vi: 'Diễn đạt sự giống nhau và phán đoán với 〜ようだ và 〜みたい.'
    },
    vocab: [
      {
        kana: 'かぜ',
        kanji: '風邪',
        romaji: 'kaze',
        meaning: { en: 'a cold (illness)', vi: 'cảm cúm' }
      },
      {
        kana: 'ひきます',
        kanji: '引きます',
        romaji: 'hikimasu',
        meaning: { en: 'to catch (a cold)', vi: 'bị (cảm)' }
      },
      {
        kana: 'ねつ',
        kanji: '熱',
        romaji: 'netsu',
        meaning: { en: 'fever', vi: 'sốt' }
      },
      {
        kana: 'るす',
        kanji: '留守',
        romaji: 'rusu',
        meaning: { en: 'absence, not home', vi: 'vắng nhà' }
      },
      {
        kana: 'ゆめ',
        kanji: '夢',
        romaji: 'yume',
        meaning: { en: 'dream', vi: 'giấc mơ' }
      },
      {
        kana: 'てんし',
        kanji: '天使',
        romaji: 'tenshi',
        meaning: { en: 'angel', vi: 'thiên thần' }
      },
      {
        kana: 'こえ',
        kanji: '声',
        romaji: 'koe',
        meaning: { en: 'voice', vi: 'giọng nói' }
      },
      {
        kana: 'あじ',
        kanji: '味',
        romaji: 'aji',
        meaning: { en: 'taste, flavor', vi: 'mùi vị' }
      },
      {
        kana: 'にます',
        kanji: '似ます',
        romaji: 'nimasu',
        meaning: { en: 'to resemble', vi: 'giống' }
      },
      {
        kana: 'だれも',
        romaji: 'daremo',
        meaning: { en: 'nobody (with negative)', vi: 'không ai (đi với phủ định)' }
      },
      {
        kana: 'しずか',
        kanji: '静か',
        romaji: 'shizuka',
        meaning: { en: 'quiet', vi: 'yên tĩnh' }
      },
      {
        kana: 'おと',
        kanji: '音',
        romaji: 'oto',
        meaning: { en: 'sound', vi: 'âm thanh' }
      }
    ],
    grammar: [
      {
        pattern: 'plain form ＋ ようだ',
        title: {
          en: 'It seems that … (ようだ)',
          vi: 'Có vẻ như … (ようだ)'
        },
        explanation: {
          en: 'ようだ states a guess based on evidence you sense yourself. With nouns use N の ようだ; with な-adjectives use な ようだ.',
          vi: 'ようだ nêu phán đoán dựa trên bằng chứng bản thân cảm nhận. Với danh từ dùng N の ようだ; với tính từ -な dùng な ようだ.'
        },
        examples: [
          {
            jp: 'たなかさんは かぜを ひいたようです。',
            romaji: 'Tanaka-san wa kaze o hiita yō desu.',
            meaning: {
              en: 'It seems Mr. Tanaka has caught a cold.',
              vi: 'Có vẻ như anh Tanaka đã bị cảm.'
            }
          },
          {
            jp: 'いえには だれも いないようです。',
            romaji: 'Ie ni wa daremo inai yō desu.',
            meaning: {
              en: 'It seems no one is home.',
              vi: 'Có vẻ như không có ai ở nhà.'
            }
          }
        ]
      },
      {
        pattern: 'plain form ＋ みたい',
        title: {
          en: 'Casual seems (みたい)',
          vi: 'Có vẻ (みたい, thân mật)'
        },
        explanation: {
          en: 'みたい is the casual equivalent of ようだ. It connects directly to nouns and な-adjectives with no の or な (子供みたい).',
          vi: 'みたい là dạng thân mật của ようだ. Nó nối trực tiếp với danh từ và tính từ -な, không cần の hay な (子供みたい).'
        },
        examples: [
          {
            jp: 'かれは ねつが あるみたいです。',
            romaji: 'Kare wa netsu ga aru mitai desu.',
            meaning: { en: 'He seems to have a fever.', vi: 'Anh ấy có vẻ bị sốt.' }
          },
          {
            jp: 'この みせは きょう るすみたいです。',
            romaji: 'Kono mise wa kyō rusu mitai desu.',
            meaning: {
              en: 'This shop seems to be closed today.',
              vi: 'Cửa hàng này hôm nay có vẻ đóng cửa.'
            }
          }
        ]
      },
      {
        pattern: 'N の ようだ／みたいだ',
        title: {
          en: 'Like / as if (resemblance)',
          vi: 'Giống như (so sánh)'
        },
        explanation: {
          en: 'To say something is "like" a noun, use N の ようだ or N みたいだ. Before a noun use ような / みたいな; before a verb use ように / みたいに.',
          vi: 'Để nói cái gì đó "giống như" một danh từ, dùng N の ようだ hoặc N みたいだ. Trước danh từ dùng ような / みたいな; trước động từ dùng ように / みたいに.'
        },
        examples: [
          {
            jp: 'あの こは てんしのようです。',
            romaji: 'Ano ko wa tenshi no yō desu.',
            meaning: { en: 'That child is like an angel.', vi: 'Đứa bé đó như một thiên thần.' }
          },
          {
            jp: 'ゆめみたいな はなしですね。',
            romaji: 'Yume mitai na hanashi desu ne.',
            meaning: { en: 'It is a story like a dream.', vi: 'Một câu chuyện như mơ vậy.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A quiet house', vi: 'Ngôi nhà yên ắng' },
        lines: [
          {
            jp: 'たなかさんの いえは とても しずかです。',
            romaji: 'Tanaka-san no ie wa totemo shizuka desu.',
            meaning: {
              en: "Mr. Tanaka's house is very quiet.",
              vi: 'Nhà anh Tanaka rất yên tĩnh.'
            }
          },
          {
            jp: 'おとも しないので、だれも いないようです。',
            romaji: 'Oto mo shinai node, daremo inai yō desu.',
            meaning: {
              en: 'There is no sound, so it seems no one is home.',
              vi: 'Không có tiếng động, nên có vẻ không có ai ở nhà.'
            }
          },
          {
            jp: 'たなかさんは かぜを ひいて、びょういんに いったみたいです。',
            romaji: 'Tanaka-san wa kaze o hiite, byōin ni itta mitai desu.',
            meaning: {
              en: 'It seems Mr. Tanaka caught a cold and went to the hospital.',
              vi: 'Hình như anh Tanaka bị cảm và đã đến bệnh viện.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why does it seem no one is home?',
              vi: 'Vì sao có vẻ không ai ở nhà?'
            },
            choices: [
              { id: 'a', label: { en: 'There is no sound', vi: 'Không có tiếng động' } },
              { id: 'b', label: { en: 'The lights are on', vi: 'Đèn đang bật' } },
              { id: 'c', label: { en: 'The door is open', vi: 'Cửa đang mở' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'Where did Mr. Tanaka seem to go?', vi: 'Anh Tanaka có vẻ đã đi đâu?' },
            choices: [
              { id: 'a', label: { en: 'To the hospital', vi: 'Đến bệnh viện' } },
              { id: 'b', label: { en: 'To the shop', vi: 'Đến cửa hàng' } },
              { id: 'c', label: { en: 'To work', vi: 'Đến chỗ làm' } }
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
    title: {
      en: 'Maybe, Surely, Probably',
      vi: 'Có lẽ, Chắc chắn, Có khả năng'
    },
    focus: {
      en: 'Express degrees of certainty with 〜かもしれない, 〜はずだ, 〜だろう.',
      vi: 'Diễn đạt mức độ chắc chắn với 〜かもしれない, 〜はずだ, 〜だろう.'
    },
    vocab: [
      {
        kana: 'たぶん',
        romaji: 'tabun',
        meaning: { en: 'probably', vi: 'có lẽ' }
      },
      {
        kana: 'きっと',
        romaji: 'kitto',
        meaning: { en: 'surely, certainly', vi: 'chắc chắn' }
      },
      {
        kana: 'もしかしたら',
        romaji: 'moshikashitara',
        meaning: { en: 'perhaps, possibly', vi: 'biết đâu, có thể' }
      },
      {
        kana: 'まにあいます',
        kanji: '間に合います',
        romaji: 'maniaimasu',
        meaning: { en: 'to be in time', vi: 'kịp giờ' }
      },
      {
        kana: 'おくれます',
        kanji: '遅れます',
        romaji: 'okuremasu',
        meaning: { en: 'to be late', vi: 'bị muộn' }
      },
      {
        kana: 'やすみ',
        kanji: '休み',
        romaji: 'yasumi',
        meaning: { en: 'holiday, day off', vi: 'ngày nghỉ' }
      },
      {
        kana: 'しあい',
        kanji: '試合',
        romaji: 'shiai',
        meaning: { en: 'match, game', vi: 'trận đấu' }
      },
      {
        kana: 'かちます',
        kanji: '勝ちます',
        romaji: 'kachimasu',
        meaning: { en: 'to win', vi: 'thắng' }
      },
      {
        kana: 'まけます',
        kanji: '負けます',
        romaji: 'makemasu',
        meaning: { en: 'to lose', vi: 'thua' }
      },
      {
        kana: 'こんど',
        kanji: '今度',
        romaji: 'kondo',
        meaning: { en: 'next time', vi: 'lần tới' }
      },
      {
        kana: 'でかけます',
        kanji: '出かけます',
        romaji: 'dekakemasu',
        meaning: { en: 'to go out', vi: 'đi ra ngoài' }
      },
      {
        kana: 'いそぎます',
        kanji: '急ぎます',
        romaji: 'isogimasu',
        meaning: { en: 'to hurry', vi: 'vội, gấp' }
      }
    ],
    grammar: [
      {
        pattern: 'plain form ＋ かもしれない',
        title: {
          en: 'Might / maybe (かもしれない)',
          vi: 'Có thể / biết đâu (かもしれない)'
        },
        explanation: {
          en: 'かもしれない expresses low certainty ("might, maybe"). Attach to a plain form; with nouns and な-adjectives drop だ. Often paired with もしかしたら.',
          vi: 'かもしれない diễn đạt mức chắc chắn thấp ("có thể, biết đâu"). Gắn vào thể thường; với danh từ và tính từ -な thì bỏ だ. Thường đi với もしかしたら.'
        },
        examples: [
          {
            jp: 'あした あめが ふるかもしれません。',
            romaji: 'Ashita ame ga furu kamoshiremasen.',
            meaning: { en: 'It might rain tomorrow.', vi: 'Ngày mai có thể trời mưa.' }
          },
          {
            jp: 'かれは こないかもしれません。',
            romaji: 'Kare wa konai kamoshiremasen.',
            meaning: { en: 'He might not come.', vi: 'Có thể anh ấy sẽ không đến.' }
          }
        ]
      },
      {
        pattern: 'plain form ＋ はずだ',
        title: {
          en: 'Should / supposed to (はずだ)',
          vi: 'Chắc hẳn / lẽ ra (はずだ)'
        },
        explanation: {
          en: 'はずだ shows strong confidence based on reason or evidence ("it should be that…"). With nouns use N の はず; with な-adjectives use な はず. はずがない means "couldn\'t possibly".',
          vi: 'はずだ thể hiện sự tin tưởng cao dựa trên lý lẽ ("chắc hẳn là…"). Với danh từ dùng N の はず; với tính từ -な dùng な はず. はずがない nghĩa là "không thể nào".'
        },
        examples: [
          {
            jp: 'かれは きっと まにあうはずです。',
            romaji: 'Kare wa kitto maniau hazu desu.',
            meaning: {
              en: 'He should surely make it in time.',
              vi: 'Chắc chắn anh ấy sẽ kịp giờ.'
            }
          },
          {
            jp: 'きょうは やすみだから、みせは しまっているはずです。',
            romaji: 'Kyō wa yasumi dakara, mise wa shimatte iru hazu desu.',
            meaning: {
              en: "Since it's a holiday today, the shop should be closed.",
              vi: 'Vì hôm nay là ngày nghỉ nên cửa hàng chắc hẳn đóng cửa.'
            }
          }
        ]
      },
      {
        pattern: 'plain form ＋ だろう／でしょう',
        title: {
          en: 'Probably (だろう / でしょう)',
          vi: 'Có lẽ (だろう / でしょう)'
        },
        explanation: {
          en: 'だろう (casual) / でしょう (polite) express a probable judgment, often with たぶん. でしょう？ with rising tone seeks agreement.',
          vi: 'だろう (thân mật) / でしょう (lịch sự) diễn đạt phán đoán có khả năng, thường đi với たぶん. でしょう？ lên giọng để tìm sự đồng tình.'
        },
        examples: [
          {
            jp: 'たぶん あした しあいに かつでしょう。',
            romaji: 'Tabun ashita shiai ni katsu deshō.',
            meaning: {
              en: 'They will probably win the match tomorrow.',
              vi: 'Có lẽ ngày mai họ sẽ thắng trận.'
            }
          },
          {
            jp: 'こんどの にちようびは ひまでしょう。',
            romaji: 'Kondo no nichiyōbi wa hima deshō.',
            meaning: {
              en: 'You will probably be free next Sunday.',
              vi: 'Chủ nhật tới chắc bạn rảnh nhỉ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The big match', vi: 'Trận đấu lớn' },
        lines: [
          {
            jp: 'あした おおきな しあいが あります。',
            romaji: 'Ashita ōkina shiai ga arimasu.',
            meaning: { en: 'There is a big match tomorrow.', vi: 'Ngày mai có một trận đấu lớn.' }
          },
          {
            jp: 'わたしたちの チームは つよいから、きっと かつはずです。',
            romaji: 'Watashitachi no chīmu wa tsuyoi kara, kitto katsu hazu desu.',
            meaning: {
              en: 'Our team is strong, so they should surely win.',
              vi: 'Đội của chúng tôi mạnh nên chắc chắn sẽ thắng.'
            }
          },
          {
            jp: 'でも、あめが ふるかもしれないので、しあいは おくれるでしょう。',
            romaji: 'Demo, ame ga furu kamoshirenai node, shiai wa okureru deshō.',
            meaning: {
              en: 'But it might rain, so the match will probably be delayed.',
              vi: 'Nhưng có thể trời mưa, nên trận đấu chắc sẽ bị hoãn lại.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Why should the team win?', vi: 'Vì sao đội này chắc sẽ thắng?' },
            choices: [
              { id: 'a', label: { en: 'Because they are strong', vi: 'Vì họ mạnh' } },
              { id: 'b', label: { en: 'Because it will rain', vi: 'Vì trời sẽ mưa' } },
              { id: 'c', label: { en: 'Because it is a holiday', vi: 'Vì là ngày nghỉ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What might happen to the match?', vi: 'Trận đấu có thể bị sao?' },
            choices: [
              { id: 'a', label: { en: 'It might be delayed', vi: 'Có thể bị hoãn' } },
              { id: 'b', label: { en: 'It might be cancelled forever', vi: 'Bị hủy vĩnh viễn' } },
              { id: 'c', label: { en: 'It will start early', vi: 'Bắt đầu sớm' } }
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
    title: {
      en: 'Although… (Unexpected Result)',
      vi: 'Mặc dù… (Kết quả bất ngờ)'
    },
    focus: {
      en: 'Show surprise or complaint about an unexpected result with 〜のに.',
      vi: 'Thể hiện bất ngờ hoặc bực bội về kết quả ngoài mong đợi với 〜のに.'
    },
    vocab: [
      {
        kana: 'べんきょうします',
        kanji: '勉強します',
        romaji: 'benkyō shimasu',
        meaning: { en: 'to study', vi: 'học bài' }
      },
      {
        kana: 'テスト',
        romaji: 'tesuto',
        meaning: { en: 'test, exam', vi: 'bài kiểm tra' }
      },
      {
        kana: 'てんすう',
        kanji: '点数',
        romaji: 'tensū',
        meaning: { en: 'score, marks', vi: 'điểm số' }
      },
      {
        kana: 'やすい',
        kanji: '安い',
        romaji: 'yasui',
        meaning: { en: 'cheap', vi: 'rẻ' }
      },
      {
        kana: 'かいません',
        kanji: '買いません',
        romaji: 'kaimasen',
        meaning: { en: 'does not buy', vi: 'không mua' }
      },
      {
        kana: 'やくそく',
        kanji: '約束',
        romaji: 'yakusoku',
        meaning: { en: 'promise, appointment', vi: 'lời hứa, hẹn' }
      },
      {
        kana: 'まちます',
        kanji: '待ちます',
        romaji: 'machimasu',
        meaning: { en: 'to wait', vi: 'chờ' }
      },
      {
        kana: 'はれ',
        kanji: '晴れ',
        romaji: 'hare',
        meaning: { en: 'clear weather', vi: 'trời quang' }
      },
      {
        kana: 'さむい',
        kanji: '寒い',
        romaji: 'samui',
        meaning: { en: 'cold (weather)', vi: 'lạnh' }
      },
      {
        kana: 'はたらきます',
        kanji: '働きます',
        romaji: 'hatarakimasu',
        meaning: { en: 'to work', vi: 'làm việc' }
      },
      {
        kana: 'きゅうりょう',
        kanji: '給料',
        romaji: 'kyūryō',
        meaning: { en: 'salary, pay', vi: 'lương' }
      },
      {
        kana: 'ねむい',
        kanji: '眠い',
        romaji: 'nemui',
        meaning: { en: 'sleepy', vi: 'buồn ngủ' }
      }
    ],
    grammar: [
      {
        pattern: 'plain form ＋ のに',
        title: {
          en: 'Even though (のに)',
          vi: 'Mặc dù (のに)'
        },
        explanation: {
          en: 'のに joins two clauses where the second is contrary to what the first leads you to expect. With nouns and な-adjectives use な のに (元気な のに).',
          vi: 'のに nối hai mệnh đề, trong đó vế sau trái ngược với điều vế trước khiến ta mong đợi. Với danh từ và tính từ -な dùng な のに (元気な のに).'
        },
        examples: [
          {
            jp: 'たくさん べんきょうしたのに、テストは わるかったです。',
            romaji: 'Takusan benkyō shita noni, tesuto wa warukatta desu.',
            meaning: {
              en: 'Even though I studied a lot, the test went badly.',
              vi: 'Mặc dù đã học rất nhiều, nhưng bài kiểm tra lại tệ.'
            }
          },
          {
            jp: 'やすいのに、だれも かいません。',
            romaji: 'Yasui noni, daremo kaimasen.',
            meaning: {
              en: 'Even though it is cheap, nobody buys it.',
              vi: 'Mặc dù rẻ nhưng không ai mua.'
            }
          }
        ]
      },
      {
        pattern: '〜のに (complaint / regret)',
        title: {
          en: 'のに for complaint or regret',
          vi: 'のに diễn đạt bực bội, tiếc nuối'
        },
        explanation: {
          en: 'のに often carries a feeling of dissatisfaction or surprise, stronger than the neutral が or けど. The speaker feels the result is unfair or unexpected.',
          vi: 'のに thường mang sắc thái bất mãn hoặc ngạc nhiên, mạnh hơn が hay けど trung tính. Người nói cảm thấy kết quả bất công hoặc ngoài dự kiến.'
        },
        examples: [
          {
            jp: 'いちじかんも まったのに、かれは きませんでした。',
            romaji: 'Ichi-jikan mo matta noni, kare wa kimasen deshita.',
            meaning: {
              en: 'Even though I waited a whole hour, he did not come.',
              vi: 'Mặc dù đã chờ cả tiếng đồng hồ, anh ấy vẫn không đến.'
            }
          },
          {
            jp: 'やくそくしたのに、わすれて しまいました。',
            romaji: 'Yakusoku shita noni, wasurete shimaimashita.',
            meaning: {
              en: 'Even though I promised, I ended up forgetting.',
              vi: 'Dù đã hứa nhưng tôi lại quên mất.'
            }
          }
        ]
      },
      {
        pattern: 'N な のに／な-adj な のに',
        title: {
          en: 'のwith nouns and な-adjectives',
          vi: 'のに với danh từ và tính từ -な'
        },
        explanation: {
          en: 'Nouns and な-adjectives connect to のに with な (子供な のに, 元気な のに). In the past, use だった のに.',
          vi: 'Danh từ và tính từ -な nối với のに bằng な (子供な のに, 元気な のに). Ở quá khứ dùng だった のに.'
        },
        examples: [
          {
            jp: 'はれな のに、とても さむいです。',
            romaji: 'Hare na noni, totemo samui desu.',
            meaning: {
              en: 'Even though it is sunny, it is very cold.',
              vi: 'Mặc dù trời quang nhưng lại rất lạnh.'
            }
          },
          {
            jp: 'まいにち はたらいているのに、きゅうりょうは ひくいです。',
            romaji: 'Mainichi hataraite iru noni, kyūryō wa hikui desu.',
            meaning: {
              en: 'Even though I work every day, my salary is low.',
              vi: 'Mặc dù ngày nào cũng làm việc nhưng lương lại thấp.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A disappointing day', vi: 'Một ngày thất vọng' },
        lines: [
          {
            jp: 'きのう よる おそくまで べんきょうしました。',
            romaji: 'Kinō yoru osoku made benkyō shimashita.',
            meaning: {
              en: 'Yesterday I studied until late at night.',
              vi: 'Hôm qua tôi đã học đến tận khuya.'
            }
          },
          {
            jp: 'たくさん べんきょうしたのに、テストの てんすうは わるかったです。',
            romaji: 'Takusan benkyō shita noni, tesuto no tensū wa warukatta desu.',
            meaning: {
              en: 'Even though I studied a lot, my test score was bad.',
              vi: 'Mặc dù đã học rất nhiều, nhưng điểm bài kiểm tra lại tệ.'
            }
          },
          {
            jp: 'はれな のに さむくて、いちにちじゅう ねむかったです。',
            romaji: 'Hare na noni samukute, ichinichijū nemukatta desu.',
            meaning: {
              en: 'Even though it was sunny it was cold, and I was sleepy all day.',
              vi: 'Mặc dù trời quang nhưng lại lạnh, và cả ngày tôi buồn ngủ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What was the test result?', vi: 'Kết quả bài kiểm tra thế nào?' },
            choices: [
              { id: 'a', label: { en: 'The score was bad', vi: 'Điểm số tệ' } },
              { id: 'b', label: { en: 'The score was great', vi: 'Điểm số rất tốt' } },
              { id: 'c', label: { en: 'There was no test', vi: 'Không có bài kiểm tra' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What was the weather like?', vi: 'Thời tiết thế nào?' },
            choices: [
              { id: 'a', label: { en: 'Sunny but cold', vi: 'Quang nhưng lạnh' } },
              { id: 'b', label: { en: 'Rainy and warm', vi: 'Mưa và ấm' } },
              { id: 'c', label: { en: 'Snowy', vi: 'Có tuyết' } }
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
    title: {
      en: 'In Order To… (Purpose)',
      vi: 'Để… (Mục đích)'
    },
    focus: {
      en: 'State purpose with 〜ために (in order to) and 〜ように (so that).',
      vi: 'Nêu mục đích với 〜ために (để) và 〜ように (sao cho).'
    },
    vocab: [
      {
        kana: 'けんこう',
        kanji: '健康',
        romaji: 'kenkō',
        meaning: { en: 'health', vi: 'sức khỏe' }
      },
      {
        kana: 'うんどうします',
        kanji: '運動します',
        romaji: 'undō shimasu',
        meaning: { en: 'to exercise', vi: 'tập thể dục' }
      },
      {
        kana: 'ちょきんします',
        kanji: '貯金します',
        romaji: 'chokin shimasu',
        meaning: { en: 'to save money', vi: 'tiết kiệm tiền' }
      },
      {
        kana: 'りゅうがく',
        kanji: '留学',
        romaji: 'ryūgaku',
        meaning: { en: 'studying abroad', vi: 'du học' }
      },
      {
        kana: 'ごうかくします',
        kanji: '合格します',
        romaji: 'gōkaku shimasu',
        meaning: { en: 'to pass (an exam)', vi: 'đỗ, đậu' }
      },
      {
        kana: 'おぼえます',
        kanji: '覚えます',
        romaji: 'oboemasu',
        meaning: { en: 'to memorize', vi: 'ghi nhớ' }
      },
      {
        kana: 'わすれます',
        kanji: '忘れます',
        romaji: 'wasuremasu',
        meaning: { en: 'to forget', vi: 'quên' }
      },
      {
        kana: 'みえます',
        kanji: '見えます',
        romaji: 'miemasu',
        meaning: { en: 'to be visible', vi: 'nhìn thấy được' }
      },
      {
        kana: 'はやく',
        kanji: '早く',
        romaji: 'hayaku',
        meaning: { en: 'early, quickly', vi: 'sớm, nhanh' }
      },
      {
        kana: 'なおります',
        kanji: '治ります',
        romaji: 'naorimasu',
        meaning: { en: 'to recover, heal', vi: 'khỏi bệnh' }
      },
      {
        kana: 'くすり',
        kanji: '薬',
        romaji: 'kusuri',
        meaning: { en: 'medicine', vi: 'thuốc' }
      },
      {
        kana: 'のみます',
        kanji: '飲みます',
        romaji: 'nomimasu',
        meaning: { en: 'to drink, take (medicine)', vi: 'uống' }
      }
    ],
    grammar: [
      {
        pattern: 'V (dictionary)／N の ＋ ために',
        title: {
          en: 'In order to (ために)',
          vi: 'Để, vì (ために)'
        },
        explanation: {
          en: 'ために shows a deliberate purpose with volitional verbs, where the same subject controls both actions. With nouns use N の ために.',
          vi: 'ために nêu mục đích có chủ đích với động từ ý chí, khi cùng một chủ ngữ thực hiện cả hai hành động. Với danh từ dùng N の ために.'
        },
        examples: [
          {
            jp: 'けんこうの ために、まいにち うんどうします。',
            romaji: 'Kenkō no tame ni, mainichi undō shimasu.',
            meaning: {
              en: 'I exercise every day for my health.',
              vi: 'Tôi tập thể dục mỗi ngày để giữ sức khỏe.'
            }
          },
          {
            jp: 'りゅうがくする ために、おかねを ちょきんして います。',
            romaji: 'Ryūgaku suru tame ni, okane o chokin shite imasu.',
            meaning: {
              en: 'I am saving money in order to study abroad.',
              vi: 'Tôi đang tiết kiệm tiền để đi du học.'
            }
          }
        ]
      },
      {
        pattern: 'V (potential／negative) ＋ ように',
        title: {
          en: 'So that (ように)',
          vi: 'Sao cho (ように)'
        },
        explanation: {
          en: 'ように shows a goal you hope for, used with potential verbs or non-volitional changes (見えるように, 忘れないように). The two actions may have different subjects.',
          vi: 'ように nêu mục tiêu mong muốn, dùng với động từ khả năng hoặc thay đổi ngoài ý chí (見えるように, 忘れないように). Hai hành động có thể khác chủ ngữ.'
        },
        examples: [
          {
            jp: 'よく みえるように、まえに すわります。',
            romaji: 'Yoku mieru yō ni, mae ni suwarimasu.',
            meaning: {
              en: 'I sit at the front so that I can see well.',
              vi: 'Tôi ngồi phía trước để nhìn cho rõ.'
            }
          },
          {
            jp: 'わすれないように、メモを します。',
            romaji: 'Wasurenai yō ni, memo o shimasu.',
            meaning: {
              en: 'I take notes so that I do not forget.',
              vi: 'Tôi ghi chú lại để khỏi quên.'
            }
          }
        ]
      },
      {
        pattern: 'V ように なる／する',
        title: {
          en: 'ように with なる / する',
          vi: 'ように đi với なる / する'
        },
        explanation: {
          en: 'ように なる expresses a gradual change ("come to be able to"); ように する expresses making an effort to do something habitually.',
          vi: 'ように なる diễn đạt sự thay đổi dần ("đã trở nên có thể"); ように する diễn đạt sự cố gắng làm gì đó thành thói quen.'
        },
        examples: [
          {
            jp: 'はやく なおるように、くすりを のみます。',
            romaji: 'Hayaku naoru yō ni, kusuri o nomimasu.',
            meaning: {
              en: 'I take medicine so that I recover quickly.',
              vi: 'Tôi uống thuốc để mau khỏi bệnh.'
            }
          },
          {
            jp: 'まいにち かんじを おぼえるように して います。',
            romaji: 'Mainichi kanji o oboeru yō ni shite imasu.',
            meaning: {
              en: 'I make an effort to memorize kanji every day.',
              vi: 'Tôi cố gắng học thuộc chữ Hán mỗi ngày.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Goals for the year', vi: 'Mục tiêu của năm' },
        lines: [
          {
            jp: 'らいねん にほんに りゅうがくする ために、おかねを ちょきんして います。',
            romaji: 'Rainen Nihon ni ryūgaku suru tame ni, okane o chokin shite imasu.',
            meaning: {
              en: 'I am saving money in order to study in Japan next year.',
              vi: 'Tôi đang tiết kiệm tiền để sang Nhật du học vào năm sau.'
            }
          },
          {
            jp: 'テストに ごうかくするように、まいにち べんきょうして います。',
            romaji: 'Tesuto ni gōkaku suru yō ni, mainichi benkyō shite imasu.',
            meaning: {
              en: 'I study every day so that I can pass the exam.',
              vi: 'Tôi học mỗi ngày để có thể đỗ kỳ thi.'
            }
          },
          {
            jp: 'けんこうの ために、よる はやく ねるように して います。',
            romaji: 'Kenkō no tame ni, yoru hayaku neru yō ni shite imasu.',
            meaning: {
              en: 'For my health, I try to go to bed early at night.',
              vi: 'Vì sức khỏe, tôi cố gắng đi ngủ sớm vào buổi tối.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why is the writer saving money?',
              vi: 'Người viết tiết kiệm tiền để làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'To study abroad', vi: 'Để đi du học' } },
              { id: 'b', label: { en: 'To buy a car', vi: 'Để mua ô tô' } },
              { id: 'c', label: { en: 'To open a shop', vi: 'Để mở cửa hàng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer do for health?',
              vi: 'Vì sức khỏe, người viết làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Goes to bed early', vi: 'Đi ngủ sớm' } },
              { id: 'b', label: { en: 'Skips breakfast', vi: 'Bỏ bữa sáng' } },
              { id: 'c', label: { en: 'Studies all night', vi: 'Học suốt đêm' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-31',
    number: 31,
    title: {
      en: 'In Case Of & Whether Or Not',
      vi: 'Trong trường hợp & Có hay không'
    },
    focus: {
      en: 'Talk about conditions with 〜場合(は) and embedded questions with 〜かどうか.',
      vi: 'Nói về điều kiện với 〜場合(は) và câu hỏi gián tiếp với 〜かどうか.'
    },
    vocab: [
      {
        kana: 'ばあい',
        kanji: '場合',
        romaji: 'baai',
        meaning: { en: 'case, situation', vi: 'trường hợp' }
      },
      {
        kana: 'じこ',
        kanji: '事故',
        romaji: 'jiko',
        meaning: { en: 'accident', vi: 'tai nạn' }
      },
      {
        kana: 'れんらくします',
        kanji: '連絡します',
        romaji: 'renraku shimasu',
        meaning: { en: 'to contact', vi: 'liên lạc' }
      },
      {
        kana: 'たしかめます',
        kanji: '確かめます',
        romaji: 'tashikamemasu',
        meaning: { en: 'to confirm, check', vi: 'xác nhận, kiểm tra' }
      },
      {
        kana: 'しゅっせき',
        kanji: '出席',
        romaji: 'shusseki',
        meaning: { en: 'attendance', vi: 'sự tham dự' }
      },
      {
        kana: 'やすみます',
        kanji: '休みます',
        romaji: 'yasumimasu',
        meaning: { en: 'to take a rest, be absent', vi: 'nghỉ' }
      },
      {
        kana: 'うけつけ',
        kanji: '受付',
        romaji: 'uketsuke',
        meaning: { en: 'reception desk', vi: 'quầy lễ tân' }
      },
      {
        kana: 'わかりません',
        romaji: 'wakarimasen',
        meaning: { en: 'do not know', vi: 'không biết' }
      },
      {
        kana: 'ただしい',
        kanji: '正しい',
        romaji: 'tadashii',
        meaning: { en: 'correct', vi: 'đúng' }
      },
      {
        kana: 'こたえ',
        kanji: '答え',
        romaji: 'kotae',
        meaning: { en: 'answer', vi: 'câu trả lời' }
      },
      {
        kana: 'まにあいません',
        kanji: '間に合いません',
        romaji: 'maniaimasen',
        meaning: { en: 'will not make it in time', vi: 'không kịp' }
      },
      {
        kana: 'でんわ',
        kanji: '電話',
        romaji: 'denwa',
        meaning: { en: 'telephone, phone call', vi: 'điện thoại' }
      }
    ],
    grammar: [
      {
        pattern: 'plain form ＋ 場合(は)',
        title: {
          en: 'In the case of (場合は)',
          vi: 'Trong trường hợp (場合は)'
        },
        explanation: {
          en: '場合(は) introduces a hypothetical situation and what to do then. With nouns use N の 場合; with な-adjectives use な 場合.',
          vi: '場合(は) nêu ra một tình huống giả định và việc cần làm khi đó. Với danh từ dùng N の 場合; với tính từ -な dùng な 場合.'
        },
        examples: [
          {
            jp: 'じこの ばあいは、すぐに れんらくして ください。',
            romaji: 'Jiko no baai wa, sugu ni renraku shite kudasai.',
            meaning: {
              en: 'In case of an accident, please contact us immediately.',
              vi: 'Trong trường hợp tai nạn, xin hãy liên lạc ngay.'
            }
          },
          {
            jp: 'やすむ ばあいは、うけつけに でんわして ください。',
            romaji: 'Yasumu baai wa, uketsuke ni denwa shite kudasai.',
            meaning: {
              en: 'If you are going to be absent, please call the reception.',
              vi: 'Trong trường hợp nghỉ, xin hãy gọi cho quầy lễ tân.'
            }
          }
        ]
      },
      {
        pattern: 'plain form ＋ かどうか',
        title: {
          en: 'Whether or not (かどうか)',
          vi: 'Có … hay không (かどうか)'
        },
        explanation: {
          en: 'かどうか embeds a yes/no question inside a larger sentence ("whether or not …"). With nouns and な-adjectives drop だ before かどうか.',
          vi: 'かどうか lồng một câu hỏi có/không vào trong câu lớn ("có … hay không"). Với danh từ và tính từ -な, bỏ だ trước かどうか.'
        },
        examples: [
          {
            jp: 'かれが くるかどうか わかりません。',
            romaji: 'Kare ga kuru ka dō ka wakarimasen.',
            meaning: {
              en: 'I do not know whether or not he will come.',
              vi: 'Tôi không biết anh ấy có đến hay không.'
            }
          },
          {
            jp: 'この こたえが ただしいかどうか たしかめます。',
            romaji: 'Kono kotae ga tadashii ka dō ka tashikamemasu.',
            meaning: {
              en: 'I will check whether or not this answer is correct.',
              vi: 'Tôi sẽ kiểm tra xem câu trả lời này có đúng hay không.'
            }
          }
        ]
      },
      {
        pattern: 'question word ＋ か (embedded)',
        title: {
          en: 'Embedded wh-questions',
          vi: 'Câu hỏi nghi vấn lồng ghép'
        },
        explanation: {
          en: 'When the embedded question has a question word (どこ, だれ, いつ), use か instead of かどうか before the main verb.',
          vi: 'Khi câu hỏi lồng có từ nghi vấn (どこ, だれ, いつ), dùng か thay vì かどうか trước động từ chính.'
        },
        examples: [
          {
            jp: 'かいぎが いつ はじまるか たしかめます。',
            romaji: 'Kaigi ga itsu hajimaru ka tashikamemasu.',
            meaning: {
              en: 'I will check when the meeting starts.',
              vi: 'Tôi sẽ xác nhận xem cuộc họp bắt đầu khi nào.'
            }
          },
          {
            jp: 'だれが しゅっせきするか わかりません。',
            romaji: 'Dare ga shusseki suru ka wakarimasen.',
            meaning: {
              en: 'I do not know who will attend.',
              vi: 'Tôi không biết ai sẽ tham dự.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Meeting instructions', vi: 'Hướng dẫn cho cuộc họp' },
        lines: [
          {
            jp: 'あした かいぎが ありますが、なんじに はじまるか まだ わかりません。',
            romaji: 'Ashita kaigi ga arimasu ga, nan-ji ni hajimaru ka mada wakarimasen.',
            meaning: {
              en: 'There is a meeting tomorrow, but I still do not know what time it starts.',
              vi: 'Ngày mai có cuộc họp, nhưng tôi vẫn chưa biết mấy giờ bắt đầu.'
            }
          },
          {
            jp: 'たなかさんが くるかどうか、いま たしかめて います。',
            romaji: 'Tanaka-san ga kuru ka dō ka, ima tashikamete imasu.',
            meaning: {
              en: 'I am now checking whether or not Mr. Tanaka will come.',
              vi: 'Tôi đang xác nhận xem anh Tanaka có đến hay không.'
            }
          },
          {
            jp: 'やすむ ばあいは、あさ うけつけに でんわして ください。',
            romaji: 'Yasumu baai wa, asa uketsuke ni denwa shite kudasai.',
            meaning: {
              en: 'If you are absent, please call the reception in the morning.',
              vi: 'Trong trường hợp nghỉ, hãy gọi cho lễ tân vào buổi sáng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What is not yet known?', vi: 'Điều gì vẫn chưa rõ?' },
            choices: [
              {
                id: 'a',
                label: { en: 'What time the meeting starts', vi: 'Cuộc họp bắt đầu mấy giờ' }
              },
              { id: 'b', label: { en: 'Where the meeting is', vi: 'Cuộc họp ở đâu' } },
              { id: 'c', label: { en: 'Why there is a meeting', vi: 'Vì sao có cuộc họp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What should you do if absent?', vi: 'Nếu nghỉ thì phải làm gì?' },
            choices: [
              {
                id: 'a',
                label: { en: 'Call the reception in the morning', vi: 'Gọi lễ tân vào buổi sáng' }
              },
              { id: 'b', label: { en: 'Send an email at night', vi: 'Gửi email vào buổi tối' } },
              { id: 'c', label: { en: 'Do nothing', vi: 'Không làm gì' } }
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
      en: 'As It Is & Reported Speech',
      vi: 'Để nguyên & Lời nói thuật lại'
    },
    focus: {
      en: 'Say "in an unchanged state" with 〜まま and report speech with 〜と言っていた.',
      vi: 'Diễn đạt "giữ nguyên trạng" với 〜まま và thuật lại lời nói với 〜と言っていた.'
    },
    vocab: [
      {
        kana: 'まど',
        kanji: '窓',
        romaji: 'mado',
        meaning: { en: 'window', vi: 'cửa sổ' }
      },
      {
        kana: 'あけます',
        kanji: '開けます',
        romaji: 'akemasu',
        meaning: { en: 'to open', vi: 'mở' }
      },
      {
        kana: 'でんき',
        kanji: '電気',
        romaji: 'denki',
        meaning: { en: 'light, electricity', vi: 'đèn, điện' }
      },
      {
        kana: 'つけます',
        romaji: 'tsukemasu',
        meaning: { en: 'to turn on', vi: 'bật' }
      },
      {
        kana: 'くつ',
        kanji: '靴',
        romaji: 'kutsu',
        meaning: { en: 'shoes', vi: 'giày' }
      },
      {
        kana: 'はきます',
        kanji: '履きます',
        romaji: 'hakimasu',
        meaning: { en: 'to wear (footwear)', vi: 'mang, đi (giày)' }
      },
      {
        kana: 'ねます',
        kanji: '寝ます',
        romaji: 'nemasu',
        meaning: { en: 'to sleep', vi: 'ngủ' }
      },
      {
        kana: 'いそがしい',
        kanji: '忙しい',
        romaji: 'isogashii',
        meaning: { en: 'busy', vi: 'bận' }
      },
      {
        kana: 'りょこう',
        kanji: '旅行',
        romaji: 'ryokō',
        meaning: { en: 'trip, travel', vi: 'chuyến du lịch' }
      },
      {
        kana: 'いいます',
        kanji: '言います',
        romaji: 'iimasu',
        meaning: { en: 'to say', vi: 'nói' }
      },
      {
        kana: 'つたえます',
        kanji: '伝えます',
        romaji: 'tsutaemasu',
        meaning: { en: 'to convey, tell', vi: 'truyền đạt, nhắn' }
      },
      {
        kana: 'らいげつ',
        kanji: '来月',
        romaji: 'raigetsu',
        meaning: { en: 'next month', vi: 'tháng sau' }
      }
    ],
    grammar: [
      {
        pattern: 'V (た)／N の ＋ まま',
        title: {
          en: 'In an unchanged state (まま)',
          vi: 'Giữ nguyên trạng thái (まま)'
        },
        explanation: {
          en: 'まま means a state stays unchanged while another action happens. Use the た-form of verbs (つけた まま), N の (くつの まま), or い/な-adjectives.',
          vi: 'まま nghĩa là một trạng thái được giữ nguyên trong khi hành động khác diễn ra. Dùng thể た của động từ (つけた まま), N の (くつの まま), hoặc tính từ -い/-な.'
        },
        examples: [
          {
            jp: 'まどを あけたまま、でかけました。',
            romaji: 'Mado o aketa mama, dekakemashita.',
            meaning: {
              en: 'I went out leaving the window open.',
              vi: 'Tôi ra ngoài mà vẫn để cửa sổ mở.'
            }
          },
          {
            jp: 'でんきを つけたまま ねて しまいました。',
            romaji: 'Denki o tsuketa mama nete shimaimashita.',
            meaning: {
              en: 'I fell asleep with the light still on.',
              vi: 'Tôi ngủ mất mà vẫn để đèn bật.'
            }
          }
        ]
      },
      {
        pattern: 'N の まま／〜ない まま',
        title: {
          en: 'まま with nouns and negatives',
          vi: 'まま với danh từ và thể phủ định'
        },
        explanation: {
          en: 'N の まま keeps a noun-state (靴の まま = with shoes on); 〜ない まま means "without doing" (食べない まま = without eating).',
          vi: 'N の まま giữ trạng thái danh từ (靴の まま = vẫn mang giày); 〜ない まま nghĩa là "mà không làm" (食べない まま = mà không ăn).'
        },
        examples: [
          {
            jp: 'くつの まま いえに はいらないで ください。',
            romaji: 'Kutsu no mama ie ni hairanaide kudasai.',
            meaning: {
              en: 'Please do not enter the house with your shoes on.',
              vi: 'Xin đừng vào nhà mà vẫn mang giày.'
            }
          },
          {
            jp: 'なにも たべない まま、しごとに いきました。',
            romaji: 'Nani mo tabenai mama, shigoto ni ikimashita.',
            meaning: {
              en: 'I went to work without eating anything.',
              vi: 'Tôi đi làm mà không ăn gì cả.'
            }
          }
        ]
      },
      {
        pattern: 'plain form ＋ と 言っていた',
        title: {
          en: 'Reported speech (と言っていた)',
          vi: 'Lời nói thuật lại (と言っていた)'
        },
        explanation: {
          en: 'と 言っていた reports what someone said, using their plain-form words before と. Use 言っていた for relaying a message; 言った simply states a past act of speaking.',
          vi: 'と 言っていた thuật lại điều ai đó đã nói, đặt lời nói ở thể thường trước と. Dùng 言っていた khi truyền đạt lời nhắn; 言った chỉ nêu việc đã nói trong quá khứ.'
        },
        examples: [
          {
            jp: 'たなかさんは らいげつ りょこうに いくと 言っていました。',
            romaji: 'Tanaka-san wa raigetsu ryokō ni iku to itte imashita.',
            meaning: {
              en: 'Mr. Tanaka said he is going on a trip next month.',
              vi: 'Anh Tanaka nói tháng sau sẽ đi du lịch.'
            }
          },
          {
            jp: 'かれは いそがしいと 言っていました。',
            romaji: 'Kare wa isogashii to itte imashita.',
            meaning: { en: 'He said he was busy.', vi: 'Anh ấy nói là bận.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A message from Tanaka', vi: 'Lời nhắn từ Tanaka' },
        lines: [
          {
            jp: 'たなかさんは らいげつ かぞくと りょこうに いくと 言っていました。',
            romaji: 'Tanaka-san wa raigetsu kazoku to ryokō ni iku to itte imashita.',
            meaning: {
              en: 'Mr. Tanaka said he will travel with his family next month.',
              vi: 'Anh Tanaka nói tháng sau sẽ đi du lịch cùng gia đình.'
            }
          },
          {
            jp: 'いまは とても いそがしいと 言っていました。',
            romaji: 'Ima wa totemo isogashii to itte imashita.',
            meaning: { en: 'He said he is very busy now.', vi: 'Anh ấy nói bây giờ rất bận.' }
          },
          {
            jp: 'きのうは でんきを つけたまま ねて しまったそうです。',
            romaji: 'Kinō wa denki o tsuketa mama nete shimatta sō desu.',
            meaning: {
              en: 'Apparently yesterday he fell asleep with the light on.',
              vi: 'Nghe nói hôm qua anh ấy đã ngủ quên mà vẫn để đèn bật.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did Mr. Tanaka say about next month?',
              vi: 'Anh Tanaka nói gì về tháng sau?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'He will travel with family', vi: 'Sẽ đi du lịch cùng gia đình' }
              },
              { id: 'b', label: { en: 'He will change jobs', vi: 'Sẽ đổi việc' } },
              { id: 'c', label: { en: 'He will move house', vi: 'Sẽ chuyển nhà' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: { en: 'What happened yesterday?', vi: 'Hôm qua đã xảy ra chuyện gì?' },
            choices: [
              {
                id: 'a',
                label: { en: 'He slept with the light on', vi: 'Anh ấy ngủ mà vẫn để đèn bật' }
              },
              { id: 'b', label: { en: 'He left the window open', vi: 'Anh ấy để cửa sổ mở' } },
              { id: 'c', label: { en: 'He forgot his shoes', vi: 'Anh ấy quên giày' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
