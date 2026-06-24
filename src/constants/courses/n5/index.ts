import { withSequentialNumbers, type Course } from '../types.ts';
import { n5LessonsB } from './lessons-2.ts';
import { n5LessonsC } from './lessons-3.ts';

export const n5Course: Course = {
  level: 'n5',
  code: 'N5',
  name: { en: 'JLPT N5 Course', vi: 'Khóa học JLPT N5' },
  subtitle: {
    en: 'Build a solid foundation, one lesson at a time.',
    vi: 'Xây nền tảng vững chắc, từng bài một.'
  },
  intro: {
    en: 'A step-by-step JLPT N5 path inspired by top courses like Genki and Minna no Nihongo. Every lesson pairs core vocabulary with the grammar you need to start making sentences.',
    vi: 'Lộ trình JLPT N5 từng bước, lấy cảm hứng từ các giáo trình hàng đầu như Genki và Minna no Nihongo. Mỗi bài kết hợp từ vựng cốt lõi với ngữ pháp cần thiết để bắt đầu đặt câu.'
  },
  seoTitle: {
    en: 'JLPT N5 Course - Vocabulary & Grammar',
    vi: 'Khóa học JLPT N5 - Từ vựng & Ngữ pháp'
  },
  seoDescription: {
    en: 'A free, structured JLPT N5 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
    vi: 'Khóa học JLPT N5 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
  },
  lessons: withSequentialNumbers([
    {
      id: 'lesson-1',
      number: 1,
      title: {
        en: 'Greetings & Self-introduction',
        vi: 'Chào hỏi & Giới thiệu bản thân'
      },
      focus: {
        en: 'Say hello, introduce yourself, and state who someone is with です.',
        vi: 'Chào hỏi, giới thiệu bản thân và nói ai đó là ai với です.'
      },
      vocab: [
        {
          kana: 'おはようございます',
          romaji: 'ohayō gozaimasu',
          meaning: { en: 'good morning', vi: 'chào buổi sáng' }
        },
        {
          kana: 'こんにちは',
          romaji: 'konnichiwa',
          meaning: { en: 'hello / good afternoon', vi: 'xin chào / chào buổi chiều' }
        },
        {
          kana: 'こんばんは',
          romaji: 'konbanwa',
          meaning: { en: 'good evening', vi: 'chào buổi tối' }
        },
        {
          kana: 'はじめまして',
          romaji: 'hajimemashite',
          meaning: { en: 'nice to meet you', vi: 'rất vui được gặp' }
        },
        { kana: 'わたし', kanji: '私', romaji: 'watashi', meaning: { en: 'I, me', vi: 'tôi' } },
        { kana: 'あなた', romaji: 'anata', meaning: { en: 'you', vi: 'bạn' } },
        {
          kana: 'せんせい',
          kanji: '先生',
          romaji: 'sensei',
          meaning: { en: 'teacher', vi: 'giáo viên' }
        },
        {
          kana: 'がくせい',
          kanji: '学生',
          romaji: 'gakusei',
          meaning: { en: 'student', vi: 'học sinh, sinh viên' }
        },
        {
          kana: 'かいしゃいん',
          kanji: '会社員',
          romaji: 'kaishain',
          meaning: { en: 'company employee', vi: 'nhân viên công ty' }
        },
        {
          kana: 'にほん',
          kanji: '日本',
          romaji: 'nihon',
          meaning: { en: 'Japan', vi: 'Nhật Bản' }
        },
        { kana: 'ベトナム', romaji: 'betonamu', meaning: { en: 'Vietnam', vi: 'Việt Nam' } },
        { kana: 'なまえ', kanji: '名前', romaji: 'namae', meaning: { en: 'name', vi: 'tên' } },
        { kana: 'はい', romaji: 'hai', meaning: { en: 'yes', vi: 'vâng, đúng' } },
        { kana: 'いいえ', romaji: 'iie', meaning: { en: 'no', vi: 'không' } }
      ],
      grammar: [
        {
          pattern: 'N は N です',
          title: { en: 'A is B (statement with です)', vi: 'A là B (câu khẳng định với です)' },
          explanation: {
            en: 'は (read "wa") marks the topic; です ends a polite statement. It works like "is/am/are".',
            vi: 'は (đọc là "wa") đánh dấu chủ đề; です kết thúc câu lịch sự, tương đương "là".'
          },
          examples: [
            {
              jp: 'わたしは がくせいです。',
              romaji: 'Watashi wa gakusei desu.',
              meaning: { en: 'I am a student.', vi: 'Tôi là học sinh.' }
            },
            {
              jp: 'たなかさんは せんせいです。',
              romaji: 'Tanaka-san wa sensei desu.',
              meaning: { en: 'Mr. Tanaka is a teacher.', vi: 'Anh Tanaka là giáo viên.' }
            }
          ]
        },
        {
          pattern: 'N は N じゃ ありません',
          title: { en: 'A is not B (negative)', vi: 'A không phải là B (phủ định)' },
          explanation: {
            en: 'Replace です with じゃ ありません (or the more formal では ありません) to make it negative.',
            vi: 'Thay です bằng じゃ ありません (hoặc では ありません trang trọng hơn) để phủ định.'
          },
          examples: [
            {
              jp: 'わたしは せんせいじゃ ありません。',
              romaji: 'Watashi wa sensei ja arimasen.',
              meaning: { en: 'I am not a teacher.', vi: 'Tôi không phải là giáo viên.' }
            },
            {
              jp: 'リンさんは にほんじんじゃ ありません。',
              romaji: 'Rin-san wa nihonjin ja arimasen.',
              meaning: { en: 'Rin is not Japanese.', vi: 'Chị Rin không phải người Nhật.' }
            }
          ]
        },
        {
          pattern: 'N は N ですか',
          title: { en: 'Yes/no question with か', vi: 'Câu hỏi có/không với か' },
          explanation: {
            en: 'Add か to the end to make a question. No question mark is needed.',
            vi: 'Thêm か vào cuối câu để tạo câu hỏi. Không cần dấu chấm hỏi.'
          },
          examples: [
            {
              jp: 'あなたは がくせいですか。',
              romaji: 'Anata wa gakusei desu ka.',
              meaning: { en: 'Are you a student?', vi: 'Bạn là học sinh phải không?' }
            },
            {
              jp: 'はい、がくせいです。',
              romaji: 'Hai, gakusei desu.',
              meaning: { en: 'Yes, I am a student.', vi: 'Vâng, tôi là học sinh.' }
            }
          ]
        },
        {
          pattern: 'N の N',
          title: { en: 'Possessive / linking の', vi: 'の sở hữu / nối danh từ' },
          explanation: {
            en: 'の links two nouns, showing possession or affiliation, like "of" or apostrophe-s.',
            vi: 'の nối hai danh từ, chỉ sở hữu hay nơi trực thuộc, giống "của".'
          },
          examples: [
            {
              jp: 'わたしの なまえは ハナです。',
              romaji: 'Watashi no namae wa Hana desu.',
              meaning: { en: 'My name is Hana.', vi: 'Tên tôi là Hana.' }
            },
            {
              jp: 'にほんごの せんせい',
              romaji: 'nihongo no sensei',
              meaning: { en: 'a Japanese (language) teacher', vi: 'giáo viên tiếng Nhật' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A new student', vi: 'Một học sinh mới' },
          lines: [
            {
              jp: 'はじめまして。わたしは リンです。',
              romaji: 'Hajimemashite. Watashi wa Rin desu.',
              meaning: { en: 'Nice to meet you. I am Rin.', vi: 'Rất vui được gặp. Tôi là Rin.' }
            },
            {
              jp: 'ベトナムじんです。がくせいです。',
              romaji: 'Betonamu-jin desu. Gakusei desu.',
              meaning: {
                en: 'I am Vietnamese. I am a student.',
                vi: 'Tôi là người Việt Nam. Tôi là học sinh.'
              }
            },
            {
              jp: 'たなかさんは わたしの にほんごの せんせいです。',
              romaji: 'Tanaka-san wa watashi no nihongo no sensei desu.',
              meaning: {
                en: 'Mr. Tanaka is my Japanese teacher.',
                vi: 'Thầy Tanaka là giáo viên tiếng Nhật của tôi.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'Where is Rin from?', vi: 'Rin đến từ đâu?' },
              choices: [
                { id: 'a', label: { en: 'Japan', vi: 'Nhật Bản' } },
                { id: 'b', label: { en: 'Vietnam', vi: 'Việt Nam' } },
                { id: 'c', label: { en: 'China', vi: 'Trung Quốc' } }
              ],
              correctId: 'b'
            },
            {
              id: 'q2',
              question: { en: 'Who is Mr. Tanaka?', vi: 'Ông Tanaka là ai?' },
              choices: [
                {
                  id: 'a',
                  label: { en: "Rin's Japanese teacher", vi: 'Giáo viên tiếng Nhật của Rin' }
                },
                { id: 'b', label: { en: "Rin's friend", vi: 'Bạn của Rin' } },
                { id: 'c', label: { en: 'A company employee', vi: 'Nhân viên công ty' } }
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
        en: 'This, That & Everyday Things',
        vi: 'Cái này, cái kia & Đồ vật hằng ngày'
      },
      focus: {
        en: 'Point at objects with これ/それ/あれ and describe what they are.',
        vi: 'Chỉ vào đồ vật với これ/それ/あれ và nói chúng là gì.'
      },
      vocab: [
        {
          kana: 'これ',
          romaji: 'kore',
          meaning: { en: 'this (near me)', vi: 'cái này (gần tôi)' }
        },
        {
          kana: 'それ',
          romaji: 'sore',
          meaning: { en: 'that (near you)', vi: 'cái đó (gần bạn)' }
        },
        {
          kana: 'あれ',
          romaji: 'are',
          meaning: { en: 'that over there', vi: 'cái kia (xa cả hai)' }
        },
        { kana: 'ほん', kanji: '本', romaji: 'hon', meaning: { en: 'book', vi: 'sách' } },
        { kana: 'ペン', romaji: 'pen', meaning: { en: 'pen', vi: 'bút' } },
        { kana: 'かばん', romaji: 'kaban', meaning: { en: 'bag', vi: 'cặp, túi' } },
        {
          kana: 'とけい',
          kanji: '時計',
          romaji: 'tokei',
          meaning: { en: 'clock, watch', vi: 'đồng hồ' }
        },
        { kana: 'くるま', kanji: '車', romaji: 'kuruma', meaning: { en: 'car', vi: 'xe ô tô' } },
        {
          kana: 'スマホ',
          romaji: 'sumaho',
          meaning: { en: 'smartphone', vi: 'điện thoại thông minh' }
        },
        {
          kana: 'なん / なに',
          kanji: '何',
          romaji: 'nan / nani',
          meaning: { en: 'what', vi: 'cái gì' }
        },
        { kana: 'そう', romaji: 'sō', meaning: { en: 'so, that way', vi: 'đúng vậy' } },
        {
          kana: 'ちがいます',
          romaji: 'chigaimasu',
          meaning: { en: "that's wrong / different", vi: 'không đúng, khác' }
        }
      ],
      grammar: [
        {
          pattern: 'これ / それ / あれ は N です',
          title: { en: 'Demonstrative pronouns', vi: 'Đại từ chỉ định' },
          explanation: {
            en: 'これ = near speaker, それ = near listener, あれ = far from both. They stand alone as "this/that".',
            vi: 'これ = gần người nói, それ = gần người nghe, あれ = xa cả hai. Chúng đứng độc lập như "cái này/đó".'
          },
          examples: [
            {
              jp: 'これは ほんです。',
              romaji: 'Kore wa hon desu.',
              meaning: { en: 'This is a book.', vi: 'Đây là quyển sách.' }
            },
            {
              jp: 'あれは わたしの くるまです。',
              romaji: 'Are wa watashi no kuruma desu.',
              meaning: { en: 'That over there is my car.', vi: 'Cái kia là xe của tôi.' }
            }
          ]
        },
        {
          pattern: 'この / その / あの ＋ N',
          title: { en: 'this/that + noun', vi: 'this/that + danh từ' },
          explanation: {
            en: 'Use この/その/あの directly before a noun: この本 = "this book". Never use これ before a noun.',
            vi: 'Dùng この/その/あの ngay trước danh từ: この本 = "quyển sách này". Không dùng これ trước danh từ.'
          },
          examples: [
            {
              jp: 'この かばんは わたしのです。',
              romaji: 'Kono kaban wa watashi no desu.',
              meaning: { en: 'This bag is mine.', vi: 'Cái cặp này là của tôi.' }
            },
            {
              jp: 'その ペンは いくらですか。',
              romaji: 'Sono pen wa ikura desu ka.',
              meaning: { en: 'How much is that pen?', vi: 'Cây bút đó bao nhiêu tiền?' }
            }
          ]
        },
        {
          pattern: 'N は なんですか',
          title: { en: 'What is it?', vi: 'Cái này là gì?' },
          explanation: {
            en: 'なん (what) replaces the unknown noun. Answer with "…です".',
            vi: 'なん (cái gì) thay cho danh từ chưa biết. Trả lời bằng "…です".'
          },
          examples: [
            {
              jp: 'それは なんですか。',
              romaji: 'Sore wa nan desu ka.',
              meaning: { en: 'What is that?', vi: 'Cái đó là gì?' }
            },
            {
              jp: 'これは とけいです。',
              romaji: 'Kore wa tokei desu.',
              meaning: { en: 'This is a clock.', vi: 'Đây là đồng hồ.' }
            }
          ]
        },
        {
          pattern: 'N も',
          title: { en: '…too / also (も)', vi: '…cũng (も)' },
          explanation: {
            en: 'も replaces は to mean "also/too" when the statement is the same as a previous one.',
            vi: 'も thay cho は để diễn đạt "cũng", khi câu giống với câu trước.'
          },
          examples: [
            {
              jp: 'これも ほんです。',
              romaji: 'Kore mo hon desu.',
              meaning: { en: 'This is a book too.', vi: 'Cái này cũng là sách.' }
            },
            {
              jp: 'わたしも がくせいです。',
              romaji: 'Watashi mo gakusei desu.',
              meaning: { en: 'I am a student too.', vi: 'Tôi cũng là học sinh.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'Whose things are these?', vi: 'Đây là đồ của ai?' },
          lines: [
            {
              jp: 'これは わたしの かばんです。',
              romaji: 'Kore wa watashi no kaban desu.',
              meaning: { en: 'This is my bag.', vi: 'Đây là cặp của tôi.' }
            },
            {
              jp: 'その とけいは リンさんのです。',
              romaji: 'Sono tokei wa Rin-san no desu.',
              meaning: { en: 'That watch is Rin\u2019s.', vi: 'Cái đồng hồ đó là của Rin.' }
            },
            {
              jp: 'あれは たなかせんせいの くるまです。',
              romaji: 'Are wa Tanaka-sensei no kuruma desu.',
              meaning: {
                en: 'That over there is Mr. Tanaka\u2019s car.',
                vi: 'Cái kia là xe của thầy Tanaka.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'Whose is the watch?', vi: 'Đồng hồ là của ai?' },
              choices: [
                { id: 'a', label: { en: 'The speaker', vi: 'Người nói' } },
                { id: 'b', label: { en: 'Rin', vi: 'Rin' } },
                { id: 'c', label: { en: 'Mr. Tanaka', vi: 'Thầy Tanaka' } }
              ],
              correctId: 'b'
            },
            {
              id: 'q2',
              question: { en: 'What is the car over there?', vi: 'Chiếc xe ở đằng kia là gì?' },
              choices: [
                { id: 'a', label: { en: "Mr. Tanaka's car", vi: 'Xe của thầy Tanaka' } },
                { id: 'b', label: { en: "Rin's car", vi: 'Xe của Rin' } },
                { id: 'c', label: { en: "The speaker's car", vi: 'Xe của người nói' } }
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
        en: 'Places & Existence',
        vi: 'Địa điểm & Sự tồn tại'
      },
      focus: {
        en: 'Say where things and people are with あります / います.',
        vi: 'Nói đồ vật và người ở đâu với あります / います.'
      },
      vocab: [
        { kana: 'ここ', romaji: 'koko', meaning: { en: 'here', vi: 'ở đây' } },
        { kana: 'そこ', romaji: 'soko', meaning: { en: 'there (near you)', vi: 'ở đó' } },
        { kana: 'あそこ', romaji: 'asoko', meaning: { en: 'over there', vi: 'ở đằng kia' } },
        { kana: 'どこ', romaji: 'doko', meaning: { en: 'where', vi: 'ở đâu' } },
        { kana: 'うえ', kanji: '上', romaji: 'ue', meaning: { en: 'on, above', vi: 'phía trên' } },
        {
          kana: 'した',
          kanji: '下',
          romaji: 'shita',
          meaning: { en: 'under, below', vi: 'phía dưới' }
        },
        { kana: 'なか', kanji: '中', romaji: 'naka', meaning: { en: 'inside', vi: 'bên trong' } },
        { kana: 'つくえ', kanji: '机', romaji: 'tsukue', meaning: { en: 'desk', vi: 'cái bàn' } },
        { kana: 'いす', romaji: 'isu', meaning: { en: 'chair', vi: 'cái ghế' } },
        {
          kana: 'がっこう',
          kanji: '学校',
          romaji: 'gakkō',
          meaning: { en: 'school', vi: 'trường học' }
        },
        { kana: 'えき', kanji: '駅', romaji: 'eki', meaning: { en: 'station', vi: 'nhà ga' } },
        { kana: 'ねこ', kanji: '猫', romaji: 'neko', meaning: { en: 'cat', vi: 'con mèo' } },
        {
          kana: 'います',
          romaji: 'imasu',
          meaning: { en: 'exists (living things)', vi: 'có (vật sống)' }
        },
        {
          kana: 'あります',
          romaji: 'arimasu',
          meaning: { en: 'exists (non-living)', vi: 'có (vật không sống)' }
        }
      ],
      grammar: [
        {
          pattern: 'N は ばしょ に あります / います',
          title: { en: 'X is located at Y', vi: 'X ở tại Y' },
          explanation: {
            en: 'Use います for living things (people, animals) and あります for objects. に marks the location.',
            vi: 'Dùng います cho vật sống (người, động vật) và あります cho đồ vật. に đánh dấu địa điểm.'
          },
          examples: [
            {
              jp: 'ねこは いすの したに います。',
              romaji: 'Neko wa isu no shita ni imasu.',
              meaning: { en: 'The cat is under the chair.', vi: 'Con mèo ở dưới ghế.' }
            },
            {
              jp: 'ほんは つくえの うえに あります。',
              romaji: 'Hon wa tsukue no ue ni arimasu.',
              meaning: { en: 'The book is on the desk.', vi: 'Quyển sách ở trên bàn.' }
            }
          ]
        },
        {
          pattern: 'ばしょ に N が あります / います',
          title: { en: 'At Y there is X', vi: 'Tại Y có X' },
          explanation: {
            en: 'When introducing something new, the location comes first and the thing is marked with が.',
            vi: 'Khi giới thiệu cái mới, địa điểm đứng trước và sự vật được đánh dấu bằng が.'
          },
          examples: [
            {
              jp: 'つくえの うえに ペンが あります。',
              romaji: 'Tsukue no ue ni pen ga arimasu.',
              meaning: { en: 'There is a pen on the desk.', vi: 'Trên bàn có một cây bút.' }
            },
            {
              jp: 'あそこに せんせいが います。',
              romaji: 'Asoko ni sensei ga imasu.',
              meaning: { en: 'There is a teacher over there.', vi: 'Ở đằng kia có giáo viên.' }
            }
          ]
        },
        {
          pattern: 'N は どこ ですか',
          title: { en: 'Where is it?', vi: 'Cái đó ở đâu?' },
          explanation: {
            en: 'どこ asks for a location. ここ/そこ/あそこ answer "here/there/over there".',
            vi: 'どこ hỏi địa điểm. ここ/そこ/あそこ trả lời "ở đây/ở đó/ở đằng kia".'
          },
          examples: [
            {
              jp: 'えきは どこですか。',
              romaji: 'Eki wa doko desu ka.',
              meaning: { en: 'Where is the station?', vi: 'Nhà ga ở đâu?' }
            },
            {
              jp: 'がっこうは あそこです。',
              romaji: 'Gakkō wa asoko desu.',
              meaning: { en: 'The school is over there.', vi: 'Trường học ở đằng kia.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'In the classroom', vi: 'Trong lớp học' },
          lines: [
            {
              jp: 'きょうしつに つくえが あります。',
              romaji: 'Kyōshitsu ni tsukue ga arimasu.',
              meaning: { en: 'There is a desk in the classroom.', vi: 'Trong lớp có một cái bàn.' }
            },
            {
              jp: 'つくえの うえに ほんと ペンが あります。',
              romaji: 'Tsukue no ue ni hon to pen ga arimasu.',
              meaning: {
                en: 'On the desk there are a book and a pen.',
                vi: 'Trên bàn có một quyển sách và một cây bút.'
              }
            },
            {
              jp: 'いすの したに ねこが います。',
              romaji: 'Isu no shita ni neko ga imasu.',
              meaning: { en: 'There is a cat under the chair.', vi: 'Dưới ghế có một con mèo.' }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'What is on the desk?', vi: 'Trên bàn có gì?' },
              choices: [
                { id: 'a', label: { en: 'A cat', vi: 'Một con mèo' } },
                { id: 'b', label: { en: 'A book and a pen', vi: 'Một quyển sách và một cây bút' } },
                { id: 'c', label: { en: 'A clock', vi: 'Một cái đồng hồ' } }
              ],
              correctId: 'b'
            },
            {
              id: 'q2',
              question: { en: 'Where is the cat?', vi: 'Con mèo ở đâu?' },
              choices: [
                { id: 'a', label: { en: 'Under the chair', vi: 'Dưới ghế' } },
                { id: 'b', label: { en: 'On the desk', vi: 'Trên bàn' } },
                { id: 'c', label: { en: 'At the station', vi: 'Ở nhà ga' } }
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
        en: 'Numbers, Time & Prices',
        vi: 'Số đếm, Thời gian & Giá tiền'
      },
      focus: {
        en: 'Tell the time, ask prices, and express ranges with から / まで.',
        vi: 'Nói giờ, hỏi giá và diễn đạt khoảng với から / まで.'
      },
      vocab: [
        { kana: 'いま', kanji: '今', romaji: 'ima', meaning: { en: 'now', vi: 'bây giờ' } },
        {
          kana: 'なんじ',
          kanji: '何時',
          romaji: 'nanji',
          meaning: { en: 'what time', vi: 'mấy giờ' }
        },
        { kana: 'じ', kanji: '時', romaji: 'ji', meaning: { en: "o'clock (hour)", vi: 'giờ' } },
        {
          kana: 'ふん / ぷん',
          kanji: '分',
          romaji: 'fun / pun',
          meaning: { en: 'minute', vi: 'phút' }
        },
        { kana: 'はん', kanji: '半', romaji: 'han', meaning: { en: 'half (past)', vi: 'rưỡi' } },
        {
          kana: 'ごぜん',
          kanji: '午前',
          romaji: 'gozen',
          meaning: { en: 'a.m.', vi: 'buổi sáng (AM)' }
        },
        {
          kana: 'ごご',
          kanji: '午後',
          romaji: 'gogo',
          meaning: { en: 'p.m.', vi: 'buổi chiều (PM)' }
        },
        { kana: 'えん', kanji: '円', romaji: 'en', meaning: { en: 'yen', vi: 'yên (tiền Nhật)' } },
        { kana: 'いくら', romaji: 'ikura', meaning: { en: 'how much', vi: 'bao nhiêu tiền' } },
        { kana: 'やすい', kanji: '安い', romaji: 'yasui', meaning: { en: 'cheap', vi: 'rẻ' } },
        {
          kana: 'たかい',
          kanji: '高い',
          romaji: 'takai',
          meaning: { en: 'expensive, tall', vi: 'đắt, cao' }
        },
        {
          kana: 'なんようび',
          kanji: '何曜日',
          romaji: 'nan-yōbi',
          meaning: { en: 'what day of the week', vi: 'thứ mấy' }
        }
      ],
      grammar: [
        {
          pattern: 'いま … じ … ふん です',
          title: { en: 'Telling the time', vi: 'Cách nói giờ' },
          explanation: {
            en: 'Combine the hour (じ) and minutes (ふん/ぷん). はん means "half past".',
            vi: 'Ghép giờ (じ) và phút (ふん/ぷん). はん nghĩa là "rưỡi".'
          },
          examples: [
            {
              jp: 'いま ごぜん くじ はんです。',
              romaji: 'Ima gozen ku-ji han desu.',
              meaning: { en: 'It is 9:30 a.m. now.', vi: 'Bây giờ là 9 giờ rưỡi sáng.' }
            },
            {
              jp: 'いま なんじですか。',
              romaji: 'Ima nan-ji desu ka.',
              meaning: { en: 'What time is it now?', vi: 'Bây giờ là mấy giờ?' }
            }
          ]
        },
        {
          pattern: 'N から N まで',
          title: { en: 'from … to … (から / まで)', vi: 'từ … đến … (から / まで)' },
          explanation: {
            en: 'から marks a starting point and まで an ending point, for both time and place.',
            vi: 'から đánh dấu điểm bắt đầu và まで điểm kết thúc, dùng cho cả thời gian và nơi chốn.'
          },
          examples: [
            {
              jp: 'がっこうは くじから ごじまでです。',
              romaji: 'Gakkō wa ku-ji kara go-ji made desu.',
              meaning: { en: 'School is from 9 to 5.', vi: 'Trường học từ 9 giờ đến 5 giờ.' }
            },
            {
              jp: 'えきから がっこうまで',
              romaji: 'eki kara gakkō made',
              meaning: { en: 'from the station to the school', vi: 'từ nhà ga đến trường' }
            }
          ]
        },
        {
          pattern: 'N は いくら ですか',
          title: { en: 'How much is it?', vi: 'Cái này bao nhiêu tiền?' },
          explanation: {
            en: 'いくら asks a price; answer with the number + えん (yen).',
            vi: 'いくら hỏi giá; trả lời bằng số + えん (yên).'
          },
          examples: [
            {
              jp: 'この ほんは いくらですか。',
              romaji: 'Kono hon wa ikura desu ka.',
              meaning: { en: 'How much is this book?', vi: 'Quyển sách này bao nhiêu tiền?' }
            },
            {
              jp: 'せんえんです。',
              romaji: 'Sen-en desu.',
              meaning: { en: 'It is 1,000 yen.', vi: 'Nó giá 1.000 yên.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'At the shop', vi: 'Ở cửa hàng' },
          lines: [
            {
              jp: 'みせは ごぜん くじから ごご ろくじまでです。',
              romaji: 'Mise wa gozen ku-ji kara gogo roku-ji made desu.',
              meaning: {
                en: 'The shop is open from 9 a.m. to 6 p.m.',
                vi: 'Cửa hàng mở từ 9 giờ sáng đến 6 giờ chiều.'
              }
            },
            {
              jp: 'この とけいは ごせんえんです。',
              romaji: 'Kono tokei wa go-sen-en desu.',
              meaning: { en: 'This watch is 5,000 yen.', vi: 'Cái đồng hồ này giá 5.000 yên.' }
            },
            {
              jp: 'たかいです。あの とけいは やすいです。',
              romaji: 'Takai desu. Ano tokei wa yasui desu.',
              meaning: {
                en: 'It is expensive. That watch over there is cheap.',
                vi: 'Nó đắt. Cái đồng hồ kia thì rẻ.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What time does the shop close?',
                vi: 'Cửa hàng đóng cửa lúc mấy giờ?'
              },
              choices: [
                { id: 'a', label: { en: '9 a.m.', vi: '9 giờ sáng' } },
                { id: 'b', label: { en: '6 p.m.', vi: '6 giờ chiều' } },
                { id: 'c', label: { en: '5 p.m.', vi: '5 giờ chiều' } }
              ],
              correctId: 'b'
            },
            {
              id: 'q2',
              question: { en: 'How much is this watch?', vi: 'Cái đồng hồ này giá bao nhiêu?' },
              choices: [
                { id: 'a', label: { en: '1,000 yen', vi: '1.000 yên' } },
                { id: 'b', label: { en: '5,000 yen', vi: '5.000 yên' } },
                { id: 'c', label: { en: '6,000 yen', vi: '6.000 yên' } }
              ],
              correctId: 'b'
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-5',
      number: 5,
      title: {
        en: 'Verbs in the Polite Form',
        vi: 'Động từ thể lịch sự (ます)'
      },
      focus: {
        en: 'Talk about actions and time with the ます-form and the particle を.',
        vi: 'Nói về hành động và thời gian với thể ます và trợ từ を.'
      },
      vocab: [
        {
          kana: 'たべます',
          kanji: '食べます',
          romaji: 'tabemasu',
          meaning: { en: 'to eat', vi: 'ăn' }
        },
        {
          kana: 'のみます',
          kanji: '飲みます',
          romaji: 'nomimasu',
          meaning: { en: 'to drink', vi: 'uống' }
        },
        {
          kana: 'みます',
          kanji: '見ます',
          romaji: 'mimasu',
          meaning: { en: 'to see, watch', vi: 'xem, nhìn' }
        },
        {
          kana: 'よみます',
          kanji: '読みます',
          romaji: 'yomimasu',
          meaning: { en: 'to read', vi: 'đọc' }
        },
        { kana: 'します', romaji: 'shimasu', meaning: { en: 'to do', vi: 'làm' } },
        {
          kana: 'いきます',
          kanji: '行きます',
          romaji: 'ikimasu',
          meaning: { en: 'to go', vi: 'đi' }
        },
        {
          kana: 'きます',
          kanji: '来ます',
          romaji: 'kimasu',
          meaning: { en: 'to come', vi: 'đến' }
        },
        { kana: 'みず', kanji: '水', romaji: 'mizu', meaning: { en: 'water', vi: 'nước' } },
        { kana: 'ごはん', romaji: 'gohan', meaning: { en: 'rice, meal', vi: 'cơm, bữa ăn' } },
        { kana: 'あさ', kanji: '朝', romaji: 'asa', meaning: { en: 'morning', vi: 'buổi sáng' } },
        { kana: 'よる', kanji: '夜', romaji: 'yoru', meaning: { en: 'night', vi: 'buổi tối' } },
        {
          kana: 'まいにち',
          kanji: '毎日',
          romaji: 'mainichi',
          meaning: { en: 'every day', vi: 'mỗi ngày' }
        }
      ],
      grammar: [
        {
          pattern: 'N を V ます',
          title: { en: 'Object + verb (を)', vi: 'Tân ngữ + động từ (を)' },
          explanation: {
            en: 'を marks the direct object of an action. The verb comes at the end of the sentence.',
            vi: 'を đánh dấu tân ngữ trực tiếp của hành động. Động từ đứng cuối câu.'
          },
          examples: [
            {
              jp: 'ごはんを たべます。',
              romaji: 'Gohan o tabemasu.',
              meaning: { en: 'I eat rice.', vi: 'Tôi ăn cơm.' }
            },
            {
              jp: 'みずを のみます。',
              romaji: 'Mizu o nomimasu.',
              meaning: { en: 'I drink water.', vi: 'Tôi uống nước.' }
            }
          ]
        },
        {
          pattern: 'ます / ません / ました / ませんでした',
          title: { en: 'Polite verb conjugation', vi: 'Chia động từ thể lịch sự' },
          explanation: {
            en: 'ます = present/future, ません = negative, ました = past, ませんでした = past negative.',
            vi: 'ます = hiện tại/tương lai, ません = phủ định, ました = quá khứ, ませんでした = quá khứ phủ định.'
          },
          examples: [
            {
              jp: 'あさ ごはんを たべません。',
              romaji: 'Asa gohan o tabemasen.',
              meaning: { en: "I don't eat breakfast.", vi: 'Buổi sáng tôi không ăn cơm.' }
            },
            {
              jp: 'きのう ほんを よみました。',
              romaji: 'Kinō hon o yomimashita.',
              meaning: { en: 'I read a book yesterday.', vi: 'Hôm qua tôi đã đọc sách.' }
            }
          ]
        },
        {
          pattern: 'じかん に V ます',
          title: { en: 'Doing something at a time (に)', vi: 'Làm gì đó vào lúc (に)' },
          explanation: {
            en: 'に marks a specific time (clock time, day). General time words like まいにち take no に.',
            vi: 'に đánh dấu thời điểm cụ thể (giờ, ngày). Từ chỉ thời gian chung như まいにち thì không cần に.'
          },
          examples: [
            {
              jp: 'しちじに いきます。',
              romaji: 'Shichi-ji ni ikimasu.',
              meaning: { en: 'I go at 7 o\u2019clock.', vi: 'Tôi đi lúc 7 giờ.' }
            },
            {
              jp: 'まいにち べんきょうします。',
              romaji: 'Mainichi benkyō shimasu.',
              meaning: { en: 'I study every day.', vi: 'Tôi học mỗi ngày.' }
            }
          ]
        },
        {
          pattern: 'V ませんか / V ましょう',
          title: { en: 'Inviting & suggesting', vi: 'Mời & rủ rê' },
          explanation: {
            en: 'V ませんか invites ("won\u2019t you…?"); V ましょう suggests doing it together ("let\u2019s…").',
            vi: 'V ませんか dùng để mời ("…không?"); V ましょう dùng để rủ cùng làm ("…nào").'
          },
          examples: [
            {
              jp: 'ごはんを たべませんか。',
              romaji: 'Gohan o tabemasen ka.',
              meaning: { en: "Won't you eat with me?", vi: 'Cùng ăn cơm không?' }
            },
            {
              jp: 'いきましょう。',
              romaji: 'Ikimashō.',
              meaning: { en: "Let's go.", vi: 'Đi nào.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'My morning', vi: 'Buổi sáng của tôi' },
          lines: [
            {
              jp: 'まいあさ しちじに おきます。',
              romaji: 'Maiasa shichi-ji ni okimasu.',
              meaning: { en: 'I get up at 7 every morning.', vi: 'Mỗi sáng tôi dậy lúc 7 giờ.' }
            },
            {
              jp: 'あさごはんを たべて、みずを のみます。',
              romaji: 'Asagohan o tabete, mizu o nomimasu.',
              meaning: { en: 'I eat breakfast and drink water.', vi: 'Tôi ăn sáng và uống nước.' }
            },
            {
              jp: 'よる ほんを よみます。',
              romaji: 'Yoru hon o yomimasu.',
              meaning: { en: 'At night I read a book.', vi: 'Buổi tối tôi đọc sách.' }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What time does the writer get up?',
                vi: 'Người viết dậy lúc mấy giờ?'
              },
              choices: [
                { id: 'a', label: { en: '6 o\u2019clock', vi: '6 giờ' } },
                { id: 'b', label: { en: '7 o\u2019clock', vi: '7 giờ' } },
                { id: 'c', label: { en: '9 o\u2019clock', vi: '9 giờ' } }
              ],
              correctId: 'b'
            },
            {
              id: 'q2',
              question: {
                en: 'What does the writer do at night?',
                vi: 'Buổi tối người viết làm gì?'
              },
              choices: [
                { id: 'a', label: { en: 'Reads a book', vi: 'Đọc sách' } },
                { id: 'b', label: { en: 'Eats breakfast', vi: 'Ăn sáng' } },
                { id: 'c', label: { en: 'Goes to school', vi: 'Đi học' } }
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
        en: 'Movement & Means',
        vi: 'Di chuyển & Phương tiện'
      },
      focus: {
        en: 'Say where you go, how you get there, and who you go with.',
        vi: 'Nói bạn đi đâu, đi bằng gì và đi với ai.'
      },
      vocab: [
        {
          kana: 'でんしゃ',
          kanji: '電車',
          romaji: 'densha',
          meaning: { en: 'train', vi: 'tàu điện' }
        },
        { kana: 'バス', romaji: 'basu', meaning: { en: 'bus', vi: 'xe buýt' } },
        {
          kana: 'じてんしゃ',
          kanji: '自転車',
          romaji: 'jitensha',
          meaning: { en: 'bicycle', vi: 'xe đạp' }
        },
        {
          kana: 'あるいて',
          kanji: '歩いて',
          romaji: 'aruite',
          meaning: { en: 'on foot', vi: 'đi bộ' }
        },
        { kana: 'いえ', kanji: '家', romaji: 'ie', meaning: { en: 'house, home', vi: 'nhà' } },
        {
          kana: 'かいしゃ',
          kanji: '会社',
          romaji: 'kaisha',
          meaning: { en: 'company, office', vi: 'công ty' }
        },
        { kana: 'スーパー', romaji: 'sūpā', meaning: { en: 'supermarket', vi: 'siêu thị' } },
        {
          kana: 'ともだち',
          kanji: '友達',
          romaji: 'tomodachi',
          meaning: { en: 'friend', vi: 'bạn bè' }
        },
        {
          kana: 'かえります',
          kanji: '帰ります',
          romaji: 'kaerimasu',
          meaning: { en: 'to return home', vi: 'trở về' }
        },
        {
          kana: 'あした',
          kanji: '明日',
          romaji: 'ashita',
          meaning: { en: 'tomorrow', vi: 'ngày mai' }
        },
        {
          kana: 'きのう',
          kanji: '昨日',
          romaji: 'kinō',
          meaning: { en: 'yesterday', vi: 'hôm qua' }
        },
        {
          kana: 'ひとり',
          kanji: '一人',
          romaji: 'hitori',
          meaning: { en: 'alone, one person', vi: 'một mình' }
        }
      ],
      grammar: [
        {
          pattern: 'ばしょ へ／に いきます',
          title: { en: 'Going to a place (へ / に)', vi: 'Đi đến một nơi (へ / に)' },
          explanation: {
            en: 'へ (read "e") or に marks the destination of いきます/きます/かえります.',
            vi: 'へ (đọc là "e") hoặc に đánh dấu điểm đến của いきます/きます/かえります.'
          },
          examples: [
            {
              jp: 'がっこうへ いきます。',
              romaji: 'Gakkō e ikimasu.',
              meaning: { en: 'I go to school.', vi: 'Tôi đi đến trường.' }
            },
            {
              jp: 'いえに かえります。',
              romaji: 'Ie ni kaerimasu.',
              meaning: { en: 'I return home.', vi: 'Tôi về nhà.' }
            }
          ]
        },
        {
          pattern: 'のりもの で いきます',
          title: { en: 'By means of (で)', vi: 'Bằng phương tiện (で)' },
          explanation: {
            en: 'で marks the means of transport. あるいて (on foot) is an exception and takes no で.',
            vi: 'で đánh dấu phương tiện. あるいて (đi bộ) là ngoại lệ, không dùng で.'
          },
          examples: [
            {
              jp: 'でんしゃで かいしゃへ いきます。',
              romaji: 'Densha de kaisha e ikimasu.',
              meaning: { en: 'I go to the office by train.', vi: 'Tôi đi làm bằng tàu điện.' }
            },
            {
              jp: 'あるいて えきへ いきます。',
              romaji: 'Aruite eki e ikimasu.',
              meaning: { en: 'I walk to the station.', vi: 'Tôi đi bộ đến nhà ga.' }
            }
          ]
        },
        {
          pattern: 'ひと と V ます',
          title: { en: 'Doing something with someone (と)', vi: 'Làm gì đó cùng ai (と)' },
          explanation: {
            en: 'と marks the person you do the action together with ("with").',
            vi: 'と đánh dấu người mà bạn cùng làm hành động ("với, cùng").'
          },
          examples: [
            {
              jp: 'ともだちと スーパーへ いきます。',
              romaji: 'Tomodachi to sūpā e ikimasu.',
              meaning: {
                en: 'I go to the supermarket with a friend.',
                vi: 'Tôi đi siêu thị với bạn.'
              }
            },
            {
              jp: 'ひとりで いきました。',
              romaji: 'Hitori de ikimashita.',
              meaning: { en: 'I went alone.', vi: 'Tôi đã đi một mình.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'Going to the supermarket', vi: 'Đi siêu thị' },
          lines: [
            {
              jp: 'きのう ともだちと スーパーへ いきました。',
              romaji: 'Kinō tomodachi to sūpā e ikimashita.',
              meaning: {
                en: 'Yesterday I went to the supermarket with a friend.',
                vi: 'Hôm qua tôi đã đi siêu thị với bạn.'
              }
            },
            {
              jp: 'でんしゃで いきました。',
              romaji: 'Densha de ikimashita.',
              meaning: { en: 'We went by train.', vi: 'Chúng tôi đã đi bằng tàu điện.' }
            },
            {
              jp: 'あした わたしは ひとりで いえに かえります。',
              romaji: 'Ashita watashi wa hitori de ie ni kaerimasu.',
              meaning: {
                en: 'Tomorrow I will go home alone.',
                vi: 'Ngày mai tôi sẽ về nhà một mình.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'How did they go to the supermarket?',
                vi: 'Họ đi siêu thị bằng gì?'
              },
              choices: [
                { id: 'a', label: { en: 'By train', vi: 'Bằng tàu điện' } },
                { id: 'b', label: { en: 'By bus', vi: 'Bằng xe buýt' } },
                { id: 'c', label: { en: 'On foot', vi: 'Đi bộ' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'Who went to the supermarket together?',
                vi: 'Ai đã cùng đi siêu thị?'
              },
              choices: [
                {
                  id: 'a',
                  label: { en: 'The writer and a friend', vi: 'Người viết và một người bạn' }
                },
                { id: 'b', label: { en: 'The writer alone', vi: 'Người viết một mình' } },
                {
                  id: 'c',
                  label: { en: 'The writer and a teacher', vi: 'Người viết và giáo viên' }
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
        en: 'Describing with Adjectives',
        vi: 'Miêu tả với Tính từ'
      },
      focus: {
        en: 'Describe things with い-adjectives and な-adjectives, positive and negative.',
        vi: 'Miêu tả sự vật với tính từ -い và tính từ -な, khẳng định và phủ định.'
      },
      vocab: [
        {
          kana: 'おおきい',
          kanji: '大きい',
          romaji: 'ōkii',
          meaning: { en: 'big (い-adj)', vi: 'to (tính từ -い)' }
        },
        {
          kana: 'ちいさい',
          kanji: '小さい',
          romaji: 'chiisai',
          meaning: { en: 'small (い-adj)', vi: 'nhỏ (tính từ -い)' }
        },
        {
          kana: 'あたらしい',
          kanji: '新しい',
          romaji: 'atarashii',
          meaning: { en: 'new (い-adj)', vi: 'mới (tính từ -い)' }
        },
        {
          kana: 'おもしろい',
          romaji: 'omoshiroi',
          meaning: { en: 'interesting, fun (い-adj)', vi: 'thú vị (tính từ -い)' }
        },
        {
          kana: 'おいしい',
          romaji: 'oishii',
          meaning: { en: 'delicious (い-adj)', vi: 'ngon (tính từ -い)' }
        },
        {
          kana: 'いい / よい',
          romaji: 'ii / yoi',
          meaning: { en: 'good (irregular い-adj)', vi: 'tốt (tính từ -い bất quy tắc)' }
        },
        {
          kana: 'きれい',
          romaji: 'kirei',
          meaning: { en: 'pretty, clean (な-adj)', vi: 'đẹp, sạch (tính từ -な)' }
        },
        {
          kana: 'しずか',
          kanji: '静か',
          romaji: 'shizuka',
          meaning: { en: 'quiet (な-adj)', vi: 'yên tĩnh (tính từ -な)' }
        },
        {
          kana: 'にぎやか',
          romaji: 'nigiyaka',
          meaning: { en: 'lively (な-adj)', vi: 'náo nhiệt (tính từ -な)' }
        },
        {
          kana: 'べんり',
          kanji: '便利',
          romaji: 'benri',
          meaning: { en: 'convenient (な-adj)', vi: 'tiện lợi (tính từ -な)' }
        },
        { kana: 'とても', romaji: 'totemo', meaning: { en: 'very', vi: 'rất' } },
        {
          kana: 'あまり',
          romaji: 'amari',
          meaning: { en: 'not very (with negative)', vi: 'không … lắm (đi với phủ định)' }
        }
      ],
      grammar: [
        {
          pattern: 'N は い-adjective です',
          title: { en: 'い-adjectives', vi: 'Tính từ đuôi -い' },
          explanation: {
            en: 'い-adjectives end in い and go straight before です. Negative: drop い → くない (e.g. 大きくない).',
            vi: 'Tính từ -い kết thúc bằng い và đứng ngay trước です. Phủ định: bỏ い → くない (vd 大きくない).'
          },
          examples: [
            {
              jp: 'この くるまは おおきいです。',
              romaji: 'Kono kuruma wa ōkii desu.',
              meaning: { en: 'This car is big.', vi: 'Chiếc xe này to.' }
            },
            {
              jp: 'この ほんは おもしろくないです。',
              romaji: 'Kono hon wa omoshiroku nai desu.',
              meaning: { en: "This book isn't interesting.", vi: 'Quyển sách này không thú vị.' }
            }
          ]
        },
        {
          pattern: 'N は な-adjective です',
          title: { en: 'な-adjectives', vi: 'Tính từ đuôi -な' },
          explanation: {
            en: 'な-adjectives need な only before a noun (きれいな はな). Before です they stand alone. Negative: …じゃ ありません.',
            vi: 'Tính từ -な chỉ cần な khi đứng trước danh từ (きれいな はな). Trước です thì đứng một mình. Phủ định: …じゃ ありません.'
          },
          examples: [
            {
              jp: 'この まちは しずかです。',
              romaji: 'Kono machi wa shizuka desu.',
              meaning: { en: 'This town is quiet.', vi: 'Thị trấn này yên tĩnh.' }
            },
            {
              jp: 'えきは あまり べんりじゃ ありません。',
              romaji: 'Eki wa amari benri ja arimasen.',
              meaning: { en: "The station isn't very convenient.", vi: 'Nhà ga không tiện lắm.' }
            }
          ]
        },
        {
          pattern: 'adjective ＋ N',
          title: { en: 'Adjective modifying a noun', vi: 'Tính từ bổ nghĩa cho danh từ' },
          explanation: {
            en: 'い-adjectives attach directly (あたらしい くるま); な-adjectives add な (きれいな はな).',
            vi: 'Tính từ -い gắn trực tiếp (あたらしい くるま); tính từ -な thêm な (きれいな はな).'
          },
          examples: [
            {
              jp: 'あたらしい スマホ',
              romaji: 'atarashii sumaho',
              meaning: { en: 'a new smartphone', vi: 'điện thoại mới' }
            },
            {
              jp: 'にぎやかな まち',
              romaji: 'nigiyaka na machi',
              meaning: { en: 'a lively town', vi: 'thị trấn náo nhiệt' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'My town', vi: 'Thị trấn của tôi' },
          lines: [
            {
              jp: 'わたしの まちは ちいさいです。',
              romaji: 'Watashi no machi wa chiisai desu.',
              meaning: { en: 'My town is small.', vi: 'Thị trấn của tôi nhỏ.' }
            },
            {
              jp: 'にぎやかじゃ ありませんが、とても しずかです。',
              romaji: 'Nigiyaka ja arimasen ga, totemo shizuka desu.',
              meaning: {
                en: 'It is not lively, but it is very quiet.',
                vi: 'Nó không náo nhiệt, nhưng rất yên tĩnh.'
              }
            },
            {
              jp: 'えきの まえの みせの ごはんは おいしいです。',
              romaji: 'Eki no mae no mise no gohan wa oishii desu.',
              meaning: {
                en: 'The food at the shop in front of the station is delicious.',
                vi: 'Đồ ăn ở quán trước nhà ga rất ngon.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'What is the town like?', vi: 'Thị trấn như thế nào?' },
              choices: [
                { id: 'a', label: { en: 'Big and lively', vi: 'To và náo nhiệt' } },
                { id: 'b', label: { en: 'Small and quiet', vi: 'Nhỏ và yên tĩnh' } },
                { id: 'c', label: { en: 'Big and quiet', vi: 'To và yên tĩnh' } }
              ],
              correctId: 'b'
            },
            {
              id: 'q2',
              question: { en: 'What is said about the food?', vi: 'Đồ ăn được nói thế nào?' },
              choices: [
                { id: 'a', label: { en: 'It is delicious', vi: 'Rất ngon' } },
                { id: 'b', label: { en: 'It is expensive', vi: 'Rất đắt' } },
                { id: 'c', label: { en: 'It is cheap', vi: 'Rất rẻ' } }
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
        en: 'Likes, Skills & Reasons',
        vi: 'Sở thích, Khả năng & Lý do'
      },
      focus: {
        en: 'Say what you like, what you are good at, and explain why with から.',
        vi: 'Nói điều bạn thích, điều bạn giỏi và giải thích lý do với から.'
      },
      vocab: [
        {
          kana: 'すき',
          kanji: '好き',
          romaji: 'suki',
          meaning: { en: 'to like (な-adj)', vi: 'thích (tính từ -な)' }
        },
        {
          kana: 'きらい',
          kanji: '嫌い',
          romaji: 'kirai',
          meaning: { en: 'to dislike (な-adj)', vi: 'ghét (tính từ -な)' }
        },
        {
          kana: 'じょうず',
          kanji: '上手',
          romaji: 'jōzu',
          meaning: { en: 'good at (な-adj)', vi: 'giỏi (tính từ -な)' }
        },
        {
          kana: 'へた',
          kanji: '下手',
          romaji: 'heta',
          meaning: { en: 'bad at (な-adj)', vi: 'kém (tính từ -な)' }
        },
        {
          kana: 'りょうり',
          kanji: '料理',
          romaji: 'ryōri',
          meaning: { en: 'cooking, cuisine', vi: 'nấu ăn, món ăn' }
        },
        {
          kana: 'おんがく',
          kanji: '音楽',
          romaji: 'ongaku',
          meaning: { en: 'music', vi: 'âm nhạc' }
        },
        { kana: 'スポーツ', romaji: 'supōtsu', meaning: { en: 'sports', vi: 'thể thao' } },
        { kana: 'えいが', kanji: '映画', romaji: 'eiga', meaning: { en: 'movie', vi: 'phim' } },
        {
          kana: 'にほんご',
          kanji: '日本語',
          romaji: 'nihongo',
          meaning: { en: 'Japanese language', vi: 'tiếng Nhật' }
        },
        { kana: 'よく', romaji: 'yoku', meaning: { en: 'often, well', vi: 'thường, giỏi' } },
        { kana: 'どうして', romaji: 'dōshite', meaning: { en: 'why', vi: 'tại sao' } },
        { kana: 'だから', romaji: 'dakara', meaning: { en: 'so, therefore', vi: 'vì vậy' } }
      ],
      grammar: [
        {
          pattern: 'N が すき／きらい です',
          title: { en: 'Likes and dislikes (が)', vi: 'Thích và ghét (が)' },
          explanation: {
            en: 'The thing liked/disliked is marked with が, not を, before すき/きらい です.',
            vi: 'Đối tượng được thích/ghét đánh dấu bằng が (không phải を), trước すき/きらい です.'
          },
          examples: [
            {
              jp: 'わたしは おんがくが すきです。',
              romaji: 'Watashi wa ongaku ga suki desu.',
              meaning: { en: 'I like music.', vi: 'Tôi thích âm nhạc.' }
            },
            {
              jp: 'スポーツは あまり すきじゃ ありません。',
              romaji: 'Supōtsu wa amari suki ja arimasen.',
              meaning: { en: "I don't really like sports.", vi: 'Tôi không thích thể thao lắm.' }
            }
          ]
        },
        {
          pattern: 'N が じょうず／へた です',
          title: { en: 'Being good / bad at (が)', vi: 'Giỏi / kém về (が)' },
          explanation: {
            en: 'じょうず (good at) and へた (bad at) also mark the skill with が.',
            vi: 'じょうず (giỏi) và へた (kém) cũng đánh dấu kỹ năng bằng が.'
          },
          examples: [
            {
              jp: 'ハナさんは りょうりが じょうずです。',
              romaji: 'Hana-san wa ryōri ga jōzu desu.',
              meaning: { en: 'Hana is good at cooking.', vi: 'Hana nấu ăn giỏi.' }
            },
            {
              jp: 'わたしは にほんごが まだ へたです。',
              romaji: 'Watashi wa nihongo ga mada heta desu.',
              meaning: { en: 'I am still bad at Japanese.', vi: 'Tôi vẫn còn kém tiếng Nhật.' }
            }
          ]
        },
        {
          pattern: 'sentence から、sentence',
          title: { en: 'Giving a reason (から)', vi: 'Nêu lý do (から)' },
          explanation: {
            en: 'から after a clause means "because". The reason comes first, the result after.',
            vi: 'から sau một mệnh đề nghĩa là "vì". Lý do đứng trước, kết quả đứng sau.'
          },
          examples: [
            {
              jp: 'えいがが すきですから、よく みます。',
              romaji: 'Eiga ga suki desu kara, yoku mimasu.',
              meaning: {
                en: 'I like movies, so I watch them often.',
                vi: 'Vì tôi thích phim nên hay xem.'
              }
            },
            {
              jp: 'どうして いきませんか。',
              romaji: 'Dōshite ikimasen ka.',
              meaning: { en: "Why won't you go?", vi: 'Tại sao bạn không đi?' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'Hana\u2019s hobbies', vi: 'Sở thích của Hana' },
          lines: [
            {
              jp: 'ハナさんは おんがくが すきです。',
              romaji: 'Hana-san wa ongaku ga suki desu.',
              meaning: { en: 'Hana likes music.', vi: 'Hana thích âm nhạc.' }
            },
            {
              jp: 'りょうりが じょうずですから、まいにち りょうりを します。',
              romaji: 'Ryōri ga jōzu desu kara, mainichi ryōri o shimasu.',
              meaning: {
                en: 'She is good at cooking, so she cooks every day.',
                vi: 'Cô ấy nấu ăn giỏi, nên ngày nào cũng nấu ăn.'
              }
            },
            {
              jp: 'でも、スポーツは あまり すきじゃ ありません。',
              romaji: 'Demo, supōtsu wa amari suki ja arimasen.',
              meaning: {
                en: 'But she does not really like sports.',
                vi: 'Nhưng cô ấy không thích thể thao lắm.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'Why does Hana cook every day?',
                vi: 'Tại sao Hana nấu ăn mỗi ngày?'
              },
              choices: [
                {
                  id: 'a',
                  label: { en: 'Because she is good at cooking', vi: 'Vì cô ấy nấu ăn giỏi' }
                },
                {
                  id: 'b',
                  label: { en: 'Because she likes sports', vi: 'Vì cô ấy thích thể thao' }
                },
                {
                  id: 'c',
                  label: { en: 'Because she dislikes music', vi: 'Vì cô ấy ghét âm nhạc' }
                }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'What does Hana not like much?', vi: 'Hana không thích gì lắm?' },
              choices: [
                { id: 'a', label: { en: 'Sports', vi: 'Thể thao' } },
                { id: 'b', label: { en: 'Music', vi: 'Âm nhạc' } },
                { id: 'c', label: { en: 'Cooking', vi: 'Nấu ăn' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ]
    },
    ...n5LessonsB,
    ...n5LessonsC
  ])
};
