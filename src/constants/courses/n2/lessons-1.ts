import type { Lesson } from '@/constants/courses/types.ts';

export const n2LessonsA: Lesson[] = [
  {
    id: 'lesson-1',
    number: 1,
    title: {
      en: 'The Moment Something Happens',
      vi: 'Khoảnh khắc điều gì đó xảy ra'
    },
    focus: {
      en: 'Express that one event happened the instant another did, often unexpectedly, with 〜とたん(に) and related forms.',
      vi: 'Diễn đạt một sự việc xảy ra ngay khoảnh khắc một sự việc khác diễn ra, thường bất ngờ, với 〜とたん(に) và các mẫu liên quan.'
    },
    vocab: [
      {
        kana: 'とたん',
        kanji: '途端',
        romaji: 'totan',
        meaning: { en: 'the moment, just as', vi: 'ngay khi, vừa lúc' }
      },
      {
        kana: 'きゅうに',
        kanji: '急に',
        romaji: 'kyū ni',
        meaning: { en: 'suddenly', vi: 'đột nhiên' }
      },
      {
        kana: 'たおれる',
        kanji: '倒れる',
        romaji: 'taoreru',
        meaning: { en: 'to collapse, fall over', vi: 'ngã, gục xuống' }
      },
      {
        kana: 'なきだす',
        kanji: '泣き出す',
        romaji: 'nakidasu',
        meaning: { en: 'to burst into tears', vi: 'òa khóc' }
      },
      {
        kana: 'たちあがる',
        kanji: '立ち上がる',
        romaji: 'tachiagaru',
        meaning: { en: 'to stand up', vi: 'đứng dậy' }
      },
      {
        kana: 'かおいろ',
        kanji: '顔色',
        romaji: 'kaoiro',
        meaning: { en: 'complexion, look on the face', vi: 'sắc mặt' }
      },
      {
        kana: 'きんちょう',
        kanji: '緊張',
        romaji: 'kinchō',
        meaning: { en: 'nervousness, tension', vi: 'sự căng thẳng' }
      },
      {
        kana: 'えがお',
        kanji: '笑顔',
        romaji: 'egao',
        meaning: { en: 'smile, smiling face', vi: 'nụ cười, gương mặt tươi cười' }
      },
      {
        kana: 'げんかん',
        kanji: '玄関',
        romaji: 'genkan',
        meaning: { en: 'entrance hall', vi: 'lối vào, sảnh cửa' }
      },
      {
        kana: 'しらせ',
        kanji: '知らせ',
        romaji: 'shirase',
        meaning: { en: 'news, notice', vi: 'tin tức, thông báo' }
      },
      {
        kana: 'いっきに',
        kanji: '一気に',
        romaji: 'ikki ni',
        meaning: { en: 'all at once, in one go', vi: 'một mạch, cùng lúc' }
      },
      {
        kana: 'しゅんかん',
        kanji: '瞬間',
        romaji: 'shunkan',
        meaning: { en: 'moment, instant', vi: 'khoảnh khắc' }
      }
    ],
    grammar: [
      {
        pattern: 'V-た ＋ とたん(に)',
        title: { en: 'The moment ~ (〜たとたんに)', vi: 'Ngay khi ~ (〜たとたんに)' },
        explanation: {
          en: 'Attach とたん(に) to the past plain form of a verb. It marks that the second event happened the very instant the first did, usually an unexpected result the speaker witnessed.',
          vi: 'Gắn とたん(に) vào thể quá khứ ngắn của động từ. Mẫu này diễn đạt sự việc thứ hai xảy ra ngay khoảnh khắc sự việc thứ nhất diễn ra, thường là kết quả bất ngờ mà người nói chứng kiến.'
        },
        examples: [
          {
            jp: 'ドアを開けたとたん、猫が飛び出してきた。',
            romaji: 'Doa o aketa totan, neko ga tobidashite kita.',
            meaning: {
              en: 'The moment I opened the door, the cat jumped out.',
              vi: 'Ngay khi tôi mở cửa, con mèo lao ra ngoài.'
            }
          },
          {
            jp: '立ち上がったとたんに、めまいがした。',
            romaji: 'Tachiagatta totan ni, memai ga shita.',
            meaning: {
              en: 'The moment I stood up, I felt dizzy.',
              vi: 'Ngay khi tôi đứng dậy thì thấy chóng mặt.'
            }
          }
        ]
      },
      {
        pattern: 'V-る ＋ やいなや',
        title: { en: 'As soon as ~ (〜やいなや)', vi: 'Vừa mới ~ là (〜やいなや)' },
        explanation: {
          en: 'A literary form added to the dictionary form. It stresses that the next action followed almost simultaneously, with no gap in time.',
          vi: 'Một mẫu văn viết gắn vào thể từ điển. Mẫu nhấn mạnh hành động sau diễn ra gần như đồng thời, không có khoảng cách thời gian.'
        },
        examples: [
          {
            jp: '知らせを聞くやいなや、彼女は泣き出した。',
            romaji: 'Shirase o kiku ya ina ya, kanojo wa nakidashita.',
            meaning: {
              en: 'No sooner had she heard the news than she burst into tears.',
              vi: 'Vừa nghe tin là cô ấy òa khóc ngay.'
            }
          },
          {
            jp: '電車のドアが開くやいなや、人々が乗り込んだ。',
            romaji: 'Densha no doa ga hiraku ya ina ya, hitobito ga norikonda.',
            meaning: {
              en: 'As soon as the train doors opened, people piled in.',
              vi: 'Cửa tàu vừa mở là mọi người ùa vào.'
            }
          }
        ]
      },
      {
        pattern: 'V-る ＋ が早いか',
        title: { en: 'The instant ~ (〜が早いか)', vi: 'Vừa ~ là lập tức (〜が早いか)' },
        explanation: {
          en: 'が早いか follows the dictionary form and emphasizes that the second action came so fast it was almost the same as the first. It is used for vivid, observed events.',
          vi: 'が早いか theo sau thể từ điển, nhấn mạnh hành động thứ hai đến nhanh đến mức gần như trùng với hành động đầu. Dùng cho sự việc sống động, quan sát được.'
        },
        examples: [
          {
            jp: '彼はベルが鳴るが早いか、教室を出て行った。',
            romaji: 'Kare wa beru ga naru ga hayai ka, kyōshitsu o dete itta.',
            meaning: {
              en: 'The instant the bell rang, he left the classroom.',
              vi: 'Chuông vừa reo là anh ấy lập tức rời lớp học.'
            }
          },
          {
            jp: '横になるが早いか、彼は眠ってしまった。',
            romaji: 'Yoko ni naru ga hayai ka, kare wa nemutte shimatta.',
            meaning: {
              en: 'No sooner had he lain down than he fell asleep.',
              vi: 'Vừa nằm xuống là anh ấy ngủ thiếp đi ngay.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A tense morning', vi: 'Một buổi sáng căng thẳng' },
        lines: [
          {
            jp: '朝、目を覚ましたとたんに、いやな予感がした。',
            romaji: 'Asa, me o samashita totan ni, iyana yokan ga shita.',
            meaning: {
              en: 'In the morning, the moment I woke up, I had a bad feeling.',
              vi: 'Buổi sáng, ngay khi tỉnh dậy, tôi có một linh cảm xấu.'
            }
          },
          {
            jp: 'スマホを見ると、会社からの知らせが届いていた。',
            romaji: 'Sumaho o miru to, kaisha kara no shirase ga todoite ita.',
            meaning: {
              en: 'When I looked at my phone, a notice from the company had arrived.',
              vi: 'Khi nhìn điện thoại, tôi thấy có thông báo từ công ty.'
            }
          },
          {
            jp: 'その内容を読むやいなや、私は立ち上がった。',
            romaji: 'Sono naiyō o yomu ya ina ya, watashi wa tachiagatta.',
            meaning: {
              en: 'As soon as I read its contents, I stood up.',
              vi: 'Vừa đọc nội dung là tôi đứng bật dậy.'
            }
          },
          {
            jp: '玄関を出るが早いか、急に雨が降り出した。',
            romaji: 'Genkan o deru ga hayai ka, kyū ni ame ga furidashita.',
            meaning: {
              en: 'The instant I left the entrance, it suddenly began to rain.',
              vi: 'Vừa bước ra khỏi cửa là trời đột nhiên đổ mưa.'
            }
          },
          {
            jp: '駅に着いたとたん、電車が行ってしまった。',
            romaji: 'Eki ni tsuita totan, densha ga itte shimatta.',
            meaning: {
              en: 'The moment I arrived at the station, the train left.',
              vi: 'Ngay khi đến ga, tàu đã chạy mất.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened the moment the writer woke up?',
              vi: 'Điều gì xảy ra ngay khi người viết tỉnh dậy?'
            },
            choices: [
              { id: 'a', label: { en: 'They had a bad feeling', vi: 'Có một linh cảm xấu' } },
              { id: 'b', label: { en: 'They felt very happy', vi: 'Cảm thấy rất vui' } },
              { id: 'c', label: { en: 'They went back to sleep', vi: 'Ngủ tiếp' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened as soon as the writer left the entrance?',
              vi: 'Điều gì xảy ra ngay khi người viết ra khỏi cửa?'
            },
            choices: [
              { id: 'a', label: { en: 'It suddenly began to rain', vi: 'Trời đột nhiên đổ mưa' } },
              { id: 'b', label: { en: 'The train arrived', vi: 'Tàu đến' } },
              { id: 'c', label: { en: 'The phone rang', vi: 'Điện thoại reo' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: { en: 'When did the train leave?', vi: 'Tàu chạy mất khi nào?' },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The moment the writer arrived at the station',
                  vi: 'Ngay khi người viết đến ga'
                }
              },
              {
                id: 'b',
                label: { en: 'Before the writer woke up', vi: 'Trước khi người viết tỉnh dậy' }
              },
              {
                id: 'c',
                label: { en: 'After the writer got on it', vi: 'Sau khi người viết đã lên tàu' }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: {
      en: 'No Sooner Than',
      vi: 'Vừa mới ... đã'
    },
    focus: {
      en: 'Show that one action barely finished, or had not, when the next began, with 〜か〜ないかのうちに, 〜うちに and 〜ないうちに.',
      vi: 'Diễn đạt một hành động vừa kết thúc, hoặc chưa, thì hành động kế tiếp bắt đầu, với 〜か〜ないかのうちに, 〜うちに và 〜ないうちに.'
    },
    vocab: [
      {
        kana: 'おわる',
        kanji: '終わる',
        romaji: 'owaru',
        meaning: { en: 'to end, finish', vi: 'kết thúc, xong' }
      },
      {
        kana: 'はじまる',
        kanji: '始まる',
        romaji: 'hajimaru',
        meaning: { en: 'to begin', vi: 'bắt đầu' }
      },
      {
        kana: 'さめる',
        kanji: '冷める',
        romaji: 'sameru',
        meaning: { en: 'to get cold (food)', vi: 'nguội (đồ ăn)' }
      },
      {
        kana: 'かわく',
        kanji: '乾く',
        romaji: 'kawaku',
        meaning: { en: 'to dry, become dry', vi: 'khô' }
      },
      {
        kana: 'こむ',
        kanji: '混む',
        romaji: 'komu',
        meaning: { en: 'to get crowded', vi: 'đông, chật cứng' }
      },
      {
        kana: 'しゅっぱつ',
        kanji: '出発',
        romaji: 'shuppatsu',
        meaning: { en: 'departure', vi: 'sự khởi hành' }
      },
      {
        kana: 'しめきり',
        kanji: '締め切り',
        romaji: 'shimekiri',
        meaning: { en: 'deadline', vi: 'hạn chót' }
      },
      {
        kana: 'ようじ',
        kanji: '用事',
        romaji: 'yōji',
        meaning: { en: 'errand, things to do', vi: 'việc cần làm, việc vặt' }
      },
      {
        kana: 'あかるい',
        kanji: '明るい',
        romaji: 'akarui',
        meaning: { en: 'bright, light', vi: 'sáng' }
      },
      {
        kana: 'きたく',
        kanji: '帰宅',
        romaji: 'kitaku',
        meaning: { en: 'returning home', vi: 'về nhà' }
      },
      { kana: 'すっかり', romaji: 'sukkari', meaning: { en: 'completely', vi: 'hoàn toàn' } },
      {
        kana: 'はやめに',
        kanji: '早めに',
        romaji: 'hayame ni',
        meaning: { en: 'early, ahead of time', vi: 'sớm hơn, trước thời hạn' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る か V-ない か の うちに',
        title: {
          en: 'No sooner ~ than (〜か〜ないかのうちに)',
          vi: 'Vừa mới ~ là đã (〜か〜ないかのうちに)'
        },
        explanation: {
          en: 'Place the dictionary form and its negative around か...か, then add のうちに. It means the second event happened right as the first was barely finishing or not even done.',
          vi: 'Đặt thể từ điển và thể phủ định quanh か...か, rồi thêm のうちに. Mẫu diễn đạt sự việc thứ hai xảy ra đúng lúc sự việc đầu vừa kết thúc hoặc còn chưa xong.'
        },
        examples: [
          {
            jp: '授業が終わるか終わらないかのうちに、学生たちは教室を出た。',
            romaji: 'Jugyō ga owaru ka owaranai ka no uchi ni, gakusei-tachi wa kyōshitsu o deta.',
            meaning: {
              en: 'No sooner had the class ended than the students left the room.',
              vi: 'Tiết học vừa kết thúc là sinh viên đã ra khỏi lớp.'
            }
          },
          {
            jp: 'ベッドに入るか入らないかのうちに、眠ってしまった。',
            romaji: 'Beddo ni hairu ka hairanai ka no uchi ni, nemutte shimatta.',
            meaning: {
              en: 'I fell asleep almost the moment I got into bed.',
              vi: 'Vừa lên giường là tôi đã ngủ thiếp đi.'
            }
          }
        ]
      },
      {
        pattern: 'い-adj / V-ている ＋ うちに',
        title: { en: 'While ~ (〜うちに)', vi: 'Trong khi ~ (〜うちに)' },
        explanation: {
          en: 'うちに after a state or ongoing action means "while the condition still holds." Do the action before the situation changes.',
          vi: 'うちに sau một trạng thái hay hành động đang tiếp diễn nghĩa là "trong lúc điều kiện đó còn duy trì." Hãy làm việc đó trước khi tình huống thay đổi.'
        },
        examples: [
          {
            jp: '温かいうちに、どうぞ召し上がってください。',
            romaji: 'Atatakai uchi ni, dōzo meshiagatte kudasai.',
            meaning: {
              en: 'Please eat it while it is still warm.',
              vi: 'Xin mời ăn khi còn nóng.'
            }
          },
          {
            jp: '明るいうちに、家に帰りましょう。',
            romaji: 'Akarui uchi ni, ie ni kaerimashō.',
            meaning: {
              en: 'Let us go home while it is still light.',
              vi: 'Hãy về nhà khi trời còn sáng.'
            }
          }
        ]
      },
      {
        pattern: 'V-ない ＋ うちに',
        title: { en: 'Before ~ happens (〜ないうちに)', vi: 'Trước khi ~ xảy ra (〜ないうちに)' },
        explanation: {
          en: 'The negative form plus うちに means "before something undesirable happens." Act while the unwanted change has not yet occurred.',
          vi: 'Thể phủ định cộng うちに nghĩa là "trước khi điều không mong muốn xảy ra." Hãy hành động khi thay đổi bất lợi chưa diễn ra.'
        },
        examples: [
          {
            jp: '雨が降らないうちに、洗濯物を取り込もう。',
            romaji: 'Ame ga furanai uchi ni, sentakumono o torikomō.',
            meaning: {
              en: 'Let us bring in the laundry before it rains.',
              vi: 'Hãy thu quần áo vào trước khi trời mưa.'
            }
          },
          {
            jp: '忘れないうちに、メモしておきます。',
            romaji: 'Wasurenai uchi ni, memo shite okimasu.',
            meaning: {
              en: 'I will jot it down before I forget.',
              vi: 'Tôi sẽ ghi chú lại trước khi quên.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A hectic morning', vi: 'Một buổi sáng tất bật' },
        lines: [
          {
            jp: '目覚ましが鳴るか鳴らないかのうちに、私は起き上がった。',
            romaji: 'Mezamashi ga naru ka naranai ka no uchi ni, watashi wa okiagatta.',
            meaning: {
              en: 'No sooner had the alarm sounded than I got up.',
              vi: 'Đồng hồ báo thức vừa reo là tôi đã ngồi dậy.'
            }
          },
          {
            jp: 'コーヒーが冷めないうちに、急いで飲んだ。',
            romaji: 'Kōhī ga samenai uchi ni, isoide nonda.',
            meaning: {
              en: 'I drank my coffee quickly before it got cold.',
              vi: 'Tôi uống cà phê vội vàng trước khi nó nguội.'
            }
          },
          {
            jp: '電車が混まないうちに、早めに駅へ向かった。',
            romaji: 'Densha ga komanai uchi ni, hayame ni eki e mukatta.',
            meaning: {
              en: 'I headed to the station early before the trains got crowded.',
              vi: 'Tôi ra ga sớm trước khi tàu đông người.'
            }
          },
          {
            jp: '仕事が始まるか始まらないかのうちに、電話が鳴り続けた。',
            romaji: 'Shigoto ga hajimaru ka hajimaranai ka no uchi ni, denwa ga naritsuzuketa.',
            meaning: {
              en: 'The phone kept ringing almost the moment work began.',
              vi: 'Công việc vừa bắt đầu là điện thoại đã reo liên tục.'
            }
          },
          {
            jp: '明るいうちに用事を済ませて、帰宅した。',
            romaji: 'Akarui uchi ni yōji o sumasete, kitaku shita.',
            meaning: {
              en: 'I finished my errands while it was still light and went home.',
              vi: 'Tôi làm xong việc vặt khi trời còn sáng rồi về nhà.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'When did the writer get up?', vi: 'Người viết ngồi dậy khi nào?' },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Almost as soon as the alarm rang',
                  vi: 'Gần như ngay khi báo thức reo'
                }
              },
              {
                id: 'b',
                label: { en: 'Long after the alarm rang', vi: 'Rất lâu sau khi báo thức reo' }
              },
              { id: 'c', label: { en: 'Before the alarm rang', vi: 'Trước khi báo thức reo' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why did the writer go to the station early?',
              vi: 'Vì sao người viết ra ga sớm?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Before the trains got crowded', vi: 'Trước khi tàu đông người' }
              },
              {
                id: 'b',
                label: { en: 'Because the meeting was canceled', vi: 'Vì cuộc họp bị hủy' }
              },
              { id: 'c', label: { en: 'To buy coffee', vi: 'Để mua cà phê' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'When did the writer finish the errands?',
              vi: 'Người viết làm xong việc vặt khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'While it was still light', vi: 'Khi trời còn sáng' } },
              { id: 'b', label: { en: 'After it got dark', vi: 'Sau khi trời tối' } },
              { id: 'c', label: { en: 'During the night', vi: 'Trong đêm' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    title: {
      en: 'Depending On / As Soon As',
      vi: 'Tùy theo / Ngay khi'
    },
    focus: {
      en: 'Use 次第 in its three roles: V-stem＋次第 (as soon as), N次第だ (depends on), and N次第で (varying according to).',
      vi: 'Dùng 次第 với ba vai trò: V-stem＋次第 (ngay khi), N次第だ (tùy thuộc vào), và N次第で (thay đổi tùy theo).'
    },
    vocab: [
      {
        kana: 'れんらく',
        kanji: '連絡',
        romaji: 'renraku',
        meaning: { en: 'contact, communication', vi: 'sự liên lạc' }
      },
      {
        kana: 'けってい',
        kanji: '決定',
        romaji: 'kettei',
        meaning: { en: 'decision', vi: 'quyết định' }
      },
      { kana: 'けっか', kanji: '結果', romaji: 'kekka', meaning: { en: 'result', vi: 'kết quả' } },
      {
        kana: 'じょうきょう',
        kanji: '状況',
        romaji: 'jōkyō',
        meaning: { en: 'situation, circumstances', vi: 'tình hình' }
      },
      {
        kana: 'どりょく',
        kanji: '努力',
        romaji: 'doryoku',
        meaning: { en: 'effort', vi: 'sự nỗ lực' }
      },
      {
        kana: 'つごう',
        kanji: '都合',
        romaji: 'tsugō',
        meaning: { en: 'convenience, circumstances', vi: 'sự thuận tiện, hoàn cảnh' }
      },
      {
        kana: 'たんとう',
        kanji: '担当',
        romaji: 'tantō',
        meaning: { en: 'being in charge', vi: 'người phụ trách' }
      },
      {
        kana: 'かくにん',
        kanji: '確認',
        romaji: 'kakunin',
        meaning: { en: 'confirmation', vi: 'sự xác nhận' }
      },
      {
        kana: 'とどく',
        kanji: '届く',
        romaji: 'todoku',
        meaning: { en: 'to arrive, be delivered', vi: 'đến nơi, được gửi tới' }
      },
      {
        kana: 'ほうこく',
        kanji: '報告',
        romaji: 'hōkoku',
        meaning: { en: 'report', vi: 'báo cáo' }
      },
      {
        kana: 'あらためて',
        kanji: '改めて',
        romaji: 'aratamete',
        meaning: { en: 'again, anew', vi: 'lại, một lần nữa' }
      },
      {
        kana: 'せいこう',
        kanji: '成功',
        romaji: 'seikō',
        meaning: { en: 'success', vi: 'thành công' }
      }
    ],
    grammar: [
      {
        pattern: 'V-ます-stem ＋ 次第',
        title: { en: 'As soon as ~ (V-stem 次第)', vi: 'Ngay khi ~ (V-stem 次第)' },
        explanation: {
          en: 'Drop ます and add 次第 to mean "as soon as." It is formal and used for future plans, so the following clause cannot be in the past tense.',
          vi: 'Bỏ ます và thêm 次第 để diễn đạt "ngay khi." Mẫu trang trọng, dùng cho kế hoạch tương lai nên vế sau không thể chia quá khứ.'
        },
        examples: [
          {
            jp: '詳しいことが分かり次第、ご連絡いたします。',
            romaji: 'Kuwashii koto ga wakari shidai, go-renraku itashimasu.',
            meaning: {
              en: 'I will contact you as soon as the details become clear.',
              vi: 'Ngay khi rõ chi tiết, tôi sẽ liên lạc với quý vị.'
            }
          },
          {
            jp: '商品が届き次第、すぐに発送します。',
            romaji: 'Shōhin ga todoki shidai, sugu ni hassō shimasu.',
            meaning: {
              en: 'As soon as the goods arrive, we will ship them right away.',
              vi: 'Ngay khi hàng đến, chúng tôi sẽ gửi đi ngay.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ 次第だ',
        title: { en: 'It depends on N (N 次第だ)', vi: 'Tùy thuộc vào N (N 次第だ)' },
        explanation: {
          en: 'N次第だ at the end of a clause means the outcome is entirely determined by that noun.',
          vi: 'N次第だ ở cuối mệnh đề nghĩa là kết quả hoàn toàn do danh từ đó quyết định.'
        },
        examples: [
          {
            jp: '成功するかどうかは、本人の努力次第だ。',
            romaji: 'Seikō suru ka dō ka wa, honnin no doryoku shidai da.',
            meaning: {
              en: 'Whether you succeed depends on your own effort.',
              vi: 'Thành công hay không là tùy vào nỗ lực của chính bạn.'
            }
          },
          {
            jp: '旅行に行けるかは天気次第です。',
            romaji: 'Ryokō ni ikeru ka wa tenki shidai desu.',
            meaning: {
              en: 'Whether we can travel depends on the weather.',
              vi: 'Có đi du lịch được hay không là tùy vào thời tiết.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ 次第で',
        title: { en: 'Depending on N (N 次第で)', vi: 'Tùy theo N (N 次第で)' },
        explanation: {
          en: 'N次第で in the middle of a sentence means the result varies according to that noun.',
          vi: 'N次第で ở giữa câu nghĩa là kết quả thay đổi tùy theo danh từ đó.'
        },
        examples: [
          {
            jp: '考え方次第で、結果は大きく変わる。',
            romaji: 'Kangaekata shidai de, kekka wa ōkiku kawaru.',
            meaning: {
              en: 'Depending on how you think, the result changes greatly.',
              vi: 'Tùy theo cách suy nghĩ, kết quả thay đổi rất nhiều.'
            }
          },
          {
            jp: '状況次第で、予定を変更することもあります。',
            romaji: 'Jōkyō shidai de, yotei o henkō suru koto mo arimasu.',
            meaning: {
              en: 'Depending on the situation, we may change the plan.',
              vi: 'Tùy tình hình, có khi chúng tôi sẽ thay đổi kế hoạch.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Waiting for a work decision', vi: 'Chờ một quyết định công việc' },
        lines: [
          {
            jp: '担当者からの連絡が届き次第、会議を始めます。',
            romaji: 'Tantōsha kara no renraku ga todoki shidai, kaigi o hajimemasu.',
            meaning: {
              en: 'We will start the meeting as soon as contact from the person in charge arrives.',
              vi: 'Ngay khi nhận được liên lạc từ người phụ trách, chúng tôi sẽ bắt đầu họp.'
            }
          },
          {
            jp: 'プロジェクトが成功するかどうかは、準備次第だ。',
            romaji: 'Purojekuto ga seikō suru ka dō ka wa, junbi shidai da.',
            meaning: {
              en: 'Whether the project succeeds depends on the preparation.',
              vi: 'Dự án có thành công hay không là tùy vào sự chuẩn bị.'
            }
          },
          {
            jp: '結果が分かり次第、上司に報告するつもりだ。',
            romaji: 'Kekka ga wakari shidai, jōshi ni hōkoku suru tsumori da.',
            meaning: {
              en: 'I plan to report to my boss as soon as the result is clear.',
              vi: 'Ngay khi biết kết quả, tôi định báo cáo cho cấp trên.'
            }
          },
          {
            jp: '予算次第で、計画の規模は変わるだろう。',
            romaji: 'Yosan shidai de, keikaku no kibo wa kawaru darō.',
            meaning: {
              en: 'Depending on the budget, the scale of the plan will change.',
              vi: 'Tùy theo ngân sách, quy mô kế hoạch sẽ thay đổi.'
            }
          },
          {
            jp: 'すべては今日の話し合い次第です。',
            romaji: 'Subete wa kyō no hanashiai shidai desu.',
            meaning: {
              en: 'Everything depends on today\u2019s discussion.',
              vi: 'Mọi thứ đều tùy vào cuộc thảo luận hôm nay.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'When will the meeting start?', vi: 'Cuộc họp sẽ bắt đầu khi nào?' },
            choices: [
              {
                id: 'a',
                label: { en: 'As soon as the contact arrives', vi: 'Ngay khi nhận được liên lạc' }
              },
              { id: 'b', label: { en: 'Tomorrow morning', vi: 'Sáng mai' } },
              { id: 'c', label: { en: 'After the project ends', vi: 'Sau khi dự án kết thúc' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the project\u2019s success depend on?',
              vi: 'Thành công của dự án tùy thuộc vào điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'The preparation', vi: 'Sự chuẩn bị' } },
              { id: 'b', label: { en: 'The weather', vi: 'Thời tiết' } },
              { id: 'c', label: { en: 'Pure luck', vi: 'May mắn thuần túy' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What will the writer do as soon as the result is clear?',
              vi: 'Người viết sẽ làm gì ngay khi biết kết quả?'
            },
            choices: [
              { id: 'a', label: { en: 'Report to the boss', vi: 'Báo cáo cho cấp trên' } },
              { id: 'b', label: { en: 'Go home', vi: 'Về nhà' } },
              { id: 'c', label: { en: 'Cancel the plan', vi: 'Hủy kế hoạch' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    title: {
      en: 'Right in the Middle Of',
      vi: 'Đang giữa lúc'
    },
    focus: {
      en: 'Describe an interruption during an ongoing action with 〜最中に, 〜ているところに／へ, and 〜たところだ／ているところだ.',
      vi: 'Diễn đạt sự gián đoạn trong khi đang làm việc gì đó với 〜最中に, 〜ているところに／へ, và 〜たところだ／ているところだ.'
    },
    vocab: [
      {
        kana: 'さいちゅう',
        kanji: '最中',
        romaji: 'saichū',
        meaning: { en: 'the middle (of doing)', vi: 'đang giữa lúc' }
      },
      {
        kana: 'かいぎ',
        kanji: '会議',
        romaji: 'kaigi',
        meaning: { en: 'meeting', vi: 'cuộc họp' }
      },
      {
        kana: 'はっぴょう',
        kanji: '発表',
        romaji: 'happyō',
        meaning: { en: 'presentation, announcement', vi: 'bài thuyết trình, sự công bố' }
      },
      { kana: 'しょくじ', kanji: '食事', romaji: 'shokuji', meaning: { en: 'meal', vi: 'bữa ăn' } },
      {
        kana: 'じゃま',
        kanji: '邪魔',
        romaji: 'jama',
        meaning: { en: 'hindrance, interruption', vi: 'sự làm phiền, cản trở' }
      },
      {
        kana: 'ていでん',
        kanji: '停電',
        romaji: 'teiden',
        meaning: { en: 'power outage', vi: 'sự mất điện' }
      },
      {
        kana: 'しゅうちゅう',
        kanji: '集中',
        romaji: 'shūchū',
        meaning: { en: 'concentration', vi: 'sự tập trung' }
      },
      {
        kana: 'たずねる',
        kanji: '訪ねる',
        romaji: 'tazuneru',
        meaning: { en: 'to visit', vi: 'ghé thăm' }
      },
      {
        kana: 'まっさいちゅう',
        kanji: '真っ最中',
        romaji: 'massaichū',
        meaning: { en: 'the very middle, peak', vi: 'ngay giữa cao điểm' }
      },
      {
        kana: 'とつぜん',
        kanji: '突然',
        romaji: 'totsuzen',
        meaning: { en: 'suddenly', vi: 'đột ngột' }
      },
      {
        kana: 'しりょう',
        kanji: '資料',
        romaji: 'shiryō',
        meaning: { en: 'documents, materials', vi: 'tài liệu' }
      },
      {
        kana: 'ちゅうだん',
        kanji: '中断',
        romaji: 'chūdan',
        meaning: { en: 'interruption, suspension', vi: 'sự gián đoạn, tạm ngừng' }
      }
    ],
    grammar: [
      {
        pattern: 'N の／V-ている ＋ 最中に',
        title: { en: 'Right in the middle of ~ (〜最中に)', vi: 'Đang giữa lúc ~ (〜最中に)' },
        explanation: {
          en: 'Use N の最中に or V-ている最中に to stress that something cut in at the very peak of an action, usually an unwelcome interruption.',
          vi: 'Dùng N の最中に hoặc V-ている最中に để nhấn mạnh điều gì đó chen vào ngay lúc cao điểm của một hành động, thường là sự gián đoạn không mong muốn.'
        },
        examples: [
          {
            jp: '会議の最中に、突然停電になった。',
            romaji: 'Kaigi no saichū ni, totsuzen teiden ni natta.',
            meaning: {
              en: 'Right in the middle of the meeting, the power suddenly went out.',
              vi: 'Đang giữa cuộc họp thì đột nhiên mất điện.'
            }
          },
          {
            jp: '食事をしている最中に、電話がかかってきた。',
            romaji: 'Shokuji o shite iru saichū ni, denwa ga kakatte kita.',
            meaning: {
              en: 'A phone call came right while I was eating.',
              vi: 'Đang giữa bữa ăn thì có điện thoại gọi đến.'
            }
          }
        ]
      },
      {
        pattern: 'V-ている ＋ ところに／ところへ',
        title: {
          en: 'Just when ~ (〜ているところに／へ)',
          vi: 'Đúng lúc ~ (〜ているところに／へ)'
        },
        explanation: {
          en: 'V-ているところに／へ marks the exact moment an action was in progress when an outside event or person arrived.',
          vi: 'V-ているところに／へ đánh dấu đúng khoảnh khắc một hành động đang diễn ra thì có sự việc hoặc người từ bên ngoài xuất hiện.'
        },
        examples: [
          {
            jp: '出かけようとしているところに、友達が訪ねてきた。',
            romaji: 'Dekakeyō to shite iru tokoro ni, tomodachi ga tazunete kita.',
            meaning: {
              en: 'Just as I was about to go out, a friend came to visit.',
              vi: 'Đúng lúc tôi định ra ngoài thì bạn ghé thăm.'
            }
          },
          {
            jp: '集中しているところへ、話しかけられた。',
            romaji: 'Shūchū shite iru tokoro e, hanashikakerareta.',
            meaning: {
              en: 'Just as I was concentrating, someone spoke to me.',
              vi: 'Đúng lúc tôi đang tập trung thì có người bắt chuyện.'
            }
          }
        ]
      },
      {
        pattern: 'V-た／ている ＋ ところだ',
        title: {
          en: 'Have just / in the process of (〜ところだ)',
          vi: 'Vừa mới / đang trong quá trình (〜ところだ)'
        },
        explanation: {
          en: 'V-たところだ means "have just done," while V-ているところだ means "right in the middle of doing."',
          vi: 'V-たところだ nghĩa là "vừa mới làm xong," còn V-ているところだ nghĩa là "đang ngay trong lúc làm."'
        },
        examples: [
          {
            jp: '今、発表の準備をしているところです。',
            romaji: 'Ima, happyō no junbi o shite iru tokoro desu.',
            meaning: {
              en: 'I am in the middle of preparing the presentation right now.',
              vi: 'Bây giờ tôi đang chuẩn bị bài thuyết trình.'
            }
          },
          {
            jp: 'ちょうど家に着いたところだ。',
            romaji: 'Chōdo ie ni tsuita tokoro da.',
            meaning: { en: 'I have just arrived home.', vi: 'Tôi vừa mới về đến nhà.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Interruptions at work', vi: 'Những gián đoạn ở chỗ làm' },
        lines: [
          {
            jp: '大事な発表の最中に、急に停電になってしまった。',
            romaji: 'Daiji na happyō no saichū ni, kyū ni teiden ni natte shimatta.',
            meaning: {
              en: 'Right in the middle of an important presentation, the power suddenly went out.',
              vi: 'Đang giữa bài thuyết trình quan trọng thì đột nhiên mất điện.'
            }
          },
          {
            jp: '資料を直しているところに、部長が入ってきた。',
            romaji: 'Shiryō o naoshite iru tokoro ni, buchō ga haitte kita.',
            meaning: {
              en: 'Just as I was fixing the documents, the manager came in.',
              vi: 'Đúng lúc tôi đang sửa tài liệu thì trưởng phòng bước vào.'
            }
          },
          {
            jp: '会議が真っ最中だったので、電話には出られなかった。',
            romaji: 'Kaigi ga massaichū datta node, denwa ni wa derarenakatta.',
            meaning: {
              en: 'Since the meeting was at its very height, I could not answer the phone.',
              vi: 'Vì cuộc họp đang giữa cao điểm nên tôi không thể nghe điện thoại.'
            }
          },
          {
            jp: '食事をしている最中に、仕事の電話がかかってきた。',
            romaji: 'Shokuji o shite iru saichū ni, shigoto no denwa ga kakatte kita.',
            meaning: {
              en: 'Right while I was eating, a work call came.',
              vi: 'Đang giữa bữa ăn thì có điện thoại công việc gọi đến.'
            }
          },
          {
            jp: '今、一日の仕事を終えたところだ。',
            romaji: 'Ima, ichinichi no shigoto o oeta tokoro da.',
            meaning: {
              en: 'I have just finished the day\u2019s work.',
              vi: 'Bây giờ tôi vừa làm xong công việc của một ngày.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened during the presentation?',
              vi: 'Điều gì xảy ra trong lúc thuyết trình?'
            },
            choices: [
              { id: 'a', label: { en: 'The power went out', vi: 'Bị mất điện' } },
              { id: 'b', label: { en: 'A friend visited', vi: 'Một người bạn ghé thăm' } },
              { id: 'c', label: { en: 'Nothing happened', vi: 'Không có gì xảy ra' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why couldn\u2019t the writer answer the phone?',
              vi: 'Vì sao người viết không thể nghe điện thoại?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'They were in the middle of a meeting', vi: 'Đang giữa cuộc họp' }
              },
              { id: 'b', label: { en: 'They were asleep', vi: 'Đang ngủ' } },
              { id: 'c', label: { en: 'They were out', vi: 'Đang đi vắng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What did the writer just finish?',
              vi: 'Người viết vừa làm xong việc gì?'
            },
            choices: [
              { id: 'a', label: { en: 'The day\u2019s work', vi: 'Công việc của một ngày' } },
              { id: 'b', label: { en: 'A meal', vi: 'Một bữa ăn' } },
              { id: 'c', label: { en: 'A trip', vi: 'Một chuyến đi' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-5',
    number: 5,
    title: {
      en: 'On the Occasion Of',
      vi: 'Nhân dịp, Khi'
    },
    focus: {
      en: 'Mark a significant occasion or undertaking with 〜にあたって／にあたり, 〜に際して／に際し, and 〜上で.',
      vi: 'Đánh dấu một dịp hay việc trọng đại với 〜にあたって／にあたり, 〜に際して／に際し, và 〜上で.'
    },
    vocab: [
      {
        kana: 'かいかい',
        kanji: '開会',
        romaji: 'kaikai',
        meaning: { en: 'opening of a meeting', vi: 'sự khai mạc' }
      },
      {
        kana: 'にゅうがく',
        kanji: '入学',
        romaji: 'nyūgaku',
        meaning: { en: 'school entrance', vi: 'sự nhập học' }
      },
      {
        kana: 'そつぎょう',
        kanji: '卒業',
        romaji: 'sotsugyō',
        meaning: { en: 'graduation', vi: 'sự tốt nghiệp' }
      },
      {
        kana: 'しゅうしょく',
        kanji: '就職',
        romaji: 'shūshoku',
        meaning: { en: 'getting a job', vi: 'sự xin được việc làm' }
      },
      {
        kana: 'けいやく',
        kanji: '契約',
        romaji: 'keiyaku',
        meaning: { en: 'contract', vi: 'hợp đồng' }
      },
      {
        kana: 'あいさつ',
        kanji: '挨拶',
        romaji: 'aisatsu',
        meaning: { en: 'greeting, address', vi: 'lời chào, bài phát biểu' }
      },
      {
        kana: 'けつい',
        kanji: '決意',
        romaji: 'ketsui',
        meaning: { en: 'determination, resolve', vi: 'sự quyết tâm' }
      },
      {
        kana: 'もうしこみ',
        kanji: '申し込み',
        romaji: 'mōshikomi',
        meaning: { en: 'application', vi: 'sự đăng ký, nộp đơn' }
      },
      {
        kana: 'きねん',
        kanji: '記念',
        romaji: 'kinen',
        meaning: { en: 'commemoration', vi: 'sự kỷ niệm' }
      },
      {
        kana: 'のべる',
        kanji: '述べる',
        romaji: 'noberu',
        meaning: { en: 'to state, express', vi: 'phát biểu, trình bày' }
      },
      {
        kana: 'じょうけん',
        kanji: '条件',
        romaji: 'jōken',
        meaning: { en: 'condition, terms', vi: 'điều kiện' }
      },
      {
        kana: 'にゅうしゃ',
        kanji: '入社',
        romaji: 'nyūsha',
        meaning: { en: 'joining a company', vi: 'sự vào công ty làm việc' }
      }
    ],
    grammar: [
      {
        pattern: 'N／V-る ＋ にあたって・にあたり',
        title: { en: 'On the occasion of ~ (〜にあたって)', vi: 'Nhân dịp ~ (〜にあたって)' },
        explanation: {
          en: 'にあたって (formal: にあたり) marks a special, often positive occasion or the start of an important undertaking. The following clause states what one does for it.',
          vi: 'にあたって (trang trọng: にあたり) đánh dấu một dịp đặc biệt, thường tích cực, hoặc sự khởi đầu một việc quan trọng. Vế sau nêu điều ta làm cho dịp đó.'
        },
        examples: [
          {
            jp: '新年を迎えるにあたって、今年の目標を立てた。',
            romaji: 'Shinnen o mukaeru ni atatte, kotoshi no mokuhyō o tateta.',
            meaning: {
              en: 'On the occasion of the new year, I set my goals for the year.',
              vi: 'Nhân dịp đón năm mới, tôi đã đặt ra mục tiêu cho năm nay.'
            }
          },
          {
            jp: '開会にあたり、社長が挨拶を述べた。',
            romaji: 'Kaikai ni atari, shachō ga aisatsu o nobeta.',
            meaning: {
              en: 'Upon the opening, the president gave an address.',
              vi: 'Nhân lễ khai mạc, giám đốc đã phát biểu.'
            }
          }
        ]
      },
      {
        pattern: 'N／V-る ＋ に際して・に際し',
        title: { en: 'At the time of ~ (〜に際して)', vi: 'Khi ~ (〜に際して)' },
        explanation: {
          en: 'に際して (formal: に際し) means "at the time of / when," used for notable, formal moments. It is more written than にあたって.',
          vi: 'に際して (trang trọng: に際し) nghĩa là "khi / vào lúc," dùng cho những thời điểm đáng chú ý, trang trọng. Mang tính văn viết hơn にあたって.'
        },
        examples: [
          {
            jp: '契約に際して、内容をよく確認してください。',
            romaji: 'Keiyaku ni saishite, naiyō o yoku kakunin shite kudasai.',
            meaning: {
              en: 'When signing the contract, please check the contents carefully.',
              vi: 'Khi ký hợp đồng, xin hãy kiểm tra kỹ nội dung.'
            }
          },
          {
            jp: '卒業に際し、先生に感謝の手紙を書いた。',
            romaji: 'Sotsugyō ni saishi, sensei ni kansha no tegami o kaita.',
            meaning: {
              en: 'On the occasion of graduation, I wrote a thank-you letter to my teacher.',
              vi: 'Nhân dịp tốt nghiệp, tôi đã viết thư cảm ơn thầy cô.'
            }
          }
        ]
      },
      {
        pattern: 'V-る／V-た ＋ 上で',
        title: { en: 'In doing / after ~ (〜上で)', vi: 'Khi làm / sau khi ~ (〜上で)' },
        explanation: {
          en: 'V-る上で means "in the course of doing," while V-た上で means "after doing ~ first." It points to points to keep in mind during a process.',
          vi: 'V-る上で nghĩa là "trong quá trình làm," còn V-た上で nghĩa là "sau khi đã làm ~ trước." Mẫu chỉ những điểm cần lưu ý trong một quá trình.'
        },
        examples: [
          {
            jp: '申し込みをする上で、注意すべき点があります。',
            romaji: 'Mōshikomi o suru ue de, chūi subeki ten ga arimasu.',
            meaning: {
              en: 'There are points to be careful of when applying.',
              vi: 'Khi đăng ký, có những điểm cần lưu ý.'
            }
          },
          {
            jp: 'よく考えた上で、決めたいと思います。',
            romaji: 'Yoku kangaeta ue de, kimetai to omoimasu.',
            meaning: {
              en: 'I want to decide after thinking it over carefully.',
              vi: 'Tôi muốn quyết định sau khi đã suy nghĩ kỹ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Graduation and a new job', vi: 'Tốt nghiệp và công việc mới' },
        lines: [
          {
            jp: '卒業に際して、私は将来について深く考えた。',
            romaji: 'Sotsugyō ni saishite, watashi wa shōrai ni tsuite fukaku kangaeta.',
            meaning: {
              en: 'On the occasion of graduation, I thought deeply about my future.',
              vi: 'Nhân dịp tốt nghiệp, tôi đã suy nghĩ sâu sắc về tương lai.'
            }
          },
          {
            jp: '就職するにあたって、いくつかの会社に申し込みをした。',
            romaji: 'Shūshoku suru ni atatte, ikutsu ka no kaisha ni mōshikomi o shita.',
            meaning: {
              en: 'Upon seeking work, I applied to several companies.',
              vi: 'Khi đi xin việc, tôi đã nộp đơn vào vài công ty.'
            }
          },
          {
            jp: '契約を結ぶ上で、条件をよく確認した。',
            romaji: 'Keiyaku o musubu ue de, jōken o yoku kakunin shita.',
            meaning: {
              en: 'In signing the contract, I checked the conditions carefully.',
              vi: 'Khi ký hợp đồng, tôi đã kiểm tra kỹ các điều kiện.'
            }
          },
          {
            jp: '入社式にあたり、社長が新入社員に挨拶をした。',
            romaji: 'Nyūsha-shiki ni atari, shachō ga shinnyū shain ni aisatsu o shita.',
            meaning: {
              en: 'On the occasion of the entrance ceremony, the president addressed the new employees.',
              vi: 'Nhân lễ nhập công ty, giám đốc đã phát biểu trước nhân viên mới.'
            }
          },
          {
            jp: '新しい仕事を始めるにあたって、強い決意を持った。',
            romaji: 'Atarashii shigoto o hajimeru ni atatte, tsuyoi ketsui o motta.',
            meaning: {
              en: 'Upon starting the new job, I held a strong resolve.',
              vi: 'Khi bắt đầu công việc mới, tôi mang theo quyết tâm mạnh mẽ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the writer do on the occasion of graduation?',
              vi: 'Người viết đã làm gì nhân dịp tốt nghiệp?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Thought deeply about the future',
                  vi: 'Suy nghĩ sâu sắc về tương lai'
                }
              },
              { id: 'b', label: { en: 'Traveled abroad', vi: 'Đi du lịch nước ngoài' } },
              { id: 'c', label: { en: 'Quit studying', vi: 'Bỏ học' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the writer check carefully when signing the contract?',
              vi: 'Người viết kiểm tra kỹ điều gì khi ký hợp đồng?'
            },
            choices: [
              { id: 'a', label: { en: 'The conditions', vi: 'Các điều kiện' } },
              { id: 'b', label: { en: 'Only the salary', vi: 'Chỉ mức lương' } },
              { id: 'c', label: { en: 'Nothing at all', vi: 'Không gì cả' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'Who gave an address at the entrance ceremony?',
              vi: 'Ai đã phát biểu tại lễ nhập công ty?'
            },
            choices: [
              { id: 'a', label: { en: 'The company president', vi: 'Giám đốc công ty' } },
              { id: 'b', label: { en: 'The writer', vi: 'Người viết' } },
              { id: 'c', label: { en: 'A teacher', vi: 'Một giáo viên' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-6',
    number: 6,
    title: {
      en: 'Prior To',
      vi: 'Trước khi'
    },
    focus: {
      en: 'State that something is done ahead of a major event with 〜に先立って／に先立ち, 〜前もって, and 〜てからでないと.',
      vi: 'Diễn đạt một việc được làm trước một sự kiện lớn với 〜に先立って／に先立ち, 〜前もって, và 〜てからでないと.'
    },
    vocab: [
      {
        kana: 'さきだつ',
        kanji: '先立つ',
        romaji: 'sakidatsu',
        meaning: { en: 'to precede', vi: 'đi trước, có trước' }
      },
      {
        kana: 'こうかい',
        kanji: '公開',
        romaji: 'kōkai',
        meaning: { en: 'release to the public', vi: 'sự công chiếu, công khai' }
      },
      {
        kana: 'しゅっぱん',
        kanji: '出版',
        romaji: 'shuppan',
        meaning: { en: 'publication', vi: 'sự xuất bản' }
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
        meaning: { en: 'investigation, survey', vi: 'sự điều tra, khảo sát' }
      },
      {
        kana: 'じゅんび',
        kanji: '準備',
        romaji: 'junbi',
        meaning: { en: 'preparation', vi: 'sự chuẩn bị' }
      },
      {
        kana: 'せつめいかい',
        kanji: '説明会',
        romaji: 'setsumeikai',
        meaning: { en: 'briefing session', vi: 'buổi thuyết minh' }
      },
      {
        kana: 'じっし',
        kanji: '実施',
        romaji: 'jisshi',
        meaning: { en: 'implementation', vi: 'sự thực hiện' }
      },
      {
        kana: 'あんない',
        kanji: '案内',
        romaji: 'annai',
        meaning: { en: 'guidance, showing in', vi: 'sự hướng dẫn, dẫn vào' }
      },
      {
        kana: 'まえもって',
        kanji: '前もって',
        romaji: 'maemotte',
        meaning: { en: 'in advance', vi: 'trước, từ trước' }
      },
      {
        kana: 'よやく',
        kanji: '予約',
        romaji: 'yoyaku',
        meaning: { en: 'reservation', vi: 'sự đặt trước' }
      },
      {
        kana: 'はつばい',
        kanji: '発売',
        romaji: 'hatsubai',
        meaning: { en: 'release for sale', vi: 'sự mở bán' }
      }
    ],
    grammar: [
      {
        pattern: 'N／V-る ＋ に先立って・に先立ち',
        title: { en: 'Prior to ~ (〜に先立って)', vi: 'Trước khi ~ (〜に先立って)' },
        explanation: {
          en: 'に先立って (formal: に先立ち) means "prior to" a major scheduled event. The main clause states a preparatory action done beforehand.',
          vi: 'に先立って (trang trọng: に先立ち) nghĩa là "trước khi" một sự kiện lớn được lên lịch diễn ra. Vế chính nêu hành động chuẩn bị làm trước đó.'
        },
        examples: [
          {
            jp: '映画の公開に先立って、特別な試写会が行われた。',
            romaji: 'Eiga no kōkai ni saki datte, tokubetsu na shishakai ga okonawareta.',
            meaning: {
              en: 'Prior to the film\u2019s release, a special preview was held.',
              vi: 'Trước khi phim công chiếu, một buổi chiếu thử đặc biệt đã được tổ chức.'
            }
          },
          {
            jp: '工事の開始に先立ち、住民への説明会が開かれた。',
            romaji: 'Kōji no kaishi ni saki dachi, jūmin e no setsumeikai ga hirakareta.',
            meaning: {
              en: 'Prior to the start of construction, a briefing for residents was held.',
              vi: 'Trước khi khởi công, buổi thuyết minh cho cư dân đã được mở.'
            }
          }
        ]
      },
      {
        pattern: '前もって ＋ V',
        title: { en: 'In advance (前もって)', vi: 'Từ trước (前もって)' },
        explanation: {
          en: '前もって is an adverb meaning "in advance, beforehand." It is often paired with ～ておく to show preparation done ahead of time.',
          vi: '前もって là phó từ nghĩa là "từ trước, sẵn." Thường đi với ～ておく để diễn đạt sự chuẩn bị làm sẵn từ trước.'
        },
        examples: [
          {
            jp: '旅行の前に、前もってホテルを予約しておいた。',
            romaji: 'Ryokō no mae ni, maemotte hoteru o yoyaku shite oita.',
            meaning: {
              en: 'Before the trip, I reserved a hotel in advance.',
              vi: 'Trước chuyến đi, tôi đã đặt khách sạn từ trước.'
            }
          },
          {
            jp: '会議の資料は前もって配っておきます。',
            romaji: 'Kaigi no shiryō wa maemotte kubatte okimasu.',
            meaning: {
              en: 'I will hand out the meeting materials in advance.',
              vi: 'Tôi sẽ phát tài liệu cuộc họp từ trước.'
            }
          }
        ]
      },
      {
        pattern: 'V-て ＋ からでないと',
        title: {
          en: 'Not unless ~ first (〜てからでないと)',
          vi: 'Không thể nếu chưa ~ (〜てからでないと)'
        },
        explanation: {
          en: '〜てからでないと is followed by a negative possibility, meaning one thing cannot happen unless something else is done first.',
          vi: '〜てからでないと theo sau là khả năng phủ định, nghĩa là một việc không thể xảy ra nếu chưa làm xong việc khác trước.'
        },
        examples: [
          {
            jp: '調査の結果を見てからでないと、結論は出せない。',
            romaji: 'Chōsa no kekka o mite kara de nai to, ketsuron wa dasenai.',
            meaning: {
              en: 'I cannot reach a conclusion unless I see the survey results first.',
              vi: 'Nếu chưa xem kết quả khảo sát thì tôi chưa thể đưa ra kết luận.'
            }
          },
          {
            jp: '予約してからでないと、店には入れません。',
            romaji: 'Yoyaku shite kara de nai to, mise ni wa hairemasen.',
            meaning: {
              en: 'You cannot enter the restaurant unless you make a reservation first.',
              vi: 'Nếu chưa đặt chỗ trước thì không thể vào quán.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Preparing for a product launch', vi: 'Chuẩn bị cho buổi ra mắt sản phẩm' },
        lines: [
          {
            jp: '新製品の発売に先立って、社内で説明会が行われた。',
            romaji: 'Shinseihin no hatsubai ni saki datte, shanai de setsumeikai ga okonawareta.',
            meaning: {
              en: 'Prior to the new product\u2019s launch, a briefing was held within the company.',
              vi: 'Trước khi sản phẩm mới mở bán, buổi thuyết minh đã được tổ chức trong công ty.'
            }
          },
          {
            jp: '調査の結果を確認してからでないと、計画は進められない。',
            romaji: 'Chōsa no kekka o kakunin shite kara de nai to, keikaku wa susumerarenai.',
            meaning: {
              en: 'The plan cannot move forward unless we confirm the survey results first.',
              vi: 'Nếu chưa xác nhận kết quả khảo sát thì kế hoạch không thể tiến hành.'
            }
          },
          {
            jp: '発表の前に、前もって資料をすべて準備しておいた。',
            romaji: 'Happyō no mae ni, maemotte shiryō o subete junbi shite oita.',
            meaning: {
              en: 'Before the announcement, I prepared all the materials in advance.',
              vi: 'Trước buổi công bố, tôi đã chuẩn bị sẵn toàn bộ tài liệu từ trước.'
            }
          },
          {
            jp: 'イベントの実施に先立ち、安全の確認を行った。',
            romaji: 'Ibento no jisshi ni saki dachi, anzen no kakunin o okonatta.',
            meaning: {
              en: 'Prior to holding the event, we carried out a safety check.',
              vi: 'Trước khi tổ chức sự kiện, chúng tôi đã kiểm tra an toàn.'
            }
          },
          {
            jp: '準備が整ってからでないと、お客様は案内できない。',
            romaji: 'Junbi ga totonotte kara de nai to, o-kyaku-sama wa annai dekinai.',
            meaning: {
              en: 'We cannot show customers in unless the preparations are complete first.',
              vi: 'Nếu chưa chuẩn bị xong thì chưa thể mời khách vào.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'When was the in-company briefing held?',
              vi: 'Buổi thuyết minh trong công ty được tổ chức khi nào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Prior to the product launch', vi: 'Trước khi sản phẩm mở bán' }
              },
              { id: 'b', label: { en: 'After the product launch', vi: 'Sau khi sản phẩm mở bán' } },
              { id: 'c', label: { en: 'It was never held', vi: 'Không hề được tổ chức' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What must be confirmed before the plan moves forward?',
              vi: 'Phải xác nhận điều gì trước khi kế hoạch tiến hành?'
            },
            choices: [
              { id: 'a', label: { en: 'The survey results', vi: 'Kết quả khảo sát' } },
              { id: 'b', label: { en: 'The budget only', vi: 'Chỉ ngân sách' } },
              { id: 'c', label: { en: 'The weather', vi: 'Thời tiết' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'When did the writer prepare the materials?',
              vi: 'Người viết chuẩn bị tài liệu khi nào?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'In advance, before the announcement',
                  vi: 'Từ trước, trước buổi công bố'
                }
              },
              { id: 'b', label: { en: 'After the announcement', vi: 'Sau buổi công bố' } },
              { id: 'c', label: { en: 'During the announcement', vi: 'Trong buổi công bố' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-7',
    number: 7,
    title: {
      en: 'Ever Since',
      vi: 'Kể từ khi'
    },
    focus: {
      en: 'Describe a state that has continued since a one-time past event with 〜て以来, N以来, and 〜てからというもの.',
      vi: 'Diễn đạt một trạng thái kéo dài kể từ một sự việc trong quá khứ với 〜て以来, N以来, và 〜てからというもの.'
    },
    vocab: [
      {
        kana: 'いらい',
        kanji: '以来',
        romaji: 'irai',
        meaning: { en: 'since, ever since', vi: 'kể từ' }
      },
      {
        kana: 'ひっこす',
        kanji: '引っ越す',
        romaji: 'hikkosu',
        meaning: { en: 'to move house', vi: 'chuyển nhà' }
      },
      {
        kana: 'にゅういん',
        kanji: '入院',
        romaji: 'nyūin',
        meaning: { en: 'hospitalization', vi: 'sự nhập viện' }
      },
      {
        kana: 'たいいん',
        kanji: '退院',
        romaji: 'taiin',
        meaning: { en: 'leaving the hospital', vi: 'sự xuất viện' }
      },
      {
        kana: 'けんこう',
        kanji: '健康',
        romaji: 'kenkō',
        meaning: { en: 'health', vi: 'sức khỏe' }
      },
      {
        kana: 'しゅうかん',
        kanji: '習慣',
        romaji: 'shūkan',
        meaning: { en: 'habit, custom', vi: 'thói quen' }
      },
      {
        kana: 'うんどう',
        kanji: '運動',
        romaji: 'undō',
        meaning: { en: 'exercise', vi: 'sự vận động, tập thể dục' }
      },
      {
        kana: 'さいかい',
        kanji: '再会',
        romaji: 'saikai',
        meaning: { en: 'reunion', vi: 'sự gặp lại' }
      },
      {
        kana: 'いぜん',
        kanji: '以前',
        romaji: 'izen',
        meaning: { en: 'previously, before', vi: 'trước đây' }
      },
      {
        kana: 'れんらく',
        kanji: '連絡',
        romaji: 'renraku',
        meaning: { en: 'contact', vi: 'sự liên lạc' }
      },
      { kana: 'すっかり', romaji: 'sukkari', meaning: { en: 'completely', vi: 'hoàn toàn' } },
      {
        kana: 'つづける',
        kanji: '続ける',
        romaji: 'tsuzukeru',
        meaning: { en: 'to continue', vi: 'tiếp tục' }
      }
    ],
    grammar: [
      {
        pattern: 'V-て ＋ 以来',
        title: { en: 'Ever since ~ (〜て以来)', vi: 'Kể từ khi ~ (〜て以来)' },
        explanation: {
          en: 'V-て以来 marks a one-time event after which a state has continued without interruption up to now. The main clause describes that ongoing state.',
          vi: 'V-て以来 đánh dấu một sự việc xảy ra một lần, sau đó một trạng thái kéo dài liên tục đến hiện tại. Vế chính mô tả trạng thái kéo dài đó.'
        },
        examples: [
          {
            jp: '日本に来て以来、毎日日本語を勉強している。',
            romaji: 'Nihon ni kite irai, mainichi nihongo o benkyō shite iru.',
            meaning: {
              en: 'Ever since I came to Japan, I have studied Japanese every day.',
              vi: 'Kể từ khi đến Nhật, ngày nào tôi cũng học tiếng Nhật.'
            }
          },
          {
            jp: '一度会って以来、彼とは連絡を取っていない。',
            romaji: 'Ichido atte irai, kare to wa renraku o totte inai.',
            meaning: {
              en: 'Since meeting him once, I have not kept in touch with him.',
              vi: 'Kể từ lần gặp đó, tôi không còn liên lạc với anh ấy.'
            }
          }
        ]
      },
      {
        pattern: 'N ＋ 以来',
        title: { en: 'Since N (N 以来)', vi: 'Kể từ N (N 以来)' },
        explanation: {
          en: 'Attach 以来 directly to a noun naming a past point in time or event to mean "ever since then."',
          vi: 'Gắn 以来 trực tiếp vào danh từ chỉ một thời điểm hay sự việc trong quá khứ để diễn đạt "kể từ đó."'
        },
        examples: [
          {
            jp: '入院以来、彼は健康に気をつけている。',
            romaji: 'Nyūin irai, kare wa kenkō ni ki o tsukete iru.',
            meaning: {
              en: 'Since being hospitalized, he has been careful about his health.',
              vi: 'Kể từ khi nhập viện, anh ấy luôn chú ý đến sức khỏe.'
            }
          },
          {
            jp: 'あの日以来、私の生活はすっかり変わった。',
            romaji: 'Ano hi irai, watashi no seikatsu wa sukkari kawatta.',
            meaning: {
              en: 'Since that day, my life has changed completely.',
              vi: 'Kể từ ngày đó, cuộc sống của tôi đã thay đổi hoàn toàn.'
            }
          }
        ]
      },
      {
        pattern: 'V-て ＋ からというもの',
        title: {
          en: 'Ever since ~ (emphatic) (〜てからというもの)',
          vi: 'Kể từ khi ~ (nhấn mạnh) (〜てからというもの)'
        },
        explanation: {
          en: '〜てからというもの emphasizes a striking, lasting change in behavior or state that began after the event. It is more emotional than て以来.',
          vi: '〜てからというもの nhấn mạnh một thay đổi rõ rệt, kéo dài trong hành vi hay trạng thái bắt đầu sau sự việc. Mang sắc thái cảm xúc hơn て以来.'
        },
        examples: [
          {
            jp: '運動を始めてからというもの、体の調子がとてもいい。',
            romaji: 'Undō o hajimete kara to iu mono, karada no chōshi ga totemo ii.',
            meaning: {
              en: 'Ever since I started exercising, my body has felt great.',
              vi: 'Kể từ khi bắt đầu tập thể dục, cơ thể tôi rất khỏe khoắn.'
            }
          },
          {
            jp: '引っ越してからというもの、外食ばかりしている。',
            romaji: 'Hikkoshite kara to iu mono, gaishoku bakari shite iru.',
            meaning: {
              en: 'Ever since I moved, I have done nothing but eat out.',
              vi: 'Kể từ khi chuyển nhà, tôi toàn ăn ngoài.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Life after moving', vi: 'Cuộc sống sau khi chuyển nhà' },
        lines: [
          {
            jp: 'この町に引っ越して以来、毎日がとても忙しい。',
            romaji: 'Kono machi ni hikkoshite irai, mainichi ga totemo isogashii.',
            meaning: {
              en: 'Ever since moving to this town, every day has been very busy.',
              vi: 'Kể từ khi chuyển đến thị trấn này, ngày nào cũng rất bận.'
            }
          },
          {
            jp: '退院して以来、彼は健康に気をつけるようになった。',
            romaji: 'Taiin shite irai, kare wa kenkō ni ki o tsukeru yō ni natta.',
            meaning: {
              en: 'Since leaving the hospital, he has become careful about his health.',
              vi: 'Kể từ khi xuất viện, anh ấy đã trở nên chú ý đến sức khỏe.'
            }
          },
          {
            jp: '運動を始めてからというもの、私はすっかり元気になった。',
            romaji: 'Undō o hajimete kara to iu mono, watashi wa sukkari genki ni natta.',
            meaning: {
              en: 'Ever since I started exercising, I have become completely healthy.',
              vi: 'Kể từ khi bắt đầu tập thể dục, tôi đã trở nên khỏe hẳn.'
            }
          },
          {
            jp: 'あの日以来、古い友人とまた連絡を取り始めた。',
            romaji: 'Ano hi irai, furui yūjin to mata renraku o tori hajimeta.',
            meaning: {
              en: 'Since that day, I started keeping in touch with an old friend again.',
              vi: 'Kể từ ngày đó, tôi bắt đầu liên lạc lại với một người bạn cũ.'
            }
          },
          {
            jp: '再会して以来、私たちは毎週話している。',
            romaji: 'Saikai shite irai, watashi-tachi wa maishū hanashite iru.',
            meaning: {
              en: 'Ever since our reunion, we talk every week.',
              vi: 'Kể từ khi gặp lại, tuần nào chúng tôi cũng nói chuyện.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How has life been since moving to the town?',
              vi: 'Cuộc sống thế nào kể từ khi chuyển đến thị trấn?'
            },
            choices: [
              { id: 'a', label: { en: 'Very busy', vi: 'Rất bận rộn' } },
              { id: 'b', label: { en: 'Very boring', vi: 'Rất buồn chán' } },
              { id: 'c', label: { en: 'Completely unchanged', vi: 'Hoàn toàn không đổi' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the man start doing since leaving the hospital?',
              vi: 'Người đàn ông bắt đầu làm gì kể từ khi xuất viện?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Being careful about his health', vi: 'Chú ý đến sức khỏe' }
              },
              { id: 'b', label: { en: 'Eating out every day', vi: 'Ngày nào cũng ăn ngoài' } },
              { id: 'c', label: { en: 'Moving house again', vi: 'Chuyển nhà lần nữa' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What happened since the writer started exercising?',
              vi: 'Điều gì xảy ra kể từ khi người viết bắt đầu tập thể dục?'
            },
            choices: [
              { id: 'a', label: { en: 'They became completely healthy', vi: 'Trở nên khỏe hẳn' } },
              { id: 'b', label: { en: 'They got sick', vi: 'Bị ốm' } },
              { id: 'c', label: { en: 'They stopped at once', vi: 'Lập tức bỏ cuộc' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-8',
    number: 8,
    title: {
      en: 'Just When / No Sooner Had',
      vi: 'Vừa mới ... thì đã'
    },
    focus: {
      en: 'Capture sudden, surprising changes with 〜かと思うと／かと思ったら, 〜そばから, and 〜なり.',
      vi: 'Diễn đạt những thay đổi đột ngột, bất ngờ với 〜かと思うと／かと思ったら, 〜そばから, và 〜なり.'
    },
    vocab: [
      { kana: 'おもう', kanji: '思う', romaji: 'omou', meaning: { en: 'to think', vi: 'nghĩ' } },
      {
        kana: 'はれる',
        kanji: '晴れる',
        romaji: 'hareru',
        meaning: { en: 'to clear up (weather)', vi: 'trời quang, hửng nắng' }
      },
      {
        kana: 'くもる',
        kanji: '曇る',
        romaji: 'kumoru',
        meaning: { en: 'to cloud over', vi: 'trời nhiều mây, âm u' }
      },
      { kana: 'きげん', kanji: '機嫌', romaji: 'kigen', meaning: { en: 'mood', vi: 'tâm trạng' } },
      {
        kana: 'いそぐ',
        kanji: '急ぐ',
        romaji: 'isogu',
        meaning: { en: 'to hurry', vi: 'vội, gấp' }
      },
      {
        kana: 'さわぐ',
        kanji: '騒ぐ',
        romaji: 'sawagu',
        meaning: { en: 'to make noise, make a racket', vi: 'làm ồn, gây náo loạn' }
      },
      {
        kana: 'しずまる',
        kanji: '静まる',
        romaji: 'shizumaru',
        meaning: { en: 'to quiet down', vi: 'lặng đi, yên ắng lại' }
      },
      {
        kana: 'ちゅうもん',
        kanji: '注文',
        romaji: 'chūmon',
        meaning: { en: 'order (in a shop)', vi: 'sự gọi món, đặt hàng' }
      },
      {
        kana: 'かたづける',
        kanji: '片付ける',
        romaji: 'katazukeru',
        meaning: { en: 'to tidy up', vi: 'dọn dẹp' }
      },
      {
        kana: 'ちらかす',
        kanji: '散らかす',
        romaji: 'chirakasu',
        meaning: { en: 'to scatter, make a mess', vi: 'làm bừa bộn' }
      },
      {
        kana: 'てんいん',
        kanji: '店員',
        romaji: 'ten\u2019in',
        meaning: { en: 'shop clerk', vi: 'nhân viên cửa hàng' }
      },
      {
        kana: 'だまる',
        kanji: '黙る',
        romaji: 'damaru',
        meaning: { en: 'to fall silent', vi: 'im lặng' }
      }
    ],
    grammar: [
      {
        pattern: 'V-た ＋ かと思うと・かと思ったら',
        title: { en: 'No sooner ~ than (〜かと思うと)', vi: 'Vừa ~ thì đã (〜かと思うと)' },
        explanation: {
          en: 'Added to the past plain form, this expresses surprise that a second, contrasting event happened almost instantly. The speaker observes it, so it is not used for one\u2019s own actions.',
          vi: 'Gắn vào thể quá khứ ngắn, mẫu này diễn đạt sự ngạc nhiên khi một sự việc thứ hai trái ngược xảy ra gần như tức thì. Người nói quan sát nó nên không dùng cho hành động của chính mình.'
        },
        examples: [
          {
            jp: '空が晴れたかと思うと、急に雨が降り出した。',
            romaji: 'Sora ga hareta ka to omou to, kyū ni ame ga furidashita.',
            meaning: {
              en: 'Just when the sky cleared up, it suddenly started to rain.',
              vi: 'Trời vừa hửng nắng thì đột nhiên đổ mưa.'
            }
          },
          {
            jp: '子供は泣いていたかと思ったら、もう笑っていた。',
            romaji: 'Kodomo wa naite ita ka to omottara, mō waratte ita.',
            meaning: {
              en: 'No sooner had the child been crying than it was already laughing.',
              vi: 'Đứa bé vừa còn khóc thì đã cười rồi.'
            }
          }
        ]
      },
      {
        pattern: 'V-る／V-た ＋ そばから',
        title: {
          en: 'No sooner ~ than, repeatedly (〜そばから)',
          vi: 'Cứ vừa ~ là lại (〜そばから)'
        },
        explanation: {
          en: '〜そばから expresses that no matter how many times you do something, the opposite immediately undoes it. It describes a repeated, often frustrating pattern.',
          vi: '〜そばから diễn đạt rằng dù làm bao nhiêu lần, điều ngược lại lập tức phá hỏng ngay. Mẫu mô tả một tình huống lặp đi lặp lại, thường gây bực mình.'
        },
        examples: [
          {
            jp: '片付けるそばから、子供が部屋を散らかす。',
            romaji: 'Katazukeru soba kara, kodomo ga heya o chirakasu.',
            meaning: {
              en: 'No sooner do I tidy up than the child messes up the room again.',
              vi: 'Cứ vừa dọn xong là bọn trẻ lại bày bừa căn phòng.'
            }
          },
          {
            jp: '習ったそばから、忘れてしまう。',
            romaji: 'Naratta soba kara, wasurete shimau.',
            meaning: {
              en: 'I forget things as soon as I learn them.',
              vi: 'Cứ vừa học xong là tôi lại quên ngay.'
            }
          }
        ]
      },
      {
        pattern: 'V-る ＋ なり',
        title: { en: 'The moment ~ (〜なり)', vi: 'Vừa ~ là lập tức (〜なり)' },
        explanation: {
          en: 'なり after the dictionary form means a person did something surprising immediately upon another action. The subject is someone other than the speaker.',
          vi: 'なり sau thể từ điển nghĩa là một người làm điều gì đó bất ngờ ngay khi hành động khác diễn ra. Chủ ngữ là người khác chứ không phải người nói.'
        },
        examples: [
          {
            jp: '彼は部屋に入るなり、大きな声で騒ぎ始めた。',
            romaji: 'Kare wa heya ni hairu nari, ōkina koe de sawagi hajimeta.',
            meaning: {
              en: 'The moment he entered the room, he began making a racket.',
              vi: 'Vừa bước vào phòng là anh ấy lập tức ồn ào lớn tiếng.'
            }
          },
          {
            jp: '母はその知らせを聞くなり、黙ってしまった。',
            romaji: 'Haha wa sono shirase o kiku nari, damatte shimatta.',
            meaning: {
              en: 'The moment my mother heard the news, she fell silent.',
              vi: 'Vừa nghe tin đó là mẹ tôi lập tức im bặt.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A changeable day', vi: 'Một ngày thất thường' },
        lines: [
          {
            jp: '朝は晴れていたかと思うと、昼には急に曇ってきた。',
            romaji: 'Asa wa harete ita ka to omou to, hiru ni wa kyū ni kumotte kita.',
            meaning: {
              en: 'Just when it was sunny in the morning, by noon it suddenly clouded over.',
              vi: 'Buổi sáng trời vừa nắng thì đến trưa lại đột nhiên âm u.'
            }
          },
          {
            jp: '弟は家に帰るなり、自分の部屋に入ってしまった。',
            romaji: 'Otōto wa ie ni kaeru nari, jibun no heya ni haitte shimatta.',
            meaning: {
              en: 'The moment my brother got home, he went straight into his room.',
              vi: 'Vừa về đến nhà là em trai tôi lập tức vào thẳng phòng riêng.'
            }
          },
          {
            jp: '片付けるそばから、また机の上が散らかっていく。',
            romaji: 'Katazukeru soba kara, mata tsukue no ue ga chirakatte iku.',
            meaning: {
              en: 'No sooner do I tidy up than the desk gets messy again.',
              vi: 'Cứ vừa dọn xong là mặt bàn lại bừa bộn ra.'
            }
          },
          {
            jp: '彼女は怒っていたかと思ったら、もう笑っていた。',
            romaji: 'Kanojo wa okotte ita ka to omottara, mō waratte ita.',
            meaning: {
              en: 'No sooner had she been angry than she was already laughing.',
              vi: 'Cô ấy vừa còn giận thì đã cười rồi.'
            }
          },
          {
            jp: '注文を受けるなり、店員は急いで準備を始めた。',
            romaji: 'Chūmon o ukeru nari, ten\u2019in wa isoide junbi o hajimeta.',
            meaning: {
              en: 'The moment the order came in, the clerk hurriedly began preparing.',
              vi: 'Vừa nhận đơn gọi món là nhân viên lập tức vội vàng chuẩn bị.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'How did the weather change?', vi: 'Thời tiết thay đổi thế nào?' },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Sunny in the morning, then suddenly cloudy',
                  vi: 'Sáng nắng rồi đột nhiên âm u'
                }
              },
              { id: 'b', label: { en: 'It rained all day', vi: 'Mưa cả ngày' } },
              { id: 'c', label: { en: 'It stayed clear all day', vi: 'Quang đãng suốt cả ngày' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the brother do the moment he got home?',
              vi: 'Em trai làm gì ngay khi về đến nhà?'
            },
            choices: [
              { id: 'a', label: { en: 'Went straight to his room', vi: 'Vào thẳng phòng riêng' } },
              { id: 'b', label: { en: 'Started cooking', vi: 'Bắt đầu nấu ăn' } },
              { id: 'c', label: { en: 'Made a lot of noise', vi: 'Làm ồn ào' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: {
              en: 'What happens no sooner than the writer tidies up?',
              vi: 'Cứ vừa dọn xong thì điều gì xảy ra?'
            },
            choices: [
              { id: 'a', label: { en: 'The desk gets messy again', vi: 'Mặt bàn lại bừa bộn' } },
              { id: 'b', label: { en: 'It stays perfectly clean', vi: 'Vẫn sạch sẽ hoàn hảo' } },
              {
                id: 'c',
                label: { en: 'The clerk starts cooking', vi: 'Nhân viên bắt đầu nấu ăn' }
              }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
