import type { Lesson } from '../types.ts';

export const n1LessonsE: Lesson[] = [
  {
    id: 'lesson-33',
    number: 33,
    title: {
      en: 'Only Here: 〜ならではの',
      vi: 'Chỉ ở đây mới có: 〜ならではの'
    },
    focus: {
      en: 'Single out a quality or thing that is unique to, and only possible for, a particular person, place, or thing with 〜ならではの.',
      vi: 'Nêu bật một phẩm chất hay sự vật chỉ riêng có và chỉ có thể có ở một người, nơi chốn hay vật cụ thể với 〜ならではの.'
    },
    vocab: [
      {
        kana: 'でんとう',
        kanji: '伝統',
        romaji: 'dentō',
        meaning: { en: 'tradition', vi: 'truyền thống' }
      },
      {
        kana: 'しょくにん',
        kanji: '職人',
        romaji: 'shokunin',
        meaning: { en: 'artisan, craftsman', vi: 'nghệ nhân, thợ thủ công' }
      },
      {
        kana: 'ふうけい',
        kanji: '風景',
        romaji: 'fūkei',
        meaning: { en: 'scenery, landscape', vi: 'phong cảnh' }
      },
      {
        kana: 'めいさん',
        kanji: '名産',
        romaji: 'meisan',
        meaning: { en: 'local specialty', vi: 'đặc sản' }
      },
      {
        kana: 'ぎほう',
        kanji: '技法',
        romaji: 'gihō',
        meaning: { en: 'technique', vi: 'kỹ pháp, kỹ thuật' }
      },
      {
        kana: 'どくとく',
        kanji: '独特',
        romaji: 'dokutoku',
        meaning: { en: 'unique, distinctive (na-adj)', vi: 'độc đáo, đặc trưng' }
      },
      {
        kana: 'みりょく',
        kanji: '魅力',
        romaji: 'miryoku',
        meaning: { en: 'charm, appeal', vi: 'sức hút, nét quyến rũ' }
      },
      {
        kana: 'あじわい',
        kanji: '味わい',
        romaji: 'ajiwai',
        meaning: { en: 'flavor, depth of taste', vi: 'hương vị, nét tinh tế' }
      },
      {
        kana: 'ちいき',
        kanji: '地域',
        romaji: 'chiiki',
        meaning: { en: 'region, area', vi: 'khu vực, vùng' }
      },
      {
        kana: 'でし',
        kanji: '弟子',
        romaji: 'deshi',
        meaning: { en: 'apprentice, disciple', vi: 'đệ tử, học trò' }
      },
      {
        kana: 'こだわり',
        romaji: 'kodawari',
        meaning: { en: 'dedication, attention to detail', vi: 'sự cầu kỳ, tâm huyết' }
      },
      {
        kana: 'うけつぐ',
        kanji: '受け継ぐ',
        romaji: 'uketsugu',
        meaning: { en: 'to inherit, carry on', vi: 'kế thừa' }
      }
    ],
    grammar: [
      {
        pattern: 'N ならではの N',
        title: { en: 'Unique to / only possible for', vi: 'Chỉ riêng có ở' },
        explanation: {
          en: 'Attach ならではの to a noun to say a following quality is unique to it — something only that person, place, or thing can offer.',
          vi: 'Gắn ならではの vào danh từ để nói phẩm chất theo sau là chỉ riêng nó mới có — điều mà chỉ người, nơi hay vật đó mang lại được.'
        },
        examples: [
          {
            jp: 'この味は老舗ならではの深さがある。',
            romaji: 'Kono aji wa shinise nara dewa no fukasa ga aru.',
            meaning: {
              en: 'This flavor has a depth only a long-established shop can produce.',
              vi: 'Hương vị này có chiều sâu mà chỉ tiệm lâu đời mới có được.'
            }
          },
          {
            jp: '職人ならではの細やかな技が光る作品だ。',
            romaji: 'Shokunin nara dewa no komayaka na waza ga hikaru sakuhin da.',
            meaning: {
              en: 'It is a work that shines with the delicate skill only an artisan can achieve.',
              vi: 'Đó là tác phẩm tỏa sáng nhờ kỹ thuật tinh tế mà chỉ nghệ nhân mới có.'
            }
          }
        ]
      },
      {
        pattern: 'N ならでは（だ）',
        title: { en: 'Sentence-final ならでは', vi: 'ならでは cuối câu' },
        explanation: {
          en: 'When the quality is already clear, ならでは can end the sentence directly, meaning "is something only ... can offer."',
          vi: 'Khi phẩm chất đã rõ, ならでは có thể kết thúc câu trực tiếp, nghĩa là "là điều chỉ ... mới có".'
        },
        examples: [
          {
            jp: 'この迫力は生の舞台ならではだ。',
            romaji: 'Kono hakuryoku wa nama no butai nara dewa da.',
            meaning: {
              en: 'This intensity is something only a live stage can offer.',
              vi: 'Sự mãnh liệt này chỉ sân khấu trực tiếp mới có.'
            }
          },
          {
            jp: 'あの食感はこの店ならではと言える。',
            romaji: 'Ano shokkan wa kono mise nara dewa to ieru.',
            meaning: {
              en: 'You could say that texture is unique to this shop.',
              vi: 'Có thể nói kết cấu đó chỉ riêng tiệm này mới có.'
            }
          }
        ]
      },
      {
        pattern: 'N だけあって',
        title: { en: 'As befits / just as expected of', vi: 'Đúng là / xứng với' },
        explanation: {
          en: 'だけあって presents a result that lives up to the reputation or nature of the noun before it.',
          vi: 'だけあって nêu một kết quả xứng đáng với danh tiếng hay bản chất của danh từ đứng trước.'
        },
        examples: [
          {
            jp: '伝統の町だけあって、風景に趣がある。',
            romaji: 'Dentō no machi dake atte, fūkei ni omomuki ga aru.',
            meaning: {
              en: 'Befitting a traditional town, the scenery has elegance.',
              vi: 'Đúng là một thị trấn truyền thống, phong cảnh thật có nét.'
            }
          },
          {
            jp: '名産地だけあって、果物がとても甘い。',
            romaji: 'Meisanchi dake atte, kudamono ga totemo amai.',
            meaning: {
              en: 'As befits a famous production area, the fruit is very sweet.',
              vi: 'Đúng là vùng đặc sản, trái cây rất ngọt.'
            }
          }
        ]
      },
      {
        pattern: 'N をおいて（ほかにない）',
        title: { en: 'None other than', vi: 'Không ai/gì khác ngoài' },
        explanation: {
          en: 'をおいて(ほかにない) singles out the one and only candidate: there is no other but this.',
          vi: 'をおいて(ほかにない) chỉ ra ứng viên duy nhất: ngoài cái này ra không còn gì khác.'
        },
        examples: [
          {
            jp: 'この技を継げるのは彼をおいてほかにない。',
            romaji: 'Kono waza o tsugeru no wa kare o oite hoka ni nai.',
            meaning: {
              en: 'No one but him can carry on this skill.',
              vi: 'Người kế thừa kỹ thuật này thì ngoài anh ấy ra không còn ai.'
            }
          },
          {
            jp: '後継者は弟子をおいて考えられない。',
            romaji: 'Kōkeisha wa deshi o oite kangaerarenai.',
            meaning: {
              en: 'No successor can be imagined other than the apprentice.',
              vi: 'Người kế nghiệp thì không thể nghĩ đến ai khác ngoài người đệ tử.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A town of pottery', vi: 'Thị trấn gốm sứ' },
        lines: [
          {
            jp: 'この町は古くからの焼き物の伝統で知られている。',
            romaji: 'Kono machi wa furuku kara no yakimono no dentō de shirarete iru.',
            meaning: {
              en: 'This town is known for its long-standing pottery tradition.',
              vi: 'Thị trấn này nổi tiếng với truyền thống gốm sứ lâu đời.'
            }
          },
          {
            jp: '職人たちは親から技法を受け継ぎ、独特の味わいを守ってきた。',
            romaji:
              'Shokunin-tachi wa oya kara gihō o uketsugi, dokutoku no ajiwai o mamotte kita.',
            meaning: {
              en: 'The artisans inherited techniques from their parents and have preserved a distinctive character.',
              vi: 'Các nghệ nhân kế thừa kỹ thuật từ cha mẹ và gìn giữ nét đặc trưng riêng.'
            }
          },
          {
            jp: 'その器には、この地域ならではの温かみがある。',
            romaji: 'Sono utsuwa ni wa, kono chiiki nara dewa no atatakami ga aru.',
            meaning: {
              en: 'Those vessels have a warmth unique to this region.',
              vi: 'Những món đồ ấy có nét ấm áp mà chỉ vùng này mới có.'
            }
          },
          {
            jp: '名産だけあって、全国から客が訪れる。',
            romaji: 'Meisan dake atte, zenkoku kara kyaku ga otozureru.',
            meaning: {
              en: 'Befitting a famous specialty, customers visit from all over the country.',
              vi: 'Đúng là đặc sản, khách từ khắp cả nước tìm đến.'
            }
          },
          {
            jp: 'この味は、長年のこだわりをおいて生まれない。',
            romaji: 'Kono aji wa, naganen no kodawari o oite umarenai.',
            meaning: {
              en: 'This flavor could not be born without years of dedication.',
              vi: 'Hương vị này không thể sinh ra nếu thiếu tâm huyết bao năm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What is the town known for?', vi: 'Thị trấn nổi tiếng vì điều gì?' },
            choices: [
              { id: 'a', label: { en: 'Its pottery tradition', vi: 'Truyền thống gốm sứ' } },
              { id: 'b', label: { en: 'Its seafood', vi: 'Hải sản' } },
              { id: 'c', label: { en: 'Its festivals', vi: 'Các lễ hội' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Where does the warmth of the vessels come from?',
              vi: 'Nét ấm áp của các món đồ đến từ đâu?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It is unique to this region', vi: 'Đó là nét chỉ vùng này có' }
              },
              { id: 'b', label: { en: 'Imported clay', vi: 'Đất sét nhập khẩu' } },
              { id: 'c', label: { en: 'Modern machines', vi: 'Máy móc hiện đại' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'Why do customers come from all over?',
              vi: 'Vì sao khách từ khắp nơi tìm đến?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'It is a famous specialty', vi: 'Vì đó là đặc sản nổi tiếng' }
              },
              { id: 'b', label: { en: 'It is cheap', vi: 'Vì rẻ' } },
              { id: 'c', label: { en: 'It is near a station', vi: 'Vì gần nhà ga' } }
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
      en: 'In Tears, Without Moving: 〜ながらに(して)',
      vi: 'Nghẹn ngào, ngồi yên một chỗ: 〜ながらに(して)'
    },
    focus: {
      en: 'Describe doing something while remaining in a state or place — 涙ながらに (tearfully), 居ながらにして (without leaving one\u2019s place), 生まれながらに (from birth).',
      vi: 'Diễn tả việc làm gì đó trong khi vẫn giữ nguyên một trạng thái hay vị trí — 涙ながらに (nghẹn ngào), 居ながらにして (ngồi tại chỗ), 生まれながらに (từ khi sinh ra).'
    },
    vocab: [
      { kana: 'なみだ', kanji: '涙', romaji: 'namida', meaning: { en: 'tears', vi: 'nước mắt' } },
      {
        kana: 'しょうげん',
        kanji: '証言',
        romaji: 'shōgen',
        meaning: { en: 'testimony', vi: 'lời chứng, lời khai' }
      },
      {
        kana: 'たいけん',
        kanji: '体験',
        romaji: 'taiken',
        meaning: { en: 'personal experience', vi: 'sự trải nghiệm' }
      },
      {
        kana: 'さいがい',
        kanji: '災害',
        romaji: 'saigai',
        meaning: { en: 'disaster', vi: 'thảm họa' }
      },
      {
        kana: 'ひさいしゃ',
        kanji: '被災者',
        romaji: 'hisaisha',
        meaning: { en: 'disaster victim', vi: 'nạn nhân thiên tai' }
      },
      {
        kana: 'うまれつき',
        kanji: '生まれつき',
        romaji: 'umaretsuki',
        meaning: { en: 'by nature, innately', vi: 'bẩm sinh' }
      },
      {
        kana: 'えいぞう',
        kanji: '映像',
        romaji: 'eizō',
        meaning: { en: 'video, footage', vi: 'hình ảnh, video' }
      },
      {
        kana: 'のうり',
        kanji: '脳裏',
        romaji: 'nōri',
        meaning: { en: 'one\u2019s mind, memory', vi: 'tâm trí' }
      },
      {
        kana: 'やきつく',
        kanji: '焼き付く',
        romaji: 'yakitsuku',
        meaning: { en: 'to be seared (into memory)', vi: 'khắc sâu' }
      },
      {
        kana: 'つたえる',
        kanji: '伝える',
        romaji: 'tsutaeru',
        meaning: { en: 'to convey, pass on', vi: 'truyền đạt' }
      },
      {
        kana: 'こらえる',
        romaji: 'koraeru',
        meaning: { en: 'to hold back, endure', vi: 'kìm nén, chịu đựng' }
      },
      {
        kana: 'へいわ',
        kanji: '平和',
        romaji: 'heiwa',
        meaning: { en: 'peace', vi: 'hòa bình' }
      }
    ],
    grammar: [
      {
        pattern: 'V／N ながらに(して)',
        title: { en: 'While remaining in a state', vi: 'Trong khi vẫn giữ nguyên trạng thái' },
        explanation: {
          en: 'ながらに(して) describes an action done while staying in one state or place. Common set forms: 涙ながらに (tearfully), 居ながらにして (without leaving home), 生まれながらに (from birth).',
          vi: 'ながらに(して) diễn tả hành động thực hiện khi vẫn ở yên một trạng thái hay vị trí. Các cụm cố định hay gặp: 涙ながらに (nghẹn ngào), 居ながらにして (ngồi tại chỗ), 生まれながらに (từ khi sinh).'
        },
        examples: [
          {
            jp: '彼女は涙ながらに当時の体験を語った。',
            romaji: 'Kanojo wa namida nagara ni tōji no taiken o katatta.',
            meaning: {
              en: 'She tearfully recounted her experience at the time.',
              vi: 'Cô ấy nghẹn ngào kể lại trải nghiệm khi đó.'
            }
          },
          {
            jp: '今は家に居ながらにして世界中の品が買える。',
            romaji: 'Ima wa ie ni inagara ni shite sekaijū no shina ga kaeru.',
            meaning: {
              en: 'Now you can buy goods from around the world without leaving home.',
              vi: 'Giờ đây có thể ngồi ở nhà mà mua được hàng hóa khắp thế giới.'
            }
          }
        ]
      },
      {
        pattern: 'N ながらの N',
        title: { en: 'Unchanged / inborn (modifier)', vi: 'Như xưa / bẩm sinh (bổ nghĩa)' },
        explanation: {
          en: 'ながらの before a noun means a state has continued unchanged: 昔ながらの (old-fashioned), 生まれながらの (inborn).',
          vi: 'ながらの trước danh từ chỉ một trạng thái vẫn giữ nguyên: 昔ながらの (theo lối xưa), 生まれながらの (trời phú).'
        },
        examples: [
          {
            jp: 'この村は昔ながらの暮らしを守っている。',
            romaji: 'Kono mura wa mukashi nagara no kurashi o mamotte iru.',
            meaning: {
              en: 'This village preserves a way of life unchanged from old times.',
              vi: 'Ngôi làng này gìn giữ lối sống y như xưa.'
            }
          },
          {
            jp: '彼は生まれながらの才能に恵まれている。',
            romaji: 'Kare wa umare nagara no sainō ni megumarete iru.',
            meaning: {
              en: 'He is blessed with inborn talent.',
              vi: 'Anh ấy được trời phú tài năng bẩm sinh.'
            }
          }
        ]
      },
      {
        pattern: 'V つつ(も)',
        title: { en: 'While / even though (literary)', vi: 'Trong khi / dù rằng (văn viết)' },
        explanation: {
          en: 'つつ(も) is a literary "while," and with も it adds contrast, like "even though one is aware."',
          vi: 'つつ(も) là "trong khi" văn viết; thêm も mang sắc thái tương phản, như "dù biết rằng".'
        },
        examples: [
          {
            jp: '危険を知りつつも、彼は現場へ向かった。',
            romaji: 'Kiken o shiri tsutsu mo, kare wa genba e mukatta.',
            meaning: {
              en: 'Even while aware of the danger, he headed to the site.',
              vi: 'Dù biết nguy hiểm, anh vẫn tiến về hiện trường.'
            }
          },
          {
            jp: '涙をこらえつつ、被災者は証言を続けた。',
            romaji: 'Namida o koraetsutsu, hisaisha wa shōgen o tsuzuketa.',
            meaning: {
              en: 'Holding back tears, the victim continued the testimony.',
              vi: 'Cố nén nước mắt, nạn nhân tiếp tục lời chứng.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Passing on a testimony', vi: 'Truyền lại một lời chứng' },
        lines: [
          {
            jp: '戦争を体験した女性が、テレビで涙ながらに語った。',
            romaji: 'Sensō o taiken shita josei ga, terebi de namida nagara ni katatta.',
            meaning: {
              en: 'A woman who experienced the war spoke tearfully on television.',
              vi: 'Một phụ nữ từng trải qua chiến tranh đã nghẹn ngào kể trên truyền hình.'
            }
          },
          {
            jp: 'その光景は今も私の脳裏に焼き付いている。',
            romaji: 'Sono kōkei wa ima mo watashi no nōri ni yakitsuite iru.',
            meaning: {
              en: 'That scene is still seared into my mind.',
              vi: 'Cảnh tượng ấy đến nay vẫn khắc sâu trong tâm trí tôi.'
            }
          },
          {
            jp: '今は家に居ながらにして、その証言を映像で見られる。',
            romaji: 'Ima wa ie ni inagara ni shite, sono shōgen o eizō de mirareru.',
            meaning: {
              en: 'Now we can watch that testimony on video without leaving home.',
              vi: 'Nay ta có thể ngồi ở nhà mà xem lời chứng đó qua video.'
            }
          },
          {
            jp: '平和の尊さを知りつつも、私たちは忘れがちだ。',
            romaji: 'Heiwa no tōtosa o shiritsutsu mo, watashitachi wa wasuregachi da.',
            meaning: {
              en: 'Even while knowing the value of peace, we tend to forget it.',
              vi: 'Dù biết giá trị của hòa bình, chúng ta vẫn hay quên.'
            }
          },
          {
            jp: '昔ながらのやり方で、体験を若い世代に伝えている。',
            romaji: 'Mukashi nagara no yarikata de, taiken o wakai sedai ni tsutaete iru.',
            meaning: {
              en: 'Using old-fashioned methods, they convey the experience to the younger generation.',
              vi: 'Bằng cách thức xưa cũ, họ truyền lại trải nghiệm cho thế hệ trẻ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the woman speak on TV?',
              vi: 'Người phụ nữ đã kể trên TV như thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Tearfully', vi: 'Nghẹn ngào' } },
              { id: 'b', label: { en: 'Angrily', vi: 'Giận dữ' } },
              { id: 'c', label: { en: 'Calmly and coldly', vi: 'Bình thản, lạnh lùng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What can we now do from home?',
              vi: 'Giờ ta có thể làm gì khi ở nhà?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Watch the testimony on video', vi: 'Xem lời chứng qua video' }
              },
              { id: 'b', label: { en: 'Meet her in person', vi: 'Gặp trực tiếp bà ấy' } },
              { id: 'c', label: { en: 'Nothing at all', vi: 'Chẳng làm được gì' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What do we tend to do despite knowing peace\u2019s value?',
              vi: 'Dù biết giá trị của hòa bình, ta hay làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Forget it', vi: 'Quên mất nó' } },
              { id: 'b', label: { en: 'Celebrate it', vi: 'Kỷ niệm nó' } },
              { id: 'c', label: { en: 'Study it deeply', vi: 'Nghiên cứu kỹ' } }
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
      en: 'The Very Best In: 〜きっての',
      vi: 'Số một trong: 〜きっての'
    },
    focus: {
      en: 'Single out the leading or foremost person or thing within a group, region, or field with 〜きっての.',
      vi: 'Nêu bật người hay vật đứng đầu, cừ nhất trong một nhóm, vùng hay lĩnh vực với 〜きっての.'
    },
    vocab: [
      {
        kana: 'ぎょうかい',
        kanji: '業界',
        romaji: 'gyōkai',
        meaning: { en: 'industry, the trade', vi: 'ngành, giới' }
      },
      {
        kana: 'けんい',
        kanji: '権威',
        romaji: 'ken\u2019i',
        meaning: { en: 'authority, expert', vi: 'chuyên gia uy tín, quyền uy' }
      },
      {
        kana: 'うでまえ',
        kanji: '腕前',
        romaji: 'udemae',
        meaning: { en: 'skill, ability', vi: 'tay nghề' }
      },
      {
        kana: 'めいい',
        kanji: '名医',
        romaji: 'meii',
        meaning: { en: 'renowned doctor', vi: 'danh y' }
      },
      {
        kana: 'ろんきゃく',
        kanji: '論客',
        romaji: 'ronkyaku',
        meaning: { en: 'skilled debater', vi: 'nhà tranh luận sắc sảo' }
      },
      {
        kana: 'じつりょく',
        kanji: '実力',
        romaji: 'jitsuryoku',
        meaning: { en: 'real ability', vi: 'thực lực' }
      },
      {
        kana: 'ひょうばん',
        kanji: '評判',
        romaji: 'hyōban',
        meaning: { en: 'reputation', vi: 'tiếng tăm, danh tiếng' }
      },
      {
        kana: 'こうしょう',
        kanji: '交渉',
        romaji: 'kōshō',
        meaning: { en: 'negotiation', vi: 'sự đàm phán' }
      },
      {
        kana: 'やりて',
        kanji: 'やり手',
        romaji: 'yarite',
        meaning: { en: 'capable person, go-getter', vi: 'người tài giỏi, lão luyện' }
      },
      {
        kana: 'ほこる',
        kanji: '誇る',
        romaji: 'hokoru',
        meaning: { en: 'to boast, take pride in', vi: 'tự hào, có niềm tự hào' }
      },
      {
        kana: 'ずばぬける',
        kanji: 'ずば抜ける',
        romaji: 'zubanukeru',
        meaning: { en: 'to be outstanding', vi: 'vượt trội' }
      },
      {
        kana: 'とうしゃ',
        kanji: '当社',
        romaji: 'tōsha',
        meaning: { en: 'our company', vi: 'công ty chúng tôi' }
      }
    ],
    grammar: [
      {
        pattern: 'N きっての N',
        title: { en: 'The foremost ... in', vi: 'Số một trong' },
        explanation: {
          en: 'きって comes between a group/place noun and a person/thing to mark it as the very best within that group.',
          vi: 'きって đặt giữa danh từ chỉ nhóm/nơi chốn và người/vật để đánh dấu đó là số một trong nhóm đó.'
        },
        examples: [
          {
            jp: '彼は業界きっての論客として知られる。',
            romaji: 'Kare wa gyōkai kitte no ronkyaku to shite shirareru.',
            meaning: {
              en: 'He is known as the foremost debater in the industry.',
              vi: 'Anh được biết đến là nhà tranh luận số một trong ngành.'
            }
          },
          {
            jp: 'この村きっての名医に診てもらった。',
            romaji: 'Kono mura kitte no meii ni mite moratta.',
            meaning: {
              en: 'I was examined by the best doctor in this village.',
              vi: 'Tôi được vị danh y giỏi nhất làng khám.'
            }
          }
        ]
      },
      {
        pattern: 'N にかけては',
        title: { en: 'When it comes to ...', vi: 'Về (lĩnh vực) ...' },
        explanation: {
          en: 'にかけては picks out one area in which someone excels above all others.',
          vi: 'にかけては chọn ra một lĩnh vực mà ai đó vượt trội hơn tất cả.'
        },
        examples: [
          {
            jp: '交渉にかけては、彼の右に出る者はいない。',
            romaji: 'Kōshō ni kakete wa, kare no migi ni deru mono wa inai.',
            meaning: {
              en: 'When it comes to negotiation, no one surpasses him.',
              vi: 'Về đàm phán, không ai qua mặt được anh ta.'
            }
          },
          {
            jp: '料理の腕前にかけては誰にも負けない。',
            romaji: 'Ryōri no udemae ni kakete wa dare ni mo makenai.',
            meaning: {
              en: 'When it comes to cooking skill, I lose to no one.',
              vi: 'Về tay nghề nấu nướng, tôi không thua kém ai.'
            }
          }
        ]
      },
      {
        pattern: '〜と言っても過言ではない',
        title: { en: 'It is no exaggeration to say', vi: 'Nói ... cũng không ngoa' },
        explanation: {
          en: 'Use this to make a strong claim while signaling it is justified, not overstated.',
          vi: 'Dùng để đưa ra khẳng định mạnh nhưng cho thấy điều đó hợp lý, không phải nói quá.'
        },
        examples: [
          {
            jp: '彼女は当代一の実力者と言っても過言ではない。',
            romaji: 'Kanojo wa tōdai ichi no jitsuryokusha to itte mo kagon de wa nai.',
            meaning: {
              en: 'It is no exaggeration to call her the most capable person of the era.',
              vi: 'Nói cô ấy là người thực lực nhất thời nay cũng không ngoa.'
            }
          },
          {
            jp: 'この実力なら、業界一と言っても過言ではない。',
            romaji: 'Kono jitsuryoku nara, gyōkai ichi to itte mo kagon de wa nai.',
            meaning: {
              en: 'With this ability, it is no exaggeration to call him the best in the industry.',
              vi: 'Với thực lực này, gọi anh là số một ngành cũng không ngoa.'
            }
          }
        ]
      },
      {
        pattern: '〜だけのことはある',
        title: { en: 'Lives up to / worthy of', vi: 'Xứng đáng với, đúng là' },
        explanation: {
          en: 'だけのことはある praises a result that lives up to someone\u2019s reputation, status, or effort.',
          vi: 'だけのことはある khen một kết quả xứng với danh tiếng, địa vị hay nỗ lực của ai đó.'
        },
        examples: [
          {
            jp: '評判の名医だけのことはあり、説明が丁寧だ。',
            romaji: 'Hyōban no meii dake no koto wa ari, setsumei ga teinei da.',
            meaning: {
              en: 'He lives up to his reputation as a renowned doctor; his explanations are careful.',
              vi: 'Đúng là danh y có tiếng, giải thích rất tận tình.'
            }
          },
          {
            jp: '業界きってのやり手だけのことはある成果だ。',
            romaji: 'Gyōkai kitte no yarite dake no koto wa aru seika da.',
            meaning: {
              en: 'These are results worthy of the most capable person in the industry.',
              vi: 'Thành quả xứng đáng với người tài giỏi nhất ngành.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'The company\u2019s top negotiator', vi: 'Tay đàm phán số một công ty' },
        lines: [
          {
            jp: '田中さんは、この業界きっての交渉のやり手だ。',
            romaji: 'Tanaka-san wa, kono gyōkai kitte no kōshō no yarite da.',
            meaning: {
              en: 'Mr. Tanaka is the most skilled negotiator in this industry.',
              vi: 'Anh Tanaka là tay đàm phán cừ nhất trong ngành này.'
            }
          },
          {
            jp: '交渉にかけては、彼の右に出る者はいないと言われる。',
            romaji: 'Kōshō ni kakete wa, kare no migi ni deru mono wa inai to iwareru.',
            meaning: {
              en: 'It is said that no one surpasses him in negotiation.',
              vi: 'Người ta nói về đàm phán không ai qua mặt được anh.'
            }
          },
          {
            jp: '若い頃から実力がずば抜けていた。',
            romaji: 'Wakai koro kara jitsuryoku ga zubanukete ita.',
            meaning: {
              en: 'His ability was outstanding from a young age.',
              vi: 'Thực lực anh đã vượt trội từ khi còn trẻ.'
            }
          },
          {
            jp: '高い評判を誇るのも、長年の努力の結果だ。',
            romaji: 'Takai hyōban o hokoru no mo, naganen no doryoku no kekka da.',
            meaning: {
              en: 'Boasting such a high reputation is the result of years of effort.',
              vi: 'Việc có danh tiếng cao cũng là kết quả của nỗ lực bao năm.'
            }
          },
          {
            jp: '彼を当社一の実力者と言っても過言ではない。',
            romaji: 'Kare o tōsha ichi no jitsuryokusha to itte mo kagon de wa nai.',
            meaning: {
              en: 'It is no exaggeration to call him the most capable person in our company.',
              vi: 'Nói anh là người thực lực nhất công ty cũng không ngoa.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How is Mr. Tanaka described?',
              vi: 'Anh Tanaka được miêu tả thế nào?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The best negotiator in the industry',
                  vi: 'Tay đàm phán cừ nhất ngành'
                }
              },
              { id: 'b', label: { en: 'A new employee', vi: 'Nhân viên mới' } },
              { id: 'c', label: { en: 'A famous doctor', vi: 'Một danh y' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'When did his outstanding ability show?',
              vi: 'Thực lực vượt trội của anh thể hiện từ khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'From a young age', vi: 'Từ khi còn trẻ' } },
              { id: 'b', label: { en: 'Only recently', vi: 'Chỉ mới gần đây' } },
              { id: 'c', label: { en: 'After retirement', vi: 'Sau khi nghỉ hưu' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What is his reputation the result of?',
              vi: 'Danh tiếng của anh là kết quả của điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Years of effort', vi: 'Nỗ lực bao năm' } },
              { id: 'b', label: { en: 'Pure luck', vi: 'Hoàn toàn may mắn' } },
              { id: 'c', label: { en: 'Family connections', vi: 'Quan hệ gia đình' } }
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
      en: 'Once You Reach That Stage: 〜ともなると / 〜ともなれば',
      vi: 'Khi đã đến mức: 〜ともなると / 〜ともなれば'
    },
    focus: {
      en: 'Say that once something reaches a high level or stage (a season, status, or age), a special situation naturally follows with 〜ともなると / 〜ともなれば.',
      vi: 'Diễn đạt rằng khi điều gì đó đạt đến mức hay giai đoạn cao (mùa, địa vị, độ tuổi) thì kéo theo một tình huống đặc biệt với 〜ともなると / 〜ともなれば.'
    },
    vocab: [
      {
        kana: 'かんぶ',
        kanji: '幹部',
        romaji: 'kanbu',
        meaning: { en: 'executive, senior staff', vi: 'cán bộ cấp cao' }
      },
      {
        kana: 'せきにん',
        kanji: '責任',
        romaji: 'sekinin',
        meaning: { en: 'responsibility', vi: 'trách nhiệm' }
      },
      {
        kana: 'はんぱ',
        kanji: '半端',
        romaji: 'hanpa',
        meaning: { en: 'halfway, incomplete (na-adj)', vi: 'nửa vời, dở dang' }
      },
      {
        kana: 'こうようき',
        kanji: '紅葉期',
        romaji: 'kōyōki',
        meaning: { en: 'autumn-foliage season', vi: 'mùa lá đỏ' }
      },
      {
        kana: 'かんこうち',
        kanji: '観光地',
        romaji: 'kankōchi',
        meaning: { en: 'tourist spot', vi: 'điểm du lịch' }
      },
      {
        kana: 'こんざつ',
        kanji: '混雑',
        romaji: 'konzatsu',
        meaning: { en: 'congestion, crowding', vi: 'sự đông đúc' }
      },
      {
        kana: 'ベテラン',
        romaji: 'beteran',
        meaning: { en: 'veteran, old hand', vi: 'người kỳ cựu' }
      },
      {
        kana: 'かくご',
        kanji: '覚悟',
        romaji: 'kakugo',
        meaning: { en: 'resolve, preparedness', vi: 'sự sẵn sàng tâm lý' }
      },
      {
        kana: 'みぶん',
        kanji: '身分',
        romaji: 'mibun',
        meaning: { en: 'social status', vi: 'thân phận, địa vị' }
      },
      {
        kana: 'れんきゅう',
        kanji: '連休',
        romaji: 'renkyū',
        meaning: { en: 'consecutive holidays', vi: 'kỳ nghỉ dài' }
      },
      {
        kana: 'おしよせる',
        kanji: '押し寄せる',
        romaji: 'oshiyoseru',
        meaning: { en: 'to surge, throng in', vi: 'ùa đến, đổ về' }
      },
      {
        kana: 'うまる',
        kanji: '埋まる',
        romaji: 'umaru',
        meaning: { en: 'to be filled up', vi: 'bị lấp đầy, chật kín' }
      }
    ],
    grammar: [
      {
        pattern: 'N ともなると / ともなれば',
        title: { en: 'Once it reaches the stage of', vi: 'Khi đã đến mức/giai đoạn' },
        explanation: {
          en: 'Attach ともなると or ともなれば to a noun denoting a high level, season, or position; a natural, often dramatic consequence follows.',
          vi: 'Gắn ともなると hoặc ともなれば vào danh từ chỉ mức độ cao, mùa hay vị trí; theo sau là một hệ quả tự nhiên, thường khá rõ rệt.'
        },
        examples: [
          {
            jp: '大企業の幹部ともなると、責任も半端ではない。',
            romaji: 'Daikigyō no kanbu to mo naru to, sekinin mo hanpa de wa nai.',
            meaning: {
              en: 'Once you become an executive at a large company, the responsibility is no small matter.',
              vi: 'Khi đã là cán bộ cấp cao của tập đoàn lớn thì trách nhiệm cũng không hề nhỏ.'
            }
          },
          {
            jp: '紅葉期の週末ともなれば、観光地はひどく混雑する。',
            romaji: 'Kōyōki no shūmatsu to mo nareba, kankōchi wa hidoku konzatsu suru.',
            meaning: {
              en: 'Come a weekend in the foliage season, tourist spots get terribly crowded.',
              vi: 'Hễ đến cuối tuần mùa lá đỏ là các điểm du lịch đông nghẹt.'
            }
          }
        ]
      },
      {
        pattern: '〜だけに',
        title: { en: 'Precisely because / all the more', vi: 'Chính vì / càng vì thế' },
        explanation: {
          en: 'だけに gives a cause and a fitting, often heightened, result that follows naturally from it.',
          vi: 'だけに nêu một nguyên nhân và một kết quả phù hợp, thường được nhấn mạnh, kéo theo một cách tự nhiên.'
        },
        examples: [
          {
            jp: 'ベテランだけに、対応が落ち着いている。',
            romaji: 'Beteran dake ni, taiō ga ochitsuite iru.',
            meaning: {
              en: 'Being a veteran, his response is composed.',
              vi: 'Đúng là người kỳ cựu nên cách xử lý rất điềm tĩnh.'
            }
          },
          {
            jp: '責任ある身分だけに、発言には注意が必要だ。',
            romaji: 'Sekinin aru mibun dake ni, hatsugen ni wa chūi ga hitsuyō da.',
            meaning: {
              en: 'Precisely because of a responsible position, one must be careful with words.',
              vi: 'Chính vì là vị trí có trách nhiệm nên phải cẩn trọng lời nói.'
            }
          }
        ]
      },
      {
        pattern: '〜に決まっている',
        title: { en: 'Surely / bound to be', vi: 'Chắc chắn là' },
        explanation: {
          en: 'に決まっている expresses the speaker\u2019s firm conviction that something is inevitable.',
          vi: 'に決まっている thể hiện sự tin chắc của người nói rằng điều gì đó là tất yếu.'
        },
        examples: [
          {
            jp: '連休ともなれば、道路は渋滞するに決まっている。',
            romaji: 'Renkyū to mo nareba, dōro wa jūtai suru ni kimatte iru.',
            meaning: {
              en: 'Come a long holiday, the roads are sure to be jammed.',
              vi: 'Hễ vào kỳ nghỉ dài thì đường chắc chắn kẹt cứng.'
            }
          },
          {
            jp: 'あれだけ働けば、疲れるに決まっている。',
            romaji: 'Are dake hatarakeba, tsukareru ni kimatte iru.',
            meaning: {
              en: 'Working that much, of course you will be tired.',
              vi: 'Làm việc nhiều thế thì mệt là cái chắc.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Autumn at the tourist spot', vi: 'Mùa thu ở điểm du lịch' },
        lines: [
          {
            jp: '秋の観光地は、紅葉期ともなると人で埋まる。',
            romaji: 'Aki no kankōchi wa, kōyōki to mo naru to hito de umaru.',
            meaning: {
              en: 'Autumn tourist spots fill with people once the foliage season comes.',
              vi: 'Điểm du lịch mùa thu, hễ vào mùa lá đỏ là chật kín người.'
            }
          },
          {
            jp: '週末ともなれば、朝から車が押し寄せる。',
            romaji: 'Shūmatsu to mo nareba, asa kara kuruma ga oshiyoseru.',
            meaning: {
              en: 'Come the weekend, cars throng in from morning.',
              vi: 'Cứ đến cuối tuần là xe cộ đổ về từ sáng.'
            }
          },
          {
            jp: '人気の場所だけに、駐車場はすぐにいっぱいになる。',
            romaji: 'Ninki no basho dake ni, chūshajō wa sugu ni ippai ni naru.',
            meaning: {
              en: 'Being a popular place, the parking lot fills up immediately.',
              vi: 'Đúng là chỗ nổi tiếng nên bãi đỗ xe nhanh chóng kín chỗ.'
            }
          },
          {
            jp: 'この時期に来れば、混雑するに決まっている。',
            romaji: 'Kono jiki ni kureba, konzatsu suru ni kimatte iru.',
            meaning: {
              en: 'If you come at this time, it is bound to be crowded.',
              vi: 'Đến vào dịp này thì chắc chắn sẽ đông.'
            }
          },
          {
            jp: 'それでも、その美しさを見る覚悟で多くの人が訪れる。',
            romaji: 'Sore demo, sono utsukushisa o miru kakugo de ōku no hito ga otozureru.',
            meaning: {
              en: 'Even so, many people come prepared to see that beauty.',
              vi: 'Dù vậy, nhiều người vẫn đến với quyết tâm ngắm vẻ đẹp ấy.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'When do the tourist spots fill with people?',
              vi: 'Khi nào điểm du lịch chật kín người?'
            },
            choices: [
              { id: 'a', label: { en: 'In the foliage season', vi: 'Vào mùa lá đỏ' } },
              { id: 'b', label: { en: 'In midwinter', vi: 'Giữa mùa đông' } },
              { id: 'c', label: { en: 'Late at night', vi: 'Đêm khuya' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why does the parking lot fill immediately?',
              vi: 'Vì sao bãi đỗ xe nhanh kín chỗ?'
            },
            choices: [
              { id: 'a', label: { en: 'It is a popular place', vi: 'Vì là chỗ nổi tiếng' } },
              { id: 'b', label: { en: 'It is very small', vi: 'Vì rất nhỏ' } },
              { id: 'c', label: { en: 'It is free', vi: 'Vì miễn phí' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What is bound to happen if you come at this time?',
              vi: 'Đến vào dịp này thì chắc chắn xảy ra điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Crowding', vi: 'Đông đúc' } },
              { id: 'b', label: { en: 'Rain', vi: 'Mưa' } },
              { id: 'c', label: { en: 'Closure', vi: 'Đóng cửa' } }
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
      en: 'If It Is For That: 〜とあれば',
      vi: 'Nếu là vì điều đó: 〜とあれば'
    },
    focus: {
      en: 'Say that if it is the case, or if it is for the sake of a compelling reason, one will do even what one normally would not, using 〜とあれば.',
      vi: 'Diễn đạt rằng nếu đúng là vậy, hay nếu vì một lý do đáng giá, người ta sẽ làm cả điều mà bình thường không làm, với 〜とあれば.'
    },
    vocab: [
      {
        kana: 'たのみ',
        kanji: '頼み',
        romaji: 'tanomi',
        meaning: { en: 'request, favor', vi: 'lời nhờ vả' }
      },
      {
        kana: 'ぎむ',
        kanji: '義務',
        romaji: 'gimu',
        meaning: { en: 'duty, obligation', vi: 'nghĩa vụ' }
      },
      {
        kana: 'しえん',
        kanji: '支援',
        romaji: 'shien',
        meaning: { en: 'support, aid', vi: 'sự hỗ trợ' }
      },
      {
        kana: 'こきょう',
        kanji: '故郷',
        romaji: 'kokyō',
        meaning: { en: 'hometown', vi: 'quê hương' }
      },
      {
        kana: 'むり',
        kanji: '無理',
        romaji: 'muri',
        meaning: { en: 'unreasonable, beyond one\u2019s means', vi: 'quá sức, miễn cưỡng' }
      },
      {
        kana: 'ひきうける',
        kanji: '引き受ける',
        romaji: 'hikiukeru',
        meaning: { en: 'to take on, accept', vi: 'nhận lãnh' }
      },
      {
        kana: 'かけつける',
        kanji: '駆けつける',
        romaji: 'kaketsukeru',
        meaning: { en: 'to rush to', vi: 'vội chạy đến' }
      },
      {
        kana: 'おしむ',
        kanji: '惜しむ',
        romaji: 'oshimu',
        meaning: { en: 'to spare, begrudge', vi: 'tiếc, ngại bỏ ra' }
      },
      {
        kana: 'しんらい',
        kanji: '信頼',
        romaji: 'shinrai',
        meaning: { en: 'trust', vi: 'sự tin tưởng' }
      },
      {
        kana: 'つくす',
        kanji: '尽くす',
        romaji: 'tsukusu',
        meaning: { en: 'to devote oneself, do all one can', vi: 'tận tâm, dốc sức' }
      },
      {
        kana: 'ひさいち',
        kanji: '被災地',
        romaji: 'hisaichi',
        meaning: { en: 'disaster-stricken area', vi: 'vùng thiên tai' }
      },
      {
        kana: 'しんゆう',
        kanji: '親友',
        romaji: 'shin\u2019yū',
        meaning: { en: 'close friend', vi: 'bạn thân' }
      }
    ],
    grammar: [
      {
        pattern: 'N／V とあれば',
        title: { en: 'If it is for / if it is the case that', vi: 'Nếu là vì / nếu đúng là' },
        explanation: {
          en: 'とあれば marks a special, compelling condition; in that case the speaker will act even against the usual, often making a sacrifice.',
          vi: 'とあれば nêu một điều kiện đặc biệt, đáng giá; trong trường hợp đó người nói sẽ hành động cả khi trái lệ thường, thường là chấp nhận hi sinh.'
        },
        examples: [
          {
            jp: '子供のためとあれば、どんな苦労も惜しまない。',
            romaji: 'Kodomo no tame to areba, donna kurō mo oshimanai.',
            meaning: {
              en: 'If it is for my child, I will not begrudge any hardship.',
              vi: 'Nếu là vì con thì dù vất vả thế nào tôi cũng không tiếc.'
            }
          },
          {
            jp: '恩師の頼みとあれば、断るわけにはいかない。',
            romaji: 'Onshi no tanomi to areba, kotowaru wake ni wa ikanai.',
            meaning: {
              en: 'If it is a request from my mentor, I cannot very well refuse.',
              vi: 'Nếu là lời nhờ của thầy thì tôi không thể từ chối.'
            }
          }
        ]
      },
      {
        pattern: 'V わけにはいかない',
        title: { en: 'Cannot (afford to) ...', vi: 'Không thể (đành phải không) ...' },
        explanation: {
          en: 'わけにはいかない expresses that, for social or moral reasons, one cannot do (or cannot avoid doing) something.',
          vi: 'わけにはいかない diễn đạt rằng vì lý do xã hội hay đạo lý, người ta không thể làm (hoặc không thể tránh làm) điều gì đó.'
        },
        examples: [
          {
            jp: '信頼に応えるためにも、ここで諦めるわけにはいかない。',
            romaji: 'Shinrai ni kotaeru tame ni mo, koko de akirameru wake ni wa ikanai.',
            meaning: {
              en: 'To live up to their trust, I cannot give up here.',
              vi: 'Để đáp lại sự tin tưởng, tôi không thể bỏ cuộc ở đây.'
            }
          },
          {
            jp: '義務である以上、放っておくわけにはいかない。',
            romaji: 'Gimu de aru ijō, hōtte oku wake ni wa ikanai.',
            meaning: {
              en: 'Since it is a duty, I cannot just leave it alone.',
              vi: 'Đã là nghĩa vụ thì không thể bỏ mặc.'
            }
          }
        ]
      },
      {
        pattern: 'N／V ためなら',
        title: { en: 'If it is for the sake of', vi: 'Nếu là vì' },
        explanation: {
          en: 'ためなら highlights a goal worth a sacrifice: for this purpose, one would even do something extreme.',
          vi: 'ためなら nhấn mạnh một mục tiêu đáng để hi sinh: vì mục đích này, người ta sẵn lòng làm cả điều cực đoan.'
        },
        examples: [
          {
            jp: '故郷のためなら、私財を投じても構わない。',
            romaji: 'Kokyō no tame nara, shizai o tōjite mo kamawanai.',
            meaning: {
              en: 'For my hometown, I do not mind even investing my own money.',
              vi: 'Vì quê hương, tôi sẵn lòng bỏ cả tài sản riêng.'
            }
          },
          {
            jp: '彼を助けるためなら、無理も承知で引き受ける。',
            romaji: 'Kare o tasukeru tame nara, muri mo shōchi de hikiukeru.',
            meaning: {
              en: 'To help him, I will take it on even knowing it is unreasonable.',
              vi: 'Để giúp anh ấy, dù biết quá sức tôi vẫn nhận.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Answering a friend\u2019s call', vi: 'Đáp lời bạn' },
        lines: [
          {
            jp: '親友からの頼みとあれば、私はすぐに駆けつける。',
            romaji: 'Shin\u2019yū kara no tanomi to areba, watashi wa sugu ni kaketsukeru.',
            meaning: {
              en: 'If it is a request from a close friend, I rush over right away.',
              vi: 'Nếu là lời nhờ của bạn thân thì tôi lập tức chạy đến.'
            }
          },
          {
            jp: '被災地の支援のためなら、休みを使うことも惜しまない。',
            romaji: 'Hisaichi no shien no tame nara, yasumi o tsukau koto mo oshimanai.',
            meaning: {
              en: 'If it is to support the disaster area, I will not begrudge even using my days off.',
              vi: 'Nếu là để hỗ trợ vùng thiên tai thì tôi không tiếc cả ngày nghỉ.'
            }
          },
          {
            jp: '一度引き受けた以上、途中でやめるわけにはいかない。',
            romaji: 'Ichido hikiuketa ijō, tochū de yameru wake ni wa ikanai.',
            meaning: {
              en: 'Once I have taken it on, I cannot quit halfway.',
              vi: 'Đã nhận thì không thể bỏ dở giữa chừng.'
            }
          },
          {
            jp: '人々の信頼に応えるため、力を尽くすつもりだ。',
            romaji: 'Hitobito no shinrai ni kotaeru tame, chikara o tsukusu tsumori da.',
            meaning: {
              en: 'I intend to do all I can to answer people\u2019s trust.',
              vi: 'Tôi định dốc hết sức để đáp lại niềm tin của mọi người.'
            }
          },
          {
            jp: '困っている人のためとあれば、どんな苦労もいとわない。',
            romaji: 'Komatte iru hito no tame to areba, donna kurō mo itowanai.',
            meaning: {
              en: 'If it is for someone in trouble, I will not mind any hardship.',
              vi: 'Nếu là vì người đang gặp khó, tôi không ngại bất cứ vất vả nào.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'When does the writer rush over right away?',
              vi: 'Khi nào người viết lập tức chạy đến?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'When a close friend asks', vi: 'Khi bạn thân nhờ' }
              },
              { id: 'b', label: { en: 'Only when paid', vi: 'Chỉ khi được trả tiền' } },
              { id: 'c', label: { en: 'Only on weekends', vi: 'Chỉ vào cuối tuần' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What will the writer not begrudge for disaster support?',
              vi: 'Để hỗ trợ thiên tai, người viết không tiếc điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Using days off', vi: 'Dùng cả ngày nghỉ' } },
              { id: 'b', label: { en: 'Money only', vi: 'Chỉ tiền bạc' } },
              { id: 'c', label: { en: 'Nothing at all', vi: 'Không gì cả' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'Once the writer takes something on, what will they not do?',
              vi: 'Khi đã nhận việc, người viết sẽ không làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Quit halfway', vi: 'Bỏ dở giữa chừng' } },
              { id: 'b', label: { en: 'Ask for help', vi: 'Nhờ giúp đỡ' } },
              { id: 'c', label: { en: 'Tell others', vi: 'Kể cho người khác' } }
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
      en: 'Befitting One\u2019s Position: 〜たる(もの)',
      vi: 'Xứng với cương vị: 〜たる(もの)'
    },
    focus: {
      en: 'State that one who holds a weighty role ought to behave accordingly, using the literary 〜たる(もの).',
      vi: 'Nêu rằng người giữ một cương vị quan trọng thì phải cư xử cho xứng, dùng cấu trúc văn viết 〜たる(もの).'
    },
    vocab: [
      {
        kana: 'しどうしゃ',
        kanji: '指導者',
        romaji: 'shidōsha',
        meaning: { en: 'leader', vi: 'người lãnh đạo' }
      },
      {
        kana: 'もはん',
        kanji: '模範',
        romaji: 'mohan',
        meaning: { en: 'model, example', vi: 'tấm gương, khuôn mẫu' }
      },
      {
        kana: 'ひんかく',
        kanji: '品格',
        romaji: 'hinkaku',
        meaning: { en: 'dignity, character', vi: 'phẩm cách' }
      },
      {
        kana: 'しめす',
        kanji: '示す',
        romaji: 'shimesu',
        meaning: { en: 'to show, demonstrate', vi: 'thể hiện, nêu ra' }
      },
      {
        kana: 'げんどう',
        kanji: '言動',
        romaji: 'gendō',
        meaning: { en: 'words and deeds', vi: 'lời nói và hành động' }
      },
      {
        kana: 'せきむ',
        kanji: '責務',
        romaji: 'sekimu',
        meaning: { en: 'duty, responsibility', vi: 'trọng trách' }
      },
      {
        kana: 'かんとく',
        kanji: '監督',
        romaji: 'kantoku',
        meaning: { en: 'manager, coach, director', vi: 'huấn luyện viên, người chỉ đạo' }
      },
      {
        kana: 'ふるまい',
        kanji: '振る舞い',
        romaji: 'furumai',
        meaning: { en: 'behavior, conduct', vi: 'cách cư xử' }
      },
      {
        kana: 'みずから',
        kanji: '自ら',
        romaji: 'mizukara',
        meaning: { en: 'oneself, personally', vi: 'tự mình' }
      },
      {
        kana: 'そんけい',
        kanji: '尊敬',
        romaji: 'sonkei',
        meaning: { en: 'respect', vi: 'sự tôn trọng' }
      },
      {
        kana: 'つらぬく',
        kanji: '貫く',
        romaji: 'tsuranuku',
        meaning: { en: 'to carry through, hold fast to', vi: 'giữ vững, kiên trì đến cùng' }
      },
      {
        kana: 'てほん',
        kanji: '手本',
        romaji: 'tehon',
        meaning: { en: 'model, example to follow', vi: 'mẫu mực, tấm gương' }
      }
    ],
    grammar: [
      {
        pattern: 'N たる(もの)',
        title: { en: 'One who is ... (ought to)', vi: 'Đã là ... (thì phải)' },
        explanation: {
          en: 'たる(もの) follows a noun naming a weighty role and introduces the conduct expected of anyone in that position. It is formal and literary.',
          vi: 'たる(もの) đi sau danh từ chỉ một cương vị quan trọng và nêu cách cư xử mà người ở vị trí đó phải có. Đây là cách nói trang trọng, văn viết.'
        },
        examples: [
          {
            jp: '指導者たる者、自ら模範を示すべきだ。',
            romaji: 'Shidōsha taru mono, mizukara mohan o shimesu beki da.',
            meaning: {
              en: 'One who is a leader ought to set an example personally.',
              vi: 'Đã là người lãnh đạo thì phải tự mình làm gương.'
            }
          },
          {
            jp: '教師たる者、言動には責任を持たねばならない。',
            romaji: 'Kyōshi taru mono, gendō ni wa sekinin o motaneba naranai.',
            meaning: {
              en: 'A teacher must take responsibility for their words and deeds.',
              vi: 'Đã là giáo viên thì phải có trách nhiệm với lời nói và hành động.'
            }
          }
        ]
      },
      {
        pattern: 'V べき(だ)',
        title: { en: 'Should / ought to', vi: 'Nên / phải' },
        explanation: {
          en: 'べき(だ) states what is proper or expected based on common sense or duty.',
          vi: 'べき(だ) nêu điều đúng đắn hay được mong đợi dựa trên lẽ thường hoặc bổn phận.'
        },
        examples: [
          {
            jp: '監督として、選手の手本となるべきだ。',
            romaji: 'Kantoku to shite, senshu no tehon to naru beki da.',
            meaning: {
              en: 'As a manager, one should be a model for the players.',
              vi: 'Là huấn luyện viên thì nên làm gương cho các cầu thủ.'
            }
          },
          {
            jp: '彼は品格を保つべき立場の人だ。',
            romaji: 'Kare wa hinkaku o tamotsu beki tachiba no hito da.',
            meaning: {
              en: 'He is in a position where he should maintain dignity.',
              vi: 'Anh ở vị trí cần giữ gìn phẩm cách.'
            }
          }
        ]
      },
      {
        pattern: 'V ねばならない',
        title: { en: 'Must (literary)', vi: 'Phải (văn viết)' },
        explanation: {
          en: 'ねばならない is the formal, literary equivalent of なければならない (must do).',
          vi: 'ねばならない là dạng trang trọng, văn viết của なければならない (phải làm).'
        },
        examples: [
          {
            jp: '責務を果たすため、信念を貫かねばならない。',
            romaji: 'Sekimu o hatasu tame, shinnen o tsuranukaneba naranai.',
            meaning: {
              en: 'To fulfill one\u2019s duty, one must hold fast to one\u2019s convictions.',
              vi: 'Để hoàn thành trọng trách, phải giữ vững niềm tin.'
            }
          },
          {
            jp: '尊敬される態度を取らねばならない。',
            romaji: 'Sonkei sareru taido o toraneba naranai.',
            meaning: {
              en: 'One must adopt an attitude that earns respect.',
              vi: 'Phải có thái độ khiến người khác tôn trọng.'
            }
          }
        ]
      },
      {
        pattern: 'N にふさわしい',
        title: { en: 'Befitting / suitable for', vi: 'Xứng với, phù hợp với' },
        explanation: {
          en: 'にふさわしい marks something as appropriate to, or worthy of, a particular role or status.',
          vi: 'にふさわしい đánh dấu điều gì đó là phù hợp hay xứng đáng với một vai trò hay địa vị nhất định.'
        },
        examples: [
          {
            jp: '指導者にふさわしい品格が求められる。',
            romaji: 'Shidōsha ni fusawashii hinkaku ga motomerareru.',
            meaning: {
              en: 'The dignity befitting a leader is demanded.',
              vi: 'Người ta đòi hỏi phẩm cách xứng với người lãnh đạo.'
            }
          },
          {
            jp: 'その振る舞いは代表にふさわしくない。',
            romaji: 'Sono furumai wa daihyō ni fusawashiku nai.',
            meaning: {
              en: 'That behavior is unbecoming of a representative.',
              vi: 'Cách cư xử đó không xứng với một người đại diện.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'What makes a true leader', vi: 'Điều làm nên người lãnh đạo thực thụ' },
        lines: [
          {
            jp: '指導者たる者は、まず自ら手本を示さねばならない。',
            romaji: 'Shidōsha taru mono wa, mazu mizukara tehon o shimesaneba naranai.',
            meaning: {
              en: 'One who is a leader must first set an example personally.',
              vi: 'Đã là người lãnh đạo thì trước hết phải tự mình làm gương.'
            }
          },
          {
            jp: '監督の言動は、選手たちの態度に大きく影響する。',
            romaji: 'Kantoku no gendō wa, senshu-tachi no taido ni ōkiku eikyō suru.',
            meaning: {
              en: 'A manager\u2019s words and deeds greatly affect the players\u2019 attitudes.',
              vi: 'Lời nói và hành động của HLV ảnh hưởng lớn đến thái độ cầu thủ.'
            }
          },
          {
            jp: 'だからこそ、その立場にふさわしい品格が求められる。',
            romaji: 'Dakara koso, sono tachiba ni fusawashii hinkaku ga motomerareru.',
            meaning: {
              en: 'That is exactly why dignity befitting the position is demanded.',
              vi: 'Chính vì thế mới đòi hỏi phẩm cách xứng với cương vị.'
            }
          },
          {
            jp: '苦しい時でも信念を貫く姿が、尊敬を集める。',
            romaji: 'Kurushii toki demo shinnen o tsuranuku sugata ga, sonkei o atsumeru.',
            meaning: {
              en: 'The sight of holding to one\u2019s convictions even in hard times earns respect.',
              vi: 'Hình ảnh giữ vững niềm tin cả khi khó khăn sẽ thu phục sự tôn trọng.'
            }
          },
          {
            jp: '真の指導者は、結果よりも振る舞いで模範となるべきだ。',
            romaji: 'Shin no shidōsha wa, kekka yori mo furumai de mohan to naru beki da.',
            meaning: {
              en: 'A true leader should be a model through conduct rather than results.',
              vi: 'Người lãnh đạo thực thụ nên làm gương bằng cách cư xử hơn là kết quả.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What must a leader do first?',
              vi: 'Người lãnh đạo trước hết phải làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Set an example personally', vi: 'Tự mình làm gương' } },
              { id: 'b', label: { en: 'Demand results', vi: 'Đòi hỏi kết quả' } },
              { id: 'c', label: { en: 'Stay silent', vi: 'Giữ im lặng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What earns respect even in hard times?',
              vi: 'Điều gì thu phục sự tôn trọng ngay cả khi khó khăn?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Holding to one\u2019s convictions', vi: 'Giữ vững niềm tin' }
              },
              { id: 'b', label: { en: 'Giving up', vi: 'Bỏ cuộc' } },
              { id: 'c', label: { en: 'Blaming others', vi: 'Đổ lỗi cho người khác' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'How should a true leader be a model?',
              vi: 'Người lãnh đạo thực thụ nên làm gương bằng cách nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Through conduct', vi: 'Bằng cách cư xử' } },
              { id: 'b', label: { en: 'Through wealth', vi: 'Bằng sự giàu có' } },
              { id: 'c', label: { en: 'Through speeches only', vi: 'Chỉ bằng diễn thuyết' } }
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
      en: 'Only Thanks To: 〜あっての',
      vi: 'Có được là nhờ: 〜あっての'
    },
    focus: {
      en: 'Say that one thing exists or is possible only because another exists — A あっての B means without A there is no B.',
      vi: 'Diễn đạt rằng một điều chỉ tồn tại hay thành lập được nhờ một điều khác — A あっての B nghĩa là không có A thì không có B.'
    },
    vocab: [
      {
        kana: 'きゃく',
        kanji: '客',
        romaji: 'kyaku',
        meaning: { en: 'customer, guest', vi: 'khách hàng' }
      },
      {
        kana: 'しょうばい',
        kanji: '商売',
        romaji: 'shōbai',
        meaning: { en: 'business, trade', vi: 'việc buôn bán' }
      },
      {
        kana: 'けんこう',
        kanji: '健康',
        romaji: 'kenkō',
        meaning: { en: 'health', vi: 'sức khỏe' }
      },
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'nỗ lực' }
      },
      {
        kana: 'ささえ',
        kanji: '支え',
        romaji: 'sasae',
        meaning: { en: 'support, prop', vi: 'chỗ dựa' }
      },
      {
        kana: 'なりたつ',
        kanji: '成り立つ',
        romaji: 'naritatsu',
        meaning: { en: 'to hold together, be viable', vi: 'hình thành, đứng vững' }
      },
      {
        kana: 'しんよう',
        kanji: '信用',
        romaji: 'shin\u2019yō',
        meaning: { en: 'credit, trust', vi: 'sự tín nhiệm' }
      },
      {
        kana: 'へいわ',
        kanji: '平和',
        romaji: 'heiwa',
        meaning: { en: 'peace', vi: 'hòa bình' }
      },
      {
        kana: 'かんしゃ',
        kanji: '感謝',
        romaji: 'kansha',
        meaning: { en: 'gratitude', vi: 'lòng biết ơn' }
      },
      {
        kana: 'きばん',
        kanji: '基盤',
        romaji: 'kiban',
        meaning: { en: 'foundation, base', vi: 'nền tảng' }
      },
      {
        kana: 'きずく',
        kanji: '築く',
        romaji: 'kizuku',
        meaning: { en: 'to build, establish', vi: 'xây dựng, gây dựng' }
      },
      {
        kana: 'そふ',
        kanji: '祖父',
        romaji: 'sofu',
        meaning: { en: 'grandfather', vi: 'ông nội/ngoại' }
      }
    ],
    grammar: [
      {
        pattern: 'N あっての N',
        title: { en: 'Owes its existence to', vi: 'Có được là nhờ' },
        explanation: {
          en: 'A あっての B states that B exists or is possible only because A exists; remove A and B falls apart.',
          vi: 'A あっての B nói rằng B tồn tại hay thành lập được chỉ vì có A; bỏ A đi thì B sụp đổ.'
        },
        examples: [
          {
            jp: '客あっての商売だから、感謝を忘れてはいけない。',
            romaji: 'Kyaku atte no shōbai da kara, kansha o wasurete wa ikenai.',
            meaning: {
              en: 'Business exists only thanks to customers, so we must not forget gratitude.',
              vi: 'Việc buôn bán có được là nhờ khách, nên không được quên lòng biết ơn.'
            }
          },
          {
            jp: '健康あっての仕事だと、病気をして気づいた。',
            romaji: 'Kenkō atte no shigoto da to, byōki o shite kizuita.',
            meaning: {
              en: 'Work is only possible thanks to health — I realized that when I fell ill.',
              vi: 'Có sức khỏe mới có công việc, tôi nhận ra điều đó khi đổ bệnh.'
            }
          }
        ]
      },
      {
        pattern: 'N なくして(は)',
        title: { en: 'Without ..., not', vi: 'Không có ... thì không' },
        explanation: {
          en: 'なくして(は) introduces an indispensable condition: without it, the result cannot happen.',
          vi: 'なくして(は) nêu một điều kiện không thể thiếu: không có nó thì kết quả không thể xảy ra.'
        },
        examples: [
          {
            jp: '家族の支えなくしては、今の私はない。',
            romaji: 'Kazoku no sasae nakushite wa, ima no watashi wa nai.',
            meaning: {
              en: 'Without my family\u2019s support, the present me would not exist.',
              vi: 'Không có chỗ dựa của gia đình thì không có tôi hôm nay.'
            }
          },
          {
            jp: '努力なくして成功はあり得ない。',
            romaji: 'Doryoku nakushite seikō wa arienai.',
            meaning: {
              en: 'Without effort, success is impossible.',
              vi: 'Không nỗ lực thì không thể có thành công.'
            }
          }
        ]
      },
      {
        pattern: 'N があってこそ',
        title: { en: 'Precisely because there is', vi: 'Chính nhờ có' },
        explanation: {
          en: 'があってこそ emphasizes that a good result is possible only because the named thing exists.',
          vi: 'があってこそ nhấn mạnh rằng một kết quả tốt chỉ có được chính vì có điều được nêu.'
        },
        examples: [
          {
            jp: '信用があってこそ、商売は成り立つ。',
            romaji: 'Shin\u2019yō ga atte koso, shōbai wa naritatsu.',
            meaning: {
              en: 'It is precisely because there is trust that business holds together.',
              vi: 'Chính nhờ có sự tín nhiệm mà việc buôn bán mới đứng vững.'
            }
          },
          {
            jp: '平和があってこそ、人々は安心して暮らせる。',
            romaji: 'Heiwa ga atte koso, hitobito wa anshin shite kuraseru.',
            meaning: {
              en: 'It is only because there is peace that people can live in security.',
              vi: 'Chính nhờ có hòa bình mà người dân mới yên tâm sống.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A shopkeeper looks back', vi: 'Người chủ tiệm nhìn lại' },
        lines: [
          {
            jp: '祖父は「客あっての商売だ」とよく言っていた。',
            romaji: 'Sofu wa \u201ckyaku atte no shōbai da\u201d to yoku itte ita.',
            meaning: {
              en: 'My grandfather often said, "Business exists only thanks to customers."',
              vi: 'Ông tôi thường nói "buôn bán có được là nhờ khách".'
            }
          },
          {
            jp: '店の信用があってこそ、長く続けてこられた。',
            romaji: 'Mise no shin\u2019yō ga atte koso, nagaku tsuzukete korareta.',
            meaning: {
              en: 'It is precisely because of the shop\u2019s trust that we could continue so long.',
              vi: 'Chính nhờ sự tín nhiệm của tiệm mà chúng tôi duy trì được lâu.'
            }
          },
          {
            jp: '家族の支えなくしては、この基盤は築けなかった。',
            romaji: 'Kazoku no sasae nakushite wa, kono kiban wa kizukenakatta.',
            meaning: {
              en: 'Without my family\u2019s support, I could not have built this foundation.',
              vi: 'Không có chỗ dựa của gia đình thì không xây nổi nền tảng này.'
            }
          },
          {
            jp: '健康あっての毎日だと、年を取って実感する。',
            romaji: 'Kenkō atte no mainichi da to, toshi o totte jikkan suru.',
            meaning: {
              en: 'As I age, I truly feel that daily life rests on health.',
              vi: 'Càng có tuổi tôi càng thấm rằng có sức khỏe mới có mỗi ngày.'
            }
          },
          {
            jp: 'だから今は、すべてに感謝して商売を続けている。',
            romaji: 'Dakara ima wa, subete ni kansha shite shōbai o tsuzukete iru.',
            meaning: {
              en: 'So now I continue the business grateful for everything.',
              vi: 'Vì thế giờ tôi biết ơn mọi thứ và tiếp tục buôn bán.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the grandfather often say?',
              vi: 'Ông thường nói câu gì?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Business exists thanks to customers',
                  vi: 'Buôn bán có được là nhờ khách'
                }
              },
              { id: 'b', label: { en: 'Money is everything', vi: 'Tiền là tất cả' } },
              { id: 'c', label: { en: 'Work hard alone', vi: 'Hãy làm việc một mình' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What allowed the shop to continue so long?',
              vi: 'Điều gì giúp tiệm duy trì được lâu?'
            },
            choices: [
              { id: 'a', label: { en: 'The shop\u2019s trust', vi: 'Sự tín nhiệm của tiệm' } },
              { id: 'b', label: { en: 'Low prices', vi: 'Giá rẻ' } },
              { id: 'c', label: { en: 'Advertising', vi: 'Quảng cáo' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'Without what could the foundation not have been built?',
              vi: 'Không có gì thì không xây nổi nền tảng?'
            },
            choices: [
              { id: 'a', label: { en: 'Family\u2019s support', vi: 'Chỗ dựa của gia đình' } },
              { id: 'b', label: { en: 'A bank loan', vi: 'Khoản vay ngân hàng' } },
              { id: 'c', label: { en: 'Good luck', vi: 'May mắn' } }
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
      en: 'What One Must Not Do: 〜まじき / 〜べからず',
      vi: 'Điều không được phép: 〜まじき / 〜べからず'
    },
    focus: {
      en: 'Express strong formal prohibition and condemnation with 〜まじき (unbecoming, that one should never do) and 〜べからず / べからざる (must not).',
      vi: 'Diễn đạt sự cấm đoán và lên án mạnh mẽ, trang trọng với 〜まじき (không xứng, điều không bao giờ được làm) và 〜べからず / べからざる (không được).'
    },
    vocab: [
      {
        kana: 'ふしょうじ',
        kanji: '不祥事',
        romaji: 'fushōji',
        meaning: { en: 'scandal, misconduct', vi: 'vụ bê bối' }
      },
      {
        kana: 'こうい',
        kanji: '行為',
        romaji: 'kōi',
        meaning: { en: 'act, conduct', vi: 'hành vi' }
      },
      {
        kana: 'ゆるす',
        kanji: '許す',
        romaji: 'yurusu',
        meaning: { en: 'to allow, forgive', vi: 'cho phép, tha thứ' }
      },
      {
        kana: 'りんり',
        kanji: '倫理',
        romaji: 'rinri',
        meaning: { en: 'ethics', vi: 'đạo đức (luân lý)' }
      },
      {
        kana: 'きそく',
        kanji: '規則',
        romaji: 'kisoku',
        meaning: { en: 'rule, regulation', vi: 'quy tắc' }
      },
      {
        kana: 'しょくむ',
        kanji: '職務',
        romaji: 'shokumu',
        meaning: { en: 'duties (of a job)', vi: 'chức trách' }
      },
      {
        kana: 'いはん',
        kanji: '違反',
        romaji: 'ihan',
        meaning: { en: 'violation', vi: 'sự vi phạm' }
      },
      {
        kana: 'たちば',
        kanji: '立場',
        romaji: 'tachiba',
        meaning: { en: 'position, standpoint', vi: 'lập trường, cương vị' }
      },
      {
        kana: 'もらす',
        kanji: '漏らす',
        romaji: 'morasu',
        meaning: { en: 'to leak, let slip', vi: 'để lộ, làm rò rỉ' }
      },
      {
        kana: 'しょばつ',
        kanji: '処罰',
        romaji: 'shobatsu',
        meaning: { en: 'punishment', vi: 'sự xử phạt' }
      },
      {
        kana: 'しゃかいじん',
        kanji: '社会人',
        romaji: 'shakaijin',
        meaning: { en: 'working member of society', vi: 'người đi làm, thành viên xã hội' }
      },
      {
        kana: 'きんじる',
        kanji: '禁じる',
        romaji: 'kinjiru',
        meaning: { en: 'to forbid, ban', vi: 'cấm' }
      }
    ],
    grammar: [
      {
        pattern: 'N に あるまじき N',
        title: { en: 'Unbecoming / inexcusable for', vi: 'Không xứng / không thể chấp nhận ở' },
        explanation: {
          en: 'あるまじき follows a role noun (often with に) to condemn conduct as utterly unbecoming of someone in that position. It is formal and literary.',
          vi: 'あるまじき đi sau danh từ chỉ cương vị (thường kèm に) để lên án hành vi là hoàn toàn không xứng với người ở vị trí đó. Đây là cách nói trang trọng, văn viết.'
        },
        examples: [
          {
            jp: 'それは教育者にあるまじき行為だ。',
            romaji: 'Sore wa kyōikusha ni aru majiki kōi da.',
            meaning: {
              en: 'That is conduct unbecoming of an educator.',
              vi: 'Đó là hành vi không thể chấp nhận ở một nhà giáo dục.'
            }
          },
          {
            jp: '政治家にあるまじき発言が問題となった。',
            romaji: 'Seijika ni aru majiki hatsugen ga mondai to natta.',
            meaning: {
              en: 'A remark unbecoming of a politician became an issue.',
              vi: 'Phát ngôn không xứng với một chính trị gia đã thành vấn đề.'
            }
          }
        ]
      },
      {
        pattern: 'V べからず / べからざる N',
        title: { en: 'Must not (formal prohibition)', vi: 'Không được (cấm trang trọng)' },
        explanation: {
          en: 'べからず ends a sentence as a stiff prohibition (often on signs); べからざる modifies a following noun ("that must not be ...").',
          vi: 'べからず kết thúc câu như một lệnh cấm cứng nhắc (hay thấy trên biển báo); べからざる bổ nghĩa cho danh từ theo sau ("không được phép ...").'
        },
        examples: [
          {
            jp: 'ここに物を捨てるべからず。',
            romaji: 'Koko ni mono o suteru bekarazu.',
            meaning: {
              en: 'One must not throw away things here.',
              vi: 'Không được vứt đồ ở đây.'
            }
          },
          {
            jp: '許すべからざる規則違反だった。',
            romaji: 'Yurusu bekarazaru kisoku ihan datta.',
            meaning: {
              en: 'It was an unforgivable rule violation.',
              vi: 'Đó là sự vi phạm quy tắc không thể tha thứ.'
            }
          }
        ]
      },
      {
        pattern: 'V てはならない',
        title: { en: 'Must not / it is not allowed to', vi: 'Không được phép' },
        explanation: {
          en: 'てはならない states a firm rule or moral prohibition that applies generally.',
          vi: 'てはならない nêu một quy định chặt chẽ hay điều cấm về đạo lý mang tính chung.'
        },
        examples: [
          {
            jp: '職務上の秘密を漏らしてはならない。',
            romaji: 'Shokumu-jō no himitsu o morashite wa naranai.',
            meaning: {
              en: 'One must not leak secrets related to one\u2019s duties.',
              vi: 'Không được để lộ bí mật liên quan đến chức trách.'
            }
          },
          {
            jp: '立場を利用して私欲を満たしてはならない。',
            romaji: 'Tachiba o riyō shite shiyoku o mitashite wa naranai.',
            meaning: {
              en: 'One must not use one\u2019s position to satisfy private greed.',
              vi: 'Không được lợi dụng cương vị để thỏa mãn tư lợi.'
            }
          }
        ]
      },
      {
        pattern: 'V ものではない',
        title: { en: 'One should not (general advice)', vi: 'Không nên (lời khuyên chung)' },
        explanation: {
          en: 'ものではない gives general moral advice that a certain action is not the proper thing to do.',
          vi: 'ものではない đưa ra lời khuyên đạo lý chung rằng một hành động nào đó là không nên làm.'
        },
        examples: [
          {
            jp: '人の失敗を笑うものではない。',
            romaji: 'Hito no shippai o warau mono de wa nai.',
            meaning: {
              en: 'One should not laugh at others\u2019 failures.',
              vi: 'Không nên cười nhạo thất bại của người khác.'
            }
          },
          {
            jp: '軽々しく約束するものではない。',
            romaji: 'Karugarushiku yakusoku suru mono de wa nai.',
            meaning: {
              en: 'One should not make promises lightly.',
              vi: 'Không nên hứa hẹn một cách hời hợt.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A company addresses misconduct', vi: 'Công ty xử lý sai phạm' },
        lines: [
          {
            jp: '社員の不祥事は、決して許されるべきではない。',
            romaji: 'Shain no fushōji wa, kesshite yurusareru beki de wa nai.',
            meaning: {
              en: 'An employee\u2019s misconduct should never be tolerated.',
              vi: 'Bê bối của nhân viên tuyệt đối không nên được dung thứ.'
            }
          },
          {
            jp: '職務上の情報を漏らす行為は、固く禁じられている。',
            romaji: 'Shokumu-jō no jōhō o morasu kōi wa, kataku kinjirarete iru.',
            meaning: {
              en: 'The act of leaking work-related information is strictly forbidden.',
              vi: 'Hành vi để lộ thông tin chức trách bị nghiêm cấm.'
            }
          },
          {
            jp: '立場を利用した違反は、社会人にあるまじきことだ。',
            romaji: 'Tachiba o riyō shita ihan wa, shakaijin ni aru majiki koto da.',
            meaning: {
              en: 'A violation that exploits one\u2019s position is unbecoming of a working adult.',
              vi: 'Vi phạm lợi dụng cương vị là điều không xứng với người đi làm.'
            }
          },
          {
            jp: '規則には「私語を交わすべからず」と明記されている。',
            romaji: 'Kisoku ni wa \u201cshigo o kawasu bekarazu\u201d to meiki sarete iru.',
            meaning: {
              en: 'The rules clearly state, "One must not chat privately."',
              vi: 'Quy tắc ghi rõ "không được trò chuyện riêng".'
            }
          },
          {
            jp: '倫理を忘れた者は、相応の処罰を受けねばならない。',
            romaji: 'Rinri o wasureta mono wa, sōō no shobatsu o ukeneba naranai.',
            meaning: {
              en: 'Those who forget ethics must receive appropriate punishment.',
              vi: 'Kẻ quên đạo đức phải chịu sự xử phạt thích đáng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How should an employee\u2019s misconduct be treated?',
              vi: 'Bê bối của nhân viên nên được xử lý thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Never tolerated', vi: 'Tuyệt đối không dung thứ' } },
              { id: 'b', label: { en: 'Ignored', vi: 'Bỏ qua' } },
              { id: 'c', label: { en: 'Rewarded', vi: 'Được khen thưởng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What is strictly forbidden?',
              vi: 'Điều gì bị nghiêm cấm?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Leaking work-related information', vi: 'Để lộ thông tin chức trách' }
              },
              { id: 'b', label: { en: 'Working overtime', vi: 'Làm thêm giờ' } },
              { id: 'c', label: { en: 'Taking breaks', vi: 'Nghỉ giải lao' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What must those who forget ethics receive?',
              vi: 'Kẻ quên đạo đức phải chịu gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Appropriate punishment', vi: 'Sự xử phạt thích đáng' } },
              { id: 'b', label: { en: 'A promotion', vi: 'Sự thăng chức' } },
              { id: 'c', label: { en: 'A bonus', vi: 'Tiền thưởng' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
