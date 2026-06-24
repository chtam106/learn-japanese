import type { Lesson } from '../types.ts';

export const n1LessonsA: Lesson[] = [
  {
    id: 'lesson-1',
    number: 1,
    title: {
      en: 'The Instant: 〜や否や / 〜やいなや',
      vi: 'Ngay khoảnh khắc: 〜や否や / 〜やいなや'
    },
    focus: {
      en: 'Express that one action triggers another the very instant it happens, using the literary 〜や否や.',
      vi: 'Diễn đạt một hành động kéo theo hành động khác ngay tức khắc, dùng mẫu văn viết 〜や否や.'
    },
    vocab: [
      {
        kana: 'しらせ',
        kanji: '知らせ',
        romaji: 'shirase',
        meaning: { en: 'news, notice', vi: 'tin tức, thông báo' }
      },
      {
        kana: 'かけつける',
        kanji: '駆けつける',
        romaji: 'kaketsukeru',
        meaning: { en: 'to rush to (a place)', vi: 'vội vã chạy đến' }
      },
      {
        kana: 'とびだす',
        kanji: '飛び出す',
        romaji: 'tobidasu',
        meaning: { en: 'to dash out', vi: 'lao ra, vọt ra' }
      },
      {
        kana: 'ひめい',
        kanji: '悲鳴',
        romaji: 'himei',
        meaning: { en: 'scream, shriek', vi: 'tiếng thét' }
      },
      {
        kana: 'いっせいに',
        kanji: '一斉に',
        romaji: 'isseini',
        meaning: { en: 'all at once', vi: 'đồng loạt' }
      },
      {
        kana: 'ほうどう',
        kanji: '報道',
        romaji: 'hōdō',
        meaning: { en: 'news coverage', vi: 'sự đưa tin' }
      },
      {
        kana: 'さっとう',
        kanji: '殺到',
        romaji: 'sattō',
        meaning: { en: 'a rush, flood (of people)', vi: 'sự đổ xô, ùa tới' }
      },
      {
        kana: 'そくほう',
        kanji: '速報',
        romaji: 'sokuhō',
        meaning: { en: 'breaking news', vi: 'tin nóng, tin khẩn' }
      },
      {
        kana: 'はんのう',
        kanji: '反応',
        romaji: 'hannō',
        meaning: { en: 'reaction, response', vi: 'phản ứng' }
      },
      {
        kana: 'しょうげき',
        kanji: '衝撃',
        romaji: 'shōgeki',
        meaning: { en: 'shock, impact', vi: 'cú sốc, chấn động' }
      },
      {
        kana: 'しゅんかん',
        kanji: '瞬間',
        romaji: 'shunkan',
        meaning: { en: 'moment, instant', vi: 'khoảnh khắc' }
      },
      {
        kana: 'じんそく',
        kanji: '迅速',
        romaji: 'jinsoku',
        meaning: { en: 'swift, prompt', vi: 'nhanh chóng, tức thì' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る や否や',
        title: {
          en: 'As soon as / the instant (literary)',
          vi: 'Ngay khi / ngay tức khắc (văn viết)'
        },
        explanation: {
          en: 'A literary expression: the very instant action A occurs, action B follows. B is a sudden, often unexpected fact in the past, and cannot be a command or invitation.',
          vi: 'Một cách diễn đạt văn viết: ngay khoảnh khắc hành động A xảy ra thì B liền theo sau. B là sự việc bất ngờ ở quá khứ, không dùng được mệnh lệnh hay rủ rê.'
        },
        examples: [
          {
            jp: '知らせを聞くや否や、彼は部屋を飛び出した。',
            romaji: 'Shirase o kiku ya inaya, kare wa heya o tobidashita.',
            meaning: {
              en: 'The instant he heard the news, he dashed out of the room.',
              vi: 'Ngay khi nghe tin, anh ấy lao ra khỏi phòng.'
            }
          },
          {
            jp: 'ベルが鳴るや否や、生徒たちは一斉に教室を出た。',
            romaji: 'Beru ga naru ya inaya, seitotachi wa isseini kyōshitsu o deta.',
            meaning: {
              en: 'The moment the bell rang, the students left the classroom all at once.',
              vi: 'Ngay khi chuông reo, học sinh đồng loạt rời khỏi lớp.'
            }
          }
        ]
      },
      {
        pattern: 'V-る か V-ない かのうちに',
        title: {
          en: 'No sooner than / barely when',
          vi: 'Vừa mới … thì đã'
        },
        explanation: {
          en: 'B happens almost simultaneously with A, before A is fully completed. It stresses near-overlap of the two events.',
          vi: 'B xảy ra gần như đồng thời với A, trước khi A kết thúc hẳn. Nhấn mạnh hai sự việc gần như chồng lên nhau.'
        },
        examples: [
          {
            jp: '電車のドアが閉まるか閉まらないかのうちに、彼は飛び乗った。',
            romaji: 'Densha no doa ga shimaru ka shimaranai ka no uchi ni, kare wa tobinotta.',
            meaning: {
              en: 'He jumped on just as the train doors were closing.',
              vi: 'Anh ấy nhảy lên tàu đúng lúc cửa vừa khép lại.'
            }
          },
          {
            jp: 'ベルが鳴り終わるか終わらないかのうちに、彼女は駆け出した。',
            romaji: 'Beru ga nariowaru ka owaranai ka no uchi ni, kanojo wa kakedashita.',
            meaning: {
              en: 'She started running the moment the bell finished ringing.',
              vi: 'Cô ấy bắt đầu chạy ngay khi tiếng chuông vừa dứt.'
            }
          }
        ]
      },
      {
        pattern: 'V-た が最後',
        title: {
          en: 'Once… then (inevitable result)',
          vi: 'Một khi đã … thì (hệ quả tất yếu)'
        },
        explanation: {
          en: 'Once A happens, an inevitable, usually undesirable B follows and nothing can stop it.',
          vi: 'Một khi A xảy ra thì B (thường tiêu cực) tất yếu xảy đến, không thể nào ngăn lại.'
        },
        examples: [
          {
            jp: '彼は話し始めたが最後、誰も止められない。',
            romaji: 'Kare wa hanashihajimeta ga saigo, dare mo tomerarenai.',
            meaning: {
              en: 'Once he starts talking, no one can stop him.',
              vi: 'Một khi anh ấy bắt đầu nói thì không ai cản được.'
            }
          },
          {
            jp: 'そのボタンを押したが最後、二度と戻れない。',
            romaji: 'Sono botan o oshita ga saigo, nido to modorenai.',
            meaning: {
              en: 'Once you press that button, there is no going back.',
              vi: 'Một khi đã bấm nút đó thì không thể quay lại được nữa.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Breaking news', vi: 'Tin nóng' },
        lines: [
          {
            jp: '速報が流れるや否や、人々はテレビの前に殺到した。',
            romaji: 'Sokuhō ga nagareru ya inaya, hitobito wa terebi no mae ni sattō shita.',
            meaning: {
              en: 'The instant the breaking news aired, people rushed in front of the TV.',
              vi: 'Ngay khi tin nóng được phát, mọi người đổ xô đến trước màn hình TV.'
            }
          },
          {
            jp: '地震の知らせを聞くや否や、彼女は家族に電話をかけた。',
            romaji: 'Jishin no shirase o kiku ya inaya, kanojo wa kazoku ni denwa o kaketa.',
            meaning: {
              en: 'The moment she heard about the earthquake, she called her family.',
              vi: 'Ngay khi nghe tin động đất, cô ấy gọi điện cho gia đình.'
            }
          },
          {
            jp: '揺れが始まるか始まらないかのうちに、私たちは机の下に隠れた。',
            romaji:
              'Yure ga hajimaru ka hajimaranai ka no uchi ni, watashitachi wa tsukue no shita ni kakureta.',
            meaning: {
              en: 'No sooner had the shaking begun than we hid under the desks.',
              vi: 'Rung lắc vừa bắt đầu thì chúng tôi đã nấp xuống gầm bàn.'
            }
          },
          {
            jp: '一度パニックに陥ったが最後、冷静な判断は難しくなる。',
            romaji: 'Ichido panikku ni ochiitta ga saigo, reisei na handan wa muzukashiku naru.',
            meaning: {
              en: 'Once you fall into panic, calm judgment becomes difficult.',
              vi: 'Một khi đã rơi vào hoảng loạn thì khó mà phán đoán bình tĩnh.'
            }
          },
          {
            jp: 'それでも、速報のおかげで多くの人が迅速に反応できた。',
            romaji: 'Soredemo, sokuhō no okage de ōku no hito ga jinsoku ni hannō dekita.',
            meaning: {
              en: 'Even so, thanks to the breaking news many people could react swiftly.',
              vi: 'Dù vậy, nhờ tin nóng mà nhiều người đã phản ứng nhanh chóng.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did people do the instant the breaking news aired?',
              vi: 'Mọi người làm gì ngay khi tin nóng được phát?'
            },
            choices: [
              { id: 'a', label: { en: 'Rushed in front of the TV', vi: 'Đổ xô đến trước TV' } },
              { id: 'b', label: { en: 'Hid under the desks', vi: 'Nấp xuống gầm bàn' } },
              { id: 'c', label: { en: 'Called their families', vi: 'Gọi điện cho gia đình' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What did she do as soon as she heard about the earthquake?',
              vi: 'Cô ấy làm gì ngay khi nghe tin động đất?'
            },
            choices: [
              { id: 'a', label: { en: 'Turned on the TV', vi: 'Bật TV' } },
              { id: 'b', label: { en: 'Called her family', vi: 'Gọi điện cho gia đình' } },
              { id: 'c', label: { en: 'Ran outside', vi: 'Chạy ra ngoài' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: {
      en: 'No Sooner Than: 〜が早いか',
      vi: 'Vừa mới … đã: 〜が早いか'
    },
    focus: {
      en: 'Describe two near-simultaneous actions where B follows A almost the instant it happens, using 〜が早いか.',
      vi: 'Mô tả hai hành động gần như đồng thời, B theo sau A gần như tức khắc, dùng 〜が早いか.'
    },
    vocab: [
      {
        kana: 'あいず',
        kanji: '合図',
        romaji: 'aizu',
        meaning: { en: 'signal, cue', vi: 'tín hiệu, hiệu lệnh' }
      },
      {
        kana: 'とびつく',
        kanji: '飛びつく',
        romaji: 'tobitsuku',
        meaning: { en: 'to pounce on, jump at', vi: 'lao tới, chộp lấy' }
      },
      {
        kana: 'うばいあう',
        kanji: '奪い合う',
        romaji: 'ubaiau',
        meaning: { en: 'to scramble for', vi: 'tranh giành' }
      },
      {
        kana: 'おしよせる',
        kanji: '押し寄せる',
        romaji: 'oshiyoseru',
        meaning: { en: 'to surge in', vi: 'ùa tới, dồn tới' }
      },
      {
        kana: 'ひったくる',
        romaji: 'hittakuru',
        meaning: { en: 'to snatch away', vi: 'giật lấy' }
      },
      {
        kana: 'われさきに',
        kanji: '我先に',
        romaji: 'waresakini',
        meaning: { en: 'each ahead of the others', vi: 'tranh nhau lên trước' }
      },
      {
        kana: 'すばやい',
        kanji: '素早い',
        romaji: 'subayai',
        meaning: { en: 'quick, nimble', vi: 'nhanh nhẹn' }
      },
      {
        kana: 'はんしゃてき',
        kanji: '反射的',
        romaji: 'hanshateki',
        meaning: { en: 'reflexive', vi: 'theo phản xạ' }
      },
      {
        kana: 'かいてん',
        kanji: '開店',
        romaji: 'kaiten',
        meaning: { en: 'store opening', vi: 'sự mở cửa hàng' }
      },
      {
        kana: 'ぎょうれつ',
        kanji: '行列',
        romaji: 'gyōretsu',
        meaning: { en: 'queue, line', vi: 'hàng người, xếp hàng' }
      },
      {
        kana: 'めだましょうひん',
        kanji: '目玉商品',
        romaji: 'medama shōhin',
        meaning: { en: 'featured bargain item', vi: 'mặt hàng khuyến mãi nổi bật' }
      },
      {
        kana: 'ざいこ',
        kanji: '在庫',
        romaji: 'zaiko',
        meaning: { en: 'stock, inventory', vi: 'hàng tồn kho' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る が早いか',
        title: {
          en: 'The moment / no sooner than (literary)',
          vi: 'Ngay khi / vừa … đã (văn viết)'
        },
        explanation: {
          en: 'Literary: the moment A occurs, B occurs almost simultaneously. B is a concrete past fact; the two are nearly at the same instant.',
          vi: 'Văn viết: ngay khoảnh khắc A xảy ra thì B xảy ra gần như đồng thời. B là sự việc cụ thể ở quá khứ, hai việc gần như cùng lúc.'
        },
        examples: [
          {
            jp: '開店のドアが開くが早いか、客は店内になだれ込んだ。',
            romaji: 'Kaiten no doa ga aku ga hayai ka, kyaku wa tennai ni nadarekonda.',
            meaning: {
              en: 'The moment the doors opened, customers poured into the store.',
              vi: 'Ngay khi cửa mở, khách ùa vào trong cửa hàng.'
            }
          },
          {
            jp: '彼は合図を聞くが早いか、走り出した。',
            romaji: 'Kare wa aizu o kiku ga hayai ka, hashiridashita.',
            meaning: {
              en: 'No sooner had he heard the signal than he started running.',
              vi: 'Anh ấy vừa nghe hiệu lệnh đã chạy đi.'
            }
          }
        ]
      },
      {
        pattern: 'V-た とたん(に)',
        title: {
          en: 'Just as / the moment (unexpected)',
          vi: 'Đúng lúc / ngay khi (bất ngờ)'
        },
        explanation: {
          en: 'Just as A happened, B suddenly and unexpectedly occurred. B is beyond the speaker’s control and is in the past.',
          vi: 'Đúng lúc A vừa xảy ra thì B bất ngờ xảy đến. B nằm ngoài tầm kiểm soát và ở quá khứ.'
        },
        examples: [
          {
            jp: 'ドアを開けたとたん、猫が飛び出してきた。',
            romaji: 'Doa o aketa totan, neko ga tobidashite kita.',
            meaning: {
              en: 'The moment I opened the door, a cat darted out.',
              vi: 'Ngay khi tôi mở cửa, một con mèo lao ra.'
            }
          },
          {
            jp: '立ち上がったとたんに、めまいがした。',
            romaji: 'Tachiagatta totan ni, memai ga shita.',
            meaning: {
              en: 'The moment I stood up, I felt dizzy.',
              vi: 'Ngay khi đứng dậy, tôi thấy choáng váng.'
            }
          }
        ]
      },
      {
        pattern: 'V-ます-stem 次第',
        title: {
          en: 'As soon as (formal, then will do)',
          vi: 'Ngay khi (trang trọng, sẽ làm)'
        },
        explanation: {
          en: 'Formal: as soon as A is done, B will be done. Unlike 〜が早いか, B is a future or volitional action.',
          vi: 'Trang trọng: ngay khi A xong thì sẽ làm B. Khác với 〜が早いか, B là hành động tương lai hoặc có ý chí.'
        },
        examples: [
          {
            jp: '詳細が分かり次第、ご連絡いたします。',
            romaji: 'Shōsai ga wakari shidai, gorenraku itashimasu.',
            meaning: {
              en: 'I will contact you as soon as the details become clear.',
              vi: 'Ngay khi có thông tin chi tiết, tôi sẽ liên hệ với quý vị.'
            }
          },
          {
            jp: '準備ができ次第、出発しましょう。',
            romaji: 'Junbi ga deki shidai, shuppatsu shimashō.',
            meaning: {
              en: 'Let’s depart as soon as the preparations are done.',
              vi: 'Ngay khi chuẩn bị xong, chúng ta hãy khởi hành.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A bargain-sale rush', vi: 'Cơn lốc săn hàng giảm giá' },
        lines: [
          {
            jp: '開店時間になるが早いか、客は我先に店内へ押し寄せた。',
            romaji: 'Kaiten jikan ni naru ga hayai ka, kyaku wa waresakini tennai e oshiyoseta.',
            meaning: {
              en: 'The moment opening time came, customers surged inside, each ahead of the others.',
              vi: 'Ngay khi đến giờ mở cửa, khách tranh nhau ùa vào trong cửa hàng.'
            }
          },
          {
            jp: '目玉商品が並ぶ棚に着くが早いか、人々はそれを奪い合った。',
            romaji:
              'Medama shōhin ga narabu tana ni tsuku ga hayai ka, hitobito wa sore o ubaiatta.',
            meaning: {
              en: 'No sooner did they reach the shelf of bargain items than people scrambled for them.',
              vi: 'Vừa đến kệ bày hàng khuyến mãi, mọi người liền tranh giành chúng.'
            }
          },
          {
            jp: '私が手を伸ばしたとたん、商品は別の客に引ったくられた。',
            romaji: 'Watashi ga te o nobashita totan, shōhin wa betsu no kyaku ni hittakurareta.',
            meaning: {
              en: 'The moment I reached out, the item was snatched away by another customer.',
              vi: 'Ngay khi tôi vừa với tay, món hàng đã bị một khách khác giật mất.'
            }
          },
          {
            jp: '店員は「在庫が入り次第、追加します」と叫んだ。',
            romaji: 'Ten’in wa “zaiko ga hairi shidai, tsuika shimasu” to sakenda.',
            meaning: {
              en: 'A clerk shouted, “We will restock as soon as inventory arrives.”',
              vi: 'Nhân viên hét lên: “Ngay khi có hàng về, chúng tôi sẽ bổ sung thêm.”'
            }
          },
          {
            jp: '行列はその後も長く伸び続けた。',
            romaji: 'Gyōretsu wa sono go mo nagaku nobitsuzuketa.',
            meaning: {
              en: 'The queue kept stretching long afterward as well.',
              vi: 'Hàng người sau đó vẫn tiếp tục kéo dài.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happened the moment the store opened?',
              vi: 'Điều gì xảy ra ngay khi cửa hàng mở?'
            },
            choices: [
              { id: 'a', label: { en: 'Customers surged inside', vi: 'Khách ùa vào trong' } },
              { id: 'b', label: { en: 'The clerk shouted', vi: 'Nhân viên hét lên' } },
              { id: 'c', label: { en: 'The queue disappeared', vi: 'Hàng người tan biến' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened the moment the narrator reached out?',
              vi: 'Điều gì xảy ra ngay khi người kể với tay?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The item was snatched by another customer',
                  vi: 'Món hàng bị khách khác giật mất'
                }
              },
              {
                id: 'b',
                label: { en: 'The clerk restocked the shelf', vi: 'Nhân viên bổ sung hàng' }
              },
              { id: 'c', label: { en: 'The store closed', vi: 'Cửa hàng đóng cửa' } }
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
      en: 'Immediately Upon: 〜なり',
      vi: 'Ngay sau khi: 〜なり'
    },
    focus: {
      en: 'Show one person doing B immediately and unexpectedly right after A, using the literary 〜なり.',
      vi: 'Diễn tả một người làm B ngay lập tức và bất ngờ ngay sau A, dùng mẫu văn viết 〜なり.'
    },
    vocab: [
      {
        kana: 'きたく',
        kanji: '帰宅',
        romaji: 'kitaku',
        meaning: { en: 'returning home', vi: 'việc về nhà' }
      },
      {
        kana: 'たおれこむ',
        kanji: '倒れ込む',
        romaji: 'taorekomu',
        meaning: { en: 'to collapse onto', vi: 'gục xuống' }
      },
      {
        kana: 'だまりこむ',
        kanji: '黙り込む',
        romaji: 'damarikomu',
        meaning: { en: 'to fall silent', vi: 'lặng thinh' }
      },
      {
        kana: 'うつむく',
        romaji: 'utsumuku',
        meaning: { en: 'to look down', vi: 'cúi gằm mặt' }
      },
      {
        kana: 'どなる',
        kanji: '怒鳴る',
        romaji: 'donaru',
        meaning: { en: 'to shout, yell', vi: 'quát tháo' }
      },
      {
        kana: 'かおいろ',
        kanji: '顔色',
        romaji: 'kaoiro',
        meaning: { en: 'complexion, look on one’s face', vi: 'sắc mặt' }
      },
      {
        kana: 'たちつくす',
        kanji: '立ち尽くす',
        romaji: 'tachitsukusu',
        meaning: { en: 'to stand frozen, stunned', vi: 'đứng chết lặng' }
      },
      {
        kana: 'ためいき',
        kanji: 'ため息',
        romaji: 'tameiki',
        meaning: { en: 'a sigh', vi: 'tiếng thở dài' }
      },
      {
        kana: 'ひとこと',
        kanji: '一言',
        romaji: 'hitokoto',
        meaning: { en: 'a single word', vi: 'một lời' }
      },
      {
        kana: 'げんかん',
        kanji: '玄関',
        romaji: 'genkan',
        meaning: { en: 'entryway, front door', vi: 'lối vào, cửa chính' }
      },
      {
        kana: 'さっする',
        kanji: '察する',
        romaji: 'sassuru',
        meaning: { en: 'to sense, surmise', vi: 'cảm nhận, đoán ra' }
      },
      {
        kana: 'かたる',
        kanji: '語る',
        romaji: 'kataru',
        meaning: { en: 'to tell, narrate', vi: 'kể, thuật lại' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る なり',
        title: {
          en: 'Immediately upon doing (literary)',
          vi: 'Ngay sau khi làm (văn viết)'
        },
        explanation: {
          en: 'Literary: right after A, the same subject does B at once, often something unexpected. The subject of A and B must be the same, and B is in the past.',
          vi: 'Văn viết: ngay sau A, cùng một chủ thể lập tức làm B, thường là điều bất ngờ. Chủ thể của A và B phải giống nhau và B ở quá khứ.'
        },
        examples: [
          {
            jp: '彼は帰宅するなり、ソファに倒れ込んだ。',
            romaji: 'Kare wa kitaku suru nari, sofa ni taorekonda.',
            meaning: {
              en: 'The moment he got home, he collapsed onto the sofa.',
              vi: 'Ngay khi về đến nhà, anh ấy gục xuống ghế sofa.'
            }
          },
          {
            jp: '母は手紙を読むなり、黙り込んでしまった。',
            romaji: 'Haha wa tegami o yomu nari, damarikonde shimatta.',
            meaning: {
              en: 'The moment my mother read the letter, she fell silent.',
              vi: 'Ngay khi đọc lá thư, mẹ tôi lặng thinh.'
            }
          }
        ]
      },
      {
        pattern: 'V-た きり',
        title: {
          en: '…and that was the last',
          vi: '… rồi thôi (lần cuối)'
        },
        explanation: {
          en: 'After A, the expected following event never occurred; A was the last time it happened.',
          vi: 'Sau A, việc lẽ ra phải tiếp theo đã không xảy ra; A là lần cuối cùng.'
        },
        examples: [
          {
            jp: '彼は朝出かけたきり、戻ってこない。',
            romaji: 'Kare wa asa dekaketa kiri, modotte konai.',
            meaning: {
              en: 'He left in the morning and has not come back.',
              vi: 'Anh ấy đi từ sáng rồi không thấy về.'
            }
          },
          {
            jp: '彼女とは一度会ったきり、連絡がない。',
            romaji: 'Kanojo to wa ichido atta kiri, renraku ga nai.',
            meaning: {
              en: 'I met her just once, and there has been no contact since.',
              vi: 'Tôi chỉ gặp cô ấy một lần rồi bặt tin.'
            }
          }
        ]
      },
      {
        pattern: 'V-た まま',
        title: {
          en: 'Remaining in an unchanged state',
          vi: 'Giữ nguyên trạng thái'
        },
        explanation: {
          en: 'Doing B while remaining in the unchanged state of A.',
          vi: 'Làm B trong khi vẫn giữ nguyên trạng thái A không đổi.'
        },
        examples: [
          {
            jp: '彼は何も言わないまま、部屋を出て行った。',
            romaji: 'Kare wa nani mo iwanai mama, heya o dete itta.',
            meaning: {
              en: 'He left the room without saying anything.',
              vi: 'Anh ấy rời khỏi phòng mà không nói lời nào.'
            }
          },
          {
            jp: '靴を履いたまま、家に上がってはいけない。',
            romaji: 'Kutsu o haita mama, ie ni agatte wa ikenai.',
            meaning: {
              en: 'You must not enter the house with your shoes on.',
              vi: 'Không được đi cả giày vào nhà.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A tense homecoming', vi: 'Buổi trở về căng thẳng' },
        lines: [
          {
            jp: '父は玄関に入るなり、一言も言わずにうつむいた。',
            romaji: 'Chichi wa genkan ni hairu nari, hitokoto mo iwazu ni utsumuita.',
            meaning: {
              en: 'The moment my father stepped inside, he looked down without a single word.',
              vi: 'Ngay khi bước vào cửa, cha tôi cúi gằm mặt không nói một lời.'
            }
          },
          {
            jp: '母はその顔色を見るなり、すべてを察したようだった。',
            romaji: 'Haha wa sono kaoiro o miru nari, subete o sasshita yō datta.',
            meaning: {
              en: 'The moment my mother saw his expression, she seemed to sense everything.',
              vi: 'Ngay khi nhìn sắc mặt ấy, mẹ tôi dường như đã đoán ra tất cả.'
            }
          },
          {
            jp: '父は黙ったまま、ソファに倒れ込んだ。',
            romaji: 'Chichi wa damatta mama, sofa ni taorekonda.',
            meaning: {
              en: 'Still silent, my father collapsed onto the sofa.',
              vi: 'Vẫn lặng thinh, cha tôi gục xuống ghế sofa.'
            }
          },
          {
            jp: '私は何も聞けず、ただ立ち尽くしていた。',
            romaji: 'Watashi wa nani mo kikezu, tada tachitsukushite ita.',
            meaning: {
              en: 'Unable to ask anything, I simply stood there frozen.',
              vi: 'Không hỏi được gì, tôi chỉ đứng chết lặng.'
            }
          },
          {
            jp: '長いため息をついたきり、父はその夜何も語らなかった。',
            romaji: 'Nagai tameiki o tsuita kiri, chichi wa sono yoru nani mo kataranakatta.',
            meaning: {
              en: 'After one long sigh, my father said nothing more that night.',
              vi: 'Sau một tiếng thở dài, đêm đó cha tôi không nói thêm gì nữa.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What did the father do immediately upon entering?',
              vi: 'Cha làm gì ngay khi bước vào?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'Looked down without a word', vi: 'Cúi gằm mặt không nói lời nào' }
              },
              { id: 'b', label: { en: 'Shouted at the family', vi: 'Quát tháo cả nhà' } },
              { id: 'c', label: { en: 'Told the whole story', vi: 'Kể lại toàn bộ câu chuyện' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How did the mother react upon seeing his expression?',
              vi: 'Mẹ phản ứng thế nào khi nhìn sắc mặt ấy?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'She seemed to sense everything', vi: 'Bà dường như đoán ra tất cả' }
              },
              { id: 'b', label: { en: 'She left the house', vi: 'Bà rời khỏi nhà' } },
              { id: 'c', label: { en: 'She started laughing', vi: 'Bà bật cười' } }
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
      en: 'No Sooner Undone: 〜そばから',
      vi: 'Vừa làm đã hỏng: 〜そばから'
    },
    focus: {
      en: 'Express a frustrating, repeated pattern where B undoes A no sooner than A is done, using 〜そばから.',
      vi: 'Diễn đạt một chu kỳ bực bội lặp đi lặp lại, B phá hỏng A ngay sau khi vừa làm xong A, dùng 〜そばから.'
    },
    vocab: [
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
        meaning: { en: 'to scatter, mess up', vi: 'bày bừa' }
      },
      {
        kana: 'おぼえる',
        kanji: '覚える',
        romaji: 'oboeru',
        meaning: { en: 'to memorize', vi: 'ghi nhớ' }
      },
      {
        kana: 'ちゅうい',
        kanji: '注意',
        romaji: 'chūi',
        meaning: { en: 'caution, warning', vi: 'nhắc nhở, lưu ý' }
      },
      {
        kana: 'くりかえす',
        kanji: '繰り返す',
        romaji: 'kurikaesu',
        meaning: { en: 'to repeat', vi: 'lặp lại' }
      },
      {
        kana: 'かせぐ',
        kanji: '稼ぐ',
        romaji: 'kasegu',
        meaning: { en: 'to earn (money)', vi: 'kiếm tiền' }
      },
      {
        kana: 'ろうひ',
        kanji: '浪費',
        romaji: 'rōhi',
        meaning: { en: 'waste, squandering', vi: 'sự lãng phí' }
      },
      {
        kana: 'しゅうせい',
        kanji: '修正',
        romaji: 'shūsei',
        meaning: { en: 'correction, fix', vi: 'sự sửa, hiệu chỉnh' }
      },
      {
        kana: 'ふぐあい',
        kanji: '不具合',
        romaji: 'fuguai',
        meaning: { en: 'glitch, defect', vi: 'lỗi, trục trặc' }
      },
      {
        kana: 'いたちごっこ',
        romaji: 'itachigokko',
        meaning: { en: 'an endless vicious circle', vi: 'vòng luẩn quẩn' }
      },
      {
        kana: 'じょうたつ',
        kanji: '上達',
        romaji: 'jōtatsu',
        meaning: { en: 'improvement (of skill)', vi: 'sự tiến bộ' }
      },
      {
        kana: 'さぎょう',
        kanji: '作業',
        romaji: 'sagyō',
        meaning: { en: 'work, task', vi: 'công việc, thao tác' }
      }
    ],
    grammar: [
      {
        pattern: 'V-る／V-た そばから',
        title: {
          en: 'No sooner… than (repeatedly undone)',
          vi: 'Vừa … đã (lặp lại, bị phá ngay)'
        },
        explanation: {
          en: 'As soon as A is done, B undoes it; describes a repeated, frustrating cycle that keeps happening.',
          vi: 'Vừa làm xong A thì B liền phá hỏng; mô tả một chu kỳ bực bội lặp đi lặp lại.'
        },
        examples: [
          {
            jp: '片付けるそばから、子供が部屋を散らかす。',
            romaji: 'Katazukeru soba kara, kodomo ga heya o chirakasu.',
            meaning: {
              en: 'No sooner do I tidy up than the children mess up the room again.',
              vi: 'Tôi vừa dọn xong thì bọn trẻ lại bày bừa căn phòng.'
            }
          },
          {
            jp: '覚えるそばから忘れてしまうので、困っている。',
            romaji: 'Oboeru soba kara wasurete shimau node, komatte iru.',
            meaning: {
              en: 'I forget things no sooner than I memorize them, so I am at a loss.',
              vi: 'Vừa học thuộc đã quên ngay nên tôi rất khổ sở.'
            }
          }
        ]
      },
      {
        pattern: 'V-ます-stem つつ(も)',
        title: {
          en: 'While / even though (literary)',
          vi: 'Vừa … vừa / dù rằng (văn viết)'
        },
        explanation: {
          en: 'つつ means “while doing” (literary); つつも means “even though / despite,” showing a contradiction.',
          vi: 'つつ nghĩa là “vừa … vừa” (văn viết); つつも nghĩa là “dù rằng”, thể hiện sự mâu thuẫn.'
        },
        examples: [
          {
            jp: '体に悪いと知りつつも、彼はたばこをやめられない。',
            romaji: 'Karada ni warui to shiritsutsu mo, kare wa tabako o yamerarenai.',
            meaning: {
              en: 'Even though he knows it is bad for his health, he cannot quit smoking.',
              vi: 'Dù biết có hại cho sức khỏe, anh ấy vẫn không bỏ được thuốc lá.'
            }
          },
          {
            jp: '失敗を繰り返しつつ、彼は少しずつ上達した。',
            romaji: 'Shippai o kurikaeshitsutsu, kare wa sukoshi zutsu jōtatsu shita.',
            meaning: {
              en: 'While repeating failures, he gradually improved.',
              vi: 'Vừa liên tục thất bại, anh ấy vừa dần dần tiến bộ.'
            }
          }
        ]
      },
      {
        pattern: 'V-て は',
        title: {
          en: 'Repeating a cycle of actions',
          vi: 'Lặp lại một chu kỳ hành động'
        },
        explanation: {
          en: 'Describes a repeated back-and-forth cycle of A and then B.',
          vi: 'Mô tả một chu kỳ lặp đi lặp lại giữa A rồi B.'
        },
        examples: [
          {
            jp: '直しては不具合が出て、まるでいたちごっこだ。',
            romaji: 'Naoshite wa fuguai ga dete, marude itachigokko da.',
            meaning: {
              en: 'I fix it, a glitch appears, and on it goes - it is a vicious circle.',
              vi: 'Cứ sửa xong lại phát sinh lỗi, đúng là vòng luẩn quẩn.'
            }
          },
          {
            jp: '稼いでは浪費するので、お金が貯まらない。',
            romaji: 'Kaide wa rōhi suru node, okane ga tamaranai.',
            meaning: {
              en: 'I earn and then squander it, so I never save any money.',
              vi: 'Kiếm được lại tiêu hoang nên chẳng dành dụm được tiền.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'An endless debugging cycle', vi: 'Vòng lặp sửa lỗi bất tận' },
        lines: [
          {
            jp: 'このプログラムは、修正するそばから新しい不具合が出てくる。',
            romaji: 'Kono puroguramu wa, shūsei suru soba kara atarashii fuguai ga dete kuru.',
            meaning: {
              en: 'With this program, new glitches appear no sooner than I fix it.',
              vi: 'Chương trình này vừa sửa xong là lại xuất hiện lỗi mới.'
            }
          },
          {
            jp: 'バグを直しては、また別のバグが現れる。',
            romaji: 'Bagu o naoshite wa, mata betsu no bagu ga arawareru.',
            meaning: {
              en: 'I fix a bug, and then yet another bug shows up.',
              vi: 'Cứ sửa lỗi này thì lại có lỗi khác hiện ra.'
            }
          },
          {
            jp: 'もう無理だと思いつつも、私は作業を続けた。',
            romaji: 'Mō muri da to omoitsutsu mo, watashi wa sagyō o tsuzuketa.',
            meaning: {
              en: 'Even while thinking it was hopeless, I kept working.',
              vi: 'Dù nghĩ rằng vô vọng, tôi vẫn tiếp tục công việc.'
            }
          },
          {
            jp: 'メモを取らなければ、覚えるそばから忘れてしまう。',
            romaji: 'Memo o toranakereba, oboeru soba kara wasurete shimau.',
            meaning: {
              en: 'If I do not take notes, I forget things no sooner than I learn them.',
              vi: 'Nếu không ghi chú, tôi vừa học đã quên ngay.'
            }
          },
          {
            jp: 'この終わりのない作業は、まさにいたちごっこだった。',
            romaji: 'Kono owari no nai sagyō wa, masa ni itachigokko datta.',
            meaning: {
              en: 'This endless task was truly a vicious circle.',
              vi: 'Công việc bất tận này quả thực là một vòng luẩn quẩn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What happens when the program is fixed?',
              vi: 'Điều gì xảy ra khi chương trình được sửa?'
            },
            choices: [
              { id: 'a', label: { en: 'New glitches appear', vi: 'Lỗi mới lại xuất hiện' } },
              {
                id: 'b',
                label: { en: 'The work finally ends', vi: 'Công việc cuối cùng kết thúc' }
              },
              { id: 'c', label: { en: 'All bugs disappear', vi: 'Mọi lỗi biến mất' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'Why does the narrator take notes?',
              vi: 'Vì sao người kể ghi chú?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'They forget no sooner than they memorize',
                  vi: 'Vì vừa học đã quên ngay'
                }
              },
              { id: 'b', label: { en: 'They enjoy writing', vi: 'Vì thích viết lách' } },
              { id: 'c', label: { en: 'The boss ordered it', vi: 'Vì sếp yêu cầu' } }
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
      en: 'Starting From: 〜を皮切りに',
      vi: 'Bắt đầu từ: 〜を皮切りに'
    },
    focus: {
      en: 'Mark an event as the starting point that sets off a spreading series, using 〜を皮切りに(して).',
      vi: 'Đánh dấu một sự kiện là điểm khởi đầu mở ra một loạt sự việc lan rộng, dùng 〜を皮切りに(して).'
    },
    vocab: [
      {
        kana: 'かわきり',
        kanji: '皮切り',
        romaji: 'kawakiri',
        meaning: { en: 'the start, opening', vi: 'sự khởi đầu' }
      },
      {
        kana: 'こうえん',
        kanji: '公演',
        romaji: 'kōen',
        meaning: { en: 'performance, show', vi: 'buổi biểu diễn' }
      },
      {
        kana: 'ぜんこく',
        kanji: '全国',
        romaji: 'zenkoku',
        meaning: { en: 'the whole country', vi: 'toàn quốc' }
      },
      {
        kana: 'あいつぐ',
        kanji: '相次ぐ',
        romaji: 'aitsugu',
        meaning: { en: 'to occur one after another', vi: 'nối tiếp nhau' }
      },
      {
        kana: 'ほったん',
        kanji: '発端',
        romaji: 'hottan',
        meaning: { en: 'origin, onset', vi: 'khởi nguồn' }
      },
      {
        kana: 'しんしゅつ',
        kanji: '進出',
        romaji: 'shinshutsu',
        meaning: { en: 'advance, expansion into', vi: 'sự tiến vào, mở rộng' }
      },
      {
        kana: 'かくだい',
        kanji: '拡大',
        romaji: 'kakudai',
        meaning: { en: 'expansion', vi: 'sự mở rộng' }
      },
      {
        kana: 'こうぎ',
        kanji: '抗議',
        romaji: 'kōgi',
        meaning: { en: 'protest', vi: 'sự phản đối' }
      },
      {
        kana: 'かくち',
        kanji: '各地',
        romaji: 'kakuchi',
        meaning: { en: 'various places', vi: 'khắp các nơi' }
      },
      {
        kana: 'かいさい',
        kanji: '開催',
        romaji: 'kaisai',
        meaning: { en: 'holding (an event)', vi: 'việc tổ chức (sự kiện)' }
      },
      {
        kana: 'れんさ',
        kanji: '連鎖',
        romaji: 'rensa',
        meaning: { en: 'chain, linkage', vi: 'chuỗi, sự liên hoàn' }
      },
      {
        kana: 'はつげん',
        kanji: '発言',
        romaji: 'hatsugen',
        meaning: { en: 'a remark, statement', vi: 'phát ngôn' }
      }
    ],
    grammar: [
      {
        pattern: 'N を皮切りに(して)',
        title: {
          en: 'Starting with / beginning from',
          vi: 'Mở màn bằng / bắt đầu từ'
        },
        explanation: {
          en: 'With A as the starting point, a series of similar things follow and spread. The tone is neutral or positive expansion.',
          vi: 'Lấy A làm điểm khởi đầu, một loạt sự việc tương tự nối tiếp và lan rộng. Sắc thái trung tính hoặc mở rộng tích cực.'
        },
        examples: [
          {
            jp: '東京公演を皮切りに、全国ツアーが始まった。',
            romaji: 'Tōkyō kōen o kawakiri ni, zenkoku tsuā ga hajimatta.',
            meaning: {
              en: 'Starting with the Tokyo show, a nationwide tour began.',
              vi: 'Mở màn bằng buổi diễn ở Tokyo, chuyến lưu diễn toàn quốc bắt đầu.'
            }
          },
          {
            jp: '一人の発言を皮切りにして、抗議は各地へ広がった。',
            romaji: 'Hitori no hatsugen o kawakiri ni shite, kōgi wa kakuchi e hirogatta.',
            meaning: {
              en: 'Beginning with one person’s remark, the protest spread to many places.',
              vi: 'Bắt đầu từ phát ngôn của một người, làn sóng phản đối lan ra khắp nơi.'
            }
          }
        ]
      },
      {
        pattern: 'N をはじめ(として)',
        title: {
          en: 'Starting with / including (as a prime example)',
          vi: 'Tiêu biểu là / bao gồm cả'
        },
        explanation: {
          en: 'A is given as the foremost example, and other similar things are included alongside it.',
          vi: 'A được nêu làm ví dụ tiêu biểu nhất, và những thứ tương tự khác cũng được kể đến cùng.'
        },
        examples: [
          {
            jp: '社長をはじめ、全社員が式に出席した。',
            romaji: 'Shachō o hajime, zen-shain ga shiki ni shusseki shita.',
            meaning: {
              en: 'Starting with the president, all employees attended the ceremony.',
              vi: 'Tiêu biểu là giám đốc, toàn bộ nhân viên đã dự lễ.'
            }
          },
          {
            jp: 'この店は寿司をはじめとして、和食が充実している。',
            romaji: 'Kono mise wa sushi o hajime to shite, washoku ga jūjitsu shite iru.',
            meaning: {
              en: 'This restaurant has a rich Japanese menu, beginning with sushi.',
              vi: 'Quán này có thực đơn món Nhật phong phú, tiêu biểu là sushi.'
            }
          }
        ]
      },
      {
        pattern: 'N を機に(して)',
        title: {
          en: 'Taking the opportunity of',
          vi: 'Nhân dịp / lấy làm bước ngoặt'
        },
        explanation: {
          en: 'Using event A as a turning point or opportunity to begin doing B.',
          vi: 'Lấy sự kiện A làm bước ngoặt hoặc cơ hội để bắt đầu làm B.'
        },
        examples: [
          {
            jp: '結婚を機に、彼は仕事を変えた。',
            romaji: 'Kekkon o ki ni, kare wa shigoto o kaeta.',
            meaning: {
              en: 'Taking marriage as an opportunity, he changed jobs.',
              vi: 'Nhân dịp kết hôn, anh ấy đã đổi việc.'
            }
          },
          {
            jp: '入院を機にして、たばこをやめることにした。',
            romaji: 'Nyūin o ki ni shite, tabako o yameru koto ni shita.',
            meaning: {
              en: 'I decided to quit smoking, using my hospitalization as a turning point.',
              vi: 'Lấy việc nhập viện làm bước ngoặt, tôi quyết định bỏ thuốc lá.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A band goes nationwide', vi: 'Một ban nhạc vươn ra toàn quốc' },
        lines: [
          {
            jp: 'そのバンドは、大阪での小さな公演を皮切りに人気を集めた。',
            romaji: 'Sono bando wa, Ōsaka de no chiisana kōen o kawakiri ni ninki o atsumeta.',
            meaning: {
              en: 'Starting with a small show in Osaka, the band gained popularity.',
              vi: 'Mở màn bằng buổi diễn nhỏ ở Osaka, ban nhạc dần nổi tiếng.'
            }
          },
          {
            jp: '最初のライブを発端として、出演依頼が相次いだ。',
            romaji: 'Saisho no raibu o hottan to shite, shutsuen irai ga aitsuida.',
            meaning: {
              en: 'With that first live show as the starting point, performance offers came one after another.',
              vi: 'Lấy buổi diễn đầu tiên làm khởi nguồn, lời mời biểu diễn nối tiếp nhau.'
            }
          },
          {
            jp: 'デビュー曲のヒットを機に、彼らは海外進出を決めた。',
            romaji: 'Debyū kyoku no hitto o ki ni, karera wa kaigai shinshutsu o kimeta.',
            meaning: {
              en: 'Taking the hit of their debut song as a turning point, they decided to expand overseas.',
              vi: 'Nhân dịp ca khúc đầu tay nổi đình đám, họ quyết định tiến ra nước ngoài.'
            }
          },
          {
            jp: 'アジア各地での開催をはじめ、活動は世界へと拡大した。',
            romaji: 'Ajia kakuchi de no kaisai o hajime, katsudō wa sekai e to kakudai shita.',
            meaning: {
              en: 'Starting with shows across Asia, their activities expanded to the world.',
              vi: 'Tiêu biểu là các buổi diễn khắp châu Á, hoạt động của họ mở rộng ra thế giới.'
            }
          },
          {
            jp: '一つの公演が、大きな連鎖を生んだのである。',
            romaji: 'Hitotsu no kōen ga, ōkina rensa o unda no de aru.',
            meaning: {
              en: 'A single performance gave rise to a great chain of events.',
              vi: 'Một buổi diễn đã làm nảy sinh cả một chuỗi sự kiện lớn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What marked the start of the band’s popularity?',
              vi: 'Điều gì đánh dấu sự khởi đầu cho danh tiếng của ban nhạc?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'A small show in Osaka', vi: 'Một buổi diễn nhỏ ở Osaka' }
              },
              { id: 'b', label: { en: 'An overseas tour', vi: 'Một chuyến lưu diễn nước ngoài' } },
              { id: 'c', label: { en: 'A TV interview', vi: 'Một buổi phỏng vấn trên TV' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What prompted them to expand overseas?',
              vi: 'Điều gì thúc đẩy họ tiến ra nước ngoài?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'The hit of their debut song',
                  vi: 'Sự nổi đình đám của ca khúc đầu tay'
                }
              },
              { id: 'b', label: { en: 'A fan’s protest', vi: 'Lời phản đối của fan' } },
              { id: 'c', label: { en: 'The president’s order', vi: 'Mệnh lệnh của giám đốc' } }
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
      en: 'As Of: 〜を限りに',
      vi: 'Tính đến: 〜を限りに'
    },
    focus: {
      en: 'State that something ceases as of a particular time, using 〜を限りに and related formal endings.',
      vi: 'Diễn đạt một việc chấm dứt tính từ một thời điểm nhất định, dùng 〜を限りに và các mẫu kết thúc trang trọng.'
    },
    vocab: [
      {
        kana: 'いんたい',
        kanji: '引退',
        romaji: 'intai',
        meaning: { en: 'retirement (from a career)', vi: 'sự giải nghệ' }
      },
      {
        kana: 'へいてん',
        kanji: '閉店',
        romaji: 'heiten',
        meaning: { en: 'closing of a store', vi: 'việc đóng cửa hàng' }
      },
      {
        kana: 'はいし',
        kanji: '廃止',
        romaji: 'haishi',
        meaning: { en: 'abolition', vi: 'sự bãi bỏ' }
      },
      {
        kana: 'えいぎょう',
        kanji: '営業',
        romaji: 'eigyō',
        meaning: { en: 'business operation', vi: 'việc kinh doanh' }
      },
      {
        kana: 'くぎり',
        kanji: '区切り',
        romaji: 'kugiri',
        meaning: { en: 'a turning point, break', vi: 'mốc kết thúc, điểm dừng' }
      },
      {
        kana: 'げんえき',
        kanji: '現役',
        romaji: 'gen’eki',
        meaning: { en: 'active service / career', vi: 'sự nghiệp đang thi đấu' }
      },
      {
        kana: 'さいしゅうせん',
        kanji: '最終戦',
        romaji: 'saishūsen',
        meaning: { en: 'the final match', vi: 'trận đấu cuối cùng' }
      },
      {
        kana: 'しりぞく',
        kanji: '退く',
        romaji: 'shirizoku',
        meaning: { en: 'to step down, retire', vi: 'rút lui, thoái lui' }
      },
      {
        kana: 'なごり',
        kanji: '名残',
        romaji: 'nagori',
        meaning: { en: 'lingering attachment', vi: 'sự lưu luyến' }
      },
      {
        kana: 'くい',
        kanji: '悔い',
        romaji: 'kui',
        meaning: { en: 'regret', vi: 'sự hối tiếc' }
      },
      {
        kana: 'けつい',
        kanji: '決意',
        romaji: 'ketsui',
        meaning: { en: 'determination, resolve', vi: 'sự quyết tâm' }
      },
      {
        kana: 'しゅうりょう',
        kanji: '終了',
        romaji: 'shūryō',
        meaning: { en: 'end, termination', vi: 'sự kết thúc' }
      }
    ],
    grammar: [
      {
        pattern: 'N を限りに',
        title: {
          en: 'As of / ending with (from now on)',
          vi: 'Kể từ / chấm dứt vào (từ nay)'
        },
        explanation: {
          en: 'A specific time A is the limit; after it, something stops. Often used for retirement, store closings, or quitting a habit.',
          vi: 'Thời điểm A là giới hạn; sau đó một việc gì sẽ chấm dứt. Thường dùng cho giải nghệ, đóng cửa hàng hay từ bỏ thói quen.'
        },
        examples: [
          {
            jp: '本日を限りに、当店は閉店いたします。',
            romaji: 'Honjitsu o kagiri ni, tōten wa heiten itashimasu.',
            meaning: {
              en: 'As of today, our store will close for good.',
              vi: 'Kể từ hôm nay, cửa hàng chúng tôi sẽ đóng cửa.'
            }
          },
          {
            jp: '彼は今シーズンを限りに引退すると発表した。',
            romaji: 'Kare wa kon-shīzun o kagiri ni intai suru to happyō shita.',
            meaning: {
              en: 'He announced that he will retire as of the end of this season.',
              vi: 'Anh ấy tuyên bố sẽ giải nghệ tính đến hết mùa giải này.'
            }
          }
        ]
      },
      {
        pattern: 'N をもって',
        title: {
          en: 'As of / by means of (formal)',
          vi: 'Tính từ / bằng (trang trọng)'
        },
        explanation: {
          en: 'A formal expression marking a time of ending or starting, or a means by which something is done.',
          vi: 'Cách nói trang trọng đánh dấu thời điểm kết thúc hay bắt đầu, hoặc phương tiện để thực hiện việc gì.'
        },
        examples: [
          {
            jp: '来月末をもって、サービスを終了いたします。',
            romaji: 'Raigetsumatsu o motte, sābisu o shūryō itashimasu.',
            meaning: {
              en: 'We will terminate the service as of the end of next month.',
              vi: 'Chúng tôi sẽ chấm dứt dịch vụ tính từ cuối tháng sau.'
            }
          },
          {
            jp: '書面をもって、ご通知申し上げます。',
            romaji: 'Shomen o motte, gotsūchi mōshiagemasu.',
            meaning: {
              en: 'We hereby notify you in writing.',
              vi: 'Chúng tôi xin thông báo bằng văn bản.'
            }
          }
        ]
      },
      {
        pattern: 'V-る ことなく',
        title: {
          en: 'Without ever doing (literary)',
          vi: 'Mà không hề (văn viết)'
        },
        explanation: {
          en: 'B occurs without A ever happening; a literary way to say “without.”',
          vi: 'B xảy ra mà A không hề xảy ra; cách nói “mà không” theo văn viết.'
        },
        examples: [
          {
            jp: '彼は一度も休むことなく、働き続けた。',
            romaji: 'Kare wa ichido mo yasumu koto naku, hatarakitsuzuketa.',
            meaning: {
              en: 'He kept working without ever taking a single break.',
              vi: 'Anh ấy làm việc liên tục mà không hề nghỉ một lần nào.'
            }
          },
          {
            jp: '初心を忘れることなく、努力を重ねたい。',
            romaji: 'Shoshin o wasureru koto naku, doryoku o kasanetai.',
            meaning: {
              en: 'I want to keep striving without ever forgetting my original resolve.',
              vi: 'Tôi muốn nỗ lực không ngừng mà không quên đi tâm niệm ban đầu.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: {
          en: 'A veteran athlete’s farewell',
          vi: 'Lời chia tay của một vận động viên kỳ cựu'
        },
        lines: [
          {
            jp: '私は今シーズンを限りに、現役を退くことを決意しました。',
            romaji:
              'Watashi wa kon-shīzun o kagiri ni, gen’eki o shirizoku koto o ketsui shimashita.',
            meaning: {
              en: 'I have resolved to step down from active play as of this season.',
              vi: 'Tôi đã quyết tâm rút lui khỏi sự nghiệp thi đấu tính đến hết mùa này.'
            }
          },
          {
            jp: '長い間、一度も大きな怪我をすることなく続けてこられました。',
            romaji: 'Nagai aida, ichido mo ōkina kega o suru koto naku tsuzukete koraremashita.',
            meaning: {
              en: 'For many years, I was able to keep going without ever suffering a major injury.',
              vi: 'Suốt thời gian dài, tôi đã có thể tiếp tục mà không hề gặp chấn thương nặng nào.'
            }
          },
          {
            jp: '最終戦をもって、これまでの区切りとしたいと思います。',
            romaji: 'Saishūsen o motte, kore made no kugiri to shitai to omoimasu.',
            meaning: {
              en: 'With the final match, I would like to mark the close of my journey so far.',
              vi: 'Với trận đấu cuối cùng, tôi muốn lấy đó làm mốc khép lại chặng đường đã qua.'
            }
          },
          {
            jp: 'ファンの皆様への名残は尽きませんが、悔いはありません。',
            romaji: 'Fan no minasama e no nagori wa tsukimasen ga, kui wa arimasen.',
            meaning: {
              en: 'My attachment to all the fans is endless, but I have no regrets.',
              vi: 'Sự lưu luyến với người hâm mộ là vô tận, nhưng tôi không hề hối tiếc.'
            }
          },
          {
            jp: '今日を限りにユニフォームを脱ぎますが、心は変わりません。',
            romaji: 'Kyō o kagiri ni yunifōmu o nugimasu ga, kokoro wa kawarimasen.',
            meaning: {
              en: 'As of today I take off the uniform, but my heart will not change.',
              vi: 'Kể từ hôm nay tôi cởi bỏ chiếc áo đấu, nhưng trái tim tôi không đổi thay.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'As of when will the athlete retire?',
              vi: 'Vận động viên sẽ giải nghệ tính đến khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'The end of this season', vi: 'Hết mùa giải này' } },
              { id: 'b', label: { en: 'The end of next year', vi: 'Cuối năm sau' } },
              { id: 'c', label: { en: 'After a major injury', vi: 'Sau một chấn thương nặng' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the speaker say about injuries?',
              vi: 'Người nói nói gì về chấn thương?'
            },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'He never had a major injury',
                  vi: 'Anh ấy chưa từng gặp chấn thương nặng'
                }
              },
              {
                id: 'b',
                label: { en: 'He retired due to injury', vi: 'Anh ấy giải nghệ vì chấn thương' }
              },
              {
                id: 'c',
                label: { en: 'He is injured now', vi: 'Hiện anh ấy đang bị chấn thương' }
              }
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
      en: 'In Such a Situation: 〜にあって',
      vi: 'Trong hoàn cảnh: 〜にあって'
    },
    focus: {
      en: 'Frame a statement within a special time, place, or circumstance, using the literary 〜にあって(は).',
      vi: 'Đặt một nhận định trong bối cảnh thời gian, nơi chốn hay hoàn cảnh đặc biệt, dùng mẫu văn viết 〜にあって(は).'
    },
    vocab: [
      {
        kana: 'ひじょうじ',
        kanji: '非常時',
        romaji: 'hijōji',
        meaning: { en: 'a time of emergency', vi: 'thời khắc khẩn cấp' }
      },
      {
        kana: 'ぎゃっきょう',
        kanji: '逆境',
        romaji: 'gyakkyō',
        meaning: { en: 'adversity', vi: 'nghịch cảnh' }
      },
      {
        kana: 'じょうせい',
        kanji: '情勢',
        romaji: 'jōsei',
        meaning: { en: 'situation, conditions', vi: 'tình hình' }
      },
      {
        kana: 'ふきょう',
        kanji: '不況',
        romaji: 'fukyō',
        meaning: { en: 'recession', vi: 'suy thoái kinh tế' }
      },
      {
        kana: 'へいじ',
        kanji: '平時',
        romaji: 'heiji',
        meaning: { en: 'ordinary times', vi: 'thời bình, lúc bình thường' }
      },
      {
        kana: 'れいせい',
        kanji: '冷静',
        romaji: 'reisei',
        meaning: { en: 'composure, calm', vi: 'sự bình tĩnh' }
      },
      {
        kana: 'しどうしゃ',
        kanji: '指導者',
        romaji: 'shidōsha',
        meaning: { en: 'leader', vi: 'người lãnh đạo' }
      },
      {
        kana: 'きょくめん',
        kanji: '局面',
        romaji: 'kyokumen',
        meaning: { en: 'phase, juncture', vi: 'cục diện' }
      },
      {
        kana: 'しんか',
        kanji: '真価',
        romaji: 'shinka',
        meaning: { en: 'true worth', vi: 'giá trị thực' }
      },
      {
        kana: 'ゆるぎない',
        kanji: '揺るぎない',
        romaji: 'yuruginai',
        meaning: { en: 'unshakable', vi: 'không lay chuyển' }
      },
      {
        kana: 'きわだつ',
        kanji: '際立つ',
        romaji: 'kiwadatsu',
        meaning: { en: 'to stand out', vi: 'nổi bật' }
      },
      {
        kana: 'なんもん',
        kanji: '難問',
        romaji: 'nanmon',
        meaning: { en: 'a difficult problem', vi: 'bài toán khó' }
      }
    ],
    grammar: [
      {
        pattern: 'N にあって(は)',
        title: {
          en: 'In / under (a special situation)',
          vi: 'Trong / dưới (hoàn cảnh đặc biệt)'
        },
        explanation: {
          en: 'Literary: “in (such) a time/place/situation,” often an extreme or special one. With も it means “even in.”',
          vi: 'Văn viết: “trong (một) thời điểm/nơi chốn/hoàn cảnh”, thường là đặc biệt hay khắc nghiệt. Đi với も nghĩa là “ngay cả trong”.'
        },
        examples: [
          {
            jp: '非常時にあって、指導者の冷静な判断が求められる。',
            romaji: 'Hijōji ni atte, shidōsha no reisei na handan ga motomerareru.',
            meaning: {
              en: 'In a time of emergency, calm judgment from a leader is required.',
              vi: 'Trong thời khắc khẩn cấp, người lãnh đạo cần có phán đoán bình tĩnh.'
            }
          },
          {
            jp: 'どんな逆境にあっても、彼は希望を失わなかった。',
            romaji: 'Donna gyakkyō ni atte mo, kare wa kibō o ushinawanakatta.',
            meaning: {
              en: 'Even in any adversity, he never lost hope.',
              vi: 'Dù ở trong bất cứ nghịch cảnh nào, anh ấy cũng không đánh mất hy vọng.'
            }
          }
        ]
      },
      {
        pattern: 'N において(は)',
        title: {
          en: 'In / at / regarding (formal)',
          vi: 'Tại / ở / về (trang trọng)'
        },
        explanation: {
          en: 'A formal marker of place, time, or domain, meaning “in / at / regarding.”',
          vi: 'Dấu hiệu trang trọng chỉ nơi chốn, thời gian hay phạm vi, nghĩa là “tại / ở / về”.'
        },
        examples: [
          {
            jp: '現代社会において、情報の管理は重要な課題だ。',
            romaji: 'Gendai shakai ni oite, jōhō no kanri wa jūyō na kadai da.',
            meaning: {
              en: 'In modern society, the management of information is an important issue.',
              vi: 'Trong xã hội hiện đại, việc quản lý thông tin là vấn đề quan trọng.'
            }
          },
          {
            jp: '会議は本館において行われる。',
            romaji: 'Kaigi wa honkan ni oite okonawareru.',
            meaning: {
              en: 'The meeting will be held in the main building.',
              vi: 'Cuộc họp sẽ được tổ chức tại tòa nhà chính.'
            }
          }
        ]
      },
      {
        pattern: 'N にして',
        title: {
          en: 'Even / only at (such a level)',
          vi: 'Đến cả / chỉ ở (mức độ đó)'
        },
        explanation: {
          en: 'Emphasizes a special degree or stage: “even at,” or “only because someone is of that level.”',
          vi: 'Nhấn mạnh một mức độ hay giai đoạn đặc biệt: “đến cả”, hoặc “chỉ vì là người ở tầm đó”.'
        },
        examples: [
          {
            jp: 'この難問は、専門家にして初めて解ける。',
            romaji: 'Kono nanmon wa, senmonka ni shite hajimete tokeru.',
            meaning: {
              en: 'This difficult problem can be solved only by an expert.',
              vi: 'Bài toán khó này chỉ có chuyên gia mới giải được.'
            }
          },
          {
            jp: '五十歳にして、彼は新たな挑戦を始めた。',
            romaji: 'Gojussai ni shite, kare wa arata na chōsen o hajimeta.',
            meaning: {
              en: 'At the age of fifty, he began a new challenge.',
              vi: 'Đến tuổi năm mươi, ông ấy bắt đầu một thử thách mới.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Leadership in a crisis', vi: 'Khả năng lãnh đạo trong khủng hoảng' },
        lines: [
          {
            jp: '深刻な不況にあって、その経営者は冷静さを失わなかった。',
            romaji: 'Shinkoku na fukyō ni atte, sono keieisha wa reiseisa o ushinawanakatta.',
            meaning: {
              en: 'In the midst of a severe recession, that manager did not lose his composure.',
              vi: 'Giữa cơn suy thoái nghiêm trọng, vị giám đốc ấy không đánh mất sự bình tĩnh.'
            }
          },
          {
            jp: '平時においては誰もが優秀に見えるが、真価は非常時に問われる。',
            romaji: 'Heiji ni oite wa dare mo ga yūshū ni mieru ga, shinka wa hijōji ni towareru.',
            meaning: {
              en: 'In ordinary times anyone can look capable, but true worth is tested in a crisis.',
              vi: 'Lúc bình thường ai cũng có vẻ tài giỏi, nhưng giá trị thực bị thử thách trong lúc khẩn cấp.'
            }
          },
          {
            jp: '厳しい局面にあっても、社員たちは揺るぎない信頼を寄せていた。',
            romaji: 'Kibishii kyokumen ni atte mo, shaintachi wa yuruginai shinrai o yosete ita.',
            meaning: {
              en: 'Even in a harsh phase, the employees placed unshakable trust in him.',
              vi: 'Ngay cả trong cục diện gay go, các nhân viên vẫn đặt niềm tin không lay chuyển vào ông.'
            }
          },
          {
            jp: '困難な情勢において、彼の指導力は際立っていた。',
            romaji: 'Konnan na jōsei ni oite, kare no shidōryoku wa kiwadatte ita.',
            meaning: {
              en: 'In difficult conditions, his leadership stood out.',
              vi: 'Trong tình hình khó khăn, năng lực lãnh đạo của ông nổi bật hẳn lên.'
            }
          },
          {
            jp: '逆境にして初めて、人の本当の強さが分かるのだ。',
            romaji: 'Gyakkyō ni shite hajimete, hito no hontō no tsuyosa ga wakaru no da.',
            meaning: {
              en: 'It is only in adversity that a person’s true strength becomes clear.',
              vi: 'Chỉ trong nghịch cảnh, sức mạnh thực sự của con người mới lộ rõ.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the manager behave during the severe recession?',
              vi: 'Vị giám đốc đã hành xử thế nào trong cơn suy thoái nghiêm trọng?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'He did not lose his composure', vi: 'Ông không mất bình tĩnh' }
              },
              { id: 'b', label: { en: 'He resigned at once', vi: 'Ông từ chức ngay lập tức' } },
              { id: 'c', label: { en: 'He blamed his staff', vi: 'Ông đổ lỗi cho nhân viên' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'When is a person’s true worth tested?',
              vi: 'Giá trị thực của một người bị thử thách khi nào?'
            },
            choices: [
              { id: 'a', label: { en: 'In ordinary times', vi: 'Lúc bình thường' } },
              { id: 'b', label: { en: 'In a crisis', vi: 'Trong lúc khẩn cấp' } },
              { id: 'c', label: { en: 'When being praised', vi: 'Khi được khen ngợi' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-8',
    number: 8,
    title: {
      en: 'Because of the Occasion: 〜とあって',
      vi: 'Vì dịp đặc biệt: 〜とあって'
    },
    focus: {
      en: 'Explain that, given a noteworthy special circumstance, a natural consequence follows, using 〜とあって.',
      vi: 'Giải thích rằng do một hoàn cảnh đặc biệt đáng chú ý, một hệ quả tự nhiên xảy ra, dùng 〜とあって.'
    },
    vocab: [
      {
        kana: 'れんきゅう',
        kanji: '連休',
        romaji: 'renkyū',
        meaning: { en: 'consecutive holidays', vi: 'kỳ nghỉ dài, nghỉ liên tiếp' }
      },
      {
        kana: 'こうらくち',
        kanji: '行楽地',
        romaji: 'kōrakuchi',
        meaning: { en: 'a resort, recreation spot', vi: 'khu vui chơi, điểm du lịch' }
      },
      {
        kana: 'こんざつ',
        kanji: '混雑',
        romaji: 'konzatsu',
        meaning: { en: 'congestion, crowding', vi: 'sự đông đúc, chen chúc' }
      },
      {
        kana: 'めいぶつ',
        kanji: '名物',
        romaji: 'meibutsu',
        meaning: { en: 'local specialty', vi: 'đặc sản' }
      },
      {
        kana: 'かんこうきゃく',
        kanji: '観光客',
        romaji: 'kankōkyaku',
        meaning: { en: 'tourist', vi: 'khách du lịch' }
      },
      {
        kana: 'にぎわう',
        kanji: '賑わう',
        romaji: 'nigiwau',
        meaning: { en: 'to bustle, be lively', vi: 'nhộn nhịp, tấp nập' }
      },
      {
        kana: 'だいせいきょう',
        kanji: '大盛況',
        romaji: 'daiseikyō',
        meaning: { en: 'a great turnout', vi: 'rất đông khách, thành công lớn' }
      },
      {
        kana: 'うりきれ',
        kanji: '売り切れ',
        romaji: 'urikire',
        meaning: { en: 'sold out', vi: 'bán hết, cháy hàng' }
      },
      {
        kana: 'おしかける',
        kanji: '押しかける',
        romaji: 'oshikakeru',
        meaning: { en: 'to throng, descend upon', vi: 'kéo đến đông nghịt' }
      },
      {
        kana: 'げんてい',
        kanji: '限定',
        romaji: 'gentei',
        meaning: { en: 'limited (edition)', vi: 'giới hạn, phiên bản hạn chế' }
      },
      {
        kana: 'かっき',
        kanji: '活気',
        romaji: 'kakki',
        meaning: { en: 'liveliness, energy', vi: 'sức sống, sự sôi động' }
      },
      {
        kana: 'みやげもの',
        kanji: '土産物',
        romaji: 'miyagemono',
        meaning: { en: 'souvenir', vi: 'quà lưu niệm, đặc sản mua về' }
      }
    ],
    grammar: [
      {
        pattern: 'N／普通形 とあって',
        title: {
          en: 'Because of the special circumstance',
          vi: 'Vì hoàn cảnh đặc biệt đó'
        },
        explanation: {
          en: 'Because of the special situation A - which naturally leads to B - B happens. Used for noteworthy, often public situations.',
          vi: 'Vì hoàn cảnh đặc biệt A - vốn tự nhiên dẫn tới B - nên B xảy ra. Dùng cho các tình huống đáng chú ý, thường mang tính công cộng.'
        },
        examples: [
          {
            jp: '大型連休とあって、行楽地はどこも混雑していた。',
            romaji: 'Ōgata renkyū to atte, kōrakuchi wa doko mo konzatsu shite ita.',
            meaning: {
              en: 'Being a long holiday, all the resorts were crowded.',
              vi: 'Vì là kỳ nghỉ dài, các khu vui chơi nơi nào cũng đông nghịt.'
            }
          },
          {
            jp: '有名店の限定商品とあって、開店前から客が押しかけた。',
            romaji: 'Yūmeiten no gentei shōhin to atte, kaiten mae kara kyaku ga oshikaketa.',
            meaning: {
              en: 'As it was a famous shop’s limited item, customers thronged even before opening.',
              vi: 'Vì là hàng giới hạn của tiệm nổi tiếng, khách kéo đến đông nghịt từ trước giờ mở cửa.'
            }
          }
        ]
      },
      {
        pattern: 'N／普通形 だけあって',
        title: {
          en: 'As expected of / fitting that',
          vi: 'Đúng là / xứng đáng là'
        },
        explanation: {
          en: 'As one would expect given A’s quality or status, B is fitting. It carries a positive evaluation.',
          vi: 'Đúng như mong đợi với phẩm chất hay vị thế của A, B là điều xứng đáng. Mang sắc thái đánh giá tích cực.'
        },
        examples: [
          {
            jp: '有名な観光地だけあって、景色は素晴らしかった。',
            romaji: 'Yūmei na kankōchi dake atte, keshiki wa subarashikatta.',
            meaning: {
              en: 'As befits a famous tourist spot, the scenery was wonderful.',
              vi: 'Đúng là điểm du lịch nổi tiếng, phong cảnh thật tuyệt vời.'
            }
          },
          {
            jp: '彼は長年の職人だけあって、技術が確かだ。',
            romaji: 'Kare wa naganen no shokunin dake atte, gijutsu ga tashika da.',
            meaning: {
              en: 'As expected of a craftsman of many years, his skill is solid.',
              vi: 'Đúng là người thợ lâu năm, tay nghề của ông ấy thật vững vàng.'
            }
          }
        ]
      },
      {
        pattern: 'N の／普通形 こととて',
        title: {
          en: 'Because (apologetic, literary)',
          vi: 'Vì lẽ (xin lỗi, văn viết)'
        },
        explanation: {
          en: 'A literary, formal “because,” often offering a reason as an excuse or apology.',
          vi: 'Cách nói “vì” trang trọng, văn viết, thường nêu lý do như một lời phân trần hay xin lỗi.'
        },
        examples: [
          {
            jp: '慣れないこととて、ご迷惑をおかけしました。',
            romaji: 'Narenai koto tote, gomeiwaku o okake shimashita.',
            meaning: {
              en: 'As I was not used to it, I caused you trouble.',
              vi: 'Vì chưa quen việc, tôi đã gây phiền hà cho quý vị.'
            }
          },
          {
            jp: '急なこととて、十分な準備ができませんでした。',
            romaji: 'Kyū na koto tote, jūbun na junbi ga dekimasen deshita.',
            meaning: {
              en: 'As it was so sudden, I could not prepare adequately.',
              vi: 'Vì là việc gấp gáp, tôi đã không thể chuẩn bị đầy đủ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A bustling holiday town', vi: 'Thị trấn nhộn nhịp ngày nghỉ lễ' },
        lines: [
          {
            jp: '久しぶりの大型連休とあって、町は多くの観光客で賑わった。',
            romaji: 'Hisashiburi no ōgata renkyū to atte, machi wa ōku no kankōkyaku de nigiwatta.',
            meaning: {
              en: 'As it was the first long holiday in a while, the town bustled with many tourists.',
              vi: 'Vì là kỳ nghỉ dài hiếm hoi, thị trấn nhộn nhịp với đông đảo khách du lịch.'
            }
          },
          {
            jp: '有名な行楽地だけあって、名物料理の店はどこも大盛況だった。',
            romaji:
              'Yūmei na kōrakuchi dake atte, meibutsu ryōri no mise wa doko mo daiseikyō datta.',
            meaning: {
              en: 'As befits a famous resort, every shop with local-specialty dishes drew huge crowds.',
              vi: 'Đúng là điểm du lịch nổi tiếng, các quán món đặc sản nơi nào cũng đông nghịt khách.'
            }
          },
          {
            jp: '限定の土産物とあって、午前中には売り切れてしまった。',
            romaji: 'Gentei no miyagemono to atte, gozenchū ni wa urikirete shimatta.',
            meaning: {
              en: 'Being limited-edition souvenirs, they sold out by midday.',
              vi: 'Vì là quà lưu niệm phiên bản giới hạn, chúng đã bán hết ngay trong buổi sáng.'
            }
          },
          {
            jp: '慣れない土地のこととて、私たちは少し道に迷った。',
            romaji: 'Narenai tochi no koto tote, watashitachi wa sukoshi michi ni mayotta.',
            meaning: {
              en: 'As it was an unfamiliar place, we got a little lost.',
              vi: 'Vì là vùng đất lạ, chúng tôi đã hơi lạc đường.'
            }
          },
          {
            jp: 'それでも、活気あふれる町の様子は忘れられない思い出になった。',
            romaji: 'Soredemo, kakki afureru machi no yōsu wa wasurerarenai omoide ni natta.',
            meaning: {
              en: 'Even so, the lively atmosphere of the town became an unforgettable memory.',
              vi: 'Dù vậy, khung cảnh tràn đầy sức sống của thị trấn đã trở thành kỷ niệm khó quên.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why was the town crowded with tourists?',
              vi: 'Vì sao thị trấn đông nghịt khách du lịch?'
            },
            choices: [
              { id: 'a', label: { en: 'Because of the long holiday', vi: 'Vì kỳ nghỉ dài' } },
              {
                id: 'b',
                label: {
                  en: 'Because of a local festival ban',
                  vi: 'Vì lệnh cấm lễ hội địa phương'
                }
              },
              {
                id: 'c',
                label: { en: 'Because the shops were closed', vi: 'Vì các cửa hàng đóng cửa' }
              }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What happened to the limited souvenirs?',
              vi: 'Quà lưu niệm phiên bản giới hạn ra sao?'
            },
            choices: [
              { id: 'a', label: { en: 'They sold out by midday', vi: 'Bán hết trong buổi sáng' } },
              {
                id: 'b',
                label: { en: 'They were never restocked', vi: 'Không bao giờ được bổ sung' }
              },
              { id: 'c', label: { en: 'No one bought them', vi: 'Không ai mua' } }
            ],
            correctId: 'a'
          }
        ]
      }
    ]
  }
];
