import type { Lesson } from '../types.ts';

export const n1LessonsC: Lesson[] = [
  {
    id: 'lesson-17',
    number: 17,
    title: {
      en: 'With the Intention To: 〜べく',
      vi: 'Với mục đích: 〜べく'
    },
    focus: {
      en: 'State a formal, written purpose with 〜べく, and use the related 〜べきだ, 〜べからず, and 〜べくして.',
      vi: 'Nêu mục đích trang trọng trong văn viết với 〜べく, cùng các mẫu liên quan 〜べきだ, 〜べからず và 〜べくして.'
    },
    vocab: [
      {
        kana: 'たっせい',
        kanji: '達成',
        romaji: 'tassei',
        meaning: { en: 'achievement, attainment', vi: 'sự đạt được, hoàn thành' }
      },
      {
        kana: 'もくひょう',
        kanji: '目標',
        romaji: 'mokuhyō',
        meaning: { en: 'goal, target', vi: 'mục tiêu' }
      },
      {
        kana: 'かいかく',
        kanji: '改革',
        romaji: 'kaikaku',
        meaning: { en: 'reform', vi: 'cải cách' }
      },
      {
        kana: 'こうりつ',
        kanji: '効率',
        romaji: 'kōritsu',
        meaning: { en: 'efficiency', vi: 'hiệu suất' }
      },
      {
        kana: 'けいえいしゃ',
        kanji: '経営者',
        romaji: 'keieisha',
        meaning: { en: 'manager, executive', vi: 'nhà điều hành, người quản lý' }
      },
      {
        kana: 'せんりゃく',
        kanji: '戦略',
        romaji: 'senryaku',
        meaning: { en: 'strategy', vi: 'chiến lược' }
      },
      {
        kana: 'ちゃくしゅ',
        kanji: '着手',
        romaji: 'chakushu',
        meaning: { en: 'starting, setting about', vi: 'bắt tay vào' }
      },
      {
        kana: 'うりあげ',
        kanji: '売上',
        romaji: 'uriage',
        meaning: { en: 'sales, turnover', vi: 'doanh số' }
      },
      {
        kana: 'のばす',
        kanji: '伸ばす',
        romaji: 'nobasu',
        meaning: { en: 'to extend, increase', vi: 'mở rộng, tăng' }
      },
      {
        kana: 'ぎょうせき',
        kanji: '業績',
        romaji: 'gyōseki',
        meaning: { en: 'business results, performance', vi: 'thành tích kinh doanh' }
      },
      {
        kana: 'しょしん',
        kanji: '初心',
        romaji: 'shoshin',
        meaning: { en: 'original resolve, first intention', vi: 'tâm nguyện ban đầu' }
      },
      {
        kana: 'ちゃくじつ',
        kanji: '着実',
        romaji: 'chakujitsu',
        meaning: { en: 'steady, reliable', vi: 'vững chắc, chắc chắn' }
      }
    ],
    grammar: [
      {
        pattern: 'V(辞書形)＋べく',
        title: {
          en: 'In order to / with the intention to (〜べく)',
          vi: 'Để / với mục đích (〜べく)'
        },
        explanation: {
          en: 'A formal, written expression of purpose. Attach べく to a verb\u2019s dictionary form (する becomes すべく). The main clause states the action taken to achieve that aim.',
          vi: 'Cách diễn đạt mục đích trang trọng, dùng trong văn viết. Gắn べく vào thể từ điển của động từ (する thành すべく). Vế chính nêu hành động được thực hiện để đạt mục đích đó.'
        },
        examples: [
          {
            jp: '売上を伸ばすべく、新たな戦略に着手した。',
            romaji: 'Uriage o nobasu beku, arata na senryaku ni chakushu shita.',
            meaning: {
              en: 'In order to boost sales, we set about a new strategy.',
              vi: 'Để tăng doanh số, chúng tôi đã bắt tay vào một chiến lược mới.'
            }
          },
          {
            jp: '目標を達成すべく、社員一同が全力を尽くした。',
            romaji: 'Mokuhyō o tassei subeku, shain ichidō ga zenryoku o tsukushita.',
            meaning: {
              en: 'In order to achieve the goal, all the employees did their utmost.',
              vi: 'Để đạt được mục tiêu, toàn thể nhân viên đã dốc hết sức.'
            }
          }
        ]
      },
      {
        pattern: 'V(辞書形)＋べきだ',
        title: { en: 'Should / ought to (〜べきだ)', vi: 'Nên / phải (〜べきだ)' },
        explanation: {
          en: 'Expresses what is the right or expected thing to do. する is usually すべき. The negative is 〜べきではない.',
          vi: 'Diễn đạt điều đúng đắn hoặc nên làm. する thường là すべき. Phủ định là 〜べきではない.'
        },
        examples: [
          {
            jp: '経営者は社員の意見に耳を傾けるべきだ。',
            romaji: 'Keieisha wa shain no iken ni mimi o katamukeru beki da.',
            meaning: {
              en: "Executives should listen to their employees' opinions.",
              vi: 'Nhà điều hành nên lắng nghe ý kiến của nhân viên.'
            }
          },
          {
            jp: '感情だけで重大な決定を下すべきではない。',
            romaji: 'Kanjō dake de jūdai na kettei o kudasu beki de wa nai.',
            meaning: {
              en: 'You should not make important decisions on emotion alone.',
              vi: 'Không nên đưa ra quyết định quan trọng chỉ dựa trên cảm xúc.'
            }
          }
        ]
      },
      {
        pattern: 'V(辞書形)＋べからず',
        title: {
          en: 'Must not (formal prohibition) (〜べからず)',
          vi: 'Cấm / không được (〜べからず)'
        },
        explanation: {
          en: 'A stiff, classical prohibition often seen on signs and in rules. する becomes すべからず.',
          vi: 'Cách cấm đoán cổ, trang trọng, thường thấy trên biển báo và nội quy. する thành すべからず.'
        },
        examples: [
          {
            jp: '関係者以外、ここに立ち入るべからず。',
            romaji: 'Kankeisha igai, koko ni tachiiru bekarazu.',
            meaning: {
              en: 'No entry here except for authorized personnel.',
              vi: 'Ngoài người có phận sự, cấm vào khu vực này.'
            }
          },
          {
            jp: '初心忘るべからず、と社長は語った。',
            romaji: 'Shoshin wasuru bekarazu, to shachō wa katatta.',
            meaning: {
              en: 'The president said, "Never forget your original resolve."',
              vi: 'Giám đốc nói: "Đừng bao giờ quên tâm nguyện ban đầu."'
            }
          }
        ]
      },
      {
        pattern: 'V(辞書形)＋べくして＋同じV',
        title: { en: 'Bound to happen (〜べくして)', vi: 'Tất yếu xảy ra (〜べくして)' },
        explanation: {
          en: 'Indicates that a result occurred exactly as it was destined or bound to. The same verb is repeated, e.g. 起こるべくして起こる.',
          vi: 'Cho thấy một kết quả xảy ra đúng như nó tất yếu phải xảy ra. Lặp lại cùng động từ, vd 起こるべくして起こる.'
        },
        examples: [
          {
            jp: 'この事故は起こるべくして起こったと言える。',
            romaji: 'Kono jiko wa okoru beku shite okotta to ieru.',
            meaning: {
              en: 'You could say this accident was bound to happen.',
              vi: 'Có thể nói tai nạn này tất yếu phải xảy ra.'
            }
          },
          {
            jp: '彼の成功は、なるべくしてなった結果だ。',
            romaji: 'Kare no seikō wa, naru beku shite natta kekka da.',
            meaning: {
              en: 'His success is a result that was bound to come.',
              vi: 'Thành công của anh ấy là kết quả tất yếu phải đến.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A company-wide reform', vi: 'Cuộc cải cách toàn công ty' },
        lines: [
          {
            jp: '我が社は効率を高めるべく、大規模な改革に着手した。',
            romaji: 'Wagasha wa kōritsu o takameru beku, daikibo na kaikaku ni chakushu shita.',
            meaning: {
              en: 'Our company set about a large-scale reform in order to raise efficiency.',
              vi: 'Công ty chúng tôi đã bắt tay vào cuộc cải cách quy mô lớn để nâng cao hiệu suất.'
            }
          },
          {
            jp: '経営陣は、まず無駄な会議を減らすべきだと考えた。',
            romaji: 'Keieijin wa, mazu muda na kaigi o herasu beki da to kangaeta.',
            meaning: {
              en: 'Management thought they should first cut down on pointless meetings.',
              vi: 'Ban lãnh đạo cho rằng trước tiên nên giảm bớt các cuộc họp vô ích.'
            }
          },
          {
            jp: '社員は「初心忘るべからず」という言葉を胸に努力した。',
            romaji: 'Shain wa "shoshin wasuru bekarazu" to iu kotoba o mune ni doryoku shita.',
            meaning: {
              en: 'Employees worked hard, keeping the words "never forget your first resolve" in their hearts.',
              vi: 'Nhân viên nỗ lực, khắc ghi câu "đừng quên tâm nguyện ban đầu".'
            }
          },
          {
            jp: '目標を達成すべく全員が動いた結果、業績は着実に伸びた。',
            romaji:
              "Mokuhyō o tassei subeku zen'in ga ugoita kekka, gyōseki wa chakujitsu ni nobita.",
            meaning: {
              en: 'As everyone acted in order to achieve the goal, performance steadily grew.',
              vi: 'Nhờ mọi người đều hành động để đạt mục tiêu, thành tích đã tăng trưởng vững chắc.'
            }
          },
          {
            jp: 'この成長は、成るべくして成った成果だと言えるだろう。',
            romaji: 'Kono seichō wa, naru beku shite natta seika da to ieru darō.',
            meaning: {
              en: 'This growth can be called a result that was bound to come.',
              vi: 'Có thể nói sự tăng trưởng này là thành quả tất yếu phải đến.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did the company start the reform?',
              vi: 'Vì sao công ty bắt đầu cải cách?'
            },
            choices: [
              { id: 'a', label: { en: 'To raise efficiency', vi: 'Để nâng cao hiệu suất' } },
              {
                id: 'b',
                label: { en: 'To increase the number of meetings', vi: 'Để tăng số cuộc họp' }
              },
              { id: 'c', label: { en: 'To hire more staff', vi: 'Để tuyển thêm nhân viên' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did management decide to cut first?',
              vi: 'Ban lãnh đạo quyết định cắt giảm điều gì trước?'
            },
            choices: [
              { id: 'a', label: { en: 'Salaries', vi: 'Lương' } },
              { id: 'b', label: { en: 'Pointless meetings', vi: 'Các cuộc họp vô ích' } },
              { id: 'c', label: { en: 'Holidays', vi: 'Ngày nghỉ' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q3',
            question: {
              en: "How is the company's growth described?",
              vi: 'Sự tăng trưởng của công ty được mô tả thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'As a sudden accident', vi: 'Như một tai nạn bất ngờ' } },
              {
                id: 'b',
                label: { en: 'As something bound to happen', vi: 'Như điều tất yếu phải đến' }
              },
              { id: 'c', label: { en: 'As pure luck', vi: 'Như sự may mắn thuần túy' } }
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
      en: 'No Way to: 〜べくもない',
      vi: 'Không thể nào: 〜べくもない'
    },
    focus: {
      en: 'Express strong impossibility with 〜べくもない, plus the related 〜ようがない, 〜には及ばない and 〜まい.',
      vi: 'Diễn đạt sự bất khả mạnh mẽ với 〜べくもない, cùng các mẫu liên quan 〜ようがない, 〜には及ばない và 〜まい.'
    },
    vocab: [
      {
        kana: 'すいそく',
        kanji: '推測',
        romaji: 'suisoku',
        meaning: { en: 'conjecture, guess', vi: 'sự suy đoán' }
      },
      {
        kana: 'そうぞう',
        kanji: '想像',
        romaji: 'sōzō',
        meaning: { en: 'imagination', vi: 'sự tưởng tượng' }
      },
      {
        kana: 'さいのう',
        kanji: '才能',
        romaji: 'sainō',
        meaning: { en: 'talent', vi: 'tài năng' }
      },
      {
        kana: 'ぼんじん',
        kanji: '凡人',
        romaji: 'bonjin',
        meaning: { en: 'ordinary person', vi: 'người tầm thường' }
      },
      {
        kana: 'きょうち',
        kanji: '境地',
        romaji: 'kyōchi',
        meaning: { en: 'state, level attained', vi: 'cảnh giới, trình độ' }
      },
      {
        kana: 'およぶ',
        kanji: '及ぶ',
        romaji: 'oyobu',
        meaning: { en: 'to reach, to match', vi: 'với tới, sánh kịp' }
      },
      {
        kana: 'はかりしれない',
        kanji: '計り知れない',
        romaji: 'hakarishirenai',
        meaning: { en: 'immeasurable, beyond comprehension', vi: 'không thể đo lường' }
      },
      {
        kana: 'へだたり',
        kanji: '隔たり',
        romaji: 'hedatari',
        meaning: { en: 'gap, distance', vi: 'khoảng cách' }
      },
      {
        kana: 'とうてい',
        kanji: '到底',
        romaji: 'tōtei',
        meaning: { en: '(not) by any means', vi: '(không) tài nào' }
      },
      {
        kana: 'ししょう',
        kanji: '師匠',
        romaji: 'shishō',
        meaning: { en: 'master, teacher', vi: 'sư phụ, bậc thầy' }
      },
      {
        kana: 'あやまち',
        kanji: '過ち',
        romaji: 'ayamachi',
        meaning: { en: 'mistake, error', vi: 'sai lầm' }
      },
      {
        kana: 'くらべもの',
        kanji: '比べ物',
        romaji: 'kurabemono',
        meaning: { en: 'something to compare with', vi: 'thứ để so sánh' }
      }
    ],
    grammar: [
      {
        pattern: 'V(辞書形)＋べくもない',
        title: {
          en: 'There is no way to / cannot possibly (〜べくもない)',
          vi: 'Không thể nào / không có cách nào (〜べくもない)'
        },
        explanation: {
          en: 'Strong, formal negation meaning "there is no way to ~" or "could not possibly ~". The conditions for the action simply do not exist. Attach to the dictionary form (する → すべくもない).',
          vi: 'Phủ định mạnh, trang trọng nghĩa là "không thể nào ~", "không có cách nào để ~". Điều kiện để thực hiện hành động hoàn toàn không tồn tại. Gắn vào thể từ điển (する → すべくもない).'
        },
        examples: [
          {
            jp: '当時の彼の苦労は、今の私には想像すべくもない。',
            romaji: 'Tōji no kare no kurō wa, ima no watashi ni wa sōzō subeku mo nai.',
            meaning: {
              en: 'I cannot possibly imagine the hardships he faced back then.',
              vi: 'Tôi không thể nào tưởng tượng nổi những vất vả của anh ấy thời đó.'
            }
          },
          {
            jp: '真相など、部外者の私が知るべくもなかった。',
            romaji: 'Shinsō nado, bugaisha no watashi ga shiru beku mo nakatta.',
            meaning: {
              en: 'There was no way an outsider like me could know the truth.',
              vi: 'Người ngoài như tôi thì không thể nào biết được sự thật.'
            }
          }
        ]
      },
      {
        pattern: 'V(ます形)＋ようがない',
        title: {
          en: 'No way to do it (〜ようがない)',
          vi: 'Không có cách nào (〜ようがない)'
        },
        explanation: {
          en: 'A more everyday way to say "there is no way to ~", because the means are lacking. Attach to the verb stem (連絡し → 連絡しようがない).',
          vi: 'Cách nói đời thường hơn cho "không có cách nào để ~", vì thiếu phương tiện. Gắn vào thể ます bỏ ます (連絡し → 連絡しようがない).'
        },
        examples: [
          {
            jp: '住所も電話番号も知らないので、連絡しようがない。',
            romaji: 'Jūsho mo denwa bangō mo shiranai node, renraku shiyō ga nai.',
            meaning: {
              en: 'I know neither the address nor the phone number, so there is no way to contact them.',
              vi: 'Tôi không biết cả địa chỉ lẫn số điện thoại nên không có cách nào liên lạc.'
            }
          },
          {
            jp: 'ここまで壊れていては、もう直しようがない。',
            romaji: 'Koko made kowarete ite wa, mō naoshiyō ga nai.',
            meaning: {
              en: 'Broken this badly, there is simply no way to fix it.',
              vi: 'Hỏng đến mức này thì không còn cách nào sửa được nữa.'
            }
          }
        ]
      },
      {
        pattern: 'N／V＋には及ばない',
        title: {
          en: 'Cannot match / no need to (〜には及ばない)',
          vi: 'Không sánh được / không cần (〜には及ばない)'
        },
        explanation: {
          en: 'Means "does not match up to ~" (a comparison) or "there is no need to ~". Here we focus on the "cannot reach the level of" sense.',
          vi: 'Nghĩa là "không sánh được với ~" (so sánh) hoặc "không cần phải ~". Ở đây tập trung vào nghĩa "không đạt tới mức".'
        },
        examples: [
          {
            jp: '私の腕など、師匠の境地には到底及ばない。',
            romaji: 'Watashi no ude nado, shishō no kyōchi ni wa tōtei oyobanai.',
            meaning: {
              en: "My skill cannot possibly match my master's level.",
              vi: 'Tay nghề của tôi không thể nào sánh được với trình độ của sư phụ.'
            }
          },
          {
            jp: 'わざわざ謝りに来るには及びません。',
            romaji: 'Wazawaza ayamari ni kuru ni wa oyobimasen.',
            meaning: {
              en: 'There is no need to go out of your way to come and apologize.',
              vi: 'Không cần phải cất công đến tận nơi để xin lỗi đâu.'
            }
          }
        ]
      },
      {
        pattern: 'V＋まい',
        title: {
          en: 'Surely not / will not (〜まい)',
          vi: 'Chắc không / nhất định không (〜まい)'
        },
        explanation: {
          en: 'A formal negative of conjecture ("surely ~ not") or negative volition ("I will not ~"). Group 1 verbs add まい to the dictionary form; する → するまい/すまい.',
          vi: 'Phủ định mang tính suy đoán ("chắc không ~") hoặc ý chí phủ định ("nhất định không ~"), trang trọng. Động từ nhóm 1 thêm まい vào thể từ điển; する → するまい/すまい.'
        },
        examples: [
          {
            jp: '彼の才能には、誰も及ぶまい。',
            romaji: 'Kare no sainō ni wa, dare mo oyobu mai.',
            meaning: {
              en: 'Surely no one can match his talent.',
              vi: 'Chắc hẳn không ai sánh kịp tài năng của anh ấy.'
            }
          },
          {
            jp: '二度と同じ過ちは犯すまいと心に誓った。',
            romaji: 'Nido to onaji ayamachi wa okasu mai to kokoro ni chikatta.',
            meaning: {
              en: 'I swore to myself I would never make the same mistake again.',
              vi: 'Tôi đã tự thề trong lòng sẽ không bao giờ phạm cùng sai lầm đó nữa.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Beyond my reach', vi: 'Ngoài tầm với của tôi' },
        lines: [
          {
            jp: '師匠の作品を前にすると、その凄さは私には計り知れない。',
            romaji:
              'Shishō no sakuhin o mae ni suru to, sono sugosa wa watashi ni wa hakarishirenai.',
            meaning: {
              en: "Standing before my master's work, its greatness is beyond my comprehension.",
              vi: 'Đứng trước tác phẩm của sư phụ, sự vĩ đại ấy là điều tôi không thể đo lường nổi.'
            }
          },
          {
            jp: '彼がどれほど努力したか、凡人の私には想像すべくもない。',
            romaji:
              'Kare ga dorehodo doryoku shita ka, bonjin no watashi ni wa sōzō subeku mo nai.',
            meaning: {
              en: 'A mere ordinary person like me cannot possibly imagine how hard he worked.',
              vi: 'Một người tầm thường như tôi không thể nào tưởng tượng nổi anh ấy đã nỗ lực đến mức nào.'
            }
          },
          {
            jp: '私の腕など、師匠の境地には到底及ばない。',
            romaji: 'Watashi no ude nado, shishō no kyōchi ni wa tōtei oyobanai.',
            meaning: {
              en: "My skill cannot possibly reach my master's level.",
              vi: 'Tay nghề của tôi không thể nào với tới trình độ của sư phụ.'
            }
          },
          {
            jp: 'その才能の差は、もはや比べ物にならないほどだ。',
            romaji: 'Sono sainō no sa wa, mohaya kurabemono ni naranai hodo da.',
            meaning: {
              en: 'The gap in talent is so great it is no longer even a comparison.',
              vi: 'Khoảng cách tài năng lớn đến mức không còn gì để so sánh.'
            }
          },
          {
            jp: 'それでも、私はこの道を諦めるまいと決めている。',
            romaji: 'Soredemo, watashi wa kono michi o akirameru mai to kimete iru.',
            meaning: {
              en: 'Even so, I am determined that I will never give up this path.',
              vi: 'Dù vậy, tôi đã quyết tâm sẽ không bao giờ từ bỏ con đường này.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: "How does the writer feel about the master's skill?",
              vi: 'Người viết cảm thấy thế nào về tay nghề của sư phụ?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It is beyond their reach', vi: 'Nó nằm ngoài tầm với của họ' }
              },
              { id: 'b', label: { en: 'It is easy to copy', vi: 'Rất dễ bắt chước' } },
              { id: 'c', label: { en: 'It is worse than their own', vi: 'Kém hơn của họ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer decide at the end?',
              vi: 'Cuối cùng người viết quyết định điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'To give up the path', vi: 'Từ bỏ con đường này' } },
              { id: 'b', label: { en: 'To never give up', vi: 'Không bao giờ từ bỏ' } },
              { id: 'c', label: { en: 'To change masters', vi: 'Đổi sư phụ' } }
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
      en: 'For the Sole Purpose Of: 〜んがため(に)',
      vi: 'Chỉ với mục đích: 〜んがため(に)'
    },
    focus: {
      en: 'Express a strong, written purpose with 〜んがため(に), plus 〜んがための, 〜んとする and 〜ばこそ.',
      vi: 'Diễn đạt mục đích mạnh mẽ trong văn viết với 〜んがため(に), cùng 〜んがための, 〜んとする và 〜ばこそ.'
    },
    vocab: [
      {
        kana: 'いきのびる',
        kanji: '生き延びる',
        romaji: 'ikinobiru',
        meaning: { en: 'to survive, live on', vi: 'sống sót, tồn tại' }
      },
      {
        kana: 'しょうり',
        kanji: '勝利',
        romaji: 'shōri',
        meaning: { en: 'victory', vi: 'chiến thắng' }
      },
      {
        kana: 'りじゅん',
        kanji: '利潤',
        romaji: 'rijun',
        meaning: { en: 'profit', vi: 'lợi nhuận' }
      },
      {
        kana: 'しゅっせ',
        kanji: '出世',
        romaji: 'shusse',
        meaning: { en: 'career advancement', vi: 'thăng tiến sự nghiệp' }
      },
      {
        kana: 'めいせい',
        kanji: '名声',
        romaji: 'meisei',
        meaning: { en: 'fame, reputation', vi: 'danh tiếng' }
      },
      {
        kana: 'あざむく',
        kanji: '欺く',
        romaji: 'azamuku',
        meaning: { en: 'to deceive', vi: 'lừa dối' }
      },
      {
        kana: 'しゅだん',
        kanji: '手段',
        romaji: 'shudan',
        meaning: { en: 'means, method', vi: 'phương tiện, thủ đoạn' }
      },
      {
        kana: 'ぎせい',
        kanji: '犠牲',
        romaji: 'gisei',
        meaning: { en: 'sacrifice', vi: 'sự hy sinh' }
      },
      {
        kana: 'ついきゅう',
        kanji: '追求',
        romaji: 'tsuikyū',
        meaning: { en: 'pursuit', vi: 'sự theo đuổi' }
      },
      {
        kana: 'ほしん',
        kanji: '保身',
        romaji: 'hoshin',
        meaning: { en: 'self-preservation', vi: 'bảo vệ bản thân' }
      },
      {
        kana: 'かくりつ',
        kanji: '確立',
        romaji: 'kakuritsu',
        meaning: { en: 'establishment', vi: 'sự gây dựng, thiết lập' }
      },
      {
        kana: 'しんらい',
        kanji: '信頼',
        romaji: 'shinrai',
        meaning: { en: 'trust, confidence', vi: 'sự tin tưởng' }
      }
    ],
    grammar: [
      {
        pattern: 'V(ない形の語幹)＋んがため(に)',
        title: {
          en: 'For the sole purpose of (〜んがため(に))',
          vi: 'Chỉ với mục đích (〜んがため(に))'
        },
        explanation: {
          en: 'A very formal, written expression of strong purpose: "for the sole purpose of ~". Attach to the ない-stem (書か → 書かんがため); する becomes せんがため. It often carries a driven, even ruthless tone.',
          vi: 'Cách diễn đạt mục đích mạnh mẽ, rất trang trọng và mang tính văn viết: "chỉ với mục đích ~". Gắn vào gốc thể ない (書か → 書かんがため); する thành せんがため. Thường mang sắc thái quyết liệt, thậm chí bất chấp.'
        },
        examples: [
          {
            jp: '彼は出世せんがため、手段を選ばなかった。',
            romaji: 'Kare wa shusse sen ga tame, shudan o erabanakatta.',
            meaning: {
              en: 'For the sole purpose of getting ahead, he stopped at nothing.',
              vi: 'Chỉ để được thăng tiến, anh ta không từ bất kỳ thủ đoạn nào.'
            }
          },
          {
            jp: '生き延びんがために、人々は必死で逃げた。',
            romaji: 'Ikinobin ga tame ni, hitobito wa hisshi de nigeta.',
            meaning: {
              en: 'In order to survive, the people fled desperately.',
              vi: 'Để sống sót, người ta đã liều mạng bỏ chạy.'
            }
          }
        ]
      },
      {
        pattern: 'V(ない形の語幹)＋んがための＋N',
        title: {
          en: 'A ~ done solely for that aim (〜んがための N)',
          vi: 'N chỉ nhằm mục đích đó (〜んがための N)'
        },
        explanation: {
          en: 'The same purpose phrase used to modify a noun. It marks the noun as existing solely to serve that aim.',
          vi: 'Cụm chỉ mục đích tương tự dùng để bổ nghĩa cho danh từ, cho thấy danh từ đó tồn tại chỉ để phục vụ mục đích ấy.'
        },
        examples: [
          {
            jp: 'それは利潤を追求せんがための策略にすぎない。',
            romaji: 'Sore wa rijun o tsuikyū sen ga tame no sakuryaku ni suginai.',
            meaning: {
              en: 'That is nothing but a scheme for the sole purpose of chasing profit.',
              vi: 'Đó chẳng qua chỉ là mưu kế nhằm mục đích theo đuổi lợi nhuận.'
            }
          },
          {
            jp: '自らの保身を図らんがための言い訳だった。',
            romaji: 'Mizukara no hoshin o hakaran ga tame no iiwake datta.',
            meaning: {
              en: 'It was an excuse made solely to protect himself.',
              vi: 'Đó là lời bào chữa chỉ nhằm bảo vệ bản thân anh ta.'
            }
          }
        ]
      },
      {
        pattern: 'V(ない形の語幹)＋んとする',
        title: { en: 'Be about to / try to (〜んとする)', vi: 'Sắp / cố gắng (〜んとする)' },
        explanation: {
          en: 'A formal expression meaning "be on the verge of ~" or "try hard to ~". It shares the same ん-form (書か → 書かんとする; する → せんとする).',
          vi: 'Cách nói trang trọng nghĩa là "sắp ~", "cố gắng ~". Cùng dùng dạng ん (書か → 書かんとする; する → せんとする).'
        },
        examples: [
          {
            jp: '日が今まさに沈まんとしている。',
            romaji: 'Hi ga ima masa ni shizuman to shite iru.',
            meaning: {
              en: 'The sun is just about to set.',
              vi: 'Mặt trời đang sắp sửa lặn.'
            }
          },
          {
            jp: '名声を確立せんとして、彼は研究に没頭した。',
            romaji: 'Meisei o kakuritsu sen to shite, kare wa kenkyū ni bottō shita.',
            meaning: {
              en: 'Trying to establish his reputation, he buried himself in research.',
              vi: 'Để gây dựng danh tiếng, anh ấy vùi đầu vào nghiên cứu.'
            }
          }
        ]
      },
      {
        pattern: 'V(ば形)＋こそ',
        title: { en: 'Precisely because (〜ばこそ)', vi: 'Chính vì (〜ばこそ)' },
        explanation: {
          en: 'Emphasizes a reason: "it is precisely because ~ that ...". The result is usually positive or sincere.',
          vi: 'Nhấn mạnh lý do: "chính vì ~ mà ...". Kết quả thường tích cực hoặc chân thành.'
        },
        examples: [
          {
            jp: '君の成功を願えばこそ、厳しいことを言うのだ。',
            romaji: 'Kimi no seikō o negaeba koso, kibishii koto o iu no da.',
            meaning: {
              en: 'It is precisely because I wish for your success that I say harsh things.',
              vi: 'Chính vì mong cậu thành công nên tôi mới nói những lời nghiêm khắc.'
            }
          },
          {
            jp: '努力すればこそ、勝利を手にできる。',
            romaji: 'Doryoku sureba koso, shōri o te ni dekiru.',
            meaning: {
              en: 'It is only because you make an effort that you can grasp victory.',
              vi: 'Chính vì có nỗ lực, ta mới có thể nắm được chiến thắng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'At any cost', vi: 'Bằng mọi giá' },
        lines: [
          {
            jp: '彼はただ出世せんがために、同僚さえも欺いた。',
            romaji: 'Kare wa tada shusse sen ga tame ni, dōryō sae mo azamuita.',
            meaning: {
              en: 'Solely to advance his career, he deceived even his colleagues.',
              vi: 'Chỉ để thăng tiến, anh ta đã lừa dối cả đồng nghiệp.'
            }
          },
          {
            jp: '会社の改革も、実は利潤を追求せんがための策だった。',
            romaji: 'Kaisha no kaikaku mo, jitsu wa rijun o tsuikyū sen ga tame no saku datta.',
            meaning: {
              en: "The company's reform was, in fact, a ploy solely to pursue profit.",
              vi: 'Cuộc cải cách của công ty thực ra cũng chỉ là mưu kế nhằm theo đuổi lợi nhuận.'
            }
          },
          {
            jp: '名声を確立せんとして、彼は多くの犠牲を払った。',
            romaji: 'Meisei o kakuritsu sen to shite, kare wa ōku no gisei o haratta.',
            meaning: {
              en: 'Trying to establish his fame, he paid many sacrifices.',
              vi: 'Để gây dựng danh tiếng, anh ta đã trả giá bằng nhiều hy sinh.'
            }
          },
          {
            jp: 'しかし、本当に信頼されればこそ、人はついてくるものだ。',
            romaji: 'Shikashi, hontō ni shinrai sareba koso, hito wa tsuite kuru mono da.',
            meaning: {
              en: 'But it is precisely when you are truly trusted that people follow you.',
              vi: 'Nhưng chính khi thực sự được tin tưởng, người ta mới đi theo bạn.'
            }
          },
          {
            jp: '保身ばかり図る彼から、仲間は次第に去っていった。',
            romaji: 'Hoshin bakari hakaru kare kara, nakama wa shidai ni satte itta.',
            meaning: {
              en: 'His companions gradually left him, as he only sought to protect himself.',
              vi: 'Vì anh ta chỉ lo bảo vệ bản thân, đồng đội dần dần rời bỏ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did the man deceive his colleagues?',
              vi: 'Vì sao người đàn ông lừa dối đồng nghiệp?'
            },
            choices: [
              { id: 'a', label: { en: 'To advance his career', vi: 'Để thăng tiến sự nghiệp' } },
              { id: 'b', label: { en: 'To help them', vi: 'Để giúp họ' } },
              { id: 'c', label: { en: 'To survive a disaster', vi: 'Để sống sót qua thảm họa' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What was the real aim of the reform?',
              vi: 'Mục đích thực sự của cuộc cải cách là gì?'
            },
            choices: [
              { id: 'a', label: { en: 'To pursue profit', vi: 'Theo đuổi lợi nhuận' } },
              { id: 'b', label: { en: 'To help employees', vi: 'Giúp đỡ nhân viên' } },
              { id: 'c', label: { en: 'To establish trust', vi: 'Gây dựng lòng tin' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What happened to his companions in the end?',
              vi: 'Cuối cùng đồng đội của anh ta ra sao?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'They followed him loyally', vi: 'Họ trung thành đi theo anh ta' }
              },
              { id: 'b', label: { en: 'They gradually left him', vi: 'Họ dần rời bỏ anh ta' } },
              { id: 'c', label: { en: 'They were promoted', vi: 'Họ được thăng chức' } }
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
      en: 'On the Verge Of: 〜んばかり(に)',
      vi: 'Như thể sắp: 〜んばかり(に)'
    },
    focus: {
      en: 'Describe an extreme, "almost as if" state with 〜んばかり(に), plus 〜んばかりの, 〜とばかり(に) and 〜ばかりに.',
      vi: 'Mô tả trạng thái cực độ "như thể sắp" với 〜んばかり(に), cùng 〜んばかりの, 〜とばかり(に) và 〜ばかりに.'
    },
    vocab: [
      {
        kana: 'なみだ',
        kanji: '涙',
        romaji: 'namida',
        meaning: { en: 'tears', vi: 'nước mắt' }
      },
      {
        kana: 'どなる',
        kanji: '怒鳴る',
        romaji: 'donaru',
        meaning: { en: 'to yell, to shout', vi: 'quát tháo, la lớn' }
      },
      {
        kana: 'さっとう',
        kanji: '殺到',
        romaji: 'sattō',
        meaning: { en: 'rush, flood (of people)', vi: 'sự đổ xô, tràn ngập' }
      },
      {
        kana: 'よろこび',
        kanji: '喜び',
        romaji: 'yorokobi',
        meaning: { en: 'joy', vi: 'niềm vui' }
      },
      {
        kana: 'あふれる',
        kanji: '溢れる',
        romaji: 'afureru',
        meaning: { en: 'to overflow', vi: 'tràn đầy, tràn ra' }
      },
      {
        kana: 'つめよる',
        kanji: '詰め寄る',
        romaji: 'tsumeyoru',
        meaning: { en: 'to press in on, close in', vi: 'lao tới, dồn ép' }
      },
      {
        kana: 'ぜっきょう',
        kanji: '絶叫',
        romaji: 'zekkyō',
        meaning: { en: 'scream, shriek', vi: 'tiếng thét' }
      },
      {
        kana: 'まんめん',
        kanji: '満面',
        romaji: 'manmen',
        meaning: { en: 'the whole face', vi: 'cả khuôn mặt' }
      },
      {
        kana: 'こうぎ',
        kanji: '抗議',
        romaji: 'kōgi',
        meaning: { en: 'protest', vi: 'sự phản đối' }
      },
      {
        kana: 'あっとう',
        kanji: '圧倒',
        romaji: 'attō',
        meaning: { en: 'overwhelming', vi: 'sự áp đảo' }
      },
      {
        kana: 'ぎょうそう',
        kanji: '形相',
        romaji: 'gyōsō',
        meaning: { en: 'fierce facial expression', vi: 'vẻ mặt dữ tợn' }
      },
      {
        kana: 'はくしゅ',
        kanji: '拍手',
        romaji: 'hakushu',
        meaning: { en: 'applause', vi: 'tràng vỗ tay' }
      }
    ],
    grammar: [
      {
        pattern: 'V(ない形の語幹)＋んばかり(に)',
        title: {
          en: 'Almost as if / on the verge of (〜んばかり(に))',
          vi: 'Như thể sắp / gần như (〜んばかり(に))'
        },
        explanation: {
          en: 'Describes a state so extreme it looks "almost as if ~" or "on the verge of ~" - but the action does not actually happen. Attach to the ない-stem (泣か → 泣かんばかり); する becomes せんばかり.',
          vi: 'Mô tả trạng thái mạnh đến mức trông "như thể sắp ~", "gần như ~" - nhưng hành động không thực sự xảy ra. Gắn vào gốc thể ない (泣か → 泣かんばかり); する thành せんばかり.'
        },
        examples: [
          {
            jp: '彼女は今にも泣かんばかりの表情だった。',
            romaji: 'Kanojo wa ima ni mo nakan bakari no hyōjō datta.',
            meaning: {
              en: 'She had a look on her face as if she were about to burst into tears.',
              vi: 'Cô ấy có vẻ mặt như thể sắp òa khóc đến nơi.'
            }
          },
          {
            jp: '彼は出て行けと言わんばかりに、ドアを指さした。',
            romaji: 'Kare wa dete ike to iwan bakari ni, doa o yubisashita.',
            meaning: {
              en: 'He pointed at the door as if to say "Get out."',
              vi: 'Anh ta chỉ tay vào cửa như thể muốn nói "Cút ra ngoài."'
            }
          }
        ]
      },
      {
        pattern: 'V(ない形の語幹)＋んばかりの＋N',
        title: {
          en: 'A ~ that is almost overflowing (〜んばかりの N)',
          vi: 'N gần như tràn ngập (〜んばかりの N)'
        },
        explanation: {
          en: 'The same "almost as if" phrase modifying a noun, describing its overwhelming degree.',
          vi: 'Cụm "gần như" tương tự bổ nghĩa cho danh từ, mô tả mức độ mạnh mẽ áp đảo của nó.'
        },
        examples: [
          {
            jp: '会場は割れんばかりの拍手に包まれた。',
            romaji: 'Kaijō wa waren bakari no hakushu ni tsutsumareta.',
            meaning: {
              en: 'The venue was enveloped in thunderous applause, as if it would split apart.',
              vi: 'Hội trường ngập trong tràng vỗ tay như muốn vỡ tung.'
            }
          },
          {
            jp: '彼は喜びが溢れんばかりの笑顔を見せた。',
            romaji: 'Kare wa yorokobi ga afuren bakari no egao o miseta.',
            meaning: {
              en: 'He showed a smile that was all but overflowing with joy.',
              vi: 'Anh nở nụ cười như muốn tràn ngập niềm vui.'
            }
          }
        ]
      },
      {
        pattern: '(引用)＋とばかり(に)',
        title: { en: 'As if to say (〜とばかり(に))', vi: 'Như thể muốn nói (〜とばかり(に))' },
        explanation: {
          en: 'Means "as if to say ~", describing behavior that conveys an unspoken message. The quoted part comes before とばかりに.',
          vi: 'Nghĩa là "như thể muốn nói ~", mô tả hành vi truyền đạt một thông điệp không lời. Phần trích dẫn đứng trước とばかりに.'
        },
        examples: [
          {
            jp: '彼はチャンスだとばかりに、勢いよく手を挙げた。',
            romaji: 'Kare wa chansu da to bakari ni, ikioi yoku te o ageta.',
            meaning: {
              en: 'As if to say "This is my chance," he eagerly raised his hand.',
              vi: 'Như thể muốn nói "Cơ hội đây rồi", anh ta hăng hái giơ tay.'
            }
          },
          {
            jp: '客は早くしろとばかりに、店員をにらんだ。',
            romaji: "Kyaku wa hayaku shiro to bakari ni, ten'in o niranda.",
            meaning: {
              en: 'As if to say "Hurry up," the customer glared at the clerk.',
              vi: 'Như thể giục "Nhanh lên", vị khách trừng mắt nhìn nhân viên.'
            }
          }
        ]
      },
      {
        pattern: 'V／A(普通形)＋ばかりに',
        title: {
          en: 'Just because (unfortunate result) (〜ばかりに)',
          vi: 'Chỉ vì (hậu quả xấu) (〜ばかりに)'
        },
        explanation: {
          en: 'A different ばかり: "simply because ~ (something bad resulted)". It blames one cause for an unfortunate outcome.',
          vi: 'Một nghĩa khác của ばかり: "chỉ vì ~ (mà dẫn đến hậu quả xấu)". Quy trách nhiệm cho một nguyên nhân dẫn đến kết quả không hay.'
        },
        examples: [
          {
            jp: '一言余計なことを言ったばかりに、彼を怒らせてしまった。',
            romaji: 'Hitokoto yokei na koto o itta bakari ni, kare o okorasete shimatta.',
            meaning: {
              en: 'Just because I said one unnecessary word, I ended up making him angry.',
              vi: 'Chỉ vì lỡ nói một câu thừa, tôi đã khiến anh ấy tức giận.'
            }
          },
          {
            jp: '準備を怠ったばかりに、計画は失敗に終わった。',
            romaji: 'Junbi o okotatta bakari ni, keikaku wa shippai ni owatta.',
            meaning: {
              en: 'Simply because we neglected the preparations, the plan ended in failure.',
              vi: 'Chỉ vì lơ là khâu chuẩn bị, kế hoạch đã kết thúc trong thất bại.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A storm of protest', vi: 'Cơn bão phản đối' },
        lines: [
          {
            jp: '発表が変更されると、会場には抗議の声が殺到した。',
            romaji: 'Happyō ga henkō sareru to, kaijō ni wa kōgi no koe ga sattō shita.',
            meaning: {
              en: 'When the announcement was changed, a flood of protests poured into the venue.',
              vi: 'Khi thông báo bị thay đổi, hội trường tràn ngập tiếng phản đối.'
            }
          },
          {
            jp: '一人の客は、今にも怒鳴らんばかりの形相で詰め寄った。',
            romaji: 'Hitori no kyaku wa, ima ni mo donaran bakari no gyōsō de tsumeyotta.',
            meaning: {
              en: 'One customer pressed forward with a face that looked about to start yelling.',
              vi: 'Một vị khách lao tới với vẻ mặt như thể sắp quát tháo đến nơi.'
            }
          },
          {
            jp: '彼は責任者を出せとばかりに、受付の机を叩いた。',
            romaji: 'Kare wa sekininsha o dase to bakari ni, uketsuke no tsukue o tataita.',
            meaning: {
              en: 'As if to say "Bring out the person in charge," he banged on the reception desk.',
              vi: 'Như thể muốn nói "Gọi người phụ trách ra đây", anh ta đập lên bàn tiếp tân.'
            }
          },
          {
            jp: '担当者が一言謝ったばかりに、かえって客の怒りは増した。',
            romaji: 'Tantōsha ga hitokoto ayamatta bakari ni, kaette kyaku no ikari wa mashita.',
            meaning: {
              en: "Just because the staff member apologized once, the customer's anger only grew.",
              vi: 'Chỉ vì nhân viên lỡ xin lỗi một câu, cơn giận của khách lại càng tăng.'
            }
          },
          {
            jp: '最後には、割れんばかりの怒声が会場全体を圧倒した。',
            romaji: 'Saigo ni wa, waren bakari no dosei ga kaijō zentai o attō shita.',
            meaning: {
              en: 'In the end, ear-splitting angry shouts overwhelmed the entire venue.',
              vi: 'Cuối cùng, những tiếng quát giận dữ như muốn vỡ tung đã áp đảo cả hội trường.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened when the announcement changed?',
              vi: 'Điều gì xảy ra khi thông báo thay đổi?'
            },
            choices: [
              { id: 'a', label: { en: 'A flood of protests', vi: 'Làn sóng phản đối tràn ngập' } },
              { id: 'b', label: { en: 'Everyone applauded', vi: 'Mọi người vỗ tay' } },
              { id: 'c', label: { en: 'The venue went silent', vi: 'Hội trường im lặng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: "How did the customer's anger change after the apology?",
              vi: 'Cơn giận của khách thay đổi thế nào sau lời xin lỗi?'
            },
            choices: [
              { id: 'a', label: { en: 'It calmed down', vi: 'Nó dịu xuống' } },
              { id: 'b', label: { en: 'It grew even more', vi: 'Nó càng tăng thêm' } },
              { id: 'c', label: { en: 'It disappeared', vi: 'Nó biến mất' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-21',
    number: 21,
    title: {
      en: 'Bound to Stir: 〜ずにはおかない',
      vi: 'Tất yếu gây nên: 〜ずにはおかない'
    },
    focus: {
      en: 'Express an inevitable effect or firm determination with 〜ずにはおかない / 〜ないではおかない, plus 〜ずにはいられない and 〜てやまない.',
      vi: 'Diễn đạt tác động tất yếu hoặc quyết tâm mạnh với 〜ずにはおかない / 〜ないではおかない, cùng 〜ずにはいられない và 〜てやまない.'
    },
    vocab: [
      {
        kana: 'かんどう',
        kanji: '感動',
        romaji: 'kandō',
        meaning: { en: 'deep emotion, being moved', vi: 'sự xúc động' }
      },
      {
        kana: 'しょうげき',
        kanji: '衝撃',
        romaji: 'shōgeki',
        meaning: { en: 'shock, impact', vi: 'cú sốc, chấn động' }
      },
      {
        kana: 'うったえる',
        kanji: '訴える',
        romaji: 'uttaeru',
        meaning: { en: 'to appeal, to move', vi: 'kêu gọi, lay động' }
      },
      {
        kana: 'かんきゃく',
        kanji: '観客',
        romaji: 'kankyaku',
        meaning: { en: 'audience, spectators', vi: 'khán giả' }
      },
      {
        kana: 'しんじつ',
        kanji: '真実',
        romaji: 'shinjitsu',
        meaning: { en: 'truth', vi: 'sự thật' }
      },
      {
        kana: 'かいめい',
        kanji: '解明',
        romaji: 'kaimei',
        meaning: { en: 'clarification, elucidation', vi: 'sự làm sáng tỏ' }
      },
      {
        kana: 'ゆさぶる',
        kanji: '揺さぶる',
        romaji: 'yusaburu',
        meaning: { en: 'to shake, to stir', vi: 'làm rung động' }
      },
      {
        kana: 'よいん',
        kanji: '余韻',
        romaji: 'yoin',
        meaning: { en: 'lingering resonance', vi: 'dư âm' }
      },
      {
        kana: 'えいぞう',
        kanji: '映像',
        romaji: 'eizō',
        meaning: { en: 'footage, image', vi: 'hình ảnh, thước phim' }
      },
      {
        kana: 'かんとく',
        kanji: '監督',
        romaji: 'kantoku',
        meaning: { en: 'director', vi: 'đạo diễn' }
      },
      {
        kana: 'さくひん',
        kanji: '作品',
        romaji: 'sakuhin',
        meaning: { en: 'work (of art)', vi: 'tác phẩm' }
      },
      {
        kana: 'なみだする',
        kanji: '涙する',
        romaji: 'namida suru',
        meaning: { en: 'to shed tears', vi: 'rơi nước mắt' }
      }
    ],
    grammar: [
      {
        pattern: 'V(ない形)＋ずにはおかない／ないではおかない',
        title: {
          en: 'Will inevitably cause / be determined to (〜ずにはおかない)',
          vi: 'Tất yếu gây nên / nhất định sẽ (〜ずにはおかない)'
        },
        explanation: {
          en: 'A strong, formal expression with two senses: (1) "is bound to cause ~" (an unavoidable effect, often on emotions), and (2) "will definitely do ~" (firm determination). Attach to the ない-form (動かさ → 動かさずにはおかない); する becomes せずにはおかない.',
          vi: 'Cách diễn đạt mạnh, trang trọng với hai nghĩa: (1) "tất yếu gây ra ~" (tác động không tránh khỏi, thường lên cảm xúc), và (2) "nhất định sẽ làm ~" (quyết tâm mạnh mẽ). Gắn vào thể ない (動かさ → 動かさずにはおかない); する thành せずにはおかない.'
        },
        examples: [
          {
            jp: 'あの映画は、観客の心を揺さぶらずにはおかない。',
            romaji: 'Ano eiga wa, kankyaku no kokoro o yusaburazu ni wa okanai.',
            meaning: {
              en: 'That film is bound to stir the hearts of its audience.',
              vi: 'Bộ phim ấy chắc chắn sẽ làm rung động trái tim khán giả.'
            }
          },
          {
            jp: '我々はこの事件の真実を解明せずにはおかない。',
            romaji: 'Wareware wa kono jiken no shinjitsu o kaimei sezu ni wa okanai.',
            meaning: {
              en: 'We are determined to get to the truth of this case, no matter what.',
              vi: 'Chúng tôi nhất định sẽ làm sáng tỏ sự thật của vụ việc này.'
            }
          }
        ]
      },
      {
        pattern: 'V(ない形)＋ずにはいられない',
        title: {
          en: 'Cannot help doing (〜ずにはいられない)',
          vi: 'Không thể không (〜ずにはいられない)'
        },
        explanation: {
          en: 'Describes a feeling or urge you cannot suppress: "cannot help ~ing". Attach to the ない-form; する becomes せずにはいられない.',
          vi: 'Mô tả cảm xúc hay thôi thúc không kìm được: "không thể không ~". Gắn vào thể ない; する thành せずにはいられない.'
        },
        examples: [
          {
            jp: 'あの結末には、誰もが感動せずにはいられない。',
            romaji: 'Ano ketsumatsu ni wa, dare mo ga kandō sezu ni wa irarenai.',
            meaning: {
              en: 'No one can help being moved by that ending.',
              vi: 'Không ai có thể không xúc động trước cái kết ấy.'
            }
          },
          {
            jp: '彼の態度には、一言言わずにはいられなかった。',
            romaji: 'Kare no taido ni wa, hitokoto iwazu ni wa irarenakatta.',
            meaning: {
              en: "I couldn't help saying something about his attitude.",
              vi: 'Trước thái độ của anh ta, tôi không thể không lên tiếng.'
            }
          }
        ]
      },
      {
        pattern: 'V(て形)＋やまない',
        title: { en: 'Never cease to feel (〜てやまない)', vi: 'Không ngừng (〜てやまない)' },
        explanation: {
          en: 'A formal phrase for a strong, lasting feeling that "never ceases", used with emotion verbs like 願う, 期待する, 愛する.',
          vi: 'Cụm trang trọng cho cảm xúc mạnh, lâu dài "không bao giờ ngừng", dùng với động từ cảm xúc như 願う, 期待する, 愛する.'
        },
        examples: [
          {
            jp: '皆様のご成功を願ってやみません。',
            romaji: 'Minasama no go-seikō o negatte yamimasen.',
            meaning: {
              en: 'I wish for all of your success from the bottom of my heart.',
              vi: 'Tôi hằng mong tất cả mọi người thành công.'
            }
          },
          {
            jp: '彼女は故郷を愛してやまなかった。',
            romaji: 'Kanojo wa kokyō o aishite yamanakatta.',
            meaning: {
              en: 'She never ceased to love her hometown.',
              vi: 'Cô ấy yêu quê hương mình không bao giờ ngơi.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A film that moves everyone', vi: 'Bộ phim làm rung động mọi người' },
        lines: [
          {
            jp: 'その作品は、見る者すべてに強い衝撃を与えずにはおかない。',
            romaji: 'Sono sakuhin wa, miru mono subete ni tsuyoi shōgeki o ataezu ni wa okanai.',
            meaning: {
              en: 'That work is bound to give a strong shock to everyone who sees it.',
              vi: 'Tác phẩm ấy chắc chắn sẽ gây chấn động mạnh cho mọi người xem.'
            }
          },
          {
            jp: '静かな映像が、かえって観客の心を揺さぶる。',
            romaji: 'Shizuka na eizō ga, kaette kankyaku no kokoro o yusaburu.',
            meaning: {
              en: "The quiet imagery, on the contrary, stirs the audience's hearts.",
              vi: 'Những thước phim tĩnh lặng lại càng làm rung động trái tim khán giả.'
            }
          },
          {
            jp: '最後の場面では、誰もが涙せずにはいられなかった。',
            romaji: 'Saigo no bamen de wa, dare mo ga namida sezu ni wa irarenakatta.',
            meaning: {
              en: 'In the final scene, no one could help shedding tears.',
              vi: 'Ở cảnh cuối, không ai có thể không rơi nước mắt.'
            }
          },
          {
            jp: '監督は、社会の真実を訴えてやまない人物だ。',
            romaji: 'Kantoku wa, shakai no shinjitsu o uttaete yamanai jinbutsu da.',
            meaning: {
              en: "The director is a person who never ceases to appeal to society's truth.",
              vi: 'Đạo diễn là người không ngừng lên tiếng về sự thật của xã hội.'
            }
          },
          {
            jp: '深い余韻は、観客の胸に長く残らずにはおかないだろう。',
            romaji: 'Fukai yoin wa, kankyaku no mune ni nagaku nokorazu ni wa okanai darō.',
            meaning: {
              en: "Its deep resonance will surely linger long in the audience's hearts.",
              vi: 'Dư âm sâu lắng ấy hẳn sẽ còn đọng lại rất lâu trong lòng khán giả.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What effect does the film have on viewers?',
              vi: 'Bộ phim tác động thế nào tới người xem?'
            },
            choices: [
              { id: 'a', label: { en: 'It bores them', vi: 'Khiến họ chán' } },
              { id: 'b', label: { en: 'It is bound to shock them', vi: 'Tất yếu gây chấn động' } },
              { id: 'c', label: { en: 'It puts them to sleep', vi: 'Khiến họ buồn ngủ' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the audience do in the final scene?',
              vi: 'Khán giả đã làm gì ở cảnh cuối?'
            },
            choices: [
              { id: 'a', label: { en: 'They could not help crying', vi: 'Không thể không khóc' } },
              { id: 'b', label: { en: 'They laughed loudly', vi: 'Cười lớn' } },
              { id: 'c', label: { en: 'They left the theater', vi: 'Rời khỏi rạp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What is the director described as?',
              vi: 'Đạo diễn được mô tả là người thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Someone who never stops appealing to truth',
                  vi: 'Người không ngừng lên tiếng về sự thật'
                }
              },
              { id: 'b', label: { en: 'Someone who hates films', vi: 'Người ghét phim' } },
              { id: 'c', label: { en: 'Someone who avoids society', vi: 'Người xa lánh xã hội' } }
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
      en: 'Cannot Suppress: 〜を禁じ得ない',
      vi: 'Không thể kìm nén: 〜を禁じ得ない'
    },
    focus: {
      en: 'Express an emotion you cannot hold back with 〜を禁じ得ない, plus 〜ざるを得ない, 〜てならない and 〜限りだ.',
      vi: 'Diễn đạt cảm xúc không kìm được với 〜を禁じ得ない, cùng 〜ざるを得ない, 〜てならない và 〜限りだ.'
    },
    vocab: [
      {
        kana: 'どうじょう',
        kanji: '同情',
        romaji: 'dōjō',
        meaning: { en: 'sympathy', vi: 'sự đồng cảm, thương cảm' }
      },
      {
        kana: 'いきどおり',
        kanji: '憤り',
        romaji: 'ikidōri',
        meaning: { en: 'indignation', vi: 'sự phẫn nộ' }
      },
      {
        kana: 'さんじょう',
        kanji: '惨状',
        romaji: 'sanjō',
        meaning: { en: 'disastrous scene', vi: 'cảnh hoang tàn' }
      },
      {
        kana: 'ひさいち',
        kanji: '被災地',
        romaji: 'hisaichi',
        meaning: { en: 'disaster-stricken area', vi: 'vùng thiên tai' }
      },
      {
        kana: 'いぞく',
        kanji: '遺族',
        romaji: 'izoku',
        meaning: { en: 'bereaved family', vi: 'gia đình tang quyến' }
      },
      {
        kana: 'つのる',
        kanji: '募る',
        romaji: 'tsunoru',
        meaning: { en: 'to grow stronger', vi: 'dâng lên, tăng dần' }
      },
      {
        kana: 'おさえる',
        kanji: '抑える',
        romaji: 'osaeru',
        meaning: { en: 'to suppress, hold back', vi: 'kìm nén' }
      },
      {
        kana: 'しつぼう',
        kanji: '失望',
        romaji: 'shitsubō',
        meaning: { en: 'disappointment', vi: 'sự thất vọng' }
      },
      {
        kana: 'ふっこう',
        kanji: '復興',
        romaji: 'fukkō',
        meaning: { en: 'reconstruction, recovery', vi: 'sự tái thiết' }
      },
      {
        kana: 'しえん',
        kanji: '支援',
        romaji: 'shien',
        meaning: { en: 'support, aid', vi: 'sự cứu trợ, hỗ trợ' }
      },
      {
        kana: 'たいおう',
        kanji: '対応',
        romaji: 'taiō',
        meaning: { en: 'response, handling', vi: 'sự ứng phó' }
      },
      {
        kana: 'むせきにん',
        kanji: '無責任',
        romaji: 'musekinin',
        meaning: { en: 'irresponsible', vi: 'vô trách nhiệm' }
      }
    ],
    grammar: [
      {
        pattern: 'N(感情)＋を禁じ得ない',
        title: {
          en: 'Cannot suppress / cannot help feeling (〜を禁じ得ない)',
          vi: 'Không thể kìm nén / không thể không cảm thấy (〜を禁じ得ない)'
        },
        explanation: {
          en: 'A formal, written phrase: "cannot suppress / cannot help feeling ~". It attaches to an emotion noun such as 同情, 怒り, 驚き. Used about a natural emotional reaction.',
          vi: 'Cụm trang trọng, văn viết: "không thể kìm nén / không thể không cảm thấy ~". Gắn vào danh từ cảm xúc như 同情, 怒り, 驚き. Dùng cho phản ứng cảm xúc tự nhiên.'
        },
        examples: [
          {
            jp: '被災地の惨状に、同情を禁じ得ない。',
            romaji: 'Hisaichi no sanjō ni, dōjō o kinjienai.',
            meaning: {
              en: 'I cannot help feeling sympathy at the devastation in the disaster area.',
              vi: 'Trước cảnh hoang tàn ở vùng thiên tai, tôi không thể không cảm thấy xót xa.'
            }
          },
          {
            jp: '彼の無責任な発言には、憤りを禁じ得なかった。',
            romaji: 'Kare no musekinin na hatsugen ni wa, ikidōri o kinjienakatta.',
            meaning: {
              en: 'I could not suppress my indignation at his irresponsible remarks.',
              vi: 'Trước phát ngôn vô trách nhiệm của anh ta, tôi không thể kìm được sự phẫn nộ.'
            }
          }
        ]
      },
      {
        pattern: 'V(ない形)＋ざるを得ない',
        title: {
          en: 'Have no choice but to (〜ざるを得ない)',
          vi: 'Buộc phải (〜ざるを得ない)'
        },
        explanation: {
          en: 'Means "have no choice but to ~", because circumstances force it. Attach to the ない-form (認め → 認めざるを得ない); する becomes せざるを得ない.',
          vi: 'Nghĩa là "buộc phải ~", vì hoàn cảnh ép buộc. Gắn vào thể ない (認め → 認めざるを得ない); する thành せざるを得ない.'
        },
        examples: [
          {
            jp: '証拠がそろった以上、事実を認めざるを得ない。',
            romaji: 'Shōko ga sorotta ijō, jijitsu o mitomezaru o enai.',
            meaning: {
              en: 'Now that the evidence is in, I have no choice but to admit the facts.',
              vi: 'Một khi chứng cứ đã đầy đủ, tôi buộc phải thừa nhận sự thật.'
            }
          },
          {
            jp: '台風のため、出発を延期せざるを得なかった。',
            romaji: 'Taifū no tame, shuppatsu o enki sezaru o enakatta.',
            meaning: {
              en: 'Because of the typhoon, we had no choice but to postpone our departure.',
              vi: 'Vì cơn bão, chúng tôi buộc phải hoãn khởi hành.'
            }
          }
        ]
      },
      {
        pattern: 'V／A(て形)＋ならない',
        title: {
          en: 'Cannot help feeling (extremely) (〜てならない)',
          vi: 'Cảm thấy ~ vô cùng (〜てならない)'
        },
        explanation: {
          en: 'Expresses an overwhelming feeling: "I can\'t help feeling ~", "~ to no end". Used with emotions and spontaneous sensations.',
          vi: 'Diễn đạt cảm xúc dâng trào: "không thể không thấy ~", "~ vô cùng". Dùng với cảm xúc và cảm giác tự nhiên.'
        },
        examples: [
          {
            jp: '彼の身が案じられてならない。',
            romaji: 'Kare no mi ga anjirarete naranai.',
            meaning: {
              en: "I can't help worrying about him.",
              vi: 'Tôi lo lắng cho anh ấy vô cùng.'
            }
          },
          {
            jp: '試合に負けたことが残念でならない。',
            romaji: 'Shiai ni maketa koto ga zannen de naranai.',
            meaning: {
              en: 'I am terribly sorry that we lost the match.',
              vi: 'Tôi tiếc nuối vô cùng vì đã thua trận.'
            }
          }
        ]
      },
      {
        pattern: 'A＋限りだ',
        title: { en: 'Extremely (emotion) (〜限りだ)', vi: 'Vô cùng (cảm xúc) (〜限りだ)' },
        explanation: {
          en: 'Attached to an emotion adjective to mean "extremely ~", "~ beyond words", expressing the speaker\'s own feeling.',
          vi: 'Gắn vào tính từ cảm xúc để diễn đạt "vô cùng ~", "~ không gì sánh được", thể hiện cảm xúc của chính người nói.'
        },
        examples: [
          {
            jp: '皆に祝ってもらえて、うれしい限りだ。',
            romaji: 'Mina ni iwatte moraete, ureshii kagiri da.',
            meaning: {
              en: 'I am extremely happy to be congratulated by everyone.',
              vi: 'Được mọi người chúc mừng, tôi vui mừng khôn xiết.'
            }
          },
          {
            jp: '一人で年を越すとは、心細い限りだ。',
            romaji: 'Hitori de toshi o kosu to wa, kokorobosoi kagiri da.',
            meaning: {
              en: 'Seeing in the New Year all alone, I feel utterly forlorn.',
              vi: 'Đón năm mới một mình, tôi cảm thấy cô đơn vô cùng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'News of the disaster', vi: 'Tin tức về thảm họa' },
        lines: [
          {
            jp: '被災地の映像を見て、誰もが同情を禁じ得なかった。',
            romaji: 'Hisaichi no eizō o mite, dare mo ga dōjō o kinjienakatta.',
            meaning: {
              en: 'Watching the footage of the disaster area, no one could suppress their sympathy.',
              vi: 'Xem những hình ảnh từ vùng thiên tai, không ai kìm được lòng thương cảm.'
            }
          },
          {
            jp: '遺族の悲しみを思うと、胸が痛んでならない。',
            romaji: 'Izoku no kanashimi o omou to, mune ga itande naranai.',
            meaning: {
              en: "When I think of the bereaved families' grief, my heart aches terribly.",
              vi: 'Nghĩ đến nỗi đau của các gia đình tang quyến, lòng tôi đau nhói khôn nguôi.'
            }
          },
          {
            jp: '対応の遅れには、憤りを覚えざるを得ない。',
            romaji: 'Taiō no okure ni wa, ikidōri o oboezaru o enai.',
            meaning: {
              en: 'I cannot help feeling indignant at the delay in the response.',
              vi: 'Trước sự chậm trễ trong ứng phó, tôi không thể không thấy phẫn nộ.'
            }
          },
          {
            jp: 'それでも支援が届き始めたのは、ありがたい限りだ。',
            romaji: 'Soredemo shien ga todoki hajimeta no wa, arigatai kagiri da.',
            meaning: {
              en: 'Even so, it is a tremendous relief that aid has begun to arrive.',
              vi: 'Dù vậy, việc cứu trợ bắt đầu đến nơi là điều đáng mừng vô cùng.'
            }
          },
          {
            jp: '一日も早い復興が待たれてならない。',
            romaji: 'Ichinichi mo hayai fukkō ga matarete naranai.',
            meaning: {
              en: 'I anxiously long for the earliest possible recovery.',
              vi: 'Tôi mong mỏi khôn nguôi công cuộc tái thiết đến sớm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did people react to the disaster footage?',
              vi: 'Mọi người phản ứng thế nào với hình ảnh thảm họa?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'They could not suppress sympathy',
                  vi: 'Không kìm được lòng thương cảm'
                }
              },
              { id: 'b', label: { en: 'They felt nothing', vi: 'Họ thấy dửng dưng' } },
              { id: 'c', label: { en: 'They were amused', vi: 'Họ thấy buồn cười' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer feel about the slow response?',
              vi: 'Người viết cảm thấy gì về sự ứng phó chậm trễ?'
            },
            choices: [
              { id: 'a', label: { en: 'Indignation', vi: 'Sự phẫn nộ' } },
              { id: 'b', label: { en: 'Joy', vi: 'Niềm vui' } },
              { id: 'c', label: { en: 'Indifference', vi: 'Sự thờ ơ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What does the writer say about aid arriving?',
              vi: 'Người viết nói gì về việc cứu trợ đến nơi?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It is a great relief', vi: 'Đó là điều đáng mừng vô cùng' }
              },
              { id: 'b', label: { en: 'It is unnecessary', vi: 'Đó là điều không cần thiết' } },
              { id: 'c', label: { en: 'It came too early', vi: 'Nó đến quá sớm' } }
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
      en: 'Cannot Get Away Without: 〜ずにはすまない',
      vi: 'Không thể không làm: 〜ずにはすまない'
    },
    focus: {
      en: 'Express an unavoidable social obligation with 〜ずにはすまない / 〜ないではすまない, plus 〜では済まされない, 〜ないわけにはいかない and 〜以上(は).',
      vi: 'Diễn đạt nghĩa vụ xã hội không thể tránh với 〜ずにはすまない / 〜ないではすまない, cùng 〜では済まされない, 〜ないわけにはいかない và 〜以上(は).'
    },
    vocab: [
      {
        kana: 'しゃざい',
        kanji: '謝罪',
        romaji: 'shazai',
        meaning: { en: 'apology', vi: 'lời xin lỗi' }
      },
      {
        kana: 'べんしょう',
        kanji: '弁償',
        romaji: 'benshō',
        meaning: { en: 'compensation (for damage)', vi: 'sự đền bù' }
      },
      {
        kana: 'ばいしょう',
        kanji: '賠償',
        romaji: 'baishō',
        meaning: { en: 'compensation, reparations', vi: 'sự bồi thường' }
      },
      {
        kana: 'つぐなう',
        kanji: '償う',
        romaji: 'tsugunau',
        meaning: { en: 'to atone, make amends', vi: 'chuộc lỗi, đền bù' }
      },
      {
        kana: 'しょぶん',
        kanji: '処分',
        romaji: 'shobun',
        meaning: { en: 'disciplinary action', vi: 'sự kỷ luật, xử lý' }
      },
      {
        kana: 'しゃくめい',
        kanji: '釈明',
        romaji: 'shakumei',
        meaning: { en: 'explanation, justification', vi: 'sự giải trình' }
      },
      {
        kana: 'せけん',
        kanji: '世間',
        romaji: 'seken',
        meaning: { en: 'society, the public', vi: 'dư luận, xã hội' }
      },
      {
        kana: 'まぬかれる',
        kanji: '免れる',
        romaji: 'manukareru',
        meaning: { en: 'to escape, to avoid', vi: 'thoát khỏi, tránh được' }
      },
      {
        kana: 'きゅうだん',
        kanji: '糾弾',
        romaji: 'kyūdan',
        meaning: { en: 'denunciation', vi: 'sự lên án' }
      },
      {
        kana: 'しんよう',
        kanji: '信用',
        romaji: "shin'yō",
        meaning: { en: 'trust, credit', vi: 'sự tín nhiệm' }
      },
      {
        kana: 'けっかん',
        kanji: '欠陥',
        romaji: 'kekkan',
        meaning: { en: 'defect, flaw', vi: 'khuyết tật, lỗi' }
      },
      {
        kana: 'せいじつ',
        kanji: '誠実',
        romaji: 'seijitsu',
        meaning: { en: 'sincere, honest', vi: 'chân thành' }
      }
    ],
    grammar: [
      {
        pattern: 'V(ない形)＋ずにはすまない／ないではすまない',
        title: {
          en: 'Cannot get away without doing (〜ずにはすまない)',
          vi: 'Không thể không làm (〜ずにはすまない)'
        },
        explanation: {
          en: 'Means "it won\'t be settled without ~", i.e. circumstances or social pressure make the action unavoidable. Attach to the ない-form (謝ら → 謝らずにはすまない); する becomes せずにはすまない.',
          vi: 'Nghĩa là "sẽ không xong nếu không ~", tức hoàn cảnh hoặc áp lực xã hội khiến hành động trở nên không thể tránh. Gắn vào thể ない (謝ら → 謝らずにはすまない); する thành せずにはすまない.'
        },
        examples: [
          {
            jp: 'これだけ迷惑をかけた以上、謝罪せずにはすまない。',
            romaji: 'Kore dake meiwaku o kaketa ijō, shazai sezu ni wa sumanai.',
            meaning: {
              en: "Having caused this much trouble, I can't get away without apologizing.",
              vi: 'Đã gây phiền hà đến mức này thì không thể không xin lỗi.'
            }
          },
          {
            jp: '壊した以上、弁償しないではすまないだろう。',
            romaji: 'Kowashita ijō, benshō shinai de wa sumanai darō.',
            meaning: {
              en: "Since I broke it, I surely won't get away without paying for it.",
              vi: 'Đã làm hỏng thì chắc chắn không thể không đền bù.'
            }
          }
        ]
      },
      {
        pattern: 'V／N＋では済まされない',
        title: {
          en: 'Will not be tolerated (〜では済まされない)',
          vi: 'Không thể bỏ qua (〜では済まされない)'
        },
        explanation: {
          en: 'A stronger, often passive-flavored variant: "~ will not be tolerated / cannot be excused". Society or others will not let it pass.',
          vi: 'Biến thể mạnh hơn, thường mang sắc thái bị động: "~ sẽ không được tha thứ / không thể bỏ qua". Xã hội hay người khác sẽ không cho qua.'
        },
        examples: [
          {
            jp: '知らなかったでは済まされない問題だ。',
            romaji: 'Shiranakatta de wa sumasarenai mondai da.',
            meaning: {
              en: 'This is a problem where saying "I did not know" simply will not be accepted.',
              vi: 'Đây là vấn đề mà nói "tôi không biết" thì không thể chấp nhận được.'
            }
          },
          {
            jp: '一度の失敗では済まされない事態になった。',
            romaji: 'Ichido no shippai de wa sumasarenai jitai ni natta.',
            meaning: {
              en: "It became a situation that couldn't be excused as a one-time mistake.",
              vi: 'Sự việc đã trở thành tình huống không thể chỉ coi là một lần sơ suất.'
            }
          }
        ]
      },
      {
        pattern: 'V(ない形)＋わけにはいかない',
        title: {
          en: 'Cannot not do it (〜ないわけにはいかない)',
          vi: 'Không thể không (〜ないわけにはいかない)'
        },
        explanation: {
          en: 'Means "cannot not do ~", i.e. one is obliged to act, often for social or moral reasons. Attach to the ない-form (行か → 行かないわけにはいかない).',
          vi: 'Nghĩa là "không thể không làm ~", tức buộc phải hành động, thường vì lý do xã hội hoặc đạo đức. Gắn vào thể ない (行か → 行かないわけにはいかない).'
        },
        examples: [
          {
            jp: '上司の命令だから、従わないわけにはいかない。',
            romaji: 'Jōshi no meirei da kara, shitagawanai wake ni wa ikanai.',
            meaning: {
              en: "Since it is the boss's order, I can't very well refuse to obey.",
              vi: 'Vì là mệnh lệnh của cấp trên, tôi không thể không tuân theo.'
            }
          },
          {
            jp: '世話になった人の頼みは、断らないわけにはいかない。',
            romaji: 'Sewa ni natta hito no tanomi wa, kotowaranai wake ni wa ikanai.',
            meaning: {
              en: "I can't refuse a request from someone I owe so much to.",
              vi: 'Lời nhờ vả của người đã giúp đỡ mình thì không thể từ chối.'
            }
          }
        ]
      },
      {
        pattern: 'V／A(普通形)＋以上(は)',
        title: { en: 'Now that / since (〜以上(は))', vi: 'Một khi đã / vì đã (〜以上(は))' },
        explanation: {
          en: 'Means "now that ~ / since ~", giving a premise that naturally leads to an obligation or firm conclusion. Attach to plain forms.',
          vi: 'Nghĩa là "một khi đã ~ / vì đã ~", nêu tiền đề dẫn đến nghĩa vụ hay kết luận dứt khoát. Gắn vào thể thường.'
        },
        examples: [
          {
            jp: '約束した以上、最後まで責任を持つべきだ。',
            romaji: 'Yakusoku shita ijō, saigo made sekinin o motsu beki da.',
            meaning: {
              en: 'Now that I have promised, I should take responsibility to the end.',
              vi: 'Một khi đã hứa, tôi phải có trách nhiệm đến cùng.'
            }
          },
          {
            jp: 'プロである以上、言い訳は許されない。',
            romaji: 'Puro de aru ijō, iiwake wa yurusarenai.',
            meaning: {
              en: 'As long as you are a professional, excuses are not allowed.',
              vi: 'Một khi đã là dân chuyên nghiệp thì không được phép biện bạch.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Taking responsibility', vi: 'Gánh lấy trách nhiệm' },
        lines: [
          {
            jp: '商品に欠陥があった以上、会社は賠償せずにはすまない。',
            romaji: 'Shōhin ni kekkan ga atta ijō, kaisha wa baishō sezu ni wa sumanai.',
            meaning: {
              en: "Since the product was defective, the company can't get away without paying compensation.",
              vi: 'Một khi sản phẩm có khuyết tật, công ty không thể không bồi thường.'
            }
          },
          {
            jp: '「知らなかった」では済まされない問題だと、世間は糾弾した。',
            romaji: '"Shiranakatta" de wa sumasarenai mondai da to, seken wa kyūdan shita.',
            meaning: {
              en: 'The public denounced it as a problem where saying "we did not know" would not be accepted.',
              vi: 'Dư luận lên án rằng đây là vấn đề mà nói "không biết" thì không thể chấp nhận.'
            }
          },
          {
            jp: '社長は記者会見で釈明しないわけにはいかなくなった。',
            romaji: 'Shachō wa kisha kaiken de shakumei shinai wake ni wa ikanaku natta.',
            meaning: {
              en: 'The president ended up having no choice but to explain himself at a press conference.',
              vi: 'Giám đốc rốt cuộc không thể không giải trình tại buổi họp báo.'
            }
          },
          {
            jp: '責任者は処分を免れず、自らの過ちを償うと述べた。',
            romaji: 'Sekininsha wa shobun o manukarezu, mizukara no ayamachi o tsugunau to nobeta.',
            meaning: {
              en: 'The person in charge did not escape disciplinary action and said he would atone for his mistake.',
              vi: 'Người phụ trách không thoát khỏi kỷ luật, và nói sẽ chuộc lại lỗi lầm của mình.'
            }
          },
          {
            jp: '信用を取り戻したい以上、誠実な対応を続けるしかない。',
            romaji: "Shin'yō o torimodoshitai ijō, seijitsu na taiō o tsuzukeru shika nai.",
            meaning: {
              en: 'Since they want to win back trust, they have no choice but to keep responding sincerely.',
              vi: 'Một khi muốn lấy lại niềm tin, họ chỉ còn cách tiếp tục ứng xử chân thành.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why must the company pay compensation?',
              vi: 'Vì sao công ty phải bồi thường?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Because the product was defective', vi: 'Vì sản phẩm có khuyết tật' }
              },
              { id: 'b', label: { en: 'Because sales were high', vi: 'Vì doanh số cao' } },
              { id: 'c', label: { en: 'Because the staff asked', vi: 'Vì nhân viên yêu cầu' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the public think of the excuse "we did not know"?',
              vi: 'Dư luận nghĩ gì về lời bào chữa "không biết"?'
            },
            choices: [
              { id: 'a', label: { en: 'It was acceptable', vi: 'Chấp nhận được' } },
              { id: 'b', label: { en: 'It would not be accepted', vi: 'Không thể chấp nhận' } },
              { id: 'c', label: { en: 'It was funny', vi: 'Buồn cười' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q3',
            question: {
              en: 'What did the person in charge say he would do?',
              vi: 'Người phụ trách nói sẽ làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Atone for his mistake', vi: 'Chuộc lại lỗi lầm' } },
              { id: 'b', label: { en: 'Quit the country', vi: 'Rời khỏi đất nước' } },
              { id: 'c', label: { en: 'Ignore the problem', vi: 'Phớt lờ vấn đề' } }
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
      en: 'Forced to / Compel: 〜を余儀なくされる',
      vi: 'Buộc phải / ép buộc: 〜を余儀なくされる'
    },
    focus: {
      en: 'Say circumstances force an action with 〜を余儀なくされる / 〜を余儀なくさせる, plus 〜に至る and 〜とあって.',
      vi: 'Nói hoàn cảnh buộc phải hành động với 〜を余儀なくされる / 〜を余儀なくさせる, cùng 〜に至る và 〜とあって.'
    },
    vocab: [
      {
        kana: 'ちゅうし',
        kanji: '中止',
        romaji: 'chūshi',
        meaning: { en: 'cancellation', vi: 'sự hủy bỏ' }
      },
      {
        kana: 'てったい',
        kanji: '撤退',
        romaji: 'tettai',
        meaning: { en: 'withdrawal, retreat', vi: 'sự rút lui' }
      },
      {
        kana: 'えんき',
        kanji: '延期',
        romaji: 'enki',
        meaning: { en: 'postponement', vi: 'sự hoãn lại' }
      },
      {
        kana: 'へいさ',
        kanji: '閉鎖',
        romaji: 'heisa',
        meaning: { en: 'closure', vi: 'sự đóng cửa' }
      },
      {
        kana: 'ひなん',
        kanji: '避難',
        romaji: 'hinan',
        meaning: { en: 'evacuation', vi: 'sự sơ tán' }
      },
      {
        kana: 'しゅくしょう',
        kanji: '縮小',
        romaji: 'shukushō',
        meaning: { en: 'reduction, downsizing', vi: 'sự thu hẹp' }
      },
      {
        kana: 'とうさん',
        kanji: '倒産',
        romaji: 'tōsan',
        meaning: { en: 'bankruptcy', vi: 'sự phá sản' }
      },
      {
        kana: 'へんこう',
        kanji: '変更',
        romaji: 'henkō',
        meaning: { en: 'change, alteration', vi: 'sự thay đổi' }
      },
      {
        kana: 'じたい',
        kanji: '事態',
        romaji: 'jitai',
        meaning: { en: 'situation, state of affairs', vi: 'tình hình' }
      },
      {
        kana: 'しんこく',
        kanji: '深刻',
        romaji: 'shinkoku',
        meaning: { en: 'serious, grave', vi: 'nghiêm trọng' }
      },
      {
        kana: 'えいきょう',
        kanji: '影響',
        romaji: 'eikyō',
        meaning: { en: 'influence, effect', vi: 'ảnh hưởng' }
      },
      {
        kana: 'ごうう',
        kanji: '豪雨',
        romaji: 'gōu',
        meaning: { en: 'heavy rain, downpour', vi: 'mưa lớn' }
      }
    ],
    grammar: [
      {
        pattern: 'N＋を余儀なくされる',
        title: {
          en: 'Be forced into (〜を余儀なくされる)',
          vi: 'Bị buộc phải (〜を余儀なくされる)'
        },
        explanation: {
          en: 'A formal expression: the subject is "forced into ~" by circumstances beyond their control. The noun is usually a negative outcome (中止, 撤退). The person or group affected is the subject.',
          vi: 'Cách diễn đạt trang trọng: chủ thể "bị buộc phải ~" do hoàn cảnh ngoài tầm kiểm soát. Danh từ thường là kết quả tiêu cực (中止, 撤退). Người hay nhóm chịu ảnh hưởng là chủ ngữ.'
        },
        examples: [
          {
            jp: '台風の影響で、イベントは中止を余儀なくされた。',
            romaji: 'Taifū no eikyō de, ibento wa chūshi o yoginaku sareta.',
            meaning: {
              en: 'Due to the typhoon, the event was forced to be cancelled.',
              vi: 'Do ảnh hưởng của bão, sự kiện buộc phải bị hủy.'
            }
          },
          {
            jp: '業績の悪化により、会社は事業の縮小を余儀なくされた。',
            romaji: 'Gyōseki no akka ni yori, kaisha wa jigyō no shukushō o yoginaku sareta.',
            meaning: {
              en: 'Because of worsening results, the company was forced to scale back its operations.',
              vi: 'Do thành tích sa sút, công ty buộc phải thu hẹp hoạt động kinh doanh.'
            }
          }
        ]
      },
      {
        pattern: 'N＋を余儀なくさせる',
        title: {
          en: 'Compel / force someone (〜を余儀なくさせる)',
          vi: 'Ép buộc ai đó (〜を余儀なくさせる)'
        },
        explanation: {
          en: 'The causative counterpart: a circumstance "compels / forces" someone into the action. Here the cause is the subject and the affected party is marked with に.',
          vi: 'Dạng sai khiến tương ứng: một hoàn cảnh "buộc / ép" ai đó vào hành động. Ở đây nguyên nhân là chủ ngữ, bên chịu ảnh hưởng được đánh dấu bằng に.'
        },
        examples: [
          {
            jp: '記録的な大雪が、住民に避難を余儀なくさせた。',
            romaji: 'Kirokuteki na ōyuki ga, jūmin ni hinan o yoginaku saseta.',
            meaning: {
              en: 'The record snowfall forced the residents to evacuate.',
              vi: 'Trận tuyết lớn kỷ lục đã buộc người dân phải đi sơ tán.'
            }
          },
          {
            jp: '深刻な不況が、多くの店に閉鎖を余儀なくさせた。',
            romaji: 'Shinkoku na fukyō ga, ōku no mise ni heisa o yoginaku saseta.',
            meaning: {
              en: 'The severe recession compelled many shops to close.',
              vi: 'Cuộc suy thoái nghiêm trọng đã buộc nhiều cửa hàng phải đóng cửa.'
            }
          }
        ]
      },
      {
        pattern: 'N／V(辞書形)＋に至る',
        title: { en: 'Reach the point of (〜に至る)', vi: 'Đi đến mức (〜に至る)' },
        explanation: {
          en: 'Means "reach the point / extent of ~", emphasizing the serious final stage that circumstances led to. Attach to a noun or dictionary-form verb.',
          vi: 'Nghĩa là "đi đến mức / dẫn đến ~", nhấn mạnh giai đoạn cuối nghiêm trọng mà hoàn cảnh dẫn tới. Gắn vào danh từ hoặc thể từ điển.'
        },
        examples: [
          {
            jp: '資金繰りが悪化し、ついに倒産に至った。',
            romaji: 'Shikinguri ga akka shi, tsui ni tōsan ni itatta.',
            meaning: {
              en: 'Its cash flow worsened and it finally reached bankruptcy.',
              vi: 'Dòng tiền xấu đi, và cuối cùng dẫn đến phá sản.'
            }
          },
          {
            jp: '対立が深まり、両者は決裂するに至った。',
            romaji: 'Tairitsu ga fukamari, ryōsha wa ketsuretsu suru ni itatta.',
            meaning: {
              en: 'The conflict deepened until the two sides reached a breakdown.',
              vi: 'Mâu thuẫn ngày càng sâu sắc, đến mức hai bên đi tới đổ vỡ.'
            }
          }
        ]
      },
      {
        pattern: 'N／V(普通形)＋とあって',
        title: {
          en: 'Because of the special situation (〜とあって)',
          vi: 'Vì hoàn cảnh đặc biệt (〜とあって)'
        },
        explanation: {
          en: 'Means "because of (the special circumstance) ~", explaining a reaction that naturally follows from a notable situation. Attach to plain forms or nouns.',
          vi: 'Nghĩa là "vì (hoàn cảnh đặc biệt) ~", giải thích một phản ứng tự nhiên xuất phát từ tình huống đáng chú ý. Gắn vào thể thường hoặc danh từ.'
        },
        examples: [
          {
            jp: '大型連休とあって、空港は大勢の人で混雑した。',
            romaji: 'Ōgata renkyū to atte, kūkō wa ōzei no hito de konzatsu shita.',
            meaning: {
              en: 'Being a long holiday, the airport was crowded with throngs of people.',
              vi: 'Vì là kỳ nghỉ dài, sân bay đông nghẹt người.'
            }
          },
          {
            jp: '深刻な事態とあって、政府は緊急の対応を迫られた。',
            romaji: 'Shinkoku na jitai to atte, seifu wa kinkyū no taiō o semarareta.',
            meaning: {
              en: 'Given the grave situation, the government was pressed for an emergency response.',
              vi: 'Vì tình hình nghiêm trọng, chính phủ bị buộc phải có biện pháp ứng phó khẩn cấp.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Forced to change course', vi: 'Buộc phải đổi hướng' },
        lines: [
          {
            jp: '記録的な豪雨により、町は大規模な避難を余儀なくされた。',
            romaji: 'Kirokuteki na gōu ni yori, machi wa daikibo na hinan o yoginaku sareta.',
            meaning: {
              en: 'Due to record rainfall, the town was forced into a large-scale evacuation.',
              vi: 'Do trận mưa lớn kỷ lục, thị trấn buộc phải sơ tán quy mô lớn.'
            }
          },
          {
            jp: '深刻な被害とあって、多くの店が一時閉鎖に追い込まれた。',
            romaji: 'Shinkoku na higai to atte, ōku no mise ga ichiji heisa ni oikomareta.',
            meaning: {
              en: 'Given the serious damage, many shops were driven to temporary closure.',
              vi: 'Vì thiệt hại nghiêm trọng, nhiều cửa hàng bị dồn vào cảnh đóng cửa tạm thời.'
            }
          },
          {
            jp: '売上の激減は、ある会社に倒産を余儀なくさせた。',
            romaji: 'Uriage no gekigen wa, aru kaisha ni tōsan o yoginaku saseta.',
            meaning: {
              en: 'The sharp drop in sales forced one company into bankruptcy.',
              vi: 'Doanh số sụt giảm mạnh đã buộc một công ty phải phá sản.'
            }
          },
          {
            jp: '復旧の遅れから、人々の不安はますます募るに至った。',
            romaji: 'Fukkyū no okure kara, hitobito no fuan wa masumasu tsunoru ni itatta.',
            meaning: {
              en: "Owing to the slow restoration, people's anxiety grew to ever greater heights.",
              vi: 'Vì việc khôi phục chậm trễ, nỗi bất an của người dân ngày càng dâng cao.'
            }
          },
          {
            jp: '行政は、計画の大幅な変更を余儀なくされている。',
            romaji: 'Gyōsei wa, keikaku no ōhaba na henkō o yoginaku sarete iru.',
            meaning: {
              en: 'The authorities are being forced to make major changes to their plans.',
              vi: 'Chính quyền đang buộc phải thay đổi kế hoạch một cách đáng kể.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the record rainfall force the town to do?',
              vi: 'Trận mưa kỷ lục buộc thị trấn phải làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Carry out a large-scale evacuation', vi: 'Sơ tán quy mô lớn' }
              },
              { id: 'b', label: { en: 'Hold a festival', vi: 'Tổ chức lễ hội' } },
              { id: 'c', label: { en: 'Expand its shops', vi: 'Mở rộng cửa hàng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened to one company because of falling sales?',
              vi: 'Một công ty ra sao vì doanh số giảm?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It was forced into bankruptcy', vi: 'Bị buộc phải phá sản' }
              },
              { id: 'b', label: { en: 'It doubled in size', vi: 'Tăng gấp đôi quy mô' } },
              { id: 'c', label: { en: 'It moved abroad', vi: 'Chuyển ra nước ngoài' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: "Why did people's anxiety keep growing?",
              vi: 'Vì sao nỗi bất an của người dân tiếp tục dâng cao?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Because restoration was slow', vi: 'Vì việc khôi phục chậm trễ' }
              },
              { id: 'b', label: { en: 'Because the rain stopped', vi: 'Vì mưa đã tạnh' } },
              { id: 'c', label: { en: 'Because shops reopened', vi: 'Vì cửa hàng mở lại' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
