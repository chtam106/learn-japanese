import type { Lesson } from '../types.ts';

export const n3LessonsE: Lesson[] = [
  {
    id: 'lesson-33',
    number: 33,
    title: {
      en: 'Firm Resolve with まい',
      vi: 'Quyết tâm dứt khoát với まい'
    },
    focus: {
      en: 'Express strong negative will ("I will never…") and negative guesses ("surely won\u2019t…") with まい.',
      vi: 'Diễn đạt ý chí phủ định mạnh ("nhất quyết không…") và phỏng đoán phủ định ("chắc sẽ không…") với まい.'
    },
    vocab: [
      {
        kana: 'にどと',
        kanji: '二度と',
        romaji: 'nido to',
        meaning: { en: 'never again (with negative)', vi: 'không bao giờ … nữa' }
      },
      {
        kana: 'けっして',
        kanji: '決して',
        romaji: 'kesshite',
        meaning: { en: 'never, by no means', vi: 'quyết, tuyệt đối (không)' }
      },
      {
        kana: 'こうかい',
        kanji: '後悔',
        romaji: 'kōkai',
        meaning: { en: 'regret', vi: 'sự hối hận' }
      },
      {
        kana: 'ゆうわく',
        kanji: '誘惑',
        romaji: 'yūwaku',
        meaning: { en: 'temptation', vi: 'sự cám dỗ' }
      },
      {
        kana: 'がまん',
        kanji: '我慢',
        romaji: 'gaman',
        meaning: { en: 'endurance, patience', vi: 'sự nhẫn nhịn, chịu đựng' }
      },
      {
        kana: 'あきらめる',
        kanji: '諦める',
        romaji: 'akirameru',
        meaning: { en: 'to give up', vi: 'từ bỏ' }
      },
      {
        kana: 'しっぱい',
        kanji: '失敗',
        romaji: 'shippai',
        meaning: { en: 'failure, mistake', vi: 'thất bại, sai lầm' }
      },
      {
        kana: 'しんじる',
        kanji: '信じる',
        romaji: 'shinjiru',
        meaning: { en: 'to believe', vi: 'tin tưởng' }
      },
      {
        kana: 'やくそく',
        kanji: '約束',
        romaji: 'yakusoku',
        meaning: { en: 'promise', vi: 'lời hứa' }
      },
      {
        kana: 'ゆだん',
        kanji: '油断',
        romaji: 'yudan',
        meaning: { en: 'carelessness, lapse of attention', vi: 'sự lơ là, mất cảnh giác' }
      },
      {
        kana: 'くりかえす',
        kanji: '繰り返す',
        romaji: 'kurikaesu',
        meaning: { en: 'to repeat', vi: 'lặp lại' }
      },
      {
        kana: 'けっしん',
        kanji: '決心',
        romaji: 'kesshin',
        meaning: { en: 'determination, resolve', vi: 'sự quyết tâm' }
      }
    ],
    grammar: [
      {
        pattern: 'V（る／ます-stem）＋ まい',
        title: { en: 'まい — strong negative will', vi: 'まい — ý chí phủ định mạnh' },
        explanation: {
          en: 'Expresses a firm decision not to do something ("I will never / definitely won\u2019t"). Often paired with と決めた / と決心した. For Group 2/3 verbs both 食べまい and するまい / しまい are used.',
          vi: 'Diễn đạt quyết định dứt khoát không làm gì đó ("nhất quyết không / sẽ không"). Thường đi với と決めた / と決心した. Với động từ nhóm 2/3 dùng cả 食べまい và するまい / しまい.'
        },
        examples: [
          {
            jp: 'もう二度とたばこは吸うまいと決めた。',
            romaji: 'Mō nido to tabako wa suu mai to kimeta.',
            meaning: {
              en: 'I have decided I will never smoke again.',
              vi: 'Tôi đã quyết không bao giờ hút thuốc nữa.'
            }
          },
          {
            jp: '同じ失敗は決して繰り返すまい。',
            romaji: 'Onaji shippai wa kesshite kurikaesu mai.',
            meaning: {
              en: 'I will never repeat the same mistake.',
              vi: 'Tôi nhất quyết không lặp lại sai lầm đó.'
            }
          }
        ]
      },
      {
        pattern: 'V（る）＋ まい',
        title: { en: 'まい — negative conjecture', vi: 'まい — phỏng đoán phủ định' },
        explanation: {
          en: 'Means "probably will not / surely won\u2019t", a formal equivalent of ないだろう. Used in writing and formal speech.',
          vi: 'Nghĩa là "chắc sẽ không / hẳn là không", tương đương trang trọng của ないだろう. Dùng trong văn viết và lời nói trang trọng.'
        },
        examples: [
          {
            jp: 'この雨では、試合は行われまい。',
            romaji: 'Kono ame de wa, shiai wa okonaware mai.',
            meaning: {
              en: 'With this rain, the match surely will not be held.',
              vi: 'Mưa thế này thì trận đấu hẳn sẽ không diễn ra.'
            }
          },
          {
            jp: '彼はもう、ここへは来るまい。',
            romaji: 'Kare wa mō, koko e wa kuru mai.',
            meaning: {
              en: 'He probably will not come here anymore.',
              vi: 'Anh ấy chắc sẽ không đến đây nữa.'
            }
          }
        ]
      },
      {
        pattern: '〜のではあるまいか',
        title: {
          en: 'のではあるまいか — I wonder if not…',
          vi: 'のではあるまいか — phải chăng là…'
        },
        explanation: {
          en: 'A formal way to raise a doubt or guess: "could it be that…? / I suspect that…". Softer and more literary than のではないか.',
          vi: 'Cách trang trọng để nêu nghi ngờ hay phỏng đoán: "phải chăng…? / e rằng…". Mềm và mang tính văn viết hơn のではないか.'
        },
        examples: [
          {
            jp: '彼は何か誤解しているのではあるまいか。',
            romaji: 'Kare wa nanika gokai shite iru no de wa aru mai ka.',
            meaning: {
              en: 'I wonder if he isn\u2019t misunderstanding something.',
              vi: 'Phải chăng anh ấy đang hiểu lầm điều gì đó.'
            }
          },
          {
            jp: 'この計画には無理があるのではあるまいか。',
            romaji: 'Kono keikaku ni wa muri ga aru no de wa aru mai ka.',
            meaning: {
              en: 'Could it be that this plan is unreasonable?',
              vi: 'Phải chăng kế hoạch này có chỗ bất hợp lý?'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A father\u2019s resolve', vi: 'Quyết tâm của cha' },
        lines: [
          {
            jp: '父は若いころからずっとたばこを吸っていた。',
            romaji: 'Chichi wa wakai koro kara zutto tabako o sutte ita.',
            meaning: {
              en: 'My father had smoked ever since he was young.',
              vi: 'Cha tôi đã hút thuốc từ khi còn trẻ.'
            }
          },
          {
            jp: '去年大きな病気をして、もう二度と吸うまいと決心した。',
            romaji: 'Kyonen ōkina byōki o shite, mō nido to suu mai to kesshin shita.',
            meaning: {
              en: 'Last year he became seriously ill and resolved never to smoke again.',
              vi: 'Năm ngoái ông bị bệnh nặng và quyết tâm không bao giờ hút thuốc nữa.'
            }
          },
          {
            jp: '誘惑に負けそうな時もあったが、よく我慢した。',
            romaji: 'Yūwaku ni makesō na toki mo atta ga, yoku gaman shita.',
            meaning: {
              en: 'There were times he almost gave in to temptation, but he endured well.',
              vi: 'Có lúc ông suýt thua trước cám dỗ, nhưng đã nhẫn nhịn tốt.'
            }
          },
          {
            jp: '「同じ失敗は決して繰り返すまい」と父はいつも言っている。',
            romaji: '"Onaji shippai wa kesshite kurikaesu mai" to chichi wa itsumo itte iru.',
            meaning: {
              en: '"I will never repeat the same mistake," my father always says.',
              vi: '"Cha nhất quyết không lặp lại sai lầm đó," cha tôi luôn nói vậy.'
            }
          },
          {
            jp: '今では、もうたばこを吸うまいと家族みんなが信じている。',
            romaji: 'Ima de wa, mō tabako o suu mai to kazoku minna ga shinjite iru.',
            meaning: {
              en: 'Now the whole family believes he surely will not smoke anymore.',
              vi: 'Giờ đây cả nhà đều tin ông sẽ không hút thuốc nữa.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did the father decide to quit smoking?',
              vi: 'Vì sao người cha quyết định bỏ thuốc?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Because he became seriously ill', vi: 'Vì ông bị bệnh nặng' }
              },
              {
                id: 'b',
                label: { en: 'Because cigarettes were expensive', vi: 'Vì thuốc lá đắt' }
              },
              { id: 'c', label: { en: 'Because a friend told him to', vi: 'Vì bạn bè bảo ông' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the father always say?',
              vi: 'Người cha luôn nói điều gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'He will never repeat the same mistake',
                  vi: 'Ông nhất quyết không lặp lại sai lầm'
                }
              },
              { id: 'b', label: { en: 'He wants to smoke again', vi: 'Ông muốn hút thuốc lại' } },
              {
                id: 'c',
                label: { en: 'He regrets quitting', vi: 'Ông hối hận vì đã bỏ thuốc' }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-34',
    number: 34,
    title: {
      en: 'While & In the Process: つつ / つつある',
      vi: 'Vừa … vừa & Đang diễn ra: つつ / つつある'
    },
    focus: {
      en: 'Use つつ for "while / even though" and つつある for a gradual ongoing change.',
      vi: 'Dùng つつ cho "vừa … / dù …" và つつある cho sự thay đổi đang dần diễn ra.'
    },
    vocab: [
      {
        kana: 'はってん',
        kanji: '発展',
        romaji: 'hatten',
        meaning: { en: 'development, growth', vi: 'sự phát triển' }
      },
      {
        kana: 'しんぽ',
        kanji: '進歩',
        romaji: 'shinpo',
        meaning: { en: 'progress, advance', vi: 'sự tiến bộ' }
      },
      {
        kana: 'ぞうか',
        kanji: '増加',
        romaji: 'zōka',
        meaning: { en: 'increase', vi: 'sự gia tăng' }
      },
      {
        kana: 'げんしょう',
        kanji: '減少',
        romaji: 'genshō',
        meaning: { en: 'decrease', vi: 'sự giảm sút' }
      },
      {
        kana: 'へんか',
        kanji: '変化',
        romaji: 'henka',
        meaning: { en: 'change', vi: 'sự thay đổi' }
      },
      {
        kana: 'かいふく',
        kanji: '回復',
        romaji: 'kaifuku',
        meaning: { en: 'recovery', vi: 'sự hồi phục' }
      },
      {
        kana: 'かんきょう',
        kanji: '環境',
        romaji: 'kankyō',
        meaning: { en: 'environment', vi: 'môi trường' }
      },
      {
        kana: 'ぎじゅつ',
        kanji: '技術',
        romaji: 'gijutsu',
        meaning: { en: 'technology, skill', vi: 'kỹ thuật, công nghệ' }
      },
      {
        kana: 'ふきゅう',
        kanji: '普及',
        romaji: 'fukyū',
        meaning: { en: 'spread, popularization', vi: 'sự phổ biến' }
      },
      {
        kana: 'じょうきょう',
        kanji: '状況',
        romaji: 'jōkyō',
        meaning: { en: 'situation, circumstances', vi: 'tình hình' }
      },
      {
        kana: 'なれる',
        kanji: '慣れる',
        romaji: 'nareru',
        meaning: { en: 'to get used to', vi: 'quen với' }
      },
      {
        kana: 'きゅうそく',
        kanji: '急速',
        romaji: 'kyūsoku',
        meaning: { en: 'rapid (na-adj)', vi: 'nhanh chóng' }
      }
    ],
    grammar: [
      {
        pattern: 'V（ます-stem）＋ つつ',
        title: { en: 'つつ — while doing (simultaneous)', vi: 'つつ — vừa … vừa (đồng thời)' },
        explanation: {
          en: 'A formal, written equivalent of ながら: two actions by the same person at the same time.',
          vi: 'Tương đương trang trọng, văn viết của ながら: hai hành động của cùng một người diễn ra cùng lúc.'
        },
        examples: [
          {
            jp: '音楽を聞きつつ、レポートを書いた。',
            romaji: 'Ongaku o kikitsutsu, repōto o kaita.',
            meaning: {
              en: 'I wrote the report while listening to music.',
              vi: 'Tôi vừa nghe nhạc vừa viết báo cáo.'
            }
          },
          {
            jp: '将来のことを考えつつ、毎日勉強している。',
            romaji: 'Shōrai no koto o kangaetsutsu, mainichi benkyō shite iru.',
            meaning: {
              en: 'I study every day while thinking about the future.',
              vi: 'Tôi vừa nghĩ về tương lai vừa học mỗi ngày.'
            }
          }
        ]
      },
      {
        pattern: 'V（ます-stem）＋ つつ（も）',
        title: { en: 'つつ(も) — even though', vi: 'つつ(も) — mặc dù' },
        explanation: {
          en: 'With contrast (often つつも) it means "even though / although", linking two facts that conflict.',
          vi: 'Khi mang nghĩa tương phản (thường つつも) nghĩa là "mặc dù", nối hai sự việc mâu thuẫn nhau.'
        },
        examples: [
          {
            jp: '体に悪いと知りつつ、たばこをやめられない。',
            romaji: 'Karada ni warui to shiritsutsu, tabako o yamerarenai.',
            meaning: {
              en: 'Even though I know it is bad for my health, I cannot quit smoking.',
              vi: 'Dù biết là hại sức khỏe, tôi vẫn không bỏ được thuốc lá.'
            }
          },
          {
            jp: '反省しつつも、また同じ失敗をしてしまった。',
            romaji: 'Hansei shitsutsu mo, mata onaji shippai o shite shimatta.',
            meaning: {
              en: 'Even while regretting it, I made the same mistake again.',
              vi: 'Dù đã tự kiểm điểm, tôi lại mắc đúng sai lầm đó.'
            }
          }
        ]
      },
      {
        pattern: 'V（ます-stem）＋ つつある',
        title: { en: 'つつある — in the process of', vi: 'つつある — đang dần diễn ra' },
        explanation: {
          en: 'Shows a change that is gradually progressing toward some state. More formal than ている for trends.',
          vi: 'Diễn tả một thay đổi đang dần tiến tới trạng thái nào đó. Trang trọng hơn ている khi nói về xu hướng.'
        },
        examples: [
          {
            jp: '景気は少しずつ回復しつつある。',
            romaji: 'Keiki wa sukoshi zutsu kaifuku shitsutsu aru.',
            meaning: {
              en: 'The economy is gradually recovering.',
              vi: 'Nền kinh tế đang dần hồi phục.'
            }
          },
          {
            jp: '新しい技術が急速に普及しつつある。',
            romaji: 'Atarashii gijutsu ga kyūsoku ni fukyū shitsutsu aru.',
            meaning: {
              en: 'The new technology is rapidly spreading.',
              vi: 'Công nghệ mới đang nhanh chóng phổ biến.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A changing daily life', vi: 'Cuộc sống đang đổi thay' },
        lines: [
          {
            jp: 'インターネットは、今も急速に普及しつつある。',
            romaji: 'Intānetto wa, ima mo kyūsoku ni fukyū shitsutsu aru.',
            meaning: {
              en: 'The Internet is still rapidly spreading even now.',
              vi: 'Internet hiện vẫn đang nhanh chóng phổ biến.'
            }
          },
          {
            jp: '便利だと知りつつ、使い方が分からない人も多い。',
            romaji: 'Benri da to shiritsutsu, tsukaikata ga wakaranai hito mo ōi.',
            meaning: {
              en: 'Even knowing it is convenient, many people do not know how to use it.',
              vi: 'Dù biết là tiện lợi, nhiều người vẫn không biết cách dùng.'
            }
          },
          {
            jp: '技術の進歩とともに、生活も変化しつつある。',
            romaji: 'Gijutsu no shinpo to tomo ni, seikatsu mo henka shitsutsu aru.',
            meaning: {
              en: 'Along with the progress of technology, life is also changing.',
              vi: 'Cùng với sự tiến bộ của kỹ thuật, cuộc sống cũng đang thay đổi.'
            }
          },
          {
            jp: '私も新しい技術に、少しずつ慣れつつある。',
            romaji: 'Watashi mo atarashii gijutsu ni, sukoshi zutsu nare tsutsu aru.',
            meaning: {
              en: 'I too am gradually getting used to the new technology.',
              vi: 'Tôi cũng đang dần quen với công nghệ mới.'
            }
          },
          {
            jp: '問題もあると思いつつ、その便利さは認めている。',
            romaji: 'Mondai mo aru to omoitsutsu, sono benrisa wa mitomete iru.',
            meaning: {
              en: 'Even though I think there are problems, I acknowledge its convenience.',
              vi: 'Dù nghĩ rằng vẫn có vấn đề, tôi vẫn công nhận sự tiện lợi của nó.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is happening to the Internet?',
              vi: 'Điều gì đang xảy ra với Internet?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It is spreading rapidly', vi: 'Đang phổ biến nhanh chóng' }
              },
              { id: 'b', label: { en: 'It is disappearing', vi: 'Đang biến mất' } },
              {
                id: 'c',
                label: { en: 'It is becoming inconvenient', vi: 'Đang trở nên bất tiện' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How does the writer feel about the new technology?',
              vi: 'Người viết cảm thấy thế nào về công nghệ mới?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Getting used to it gradually', vi: 'Đang dần quen với nó' }
              },
              { id: 'b', label: { en: 'Refuses to use it', vi: 'Từ chối sử dụng nó' } },
              { id: 'c', label: { en: 'Already an expert', vi: 'Đã là chuyên gia' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-35',
    number: 35,
    title: {
      en: 'Seeing It Through: ぬく',
      vi: 'Làm đến cùng: ぬく'
    },
    focus: {
      en: 'Use ぬく to say you did something all the way through, overcoming difficulty.',
      vi: 'Dùng ぬく để nói làm gì đó đến cùng, vượt qua khó khăn.'
    },
    vocab: [
      {
        kana: 'さいご',
        kanji: '最後',
        romaji: 'saigo',
        meaning: { en: 'the end, the last', vi: 'cuối cùng' }
      },
      {
        kana: 'はしる',
        kanji: '走る',
        romaji: 'hashiru',
        meaning: { en: 'to run', vi: 'chạy' }
      },
      {
        kana: 'たたかう',
        kanji: '戦う',
        romaji: 'tatakau',
        meaning: { en: 'to fight, struggle', vi: 'chiến đấu' }
      },
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'sự nỗ lực' }
      },
      {
        kana: 'くるしい',
        kanji: '苦しい',
        romaji: 'kurushii',
        meaning: { en: 'painful, tough', vi: 'khổ sở, vất vả' }
      },
      {
        kana: 'かんがえる',
        kanji: '考える',
        romaji: 'kangaeru',
        meaning: { en: 'to think, consider', vi: 'suy nghĩ' }
      },
      {
        kana: 'やりとげる',
        kanji: 'やり遂げる',
        romaji: 'yaritogeru',
        meaning: { en: 'to accomplish, carry out', vi: 'hoàn thành trọn vẹn' }
      },
      {
        kana: 'こんなん',
        kanji: '困難',
        romaji: 'konnan',
        meaning: { en: 'hardship, difficulty', vi: 'khó khăn' }
      },
      {
        kana: 'しんねん',
        kanji: '信念',
        romaji: 'shinnen',
        meaning: { en: 'conviction, belief', vi: 'niềm tin, lập trường' }
      },
      {
        kana: 'げんかい',
        kanji: '限界',
        romaji: 'genkai',
        meaning: { en: 'limit', vi: 'giới hạn' }
      },
      {
        kana: 'たえる',
        kanji: '耐える',
        romaji: 'taeru',
        meaning: { en: 'to endure', vi: 'chịu đựng' }
      },
      {
        kana: 'かつ',
        kanji: '勝つ',
        romaji: 'katsu',
        meaning: { en: 'to win', vi: 'chiến thắng' }
      }
    ],
    grammar: [
      {
        pattern: 'V（ます-stem）＋ ぬく',
        title: { en: 'ぬく — do all the way through', vi: 'ぬく — làm đến cùng' },
        explanation: {
          en: 'Stresses finishing an action completely despite hardship, by sheer effort or willpower.',
          vi: 'Nhấn mạnh việc làm xong một hành động đến cùng dù khó khăn, bằng nỗ lực và ý chí.'
        },
        examples: [
          {
            jp: '苦しかったが、最後まで走りぬいた。',
            romaji: 'Kurushikatta ga, saigo made hashirinuita.',
            meaning: {
              en: 'It was tough, but I ran all the way to the end.',
              vi: 'Tuy vất vả nhưng tôi đã chạy đến cùng.'
            }
          },
          {
            jp: '困難な状況でも、彼は最後まで戦いぬいた。',
            romaji: 'Konnan na jōkyō demo, kare wa saigo made tatakainuita.',
            meaning: {
              en: 'Even in hard circumstances, he fought it through to the end.',
              vi: 'Dù hoàn cảnh khó khăn, anh ấy đã chiến đấu đến cùng.'
            }
          }
        ]
      },
      {
        pattern: 'V（ます-stem）＋ ぬく（考えぬく）',
        title: { en: 'ぬく — do thoroughly', vi: 'ぬく — làm thấu đáo' },
        explanation: {
          en: 'With mental verbs (考える, 悩む, 選ぶ) it means doing it thoroughly, to the very end.',
          vi: 'Với động từ chỉ tư duy (考える, 悩む, 選ぶ) nghĩa là làm thật thấu đáo, đến tận cùng.'
        },
        examples: [
          {
            jp: 'よく考えぬいた上で、この道を選んだ。',
            romaji: 'Yoku kangaenuita ue de, kono michi o eranda.',
            meaning: {
              en: 'After thinking it through thoroughly, I chose this path.',
              vi: 'Sau khi suy nghĩ thật thấu đáo, tôi đã chọn con đường này.'
            }
          },
          {
            jp: '自分の信念を、最後まで守りぬいた。',
            romaji: 'Jibun no shinnen o, saigo made mamorinuita.',
            meaning: {
              en: 'I held on to my convictions all the way to the end.',
              vi: 'Tôi đã giữ vững niềm tin của mình đến cùng.'
            }
          }
        ]
      },
      {
        pattern: 'V（ます-stem）＋ きる',
        title: { en: 'きる — finish completely', vi: 'きる — làm hết, làm xong hẳn' },
        explanation: {
          en: 'A related ending: きる stresses completing or using something up fully, while ぬく stresses overcoming hardship.',
          vi: 'Một đuôi liên quan: きる nhấn mạnh làm xong hẳn hay dùng hết, còn ぬく nhấn mạnh vượt qua gian khó.'
        },
        examples: [
          {
            jp: '長い小説を一日で読みきった。',
            romaji: 'Nagai shōsetsu o ichinichi de yomikitta.',
            meaning: {
              en: 'I finished reading the long novel in one day.',
              vi: 'Tôi đã đọc hết cuốn tiểu thuyết dài chỉ trong một ngày.'
            }
          },
          {
            jp: '今月の給料を全部使いきってしまった。',
            romaji: 'Kongetsu no kyūryō o zenbu tsukaikitte shimatta.',
            meaning: {
              en: 'I used up this month\u2019s entire salary.',
              vi: 'Tôi đã tiêu sạch lương tháng này.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Running to the finish', vi: 'Chạy đến vạch đích' },
        lines: [
          {
            jp: '兄は毎日練習を重ね、努力を続けた。',
            romaji: 'Ani wa mainichi renshū o kasane, doryoku o tsuzuketa.',
            meaning: {
              en: 'My brother trained every day and kept up his efforts.',
              vi: 'Anh tôi luyện tập mỗi ngày và tiếp tục nỗ lực.'
            }
          },
          {
            jp: '大会の日、コースはとても苦しかった。',
            romaji: 'Taikai no hi, kōsu wa totemo kurushikatta.',
            meaning: {
              en: 'On race day, the course was very tough.',
              vi: 'Vào ngày thi đấu, đường chạy rất vất vả.'
            }
          },
          {
            jp: '何度も限界を感じたが、最後まで走りぬいた。',
            romaji: 'Nando mo genkai o kanjita ga, saigo made hashirinuita.',
            meaning: {
              en: 'He felt his limit many times, but ran all the way to the end.',
              vi: 'Nhiều lần anh cảm thấy đã tới giới hạn, nhưng vẫn chạy đến cùng.'
            }
          },
          {
            jp: '痛みに耐えぬいて、ついにゴールした。',
            romaji: 'Itami ni taenuite, tsui ni gōru shita.',
            meaning: {
              en: 'Enduring the pain to the very end, he finally reached the goal.',
              vi: 'Chịu đựng cơn đau đến cùng, cuối cùng anh đã về đích.'
            }
          },
          {
            jp: '「あきらめずに戦いぬいてよかった」と兄は笑った。',
            romaji: '"Akiramezu ni tatakainuite yokatta" to ani wa waratta.',
            meaning: {
              en: '"I\u2019m glad I fought it through without giving up," my brother laughed.',
              vi: '"May mà mình không bỏ cuộc mà chiến đấu đến cùng," anh tôi cười.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the brother do every day?',
              vi: 'Mỗi ngày người anh đã làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Kept up his training efforts', vi: 'Duy trì nỗ lực luyện tập' }
              },
              { id: 'b', label: { en: 'Rested completely', vi: 'Nghỉ ngơi hoàn toàn' } },
              { id: 'c', label: { en: 'Gave up running', vi: 'Từ bỏ việc chạy' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How did the brother finish the marathon?',
              vi: 'Người anh đã hoàn thành cuộc đua như thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'He ran to the very end, enduring the pain',
                  vi: 'Chạy đến cùng, chịu đựng cơn đau'
                }
              },
              { id: 'b', label: { en: 'He stopped halfway', vi: 'Dừng lại giữa chừng' } },
              { id: 'c', label: { en: 'He did not take part', vi: 'Không tham gia' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-36',
    number: 36,
    title: {
      en: 'What Can & Cannot Happen: 得る / 得ない',
      vi: 'Điều có thể & không thể: 得る / 得ない'
    },
    focus: {
      en: 'State that something is possible (得る) or utterly impossible (得ない).',
      vi: 'Diễn đạt điều gì đó có thể xảy ra (得る) hoặc hoàn toàn không thể (得ない).'
    },
    vocab: [
      {
        kana: 'かのうせい',
        kanji: '可能性',
        romaji: 'kanōsei',
        meaning: { en: 'possibility', vi: 'khả năng (xảy ra)' }
      },
      {
        kana: 'おこる',
        kanji: '起こる',
        romaji: 'okoru',
        meaning: { en: 'to occur, happen', vi: 'xảy ra' }
      },
      {
        kana: 'よそう',
        kanji: '予想',
        romaji: 'yosō',
        meaning: { en: 'prediction, expectation', vi: 'sự dự đoán' }
      },
      {
        kana: 'そうぞう',
        kanji: '想像',
        romaji: 'sōzō',
        meaning: { en: 'imagination', vi: 'sự tưởng tượng' }
      },
      {
        kana: 'きけん',
        kanji: '危険',
        romaji: 'kiken',
        meaning: { en: 'danger (na-adj)', vi: 'nguy hiểm' }
      },
      {
        kana: 'じこ',
        kanji: '事故',
        romaji: 'jiko',
        meaning: { en: 'accident', vi: 'tai nạn' }
      },
      {
        kana: 'さいがい',
        kanji: '災害',
        romaji: 'saigai',
        meaning: { en: 'disaster', vi: 'thảm họa' }
      },
      {
        kana: 'かいけつ',
        kanji: '解決',
        romaji: 'kaiketsu',
        meaning: { en: 'solution, resolution', vi: 'sự giải quyết' }
      },
      {
        kana: 'じゅうぶん',
        kanji: '十分',
        romaji: 'jūbun',
        meaning: { en: 'enough, sufficient (na-adj)', vi: 'đầy đủ' }
      },
      {
        kana: 'じょうたい',
        kanji: '状態',
        romaji: 'jōtai',
        meaning: { en: 'condition, state', vi: 'trạng thái' }
      },
      {
        kana: 'こうりょ',
        kanji: '考慮',
        romaji: 'kōryo',
        meaning: { en: 'consideration', vi: 'sự cân nhắc' }
      },
      {
        kana: 'げんじつ',
        kanji: '現実',
        romaji: 'genjitsu',
        meaning: { en: 'reality', vi: 'hiện thực' }
      }
    ],
    grammar: [
      {
        pattern: 'V（ます-stem）＋ 得る（うる／える）',
        title: { en: '得る — can possibly happen', vi: '得る — có thể xảy ra' },
        explanation: {
          en: 'Attached to a verb stem, 得る means "it is possible to / such a thing can happen". The dictionary form is read both うる and える.',
          vi: 'Gắn vào thân động từ, 得る nghĩa là "có thể / điều đó có thể xảy ra". Dạng từ điển đọc là うる hoặc える.'
        },
        examples: [
          {
            jp: 'そんな事故は、誰にでも起こり得る。',
            romaji: 'Sonna jiko wa, dare ni demo okori uru.',
            meaning: {
              en: 'Such an accident can happen to anyone.',
              vi: 'Tai nạn như thế có thể xảy ra với bất kỳ ai.'
            }
          },
          {
            jp: 'それは十分に考え得る可能性だ。',
            romaji: 'Sore wa jūbun ni kangae uru kanōsei da.',
            meaning: {
              en: 'That is a possibility one can fully consider.',
              vi: 'Đó là một khả năng hoàn toàn có thể tính đến.'
            }
          }
        ]
      },
      {
        pattern: 'V（ます-stem）＋ 得ない（えない）',
        title: { en: '得ない — cannot possibly happen', vi: '得ない — không thể nào xảy ra' },
        explanation: {
          en: 'The negative 得ない (always read えない) means "it is impossible / unthinkable". ありえない is very common.',
          vi: 'Dạng phủ định 得ない (luôn đọc là えない) nghĩa là "không thể / khó tưởng tượng". ありえない rất thông dụng.'
        },
        examples: [
          {
            jp: '彼が嘘をつくなんて、あり得ない。',
            romaji: 'Kare ga uso o tsuku nante, ari enai.',
            meaning: {
              en: 'It is unthinkable that he would lie.',
              vi: 'Chuyện anh ấy nói dối là điều không thể.'
            }
          },
          {
            jp: '準備なしに成功するなど、考え得ない。',
            romaji: 'Junbi nashi ni seikō suru nado, kangae enai.',
            meaning: {
              en: 'Succeeding without preparation is unthinkable.',
              vi: 'Thành công mà không chuẩn bị là điều không tưởng.'
            }
          }
        ]
      },
      {
        pattern: 'V（る）／N ＋ おそれがある',
        title: { en: 'おそれがある — there is a risk', vi: 'おそれがある — có nguy cơ' },
        explanation: {
          en: 'A related expression for an undesirable possibility: "there is a fear/risk that…". Common in news and warnings.',
          vi: 'Một cấu trúc liên quan cho khả năng xấu: "có nguy cơ / e rằng…". Thường gặp trong tin tức và cảnh báo.'
        },
        examples: [
          {
            jp: '大雨で川が氾濫するおそれがある。',
            romaji: 'Ōame de kawa ga hanran suru osore ga aru.',
            meaning: {
              en: 'There is a risk the river will flood due to the heavy rain.',
              vi: 'Có nguy cơ sông tràn bờ vì mưa lớn.'
            }
          },
          {
            jp: 'この薬には副作用のおそれがある。',
            romaji: 'Kono kusuri ni wa fukusayō no osore ga aru.',
            meaning: {
              en: 'This medicine carries a risk of side effects.',
              vi: 'Thuốc này có nguy cơ gây tác dụng phụ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Being ready for disaster', vi: 'Sẵn sàng cho thảm họa' },
        lines: [
          {
            jp: '大きな地震は、いつでも起こり得る。',
            romaji: 'Ōkina jishin wa, itsu demo okori uru.',
            meaning: {
              en: 'A big earthquake can happen at any time.',
              vi: 'Một trận động đất lớn có thể xảy ra bất cứ lúc nào.'
            }
          },
          {
            jp: '「自分の町は安全だ」とは言い得ない。',
            romaji: '"Jibun no machi wa anzen da" to wa ii enai.',
            meaning: {
              en: 'One cannot say "my town is safe."',
              vi: 'Không thể nói "thị trấn của mình an toàn".'
            }
          },
          {
            jp: '準備が十分でなければ、災害が起こるおそれがある。',
            romaji: 'Junbi ga jūbun de nakereba, saigai ga okoru osore ga aru.',
            meaning: {
              en: 'If preparation is insufficient, there is a risk a disaster will occur.',
              vi: 'Nếu chuẩn bị không đầy đủ, có nguy cơ thảm họa xảy ra.'
            }
          },
          {
            jp: 'しかし、正しく備えれば、被害は減らし得る。',
            romaji: 'Shikashi, tadashiku sonaereba, higai wa herashi uru.',
            meaning: {
              en: 'However, if we prepare properly, the damage can be reduced.',
              vi: 'Tuy nhiên, nếu chuẩn bị đúng cách, thiệt hại có thể được giảm bớt.'
            }
          },
          {
            jp: '「まさか」と考えることこそ、最も危険だと言える。',
            romaji: '"Masaka" to kangaeru koto koso, mottomo kiken da to ieru.',
            meaning: {
              en: 'It can be said that thinking "no way" is the most dangerous thing.',
              vi: 'Có thể nói rằng suy nghĩ "không thể nào" mới là điều nguy hiểm nhất.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'According to the passage, when can a big earthquake happen?',
              vi: 'Theo đoạn văn, động đất lớn có thể xảy ra khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'At any time', vi: 'Bất cứ lúc nào' } },
              { id: 'b', label: { en: 'Never', vi: 'Không bao giờ' } },
              { id: 'c', label: { en: 'Only in winter', vi: 'Chỉ vào mùa đông' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What can reduce the damage?',
              vi: 'Điều gì có thể giảm bớt thiệt hại?'
            },
            choices: [
              { id: 'a', label: { en: 'Preparing properly', vi: 'Chuẩn bị đúng cách' } },
              { id: 'b', label: { en: 'Ignoring warnings', vi: 'Phớt lờ cảnh báo' } },
              {
                id: 'c',
                label: { en: 'Saying "my town is safe"', vi: 'Nói "thị trấn của mình an toàn"' }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-37',
    number: 37,
    title: {
      en: 'Unable & Liable: かねる / かねない',
      vi: 'Khó mà & Dễ dẫn đến: かねる / かねない'
    },
    focus: {
      en: 'Politely say you cannot do something (かねる) and warn that something bad might well happen (かねない).',
      vi: 'Nói một cách lịch sự rằng không thể làm gì (かねる) và cảnh báo điều xấu rất dễ xảy ra (かねない).'
    },
    vocab: [
      {
        kana: 'さんせい',
        kanji: '賛成',
        romaji: 'sansei',
        meaning: { en: 'agreement, approval', vi: 'sự tán thành' }
      },
      {
        kana: 'はんだん',
        kanji: '判断',
        romaji: 'handan',
        meaning: { en: 'judgment, decision', vi: 'sự phán đoán' }
      },
      {
        kana: 'せきにん',
        kanji: '責任',
        romaji: 'sekinin',
        meaning: { en: 'responsibility', vi: 'trách nhiệm' }
      },
      {
        kana: 'ひきうける',
        kanji: '引き受ける',
        romaji: 'hikiukeru',
        meaning: { en: 'to take on, undertake', vi: 'nhận lãnh, đảm nhận' }
      },
      {
        kana: 'たいおう',
        kanji: '対応',
        romaji: 'taiō',
        meaning: { en: 'handling, response', vi: 'sự ứng phó, xử lý' }
      },
      {
        kana: 'ようきゅう',
        kanji: '要求',
        romaji: 'yōkyū',
        meaning: { en: 'demand, request', vi: 'yêu cầu' }
      },
      {
        kana: 'むり',
        kanji: '無理',
        romaji: 'muri',
        meaning: { en: 'unreasonable, impossible (na-adj)', vi: 'vô lý, quá sức' }
      },
      {
        kana: 'きき',
        kanji: '危機',
        romaji: 'kiki',
        meaning: { en: 'crisis', vi: 'khủng hoảng' }
      },
      {
        kana: 'まねく',
        kanji: '招く',
        romaji: 'maneku',
        meaning: { en: 'to invite, bring about', vi: 'mời, gây ra' }
      },
      {
        kana: 'そんがい',
        kanji: '損害',
        romaji: 'songai',
        meaning: { en: 'damage, loss', vi: 'thiệt hại' }
      },
      {
        kana: 'もうしわけない',
        kanji: '申し訳ない',
        romaji: 'mōshiwakenai',
        meaning: { en: 'I am terribly sorry', vi: 'thật sự xin lỗi, áy náy' }
      },
      {
        kana: 'しょうち',
        kanji: '承知',
        romaji: 'shōchi',
        meaning: { en: 'consent, acknowledgement', vi: 'sự đồng ý, hiểu rõ' }
      }
    ],
    grammar: [
      {
        pattern: 'V（ます-stem）＋ かねる',
        title: { en: 'かねる — cannot bring oneself to', vi: 'かねる — khó mà làm được' },
        explanation: {
          en: 'A polite, formal way to say "I am unable to / cannot do this". Common in business as a soft refusal.',
          vi: 'Cách nói lịch sự, trang trọng để diễn đạt "tôi không thể làm được". Thường dùng trong kinh doanh như lời từ chối nhẹ nhàng.'
        },
        examples: [
          {
            jp: '申し訳ありませんが、その要求には応じかねます。',
            romaji: 'Mōshiwake arimasen ga, sono yōkyū ni wa ōji kanemasu.',
            meaning: {
              en: 'I am sorry, but we are unable to meet that request.',
              vi: 'Thật xin lỗi, nhưng chúng tôi không thể đáp ứng yêu cầu đó.'
            }
          },
          {
            jp: 'その件については、私には判断しかねます。',
            romaji: 'Sono ken ni tsuite wa, watashi ni wa handan shikanemasu.',
            meaning: {
              en: 'Regarding that matter, I cannot make the decision.',
              vi: 'Về việc đó, tôi không thể tự phán đoán được.'
            }
          }
        ]
      },
      {
        pattern: 'V（ます-stem）＋ かねない',
        title: {
          en: 'かねない — might well happen (bad)',
          vi: 'かねない — rất dễ xảy ra (điều xấu)'
        },
        explanation: {
          en: 'The opposite in feeling: it warns that an undesirable result "could well happen / is quite possible".',
          vi: 'Ngược lại về sắc thái: cảnh báo rằng một kết quả xấu "rất có thể xảy ra".'
        },
        examples: [
          {
            jp: 'そんな無理をすると、病気になりかねない。',
            romaji: 'Sonna muri o suru to, byōki ni narikanenai.',
            meaning: {
              en: 'If you push yourself like that, you might well get sick.',
              vi: 'Nếu cứ làm quá sức như vậy, rất dễ đổ bệnh.'
            }
          },
          {
            jp: '油断すると、大きな事故を招きかねない。',
            romaji: 'Yudan suru to, ōkina jiko o manekikanenai.',
            meaning: {
              en: 'Carelessness could well bring about a serious accident.',
              vi: 'Lơ là thì rất dễ gây ra tai nạn nghiêm trọng.'
            }
          }
        ]
      },
      {
        pattern: 'V（る）＋ わけにはいかない',
        title: {
          en: 'わけにはいかない — cannot (socially)',
          vi: 'わけにはいかない — không thể (vì lẽ phải)'
        },
        explanation: {
          en: 'A related pattern: "I can\u2019t do it" for moral or social reasons, not physical ones.',
          vi: 'Một mẫu liên quan: "không thể làm" vì lý do đạo lý hay xã hội, chứ không phải vì thể chất.'
        },
        examples: [
          {
            jp: '約束したから、行かないわけにはいかない。',
            romaji: 'Yakusoku shita kara, ikanai wake ni wa ikanai.',
            meaning: {
              en: 'I promised, so I cannot just not go.',
              vi: 'Vì đã hứa nên tôi không thể không đi.'
            }
          },
          {
            jp: '責任があるので、途中でやめるわけにはいかない。',
            romaji: 'Sekinin ga aru node, tochū de yameru wake ni wa ikanai.',
            meaning: {
              en: 'I have responsibilities, so I cannot quit halfway.',
              vi: 'Vì có trách nhiệm nên tôi không thể bỏ dở giữa chừng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A difficult request', vi: 'Một yêu cầu khó xử' },
        lines: [
          {
            jp: 'ある日、お客様から無理な要求があった。',
            romaji: 'Aru hi, okyakusama kara muri na yōkyū ga atta.',
            meaning: {
              en: 'One day there was an unreasonable request from a customer.',
              vi: 'Một ngày nọ có một yêu cầu vô lý từ khách hàng.'
            }
          },
          {
            jp: '担当者は「その件はお引き受けしかねます」と丁寧に断った。',
            romaji: 'Tantōsha wa "sono ken wa ohikiuke shikanemasu" to teinei ni kotowatta.',
            meaning: {
              en: 'The person in charge politely refused, saying "we cannot take on that matter."',
              vi: 'Người phụ trách lịch sự từ chối: "chúng tôi không thể nhận việc đó".'
            }
          },
          {
            jp: '無理に対応すれば、大きな損害を招きかねない。',
            romaji: 'Muri ni taiō sureba, ōkina songai o manekikanenai.',
            meaning: {
              en: 'If they handled it forcibly, it could well cause great damage.',
              vi: 'Nếu cố xử lý gượng ép thì rất dễ gây thiệt hại lớn.'
            }
          },
          {
            jp: 'かといって、お客様を無視するわけにはいかない。',
            romaji: 'Ka to itte, okyakusama o mushi suru wake ni wa ikanai.',
            meaning: {
              en: 'Even so, they cannot just ignore the customer.',
              vi: 'Dù vậy, cũng không thể phớt lờ khách hàng.'
            }
          },
          {
            jp: 'よく考えた上で、上司が責任を持って判断した。',
            romaji: 'Yoku kangaeta ue de, jōshi ga sekinin o motte handan shita.',
            meaning: {
              en: 'After careful thought, the boss made the decision responsibly.',
              vi: 'Sau khi cân nhắc kỹ, cấp trên đã quyết định một cách có trách nhiệm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the person in charge respond to the request?',
              vi: 'Người phụ trách đã phản hồi yêu cầu thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Politely refused it', vi: 'Lịch sự từ chối' } },
              { id: 'b', label: { en: 'Immediately accepted it', vi: 'Lập tức chấp nhận' } },
              { id: 'c', label: { en: 'Ignored it', vi: 'Phớt lờ nó' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why couldn\u2019t they simply handle the request?',
              vi: 'Vì sao họ không thể dễ dàng xử lý yêu cầu?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It could cause great damage', vi: 'Nó có thể gây thiệt hại lớn' }
              },
              { id: 'b', label: { en: 'The customer was kind', vi: 'Vì khách hàng tử tế' } },
              { id: 'c', label: { en: 'It was very easy', vi: 'Vì việc đó rất dễ' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-38',
    number: 38,
    title: {
      en: 'Bad Outcomes: ばかりに / あげく / 末に',
      vi: 'Kết cục không hay: ばかりに / あげく / 末に'
    },
    focus: {
      en: 'Blame a result on one cause (ばかりに) and describe what happened after a long process (あげく / 末に).',
      vi: 'Quy kết hậu quả cho một nguyên nhân (ばかりに) và mô tả điều xảy ra sau cả quá trình (あげく / 末に).'
    },
    vocab: [
      {
        kana: 'ふちゅうい',
        kanji: '不注意',
        romaji: 'fuchūi',
        meaning: { en: 'carelessness, inattention', vi: 'sự bất cẩn' }
      },
      {
        kana: 'まよう',
        kanji: '迷う',
        romaji: 'mayou',
        meaning: { en: 'to hesitate, get lost', vi: 'phân vân, lạc đường' }
      },
      {
        kana: 'なやむ',
        kanji: '悩む',
        romaji: 'nayamu',
        meaning: { en: 'to worry, agonize', vi: 'phiền muộn, trăn trở' }
      },
      {
        kana: 'けっきょく',
        kanji: '結局',
        romaji: 'kekkyoku',
        meaning: { en: 'in the end, after all', vi: 'rốt cuộc' }
      },
      {
        kana: 'けっか',
        kanji: '結果',
        romaji: 'kekka',
        meaning: { en: 'result, outcome', vi: 'kết quả' }
      },
      {
        kana: 'しゃっきん',
        kanji: '借金',
        romaji: 'shakkin',
        meaning: { en: 'debt', vi: 'nợ nần' }
      },
      {
        kana: 'くろう',
        kanji: '苦労',
        romaji: 'kurō',
        meaning: { en: 'hardship, troubles', vi: 'gian khổ, vất vả' }
      },
      {
        kana: 'さんざん',
        kanji: '散々',
        romaji: 'sanzan',
        meaning: { en: 'terribly, endlessly (na-adv)', vi: 'thậm tệ, chán chê' }
      },
      {
        kana: 'そん',
        kanji: '損',
        romaji: 'son',
        meaning: { en: 'loss, disadvantage', vi: 'thiệt, bất lợi' }
      },
      {
        kana: 'わかれる',
        kanji: '別れる',
        romaji: 'wakareru',
        meaning: { en: 'to part, break up', vi: 'chia tay, chia ly' }
      },
      {
        kana: 'くやしい',
        kanji: '悔しい',
        romaji: 'kuyashii',
        meaning: { en: 'frustrating, regrettable', vi: 'tiếc nuối, ấm ức' }
      },
      {
        kana: 'いいあらそい',
        kanji: '言い争い',
        romaji: 'iiarasoi',
        meaning: { en: 'quarrel, argument', vi: 'cãi vã' }
      }
    ],
    grammar: [
      {
        pattern: '〜ばかりに',
        title: {
          en: 'ばかりに — simply because (bad result)',
          vi: 'ばかりに — chỉ vì (kết quả xấu)'
        },
        explanation: {
          en: 'States that one single cause led to an unfortunate result: "simply / just because…". Always negative in tone.',
          vi: 'Diễn đạt một nguyên nhân duy nhất dẫn đến kết quả không may: "chỉ vì…". Luôn mang sắc thái tiêu cực.'
        },
        examples: [
          {
            jp: 'お金がないばかりに、進学を諦めた。',
            romaji: 'Okane ga nai bakari ni, shingaku o akirameta.',
            meaning: {
              en: 'Simply because I had no money, I gave up going on to higher education.',
              vi: 'Chỉ vì không có tiền mà tôi đã từ bỏ việc học lên.'
            }
          },
          {
            jp: '一言多かったばかりに、彼を怒らせてしまった。',
            romaji: 'Hitokoto ōkatta bakari ni, kare o okorasete shimatta.',
            meaning: {
              en: 'Just because I said one word too many, I ended up angering him.',
              vi: 'Chỉ vì lỡ nói thừa một câu mà tôi làm anh ấy nổi giận.'
            }
          }
        ]
      },
      {
        pattern: 'V（た）／N の ＋ あげく（に）',
        title: { en: 'あげく — after all (bad end)', vi: 'あげく — sau cùng (kết cục xấu)' },
        explanation: {
          en: 'After much of some action, a (usually bad) result occurred: "after … in the end". Stresses the troublesome process.',
          vi: 'Sau cả một quá trình làm gì đó, một kết quả (thường xấu) xảy ra: "sau khi … rốt cuộc". Nhấn mạnh quá trình nhọc nhằn.'
        },
        examples: [
          {
            jp: '散々悩んだあげく、会社を辞めた。',
            romaji: 'Sanzan nayanda ageku, kaisha o yameta.',
            meaning: {
              en: 'After agonizing endlessly, I ended up quitting the company.',
              vi: 'Sau khi trăn trở chán chê, rốt cuộc tôi nghỉ việc.'
            }
          },
          {
            jp: '長い言い争いのあげく、二人は別れた。',
            romaji: 'Nagai iiarasoi no ageku, futari wa wakareta.',
            meaning: {
              en: 'After a long quarrel, the two of them broke up.',
              vi: 'Sau một hồi cãi vã dài, hai người chia tay.'
            }
          }
        ]
      },
      {
        pattern: 'V（た）／N の ＋ 末（に）',
        title: { en: '末に — after, finally', vi: '末に — sau cùng, cuối cùng' },
        explanation: {
          en: 'Also "after … finally", but more neutral than あげく — the outcome can be good, reached after much effort.',
          vi: 'Cũng nghĩa "sau … cuối cùng", nhưng trung tính hơn あげく — kết quả có thể tốt, đạt được sau nhiều nỗ lực.'
        },
        examples: [
          {
            jp: '長い間考えた末に、留学を決めた。',
            romaji: 'Nagai aida kangaeta sue ni, ryūgaku o kimeta.',
            meaning: {
              en: 'After thinking for a long time, I finally decided to study abroad.',
              vi: 'Sau khi suy nghĩ rất lâu, cuối cùng tôi quyết định đi du học.'
            }
          },
          {
            jp: '長年の苦労の末に、彼は夢を実現した。',
            romaji: 'Naganen no kurō no sue ni, kare wa yume o jitsugen shita.',
            meaning: {
              en: 'After years of hardship, he finally made his dream come true.',
              vi: 'Sau bao năm gian khổ, cuối cùng anh đã thực hiện được ước mơ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A chain of bad choices', vi: 'Chuỗi lựa chọn sai lầm' },
        lines: [
          {
            jp: '友人は楽をしたいばかりに、お金を借りてしまった。',
            romaji: 'Yūjin wa raku o shitai bakari ni, okane o karite shimatta.',
            meaning: {
              en: 'Simply because my friend wanted an easy life, he ended up borrowing money.',
              vi: 'Chỉ vì muốn sống nhàn hạ, bạn tôi đã đi vay tiền.'
            }
          },
          {
            jp: '返せなくなり、悩んだあげく、また別の借金をした。',
            romaji: 'Kaesenaku nari, nayanda ageku, mata betsu no shakkin o shita.',
            meaning: {
              en: 'Unable to repay, after much worrying he took on yet another debt.',
              vi: 'Không trả nổi, sau khi trăn trở mãi, anh lại vay thêm khoản nợ khác.'
            }
          },
          {
            jp: '苦労が続き、結局、家族とも別れてしまった。',
            romaji: 'Kurō ga tsuzuki, kekkyoku, kazoku to mo wakarete shimatta.',
            meaning: {
              en: 'The hardship continued, and in the end he even parted from his family.',
              vi: 'Khó khăn nối tiếp, rốt cuộc anh còn chia ly cả với gia đình.'
            }
          },
          {
            jp: '長い間反省した末に、彼は少しずつ生活を立て直した。',
            romaji:
              'Nagai aida hansei shita sue ni, kare wa sukoshi zutsu seikatsu o tatenaoshita.',
            meaning: {
              en: 'After reflecting for a long time, he gradually rebuilt his life.',
              vi: 'Sau một thời gian dài tự kiểm điểm, anh dần gây dựng lại cuộc sống.'
            }
          },
          {
            jp: '「あの時の選択が悔しい」と彼は今でも言う。',
            romaji: '"Ano toki no sentaku ga kuyashii" to kare wa ima demo iu.',
            meaning: {
              en: '"I regret the choice I made back then," he still says today.',
              vi: '"Tôi tiếc lựa chọn ngày đó," đến giờ anh vẫn nói vậy.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did the friend first borrow money?',
              vi: 'Vì sao ban đầu người bạn vay tiền?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Because he wanted an easy life', vi: 'Vì muốn sống nhàn hạ' }
              },
              { id: 'b', label: { en: 'To help his family', vi: 'Để giúp gia đình' } },
              { id: 'c', label: { en: 'To start a business', vi: 'Để khởi nghiệp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened in the end because of the debt?',
              vi: 'Vì nợ nần, rốt cuộc điều gì đã xảy ra?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'He parted from his family', vi: 'Anh chia ly với gia đình' }
              },
              { id: 'b', label: { en: 'He became rich', vi: 'Anh trở nên giàu có' } },
              { id: 'c', label: { en: 'He moved abroad', vi: 'Anh ra nước ngoài sống' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-39',
    number: 39,
    title: {
      en: 'Along With & Accordingly: とともに / にしたがって',
      vi: 'Cùng với & Theo: とともに / にしたがって'
    },
    focus: {
      en: 'Link two changes that happen together (とともに) and act in accordance with something (にしたがって).',
      vi: 'Nối hai thay đổi diễn ra cùng nhau (とともに) và hành động theo điều gì đó (にしたがって).'
    },
    vocab: [
      {
        kana: 'せいちょう',
        kanji: '成長',
        romaji: 'seichō',
        meaning: { en: 'growth', vi: 'sự trưởng thành' }
      },
      {
        kana: 'ねんれい',
        kanji: '年齢',
        romaji: 'nenrei',
        meaning: { en: 'age', vi: 'tuổi tác' }
      },
      {
        kana: 'しゃかい',
        kanji: '社会',
        romaji: 'shakai',
        meaning: { en: 'society', vi: 'xã hội' }
      },
      {
        kana: 'こうれいか',
        kanji: '高齢化',
        romaji: 'kōreika',
        meaning: { en: 'population aging', vi: 'sự già hóa dân số' }
      },
      {
        kana: 'きそく',
        kanji: '規則',
        romaji: 'kisoku',
        meaning: { en: 'rule, regulation', vi: 'quy tắc' }
      },
      {
        kana: 'しじ',
        kanji: '指示',
        romaji: 'shiji',
        meaning: { en: 'instruction, directive', vi: 'sự chỉ thị' }
      },
      {
        kana: 'めいれい',
        kanji: '命令',
        romaji: 'meirei',
        meaning: { en: 'order, command', vi: 'mệnh lệnh' }
      },
      {
        kana: 'したがう',
        kanji: '従う',
        romaji: 'shitagau',
        meaning: { en: 'to follow, obey', vi: 'tuân theo' }
      },
      {
        kana: 'とし',
        kanji: '都市',
        romaji: 'toshi',
        meaning: { en: 'city', vi: 'thành thị' }
      },
      {
        kana: 'ふえる',
        kanji: '増える',
        romaji: 'fueru',
        meaning: { en: 'to increase', vi: 'tăng lên' }
      },
      {
        kana: 'せいかつ',
        kanji: '生活',
        romaji: 'seikatsu',
        meaning: { en: 'life, living', vi: 'cuộc sống, sinh hoạt' }
      },
      {
        kana: 'ゆたか',
        kanji: '豊か',
        romaji: 'yutaka',
        meaning: { en: 'rich, abundant (na-adj)', vi: 'giàu có, sung túc' }
      }
    ],
    grammar: [
      {
        pattern: 'N／V（る）＋ とともに',
        title: { en: 'とともに — together with / as', vi: 'とともに — cùng với / khi' },
        explanation: {
          en: 'Links two things that change at the same time: "as A …, B also …". Also means "together with (someone)".',
          vi: 'Nối hai sự việc thay đổi đồng thời: "khi A …, thì B cũng …". Cũng có nghĩa "cùng với (ai đó)".'
        },
        examples: [
          {
            jp: '年をとるとともに、記憶力が落ちてきた。',
            romaji: 'Toshi o toru to tomo ni, kiokuryoku ga ochite kita.',
            meaning: {
              en: 'As I grow older, my memory has been declining.',
              vi: 'Càng lớn tuổi, trí nhớ của tôi càng giảm sút.'
            }
          },
          {
            jp: '経済の発展とともに、生活が豊かになった。',
            romaji: 'Keizai no hatten to tomo ni, seikatsu ga yutaka ni natta.',
            meaning: {
              en: 'Along with economic development, life became more affluent.',
              vi: 'Cùng với sự phát triển kinh tế, cuộc sống trở nên sung túc.'
            }
          }
        ]
      },
      {
        pattern: 'N／V（る）＋ にしたがって',
        title: { en: 'にしたがって — in accordance with / as', vi: 'にしたがって — theo / khi' },
        explanation: {
          en: 'Two uses: a gradual change ("as A changes, B changes") and "in accordance with (rules, instructions)".',
          vi: 'Hai cách dùng: thay đổi dần dần ("khi A đổi thì B đổi") và "theo, tuân theo (quy tắc, chỉ thị)".'
        },
        examples: [
          {
            jp: '山を登るにしたがって、気温が下がっていった。',
            romaji: 'Yama o noboru ni shitagatte, kion ga sagatte itta.',
            meaning: {
              en: 'As I climbed the mountain, the temperature kept dropping.',
              vi: 'Càng leo núi, nhiệt độ càng giảm.'
            }
          },
          {
            jp: '規則にしたがって、行動してください。',
            romaji: 'Kisoku ni shitagatte, kōdō shite kudasai.',
            meaning: {
              en: 'Please act in accordance with the rules.',
              vi: 'Hãy hành động theo đúng quy tắc.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ に応じて',
        title: { en: 'に応じて — depending on', vi: 'に応じて — tùy theo' },
        explanation: {
          en: 'A related pattern meaning "in response to / depending on": the action adapts to changing conditions.',
          vi: 'Một mẫu liên quan nghĩa "tùy theo / ứng với": hành động thay đổi cho phù hợp với điều kiện.'
        },
        examples: [
          {
            jp: '収入に応じて、税金を払う。',
            romaji: 'Shūnyū ni ōjite, zeikin o harau.',
            meaning: {
              en: 'You pay taxes according to your income.',
              vi: 'Đóng thuế tùy theo thu nhập.'
            }
          },
          {
            jp: '状況に応じて、計画を変えるつもりだ。',
            romaji: 'Jōkyō ni ōjite, keikaku o kaeru tsumori da.',
            meaning: {
              en: 'I intend to change the plan depending on the situation.',
              vi: 'Tôi định thay đổi kế hoạch tùy theo tình hình.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'An aging society', vi: 'Một xã hội già hóa' },
        lines: [
          {
            jp: '日本では、社会の高齢化が進んでいる。',
            romaji: 'Nihon de wa, shakai no kōreika ga susunde iru.',
            meaning: {
              en: 'In Japan, the aging of society is advancing.',
              vi: 'Ở Nhật, sự già hóa của xã hội đang diễn ra.'
            }
          },
          {
            jp: '年齢が上がるとともに、働く人の数は減っていく。',
            romaji: 'Nenrei ga agaru to tomo ni, hataraku hito no kazu wa hette iku.',
            meaning: {
              en: 'As age rises, the number of working people decreases.',
              vi: 'Khi tuổi tác tăng lên, số người lao động giảm dần.'
            }
          },
          {
            jp: '政府の指示にしたがって、企業も働き方を変えている。',
            romaji: 'Seifu no shiji ni shitagatte, kigyō mo hatarakikata o kaete iru.',
            meaning: {
              en: 'In accordance with government instructions, companies are also changing how people work.',
              vi: 'Theo chỉ thị của chính phủ, các doanh nghiệp cũng đang thay đổi cách làm việc.'
            }
          },
          {
            jp: '都市では人口が増える一方で、地方は人が減っている。',
            romaji: 'Toshi de wa jinkō ga fueru ippō de, chihō wa hito ga hette iru.',
            meaning: {
              en: 'While the population grows in cities, people are decreasing in rural areas.',
              vi: 'Trong khi dân số ở thành thị tăng, thì ở nông thôn người ta lại giảm.'
            }
          },
          {
            jp: '状況に応じて、新しい仕組みが必要になっている。',
            romaji: 'Jōkyō ni ōjite, atarashii shikumi ga hitsuyō ni natte iru.',
            meaning: {
              en: 'Depending on the situation, new systems are becoming necessary.',
              vi: 'Tùy theo tình hình, những cơ chế mới đang trở nên cần thiết.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is progressing in Japanese society?',
              vi: 'Điều gì đang diễn ra trong xã hội Nhật?'
            },
            choices: [
              { id: 'a', label: { en: 'The aging of society', vi: 'Sự già hóa của xã hội' } },
              { id: 'b', label: { en: 'A decrease in cities', vi: 'Sự sụt giảm ở thành thị' } },
              { id: 'c', label: { en: 'Industrialization', vi: 'Quá trình công nghiệp hóa' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'According to the passage, what happens as age rises?',
              vi: 'Theo đoạn văn, khi tuổi tác tăng lên thì điều gì xảy ra?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The number of working people decreases',
                  vi: 'Số người lao động giảm xuống'
                }
              },
              { id: 'b', label: { en: 'Cities lose population', vi: 'Thành thị mất dân số' } },
              {
                id: 'c',
                label: { en: 'Companies stop changing', vi: 'Doanh nghiệp ngừng thay đổi' }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-40',
    number: 40,
    title: {
      en: 'As Things Change: につれて / にともなって / やら〜やら',
      vi: 'Khi mọi thứ đổi thay: につれて / にともなって / やら〜やら'
    },
    focus: {
      en: 'Show one change driving another (につれて / にともなって) and list a jumble of things with やら〜やら.',
      vi: 'Diễn tả một thay đổi kéo theo thay đổi khác (につれて / にともなって) và liệt kê hỗn độn với やら〜やら.'
    },
    vocab: [
      {
        kana: 'きせつ',
        kanji: '季節',
        romaji: 'kisetsu',
        meaning: { en: 'season', vi: 'mùa' }
      },
      {
        kana: 'きこう',
        kanji: '気候',
        romaji: 'kikō',
        meaning: { en: 'climate', vi: 'khí hậu' }
      },
      {
        kana: 'じんこう',
        kanji: '人口',
        romaji: 'jinkō',
        meaning: { en: 'population', vi: 'dân số' }
      },
      {
        kana: 'こうぎょうか',
        kanji: '工業化',
        romaji: 'kōgyōka',
        meaning: { en: 'industrialization', vi: 'sự công nghiệp hóa' }
      },
      {
        kana: 'そうおん',
        kanji: '騒音',
        romaji: 'sōon',
        meaning: { en: 'noise', vi: 'tiếng ồn' }
      },
      {
        kana: 'じゅうたい',
        kanji: '渋滞',
        romaji: 'jūtai',
        meaning: { en: 'traffic jam', vi: 'sự tắc đường' }
      },
      {
        kana: 'ひっこし',
        kanji: '引っ越し',
        romaji: 'hikkoshi',
        meaning: { en: 'moving (house)', vi: 'việc chuyển nhà' }
      },
      {
        kana: 'じゅんび',
        kanji: '準備',
        romaji: 'junbi',
        meaning: { en: 'preparation', vi: 'sự chuẩn bị' }
      },
      {
        kana: 'そうじ',
        kanji: '掃除',
        romaji: 'sōji',
        meaning: { en: 'cleaning', vi: 'việc dọn dẹp' }
      },
      {
        kana: 'いそがしい',
        kanji: '忙しい',
        romaji: 'isogashii',
        meaning: { en: 'busy', vi: 'bận rộn' }
      },
      {
        kana: 'ちかづく',
        kanji: '近づく',
        romaji: 'chikazuku',
        meaning: { en: 'to approach, draw near', vi: 'tới gần' }
      },
      {
        kana: 'にづくり',
        kanji: '荷造り',
        romaji: 'nizukuri',
        meaning: { en: 'packing (luggage)', vi: 'việc đóng gói hành lý' }
      }
    ],
    grammar: [
      {
        pattern: 'V（る）／N ＋ につれて',
        title: { en: 'につれて — as … gradually', vi: 'につれて — càng … thì càng' },
        explanation: {
          en: 'As one thing changes gradually, another changes along with it. Both sides are continuous, gradual changes.',
          vi: 'Khi một việc thay đổi dần, việc khác cũng thay đổi theo. Cả hai vế đều là thay đổi liên tục, từ từ.'
        },
        examples: [
          {
            jp: '時間がたつにつれて、痛みは消えていった。',
            romaji: 'Jikan ga tatsu ni tsurete, itami wa kiete itta.',
            meaning: {
              en: 'As time passed, the pain gradually went away.',
              vi: 'Thời gian trôi qua, cơn đau dần biến mất.'
            }
          },
          {
            jp: '試験が近づくにつれて、不安になってきた。',
            romaji: 'Shiken ga chikazuku ni tsurete, fuan ni natte kita.',
            meaning: {
              en: 'As the exam draws near, I have become anxious.',
              vi: 'Kỳ thi càng tới gần, tôi càng thấy lo lắng.'
            }
          }
        ]
      },
      {
        pattern: 'N／V（る）の ＋ にともなって',
        title: { en: 'にともなって — accompanying a change', vi: 'にともなって — đi kèm với' },
        explanation: {
          en: 'One change brings another along with it: "accompanying / as a result of". More formal, often with nouns of change.',
          vi: 'Một thay đổi kéo theo thay đổi khác: "đi kèm / kéo theo". Trang trọng hơn, hay dùng với danh từ chỉ biến đổi.'
        },
        examples: [
          {
            jp: '人口の増加にともなって、住宅が不足している。',
            romaji: 'Jinkō no zōka ni tomonatte, jūtaku ga fusoku shite iru.',
            meaning: {
              en: 'Accompanying the population increase, housing is becoming scarce.',
              vi: 'Đi kèm với việc dân số tăng, nhà ở đang thiếu hụt.'
            }
          },
          {
            jp: '工業化にともなって、騒音が増えた。',
            romaji: 'Kōgyōka ni tomonatte, sōon ga fueta.',
            meaning: {
              en: 'With industrialization, noise increased.',
              vi: 'Cùng với công nghiệp hóa, tiếng ồn đã tăng lên.'
            }
          }
        ]
      },
      {
        pattern: 'N やら N やら',
        title: { en: 'やら〜やら — things like … and …', vi: 'やら〜やら — nào là … nào là …' },
        explanation: {
          en: 'Lists examples in a jumbled, often overwhelmed way: "what with … and …". Can join nouns or plain-form predicates.',
          vi: 'Liệt kê các ví dụ một cách hỗn độn, thường mang ý ngổn ngang: "nào là … nào là …". Nối danh từ hoặc vị ngữ thể thường.'
        },
        examples: [
          {
            jp: '引っ越しの準備で、掃除やら荷造りやらで忙しい。',
            romaji: 'Hikkoshi no junbi de, sōji yara nizukuri yara de isogashii.',
            meaning: {
              en: 'With moving preparations, I am busy with cleaning, packing, and all that.',
              vi: 'Chuẩn bị chuyển nhà, nào là dọn dẹp nào là đóng gói nên rất bận.'
            }
          },
          {
            jp: 'うれしいやら恥ずかしいやらで、何も言えなかった。',
            romaji: 'Ureshii yara hazukashii yara de, nani mo ienakatta.',
            meaning: {
              en: 'What with being happy and embarrassed, I could not say anything.',
              vi: 'Nào là vui nào là ngượng, tôi chẳng nói được gì.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Getting ready to move', vi: 'Chuẩn bị chuyển nhà' },
        lines: [
          {
            jp: '引っ越しの日が近づくにつれて、することが増えてきた。',
            romaji: 'Hikkoshi no hi ga chikazuku ni tsurete, suru koto ga fuete kita.',
            meaning: {
              en: 'As moving day approaches, there is more and more to do.',
              vi: 'Ngày chuyển nhà càng tới gần, việc phải làm càng nhiều.'
            }
          },
          {
            jp: '掃除やら荷造りやらで、毎日とても忙しい。',
            romaji: 'Sōji yara nizukuri yara de, mainichi totemo isogashii.',
            meaning: {
              en: 'What with cleaning, packing, and so on, I am very busy every day.',
              vi: 'Nào là dọn dẹp nào là đóng gói, ngày nào cũng bận rộn.'
            }
          },
          {
            jp: '今の町は、人口の増加にともなって、渋滞も騒音もひどくなった。',
            romaji: 'Ima no machi wa, jinkō no zōka ni tomonatte, jūtai mo sōon mo hidoku natta.',
            meaning: {
              en: 'In my current town, with the population increase, both traffic jams and noise got worse.',
              vi: 'Ở thị trấn hiện tại, cùng với dân số tăng, cả tắc đường lẫn tiếng ồn đều tệ hơn.'
            }
          },
          {
            jp: 'それで、静かな町へ引っ越すことにした。',
            romaji: 'Sorede, shizuka na machi e hikkosu koto ni shita.',
            meaning: {
              en: 'So I decided to move to a quiet town.',
              vi: 'Vì vậy tôi quyết định chuyển đến một thị trấn yên tĩnh.'
            }
          },
          {
            jp: '新しい生活に慣れるにつれて、不安は消えていくだろう。',
            romaji: 'Atarashii seikatsu ni nareru ni tsurete, fuan wa kiete iku darō.',
            meaning: {
              en: 'As I get used to the new life, my anxiety will probably fade away.',
              vi: 'Khi dần quen với cuộc sống mới, nỗi bất an chắc sẽ tan biến.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happens as moving day approaches?',
              vi: 'Khi ngày chuyển nhà tới gần thì điều gì xảy ra?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'There is more and more to do', vi: 'Việc phải làm ngày càng nhiều' }
              },
              { id: 'b', label: { en: 'There is less to do', vi: 'Việc phải làm ít đi' } },
              { id: 'c', label: { en: 'Nothing changes', vi: 'Không có gì thay đổi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why did the writer decide to move?',
              vi: 'Vì sao người viết quyết định chuyển nhà?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The city\u2019s traffic and noise got worse',
                  vi: 'Tắc đường và tiếng ồn của thành phố tệ hơn'
                }
              },
              { id: 'b', label: { en: 'The new house was cheap', vi: 'Nhà mới rẻ' } },
              { id: 'c', label: { en: 'Friends asked them to', vi: 'Bạn bè rủ rê' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
