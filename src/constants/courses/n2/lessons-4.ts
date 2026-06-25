import type { Lesson } from '@/constants/courses/types.ts';

export const n2LessonsD: Lesson[] = [
  {
    id: 'lesson-25',
    number: 25,
    title: {
      en: 'Based on: 〜に基づいて',
      vi: 'Dựa trên: 〜に基づいて'
    },
    focus: {
      en: 'State that something is done based on a rule, fact, or data with 〜に基づいて.',
      vi: 'Diễn đạt việc gì đó được thực hiện dựa trên quy tắc, sự thật hay dữ liệu với 〜に基づいて.'
    },
    vocab: [
      {
        kana: 'きそく',
        kanji: '規則',
        romaji: 'kisoku',
        meaning: { en: 'rule, regulation', vi: 'quy tắc' }
      },
      { kana: 'じじつ', kanji: '事実', romaji: 'jijitsu', meaning: { en: 'fact', vi: 'sự thật' } },
      {
        kana: 'ちょうさ',
        kanji: '調査',
        romaji: 'chōsa',
        meaning: { en: 'survey, investigation', vi: 'khảo sát, điều tra' }
      },
      {
        kana: 'けいけん',
        kanji: '経験',
        romaji: 'keiken',
        meaning: { en: 'experience', vi: 'kinh nghiệm' }
      },
      {
        kana: 'ほうりつ',
        kanji: '法律',
        romaji: 'hōritsu',
        meaning: { en: 'law', vi: 'pháp luật' }
      },
      { kana: 'けっか', kanji: '結果', romaji: 'kekka', meaning: { en: 'result', vi: 'kết quả' } },
      {
        kana: 'しりょう',
        kanji: '資料',
        romaji: 'shiryō',
        meaning: { en: 'materials, data', vi: 'tài liệu' }
      },
      {
        kana: 'はんだん',
        kanji: '判断',
        romaji: 'handan',
        meaning: { en: 'judgment, decision', vi: 'phán đoán' }
      },
      {
        kana: 'ほうこく',
        kanji: '報告',
        romaji: 'hōkoku',
        meaning: { en: 'report', vi: 'báo cáo' }
      },
      {
        kana: 'けつろん',
        kanji: '結論',
        romaji: 'ketsuron',
        meaning: { en: 'conclusion', vi: 'kết luận' }
      }
    ],
    grammar: [
      {
        pattern: 'N に基づいて',
        title: { en: 'Based on N', vi: 'Dựa trên N' },
        explanation: {
          en: '〜に基づいて means "based on / on the basis of" a standard, fact, rule, or data; the action follows from it.',
          vi: '〜に基づいて nghĩa "dựa trên / căn cứ vào" một chuẩn mực, sự thật, quy tắc hay dữ liệu; hành động dựa theo đó.'
        },
        examples: [
          {
            jp: '調査の結果に基づいて、新しい計画を立てた。',
            romaji: 'Chōsa no kekka ni motozuite, atarashii keikaku o tateta.',
            meaning: {
              en: 'Based on the survey results, we drew up a new plan.',
              vi: 'Dựa trên kết quả khảo sát, chúng tôi đã lập kế hoạch mới.'
            }
          },
          {
            jp: '事実に基づいて、正確に報告してください。',
            romaji: 'Jijitsu ni motozuite, seikaku ni hōkoku shite kudasai.',
            meaning: {
              en: 'Please report accurately, based on the facts.',
              vi: 'Hãy báo cáo chính xác dựa trên sự thật.'
            }
          }
        ]
      },
      {
        pattern: 'N に基づいた N / N に基づく N',
        title: { en: 'Based-on (modifying a noun)', vi: 'Bổ nghĩa danh từ' },
        explanation: {
          en: 'To modify a noun, use 〜に基づいた N or 〜に基づく N ("a ... that is based on ...").',
          vi: 'Để bổ nghĩa danh từ, dùng 〜に基づいた N hoặc 〜に基づく N ("... dựa trên ...").'
        },
        examples: [
          {
            jp: 'これはデータに基づいた結論です。',
            romaji: 'Kore wa dēta ni motozuita ketsuron desu.',
            meaning: {
              en: 'This is a conclusion based on data.',
              vi: 'Đây là kết luận dựa trên dữ liệu.'
            }
          },
          {
            jp: '規則に基づく処理が必要だ。',
            romaji: 'Kisoku ni motozuku shori ga hitsuyō da.',
            meaning: {
              en: 'Handling based on the rules is required.',
              vi: 'Cần xử lý dựa theo quy tắc.'
            }
          }
        ]
      },
      {
        pattern: 'N を基に(して)',
        title: { en: 'On the basis of (material)', vi: 'Lấy N làm cơ sở' },
        explanation: {
          en: '〜を基に(して) is similar, often used for source material a creation is built on.',
          vi: '〜を基に(して) tương tự, thường dùng cho chất liệu/nguồn mà một sản phẩm dựa vào.'
        },
        examples: [
          {
            jp: '自分の経験を基に、小説を書いた。',
            romaji: 'Jibun no keiken o moto ni, shōsetsu o kaita.',
            meaning: {
              en: 'I wrote a novel based on my own experience.',
              vi: 'Tôi đã viết tiểu thuyết dựa trên kinh nghiệm của mình.'
            }
          },
          {
            jp: 'この映画は事実を基にして作られた。',
            romaji: 'Kono eiga wa jijitsu o moto ni shite tsukurareta.',
            meaning: {
              en: 'This film was made based on facts.',
              vi: 'Bộ phim này được làm dựa trên sự thật.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A report based on data', vi: 'Bản báo cáo dựa trên dữ liệu' },
        lines: [
          {
            jp: '今回の報告書は、半年間の調査に基づいて作成された。',
            romaji: 'Konkai no hōkokusho wa, hantoshikan no chōsa ni motozuite sakusei sareta.',
            meaning: {
              en: 'This report was prepared based on six months of investigation.',
              vi: 'Bản báo cáo lần này được lập dựa trên cuộc khảo sát suốt nửa năm.'
            }
          },
          {
            jp: '担当者は、事実に基づいて結論を書くように言われた。',
            romaji: 'Tantōsha wa, jijitsu ni motozuite ketsuron o kaku yō ni iwareta.',
            meaning: {
              en: 'The person in charge was told to write the conclusion based on facts.',
              vi: 'Người phụ trách được dặn viết kết luận dựa trên sự thật.'
            }
          },
          {
            jp: '個人の印象ではなく、データに基づいた判断が求められている。',
            romaji: 'Kojin no inshō de wa naku, dēta ni motozuita handan ga motomerarete iru.',
            meaning: {
              en: 'What is required is judgment based on data, not personal impressions.',
              vi: 'Điều được yêu cầu là phán đoán dựa trên dữ liệu, chứ không phải cảm nhận cá nhân.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What was the report based on?', vi: 'Báo cáo dựa trên cái gì?' },
            choices: [
              {
                id: 'a',
                label: { en: 'Six months of investigation', vi: 'Cuộc khảo sát nửa năm' }
              },
              { id: 'b', label: { en: 'Personal impressions', vi: 'Cảm nhận cá nhân' } },
              { id: 'c', label: { en: 'A single interview', vi: 'Một buổi phỏng vấn' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What kind of judgment is required?',
              vi: 'Loại phán đoán nào được yêu cầu?'
            },
            choices: [
              { id: 'a', label: { en: 'Based on personal feeling', vi: 'Dựa trên cảm tính' } },
              { id: 'b', label: { en: 'Based on data', vi: 'Dựa trên dữ liệu' } },
              { id: 'c', label: { en: 'Based on rumor', vi: 'Dựa trên tin đồn' } }
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
      en: 'Along / in line with: 〜に沿って',
      vi: 'Dọc theo / theo đúng: 〜に沿って'
    },
    focus: {
      en: 'Say something follows along a line, plan, or set of guidelines with 〜に沿って.',
      vi: 'Diễn đạt việc gì đó đi dọc theo, hoặc tuân theo kế hoạch/hướng dẫn với 〜に沿って.'
    },
    vocab: [
      {
        kana: 'ほうしん',
        kanji: '方針',
        romaji: 'hōshin',
        meaning: { en: 'policy, course', vi: 'phương châm' }
      },
      {
        kana: 'けいかく',
        kanji: '計画',
        romaji: 'keikaku',
        meaning: { en: 'plan', vi: 'kế hoạch' }
      },
      {
        kana: 'きたい',
        kanji: '期待',
        romaji: 'kitai',
        meaning: { en: 'expectation', vi: 'kỳ vọng' }
      },
      { kana: 'かわ', kanji: '川', romaji: 'kawa', meaning: { en: 'river', vi: 'con sông' } },
      {
        kana: 'ながれ',
        kanji: '流れ',
        romaji: 'nagare',
        meaning: { en: 'flow, current', vi: 'dòng chảy' }
      },
      {
        kana: 'きぼう',
        kanji: '希望',
        romaji: 'kibō',
        meaning: { en: 'wish, hope', vi: 'nguyện vọng' }
      },
      {
        kana: 'しじ',
        kanji: '指示',
        romaji: 'shiji',
        meaning: { en: 'instruction', vi: 'chỉ thị' }
      },
      {
        kana: 'きじゅん',
        kanji: '基準',
        romaji: 'kijun',
        meaning: { en: 'standard, criteria', vi: 'tiêu chuẩn' }
      },
      {
        kana: 'てつづき',
        kanji: '手続き',
        romaji: 'tetsuzuki',
        meaning: { en: 'procedure', vi: 'thủ tục' }
      },
      {
        kana: 'すすめる',
        kanji: '進める',
        romaji: 'susumeru',
        meaning: { en: 'to proceed with', vi: 'tiến hành' }
      }
    ],
    grammar: [
      {
        pattern: 'N に沿って (physical)',
        title: { en: 'Along (a line/path)', vi: 'Dọc theo (đường/vật)' },
        explanation: {
          en: 'With a physical object, 〜に沿って means moving "along" it (a river, road, coast).',
          vi: 'Với vật thể, 〜に沿って nghĩa di chuyển "dọc theo" nó (sông, đường, bờ biển).'
        },
        examples: [
          {
            jp: '川に沿って、桜の木が並んでいる。',
            romaji: 'Kawa ni sotte, sakura no ki ga narande iru.',
            meaning: {
              en: 'Cherry trees are lined up along the river.',
              vi: 'Dọc theo con sông là hàng cây hoa anh đào.'
            }
          },
          {
            jp: 'この道に沿ってまっすぐ行ってください。',
            romaji: 'Kono michi ni sotte massugu itte kudasai.',
            meaning: {
              en: 'Please go straight along this road.',
              vi: 'Hãy đi thẳng dọc theo con đường này.'
            }
          }
        ]
      },
      {
        pattern: 'N に沿って (abstract)',
        title: { en: 'In line with (plan/policy)', vi: 'Theo đúng (kế hoạch)' },
        explanation: {
          en: 'With an abstract noun (plan, policy, wishes), 〜に沿って means acting "in line with / following" it.',
          vi: 'Với danh từ trừu tượng (kế hoạch, phương châm, nguyện vọng), 〜に沿って nghĩa "theo đúng / tuân theo".'
        },
        examples: [
          {
            jp: '会社の方針に沿って、仕事を進めている。',
            romaji: 'Kaisha no hōshin ni sotte, shigoto o susumete iru.',
            meaning: {
              en: 'I am carrying out the work in line with the company policy.',
              vi: 'Tôi đang tiến hành công việc theo đúng phương châm của công ty.'
            }
          },
          {
            jp: '皆様のご希望に沿って、計画を変更しました。',
            romaji: 'Minasama no go-kibō ni sotte, keikaku o henkō shimashita.',
            meaning: {
              en: 'We changed the plan in line with everyone\u2019s wishes.',
              vi: 'Chúng tôi đã thay đổi kế hoạch theo nguyện vọng của mọi người.'
            }
          }
        ]
      },
      {
        pattern: 'N に沿った N',
        title: { en: 'In line with (modifying a noun)', vi: 'Bổ nghĩa danh từ' },
        explanation: {
          en: 'Use 〜に沿った N to modify a noun: "a ... that conforms to ...".',
          vi: 'Dùng 〜に沿った N để bổ nghĩa danh từ: "... phù hợp với ...".'
        },
        examples: [
          {
            jp: '期待に沿った結果を出したい。',
            romaji: 'Kitai ni sotta kekka o dashitai.',
            meaning: {
              en: 'I want to produce results that live up to expectations.',
              vi: 'Tôi muốn tạo ra kết quả đúng như kỳ vọng.'
            }
          },
          {
            jp: '基準に沿った手続きを行う。',
            romaji: 'Kijun ni sotta tetsuzuki o okonau.',
            meaning: {
              en: 'We carry out procedures that conform to the standard.',
              vi: 'Chúng tôi thực hiện thủ tục theo đúng tiêu chuẩn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Following the manual', vi: 'Làm theo bản hướng dẫn' },
        lines: [
          {
            jp: '新人の田中さんは、マニュアルに沿って仕事を進めている。',
            romaji: 'Shinjin no Tanaka-san wa, manyuaru ni sotte shigoto o susumete iru.',
            meaning: {
              en: 'Tanaka, the new employee, is doing the work in line with the manual.',
              vi: 'Anh Tanaka lính mới đang làm việc theo đúng bản hướng dẫn.'
            }
          },
          {
            jp: '上司の指示に沿って進めれば、大きな失敗はないだろう。',
            romaji: 'Jōshi no shiji ni sotte susumereba, ōkina shippai wa nai darō.',
            meaning: {
              en: 'If he proceeds in line with his boss\u2019s instructions, there probably won\u2019t be any big mistakes.',
              vi: 'Nếu tiến hành theo chỉ thị của cấp trên thì chắc sẽ không có sai sót lớn.'
            }
          },
          {
            jp: 'ただ、お客様の希望に沿った提案もできるようになってほしい。',
            romaji: 'Tada, okyakusama no kibō ni sotta teian mo dekiru yō ni natte hoshii.',
            meaning: {
              en: 'Still, I hope he can also learn to make proposals in line with customers\u2019 wishes.',
              vi: 'Tuy nhiên, tôi mong anh ấy cũng biết đưa ra đề xuất phù hợp với nguyện vọng của khách.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'How is Tanaka doing his work?', vi: 'Anh Tanaka làm việc thế nào?' },
            choices: [
              { id: 'a', label: { en: 'In line with the manual', vi: 'Theo đúng bản hướng dẫn' } },
              { id: 'b', label: { en: 'However he likes', vi: 'Tùy ý thích' } },
              { id: 'c', label: { en: 'Without any plan', vi: 'Không có kế hoạch' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer hope Tanaka can also do?',
              vi: 'Người viết mong Tanaka còn làm được gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Ignore the customers', vi: 'Phớt lờ khách hàng' } },
              {
                id: 'b',
                label: {
                  en: 'Make proposals in line with customers\u2019 wishes',
                  vi: 'Đề xuất phù hợp nguyện vọng của khách'
                }
              },
              {
                id: 'c',
                label: { en: 'Work without instructions', vi: 'Làm việc không cần chỉ thị' }
              }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-27',
    number: 27,
    title: {
      en: 'Judging even from: 〜からして',
      vi: 'Chỉ nhìn vào ... đã: 〜からして'
    },
    focus: {
      en: 'Pick one telling example to judge the whole with 〜からして ("judging even from...").',
      vi: 'Lấy một ví dụ tiêu biểu để đánh giá tổng thể với 〜からして ("chỉ riêng ... đã").'
    },
    vocab: [
      {
        kana: 'たいど',
        kanji: '態度',
        romaji: 'taido',
        meaning: { en: 'attitude', vi: 'thái độ' }
      },
      {
        kana: 'みため',
        kanji: '見た目',
        romaji: 'mitame',
        meaning: { en: 'appearance', vi: 'vẻ ngoài' }
      },
      {
        kana: 'ふんいき',
        kanji: '雰囲気',
        romaji: 'fun\u2019iki',
        meaning: { en: 'atmosphere, vibe', vi: 'bầu không khí' }
      },
      { kana: 'ねだん', kanji: '値段', romaji: 'nedan', meaning: { en: 'price', vi: 'giá cả' } },
      {
        kana: 'だいいちいんしょう',
        kanji: '第一印象',
        romaji: 'daiichi-inshō',
        meaning: { en: 'first impression', vi: 'ấn tượng đầu' }
      },
      {
        kana: 'はなしかた',
        kanji: '話し方',
        romaji: 'hanashikata',
        meaning: { en: 'way of speaking', vi: 'cách nói' }
      },
      {
        kana: 'こうきゅう',
        kanji: '高級',
        romaji: 'kōkyū',
        meaning: { en: 'high-class, luxury', vi: 'cao cấp' }
      },
      {
        kana: 'はんせい',
        kanji: '反省',
        romaji: 'hansei',
        meaning: { en: 'reflection, remorse', vi: 'sự kiểm điểm' }
      },
      {
        kana: 'やるき',
        kanji: 'やる気',
        romaji: 'yaruki',
        meaning: { en: 'motivation', vi: 'tinh thần, động lực' }
      },
      {
        kana: 'ほんき',
        kanji: '本気',
        romaji: 'honki',
        meaning: { en: 'seriousness', vi: 'sự nghiêm túc' }
      }
    ],
    grammar: [
      {
        pattern: 'N からして (judging from)',
        title: { en: 'Judging from N', vi: 'Cứ nhìn N (mà) đoán' },
        explanation: {
          en: '〜からして picks one feature as evidence to judge the whole: "judging from N (alone)".',
          vi: '〜からして lấy một đặc điểm làm bằng chứng để đánh giá tổng thể: "cứ nhìn N (là biết)".'
        },
        examples: [
          {
            jp: 'あの態度からして、彼は全く反省していない。',
            romaji: 'Ano taido kara shite, kare wa mattaku hansei shite inai.',
            meaning: {
              en: 'Judging from that attitude, he is not reflecting on it at all.',
              vi: 'Cứ nhìn thái độ đó là biết anh ta chẳng hề hối lỗi.'
            }
          },
          {
            jp: '第一印象からして、いい人だと思った。',
            romaji: 'Daiichi-inshō kara shite, ii hito da to omotta.',
            meaning: {
              en: 'Judging from the first impression, I thought he was a good person.',
              vi: 'Chỉ qua ấn tượng đầu, tôi đã nghĩ anh ấy là người tốt.'
            }
          }
        ]
      },
      {
        pattern: 'N からして (even)',
        title: { en: 'Even (the most basic) N', vi: 'Đến cả N (cơ bản nhất)' },
        explanation: {
          en: '〜からして can also mean "even (the most basic example)", emphasizing one extreme case.',
          vi: '〜からして còn nghĩa "đến cả (ví dụ cơ bản nhất)", nhấn mạnh một trường hợp điển hình.'
        },
        examples: [
          {
            jp: 'この問題は、考え方からして間違っている。',
            romaji: 'Kono mondai wa, kangaekata kara shite machigatte iru.',
            meaning: {
              en: 'With this issue, even the very approach is wrong.',
              vi: 'Vấn đề này, ngay từ cách tư duy đã sai.'
            }
          },
          {
            jp: 'その店は雰囲気からして高級だ。',
            romaji: 'Sono mise wa fun\u2019iki kara shite kōkyū da.',
            meaning: {
              en: 'That shop is high-class, starting with its very atmosphere.',
              vi: 'Quán đó, chỉ riêng bầu không khí đã thấy cao cấp.'
            }
          }
        ]
      },
      {
        pattern: 'N からして〜ない',
        title: { en: 'Not even N', vi: 'Đến cả N cũng không' },
        explanation: {
          en: 'With a negative, 〜からして〜ない emphasizes "not even N", let alone the rest.',
          vi: 'Đi với phủ định, 〜からして〜ない nhấn mạnh "đến cả N cũng không", nói gì cái khác.'
        },
        examples: [
          {
            jp: '彼はやる気からして感じられない。',
            romaji: 'Kare wa yaruki kara shite kanjirarenai.',
            meaning: {
              en: 'You cannot even sense any motivation from him to begin with.',
              vi: 'Ở anh ta đến cả động lực cũng không cảm nhận được.'
            }
          },
          {
            jp: '名前からして知らないのだから、会ったことはないはずだ。',
            romaji: 'Namae kara shite shiranai no da kara, atta koto wa nai hazu da.',
            meaning: {
              en: 'Since I don\u2019t even know the name, I surely have never met them.',
              vi: 'Đến cả cái tên còn không biết thì chắc chắn chưa từng gặp.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A first impression', vi: 'Ấn tượng ban đầu' },
        lines: [
          {
            jp: '面接に来た学生は、あいさつの仕方からしてとても丁寧だった。',
            romaji:
              'Mensetsu ni kita gakusei wa, aisatsu no shikata kara shite totemo teinei datta.',
            meaning: {
              en: 'The student who came to the interview was very polite, starting with the way he greeted us.',
              vi: 'Cậu sinh viên đến phỏng vấn, chỉ riêng cách chào đã rất lễ phép.'
            }
          },
          {
            jp: '話し方からして、まじめな性格だとわかった。',
            romaji: 'Hanashikata kara shite, majime na seikaku da to wakatta.',
            meaning: {
              en: 'Judging from his way of speaking, I could tell he had a serious character.',
              vi: 'Cứ nghe cách nói là biết cậu ấy có tính cách nghiêm túc.'
            }
          },
          {
            jp: '一方、もう一人は態度からしてやる気が感じられなかった。',
            romaji: 'Ippō, mō hitori wa taido kara shite yaruki ga kanjirarenakatta.',
            meaning: {
              en: 'The other one, on the other hand, showed no motivation, judging even from his attitude.',
              vi: 'Mặt khác, người còn lại, chỉ nhìn thái độ đã không thấy chút động lực nào.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did the first student make a good impression?',
              vi: 'Vì sao sinh viên đầu tạo ấn tượng tốt?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'His polite greeting and way of speaking',
                  vi: 'Cách chào và cách nói lễ phép'
                }
              },
              { id: 'b', label: { en: 'His expensive clothes', vi: 'Quần áo đắt tiền' } },
              { id: 'c', label: { en: 'His high test score', vi: 'Điểm thi cao' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What was the problem with the other student?',
              vi: 'Người còn lại có vấn đề gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'No motivation could be sensed', vi: 'Không cảm nhận được động lực' }
              },
              { id: 'b', label: { en: 'He arrived late', vi: 'Đến muộn' } },
              { id: 'c', label: { en: 'He talked too much', vi: 'Nói quá nhiều' } }
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
      en: 'From the standpoint of: 〜からすると / 〜からいって',
      vi: 'Xét từ góc độ: 〜からすると / 〜からいって'
    },
    focus: {
      en: 'Give a judgment from a particular standpoint or piece of evidence with 〜からすると / 〜からいって.',
      vi: 'Đưa ra phán đoán từ một góc độ hay căn cứ nào đó với 〜からすると / 〜からいって.'
    },
    vocab: [
      {
        kana: 'たちば',
        kanji: '立場',
        romaji: 'tachiba',
        meaning: { en: 'standpoint, position', vi: 'lập trường' }
      },
      {
        kana: 'せんもんか',
        kanji: '専門家',
        romaji: 'senmonka',
        meaning: { en: 'expert', vi: 'chuyên gia' }
      },
      {
        kana: 'けいざい',
        kanji: '経済',
        romaji: 'keizai',
        meaning: { en: 'economy', vi: 'kinh tế' }
      },
      {
        kana: 'じょうきょう',
        kanji: '状況',
        romaji: 'jōkyō',
        meaning: { en: 'situation', vi: 'tình hình' }
      },
      {
        kana: 'じょうしき',
        kanji: '常識',
        romaji: 'jōshiki',
        meaning: { en: 'common sense', vi: 'lẽ thường' }
      },
      {
        kana: 'せいせき',
        kanji: '成績',
        romaji: 'seiseki',
        meaning: { en: 'grades, results', vi: 'thành tích' }
      },
      {
        kana: 'かのうせい',
        kanji: '可能性',
        romaji: 'kanōsei',
        meaning: { en: 'possibility', vi: 'khả năng' }
      },
      {
        kana: 'はんだん',
        kanji: '判断',
        romaji: 'handan',
        meaning: { en: 'judgment', vi: 'phán đoán' }
      },
      {
        kana: 'けいけん',
        kanji: '経験',
        romaji: 'keiken',
        meaning: { en: 'experience', vi: 'kinh nghiệm' }
      },
      {
        kana: 'よそく',
        kanji: '予測',
        romaji: 'yosoku',
        meaning: { en: 'prediction, forecast', vi: 'dự đoán' }
      }
    ],
    grammar: [
      {
        pattern: 'N からすると / からすれば',
        title: { en: 'From the standpoint of N', vi: 'Xét từ phía N' },
        explanation: {
          en: '〜からすると / 〜からすれば gives a judgment from a person\u2019s standpoint or from some evidence.',
          vi: '〜からすると / 〜からすれば đưa ra phán đoán từ lập trường của ai đó hoặc từ một căn cứ.'
        },
        examples: [
          {
            jp: '専門家からすると、この説明は不十分だ。',
            romaji: 'Senmonka kara suru to, kono setsumei wa fujūbun da.',
            meaning: {
              en: 'From an expert\u2019s standpoint, this explanation is insufficient.',
              vi: 'Xét từ góc độ chuyên gia, lời giải thích này chưa đủ.'
            }
          },
          {
            jp: '今の成績からすると、合格は難しいだろう。',
            romaji: 'Ima no seiseki kara suru to, gōkaku wa muzukashii darō.',
            meaning: {
              en: 'Judging from the current grades, passing will probably be difficult.',
              vi: 'Xét theo thành tích hiện tại, đỗ chắc sẽ khó.'
            }
          }
        ]
      },
      {
        pattern: 'N からいうと / からいって',
        title: { en: 'Speaking from / judging by N', vi: 'Nói theo / xét theo N' },
        explanation: {
          en: '〜からいうと / 〜からいって judges based on some criterion or aspect.',
          vi: '〜からいうと / 〜からいって đánh giá dựa trên một tiêu chí hay khía cạnh nào đó.'
        },
        examples: [
          {
            jp: '経済の状況からいって、すぐの回復は期待できない。',
            romaji: 'Keizai no jōkyō kara itte, sugu no kaifuku wa kitai dekinai.',
            meaning: {
              en: 'Judging by the economic situation, we cannot expect a quick recovery.',
              vi: 'Xét theo tình hình kinh tế, không thể kỳ vọng hồi phục ngay.'
            }
          },
          {
            jp: '常識からいって、その時間に電話するのは失礼だ。',
            romaji: 'Jōshiki kara itte, sono jikan ni denwa suru no wa shitsurei da.',
            meaning: {
              en: 'By common sense, calling at that hour is rude.',
              vi: 'Theo lẽ thường, gọi điện vào giờ đó là bất lịch sự.'
            }
          }
        ]
      },
      {
        pattern: 'N から見ると / から見れば',
        title: { en: 'Seen from N', vi: 'Nhìn từ N' },
        explanation: {
          en: '〜から見ると / 〜から見れば similarly means "seen from the viewpoint of N".',
          vi: '〜から見ると / 〜から見れば tương tự, nghĩa "nhìn từ quan điểm của N".'
        },
        examples: [
          {
            jp: '親から見れば、子供はいくつになっても子供だ。',
            romaji: 'Oya kara mireba, kodomo wa ikutsu ni natte mo kodomo da.',
            meaning: {
              en: 'From a parent\u2019s view, a child is a child no matter how old they get.',
              vi: 'Nhìn từ phía cha mẹ, con cái dù bao nhiêu tuổi vẫn là con.'
            }
          },
          {
            jp: '外国人から見ると、日本の習慣は不思議らしい。',
            romaji: 'Gaikokujin kara miru to, Nihon no shūkan wa fushigi rashii.',
            meaning: {
              en: 'Seen from foreigners\u2019 eyes, Japanese customs seem strange.',
              vi: 'Nhìn từ phía người nước ngoài, phong tục Nhật có vẻ kỳ lạ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Will the team win?', vi: 'Đội có thắng không?' },
        lines: [
          {
            jp: 'コーチからすると、今のチームの調子はあまり良くないそうだ。',
            romaji: 'Kōchi kara suru to, ima no chīmu no chōshi wa amari yokunai sō da.',
            meaning: {
              en: 'From the coach\u2019s standpoint, the team\u2019s current form is apparently not very good.',
              vi: 'Xét từ phía huấn luyện viên, phong độ hiện tại của đội nghe nói không tốt lắm.'
            }
          },
          {
            jp: 'これまでの成績からいって、次の試合に勝つのは簡単ではない。',
            romaji:
              'Kore made no seiseki kara itte, tsugi no shiai ni katsu no wa kantan de wa nai.',
            meaning: {
              en: 'Judging by the results so far, winning the next match will not be easy.',
              vi: 'Xét theo thành tích từ trước đến nay, thắng trận tới không hề dễ.'
            }
          },
          {
            jp: 'しかし、ファンから見れば、選手たちはまだ十分に強い。',
            romaji: 'Shikashi, fan kara mireba, senshu-tachi wa mada jūbun ni tsuyoi.',
            meaning: {
              en: 'However, from the fans\u2019 point of view, the players are still strong enough.',
              vi: 'Tuy nhiên, nhìn từ phía người hâm mộ, các cầu thủ vẫn đủ mạnh.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the coach think about the team\u2019s form?',
              vi: 'Huấn luyện viên nghĩ gì về phong độ của đội?'
            },
            choices: [
              { id: 'a', label: { en: 'It is not very good', vi: 'Không tốt lắm' } },
              { id: 'b', label: { en: 'It is the best ever', vi: 'Tốt nhất từ trước đến nay' } },
              { id: 'c', label: { en: 'It does not matter', vi: 'Không quan trọng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How do the fans see the players?',
              vi: 'Người hâm mộ nhìn nhận các cầu thủ ra sao?'
            },
            choices: [
              { id: 'a', label: { en: 'Still strong enough', vi: 'Vẫn đủ mạnh' } },
              { id: 'b', label: { en: 'Too weak to win', vi: 'Quá yếu để thắng' } },
              { id: 'c', label: { en: 'Ready to retire', vi: 'Sắp giải nghệ' } }
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
      en: 'For / to someone: 〜にとって',
      vi: 'Đối với ai đó: 〜にとって'
    },
    focus: {
      en: 'Express how something is, from a particular person\u2019s viewpoint, with 〜にとって.',
      vi: 'Diễn đạt việc gì đó ra sao, xét từ quan điểm của một người, với 〜にとって.'
    },
    vocab: [
      {
        kana: 'じゅうよう',
        kanji: '重要',
        romaji: 'jūyō',
        meaning: { en: 'important', vi: 'quan trọng' }
      },
      {
        kana: 'そんざい',
        kanji: '存在',
        romaji: 'sonzai',
        meaning: { en: 'existence, presence', vi: 'sự tồn tại' }
      },
      { kana: 'いみ', kanji: '意味', romaji: 'imi', meaning: { en: 'meaning', vi: 'ý nghĩa' } },
      {
        kana: 'たいせつ',
        kanji: '大切',
        romaji: 'taisetsu',
        meaning: { en: 'precious, important', vi: 'quý giá' }
      },
      {
        kana: 'ひつよう',
        kanji: '必要',
        romaji: 'hitsuyō',
        meaning: { en: 'necessary', vi: 'cần thiết' }
      },
      { kana: 'かち', kanji: '価値', romaji: 'kachi', meaning: { en: 'value', vi: 'giá trị' } },
      {
        kana: 'じんせい',
        kanji: '人生',
        romaji: 'jinsei',
        meaning: { en: '(one\u2019s) life', vi: 'cuộc đời' }
      },
      {
        kana: 'かぞく',
        kanji: '家族',
        romaji: 'kazoku',
        meaning: { en: 'family', vi: 'gia đình' }
      },
      {
        kana: 'しゃかい',
        kanji: '社会',
        romaji: 'shakai',
        meaning: { en: 'society', vi: 'xã hội' }
      },
      {
        kana: 'なくてはならない',
        romaji: 'nakute wa naranai',
        meaning: { en: 'indispensable', vi: 'không thể thiếu' }
      }
    ],
    grammar: [
      {
        pattern: 'N にとって(は)',
        title: { en: 'For / to N (viewpoint)', vi: 'Đối với N' },
        explanation: {
          en: '〜にとって(は) means "for / to (someone)", presenting how something is from their viewpoint.',
          vi: '〜にとって(は) nghĩa "đối với (ai đó)", nêu việc gì ra sao theo quan điểm của họ.'
        },
        examples: [
          {
            jp: '私にとって、家族は何より大切な存在だ。',
            romaji: 'Watashi ni totte, kazoku wa nani yori taisetsu na sonzai da.',
            meaning: {
              en: 'For me, my family is the most precious thing of all.',
              vi: 'Đối với tôi, gia đình là điều quý giá hơn tất cả.'
            }
          },
          {
            jp: '子供にとって、遊びは学びでもある。',
            romaji: 'Kodomo ni totte, asobi wa manabi de mo aru.',
            meaning: {
              en: 'For children, play is also learning.',
              vi: 'Đối với trẻ con, chơi cũng là học.'
            }
          }
        ]
      },
      {
        pattern: 'N にとって + 評価',
        title: { en: 'Evaluating for N', vi: 'Đánh giá đối với N' },
        explanation: {
          en: '〜にとって is often followed by an evaluation (difficult, necessary, important) for that person.',
          vi: '〜にとって thường đi với một đánh giá (khó, cần thiết, quan trọng) đối với người đó.'
        },
        examples: [
          {
            jp: '初心者にとって、この問題は少し難しい。',
            romaji: 'Shoshinsha ni totte, kono mondai wa sukoshi muzukashii.',
            meaning: {
              en: 'For a beginner, this problem is a little difficult.',
              vi: 'Đối với người mới, bài này hơi khó.'
            }
          },
          {
            jp: '水は人間にとってなくてはならないものだ。',
            romaji: 'Mizu wa ningen ni totte nakute wa naranai mono da.',
            meaning: {
              en: 'Water is indispensable to human beings.',
              vi: 'Nước là thứ không thể thiếu đối với con người.'
            }
          }
        ]
      },
      {
        pattern: 'N にとっての N',
        title: { en: 'For N (modifying a noun)', vi: 'Bổ nghĩa danh từ' },
        explanation: {
          en: 'Use 〜にとっての N to modify a noun: "the ... for N".',
          vi: 'Dùng 〜にとっての N để bổ nghĩa danh từ: "... đối với N".'
        },
        examples: [
          {
            jp: '彼にとっての幸せとは、静かに暮らすことだ。',
            romaji: 'Kare ni totte no shiawase to wa, shizuka ni kurasu koto da.',
            meaning: {
              en: 'Happiness for him means living quietly.',
              vi: 'Hạnh phúc đối với anh ấy là sống yên bình.'
            }
          },
          {
            jp: 'この発見は、社会にとっての大きな進歩だ。',
            romaji: 'Kono hakken wa, shakai ni totte no ōkina shinpo da.',
            meaning: {
              en: 'This discovery is a great step forward for society.',
              vi: 'Phát hiện này là một bước tiến lớn đối với xã hội.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'What the dog means to her', vi: 'Chú chó có ý nghĩa gì với cô ấy' },
        lines: [
          {
            jp: '一人暮らしの祖母にとって、犬は家族のような存在だ。',
            romaji: 'Hitorigurashi no sobo ni totte, inu wa kazoku no yō na sonzai da.',
            meaning: {
              en: 'For my grandmother, who lives alone, the dog is like family.',
              vi: 'Đối với bà tôi sống một mình, chú chó như là người thân.'
            }
          },
          {
            jp: '毎日の散歩は、祖母にとって良い運動にもなっている。',
            romaji: 'Mainichi no sanpo wa, sobo ni totte yoi undō ni mo natte iru.',
            meaning: {
              en: 'The daily walk has also become good exercise for her.',
              vi: 'Việc đi dạo mỗi ngày cũng trở thành bài vận động tốt cho bà.'
            }
          },
          {
            jp: '犬は祖母にとってなくてはならない存在になった。',
            romaji: 'Inu wa sobo ni totte nakute wa naranai sonzai ni natta.',
            meaning: {
              en: 'The dog has become indispensable to my grandmother.',
              vi: 'Chú chó đã trở thành điều không thể thiếu với bà tôi.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is the dog like for the grandmother?',
              vi: 'Chú chó như thế nào với bà?'
            },
            choices: [
              { id: 'a', label: { en: 'Like family', vi: 'Như người thân' } },
              { id: 'b', label: { en: 'Just a guard dog', vi: 'Chỉ là chó giữ nhà' } },
              { id: 'c', label: { en: 'A burden', vi: 'Một gánh nặng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What benefit does the daily walk bring her?',
              vi: 'Việc đi dạo mỗi ngày mang lại lợi ích gì cho bà?'
            },
            choices: [
              { id: 'a', label: { en: 'Good exercise', vi: 'Vận động tốt' } },
              { id: 'b', label: { en: 'Extra money', vi: 'Thêm tiền' } },
              { id: 'c', label: { en: 'New friends only', vi: 'Chỉ có bạn mới' } }
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
      en: 'In the role of: 〜として',
      vi: 'Với tư cách là: 〜として'
    },
    focus: {
      en: 'State the role, status, or category in which something acts, with 〜として.',
      vi: 'Nêu vai trò, tư cách hay phạm trù mà ai/cái gì đó đảm nhận, với 〜として.'
    },
    vocab: [
      {
        kana: 'だいひょう',
        kanji: '代表',
        romaji: 'daihyō',
        meaning: { en: 'representative', vi: 'đại diện' }
      },
      {
        kana: 'せきにんしゃ',
        kanji: '責任者',
        romaji: 'sekininsha',
        meaning: { en: 'person in charge', vi: 'người phụ trách' }
      },
      {
        kana: 'りゅうがくせい',
        kanji: '留学生',
        romaji: 'ryūgakusei',
        meaning: { en: 'foreign student', vi: 'du học sinh' }
      },
      {
        kana: 'やくわり',
        kanji: '役割',
        romaji: 'yakuwari',
        meaning: { en: 'role', vi: 'vai trò' }
      },
      {
        kana: 'しかく',
        kanji: '資格',
        romaji: 'shikaku',
        meaning: { en: 'qualification', vi: 'tư cách, chứng chỉ' }
      },
      {
        kana: 'ぎむ',
        kanji: '義務',
        romaji: 'gimu',
        meaning: { en: 'duty, obligation', vi: 'nghĩa vụ' }
      },
      {
        kana: 'きねん',
        kanji: '記念',
        romaji: 'kinen',
        meaning: { en: 'commemoration', vi: 'kỷ niệm' }
      },
      {
        kana: 'せんもん',
        kanji: '専門',
        romaji: 'senmon',
        meaning: { en: 'specialty', vi: 'chuyên môn' }
      },
      {
        kana: 'たちば',
        kanji: '立場',
        romaji: 'tachiba',
        meaning: { en: 'position, standpoint', vi: 'lập trường' }
      },
      {
        kana: 'さんか',
        kanji: '参加',
        romaji: 'sanka',
        meaning: { en: 'participation', vi: 'tham gia' }
      }
    ],
    grammar: [
      {
        pattern: 'N として',
        title: { en: 'As / in the role of N', vi: 'Với tư cách N' },
        explanation: {
          en: '〜として states the role, status, or category in which someone/something acts.',
          vi: '〜として nêu vai trò, tư cách hay phạm trù mà ai/cái gì đó hành động.'
        },
        examples: [
          {
            jp: '彼は会社の代表として会議に参加した。',
            romaji: 'Kare wa kaisha no daihyō to shite kaigi ni sanka shita.',
            meaning: {
              en: 'He attended the meeting as the company\u2019s representative.',
              vi: 'Anh ấy tham gia cuộc họp với tư cách đại diện công ty.'
            }
          },
          {
            jp: '今日は記念として写真を撮りましょう。',
            romaji: 'Kyō wa kinen to shite shashin o torimashō.',
            meaning: {
              en: 'Let\u2019s take a photo today as a memento.',
              vi: 'Hôm nay hãy chụp ảnh để làm kỷ niệm nhé.'
            }
          }
        ]
      },
      {
        pattern: 'N としては',
        title: { en: 'As for / speaking as N', vi: 'Về phía / với tư cách N thì' },
        explanation: {
          en: '〜としては adds contrast: "as for (this role/person), ...", often a personal opinion.',
          vi: '〜としては thêm sắc thái đối lập: "về phía (vai trò/người này) thì ...", thường là ý kiến cá nhân.'
        },
        examples: [
          {
            jp: '私としては、この計画に反対です。',
            romaji: 'Watashi to shite wa, kono keikaku ni hantai desu.',
            meaning: {
              en: 'As for me, I am against this plan.',
              vi: 'Về phía tôi thì tôi phản đối kế hoạch này.'
            }
          },
          {
            jp: '責任者としては、何も知らなかったとは言えない。',
            romaji: 'Sekininsha to shite wa, nani mo shiranakatta to wa ienai.',
            meaning: {
              en: 'As the person in charge, I cannot say I knew nothing.',
              vi: 'Với tư cách người phụ trách, tôi không thể nói là không biết gì.'
            }
          }
        ]
      },
      {
        pattern: 'N としての N',
        title: { en: 'As N (modifying a noun)', vi: 'Bổ nghĩa danh từ' },
        explanation: {
          en: 'Use 〜としての N to modify a noun: "the ... as (a role)".',
          vi: 'Dùng 〜としての N để bổ nghĩa danh từ: "... với tư cách (vai trò)".'
        },
        examples: [
          {
            jp: '教師としての責任を果たしたい。',
            romaji: 'Kyōshi to shite no sekinin o hatashitai.',
            meaning: {
              en: 'I want to fulfill my responsibility as a teacher.',
              vi: 'Tôi muốn làm tròn trách nhiệm với tư cách là giáo viên.'
            }
          },
          {
            jp: '留学生としての経験は、私の宝物だ。',
            romaji: 'Ryūgakusei to shite no keiken wa, watashi no takaramono da.',
            meaning: {
              en: 'My experience as a foreign student is my treasure.',
              vi: 'Trải nghiệm với tư cách du học sinh là báu vật của tôi.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'As a volunteer', vi: 'Với tư cách tình nguyện viên' },
        lines: [
          {
            jp: '大学生のとき、私はボランティアとして被災地を訪れた。',
            romaji: 'Daigakusei no toki, watashi wa borantia to shite hisaichi o otozureta.',
            meaning: {
              en: 'When I was a university student, I visited the disaster area as a volunteer.',
              vi: 'Hồi sinh viên, tôi đã đến vùng thiên tai với tư cách tình nguyện viên.'
            }
          },
          {
            jp: 'リーダーとして、十人のグループをまとめる役割を任された。',
            romaji: 'Rīdā to shite, jūnin no gurūpu o matomeru yakuwari o makasareta.',
            meaning: {
              en: 'As the leader, I was entrusted with the role of leading a group of ten.',
              vi: 'Với tư cách trưởng nhóm, tôi được giao vai trò dẫn dắt nhóm mười người.'
            }
          },
          {
            jp: '私としては大変だったが、今ではいい経験だったと思う。',
            romaji: 'Watashi to shite wa taihen datta ga, ima de wa ii keiken datta to omou.',
            meaning: {
              en: 'For me it was tough, but now I think it was a good experience.',
              vi: 'Về phía tôi thì rất vất vả, nhưng giờ tôi thấy đó là trải nghiệm tốt.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'In what capacity did the writer visit the disaster area?',
              vi: 'Người viết đến vùng thiên tai với tư cách gì?'
            },
            choices: [
              { id: 'a', label: { en: 'As a volunteer', vi: 'Tình nguyện viên' } },
              { id: 'b', label: { en: 'As a reporter', vi: 'Phóng viên' } },
              { id: 'c', label: { en: 'As a tourist', vi: 'Khách du lịch' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How does the writer feel about it now?',
              vi: 'Bây giờ người viết cảm thấy thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'It was a good experience', vi: 'Là một trải nghiệm tốt' } },
              { id: 'b', label: { en: 'It was a waste of time', vi: 'Phí thời gian' } },
              { id: 'c', label: { en: 'They regret it', vi: 'Hối hận' } }
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
      en: 'Not necessarily: 〜とは限らない',
      vi: 'Không hẳn là: 〜とは限らない'
    },
    focus: {
      en: 'Deny that something is always true with 〜とは限らない (often with 必ずしも).',
      vi: 'Phủ định rằng điều gì đó luôn đúng với 〜とは限らない (thường đi với 必ずしも).'
    },
    vocab: [
      {
        kana: 'かならずしも',
        kanji: '必ずしも',
        romaji: 'kanarazushimo',
        meaning: { en: 'not necessarily (with neg.)', vi: 'không nhất thiết' }
      },
      {
        kana: 'ただしい',
        kanji: '正しい',
        romaji: 'tadashii',
        meaning: { en: 'correct', vi: 'đúng đắn' }
      },
      { kana: 'あんぜん', kanji: '安全', romaji: 'anzen', meaning: { en: 'safe', vi: 'an toàn' } },
      {
        kana: 'ゆうめい',
        kanji: '有名',
        romaji: 'yūmei',
        meaning: { en: 'famous', vi: 'nổi tiếng' }
      },
      {
        kana: 'せいこう',
        kanji: '成功',
        romaji: 'seikō',
        meaning: { en: 'success', vi: 'thành công' }
      },
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'nỗ lực' }
      },
      {
        kana: 'れいがい',
        kanji: '例外',
        romaji: 'reigai',
        meaning: { en: 'exception', vi: 'ngoại lệ' }
      },
      {
        kana: 'けんこう',
        kanji: '健康',
        romaji: 'kenkō',
        meaning: { en: 'health', vi: 'sức khỏe' }
      },
      { kana: 'たかい', kanji: '高い', romaji: 'takai', meaning: { en: 'expensive', vi: 'đắt' } },
      {
        kana: 'しあわせ',
        kanji: '幸せ',
        romaji: 'shiawase',
        meaning: { en: 'happiness', vi: 'hạnh phúc' }
      }
    ],
    grammar: [
      {
        pattern: '〜とは限らない',
        title: { en: 'Not necessarily / not always', vi: 'Không hẳn / không phải lúc nào cũng' },
        explanation: {
          en: '〜とは限らない denies that something is always the case: "it is not necessarily that...".',
          vi: '〜とは限らない phủ định việc điều gì đó luôn đúng: "không hẳn là ...".'
        },
        examples: [
          {
            jp: '高い物がいいとは限らない。',
            romaji: 'Takai mono ga ii to wa kagiranai.',
            meaning: {
              en: 'Expensive things are not necessarily good.',
              vi: 'Đồ đắt không hẳn là tốt.'
            }
          },
          {
            jp: '有名な店がおいしいとは限らない。',
            romaji: 'Yūmei na mise ga oishii to wa kagiranai.',
            meaning: {
              en: 'A famous restaurant is not necessarily delicious.',
              vi: 'Quán nổi tiếng không hẳn là ngon.'
            }
          }
        ]
      },
      {
        pattern: '必ずしも〜とは限らない',
        title: { en: 'Not necessarily (emphatic)', vi: 'Không nhất thiết ... (nhấn mạnh)' },
        explanation: {
          en: 'Pairing with 必ずしも strengthens the meaning: "not necessarily always...".',
          vi: 'Kết hợp với 必ずしも làm mạnh thêm: "không nhất thiết lúc nào cũng ...".'
        },
        examples: [
          {
            jp: '努力すれば必ずしも成功するとは限らない。',
            romaji: 'Doryoku sureba kanarazushimo seikō suru to wa kagiranai.',
            meaning: {
              en: 'Making an effort does not necessarily mean you will succeed.',
              vi: 'Nỗ lực không nhất thiết là sẽ thành công.'
            }
          },
          {
            jp: 'お金があれば必ずしも幸せだとは限らない。',
            romaji: 'Okane ga areba kanarazushimo shiawase da to wa kagiranai.',
            meaning: {
              en: 'Having money does not necessarily make you happy.',
              vi: 'Có tiền không nhất thiết là hạnh phúc.'
            }
          }
        ]
      },
      {
        pattern: '〜ないとも限らない',
        title: { en: 'You never know (it might)', vi: 'Cũng không chắc là không' },
        explanation: {
          en: '〜ないとも限らない means "you can\u2019t say it won\u2019t...", i.e. there is a chance it will.',
          vi: '〜ないとも限らない nghĩa "cũng không chắc là không ...", tức vẫn có khả năng xảy ra.'
        },
        examples: [
          {
            jp: '空が暗いから、雨が降らないとも限らない。',
            romaji: 'Sora ga kurai kara, ame ga furanai to mo kagiranai.',
            meaning: {
              en: 'The sky is dark, so it might just rain.',
              vi: 'Trời tối nên cũng không chắc là sẽ không mưa.'
            }
          },
          {
            jp: '危険がないとも限らないので、注意してください。',
            romaji: 'Kiken ga nai to mo kagiranai node, chūi shite kudasai.',
            meaning: {
              en: 'There could well be danger, so please be careful.',
              vi: 'Không chắc là không có nguy hiểm, nên hãy cẩn thận.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Is famous always good?', vi: 'Nổi tiếng có luôn tốt không?' },
        lines: [
          {
            jp: '多くの人は、有名な大学に入れば成功すると考えている。',
            romaji: 'Ōku no hito wa, yūmei na daigaku ni haireba seikō suru to kangaete iru.',
            meaning: {
              en: 'Many people think that if you get into a famous university, you will succeed.',
              vi: 'Nhiều người nghĩ rằng cứ vào đại học nổi tiếng là sẽ thành công.'
            }
          },
          {
            jp: 'しかし、いい大学を出たからといって、必ずしも幸せになるとは限らない。',
            romaji:
              'Shikashi, ii daigaku o deta kara to itte, kanarazushimo shiawase ni naru to wa kagiranai.',
            meaning: {
              en: 'However, just because you graduate from a good university does not necessarily mean you will be happy.',
              vi: 'Tuy nhiên, tốt nghiệp trường tốt không nhất thiết là sẽ hạnh phúc.'
            }
          },
          {
            jp: '大切なのは、自分に合った道を選ぶことだ。',
            romaji: 'Taisetsu na no wa, jibun ni atta michi o erabu koto da.',
            meaning: {
              en: 'What matters is choosing a path that suits you.',
              vi: 'Điều quan trọng là chọn con đường hợp với bản thân.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What do many people believe?', vi: 'Nhiều người tin điều gì?' },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'A famous university leads to success',
                  vi: 'Đại học nổi tiếng dẫn đến thành công'
                }
              },
              { id: 'b', label: { en: 'University is useless', vi: 'Đại học vô dụng' } },
              { id: 'c', label: { en: 'Money is everything', vi: 'Tiền là tất cả' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer say really matters?',
              vi: 'Người viết nói điều gì mới thực sự quan trọng?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Choosing a path that suits you', vi: 'Chọn con đường hợp bản thân' }
              },
              { id: 'b', label: { en: 'Going to a famous school', vi: 'Vào trường nổi tiếng' } },
              { id: 'c', label: { en: 'Earning a lot of money', vi: 'Kiếm thật nhiều tiền' } }
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
      en: 'There is something ...: 〜ものがある',
      vi: 'Có điều gì đó ...: 〜ものがある'
    },
    focus: {
      en: 'Express a strong, felt impression with 〜ものがある ("there really is something ...").',
      vi: 'Diễn đạt ấn tượng mạnh, cảm nhận được với 〜ものがある ("quả thật có điều gì đó ...").'
    },
    vocab: [
      {
        kana: 'かんどう',
        kanji: '感動',
        romaji: 'kandō',
        meaning: { en: 'being moved, emotion', vi: 'sự cảm động' }
      },
      {
        kana: 'みりょく',
        kanji: '魅力',
        romaji: 'miryoku',
        meaning: { en: 'charm, appeal', vi: 'sức hút' }
      },
      {
        kana: 'はくりょく',
        kanji: '迫力',
        romaji: 'hakuryoku',
        meaning: { en: 'force, impact', vi: 'sự cuốn hút mạnh mẽ' }
      },
      {
        kana: 'せっとくりょく',
        kanji: '説得力',
        romaji: 'settokuryoku',
        meaning: { en: 'persuasiveness', vi: 'sức thuyết phục' }
      },
      {
        kana: 'うったえる',
        kanji: '訴える',
        romaji: 'uttaeru',
        meaning: { en: 'to appeal to', vi: 'lay động, kêu gọi' }
      },
      { kana: 'ふかい', kanji: '深い', romaji: 'fukai', meaning: { en: 'deep', vi: 'sâu sắc' } },
      {
        kana: 'ひびく',
        kanji: '響く',
        romaji: 'hibiku',
        meaning: { en: 'to resonate', vi: 'vang vọng, lay động' }
      },
      {
        kana: 'えんぎ',
        kanji: '演技',
        romaji: 'engi',
        meaning: { en: 'acting, performance', vi: 'diễn xuất' }
      },
      {
        kana: 'さくひん',
        kanji: '作品',
        romaji: 'sakuhin',
        meaning: { en: 'work (of art)', vi: 'tác phẩm' }
      },
      {
        kana: 'こころ',
        kanji: '心',
        romaji: 'kokoro',
        meaning: { en: 'heart, mind', vi: 'trái tim, tâm hồn' }
      }
    ],
    grammar: [
      {
        pattern: '〜ものがある',
        title: { en: 'There is (truly) something ...', vi: 'Quả thật có điều gì đó ...' },
        explanation: {
          en: '〜ものがある expresses a strong felt impression: "there really is something ... about it".',
          vi: '〜ものがある diễn đạt ấn tượng mạnh, cảm nhận được: "quả thật có điều gì đó ... ở nó".'
        },
        examples: [
          {
            jp: '彼の歌には、人の心に訴えるものがある。',
            romaji: 'Kare no uta ni wa, hito no kokoro ni uttaeru mono ga aru.',
            meaning: {
              en: 'His singing really has something that appeals to people\u2019s hearts.',
              vi: 'Tiếng hát của anh ấy quả thật có gì đó lay động lòng người.'
            }
          },
          {
            jp: 'あの選手の練習量は、すさまじいものがある。',
            romaji: 'Ano senshu no renshūryō wa, susamajii mono ga aru.',
            meaning: {
              en: 'That athlete\u2019s amount of practice is truly tremendous.',
              vi: 'Khối lượng luyện tập của vận động viên đó quả là khủng khiếp.'
            }
          }
        ]
      },
      {
        pattern: '〜には〜ものがある',
        title: { en: 'About X there is something ...', vi: 'Ở X có điều gì đó ...' },
        explanation: {
          en: 'Often "X には ... ものがある" highlights what it is about X that impresses.',
          vi: 'Thường dùng "X には ... ものがある" để nêu điều gì ở X gây ấn tượng.'
        },
        examples: [
          {
            jp: 'この映画の演技には、感動させるものがある。',
            romaji: 'Kono eiga no engi ni wa, kandō saseru mono ga aru.',
            meaning: {
              en: 'The acting in this film has something genuinely moving.',
              vi: 'Diễn xuất trong phim này có điều gì đó thật cảm động.'
            }
          },
          {
            jp: '彼女の言葉には、深く考えさせるものがあった。',
            romaji: 'Kanojo no kotoba ni wa, fukaku kangaesaseru mono ga atta.',
            meaning: {
              en: 'Her words had something that made me think deeply.',
              vi: 'Lời cô ấy có điều gì đó khiến tôi phải suy nghĩ sâu sắc.'
            }
          }
        ]
      },
      {
        pattern: '〜ところがある',
        title: { en: 'There is an aspect that ...', vi: 'Có khía cạnh ...' },
        explanation: {
          en: 'The related 〜ところがある points out a particular trait or aspect of someone/something.',
          vi: 'Cấu trúc liên quan 〜ところがある nêu một nét/khía cạnh của ai/cái gì đó.'
        },
        examples: [
          {
            jp: '彼にはどこか人を引きつけるところがある。',
            romaji: 'Kare ni wa dokoka hito o hikitsukeru tokoro ga aru.',
            meaning: {
              en: 'There is something about him that draws people in.',
              vi: 'Ở anh ấy có điều gì đó thu hút mọi người.'
            }
          },
          {
            jp: 'この作品には、見る人を考えさせるところがある。',
            romaji: 'Kono sakuhin ni wa, miru hito o kangaesaseru tokoro ga aru.',
            meaning: {
              en: 'This work has an aspect that makes the viewer think.',
              vi: 'Tác phẩm này có khía cạnh khiến người xem phải suy ngẫm.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A moving performance', vi: 'Một màn trình diễn lay động' },
        lines: [
          {
            jp: '昨夜見た舞台には、本当に心を打つものがあった。',
            romaji: 'Sakuya mita butai ni wa, hontō ni kokoro o utsu mono ga atta.',
            meaning: {
              en: 'The stage performance I saw last night truly had something that struck the heart.',
              vi: 'Vở kịch tôi xem tối qua quả thật có điều gì đó chạm đến trái tim.'
            }
          },
          {
            jp: '主役の演技には迫力があり、観客を引き込む魅力があった。',
            romaji: 'Shuyaku no engi ni wa hakuryoku ga ari, kankyaku o hikikomu miryoku ga atta.',
            meaning: {
              en: 'The lead\u2019s acting had power and a charm that drew the audience in.',
              vi: 'Diễn xuất của vai chính đầy sức nặng và có sức hút lôi cuốn khán giả.'
            }
          },
          {
            jp: '言葉の一つ一つに、見る人を深く考えさせるものがあった。',
            romaji: 'Kotoba no hitotsu hitotsu ni, miru hito o fukaku kangaesaseru mono ga atta.',
            meaning: {
              en: 'Each and every word had something that made the viewer think deeply.',
              vi: 'Từng lời thoại có điều gì đó khiến người xem phải suy ngẫm sâu sắc.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the writer feel about the stage performance?',
              vi: 'Người viết cảm nhận thế nào về vở kịch?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It truly struck the heart', vi: 'Thật sự chạm đến trái tim' }
              },
              { id: 'b', label: { en: 'It was boring', vi: 'Nhàm chán' } },
              { id: 'c', label: { en: 'It was too long', vi: 'Quá dài' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is said about the lead\u2019s acting?',
              vi: 'Diễn xuất của vai chính được nói thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'It had power and charm', vi: 'Đầy sức nặng và sức hút' } },
              { id: 'b', label: { en: 'It was stiff and dull', vi: 'Cứng nhắc và nhạt' } },
              { id: 'c', label: { en: 'It was hard to hear', vi: 'Khó nghe' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
