import type { Lesson } from '../types.ts';

export const n1LessonsD: Lesson[] = [
  {
    id: 'lesson-25',
    number: 25,
    title: {
      en: 'Worth It or Unbearable: 〜に堪える / 〜に堪えない',
      vi: 'Đáng hay không chịu nổi: 〜に堪える / 〜に堪えない'
    },
    focus: {
      en: 'Judge whether something is worth doing (〜に堪える) or unbearable / too much to bear (〜に堪えない), including overwhelming emotion.',
      vi: 'Đánh giá điều gì đó có đáng làm hay không (〜に堪える) hoặc không thể chịu nổi / tràn ngập cảm xúc (〜に堪えない).'
    },
    vocab: [
      {
        kana: 'かんしょう',
        kanji: '鑑賞',
        romaji: 'kanshō',
        meaning: { en: 'appreciation, viewing (of art)', vi: 'sự thưởng thức (nghệ thuật)' }
      },
      {
        kana: 'ひはん',
        kanji: '批判',
        romaji: 'hihan',
        meaning: { en: 'criticism', vi: 'sự phê phán' }
      },
      {
        kana: 'ひょうろん',
        kanji: '評論',
        romaji: 'hyōron',
        meaning: { en: 'critique, review', vi: 'bài bình luận, phê bình' }
      },
      {
        kana: 'めいさく',
        kanji: '名作',
        romaji: 'meisaku',
        meaning: { en: 'masterpiece', vi: 'kiệt tác' }
      },
      {
        kana: 'ださく',
        kanji: '駄作',
        romaji: 'dasaku',
        meaning: { en: 'a poor work, dud', vi: 'tác phẩm dở' }
      },
      {
        kana: 'たいくつ',
        kanji: '退屈',
        romaji: 'taikutsu',
        meaning: { en: 'boredom, tedious', vi: 'sự nhàm chán, tẻ nhạt' }
      },
      {
        kana: 'さくひん',
        kanji: '作品',
        romaji: 'sakuhin',
        meaning: { en: 'a work (of art)', vi: 'tác phẩm' }
      },
      {
        kana: 'ないよう',
        kanji: '内容',
        romaji: 'naiyō',
        meaning: { en: 'content, substance', vi: 'nội dung' }
      },
      {
        kana: 'かんどう',
        kanji: '感動',
        romaji: 'kandō',
        meaning: { en: 'deep emotion, being moved', vi: 'sự cảm động' }
      },
      {
        kana: 'かち',
        kanji: '価値',
        romaji: 'kachi',
        meaning: { en: 'value, worth', vi: 'giá trị' }
      },
      {
        kana: 'たえる',
        kanji: '堪える',
        romaji: 'taeru',
        meaning: { en: 'to bear, to be worth', vi: 'chịu được, đáng' }
      },
      {
        kana: 'かんとく',
        kanji: '監督',
        romaji: 'kantoku',
        meaning: { en: 'director', vi: 'đạo diễn' }
      }
    ],
    grammar: [
      {
        pattern: 'V/N に堪（た）える',
        title: { en: 'worth doing, able to withstand', vi: 'đáng làm, chịu được' },
        explanation: {
          en: 'After a noun like 鑑賞・批判 or a dictionary-form verb, 〜に堪える means something has enough quality to be worth doing or can withstand it. Often used with 鑑賞・批判・読む.',
          vi: 'Sau danh từ như 鑑賞・批判 hoặc động từ thể từ điển, 〜に堪える nghĩa là điều gì đó đủ chất lượng để đáng làm hoặc chịu đựng được. Thường dùng với 鑑賞・批判・読む.'
        },
        examples: [
          {
            jp: 'この作品は十分に鑑賞に堪える名作だ。',
            romaji: 'Kono sakuhin wa jūbun ni kanshō ni taeru meisaku da.',
            meaning: {
              en: 'This work is a masterpiece well worth appreciating.',
              vi: 'Tác phẩm này là một kiệt tác hoàn toàn đáng thưởng thức.'
            }
          },
          {
            jp: '専門家の批判に堪える評論を書きたい。',
            romaji: 'Senmonka no hihan ni taeru hyōron o kakitai.',
            meaning: {
              en: "I want to write a critique that withstands experts' criticism.",
              vi: 'Tôi muốn viết một bài phê bình chịu được sự phê phán của giới chuyên môn.'
            }
          }
        ]
      },
      {
        pattern: 'V に堪（た）えない',
        title: { en: 'unbearable / not worth doing', vi: 'không chịu nổi / không đáng làm' },
        explanation: {
          en: 'With a dictionary-form verb (見る・読む・聞く), 〜に堪えない means something is too painful or too poor to be worth doing.',
          vi: 'Với động từ thể từ điển (見る・読む・聞く), 〜に堪えない nghĩa là điều gì đó quá đau khổ hoặc quá dở để đáng làm.'
        },
        examples: [
          {
            jp: 'あの番組は退屈で、見るに堪えない。',
            romaji: 'Ano bangumi wa taikutsu de, miru ni taenai.',
            meaning: {
              en: 'That program is so boring it is unbearable to watch.',
              vi: 'Chương trình đó nhàm chán đến mức không thể xem nổi.'
            }
          },
          {
            jp: '内容が薄く、読むに堪えない駄作だった。',
            romaji: 'Naiyō ga usuku, yomu ni taenai dasaku datta.',
            meaning: {
              en: 'The content was thin; it was a dud not worth reading.',
              vi: 'Nội dung sơ sài; đó là một tác phẩm dở không đáng đọc.'
            }
          }
        ]
      },
      {
        pattern: 'N（感情）の念に堪（た）えない',
        title: { en: 'cannot help but feel (emotion)', vi: 'không kìm được cảm xúc' },
        explanation: {
          en: 'With an emotion noun such as 感謝・感動・悲しみ plus 〜の念, 〜に堪えない means a feeling is so strong it cannot be contained. A formal, written expression.',
          vi: 'Với danh từ chỉ cảm xúc như 感謝・感動・悲しみ kèm 〜の念, 〜に堪えない nghĩa là cảm xúc mạnh đến mức không kìm nén được. Cách nói trang trọng, văn viết.'
        },
        examples: [
          {
            jp: 'ご厚情には感謝の念に堪えません。',
            romaji: 'Gokōjō ni wa kansha no nen ni taemasen.',
            meaning: {
              en: 'I cannot contain my gratitude for your kindness.',
              vi: 'Tôi không thể kìm nén lòng biết ơn trước sự ân cần của ngài.'
            }
          },
          {
            jp: '故郷の変わり果てた姿に、悲しみの念に堪えなかった。',
            romaji: 'Kokyō no kawarihateta sugata ni, kanashimi no nen ni taenakatta.',
            meaning: {
              en: "Seeing my hometown so changed, I couldn't help feeling sorrow.",
              vi: 'Thấy quê hương đã đổi thay hoàn toàn, tôi không kìm được nỗi buồn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A film review', vi: 'Một bài đánh giá phim' },
        lines: [
          {
            jp: '先週、話題の映画を鑑賞した。',
            romaji: 'Senshū, wadai no eiga o kanshō shita.',
            meaning: {
              en: 'Last week I viewed the much-talked-about film.',
              vi: 'Tuần trước tôi đã thưởng thức bộ phim đang được bàn tán.'
            }
          },
          {
            jp: '映像は美しく、何度も鑑賞に堪える作品だと思った。',
            romaji: 'Eizō wa utsukushiku, nando mo kanshō ni taeru sakuhin da to omotta.',
            meaning: {
              en: 'The visuals were beautiful; I thought it a work worth viewing many times.',
              vi: 'Hình ảnh rất đẹp; tôi nghĩ đây là tác phẩm đáng xem nhiều lần.'
            }
          },
          {
            jp: 'しかし、後半の内容は退屈で、見るに堪えない場面もあった。',
            romaji: 'Shikashi, kōhan no naiyō wa taikutsu de, miru ni taenai bamen mo atta.',
            meaning: {
              en: "But the latter half's content was boring, with some scenes unbearable to watch.",
              vi: 'Nhưng nội dung nửa sau nhàm chán, có cả những cảnh không xem nổi.'
            }
          },
          {
            jp: 'それでも全体としては、批判に堪える価値ある名作だ。',
            romaji: 'Soredemo zentai to shite wa, hihan ni taeru kachi aru meisaku da.',
            meaning: {
              en: 'Still, overall it is a valuable masterpiece that withstands criticism.',
              vi: 'Dù vậy, xét tổng thể đây là kiệt tác giá trị, chịu được sự phê phán.'
            }
          },
          {
            jp: '監督の情熱には感動の念に堪えなかった。',
            romaji: 'Kantoku no jōnetsu ni wa kandō no nen ni taenakatta.',
            meaning: {
              en: "I couldn't help being moved by the director's passion.",
              vi: 'Tôi không kìm được sự cảm động trước nhiệt huyết của đạo diễn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the writer think of the visuals?',
              vi: 'Người viết nghĩ gì về hình ảnh?'
            },
            choices: [
              { id: 'a', label: { en: 'Worth viewing many times', vi: 'Đáng xem nhiều lần' } },
              { id: 'b', label: { en: 'Not worth viewing at all', vi: 'Không đáng xem chút nào' } },
              { id: 'c', label: { en: 'Boring throughout', vi: 'Nhàm chán từ đầu đến cuối' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How is the latter half described?',
              vi: 'Nửa sau được miêu tả thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Beautiful and moving', vi: 'Đẹp và cảm động' } },
              {
                id: 'b',
                label: {
                  en: 'Boring, with unbearable scenes',
                  vi: 'Nhàm chán, có cảnh không xem nổi'
                }
              },
              { id: 'c', label: { en: 'The best part of the film', vi: 'Phần hay nhất của phim' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q3',
            question: {
              en: 'What is the overall evaluation?',
              vi: 'Đánh giá tổng thể là gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'A valuable masterpiece', vi: 'Một kiệt tác giá trị' }
              },
              { id: 'b', label: { en: 'A complete dud', vi: 'Một tác phẩm hoàn toàn dở' } },
              { id: 'c', label: { en: 'Too painful to finish', vi: 'Quá khó xem để xem hết' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-26',
    number: 26,
    title: {
      en: 'Worthy or Not: 〜に足る / 〜に足りない',
      vi: 'Xứng đáng hay không: 〜に足る / 〜に足りない'
    },
    focus: {
      en: 'State that someone or something is worthy of / sufficient for an evaluation (〜に足る) or is too trivial to bother with (〜に足りない).',
      vi: 'Diễn đạt rằng ai/cái gì xứng đáng / đủ để được đánh giá (〜に足る) hoặc quá nhỏ nhặt không đáng bận tâm (〜に足りない).'
    },
    vocab: [
      {
        kana: 'しんらい',
        kanji: '信頼',
        romaji: 'shinrai',
        meaning: { en: 'trust, reliance', vi: 'sự tin tưởng' }
      },
      {
        kana: 'そんけい',
        kanji: '尊敬',
        romaji: 'sonkei',
        meaning: { en: 'respect', vi: 'sự kính trọng' }
      },
      {
        kana: 'じんぶつ',
        kanji: '人物',
        romaji: 'jinbutsu',
        meaning: { en: 'person, character, figure', vi: 'nhân vật, con người' }
      },
      {
        kana: 'じっせき',
        kanji: '実績',
        romaji: 'jisseki',
        meaning: { en: 'track record, achievements', vi: 'thành tích' }
      },
      {
        kana: 'ひょうか',
        kanji: '評価',
        romaji: 'hyōka',
        meaning: { en: 'evaluation, appraisal', vi: 'sự đánh giá' }
      },
      {
        kana: 'まんぞく',
        kanji: '満足',
        romaji: 'manzoku',
        meaning: { en: 'satisfaction', vi: 'sự hài lòng' }
      },
      {
        kana: 'しどうしゃ',
        kanji: '指導者',
        romaji: 'shidōsha',
        meaning: { en: 'leader', vi: 'người lãnh đạo' }
      },
      {
        kana: 'ささい',
        kanji: '些細',
        romaji: 'sasai',
        meaning: { en: 'trivial, slight', vi: 'nhỏ nhặt, vụn vặt' }
      },
      {
        kana: 'のうりょく',
        kanji: '能力',
        romaji: 'nōryoku',
        meaning: { en: 'ability', vi: 'năng lực' }
      },
      {
        kana: 'こんきょ',
        kanji: '根拠',
        romaji: 'konkyo',
        meaning: { en: 'grounds, basis', vi: 'căn cứ' }
      },
      {
        kana: 'せっとくりょく',
        kanji: '説得力',
        romaji: 'settokuryoku',
        meaning: { en: 'persuasiveness', vi: 'sức thuyết phục' }
      },
      {
        kana: 'あたいする',
        kanji: '値する',
        romaji: 'ataisuru',
        meaning: { en: 'to be worth, to deserve', vi: 'đáng, xứng đáng' }
      }
    ],
    grammar: [
      {
        pattern: 'V/N に足（た）る',
        title: { en: 'worthy of, sufficient to', vi: 'xứng đáng, đủ để' },
        explanation: {
          en: 'After a noun or dictionary-form verb, 〜に足る means something is worthy of or sufficient for an evaluation. Common with 信頼・尊敬・満足.',
          vi: 'Sau danh từ hoặc động từ thể từ điển, 〜に足る nghĩa là điều gì đó xứng đáng hoặc đủ để được đánh giá. Hay dùng với 信頼・尊敬・満足.'
        },
        examples: [
          {
            jp: '彼は信頼に足る人物だ。',
            romaji: 'Kare wa shinrai ni taru jinbutsu da.',
            meaning: {
              en: 'He is a person worthy of trust.',
              vi: 'Anh ấy là người xứng đáng để tin tưởng.'
            }
          },
          {
            jp: 'その実績は十分に評価に足る。',
            romaji: 'Sono jisseki wa jūbun ni hyōka ni taru.',
            meaning: {
              en: 'That track record is fully worthy of recognition.',
              vi: 'Thành tích đó hoàn toàn xứng đáng được đánh giá cao.'
            }
          }
        ]
      },
      {
        pattern: 'V に足（た）りない',
        title: { en: 'not worth, too trivial to', vi: 'không đáng, quá nhỏ nhặt để' },
        explanation: {
          en: '〜に足りない (often 取るに足りない) means something is too trivial or insignificant to be worth the action.',
          vi: '〜に足りない (thường là 取るに足りない) nghĩa là điều gì đó quá nhỏ nhặt, không đáng để thực hiện hành động.'
        },
        examples: [
          {
            jp: 'それは取るに足りない些細な問題だ。',
            romaji: 'Sore wa toru ni tarinai sasai na mondai da.',
            meaning: {
              en: 'That is a trivial problem not worth taking up.',
              vi: 'Đó là vấn đề nhỏ nhặt không đáng bận tâm.'
            }
          },
          {
            jp: '彼の言い訳は信じるに足りない。',
            romaji: 'Kare no iiwake wa shinjiru ni tarinai.',
            meaning: {
              en: 'His excuse is not worth believing.',
              vi: 'Lời bào chữa của anh ta không đáng để tin.'
            }
          }
        ]
      },
      {
        pattern: 'N に足（た）る + 名詞',
        title: { en: 'worthy ~ (modifying a noun)', vi: 'xứng đáng ~ (bổ nghĩa danh từ)' },
        explanation: {
          en: '〜に足る often modifies a following noun, describing a quality worthy of respect, trust, or satisfaction. Similar to 〜に値する.',
          vi: '〜に足る thường bổ nghĩa cho danh từ phía sau, mô tả phẩm chất xứng đáng được kính trọng, tin tưởng hay hài lòng. Giống với 〜に値する.'
        },
        examples: [
          {
            jp: '尊敬に足る指導者の下で働きたい。',
            romaji: 'Sonkei ni taru shidōsha no moto de hatarakitai.',
            meaning: {
              en: 'I want to work under a leader worthy of respect.',
              vi: 'Tôi muốn làm việc dưới một người lãnh đạo đáng kính trọng.'
            }
          },
          {
            jp: '満足に足る結果を出すために努力する。',
            romaji: 'Manzoku ni taru kekka o dasu tame ni doryoku suru.',
            meaning: {
              en: 'I work hard to produce a result worthy of satisfaction.',
              vi: 'Tôi nỗ lực để đạt được kết quả đáng hài lòng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Choosing a leader', vi: 'Chọn một người lãnh đạo' },
        lines: [
          {
            jp: '新しい指導者には、信頼に足る人物が選ばれた。',
            romaji: 'Atarashii shidōsha ni wa, shinrai ni taru jinbutsu ga erabareta.',
            meaning: {
              en: 'A person worthy of trust was chosen as the new leader.',
              vi: 'Một người xứng đáng được tin tưởng đã được chọn làm lãnh đạo mới.'
            }
          },
          {
            jp: '彼女の実績は、高い評価に足るものだ。',
            romaji: 'Kanojo no jisseki wa, takai hyōka ni taru mono da.',
            meaning: {
              en: 'Her track record is worthy of high appraisal.',
              vi: 'Thành tích của cô ấy xứng đáng được đánh giá cao.'
            }
          },
          {
            jp: '反対派は些細な点を挙げたが、取るに足りない指摘だった。',
            romaji: 'Hantaiha wa sasai na ten o ageta ga, toru ni tarinai shiteki datta.',
            meaning: {
              en: 'The opposition raised minor points, but they were trivial remarks.',
              vi: 'Phe phản đối nêu vài điểm nhỏ, nhưng đó là những nhận xét không đáng kể.'
            }
          },
          {
            jp: '彼女の説明には十分な根拠と説得力があった。',
            romaji: 'Kanojo no setsumei ni wa jūbun na konkyo to settokuryoku ga atta.',
            meaning: {
              en: 'Her explanation had ample grounds and persuasiveness.',
              vi: 'Lời giải thích của cô ấy có đủ căn cứ và sức thuyết phục.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What kind of person became the new leader?',
              vi: 'Người trở thành lãnh đạo mới là người thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'One worthy of trust', vi: 'Người xứng đáng được tin tưởng' }
              },
              {
                id: 'b',
                label: { en: 'One with no experience', vi: 'Người không có kinh nghiệm' }
              },
              { id: 'c', label: { en: 'One chosen by chance', vi: 'Người được chọn ngẫu nhiên' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: "How are the opposition's points described?",
              vi: 'Các điểm của phe phản đối được mô tả thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Trivial and not worth raising', vi: 'Nhỏ nhặt, không đáng nêu' }
              },
              { id: 'b', label: { en: 'Decisive and serious', vi: 'Quyết định và nghiêm trọng' } },
              { id: 'c', label: { en: 'Highly persuasive', vi: 'Rất thuyết phục' } }
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
      en: 'Easy to Imagine: 〜にかたくない',
      vi: 'Không khó tưởng tượng: 〜にかたくない'
    },
    focus: {
      en: "Say that something is not hard to imagine or guess, especially another person's feelings, using verbs of cognition with 〜にかたくない.",
      vi: 'Diễn đạt rằng điều gì đó không khó tưởng tượng hay đoán ra, nhất là cảm xúc của người khác, với động từ nhận thức + 〜にかたくない.'
    },
    vocab: [
      {
        kana: 'そうぞう',
        kanji: '想像',
        romaji: 'sōzō',
        meaning: { en: 'imagination', vi: 'sự tưởng tượng' }
      },
      {
        kana: 'さっする',
        kanji: '察する',
        romaji: 'sassuru',
        meaning: { en: 'to surmise, to sympathize with', vi: 'thấu hiểu, đoán hiểu' }
      },
      {
        kana: 'しんきょう',
        kanji: '心境',
        romaji: 'shinkyō',
        meaning: { en: 'state of mind', vi: 'tâm trạng' }
      },
      {
        kana: 'くのう',
        kanji: '苦悩',
        romaji: 'kunō',
        meaning: { en: 'anguish, suffering', vi: 'sự đau khổ, dằn vặt' }
      },
      {
        kana: 'らくたん',
        kanji: '落胆',
        romaji: 'rakutan',
        meaning: { en: 'disappointment, dejection', vi: 'sự thất vọng, chán nản' }
      },
      {
        kana: 'よろこび',
        kanji: '喜び',
        romaji: 'yorokobi',
        meaning: { en: 'joy', vi: 'niềm vui' }
      },
      {
        kana: 'すいそく',
        kanji: '推測',
        romaji: 'suisoku',
        meaning: { en: 'conjecture, guess', vi: 'sự suy đoán' }
      },
      {
        kana: 'とうじしゃ',
        kanji: '当事者',
        romaji: 'tōjisha',
        meaning: { en: 'the person concerned', vi: 'người trong cuộc' }
      },
      {
        kana: 'きょうちゅう',
        kanji: '胸中',
        romaji: 'kyōchū',
        meaning: { en: "what is in one's heart", vi: 'nỗi lòng' }
      },
      {
        kana: 'たちば',
        kanji: '立場',
        romaji: 'tachiba',
        meaning: { en: 'standpoint, position', vi: 'lập trường, vị thế' }
      },
      {
        kana: 'ようい',
        kanji: '容易',
        romaji: 'yōi',
        meaning: { en: 'easy, simple', vi: 'dễ dàng' }
      },
      {
        kana: 'しつぼう',
        kanji: '失望',
        romaji: 'shitsubō',
        meaning: { en: 'disappointment', vi: 'sự thất vọng' }
      }
    ],
    grammar: [
      {
        pattern: 'N／想像（そうぞう）するに かたくない',
        title: { en: 'not hard to imagine', vi: 'không khó tưởng tượng' },
        explanation: {
          en: '想像にかたくない means "it is not hard to imagine." It introduces a situation or feeling the speaker can easily picture, often with sympathy. A written, formal expression.',
          vi: '想像にかたくない nghĩa là "không khó để tưởng tượng". Dùng để nói về tình huống hay cảm xúc mà người nói dễ hình dung, thường mang sự đồng cảm. Cách nói văn viết, trang trọng.'
        },
        examples: [
          {
            jp: '彼女の落胆は想像にかたくない。',
            romaji: 'Kanojo no rakutan wa sōzō ni katakunai.',
            meaning: {
              en: 'Her disappointment is not hard to imagine.',
              vi: 'Không khó để tưởng tượng nỗi thất vọng của cô ấy.'
            }
          },
          {
            jp: '事故の知らせに家族が動揺したことは、想像にかたくない。',
            romaji: 'Jiko no shirase ni kazoku ga dōyō shita koto wa, sōzō ni katakunai.',
            meaning: {
              en: 'It is not hard to imagine the family was shaken by news of the accident.',
              vi: 'Không khó tưởng tượng gia đình đã bàng hoàng trước tin tai nạn.'
            }
          }
        ]
      },
      {
        pattern: '察（さっ）するに かたくない',
        title: { en: 'easy to surmise / sympathize', vi: 'dễ thấu hiểu, đoán hiểu' },
        explanation: {
          en: 'With verbs of perception like 察する・推測する, 〜にかたくない means one can readily surmise or sympathize with the situation.',
          vi: 'Với động từ nhận thức như 察する・推測する, 〜にかたくない nghĩa là người ta dễ dàng thấu hiểu hay suy đoán được tình huống.'
        },
        examples: [
          {
            jp: '当事者の胸中は察するにかたくない。',
            romaji: 'Tōjisha no kyōchū wa sassuru ni katakunai.',
            meaning: {
              en: 'It is not hard to surmise what is in the heart of the person concerned.',
              vi: 'Không khó để thấu hiểu nỗi lòng của người trong cuộc.'
            }
          },
          {
            jp: '彼の立場を思えば、その苦悩は推測するにかたくない。',
            romaji: 'Kare no tachiba o omoeba, sono kunō wa suisoku suru ni katakunai.',
            meaning: {
              en: 'Considering his position, his anguish is not hard to guess.',
              vi: 'Nghĩ đến vị thế của anh ấy, không khó để đoán ra nỗi dằn vặt đó.'
            }
          }
        ]
      },
      {
        pattern: 'N は 想像（そうぞう）にかたくない',
        title: { en: 'a noun is easy to imagine', vi: 'một danh từ dễ tưởng tượng' },
        explanation: {
          en: 'An emotion or situation noun can directly precede 〜は想像にかたくない. Note the meaning is positive ("easy"), even though the verb form looks negative.',
          vi: 'Một danh từ chỉ cảm xúc hay tình huống có thể đứng ngay trước 〜は想像にかたくない. Lưu ý nghĩa là tích cực ("dễ"), dù hình thức động từ trông như phủ định.'
        },
        examples: [
          {
            jp: '優勝した選手の喜びは想像にかたくない。',
            romaji: 'Yūshō shita senshu no yorokobi wa sōzō ni katakunai.',
            meaning: {
              en: 'The joy of the player who won is not hard to imagine.',
              vi: 'Không khó tưởng tượng niềm vui của vận động viên vô địch.'
            }
          },
          {
            jp: '長年の努力が実った時の心境は、想像にかたくないだろう。',
            romaji: 'Naganen no doryoku ga minotta toki no shinkyō wa, sōzō ni katakunai darō.',
            meaning: {
              en: 'One can easily imagine the state of mind when years of effort bear fruit.',
              vi: 'Hẳn không khó tưởng tượng tâm trạng khi nỗ lực bao năm đơm hoa kết trái.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'After the final whistle', vi: 'Sau tiếng còi kết thúc' },
        lines: [
          {
            jp: '長年支えてきたチームが初優勝した。',
            romaji: 'Naganen sasaete kita chīmu ga hatsu yūshō shita.',
            meaning: {
              en: 'The team I had supported for years won its first title.',
              vi: 'Đội bóng tôi cổ vũ bao năm đã lần đầu vô địch.'
            }
          },
          {
            jp: '選手たちの喜びは想像にかたくなかった。',
            romaji: 'Senshu-tachi no yorokobi wa sōzō ni katakunakatta.',
            meaning: {
              en: "The players' joy was not hard to imagine.",
              vi: 'Không khó để tưởng tượng niềm vui của các cầu thủ.'
            }
          },
          {
            jp: '一方、敗れた相手の落胆も察するにかたくない。',
            romaji: 'Ippō, yabureta aite no rakutan mo sassuru ni katakunai.',
            meaning: {
              en: "On the other hand, the defeated opponents' dejection is also easy to sympathize with.",
              vi: 'Mặt khác, cũng không khó thấu hiểu sự chán nản của đối thủ thua cuộc.'
            }
          },
          {
            jp: '当事者でなくても、その胸中は推測するにかたくない。',
            romaji: 'Tōjisha de nakute mo, sono kyōchū wa suisoku suru ni katakunai.',
            meaning: {
              en: 'Even without being directly involved, it is not hard to guess what is in their hearts.',
              vi: 'Dù không phải người trong cuộc, cũng không khó đoán được nỗi lòng họ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: "What does 想像にかたくない mean about the players' joy?",
              vi: '想像にかたくない nói gì về niềm vui của cầu thủ?'
            },
            choices: [
              { id: 'a', label: { en: 'It is easy to imagine', vi: 'Rất dễ tưởng tượng' } },
              {
                id: 'b',
                label: { en: 'It is impossible to imagine', vi: 'Không thể tưởng tượng' }
              },
              {
                id: 'c',
                label: { en: 'It was hidden from everyone', vi: 'Bị giấu kín với mọi người' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is said about the opponents?',
              vi: 'Điều gì được nói về đối thủ?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Their dejection is easy to sympathize with',
                  vi: 'Dễ thấu hiểu sự chán nản của họ'
                }
              },
              { id: 'b', label: { en: 'They felt nothing', vi: 'Họ chẳng cảm thấy gì' } },
              { id: 'c', label: { en: 'They were also celebrating', vi: 'Họ cũng đang ăn mừng' } }
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
      en: 'Utterly Extreme: 〜極まる / 〜極まりない',
      vi: 'Cùng cực: 〜極まる / 〜極まりない'
    },
    focus: {
      en: 'Attach 〜極まる / 〜極まりない to na-adjectives to express an extreme, often negative, degree ("utterly, extremely").',
      vi: 'Gắn 〜極まる / 〜極まりない vào tính từ -な để diễn đạt mức độ cực điểm, thường tiêu cực ("vô cùng, hết sức").'
    },
    vocab: [
      {
        kana: 'しつれい',
        kanji: '失礼',
        romaji: 'shitsurei',
        meaning: { en: 'rudeness, impoliteness', vi: 'sự bất lịch sự' }
      },
      {
        kana: 'きけん',
        kanji: '危険',
        romaji: 'kiken',
        meaning: { en: 'danger', vi: 'sự nguy hiểm' }
      },
      {
        kana: 'いかん',
        kanji: '遺憾',
        romaji: 'ikan',
        meaning: { en: 'regret, deplorable', vi: 'sự đáng tiếc' }
      },
      {
        kana: 'ふゆかい',
        kanji: '不愉快',
        romaji: 'fuyukai',
        meaning: { en: 'unpleasant, disagreeable', vi: 'khó chịu' }
      },
      {
        kana: 'きんちょう',
        kanji: '緊張',
        romaji: 'kinchō',
        meaning: { en: 'tension, nervousness', vi: 'sự căng thẳng' }
      },
      {
        kana: 'かんげき',
        kanji: '感激',
        romaji: 'kangeki',
        meaning: { en: 'deep emotion, being thrilled', vi: 'sự xúc động' }
      },
      {
        kana: 'ひれつ',
        kanji: '卑劣',
        romaji: 'hiretsu',
        meaning: { en: 'despicable, mean', vi: 'hèn hạ, đê tiện' }
      },
      {
        kana: 'こんなん',
        kanji: '困難',
        romaji: 'konnan',
        meaning: { en: 'difficulty, hardship', vi: 'khó khăn' }
      },
      {
        kana: 'ふかい',
        kanji: '不快',
        romaji: 'fukai',
        meaning: { en: 'discomfort, displeasure', vi: 'sự khó chịu' }
      },
      {
        kana: 'ぶれい',
        kanji: '無礼',
        romaji: 'burei',
        meaning: { en: 'impolite, insolent', vi: 'vô lễ' }
      },
      {
        kana: 'たいど',
        kanji: '態度',
        romaji: 'taido',
        meaning: { en: 'attitude', vi: 'thái độ' }
      },
      {
        kana: 'はつげん',
        kanji: '発言',
        romaji: 'hatsugen',
        meaning: { en: 'remark, statement', vi: 'phát ngôn' }
      }
    ],
    grammar: [
      {
        pattern: 'な-adjective ＋ 極（きわ）まりない',
        title: { en: 'extremely, utterly (negative)', vi: 'vô cùng, hết sức (tiêu cực)' },
        explanation: {
          en: 'Attach 極まりない to a na-adjective stem to mean "extremely / utterly," usually with a negative nuance. 失礼極まりない = extremely rude.',
          vi: 'Gắn 極まりない vào gốc tính từ -な để diễn đạt "vô cùng / hết sức", thường mang sắc thái tiêu cực. 失礼極まりない = vô cùng bất lịch sự.'
        },
        examples: [
          {
            jp: '客への対応が失礼極まりない。',
            romaji: 'Kyaku e no taiō ga shitsurei kiwamarinai.',
            meaning: {
              en: 'The treatment of the customer was extremely rude.',
              vi: 'Cách đối xử với khách hết sức bất lịch sự.'
            }
          },
          {
            jp: 'あの発言は不愉快極まりないものだった。',
            romaji: 'Ano hatsugen wa fuyukai kiwamarinai mono datta.',
            meaning: {
              en: 'That remark was utterly unpleasant.',
              vi: 'Phát ngôn đó vô cùng khó chịu.'
            }
          }
        ]
      },
      {
        pattern: 'な-adjective ＋ 極（きわ）まる',
        title: { en: 'reach an extreme degree', vi: 'đạt đến mức cực điểm' },
        explanation: {
          en: '極まる has nearly the same meaning as 極まりない. 危険極まる行為 = an extremely dangerous act. Slightly more literary.',
          vi: '極まる có nghĩa gần như 極まりない. 危険極まる行為 = hành vi cực kỳ nguy hiểm. Mang tính văn viết hơn một chút.'
        },
        examples: [
          {
            jp: '危険極まる運転で事故を起こした。',
            romaji: 'Kiken kiwamaru unten de jiko o okoshita.',
            meaning: {
              en: 'He caused an accident with extremely dangerous driving.',
              vi: 'Anh ta gây tai nạn vì lái xe cực kỳ nguy hiểm.'
            }
          },
          {
            jp: 'その態度は無礼極まるものだ。',
            romaji: 'Sono taido wa burei kiwamaru mono da.',
            meaning: {
              en: 'That attitude is utterly insolent.',
              vi: 'Thái độ đó hết sức vô lễ.'
            }
          }
        ]
      },
      {
        pattern: '感（かん）極（きわ）まる',
        title: { en: 'be overwhelmed with emotion', vi: 'dâng trào cảm xúc' },
        explanation: {
          en: '感極まる is a set phrase meaning to be overcome by emotion, so much that one cries. Here 極まる expresses positive, intense feeling.',
          vi: '感極まる là cụm cố định nghĩa là bị cảm xúc lấn át, đến mức bật khóc. Ở đây 極まる diễn đạt cảm xúc mãnh liệt, tích cực.'
        },
        examples: [
          {
            jp: '受賞のスピーチで彼は感極まって涙を流した。',
            romaji: 'Jushō no supīchi de kare wa kankiwamatte namida o nagashita.',
            meaning: {
              en: 'He was overcome with emotion and shed tears during the acceptance speech.',
              vi: 'Trong bài phát biểu nhận giải, anh ấy xúc động trào nước mắt.'
            }
          },
          {
            jp: '再会の喜びに感極まり、言葉が出なかった。',
            romaji: 'Saikai no yorokobi ni kankiwamari, kotoba ga denakatta.',
            meaning: {
              en: 'Overwhelmed by the joy of reunion, I could not find words.',
              vi: 'Dâng trào niềm vui hội ngộ, tôi không thốt nên lời.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A complaint at the counter', vi: 'Lời than phiền ở quầy' },
        lines: [
          {
            jp: '窓口の係員の態度は失礼極まりないものだった。',
            romaji: 'Madoguchi no kakariin no taido wa shitsurei kiwamarinai mono datta.',
            meaning: {
              en: "The clerk's attitude at the counter was extremely rude.",
              vi: 'Thái độ của nhân viên ở quầy hết sức bất lịch sự.'
            }
          },
          {
            jp: '客を無視する対応は不愉快極まりない。',
            romaji: 'Kyaku o mushi suru taiō wa fuyukai kiwamarinai.',
            meaning: {
              en: 'Ignoring the customer is an utterly unpleasant way to respond.',
              vi: 'Cách phản ứng phớt lờ khách hàng vô cùng khó chịu.'
            }
          },
          {
            jp: '私はその無礼な発言に強い不快を感じた。',
            romaji: 'Watashi wa sono burei na hatsugen ni tsuyoi fukai o kanjita.',
            meaning: {
              en: 'I felt strong displeasure at that insolent remark.',
              vi: 'Tôi cảm thấy vô cùng khó chịu trước phát ngôn vô lễ đó.'
            }
          },
          {
            jp: '責任者が現れ、丁寧に謝罪したときは、正直、感極まった。',
            romaji: 'Sekininsha ga araware, teinei ni shazai shita toki wa, shōjiki, kankiwamatta.',
            meaning: {
              en: 'When the manager appeared and apologized politely, honestly, I was moved to tears.',
              vi: 'Khi người phụ trách xuất hiện và xin lỗi lịch sự, thật lòng tôi đã xúc động trào nước mắt.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: "How was the clerk's attitude described?",
              vi: 'Thái độ của nhân viên được miêu tả thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Extremely rude', vi: 'Hết sức bất lịch sự' } },
              { id: 'b', label: { en: 'Very kind', vi: 'Rất tử tế' } },
              { id: 'c', label: { en: 'Slightly careless', vi: 'Hơi cẩu thả' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened when the manager apologized?',
              vi: 'Điều gì xảy ra khi người phụ trách xin lỗi?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The writer was moved to tears',
                  vi: 'Người viết xúc động trào nước mắt'
                }
              },
              { id: 'b', label: { en: 'The writer got angrier', vi: 'Người viết càng tức giận' } },
              {
                id: 'c',
                label: { en: 'The writer left immediately', vi: 'Người viết bỏ đi ngay' }
              }
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
      en: 'The Height of Emotion: 〜の至り',
      vi: 'Tột cùng cảm xúc: 〜の至り'
    },
    focus: {
      en: 'Express the highest degree of a (usually formal) feeling such as honor or embarrassment with 〜の至り, common in speeches.',
      vi: 'Diễn đạt mức độ cao nhất của một cảm xúc (thường trang trọng) như vinh dự hay xấu hổ với 〜の至り, hay dùng trong diễn văn.'
    },
    vocab: [
      {
        kana: 'こうえい',
        kanji: '光栄',
        romaji: 'kōei',
        meaning: { en: 'honor, privilege', vi: 'vinh dự' }
      },
      {
        kana: 'せきめん',
        kanji: '赤面',
        romaji: 'sekimen',
        meaning: { en: 'blushing, shame', vi: 'sự đỏ mặt, xấu hổ' }
      },
      {
        kana: 'きょうしゅく',
        kanji: '恐縮',
        romaji: 'kyōshuku',
        meaning: { en: 'feeling obliged / abashed', vi: 'sự áy náy, ngại ngùng' }
      },
      {
        kana: 'わかげ',
        kanji: '若気',
        romaji: 'wakage',
        meaning: { en: 'youthful rashness', vi: 'sự bồng bột tuổi trẻ' }
      },
      {
        kana: 'めいよ',
        kanji: '名誉',
        romaji: 'meiyo',
        meaning: { en: 'honor, prestige', vi: 'danh dự' }
      },
      {
        kana: 'じゅしょう',
        kanji: '受賞',
        romaji: 'jushō',
        meaning: { en: 'receiving an award', vi: 'việc nhận giải' }
      },
      {
        kana: 'しきてん',
        kanji: '式典',
        romaji: 'shikiten',
        meaning: { en: 'ceremony', vi: 'buổi lễ' }
      },
      {
        kana: 'しゅくが',
        kanji: '祝賀',
        romaji: 'shukuga',
        meaning: { en: 'celebration, congratulation', vi: 'sự chúc mừng' }
      },
      {
        kana: 'しゃじ',
        kanji: '謝辞',
        romaji: 'shaji',
        meaning: { en: 'words of thanks', vi: 'lời cảm tạ' }
      },
      {
        kana: 'つうこん',
        kanji: '痛恨',
        romaji: 'tsūkon',
        meaning: { en: 'bitter regret', vi: 'sự ân hận sâu sắc' }
      },
      {
        kana: 'みにあまる',
        kanji: '身に余る',
        romaji: 'mi ni amaru',
        meaning: { en: 'more than one deserves', vi: 'quá sức xứng đáng' }
      },
      {
        kana: 'はいけん',
        kanji: '拝見',
        romaji: 'haiken',
        meaning: { en: '(humble) to see, to look', vi: '(khiêm nhường) được xem' }
      }
    ],
    grammar: [
      {
        pattern: 'N（感情）の至（いた）り',
        title: { en: 'the height of (a formal feeling)', vi: 'tột cùng của (cảm xúc trang trọng)' },
        explanation: {
          en: '〜の至り attaches to a formal emotion noun (光栄・恐縮) to mean "the utmost," expressing intense, ceremonial feeling. Very common in speeches.',
          vi: '〜の至り gắn vào danh từ cảm xúc trang trọng (光栄・恐縮) để diễn đạt "tột cùng", thể hiện cảm xúc mãnh liệt, trang nghiêm. Rất hay gặp trong diễn văn.'
        },
        examples: [
          {
            jp: 'このような賞をいただき、光栄の至りです。',
            romaji: 'Kono yō na shō o itadaki, kōei no itari desu.',
            meaning: {
              en: 'To receive such an award is the greatest honor.',
              vi: 'Được nhận giải thưởng như thế này là vinh dự tột cùng.'
            }
          },
          {
            jp: '身に余るお言葉をいただき、恐縮の至りです。',
            romaji: 'Mi ni amaru okotoba o itadaki, kyōshuku no itari desu.',
            meaning: {
              en: 'I am truly humbled to receive such generous words.',
              vi: 'Được nhận những lời quá sức xứng đáng, tôi vô cùng áy náy.'
            }
          }
        ]
      },
      {
        pattern: '赤面（せきめん）の至（いた）り / 若気（わかげ）の至（いた）り',
        title: { en: 'utmost shame / folly of youth', vi: 'xấu hổ tột cùng / bồng bột tuổi trẻ' },
        explanation: {
          en: '〜の至り can also express extreme embarrassment (赤面の至り) or attribute a past mistake to youthful rashness (若気の至り = a youthful folly).',
          vi: '〜の至り cũng diễn đạt sự xấu hổ tột độ (赤面の至り) hoặc quy lỗi lầm xưa cho sự bồng bột tuổi trẻ (若気の至り = sai lầm thời trẻ).'
        },
        examples: [
          {
            jp: '昔の作文を読み返すと、赤面の至りだ。',
            romaji: 'Mukashi no sakubun o yomikaesu to, sekimen no itari da.',
            meaning: {
              en: 'Rereading my old essays, I am utterly embarrassed.',
              vi: 'Đọc lại bài văn ngày xưa, tôi xấu hổ vô cùng.'
            }
          },
          {
            jp: 'あの無謀な挑戦は、若気の至りだった。',
            romaji: 'Ano mubō na chōsen wa, wakage no itari datta.',
            meaning: {
              en: 'That reckless attempt was a folly of my youth.',
              vi: 'Cuộc thử sức liều lĩnh đó là sự bồng bột của tuổi trẻ.'
            }
          }
        ]
      },
      {
        pattern: '〜の至（いた）り（謝辞・式典）',
        title: { en: 'in formal thanks and ceremonies', vi: 'trong lời cảm tạ và buổi lễ' },
        explanation: {
          en: 'In ceremonies, 〜の至り conveys deeply felt, formal emotion in the speaker. Often paired with 受賞・祝賀・謝辞.',
          vi: 'Trong buổi lễ, 〜の至り truyền tải cảm xúc trang trọng, sâu sắc của người nói. Thường đi với 受賞・祝賀・謝辞.'
        },
        examples: [
          {
            jp: '受賞式でこのような謝辞を述べられ、感激の至りです。',
            romaji: 'Jushō-shiki de kono yō na shaji o noberare, kangeki no itari desu.',
            meaning: {
              en: 'To be able to give these thanks at the award ceremony fills me with the deepest emotion.',
              vi: 'Được nói lời cảm tạ thế này tại lễ trao giải, tôi xúc động tột cùng.'
            }
          },
          {
            jp: '彼を救えなかったことは、痛恨の至りだ。',
            romaji: 'Kare o sukuenakatta koto wa, tsūkon no itari da.',
            meaning: {
              en: 'That I could not save him is a matter of the deepest regret.',
              vi: 'Việc không cứu được anh ấy là nỗi ân hận tột cùng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'An acceptance speech', vi: 'Bài phát biểu nhận giải' },
        lines: [
          {
            jp: '本日、このような名誉ある賞をいただき、光栄の至りです。',
            romaji: 'Honjitsu, kono yō na meiyo aru shō o itadaki, kōei no itari desu.',
            meaning: {
              en: 'To receive such an honorable award today is the greatest honor.',
              vi: 'Hôm nay được nhận giải thưởng danh giá thế này là vinh dự tột cùng.'
            }
          },
          {
            jp: '身に余るお言葉まで頂戴し、恐縮の至りでございます。',
            romaji: 'Mi ni amaru okotoba made chōdai shi, kyōshuku no itari de gozaimasu.',
            meaning: {
              en: 'To even be given such generous words leaves me deeply humbled.',
              vi: 'Còn được trao những lời quá sức xứng đáng, tôi vô cùng áy náy.'
            }
          },
          {
            jp: '思えば若い頃は失敗ばかりで、今思うと若気の至りでした。',
            romaji: 'Omoeba wakai koro wa shippai bakari de, ima omou to wakage no itari deshita.',
            meaning: {
              en: 'Looking back, my youth was full of failures, which I now see as youthful folly.',
              vi: 'Nghĩ lại thời trẻ tôi toàn thất bại, giờ ngẫm lại đó là sự bồng bột tuổi trẻ.'
            }
          },
          {
            jp: '支えてくださった皆様に、心からの謝辞を申し上げます。',
            romaji: 'Sasaete kudasatta minasama ni, kokoro kara no shaji o mōshiagemasu.',
            meaning: {
              en: 'I offer my heartfelt thanks to everyone who supported me.',
              vi: 'Tôi xin gửi lời cảm tạ chân thành đến tất cả những người đã ủng hộ tôi.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How does the speaker feel about receiving the award?',
              vi: 'Người phát biểu cảm thấy thế nào khi nhận giải?'
            },
            choices: [
              { id: 'a', label: { en: 'It is the greatest honor', vi: 'Đó là vinh dự tột cùng' } },
              { id: 'b', label: { en: 'It is a trivial matter', vi: 'Đó là chuyện vặt' } },
              {
                id: 'c',
                label: { en: 'It is deeply regrettable', vi: 'Đó là điều rất đáng tiếc' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How does the speaker describe their youthful failures?',
              vi: 'Người phát biểu mô tả những thất bại thời trẻ ra sao?'
            },
            choices: [
              { id: 'a', label: { en: 'As youthful folly', vi: 'Là sự bồng bột tuổi trẻ' } },
              { id: 'b', label: { en: 'As deliberate crimes', vi: 'Là tội lỗi cố ý' } },
              { id: 'c', label: { en: 'As the fault of others', vi: 'Là lỗi của người khác' } }
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
      en: 'The Peak of It All: 〜の極み',
      vi: 'Đỉnh điểm của tất cả: 〜の極み'
    },
    focus: {
      en: 'Use 〜の極み with a noun to express the absolute peak or extreme of a state, positive or negative ("the height of luxury / exhaustion").',
      vi: 'Dùng 〜の極み với danh từ để diễn đạt đỉnh điểm tuyệt đối của một trạng thái, tích cực hay tiêu cực ("đỉnh cao xa hoa / mệt mỏi").'
    },
    vocab: [
      {
        kana: 'ぜいたく',
        kanji: '贅沢',
        romaji: 'zeitaku',
        meaning: { en: 'luxury, extravagance', vi: 'sự xa hoa' }
      },
      {
        kana: 'ひろう',
        kanji: '疲労',
        romaji: 'hirō',
        meaning: { en: 'fatigue', vi: 'sự mệt mỏi' }
      },
      {
        kana: 'こんらん',
        kanji: '混乱',
        romaji: 'konran',
        meaning: { en: 'confusion, chaos', vi: 'sự hỗn loạn' }
      },
      {
        kana: 'こうふく',
        kanji: '幸福',
        romaji: 'kōfuku',
        meaning: { en: 'happiness', vi: 'hạnh phúc' }
      },
      {
        kana: 'えいが',
        kanji: '栄華',
        romaji: 'eiga',
        meaning: { en: 'glory, splendor', vi: 'sự vinh hoa' }
      },
      {
        kana: 'しふく',
        kanji: '至福',
        romaji: 'shifuku',
        meaning: { en: 'supreme bliss', vi: 'niềm hạnh phúc tột bậc' }
      },
      {
        kana: 'ぜっちょう',
        kanji: '絶頂',
        romaji: 'zecchō',
        meaning: { en: 'climax, peak', vi: 'tột đỉnh' }
      },
      {
        kana: 'ごうか',
        kanji: '豪華',
        romaji: 'gōka',
        meaning: { en: 'gorgeous, lavish', vi: 'lộng lẫy, xa xỉ' }
      },
      {
        kana: 'きゅうきょく',
        kanji: '究極',
        romaji: 'kyūkyoku',
        meaning: { en: 'ultimate', vi: 'tối thượng, tận cùng' }
      },
      {
        kana: 'たぼう',
        kanji: '多忙',
        romaji: 'tabō',
        meaning: { en: 'being very busy', vi: 'sự bận rộn' }
      },
      {
        kana: 'だらく',
        kanji: '堕落',
        romaji: 'daraku',
        meaning: { en: 'corruption, degradation', vi: 'sự sa đọa' }
      },
      {
        kana: 'まんきつ',
        kanji: '満喫',
        romaji: 'mankitsu',
        meaning: { en: 'fully enjoying', vi: 'sự tận hưởng' }
      }
    ],
    grammar: [
      {
        pattern: 'N の極（きわ）み（肯定的）',
        title: { en: 'the height of (positive)', vi: 'đỉnh cao của (tích cực)' },
        explanation: {
          en: 'With a positive noun (贅沢・幸福・至福), 〜の極み means "the height / peak of," the most extreme degree imaginable. A formal, written expression.',
          vi: 'Với danh từ tích cực (贅沢・幸福・至福), 〜の極み nghĩa là "đỉnh cao / tột đỉnh của", mức độ cực điểm có thể hình dung. Cách nói trang trọng, văn viết.'
        },
        examples: [
          {
            jp: '温泉でゆっくり過ごす時間は、贅沢の極みだ。',
            romaji: 'Onsen de yukkuri sugosu jikan wa, zeitaku no kiwami da.',
            meaning: {
              en: 'Time spent relaxing at a hot spring is the height of luxury.',
              vi: 'Thời gian thư giãn ở suối nước nóng là đỉnh cao của sự xa hoa.'
            }
          },
          {
            jp: '家族と過ごす穏やかな日々は、至福の極みである。',
            romaji: 'Kazoku to sugosu odayaka na hibi wa, shifuku no kiwami de aru.',
            meaning: {
              en: 'Calm days spent with family are the peak of bliss.',
              vi: 'Những ngày bình yên bên gia đình là đỉnh điểm của hạnh phúc.'
            }
          }
        ]
      },
      {
        pattern: 'N の極（きわ）み（否定的）',
        title: { en: 'the extreme of (negative)', vi: 'tột cùng của (tiêu cực)' },
        explanation: {
          en: 'With a negative noun (疲労・混乱), 〜の極み means an extreme, unbearable degree of a bad state. 疲労の極み = utterly exhausted.',
          vi: 'Với danh từ tiêu cực (疲労・混乱), 〜の極み nghĩa là mức độ cực điểm, không chịu nổi của một trạng thái xấu. 疲労の極み = kiệt sức tột độ.'
        },
        examples: [
          {
            jp: '連日の残業で、今は疲労の極みにある。',
            romaji: 'Renjitsu no zangyō de, ima wa hirō no kiwami ni aru.',
            meaning: {
              en: 'After days of overtime, I am now utterly exhausted.',
              vi: 'Sau nhiều ngày tăng ca, giờ tôi đang kiệt sức tột độ.'
            }
          },
          {
            jp: '指示が二転三転し、現場は混乱の極みだった。',
            romaji: 'Shiji ga niten-santen shi, genba wa konran no kiwami datta.',
            meaning: {
              en: 'With orders changing again and again, the site was in utter chaos.',
              vi: 'Mệnh lệnh thay đổi liên tục, hiện trường rơi vào hỗn loạn tột cùng.'
            }
          }
        ]
      },
      {
        pattern: 'N の極（きわ）み + である / だ',
        title: { en: 'declaring something the ultimate', vi: 'tuyên bố điều gì là tận cùng' },
        explanation: {
          en: '〜の極み rounds off a sentence as a strong evaluation ("nothing could be more ~"). It treats the noun as the ultimate example of that quality.',
          vi: '〜の極み kết thúc câu như một đánh giá mạnh ("không gì hơn được nữa"). Nó coi danh từ là ví dụ tận cùng của phẩm chất đó.'
        },
        examples: [
          {
            jp: 'これほど豪華な料理は、まさに贅沢の極みと言える。',
            romaji: 'Kore hodo gōka na ryōri wa, masa ni zeitaku no kiwami to ieru.',
            meaning: {
              en: 'Cuisine this lavish can truly be called the height of luxury.',
              vi: 'Món ăn lộng lẫy đến thế quả thực có thể gọi là đỉnh cao xa hoa.'
            }
          },
          {
            jp: '権力におぼれた末の堕落は、愚かさの極みだ。',
            romaji: 'Kenryoku ni oboreta sue no daraku wa, orokasa no kiwami da.',
            meaning: {
              en: 'Corruption born of drowning in power is the height of foolishness.',
              vi: 'Sự sa đọa do say mê quyền lực là đỉnh điểm của sự ngu xuẩn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A weekend at the resort', vi: 'Cuối tuần ở khu nghỉ dưỡng' },
        lines: [
          {
            jp: '先月、豪華なリゾートで週末を満喫した。',
            romaji: 'Sengetsu, gōka na rizōto de shūmatsu o mankitsu shita.',
            meaning: {
              en: 'Last month I fully enjoyed a weekend at a lavish resort.',
              vi: 'Tháng trước tôi đã tận hưởng cuối tuần ở một khu nghỉ dưỡng lộng lẫy.'
            }
          },
          {
            jp: '温泉と豪華な食事は、まさに贅沢の極みだった。',
            romaji: 'Onsen to gōka na shokuji wa, masa ni zeitaku no kiwami datta.',
            meaning: {
              en: 'The hot springs and lavish meals were truly the height of luxury.',
              vi: 'Suối nước nóng và bữa ăn xa hoa quả thực là đỉnh cao của sự xa xỉ.'
            }
          },
          {
            jp: '直前まで多忙で疲労の極みにあったので、心から癒された。',
            romaji: 'Chokuzen made tabō de hirō no kiwami ni atta node, kokoro kara iyasareta.',
            meaning: {
              en: 'Since I had been busy and utterly exhausted until just before, I was truly healed.',
              vi: 'Vì trước đó tôi bận rộn và kiệt sức tột độ, nên tôi được chữa lành thật sự.'
            }
          },
          {
            jp: '穏やかな時間を過ごせたことは、至福の極みである。',
            romaji: 'Odayaka na jikan o sugoseta koto wa, shifuku no kiwami de aru.',
            meaning: {
              en: 'Being able to spend such calm time was the peak of bliss.',
              vi: 'Được trải qua khoảng thời gian bình yên ấy là đỉnh điểm của hạnh phúc.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How are the hot springs and meals described?',
              vi: 'Suối nước nóng và bữa ăn được mô tả thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'The height of luxury', vi: 'Đỉnh cao của sự xa hoa' } },
              { id: 'b', label: { en: 'Cheap and plain', vi: 'Rẻ và đơn sơ' } },
              { id: 'c', label: { en: 'Disappointing', vi: 'Đáng thất vọng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What state was the writer in before the trip?',
              vi: 'Trước chuyến đi, người viết ở trạng thái nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Utterly exhausted', vi: 'Kiệt sức tột độ' } },
              { id: 'b', label: { en: 'Completely bored', vi: 'Chán nản hoàn toàn' } },
              { id: 'c', label: { en: 'Perfectly rested', vi: 'Nghỉ ngơi đầy đủ' } }
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
      en: 'So Very ~: 〜限りだ',
      vi: 'Vô cùng ~: 〜限りだ'
    },
    focus: {
      en: 'Express an intense personal emotion ("I feel extremely ~") with an emotive adjective plus 〜限りだ.',
      vi: 'Diễn đạt một cảm xúc cá nhân mãnh liệt ("tôi cảm thấy vô cùng ~") với tính từ cảm xúc + 〜限りだ.'
    },
    vocab: [
      {
        kana: 'うれしい',
        kanji: '嬉しい',
        romaji: 'ureshii',
        meaning: { en: 'glad, happy', vi: 'vui mừng' }
      },
      {
        kana: 'こころづよい',
        kanji: '心強い',
        romaji: 'kokorozuyoi',
        meaning: { en: 'reassuring', vi: 'yên tâm, vững dạ' }
      },
      {
        kana: 'うらやましい',
        kanji: '羨ましい',
        romaji: 'urayamashii',
        meaning: { en: 'envious', vi: 'ghen tị, thèm muốn' }
      },
      {
        kana: 'さびしい',
        kanji: '寂しい',
        romaji: 'sabishii',
        meaning: { en: 'lonely', vi: 'cô đơn, buồn' }
      },
      {
        kana: 'こころぼそい',
        kanji: '心細い',
        romaji: 'kokorobosoi',
        meaning: { en: 'helpless, uneasy', vi: 'bất an, thấy yếu lòng' }
      },
      {
        kana: 'よろこばしい',
        kanji: '喜ばしい',
        romaji: 'yorokobashii',
        meaning: { en: 'delightful, gratifying', vi: 'đáng mừng' }
      },
      {
        kana: 'たのもしい',
        kanji: '頼もしい',
        romaji: 'tanomoshii',
        meaning: { en: 'reliable, promising', vi: 'đáng tin cậy' }
      },
      {
        kana: 'なごりおしい',
        kanji: '名残惜しい',
        romaji: 'nagori-oshii',
        meaning: { en: 'reluctant to part', vi: 'lưu luyến, bịn rịn' }
      },
      {
        kana: 'はらだたしい',
        kanji: '腹立たしい',
        romaji: 'haradatashii',
        meaning: { en: 'infuriating', vi: 'bực bội, tức tối' }
      },
      {
        kana: 'ほこらしい',
        kanji: '誇らしい',
        romaji: 'hokorashii',
        meaning: { en: 'proud', vi: 'tự hào' }
      },
      {
        kana: 'ほほえましい',
        kanji: '微笑ましい',
        romaji: 'hohoemashii',
        meaning: { en: 'heartwarming', vi: 'đáng yêu, ấm lòng' }
      },
      {
        kana: 'なさけない',
        kanji: '情けない',
        romaji: 'nasakenai',
        meaning: { en: 'pathetic, shameful', vi: 'thảm hại, đáng xấu hổ' }
      }
    ],
    grammar: [
      {
        pattern: 'い-adjective ＋ 限（かぎ）りだ',
        title: { en: 'extremely (a feeling)', vi: 'vô cùng (một cảm xúc)' },
        explanation: {
          en: 'After an emotive い-adjective (嬉しい・寂しい・羨ましい), 〜限りだ expresses the speaker\u2019s own intense feeling: "I feel extremely ~." Not used to describe others.',
          vi: 'Sau tính từ -い chỉ cảm xúc (嬉しい・寂しい・羨ましい), 〜限りだ diễn đạt cảm xúc mãnh liệt của chính người nói: "tôi cảm thấy vô cùng ~". Không dùng để tả người khác.'
        },
        examples: [
          {
            jp: '長年の夢が叶って、嬉しい限りだ。',
            romaji: 'Naganen no yume ga kanatte, ureshii kagiri da.',
            meaning: {
              en: "My long-held dream came true; I couldn't be happier.",
              vi: 'Giấc mơ bao năm thành hiện thực, tôi vui mừng vô cùng.'
            }
          },
          {
            jp: '友が次々と去り、寂しい限りだ。',
            romaji: 'Tomo ga tsugitsugi to sari, sabishii kagiri da.',
            meaning: {
              en: 'With friends leaving one after another, I feel utterly lonely.',
              vi: 'Bạn bè lần lượt rời đi, tôi thấy cô đơn vô cùng.'
            }
          }
        ]
      },
      {
        pattern: 'な-adjective ＋ な ＋ 限（かぎ）りだ',
        title: { en: 'extremely (with na-adjectives)', vi: 'vô cùng (với tính từ -な)' },
        explanation: {
          en: 'A few na-adjectives also take 〜限りだ, keeping な before it: 幸せな限りだ. The feeling must be the speaker\u2019s own emotional state.',
          vi: 'Một số tính từ -な cũng dùng 〜限りだ, giữ な phía trước: 幸せな限りだ. Cảm xúc phải là trạng thái của chính người nói.'
        },
        examples: [
          {
            jp: '頼もしい仲間に囲まれ、心強い限りだ。',
            romaji: 'Tanomoshii nakama ni kakomare, kokorozuyoi kagiri da.',
            meaning: {
              en: 'Surrounded by reliable companions, I feel completely reassured.',
              vi: 'Được vây quanh bởi những người bạn đáng tin, tôi vô cùng yên tâm.'
            }
          },
          {
            jp: '子どもたちの成長が見られて、幸せな限りだ。',
            romaji: 'Kodomotachi no seichō ga mirarete, shiawase na kagiri da.',
            meaning: {
              en: 'Being able to watch the children grow, I am as happy as can be.',
              vi: 'Được nhìn các con trưởng thành, tôi hạnh phúc vô cùng.'
            }
          }
        ]
      },
      {
        pattern: '〜限（かぎ）りだ（書き言葉的）',
        title: { en: 'a heartfelt written tone', vi: 'sắc thái cảm thán văn viết' },
        explanation: {
          en: '〜限りだ has a heartfelt, slightly literary tone and works well in letters or formal remarks to convey strong, sincere emotion.',
          vi: '〜限りだ mang sắc thái cảm thán, hơi văn viết, hợp dùng trong thư từ hay lời lẽ trang trọng để truyền đạt cảm xúc mạnh, chân thành.'
        },
        examples: [
          {
            jp: '皆様にお会いできず、名残惜しい限りです。',
            romaji: 'Minasama ni oai dekizu, nagori-oshii kagiri desu.',
            meaning: {
              en: 'Not being able to meet you all, I feel deeply reluctant to part.',
              vi: 'Không được gặp mọi người, tôi vô cùng lưu luyến.'
            }
          },
          {
            jp: '約束を守れなかったとは、情けない限りだ。',
            romaji: 'Yakusoku o mamorenakatta to wa, nasakenai kagiri da.',
            meaning: {
              en: 'That I failed to keep my promise is utterly shameful.',
              vi: 'Việc không giữ được lời hứa thật đáng xấu hổ vô cùng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A farewell letter', vi: 'Một lá thư từ biệt' },
        lines: [
          {
            jp: '無事に卒業を迎えられ、嬉しい限りです。',
            romaji: 'Buji ni sotsugyō o mukaerare, ureshii kagiri desu.',
            meaning: {
              en: 'To have safely reached graduation, I could not be happier.',
              vi: 'Được tốt nghiệp suôn sẻ, tôi vui mừng vô cùng.'
            }
          },
          {
            jp: '頼もしい先生方に支えられ、心強い限りでした。',
            romaji: 'Tanomoshii sensei-gata ni sasaerare, kokorozuyoi kagiri deshita.',
            meaning: {
              en: 'Supported by reliable teachers, I felt completely reassured.',
              vi: 'Được các thầy cô đáng tin cậy nâng đỡ, tôi vô cùng yên tâm.'
            }
          },
          {
            jp: '一方で、仲間と別れるのは名残惜しい限りだ。',
            romaji: 'Ippō de, nakama to wakareru no wa nagori-oshii kagiri da.',
            meaning: {
              en: 'At the same time, parting with my friends fills me with reluctance.',
              vi: 'Mặt khác, chia tay bạn bè khiến tôi lưu luyến vô cùng.'
            }
          },
          {
            jp: '皆の前途を思うと、誇らしい限りである。',
            romaji: 'Mina no zento o omou to, hokorashii kagiri de aru.',
            meaning: {
              en: "When I think of everyone's future, I am filled with pride.",
              vi: 'Nghĩ đến tương lai của mọi người, tôi tự hào vô cùng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How does the writer feel about graduating?',
              vi: 'Người viết cảm thấy thế nào về việc tốt nghiệp?'
            },
            choices: [
              { id: 'a', label: { en: 'Extremely glad', vi: 'Vô cùng vui mừng' } },
              { id: 'b', label: { en: 'Deeply ashamed', vi: 'Vô cùng xấu hổ' } },
              { id: 'c', label: { en: 'Completely indifferent', vi: 'Hoàn toàn thờ ơ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How does the writer feel about parting with friends?',
              vi: 'Người viết cảm thấy thế nào khi chia tay bạn bè?'
            },
            choices: [
              { id: 'a', label: { en: 'Very reluctant to part', vi: 'Rất lưu luyến' } },
              { id: 'b', label: { en: 'Relieved to be free', vi: 'Nhẹ nhõm vì được tự do' } },
              { id: 'c', label: { en: 'Infuriated', vi: 'Tức giận' } }
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
      en: 'A Tendency to ~: 〜きらいがある',
      vi: 'Có khuynh hướng ~: 〜きらいがある'
    },
    focus: {
      en: 'Point out an (often undesirable) tendency in someone or something with 〜きらいがある.',
      vi: 'Chỉ ra một khuynh hướng (thường không tốt) ở ai/cái gì với 〜きらいがある.'
    },
    vocab: [
      {
        kana: 'けいこう',
        kanji: '傾向',
        romaji: 'keikō',
        meaning: { en: 'tendency, trend', vi: 'khuynh hướng' }
      },
      {
        kana: 'おおげさ',
        kanji: '大げさ',
        romaji: 'ōgesa',
        meaning: { en: 'exaggerated', vi: 'phóng đại, làm quá' }
      },
      {
        kana: 'かたよる',
        kanji: '偏る',
        romaji: 'katayoru',
        meaning: { en: 'to be biased, to lean', vi: 'thiên lệch, lệch' }
      },
      {
        kana: 'どくだん',
        kanji: '独断',
        romaji: 'dokudan',
        meaning: { en: 'arbitrary decision', vi: 'sự độc đoán' }
      },
      {
        kana: 'らっかん',
        kanji: '楽観',
        romaji: 'rakkan',
        meaning: { en: 'optimism', vi: 'sự lạc quan' }
      },
      {
        kana: 'ひかん',
        kanji: '悲観',
        romaji: 'hikan',
        meaning: { en: 'pessimism', vi: 'sự bi quan' }
      },
      {
        kana: 'なまける',
        kanji: '怠ける',
        romaji: 'namakeru',
        meaning: { en: 'to be lazy, to slack off', vi: 'lười biếng' }
      },
      {
        kana: 'さきおくり',
        kanji: '先送り',
        romaji: 'sakiokuri',
        meaning: { en: 'postponement, putting off', vi: 'sự trì hoãn' }
      },
      {
        kana: 'きめつける',
        kanji: '決めつける',
        romaji: 'kimetsukeru',
        meaning: { en: 'to jump to conclusions', vi: 'vội kết luận, áp đặt' }
      },
      {
        kana: 'かしん',
        kanji: '過信',
        romaji: 'kashin',
        meaning: { en: 'overconfidence', vi: 'sự tự tin thái quá' }
      },
      {
        kana: 'おもいこむ',
        kanji: '思い込む',
        romaji: 'omoikomu',
        meaning: { en: 'to assume, to be convinced', vi: 'đinh ninh, tự cho là' }
      },
      {
        kana: 'けいし',
        kanji: '軽視',
        romaji: 'keishi',
        meaning: { en: 'disregard, making light of', vi: 'sự xem nhẹ' }
      }
    ],
    grammar: [
      {
        pattern: 'V（辞書形・ない形）きらいがある',
        title: { en: 'tends to (a bad habit)', vi: 'có khuynh hướng (thói xấu)' },
        explanation: {
          en: 'After a dictionary- or ない-form verb, 〜きらいがある points out an undesirable tendency to do (or not do) something.',
          vi: 'Sau động từ thể từ điển hoặc thể ない, 〜きらいがある chỉ ra khuynh hướng không tốt là hay làm (hoặc không làm) điều gì đó.'
        },
        examples: [
          {
            jp: '彼は物事を大げさに言うきらいがある。',
            romaji: 'Kare wa monogoto o ōgesa ni iu kirai ga aru.',
            meaning: {
              en: 'He tends to exaggerate things.',
              vi: 'Anh ấy có khuynh hướng nói phóng đại mọi chuyện.'
            }
          },
          {
            jp: '私は嫌な仕事を先送りにするきらいがある。',
            romaji: 'Watashi wa iya na shigoto o sakiokuri ni suru kirai ga aru.',
            meaning: {
              en: 'I tend to put off work I dislike.',
              vi: 'Tôi có khuynh hướng trì hoãn những việc mình ngại làm.'
            }
          }
        ]
      },
      {
        pattern: 'N の きらいがある',
        title: { en: 'has a tendency toward (noun)', vi: 'có khuynh hướng (danh từ)' },
        explanation: {
          en: 'With a noun plus の, 〜きらいがある attributes a negative tendency such as bias or overconfidence to someone.',
          vi: 'Với danh từ kèm の, 〜きらいがある gán cho ai đó một khuynh hướng tiêu cực như thiên lệch hay tự tin thái quá.'
        },
        examples: [
          {
            jp: '彼の判断は独断のきらいがある。',
            romaji: 'Kare no handan wa dokudan no kirai ga aru.',
            meaning: {
              en: 'His judgments tend toward being arbitrary.',
              vi: 'Các phán đoán của anh ấy có khuynh hướng độc đoán.'
            }
          },
          {
            jp: 'その報道は一方に偏るきらいがある。',
            romaji: 'Sono hōdō wa ippō ni katayoru kirai ga aru.',
            meaning: {
              en: 'That news coverage tends to be one-sided.',
              vi: 'Việc đưa tin đó có khuynh hướng thiên lệch một phía.'
            }
          }
        ]
      },
      {
        pattern: '〜きらいがある（評価・忠告）',
        title: { en: 'used for criticism or advice', vi: 'dùng để phê bình hay khuyên nhủ' },
        explanation: {
          en: '〜きらいがある is used to gently but critically point out a habit, often as advice. It is not used for one\u2019s likes or dislikes.',
          vi: '〜きらいがある dùng để chỉ ra một thói quen một cách nhẹ nhàng nhưng có ý phê bình, thường là lời khuyên. Không dùng cho sở thích yêu/ghét.'
        },
        examples: [
          {
            jp: '若い社員は自分の力を過信するきらいがある。',
            romaji: 'Wakai shain wa jibun no chikara o kashin suru kirai ga aru.',
            meaning: {
              en: 'Young employees tend to be overconfident in their own abilities.',
              vi: 'Nhân viên trẻ có khuynh hướng tự tin thái quá vào năng lực của mình.'
            }
          },
          {
            jp: '彼は他人の意見を軽視するきらいがあるので、注意が必要だ。',
            romaji: 'Kare wa tanin no iken o keishi suru kirai ga aru node, chūi ga hitsuyō da.',
            meaning: {
              en: "He tends to disregard others' opinions, so caution is needed.",
              vi: 'Anh ấy có khuynh hướng xem nhẹ ý kiến người khác, nên cần lưu ý.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A note in a performance review', vi: 'Ghi chú trong bản đánh giá' },
        lines: [
          {
            jp: '田中さんは有能だが、物事を独断で決めるきらいがある。',
            romaji: 'Tanaka-san wa yūnō da ga, monogoto o dokudan de kimeru kirai ga aru.',
            meaning: {
              en: 'Tanaka is capable, but tends to decide things arbitrarily.',
              vi: 'Anh Tanaka có năng lực, nhưng có khuynh hướng quyết định mọi việc một cách độc đoán.'
            }
          },
          {
            jp: 'また、自分の判断を過信するきらいも見られる。',
            romaji: 'Mata, jibun no handan o kashin suru kirai mo mirareru.',
            meaning: {
              en: 'He also shows a tendency to be overconfident in his own judgment.',
              vi: 'Ngoài ra còn thấy khuynh hướng tự tin thái quá vào phán đoán của bản thân.'
            }
          },
          {
            jp: '一方、難しい課題を先送りにするきらいはない。',
            romaji: 'Ippō, muzukashii kadai o sakiokuri ni suru kirai wa nai.',
            meaning: {
              en: 'On the other hand, he has no tendency to put off difficult tasks.',
              vi: 'Mặt khác, anh ấy không có khuynh hướng trì hoãn những nhiệm vụ khó.'
            }
          },
          {
            jp: '他人の意見を軽視せず聞く姿勢を持てば、さらに伸びるだろう。',
            romaji: 'Tanin no iken o keishi sezu kiku shisei o moteba, sara ni nobiru darō.',
            meaning: {
              en: "If he adopts an attitude of listening without disregarding others' opinions, he will grow further.",
              vi: 'Nếu có thái độ lắng nghe mà không xem nhẹ ý kiến người khác, anh ấy sẽ còn tiến bộ hơn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What tendency does Tanaka have?',
              vi: 'Anh Tanaka có khuynh hướng gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Deciding things arbitrarily', vi: 'Quyết định mọi việc độc đoán' }
              },
              {
                id: 'b',
                label: { en: 'Putting off difficult tasks', vi: 'Trì hoãn nhiệm vụ khó' }
              },
              {
                id: 'c',
                label: { en: 'Exaggerating his failures', vi: 'Phóng đại thất bại của mình' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the reviewer say he does NOT tend to do?',
              vi: 'Người đánh giá nói anh ấy KHÔNG có khuynh hướng gì?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Put off difficult tasks', vi: 'Trì hoãn nhiệm vụ khó' }
              },
              {
                id: 'b',
                label: { en: 'Trust his own judgment', vi: 'Tin vào phán đoán bản thân' }
              },
              { id: 'c', label: { en: 'Decide things alone', vi: 'Tự mình quyết định' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What advice is given to help him grow?',
              vi: 'Lời khuyên nào giúp anh ấy tiến bộ?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: "Listen without disregarding others' opinions",
                  vi: 'Lắng nghe, không xem nhẹ ý kiến người khác'
                }
              },
              {
                id: 'b',
                label: { en: 'Decide everything faster', vi: 'Quyết định mọi thứ nhanh hơn' }
              },
              {
                id: 'c',
                label: {
                  en: 'Rely more on his own judgment',
                  vi: 'Tin tưởng phán đoán bản thân hơn'
                }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
