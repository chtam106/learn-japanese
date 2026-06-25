import type { Lesson } from '@/constants/courses/types.ts';

export const n2LessonsC: Lesson[] = [
  {
    id: 'lesson-17',
    number: 17,
    title: {
      en: 'Responding to needs (〜に応じて)',
      vi: 'Đáp ứng nhu cầu (〜に応じて)'
    },
    focus: {
      en: 'Express "in accordance with / depending on" with 〜に応じて and related conditional patterns.',
      vi: 'Diễn đạt "tùy theo / tùy vào" với 〜に応じて và các mẫu điều kiện liên quan.'
    },
    vocab: [
      {
        kana: 'おうじる',
        kanji: '応じる',
        romaji: 'ōjiru',
        meaning: { en: 'to respond, to comply', vi: 'đáp ứng, hưởng ứng' }
      },
      {
        kana: 'じゅよう',
        kanji: '需要',
        romaji: 'juyō',
        meaning: { en: 'demand', vi: 'nhu cầu' }
      },
      {
        kana: 'じょうきょう',
        kanji: '状況',
        romaji: 'jōkyō',
        meaning: { en: 'situation, circumstances', vi: 'tình huống, hoàn cảnh' }
      },
      {
        kana: 'たいおう',
        kanji: '対応',
        romaji: 'taiō',
        meaning: { en: 'handling, response', vi: 'sự ứng phó, đối ứng' }
      },
      {
        kana: 'じゅうなん',
        kanji: '柔軟',
        romaji: 'jūnan',
        meaning: { en: 'flexible', vi: 'linh hoạt' }
      },
      {
        kana: 'じょうけん',
        kanji: '条件',
        romaji: 'jōken',
        meaning: { en: 'condition, terms', vi: 'điều kiện' }
      },
      {
        kana: 'ていきょう',
        kanji: '提供',
        romaji: 'teikyō',
        meaning: { en: 'provision, offering', vi: 'sự cung cấp' }
      },
      {
        kana: 'こべつ',
        kanji: '個別',
        romaji: 'kobetsu',
        meaning: { en: 'individual, case-by-case', vi: 'riêng lẻ, cá biệt' }
      },
      {
        kana: 'きゅうりょう',
        kanji: '給料',
        romaji: 'kyūryō',
        meaning: { en: 'salary', vi: 'tiền lương' }
      },
      {
        kana: 'のうりょく',
        kanji: '能力',
        romaji: 'nōryoku',
        meaning: { en: 'ability', vi: 'năng lực' }
      },
      {
        kana: 'へんか',
        kanji: '変化',
        romaji: 'henka',
        meaning: { en: 'change', vi: 'sự thay đổi' }
      },
      {
        kana: 'ようきゅう',
        kanji: '要求',
        romaji: 'yōkyū',
        meaning: { en: 'demand, request', vi: 'yêu cầu' }
      }
    ],
    grammar: [
      {
        pattern: 'N に応じて',
        title: {
          en: 'In accordance with / depending on',
          vi: 'Tùy theo / tùy vào'
        },
        explanation: {
          en: 'Attach 〜に応じて to a noun to say that something changes or is decided in accordance with it. Often used for demand, conditions, or situations.',
          vi: 'Gắn 〜に応じて vào danh từ để nói điều gì đó thay đổi hoặc được quyết định tùy theo nó. Thường dùng với nhu cầu, điều kiện, hoàn cảnh.'
        },
        examples: [
          {
            jp: 'お客様のご要望に応じて、サービスを変更いたします。',
            romaji: 'Okyakusama no goyōbō ni ōjite, sābisu o henkō itashimasu.',
            meaning: {
              en: 'We change our service in accordance with the customer\u2019s requests.',
              vi: 'Chúng tôi thay đổi dịch vụ tùy theo yêu cầu của khách hàng.'
            }
          },
          {
            jp: '収入に応じて税金が決まる。',
            romaji: 'Shūnyū ni ōjite zeikin ga kimaru.',
            meaning: {
              en: 'Taxes are determined according to income.',
              vi: 'Thuế được quyết định tùy theo thu nhập.'
            }
          }
        ]
      },
      {
        pattern: 'N に応じた N',
        title: {
          en: 'Noun suited to / matching',
          vi: 'Danh từ phù hợp với'
        },
        explanation: {
          en: 'Use 〜に応じた before a noun to describe something tailored to or matching the first noun.',
          vi: 'Dùng 〜に応じた trước danh từ để mô tả thứ gì đó được điều chỉnh cho phù hợp với danh từ đứng trước.'
        },
        examples: [
          {
            jp: '年齢に応じた教育が必要だ。',
            romaji: 'Nenrei ni ōjita kyōiku ga hitsuyō da.',
            meaning: {
              en: 'Education suited to one\u2019s age is necessary.',
              vi: 'Cần có nền giáo dục phù hợp với độ tuổi.'
            }
          },
          {
            jp: '状況に応じた対応をする。',
            romaji: 'Jōkyō ni ōjita taiō o suru.',
            meaning: {
              en: 'We respond in a way appropriate to the situation.',
              vi: 'Ứng phó theo cách phù hợp với tình huống.'
            }
          }
        ]
      },
      {
        pattern: 'N 次第で',
        title: {
          en: 'Depending on',
          vi: 'Tùy thuộc vào'
        },
        explanation: {
          en: '〜次第で means the result depends entirely on the preceding noun. 〜次第だ at the end of a sentence means "it depends on".',
          vi: '〜次第で nghĩa là kết quả phụ thuộc hoàn toàn vào danh từ phía trước. 〜次第だ ở cuối câu nghĩa là "tùy vào".'
        },
        examples: [
          {
            jp: '努力次第で結果は変わる。',
            romaji: 'Doryoku shidai de kekka wa kawaru.',
            meaning: {
              en: 'Results change depending on your effort.',
              vi: 'Kết quả thay đổi tùy vào nỗ lực.'
            }
          },
          {
            jp: '天気次第で予定を決めます。',
            romaji: 'Tenki shidai de yotei o kimemasu.',
            meaning: {
              en: 'I will decide my plans depending on the weather.',
              vi: 'Tôi sẽ quyết định kế hoạch tùy vào thời tiết.'
            }
          }
        ]
      },
      {
        pattern: 'N によっては',
        title: {
          en: 'Depending on the case',
          vi: 'Tùy trường hợp'
        },
        explanation: {
          en: '〜によっては highlights that in some cases (depending on the noun) the result may differ.',
          vi: '〜によっては nhấn mạnh rằng trong một số trường hợp (tùy theo danh từ) kết quả có thể khác.'
        },
        examples: [
          {
            jp: '場合によっては中止になる。',
            romaji: 'Bāi ni yotte wa chūshi ni naru.',
            meaning: {
              en: 'Depending on the case, it may be cancelled.',
              vi: 'Tùy trường hợp, có thể bị hủy.'
            }
          },
          {
            jp: '人によっては意見が違う。',
            romaji: 'Hito ni yotte wa iken ga chigau.',
            meaning: {
              en: 'Opinions differ depending on the person.',
              vi: 'Tùy người mà ý kiến khác nhau.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'A flexible company',
          vi: 'Một công ty linh hoạt'
        },
        lines: [
          {
            jp: 'ある会社では、お客様の需要に応じてサービスを変えている。',
            romaji: 'Aru kaisha de wa, okyakusama no juyō ni ōjite sābisu o kaete iru.',
            meaning: {
              en: 'At a certain company, they change their service according to customer demand.',
              vi: 'Ở một công ty nọ, họ thay đổi dịch vụ tùy theo nhu cầu của khách hàng.'
            }
          },
          {
            jp: '例えば、個別の条件に応じた料金プランを提供している。',
            romaji: 'Tatoeba, kobetsu no jōken ni ōjita ryōkin puran o teikyō shite iru.',
            meaning: {
              en: 'For example, they offer pricing plans tailored to individual conditions.',
              vi: 'Ví dụ, họ cung cấp các gói giá phù hợp với từng điều kiện riêng.'
            }
          },
          {
            jp: '担当者は状況に応じて柔軟に対応する。',
            romaji: 'Tantōsha wa jōkyō ni ōjite jūnan ni taiō suru.',
            meaning: {
              en: 'The person in charge responds flexibly according to the situation.',
              vi: 'Người phụ trách ứng phó linh hoạt tùy theo tình huống.'
            }
          },
          {
            jp: 'その結果、お客様の満足度が高くなった。',
            romaji: 'Sono kekka, okyakusama no manzokudo ga takaku natta.',
            meaning: {
              en: 'As a result, customer satisfaction rose.',
              vi: 'Nhờ vậy, mức độ hài lòng của khách hàng đã tăng lên.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How does the company change its service?',
              vi: 'Công ty thay đổi dịch vụ như thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'According to customer demand', vi: 'Tùy theo nhu cầu khách hàng' }
              },
              { id: 'b', label: { en: 'According to the season', vi: 'Tùy theo mùa' } },
              { id: 'c', label: { en: 'According to location', vi: 'Tùy theo địa điểm' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How does the person in charge respond?',
              vi: 'Người phụ trách ứng phó ra sao?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Flexibly, to the situation', vi: 'Linh hoạt theo tình huống' }
              },
              { id: 'b', label: { en: 'Always the same way', vi: 'Luôn theo một cách' } },
              { id: 'c', label: { en: 'Only by the rules', vi: 'Chỉ theo quy định' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-18',
    number: 18,
    title: {
      en: 'Change over time (〜に伴って)',
      vi: 'Thay đổi theo thời gian (〜に伴って)'
    },
    focus: {
      en: 'Express "along with / as something changes" using 〜に伴って, 〜とともに, and 〜につれて.',
      vi: 'Diễn đạt "cùng với / khi điều gì đó thay đổi" bằng 〜に伴って, 〜とともに và 〜につれて.'
    },
    vocab: [
      {
        kana: 'ともなう',
        kanji: '伴う',
        romaji: 'tomonau',
        meaning: { en: 'to accompany, to come with', vi: 'đi kèm, kéo theo' }
      },
      {
        kana: 'けいざい',
        kanji: '経済',
        romaji: 'keizai',
        meaning: { en: 'economy', vi: 'kinh tế' }
      },
      {
        kana: 'せいちょう',
        kanji: '成長',
        romaji: 'seichō',
        meaning: { en: 'growth', vi: 'sự tăng trưởng' }
      },
      {
        kana: 'はってん',
        kanji: '発展',
        romaji: 'hatten',
        meaning: { en: 'development', vi: 'sự phát triển' }
      },
      {
        kana: 'こうれいか',
        kanji: '高齢化',
        romaji: 'kōreika',
        meaning: { en: 'aging (of society)', vi: 'sự già hóa (dân số)' }
      },
      {
        kana: 'じんこう',
        kanji: '人口',
        romaji: 'jinkō',
        meaning: { en: 'population', vi: 'dân số' }
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
        kana: 'とし',
        kanji: '都市',
        romaji: 'toshi',
        meaning: { en: 'city', vi: 'đô thị' }
      },
      {
        kana: 'かんきょう',
        kanji: '環境',
        romaji: 'kankyō',
        meaning: { en: 'environment', vi: 'môi trường' }
      },
      {
        kana: 'しんぽ',
        kanji: '進歩',
        romaji: 'shinpo',
        meaning: { en: 'progress, advance', vi: 'sự tiến bộ' }
      },
      {
        kana: 'しゃかい',
        kanji: '社会',
        romaji: 'shakai',
        meaning: { en: 'society', vi: 'xã hội' }
      }
    ],
    grammar: [
      {
        pattern: 'N／V に伴って',
        title: {
          en: 'Along with / as',
          vi: 'Cùng với / khi'
        },
        explanation: {
          en: '〜に伴って (formal: 〜に伴い) shows that as one thing changes, another change happens together with it. Often used for large-scale change.',
          vi: '〜に伴って (trang trọng: 〜に伴い) cho thấy khi một việc thay đổi, một thay đổi khác xảy ra kèm theo. Thường dùng cho thay đổi quy mô lớn.'
        },
        examples: [
          {
            jp: '経済の成長に伴って、生活が豊かになった。',
            romaji: 'Keizai no seichō ni tomonatte, seikatsu ga yutaka ni natta.',
            meaning: {
              en: 'Along with economic growth, life became more prosperous.',
              vi: 'Cùng với sự tăng trưởng kinh tế, đời sống trở nên sung túc hơn.'
            }
          },
          {
            jp: '人口の増加に伴い、住宅が不足している。',
            romaji: 'Jinkō no zōka ni tomonai, jūtaku ga fusoku shite iru.',
            meaning: {
              en: 'With the increase in population, housing is in short supply.',
              vi: 'Cùng với sự gia tăng dân số, nhà ở đang thiếu hụt.'
            }
          }
        ]
      },
      {
        pattern: 'N に伴う N',
        title: {
          en: 'Accompanying noun',
          vi: 'Danh từ đi kèm'
        },
        explanation: {
          en: 'Use 〜に伴う before a noun to mean a thing that comes together with or results from the first noun.',
          vi: 'Dùng 〜に伴う trước danh từ để chỉ thứ đi kèm hoặc phát sinh từ danh từ đứng trước.'
        },
        examples: [
          {
            jp: '都市化に伴う問題が増えている。',
            romaji: 'Toshika ni tomonau mondai ga fuete iru.',
            meaning: {
              en: 'Problems accompanying urbanization are increasing.',
              vi: 'Các vấn đề đi kèm với đô thị hóa đang gia tăng.'
            }
          },
          {
            jp: '高齢化に伴う変化に対応する。',
            romaji: 'Kōreika ni tomonau henka ni taiō suru.',
            meaning: {
              en: 'We respond to the changes that come with an aging society.',
              vi: 'Ứng phó với những thay đổi đi kèm già hóa dân số.'
            }
          }
        ]
      },
      {
        pattern: 'N／V とともに',
        title: {
          en: 'Together with / as',
          vi: 'Cùng với'
        },
        explanation: {
          en: '〜とともに means "together with" or "at the same time as". It can show simultaneous change like 〜に伴って but is slightly more literary.',
          vi: '〜とともに nghĩa là "cùng với" hoặc "đồng thời với". Có thể diễn tả thay đổi đồng thời như 〜に伴って nhưng mang sắc thái văn viết hơn.'
        },
        examples: [
          {
            jp: '技術の進歩とともに生活が変わった。',
            romaji: 'Gijutsu no shinpo to tomo ni seikatsu ga kawatta.',
            meaning: {
              en: 'Life changed together with technological progress.',
              vi: 'Đời sống đã thay đổi cùng với sự tiến bộ của công nghệ.'
            }
          },
          {
            jp: '年をとるとともに体が弱くなる。',
            romaji: 'Toshi o toru to tomo ni karada ga yowaku naru.',
            meaning: {
              en: 'As one grows older, the body grows weaker.',
              vi: 'Càng lớn tuổi, cơ thể càng yếu đi.'
            }
          }
        ]
      },
      {
        pattern: 'V／いA につれて',
        title: {
          en: 'As (gradual change)',
          vi: 'Khi (thay đổi dần dần)'
        },
        explanation: {
          en: '〜につれて expresses a gradual, proportional change: as one side changes little by little, the other does too.',
          vi: '〜につれて diễn tả thay đổi từ từ, tỷ lệ thuận: một bên thay đổi dần thì bên kia cũng vậy.'
        },
        examples: [
          {
            jp: '時間がたつにつれて、寒くなってきた。',
            romaji: 'Jikan ga tatsu ni tsurete, samuku natte kita.',
            meaning: {
              en: 'As time passed, it grew colder.',
              vi: 'Khi thời gian trôi qua, trời dần trở lạnh.'
            }
          },
          {
            jp: '高く登るにつれて、気温が下がる。',
            romaji: 'Takaku noboru ni tsurete, kion ga sagaru.',
            meaning: {
              en: 'As you climb higher, the temperature drops.',
              vi: 'Càng leo cao, nhiệt độ càng giảm.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'A changing society',
          vi: 'Một xã hội đang đổi thay'
        },
        lines: [
          {
            jp: '日本では高齢化に伴って、社会が大きく変わっている。',
            romaji: 'Nihon de wa kōreika ni tomonatte, shakai ga ōkiku kawatte iru.',
            meaning: {
              en: 'In Japan, society is changing greatly along with the aging of the population.',
              vi: 'Ở Nhật, xã hội đang thay đổi lớn cùng với sự già hóa dân số.'
            }
          },
          {
            jp: '人口の減少に伴い、働く人が少なくなった。',
            romaji: 'Jinkō no genshō ni tomonai, hataraku hito ga sukunaku natta.',
            meaning: {
              en: 'With the decline in population, the number of working people has fallen.',
              vi: 'Cùng với sự giảm dân số, số người lao động đã ít đi.'
            }
          },
          {
            jp: '経済の発展とともに、都市に人が集まる。',
            romaji: 'Keizai no hatten to tomo ni, toshi ni hito ga atsumaru.',
            meaning: {
              en: 'Together with economic development, people gather in cities.',
              vi: 'Cùng với sự phát triển kinh tế, người ta tập trung về đô thị.'
            }
          },
          {
            jp: '時間がたつにつれて、環境も変化している。',
            romaji: 'Jikan ga tatsu ni tsurete, kankyō mo henka shite iru.',
            meaning: {
              en: 'As time goes by, the environment is changing too.',
              vi: 'Khi thời gian trôi qua, môi trường cũng đang thay đổi.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why is Japanese society changing greatly?',
              vi: 'Vì sao xã hội Nhật thay đổi lớn?'
            },
            choices: [
              { id: 'a', label: { en: 'Because of aging', vi: 'Vì sự già hóa dân số' } },
              { id: 'b', label: { en: 'Because of war', vi: 'Vì chiến tranh' } },
              { id: 'c', label: { en: 'Because of weather', vi: 'Vì thời tiết' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened as the population declined?',
              vi: 'Điều gì xảy ra khi dân số giảm?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Working people decreased', vi: 'Số người lao động giảm' }
              },
              { id: 'b', label: { en: 'Cities disappeared', vi: 'Các đô thị biến mất' } },
              { id: 'c', label: { en: 'Salaries rose', vi: 'Lương tăng lên' } }
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
      en: 'Disputed issues (〜をめぐって)',
      vi: 'Vấn đề tranh luận (〜をめぐって)'
    },
    focus: {
      en: 'Talk about debates and disputes "concerning / over" something with 〜をめぐって, 〜について, and 〜に関して.',
      vi: 'Nói về tranh luận, xung đột "xoay quanh / về" điều gì đó với 〜をめぐって, 〜について và 〜に関して.'
    },
    vocab: [
      {
        kana: 'めぐる',
        kanji: '巡る',
        romaji: 'meguru',
        meaning: { en: 'to revolve around, to concern', vi: 'xoay quanh, liên quan đến' }
      },
      {
        kana: 'ぎろん',
        kanji: '議論',
        romaji: 'giron',
        meaning: { en: 'debate, argument', vi: 'sự tranh luận' }
      },
      {
        kana: 'もんだい',
        kanji: '問題',
        romaji: 'mondai',
        meaning: { en: 'issue, problem', vi: 'vấn đề' }
      },
      {
        kana: 'たいりつ',
        kanji: '対立',
        romaji: 'tairitsu',
        meaning: { en: 'conflict, opposition', vi: 'sự đối lập, xung đột' }
      },
      {
        kana: 'いけん',
        kanji: '意見',
        romaji: 'iken',
        meaning: { en: 'opinion', vi: 'ý kiến' }
      },
      {
        kana: 'さんせい',
        kanji: '賛成',
        romaji: 'sansei',
        meaning: { en: 'agreement, approval', vi: 'sự tán thành' }
      },
      {
        kana: 'はんたい',
        kanji: '反対',
        romaji: 'hantai',
        meaning: { en: 'opposition', vi: 'sự phản đối' }
      },
      {
        kana: 'せいさく',
        kanji: '政策',
        romaji: 'seisaku',
        meaning: { en: 'policy', vi: 'chính sách' }
      },
      {
        kana: 'ほうりつ',
        kanji: '法律',
        romaji: 'hōritsu',
        meaning: { en: 'law', vi: 'luật pháp' }
      },
      {
        kana: 'じゅうみん',
        kanji: '住民',
        romaji: 'jūmin',
        meaning: { en: 'residents', vi: 'cư dân' }
      },
      {
        kana: 'けいかく',
        kanji: '計画',
        romaji: 'keikaku',
        meaning: { en: 'plan', vi: 'kế hoạch' }
      },
      {
        kana: 'あらそい',
        kanji: '争い',
        romaji: 'arasoi',
        meaning: { en: 'dispute, conflict', vi: 'sự tranh chấp' }
      }
    ],
    grammar: [
      {
        pattern: 'N をめぐって',
        title: {
          en: 'Concerning / over (an issue)',
          vi: 'Xoay quanh / về (một vấn đề)'
        },
        explanation: {
          en: '〜をめぐって marks a topic that several people debate, argue, or take sides over. The following clause usually shows disagreement or discussion.',
          vi: '〜をめぐって đánh dấu chủ đề mà nhiều người tranh luận, tranh cãi hay đứng về các phe. Vế sau thường thể hiện sự bất đồng hoặc thảo luận.'
        },
        examples: [
          {
            jp: '新しい法律をめぐって、議論が続いている。',
            romaji: 'Atarashii hōritsu o megutte, giron ga tsuzuite iru.',
            meaning: {
              en: 'Debate continues over the new law.',
              vi: 'Tranh luận về luật mới vẫn đang tiếp diễn.'
            }
          },
          {
            jp: 'その計画をめぐって、住民の意見が対立した。',
            romaji: 'Sono keikaku o megutte, jūmin no iken ga tairitsu shita.',
            meaning: {
              en: 'Residents\u2019 opinions clashed over that plan.',
              vi: 'Ý kiến của cư dân đối lập nhau xoay quanh kế hoạch đó.'
            }
          }
        ]
      },
      {
        pattern: 'N をめぐる N',
        title: {
          en: 'Noun surrounding an issue',
          vi: 'Danh từ xoay quanh vấn đề'
        },
        explanation: {
          en: 'Use 〜をめぐる before a noun (such as 問題 or 争い) to describe a matter centered on the first noun.',
          vi: 'Dùng 〜をめぐる trước danh từ (như 問題 hay 争い) để mô tả một vấn đề xoay quanh danh từ đứng trước.'
        },
        examples: [
          {
            jp: '環境をめぐる問題は複雑だ。',
            romaji: 'Kankyō o meguru mondai wa fukuzatsu da.',
            meaning: {
              en: 'Issues surrounding the environment are complex.',
              vi: 'Các vấn đề xoay quanh môi trường rất phức tạp.'
            }
          },
          {
            jp: '予算をめぐる争いが起きた。',
            romaji: 'Yosan o meguru arasoi ga okita.',
            meaning: {
              en: 'A dispute arose over the budget.',
              vi: 'Một cuộc tranh chấp xoay quanh ngân sách đã nổ ra.'
            }
          }
        ]
      },
      {
        pattern: 'N について',
        title: {
          en: 'About / regarding',
          vi: 'Về / liên quan đến'
        },
        explanation: {
          en: '〜について simply marks the topic you talk, think, or write about. It is neutral, unlike the conflict implied by 〜をめぐって.',
          vi: '〜について chỉ đơn giản đánh dấu chủ đề bạn nói, nghĩ hay viết. Nó trung tính, khác với sắc thái xung đột của 〜をめぐって.'
        },
        examples: [
          {
            jp: 'この問題について話し合いましょう。',
            romaji: 'Kono mondai ni tsuite hanashiaimashō.',
            meaning: {
              en: 'Let\u2019s discuss this problem.',
              vi: 'Chúng ta hãy thảo luận về vấn đề này.'
            }
          },
          {
            jp: '計画について説明します。',
            romaji: 'Keikaku ni tsuite setsumei shimasu.',
            meaning: {
              en: 'I will explain about the plan.',
              vi: 'Tôi sẽ giải thích về kế hoạch.'
            }
          }
        ]
      },
      {
        pattern: 'N に関して',
        title: {
          en: 'In relation to (formal)',
          vi: 'Liên quan đến (trang trọng)'
        },
        explanation: {
          en: '〜に関して is a more formal version of 〜について, common in writing and official contexts.',
          vi: '〜に関して là dạng trang trọng hơn của 〜について, hay dùng trong văn viết và bối cảnh chính thức.'
        },
        examples: [
          {
            jp: '事故に関して調査が行われた。',
            romaji: 'Jiko ni kanshite chōsa ga okonawareta.',
            meaning: {
              en: 'An investigation was conducted in relation to the accident.',
              vi: 'Một cuộc điều tra đã được tiến hành liên quan đến vụ tai nạn.'
            }
          },
          {
            jp: 'その件に関しては後で答えます。',
            romaji: 'Sono ken ni kanshite wa ato de kotaemasu.',
            meaning: {
              en: 'Regarding that matter, I will answer later.',
              vi: 'Về vấn đề đó, tôi sẽ trả lời sau.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'A dispute over a town plan',
          vi: 'Tranh cãi về kế hoạch của thị trấn'
        },
        lines: [
          {
            jp: '町の新しい計画をめぐって、住民の間で議論が起きた。',
            romaji: 'Machi no atarashii keikaku o megutte, jūmin no aida de giron ga okita.',
            meaning: {
              en: 'A debate arose among residents over the town\u2019s new plan.',
              vi: 'Một cuộc tranh luận nổ ra giữa các cư dân xoay quanh kế hoạch mới của thị trấn.'
            }
          },
          {
            jp: '計画に賛成する人もいれば、反対する人もいる。',
            romaji: 'Keikaku ni sansei suru hito mo ireba, hantai suru hito mo iru.',
            meaning: {
              en: 'There are people who support the plan and people who oppose it.',
              vi: 'Có người tán thành kế hoạch, cũng có người phản đối.'
            }
          },
          {
            jp: '環境をめぐる問題が特に大きい。',
            romaji: 'Kankyō o meguru mondai ga toku ni ōkii.',
            meaning: {
              en: 'The issues surrounding the environment are especially large.',
              vi: 'Các vấn đề xoay quanh môi trường đặc biệt lớn.'
            }
          },
          {
            jp: '市はこの件に関して説明会を開いた。',
            romaji: 'Shi wa kono ken ni kanshite setsumeikai o hiraita.',
            meaning: {
              en: 'The city held an information session regarding this matter.',
              vi: 'Thành phố đã mở một buổi giải thích liên quan đến vấn đề này.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the debate arise over?',
              vi: 'Cuộc tranh luận nổ ra xoay quanh điều gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'The town\u2019s new plan', vi: 'Kế hoạch mới của thị trấn' }
              },
              { id: 'b', label: { en: 'A new teacher', vi: 'Một giáo viên mới' } },
              { id: 'c', label: { en: 'A sports event', vi: 'Một sự kiện thể thao' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the city do?',
              vi: 'Thành phố đã làm gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Held an information session', vi: 'Mở một buổi giải thích' }
              },
              { id: 'b', label: { en: 'Cancelled the plan', vi: 'Hủy bỏ kế hoạch' } },
              { id: 'c', label: { en: 'Ignored the residents', vi: 'Phớt lờ cư dân' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-20',
    number: 20,
    title: {
      en: 'Prime examples (〜をはじめ)',
      vi: 'Ví dụ tiêu biểu (〜をはじめ)'
    },
    focus: {
      en: 'List representative examples with 〜をはじめ(として), 〜など, and 〜といった.',
      vi: 'Liệt kê ví dụ tiêu biểu với 〜をはじめ(として), 〜など và 〜といった.'
    },
    vocab: [
      {
        kana: 'はじめ',
        kanji: '始め',
        romaji: 'hajime',
        meaning: { en: 'beginning, starting with', vi: 'sự bắt đầu, đứng đầu' }
      },
      {
        kana: 'だいひょう',
        kanji: '代表',
        romaji: 'daihyō',
        meaning: { en: 'representative', vi: 'tiêu biểu, đại diện' }
      },
      {
        kana: 'かんこう',
        kanji: '観光',
        romaji: 'kankō',
        meaning: { en: 'sightseeing, tourism', vi: 'du lịch tham quan' }
      },
      {
        kana: 'めいしょ',
        kanji: '名所',
        romaji: 'meisho',
        meaning: { en: 'famous spot', vi: 'danh thắng' }
      },
      {
        kana: 'ちいき',
        kanji: '地域',
        romaji: 'chiiki',
        meaning: { en: 'region, area', vi: 'khu vực, vùng' }
      },
      {
        kana: 'せいひん',
        kanji: '製品',
        romaji: 'seihin',
        meaning: { en: 'product', vi: 'sản phẩm' }
      },
      {
        kana: 'ぶんか',
        kanji: '文化',
        romaji: 'bunka',
        meaning: { en: 'culture', vi: 'văn hóa' }
      },
      {
        kana: 'でんとう',
        kanji: '伝統',
        romaji: 'dentō',
        meaning: { en: 'tradition', vi: 'truyền thống' }
      },
      {
        kana: 'かくち',
        kanji: '各地',
        romaji: 'kakuchi',
        meaning: { en: 'various places', vi: 'khắp nơi' }
      },
      {
        kana: 'せかい',
        kanji: '世界',
        romaji: 'sekai',
        meaning: { en: 'world', vi: 'thế giới' }
      },
      {
        kana: 'ゆうめい',
        kanji: '有名',
        romaji: 'yūmei',
        meaning: { en: 'famous', vi: 'nổi tiếng' }
      },
      {
        kana: 'かんこうきゃく',
        kanji: '観光客',
        romaji: 'kankōkyaku',
        meaning: { en: 'tourist', vi: 'du khách' }
      }
    ],
    grammar: [
      {
        pattern: 'N をはじめ(として)',
        title: {
          en: 'Starting with / including',
          vi: 'Bắt đầu với / bao gồm cả'
        },
        explanation: {
          en: '〜をはじめ presents a leading, representative example, implying many others of the same kind follow.',
          vi: '〜をはじめ nêu một ví dụ tiêu biểu đứng đầu, ngụ ý còn nhiều thứ cùng loại khác theo sau.'
        },
        examples: [
          {
            jp: '東京をはじめ、日本には観光地がたくさんある。',
            romaji: 'Tōkyō o hajime, Nihon ni wa kankōchi ga takusan aru.',
            meaning: {
              en: 'Starting with Tokyo, Japan has many tourist spots.',
              vi: 'Bắt đầu từ Tokyo, Nhật Bản có rất nhiều điểm du lịch.'
            }
          },
          {
            jp: '社長をはじめ、社員全員が会議に出た。',
            romaji: 'Shachō o hajime, shain zen\u2019in ga kaigi ni deta.',
            meaning: {
              en: 'Starting with the president, all the employees attended the meeting.',
              vi: 'Bắt đầu từ giám đốc, toàn bộ nhân viên đã dự họp.'
            }
          }
        ]
      },
      {
        pattern: 'N をはじめとする N',
        title: {
          en: 'Such as, led by',
          vi: 'Đứng đầu là'
        },
        explanation: {
          en: 'Use 〜をはじめとする before a noun to describe a group led by or typified by the first noun.',
          vi: 'Dùng 〜をはじめとする trước danh từ để mô tả một nhóm mà danh từ đứng trước là đại diện tiêu biểu.'
        },
        examples: [
          {
            jp: '京都をはじめとする地域は観光で有名だ。',
            romaji: 'Kyōto o hajime to suru chiiki wa kankō de yūmei da.',
            meaning: {
              en: 'Regions such as Kyoto are famous for tourism.',
              vi: 'Các vùng tiêu biểu như Kyoto nổi tiếng về du lịch.'
            }
          },
          {
            jp: '米をはじめとする製品を輸出している。',
            romaji: 'Kome o hajime to suru seihin o yushutsu shite iru.',
            meaning: {
              en: 'They export products such as rice.',
              vi: 'Họ xuất khẩu các sản phẩm tiêu biểu như gạo.'
            }
          }
        ]
      },
      {
        pattern: 'N など',
        title: {
          en: 'And so on',
          vi: 'V.v., chẳng hạn'
        },
        explanation: {
          en: '〜など lists examples and implies there are others, similar to "etc." in English.',
          vi: '〜など liệt kê ví dụ và ngụ ý còn thứ khác, giống "v.v." trong tiếng Việt.'
        },
        examples: [
          {
            jp: 'りんごやみかんなどの果物が好きだ。',
            romaji: 'Ringo ya mikan nado no kudamono ga suki da.',
            meaning: {
              en: 'I like fruit such as apples and oranges.',
              vi: 'Tôi thích trái cây như táo, quýt, v.v.'
            }
          },
          {
            jp: '本やノートなどを買った。',
            romaji: 'Hon ya nōto nado o katta.',
            meaning: {
              en: 'I bought books, notebooks, and so on.',
              vi: 'Tôi đã mua sách, vở, v.v.'
            }
          }
        ]
      },
      {
        pattern: 'N といった N',
        title: {
          en: 'Such as (typical kinds)',
          vi: 'Như là (loại tiêu biểu)'
        },
        explanation: {
          en: '〜といった gives two or more concrete examples of a category, often before a category noun.',
          vi: '〜といった đưa ra hai hay nhiều ví dụ cụ thể cho một nhóm, thường đứng trước danh từ chỉ loại.'
        },
        examples: [
          {
            jp: '寿司や天ぷらといった料理が人気だ。',
            romaji: 'Sushi ya tenpura to itta ryōri ga ninki da.',
            meaning: {
              en: 'Dishes such as sushi and tempura are popular.',
              vi: 'Các món ăn như sushi và tempura rất được ưa chuộng.'
            }
          },
          {
            jp: '桜や紅葉といった自然が美しい。',
            romaji: 'Sakura ya kōyō to itta shizen ga utsukushii.',
            meaning: {
              en: 'Nature such as cherry blossoms and autumn leaves is beautiful.',
              vi: 'Thiên nhiên như hoa anh đào và lá đỏ rất đẹp.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'Tourist spots in Japan',
          vi: 'Điểm du lịch ở Nhật Bản'
        },
        lines: [
          {
            jp: '日本には、東京をはじめ多くの観光地がある。',
            romaji: 'Nihon ni wa, Tōkyō o hajime ōku no kankōchi ga aru.',
            meaning: {
              en: 'Japan has many tourist spots, starting with Tokyo.',
              vi: 'Nhật Bản có nhiều điểm du lịch, bắt đầu từ Tokyo.'
            }
          },
          {
            jp: '京都をはじめとする地域では、伝統文化を楽しめる。',
            romaji: 'Kyōto o hajime to suru chiiki de wa, dentō bunka o tanoshimeru.',
            meaning: {
              en: 'In regions such as Kyoto, you can enjoy traditional culture.',
              vi: 'Ở các vùng tiêu biểu như Kyoto, bạn có thể thưởng thức văn hóa truyền thống.'
            }
          },
          {
            jp: '寿司や天ぷらといった料理も人気だ。',
            romaji: 'Sushi ya tenpura to itta ryōri mo ninki da.',
            meaning: {
              en: 'Dishes such as sushi and tempura are also popular.',
              vi: 'Các món như sushi và tempura cũng rất được yêu thích.'
            }
          },
          {
            jp: '世界各地から観光客が集まる。',
            romaji: 'Sekai kakuchi kara kankōkyaku ga atsumaru.',
            meaning: {
              en: 'Tourists gather from all over the world.',
              vi: 'Du khách tụ hội từ khắp nơi trên thế giới.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What can you enjoy in regions such as Kyoto?',
              vi: 'Ở các vùng như Kyoto, bạn có thể thưởng thức gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Traditional culture', vi: 'Văn hóa truyền thống' } },
              { id: 'b', label: { en: 'Modern factories', vi: 'Nhà máy hiện đại' } },
              { id: 'c', label: { en: 'Winter sports', vi: 'Thể thao mùa đông' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Where do the tourists come from?',
              vi: 'Du khách đến từ đâu?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'From all over the world', vi: 'Từ khắp nơi trên thế giới' }
              },
              { id: 'b', label: { en: 'Only from Tokyo', vi: 'Chỉ từ Tokyo' } },
              { id: 'c', label: { en: 'Only from Kyoto', vi: 'Chỉ từ Kyoto' } }
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
      en: 'Spans of time and place (〜にかけて)',
      vi: 'Khoảng thời gian và không gian (〜にかけて)'
    },
    focus: {
      en: 'Express a span "from ... through ..." with 〜から〜にかけて, contrasted with 〜から〜まで and 〜間に.',
      vi: 'Diễn đạt khoảng "từ ... đến ..." với 〜から〜にかけて, đối chiếu với 〜から〜まで và 〜間に.'
    },
    vocab: [
      {
        kana: 'つゆ',
        kanji: '梅雨',
        romaji: 'tsuyu',
        meaning: { en: 'rainy season', vi: 'mùa mưa' }
      },
      {
        kana: 'きせつ',
        kanji: '季節',
        romaji: 'kisetsu',
        meaning: { en: 'season', vi: 'mùa' }
      },
      {
        kana: 'きおん',
        kanji: '気温',
        romaji: 'kion',
        meaning: { en: 'air temperature', vi: 'nhiệt độ không khí' }
      },
      {
        kana: 'てんき',
        kanji: '天気',
        romaji: 'tenki',
        meaning: { en: 'weather', vi: 'thời tiết' }
      },
      {
        kana: 'ちほう',
        kanji: '地方',
        romaji: 'chihō',
        meaning: { en: 'region, district', vi: 'địa phương' }
      },
      {
        kana: 'きかん',
        kanji: '期間',
        romaji: 'kikan',
        meaning: { en: 'period, term', vi: 'khoảng thời gian' }
      },
      {
        kana: 'たいふう',
        kanji: '台風',
        romaji: 'taifū',
        meaning: { en: 'typhoon', vi: 'bão' }
      },
      {
        kana: 'えいきょう',
        kanji: '影響',
        romaji: 'eikyō',
        meaning: { en: 'influence, effect', vi: 'ảnh hưởng' }
      },
      {
        kana: 'よほう',
        kanji: '予報',
        romaji: 'yohō',
        meaning: { en: 'forecast', vi: 'dự báo' }
      },
      {
        kana: 'いったい',
        kanji: '一帯',
        romaji: 'ittai',
        meaning: { en: 'whole area', vi: 'cả vùng' }
      },
      {
        kana: 'ふる',
        kanji: '降る',
        romaji: 'furu',
        meaning: { en: 'to fall (rain, snow)', vi: 'rơi (mưa, tuyết)' }
      },
      {
        kana: 'つづく',
        kanji: '続く',
        romaji: 'tsuzuku',
        meaning: { en: 'to continue', vi: 'tiếp diễn, kéo dài' }
      }
    ],
    grammar: [
      {
        pattern: 'N から N にかけて',
        title: {
          en: 'From ... through ... (span)',
          vi: 'Từ ... đến ... (một khoảng)'
        },
        explanation: {
          en: '〜から〜にかけて marks an approximate span of time or space. The start and end points are vague, unlike the clear edges of 〜から〜まで.',
          vi: '〜から〜にかけて đánh dấu một khoảng thời gian hay không gian tương đối. Điểm đầu và cuối mơ hồ, khác với ranh giới rõ ràng của 〜から〜まで.'
        },
        examples: [
          {
            jp: '夜から朝にかけて雨が降った。',
            romaji: 'Yoru kara asa ni kakete ame ga futta.',
            meaning: {
              en: 'It rained from night through morning.',
              vi: 'Trời mưa từ đêm cho đến sáng.'
            }
          },
          {
            jp: '春から夏にかけて気温が上がる。',
            romaji: 'Haru kara natsu ni kakete kion ga agaru.',
            meaning: {
              en: 'Temperatures rise from spring through summer.',
              vi: 'Nhiệt độ tăng từ mùa xuân đến mùa hè.'
            }
          }
        ]
      },
      {
        pattern: 'N にかけて',
        title: {
          en: 'Over / toward (a span)',
          vi: 'Trải qua / cho đến (một khoảng)'
        },
        explanation: {
          en: 'Even without explicit から, 〜にかけて can mark the end of a continuous range, including a region or a stretch toward a time.',
          vi: 'Ngay cả khi không có から, 〜にかけて có thể đánh dấu điểm cuối của một dải liên tục, gồm cả một vùng hay khoảng tiến đến một thời điểm.'
        },
        examples: [
          {
            jp: '関東から東北にかけて台風の影響が出た。',
            romaji: 'Kantō kara Tōhoku ni kakete taifū no eikyō ga deta.',
            meaning: {
              en: 'The typhoon\u2019s effects appeared from Kanto through Tohoku.',
              vi: 'Ảnh hưởng của bão xuất hiện từ vùng Kanto đến Tohoku.'
            }
          },
          {
            jp: '月末にかけて忙しくなる。',
            romaji: 'Getsumatsu ni kakete isogashiku naru.',
            meaning: {
              en: 'It gets busy toward the end of the month.',
              vi: 'Càng về cuối tháng càng bận rộn.'
            }
          }
        ]
      },
      {
        pattern: 'N から N まで',
        title: {
          en: 'From ... to ... (clear range)',
          vi: 'Từ ... đến ... (rõ ràng)'
        },
        explanation: {
          en: '〜から〜まで gives clear, fixed start and end points, unlike the fuzzy span of 〜にかけて.',
          vi: '〜から〜まで cho điểm đầu và cuối rõ ràng, cố định, khác với khoảng mơ hồ của 〜にかけて.'
        },
        examples: [
          {
            jp: '九時から五時まで働く。',
            romaji: 'Ku-ji kara go-ji made hataraku.',
            meaning: {
              en: 'I work from nine to five.',
              vi: 'Tôi làm việc từ chín giờ đến năm giờ.'
            }
          },
          {
            jp: '月曜から金曜まで授業がある。',
            romaji: 'Getsuyō kara kin\u2019yō made jugyō ga aru.',
            meaning: {
              en: 'There are classes from Monday to Friday.',
              vi: 'Có lớp học từ thứ Hai đến thứ Sáu.'
            }
          }
        ]
      },
      {
        pattern: 'N の間に',
        title: {
          en: 'During / while',
          vi: 'Trong lúc / trong khi'
        },
        explanation: {
          en: '〜間に marks a window of time during which an action happens at some point.',
          vi: '〜間に đánh dấu một khoảng thời gian mà trong đó một hành động xảy ra tại một thời điểm nào đó.'
        },
        examples: [
          {
            jp: '夏休みの間に旅行した。',
            romaji: 'Natsuyasumi no aida ni ryokō shita.',
            meaning: {
              en: 'I traveled during the summer vacation.',
              vi: 'Tôi đã đi du lịch trong kỳ nghỉ hè.'
            }
          },
          {
            jp: '留守の間に荷物が届いた。',
            romaji: 'Rusu no aida ni nimotsu ga todoita.',
            meaning: {
              en: 'A package arrived while I was out.',
              vi: 'Bưu kiện đã đến trong lúc tôi vắng nhà.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'Japan\u2019s rainy season',
          vi: 'Mùa mưa của Nhật Bản'
        },
        lines: [
          {
            jp: '日本では六月から七月にかけて梅雨になる。',
            romaji: 'Nihon de wa roku-gatsu kara shichi-gatsu ni kakete tsuyu ni naru.',
            meaning: {
              en: 'In Japan, the rainy season runs from June through July.',
              vi: 'Ở Nhật, mùa mưa kéo dài từ tháng Sáu đến tháng Bảy.'
            }
          },
          {
            jp: 'この期間は雨が続き、気温も上がる。',
            romaji: 'Kono kikan wa ame ga tsuzuki, kion mo agaru.',
            meaning: {
              en: 'During this period the rain continues and the temperature also rises.',
              vi: 'Trong khoảng này mưa kéo dài và nhiệt độ cũng tăng.'
            }
          },
          {
            jp: '西日本から東日本にかけて台風の影響が出ることもある。',
            romaji: 'Nishinihon kara higashinihon ni kakete taifū no eikyō ga deru koto mo aru.',
            meaning: {
              en: 'Sometimes typhoon effects appear from western through eastern Japan.',
              vi: 'Đôi khi ảnh hưởng của bão xuất hiện từ miền Tây đến miền Đông Nhật Bản.'
            }
          },
          {
            jp: '天気予報をよく確認したほうがいい。',
            romaji: 'Tenki yohō o yoku kakunin shita hō ga ii.',
            meaning: {
              en: 'You should check the weather forecast carefully.',
              vi: 'Bạn nên kiểm tra dự báo thời tiết cho kỹ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'When is the rainy season?',
              vi: 'Mùa mưa diễn ra khi nào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'From June through July', vi: 'Từ tháng Sáu đến tháng Bảy' }
              },
              { id: 'b', label: { en: 'From January to March', vi: 'Từ tháng Một đến tháng Ba' } },
              {
                id: 'c',
                label: { en: 'From October to December', vi: 'Từ tháng Mười đến tháng Mười Hai' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is the weather like during this period?',
              vi: 'Thời tiết trong khoảng này thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'The rain continues', vi: 'Mưa kéo dài' } },
              { id: 'b', label: { en: 'It snows heavily', vi: 'Tuyết rơi nhiều' } },
              { id: 'c', label: { en: 'It is dry and cold', vi: 'Khô và lạnh' } }
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
      en: 'Throughout a range (〜にわたって)',
      vi: 'Suốt cả một phạm vi (〜にわたって)'
    },
    focus: {
      en: 'Express "throughout / spanning" a long time or wide area with 〜にわたって, 〜中, and 〜以来.',
      vi: 'Diễn đạt "suốt / trải dài" một thời gian dài hay phạm vi rộng với 〜にわたって, 〜中 và 〜以来.'
    },
    vocab: [
      {
        kana: 'わたる',
        kanji: '渡る',
        romaji: 'wataru',
        meaning: { en: 'to span, to extend over', vi: 'trải dài, kéo dài qua' }
      },
      {
        kana: 'はんい',
        kanji: '範囲',
        romaji: 'han\u2019i',
        meaning: { en: 'range, scope', vi: 'phạm vi' }
      },
      {
        kana: 'こうじ',
        kanji: '工事',
        romaji: 'kōji',
        meaning: { en: 'construction work', vi: 'công trình thi công' }
      },
      {
        kana: 'ちょうさ',
        kanji: '調査',
        romaji: 'chōsa',
        meaning: { en: 'survey, investigation', vi: 'cuộc điều tra, khảo sát' }
      },
      {
        kana: 'すうねん',
        kanji: '数年',
        romaji: 'sūnen',
        meaning: { en: 'several years', vi: 'vài năm' }
      },
      {
        kana: 'ぜんこく',
        kanji: '全国',
        romaji: 'zenkoku',
        meaning: { en: 'nationwide', vi: 'toàn quốc' }
      },
      {
        kana: 'こうはんい',
        kanji: '広範囲',
        romaji: 'kōhan\u2019i',
        meaning: { en: 'wide area', vi: 'phạm vi rộng' }
      },
      {
        kana: 'ちょうき',
        kanji: '長期',
        romaji: 'chōki',
        meaning: { en: 'long term', vi: 'dài hạn' }
      },
      {
        kana: 'きろく',
        kanji: '記録',
        romaji: 'kiroku',
        meaning: { en: 'record', vi: 'kỷ lục, ghi chép' }
      },
      {
        kana: 'かんせい',
        kanji: '完成',
        romaji: 'kansei',
        meaning: { en: 'completion', vi: 'sự hoàn thành' }
      },
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'nỗ lực' }
      },
      {
        kana: 'じっし',
        kanji: '実施',
        romaji: 'jisshi',
        meaning: { en: 'implementation', vi: 'sự thực thi' }
      }
    ],
    grammar: [
      {
        pattern: 'N にわたって',
        title: {
          en: 'Throughout / over (a span)',
          vi: 'Suốt / trải qua (một phạm vi)'
        },
        explanation: {
          en: '〜にわたって (formal: 〜にわたり) stresses that something continues throughout a long period or wide range from start to end.',
          vi: '〜にわたって (trang trọng: 〜にわたり) nhấn mạnh điều gì đó kéo dài suốt một thời gian dài hay phạm vi rộng từ đầu đến cuối.'
        },
        examples: [
          {
            jp: '工事は三年にわたって続いた。',
            romaji: 'Kōji wa san-nen ni watatte tsuzuita.',
            meaning: {
              en: 'The construction continued over three years.',
              vi: 'Công trình kéo dài suốt ba năm.'
            }
          },
          {
            jp: '調査は全国にわたって行われた。',
            romaji: 'Chōsa wa zenkoku ni watatte okonawareta.',
            meaning: {
              en: 'The survey was carried out throughout the country.',
              vi: 'Cuộc khảo sát được tiến hành trên toàn quốc.'
            }
          }
        ]
      },
      {
        pattern: 'N にわたる N',
        title: {
          en: 'Spanning noun',
          vi: 'Danh từ trải dài'
        },
        explanation: {
          en: 'Use 〜にわたる before a noun to describe something that extends across the stated range.',
          vi: 'Dùng 〜にわたる trước danh từ để mô tả thứ gì đó trải dài qua phạm vi được nêu.'
        },
        examples: [
          {
            jp: '長期にわたる努力が実を結んだ。',
            romaji: 'Chōki ni wataru doryoku ga mi o musunda.',
            meaning: {
              en: 'Long-term effort bore fruit.',
              vi: 'Nỗ lực dài hạn đã đơm hoa kết trái.'
            }
          },
          {
            jp: '広範囲にわたる調査が必要だ。',
            romaji: 'Kōhan\u2019i ni wataru chōsa ga hitsuyō da.',
            meaning: {
              en: 'A survey spanning a wide area is necessary.',
              vi: 'Cần một cuộc khảo sát trải rộng trên phạm vi lớn.'
            }
          }
        ]
      },
      {
        pattern: 'N 中（じゅう）',
        title: {
          en: 'Throughout (whole period)',
          vi: 'Suốt cả (cả khoảng)'
        },
        explanation: {
          en: 'The suffix 〜中 (read じゅう) after a time word means "throughout the whole of" that period.',
          vi: 'Hậu tố 〜中 (đọc じゅう) sau từ chỉ thời gian nghĩa là "suốt cả" khoảng đó.'
        },
        examples: [
          {
            jp: '一日中、雨が降っていた。',
            romaji: 'Ichinichijū, ame ga futte ita.',
            meaning: {
              en: 'It rained all day long.',
              vi: 'Trời mưa suốt cả ngày.'
            }
          },
          {
            jp: '一年中、ここは暖かい。',
            romaji: 'Ichinenjū, koko wa atatakai.',
            meaning: {
              en: 'It is warm here all year round.',
              vi: 'Ở đây ấm áp quanh năm.'
            }
          }
        ]
      },
      {
        pattern: 'N／V て 以来',
        title: {
          en: 'Ever since',
          vi: 'Kể từ khi'
        },
        explanation: {
          en: '〜以来 means "ever since" a point in the past, indicating a continuing state up to now.',
          vi: '〜以来 nghĩa là "kể từ khi" một thời điểm trong quá khứ, chỉ một trạng thái tiếp diễn cho đến nay.'
        },
        examples: [
          {
            jp: '卒業して以来、彼に会っていない。',
            romaji: 'Sotsugyō shite irai, kare ni atte inai.',
            meaning: {
              en: 'I haven\u2019t met him since graduating.',
              vi: 'Kể từ khi tốt nghiệp, tôi chưa gặp lại anh ấy.'
            }
          },
          {
            jp: '去年以来、ずっと忙しい。',
            romaji: 'Kyonen irai, zutto isogashii.',
            meaning: {
              en: 'I have been busy ever since last year.',
              vi: 'Kể từ năm ngoái, tôi luôn bận rộn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'A long project',
          vi: 'Một dự án dài hơi'
        },
        lines: [
          {
            jp: 'その工事は五年にわたって行われた。',
            romaji: 'Sono kōji wa go-nen ni watatte okonawareta.',
            meaning: {
              en: 'That construction was carried out over five years.',
              vi: 'Công trình đó được thực hiện suốt năm năm.'
            }
          },
          {
            jp: '全国にわたる調査の結果、計画が決まった。',
            romaji: 'Zenkoku ni wataru chōsa no kekka, keikaku ga kimatta.',
            meaning: {
              en: 'As a result of a nationwide survey, the plan was decided.',
              vi: 'Nhờ kết quả khảo sát trên toàn quốc, kế hoạch đã được quyết định.'
            }
          },
          {
            jp: '長期にわたる努力のおかげで、ついに完成した。',
            romaji: 'Chōki ni wataru doryoku no okage de, tsui ni kansei shita.',
            meaning: {
              en: 'Thanks to long-term effort, it was finally completed.',
              vi: 'Nhờ nỗ lực dài hạn, cuối cùng nó đã hoàn thành.'
            }
          },
          {
            jp: '工事が始まって以来、町は大きく変わった。',
            romaji: 'Kōji ga hajimatte irai, machi wa ōkiku kawatta.',
            meaning: {
              en: 'Ever since the construction began, the town has changed greatly.',
              vi: 'Kể từ khi công trình bắt đầu, thị trấn đã thay đổi rất nhiều.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How long did the construction continue?',
              vi: 'Công trình kéo dài bao lâu?'
            },
            choices: [
              { id: 'a', label: { en: 'Over five years', vi: 'Suốt năm năm' } },
              { id: 'b', label: { en: 'Only one month', vi: 'Chỉ một tháng' } },
              { id: 'c', label: { en: 'Over ten days', vi: 'Khoảng mười ngày' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Over what range was the survey conducted?',
              vi: 'Cuộc khảo sát được tiến hành trên phạm vi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Nationwide', vi: 'Toàn quốc' } },
              { id: 'b', label: { en: 'In one small town', vi: 'Trong một thị trấn nhỏ' } },
              { id: 'c', label: { en: 'In a single school', vi: 'Trong một trường học' } }
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
      en: 'By means of (〜を通じて / 〜を通して)',
      vi: 'Thông qua (〜を通じて / 〜を通して)'
    },
    focus: {
      en: 'Express "through / by means of / throughout" with 〜を通じて, 〜を通して, 〜によって, and 〜を用いて.',
      vi: 'Diễn đạt "thông qua / bằng / suốt" với 〜を通じて, 〜を通して, 〜によって và 〜を用いて.'
    },
    vocab: [
      {
        kana: 'つうじる',
        kanji: '通じる',
        romaji: 'tsūjiru',
        meaning: { en: 'to get through, to be understood', vi: 'thông suốt, được hiểu' }
      },
      {
        kana: 'けいけん',
        kanji: '経験',
        romaji: 'keiken',
        meaning: { en: 'experience', vi: 'kinh nghiệm' }
      },
      {
        kana: 'ゆうじん',
        kanji: '友人',
        romaji: 'yūjin',
        meaning: { en: 'friend', vi: 'bạn bè' }
      },
      {
        kana: 'しりあう',
        kanji: '知り合う',
        romaji: 'shiriau',
        meaning: { en: 'to get acquainted', vi: 'làm quen' }
      },
      {
        kana: 'じょうほう',
        kanji: '情報',
        romaji: 'jōhō',
        meaning: { en: 'information', vi: 'thông tin' }
      },
      {
        kana: 'こうりゅう',
        kanji: '交流',
        romaji: 'kōryū',
        meaning: { en: 'exchange, interaction', vi: 'sự giao lưu' }
      },
      {
        kana: 'りゅうがく',
        kanji: '留学',
        romaji: 'ryūgaku',
        meaning: { en: 'studying abroad', vi: 'du học' }
      },
      {
        kana: 'まなぶ',
        kanji: '学ぶ',
        romaji: 'manabu',
        meaning: { en: 'to learn', vi: 'học hỏi' }
      },
      {
        kana: 'かつどう',
        kanji: '活動',
        romaji: 'katsudō',
        meaning: { en: 'activity', vi: 'hoạt động' }
      },
      {
        kana: 'りかい',
        kanji: '理解',
        romaji: 'rikai',
        meaning: { en: 'understanding', vi: 'sự hiểu biết' }
      },
      {
        kana: 'しゅだん',
        kanji: '手段',
        romaji: 'shudan',
        meaning: { en: 'means, method', vi: 'phương tiện, biện pháp' }
      },
      {
        kana: 'しや',
        kanji: '視野',
        romaji: 'shiya',
        meaning: { en: 'field of view, perspective', vi: 'tầm nhìn' }
      }
    ],
    grammar: [
      {
        pattern: 'N を通じて',
        title: {
          en: 'Through / by means of',
          vi: 'Thông qua / nhờ vào'
        },
        explanation: {
          en: '〜を通じて marks a medium, intermediary, or channel by which something happens. It can also mean "throughout" a span of time.',
          vi: '〜を通じて đánh dấu phương tiện, trung gian hay kênh mà nhờ đó điều gì xảy ra. Cũng có thể nghĩa là "suốt" một khoảng thời gian.'
        },
        examples: [
          {
            jp: 'インターネットを通じて世界中の情報を得られる。',
            romaji: 'Intānetto o tsūjite sekaijū no jōhō o erareru.',
            meaning: {
              en: 'You can get information from around the world through the internet.',
              vi: 'Bạn có thể lấy thông tin khắp thế giới thông qua internet.'
            }
          },
          {
            jp: '友人を通じて彼女と知り合った。',
            romaji: 'Yūjin o tsūjite kanojo to shiriatta.',
            meaning: {
              en: 'I got to know her through a friend.',
              vi: 'Tôi làm quen với cô ấy thông qua một người bạn.'
            }
          }
        ]
      },
      {
        pattern: 'N を通して',
        title: {
          en: 'Through / throughout',
          vi: 'Qua / suốt'
        },
        explanation: {
          en: '〜を通して is very close to 〜を通じて. It often stresses an action you do through an experience, or "throughout" a continuous span.',
          vi: '〜を通して rất gần với 〜を通じて. Nó thường nhấn mạnh hành động bạn làm qua một trải nghiệm, hoặc "suốt" một khoảng liên tục.'
        },
        examples: [
          {
            jp: '留学を通して多くのことを学んだ。',
            romaji: 'Ryūgaku o tsūshite ōku no koto o mananda.',
            meaning: {
              en: 'I learned many things through studying abroad.',
              vi: 'Tôi đã học được nhiều điều qua việc du học.'
            }
          },
          {
            jp: '一年を通して、この町は観光客が多い。',
            romaji: 'Ichinen o tsūshite, kono machi wa kankōkyaku ga ōi.',
            meaning: {
              en: 'Throughout the year, this town has many tourists.',
              vi: 'Suốt cả năm, thị trấn này có nhiều du khách.'
            }
          }
        ]
      },
      {
        pattern: 'N によって',
        title: {
          en: 'By means of / due to',
          vi: 'Bằng / nhờ'
        },
        explanation: {
          en: '〜によって can mark the means or cause by which a result is achieved.',
          vi: '〜によって có thể đánh dấu phương tiện hay nguyên nhân để đạt được một kết quả.'
        },
        examples: [
          {
            jp: 'この問題は話し合いによって解決した。',
            romaji: 'Kono mondai wa hanashiai ni yotte kaiketsu shita.',
            meaning: {
              en: 'This problem was solved through discussion.',
              vi: 'Vấn đề này đã được giải quyết bằng việc bàn bạc.'
            }
          },
          {
            jp: '努力によって夢をかなえた。',
            romaji: 'Doryoku ni yotte yume o kanaeta.',
            meaning: {
              en: 'I realized my dream through effort.',
              vi: 'Tôi đã thực hiện được ước mơ nhờ nỗ lực.'
            }
          }
        ]
      },
      {
        pattern: 'N を用いて',
        title: {
          en: 'Using (formal)',
          vi: 'Sử dụng (trang trọng)'
        },
        explanation: {
          en: '〜を用いて is a formal way to say "using" a tool, method, or material, common in writing.',
          vi: '〜を用いて là cách trang trọng để nói "sử dụng" một công cụ, phương pháp hay vật liệu, hay gặp trong văn viết.'
        },
        examples: [
          {
            jp: 'データを用いて説明する。',
            romaji: 'Dēta o mochiite setsumei suru.',
            meaning: {
              en: 'I explain using data.',
              vi: 'Tôi giải thích bằng dữ liệu.'
            }
          },
          {
            jp: '新しい方法を用いて研究を進める。',
            romaji: 'Atarashii hōhō o mochiite kenkyū o susumeru.',
            meaning: {
              en: 'We advance the research using a new method.',
              vi: 'Chúng tôi tiến hành nghiên cứu bằng một phương pháp mới.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'Learning through study abroad',
          vi: 'Học hỏi qua du học'
        },
        lines: [
          {
            jp: '私は留学を通して、外国の文化を理解できた。',
            romaji: 'Watashi wa ryūgaku o tsūshite, gaikoku no bunka o rikai dekita.',
            meaning: {
              en: 'Through studying abroad, I was able to understand foreign culture.',
              vi: 'Qua việc du học, tôi đã hiểu được văn hóa nước ngoài.'
            }
          },
          {
            jp: '現地の友人を通じて、たくさんの人と知り合った。',
            romaji: 'Genchi no yūjin o tsūjite, takusan no hito to shiriatta.',
            meaning: {
              en: 'Through local friends, I got to know many people.',
              vi: 'Thông qua bạn bè bản địa, tôi đã làm quen với nhiều người.'
            }
          },
          {
            jp: '交流活動によって、言葉も上手になった。',
            romaji: 'Kōryū katsudō ni yotte, kotoba mo jōzu ni natta.',
            meaning: {
              en: 'Through exchange activities, my language skills also improved.',
              vi: 'Nhờ các hoạt động giao lưu, khả năng ngôn ngữ của tôi cũng tiến bộ.'
            }
          },
          {
            jp: 'この経験を通じて、視野が広がった。',
            romaji: 'Kono keiken o tsūjite, shiya ga hirogatta.',
            meaning: {
              en: 'Through this experience, my perspective broadened.',
              vi: 'Qua trải nghiệm này, tầm nhìn của tôi đã mở rộng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Through what did the writer understand foreign culture?',
              vi: 'Người viết hiểu văn hóa nước ngoài qua điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Through studying abroad', vi: 'Qua việc du học' } },
              { id: 'b', label: { en: 'Through reading novels', vi: 'Qua việc đọc tiểu thuyết' } },
              { id: 'c', label: { en: 'Through watching TV', vi: 'Qua việc xem TV' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the writer do through local friends?',
              vi: 'Người viết đã làm gì thông qua bạn bè bản địa?'
            },
            choices: [
              { id: 'a', label: { en: 'Got to know many people', vi: 'Làm quen với nhiều người' } },
              { id: 'b', label: { en: 'Bought many products', vi: 'Mua nhiều sản phẩm' } },
              { id: 'c', label: { en: 'Built a new house', vi: 'Xây một ngôi nhà mới' } }
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
      en: 'Formal settings (〜において / 〜における)',
      vi: 'Bối cảnh trang trọng (〜において / 〜における)'
    },
    focus: {
      en: 'Mark a formal place, time, or field with 〜において / 〜における, plus 〜にて and 〜にあたって.',
      vi: 'Đánh dấu nơi chốn, thời điểm hay lĩnh vực trang trọng với 〜において / 〜における, cùng 〜にて và 〜にあたって.'
    },
    vocab: [
      {
        kana: 'かいぎ',
        kanji: '会議',
        romaji: 'kaigi',
        meaning: { en: 'meeting, conference', vi: 'cuộc họp, hội nghị' }
      },
      {
        kana: 'げんだい',
        kanji: '現代',
        romaji: 'gendai',
        meaning: { en: 'modern times', vi: 'thời hiện đại' }
      },
      {
        kana: 'ぶんや',
        kanji: '分野',
        romaji: 'bun\u2019ya',
        meaning: { en: 'field, area', vi: 'lĩnh vực' }
      },
      {
        kana: 'けんきゅう',
        kanji: '研究',
        romaji: 'kenkyū',
        meaning: { en: 'research', vi: 'nghiên cứu' }
      },
      {
        kana: 'やくわり',
        kanji: '役割',
        romaji: 'yakuwari',
        meaning: { en: 'role', vi: 'vai trò' }
      },
      {
        kana: 'きぎょう',
        kanji: '企業',
        romaji: 'kigyō',
        meaning: { en: 'company, enterprise', vi: 'doanh nghiệp' }
      },
      {
        kana: 'きょういく',
        kanji: '教育',
        romaji: 'kyōiku',
        meaning: { en: 'education', vi: 'giáo dục' }
      },
      {
        kana: 'じゅうよう',
        kanji: '重要',
        romaji: 'jūyō',
        meaning: { en: 'important', vi: 'quan trọng' }
      },
      {
        kana: 'ばめん',
        kanji: '場面',
        romaji: 'bamen',
        meaning: { en: 'scene, situation', vi: 'tình huống, cảnh' }
      },
      {
        kana: 'はっぴょう',
        kanji: '発表',
        romaji: 'happyō',
        meaning: { en: 'presentation, announcement', vi: 'sự công bố, thuyết trình' }
      },
      {
        kana: 'かいさい',
        kanji: '開催',
        romaji: 'kaisai',
        meaning: { en: 'holding (an event)', vi: 'sự tổ chức (sự kiện)' }
      },
      {
        kana: 'せんもん',
        kanji: '専門',
        romaji: 'senmon',
        meaning: { en: 'specialty, expertise', vi: 'chuyên môn' }
      }
    ],
    grammar: [
      {
        pattern: 'N において',
        title: {
          en: 'In / at / regarding (formal)',
          vi: 'Ở / tại / trong (trang trọng)'
        },
        explanation: {
          en: '〜において is a formal way to mark a place, time, situation, or field where something happens. It is common in writing and speeches.',
          vi: '〜において là cách trang trọng để đánh dấu nơi chốn, thời điểm, tình huống hay lĩnh vực nơi điều gì đó xảy ra. Hay dùng trong văn viết và diễn văn.'
        },
        examples: [
          {
            jp: '会議において重要な決定がなされた。',
            romaji: 'Kaigi ni oite jūyō na kettei ga nasareta.',
            meaning: {
              en: 'An important decision was made at the meeting.',
              vi: 'Một quyết định quan trọng đã được đưa ra tại cuộc họp.'
            }
          },
          {
            jp: '現代社会において技術は欠かせない。',
            romaji: 'Gendai shakai ni oite gijutsu wa kakasenai.',
            meaning: {
              en: 'In modern society, technology is indispensable.',
              vi: 'Trong xã hội hiện đại, công nghệ là không thể thiếu.'
            }
          }
        ]
      },
      {
        pattern: 'N における N',
        title: {
          en: 'In / at (noun-modifying)',
          vi: 'Ở / trong (bổ nghĩa danh từ)'
        },
        explanation: {
          en: 'Use 〜における before a noun, the noun-modifying form of 〜において, to mean "the ... in/at".',
          vi: 'Dùng 〜における trước danh từ, dạng bổ nghĩa của 〜において, để nói "... ở/trong".'
        },
        examples: [
          {
            jp: '教育における役割は大きい。',
            romaji: 'Kyōiku ni okeru yakuwari wa ōkii.',
            meaning: {
              en: 'Its role in education is large.',
              vi: 'Vai trò của nó trong giáo dục rất lớn.'
            }
          },
          {
            jp: '研究における新しい発見が注目された。',
            romaji: 'Kenkyū ni okeru atarashii hakken ga chūmoku sareta.',
            meaning: {
              en: 'A new discovery in the research drew attention.',
              vi: 'Một phát hiện mới trong nghiên cứu đã thu hút sự chú ý.'
            }
          }
        ]
      },
      {
        pattern: 'N にて',
        title: {
          en: 'At / by (formal で)',
          vi: 'Tại / bằng (で trang trọng)'
        },
        explanation: {
          en: '〜にて is a formal equivalent of で, marking a place or means in writing and announcements.',
          vi: '〜にて là dạng trang trọng của で, đánh dấu nơi chốn hay phương tiện trong văn viết và thông báo.'
        },
        examples: [
          {
            jp: '会議は東京にて開催される。',
            romaji: 'Kaigi wa Tōkyō nite kaisai sareru.',
            meaning: {
              en: 'The conference will be held in Tokyo.',
              vi: 'Hội nghị sẽ được tổ chức tại Tokyo.'
            }
          },
          {
            jp: '詳細はメールにてお知らせします。',
            romaji: 'Shōsai wa mēru nite oshirase shimasu.',
            meaning: {
              en: 'We will inform you of the details by email.',
              vi: 'Chúng tôi sẽ thông báo chi tiết qua email.'
            }
          }
        ]
      },
      {
        pattern: 'N／V にあたって',
        title: {
          en: 'On the occasion of',
          vi: 'Nhân dịp / khi tiến hành'
        },
        explanation: {
          en: '〜にあたって marks a special occasion or important moment when an action is taken. It is formal.',
          vi: '〜にあたって đánh dấu một dịp đặc biệt hay thời điểm quan trọng khi thực hiện một hành động. Đây là cách nói trang trọng.'
        },
        examples: [
          {
            jp: '開会にあたって、社長があいさつした。',
            romaji: 'Kaikai ni atatte, shachō ga aisatsu shita.',
            meaning: {
              en: 'On the occasion of the opening, the president gave a greeting.',
              vi: 'Nhân dịp khai mạc, giám đốc đã phát biểu chào mừng.'
            }
          },
          {
            jp: '留学するにあたって、準備を始めた。',
            romaji: 'Ryūgaku suru ni atatte, junbi o hajimeta.',
            meaning: {
              en: 'In preparation for studying abroad, I began getting ready.',
              vi: 'Khi chuẩn bị đi du học, tôi đã bắt đầu chuẩn bị.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'Technology in modern society',
          vi: 'Công nghệ trong xã hội hiện đại'
        },
        lines: [
          {
            jp: '現代社会において、技術は重要な役割を持っている。',
            romaji: 'Gendai shakai ni oite, gijutsu wa jūyō na yakuwari o motte iru.',
            meaning: {
              en: 'In modern society, technology plays an important role.',
              vi: 'Trong xã hội hiện đại, công nghệ giữ một vai trò quan trọng.'
            }
          },
          {
            jp: '特に教育における変化が大きい。',
            romaji: 'Toku ni kyōiku ni okeru henka ga ōkii.',
            meaning: {
              en: 'In particular, the changes in education are large.',
              vi: 'Đặc biệt, những thay đổi trong giáo dục rất lớn.'
            }
          },
          {
            jp: '先日、東京にて専門家の発表が行われた。',
            romaji: 'Senjitsu, Tōkyō nite senmonka no happyō ga okonawareta.',
            meaning: {
              en: 'The other day, an experts\u2019 presentation was held in Tokyo.',
              vi: 'Hôm trước, một buổi thuyết trình của các chuyên gia đã diễn ra tại Tokyo.'
            }
          },
          {
            jp: '発表にあたって、多くの研究結果が紹介された。',
            romaji: 'Happyō ni atatte, ōku no kenkyū kekka ga shōkai sareta.',
            meaning: {
              en: 'On the occasion of the presentation, many research results were introduced.',
              vi: 'Nhân buổi thuyết trình, nhiều kết quả nghiên cứu đã được giới thiệu.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What role does technology play in modern society?',
              vi: 'Công nghệ giữ vai trò gì trong xã hội hiện đại?'
            },
            choices: [
              { id: 'a', label: { en: 'An important role', vi: 'Một vai trò quan trọng' } },
              { id: 'b', label: { en: 'No role at all', vi: 'Không có vai trò gì' } },
              { id: 'c', label: { en: 'A harmful role', vi: 'Một vai trò có hại' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Where was the experts\u2019 presentation held?',
              vi: 'Buổi thuyết trình của chuyên gia được tổ chức ở đâu?'
            },
            choices: [
              { id: 'a', label: { en: 'In Tokyo', vi: 'Tại Tokyo' } },
              { id: 'b', label: { en: 'In Kyoto', vi: 'Tại Kyoto' } },
              { id: 'c', label: { en: 'In Osaka', vi: 'Tại Osaka' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
