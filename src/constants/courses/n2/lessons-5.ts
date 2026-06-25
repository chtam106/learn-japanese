import type { Lesson } from '@/constants/courses/types.ts';

export const n2LessonsE: Lesson[] = [
  {
    id: 'lesson-33',
    number: 33,
    title: {
      en: 'What Something Truly Is',
      vi: 'Bản chất thật sự của một điều'
    },
    focus: {
      en: 'State the essence or common-sense truth of something with 〜というものだ, and contrast it with related judgment patterns.',
      vi: 'Nêu bản chất hay sự thật hiển nhiên của một điều với 〜というものだ, đối chiếu với các mẫu đánh giá liên quan.'
    },
    vocab: [
      {
        kana: 'しんらい',
        kanji: '信頼',
        romaji: 'shinrai',
        meaning: { en: 'trust, reliance', vi: 'sự tin tưởng' }
      },
      {
        kana: 'かんしゃ',
        kanji: '感謝',
        romaji: 'kansha',
        meaning: { en: 'gratitude', vi: 'sự biết ơn' }
      },
      {
        kana: 'せきにん',
        kanji: '責任',
        romaji: 'sekinin',
        meaning: { en: 'responsibility', vi: 'trách nhiệm' }
      },
      {
        kana: 'じょうしき',
        kanji: '常識',
        romaji: 'jōshiki',
        meaning: { en: 'common sense', vi: 'lẽ thường, kiến thức phổ thông' }
      },
      {
        kana: 'おもいやり',
        kanji: '思いやり',
        romaji: 'omoiyari',
        meaning: { en: 'consideration, compassion', vi: 'sự quan tâm, lòng cảm thông' }
      },
      {
        kana: 'たすけあう',
        kanji: '助け合う',
        romaji: 'tasukeau',
        meaning: { en: 'to help one another', vi: 'giúp đỡ lẫn nhau' }
      },
      {
        kana: 'みとめる',
        kanji: '認める',
        romaji: 'mitomeru',
        meaning: { en: 'to acknowledge, admit', vi: 'thừa nhận, công nhận' }
      },
      {
        kana: 'りそう',
        kanji: '理想',
        romaji: 'risō',
        meaning: { en: 'ideal', vi: 'lý tưởng' }
      },
      {
        kana: 'くろう',
        kanji: '苦労',
        romaji: 'kurō',
        meaning: { en: 'hardship, toil', vi: 'sự vất vả, khổ cực' }
      },
      {
        kana: 'せいちょう',
        kanji: '成長',
        romaji: 'seichō',
        meaning: { en: 'growth', vi: 'sự trưởng thành' }
      },
      {
        kana: 'まもる',
        kanji: '守る',
        romaji: 'mamoru',
        meaning: { en: 'to keep, protect', vi: 'giữ gìn, bảo vệ' }
      },
      {
        kana: 'ゆうじょう',
        kanji: '友情',
        romaji: 'yūjō',
        meaning: { en: 'friendship', vi: 'tình bạn' }
      }
    ],
    grammar: [
      {
        pattern: 'N／普通形 ＋ というものだ',
        title: {
          en: 'That is what ~ really is (〜というものだ)',
          vi: 'Đó mới chính là ~ (〜というものだ)'
        },
        explanation: {
          en: 'Add というものだ to a noun or plain clause to declare the essential nature or common-sense truth of something. It carries a tone of conviction, as if stating a general principle everyone should accept.',
          vi: 'Gắn というものだ vào danh từ hoặc mệnh đề thể thường để khẳng định bản chất hay sự thật hiển nhiên của một điều. Mẫu mang sắc thái quả quyết, như đang nêu một nguyên tắc chung mà ai cũng nên công nhận.'
        },
        examples: [
          {
            jp: '困ったときに助け合うのが、本当の友情というものだ。',
            romaji: 'Komatta toki ni tasukeau no ga, hontō no yūjō to iu mono da.',
            meaning: {
              en: 'Helping each other in hard times is what true friendship really is.',
              vi: 'Giúp đỡ nhau lúc khó khăn mới chính là tình bạn thật sự.'
            }
          },
          {
            jp: '約束を守らないのは、無責任というものだ。',
            romaji: 'Yakusoku o mamoranai no wa, musekinin to iu mono da.',
            meaning: {
              en: 'Not keeping your promises is simply irresponsible.',
              vi: 'Không giữ lời hứa thì đúng là vô trách nhiệm.'
            }
          }
        ]
      },
      {
        pattern: '普通形 ＋ というものではない',
        title: {
          en: 'It is not necessarily that ~ (〜というものではない)',
          vi: 'Không hẳn là ~ (〜というものではない)'
        },
        explanation: {
          en: 'The negative というものではない (or というものでもない) rejects an overly simple assumption, meaning "it is not necessarily the case that".',
          vi: 'Dạng phủ định というものではない (hoặc というものでもない) bác bỏ một giả định quá đơn giản, nghĩa là "không nhất thiết là".'
        },
        examples: [
          {
            jp: 'お金があれば幸せだというものではない。',
            romaji: 'O-kane ga areba shiawase da to iu mono de wa nai.',
            meaning: {
              en: 'Having money does not necessarily make you happy.',
              vi: 'Có tiền không hẳn là sẽ hạnh phúc.'
            }
          },
          {
            jp: '謝れば許されるというものでもない。',
            romaji: 'Ayamareba yurusareru to iu mono demo nai.',
            meaning: {
              en: 'It is not as if apologizing will automatically get you forgiven.',
              vi: 'Cứ xin lỗi không hẳn là sẽ được tha thứ.'
            }
          }
        ]
      },
      {
        pattern: 'A ＋ というより ＋ B',
        title: {
          en: 'Rather B than A (〜というより)',
          vi: 'Đúng hơn là B chứ không phải A (〜というより)'
        },
        explanation: {
          en: 'というより corrects a description, saying B is a more accurate label than A. It is common when refining an impression.',
          vi: 'というより điều chỉnh cách miêu tả, cho rằng B là cách gọi chính xác hơn A. Thường dùng khi muốn nói lại ấn tượng cho đúng.'
        },
        examples: [
          {
            jp: '彼は厳しいというより、冷たい人だ。',
            romaji: 'Kare wa kibishii to iu yori, tsumetai hito da.',
            meaning: {
              en: 'He is a cold person rather than a strict one.',
              vi: 'Anh ấy lạnh lùng thì đúng hơn là nghiêm khắc.'
            }
          },
          {
            jp: 'これは趣味というより、もう仕事だ。',
            romaji: 'Kore wa shumi to iu yori, mō shigoto da.',
            meaning: {
              en: 'This is already work rather than a hobby.',
              vi: 'Cái này là công việc thì đúng hơn chứ không còn là sở thích nữa.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A word of thanks', vi: 'Một lời cảm ơn' },
        lines: [
          {
            jp: '私が大変だったとき、同僚たちは何も言わずに助けてくれた。',
            romaji:
              'Watashi ga taihen datta toki, dōryō-tachi wa nani mo iwazu ni tasukete kureta.',
            meaning: {
              en: 'When I was struggling, my colleagues helped me without a word.',
              vi: 'Khi tôi gặp khó khăn, các đồng nghiệp đã giúp tôi mà chẳng nói gì.'
            }
          },
          {
            jp: '困ったときに助け合うのが、本当の仲間というものだろう。',
            romaji: 'Komatta toki ni tasukeau no ga, hontō no nakama to iu mono darō.',
            meaning: {
              en: 'Helping each other in hard times is surely what real comrades are.',
              vi: 'Giúp nhau lúc khó khăn hẳn mới chính là đồng đội thật sự.'
            }
          },
          {
            jp: 'もちろん、お礼を言えばそれで十分だというものではない。',
            romaji: 'Mochiron, o-rei o ieba sore de jūbun da to iu mono de wa nai.',
            meaning: {
              en: 'Of course, it is not as if saying thank you is enough on its own.',
              vi: 'Tất nhiên, chỉ nói cảm ơn thôi thì không hẳn là đủ.'
            }
          },
          {
            jp: '私にとってそれは義務というより、心からの感謝だった。',
            romaji: 'Watashi ni totte sore wa gimu to iu yori, kokoro kara no kansha datta.',
            meaning: {
              en: 'For me it was heartfelt gratitude rather than a duty.',
              vi: 'Với tôi đó là lòng biết ơn chân thành chứ không phải nghĩa vụ.'
            }
          },
          {
            jp: '次は私が誰かを支える番だと思っている。',
            romaji: 'Tsugi wa watashi ga dareka o sasaeru ban da to omotte iru.',
            meaning: {
              en: 'I feel it is my turn to support someone next.',
              vi: 'Tôi nghĩ lần tới sẽ đến lượt tôi nâng đỡ ai đó.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the colleagues help the writer?',
              vi: 'Các đồng nghiệp đã giúp người viết như thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Quietly, without a word', vi: 'Lặng lẽ, không nói gì' } },
              { id: 'b', label: { en: 'Only after being asked', vi: 'Chỉ sau khi được nhờ' } },
              { id: 'c', label: { en: 'In exchange for money', vi: 'Để đổi lấy tiền' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer consider true comradeship?',
              vi: 'Người viết coi điều gì là tình đồng đội thật sự?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Helping each other in hard times', vi: 'Giúp nhau lúc khó khăn' }
              },
              { id: 'b', label: { en: 'Saying thank you politely', vi: 'Nói cảm ơn lịch sự' } },
              { id: 'c', label: { en: 'Working alone', vi: 'Làm việc một mình' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'How did the writer feel about thanking them?',
              vi: 'Người viết cảm thấy thế nào về việc cảm ơn họ?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'It was heartfelt gratitude, not a duty',
                  vi: 'Đó là lòng biết ơn chân thành, không phải nghĩa vụ'
                }
              },
              {
                id: 'b',
                label: { en: 'It was an unpleasant obligation', vi: 'Đó là nghĩa vụ khó chịu' }
              },
              { id: 'c', label: { en: 'It was unnecessary', vi: 'Đó là điều không cần thiết' } }
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
      en: 'Nothing Happens Unless',
      vi: 'Không làm thì chẳng có gì'
    },
    focus: {
      en: 'Express that nothing can follow unless a first step is taken, using 〜ないことには and related conditions.',
      vi: 'Diễn đạt rằng không thể có bước tiếp theo nếu chưa làm bước đầu, với 〜ないことには và các điều kiện liên quan.'
    },
    vocab: [
      {
        kana: 'ためす',
        kanji: '試す',
        romaji: 'tamesu',
        meaning: { en: 'to try, test', vi: 'thử, kiểm tra' }
      },
      {
        kana: 'かくにん',
        kanji: '確認',
        romaji: 'kakunin',
        meaning: { en: 'confirmation, checking', vi: 'sự xác nhận, kiểm tra' }
      },
      {
        kana: 'じっさい',
        kanji: '実際',
        romaji: 'jissai',
        meaning: { en: 'actuality, in practice', vi: 'thực tế' }
      },
      {
        kana: 'ちょうせん',
        kanji: '挑戦',
        romaji: 'chōsen',
        meaning: { en: 'challenge, attempt', vi: 'sự thử thách, thử sức' }
      },
      {
        kana: 'かいけつ',
        kanji: '解決',
        romaji: 'kaiketsu',
        meaning: { en: 'resolution, solving', vi: 'sự giải quyết' }
      },
      {
        kana: 'じょうほう',
        kanji: '情報',
        romaji: 'jōhō',
        meaning: { en: 'information', vi: 'thông tin' }
      },
      {
        kana: 'はんだん',
        kanji: '判断',
        romaji: 'handan',
        meaning: { en: 'judgment, decision', vi: 'sự phán đoán, quyết định' }
      },
      {
        kana: 'とりくむ',
        kanji: '取り組む',
        romaji: 'torikumu',
        meaning: { en: 'to tackle, work on', vi: 'bắt tay vào, giải quyết' }
      },
      {
        kana: 'すすめる',
        kanji: '進める',
        romaji: 'susumeru',
        meaning: { en: 'to move forward, proceed', vi: 'tiến hành, thúc đẩy' }
      },
      {
        kana: 'ぐたいてき',
        kanji: '具体的',
        romaji: 'gutaiteki',
        meaning: { en: 'concrete, specific', vi: 'cụ thể' }
      },
      {
        kana: 'あつめる',
        kanji: '集める',
        romaji: 'atsumeru',
        meaning: { en: 'to gather, collect', vi: 'thu thập, tập hợp' }
      },
      {
        kana: 'けっか',
        kanji: '結果',
        romaji: 'kekka',
        meaning: { en: 'result, outcome', vi: 'kết quả' }
      }
    ],
    grammar: [
      {
        pattern: 'V-ない ＋ ことには ～ない',
        title: {
          en: 'Unless ~, nothing follows (〜ないことには)',
          vi: 'Nếu không ~ thì chẳng được (〜ないことには)'
        },
        explanation: {
          en: 'Attach ことには to a verb in its plain negative form. The main clause must also be negative, meaning that unless the first action is done, the second outcome is impossible.',
          vi: 'Gắn ことには vào động từ thể phủ định ngắn. Mệnh đề chính cũng phải mang nghĩa phủ định, diễn đạt rằng nếu chưa làm hành động đầu thì không thể có kết quả sau.'
        },
        examples: [
          {
            jp: '実際にやってみないことには、できるかどうか分からない。',
            romaji: 'Jissai ni yatte minai koto ni wa, dekiru ka dō ka wakaranai.',
            meaning: {
              en: 'Unless you actually try it, you cannot tell whether you can do it.',
              vi: 'Nếu không thực sự thử làm thì không biết có làm được hay không.'
            }
          },
          {
            jp: '情報を集めないことには、正しい判断はできない。',
            romaji: 'Jōhō o atsumenai koto ni wa, tadashii handan wa dekinai.',
            meaning: {
              en: 'Without gathering information, you cannot make a correct judgment.',
              vi: 'Không thu thập thông tin thì không thể phán đoán đúng.'
            }
          }
        ]
      },
      {
        pattern: 'V-ない ＋ 限り ～ない',
        title: { en: 'As long as ~ not (〜ない限り)', vi: 'Chừng nào chưa ~ (〜ない限り)' },
        explanation: {
          en: 'ない限り marks a condition that must change for the result to be possible; until it does, the situation stays the same.',
          vi: 'ない限り nêu một điều kiện phải thay đổi thì kết quả mới khả thi; chừng nào chưa đổi, tình hình vẫn giữ nguyên.'
        },
        examples: [
          {
            jp: '努力しない限り、成功はありえない。',
            romaji: 'Doryoku shinai kagiri, seikō wa arienai.',
            meaning: {
              en: 'As long as you do not make an effort, success is impossible.',
              vi: 'Chừng nào chưa nỗ lực thì không thể thành công.'
            }
          },
          {
            jp: '原因が分からない限り、問題は解決しない。',
            romaji: 'Gen-in ga wakaranai kagiri, mondai wa kaiketsu shinai.',
            meaning: {
              en: 'The problem will not be solved as long as the cause is unknown.',
              vi: 'Chừng nào chưa rõ nguyên nhân thì vấn đề sẽ không được giải quyết.'
            }
          }
        ]
      },
      {
        pattern: 'V-て ＋ からでないと ～ない',
        title: {
          en: 'Not until after ~ (〜てからでないと)',
          vi: 'Phải ~ xong mới được (〜てからでないと)'
        },
        explanation: {
          en: 'てからでないと stresses the order of steps: the second action cannot happen until the first is completed.',
          vi: 'てからでないと nhấn mạnh thứ tự các bước: hành động sau chỉ có thể diễn ra sau khi hành động đầu hoàn tất.'
        },
        examples: [
          {
            jp: '上司に確認してからでないと、進められません。',
            romaji: 'Jōshi ni kakunin shite kara de nai to, susumeraremasen.',
            meaning: {
              en: 'I cannot proceed until after I check with my boss.',
              vi: 'Phải xác nhận với cấp trên xong thì mới tiến hành được.'
            }
          },
          {
            jp: '予約してからでないと、入れない店だ。',
            romaji: 'Yoyaku shite kara de nai to, hairenai mise da.',
            meaning: {
              en: 'It is a restaurant you cannot enter unless you book first.',
              vi: 'Đó là quán phải đặt chỗ trước mới vào được.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A new project', vi: 'Một dự án mới' },
        lines: [
          {
            jp: '来月から新しいプロジェクトに取り組むことになった。',
            romaji: 'Raigetsu kara atarashii purojekuto ni torikumu koto ni natta.',
            meaning: {
              en: 'It was decided that we would tackle a new project from next month.',
              vi: 'Từ tháng sau, chúng tôi sẽ bắt tay vào một dự án mới.'
            }
          },
          {
            jp: 'まず情報を集めないことには、具体的な計画は立てられない。',
            romaji: 'Mazu jōhō o atsumenai koto ni wa, gutaiteki na keikaku wa taterarenai.',
            meaning: {
              en: 'Without first gathering information, we cannot make a concrete plan.',
              vi: 'Nếu chưa thu thập thông tin thì không thể lập kế hoạch cụ thể.'
            }
          },
          {
            jp: 'チーム全員が協力しない限り、成功は難しいだろう。',
            romaji: 'Chīmu zen-in ga kyōryoku shinai kagiri, seikō wa muzukashii darō.',
            meaning: {
              en: 'As long as the whole team does not cooperate, success will be hard.',
              vi: 'Chừng nào cả nhóm chưa hợp tác thì khó mà thành công.'
            }
          },
          {
            jp: 'だから、予算を確認してからでないと、何も始められない。',
            romaji: 'Dakara, yosan o kakunin shite kara de nai to, nani mo hajimerarenai.',
            meaning: {
              en: 'So we cannot start anything until we have checked the budget.',
              vi: 'Vì vậy phải kiểm tra ngân sách xong mới có thể bắt đầu.'
            }
          },
          {
            jp: 'それでも、挑戦してみたい気持ちは強い。',
            romaji: 'Sore demo, chōsen shite mitai kimochi wa tsuyoi.',
            meaning: {
              en: 'Even so, my desire to take on the challenge is strong.',
              vi: 'Dù vậy, mong muốn thử sức của tôi vẫn rất mạnh.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is needed before making a concrete plan?',
              vi: 'Cần làm gì trước khi lập kế hoạch cụ thể?'
            },
            choices: [
              { id: 'a', label: { en: 'Gathering information', vi: 'Thu thập thông tin' } },
              { id: 'b', label: { en: 'Hiring new staff', vi: 'Tuyển nhân viên mới' } },
              { id: 'c', label: { en: 'Finishing the project', vi: 'Hoàn thành dự án' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'According to the writer, when is success hard?',
              vi: 'Theo người viết, khi nào thì khó thành công?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'As long as the team does not cooperate',
                  vi: 'Chừng nào cả nhóm chưa hợp tác'
                }
              },
              { id: 'b', label: { en: 'When the budget is large', vi: 'Khi ngân sách lớn' } },
              {
                id: 'c',
                label: { en: 'When the project starts late', vi: 'Khi dự án bắt đầu muộn' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What must be done before starting anything?',
              vi: 'Phải làm gì trước khi bắt đầu bất cứ việc gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Check the budget', vi: 'Kiểm tra ngân sách' } },
              { id: 'b', label: { en: 'Take a vacation', vi: 'Đi nghỉ' } },
              { id: 'c', label: { en: 'Change the team', vi: 'Thay đổi nhóm' } }
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
      en: 'Not Only This, But Also That',
      vi: 'Không chỉ vậy, mà còn hơn thế'
    },
    focus: {
      en: 'Pile one fact on top of another, often a worse or surprising one, with 〜ばかりか and related additive patterns.',
      vi: 'Chồng một sự việc lên một sự việc khác, thường tệ hơn hoặc bất ngờ, với 〜ばかりか và các mẫu bổ sung liên quan.'
    },
    vocab: [
      {
        kana: 'たいふう',
        kanji: '台風',
        romaji: 'taifū',
        meaning: { en: 'typhoon', vi: 'bão' }
      },
      {
        kana: 'ひがい',
        kanji: '被害',
        romaji: 'higai',
        meaning: { en: 'damage, harm', vi: 'thiệt hại' }
      },
      {
        kana: 'ていでん',
        kanji: '停電',
        romaji: 'teiden',
        meaning: { en: 'power outage', vi: 'mất điện' }
      },
      {
        kana: 'こうずい',
        kanji: '洪水',
        romaji: 'kōzui',
        meaning: { en: 'flood', vi: 'lũ lụt' }
      },
      {
        kana: 'ひなん',
        kanji: '避難',
        romaji: 'hinan',
        meaning: { en: 'evacuation, taking refuge', vi: 'sự sơ tán, lánh nạn' }
      },
      {
        kana: 'えいきょう',
        kanji: '影響',
        romaji: 'eikyō',
        meaning: { en: 'influence, effect', vi: 'ảnh hưởng' }
      },
      {
        kana: 'すいどう',
        kanji: '水道',
        romaji: 'suidō',
        meaning: { en: 'water supply', vi: 'nước máy, đường nước' }
      },
      {
        kana: 'かいふく',
        kanji: '回復',
        romaji: 'kaifuku',
        meaning: { en: 'recovery, restoration', vi: 'sự hồi phục' }
      },
      {
        kana: 'ささえる',
        kanji: '支える',
        romaji: 'sasaeru',
        meaning: { en: 'to support, hold up', vi: 'nâng đỡ, hỗ trợ' }
      },
      {
        kana: 'しんこく',
        kanji: '深刻',
        romaji: 'shinkoku',
        meaning: { en: 'serious, grave', vi: 'nghiêm trọng' }
      },
      {
        kana: 'たいおう',
        kanji: '対応',
        romaji: 'taiō',
        meaning: { en: 'response, handling', vi: 'sự ứng phó, xử lý' }
      },
      {
        kana: 'ふえる',
        kanji: '増える',
        romaji: 'fueru',
        meaning: { en: 'to increase', vi: 'tăng lên' }
      }
    ],
    grammar: [
      {
        pattern: 'N／普通形 ＋ ばかりか',
        title: { en: 'Not only ~ but also (〜ばかりか)', vi: 'Không những ~ mà còn (〜ばかりか)' },
        explanation: {
          en: 'ばかりか adds a second, often more extreme element to the first. The added part is usually marked with も or さえ and frequently expresses something surprising or worse than expected.',
          vi: 'ばかりか bổ sung yếu tố thứ hai, thường mạnh hơn yếu tố đầu. Phần thêm vào thường đi với も hoặc さえ và hay diễn đạt điều bất ngờ hoặc tệ hơn dự kiến.'
        },
        examples: [
          {
            jp: '台風で停電したばかりか、水道まで止まってしまった。',
            romaji: 'Taifū de teiden shita bakari ka, suidō made tomatte shimatta.',
            meaning: {
              en: 'The typhoon not only caused a blackout but even cut off the water.',
              vi: 'Cơn bão không những gây mất điện mà còn làm mất luôn cả nước.'
            }
          },
          {
            jp: '彼は遅刻したばかりか、謝りもしなかった。',
            romaji: 'Kare wa chikoku shita bakari ka, ayamari mo shinakatta.',
            meaning: {
              en: 'He not only came late but did not even apologize.',
              vi: 'Anh ta không những đến muộn mà còn chẳng thèm xin lỗi.'
            }
          }
        ]
      },
      {
        pattern: 'N／普通形 ＋ どころか',
        title: { en: 'Far from ~ (〜どころか)', vi: 'Đừng nói ~, ngược lại (〜どころか)' },
        explanation: {
          en: 'どころか denies the first idea and presents a reality that goes in the opposite, often stronger direction: "far from ~, in fact ~".',
          vi: 'どころか phủ nhận ý đầu và đưa ra thực tế đi theo hướng ngược lại, thường mạnh hơn: "đừng nói là ~, thực ra còn ~".'
        },
        examples: [
          {
            jp: '雨はやむどころか、ますます強くなった。',
            romaji: 'Ame wa yamu dokoro ka, masumasu tsuyoku natta.',
            meaning: {
              en: 'Far from stopping, the rain only got heavier.',
              vi: 'Đừng nói là tạnh, mưa còn ngày càng to hơn.'
            }
          },
          {
            jp: '休むどころか、週末も働いている。',
            romaji: 'Yasumu dokoro ka, shūmatsu mo hataraite iru.',
            meaning: {
              en: 'Far from resting, I am working even on weekends.',
              vi: 'Đừng nói là nghỉ, cuối tuần tôi còn phải làm việc.'
            }
          }
        ]
      },
      {
        pattern: '普通形 ＋ 上(に)',
        title: { en: 'On top of ~ (〜上に)', vi: 'Hơn nữa, thêm vào đó (〜上に)' },
        explanation: {
          en: '上に adds a second point of the same polarity: a good thing on top of a good thing, or a bad one on top of a bad one. It simply stacks reasons or qualities.',
          vi: '上に bổ sung điểm thứ hai cùng tính chất: điều tốt thêm vào điều tốt, hoặc điều xấu thêm vào điều xấu. Mẫu chỉ đơn giản chồng các lý do hay đặc điểm.'
        },
        examples: [
          {
            jp: 'この道は狭い上に、暗くて危ない。',
            romaji: 'Kono michi wa semai ue ni, kurakute abunai.',
            meaning: {
              en: 'This road is narrow, and on top of that it is dark and dangerous.',
              vi: 'Con đường này đã hẹp, thêm vào đó còn tối và nguy hiểm.'
            }
          },
          {
            jp: 'この店は安い上に、味もいい。',
            romaji: 'Kono mise wa yasui ue ni, aji mo ii.',
            meaning: {
              en: 'This restaurant is cheap, and on top of that the food is good.',
              vi: 'Quán này vừa rẻ, thêm nữa lại còn ngon.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The night of the typhoon', vi: 'Đêm bão' },
        lines: [
          {
            jp: '昨夜の台風の被害は、思ったより深刻だった。',
            romaji: 'Sakuya no taifū no higai wa, omotta yori shinkoku datta.',
            meaning: {
              en: 'The damage from last night\u2019s typhoon was more serious than expected.',
              vi: 'Thiệt hại của cơn bão đêm qua nghiêm trọng hơn tôi nghĩ.'
            }
          },
          {
            jp: '停電したばかりか、近くの川の水まであふれそうになった。',
            romaji: 'Teiden shita bakari ka, chikaku no kawa no mizu made afuresō ni natta.',
            meaning: {
              en: 'Not only did the power go out, but the nearby river nearly overflowed too.',
              vi: 'Không những mất điện mà nước con sông gần đó còn suýt tràn bờ.'
            }
          },
          {
            jp: '状況は良くなるどころか、夜中にさらに悪くなった。',
            romaji: 'Jōkyō wa yoku naru dokoro ka, yonaka ni sara ni waruku natta.',
            meaning: {
              en: 'Far from improving, the situation got even worse at midnight.',
              vi: 'Đừng nói là khá lên, tình hình lúc nửa đêm còn tệ hơn.'
            }
          },
          {
            jp: '道は暗い上に水であふれ、避難はとても大変だった。',
            romaji: 'Michi wa kurai ue ni mizu de afure, hinan wa totemo taihen datta.',
            meaning: {
              en: 'The road was dark and flooded as well, so evacuating was very hard.',
              vi: 'Đường vừa tối lại còn ngập nước nên việc sơ tán rất vất vả.'
            }
          },
          {
            jp: '近所の人たちが助け合い、なんとか朝を迎えた。',
            romaji: 'Kinjo no hito-tachi ga tasukeai, nantoka asa o mukaeta.',
            meaning: {
              en: 'The neighbors helped one another and somehow made it to morning.',
              vi: 'Những người hàng xóm giúp đỡ nhau và cũng gắng gượng đến sáng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened besides the power outage?',
              vi: 'Ngoài mất điện còn xảy ra chuyện gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'The river nearly overflowed', vi: 'Con sông suýt tràn bờ' }
              },
              { id: 'b', label: { en: 'A fire broke out', vi: 'Xảy ra hỏa hoạn' } },
              { id: 'c', label: { en: 'The phones rang all night', vi: 'Điện thoại reo cả đêm' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How did the situation change at midnight?',
              vi: 'Tình hình thay đổi thế nào lúc nửa đêm?'
            },
            choices: [
              { id: 'a', label: { en: 'It got even worse', vi: 'Càng tệ hơn' } },
              { id: 'b', label: { en: 'It improved quickly', vi: 'Khá lên nhanh chóng' } },
              { id: 'c', label: { en: 'It stayed the same', vi: 'Giữ nguyên' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'Why was evacuating so hard?',
              vi: 'Vì sao việc sơ tán rất vất vả?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'The road was dark and flooded', vi: 'Đường vừa tối vừa ngập nước' }
              },
              { id: 'b', label: { en: 'There were no neighbors', vi: 'Không có hàng xóm' } },
              { id: 'c', label: { en: 'It was too hot', vi: 'Trời quá nóng' } }
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
      en: 'Not Only, in Formal Writing',
      vi: 'Không chỉ, trong văn viết trang trọng'
    },
    focus: {
      en: 'Add scope in formal or written Japanese with 〜のみならず and patterns that extend an effect beyond one area.',
      vi: 'Mở rộng phạm vi trong tiếng Nhật trang trọng hay văn viết với 〜のみならず và các mẫu lan tỏa ảnh hưởng ra ngoài một lĩnh vực.'
    },
    vocab: [
      {
        kana: 'けいざい',
        kanji: '経済',
        romaji: 'keizai',
        meaning: { en: 'economy', vi: 'kinh tế' }
      },
      {
        kana: 'せいど',
        kanji: '制度',
        romaji: 'seido',
        meaning: { en: 'system, institution', vi: 'chế độ, thể chế' }
      },
      {
        kana: 'せいふ',
        kanji: '政府',
        romaji: 'seifu',
        meaning: { en: 'government', vi: 'chính phủ' }
      },
      {
        kana: 'こくみん',
        kanji: '国民',
        romaji: 'kokumin',
        meaning: { en: 'the people, citizens', vi: 'quốc dân, người dân' }
      },
      {
        kana: 'かくだい',
        kanji: '拡大',
        romaji: 'kakudai',
        meaning: { en: 'expansion', vi: 'sự mở rộng' }
      },
      {
        kana: 'ぶんや',
        kanji: '分野',
        romaji: 'bun-ya',
        meaning: { en: 'field, area', vi: 'lĩnh vực' }
      },
      {
        kana: 'ぎじゅつ',
        kanji: '技術',
        romaji: 'gijutsu',
        meaning: { en: 'technology, skill', vi: 'kỹ thuật, công nghệ' }
      },
      {
        kana: 'かだい',
        kanji: '課題',
        romaji: 'kadai',
        meaning: { en: 'issue, task', vi: 'vấn đề, nhiệm vụ' }
      },
      {
        kana: 'こくない',
        kanji: '国内',
        romaji: 'kokunai',
        meaning: { en: 'domestic, within the country', vi: 'trong nước' }
      },
      {
        kana: 'かいがい',
        kanji: '海外',
        romaji: 'kaigai',
        meaning: { en: 'overseas, abroad', vi: 'nước ngoài, hải ngoại' }
      },
      {
        kana: 'そくしん',
        kanji: '促進',
        romaji: 'sokushin',
        meaning: { en: 'promotion, facilitation', vi: 'sự thúc đẩy' }
      },
      {
        kana: 'およぶ',
        kanji: '及ぶ',
        romaji: 'oyobu',
        meaning: { en: 'to reach, extend to', vi: 'lan tới, đạt tới' }
      }
    ],
    grammar: [
      {
        pattern: 'N／普通形 ＋ のみならず',
        title: {
          en: 'Not only ~ (formal) (〜のみならず)',
          vi: 'Không chỉ ~ (trang trọng) (〜のみならず)'
        },
        explanation: {
          en: 'のみならず is the written, formal equivalent of だけでなく. It states that something applies not only to one item but to a wider scope, and is common in news and academic writing.',
          vi: 'のみならず là dạng văn viết, trang trọng của だけでなく. Mẫu cho biết điều gì đó không chỉ áp dụng cho một đối tượng mà còn cho phạm vi rộng hơn, hay gặp trong báo chí và văn học thuật.'
        },
        examples: [
          {
            jp: 'この問題は国内のみならず、海外でも注目されている。',
            romaji: 'Kono mondai wa kokunai nomi narazu, kaigai demo chūmoku sarete iru.',
            meaning: {
              en: 'This issue is drawing attention not only domestically but abroad as well.',
              vi: 'Vấn đề này không chỉ được chú ý trong nước mà cả ở nước ngoài.'
            }
          },
          {
            jp: '彼は学者としてのみならず、政治家としても知られている。',
            romaji: 'Kare wa gakusha to shite nomi narazu, seijika to shite mo shirarete iru.',
            meaning: {
              en: 'He is known not only as a scholar but also as a politician.',
              vi: 'Ông ấy không chỉ được biết đến với tư cách học giả mà còn là chính trị gia.'
            }
          }
        ]
      },
      {
        pattern: 'N／普通形 ＋ にとどまらず',
        title: {
          en: 'Not stopping at ~ (〜にとどまらず)',
          vi: 'Không dừng lại ở ~ (〜にとどまらず)'
        },
        explanation: {
          en: 'にとどまらず emphasizes that an effect does not stay confined to one area but spreads further, often to an unexpected scale.',
          vi: 'にとどまらず nhấn mạnh rằng ảnh hưởng không bó hẹp trong một lĩnh vực mà lan rộng hơn, thường đến quy mô bất ngờ.'
        },
        examples: [
          {
            jp: '影響は経済にとどまらず、教育の分野にまで及んだ。',
            romaji: 'Eikyō wa keizai ni todomarazu, kyōiku no bun-ya ni made oyonda.',
            meaning: {
              en: 'The impact did not stop at the economy but reached even education.',
              vi: 'Ảnh hưởng không dừng ở kinh tế mà lan tới cả lĩnh vực giáo dục.'
            }
          },
          {
            jp: 'その技術は医療にとどまらず、農業にも応用されている。',
            romaji: 'Sono gijutsu wa iryō ni todomarazu, nōgyō ni mo ōyō sarete iru.',
            meaning: {
              en: 'That technology is applied not only to medicine but to agriculture too.',
              vi: 'Công nghệ đó không chỉ dùng trong y tế mà còn được ứng dụng vào nông nghiệp.'
            }
          }
        ]
      },
      {
        pattern: 'N／普通形 ＋ ばかりでなく',
        title: {
          en: 'Not just ~ but also (〜ばかりでなく)',
          vi: 'Không chỉ ~ mà còn (〜ばかりでなく)'
        },
        explanation: {
          en: 'ばかりでなく is a slightly more formal version of だけでなく, adding a second item that broadens the statement.',
          vi: 'ばかりでなく là dạng hơi trang trọng hơn của だけでなく, thêm một đối tượng thứ hai để mở rộng câu nói.'
        },
        examples: [
          {
            jp: '政府ばかりでなく、国民の協力も必要だ。',
            romaji: 'Seifu bakari de naku, kokumin no kyōryoku mo hitsuyō da.',
            meaning: {
              en: 'Not just the government, but the cooperation of citizens is needed too.',
              vi: 'Không chỉ chính phủ mà sự hợp tác của người dân cũng cần thiết.'
            }
          },
          {
            jp: '彼女は英語ばかりでなく、中国語も話せる。',
            romaji: 'Kanojo wa eigo bakari de naku, chūgokugo mo hanaseru.',
            meaning: {
              en: 'She can speak not only English but Chinese as well.',
              vi: 'Cô ấy không chỉ nói được tiếng Anh mà cả tiếng Trung.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A new technology spreads', vi: 'Một công nghệ mới lan rộng' },
        lines: [
          {
            jp: 'ある新しい技術が、国内のみならず海外でも高く評価されている。',
            romaji:
              'Aru atarashii gijutsu ga, kokunai nomi narazu kaigai demo takaku hyōka sarete iru.',
            meaning: {
              en: 'A certain new technology is highly rated not only at home but abroad too.',
              vi: 'Một công nghệ mới được đánh giá cao không chỉ trong nước mà cả ở nước ngoài.'
            }
          },
          {
            jp: 'その影響は産業にとどまらず、日常生活にまで及んでいる。',
            romaji: 'Sono eikyō wa sangyō ni todomarazu, nichijō seikatsu ni made oyonde iru.',
            meaning: {
              en: 'Its influence reaches not only industry but daily life as well.',
              vi: 'Ảnh hưởng của nó không dừng ở công nghiệp mà còn lan tới đời sống hằng ngày.'
            }
          },
          {
            jp: '政府ばかりでなく、多くの企業もこの分野に投資し始めた。',
            romaji: 'Seifu bakari de naku, ōku no kigyō mo kono bun-ya ni tōshi shihajimeta.',
            meaning: {
              en: 'Not just the government but many companies have begun investing in this field.',
              vi: 'Không chỉ chính phủ mà nhiều doanh nghiệp cũng bắt đầu đầu tư vào lĩnh vực này.'
            }
          },
          {
            jp: 'しかし、解決すべき課題はまだ多い。',
            romaji: 'Shikashi, kaiketsu subeki kadai wa mada ōi.',
            meaning: {
              en: 'However, there are still many issues to be solved.',
              vi: 'Tuy nhiên, vẫn còn nhiều vấn đề cần giải quyết.'
            }
          },
          {
            jp: '今後の発展には、国全体の協力が欠かせない。',
            romaji: 'Kongo no hatten ni wa, kuni zentai no kyōryoku ga kakasenai.',
            meaning: {
              en: 'Cooperation of the whole nation is essential for future development.',
              vi: 'Sự hợp tác của cả đất nước là không thể thiếu cho sự phát triển sau này.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Where is the new technology highly rated?',
              vi: 'Công nghệ mới được đánh giá cao ở đâu?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Both at home and abroad', vi: 'Cả trong nước và nước ngoài' }
              },
              { id: 'b', label: { en: 'Only overseas', vi: 'Chỉ ở nước ngoài' } },
              { id: 'c', label: { en: 'Only within companies', vi: 'Chỉ trong các công ty' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How far does the technology\u2019s influence reach?',
              vi: 'Ảnh hưởng của công nghệ lan tới đâu?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Beyond industry, into daily life',
                  vi: 'Ra ngoài công nghiệp, tới đời sống hằng ngày'
                }
              },
              { id: 'b', label: { en: 'Only into industry', vi: 'Chỉ trong công nghiệp' } },
              { id: 'c', label: { en: 'Nowhere yet', vi: 'Chưa tới đâu cả' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'Who has begun investing in the field?',
              vi: 'Ai đã bắt đầu đầu tư vào lĩnh vực này?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The government and many companies',
                  vi: 'Chính phủ và nhiều doanh nghiệp'
                }
              },
              {
                id: 'b',
                label: { en: 'Only foreign investors', vi: 'Chỉ các nhà đầu tư nước ngoài' }
              },
              { id: 'c', label: { en: 'No one', vi: 'Không ai cả' } }
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
      en: 'Needless to Say',
      vi: 'Khỏi phải nói'
    },
    focus: {
      en: 'Highlight an obvious case and add another with 〜はもとより and 〜はもちろん, plus a complementary "in addition" pattern.',
      vi: 'Nêu trường hợp hiển nhiên rồi bổ sung trường hợp khác với 〜はもとより và 〜はもちろん, kèm một mẫu "thêm vào đó".'
    },
    vocab: [
      {
        kana: 'きほん',
        kanji: '基本',
        romaji: 'kihon',
        meaning: { en: 'basics, fundamentals', vi: 'cơ bản, nền tảng' }
      },
      {
        kana: 'おうよう',
        kanji: '応用',
        romaji: 'ōyō',
        meaning: { en: 'application, advanced use', vi: 'sự ứng dụng, nâng cao' }
      },
      {
        kana: 'せっきゃく',
        kanji: '接客',
        romaji: 'sekkyaku',
        meaning: { en: 'customer service', vi: 'phục vụ khách hàng' }
      },
      {
        kana: 'ひょうばん',
        kanji: '評判',
        romaji: 'hyōban',
        meaning: { en: 'reputation', vi: 'tiếng tăm, danh tiếng' }
      },
      {
        kana: 'しなぞろえ',
        kanji: '品揃え',
        romaji: 'shinazoroe',
        meaning: { en: 'product selection, range of goods', vi: 'sự đa dạng hàng hóa' }
      },
      {
        kana: 'しんせん',
        kanji: '新鮮',
        romaji: 'shinsen',
        meaning: { en: 'fresh', vi: 'tươi, tươi mới' }
      },
      {
        kana: 'ていねい',
        kanji: '丁寧',
        romaji: 'teinei',
        meaning: { en: 'polite, careful', vi: 'lịch sự, chu đáo' }
      },
      {
        kana: 'のうりょく',
        kanji: '能力',
        romaji: 'nōryoku',
        meaning: { en: 'ability', vi: 'năng lực' }
      },
      {
        kana: 'じっせき',
        kanji: '実績',
        romaji: 'jisseki',
        meaning: { en: 'track record, results', vi: 'thành tích, kết quả thực tế' }
      },
      {
        kana: 'こころづかい',
        kanji: '心遣い',
        romaji: 'kokorozukai',
        meaning: { en: 'thoughtfulness, consideration', vi: 'sự quan tâm chu đáo' }
      },
      {
        kana: 'ひんしつ',
        kanji: '品質',
        romaji: 'hinshitsu',
        meaning: { en: 'quality', vi: 'chất lượng' }
      },
      {
        kana: 'たのしむ',
        kanji: '楽しむ',
        romaji: 'tanoshimu',
        meaning: { en: 'to enjoy', vi: 'tận hưởng, vui thích' }
      }
    ],
    grammar: [
      {
        pattern: 'N ＋ はもとより',
        title: {
          en: 'To say nothing of ~ (〜はもとより)',
          vi: 'Khỏi phải nói về ~ (〜はもとより)'
        },
        explanation: {
          en: 'はもとより presents the first item as obvious or a given, then adds a second that may be more surprising. It is somewhat formal and means "needless to say ~, and also ~".',
          vi: 'はもとより nêu đối tượng đầu như điều hiển nhiên, rồi thêm đối tượng thứ hai có thể bất ngờ hơn. Mẫu hơi trang trọng, nghĩa là "khỏi phải nói ~, mà cả ~".'
        },
        examples: [
          {
            jp: 'この店は値段はもとより、品質も評判がいい。',
            romaji: 'Kono mise wa nedan wa motoyori, hinshitsu mo hyōban ga ii.',
            meaning: {
              en: 'This shop has a good reputation for quality, to say nothing of its prices.',
              vi: 'Quán này khỏi phải nói về giá, ngay cả chất lượng cũng được tiếng tốt.'
            }
          },
          {
            jp: '彼は漢字はもとより、簡単なひらがなも書けない。',
            romaji: 'Kare wa kanji wa motoyori, kantan na hiragana mo kakenai.',
            meaning: {
              en: 'He cannot write even simple hiragana, let alone kanji.',
              vi: 'Đừng nói kanji, đến hiragana đơn giản anh ấy cũng không viết được.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ はもちろん',
        title: {
          en: 'Of course ~, and also (〜はもちろん)',
          vi: 'Tất nhiên là ~, và cả (〜はもちろん)'
        },
        explanation: {
          en: 'はもちろん is the everyday counterpart of はもとより, marking the first item as a matter of course and adding a second. It sounds natural in conversation.',
          vi: 'はもちろん là dạng thông dụng của はもとより, coi đối tượng đầu là điều đương nhiên rồi thêm đối tượng thứ hai. Mẫu nghe tự nhiên trong hội thoại.'
        },
        examples: [
          {
            jp: 'この映画は子供はもちろん、大人も楽しめる。',
            romaji: 'Kono eiga wa kodomo wa mochiron, otona mo tanoshimeru.',
            meaning: {
              en: 'This movie can be enjoyed by adults as well as children, of course.',
              vi: 'Bộ phim này tất nhiên trẻ em xem được, mà cả người lớn cũng thấy thích.'
            }
          },
          {
            jp: '週末はもちろん、平日も多くの客が来る。',
            romaji: 'Shūmatsu wa mochiron, heijitsu mo ōku no kyaku ga kuru.',
            meaning: {
              en: 'Many customers come on weekdays as well as on weekends, of course.',
              vi: 'Cuối tuần thì khỏi nói, ngày thường cũng có nhiều khách đến.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ に加えて',
        title: { en: 'In addition to ~ (〜に加えて)', vi: 'Thêm vào ~ (〜に加えて)' },
        explanation: {
          en: 'に加えて adds one more element to what already exists, similar to "in addition to". It is neutral and frequent in writing.',
          vi: 'に加えて bổ sung thêm một yếu tố vào những gì đã có, tương tự "thêm vào, ngoài ra". Mẫu trung tính và hay gặp trong văn viết.'
        },
        examples: [
          {
            jp: '丁寧な接客に加えて、品揃えも豊富だ。',
            romaji: 'Teinei na sekkyaku ni kuwaete, shinazoroe mo hōfu da.',
            meaning: {
              en: 'In addition to careful service, the selection of goods is rich too.',
              vi: 'Ngoài việc phục vụ chu đáo, hàng hóa ở đây cũng rất phong phú.'
            }
          },
          {
            jp: '実力に加えて、運も味方した。',
            romaji: 'Jitsuryoku ni kuwaete, un mo mikata shita.',
            meaning: {
              en: 'In addition to skill, luck was on his side too.',
              vi: 'Ngoài thực lực ra, may mắn cũng đứng về phía anh ấy.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A popular shop', vi: 'Một cửa hàng được ưa chuộng' },
        lines: [
          {
            jp: '駅前のあの店は、値段はもとより品質でも評判がいい。',
            romaji: 'Ekimae no ano mise wa, nedan wa motoyori hinshitsu demo hyōban ga ii.',
            meaning: {
              en: 'That shop in front of the station is famous for its quality, to say nothing of price.',
              vi: 'Cửa hàng trước ga đó khỏi phải nói về giá, chất lượng cũng được tiếng.'
            }
          },
          {
            jp: '野菜はもちろん、魚もいつも新鮮だ。',
            romaji: 'Yasai wa mochiron, sakana mo itsumo shinsen da.',
            meaning: {
              en: 'The vegetables, of course, and the fish too are always fresh.',
              vi: 'Rau thì khỏi nói, đến cá cũng lúc nào cũng tươi.'
            }
          },
          {
            jp: '丁寧な接客に加えて、店員の心遣いも気持ちがいい。',
            romaji: 'Teinei na sekkyaku ni kuwaete, ten-in no kokorozukai mo kimochi ga ii.',
            meaning: {
              en: 'In addition to careful service, the staff\u2019s thoughtfulness feels pleasant.',
              vi: 'Ngoài phục vụ chu đáo, sự quan tâm của nhân viên cũng khiến khách dễ chịu.'
            }
          },
          {
            jp: 'だから、週末はもちろん平日も客が絶えない。',
            romaji: 'Dakara, shūmatsu wa mochiron heijitsu mo kyaku ga taenai.',
            meaning: {
              en: 'So there is a steady stream of customers on weekdays as well as weekends.',
              vi: 'Vì vậy cuối tuần thì khỏi nói, ngày thường khách cũng không ngớt.'
            }
          },
          {
            jp: '私もこの店のファンの一人だ。',
            romaji: 'Watashi mo kono mise no fan no hitori da.',
            meaning: {
              en: 'I am one of the fans of this shop too.',
              vi: 'Tôi cũng là một trong những người hâm mộ cửa hàng này.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is the shop praised for?',
              vi: 'Cửa hàng được khen về điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Both price and quality', vi: 'Cả giá cả lẫn chất lượng' } },
              { id: 'b', label: { en: 'Only its location', vi: 'Chỉ vị trí' } },
              { id: 'c', label: { en: 'Only its size', vi: 'Chỉ kích thước' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is said about the fish?',
              vi: 'Cá được nói thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'It is always fresh', vi: 'Lúc nào cũng tươi' } },
              { id: 'b', label: { en: 'It is too expensive', vi: 'Quá đắt' } },
              { id: 'c', label: { en: 'It is rarely sold', vi: 'Hiếm khi bán' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'When do customers come to the shop?',
              vi: 'Khi nào khách đến cửa hàng?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'On weekdays as well as weekends', vi: 'Ngày thường lẫn cuối tuần' }
              },
              { id: 'b', label: { en: 'Only on weekends', vi: 'Chỉ cuối tuần' } },
              { id: 'c', label: { en: 'Only in the morning', vi: 'Chỉ buổi sáng' } }
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
      en: 'Not Limited To',
      vi: 'Không giới hạn ở'
    },
    focus: {
      en: 'Say that something applies broadly, not just to one case, with 〜に限らず and "regardless of" patterns.',
      vi: 'Nói rằng điều gì đó áp dụng rộng rãi, không chỉ một trường hợp, với 〜に限らず và các mẫu "bất kể".'
    },
    vocab: [
      {
        kana: 'きせつ',
        kanji: '季節',
        romaji: 'kisetsu',
        meaning: { en: 'season', vi: 'mùa' }
      },
      {
        kana: 'ねんれい',
        kanji: '年齢',
        romaji: 'nenrei',
        meaning: { en: 'age', vi: 'tuổi tác' }
      },
      {
        kana: 'せだい',
        kanji: '世代',
        romaji: 'sedai',
        meaning: { en: 'generation', vi: 'thế hệ' }
      },
      {
        kana: 'だんじょ',
        kanji: '男女',
        romaji: 'danjo',
        meaning: { en: 'men and women', vi: 'nam nữ' }
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
        kana: 'りよう',
        kanji: '利用',
        romaji: 'riyō',
        meaning: { en: 'use, utilization', vi: 'sự sử dụng' }
      },
      {
        kana: 'たいしょう',
        kanji: '対象',
        romaji: 'taishō',
        meaning: { en: 'target, subject', vi: 'đối tượng' }
      },
      {
        kana: 'はばひろい',
        kanji: '幅広い',
        romaji: 'habahiroi',
        meaning: { en: 'wide-ranging, broad', vi: 'rộng rãi, đa dạng' }
      },
      {
        kana: 'てんこう',
        kanji: '天候',
        romaji: 'tenkō',
        meaning: { en: 'weather (conditions)', vi: 'thời tiết' }
      },
      {
        kana: 'もとめる',
        kanji: '求める',
        romaji: 'motomeru',
        meaning: { en: 'to seek, request', vi: 'tìm kiếm, yêu cầu' }
      },
      {
        kana: 'さんか',
        kanji: '参加',
        romaji: 'sanka',
        meaning: { en: 'participation', vi: 'sự tham gia' }
      }
    ],
    grammar: [
      {
        pattern: 'N ＋ に限らず',
        title: { en: 'Not limited to ~ (〜に限らず)', vi: 'Không chỉ riêng ~ (〜に限らず)' },
        explanation: {
          en: 'に限らず says that something is true not only for the named case but for a wider range. It is often followed by 〜も or words like 幅広い to stress the breadth.',
          vi: 'に限らず cho biết điều gì đó không chỉ đúng với trường hợp được nêu mà cho phạm vi rộng hơn. Thường đi với 〜も hay từ như 幅広い để nhấn mạnh độ rộng.'
        },
        examples: [
          {
            jp: 'この商品は若者に限らず、幅広い世代に人気がある。',
            romaji: 'Kono shōhin wa wakamono ni kagirazu, habahiroi sedai ni ninki ga aru.',
            meaning: {
              en: 'This product is popular not only with young people but across a wide range of generations.',
              vi: 'Sản phẩm này không chỉ được giới trẻ ưa chuộng mà cả nhiều thế hệ.'
            }
          },
          {
            jp: 'この店は週末に限らず、平日も混んでいる。',
            romaji: 'Kono mise wa shūmatsu ni kagirazu, heijitsu mo konde iru.',
            meaning: {
              en: 'This shop is crowded not only on weekends but on weekdays too.',
              vi: 'Cửa hàng này không chỉ cuối tuần mà ngày thường cũng đông.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ を問わず',
        title: { en: 'Regardless of ~ (〜を問わず)', vi: 'Không phân biệt ~ (〜を問わず)' },
        explanation: {
          en: 'を問わず means a condition makes no difference: the statement holds regardless of age, gender, season, and so on. It is common in announcements and ads.',
          vi: 'を問わず nghĩa là một điều kiện nào đó không quan trọng: câu vẫn đúng bất kể tuổi tác, giới tính, mùa... Mẫu hay gặp trong thông báo và quảng cáo.'
        },
        examples: [
          {
            jp: 'このイベントは年齢を問わず、誰でも参加できる。',
            romaji: 'Kono ibento wa nenrei o towazu, dare demo sanka dekiru.',
            meaning: {
              en: 'Anyone can join this event regardless of age.',
              vi: 'Sự kiện này không phân biệt tuổi tác, ai cũng có thể tham gia.'
            }
          },
          {
            jp: '男女を問わず、多くの人がこの仕事に応募した。',
            romaji: 'Danjo o towazu, ōku no hito ga kono shigoto ni ōbo shita.',
            meaning: {
              en: 'Many people applied for this job regardless of gender.',
              vi: 'Không phân biệt nam nữ, nhiều người đã ứng tuyển công việc này.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ にかかわらず',
        title: { en: 'Irrespective of ~ (〜にかかわらず)', vi: 'Bất kể ~ (〜にかかわらず)' },
        explanation: {
          en: 'にかかわらず states that the result is unaffected by a varying condition, often a weather, success/failure, or quantity contrast.',
          vi: 'にかかわらず cho biết kết quả không bị ảnh hưởng bởi một điều kiện thay đổi, thường là sự đối lập về thời tiết, thành/bại hay số lượng.'
        },
        examples: [
          {
            jp: '天候にかかわらず、試合は予定どおり行われる。',
            romaji: 'Tenkō ni kakawarazu, shiai wa yotei dōri okonawareru.',
            meaning: {
              en: 'The match will be held as scheduled regardless of the weather.',
              vi: 'Bất kể thời tiết thế nào, trận đấu vẫn diễn ra đúng kế hoạch.'
            }
          },
          {
            jp: '経験のあるなしにかかわらず、応募できます。',
            romaji: 'Keiken no aru nashi ni kakawarazu, ōbo dekimasu.',
            meaning: {
              en: 'You can apply regardless of whether you have experience.',
              vi: 'Bất kể có kinh nghiệm hay không, bạn đều có thể ứng tuyển.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'An event for everyone', vi: 'Một sự kiện cho tất cả mọi người' },
        lines: [
          {
            jp: '市は来月、誰でも楽しめる音楽イベントを開く。',
            romaji: 'Shi wa raigetsu, dare demo tanoshimeru ongaku ibento o hiraku.',
            meaning: {
              en: 'Next month the city will hold a music event that anyone can enjoy.',
              vi: 'Tháng sau thành phố sẽ tổ chức một sự kiện âm nhạc mà ai cũng có thể tận hưởng.'
            }
          },
          {
            jp: 'このイベントは年齢を問わず、無料で参加できる。',
            romaji: 'Kono ibento wa nenrei o towazu, muryō de sanka dekiru.',
            meaning: {
              en: 'You can take part for free regardless of age.',
              vi: 'Sự kiện này không phân biệt tuổi tác, có thể tham gia miễn phí.'
            }
          },
          {
            jp: '若者に限らず、お年寄りにも楽しんでほしいそうだ。',
            romaji: 'Wakamono ni kagirazu, o-toshiyori ni mo tanoshinde hoshii sō da.',
            meaning: {
              en: 'They say they want not only young people but the elderly to enjoy it too.',
              vi: 'Nghe nói họ mong không chỉ giới trẻ mà cả người cao tuổi cũng thấy vui.'
            }
          },
          {
            jp: '天候にかかわらず、会場は屋内なので安心だ。',
            romaji: 'Tenkō ni kakawarazu, kaijō wa okunai na node anshin da.',
            meaning: {
              en: 'Regardless of the weather, the venue is indoors, so there is no worry.',
              vi: 'Bất kể thời tiết, địa điểm ở trong nhà nên có thể yên tâm.'
            }
          },
          {
            jp: '幅広い世代が集まる、にぎやかな一日になりそうだ。',
            romaji: 'Habahiroi sedai ga atsumaru, nigiyaka na ichinichi ni narisō da.',
            meaning: {
              en: 'It looks set to be a lively day with a wide range of generations gathering.',
              vi: 'Có vẻ sẽ là một ngày náo nhiệt với nhiều thế hệ cùng tụ họp.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Who can take part in the event?',
              vi: 'Ai có thể tham gia sự kiện?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Anyone, regardless of age', vi: 'Bất kỳ ai, không phân biệt tuổi' }
              },
              { id: 'b', label: { en: 'Only young people', vi: 'Chỉ người trẻ' } },
              { id: 'c', label: { en: 'Only city staff', vi: 'Chỉ nhân viên thành phố' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why is the weather not a concern?',
              vi: 'Vì sao không phải lo về thời tiết?'
            },
            choices: [
              { id: 'a', label: { en: 'The venue is indoors', vi: 'Địa điểm ở trong nhà' } },
              { id: 'b', label: { en: 'It never rains there', vi: 'Nơi đó không bao giờ mưa' } },
              {
                id: 'c',
                label: { en: 'The event is cancelled if it rains', vi: 'Trời mưa thì hủy' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'Who do the organizers hope will enjoy it?',
              vi: 'Ban tổ chức mong ai sẽ thấy vui?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The elderly as well as the young',
                  vi: 'Cả người cao tuổi lẫn người trẻ'
                }
              },
              { id: 'b', label: { en: 'Only musicians', vi: 'Chỉ nhạc công' } },
              { id: 'c', label: { en: 'Only families', vi: 'Chỉ các gia đình' } }
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
      en: 'Cannot Help But Feel',
      vi: 'Không thể không cảm thấy'
    },
    focus: {
      en: 'Express irresistible emotions and unavoidable acts with 〜ずにはいられない and related "cannot help" patterns.',
      vi: 'Diễn đạt cảm xúc không kìm nén được và hành động bất đắc dĩ với 〜ずにはいられない và các mẫu "không thể không".'
    },
    vocab: [
      {
        kana: 'かんどう',
        kanji: '感動',
        romaji: 'kandō',
        meaning: { en: 'being deeply moved', vi: 'sự xúc động' }
      },
      {
        kana: 'なみだ',
        kanji: '涙',
        romaji: 'namida',
        meaning: { en: 'tears', vi: 'nước mắt' }
      },
      {
        kana: 'どうじょう',
        kanji: '同情',
        romaji: 'dōjō',
        meaning: { en: 'sympathy', vi: 'sự đồng cảm, thương cảm' }
      },
      {
        kana: 'きょうかん',
        kanji: '共感',
        romaji: 'kyōkan',
        meaning: { en: 'empathy, shared feeling', vi: 'sự đồng cảm' }
      },
      {
        kana: 'こうふん',
        kanji: '興奮',
        romaji: 'kōfun',
        meaning: { en: 'excitement', vi: 'sự phấn khích' }
      },
      {
        kana: 'がまん',
        kanji: '我慢',
        romaji: 'gaman',
        meaning: { en: 'patience, endurance', vi: 'sự nhẫn nhịn, chịu đựng' }
      },
      {
        kana: 'おもわず',
        kanji: '思わず',
        romaji: 'omowazu',
        meaning: { en: 'unintentionally, in spite of oneself', vi: 'bất giác, không chủ ý' }
      },
      {
        kana: 'おどろく',
        kanji: '驚く',
        romaji: 'odoroku',
        meaning: { en: 'to be surprised', vi: 'ngạc nhiên' }
      },
      {
        kana: 'わらう',
        kanji: '笑う',
        romaji: 'warau',
        meaning: { en: 'to laugh, smile', vi: 'cười' }
      },
      {
        kana: 'なかみ',
        kanji: '中身',
        romaji: 'nakami',
        meaning: { en: 'content, substance', vi: 'nội dung, bên trong' }
      },
      {
        kana: 'ちゅうし',
        kanji: '中止',
        romaji: 'chūshi',
        meaning: { en: 'cancellation, calling off', vi: 'sự hủy bỏ, đình chỉ' }
      },
      {
        kana: 'きになる',
        kanji: '気になる',
        romaji: 'ki ni naru',
        meaning: { en: 'to be on one\u2019s mind, to worry about', vi: 'bận tâm, để ý' }
      }
    ],
    grammar: [
      {
        pattern: 'V-ない ＋ ではいられない／V-ず ＋ にはいられない',
        title: {
          en: 'Cannot help but ~ (〜ずにはいられない)',
          vi: 'Không thể không ~ (〜ずにはいられない)'
        },
        explanation: {
          en: 'Attach ずにはいられない to a verb stem (する becomes せずに) to say a feeling or action is impossible to hold back. ないではいられない is the more colloquial equivalent.',
          vi: 'Gắn ずにはいられない vào thân động từ (する thành せずに) để nói một cảm xúc hay hành động không thể kìm lại được. ないではいられない là dạng khẩu ngữ tương đương.'
        },
        examples: [
          {
            jp: 'あの映画を見ると、毎回泣かずにはいられない。',
            romaji: 'Ano eiga o miru to, maikai nakazu ni wa irarenai.',
            meaning: {
              en: 'Every time I watch that movie, I cannot help but cry.',
              vi: 'Cứ xem bộ phim đó là lần nào tôi cũng không kìm được nước mắt.'
            }
          },
          {
            jp: '彼の話を聞いて、同情せずにはいられなかった。',
            romaji: 'Kare no hanashi o kiite, dōjō sezu ni wa irarenakatta.',
            meaning: {
              en: 'Hearing his story, I could not help feeling sympathy.',
              vi: 'Nghe câu chuyện của anh ấy, tôi không thể không thấy thương cảm.'
            }
          }
        ]
      },
      {
        pattern: 'V-ない ＋ ざるを得ない',
        title: {
          en: 'Have no choice but to ~ (〜ざるを得ない)',
          vi: 'Buộc phải ~ (〜ざるを得ない)'
        },
        explanation: {
          en: 'ざるを得ない attaches to the plain negative stem (する becomes せざる) and means there is no option but to do something, usually reluctantly.',
          vi: 'ざるを得ない gắn vào thân phủ định ngắn (する thành せざる) và nghĩa là không còn lựa chọn nào khác ngoài việc làm điều đó, thường là miễn cưỡng.'
        },
        examples: [
          {
            jp: '雨がひどいので、試合を中止せざるを得ない。',
            romaji: 'Ame ga hidoi node, shiai o chūshi sezaru o enai.',
            meaning: {
              en: 'Since the rain is severe, we have no choice but to call off the match.',
              vi: 'Mưa quá to nên buộc phải hủy trận đấu.'
            }
          },
          {
            jp: '証拠がある以上、認めざるを得ない。',
            romaji: 'Shōko ga aru ijō, mitomezaru o enai.',
            meaning: {
              en: 'Since there is evidence, I have no choice but to admit it.',
              vi: 'Đã có bằng chứng thì tôi buộc phải thừa nhận.'
            }
          }
        ]
      },
      {
        pattern: 'V-て／い-A-くて ＋ たまらない',
        title: {
          en: 'Unbearably ~ (〜てたまらない)',
          vi: '~ đến mức không chịu nổi (〜てたまらない)'
        },
        explanation: {
          en: 'てたまらない expresses that a feeling or sensation is so strong it is unbearable. It pairs with emotions, desires, and physical states.',
          vi: 'てたまらない diễn đạt một cảm giác hay cảm xúc mạnh đến mức không chịu nổi. Mẫu đi với cảm xúc, ham muốn và trạng thái cơ thể.'
        },
        examples: [
          {
            jp: '結果が気になってたまらない。',
            romaji: 'Kekka ga ki ni natte tamaranai.',
            meaning: {
              en: 'I cannot stop worrying about the result.',
              vi: 'Tôi bận tâm về kết quả đến mức không chịu nổi.'
            }
          },
          {
            jp: 'この箱の中身が知りたくてたまらない。',
            romaji: 'Kono hako no nakami ga shiritakute tamaranai.',
            meaning: {
              en: 'I am dying to know what is inside this box.',
              vi: 'Tôi tò mò muốn biết bên trong cái hộp này đến phát điên.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A moving film', vi: 'Một bộ phim cảm động' },
        lines: [
          {
            jp: '昨日、友達に勧められた映画を見に行った。',
            romaji: 'Kinō, tomodachi ni susumerareta eiga o mi ni itta.',
            meaning: {
              en: 'Yesterday I went to see a film a friend had recommended.',
              vi: 'Hôm qua tôi đi xem bộ phim mà bạn giới thiệu.'
            }
          },
          {
            jp: '主人公の苦労を見て、共感せずにはいられなかった。',
            romaji: 'Shujinkō no kurō o mite, kyōkan sezu ni wa irarenakatta.',
            meaning: {
              en: 'Watching the hero\u2019s hardships, I could not help but empathize.',
              vi: 'Nhìn nỗi vất vả của nhân vật chính, tôi không thể không đồng cảm.'
            }
          },
          {
            jp: '最後の場面では、涙を流さざるを得なかった。',
            romaji: 'Saigo no bamen de wa, namida o nagasazaru o enakatta.',
            meaning: {
              en: 'In the final scene, I had no choice but to shed tears.',
              vi: 'Đến cảnh cuối, tôi buộc phải rơi nước mắt.'
            }
          },
          {
            jp: '見終わったあとも、その余韻が心に残ってたまらなかった。',
            romaji: 'Miowatta ato mo, sono yoin ga kokoro ni nokotte tamaranakatta.',
            meaning: {
              en: 'Even after it ended, the lingering feeling stayed in my heart unbearably.',
              vi: 'Ngay cả khi xem xong, dư âm ấy còn đọng lại trong lòng đến khó tả.'
            }
          },
          {
            jp: '誰かにこの感動を話さずにはいられない気分だ。',
            romaji: 'Dareka ni kono kandō o hanasazu ni wa irarenai kibun da.',
            meaning: {
              en: 'I feel I cannot help but tell someone about this emotion.',
              vi: 'Tôi có cảm giác không thể không kể cho ai đó về sự xúc động này.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the writer react to the hero\u2019s hardships?',
              vi: 'Người viết phản ứng thế nào trước nỗi vất vả của nhân vật chính?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Could not help empathizing', vi: 'Không thể không đồng cảm' }
              },
              { id: 'b', label: { en: 'Felt nothing', vi: 'Không cảm thấy gì' } },
              { id: 'c', label: { en: 'Got bored', vi: 'Thấy chán' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened in the final scene?',
              vi: 'Điều gì xảy ra ở cảnh cuối?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The writer could not help crying',
                  vi: 'Người viết buộc phải rơi nước mắt'
                }
              },
              { id: 'b', label: { en: 'The writer fell asleep', vi: 'Người viết ngủ quên' } },
              { id: 'c', label: { en: 'The writer left early', vi: 'Người viết về sớm' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'How does the writer feel after the film?',
              vi: 'Người viết cảm thấy thế nào sau phim?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Eager to tell someone about it', vi: 'Muốn kể cho ai đó nghe' }
              },
              { id: 'b', label: { en: 'Wants to forget it', vi: 'Muốn quên đi' } },
              { id: 'c', label: { en: 'Regrets watching it', vi: 'Hối hận vì đã xem' } }
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
      en: 'Left As It Is, and Ever Since',
      vi: 'Cứ để nguyên, và kể từ đó'
    },
    focus: {
      en: 'Describe states left untouched with 〜っぱなし and a single continuing action with 〜きり, plus the related 〜たまま.',
      vi: 'Miêu tả trạng thái bị bỏ mặc với 〜っぱなし và một hành động duy nhất kéo dài với 〜きり, kèm mẫu liên quan 〜たまま.'
    },
    vocab: [
      {
        kana: 'でんき',
        kanji: '電気',
        romaji: 'denki',
        meaning: { en: 'light, electricity', vi: 'đèn, điện' }
      },
      {
        kana: 'つける',
        kanji: '付ける',
        romaji: 'tsukeru',
        meaning: { en: 'to turn on, switch on', vi: 'bật, mở' }
      },
      {
        kana: 'けす',
        kanji: '消す',
        romaji: 'kesu',
        meaning: { en: 'to turn off, erase', vi: 'tắt, xóa' }
      },
      {
        kana: 'まど',
        kanji: '窓',
        romaji: 'mado',
        meaning: { en: 'window', vi: 'cửa sổ' }
      },
      {
        kana: 'ちらかす',
        kanji: '散らかす',
        romaji: 'chirakasu',
        meaning: { en: 'to scatter, make a mess', vi: 'làm bừa bộn' }
      },
      {
        kana: 'かたづける',
        kanji: '片付ける',
        romaji: 'katazukeru',
        meaning: { en: 'to tidy up, put away', vi: 'dọn dẹp' }
      },
      {
        kana: 'せんたくもの',
        kanji: '洗濯物',
        romaji: 'sentakumono',
        meaning: { en: 'laundry, washing', vi: 'đồ giặt' }
      },
      {
        kana: 'ほうち',
        kanji: '放置',
        romaji: 'hōchi',
        meaning: { en: 'leaving unattended, neglect', vi: 'sự bỏ mặc, để mặc' }
      },
      {
        kana: 'くせ',
        kanji: '癖',
        romaji: 'kuse',
        meaning: { en: 'habit, tendency', vi: 'thói quen, tật' }
      },
      {
        kana: 'れんらく',
        kanji: '連絡',
        romaji: 'renraku',
        meaning: { en: 'contact, getting in touch', vi: 'sự liên lạc' }
      },
      {
        kana: 'たちっぱなし',
        kanji: '立ちっぱなし',
        romaji: 'tachippanashi',
        meaning: { en: 'standing the whole time', vi: 'đứng suốt' }
      },
      {
        kana: 'つかれる',
        kanji: '疲れる',
        romaji: 'tsukareru',
        meaning: { en: 'to get tired', vi: 'mệt' }
      }
    ],
    grammar: [
      {
        pattern: 'V-ます ＋ っぱなし',
        title: { en: 'Leaving ~ on / undone (〜っぱなし)', vi: 'Để nguyên ~ (〜っぱなし)' },
        explanation: {
          en: 'Drop ます and add っぱなし to say an action is left in its result state, usually carelessly: a light left on, a thing left lying around. It often carries a tone of complaint.',
          vi: 'Bỏ ます và thêm っぱなし để nói một hành động bị để nguyên ở trạng thái kết quả, thường là cẩu thả: đèn để bật, đồ để bừa. Mẫu thường mang sắc thái phàn nàn.'
        },
        examples: [
          {
            jp: '電気をつけっぱなしで寝てしまった。',
            romaji: 'Denki o tsukeppanashi de nete shimatta.',
            meaning: {
              en: 'I fell asleep with the light left on.',
              vi: 'Tôi đã ngủ quên mà để đèn bật suốt.'
            }
          },
          {
            jp: '一日中立ちっぱなしで、足が疲れた。',
            romaji: 'Ichinichi-jū tachippanashi de, ashi ga tsukareta.',
            meaning: {
              en: 'I was standing all day long, so my legs got tired.',
              vi: 'Đứng suốt cả ngày nên chân tôi mỏi nhừ.'
            }
          }
        ]
      },
      {
        pattern: 'V-た ＋ きり',
        title: { en: 'Only once, ever since (〜きり)', vi: 'Chỉ một lần, kể từ đó (〜きり)' },
        explanation: {
          en: 'V-た + きり marks an action that happened once and then the expected follow-up never came. It often means "ever since ~, ... not".',
          vi: 'V-た + きり đánh dấu một hành động xảy ra một lần rồi diễn biến tiếp theo đáng lẽ phải có lại không đến. Thường nghĩa là "kể từ khi ~ thì không ...".'
        },
        examples: [
          {
            jp: '彼とは去年会ったきり、連絡がない。',
            romaji: 'Kare to wa kyonen atta kiri, renraku ga nai.',
            meaning: {
              en: 'I have had no contact with him ever since we met last year.',
              vi: 'Kể từ lần gặp năm ngoái đến giờ, tôi không liên lạc gì với anh ấy.'
            }
          },
          {
            jp: '弟は朝出かけたきり、まだ帰ってこない。',
            romaji: 'Otōto wa asa dekaketa kiri, mada kaette konai.',
            meaning: {
              en: 'My brother went out in the morning and still has not come back.',
              vi: 'Em trai tôi đi từ sáng đến giờ vẫn chưa về.'
            }
          }
        ]
      },
      {
        pattern: 'V-た／N の ＋ まま',
        title: { en: 'Just as it is (〜たまま)', vi: 'Cứ để nguyên (〜たまま)' },
        explanation: {
          en: 'まま expresses that a state continues unchanged while another action takes place: doing something while leaving the first situation as it was.',
          vi: 'まま diễn đạt một trạng thái tiếp diễn không đổi trong khi một hành động khác xảy ra: làm việc gì đó mà vẫn để nguyên tình trạng ban đầu.'
        },
        examples: [
          {
            jp: '窓を開けたまま出かけてしまった。',
            romaji: 'Mado o aketa mama dekakete shimatta.',
            meaning: {
              en: 'I went out leaving the window open.',
              vi: 'Tôi đi ra ngoài mà để nguyên cửa sổ mở.'
            }
          },
          {
            jp: '靴を履いたまま部屋に入らないでください。',
            romaji: 'Kutsu o haita mama heya ni hairanaide kudasai.',
            meaning: {
              en: 'Please do not enter the room with your shoes on.',
              vi: 'Xin đừng đi nguyên giày vào phòng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A messy roommate', vi: 'Người ở chung bừa bộn' },
        lines: [
          {
            jp: 'ルームメイトには困った癖がある。',
            romaji: 'Rūmumeito ni wa komatta kuse ga aru.',
            meaning: {
              en: 'My roommate has a troublesome habit.',
              vi: 'Người ở chung phòng với tôi có một thói quen phiền phức.'
            }
          },
          {
            jp: '電気をつけっぱなしにして、出かけることが多い。',
            romaji: 'Denki o tsukeppanashi ni shite, dekakeru koto ga ōi.',
            meaning: {
              en: 'He often goes out leaving the lights on.',
              vi: 'Cậu ấy hay để đèn bật suốt rồi đi ra ngoài.'
            }
          },
          {
            jp: '昨日も窓を開けたまま、買い物に行ってしまった。',
            romaji: 'Kinō mo mado o aketa mama, kaimono ni itte shimatta.',
            meaning: {
              en: 'Yesterday, too, he went shopping while leaving the window open.',
              vi: 'Hôm qua cũng vậy, cậu ấy để nguyên cửa sổ mở rồi đi mua sắm.'
            }
          },
          {
            jp: '洗濯物も干したきり、何日も取り込まない。',
            romaji: 'Sentakumono mo hoshita kiri, nannichi mo torikomanai.',
            meaning: {
              en: 'He hangs the laundry out and then does not bring it in for days.',
              vi: 'Đồ giặt cũng phơi rồi để đó, mấy ngày không thu vào.'
            }
          },
          {
            jp: 'いつか一度、ちゃんと話さずにはいられないと思っている。',
            romaji: 'Itsuka ichido, chanto hanasazu ni wa irarenai to omotte iru.',
            meaning: {
              en: 'I feel I cannot help but talk it over with him properly someday.',
              vi: 'Tôi nghĩ thế nào cũng phải nói chuyện đàng hoàng với cậu ấy một lần.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the roommate often leave on?',
              vi: 'Người ở chung hay để bật cái gì?'
            },
            choices: [
              { id: 'a', label: { en: 'The lights', vi: 'Đèn' } },
              { id: 'b', label: { en: 'The television', vi: 'Tivi' } },
              { id: 'c', label: { en: 'The stove', vi: 'Bếp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened with the laundry?',
              vi: 'Chuyện gì xảy ra với đồ giặt?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'It was hung out and not brought in for days',
                  vi: 'Phơi rồi mấy ngày không thu vào'
                }
              },
              { id: 'b', label: { en: 'It was washed twice', vi: 'Bị giặt hai lần' } },
              { id: 'c', label: { en: 'It was lost', vi: 'Bị mất' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What does the writer feel they must do?',
              vi: 'Người viết cảm thấy phải làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Talk it over with the roommate',
                  vi: 'Nói chuyện đàng hoàng với người ở chung'
                }
              },
              { id: 'b', label: { en: 'Move out immediately', vi: 'Dọn đi ngay' } },
              { id: 'c', label: { en: 'Ignore it forever', vi: 'Mãi mãi làm ngơ' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
