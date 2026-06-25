import { withSequentialNumbers, type Course } from '@/constants/courses/types.ts';
import { n3LessonsB } from './lessons-2.ts';
import { n3LessonsC } from './lessons-3.ts';
import { n3LessonsD } from './lessons-4.ts';
import { n3LessonsE } from './lessons-5.ts';

export const n3Course: Course = {
  level: 'n3',
  code: 'N3',
  name: { en: 'JLPT N3 Course', vi: 'Khóa học JLPT N3' },
  subtitle: {
    en: 'Bridge to fluent, natural Japanese.',
    vi: 'Cầu nối tới tiếng Nhật trôi chảy, tự nhiên.'
  },
  intro: {
    en: 'A step-by-step JLPT N3 path that builds on N4. Each lesson covers causative and passive forms, keigo, advanced connectives and nuanced expressions, with example sentences and reading practice in English and Vietnamese.',
    vi: 'Lộ trình JLPT N3 từng bước, nối tiếp N4. Mỗi bài bao gồm thể sai khiến và bị động, kính ngữ, liên từ nâng cao và các mẫu diễn đạt tinh tế, kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  seoTitle: {
    en: 'JLPT N3 Course - Vocabulary & Grammar',
    vi: 'Khóa học JLPT N3 - Từ vựng & Ngữ pháp'
  },
  seoDescription: {
    en: 'A free, structured JLPT N3 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
    vi: 'Khóa học JLPT N3 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  lessons: withSequentialNumbers([
    {
      id: 'lesson-1',
      number: 1,
      title: {
        en: 'Causative Form (Make / Let Someone Do)',
        vi: 'Thể sai khiến (Bắt / Cho ai đó làm)'
      },
      focus: {
        en: 'Use the causative 〜させる to make or let someone do something, and ask permission with 〜させてください.',
        vi: 'Dùng thể sai khiến 〜させる để bắt hoặc cho ai đó làm gì, và xin phép với 〜させてください.'
      },
      vocab: [
        {
          kana: 'しゃちょう',
          kanji: '社長',
          romaji: 'shachō',
          meaning: { en: 'company president', vi: 'giám đốc công ty' }
        },
        {
          kana: 'ぶか',
          kanji: '部下',
          romaji: 'buka',
          meaning: { en: 'subordinate, staff', vi: 'cấp dưới, nhân viên' }
        },
        {
          kana: 'ざんぎょう',
          kanji: '残業',
          romaji: 'zangyō',
          meaning: { en: 'overtime work', vi: 'làm thêm giờ' }
        },
        {
          kana: 'やすませる',
          kanji: '休ませる',
          romaji: 'yasumaseru',
          meaning: { en: 'to let (someone) rest', vi: 'cho (ai đó) nghỉ' }
        },
        {
          kana: 'てつだう',
          kanji: '手伝う',
          romaji: 'tetsudau',
          meaning: { en: 'to help', vi: 'giúp đỡ' }
        },
        {
          kana: 'むすこ',
          kanji: '息子',
          romaji: 'musuko',
          meaning: { en: 'son', vi: 'con trai' }
        },
        {
          kana: 'むすめ',
          kanji: '娘',
          romaji: 'musume',
          meaning: { en: 'daughter', vi: 'con gái' }
        },
        {
          kana: 'かたづける',
          kanji: '片付ける',
          romaji: 'katazukeru',
          meaning: { en: 'to tidy up', vi: 'dọn dẹp' }
        },
        {
          kana: 'むりやり',
          kanji: '無理やり',
          romaji: 'muriyari',
          meaning: { en: 'forcibly, against one\u2019s will', vi: 'ép buộc, miễn cưỡng' }
        },
        {
          kana: 'じゆうに',
          kanji: '自由に',
          romaji: 'jiyū ni',
          meaning: { en: 'freely', vi: 'một cách tự do' }
        },
        {
          kana: 'はっぴょう',
          kanji: '発表',
          romaji: 'happyō',
          meaning: { en: 'presentation, announcement', vi: 'thuyết trình, công bố' }
        },
        {
          kana: 'けいけん',
          kanji: '経験',
          romaji: 'keiken',
          meaning: { en: 'experience', vi: 'kinh nghiệm' }
        }
      ],
      grammar: [
        {
          pattern: 'N（人）に N（物）を Vさせる',
          title: { en: 'Causative: make/let someone do', vi: 'Sai khiến: bắt/cho ai đó làm' },
          explanation: {
            en: 'Group 1 verbs change う→あ + せる (書く→書かせる); Group 2 add させる (食べる→食べさせる). It means make or let someone do something.',
            vi: 'Động từ nhóm 1 đổi う→あ + せる (書く→書かせる); nhóm 2 thêm させる (食べる→食べさせる). Nghĩa là bắt hoặc cho ai đó làm gì.'
          },
          examples: [
            {
              jp: '社長は部下に残業をさせました。',
              romaji: 'Shachō wa buka ni zangyō o sasemashita.',
              meaning: {
                en: 'The president made his staff work overtime.',
                vi: 'Giám đốc bắt nhân viên làm thêm giờ.'
              }
            },
            {
              jp: '母は妹に部屋を片付けさせた。',
              romaji: 'Haha wa imōto ni heya o katazukesaseta.',
              meaning: {
                en: 'Mother made my little sister tidy up the room.',
                vi: 'Mẹ bắt em gái dọn dẹp phòng.'
              }
            }
          ]
        },
        {
          pattern: 'N（人）を Vさせる',
          title: { en: 'Causative with intransitive verbs', vi: 'Sai khiến với nội động từ' },
          explanation: {
            en: 'With intransitive verbs the person is marked by を. It often means "let/allow" or shows an emotional cause.',
            vi: 'Với nội động từ, người bị tác động được đánh dấu bằng を. Thường mang nghĩa "cho phép" hoặc gây ra cảm xúc.'
          },
          examples: [
            {
              jp: '今日は子供を早く帰らせます。',
              romaji: 'Kyō wa kodomo o hayaku kaerasemasu.',
              meaning: {
                en: 'Today I will let the children go home early.',
                vi: 'Hôm nay tôi sẽ cho bọn trẻ về sớm.'
              }
            },
            {
              jp: 'その話は家族をとても心配させた。',
              romaji: 'Sono hanashi wa kazoku o totemo shinpai saseta.',
              meaning: {
                en: 'That story made my family very worried.',
                vi: 'Câu chuyện đó làm gia đình tôi rất lo lắng.'
              }
            }
          ]
        },
        {
          pattern: 'Vさせてください',
          title: { en: 'Asking permission: let me...', vi: 'Xin phép: hãy cho tôi...' },
          explanation: {
            en: 'The causative te-form + ください politely asks to be allowed to do something yourself.',
            vi: 'Thể sai khiến dạng te + ください dùng để lịch sự xin được tự mình làm điều gì.'
          },
          examples: [
            {
              jp: 'その仕事は私にやらせてください。',
              romaji: 'Sono shigoto wa watashi ni yarasete kudasai.',
              meaning: {
                en: 'Please let me do that job.',
                vi: 'Hãy để tôi làm công việc đó.'
              }
            },
            {
              jp: '少し考えさせてください。',
              romaji: 'Sukoshi kangaesasete kudasai.',
              meaning: {
                en: 'Please let me think about it a little.',
                vi: 'Hãy cho tôi suy nghĩ một chút.'
              }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A considerate boss', vi: 'Người sếp biết quan tâm' },
          lines: [
            {
              jp: '田中さんの会社の社長はとてもやさしいです。',
              romaji: 'Tanaka-san no kaisha no shachō wa totemo yasashii desu.',
              meaning: {
                en: 'The president of Mr. Tanaka\u2019s company is very kind.',
                vi: 'Giám đốc công ty của anh Tanaka rất tốt bụng.'
              }
            },
            {
              jp: '忙しいときも、部下に無理やり残業をさせません。',
              romaji: 'Isogashii toki mo, buka ni muriyari zangyō o sasemasen.',
              meaning: {
                en: 'Even when busy, he does not force his staff to work overtime.',
                vi: 'Ngay cả khi bận, ông cũng không ép nhân viên làm thêm giờ.'
              }
            },
            {
              jp: '元気がない人は、早く帰らせて休ませます。',
              romaji: 'Genki ga nai hito wa, hayaku kaerasete yasumasemasu.',
              meaning: {
                en: 'He lets people who seem unwell go home early and rest.',
                vi: 'Ông cho những người trông không khỏe về sớm và nghỉ ngơi.'
              }
            },
            {
              jp: 'だから、みんな「ここで働かせてください」と言います。',
              romaji: 'Dakara, minna "koko de hatarakasete kudasai" to iimasu.',
              meaning: {
                en: 'So everyone says, "Please let me work here."',
                vi: 'Vì vậy mọi người đều nói: "Hãy cho tôi được làm việc ở đây."'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What does the president NOT do to his staff?',
                vi: 'Giám đốc KHÔNG làm gì với nhân viên?'
              },
              choices: [
                { id: 'a', label: { en: 'Force them to work overtime', vi: 'Ép họ làm thêm giờ' } },
                { id: 'b', label: { en: 'Let them rest', vi: 'Cho họ nghỉ ngơi' } },
                { id: 'c', label: { en: 'Let them go home early', vi: 'Cho họ về sớm' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'What does he do for people who seem unwell?',
                vi: 'Ông làm gì cho người trông không khỏe?'
              },
              choices: [
                { id: 'a', label: { en: 'Makes them work more', vi: 'Bắt họ làm việc nhiều hơn' } },
                {
                  id: 'b',
                  label: { en: 'Lets them go home early and rest', vi: 'Cho họ về sớm và nghỉ' }
                },
                { id: 'c', label: { en: 'Sends them on a trip', vi: 'Cho họ đi du lịch' } }
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
        en: 'Passive Form & Suffering Passive',
        vi: 'Thể bị động & Bị động chịu thiệt'
      },
      focus: {
        en: 'Use 〜られる to say something is done to you, including the "suffering" passive for unwanted events.',
        vi: 'Dùng 〜られる để nói điều gì đó được làm với mình, gồm cả bị động "chịu thiệt" cho việc không mong muốn.'
      },
      vocab: [
        {
          kana: 'どろぼう',
          kanji: '泥棒',
          romaji: 'dorobō',
          meaning: { en: 'thief', vi: 'kẻ trộm' }
        },
        {
          kana: 'ぬすむ',
          kanji: '盗む',
          romaji: 'nusumu',
          meaning: { en: 'to steal', vi: 'ăn trộm' }
        },
        {
          kana: 'しかる',
          kanji: '叱る',
          romaji: 'shikaru',
          meaning: { en: 'to scold', vi: 'mắng, la rầy' }
        },
        {
          kana: 'ほめる',
          kanji: '褒める',
          romaji: 'homeru',
          meaning: { en: 'to praise', vi: 'khen ngợi' }
        },
        {
          kana: 'ふむ',
          kanji: '踏む',
          romaji: 'fumu',
          meaning: { en: 'to step on', vi: 'giẫm lên' }
        },
        {
          kana: 'こわす',
          kanji: '壊す',
          romaji: 'kowasu',
          meaning: { en: 'to break (something)', vi: 'làm hỏng' }
        },
        {
          kana: 'たてる',
          kanji: '建てる',
          romaji: 'tateru',
          meaning: { en: 'to build', vi: 'xây dựng' }
        },
        {
          kana: 'はつめい',
          kanji: '発明',
          romaji: 'hatsumei',
          meaning: { en: 'invention', vi: 'phát minh' }
        },
        {
          kana: 'さいふ',
          kanji: '財布',
          romaji: 'saifu',
          meaning: { en: 'wallet', vi: 'ví tiền' }
        },
        {
          kana: 'となり',
          kanji: '隣',
          romaji: 'tonari',
          meaning: { en: 'next door, neighbor', vi: 'bên cạnh, hàng xóm' }
        },
        {
          kana: 'こまる',
          kanji: '困る',
          romaji: 'komaru',
          meaning: { en: 'to be troubled', vi: 'khó xử, phiền' }
        },
        {
          kana: 'なく',
          kanji: '泣く',
          romaji: 'naku',
          meaning: { en: 'to cry', vi: 'khóc' }
        }
      ],
      grammar: [
        {
          pattern: 'N（受け手）は N（動作主）に Vられる',
          title: { en: 'Direct passive', vi: 'Bị động trực tiếp' },
          explanation: {
            en: 'Group 1 verbs change う→あ + れる (読む→読まれる); Group 2 add られる. The doer is marked with に.',
            vi: 'Động từ nhóm 1 đổi う→あ + れる (読む→読まれる); nhóm 2 thêm られる. Người thực hiện đánh dấu bằng に.'
          },
          examples: [
            {
              jp: '私は先生に褒められました。',
              romaji: 'Watashi wa sensei ni homeraremashita.',
              meaning: {
                en: 'I was praised by the teacher.',
                vi: 'Tôi được giáo viên khen.'
              }
            },
            {
              jp: '弟は母に叱られた。',
              romaji: 'Otōto wa haha ni shikarareta.',
              meaning: {
                en: 'My little brother was scolded by mother.',
                vi: 'Em trai tôi bị mẹ mắng.'
              }
            }
          ]
        },
        {
          pattern: 'N は（人）に N を Vられる',
          title: { en: 'Suffering / adversity passive', vi: 'Bị động chịu thiệt' },
          explanation: {
            en: 'Used when an action negatively affects the subject, often a possession. It carries a nuance of annoyance or loss.',
            vi: 'Dùng khi một hành động gây ảnh hưởng xấu đến chủ thể, thường là tài sản. Mang sắc thái khó chịu hay thiệt hại.'
          },
          examples: [
            {
              jp: '電車で足を踏まれました。',
              romaji: 'Densha de ashi o fumaremashita.',
              meaning: {
                en: 'My foot got stepped on in the train.',
                vi: 'Tôi bị giẫm lên chân trên tàu điện.'
              }
            },
            {
              jp: '泥棒に財布を盗まれた。',
              romaji: 'Dorobō ni saifu o nusumareta.',
              meaning: {
                en: 'My wallet was stolen by a thief.',
                vi: 'Tôi bị kẻ trộm lấy mất ví.'
              }
            }
          ]
        },
        {
          pattern: 'N が Vられる（無生物の受身）',
          title: { en: 'Passive of facts / objects', vi: 'Bị động của sự vật, sự việc' },
          explanation: {
            en: 'For objective facts, inventions or things widely done, the doer is often omitted or marked with によって.',
            vi: 'Với sự thật khách quan, phát minh hay việc làm chung, người thực hiện thường được lược bỏ hoặc đánh dấu bằng によって.'
          },
          examples: [
            {
              jp: 'この寺は400年前に建てられました。',
              romaji: 'Kono tera wa yonhyaku-nen mae ni tateraremashita.',
              meaning: {
                en: 'This temple was built 400 years ago.',
                vi: 'Ngôi chùa này được xây cách đây 400 năm.'
              }
            },
            {
              jp: '電話はベルによって発明された。',
              romaji: 'Denwa wa Beru ni yotte hatsumei sareta.',
              meaning: {
                en: 'The telephone was invented by Bell.',
                vi: 'Điện thoại được phát minh bởi Bell.'
              }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A terrible morning', vi: 'Một buổi sáng tồi tệ' },
          lines: [
            {
              jp: '今朝はとても運が悪かったです。',
              romaji: 'Kesa wa totemo un ga warukatta desu.',
              meaning: {
                en: 'This morning I had really bad luck.',
                vi: 'Sáng nay tôi rất xui xẻo.'
              }
            },
            {
              jp: '満員電車の中で、知らない人に足を踏まれました。',
              romaji: 'Man\u2019in densha no naka de, shiranai hito ni ashi o fumaremashita.',
              meaning: {
                en: 'On the crowded train, a stranger stepped on my foot.',
                vi: 'Trên tàu chật cứng, tôi bị một người lạ giẫm lên chân.'
              }
            },
            {
              jp: '会社に着いてから、財布を盗まれたことに気づきました。',
              romaji: 'Kaisha ni tsuite kara, saifu o nusumareta koto ni kizukimashita.',
              meaning: {
                en: 'After arriving at the office, I realized my wallet had been stolen.',
                vi: 'Sau khi đến công ty, tôi nhận ra ví đã bị lấy mất.'
              }
            },
            {
              jp: 'おまけに、仕事のミスで部長に叱られました。',
              romaji: 'Omake ni, shigoto no misu de buchō ni shikararemashita.',
              meaning: {
                en: 'On top of that, I was scolded by my manager for a work mistake.',
                vi: 'Tệ hơn nữa, tôi bị trưởng phòng mắng vì lỗi trong công việc.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What happened on the train?',
                vi: 'Chuyện gì đã xảy ra trên tàu?'
              },
              choices: [
                { id: 'a', label: { en: 'The writer was praised', vi: 'Người viết được khen' } },
                {
                  id: 'b',
                  label: {
                    en: 'The writer\u2019s foot was stepped on',
                    vi: 'Người viết bị giẫm lên chân'
                  }
                },
                { id: 'c', label: { en: 'The writer lost the train', vi: 'Người viết lỡ tàu' } }
              ],
              correctId: 'b'
            },
            {
              id: 'q2',
              question: {
                en: 'Why was the writer scolded by the manager?',
                vi: 'Tại sao người viết bị trưởng phòng mắng?'
              },
              choices: [
                {
                  id: 'a',
                  label: { en: 'Because of a work mistake', vi: 'Vì một lỗi trong công việc' }
                },
                { id: 'b', label: { en: 'Because of being late', vi: 'Vì đến muộn' } },
                { id: 'c', label: { en: 'Because of stealing a wallet', vi: 'Vì ăn trộm ví' } }
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
        en: 'Causative-Passive & Concession',
        vi: 'Sai khiến bị động & Tương phản'
      },
      focus: {
        en: 'Say you were made to do something with 〜させられる, and contrast with 〜ても and 〜のに.',
        vi: 'Nói bạn bị bắt làm gì với 〜させられる, và tương phản với 〜ても và 〜のに.'
      },
      vocab: [
        {
          kana: 'むりに',
          kanji: '無理に',
          romaji: 'muri ni',
          meaning: { en: 'forcibly, unwillingly', vi: 'một cách miễn cưỡng' }
        },
        {
          kana: 'まつ',
          kanji: '待つ',
          romaji: 'matsu',
          meaning: { en: 'to wait', vi: 'chờ đợi' }
        },
        {
          kana: 'おぼえる',
          kanji: '覚える',
          romaji: 'oboeru',
          meaning: { en: 'to memorize', vi: 'ghi nhớ' }
        },
        {
          kana: 'れんしゅう',
          kanji: '練習',
          romaji: 'renshū',
          meaning: { en: 'practice', vi: 'luyện tập' }
        },
        {
          kana: 'やくそく',
          kanji: '約束',
          romaji: 'yakusoku',
          meaning: { en: 'promise, appointment', vi: 'lời hứa, hẹn' }
        },
        {
          kana: 'あめ',
          kanji: '雨',
          romaji: 'ame',
          meaning: { en: 'rain', vi: 'mưa' }
        },
        {
          kana: 'つかれる',
          kanji: '疲れる',
          romaji: 'tsukareru',
          meaning: { en: 'to get tired', vi: 'mệt' }
        },
        {
          kana: 'がんばる',
          kanji: '頑張る',
          romaji: 'ganbaru',
          meaning: { en: 'to do one\u2019s best', vi: 'cố gắng' }
        },
        {
          kana: 'やめる',
          kanji: '辞める',
          romaji: 'yameru',
          meaning: { en: 'to quit, resign', vi: 'nghỉ việc, từ bỏ' }
        },
        {
          kana: 'さけ',
          kanji: '酒',
          romaji: 'sake',
          meaning: { en: 'alcohol, sake', vi: 'rượu' }
        },
        {
          kana: 'のみかい',
          kanji: '飲み会',
          romaji: 'nomikai',
          meaning: { en: 'drinking party', vi: 'tiệc nhậu' }
        },
        {
          kana: 'いやな',
          kanji: '嫌な',
          romaji: 'iya na',
          meaning: { en: 'unpleasant, disagreeable', vi: 'khó chịu, ghét' }
        }
      ],
      grammar: [
        {
          pattern: 'N は（人）に Vさせられる',
          title: { en: 'Causative-passive: be made to do', vi: 'Sai khiến bị động: bị bắt làm' },
          explanation: {
            en: 'Combines causative + passive: the subject is forced to do something against their will. Group 1: 飲む→飲まされる; Group 2: 食べる→食べさせられる.',
            vi: 'Kết hợp sai khiến + bị động: chủ thể bị ép làm điều gì trái ý muốn. Nhóm 1: 飲む→飲まされる; nhóm 2: 食べる→食べさせられる.'
          },
          examples: [
            {
              jp: '飲み会で部長にお酒を飲まされました。',
              romaji: 'Nomikai de buchō ni osake o nomasaremashita.',
              meaning: {
                en: 'At the drinking party I was made to drink alcohol by my manager.',
                vi: 'Ở tiệc nhậu tôi bị trưởng phòng ép uống rượu.'
              }
            },
            {
              jp: '子供のとき、毎日ピアノを練習させられた。',
              romaji: 'Kodomo no toki, mainichi piano o renshū saserareta.',
              meaning: {
                en: 'As a child, I was made to practice piano every day.',
                vi: 'Hồi nhỏ, tôi bị bắt tập piano mỗi ngày.'
              }
            }
          ]
        },
        {
          pattern: 'V／A／N ても',
          title: { en: 'Even if / even though (〜ても)', vi: 'Dù cho / cho dù (〜ても)' },
          explanation: {
            en: 'Te-form + も means "even if/even though". With adjectives: 高くても; with nouns/na-adjectives: 〜でも.',
            vi: 'Thể te + も nghĩa là "dù cho". Với tính từ: 高くても; với danh từ/tính từ -na: 〜でも.'
          },
          examples: [
            {
              jp: '雨が降っても、試合はあります。',
              romaji: 'Ame ga futte mo, shiai wa arimasu.',
              meaning: {
                en: 'Even if it rains, the match will be held.',
                vi: 'Dù trời mưa, trận đấu vẫn diễn ra.'
              }
            },
            {
              jp: 'いくら待っても、彼は来なかった。',
              romaji: 'Ikura matte mo, kare wa konakatta.',
              meaning: {
                en: 'No matter how long I waited, he did not come.',
                vi: 'Dù chờ bao lâu, anh ấy cũng không đến.'
              }
            }
          ]
        },
        {
          pattern: '普通形 + のに',
          title: { en: 'Although / despite (〜のに)', vi: 'Mặc dù (〜のに)' },
          explanation: {
            en: '〜のに expresses an unexpected, often dissatisfying contrast, stronger than が. Na-adjectives and nouns take な (静かなのに).',
            vi: '〜のに diễn tả sự tương phản bất ngờ, thường mang sự không hài lòng, mạnh hơn が. Tính từ -na và danh từ thêm な (静かなのに).'
          },
          examples: [
            {
              jp: 'たくさん練習したのに、負けてしまった。',
              romaji: 'Takusan renshū shita noni, makete shimatta.',
              meaning: {
                en: 'Although I practiced a lot, I ended up losing.',
                vi: 'Mặc dù đã luyện tập nhiều, tôi vẫn thua.'
              }
            },
            {
              jp: '約束したのに、彼は来なかった。',
              romaji: 'Yakusoku shita noni, kare wa konakatta.',
              meaning: {
                en: 'Even though he promised, he did not come.',
                vi: 'Mặc dù đã hứa, anh ấy lại không đến.'
              }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A tiring party', vi: 'Một buổi tiệc mệt mỏi' },
          lines: [
            {
              jp: '昨日、会社の飲み会がありました。',
              romaji: 'Kinō, kaisha no nomikai ga arimashita.',
              meaning: {
                en: 'Yesterday there was a company drinking party.',
                vi: 'Hôm qua công ty có một buổi tiệc nhậu.'
              }
            },
            {
              jp: '私はお酒が好きじゃないのに、部長にたくさん飲まされました。',
              romaji: 'Watashi wa osake ga suki ja nai noni, buchō ni takusan nomasaremashita.',
              meaning: {
                en: 'Even though I don\u2019t like alcohol, I was made to drink a lot by my manager.',
                vi: 'Mặc dù không thích rượu, tôi vẫn bị trưởng phòng ép uống nhiều.'
              }
            },
            {
              jp: '早く帰りたくても、帰れませんでした。',
              romaji: 'Hayaku kaeritakute mo, kaeremasen deshita.',
              meaning: {
                en: 'Even though I wanted to go home early, I couldn\u2019t.',
                vi: 'Dù muốn về sớm, tôi cũng không về được.'
              }
            },
            {
              jp: 'とても疲れたので、次の飲み会はもう行きたくないです。',
              romaji: 'Totemo tsukareta node, tsugi no nomikai wa mō ikitakunai desu.',
              meaning: {
                en: 'I got so tired that I don\u2019t want to go to the next party.',
                vi: 'Vì quá mệt nên tôi không muốn đi buổi tiệc lần sau nữa.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What was the writer made to do?',
                vi: 'Người viết bị bắt làm gì?'
              },
              choices: [
                { id: 'a', label: { en: 'Drink a lot of alcohol', vi: 'Uống nhiều rượu' } },
                { id: 'b', label: { en: 'Work overtime', vi: 'Làm thêm giờ' } },
                { id: 'c', label: { en: 'Give a presentation', vi: 'Thuyết trình' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'How does the writer feel about the next party?',
                vi: 'Người viết cảm thấy thế nào về buổi tiệc lần sau?'
              },
              choices: [
                { id: 'a', label: { en: 'Wants to go again', vi: 'Muốn đi lần nữa' } },
                { id: 'b', label: { en: 'Does not want to go', vi: 'Không muốn đi' } },
                { id: 'c', label: { en: 'Wants to invite friends', vi: 'Muốn mời bạn bè' } }
              ],
              correctId: 'b'
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-4',
      number: 4,
      title: {
        en: 'Change & Decision',
        vi: 'Thay đổi & Quyết định'
      },
      focus: {
        en: 'Express gradual change, habits and decisions with ようになる, ようにする, ことにする and ことになる.',
        vi: 'Diễn tả sự thay đổi dần, thói quen và quyết định với ようになる, ようにする, ことにする và ことになる.'
      },
      vocab: [
        {
          kana: 'うんどう',
          kanji: '運動',
          romaji: 'undō',
          meaning: { en: 'exercise', vi: 'vận động, tập thể dục' }
        },
        {
          kana: 'けんこう',
          kanji: '健康',
          romaji: 'kenkō',
          meaning: { en: 'health', vi: 'sức khỏe' }
        },
        {
          kana: 'はやね',
          kanji: '早寝',
          romaji: 'hayane',
          meaning: { en: 'going to bed early', vi: 'ngủ sớm' }
        },
        {
          kana: 'てんきん',
          kanji: '転勤',
          romaji: 'tenkin',
          meaning: { en: 'job transfer', vi: 'chuyển công tác' }
        },
        {
          kana: 'けっこん',
          kanji: '結婚',
          romaji: 'kekkon',
          meaning: { en: 'marriage', vi: 'kết hôn' }
        },
        {
          kana: 'りゅうがく',
          kanji: '留学',
          romaji: 'ryūgaku',
          meaning: { en: 'studying abroad', vi: 'du học' }
        },
        {
          kana: 'はなせる',
          kanji: '話せる',
          romaji: 'hanaseru',
          meaning: { en: 'can speak', vi: 'có thể nói' }
        },
        {
          kana: 'やさい',
          kanji: '野菜',
          romaji: 'yasai',
          meaning: { en: 'vegetables', vi: 'rau' }
        },
        {
          kana: 'まいあさ',
          kanji: '毎朝',
          romaji: 'maiasa',
          meaning: { en: 'every morning', vi: 'mỗi sáng' }
        },
        {
          kana: 'きそく',
          kanji: '規則',
          romaji: 'kisoku',
          meaning: { en: 'rule, regulation', vi: 'quy định, nội quy' }
        },
        {
          kana: 'たばこ',
          romaji: 'tabako',
          meaning: { en: 'cigarettes, smoking', vi: 'thuốc lá' }
        },
        {
          kana: 'すいません',
          romaji: 'suimasen',
          meaning: { en: 'excuse me, sorry', vi: 'xin lỗi' }
        }
      ],
      grammar: [
        {
          pattern: 'V（辞書形／ない形）ようになる',
          title: { en: 'Come to do / change of state', vi: 'Trở nên / thay đổi trạng thái' },
          explanation: {
            en: 'Shows a gradual change in ability or habit over time. The negative is 〜なくなる or 〜ないようになる.',
            vi: 'Diễn tả sự thay đổi dần về khả năng hay thói quen theo thời gian. Phủ định là 〜なくなる hoặc 〜ないようになる.'
          },
          examples: [
            {
              jp: '日本語が話せるようになりました。',
              romaji: 'Nihongo ga hanaseru yō ni narimashita.',
              meaning: {
                en: 'I have become able to speak Japanese.',
                vi: 'Tôi đã trở nên có thể nói tiếng Nhật.'
              }
            },
            {
              jp: '最近、朝ご飯を食べるようになった。',
              romaji: 'Saikin, asagohan o taberu yō ni natta.',
              meaning: {
                en: 'Recently I have started eating breakfast.',
                vi: 'Gần đây tôi đã bắt đầu ăn sáng.'
              }
            }
          ]
        },
        {
          pattern: 'V（辞書形／ない形）ようにする',
          title: { en: 'Make an effort to', vi: 'Cố gắng để làm' },
          explanation: {
            en: 'Expresses a conscious effort to do or avoid something regularly. 〜ようにしている shows an ongoing habit.',
            vi: 'Diễn tả nỗ lực có ý thức để làm hoặc tránh điều gì thường xuyên. 〜ようにしている chỉ thói quen đang duy trì.'
          },
          examples: [
            {
              jp: '健康のために毎日野菜を食べるようにしています。',
              romaji: 'Kenkō no tame ni mainichi yasai o taberu yō ni shite imasu.',
              meaning: {
                en: 'For my health, I try to eat vegetables every day.',
                vi: 'Vì sức khỏe, tôi cố gắng ăn rau mỗi ngày.'
              }
            },
            {
              jp: '夜は遅くまで起きないようにしてください。',
              romaji: 'Yoru wa osoku made okinai yō ni shite kudasai.',
              meaning: {
                en: 'Please try not to stay up late at night.',
                vi: 'Hãy cố gắng đừng thức khuya.'
              }
            }
          ]
        },
        {
          pattern: 'V（辞書形／ない形）ことにする',
          title: { en: 'Decide to (own decision)', vi: 'Quyết định (tự mình)' },
          explanation: {
            en: 'Expresses a decision made by the speaker themselves. 〜ことにしている shows a personal rule or habit.',
            vi: 'Diễn tả quyết định do chính người nói đưa ra. 〜ことにしている chỉ nguyên tắc hay thói quen cá nhân.'
          },
          examples: [
            {
              jp: '来年、日本へ留学することにしました。',
              romaji: 'Rainen, Nihon e ryūgaku suru koto ni shimashita.',
              meaning: {
                en: 'I have decided to study abroad in Japan next year.',
                vi: 'Tôi đã quyết định sang Nhật du học vào năm sau.'
              }
            },
            {
              jp: '体に悪いから、たばこは吸わないことにした。',
              romaji: 'Karada ni warui kara, tabako wa suwanai koto ni shita.',
              meaning: {
                en: 'Because it\u2019s bad for my body, I decided not to smoke.',
                vi: 'Vì hại cho cơ thể, tôi đã quyết định không hút thuốc.'
              }
            }
          ]
        },
        {
          pattern: 'V（辞書形／ない形）ことになる',
          title: { en: 'It has been decided that', vi: 'Được quyết định là' },
          explanation: {
            en: 'Expresses a decision made by someone else or by circumstances, not the speaker. Common for company or group decisions.',
            vi: 'Diễn tả quyết định do người khác hoặc hoàn cảnh đưa ra, không phải người nói. Thường dùng cho quyết định của công ty hay tập thể.'
          },
          examples: [
            {
              jp: '来月、大阪に転勤することになりました。',
              romaji: 'Raigetsu, Ōsaka ni tenkin suru koto ni narimashita.',
              meaning: {
                en: 'It has been decided that I will transfer to Osaka next month.',
                vi: 'Đã quyết định rằng tháng sau tôi sẽ chuyển công tác đến Osaka.'
              }
            },
            {
              jp: '会議は金曜日に行うことになった。',
              romaji: 'Kaigi wa kin\u2019yōbi ni okonau koto ni natta.',
              meaning: {
                en: 'It has been decided that the meeting will be held on Friday.',
                vi: 'Đã quyết định rằng cuộc họp sẽ được tổ chức vào thứ Sáu.'
              }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A healthier life', vi: 'Một cuộc sống lành mạnh hơn' },
          lines: [
            {
              jp: '去年から、私は健康に気をつけるようになりました。',
              romaji: 'Kyonen kara, watashi wa kenkō ni ki o tsukeru yō ni narimashita.',
              meaning: {
                en: 'Since last year, I have come to pay attention to my health.',
                vi: 'Từ năm ngoái, tôi đã trở nên chú ý đến sức khỏe.'
              }
            },
            {
              jp: '毎朝運動して、野菜をたくさん食べるようにしています。',
              romaji: 'Maiasa undō shite, yasai o takusan taberu yō ni shite imasu.',
              meaning: {
                en: 'I exercise every morning and try to eat a lot of vegetables.',
                vi: 'Mỗi sáng tôi tập thể dục và cố gắng ăn nhiều rau.'
              }
            },
            {
              jp: '体に悪いので、お酒もやめることにしました。',
              romaji: 'Karada ni warui node, osake mo yameru koto ni shimashita.',
              meaning: {
                en: 'Because it\u2019s bad for my body, I also decided to quit drinking.',
                vi: 'Vì hại cho cơ thể, tôi cũng quyết định bỏ rượu.'
              }
            },
            {
              jp: 'おかげで、前より元気になりました。',
              romaji: 'Okage de, mae yori genki ni narimashita.',
              meaning: {
                en: 'Thanks to that, I have become healthier than before.',
                vi: 'Nhờ vậy, tôi đã khỏe hơn trước.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What does the writer try to do every day?',
                vi: 'Người viết cố gắng làm gì mỗi ngày?'
              },
              choices: [
                {
                  id: 'a',
                  label: { en: 'Exercise and eat vegetables', vi: 'Tập thể dục và ăn rau' }
                },
                { id: 'b', label: { en: 'Drink alcohol', vi: 'Uống rượu' } },
                { id: 'c', label: { en: 'Stay up late', vi: 'Thức khuya' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'What did the writer decide to quit?',
                vi: 'Người viết quyết định bỏ gì?'
              },
              choices: [
                { id: 'a', label: { en: 'Drinking alcohol', vi: 'Uống rượu' } },
                { id: 'b', label: { en: 'Exercising', vi: 'Tập thể dục' } },
                { id: 'c', label: { en: 'Eating vegetables', vi: 'Ăn rau' } }
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
        en: 'Reason & Cause Connectives',
        vi: 'Liên từ chỉ lý do & nguyên nhân'
      },
      focus: {
        en: 'Express reasons and causes with ため(に), おかげで, せいで and によって.',
        vi: 'Diễn tả lý do và nguyên nhân với ため(に), おかげで, せいで và によって.'
      },
      vocab: [
        {
          kana: 'じこ',
          kanji: '事故',
          romaji: 'jiko',
          meaning: { en: 'accident', vi: 'tai nạn' }
        },
        {
          kana: 'ちこく',
          kanji: '遅刻',
          romaji: 'chikoku',
          meaning: { en: 'being late', vi: 'sự đi muộn' }
        },
        {
          kana: 'たいふう',
          kanji: '台風',
          romaji: 'taifū',
          meaning: { en: 'typhoon', vi: 'bão' }
        },
        {
          kana: 'ちゅうし',
          kanji: '中止',
          romaji: 'chūshi',
          meaning: { en: 'cancellation', vi: 'hủy bỏ' }
        },
        {
          kana: 'ごうかく',
          kanji: '合格',
          romaji: 'gōkaku',
          meaning: { en: 'passing (an exam)', vi: 'đỗ, đậu' }
        },
        {
          kana: 'おうえん',
          kanji: '応援',
          romaji: 'ōen',
          meaning: { en: 'support, cheering', vi: 'cổ vũ, ủng hộ' }
        },
        {
          kana: 'ねぼう',
          kanji: '寝坊',
          romaji: 'nebō',
          meaning: { en: 'oversleeping', vi: 'ngủ quên' }
        },
        {
          kana: 'こうつう',
          kanji: '交通',
          romaji: 'kōtsū',
          meaning: { en: 'traffic, transport', vi: 'giao thông' }
        },
        {
          kana: 'えいきょう',
          kanji: '影響',
          romaji: 'eikyō',
          meaning: { en: 'influence, effect', vi: 'ảnh hưởng' }
        },
        {
          kana: 'ちいき',
          kanji: '地域',
          romaji: 'chiiki',
          meaning: { en: 'region, area', vi: 'khu vực, vùng' }
        },
        {
          kana: 'ぶっか',
          kanji: '物価',
          romaji: 'bukka',
          meaning: { en: 'prices (of goods)', vi: 'giá cả' }
        },
        {
          kana: 'こまかい',
          kanji: '細かい',
          romaji: 'komakai',
          meaning: { en: 'detailed, fine', vi: 'chi tiết, nhỏ' }
        }
      ],
      grammar: [
        {
          pattern: '普通形 ため（に）',
          title: { en: 'Because of / due to (ため)', vi: 'Vì / do (ため)' },
          explanation: {
            en: '〜ため(に) states a reason in a formal, objective tone, common in writing and news. Nouns take の (事故のため).',
            vi: '〜ため(に) nêu lý do với giọng trang trọng, khách quan, hay dùng trong văn viết và tin tức. Danh từ thêm の (事故のため).'
          },
          examples: [
            {
              jp: '事故のため、電車が遅れています。',
              romaji: 'Jiko no tame, densha ga okurete imasu.',
              meaning: {
                en: 'Due to an accident, the train is delayed.',
                vi: 'Do tai nạn, tàu điện đang bị chậm.'
              }
            },
            {
              jp: '台風が来たため、試合は中止になった。',
              romaji: 'Taifū ga kita tame, shiai wa chūshi ni natta.',
              meaning: {
                en: 'Because a typhoon came, the match was cancelled.',
                vi: 'Vì bão đến, trận đấu đã bị hủy.'
              }
            }
          ]
        },
        {
          pattern: '普通形 おかげで',
          title: { en: 'Thanks to (positive cause)', vi: 'Nhờ có (nguyên nhân tốt)' },
          explanation: {
            en: '〜おかげで gives a reason for a good result, with gratitude. Nouns take の (先生のおかげで).',
            vi: '〜おかげで nêu lý do cho kết quả tốt, kèm sự biết ơn. Danh từ thêm の (先生のおかげで).'
          },
          examples: [
            {
              jp: '先生のおかげで、試験に合格できました。',
              romaji: 'Sensei no okage de, shiken ni gōkaku dekimashita.',
              meaning: {
                en: 'Thanks to my teacher, I was able to pass the exam.',
                vi: 'Nhờ thầy giáo, tôi đã đỗ kỳ thi.'
              }
            },
            {
              jp: 'みんなが応援してくれたおかげで、頑張れた。',
              romaji: 'Minna ga ōen shite kureta okage de, ganbareta.',
              meaning: {
                en: 'Thanks to everyone cheering me on, I could do my best.',
                vi: 'Nhờ mọi người cổ vũ, tôi đã cố gắng được.'
              }
            }
          ]
        },
        {
          pattern: '普通形 せいで',
          title: { en: 'Because of (negative cause)', vi: 'Tại vì (nguyên nhân xấu)' },
          explanation: {
            en: '〜せいで blames a bad result on a cause. Nouns take の (雨のせいで). 〜せいか softens it to "perhaps because".',
            vi: '〜せいで quy kết quả xấu cho một nguyên nhân. Danh từ thêm の (雨のせいで). 〜せいか làm nhẹ thành "có lẽ vì".'
          },
          examples: [
            {
              jp: '寝坊したせいで、会議に遅刻しました。',
              romaji: 'Nebō shita sei de, kaigi ni chikoku shimashita.',
              meaning: {
                en: 'Because I overslept, I was late for the meeting.',
                vi: 'Tại vì ngủ quên, tôi đã đến họp muộn.'
              }
            },
            {
              jp: '台風のせいで、旅行に行けなかった。',
              romaji: 'Taifū no sei de, ryokō ni ikenakatta.',
              meaning: {
                en: 'Because of the typhoon, I couldn\u2019t go on the trip.',
                vi: 'Tại cơn bão, tôi đã không thể đi du lịch.'
              }
            }
          ]
        },
        {
          pattern: 'N によって',
          title: { en: 'Depending on / by means of (によって)', vi: 'Tùy theo / bằng (によって)' },
          explanation: {
            en: '〜によって shows cause, means, or variation depending on something. 〜によっては means "depending on (some cases)".',
            vi: '〜によって chỉ nguyên nhân, phương tiện, hoặc sự khác nhau tùy theo điều gì. 〜によっては nghĩa là "tùy trường hợp".'
          },
          examples: [
            {
              jp: '地域によって、物価が違います。',
              romaji: 'Chiiki ni yotte, bukka ga chigaimasu.',
              meaning: {
                en: 'Prices differ depending on the region.',
                vi: 'Giá cả khác nhau tùy theo khu vực.'
              }
            },
            {
              jp: '天気によって、計画を変えましょう。',
              romaji: 'Tenki ni yotte, keikaku o kaemashō.',
              meaning: {
                en: 'Let\u2019s change the plan depending on the weather.',
                vi: 'Hãy thay đổi kế hoạch tùy theo thời tiết.'
              }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A delayed trip', vi: 'Chuyến đi bị hoãn' },
          lines: [
            {
              jp: '先週末、家族と旅行に行く予定でした。',
              romaji: 'Senshūmatsu, kazoku to ryokō ni iku yotei deshita.',
              meaning: {
                en: 'Last weekend, I planned to go on a trip with my family.',
                vi: 'Cuối tuần trước, tôi định đi du lịch với gia đình.'
              }
            },
            {
              jp: 'しかし、台風のせいで、飛行機が飛びませんでした。',
              romaji: 'Shikashi, taifū no sei de, hikōki ga tobimasen deshita.',
              meaning: {
                en: 'However, because of the typhoon, the plane did not fly.',
                vi: 'Nhưng vì cơn bão, máy bay đã không cất cánh.'
              }
            },
            {
              jp: '天気によって、予定を変えなければなりませんでした。',
              romaji: 'Tenki ni yotte, yotei o kaenakereba narimasen deshita.',
              meaning: {
                en: 'Depending on the weather, we had to change our plans.',
                vi: 'Tùy theo thời tiết, chúng tôi phải thay đổi kế hoạch.'
              }
            },
            {
              jp: 'でも、ホテルの人のおかげで、別の楽しい計画ができました。',
              romaji: 'Demo, hoteru no hito no okage de, betsu no tanoshii keikaku ga dekimashita.',
              meaning: {
                en: 'But thanks to the hotel staff, we made another fun plan.',
                vi: 'Nhưng nhờ nhân viên khách sạn, chúng tôi đã có một kế hoạch vui khác.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'Why didn\u2019t the plane fly?',
                vi: 'Tại sao máy bay không cất cánh?'
              },
              choices: [
                { id: 'a', label: { en: 'Because of a typhoon', vi: 'Vì cơn bão' } },
                { id: 'b', label: { en: 'Because of an accident', vi: 'Vì một tai nạn' } },
                { id: 'c', label: { en: 'Because of oversleeping', vi: 'Vì ngủ quên' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'Thanks to whom did they make a new plan?',
                vi: 'Nhờ ai mà họ lập được kế hoạch mới?'
              },
              choices: [
                { id: 'a', label: { en: 'The hotel staff', vi: 'Nhân viên khách sạn' } },
                { id: 'b', label: { en: 'The teacher', vi: 'Giáo viên' } },
                { id: 'c', label: { en: 'The pilot', vi: 'Phi công' } }
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
        en: 'Conjecture & Certainty',
        vi: 'Suy đoán & Chắc chắn'
      },
      focus: {
        en: 'Express expectation, explanation, obligation and proportion with はずだ, わけだ, べきだ and ば〜ほど.',
        vi: 'Diễn tả kỳ vọng, giải thích, nghĩa vụ và tỉ lệ với はずだ, わけだ, べきだ và ば〜ほど.'
      },
      vocab: [
        {
          kana: 'とどく',
          kanji: '届く',
          romaji: 'todoku',
          meaning: { en: 'to arrive, be delivered', vi: 'đến nơi, được giao' }
        },
        {
          kana: 'るす',
          kanji: '留守',
          romaji: 'rusu',
          meaning: { en: 'being away from home', vi: 'vắng nhà' }
        },
        {
          kana: 'りゆう',
          kanji: '理由',
          romaji: 'riyū',
          meaning: { en: 'reason', vi: 'lý do' }
        },
        {
          kana: 'まもる',
          kanji: '守る',
          romaji: 'mamoru',
          meaning: { en: 'to protect, keep (a rule)', vi: 'bảo vệ, tuân thủ' }
        },
        {
          kana: 'あやまる',
          kanji: '謝る',
          romaji: 'ayamaru',
          meaning: { en: 'to apologize', vi: 'xin lỗi' }
        },
        {
          kana: 'けいけんしゃ',
          kanji: '経験者',
          romaji: 'keikensha',
          meaning: { en: 'experienced person', vi: 'người có kinh nghiệm' }
        },
        {
          kana: 'なれる',
          kanji: '慣れる',
          romaji: 'nareru',
          meaning: { en: 'to get used to', vi: 'quen với' }
        },
        {
          kana: 'じょうたつ',
          kanji: '上達',
          romaji: 'jōtatsu',
          meaning: { en: 'improvement (of skill)', vi: 'tiến bộ (kỹ năng)' }
        },
        {
          kana: 'かんがえ',
          kanji: '考え',
          romaji: 'kangae',
          meaning: { en: 'thought, idea', vi: 'suy nghĩ, ý kiến' }
        },
        {
          kana: 'むずかしい',
          kanji: '難しい',
          romaji: 'muzukashii',
          meaning: { en: 'difficult', vi: 'khó' }
        },
        {
          kana: 'たしか',
          kanji: '確か',
          romaji: 'tashika',
          meaning: { en: 'certain; if I recall', vi: 'chắc chắn; nếu tôi nhớ không nhầm' }
        },
        {
          kana: 'やくそくどおり',
          kanji: '約束通り',
          romaji: 'yakusoku-dōri',
          meaning: { en: 'as promised', vi: 'đúng như đã hứa' }
        }
      ],
      grammar: [
        {
          pattern: '普通形 はずだ',
          title: { en: 'Should / ought to be (expectation)', vi: 'Chắc là / đáng lẽ (kỳ vọng)' },
          explanation: {
            en: '〜はずだ shows logical expectation based on evidence. 〜はずがない means "there is no way that...".',
            vi: '〜はずだ thể hiện kỳ vọng hợp lý dựa trên căn cứ. 〜はずがない nghĩa là "không thể nào...".'
          },
          examples: [
            {
              jp: '彼は約束通り来るはずです。',
              romaji: 'Kare wa yakusoku-dōri kuru hazu desu.',
              meaning: {
                en: 'He should come as promised.',
                vi: 'Anh ấy chắc sẽ đến đúng như đã hứa.'
              }
            },
            {
              jp: '荷物は昨日届いたはずだ。',
              romaji: 'Nimotsu wa kinō todoita hazu da.',
              meaning: {
                en: 'The package should have arrived yesterday.',
                vi: 'Kiện hàng đáng lẽ đã đến vào hôm qua.'
              }
            }
          ]
        },
        {
          pattern: '普通形 わけだ',
          title: { en: 'No wonder / that means', vi: 'Hèn gì / tức là' },
          explanation: {
            en: '〜わけだ draws a natural conclusion or explanation from known facts ("so that\u2019s why / it follows that").',
            vi: '〜わけだ rút ra kết luận hay lời giải thích tự nhiên từ sự thật đã biết ("hèn gì / tức là").'
          },
          examples: [
            {
              jp: '電気が消えている。留守なわけだ。',
              romaji: 'Denki ga kiete iru. Rusu na wake da.',
              meaning: {
                en: 'The lights are off. So that means no one is home.',
                vi: 'Đèn đã tắt. Tức là không có ai ở nhà.'
              }
            },
            {
              jp: '10年も住んでいたのか。日本語が上手なわけだ。',
              romaji: 'Jū-nen mo sunde ita no ka. Nihongo ga jōzu na wake da.',
              meaning: {
                en: 'You lived there 10 years? No wonder your Japanese is good.',
                vi: 'Bạn đã sống ở đó 10 năm à? Hèn gì tiếng Nhật giỏi.'
              }
            }
          ]
        },
        {
          pattern: 'V（辞書形）べきだ',
          title: { en: 'Should / ought to (advice)', vi: 'Nên / phải (lời khuyên)' },
          explanation: {
            en: '〜べきだ states a strong opinion about what is right to do. Negative: 〜べきではない. する may be するべき or すべき.',
            vi: '〜べきだ nêu ý kiến mạnh về điều đúng nên làm. Phủ định: 〜べきではない. する có thể là するべき hoặc すべき.'
          },
          examples: [
            {
              jp: '約束は守るべきです。',
              romaji: 'Yakusoku wa mamoru beki desu.',
              meaning: {
                en: 'You should keep your promises.',
                vi: 'Bạn nên giữ lời hứa.'
              }
            },
            {
              jp: '悪いことをしたら、すぐに謝るべきだ。',
              romaji: 'Warui koto o shitara, sugu ni ayamaru beki da.',
              meaning: {
                en: 'If you do something wrong, you should apologize right away.',
                vi: 'Nếu làm điều sai, bạn nên xin lỗi ngay.'
              }
            }
          ]
        },
        {
          pattern: 'V（ば形）ほど',
          title: { en: 'The more... the more (ば〜ほど)', vi: 'Càng... càng (ば〜ほど)' },
          explanation: {
            en: 'Repeats the verb in ば-form + dictionary form + ほど to show proportional change. Adjectives: 高ければ高いほど.',
            vi: 'Lặp động từ ở thể ば + thể từ điển + ほど để chỉ sự thay đổi tỉ lệ. Tính từ: 高ければ高いほど.'
          },
          examples: [
            {
              jp: '練習すればするほど、上手になります。',
              romaji: 'Renshū sureba suru hodo, jōzu ni narimasu.',
              meaning: {
                en: 'The more you practice, the better you get.',
                vi: 'Càng luyện tập, bạn càng giỏi.'
              }
            },
            {
              jp: '考えれば考えるほど、わからなくなった。',
              romaji: 'Kangaereba kangaeru hodo, wakaranaku natta.',
              meaning: {
                en: 'The more I thought about it, the less I understood.',
                vi: 'Càng suy nghĩ, tôi càng không hiểu.'
              }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'Learning a language', vi: 'Học một ngôn ngữ' },
          lines: [
            {
              jp: '友達のリンさんは日本語がとても上手です。',
              romaji: 'Tomodachi no Rin-san wa nihongo ga totemo jōzu desu.',
              meaning: {
                en: 'My friend Rin is very good at Japanese.',
                vi: 'Bạn tôi, Rin, rất giỏi tiếng Nhật.'
              }
            },
            {
              jp: '聞いてみると、10年も日本に住んでいたわけです。',
              romaji: 'Kiite miru to, jū-nen mo Nihon ni sunde ita wake desu.',
              meaning: {
                en: 'When I asked, it turned out she had lived in Japan for 10 years.',
                vi: 'Khi hỏi thì hóa ra cô ấy đã sống ở Nhật tận 10 năm.'
              }
            },
            {
              jp: 'リンさんは「使えば使うほど上手になる」と言いました。',
              romaji: 'Rin-san wa "tsukaeba tsukau hodo jōzu ni naru" to iimashita.',
              meaning: {
                en: 'Rin said, "The more you use it, the better you get."',
                vi: 'Rin nói: "Càng dùng thì càng giỏi."'
              }
            },
            {
              jp: 'だから、私も毎日日本語を話すべきだと思いました。',
              romaji: 'Dakara, watashi mo mainichi nihongo o hanasu beki da to omoimashita.',
              meaning: {
                en: 'So I thought I should also speak Japanese every day.',
                vi: 'Vì vậy, tôi nghĩ mình cũng nên nói tiếng Nhật mỗi ngày.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'Why is Rin good at Japanese?',
                vi: 'Tại sao Rin giỏi tiếng Nhật?'
              },
              choices: [
                {
                  id: 'a',
                  label: { en: 'She lived in Japan for 10 years', vi: 'Cô ấy sống ở Nhật 10 năm' }
                },
                { id: 'b', label: { en: 'She is a teacher', vi: 'Cô ấy là giáo viên' } },
                { id: 'c', label: { en: 'She never studied', vi: 'Cô ấy chưa từng học' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'What did the writer decide they should do?',
                vi: 'Người viết quyết định mình nên làm gì?'
              },
              choices: [
                {
                  id: 'a',
                  label: { en: 'Speak Japanese every day', vi: 'Nói tiếng Nhật mỗi ngày' }
                },
                { id: 'b', label: { en: 'Move to Japan', vi: 'Chuyển đến Nhật' } },
                { id: 'c', label: { en: 'Stop studying', vi: 'Ngừng học' } }
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
        en: 'Topic & Reference Expressions',
        vi: 'Mẫu câu chủ đề & dẫn nguồn'
      },
      focus: {
        en: 'Introduce and discuss topics with という, について, に対して, に関して and によると.',
        vi: 'Giới thiệu và bàn về chủ đề với という, について, に対して, に関して và によると.'
      },
      vocab: [
        {
          kana: 'きじ',
          kanji: '記事',
          romaji: 'kiji',
          meaning: { en: 'article (news)', vi: 'bài báo' }
        },
        {
          kana: 'けんきゅう',
          kanji: '研究',
          romaji: 'kenkyū',
          meaning: { en: 'research', vi: 'nghiên cứu' }
        },
        {
          kana: 'しつもん',
          kanji: '質問',
          romaji: 'shitsumon',
          meaning: { en: 'question', vi: 'câu hỏi' }
        },
        {
          kana: 'いけん',
          kanji: '意見',
          romaji: 'iken',
          meaning: { en: 'opinion', vi: 'ý kiến' }
        },
        {
          kana: 'はんたい',
          kanji: '反対',
          romaji: 'hantai',
          meaning: { en: 'opposition, against', vi: 'phản đối' }
        },
        {
          kana: 'さんせい',
          kanji: '賛成',
          romaji: 'sansei',
          meaning: { en: 'agreement, for', vi: 'tán thành' }
        },
        {
          kana: 'てんきよほう',
          kanji: '天気予報',
          romaji: 'tenki yohō',
          meaning: { en: 'weather forecast', vi: 'dự báo thời tiết' }
        },
        {
          kana: 'ニュース',
          romaji: 'nyūsu',
          meaning: { en: 'news', vi: 'tin tức' }
        },
        {
          kana: 'かんきょう',
          kanji: '環境',
          romaji: 'kankyō',
          meaning: { en: 'environment', vi: 'môi trường' }
        },
        {
          kana: 'もんだい',
          kanji: '問題',
          romaji: 'mondai',
          meaning: { en: 'problem, issue', vi: 'vấn đề' }
        },
        {
          kana: 'せつめい',
          kanji: '説明',
          romaji: 'setsumei',
          meaning: { en: 'explanation', vi: 'giải thích' }
        },
        {
          kana: 'ていねいに',
          kanji: '丁寧に',
          romaji: 'teinei ni',
          meaning: { en: 'politely, carefully', vi: 'lịch sự, cẩn thận' }
        }
      ],
      grammar: [
        {
          pattern: 'N という N',
          title: { en: 'Called / named (という)', vi: 'Gọi là / tên là (という)' },
          explanation: {
            en: '〜という introduces a name or definition, especially something unfamiliar to the listener.',
            vi: '〜という giới thiệu một cái tên hay định nghĩa, nhất là điều người nghe chưa biết.'
          },
          examples: [
            {
              jp: '「すし」という日本料理を知っていますか。',
              romaji: '"Sushi" to iu nihon ryōri o shitte imasu ka.',
              meaning: {
                en: 'Do you know the Japanese dish called "sushi"?',
                vi: 'Bạn có biết món ăn Nhật gọi là "sushi" không?'
              }
            },
            {
              jp: '田中という人から電話がありました。',
              romaji: 'Tanaka to iu hito kara denwa ga arimashita.',
              meaning: {
                en: 'There was a call from a person named Tanaka.',
                vi: 'Có một người tên Tanaka gọi điện đến.'
              }
            }
          ]
        },
        {
          pattern: 'N について',
          title: { en: 'About / concerning (について)', vi: 'Về / liên quan đến (について)' },
          explanation: {
            en: '〜について marks the topic of thinking, talking, or writing. 〜に関して is a more formal version.',
            vi: '〜について đánh dấu chủ đề của việc suy nghĩ, nói, hay viết. 〜に関して là cách nói trang trọng hơn.'
          },
          examples: [
            {
              jp: '日本の文化について研究しています。',
              romaji: 'Nihon no bunka ni tsuite kenkyū shite imasu.',
              meaning: {
                en: 'I am doing research about Japanese culture.',
                vi: 'Tôi đang nghiên cứu về văn hóa Nhật Bản.'
              }
            },
            {
              jp: 'この問題に関して、意見を聞かせてください。',
              romaji: 'Kono mondai ni kanshite, iken o kikasete kudasai.',
              meaning: {
                en: 'Please share your opinion regarding this problem.',
                vi: 'Xin hãy cho tôi nghe ý kiến về vấn đề này.'
              }
            }
          ]
        },
        {
          pattern: 'N に対して',
          title: { en: 'Toward / against (に対して)', vi: 'Đối với / nhằm vào (に対して)' },
          explanation: {
            en: '〜に対して shows the target or object of an attitude or action ("toward, in response to"). It can also mark contrast.',
            vi: '〜に対して chỉ đối tượng của thái độ hay hành động ("đối với, nhằm vào"). Cũng có thể chỉ sự tương phản.'
          },
          examples: [
            {
              jp: '先生は学生の質問に対して丁寧に答えました。',
              romaji: 'Sensei wa gakusei no shitsumon ni taishite teinei ni kotaemashita.',
              meaning: {
                en: 'The teacher answered the students\u2019 questions politely.',
                vi: 'Giáo viên đã trả lời câu hỏi của học sinh một cách lịch sự.'
              }
            },
            {
              jp: 'その計画に対して、多くの人が反対した。',
              romaji: 'Sono keikaku ni taishite, ōku no hito ga hantai shita.',
              meaning: {
                en: 'Many people opposed that plan.',
                vi: 'Nhiều người đã phản đối kế hoạch đó.'
              }
            }
          ]
        },
        {
          pattern: 'N によると',
          title: { en: 'According to (によると)', vi: 'Theo như (によると)' },
          explanation: {
            en: '〜によると cites a source of information and usually ends with reported speech (〜そうだ / 〜らしい).',
            vi: '〜によると dẫn nguồn thông tin và thường kết thúc bằng lời tường thuật (〜そうだ / 〜らしい).'
          },
          examples: [
            {
              jp: '天気予報によると、明日は雨だそうです。',
              romaji: 'Tenki yohō ni yoru to, ashita wa ame da sō desu.',
              meaning: {
                en: 'According to the weather forecast, it will rain tomorrow.',
                vi: 'Theo dự báo thời tiết, ngày mai trời sẽ mưa.'
              }
            },
            {
              jp: 'ニュースによると、事故で電車が止まったらしい。',
              romaji: 'Nyūsu ni yoru to, jiko de densha ga tomatta rashii.',
              meaning: {
                en: 'According to the news, the trains stopped due to an accident.',
                vi: 'Theo tin tức, tàu điện đã dừng vì một tai nạn.'
              }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A news article', vi: 'Một bài báo' },
          lines: [
            {
              jp: '今日、環境について書かれた記事を読みました。',
              romaji: 'Kyō, kankyō ni tsuite kakareta kiji o yomimashita.',
              meaning: {
                en: 'Today I read an article written about the environment.',
                vi: 'Hôm nay tôi đã đọc một bài báo viết về môi trường.'
              }
            },
            {
              jp: 'その記事によると、海のゴミが大きな問題になっているそうです。',
              romaji: 'Sono kiji ni yoru to, umi no gomi ga ōkina mondai ni natte iru sō desu.',
              meaning: {
                en: 'According to the article, ocean garbage has become a big problem.',
                vi: 'Theo bài báo, rác thải trên biển đang trở thành một vấn đề lớn.'
              }
            },
            {
              jp: '多くの国がこの問題に対して対策を始めました。',
              romaji: 'Ōku no kuni ga kono mondai ni taishite taisaku o hajimemashita.',
              meaning: {
                en: 'Many countries have started measures against this problem.',
                vi: 'Nhiều quốc gia đã bắt đầu các biện pháp đối với vấn đề này.'
              }
            },
            {
              jp: '私もこの考えに賛成です。',
              romaji: 'Watashi mo kono kangae ni sansei desu.',
              meaning: {
                en: 'I also agree with this idea.',
                vi: 'Tôi cũng tán thành ý kiến này.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What was the article about?',
                vi: 'Bài báo viết về điều gì?'
              },
              choices: [
                { id: 'a', label: { en: 'The environment', vi: 'Môi trường' } },
                { id: 'b', label: { en: 'A drinking party', vi: 'Một buổi tiệc nhậu' } },
                { id: 'c', label: { en: 'A weather forecast', vi: 'Một bản dự báo thời tiết' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'According to the article, what has become a big problem?',
                vi: 'Theo bài báo, điều gì đã trở thành vấn đề lớn?'
              },
              choices: [
                { id: 'a', label: { en: 'Ocean garbage', vi: 'Rác thải trên biển' } },
                { id: 'b', label: { en: 'Traffic accidents', vi: 'Tai nạn giao thông' } },
                { id: 'c', label: { en: 'Rising prices', vi: 'Giá cả tăng' } }
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
        en: 'Honorific & Humble Keigo',
        vi: 'Kính ngữ & Khiêm nhường ngữ'
      },
      focus: {
        en: 'Show respect with honorific お〜になる/〜れる and humility with humble お〜する/いたす.',
        vi: 'Thể hiện sự tôn kính với お〜になる/〜れる và sự khiêm nhường với お〜する/いたす.'
      },
      vocab: [
        {
          kana: 'おきゃくさま',
          kanji: 'お客様',
          romaji: 'okyaku-sama',
          meaning: { en: 'customer, guest (honorific)', vi: 'khách (kính ngữ)' }
        },
        {
          kana: 'はいけん',
          kanji: '拝見',
          romaji: 'haiken',
          meaning: { en: 'to see (humble)', vi: 'xem (khiêm nhường)' }
        },
        {
          kana: 'ぞんじる',
          kanji: '存じる',
          romaji: 'zonjiru',
          meaning: { en: 'to know/think (humble)', vi: 'biết/nghĩ (khiêm nhường)' }
        },
        {
          kana: 'めしあがる',
          kanji: '召し上がる',
          romaji: 'meshiagaru',
          meaning: { en: 'to eat/drink (honorific)', vi: 'dùng (ăn/uống) (kính ngữ)' }
        },
        {
          kana: 'いらっしゃる',
          romaji: 'irassharu',
          meaning: { en: 'to be/come/go (honorific)', vi: 'có mặt/đến/đi (kính ngữ)' }
        },
        {
          kana: 'うかがう',
          kanji: '伺う',
          romaji: 'ukagau',
          meaning: { en: 'to visit/ask (humble)', vi: 'thăm/hỏi (khiêm nhường)' }
        },
        {
          kana: 'たんとう',
          kanji: '担当',
          romaji: 'tantō',
          meaning: { en: 'person in charge', vi: 'người phụ trách' }
        },
        {
          kana: 'あんない',
          kanji: '案内',
          romaji: 'annai',
          meaning: { en: 'guidance, showing around', vi: 'hướng dẫn, dẫn đi' }
        },
        {
          kana: 'れんらく',
          kanji: '連絡',
          romaji: 'renraku',
          meaning: { en: 'contact, getting in touch', vi: 'liên lạc' }
        },
        {
          kana: 'しょうしょう',
          kanji: '少々',
          romaji: 'shōshō',
          meaning: { en: 'a little (formal)', vi: 'một chút (trang trọng)' }
        },
        {
          kana: 'うけつけ',
          kanji: '受付',
          romaji: 'uketsuke',
          meaning: { en: 'reception desk', vi: 'quầy lễ tân' }
        },
        {
          kana: 'しりょう',
          kanji: '資料',
          romaji: 'shiryō',
          meaning: { en: 'documents, materials', vi: 'tài liệu' }
        }
      ],
      grammar: [
        {
          pattern: 'お／ご + V（ます形）+ になる',
          title: { en: 'Honorific (尊敬語) お〜になる', vi: 'Kính ngữ (尊敬語) お〜になる' },
          explanation: {
            en: 'Raises the listener or a superior. Attach お to native verb stems and ご to Sino-Japanese nouns. Some verbs have special forms (見る→ご覧になる).',
            vi: 'Nâng cao người nghe hay người trên. Thêm お vào gốc động từ thuần Nhật và ご vào danh từ Hán-Nhật. Một số động từ có dạng riêng (見る→ご覧になる).'
          },
          examples: [
            {
              jp: '社長はもうお帰りになりました。',
              romaji: 'Shachō wa mō okaeri ni narimashita.',
              meaning: {
                en: 'The president has already gone home.',
                vi: 'Giám đốc đã về rồi ạ.'
              }
            },
            {
              jp: 'こちらの資料をご覧になりましたか。',
              romaji: 'Kochira no shiryō o goran ni narimashita ka.',
              meaning: {
                en: 'Have you looked at these documents?',
                vi: 'Ngài đã xem tài liệu này chưa ạ?'
              }
            }
          ]
        },
        {
          pattern: 'V（れる／られる）尊敬',
          title: { en: 'Honorific with 〜れる/られる', vi: 'Kính ngữ với 〜れる/られる' },
          explanation: {
            en: 'The passive form is also used as a lighter honorific to respect the subject of the action.',
            vi: 'Thể bị động cũng được dùng như một kính ngữ nhẹ để tôn trọng chủ thể của hành động.'
          },
          examples: [
            {
              jp: '部長はいつ来られますか。',
              romaji: 'Buchō wa itsu koraremasu ka.',
              meaning: {
                en: 'When will the manager come?',
                vi: 'Trưởng phòng khi nào đến ạ?'
              }
            },
            {
              jp: '先生はこの本を書かれました。',
              romaji: 'Sensei wa kono hon o kakaremashita.',
              meaning: {
                en: 'The teacher wrote this book.',
                vi: 'Thầy đã viết quyển sách này.'
              }
            }
          ]
        },
        {
          pattern: 'お／ご + V（ます形）+ する／いたす',
          title: { en: 'Humble (謙譲語) お〜する', vi: 'Khiêm nhường ngữ (謙譲語) お〜する' },
          explanation: {
            en: 'Lowers yourself when your action affects a superior. いたす is more humble than する. Some verbs have special forms (言う→申す).',
            vi: 'Hạ thấp bản thân khi hành động của bạn ảnh hưởng tới người trên. いたす khiêm tốn hơn する. Một số động từ có dạng riêng (言う→申す).'
          },
          examples: [
            {
              jp: '私が資料をお送りします。',
              romaji: 'Watashi ga shiryō o ookuri shimasu.',
              meaning: {
                en: 'I will send you the documents.',
                vi: 'Tôi sẽ gửi tài liệu cho ngài ạ.'
              }
            },
            {
              jp: '後ほどこちらからご連絡いたします。',
              romaji: 'Nochihodo kochira kara gorenraku itashimasu.',
              meaning: {
                en: 'We will contact you later.',
                vi: 'Chúng tôi sẽ liên lạc lại với ngài sau ạ.'
              }
            }
          ]
        },
        {
          pattern: '特別な敬語（いらっしゃる・召し上がる・伺う）',
          title: { en: 'Special keigo verbs', vi: 'Động từ kính ngữ đặc biệt' },
          explanation: {
            en: 'Key irregular verbs: honorific いらっしゃる (be/come/go), 召し上がる (eat); humble 伺う (visit/ask), 拝見する (see).',
            vi: 'Các động từ bất quy tắc quan trọng: kính ngữ いらっしゃる (có mặt/đến/đi), 召し上がる (dùng bữa); khiêm nhường 伺う (thăm/hỏi), 拝見する (xem).'
          },
          examples: [
            {
              jp: 'どうぞ、こちらで召し上がってください。',
              romaji: 'Dōzo, kochira de meshiagatte kudasai.',
              meaning: {
                en: 'Please eat here.',
                vi: 'Xin mời ngài dùng bữa ở đây ạ.'
              }
            },
            {
              jp: '明日、お宅に伺ってもよろしいですか。',
              romaji: 'Ashita, otaku ni ukagatte mo yoroshii desu ka.',
              meaning: {
                en: 'May I visit your home tomorrow?',
                vi: 'Ngày mai tôi đến thăm nhà ngài có được không ạ?'
              }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'At the reception desk', vi: 'Tại quầy lễ tân' },
          lines: [
            {
              jp: 'いらっしゃいませ。お客様、お名前を伺ってもよろしいですか。',
              romaji: 'Irasshaimase. Okyaku-sama, onamae o ukagatte mo yoroshii desu ka.',
              meaning: {
                en: 'Welcome. May I ask your name, sir/madam?',
                vi: 'Xin chào quý khách. Tôi có thể hỏi tên của quý khách không ạ?'
              }
            },
            {
              jp: '担当の田中はただ今参ります。少々お待ちください。',
              romaji: 'Tantō no Tanaka wa tadaima mairimasu. Shōshō omachi kudasai.',
              meaning: {
                en: 'Tanaka, the person in charge, is coming now. Please wait a moment.',
                vi: 'Anh Tanaka phụ trách sẽ đến ngay. Xin quý khách đợi một chút ạ.'
              }
            },
            {
              jp: 'よろしければ、こちらでお茶を召し上がってください。',
              romaji: 'Yoroshikereba, kochira de ocha o meshiagatte kudasai.',
              meaning: {
                en: 'If you like, please have some tea here.',
                vi: 'Nếu được, xin quý khách dùng trà ở đây ạ.'
              }
            },
            {
              jp: '資料はあとで私がお送りいたします。',
              romaji: 'Shiryō wa ato de watashi ga ookuri itashimasu.',
              meaning: {
                en: 'I will send you the documents later.',
                vi: 'Tài liệu thì sau đó tôi sẽ gửi cho quý khách ạ.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What does the receptionist ask the customer first?',
                vi: 'Lễ tân hỏi khách điều gì đầu tiên?'
              },
              choices: [
                { id: 'a', label: { en: 'Their name', vi: 'Tên của khách' } },
                { id: 'b', label: { en: 'Their address', vi: 'Địa chỉ của khách' } },
                { id: 'c', label: { en: 'Their phone number', vi: 'Số điện thoại của khách' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'What is the customer offered while waiting?',
                vi: 'Khách được mời gì trong lúc chờ?'
              },
              choices: [
                { id: 'a', label: { en: 'Some tea', vi: 'Trà' } },
                { id: 'b', label: { en: 'A meal', vi: 'Một bữa ăn' } },
                { id: 'c', label: { en: 'A book', vi: 'Một quyển sách' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ]
    },
    ...n3LessonsB,
    ...n3LessonsC,
    ...n3LessonsD,
    ...n3LessonsE
  ])
};
