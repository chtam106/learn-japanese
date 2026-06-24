import type { Lesson } from '../types.ts';

export const n1LessonsB: Lesson[] = [
  {
    id: 'lesson-9',
    number: 9,
    title: {
      en: 'Whatever It Is: 〜であれ / 〜であろうと',
      vi: 'Dù là gì đi nữa: 〜であれ / 〜であろうと'
    },
    focus: {
      en: 'Concede that a conclusion holds no matter what the noun or situation is, using the formal 〜であれ and 〜であろうと.',
      vi: 'Khẳng định một kết luận đúng bất kể danh từ hay tình huống là gì, dùng mẫu trang trọng 〜であれ và 〜であろうと.'
    },
    vocab: [
      {
        kana: 'けいえいしゃ',
        kanji: '経営者',
        romaji: 'keieisha',
        meaning: { en: 'manager, executive', vi: 'người quản lý, nhà điều hành' }
      },
      {
        kana: 'りえき',
        kanji: '利益',
        romaji: 'rieki',
        meaning: { en: 'profit, benefit', vi: 'lợi nhuận, lợi ích' }
      },
      {
        kana: 'せきにん',
        kanji: '責任',
        romaji: 'sekinin',
        meaning: { en: 'responsibility', vi: 'trách nhiệm' }
      },
      {
        kana: 'たちば',
        kanji: '立場',
        romaji: 'tachiba',
        meaning: { en: 'position, standpoint', vi: 'lập trường, vị thế' }
      },
      {
        kana: 'はたす',
        kanji: '果たす',
        romaji: 'hatasu',
        meaning: { en: 'to fulfill, carry out', vi: 'hoàn thành, thực hiện' }
      },
      {
        kana: 'けんりょく',
        kanji: '権力',
        romaji: 'kenryoku',
        meaning: { en: 'power, authority', vi: 'quyền lực' }
      },
      {
        kana: 'のがれる',
        kanji: '逃れる',
        romaji: 'nogareru',
        meaning: { en: 'to escape, evade', vi: 'thoát khỏi, trốn tránh' }
      },
      {
        kana: 'こうへい',
        kanji: '公平',
        romaji: 'kōhei',
        meaning: { en: 'fairness, impartiality', vi: 'sự công bằng' }
      },
      {
        kana: 'あつかう',
        kanji: '扱う',
        romaji: 'atsukau',
        meaning: { en: 'to treat, handle', vi: 'đối xử, xử lý' }
      },
      {
        kana: 'こんなん',
        kanji: '困難',
        romaji: 'konnan',
        meaning: { en: 'difficulty, hardship', vi: 'khó khăn, gian nan' }
      },
      {
        kana: 'たちむかう',
        kanji: '立ち向かう',
        romaji: 'tachimukau',
        meaning: { en: 'to confront, face', vi: 'đối mặt, đương đầu' }
      },
      {
        kana: 'りねん',
        kanji: '理念',
        romaji: 'rinen',
        meaning: { en: 'principle, philosophy', vi: 'lý tưởng, triết lý' }
      }
    ],
    grammar: [
      {
        pattern: 'N であれ',
        title: { en: 'Whoever / whatever it may be', vi: 'Dù là ai / là gì đi nữa' },
        explanation: {
          en: 'Attach であれ to a noun to mean "no matter what/who it is". The main clause states a conclusion that holds regardless. It is formal and often used with words like だれ, どこ, or どんな.',
          vi: 'Gắn であれ vào danh từ để diễn đạt "dù là gì/ai đi nữa". Mệnh đề chính nêu kết luận đúng bất kể điều đó. Mẫu này trang trọng, hay đi với だれ, どこ hay どんな.'
        },
        examples: [
          {
            jp: 'どんな立場であれ、果たすべき責任からは逃れられない。',
            romaji: 'Donna tachiba de are, hatasubeki sekinin kara wa nogarerarenai.',
            meaning: {
              en: 'Whatever your position is, you cannot escape the responsibility you must fulfill.',
              vi: 'Dù ở lập trường nào đi nữa, bạn cũng không thể trốn tránh trách nhiệm phải hoàn thành.'
            }
          },
          {
            jp: '経営者であれ社員であれ、規則は公平に扱われる。',
            romaji: 'Keieisha de are shain de are, kisoku wa kōhei ni atsukawareru.',
            meaning: {
              en: 'Whether manager or employee, the rules are applied fairly.',
              vi: 'Dù là nhà điều hành hay nhân viên, quy định đều được áp dụng công bằng.'
            }
          }
        ]
      },
      {
        pattern: 'N／普通形 であろうと',
        title: { en: 'No matter that it is', vi: 'Cho dù là' },
        explanation: {
          en: 'であろうと (volitional of だ + と) is a slightly stronger, more literary variant of であれ. It concedes any condition and is common in speeches and formal writing.',
          vi: 'であろうと (thể ý chí của だ + と) là biến thể mạnh hơn, văn vẻ hơn của であれ. Nó nhượng bộ mọi điều kiện, hay gặp trong diễn văn và văn viết trang trọng.'
        },
        examples: [
          {
            jp: '相手がどんな権力者であろうと、私は意見を変えない。',
            romaji: 'Aite ga donna kenryokusha de arō to, watashi wa iken o kaenai.',
            meaning: {
              en: 'No matter how powerful the other party is, I will not change my opinion.',
              vi: 'Cho dù đối phương có quyền lực đến đâu, tôi cũng không đổi ý kiến.'
            }
          },
          {
            jp: 'どんな困難であろうと、理念を曲げるつもりはない。',
            romaji: 'Donna konnan de arō to, rinen o mageru tsumori wa nai.',
            meaning: {
              en: 'No matter what difficulty arises, I have no intention of bending my principles.',
              vi: 'Cho dù gặp khó khăn gì đi nữa, tôi cũng không định bẻ cong lý tưởng của mình.'
            }
          }
        ]
      },
      {
        pattern: '疑問詞 〜であれ',
        title: { en: 'Question word + であれ', vi: 'Từ nghi vấn + であれ' },
        explanation: {
          en: 'When paired with a question word (だれ, なに, いつ, どこ), であれ covers every case in that category, like English "whoever / whenever / wherever".',
          vi: 'Khi đi với từ nghi vấn (だれ, なに, いつ, どこ), であれ bao trùm mọi trường hợp thuộc loại đó, như "bất kể ai / khi nào / ở đâu" trong tiếng Anh.'
        },
        examples: [
          {
            jp: 'だれであれ、ルールを破れば責任を問われる。',
            romaji: 'Dare de are, rūru o yabureba sekinin o towareru.',
            meaning: {
              en: 'Whoever it is, if they break the rules they will be held responsible.',
              vi: 'Bất kể là ai, nếu phá vỡ quy tắc thì sẽ bị truy cứu trách nhiệm.'
            }
          },
          {
            jp: 'いつであれ、困難に立ち向かう覚悟はできている。',
            romaji: 'Itsu de are, konnan ni tachimukau kakugo wa dekite iru.',
            meaning: {
              en: 'Whenever it may be, I am prepared to confront the difficulty.',
              vi: 'Bất kể khi nào, tôi đều đã sẵn sàng đương đầu với khó khăn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: "A leader's creed", vi: 'Tín niệm của người lãnh đạo' },
        lines: [
          {
            jp: '新しい経営者は就任のあいさつでこう述べた。',
            romaji: 'Atarashii keieisha wa shūnin no aisatsu de kō nobeta.',
            meaning: {
              en: 'The new executive said the following in his inaugural address.',
              vi: 'Nhà điều hành mới đã phát biểu như sau trong bài diễn văn nhậm chức.'
            }
          },
          {
            jp: '「相手がどんな権力者であろうと、私は公平さを失いません。」',
            romaji: '"Aite ga donna kenryokusha de arō to, watashi wa kōheisa o ushinaimasen."',
            meaning: {
              en: '"No matter how powerful the other party is, I will not lose my fairness."',
              vi: '"Cho dù đối phương có quyền lực đến đâu, tôi cũng sẽ không đánh mất sự công bằng."'
            }
          },
          {
            jp: '「経営者であれ社員であれ、同じ理念のもとで扱われるべきです。」',
            romaji:
              '"Keieisha de are shain de are, onaji rinen no moto de atsukawareru beki desu."',
            meaning: {
              en: '"Whether manager or employee, everyone should be treated under the same principles."',
              vi: '"Dù là nhà điều hành hay nhân viên, mọi người đều nên được đối xử dưới cùng một lý tưởng."'
            }
          },
          {
            jp: 'そして、どんな困難であれ責任から逃れないと約束した。',
            romaji: 'Soshite, donna konnan de are sekinin kara nogarenai to yakusoku shita.',
            meaning: {
              en: 'And he promised that, whatever the difficulty, he would not escape responsibility.',
              vi: 'Và ông hứa rằng dù gặp khó khăn nào, ông cũng sẽ không trốn tránh trách nhiệm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the executive promise about fairness?',
              vi: 'Nhà điều hành hứa gì về sự công bằng?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'He will keep it regardless of how powerful the other party is',
                  vi: 'Ông sẽ giữ nó bất kể đối phương quyền lực đến đâu'
                }
              },
              {
                id: 'b',
                label: {
                  en: 'He will only be fair to executives',
                  vi: 'Ông chỉ công bằng với các nhà điều hành'
                }
              },
              {
                id: 'c',
                label: {
                  en: 'He will give up fairness under pressure',
                  vi: 'Ông sẽ từ bỏ công bằng khi bị áp lực'
                }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How will managers and employees be treated?',
              vi: 'Nhà điều hành và nhân viên sẽ được đối xử thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Managers get priority', vi: 'Nhà điều hành được ưu tiên' }
              },
              {
                id: 'b',
                label: {
                  en: 'Under the same principles',
                  vi: 'Dưới cùng một lý tưởng'
                }
              },
              { id: 'c', label: { en: 'It depends on profit', vi: 'Tùy theo lợi nhuận' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q3',
            question: {
              en: 'What did he promise about responsibility?',
              vi: 'Ông hứa gì về trách nhiệm?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'To escape it when things get hard',
                  vi: 'Sẽ trốn tránh khi gặp khó khăn'
                }
              },
              {
                id: 'b',
                label: {
                  en: 'To not escape it whatever the difficulty',
                  vi: 'Sẽ không trốn tránh dù gặp khó khăn nào'
                }
              },
              {
                id: 'c',
                label: { en: 'To share it with employees', vi: 'Sẽ chia sẻ nó với nhân viên' }
              }
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
      en: 'Whether A or B: 〜であれ〜であれ',
      vi: 'Dù A hay B: 〜であれ〜であれ'
    },
    focus: {
      en: 'Pair two nouns with であれ…であれ to say a statement is true in either case.',
      vi: 'Ghép hai danh từ với であれ…であれ để nói một điều đúng trong cả hai trường hợp.'
    },
    vocab: [
      {
        kana: 'てんこう',
        kanji: '天候',
        romaji: 'tenkō',
        meaning: { en: 'weather conditions', vi: 'thời tiết' }
      },
      {
        kana: 'はれ',
        kanji: '晴れ',
        romaji: 'hare',
        meaning: { en: 'clear weather', vi: 'trời nắng, quang đãng' }
      },
      {
        kana: 'あめ',
        kanji: '雨',
        romaji: 'ame',
        meaning: { en: 'rain', vi: 'mưa' }
      },
      {
        kana: 'けっこう',
        kanji: '決行',
        romaji: 'kekkō',
        meaning: { en: 'carrying out (as planned)', vi: 'tiến hành (theo kế hoạch)' }
      },
      {
        kana: 'やがい',
        kanji: '野外',
        romaji: 'yagai',
        meaning: { en: 'outdoors', vi: 'ngoài trời' }
      },
      {
        kana: 'もよおし',
        kanji: '催し',
        romaji: 'moyooshi',
        meaning: { en: 'event, gathering', vi: 'sự kiện, buổi lễ' }
      },
      {
        kana: 'へいじつ',
        kanji: '平日',
        romaji: 'heijitsu',
        meaning: { en: 'weekday', vi: 'ngày thường' }
      },
      {
        kana: 'しゅうまつ',
        kanji: '週末',
        romaji: 'shūmatsu',
        meaning: { en: 'weekend', vi: 'cuối tuần' }
      },
      {
        kana: 'えいぎょう',
        kanji: '営業',
        romaji: 'eigyō',
        meaning: { en: 'business operation, opening', vi: 'việc kinh doanh, mở cửa' }
      },
      {
        kana: 'たいおう',
        kanji: '対応',
        romaji: 'taiō',
        meaning: { en: 'response, handling', vi: 'sự ứng phó, xử lý' }
      },
      {
        kana: 'おうぼ',
        kanji: '応募',
        romaji: 'ōbo',
        meaning: { en: 'application, entry', vi: 'việc đăng ký, ứng tuyển' }
      },
      {
        kana: 'うけつける',
        kanji: '受け付ける',
        romaji: 'uketsukeru',
        meaning: { en: 'to accept, receive', vi: 'tiếp nhận, chấp nhận' }
      }
    ],
    grammar: [
      {
        pattern: 'N であれ N であれ',
        title: { en: 'Whether A or B', vi: 'Dù A hay B' },
        explanation: {
          en: 'List two contrasting nouns with であれ…であれ to mean "in either case". The main clause applies equally to both. It is the formal counterpart of でも…でも.',
          vi: 'Liệt kê hai danh từ tương phản với であれ…であれ để nói "trong cả hai trường hợp". Mệnh đề chính áp dụng như nhau cho cả hai. Đây là dạng trang trọng của でも…でも.'
        },
        examples: [
          {
            jp: '晴れであれ雨であれ、野外の催しは決行する。',
            romaji: 'Hare de are ame de are, yagai no moyooshi wa kekkō suru.',
            meaning: {
              en: 'Whether it is clear or rainy, the outdoor event will be held as planned.',
              vi: 'Dù trời nắng hay mưa, sự kiện ngoài trời vẫn sẽ được tiến hành.'
            }
          },
          {
            jp: '平日であれ週末であれ、店は同じ時間に営業する。',
            romaji: 'Heijitsu de are shūmatsu de are, mise wa onaji jikan ni eigyō suru.',
            meaning: {
              en: 'Whether weekday or weekend, the shop opens at the same hours.',
              vi: 'Dù ngày thường hay cuối tuần, cửa hàng đều mở cửa cùng giờ.'
            }
          }
        ]
      },
      {
        pattern: 'な-adj／N であれ 〜であれ',
        title: { en: 'Either quality holds', vi: 'Tính chất nào cũng đúng' },
        explanation: {
          en: 'The pattern also pairs adjectival nouns or attributes, listing two possibilities to stress that the outcome is the same either way.',
          vi: 'Mẫu này cũng ghép các danh từ tính chất hay đặc điểm, liệt kê hai khả năng để nhấn mạnh kết quả như nhau trong cả hai trường hợp.'
        },
        examples: [
          {
            jp: '安価であれ高価であれ、品質には責任を持つ。',
            romaji: 'Anka de are kōka de are, hinshitsu ni wa sekinin o motsu.',
            meaning: {
              en: 'Whether cheap or expensive, we take responsibility for quality.',
              vi: 'Dù rẻ hay đắt, chúng tôi đều chịu trách nhiệm về chất lượng.'
            }
          },
          {
            jp: '個人であれ団体であれ、応募は受け付けます。',
            romaji: 'Kojin de are dantai de are, ōbo wa uketsukemasu.',
            meaning: {
              en: 'Whether an individual or a group, we accept applications.',
              vi: 'Dù là cá nhân hay tập thể, chúng tôi đều tiếp nhận đơn đăng ký.'
            }
          }
        ]
      },
      {
        pattern: '疑問詞であれ 〜であれ',
        title: { en: 'Listing exhaustive cases', vi: 'Liệt kê mọi trường hợp' },
        explanation: {
          en: 'Two であれ clauses can also stack question-style nouns to cover a whole range, emphasizing that no exception exists.',
          vi: 'Hai mệnh đề であれ cũng có thể xếp các danh từ kiểu nghi vấn để bao trùm cả phạm vi, nhấn mạnh rằng không có ngoại lệ.'
        },
        examples: [
          {
            jp: '昼であれ夜であれ、緊急の対応はいつでも可能だ。',
            romaji: 'Hiru de are yoru de are, kinkyū no taiō wa itsu demo kanō da.',
            meaning: {
              en: 'Whether day or night, emergency response is possible at any time.',
              vi: 'Dù ngày hay đêm, việc ứng phó khẩn cấp lúc nào cũng có thể.'
            }
          },
          {
            jp: '国内であれ海外であれ、注文には迅速に対応する。',
            romaji: 'Kokunai de are kaigai de are, chūmon ni wa jinsoku ni taiō suru.',
            meaning: {
              en: 'Whether domestic or overseas, we handle orders promptly.',
              vi: 'Dù trong nước hay nước ngoài, chúng tôi đều xử lý đơn hàng nhanh chóng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The festival notice', vi: 'Thông báo lễ hội' },
        lines: [
          {
            jp: '市は秋の野外の催しについて案内を出した。',
            romaji: 'Shi wa aki no yagai no moyooshi ni tsuite annai o dashita.',
            meaning: {
              en: 'The city issued a notice about the autumn outdoor event.',
              vi: 'Thành phố đã ra thông báo về sự kiện ngoài trời mùa thu.'
            }
          },
          {
            jp: '晴れであれ雨であれ、行事は予定どおり決行される。',
            romaji: 'Hare de are ame de are, gyōji wa yotei dōri kekkō sareru.',
            meaning: {
              en: 'Whether clear or rainy, the event will be held as scheduled.',
              vi: 'Dù trời nắng hay mưa, sự kiện vẫn sẽ được tiến hành đúng kế hoạch.'
            }
          },
          {
            jp: '個人であれ団体であれ、応募は当日まで受け付ける。',
            romaji: 'Kojin de are dantai de are, ōbo wa tōjitsu made uketsukeru.',
            meaning: {
              en: 'Whether individual or group, applications are accepted until the day itself.',
              vi: 'Dù cá nhân hay tập thể, đơn đăng ký được tiếp nhận đến tận hôm diễn ra.'
            }
          },
          {
            jp: '平日であれ週末であれ、係員が会場で対応する。',
            romaji: 'Heijitsu de are shūmatsu de are, kakariin ga kaijō de taiō suru.',
            meaning: {
              en: 'Whether weekday or weekend, staff will assist at the venue.',
              vi: 'Dù ngày thường hay cuối tuần, nhân viên đều có mặt hỗ trợ tại địa điểm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happens if it rains on the event day?',
              vi: 'Nếu hôm sự kiện trời mưa thì sao?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'The event is canceled', vi: 'Sự kiện bị hủy' }
              },
              {
                id: 'b',
                label: {
                  en: 'The event is held as scheduled',
                  vi: 'Sự kiện vẫn diễn ra theo kế hoạch'
                }
              },
              {
                id: 'c',
                label: { en: 'The event moves indoors', vi: 'Sự kiện chuyển vào trong nhà' }
              }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'Who may apply for the event?',
              vi: 'Ai có thể đăng ký sự kiện?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Both individuals and groups',
                  vi: 'Cả cá nhân lẫn tập thể'
                }
              },
              { id: 'b', label: { en: 'Only groups', vi: 'Chỉ tập thể' } },
              { id: 'c', label: { en: 'Only city staff', vi: 'Chỉ nhân viên thành phố' } }
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
      en: 'Even Though: 〜といえども',
      vi: 'Cho dù là: 〜といえども'
    },
    focus: {
      en: 'Concede a strong premise and still deny the expected conclusion, using the formal 〜といえども.',
      vi: 'Nhượng bộ một tiền đề mạnh nhưng vẫn phủ định kết luận thường thấy, dùng mẫu trang trọng 〜といえども.'
    },
    vocab: [
      {
        kana: 'せんもんか',
        kanji: '専門家',
        romaji: 'senmonka',
        meaning: { en: 'expert, specialist', vi: 'chuyên gia' }
      },
      {
        kana: 'あやまり',
        kanji: '誤り',
        romaji: 'ayamari',
        meaning: { en: 'error, mistake', vi: 'sai lầm, lỗi' }
      },
      {
        kana: 'おかす',
        kanji: '犯す',
        romaji: 'okasu',
        meaning: { en: 'to commit (an error)', vi: 'phạm phải, gây ra' }
      },
      {
        kana: 'ベテラン',
        romaji: 'beteran',
        meaning: { en: 'veteran, experienced person', vi: 'người kỳ cựu' }
      },
      {
        kana: 'ゆだん',
        kanji: '油断',
        romaji: 'yudan',
        meaning: { en: 'carelessness, negligence', vi: 'sự lơ là, bất cẩn' }
      },
      {
        kana: 'きんもつ',
        kanji: '禁物',
        romaji: 'kinmotsu',
        meaning: { en: 'taboo, something to avoid', vi: 'điều cấm kỵ, điều phải tránh' }
      },
      {
        kana: 'てんさい',
        kanji: '天才',
        romaji: 'tensai',
        meaning: { en: 'genius', vi: 'thiên tài' }
      },
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'sự nỗ lực' }
      },
      {
        kana: 'かかせない',
        kanji: '欠かせない',
        romaji: 'kakasenai',
        meaning: { en: 'indispensable', vi: 'không thể thiếu' }
      },
      {
        kana: 'けいけん',
        kanji: '経験',
        romaji: 'keiken',
        meaning: { en: 'experience', vi: 'kinh nghiệm' }
      },
      {
        kana: 'ほうふ',
        kanji: '豊富',
        romaji: 'hōfu',
        meaning: { en: 'abundant, rich', vi: 'phong phú, dồi dào' }
      },
      {
        kana: 'みおとす',
        kanji: '見落とす',
        romaji: 'miotosu',
        meaning: { en: 'to overlook', vi: 'bỏ sót, sơ ý không thấy' }
      }
    ],
    grammar: [
      {
        pattern: 'N／普通形 といえども',
        title: { en: 'Even though it is X', vi: 'Cho dù là X' },
        explanation: {
          en: 'といえども concedes a strong, often authoritative premise ("even an X") and then states something contrary to expectation. It is formal and literary, similar to といっても but stronger.',
          vi: 'といえども nhượng bộ một tiền đề mạnh, thường mang tính uy quyền ("dù là X"), rồi nêu điều trái với mong đợi. Mẫu này trang trọng, văn vẻ, giống といっても nhưng mạnh hơn.'
        },
        examples: [
          {
            jp: '専門家といえども、誤りを犯すことがある。',
            romaji: 'Senmonka to iedomo, ayamari o okasu koto ga aru.',
            meaning: {
              en: 'Even an expert can make mistakes.',
              vi: 'Cho dù là chuyên gia, đôi khi vẫn phạm sai lầm.'
            }
          },
          {
            jp: 'ベテランといえども、油断は禁物だ。',
            romaji: 'Beteran to iedomo, yudan wa kinmotsu da.',
            meaning: {
              en: 'Even a veteran must not be careless.',
              vi: 'Cho dù là người kỳ cựu, sự lơ là vẫn là điều cấm kỵ.'
            }
          }
        ]
      },
      {
        pattern: 'いかに 〜といえども',
        title: { en: 'However X it may be', vi: 'Dù X đến đâu đi nữa' },
        explanation: {
          en: 'Pairing いかに (or どんなに) with といえども stresses the degree: "however great X is, still…". The conclusion resists the strength of the premise.',
          vi: 'Ghép いかに (hay どんなに) với といえども nhấn mạnh mức độ: "dù X lớn đến đâu, vẫn…". Kết luận chống lại sức nặng của tiền đề.'
        },
        examples: [
          {
            jp: 'いかに天才といえども、努力は欠かせない。',
            romaji: 'Ikani tensai to iedomo, doryoku wa kakasenai.',
            meaning: {
              en: 'However great a genius one may be, effort is indispensable.',
              vi: 'Dù là thiên tài đến đâu, sự nỗ lực vẫn không thể thiếu.'
            }
          },
          {
            jp: 'いかに経験が豊富といえども、細部を見落とすことはある。',
            romaji: 'Ikani keiken ga hōfu to iedomo, saibu o miotosu koto wa aru.',
            meaning: {
              en: 'However rich in experience one is, details can still be overlooked.',
              vi: 'Dù kinh nghiệm phong phú đến đâu, vẫn có thể bỏ sót chi tiết.'
            }
          }
        ]
      },
      {
        pattern: '〜とはいえども',
        title: { en: 'Although it is said to be', vi: 'Tuy nói là vậy nhưng' },
        explanation: {
          en: 'The variant とはいえども follows a clause to mean "although it is true that…". It softens an admitted fact before introducing a counterpoint.',
          vi: 'Biến thể とはいえども theo sau một mệnh đề, mang nghĩa "tuy đúng là…". Nó làm dịu một sự thật được thừa nhận trước khi đưa ra điểm đối lập.'
        },
        examples: [
          {
            jp: '便利になったとはいえども、問題がなくなったわけではない。',
            romaji: 'Benri ni natta to wa iedomo, mondai ga nakunatta wake de wa nai.',
            meaning: {
              en: 'Although it has become convenient, that does not mean the problems are gone.',
              vi: 'Tuy đã trở nên tiện lợi, nhưng không có nghĩa là các vấn đề đã biến mất.'
            }
          },
          {
            jp: '成功したとはいえども、彼は決して油断しなかった。',
            romaji: 'Seikō shita to wa iedomo, kare wa kesshite yudan shinakatta.',
            meaning: {
              en: 'Although he succeeded, he was never careless.',
              vi: 'Tuy đã thành công, anh ấy chưa bao giờ lơ là.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Advice to a young surgeon', vi: 'Lời khuyên cho bác sĩ phẫu thuật trẻ' },
        lines: [
          {
            jp: 'ベテランの医師が若い外科医に語りかけた。',
            romaji: 'Beteran no ishi ga wakai gekai ni katarikaketa.',
            meaning: {
              en: 'A veteran doctor spoke to the young surgeon.',
              vi: 'Một bác sĩ kỳ cựu đã nói chuyện với vị bác sĩ phẫu thuật trẻ.'
            }
          },
          {
            jp: '「専門家といえども、誤りを犯すことがあるのだ。」',
            romaji: '"Senmonka to iedomo, ayamari o okasu koto ga aru no da."',
            meaning: {
              en: '"Even an expert can make mistakes."',
              vi: '"Cho dù là chuyên gia, đôi khi vẫn phạm sai lầm."'
            }
          },
          {
            jp: '「いかに経験が豊富といえども、油断は禁物だよ。」',
            romaji: '"Ikani keiken ga hōfu to iedomo, yudan wa kinmotsu da yo."',
            meaning: {
              en: '"However rich your experience, carelessness is taboo."',
              vi: '"Dù kinh nghiệm phong phú đến đâu, sự lơ là vẫn là điều cấm kỵ."'
            }
          },
          {
            jp: '若い医師はその言葉を胸に刻み、努力を続けた。',
            romaji: 'Wakai ishi wa sono kotoba o mune ni kizami, doryoku o tsuzuketa.',
            meaning: {
              en: 'The young doctor took those words to heart and kept making efforts.',
              vi: 'Vị bác sĩ trẻ khắc ghi lời ấy vào lòng và tiếp tục nỗ lực.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the veteran say about experts?',
              vi: 'Người kỳ cựu nói gì về chuyên gia?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'They never make mistakes', vi: 'Họ không bao giờ sai' }
              },
              {
                id: 'b',
                label: {
                  en: 'Even they can make mistakes',
                  vi: 'Cho dù là họ thì đôi khi vẫn sai'
                }
              },
              {
                id: 'c',
                label: { en: 'They should retire early', vi: 'Họ nên nghỉ hưu sớm' }
              }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'According to him, what is taboo even with rich experience?',
              vi: 'Theo ông, điều gì là cấm kỵ ngay cả khi giàu kinh nghiệm?'
            },
            choices: [
              { id: 'a', label: { en: 'Carelessness', vi: 'Sự lơ là' } },
              { id: 'b', label: { en: 'Asking questions', vi: 'Đặt câu hỏi' } },
              { id: 'c', label: { en: 'Continuing to study', vi: 'Tiếp tục học hỏi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'How did the young doctor react?',
              vi: 'Vị bác sĩ trẻ đã phản ứng thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'He ignored the advice', vi: 'Anh ấy phớt lờ lời khuyên' }
              },
              {
                id: 'b',
                label: {
                  en: 'He took it to heart and kept trying',
                  vi: 'Anh ấy khắc ghi và tiếp tục cố gắng'
                }
              },
              {
                id: 'c',
                label: { en: 'He quit surgery', vi: 'Anh ấy bỏ nghề phẫu thuật' }
              }
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
      en: 'Not Even One: 〜たりとも〜ない',
      vi: 'Không một… nào: 〜たりとも〜ない'
    },
    focus: {
      en: 'Emphatically deny even the smallest unit using counter + たりとも〜ない.',
      vi: 'Phủ định mạnh mẽ ngay cả đơn vị nhỏ nhất bằng lượng từ + たりとも〜ない.'
    },
    vocab: [
      {
        kana: 'むだ',
        kanji: '無駄',
        romaji: 'muda',
        meaning: { en: 'waste, futility', vi: 'sự lãng phí, vô ích' }
      },
      {
        kana: 'ゆるす',
        kanji: '許す',
        romaji: 'yurusu',
        meaning: { en: 'to allow, permit', vi: 'cho phép, tha thứ' }
      },
      {
        kana: 'びょう',
        kanji: '秒',
        romaji: 'byō',
        meaning: { en: 'second (of time)', vi: 'giây' }
      },
      {
        kana: 'いっしゅん',
        kanji: '一瞬',
        romaji: 'isshun',
        meaning: { en: 'an instant, a moment', vi: 'một khoảnh khắc' }
      },
      {
        kana: 'き',
        kanji: '気',
        romaji: 'ki',
        meaning: { en: 'attention, mind', vi: 'sự chú ý, tâm trí' }
      },
      {
        kana: 'ぬく',
        kanji: '抜く',
        romaji: 'nuku',
        meaning: { en: 'to let slacken, pull out', vi: 'lơi lỏng, rút ra' }
      },
      {
        kana: 'ざいげん',
        kanji: '財源',
        romaji: 'zaigen',
        meaning: { en: 'financial resources', vi: 'nguồn tài chính' }
      },
      {
        kana: 'けいひ',
        kanji: '経費',
        romaji: 'keihi',
        meaning: { en: 'expenses', vi: 'chi phí' }
      },
      {
        kana: 'ぶじ',
        kanji: '無事',
        romaji: 'buji',
        meaning: { en: 'safely, without incident', vi: 'bình an, không sự cố' }
      },
      {
        kana: 'まもる',
        kanji: '守る',
        romaji: 'mamoru',
        meaning: { en: 'to protect, keep', vi: 'bảo vệ, giữ gìn' }
      },
      {
        kana: 'けいび',
        kanji: '警備',
        romaji: 'keibi',
        meaning: { en: 'security, guarding', vi: 'sự canh gác, an ninh' }
      },
      {
        kana: 'たいせい',
        kanji: '態勢',
        romaji: 'taisei',
        meaning: { en: 'system, posture (of readiness)', vi: 'thế trận, sự sẵn sàng' }
      }
    ],
    grammar: [
      {
        pattern: '一 ＋ 助数詞 ＋ たりとも 〜ない',
        title: { en: 'Not even a single one', vi: 'Không một… nào' },
        explanation: {
          en: 'Place たりとも after "one + counter" (一秒, 一瞬, 一円…) plus a negative to mean "not even one". It strongly denies any exception, even the minimum amount.',
          vi: 'Đặt たりとも sau "một + lượng từ" (一秒, 一瞬, 一円…) kèm phủ định để diễn đạt "không một… nào". Nó phủ định mạnh mọi ngoại lệ, dù chỉ là lượng nhỏ nhất.'
        },
        examples: [
          {
            jp: '一秒たりとも無駄にはできない。',
            romaji: 'Ichibyō taritomo muda ni wa dekinai.',
            meaning: {
              en: 'I cannot waste even a single second.',
              vi: 'Không thể lãng phí dù chỉ một giây.'
            }
          },
          {
            jp: '一円たりとも経費を無駄にしてはならない。',
            romaji: 'Ichi-en taritomo keihi o muda ni shite wa naranai.',
            meaning: {
              en: 'We must not waste even a single yen of expenses.',
              vi: 'Không được lãng phí dù chỉ một yên chi phí.'
            }
          }
        ]
      },
      {
        pattern: '一瞬たりとも 〜ない',
        title: { en: 'Not for a single instant', vi: 'Không một khoảnh khắc nào' },
        explanation: {
          en: 'With 一瞬 (an instant), the pattern stresses unbroken continuity: not letting up "even for a moment". It is common in contexts of duty or vigilance.',
          vi: 'Với 一瞬 (khoảnh khắc), mẫu này nhấn mạnh sự liên tục không đứt quãng: không lơi lỏng "dù chỉ một khoảnh khắc". Hay gặp khi nói về nhiệm vụ hay sự cảnh giác.'
        },
        examples: [
          {
            jp: '警備員は一瞬たりとも気を抜かなかった。',
            romaji: 'Keibiin wa isshun taritomo ki o nukanakatta.',
            meaning: {
              en: 'The guard did not let his attention slacken for even an instant.',
              vi: 'Người bảo vệ không lơi lỏng sự chú ý dù chỉ một khoảnh khắc.'
            }
          },
          {
            jp: '彼女は一瞬たりとも患者から目を離さなかった。',
            romaji: 'Kanojo wa isshun taritomo kanja kara me o hanasanakatta.',
            meaning: {
              en: 'She did not take her eyes off the patient for even a moment.',
              vi: 'Cô ấy không rời mắt khỏi bệnh nhân dù chỉ một khoảnh khắc.'
            }
          }
        ]
      },
      {
        pattern: '何人たりとも 〜ない',
        title: { en: 'Not a single person may', vi: 'Không một ai được phép' },
        explanation: {
          en: 'The set phrase 何人(なんぴと)たりとも means "no person whatsoever". It is highly formal and appears in rules, oaths, and official statements.',
          vi: 'Cụm cố định 何人(なんぴと)たりとも nghĩa là "không một người nào cả". Mẫu này rất trang trọng, xuất hiện trong quy định, lời thề và tuyên bố chính thức.'
        },
        examples: [
          {
            jp: '何人たりとも、この規則を破ることは許されない。',
            romaji: 'Nanpito taritomo, kono kisoku o yaburu koto wa yurusarenai.',
            meaning: {
              en: 'No person whatsoever is allowed to break this rule.',
              vi: 'Không một ai được phép phá vỡ quy định này.'
            }
          },
          {
            jp: '何人たりとも許可なく立ち入ってはならない。',
            romaji: 'Nanpito taritomo kyoka naku tachiitte wa naranai.',
            meaning: {
              en: 'No one whatsoever may enter without permission.',
              vi: 'Không một ai được vào khi chưa có phép.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The night of the exhibition', vi: 'Đêm trưng bày' },
        lines: [
          {
            jp: '美術館は貴重な絵を守るため、特別な警備態勢を取った。',
            romaji: 'Bijutsukan wa kichō na e o mamoru tame, tokubetsu na keibi taisei o totta.',
            meaning: {
              en: 'To protect the precious painting, the museum set up a special security system.',
              vi: 'Để bảo vệ bức tranh quý, bảo tàng đã thiết lập một thế trận an ninh đặc biệt.'
            }
          },
          {
            jp: '館長は「一瞬たりとも気を抜くな」と職員に命じた。',
            romaji: 'Kanchō wa "isshun taritomo ki o nuku na" to shokuin ni meijita.',
            meaning: {
              en: 'The director ordered the staff, "Do not let your attention slacken for even an instant."',
              vi: 'Giám đốc ra lệnh cho nhân viên: "Không được lơi lỏng dù chỉ một khoảnh khắc".'
            }
          },
          {
            jp: '何人たりとも、許可なく展示室に入ることは許されなかった。',
            romaji: 'Nanpito taritomo, kyoka naku tenjishitsu ni hairu koto wa yurusarenakatta.',
            meaning: {
              en: 'No one whatsoever was allowed to enter the exhibition room without permission.',
              vi: 'Không một ai được phép vào phòng trưng bày khi chưa có phép.'
            }
          },
          {
            jp: 'おかげで、絵は一晩じゅう無事に守られた。',
            romaji: 'Okage de, e wa hitoban-jū buji ni mamorareta.',
            meaning: {
              en: 'Thanks to this, the painting was kept safe all night.',
              vi: 'Nhờ vậy, bức tranh được giữ an toàn suốt cả đêm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the director order the staff?',
              vi: 'Giám đốc ra lệnh gì cho nhân viên?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Not to let their attention slacken for an instant',
                  vi: 'Không lơi lỏng chú ý dù một khoảnh khắc'
                }
              },
              {
                id: 'b',
                label: { en: 'To take turns sleeping', vi: 'Thay phiên nhau ngủ' }
              },
              {
                id: 'c',
                label: { en: 'To leave the doors open', vi: 'Để cửa mở' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Who could enter the exhibition room?',
              vi: 'Ai có thể vào phòng trưng bày?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Anyone who wanted to', vi: 'Bất kỳ ai muốn vào' }
              },
              {
                id: 'b',
                label: {
                  en: 'No one without permission',
                  vi: 'Không ai khi chưa có phép'
                }
              },
              { id: 'c', label: { en: 'Only journalists', vi: 'Chỉ nhà báo' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q3',
            question: {
              en: 'What was the result of the security measures?',
              vi: 'Kết quả của các biện pháp an ninh là gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'The painting was stolen', vi: 'Bức tranh bị đánh cắp' }
              },
              {
                id: 'b',
                label: {
                  en: 'The painting was kept safe all night',
                  vi: 'Bức tranh được giữ an toàn suốt đêm'
                }
              },
              {
                id: 'c',
                label: { en: 'The exhibition was canceled', vi: 'Buổi trưng bày bị hủy' }
              }
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
      en: 'Depending On: 〜いかんで / 〜いかんによって',
      vi: 'Tùy thuộc vào: 〜いかんで / 〜いかんによって'
    },
    focus: {
      en: 'State that an outcome varies according to a factor, using the formal noun 〜いかんで / 〜いかんによって.',
      vi: 'Diễn đạt một kết quả thay đổi theo một yếu tố, dùng danh từ trang trọng 〜いかんで / 〜いかんによって.'
    },
    vocab: [
      {
        kana: 'せいせき',
        kanji: '成績',
        romaji: 'seiseki',
        meaning: { en: 'grades, results', vi: 'thành tích, điểm số' }
      },
      {
        kana: 'しんがく',
        kanji: '進学',
        romaji: 'shingaku',
        meaning: { en: 'advancing to higher school', vi: 'việc học lên' }
      },
      {
        kana: 'はんだん',
        kanji: '判断',
        romaji: 'handan',
        meaning: { en: 'judgment, decision', vi: 'sự phán đoán, quyết định' }
      },
      {
        kana: 'こうしょう',
        kanji: '交渉',
        romaji: 'kōshō',
        meaning: { en: 'negotiation', vi: 'sự đàm phán' }
      },
      {
        kana: 'けっか',
        kanji: '結果',
        romaji: 'kekka',
        meaning: { en: 'result, outcome', vi: 'kết quả' }
      },
      {
        kana: 'けいやく',
        kanji: '契約',
        romaji: 'keiyaku',
        meaning: { en: 'contract', vi: 'hợp đồng' }
      },
      {
        kana: 'うちきり',
        kanji: '打ち切り',
        romaji: 'uchikiri',
        meaning: { en: 'discontinuation, termination', vi: 'sự ngừng lại, chấm dứt' }
      },
      {
        kana: 'たいど',
        kanji: '態度',
        romaji: 'taido',
        meaning: { en: 'attitude', vi: 'thái độ' }
      },
      {
        kana: 'ひょうか',
        kanji: '評価',
        romaji: 'hyōka',
        meaning: { en: 'evaluation, appraisal', vi: 'sự đánh giá' }
      },
      {
        kana: 'さゆうする',
        kanji: '左右する',
        romaji: 'sayū suru',
        meaning: { en: 'to influence, sway', vi: 'chi phối, ảnh hưởng' }
      },
      {
        kana: 'たいおう',
        kanji: '対応',
        romaji: 'taiō',
        meaning: { en: 'response, handling', vi: 'sự ứng phó, cách xử lý' }
      },
      {
        kana: 'かわる',
        kanji: '変わる',
        romaji: 'kawaru',
        meaning: { en: 'to change, vary', vi: 'thay đổi' }
      }
    ],
    grammar: [
      {
        pattern: 'N いかんで',
        title: { en: 'Depending on N', vi: 'Tùy thuộc vào N' },
        explanation: {
          en: 'いかん is a formal noun meaning "how things are". N(の)いかんで means "depending on N", introducing a factor that decides the outcome. Used in formal and written Japanese.',
          vi: 'いかん là danh từ trang trọng nghĩa là "tình hình ra sao". N(の)いかんで nghĩa là "tùy thuộc vào N", giới thiệu yếu tố quyết định kết quả. Dùng trong tiếng Nhật trang trọng và văn viết.'
        },
        examples: [
          {
            jp: '成績いかんで、進学先が決まる。',
            romaji: 'Seiseki ikan de, shingakusaki ga kimaru.',
            meaning: {
              en: 'Depending on your grades, your next school is decided.',
              vi: 'Tùy thuộc vào thành tích, trường học lên sẽ được quyết định.'
            }
          },
          {
            jp: '本人の態度いかんで、評価は大きく変わる。',
            romaji: 'Honnin no taido ikan de, hyōka wa ōkiku kawaru.',
            meaning: {
              en: "Depending on the person's attitude, the evaluation changes greatly.",
              vi: 'Tùy thuộc vào thái độ của bản thân, đánh giá sẽ thay đổi rất nhiều.'
            }
          }
        ]
      },
      {
        pattern: 'N いかんによって',
        title: { en: 'According to N', vi: 'Theo N (như thế nào)' },
        explanation: {
          en: 'いかんによって is a slightly heavier variant of いかんで, emphasizing "according to how N turns out". The result is presented as conditional on that factor.',
          vi: 'いかんによって là biến thể nặng hơn một chút của いかんで, nhấn mạnh "tùy theo N diễn ra thế nào". Kết quả được trình bày như phụ thuộc vào yếu tố đó.'
        },
        examples: [
          {
            jp: '交渉の結果いかんによって、契約は打ち切りになるだろう。',
            romaji: 'Kōshō no kekka ikan ni yotte, keiyaku wa uchikiri ni naru darō.',
            meaning: {
              en: 'Depending on the outcome of the negotiation, the contract may be terminated.',
              vi: 'Tùy theo kết quả đàm phán, hợp đồng có thể bị chấm dứt.'
            }
          },
          {
            jp: '相手の対応いかんによって、こちらの判断も変わる。',
            romaji: 'Aite no taiō ikan ni yotte, kochira no handan mo kawaru.',
            meaning: {
              en: "Depending on the other side's response, our judgment will also change.",
              vi: 'Tùy theo cách ứng phó của đối phương, phán đoán của chúng tôi cũng sẽ thay đổi.'
            }
          }
        ]
      },
      {
        pattern: 'N いかんだ',
        title: { en: 'It hinges on N', vi: 'Tất cả phụ thuộc vào N' },
        explanation: {
          en: 'Ending a sentence with いかんだ states that everything "hinges on" or "comes down to" N. It often follows すべては / 成否は to stress the decisive factor.',
          vi: 'Kết thúc câu bằng いかんだ nói rằng mọi thứ "phụ thuộc vào" N. Thường theo sau すべては / 成否は để nhấn mạnh yếu tố quyết định.'
        },
        examples: [
          {
            jp: '成功するかどうかは、本人の努力いかんだ。',
            romaji: 'Seikō suru ka dō ka wa, honnin no doryoku ikan da.',
            meaning: {
              en: "Whether one succeeds comes down to the person's own effort.",
              vi: 'Thành công hay không là tùy thuộc vào nỗ lực của chính bản thân.'
            }
          },
          {
            jp: 'すべては明日の交渉の結果いかんだ。',
            romaji: 'Subete wa ashita no kōshō no kekka ikan da.',
            meaning: {
              en: "Everything hinges on the outcome of tomorrow's negotiation.",
              vi: 'Mọi thứ phụ thuộc vào kết quả của cuộc đàm phán ngày mai.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Before the negotiation', vi: 'Trước cuộc đàm phán' },
        lines: [
          {
            jp: '明日、二社の大事な交渉が行われる。',
            romaji: 'Ashita, nisha no daiji na kōshō ga okonawareru.',
            meaning: {
              en: 'Tomorrow an important negotiation between the two companies will take place.',
              vi: 'Ngày mai sẽ diễn ra cuộc đàm phán quan trọng giữa hai công ty.'
            }
          },
          {
            jp: '交渉の結果いかんによって、契約が打ち切りになるかもしれない。',
            romaji: 'Kōshō no kekka ikan ni yotte, keiyaku ga uchikiri ni naru kamoshirenai.',
            meaning: {
              en: 'Depending on the outcome of the negotiation, the contract may be terminated.',
              vi: 'Tùy theo kết quả đàm phán, hợp đồng có thể bị chấm dứt.'
            }
          },
          {
            jp: '相手の態度いかんで、こちらの判断も変わるだろう。',
            romaji: 'Aite no taido ikan de, kochira no handan mo kawaru darō.',
            meaning: {
              en: "Depending on the other side's attitude, our decision will also change.",
              vi: 'Tùy thuộc vào thái độ của đối phương, quyết định của chúng tôi cũng sẽ thay đổi.'
            }
          },
          {
            jp: '部長は「すべては明日の結果いかんだ」と静かに言った。',
            romaji: 'Buchō wa "subete wa ashita no kekka ikan da" to shizuka ni itta.',
            meaning: {
              en: 'The manager quietly said, "Everything hinges on tomorrow\'s result."',
              vi: 'Trưởng phòng lặng lẽ nói: "Mọi thứ phụ thuộc vào kết quả ngày mai".'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What may happen depending on the negotiation result?',
              vi: 'Điều gì có thể xảy ra tùy theo kết quả đàm phán?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The contract may be terminated',
                  vi: 'Hợp đồng có thể bị chấm dứt'
                }
              },
              {
                id: 'b',
                label: { en: 'The companies will merge', vi: 'Hai công ty sẽ sáp nhập' }
              },
              {
                id: 'c',
                label: { en: 'Prices will surely rise', vi: 'Giá chắc chắn sẽ tăng' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: "What will change our side's decision?",
              vi: 'Điều gì sẽ làm thay đổi quyết định của phía chúng ta?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'The weather', vi: 'Thời tiết' }
              },
              {
                id: 'b',
                label: {
                  en: "The other side's attitude",
                  vi: 'Thái độ của đối phương'
                }
              },
              { id: 'c', label: { en: 'The time of day', vi: 'Thời điểm trong ngày' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q3',
            question: {
              en: 'What did the manager say everything hinges on?',
              vi: 'Trưởng phòng nói mọi thứ phụ thuộc vào điều gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: "Tomorrow's result", vi: 'Kết quả ngày mai' }
              },
              {
                id: 'b',
                label: { en: 'His own mood', vi: 'Tâm trạng của ông' }
              },
              {
                id: 'c',
                label: { en: 'The company budget', vi: 'Ngân sách công ty' }
              }
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
      en: 'Regardless Of: 〜いかんによらず / 〜いかんを問わず',
      vi: 'Bất kể: 〜いかんによらず / 〜いかんを問わず'
    },
    focus: {
      en: 'State that an outcome holds no matter the factor, using 〜いかんによらず / 〜いかんにかかわらず / 〜いかんを問わず.',
      vi: 'Diễn đạt một kết quả đúng bất kể yếu tố nào, dùng 〜いかんによらず / 〜いかんにかかわらず / 〜いかんを問わず.'
    },
    vocab: [
      {
        kana: 'りゆう',
        kanji: '理由',
        romaji: 'riyū',
        meaning: { en: 'reason', vi: 'lý do' }
      },
      {
        kana: 'へんきん',
        kanji: '返金',
        romaji: 'henkin',
        meaning: { en: 'refund', vi: 'việc hoàn tiền' }
      },
      {
        kana: 'おうじる',
        kanji: '応じる',
        romaji: 'ōjiru',
        meaning: { en: 'to comply with, respond to', vi: 'đáp ứng, chấp nhận' }
      },
      {
        kana: 'こくせき',
        kanji: '国籍',
        romaji: 'kokuseki',
        meaning: { en: 'nationality', vi: 'quốc tịch' }
      },
      {
        kana: 'せいべつ',
        kanji: '性別',
        romaji: 'seibetsu',
        meaning: { en: 'gender', vi: 'giới tính' }
      },
      {
        kana: 'おうぼ',
        kanji: '応募',
        romaji: 'ōbo',
        meaning: { en: 'application, entry', vi: 'việc ứng tuyển' }
      },
      {
        kana: 'しかく',
        kanji: '資格',
        romaji: 'shikaku',
        meaning: { en: 'qualification', vi: 'tư cách, chứng chỉ' }
      },
      {
        kana: 'てきよう',
        kanji: '適用',
        romaji: 'tekiyō',
        meaning: { en: 'application (of a rule)', vi: 'sự áp dụng' }
      },
      {
        kana: 'いってい',
        kanji: '一定',
        romaji: 'ittei',
        meaning: { en: 'fixed, uniform', vi: 'nhất định, cố định' }
      },
      {
        kana: 'きじゅん',
        kanji: '基準',
        romaji: 'kijun',
        meaning: { en: 'standard, criterion', vi: 'tiêu chuẩn' }
      },
      {
        kana: 'びょうどう',
        kanji: '平等',
        romaji: 'byōdō',
        meaning: { en: 'equality, equal', vi: 'sự bình đẳng' }
      },
      {
        kana: 'うけつける',
        kanji: '受け付ける',
        romaji: 'uketsukeru',
        meaning: { en: 'to accept, receive', vi: 'tiếp nhận' }
      }
    ],
    grammar: [
      {
        pattern: 'N いかんによらず',
        title: { en: 'Regardless of N', vi: 'Không phụ thuộc vào N' },
        explanation: {
          en: 'いかんによらず means "regardless of N / no matter what N is". Unlike いかんで, the outcome does NOT depend on the factor. Formal, common in rules and announcements.',
          vi: 'いかんによらず nghĩa là "bất kể N / dù N thế nào". Khác với いかんで, kết quả KHÔNG phụ thuộc vào yếu tố đó. Trang trọng, hay gặp trong quy định và thông báo.'
        },
        examples: [
          {
            jp: '理由のいかんによらず、返金には応じられません。',
            romaji: 'Riyū no ikan ni yorazu, henkin ni wa ōjiraremasen.',
            meaning: {
              en: 'Regardless of the reason, we cannot offer a refund.',
              vi: 'Bất kể lý do gì, chúng tôi không thể hoàn tiền.'
            }
          },
          {
            jp: '結果のいかんによらず、最後まで全力を尽くす。',
            romaji: 'Kekka no ikan ni yorazu, saigo made zenryoku o tsukusu.',
            meaning: {
              en: 'Regardless of the result, I will give my all to the end.',
              vi: 'Bất kể kết quả ra sao, tôi sẽ dốc toàn lực đến cùng.'
            }
          }
        ]
      },
      {
        pattern: 'N いかんにかかわらず',
        title: { en: 'Irrespective of N', vi: 'Bất chấp N' },
        explanation: {
          en: 'いかんにかかわらず is interchangeable with いかんによらず and stresses that the matter is unrelated to N. It frequently appears with 成績, 結果, 天候, etc.',
          vi: 'いかんにかかわらず dùng thay thế được cho いかんによらず, nhấn mạnh rằng vấn đề không liên quan đến N. Hay đi với 成績, 結果, 天候, v.v.'
        },
        examples: [
          {
            jp: '天候のいかんにかかわらず、試合は予定どおり行う。',
            romaji: 'Tenkō no ikan ni kakawarazu, shiai wa yotei dōri okonau.',
            meaning: {
              en: 'Irrespective of the weather, the match will be held as scheduled.',
              vi: 'Bất chấp thời tiết, trận đấu sẽ diễn ra theo kế hoạch.'
            }
          },
          {
            jp: '国籍のいかんにかかわらず、応募を受け付けます。',
            romaji: 'Kokuseki no ikan ni kakawarazu, ōbo o uketsukemasu.',
            meaning: {
              en: 'Irrespective of nationality, we accept applications.',
              vi: 'Bất chấp quốc tịch, chúng tôi tiếp nhận đơn ứng tuyển.'
            }
          }
        ]
      },
      {
        pattern: 'N いかんを問わず',
        title: { en: 'No matter the N', vi: 'Không kể N nào' },
        explanation: {
          en: 'いかんを問わず literally "not asking the state of N" means "no matter what N is". It is the most formal of the three and is typical of regulations and recruiting notices.',
          vi: 'いかんを問わず nghĩa đen "không hỏi tình trạng của N" tức "bất kể N là gì". Đây là dạng trang trọng nhất trong ba mẫu, đặc trưng cho quy chế và thông báo tuyển dụng.'
        },
        examples: [
          {
            jp: '性別や年齢のいかんを問わず、平等に評価する。',
            romaji: 'Seibetsu ya nenrei no ikan o towazu, byōdō ni hyōka suru.',
            meaning: {
              en: 'No matter the gender or age, we evaluate everyone equally.',
              vi: 'Không kể giới tính hay tuổi tác nào, chúng tôi đánh giá mọi người bình đẳng.'
            }
          },
          {
            jp: '経験のいかんを問わず、一定の基準を適用する。',
            romaji: 'Keiken no ikan o towazu, ittei no kijun o tekiyō suru.',
            meaning: {
              en: 'No matter the experience, we apply a uniform standard.',
              vi: 'Không kể kinh nghiệm thế nào, chúng tôi áp dụng một tiêu chuẩn cố định.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The recruiting policy', vi: 'Chính sách tuyển dụng' },
        lines: [
          {
            jp: 'その会社は新しい採用方針を発表した。',
            romaji: 'Sono kaisha wa atarashii saiyō hōshin o happyō shita.',
            meaning: {
              en: 'The company announced a new recruiting policy.',
              vi: 'Công ty đó đã công bố chính sách tuyển dụng mới.'
            }
          },
          {
            jp: '国籍や性別のいかんを問わず、応募を受け付けるという。',
            romaji: 'Kokuseki ya seibetsu no ikan o towazu, ōbo o uketsukeru to iu.',
            meaning: {
              en: 'No matter the nationality or gender, they say they will accept applications.',
              vi: 'Không kể quốc tịch hay giới tính nào, họ nói sẽ tiếp nhận đơn ứng tuyển.'
            }
          },
          {
            jp: '経験のいかんにかかわらず、全員に同じ基準を適用する。',
            romaji: 'Keiken no ikan ni kakawarazu, zen\u2019in ni onaji kijun o tekiyō suru.',
            meaning: {
              en: 'Irrespective of experience, the same standard applies to everyone.',
              vi: 'Bất chấp kinh nghiệm, cùng một tiêu chuẩn được áp dụng cho tất cả.'
            }
          },
          {
            jp: 'ただし、いったん決まった結果のいかんによらず、返金には応じない。',
            romaji: 'Tadashi, ittan kimatta kekka no ikan ni yorazu, henkin ni wa ōjinai.',
            meaning: {
              en: 'However, regardless of the result once decided, no refund of fees will be given.',
              vi: 'Tuy nhiên, bất kể kết quả đã quyết định ra sao, sẽ không hoàn lại lệ phí.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Who can apply under the new policy?',
              vi: 'Theo chính sách mới, ai có thể ứng tuyển?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Only domestic male applicants',
                  vi: 'Chỉ ứng viên nam trong nước'
                }
              },
              {
                id: 'b',
                label: {
                  en: 'Anyone, regardless of nationality or gender',
                  vi: 'Bất kỳ ai, không kể quốc tịch hay giới tính'
                }
              },
              {
                id: 'c',
                label: { en: 'Only experienced workers', vi: 'Chỉ người có kinh nghiệm' }
              }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'How is experience treated in evaluation?',
              vi: 'Kinh nghiệm được xử lý thế nào khi đánh giá?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The same standard applies regardless of it',
                  vi: 'Cùng tiêu chuẩn áp dụng bất chấp kinh nghiệm'
                }
              },
              {
                id: 'b',
                label: {
                  en: 'Experienced people are rejected',
                  vi: 'Người có kinh nghiệm bị loại'
                }
              },
              {
                id: 'c',
                label: {
                  en: 'Experience doubles the score',
                  vi: 'Kinh nghiệm nhân đôi điểm số'
                }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What is the policy on refunds?',
              vi: 'Chính sách về hoàn tiền là gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'No refund regardless of the result',
                  vi: 'Không hoàn tiền bất kể kết quả'
                }
              },
              {
                id: 'b',
                label: { en: 'Full refund for everyone', vi: 'Hoàn toàn bộ cho mọi người' }
              },
              {
                id: 'c',
                label: {
                  en: 'Refund only if rejected',
                  vi: 'Chỉ hoàn tiền nếu bị loại'
                }
              }
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
      en: 'Undaunted By: 〜をものともせず(に)',
      vi: 'Bất chấp / Không nao núng trước: 〜をものともせず(に)'
    },
    focus: {
      en: 'Praise someone for acting boldly without yielding to a hardship, using 〜をものともせず(に).',
      vi: 'Ca ngợi ai đó hành động mạnh mẽ mà không khuất phục trước khó khăn, dùng 〜をものともせず(に).'
    },
    vocab: [
      {
        kana: 'ぎゃっきょう',
        kanji: '逆境',
        romaji: 'gyakkyō',
        meaning: { en: 'adversity, hardship', vi: 'nghịch cảnh' }
      },
      {
        kana: 'こうしんりょう',
        kanji: '向上心',
        romaji: 'kōjōshin',
        meaning: { en: 'ambition, drive to improve', vi: 'chí cầu tiến' }
      },
      {
        kana: 'けが',
        kanji: '怪我',
        romaji: 'kega',
        meaning: { en: 'injury', vi: 'chấn thương' }
      },
      {
        kana: 'しゅつじょう',
        kanji: '出場',
        romaji: 'shutsujō',
        meaning: { en: 'participation (in a contest)', vi: 'việc tham gia thi đấu' }
      },
      {
        kana: 'ゆうしょう',
        kanji: '優勝',
        romaji: 'yūshō',
        meaning: { en: 'championship, victory', vi: 'chức vô địch' }
      },
      {
        kana: 'はげしい',
        kanji: '激しい',
        romaji: 'hageshii',
        meaning: { en: 'fierce, intense', vi: 'dữ dội, mãnh liệt' }
      },
      {
        kana: 'ひなん',
        kanji: '非難',
        romaji: 'hinan',
        meaning: { en: 'criticism, blame', vi: 'sự chỉ trích' }
      },
      {
        kana: 'つらぬく',
        kanji: '貫く',
        romaji: 'tsuranuku',
        meaning: { en: 'to carry through, persist in', vi: 'kiên trì đến cùng' }
      },
      {
        kana: 'ふうう',
        kanji: '風雨',
        romaji: 'fūu',
        meaning: { en: 'wind and rain, storm', vi: 'mưa gió' }
      },
      {
        kana: 'すすむ',
        kanji: '進む',
        romaji: 'susumu',
        meaning: { en: 'to advance, proceed', vi: 'tiến lên, tiến hành' }
      },
      {
        kana: 'こんなん',
        kanji: '困難',
        romaji: 'konnan',
        meaning: { en: 'difficulty, hardship', vi: 'khó khăn, gian nan' }
      },
      {
        kana: 'たっせい',
        kanji: '達成',
        romaji: 'tassei',
        meaning: { en: 'achievement, accomplishment', vi: 'sự đạt được' }
      }
    ],
    grammar: [
      {
        pattern: 'N をものともせずに',
        title: { en: 'Undaunted by N', vi: 'Không nao núng trước N' },
        explanation: {
          en: 'をものともせずに means acting "without being daunted by" a hardship or obstacle (N). It expresses admiration for brave, determined action and is used about other people, not oneself.',
          vi: 'をものともせずに nghĩa là hành động "mà không nao núng trước" khó khăn hay trở ngại (N). Nó thể hiện sự thán phục với hành động dũng cảm, kiên định, và dùng để nói về người khác, không phải bản thân.'
        },
        examples: [
          {
            jp: '彼は怪我をものともせずに試合に出場した。',
            romaji: 'Kare wa kega o monotomosezu ni shiai ni shutsujō shita.',
            meaning: {
              en: 'Undaunted by his injury, he took part in the match.',
              vi: 'Không nao núng trước chấn thương, anh ấy đã ra sân thi đấu.'
            }
          },
          {
            jp: '激しい風雨をものともせずに、隊員は前へ進んだ。',
            romaji: 'Hageshii fūu o monotomosezu ni, taiin wa mae e susunda.',
            meaning: {
              en: 'Undaunted by the fierce storm, the team members pressed forward.',
              vi: 'Bất chấp mưa gió dữ dội, các đội viên vẫn tiến về phía trước.'
            }
          }
        ]
      },
      {
        pattern: 'N をものともせず',
        title: { en: 'Defying N (without に)', vi: 'Bất chấp N (không に)' },
        explanation: {
          en: 'The に can be dropped with no change in meaning. をものともせず directly modifies the verb that follows, common in written and reportive styles.',
          vi: 'Có thể bỏ に mà nghĩa không đổi. をものともせず bổ nghĩa trực tiếp cho động từ phía sau, hay gặp trong văn viết và lối tường thuật.'
        },
        examples: [
          {
            jp: '周囲の非難をものともせず、彼女は自分の道を貫いた。',
            romaji: 'Shūi no hinan o monotomosezu, kanojo wa jibun no michi o tsuranuita.',
            meaning: {
              en: 'Defying the criticism around her, she carried her own path through.',
              vi: 'Bất chấp sự chỉ trích xung quanh, cô ấy đã kiên trì con đường của mình đến cùng.'
            }
          },
          {
            jp: '逆境をものともせず、若者たちは挑戦を続けた。',
            romaji: 'Gyakkyō o monotomosezu, wakamono-tachi wa chōsen o tsuzuketa.',
            meaning: {
              en: 'Undaunted by adversity, the young people kept on taking up the challenge.',
              vi: 'Không nao núng trước nghịch cảnh, những người trẻ vẫn tiếp tục thử thách.'
            }
          }
        ]
      },
      {
        pattern: '困難 をものともせず 〜する',
        title: { en: 'Achieving despite hardship', vi: 'Làm nên điều gì bất chấp khó khăn' },
        explanation: {
          en: 'Often the hardship noun (困難, 病気, 反対…) is overcome to reach a positive achievement in the main clause, highlighting strength of will.',
          vi: 'Thường danh từ chỉ khó khăn (困難, 病気, 反対…) bị vượt qua để đạt thành tựu tích cực ở mệnh đề chính, làm nổi bật ý chí mạnh mẽ.'
        },
        examples: [
          {
            jp: '彼女は数々の困難をものともせず、目標を達成した。',
            romaji: 'Kanojo wa kazukazu no konnan o monotomosezu, mokuhyō o tassei shita.',
            meaning: {
              en: 'Undaunted by numerous difficulties, she achieved her goal.',
              vi: 'Bất chấp vô vàn khó khăn, cô ấy đã đạt được mục tiêu.'
            }
          },
          {
            jp: '選手は痛みをものともせず、見事に優勝した。',
            romaji: 'Senshu wa itami o monotomosezu, migoto ni yūshō shita.',
            meaning: {
              en: 'Undaunted by the pain, the athlete won the championship splendidly.',
              vi: 'Bất chấp cơn đau, vận động viên đã giành chức vô địch một cách xuất sắc.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The runner who would not give up', vi: 'Vận động viên không bỏ cuộc' },
        lines: [
          {
            jp: '大会の前日、選手は足に怪我をしてしまった。',
            romaji: 'Taikai no zenjitsu, senshu wa ashi ni kega o shite shimatta.',
            meaning: {
              en: 'The day before the tournament, the athlete injured his leg.',
              vi: 'Hôm trước giải đấu, vận động viên bị chấn thương ở chân.'
            }
          },
          {
            jp: '周囲の反対をものともせず、彼は出場を決めた。',
            romaji: 'Shūi no hantai o monotomosezu, kare wa shutsujō o kimeta.',
            meaning: {
              en: 'Undaunted by the opposition around him, he decided to compete.',
              vi: 'Bất chấp sự phản đối xung quanh, anh ấy đã quyết định ra thi đấu.'
            }
          },
          {
            jp: '激しい痛みをものともせず、最後まで走り抜いた。',
            romaji: 'Hageshii itami o monotomosezu, saigo made hashirinuita.',
            meaning: {
              en: 'Undaunted by the intense pain, he ran all the way to the finish.',
              vi: 'Bất chấp cơn đau dữ dội, anh ấy đã chạy đến đích cuối cùng.'
            }
          },
          {
            jp: '数々の困難をものともせず、彼はついに優勝を達成した。',
            romaji: 'Kazukazu no konnan o monotomosezu, kare wa tsui ni yūshō o tassei shita.',
            meaning: {
              en: 'Undaunted by many difficulties, he finally achieved the championship.',
              vi: 'Bất chấp vô vàn khó khăn, cuối cùng anh ấy đã giành được chức vô địch.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened the day before the tournament?',
              vi: 'Hôm trước giải đấu đã xảy ra chuyện gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'He injured his leg', vi: 'Anh ấy bị chấn thương chân' }
              },
              {
                id: 'b',
                label: { en: 'He won an award', vi: 'Anh ấy được trao giải' }
              },
              {
                id: 'c',
                label: { en: 'He changed teams', vi: 'Anh ấy đổi đội' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How did he respond to the opposition around him?',
              vi: 'Anh ấy phản ứng thế nào trước sự phản đối xung quanh?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'He gave up the race', vi: 'Anh ấy bỏ cuộc đua' }
              },
              {
                id: 'b',
                label: {
                  en: 'Undaunted, he decided to compete',
                  vi: 'Không nao núng, anh quyết định thi đấu'
                }
              },
              {
                id: 'c',
                label: { en: 'He waited a year', vi: 'Anh ấy chờ một năm' }
              }
            ],
            correctId: 'b'
          },
          {
            id: 'q3',
            question: {
              en: 'What did he ultimately achieve?',
              vi: 'Cuối cùng anh ấy đạt được điều gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'The championship', vi: 'Chức vô địch' }
              },
              {
                id: 'b',
                label: { en: 'Nothing at all', vi: 'Không gì cả' }
              },
              {
                id: 'c',
                label: { en: 'A coaching job', vi: 'Công việc huấn luyện viên' }
              }
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
      en: 'Ignoring / In Defiance Of: 〜をよそに',
      vi: 'Mặc kệ / Bất chấp: 〜をよそに'
    },
    focus: {
      en: 'Describe acting while disregarding others\u2019 concern, opposition, or expectation, using 〜をよそに.',
      vi: 'Diễn đạt việc hành động trong khi phớt lờ sự lo lắng, phản đối hay kỳ vọng của người khác, dùng 〜をよそに.'
    },
    vocab: [
      {
        kana: 'しんぱい',
        kanji: '心配',
        romaji: 'shinpai',
        meaning: { en: 'worry, concern', vi: 'sự lo lắng' }
      },
      {
        kana: 'はんたい',
        kanji: '反対',
        romaji: 'hantai',
        meaning: { en: 'opposition', vi: 'sự phản đối' }
      },
      {
        kana: 'よろん',
        kanji: '世論',
        romaji: 'yoron',
        meaning: { en: 'public opinion', vi: 'dư luận' }
      },
      {
        kana: 'ひはん',
        kanji: '批判',
        romaji: 'hihan',
        meaning: { en: 'criticism', vi: 'sự phê phán' }
      },
      {
        kana: 'きせい',
        kanji: '規制',
        romaji: 'kisei',
        meaning: { en: 'regulation, control', vi: 'sự quản chế, quy định' }
      },
      {
        kana: 'おしすすめる',
        kanji: '推し進める',
        romaji: 'oshisusumeru',
        meaning: { en: 'to push forward, promote', vi: 'thúc đẩy, đẩy mạnh' }
      },
      {
        kana: 'きぼ',
        kanji: '規模',
        romaji: 'kibo',
        meaning: { en: 'scale, scope', vi: 'quy mô' }
      },
      {
        kana: 'かいはつ',
        kanji: '開発',
        romaji: 'kaihatsu',
        meaning: { en: 'development', vi: 'sự phát triển, khai thác' }
      },
      {
        kana: 'じゅうみん',
        kanji: '住民',
        romaji: 'jūmin',
        meaning: { en: 'residents', vi: 'cư dân' }
      },
      {
        kana: 'こうぎ',
        kanji: '抗議',
        romaji: 'kōgi',
        meaning: { en: 'protest', vi: 'sự phản kháng, kháng nghị' }
      },
      {
        kana: 'きょうこう',
        kanji: '強行',
        romaji: 'kyōkō',
        meaning: { en: 'forcing through', vi: 'việc cưỡng ép tiến hành' }
      },
      {
        kana: 'むしする',
        kanji: '無視する',
        romaji: 'mushi suru',
        meaning: { en: 'to ignore, disregard', vi: 'phớt lờ, bỏ qua' }
      }
    ],
    grammar: [
      {
        pattern: 'N をよそに',
        title: { en: 'Disregarding N', vi: 'Mặc kệ N' },
        explanation: {
          en: 'をよそに means acting while ignoring or paying no heed to N (often someone\u2019s worry, opposition, or expectation). It usually carries a critical or surprised tone toward the actor.',
          vi: 'をよそに nghĩa là hành động trong khi phớt lờ, không bận tâm đến N (thường là sự lo lắng, phản đối hay kỳ vọng của ai đó). Mẫu này thường mang giọng phê phán hoặc ngạc nhiên về người thực hiện.'
        },
        examples: [
          {
            jp: '親の心配をよそに、彼は一人で海外へ旅立った。',
            romaji: 'Oya no shinpai o yoso ni, kare wa hitori de kaigai e tabidatta.',
            meaning: {
              en: "Ignoring his parents' worry, he set off abroad alone.",
              vi: 'Mặc kệ sự lo lắng của cha mẹ, anh ấy đã một mình lên đường ra nước ngoài.'
            }
          },
          {
            jp: '住民の反対をよそに、工事は強行された。',
            romaji: 'Jūmin no hantai o yoso ni, kōji wa kyōkō sareta.',
            meaning: {
              en: "Disregarding the residents' opposition, the construction was forced through.",
              vi: 'Bất chấp sự phản đối của cư dân, công trình vẫn bị cưỡng ép tiến hành.'
            }
          }
        ]
      },
      {
        pattern: '世論／批判 をよそに',
        title: { en: 'In defiance of opinion', vi: 'Bất chấp dư luận' },
        explanation: {
          en: 'When N is public opinion or criticism, をよそに stresses that a powerful actor ignored it and proceeded anyway. Common in news and editorial writing.',
          vi: 'Khi N là dư luận hay sự phê phán, をよそに nhấn mạnh rằng một bên có thế lực đã phớt lờ và vẫn tiến hành. Hay gặp trong tin tức và bài xã luận.'
        },
        examples: [
          {
            jp: '世論の批判をよそに、政府は新しい規制を推し進めた。',
            romaji: 'Yoron no hihan o yoso ni, seifu wa atarashii kisei o oshisusumeta.',
            meaning: {
              en: 'In defiance of public criticism, the government pushed the new regulation forward.',
              vi: 'Bất chấp sự phê phán của dư luận, chính phủ vẫn thúc đẩy quy định mới.'
            }
          },
          {
            jp: '周囲の心配をよそに、会社は大規模な開発を続けた。',
            romaji: 'Shūi no shinpai o yoso ni, kaisha wa daikibo na kaihatsu o tsuzuketa.',
            meaning: {
              en: 'Ignoring the concern around it, the company continued the large-scale development.',
              vi: 'Mặc kệ sự lo lắng xung quanh, công ty vẫn tiếp tục dự án phát triển quy mô lớn.'
            }
          }
        ]
      },
      {
        pattern: '人の期待 をよそに',
        title: { en: "Against others' expectations", vi: 'Trái với kỳ vọng của người khác' },
        explanation: {
          en: 'をよそに can also follow expectations or attention, showing the actor went their own way regardless of what others hoped or watched for.',
          vi: 'をよそに cũng có thể theo sau kỳ vọng hay sự chú ý, cho thấy người thực hiện đã đi theo ý mình bất kể người khác mong đợi hay dõi theo điều gì.'
        },
        examples: [
          {
            jp: '周囲の期待をよそに、彼は会社を辞めてしまった。',
            romaji: 'Shūi no kitai o yoso ni, kare wa kaisha o yamete shimatta.',
            meaning: {
              en: "Against everyone's expectations, he ended up quitting the company.",
              vi: 'Trái với kỳ vọng của mọi người, anh ấy đã nghỉ việc ở công ty.'
            }
          },
          {
            jp: '人々の抗議をよそに、計画は予定どおり進められた。',
            romaji: 'Hitobito no kōgi o yoso ni, keikaku wa yotei dōri susumerareta.',
            meaning: {
              en: "Ignoring people's protests, the plan was carried out as scheduled.",
              vi: 'Mặc kệ sự phản kháng của người dân, kế hoạch vẫn được tiến hành đúng dự định.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The disputed development', vi: 'Dự án phát triển gây tranh cãi' },
        lines: [
          {
            jp: '市の中心で大規模な開発計画が発表された。',
            romaji: 'Shi no chūshin de daikibo na kaihatsu keikaku ga happyō sareta.',
            meaning: {
              en: 'A large-scale development plan was announced in the center of the city.',
              vi: 'Một kế hoạch phát triển quy mô lớn đã được công bố ở trung tâm thành phố.'
            }
          },
          {
            jp: '住民の心配をよそに、会社は工事を始めた。',
            romaji: 'Jūmin no shinpai o yoso ni, kaisha wa kōji o hajimeta.',
            meaning: {
              en: "Disregarding the residents' worry, the company began construction.",
              vi: 'Mặc kệ sự lo lắng của cư dân, công ty đã bắt đầu thi công.'
            }
          },
          {
            jp: '世論の批判をよそに、市もその計画を推し進めた。',
            romaji: 'Yoron no hihan o yoso ni, shi mo sono keikaku o oshisusumeta.',
            meaning: {
              en: 'In defiance of public criticism, the city also pushed the plan forward.',
              vi: 'Bất chấp sự phê phán của dư luận, thành phố cũng thúc đẩy kế hoạch đó.'
            }
          },
          {
            jp: '人々の抗議をよそに、工事は予定どおり強行された。',
            romaji: 'Hitobito no kōgi o yoso ni, kōji wa yotei dōri kyōkō sareta.',
            meaning: {
              en: "Ignoring people's protests, the construction was forced through on schedule.",
              vi: 'Mặc kệ sự phản kháng của người dân, công trình vẫn bị cưỡng ép tiến hành đúng kế hoạch.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the company act toward the residents\u2019 worry?',
              vi: 'Công ty hành động thế nào trước sự lo lắng của cư dân?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'It stopped the construction',
                  vi: 'Nó đã ngừng thi công'
                }
              },
              {
                id: 'b',
                label: {
                  en: 'It began construction anyway',
                  vi: 'Nó vẫn bắt đầu thi công'
                }
              },
              {
                id: 'c',
                label: {
                  en: 'It moved to another city',
                  vi: 'Nó chuyển sang thành phố khác'
                }
              }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the city do despite public criticism?',
              vi: 'Thành phố đã làm gì bất chấp sự phê phán của dư luận?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Pushed the plan forward', vi: 'Thúc đẩy kế hoạch' }
              },
              {
                id: 'b',
                label: { en: 'Canceled the plan', vi: 'Hủy bỏ kế hoạch' }
              },
              {
                id: 'c',
                label: { en: 'Held a new vote', vi: 'Tổ chức một cuộc bỏ phiếu mới' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What ultimately happened to the construction?',
              vi: 'Cuối cùng công trình ra sao?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'It was forced through on schedule',
                  vi: 'Bị cưỡng ép tiến hành đúng kế hoạch'
                }
              },
              {
                id: 'b',
                label: { en: 'It was delayed a year', vi: 'Bị hoãn một năm' }
              },
              {
                id: 'c',
                label: { en: 'It was abandoned', vi: 'Bị bỏ dở' }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
