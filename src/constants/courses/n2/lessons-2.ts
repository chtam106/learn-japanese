import type { Lesson } from '@/constants/courses/types.ts';

export const n2LessonsB: Lesson[] = [
  {
    id: 'lesson-9',
    number: 9,
    title: {
      en: 'Judging by Character',
      vi: 'Phán đoán dựa trên tính cách'
    },
    focus: {
      en: 'Draw natural conclusions about someone from their known character with 〜ことだから.',
      vi: 'Rút ra kết luận tự nhiên về ai đó dựa trên tính cách đã biết với 〜ことだから.'
    },
    vocab: [
      {
        kana: 'せいかく',
        kanji: '性格',
        romaji: 'seikaku',
        meaning: { en: 'personality, character', vi: 'tính cách' }
      },
      {
        kana: 'しんらい',
        kanji: '信頼',
        romaji: 'shinrai',
        meaning: { en: 'trust, reliance', vi: 'sự tin tưởng' }
      },
      {
        kana: 'まじめ',
        kanji: '真面目',
        romaji: 'majime',
        meaning: { en: 'serious, diligent', vi: 'nghiêm túc, chăm chỉ' }
      },
      {
        kana: 'やくそく',
        kanji: '約束',
        romaji: 'yakusoku',
        meaning: { en: 'promise, appointment', vi: 'lời hứa, cuộc hẹn' }
      },
      {
        kana: 'せきにんかん',
        kanji: '責任感',
        romaji: 'sekininkan',
        meaning: { en: 'sense of responsibility', vi: 'tinh thần trách nhiệm' }
      },
      {
        kana: 'たよる',
        kanji: '頼る',
        romaji: 'tayoru',
        meaning: { en: 'to rely on', vi: 'dựa vào, nhờ cậy' }
      },
      {
        kana: 'なまける',
        kanji: '怠ける',
        romaji: 'namakeru',
        meaning: { en: 'to be lazy, slack off', vi: 'lười biếng, lơ là' }
      },
      {
        kana: 'おくれる',
        kanji: '遅れる',
        romaji: 'okureru',
        meaning: { en: 'to be late', vi: 'đến muộn, trễ' }
      },
      {
        kana: 'きづかい',
        kanji: '気遣い',
        romaji: 'kizukai',
        meaning: { en: 'consideration, thoughtfulness', vi: 'sự quan tâm, để ý' }
      },
      {
        kana: 'こうどう',
        kanji: '行動',
        romaji: 'kōdō',
        meaning: { en: 'action, behavior', vi: 'hành động' }
      },
      {
        kana: 'まちがいない',
        kanji: '間違いない',
        romaji: 'machigainai',
        meaning: { en: 'no doubt, certain', vi: 'chắc chắn, không sai' }
      },
      {
        kana: 'きっと',
        romaji: 'kitto',
        meaning: { en: 'surely, certainly', vi: 'chắc chắn, nhất định' }
      }
    ],
    grammar: [
      {
        pattern: 'N のことだから',
        title: {
          en: 'Because it is ... (judging by character)',
          vi: 'Vì là ... (phán đoán theo tính cách)'
        },
        explanation: {
          en: 'Attached to a person (or group) whose nature is well known, it leads to a confident guess about what they will do. Often pairs with きっと or に違いない.',
          vi: 'Gắn với một người (hoặc nhóm) mà ta đã biết rõ bản tính, dẫn tới phán đoán tự tin về việc họ sẽ làm. Thường đi kèm với きっと hoặc に違いない.'
        },
        examples: [
          {
            jp: 'まじめな彼のことだから、約束を忘れるはずがない。',
            romaji: 'Majime na kare no koto dakara, yakusoku o wasureru hazu ga nai.',
            meaning: {
              en: 'Since he is so diligent, there is no way he would forget the promise.',
              vi: 'Vì anh ấy nghiêm túc nên không thể nào quên lời hứa được.'
            }
          },
          {
            jp: '責任感の強い田中さんのことだから、きっと最後までやり遂げるだろう。',
            romaji:
              'Sekininkan no tsuyoi Tanaka-san no koto dakara, kitto saigo made yaritogeru darō.',
            meaning: {
              en: 'Knowing Tanaka and her strong sense of responsibility, she will surely see it through to the end.',
              vi: 'Vì là Tanaka có tinh thần trách nhiệm cao nên chắc chắn cô ấy sẽ làm đến cùng.'
            }
          }
        ]
      },
      {
        pattern: 'V/A はずがない',
        title: { en: 'There is no way that ...', vi: 'Không thể nào ...' },
        explanation: {
          en: 'Expresses strong conviction that something is impossible, based on what the speaker knows.',
          vi: 'Diễn đạt sự tin chắc rằng điều gì đó là không thể, dựa trên điều người nói biết.'
        },
        examples: [
          {
            jp: '彼が嘘をつくはずがない。',
            romaji: 'Kare ga uso o tsuku hazu ga nai.',
            meaning: {
              en: 'There is no way he would lie.',
              vi: 'Không thể nào anh ấy lại nói dối.'
            }
          },
          {
            jp: 'あんなに練習したのだから、負けるはずがない。',
            romaji: 'Anna ni renshū shita no dakara, makeru hazu ga nai.',
            meaning: {
              en: 'After practicing that much, there is no way we would lose.',
              vi: 'Đã luyện tập đến thế thì không thể nào thua được.'
            }
          }
        ]
      },
      {
        pattern: 'V に違いない',
        title: { en: 'Must be ..., surely ...', vi: 'Chắc chắn là ...' },
        explanation: {
          en: "States the speaker's firm guess that something is the case. Stronger than だろう.",
          vi: 'Nêu phán đoán chắc chắn của người nói rằng điều gì đó là đúng. Mạnh hơn だろう.'
        },
        examples: [
          {
            jp: '彼女は今ごろ会議に出ているに違いない。',
            romaji: 'Kanojo wa imagoro kaigi ni dete iru ni chigainai.',
            meaning: {
              en: 'She must be in the meeting right about now.',
              vi: 'Giờ này chắc chắn cô ấy đang dự họp.'
            }
          },
          {
            jp: '電気が消えているから、もう帰ったに違いない。',
            romaji: 'Denki ga kiete iru kara, mō kaetta ni chigainai.',
            meaning: {
              en: 'The lights are off, so he must have already gone home.',
              vi: 'Đèn đã tắt nên chắc chắn anh ấy đã về rồi.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Waiting for a reliable friend', vi: 'Chờ một người bạn đáng tin' },
        lines: [
          {
            jp: '友達の佐藤さんと駅で会う約束をした。',
            romaji: 'Tomodachi no Satō-san to eki de au yakusoku o shita.',
            meaning: {
              en: 'I made a promise to meet my friend Sato at the station.',
              vi: 'Tôi đã hẹn gặp người bạn Sato ở nhà ga.'
            }
          },
          {
            jp: '約束の時間になっても、彼はまだ来ていない。',
            romaji: 'Yakusoku no jikan ni natte mo, kare wa mada kite inai.',
            meaning: {
              en: 'Even though it is the appointed time, he still has not come.',
              vi: 'Dù đã đến giờ hẹn nhưng anh ấy vẫn chưa tới.'
            }
          },
          {
            jp: 'でも、まじめな佐藤さんのことだから、約束を忘れたはずがない。',
            romaji: 'Demo, majime na Satō-san no koto dakara, yakusoku o wasureta hazu ga nai.',
            meaning: {
              en: 'But knowing how diligent Sato is, there is no way he forgot the promise.',
              vi: 'Nhưng vì Sato vốn nghiêm túc nên không thể nào quên lời hẹn được.'
            }
          },
          {
            jp: 'きっと電車が遅れているに違いないと思って、待つことにした。',
            romaji: 'Kitto densha ga okurete iru ni chigainai to omotte, matsu koto ni shita.',
            meaning: {
              en: 'Thinking his train must surely be delayed, I decided to wait.',
              vi: 'Nghĩ rằng chắc chắn tàu của anh ấy bị trễ, tôi quyết định chờ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why does the writer believe Sato did not forget the promise?',
              vi: 'Vì sao người viết tin Sato không quên lời hẹn?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Because Sato is a diligent person',
                  vi: 'Vì Sato là người nghiêm túc'
                }
              },
              {
                id: 'b',
                label: { en: 'Because Sato called ahead', vi: 'Vì Sato đã gọi điện trước' }
              },
              {
                id: 'c',
                label: { en: 'Because Sato is never busy', vi: 'Vì Sato không bao giờ bận' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer guess is the reason Sato is late?',
              vi: 'Người viết đoán lý do Sato đến muộn là gì?'
            },
            choices: [
              { id: 'a', label: { en: 'He forgot the meeting', vi: 'Anh ấy quên cuộc hẹn' } },
              { id: 'b', label: { en: 'His train is delayed', vi: 'Tàu của anh ấy bị trễ' } },
              { id: 'c', label: { en: 'He went home already', vi: 'Anh ấy đã về nhà' } }
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
      en: 'As Expected of ...',
      vi: 'Đúng là ... có khác'
    },
    focus: {
      en: 'Praise or explain a fitting result with 〜だけあって / 〜だけに.',
      vi: 'Khen ngợi hoặc giải thích một kết quả xứng đáng với 〜だけあって / 〜だけに.'
    },
    vocab: [
      {
        kana: 'ろうほ',
        kanji: '老舗',
        romaji: 'rōho',
        meaning: { en: 'long-established shop', vi: 'cửa hàng lâu đời' }
      },
      {
        kana: 'ひょうばん',
        kanji: '評判',
        romaji: 'hyōban',
        meaning: { en: 'reputation', vi: 'tiếng tăm, danh tiếng' }
      },
      {
        kana: 'プロ',
        romaji: 'puro',
        meaning: { en: 'professional', vi: 'chuyên nghiệp' }
      },
      {
        kana: 'うで',
        kanji: '腕',
        romaji: 'ude',
        meaning: { en: 'skill, arm', vi: 'tay nghề, cánh tay' }
      },
      {
        kana: 'たかい',
        kanji: '高い',
        romaji: 'takai',
        meaning: { en: 'high, expensive', vi: 'cao, đắt' }
      },
      {
        kana: 'きたい',
        kanji: '期待',
        romaji: 'kitai',
        meaning: { en: 'expectation', vi: 'sự kỳ vọng' }
      },
      {
        kana: 'けいけん',
        kanji: '経験',
        romaji: 'keiken',
        meaning: { en: 'experience', vi: 'kinh nghiệm' }
      },
      {
        kana: 'みりょく',
        kanji: '魅力',
        romaji: 'miryoku',
        meaning: { en: 'charm, appeal', vi: 'sức hấp dẫn' }
      },
      {
        kana: 'えがお',
        kanji: '笑顔',
        romaji: 'egao',
        meaning: { en: 'smile, smiling face', vi: 'nụ cười' }
      },
      {
        kana: 'にんき',
        kanji: '人気',
        romaji: 'ninki',
        meaning: { en: 'popularity', vi: 'sự nổi tiếng, được ưa chuộng' }
      },
      {
        kana: 'がっかり',
        romaji: 'gakkari',
        meaning: { en: 'disappointed', vi: 'thất vọng' }
      },
      {
        kana: 'さすが',
        romaji: 'sasuga',
        meaning: { en: 'as one would expect', vi: 'quả nhiên, đúng là' }
      }
    ],
    grammar: [
      {
        pattern: 'N/V だけあって',
        title: {
          en: 'As expected of ... (fitting good result)',
          vi: 'Đúng là ... có khác (kết quả tốt xứng đáng)'
        },
        explanation: {
          en: 'Shows that a result matches what you would expect from the cause (skill, status, effort). Usually a positive, admiring result.',
          vi: 'Cho thấy kết quả khớp với điều có thể trông đợi từ nguyên nhân (tay nghề, địa vị, nỗ lực). Thường là kết quả tích cực, đáng khen.'
        },
        examples: [
          {
            jp: '老舗だけあって、この店の料理は本当においしい。',
            romaji: 'Rōho dake atte, kono mise no ryōri wa hontō ni oishii.',
            meaning: {
              en: "Being a long-established shop, this restaurant's food is truly delicious.",
              vi: 'Đúng là cửa hàng lâu đời có khác, món ăn ở đây thật sự ngon.'
            }
          },
          {
            jp: '彼は経験が長いだけあって、仕事がとても速い。',
            romaji: 'Kare wa keiken ga nagai dake atte, shigoto ga totemo hayai.',
            meaning: {
              en: 'As you would expect from his long experience, he works very fast.',
              vi: 'Đúng là người nhiều kinh nghiệm có khác, anh ấy làm việc rất nhanh.'
            }
          }
        ]
      },
      {
        pattern: 'N/V だけに',
        title: {
          en: 'Precisely because ... (so all the more)',
          vi: 'Chính vì ... nên càng ...'
        },
        explanation: {
          en: 'Like だけあって but emphasizes that the result is heightened by the cause; it can also lead to a negative or surprising outcome.',
          vi: 'Giống だけあって nhưng nhấn mạnh kết quả được tăng lên bởi nguyên nhân; cũng có thể dẫn tới kết quả tiêu cực hay bất ngờ.'
        },
        examples: [
          {
            jp: '期待が大きかっただけに、結果にがっかりした。',
            romaji: 'Kitai ga ōkikatta dake ni, kekka ni gakkari shita.',
            meaning: {
              en: 'Precisely because my expectations were high, I was disappointed by the result.',
              vi: 'Chính vì kỳ vọng lớn nên tôi càng thất vọng với kết quả.'
            }
          },
          {
            jp: 'プロの選手だけに、その動きは見事だった。',
            romaji: 'Puro no senshu dake ni, sono ugoki wa migoto datta.',
            meaning: {
              en: 'Being a professional player, his movements were all the more splendid.',
              vi: 'Chính vì là tuyển thủ chuyên nghiệp nên những động tác đó càng tuyệt vời.'
            }
          }
        ]
      },
      {
        pattern: 'さすが（に）N だ',
        title: { en: 'Truly living up to ...', vi: 'Quả đúng là ...' },
        explanation: {
          en: 'さすが praises something for meeting its high reputation. Often used together with だけあって.',
          vi: 'さすが khen điều gì đó vì đã đúng với danh tiếng cao của nó. Thường dùng cùng với だけあって.'
        },
        examples: [
          {
            jp: 'さすが人気の店だ、いつも行列ができている。',
            romaji: 'Sasuga ninki no mise da, itsumo gyōretsu ga dekite iru.',
            meaning: {
              en: 'Truly a popular shop - there is always a line.',
              vi: 'Quả đúng là quán nổi tiếng, lúc nào cũng có người xếp hàng.'
            }
          },
          {
            jp: 'さすがプロだけあって、説明が分かりやすい。',
            romaji: 'Sasuga puro dake atte, setsumei ga wakariyasui.',
            meaning: {
              en: 'As expected of a professional, the explanation is easy to understand.',
              vi: 'Đúng là dân chuyên nghiệp có khác, lời giải thích rất dễ hiểu.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A famous old restaurant', vi: 'Một nhà hàng lâu đời nổi tiếng' },
        lines: [
          {
            jp: '友達に評判のいいラーメン屋へ連れて行ってもらった。',
            romaji: 'Tomodachi ni hyōban no ii rāmen-ya e tsurete itte moratta.',
            meaning: {
              en: 'A friend took me to a ramen shop with a good reputation.',
              vi: 'Bạn tôi đã đưa tôi đến một quán ramen có tiếng.'
            }
          },
          {
            jp: '百年続く老舗だけあって、スープの味が深かった。',
            romaji: 'Hyaku-nen tsuzuku rōho dake atte, sūpu no aji ga fukakatta.',
            meaning: {
              en: 'As expected of a shop with a hundred years of history, the soup had a deep flavor.',
              vi: 'Đúng là quán lâu đời trăm năm có khác, vị nước dùng rất đậm đà.'
            }
          },
          {
            jp: '人気の店だけに、昼は長い行列ができていた。',
            romaji: 'Ninki no mise dake ni, hiru wa nagai gyōretsu ga dekite ita.',
            meaning: {
              en: 'Precisely because it is popular, there was a long line at lunchtime.',
              vi: 'Chính vì là quán nổi tiếng nên buổi trưa có hàng dài người xếp hàng.'
            }
          },
          {
            jp: 'さすが評判どおりで、また来たいと思った。',
            romaji: 'Sasuga hyōban-dōri de, mata kitai to omotta.',
            meaning: {
              en: 'It truly lived up to its reputation, and I wanted to come again.',
              vi: 'Quả đúng như lời đồn, tôi muốn quay lại lần nữa.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why was the soup so flavorful?',
              vi: 'Vì sao nước dùng lại đậm đà như vậy?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Because the shop has a long history',
                  vi: 'Vì quán có lịch sử lâu đời'
                }
              },
              { id: 'b', label: { en: 'Because it was cheap', vi: 'Vì nó rẻ' } },
              { id: 'c', label: { en: 'Because it was lunchtime', vi: 'Vì đang là giờ trưa' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why was there a long line at lunch?',
              vi: 'Vì sao buổi trưa có hàng dài xếp hàng?'
            },
            choices: [
              { id: 'a', label: { en: 'Because the shop is popular', vi: 'Vì quán nổi tiếng' } },
              { id: 'b', label: { en: 'Because the shop is small', vi: 'Vì quán nhỏ' } },
              { id: 'c', label: { en: 'Because it was raining', vi: 'Vì trời mưa' } }
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
      en: 'Reasoning from Facts',
      vi: 'Lập luận từ sự thật'
    },
    focus: {
      en: 'Explain a name, conclusion, or judgment that comes from a fact with 〜ことから.',
      vi: 'Giải thích tên gọi, kết luận hay phán đoán xuất phát từ một sự thật với 〜ことから.'
    },
    vocab: [
      {
        kana: 'ゆらい',
        kanji: '由来',
        romaji: 'yurai',
        meaning: { en: 'origin (of a name)', vi: 'nguồn gốc (tên gọi)' }
      },
      {
        kana: 'なづける',
        kanji: '名付ける',
        romaji: 'nazukeru',
        meaning: { en: 'to name', vi: 'đặt tên' }
      },
      {
        kana: 'かたち',
        kanji: '形',
        romaji: 'katachi',
        meaning: { en: 'shape, form', vi: 'hình dạng' }
      },
      {
        kana: 'にる',
        kanji: '似る',
        romaji: 'niru',
        meaning: { en: 'to resemble', vi: 'giống, tương tự' }
      },
      {
        kana: 'はんだん',
        kanji: '判断',
        romaji: 'handan',
        meaning: { en: 'judgment, decision', vi: 'phán đoán' }
      },
      {
        kana: 'こんせき',
        kanji: '痕跡',
        romaji: 'konseki',
        meaning: { en: 'trace, mark', vi: 'dấu vết' }
      },
      {
        kana: 'しょうこ',
        kanji: '証拠',
        romaji: 'shōko',
        meaning: { en: 'evidence, proof', vi: 'bằng chứng' }
      },
      {
        kana: 'ゆうめい',
        kanji: '有名',
        romaji: 'yūmei',
        meaning: { en: 'famous', vi: 'nổi tiếng' }
      },
      {
        kana: 'ちめい',
        kanji: '地名',
        romaji: 'chimei',
        meaning: { en: 'place name', vi: 'địa danh' }
      },
      {
        kana: 'いわれる',
        kanji: '言われる',
        romaji: 'iwareru',
        meaning: { en: 'to be said, called', vi: 'được gọi là, được cho là' }
      },
      {
        kana: 'みなと',
        kanji: '港',
        romaji: 'minato',
        meaning: { en: 'harbor, port', vi: 'cảng' }
      },
      {
        kana: 'むかし',
        kanji: '昔',
        romaji: 'mukashi',
        meaning: { en: 'long ago, the past', vi: 'ngày xưa' }
      }
    ],
    grammar: [
      {
        pattern: 'V/A ことから',
        title: {
          en: 'From the fact that ... (origin / conclusion)',
          vi: 'Từ việc ... (nguồn gốc / kết luận)'
        },
        explanation: {
          en: 'Gives the fact or reason from which a name, judgment, or conclusion is derived. Common when explaining the origin of a name.',
          vi: 'Nêu sự thật hay căn cứ mà từ đó suy ra một tên gọi, phán đoán hay kết luận. Hay dùng khi giải thích nguồn gốc của tên.'
        },
        examples: [
          {
            jp: '富士山に形が似ていることから、この山は「富士」と名付けられた。',
            romaji:
              'Fujisan ni katachi ga nite iru koto kara, kono yama wa "Fuji" to nazukerareta.',
            meaning: {
              en: 'Because its shape resembles Mt. Fuji, this mountain was named "Fuji."',
              vi: 'Vì có hình dạng giống núi Phú Sĩ nên ngọn núi này được đặt tên là "Phú Sĩ".'
            }
          },
          {
            jp: '窓が開いていたことから、犯人はここから入ったと考えられる。',
            romaji: 'Mado ga aite ita koto kara, hannin wa koko kara haitta to kangaerareru.',
            meaning: {
              en: 'From the fact that the window was open, it is thought the culprit entered here.',
              vi: 'Từ việc cửa sổ mở, có thể cho rằng thủ phạm đã vào từ đây.'
            }
          }
        ]
      },
      {
        pattern: 'V/A と考えられる',
        title: { en: 'It can be thought that ...', vi: 'Có thể cho rằng ...' },
        explanation: {
          en: 'A formal way to state a reasoned conclusion or general view, common in explanations and writing.',
          vi: 'Cách trang trọng để nêu một kết luận có cơ sở hoặc quan điểm chung, hay gặp trong văn giải thích.'
        },
        examples: [
          {
            jp: 'この痕跡から、昔ここに港があったと考えられる。',
            romaji: 'Kono konseki kara, mukashi koko ni minato ga atta to kangaerareru.',
            meaning: {
              en: 'From these traces, it can be thought there was once a harbor here.',
              vi: 'Từ những dấu vết này, có thể cho rằng ngày xưa nơi đây từng có cảng.'
            }
          },
          {
            jp: '雲の様子から、午後は雨になると考えられる。',
            romaji: 'Kumo no yōsu kara, gogo wa ame ni naru to kangaerareru.',
            meaning: {
              en: 'Judging from the clouds, it can be thought it will rain in the afternoon.',
              vi: 'Nhìn tình hình mây, có thể cho rằng chiều sẽ mưa.'
            }
          }
        ]
      },
      {
        pattern: 'N と言われている',
        title: { en: 'It is said to be ...', vi: 'Được cho là ...' },
        explanation: {
          en: 'Reports a widely held belief or claim without naming the source.',
          vi: 'Truyền đạt một niềm tin hay nhận định phổ biến mà không nêu nguồn.'
        },
        examples: [
          {
            jp: 'この地名は港の町だったことに由来すると言われている。',
            romaji: 'Kono chimei wa minato no machi datta koto ni yurai suru to iwarete iru.',
            meaning: {
              en: 'This place name is said to originate from its having been a harbor town.',
              vi: 'Địa danh này được cho là bắt nguồn từ việc nơi đây từng là thị trấn cảng.'
            }
          },
          {
            jp: 'この花は薬になると言われている。',
            romaji: 'Kono hana wa kusuri ni naru to iwarete iru.',
            meaning: {
              en: 'This flower is said to be usable as medicine.',
              vi: 'Loài hoa này được cho là có thể làm thuốc.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: "The origin of a town's name", vi: 'Nguồn gốc tên một thị trấn' },
        lines: [
          {
            jp: 'この町の名前には面白い由来がある。',
            romaji: 'Kono machi no namae ni wa omoshiroi yurai ga aru.',
            meaning: {
              en: "There is an interesting origin to this town's name.",
              vi: 'Tên của thị trấn này có một nguồn gốc thú vị.'
            }
          },
          {
            jp: '昔ここに大きな港があったことから、「港町」と名付けられた。',
            romaji:
              'Mukashi koko ni ōki na minato ga atta koto kara, "Minatomachi" to nazukerareta.',
            meaning: {
              en: 'Because there was once a large harbor here, it was named "Harbor Town."',
              vi: 'Vì ngày xưa nơi đây có một cảng lớn nên được đặt tên là "Thị trấn Cảng".'
            }
          },
          {
            jp: '今も古い石が残っていることから、当時の様子が分かる。',
            romaji: 'Ima mo furui ishi ga nokotte iru koto kara, tōji no yōsu ga wakaru.',
            meaning: {
              en: 'From the old stones that still remain, we can understand what it was like back then.',
              vi: 'Từ những hòn đá cũ vẫn còn sót lại, ta có thể hiểu được quang cảnh thời đó.'
            }
          },
          {
            jp: 'この港は貿易で栄えていたと言われている。',
            romaji: 'Kono minato wa bōeki de sakaete ita to iwarete iru.',
            meaning: {
              en: 'This harbor is said to have prospered through trade.',
              vi: 'Cảng này được cho là từng phồn thịnh nhờ buôn bán.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why was the town named "Harbor Town"?',
              vi: 'Vì sao thị trấn được đặt tên là "Thị trấn Cảng"?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Because a large harbor was once there',
                  vi: 'Vì nơi đây từng có cảng lớn'
                }
              },
              {
                id: 'b',
                label: { en: 'Because the sea is far away', vi: 'Vì biển ở rất xa' }
              },
              {
                id: 'c',
                label: { en: 'Because of a famous person', vi: 'Vì một người nổi tiếng' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is said about the harbor in the past?',
              vi: 'Người ta nói gì về cảng trong quá khứ?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It prospered through trade', vi: 'Nó phồn thịnh nhờ buôn bán' }
              },
              { id: 'b', label: { en: 'It was always empty', vi: 'Nó luôn vắng vẻ' } },
              {
                id: 'c',
                label: { en: 'It was destroyed by war', vi: 'Nó bị chiến tranh phá hủy' }
              }
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
      en: 'Overwhelmed by Emotion',
      vi: 'Choáng ngợp bởi cảm xúc'
    },
    focus: {
      en: 'Express that an extreme degree of feeling caused something with 〜あまり(に).',
      vi: 'Diễn đạt rằng một mức độ cảm xúc quá lớn đã gây ra điều gì đó với 〜あまり(に).'
    },
    vocab: [
      {
        kana: 'かんどう',
        kanji: '感動',
        romaji: 'kandō',
        meaning: { en: 'being moved, deep emotion', vi: 'sự xúc động' }
      },
      {
        kana: 'なみだ',
        kanji: '涙',
        romaji: 'namida',
        meaning: { en: 'tears', vi: 'nước mắt' }
      },
      {
        kana: 'しんぱい',
        kanji: '心配',
        romaji: 'shinpai',
        meaning: { en: 'worry, anxiety', vi: 'sự lo lắng' }
      },
      {
        kana: 'いそがしい',
        kanji: '忙しい',
        romaji: 'isogashii',
        meaning: { en: 'busy', vi: 'bận rộn' }
      },
      {
        kana: 'たおれる',
        kanji: '倒れる',
        romaji: 'taoreru',
        meaning: { en: 'to collapse, fall ill', vi: 'gục ngã, ngã bệnh' }
      },
      {
        kana: 'むちゅう',
        kanji: '夢中',
        romaji: 'muchū',
        meaning: { en: 'absorbed, crazy about', vi: 'mải mê, say sưa' }
      },
      {
        kana: 'おどろく',
        kanji: '驚く',
        romaji: 'odoroku',
        meaning: { en: 'to be surprised', vi: 'ngạc nhiên, kinh ngạc' }
      },
      {
        kana: 'こうふん',
        kanji: '興奮',
        romaji: 'kōfun',
        meaning: { en: 'excitement', vi: 'sự phấn khích' }
      },
      {
        kana: 'ねむれない',
        kanji: '眠れない',
        romaji: 'nemurenai',
        meaning: { en: 'unable to sleep', vi: 'không ngủ được' }
      },
      {
        kana: 'うれしい',
        kanji: '嬉しい',
        romaji: 'ureshii',
        meaning: { en: 'glad, happy', vi: 'vui mừng' }
      },
      {
        kana: 'こえ',
        kanji: '声',
        romaji: 'koe',
        meaning: { en: 'voice', vi: 'giọng nói' }
      },
      {
        kana: 'でる',
        kanji: '出る',
        romaji: 'deru',
        meaning: { en: 'to come out', vi: 'phát ra, ra' }
      }
    ],
    grammar: [
      {
        pattern: 'N の／V あまり（に）',
        title: {
          en: 'So much that ... (out of excessive feeling)',
          vi: 'Quá ... đến mức ... (vì cảm xúc thái quá)'
        },
        explanation: {
          en: 'Indicates that an excessive degree of an emotion or state caused an (often unexpected or negative) result. Nouns take の before あまり.',
          vi: 'Cho thấy mức độ quá lớn của một cảm xúc hay trạng thái đã gây ra kết quả (thường bất ngờ hoặc tiêu cực). Danh từ thêm の trước あまり.'
        },
        examples: [
          {
            jp: '感動のあまり、涙が出てしまった。',
            romaji: 'Kandō no amari, namida ga dete shimatta.',
            meaning: {
              en: 'I was so moved that tears came out.',
              vi: 'Tôi xúc động đến mức trào nước mắt.'
            }
          },
          {
            jp: '忙しさのあまり、食事をするのも忘れていた。',
            romaji: 'Isogashisa no amari, shokuji o suru no mo wasurete ita.',
            meaning: {
              en: 'I was so busy that I even forgot to eat.',
              vi: 'Tôi bận đến mức quên cả ăn cơm.'
            }
          }
        ]
      },
      {
        pattern: 'V てしまう',
        title: { en: 'End up doing / regret', vi: 'Lỡ làm / đáng tiếc' },
        explanation: {
          en: 'Shows completion, an unintended outcome, or regret. Pairs naturally with あまり results.',
          vi: 'Diễn đạt sự hoàn tất, kết quả ngoài ý muốn hoặc sự tiếc nuối. Đi rất tự nhiên với kết quả của あまり.'
        },
        examples: [
          {
            jp: '心配のあまり、夜も眠れなくなってしまった。',
            romaji: 'Shinpai no amari, yoru mo nemurenaku natte shimatta.',
            meaning: {
              en: 'I was so worried that I ended up unable to sleep at night.',
              vi: 'Vì quá lo lắng, tôi rốt cuộc không ngủ được vào ban đêm.'
            }
          },
          {
            jp: '驚いて、コップを落としてしまった。',
            romaji: 'Odoroite, koppu o otoshite shimatta.',
            meaning: {
              en: 'I was startled and dropped the cup.',
              vi: 'Tôi giật mình và làm rơi cái cốc.'
            }
          }
        ]
      },
      {
        pattern: 'N に夢中になる',
        title: { en: 'To be absorbed in ...', vi: 'Mải mê với ...' },
        explanation: {
          en: 'Expresses being so into something that one loses track of everything else.',
          vi: 'Diễn đạt việc say mê điều gì đó đến quên hết mọi thứ khác.'
        },
        examples: [
          {
            jp: 'ゲームに夢中になるあまり、宿題を忘れてしまった。',
            romaji: 'Gēmu ni muchū ni naru amari, shukudai o wasurete shimatta.',
            meaning: {
              en: 'I got so absorbed in the game that I forgot my homework.',
              vi: 'Tôi mải mê chơi game đến mức quên làm bài tập.'
            }
          },
          {
            jp: '彼は仕事に夢中で、周りが見えていない。',
            romaji: 'Kare wa shigoto ni muchū de, mawari ga miete inai.',
            meaning: {
              en: "He is so absorbed in work that he can't see what is around him.",
              vi: 'Anh ấy mải mê công việc đến mức không nhìn thấy xung quanh.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A moving concert', vi: 'Một buổi hòa nhạc xúc động' },
        lines: [
          {
            jp: '昨日、ずっと好きだった歌手のコンサートに行った。',
            romaji: 'Kinō, zutto suki datta kashu no konsāto ni itta.',
            meaning: {
              en: 'Yesterday I went to a concert by a singer I had long loved.',
              vi: 'Hôm qua tôi đã đi xem buổi hòa nhạc của ca sĩ tôi yêu thích từ lâu.'
            }
          },
          {
            jp: '生の歌声に感動のあまり、涙が止まらなかった。',
            romaji: 'Nama no utagoe ni kandō no amari, namida ga tomaranakatta.',
            meaning: {
              en: "I was so moved by the live singing that I couldn't stop my tears.",
              vi: 'Tôi xúc động trước giọng hát trực tiếp đến mức nước mắt không ngừng rơi.'
            }
          },
          {
            jp: '興奮のあまり、その夜はなかなか眠れなかった。',
            romaji: 'Kōfun no amari, sono yoru wa nakanaka nemurenakatta.',
            meaning: {
              en: 'I was so excited that I could hardly sleep that night.',
              vi: 'Vì quá phấn khích, đêm đó tôi mãi không ngủ được.'
            }
          },
          {
            jp: '音楽に夢中になるあまり、終電を逃してしまった。',
            romaji: 'Ongaku ni muchū ni naru amari, shūden o nogashite shimatta.',
            meaning: {
              en: 'I got so absorbed in the music that I missed the last train.',
              vi: 'Tôi mải mê âm nhạc đến mức lỡ chuyến tàu cuối.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: "Why couldn't the writer stop crying?",
              vi: 'Vì sao người viết không cầm được nước mắt?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'They were deeply moved by the singing',
                  vi: 'Họ quá xúc động vì giọng hát'
                }
              },
              { id: 'b', label: { en: 'They were very tired', vi: 'Họ rất mệt' } },
              { id: 'c', label: { en: 'The hall was cold', vi: 'Hội trường lạnh' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened because the writer was absorbed in the music?',
              vi: 'Điều gì xảy ra vì người viết mải mê âm nhạc?'
            },
            choices: [
              { id: 'a', label: { en: 'They missed the last train', vi: 'Họ lỡ chuyến tàu cuối' } },
              { id: 'b', label: { en: 'They lost their ticket', vi: 'Họ làm mất vé' } },
              { id: 'c', label: { en: 'They forgot their bag', vi: 'Họ quên túi xách' } }
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
      en: 'In Spite of It All',
      vi: 'Bất chấp tất cả'
    },
    focus: {
      en: 'Stress a result that goes against expectations with 〜にもかかわらず.',
      vi: 'Nhấn mạnh một kết quả đi ngược lại kỳ vọng với 〜にもかかわらず.'
    },
    vocab: [
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'sự nỗ lực' }
      },
      {
        kana: 'あくてんこう',
        kanji: '悪天候',
        romaji: 'akutenkō',
        meaning: { en: 'bad weather', vi: 'thời tiết xấu' }
      },
      {
        kana: 'たいちょう',
        kanji: '体調',
        romaji: 'taichō',
        meaning: { en: 'physical condition', vi: 'tình trạng sức khỏe' }
      },
      {
        kana: 'けっか',
        kanji: '結果',
        romaji: 'kekka',
        meaning: { en: 'result, outcome', vi: 'kết quả' }
      },
      {
        kana: 'さんか',
        kanji: '参加',
        romaji: 'sanka',
        meaning: { en: 'participation', vi: 'sự tham gia' }
      },
      {
        kana: 'よそう',
        kanji: '予想',
        romaji: 'yosō',
        meaning: { en: 'expectation, forecast', vi: 'dự đoán' }
      },
      {
        kana: 'はんたい',
        kanji: '反対',
        romaji: 'hantai',
        meaning: { en: 'opposition', vi: 'sự phản đối' }
      },
      {
        kana: 'せいこう',
        kanji: '成功',
        romaji: 'seikō',
        meaning: { en: 'success', vi: 'thành công' }
      },
      {
        kana: 'おおぜい',
        kanji: '大勢',
        romaji: 'ōzei',
        meaning: { en: 'a large crowd', vi: 'đông người' }
      },
      {
        kana: 'あつまる',
        kanji: '集まる',
        romaji: 'atsumaru',
        meaning: { en: 'to gather', vi: 'tụ tập, tập trung' }
      },
      {
        kana: 'けんめい',
        kanji: '懸命',
        romaji: 'kenmei',
        meaning: { en: 'strenuous, all-out', vi: 'hết mình, ra sức' }
      },
      {
        kana: 'いっぽう',
        kanji: '一方',
        romaji: 'ippō',
        meaning: { en: 'on the other hand', vi: 'mặt khác' }
      }
    ],
    grammar: [
      {
        pattern: 'N/V にもかかわらず',
        title: { en: 'In spite of / despite', vi: 'Mặc dù / bất chấp' },
        explanation: {
          en: 'A formal expression meaning the result is contrary to what the first clause would lead you to expect. Stronger and more written than のに.',
          vi: 'Cách diễn đạt trang trọng nghĩa là kết quả trái với điều mệnh đề đầu khiến ta trông đợi. Mạnh và mang tính văn viết hơn のに.'
        },
        examples: [
          {
            jp: '悪天候にもかかわらず、大勢の人が集まった。',
            romaji: 'Akutenkō ni mo kakawarazu, ōzei no hito ga atsumatta.',
            meaning: {
              en: 'Despite the bad weather, a large crowd gathered.',
              vi: 'Bất chấp thời tiết xấu, rất đông người vẫn tụ tập.'
            }
          },
          {
            jp: '努力したにもかかわらず、結果は出なかった。',
            romaji: 'Doryoku shita ni mo kakawarazu, kekka wa denakatta.',
            meaning: {
              en: 'Despite my efforts, no results came.',
              vi: 'Mặc dù đã nỗ lực, kết quả vẫn không đạt được.'
            }
          }
        ]
      },
      {
        pattern: 'A 一方（で）',
        title: { en: 'On the one hand ... on the other', vi: 'Một mặt ... mặt khác' },
        explanation: {
          en: 'Contrasts two coexisting facts or sides of a situation in a balanced way.',
          vi: 'Đối chiếu hai sự thật hoặc hai mặt cùng tồn tại của một tình huống một cách cân bằng.'
        },
        examples: [
          {
            jp: '参加者は増えた一方で、準備の負担も大きくなった。',
            romaji: 'Sankasha wa fueta ippō de, junbi no futan mo ōkiku natta.',
            meaning: {
              en: 'While the number of participants grew, the burden of preparation also increased.',
              vi: 'Một mặt số người tham gia tăng, mặt khác gánh nặng chuẩn bị cũng lớn hơn.'
            }
          },
          {
            jp: '彼は厳しい一方で、とても優しい。',
            romaji: 'Kare wa kibishii ippō de, totemo yasashii.',
            meaning: {
              en: 'He is strict on the one hand, but very kind on the other.',
              vi: 'Một mặt anh ấy nghiêm khắc, mặt khác lại rất hiền.'
            }
          }
        ]
      },
      {
        pattern: 'よそうに反して',
        title: { en: 'Contrary to expectations', vi: 'Trái với dự đoán' },
        explanation: {
          en: '...に反して means a result goes against a prediction, rule, or wish.',
          vi: '...に反して nghĩa là kết quả đi ngược lại một dự đoán, quy tắc hay mong muốn.'
        },
        examples: [
          {
            jp: '予想に反して、試合は大成功だった。',
            romaji: 'Yosō ni hanshite, shiai wa daiseikō datta.',
            meaning: {
              en: 'Contrary to expectations, the match was a great success.',
              vi: 'Trái với dự đoán, trận đấu đã thành công rực rỡ.'
            }
          },
          {
            jp: '親の反対に反して、彼女は留学を決めた。',
            romaji: 'Oya no hantai ni hanshite, kanojo wa ryūgaku o kimeta.',
            meaning: {
              en: "Against her parents' opposition, she decided to study abroad.",
              vi: 'Bất chấp sự phản đối của bố mẹ, cô ấy quyết định đi du học.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'An outdoor event in the rain', vi: 'Sự kiện ngoài trời dưới mưa' },
        lines: [
          {
            jp: '先週末、町の音楽祭が開かれた。',
            romaji: 'Senshūmatsu, machi no ongakusai ga hirakareta.',
            meaning: {
              en: "Last weekend, the town's music festival was held.",
              vi: 'Cuối tuần trước, lễ hội âm nhạc của thị trấn đã được tổ chức.'
            }
          },
          {
            jp: '雨という悪天候にもかかわらず、会場には大勢の人が集まった。',
            romaji: 'Ame to iu akutenkō ni mo kakawarazu, kaijō ni wa ōzei no hito ga atsumatta.',
            meaning: {
              en: 'Despite the bad weather of rain, a large crowd gathered at the venue.',
              vi: 'Bất chấp thời tiết xấu là mưa, rất đông người đã tụ tập ở hội trường.'
            }
          },
          {
            jp: '予想に反して、入場者は去年の倍になった。',
            romaji: 'Yosō ni hanshite, nyūjōsha wa kyonen no bai ni natta.',
            meaning: {
              en: 'Contrary to expectations, the number of attendees doubled from last year.',
              vi: 'Trái với dự đoán, số người vào cửa đã tăng gấp đôi năm ngoái.'
            }
          },
          {
            jp: 'スタッフは大変だった一方で、祭りの成功をとても喜んでいた。',
            romaji: 'Sutaffu wa taihen datta ippō de, matsuri no seikō o totemo yorokonde ita.',
            meaning: {
              en: "While the staff had a hard time, they were also very glad about the festival's success.",
              vi: 'Một mặt nhân viên rất vất vả, mặt khác họ rất vui vì lễ hội thành công.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened despite the rain?',
              vi: 'Điều gì đã xảy ra bất chấp trời mưa?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'A large crowd still gathered', vi: 'Rất đông người vẫn tụ tập' }
              },
              { id: 'b', label: { en: 'The event was canceled', vi: 'Sự kiện bị hủy' } },
              { id: 'c', label: { en: 'No one came', vi: 'Không ai đến' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How did the number of attendees compare to last year?',
              vi: 'Số người tham dự so với năm ngoái thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'It doubled', vi: 'Tăng gấp đôi' } },
              { id: 'b', label: { en: 'It halved', vi: 'Giảm một nửa' } },
              { id: 'c', label: { en: 'It stayed the same', vi: 'Giữ nguyên' } }
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
      en: 'Even While ...',
      vi: 'Dù rằng ...'
    },
    focus: {
      en: 'Show a contrast between two coexisting facts with 〜ながら(も).',
      vi: 'Cho thấy sự tương phản giữa hai sự thật cùng tồn tại với 〜ながら(も).'
    },
    vocab: [
      {
        kana: 'まずしい',
        kanji: '貧しい',
        romaji: 'mazushii',
        meaning: { en: 'poor, needy', vi: 'nghèo, túng thiếu' }
      },
      {
        kana: 'しあわせ',
        kanji: '幸せ',
        romaji: 'shiawase',
        meaning: { en: 'happiness, happy', vi: 'hạnh phúc' }
      },
      {
        kana: 'わかい',
        kanji: '若い',
        romaji: 'wakai',
        meaning: { en: 'young', vi: 'trẻ' }
      },
      {
        kana: 'りっぱ',
        kanji: '立派',
        romaji: 'rippa',
        meaning: { en: 'splendid, admirable', vi: 'xuất sắc, đáng nể' }
      },
      {
        kana: 'ざんねん',
        kanji: '残念',
        romaji: 'zannen',
        meaning: { en: 'regrettable', vi: 'đáng tiếc' }
      },
      {
        kana: 'きづく',
        kanji: '気づく',
        romaji: 'kizuku',
        meaning: { en: 'to notice, realize', vi: 'nhận ra' }
      },
      {
        kana: 'みとめる',
        kanji: '認める',
        romaji: 'mitomeru',
        meaning: { en: 'to admit, acknowledge', vi: 'thừa nhận, công nhận' }
      },
      {
        kana: 'けってん',
        kanji: '欠点',
        romaji: 'ketten',
        meaning: { en: 'fault, weak point', vi: 'khuyết điểm' }
      },
      {
        kana: 'どりょくか',
        kanji: '努力家',
        romaji: 'doryokuka',
        meaning: { en: 'hard worker', vi: 'người chăm chỉ' }
      },
      {
        kana: 'けんきょ',
        kanji: '謙虚',
        romaji: 'kenkyo',
        meaning: { en: 'modest, humble', vi: 'khiêm tốn' }
      },
      {
        kana: 'のうりょく',
        kanji: '能力',
        romaji: 'nōryoku',
        meaning: { en: 'ability', vi: 'năng lực' }
      },
      {
        kana: 'むり',
        kanji: '無理',
        romaji: 'muri',
        meaning: { en: 'impossible, unreasonable', vi: 'quá sức, vô lý' }
      }
    ],
    grammar: [
      {
        pattern: 'V/A/N ながら（も）',
        title: { en: 'Although / even though', vi: 'Mặc dù / dù rằng' },
        explanation: {
          en: 'Connects two facts that seem to clash. Verbs use the ます-stem, い-adjectives stay plain, and nouns/な-adjectives attach directly. も adds emphasis.',
          vi: 'Nối hai sự thật có vẻ mâu thuẫn. Động từ dùng thể ます bỏ ます, tính từ -い giữ nguyên, danh từ/tính từ -な gắn trực tiếp. も để nhấn mạnh.'
        },
        examples: [
          {
            jp: '彼は貧しいながらも、いつも幸せそうだ。',
            romaji: 'Kare wa mazushii nagara mo, itsumo shiawase sō da.',
            meaning: {
              en: 'Although he is poor, he always seems happy.',
              vi: 'Dù nghèo nhưng anh ấy lúc nào trông cũng hạnh phúc.'
            }
          },
          {
            jp: '失敗だと知りながら、彼は挑戦を続けた。',
            romaji: 'Shippai da to shiri nagara, kare wa chōsen o tsuzuketa.',
            meaning: {
              en: 'Even while knowing it was a failure, he kept on trying.',
              vi: 'Dù biết là thất bại, anh ấy vẫn tiếp tục thử thách.'
            }
          }
        ]
      },
      {
        pattern: 'V/A つつ（も）',
        title: { en: 'While ..., even though ...', vi: 'Trong khi ..., dù ...' },
        explanation: {
          en: "A more formal, written equivalent of ながら(も), often used to show acting against one's own awareness.",
          vi: 'Tương đương trang trọng, mang tính văn viết của ながら(も), thường dùng để chỉ việc làm trái với nhận thức của chính mình.'
        },
        examples: [
          {
            jp: '体に悪いと知りつつも、夜更かしをしてしまう。',
            romaji: 'Karada ni warui to shiri tsutsu mo, yofukashi o shite shimau.',
            meaning: {
              en: 'Even knowing it is bad for me, I end up staying up late.',
              vi: 'Dù biết là hại sức khỏe, tôi vẫn cứ thức khuya.'
            }
          },
          {
            jp: '欠点を認めつつ、彼女は前へ進んだ。',
            romaji: 'Ketten o mitome tsutsu, kanojo wa mae e susunda.',
            meaning: {
              en: 'While acknowledging her faults, she moved forward.',
              vi: 'Vừa thừa nhận khuyết điểm, cô ấy vừa tiến về phía trước.'
            }
          }
        ]
      },
      {
        pattern: 'N らしい',
        title: { en: 'Typical of / befitting ...', vi: 'Đúng chất / xứng với ...' },
        explanation: {
          en: 'Indicates that something is characteristic of, or behaves as befits, the noun it follows.',
          vi: 'Cho thấy điều gì đó mang đặc trưng của, hoặc cư xử đúng với danh từ đứng trước.'
        },
        examples: [
          {
            jp: '若いながらも、彼はリーダーらしい態度を見せた。',
            romaji: 'Wakai nagara mo, kare wa rīdā rashii taido o miseta.',
            meaning: {
              en: 'Though young, he showed an attitude befitting a leader.',
              vi: 'Dù còn trẻ, anh ấy đã thể hiện thái độ đúng chất một người lãnh đạo.'
            }
          },
          {
            jp: '彼女は謙虚で、本当に努力家らしい人だ。',
            romaji: 'Kanojo wa kenkyo de, hontō ni doryokuka rashii hito da.',
            meaning: {
              en: 'She is modest and truly the kind of person you would expect a hard worker to be.',
              vi: 'Cô ấy khiêm tốn và thật sự là kiểu người đúng chất một người chăm chỉ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A humble young leader', vi: 'Người lãnh đạo trẻ khiêm tốn' },
        lines: [
          {
            jp: '新しいリーダーの森さんは、まだ二十代だ。',
            romaji: 'Atarashii rīdā no Mori-san wa, mada nijū-dai da.',
            meaning: {
              en: 'Mori, the new leader, is still in his twenties.',
              vi: 'Anh Mori, người lãnh đạo mới, vẫn còn ở độ tuổi đôi mươi.'
            }
          },
          {
            jp: '若いながらも、彼の判断はいつも冷静だ。',
            romaji: 'Wakai nagara mo, kare no handan wa itsumo reisei da.',
            meaning: {
              en: 'Although he is young, his decisions are always calm.',
              vi: 'Dù còn trẻ, các quyết định của anh ấy luôn điềm tĩnh.'
            }
          },
          {
            jp: '自分の欠点を認めつつ、彼は毎日努力を続けている。',
            romaji: 'Jibun no ketten o mitome tsutsu, kare wa mainichi doryoku o tsuzukete iru.',
            meaning: {
              en: 'While admitting his own faults, he keeps making an effort every day.',
              vi: 'Vừa thừa nhận khuyết điểm của mình, anh ấy vẫn nỗ lực mỗi ngày.'
            }
          },
          {
            jp: '謙虚なところが、本当にリーダーらしいと皆が言う。',
            romaji: 'Kenkyo na tokoro ga, hontō ni rīdā rashii to mina ga iu.',
            meaning: {
              en: 'Everyone says his modesty is truly befitting of a leader.',
              vi: 'Mọi người nói rằng sự khiêm tốn của anh ấy thật đúng chất một người lãnh đạo.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What is said about Mori despite his youth?',
              vi: 'Người ta nói gì về Mori dù anh ấy còn trẻ?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'His decisions are always calm',
                  vi: 'Quyết định của anh ấy luôn điềm tĩnh'
                }
              },
              {
                id: 'b',
                label: { en: 'He is often careless', vi: 'Anh ấy hay bất cẩn' }
              },
              {
                id: 'c',
                label: { en: 'He rarely works', vi: 'Anh ấy hiếm khi làm việc' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What do people say is befitting of a leader?',
              vi: 'Mọi người nói điều gì xứng với một người lãnh đạo?'
            },
            choices: [
              { id: 'a', label: { en: 'His modesty', vi: 'Sự khiêm tốn của anh ấy' } },
              { id: 'b', label: { en: 'His age', vi: 'Tuổi tác của anh ấy' } },
              { id: 'c', label: { en: 'His loud voice', vi: 'Giọng nói to của anh ấy' } }
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
      en: 'Although You Say So',
      vi: 'Tuy nói vậy nhưng'
    },
    focus: {
      en: 'Qualify or correct an impression with 〜といっても.',
      vi: 'Bổ sung hoặc đính chính một ấn tượng với 〜といっても.'
    },
    vocab: [
      {
        kana: 'りょこう',
        kanji: '旅行',
        romaji: 'ryokō',
        meaning: { en: 'travel, trip', vi: 'du lịch, chuyến đi' }
      },
      {
        kana: 'ちかい',
        kanji: '近い',
        romaji: 'chikai',
        meaning: { en: 'near, close', vi: 'gần' }
      },
      {
        kana: 'りょう',
        kanji: '量',
        romaji: 'ryō',
        meaning: { en: 'amount, quantity', vi: 'lượng, số lượng' }
      },
      {
        kana: 'わずか',
        romaji: 'wazuka',
        meaning: { en: 'only a little, slight', vi: 'chỉ một chút, ít ỏi' }
      },
      {
        kana: 'しゅみ',
        kanji: '趣味',
        romaji: 'shumi',
        meaning: { en: 'hobby', vi: 'sở thích' }
      },
      {
        kana: 'ていど',
        kanji: '程度',
        romaji: 'teido',
        meaning: { en: 'degree, extent', vi: 'mức độ' }
      },
      {
        kana: 'べんきょう',
        kanji: '勉強',
        romaji: 'benkyō',
        meaning: { en: 'study', vi: 'việc học' }
      },
      {
        kana: 'かんたん',
        kanji: '簡単',
        romaji: 'kantan',
        meaning: { en: 'simple, easy', vi: 'đơn giản, dễ' }
      },
      {
        kana: 'じっさい',
        kanji: '実際',
        romaji: 'jissai',
        meaning: { en: 'actually, in fact', vi: 'thực tế' }
      },
      {
        kana: 'ほんかくてき',
        kanji: '本格的',
        romaji: 'honkakuteki',
        meaning: { en: 'full-scale, serious', vi: 'chính thống, bài bản' }
      },
      {
        kana: 'いがい',
        kanji: '意外',
        romaji: 'igai',
        meaning: { en: 'unexpected', vi: 'bất ngờ, ngoài dự kiến' }
      },
      {
        kana: 'ただ',
        romaji: 'tada',
        meaning: { en: 'just, only, merely', vi: 'chỉ, đơn thuần' }
      }
    ],
    grammar: [
      {
        pattern: 'N/V といっても',
        title: { en: 'Although I say ..., it is ...', vi: 'Tuy nói là ... nhưng ...' },
        explanation: {
          en: 'Used to soften or correct an exaggerated impression the listener might form. The second clause states the more modest reality.',
          vi: 'Dùng để làm dịu hoặc đính chính một ấn tượng phóng đại mà người nghe có thể hình thành. Mệnh đề sau nêu thực tế khiêm tốn hơn.'
        },
        examples: [
          {
            jp: '旅行といっても、隣の町に一泊しただけだ。',
            romaji: 'Ryokō to ittemo, tonari no machi ni ippaku shita dake da.',
            meaning: {
              en: 'Although I call it a trip, I just stayed one night in the next town.',
              vi: 'Tuy nói là đi du lịch nhưng tôi chỉ ngủ lại một đêm ở thị trấn bên cạnh.'
            }
          },
          {
            jp: '料理ができるといっても、卵を焼ける程度です。',
            romaji: 'Ryōri ga dekiru to ittemo, tamago o yakeru teido desu.',
            meaning: {
              en: "Although I say I can cook, it's only to the extent of frying an egg.",
              vi: 'Tuy nói là biết nấu ăn nhưng cũng chỉ ở mức rán được quả trứng thôi.'
            }
          }
        ]
      },
      {
        pattern: 'ただ ... だけ',
        title: { en: 'Just / merely ...', vi: 'Chỉ ... mà thôi' },
        explanation: {
          en: 'Emphasizes that something is limited to one small thing, often paired with といっても.',
          vi: 'Nhấn mạnh điều gì đó chỉ giới hạn ở một việc nhỏ, thường đi kèm với といっても.'
        },
        examples: [
          {
            jp: '勉強したといっても、ただ教科書を読んだだけだ。',
            romaji: 'Benkyō shita to ittemo, tada kyōkasho o yonda dake da.',
            meaning: {
              en: 'Although I say I studied, I merely read the textbook.',
              vi: 'Tuy nói là đã học nhưng tôi chỉ đọc sách giáo khoa thôi.'
            }
          },
          {
            jp: 'ただ少し休みたいだけです。',
            romaji: 'Tada sukoshi yasumitai dake desu.',
            meaning: {
              en: 'I just want to rest a little.',
              vi: 'Tôi chỉ muốn nghỉ một chút thôi.'
            }
          }
        ]
      },
      {
        pattern: '意外に / 意外と',
        title: { en: 'Unexpectedly, surprisingly', vi: 'Một cách bất ngờ' },
        explanation: {
          en: 'Adds that the reality differs from what one assumed; fits well after a といっても qualification.',
          vi: 'Thêm ý rằng thực tế khác với điều đã giả định; hợp với một câu đính chính bằng といっても.'
        },
        examples: [
          {
            jp: '簡単といっても、意外と時間がかかった。',
            romaji: 'Kantan to ittemo, igai to jikan ga kakatta.',
            meaning: {
              en: 'Although I called it easy, it surprisingly took time.',
              vi: 'Tuy nói là đơn giản nhưng bất ngờ là lại mất nhiều thời gian.'
            }
          },
          {
            jp: 'この店は意外に安かった。',
            romaji: 'Kono mise wa igai ni yasukatta.',
            meaning: {
              en: 'This shop was unexpectedly cheap.',
              vi: 'Quán này rẻ một cách bất ngờ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A modest "new hobby"', vi: 'Một "sở thích mới" khiêm tốn' },
        lines: [
          {
            jp: '最近、料理を始めたと友達に話した。',
            romaji: 'Saikin, ryōri o hajimeta to tomodachi ni hanashita.',
            meaning: {
              en: 'I told a friend that I had recently started cooking.',
              vi: 'Gần đây tôi kể với bạn rằng mình đã bắt đầu nấu ăn.'
            }
          },
          {
            jp: '料理といっても、ただ簡単な物を作るだけだ。',
            romaji: 'Ryōri to ittemo, tada kantan na mono o tsukuru dake da.',
            meaning: {
              en: 'Although I say cooking, I just make simple things.',
              vi: 'Tuy nói là nấu ăn nhưng tôi chỉ làm những món đơn giản thôi.'
            }
          },
          {
            jp: '簡単といっても、意外と時間がかかって大変だ。',
            romaji: 'Kantan to ittemo, igai to jikan ga kakatte taihen da.',
            meaning: {
              en: 'Although I call it simple, it surprisingly takes time and is hard work.',
              vi: 'Tuy nói là đơn giản nhưng bất ngờ là lại tốn thời gian và vất vả.'
            }
          },
          {
            jp: 'それでも、自分で作った料理はおいしく感じる。',
            romaji: 'Soredemo, jibun de tsukutta ryōri wa oishiku kanjiru.',
            meaning: {
              en: 'Even so, food I made myself feels delicious.',
              vi: 'Dù vậy, món ăn tự mình làm vẫn thấy ngon.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the writer actually cook?',
              vi: 'Người viết thực ra nấu món gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Only simple things', vi: 'Chỉ những món đơn giản' } },
              { id: 'b', label: { en: 'Full-course meals', vi: 'Những bữa ăn thịnh soạn' } },
              { id: 'c', label: { en: 'Nothing at all', vi: 'Không nấu gì cả' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What was unexpected about the simple cooking?',
              vi: 'Điều gì bất ngờ về việc nấu món đơn giản?'
            },
            choices: [
              { id: 'a', label: { en: 'It took a lot of time', vi: 'Nó tốn nhiều thời gian' } },
              { id: 'b', label: { en: 'It was very cheap', vi: 'Nó rất rẻ' } },
              { id: 'c', label: { en: 'It tasted bad', vi: 'Nó dở' } }
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
      en: 'Even Supposing',
      vi: 'Cho dù giả sử'
    },
    focus: {
      en: 'Argue a point holds even under a supposition with 〜としても / 〜にしても.',
      vi: 'Lập luận rằng một điều vẫn đúng dù trong giả định với 〜としても / 〜にしても.'
    },
    vocab: [
      {
        kana: 'かてい',
        kanji: '仮定',
        romaji: 'katei',
        meaning: { en: 'assumption, supposition', vi: 'giả định' }
      },
      {
        kana: 'たとえ',
        romaji: 'tatoe',
        meaning: { en: 'even if (with ても)', vi: 'cho dù (đi với ても)' }
      },
      {
        kana: 'むずかしい',
        kanji: '難しい',
        romaji: 'muzukashii',
        meaning: { en: 'difficult', vi: 'khó' }
      },
      {
        kana: 'あきらめる',
        kanji: '諦める',
        romaji: 'akirameru',
        meaning: { en: 'to give up', vi: 'từ bỏ' }
      },
      {
        kana: 'けっしん',
        kanji: '決心',
        romaji: 'kesshin',
        meaning: { en: 'determination, resolve', vi: 'quyết tâm' }
      },
      {
        kana: 'りゆう',
        kanji: '理由',
        romaji: 'riyū',
        meaning: { en: 'reason', vi: 'lý do' }
      },
      {
        kana: 'ゆるす',
        kanji: '許す',
        romaji: 'yurusu',
        meaning: { en: 'to allow, forgive', vi: 'cho phép, tha thứ' }
      },
      {
        kana: 'たちば',
        kanji: '立場',
        romaji: 'tachiba',
        meaning: { en: 'standpoint, position', vi: 'lập trường, vị thế' }
      },
      {
        kana: 'せきにん',
        kanji: '責任',
        romaji: 'sekinin',
        meaning: { en: 'responsibility', vi: 'trách nhiệm' }
      },
      {
        kana: 'はたす',
        kanji: '果たす',
        romaji: 'hatasu',
        meaning: { en: 'to fulfill, carry out', vi: 'hoàn thành, làm tròn' }
      },
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
      }
    ],
    grammar: [
      {
        pattern: 'V/A としても',
        title: { en: 'Even if / even supposing', vi: 'Cho dù / giả sử có ...' },
        explanation: {
          en: 'Presents a hypothetical and states the conclusion would still hold. Often opens with たとえ for emphasis.',
          vi: 'Đưa ra một giả định và khẳng định kết luận vẫn đúng. Thường mở đầu bằng たとえ để nhấn mạnh.'
        },
        examples: [
          {
            jp: 'たとえ難しいとしても、最後まで諦めない。',
            romaji: 'Tatoe muzukashii to shitemo, saigo made akiramenai.',
            meaning: {
              en: 'Even if it is difficult, I will not give up to the end.',
              vi: 'Cho dù có khó đi nữa, tôi cũng không từ bỏ đến cùng.'
            }
          },
          {
            jp: '今から急いだとしても、もう間に合わないだろう。',
            romaji: 'Ima kara isoida to shitemo, mō maniawanai darō.',
            meaning: {
              en: "Even if we hurry now, we probably won't make it in time.",
              vi: 'Cho dù bây giờ có vội thì chắc cũng không kịp nữa.'
            }
          }
        ]
      },
      {
        pattern: 'N/V にしても',
        title: { en: 'Even if / even granting that', vi: 'Dù cho / dù có là' },
        explanation: {
          en: 'Concedes a point but argues something is still unreasonable or that the conclusion holds. Also covers "whether ... or ..." when repeated.',
          vi: 'Nhượng bộ một điểm nhưng lập luận rằng điều gì đó vẫn vô lý hoặc kết luận vẫn đúng. Khi lặp lại còn mang nghĩa "dù ... hay ...".'
        },
        examples: [
          {
            jp: '理由があるにしても、何も言わないのはよくない。',
            romaji: 'Riyū ga aru ni shitemo, nani mo iwanai no wa yokunai.',
            meaning: {
              en: 'Even if there is a reason, saying nothing is not good.',
              vi: 'Dù có lý do đi nữa thì việc không nói gì cũng không tốt.'
            }
          },
          {
            jp: '行くにしても行かないにしても、早く決めてほしい。',
            romaji: 'Iku ni shitemo ikanai ni shitemo, hayaku kimete hoshii.',
            meaning: {
              en: 'Whether you go or not, I want you to decide quickly.',
              vi: 'Dù đi hay không đi, tôi cũng mong bạn quyết định nhanh.'
            }
          }
        ]
      },
      {
        pattern: 'V てほしい',
        title: { en: 'Want someone to ...', vi: 'Muốn ai đó ...' },
        explanation: {
          en: 'Expresses a wish for another person to do something. Pairs well with にしても conclusions.',
          vi: 'Diễn đạt mong muốn người khác làm điều gì đó. Hợp với các kết luận dùng にしても.'
        },
        examples: [
          {
            jp: 'どんな立場にしても、責任を果たしてほしい。',
            romaji: 'Donna tachiba ni shitemo, sekinin o hatashite hoshii.',
            meaning: {
              en: 'Whatever your position, I want you to fulfill your responsibility.',
              vi: 'Dù ở vị thế nào, tôi cũng mong bạn làm tròn trách nhiệm.'
            }
          },
          {
            jp: '無理だとしても、一度は挑戦してほしい。',
            romaji: 'Muri da to shitemo, ichido wa chōsen shite hoshii.',
            meaning: {
              en: 'Even if it seems impossible, I want you to try at least once.',
              vi: 'Cho dù có vẻ quá sức, tôi cũng mong bạn thử một lần.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: "Encouraging a friend's challenge",
          vi: 'Động viên thử thách của một người bạn'
        },
        lines: [
          {
            jp: '友達が新しい仕事に挑戦するか迷っている。',
            romaji: 'Tomodachi ga atarashii shigoto ni chōsen suru ka mayotte iru.',
            meaning: {
              en: 'My friend is hesitating over whether to take on a new job.',
              vi: 'Bạn tôi đang phân vân có nên thử thách với công việc mới hay không.'
            }
          },
          {
            jp: 'たとえ難しいとしても、やってみる価値はあると思う。',
            romaji: 'Tatoe muzukashii to shitemo, yatte miru kachi wa aru to omou.',
            meaning: {
              en: 'Even if it is difficult, I think it is worth trying.',
              vi: 'Cho dù có khó đi nữa, tôi nghĩ vẫn đáng để thử.'
            }
          },
          {
            jp: '失敗するにしても、その経験はきっと役に立つ。',
            romaji: 'Shippai suru ni shitemo, sono keiken wa kitto yaku ni tatsu.',
            meaning: {
              en: 'Even if he fails, that experience will surely be useful.',
              vi: 'Dù có thất bại đi nữa, kinh nghiệm đó chắc chắn sẽ có ích.'
            }
          },
          {
            jp: 'どちらを選ぶにしても、後悔しない決心をしてほしい。',
            romaji: 'Dochira o erabu ni shitemo, kōkai shinai kesshin o shite hoshii.',
            meaning: {
              en: 'Whichever he chooses, I want him to decide with no regrets.',
              vi: 'Dù chọn bên nào, tôi cũng mong cậu ấy quyết tâm không hối hận.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does the writer think about the new job?',
              vi: 'Người viết nghĩ gì về công việc mới?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It is worth trying even if hard', vi: 'Đáng để thử dù có khó' }
              },
              {
                id: 'b',
                label: { en: 'It should be avoided', vi: 'Nên tránh' }
              },
              {
                id: 'c',
                label: { en: 'It is too easy to matter', vi: 'Quá dễ nên không đáng' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the writer say about failing?',
              vi: 'Người viết nói gì về việc thất bại?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The experience will still be useful',
                  vi: 'Kinh nghiệm vẫn sẽ có ích'
                }
              },
              {
                id: 'b',
                label: { en: 'It must be avoided at all costs', vi: 'Phải tránh bằng mọi giá' }
              },
              {
                id: 'c',
                label: { en: 'It means he should quit', vi: 'Nghĩa là cậu ấy nên bỏ cuộc' }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
