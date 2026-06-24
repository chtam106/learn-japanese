import type { Lesson } from '../types.ts';

export const n5LessonsC: Lesson[] = [
  {
    id: 'lesson-17',
    number: 17,
    title: {
      en: 'Saying What You Can Do',
      vi: 'Nói về điều bạn có thể làm'
    },
    focus: {
      en: 'Express ability with 〜ことが できます and noun + が できます.',
      vi: 'Diễn đạt khả năng với 〜ことが できます và danh từ + が できます.'
    },
    vocab: [
      {
        kana: 'できます',
        romaji: 'dekimasu',
        meaning: { en: 'can do, be able to', vi: 'có thể, làm được' }
      },
      {
        kana: 'およぎます',
        kanji: '泳ぎます',
        romaji: 'oyogimasu',
        meaning: { en: 'to swim', vi: 'bơi' }
      },
      {
        kana: 'うんてん',
        kanji: '運転',
        romaji: 'unten',
        meaning: { en: 'driving', vi: 'lái xe' }
      },
      {
        kana: 'ひきます',
        kanji: '弾きます',
        romaji: 'hikimasu',
        meaning: { en: 'to play (an instrument)', vi: 'chơi (nhạc cụ)' }
      },
      { kana: 'ピアノ', romaji: 'piano', meaning: { en: 'piano', vi: 'đàn piano' } },
      {
        kana: 'えいご',
        kanji: '英語',
        romaji: 'eigo',
        meaning: { en: 'English (language)', vi: 'tiếng Anh' }
      },
      {
        kana: 'はなします',
        kanji: '話します',
        romaji: 'hanashimasu',
        meaning: { en: 'to speak, talk', vi: 'nói chuyện' }
      },
      {
        kana: 'かきます',
        kanji: '書きます',
        romaji: 'kakimasu',
        meaning: { en: 'to write', vi: 'viết' }
      },
      {
        kana: 'かんじ',
        kanji: '漢字',
        romaji: 'kanji',
        meaning: { en: 'kanji (Chinese characters)', vi: 'chữ Hán' }
      },
      {
        kana: 'すこし',
        kanji: '少し',
        romaji: 'sukoshi',
        meaning: { en: 'a little', vi: 'một chút' }
      },
      {
        kana: 'ぜんぶ',
        kanji: '全部',
        romaji: 'zenbu',
        meaning: { en: 'all, everything', vi: 'tất cả' }
      }
    ],
    grammar: [
      {
        pattern: 'V(辞書形)ことが できます',
        title: { en: 'Can do an action', vi: 'Có thể làm một hành động' },
        explanation: {
          en: 'Attach ことが できます to a verb in its dictionary form to say you are able to do that action.',
          vi: 'Gắn ことが できます vào động từ thể từ điển để nói bạn có thể làm hành động đó.'
        },
        examples: [
          {
            jp: 'えいごを はなす ことが できます。',
            romaji: 'Eigo o hanasu koto ga dekimasu.',
            meaning: { en: 'I can speak English.', vi: 'Tôi có thể nói tiếng Anh.' }
          },
          {
            jp: 'かんじを かく ことが できます。',
            romaji: 'Kanji o kaku koto ga dekimasu.',
            meaning: { en: 'I can write kanji.', vi: 'Tôi có thể viết chữ Hán.' }
          }
        ]
      },
      {
        pattern: 'N が できます',
        title: { en: 'Can do a noun / skill', vi: 'Có thể làm một danh từ / kỹ năng' },
        explanation: {
          en: 'With an activity noun (especially する-nouns), use N が できます directly to mean you can do it.',
          vi: 'Với danh từ chỉ hoạt động (nhất là danh từ đi với する), dùng N が できます để nói bạn làm được việc đó.'
        },
        examples: [
          {
            jp: 'わたしは うんてんが できます。',
            romaji: 'Watashi wa unten ga dekimasu.',
            meaning: { en: 'I can drive.', vi: 'Tôi biết lái xe.' }
          },
          {
            jp: 'にほんごが すこし できます。',
            romaji: 'Nihongo ga sukoshi dekimasu.',
            meaning: { en: 'I can speak a little Japanese.', vi: 'Tôi biết một chút tiếng Nhật.' }
          }
        ]
      },
      {
        pattern: 'V(辞書形)ことが できません',
        title: { en: 'Cannot do (negative)', vi: 'Không thể làm (phủ định)' },
        explanation: {
          en: 'Change できます to できません for the negative. まだ できません means "cannot yet".',
          vi: 'Đổi できます thành できません để phủ định. まだ できません nghĩa là "vẫn chưa thể".'
        },
        examples: [
          {
            jp: 'わたしは およぐ ことが できません。',
            romaji: 'Watashi wa oyogu koto ga dekimasen.',
            meaning: { en: 'I cannot swim.', vi: 'Tôi không biết bơi.' }
          },
          {
            jp: 'かんじは まだ ぜんぶ よむ ことが できません。',
            romaji: 'Kanji wa mada zenbu yomu koto ga dekimasen.',
            meaning: {
              en: 'I cannot read all the kanji yet.',
              vi: 'Tôi vẫn chưa đọc được tất cả chữ Hán.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'What Rin can do', vi: 'Điều Rin có thể làm' },
        lines: [
          {
            jp: 'リンさんは えいごを はなす ことが できます。',
            romaji: 'Rin-san wa eigo o hanasu koto ga dekimasu.',
            meaning: { en: 'Rin can speak English.', vi: 'Rin có thể nói tiếng Anh.' }
          },
          {
            jp: 'ピアノも ひく ことが できます。',
            romaji: 'Piano mo hiku koto ga dekimasu.',
            meaning: { en: 'She can also play the piano.', vi: 'Cô ấy cũng biết chơi đàn piano.' }
          },
          {
            jp: 'でも、うんてんは まだ できません。',
            romaji: 'Demo, unten wa mada dekimasen.',
            meaning: { en: 'But she cannot drive yet.', vi: 'Nhưng cô ấy vẫn chưa biết lái xe.' }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'What can Rin do?', vi: 'Rin có thể làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Drive a car', vi: 'Lái xe' } },
              { id: 'b', label: { en: 'Speak English', vi: 'Nói tiếng Anh' } },
              { id: 'c', label: { en: 'Swim', vi: 'Bơi' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: { en: 'What can Rin not do yet?', vi: 'Rin vẫn chưa thể làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Play the piano', vi: 'Chơi đàn piano' } },
              { id: 'b', label: { en: 'Speak English', vi: 'Nói tiếng Anh' } },
              { id: 'c', label: { en: 'Drive a car', vi: 'Lái xe' } }
            ],
            correctId: 'c'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-18',
    number: 18,
    title: {
      en: 'Experiences & Listing Activities',
      vi: 'Kinh nghiệm & Liệt kê hoạt động'
    },
    focus: {
      en: 'Talk about past experiences with 〜た ことが あります and list actions with 〜たり、〜たり します.',
      vi: 'Nói về kinh nghiệm với 〜た ことが あります và liệt kê hành động với 〜たり、〜たり します.'
    },
    vocab: [
      {
        kana: 'りょこう',
        kanji: '旅行',
        romaji: 'ryokō',
        meaning: { en: 'trip, travel', vi: 'du lịch' }
      },
      {
        kana: 'がいこく',
        kanji: '外国',
        romaji: 'gaikoku',
        meaning: { en: 'foreign country', vi: 'nước ngoài' }
      },
      {
        kana: 'やま',
        kanji: '山',
        romaji: 'yama',
        meaning: { en: 'mountain', vi: 'núi' }
      },
      {
        kana: 'のぼります',
        kanji: '登ります',
        romaji: 'noborimasu',
        meaning: { en: 'to climb', vi: 'leo, trèo' }
      },
      {
        kana: 'うみ',
        kanji: '海',
        romaji: 'umi',
        meaning: { en: 'sea, ocean', vi: 'biển' }
      },
      { kana: 'すし', kanji: '寿司', romaji: 'sushi', meaning: { en: 'sushi', vi: 'sushi' } },
      {
        kana: 'たべもの',
        kanji: '食べ物',
        romaji: 'tabemono',
        meaning: { en: 'food', vi: 'đồ ăn' }
      },
      {
        kana: 'せんたく',
        kanji: '洗濯',
        romaji: 'sentaku',
        meaning: { en: 'laundry', vi: 'giặt giũ' }
      },
      {
        kana: 'そうじ',
        kanji: '掃除',
        romaji: 'sōji',
        meaning: { en: 'cleaning', vi: 'dọn dẹp' }
      },
      {
        kana: 'いちど',
        kanji: '一度',
        romaji: 'ichido',
        meaning: { en: 'once, one time', vi: 'một lần' }
      },
      {
        kana: 'やすみ',
        kanji: '休み',
        romaji: 'yasumi',
        meaning: { en: 'holiday, day off', vi: 'ngày nghỉ' }
      }
    ],
    grammar: [
      {
        pattern: 'V(た形)ことが あります',
        title: { en: 'Have done before (experience)', vi: 'Đã từng làm (kinh nghiệm)' },
        explanation: {
          en: 'Use the past plain form (た-form) + ことが あります to say you have the experience of doing something.',
          vi: 'Dùng thể quá khứ thường (thể た) + ことが あります để nói bạn đã từng làm điều gì đó.'
        },
        examples: [
          {
            jp: 'にほんへ いった ことが あります。',
            romaji: 'Nihon e itta koto ga arimasu.',
            meaning: { en: 'I have been to Japan.', vi: 'Tôi đã từng đến Nhật Bản.' }
          },
          {
            jp: 'すしを たべた ことが あります。',
            romaji: 'Sushi o tabeta koto ga arimasu.',
            meaning: { en: 'I have eaten sushi before.', vi: 'Tôi đã từng ăn sushi.' }
          }
        ]
      },
      {
        pattern: 'V(た形)ことが ありません',
        title: { en: 'Have never done', vi: 'Chưa từng làm' },
        explanation: {
          en: 'Change あります to ありません to say you have never had that experience.',
          vi: 'Đổi あります thành ありません để nói bạn chưa từng có kinh nghiệm đó.'
        },
        examples: [
          {
            jp: 'やまに のぼった ことが ありません。',
            romaji: 'Yama ni nobotta koto ga arimasen.',
            meaning: { en: 'I have never climbed a mountain.', vi: 'Tôi chưa từng leo núi.' }
          },
          {
            jp: 'がいこくへ いった ことが ありません。',
            romaji: 'Gaikoku e itta koto ga arimasen.',
            meaning: { en: 'I have never been abroad.', vi: 'Tôi chưa từng ra nước ngoài.' }
          }
        ]
      },
      {
        pattern: 'V(た形)り、V(た形)り します',
        title: { en: 'Do things like X and Y', vi: 'Làm những việc như X và Y' },
        explanation: {
          en: 'List a few representative actions with た-form + り, ending in します. It implies "among other things".',
          vi: 'Liệt kê vài hành động tiêu biểu bằng thể た + り, kết thúc bằng します. Hàm ý "và những việc khác".'
        },
        examples: [
          {
            jp: 'やすみは そうじを したり、せんたくを したり します。',
            romaji: 'Yasumi wa sōji o shitari, sentaku o shitari shimasu.',
            meaning: {
              en: 'On my day off I do things like cleaning and laundry.',
              vi: 'Ngày nghỉ tôi làm những việc như dọn dẹp và giặt giũ.'
            }
          },
          {
            jp: 'うみで およいだり、たべものを たべたり しました。',
            romaji: 'Umi de oyoidari, tabemono o tabetari shimashita.',
            meaning: {
              en: 'At the sea I did things like swimming and eating.',
              vi: 'Ở biển tôi đã bơi rồi ăn uống các thứ.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A summer trip', vi: 'Chuyến đi mùa hè' },
        lines: [
          {
            jp: 'わたしは うみへ いった ことが あります。',
            romaji: 'Watashi wa umi e itta koto ga arimasu.',
            meaning: { en: 'I have been to the sea.', vi: 'Tôi đã từng đi biển.' }
          },
          {
            jp: 'うみで およいだり、すしを たべたり しました。',
            romaji: 'Umi de oyoidari, sushi o tabetari shimashita.',
            meaning: {
              en: 'At the sea I swam and ate sushi, among other things.',
              vi: 'Ở biển tôi đã bơi rồi ăn sushi và làm nhiều việc khác.'
            }
          },
          {
            jp: 'でも、やまに のぼった ことが ありません。',
            romaji: 'Demo, yama ni nobotta koto ga arimasen.',
            meaning: {
              en: 'But I have never climbed a mountain.',
              vi: 'Nhưng tôi chưa từng leo núi.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'Where has the writer been?', vi: 'Người viết đã từng đi đâu?' },
            choices: [
              { id: 'a', label: { en: 'To a mountain', vi: 'Lên núi' } },
              { id: 'b', label: { en: 'To the sea', vi: 'Ra biển' } },
              { id: 'c', label: { en: 'Abroad', vi: 'Ra nước ngoài' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'What did the writer do at the sea?',
              vi: 'Người viết đã làm gì ở biển?'
            },
            choices: [
              { id: 'a', label: { en: 'Swam and ate sushi', vi: 'Bơi và ăn sushi' } },
              { id: 'b', label: { en: 'Climbed and rested', vi: 'Leo núi và nghỉ ngơi' } },
              { id: 'c', label: { en: 'Did laundry', vi: 'Giặt giũ' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q3',
            question: { en: 'What has the writer never done?', vi: 'Người viết chưa từng làm gì?' },
            choices: [
              { id: 'a', label: { en: 'Eaten sushi', vi: 'Ăn sushi' } },
              { id: 'b', label: { en: 'Climbed a mountain', vi: 'Leo núi' } },
              { id: 'c', label: { en: 'Swum in the sea', vi: 'Bơi ở biển' } }
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
      en: 'Going Out & How Often',
      vi: 'Đi chơi & Mức độ thường xuyên'
    },
    focus: {
      en: 'Say the purpose of going somewhere and how often you do things with frequency adverbs.',
      vi: 'Nói mục đích đi đâu đó và mức độ thường xuyên với trạng từ tần suất.'
    },
    vocab: [
      {
        kana: 'かいもの',
        kanji: '買い物',
        romaji: 'kaimono',
        meaning: { en: 'shopping', vi: 'mua sắm' }
      },
      {
        kana: 'えいがかん',
        kanji: '映画館',
        romaji: 'eigakan',
        meaning: { en: 'cinema, movie theater', vi: 'rạp chiếu phim' }
      },
      {
        kana: 'としょかん',
        kanji: '図書館',
        romaji: 'toshokan',
        meaning: { en: 'library', vi: 'thư viện' }
      },
      {
        kana: 'こうえん',
        kanji: '公園',
        romaji: 'kōen',
        meaning: { en: 'park', vi: 'công viên' }
      },
      {
        kana: 'あそびます',
        kanji: '遊びます',
        romaji: 'asobimasu',
        meaning: { en: 'to play, have fun', vi: 'đi chơi' }
      },
      {
        kana: 'ならいます',
        kanji: '習います',
        romaji: 'naraimasu',
        meaning: { en: 'to learn', vi: 'học (môn gì đó)' }
      },
      {
        kana: 'よく',
        romaji: 'yoku',
        meaning: { en: 'often', vi: 'thường xuyên' }
      },
      {
        kana: 'ときどき',
        kanji: '時々',
        romaji: 'tokidoki',
        meaning: { en: 'sometimes', vi: 'thỉnh thoảng' }
      },
      {
        kana: 'あまり',
        romaji: 'amari',
        meaning: { en: 'not very often (with negative)', vi: 'không... mấy (đi với phủ định)' }
      },
      {
        kana: 'ぜんぜん',
        kanji: '全然',
        romaji: 'zenzen',
        meaning: { en: 'not at all (with negative)', vi: 'hoàn toàn không (đi với phủ định)' }
      },
      {
        kana: 'レストラン',
        romaji: 'resutoran',
        meaning: { en: 'restaurant', vi: 'nhà hàng' }
      }
    ],
    grammar: [
      {
        pattern: 'Vますstem + に いきます／きます',
        title: { en: 'Go/come to do something', vi: 'Đi/đến để làm gì đó' },
        explanation: {
          en: 'Drop ます from a verb and add に いきます/きます/かえります to show the purpose of the motion.',
          vi: 'Bỏ ます của động từ rồi thêm に いきます/きます/かえります để chỉ mục đích của việc di chuyển.'
        },
        examples: [
          {
            jp: 'としょかんへ ほんを よみに いきます。',
            romaji: 'Toshokan e hon o yomi ni ikimasu.',
            meaning: {
              en: 'I go to the library to read books.',
              vi: 'Tôi đến thư viện để đọc sách.'
            }
          },
          {
            jp: 'こうえんへ あそびに いきます。',
            romaji: 'Kōen e asobi ni ikimasu.',
            meaning: { en: 'I go to the park to have fun.', vi: 'Tôi đến công viên để chơi.' }
          }
        ]
      },
      {
        pattern: 'N に いきます',
        title: { en: 'Go for the purpose of N', vi: 'Đi với mục đích là N' },
        explanation: {
          en: 'With an activity noun like かいもの, attach に directly: かいものに いきます = "go shopping".',
          vi: 'Với danh từ chỉ hoạt động như かいもの, gắn に trực tiếp: かいものに いきます = "đi mua sắm".'
        },
        examples: [
          {
            jp: 'デパートへ かいものに いきます。',
            romaji: 'Depāto e kaimono ni ikimasu.',
            meaning: {
              en: 'I go to the department store to shop.',
              vi: 'Tôi đến trung tâm thương mại để mua sắm.'
            }
          },
          {
            jp: 'えいがかんへ えいがを みに いきます。',
            romaji: 'Eigakan e eiga o mi ni ikimasu.',
            meaning: {
              en: 'I go to the cinema to watch a movie.',
              vi: 'Tôi đến rạp để xem phim.'
            }
          }
        ]
      },
      {
        pattern: 'よく／ときどき／あまり／ぜんぜん + V',
        title: { en: 'Frequency adverbs', vi: 'Trạng từ chỉ tần suất' },
        explanation: {
          en: 'よく (often) and ときどき (sometimes) go with affirmatives; あまり (not often) and ぜんぜん (not at all) require a negative verb.',
          vi: 'よく (thường) và ときどき (thỉnh thoảng) đi với câu khẳng định; あまり (không mấy) và ぜんぜん (hoàn toàn không) cần động từ phủ định.'
        },
        examples: [
          {
            jp: 'ときどき レストランへ いきます。',
            romaji: 'Tokidoki resutoran e ikimasu.',
            meaning: {
              en: 'I sometimes go to a restaurant.',
              vi: 'Thỉnh thoảng tôi đi nhà hàng.'
            }
          },
          {
            jp: 'えいがかんへ ぜんぜん いきません。',
            romaji: 'Eigakan e zenzen ikimasen.',
            meaning: {
              en: 'I never go to the cinema.',
              vi: 'Tôi hoàn toàn không đi rạp chiếu phim.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'My weekends', vi: 'Cuối tuần của tôi' },
        lines: [
          {
            jp: 'わたしは よく としょかんへ ほんを よみに いきます。',
            romaji: 'Watashi wa yoku toshokan e hon o yomi ni ikimasu.',
            meaning: {
              en: 'I often go to the library to read books.',
              vi: 'Tôi thường đến thư viện để đọc sách.'
            }
          },
          {
            jp: 'ときどき こうえんへ あそびに いきます。',
            romaji: 'Tokidoki kōen e asobi ni ikimasu.',
            meaning: {
              en: 'Sometimes I go to the park to have fun.',
              vi: 'Thỉnh thoảng tôi đến công viên để chơi.'
            }
          },
          {
            jp: 'でも、えいがかんへは あまり いきません。',
            romaji: 'Demo, eigakan e wa amari ikimasen.',
            meaning: {
              en: 'But I do not go to the cinema very often.',
              vi: 'Nhưng tôi không hay đến rạp chiếu phim lắm.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why does the writer often go to the library?',
              vi: 'Tại sao người viết hay đến thư viện?'
            },
            choices: [
              { id: 'a', label: { en: 'To read books', vi: 'Để đọc sách' } },
              { id: 'b', label: { en: 'To have fun', vi: 'Để chơi' } },
              { id: 'c', label: { en: 'To watch a movie', vi: 'Để xem phim' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'How often does the writer go to the cinema?',
              vi: 'Người viết đến rạp phim thường xuyên đến mức nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Often', vi: 'Thường xuyên' } },
              { id: 'b', label: { en: 'Not very often', vi: 'Không mấy khi' } },
              { id: 'c', label: { en: 'Every day', vi: 'Mỗi ngày' } }
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
      en: 'Becoming & Making Changes',
      vi: 'Trở nên & Tạo ra thay đổi'
    },
    focus: {
      en: 'Describe changes with adjective + く/に なります and cause changes with く/に します.',
      vi: 'Miêu tả sự thay đổi với tính từ + く/に なります và tạo thay đổi với く/に します.'
    },
    vocab: [
      {
        kana: 'なります',
        romaji: 'narimasu',
        meaning: { en: 'to become', vi: 'trở nên, trở thành' }
      },
      {
        kana: 'げんき',
        kanji: '元気',
        romaji: 'genki',
        meaning: { en: 'healthy, energetic (な-adj)', vi: 'khỏe, khỏe khoắn (tính từ -な)' }
      },
      {
        kana: 'びょうき',
        kanji: '病気',
        romaji: 'byōki',
        meaning: { en: 'illness, sick', vi: 'bệnh, ốm' }
      },
      {
        kana: 'さむい',
        kanji: '寒い',
        romaji: 'samui',
        meaning: { en: 'cold (weather, い-adj)', vi: 'lạnh (thời tiết, tính từ -い)' }
      },
      {
        kana: 'あつい',
        kanji: '暑い',
        romaji: 'atsui',
        meaning: { en: 'hot (weather, い-adj)', vi: 'nóng (thời tiết, tính từ -い)' }
      },
      {
        kana: 'あたたかい',
        kanji: '暖かい',
        romaji: 'atatakai',
        meaning: { en: 'warm (い-adj)', vi: 'ấm áp (tính từ -い)' }
      },
      {
        kana: 'あかるい',
        kanji: '明るい',
        romaji: 'akarui',
        meaning: { en: 'bright (い-adj)', vi: 'sáng (tính từ -い)' }
      },
      {
        kana: 'つよい',
        kanji: '強い',
        romaji: 'tsuyoi',
        meaning: { en: 'strong (い-adj)', vi: 'mạnh (tính từ -い)' }
      },
      {
        kana: 'へや',
        kanji: '部屋',
        romaji: 'heya',
        meaning: { en: 'room', vi: 'căn phòng' }
      },
      {
        kana: 'でんき',
        kanji: '電気',
        romaji: 'denki',
        meaning: { en: 'light, electricity', vi: 'đèn, điện' }
      },
      {
        kana: 'おとな',
        kanji: '大人',
        romaji: 'otona',
        meaning: { en: 'adult', vi: 'người lớn' }
      }
    ],
    grammar: [
      {
        pattern: 'い-adjective(く)+ なります',
        title: { en: 'い-adjective + become', vi: 'Tính từ -い + trở nên' },
        explanation: {
          en: 'Change the final い to く, then add なります to say something becomes that way on its own.',
          vi: 'Đổi い cuối thành く rồi thêm なります để nói sự vật tự trở nên như vậy.'
        },
        examples: [
          {
            jp: 'ふゆは さむく なります。',
            romaji: 'Fuyu wa samuku narimasu.',
            meaning: { en: 'In winter it becomes cold.', vi: 'Mùa đông trời trở lạnh.' }
          },
          {
            jp: 'こどもは つよく なりました。',
            romaji: 'Kodomo wa tsuyoku narimashita.',
            meaning: { en: 'The child became strong.', vi: 'Đứa trẻ đã trở nên mạnh mẽ.' }
          }
        ]
      },
      {
        pattern: 'な-adjective／N + に なります',
        title: { en: 'な-adjective / noun + become', vi: 'Tính từ -な / danh từ + trở nên' },
        explanation: {
          en: 'For な-adjectives and nouns, add に before なります.',
          vi: 'Với tính từ -な và danh từ, thêm に trước なります.'
        },
        examples: [
          {
            jp: 'びょうきが なおって、げんきに なりました。',
            romaji: 'Byōki ga naotte, genki ni narimashita.',
            meaning: {
              en: 'The illness healed and I became healthy.',
              vi: 'Bệnh đã khỏi và tôi trở nên khỏe mạnh.'
            }
          },
          {
            jp: 'むすこは おとなに なりました。',
            romaji: 'Musuko wa otona ni narimashita.',
            meaning: { en: 'My son became an adult.', vi: 'Con trai tôi đã trở thành người lớn.' }
          }
        ]
      },
      {
        pattern: 'く／に します',
        title: { en: 'Make something become...', vi: 'Làm cho cái gì đó trở nên...' },
        explanation: {
          en: 'Use く (い-adj) or に (な-adj/noun) + します when a person actively changes something.',
          vi: 'Dùng く (tính từ -い) hoặc に (tính từ -な/danh từ) + します khi một người chủ động thay đổi cái gì đó.'
        },
        examples: [
          {
            jp: 'でんきを つけて、へやを あかるく します。',
            romaji: 'Denki o tsukete, heya o akaruku shimasu.',
            meaning: {
              en: 'I turn on the light to make the room bright.',
              vi: 'Tôi bật đèn để làm cho căn phòng sáng lên.'
            }
          },
          {
            jp: 'へやを きれいに しました。',
            romaji: 'Heya o kirei ni shimashita.',
            meaning: { en: 'I made the room clean.', vi: 'Tôi đã làm cho căn phòng sạch sẽ.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A change of seasons', vi: 'Sự thay đổi của mùa' },
        lines: [
          {
            jp: 'あきから ふゆに なって、さむく なりました。',
            romaji: 'Aki kara fuyu ni natte, samuku narimashita.',
            meaning: {
              en: 'From autumn it became winter, and it got cold.',
              vi: 'Từ mùa thu chuyển sang mùa đông, trời đã trở lạnh.'
            }
          },
          {
            jp: 'よる、でんきを つけて へやを あかるく します。',
            romaji: 'Yoru, denki o tsukete heya o akaruku shimasu.',
            meaning: {
              en: 'At night I turn on the light to make the room bright.',
              vi: 'Buổi tối tôi bật đèn để làm cho phòng sáng lên.'
            }
          },
          {
            jp: 'わたしは びょうきでしたが、いまは げんきに なりました。',
            romaji: 'Watashi wa byōki deshita ga, ima wa genki ni narimashita.',
            meaning: {
              en: 'I was sick, but now I have become healthy.',
              vi: 'Tôi đã từng bị bệnh, nhưng giờ đã khỏe lại.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How did the weather change?',
              vi: 'Thời tiết đã thay đổi như thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'It became hot', vi: 'Trời trở nóng' } },
              { id: 'b', label: { en: 'It became cold', vi: 'Trời trở lạnh' } },
              { id: 'c', label: { en: 'It became warm', vi: 'Trời trở ấm' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'How is the writer now?',
              vi: 'Bây giờ người viết thế nào?'
            },
            choices: [
              { id: 'a', label: { en: 'Healthy', vi: 'Khỏe mạnh' } },
              { id: 'b', label: { en: 'Sick', vi: 'Bị bệnh' } },
              { id: 'c', label: { en: 'Tired', vi: 'Mệt mỏi' } }
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
      en: 'Reasons, Contrast & Connectors',
      vi: 'Lý do, Tương phản & Từ nối'
    },
    focus: {
      en: 'Give reasons with 〜ので, contrast with 〜が, and link sentences with そして・それから・でも.',
      vi: 'Nêu lý do với 〜ので, tương phản với 〜が, và nối câu với そして・それから・でも.'
    },
    vocab: [
      {
        kana: 'てんき',
        kanji: '天気',
        romaji: 'tenki',
        meaning: { en: 'weather', vi: 'thời tiết' }
      },
      {
        kana: 'あめ',
        kanji: '雨',
        romaji: 'ame',
        meaning: { en: 'rain', vi: 'mưa' }
      },
      {
        kana: 'いそがしい',
        kanji: '忙しい',
        romaji: 'isogashii',
        meaning: { en: 'busy (い-adj)', vi: 'bận rộn (tính từ -い)' }
      },
      {
        kana: 'ひま',
        kanji: '暇',
        romaji: 'hima',
        meaning: { en: 'free, not busy (な-adj)', vi: 'rảnh rỗi (tính từ -な)' }
      },
      {
        kana: 'つかれます',
        kanji: '疲れます',
        romaji: 'tsukaremasu',
        meaning: { en: 'to get tired', vi: 'mệt' }
      },
      {
        kana: 'しごと',
        kanji: '仕事',
        romaji: 'shigoto',
        meaning: { en: 'work, job', vi: 'công việc' }
      },
      {
        kana: 'さんぽ',
        kanji: '散歩',
        romaji: 'sanpo',
        meaning: { en: 'a walk, stroll', vi: 'đi dạo' }
      },
      {
        kana: 'やすみます',
        kanji: '休みます',
        romaji: 'yasumimasu',
        meaning: { en: 'to rest, take a break', vi: 'nghỉ ngơi' }
      },
      {
        kana: 'そして',
        romaji: 'soshite',
        meaning: { en: 'and, and then', vi: 'và' }
      },
      {
        kana: 'それから',
        romaji: 'sorekara',
        meaning: { en: 'after that, and then', vi: 'sau đó' }
      },
      {
        kana: 'でも',
        romaji: 'demo',
        meaning: { en: 'but, however', vi: 'nhưng' }
      }
    ],
    grammar: [
      {
        pattern: '〜ので、〜',
        title: { en: 'Because (〜ので)', vi: 'Vì, bởi vì (〜ので)' },
        explanation: {
          en: 'ので gives a reason with a softer, more polite nuance than から. Use plain form before it; な-adjectives and nouns add な.',
          vi: 'ので nêu lý do với sắc thái nhẹ nhàng, lịch sự hơn から. Dùng thể thường trước nó; tính từ -な và danh từ thêm な.'
        },
        examples: [
          {
            jp: 'あめなので、さんぽしません。',
            romaji: 'Ame na node, sanpo shimasen.',
            meaning: {
              en: 'Because it is raining, I will not take a walk.',
              vi: 'Vì trời mưa nên tôi không đi dạo.'
            }
          },
          {
            jp: 'きょうは いそがしいので、やすみません。',
            romaji: 'Kyō wa isogashii node, yasumimasen.',
            meaning: {
              en: 'Because I am busy today, I will not rest.',
              vi: 'Vì hôm nay bận nên tôi không nghỉ.'
            }
          }
        ]
      },
      {
        pattern: '〜が、〜',
        title: { en: 'But, although (〜が)', vi: 'Nhưng, mặc dù (〜が)' },
        explanation: {
          en: 'Place が at the end of the first clause to contrast it with the second. It connects two full sentences.',
          vi: 'Đặt が ở cuối mệnh đề đầu để tương phản với mệnh đề sau. Nó nối hai câu hoàn chỉnh.'
        },
        examples: [
          {
            jp: 'しごとは いそがしいですが、すきです。',
            romaji: 'Shigoto wa isogashii desu ga, suki desu.',
            meaning: {
              en: 'Work is busy, but I like it.',
              vi: 'Công việc bận rộn, nhưng tôi thích nó.'
            }
          },
          {
            jp: 'あめでしたが、さんぽに いきました。',
            romaji: 'Ame deshita ga, sanpo ni ikimashita.',
            meaning: {
              en: 'It was raining, but I went for a walk.',
              vi: 'Trời đã mưa, nhưng tôi vẫn đi dạo.'
            }
          }
        ]
      },
      {
        pattern: 'そして／それから／でも',
        title: { en: 'Sentence connectors', vi: 'Từ nối câu' },
        explanation: {
          en: 'そして = "and", それから = "after that", でも = "but". They start a new sentence after a full stop.',
          vi: 'そして = "và", それから = "sau đó", でも = "nhưng". Chúng bắt đầu một câu mới sau dấu chấm.'
        },
        examples: [
          {
            jp: 'しごとを しました。それから、やすみました。',
            romaji: 'Shigoto o shimashita. Sorekara, yasumimashita.',
            meaning: {
              en: 'I worked. After that, I rested.',
              vi: 'Tôi đã làm việc. Sau đó, tôi nghỉ ngơi.'
            }
          },
          {
            jp: 'きょうは いそがしいです。でも、あしたは ひまです。',
            romaji: 'Kyō wa isogashii desu. Demo, ashita wa hima desu.',
            meaning: {
              en: 'I am busy today. But tomorrow I am free.',
              vi: 'Hôm nay tôi bận. Nhưng ngày mai tôi rảnh.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'A busy day', vi: 'Một ngày bận rộn' },
        lines: [
          {
            jp: 'きょうは しごとが いそがしかったので、つかれました。',
            romaji: 'Kyō wa shigoto ga isogashikatta node, tsukaremashita.',
            meaning: {
              en: 'Because work was busy today, I got tired.',
              vi: 'Vì hôm nay công việc bận rộn nên tôi đã mệt.'
            }
          },
          {
            jp: 'あめでしたが、すこし さんぽしました。',
            romaji: 'Ame deshita ga, sukoshi sanpo shimashita.',
            meaning: {
              en: 'It was raining, but I took a short walk.',
              vi: 'Trời đã mưa, nhưng tôi vẫn đi dạo một chút.'
            }
          },
          {
            jp: 'でも、あしたは ひまなので、やすみます。',
            romaji: 'Demo, ashita wa hima na node, yasumimasu.',
            meaning: {
              en: 'But because I am free tomorrow, I will rest.',
              vi: 'Nhưng vì ngày mai rảnh nên tôi sẽ nghỉ ngơi.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'Why did the writer get tired?',
              vi: 'Tại sao người viết thấy mệt?'
            },
            choices: [
              { id: 'a', label: { en: 'Because work was busy', vi: 'Vì công việc bận rộn' } },
              { id: 'b', label: { en: 'Because it was free', vi: 'Vì rảnh rỗi' } },
              { id: 'c', label: { en: 'Because of the walk', vi: 'Vì đi dạo' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What will the writer do tomorrow?',
              vi: 'Ngày mai người viết sẽ làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Work', vi: 'Làm việc' } },
              { id: 'b', label: { en: 'Rest', vi: 'Nghỉ ngơi' } },
              { id: 'c', label: { en: 'Take a walk in the rain', vi: 'Đi dạo dưới mưa' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-22',
    number: 22,
    title: {
      en: 'Requests & Advice',
      vi: 'Yêu cầu & Lời khuyên'
    },
    focus: {
      en: 'Ask someone not to do something with 〜ないでください and give advice with 〜ほうが いいです.',
      vi: 'Yêu cầu ai đó đừng làm gì với 〜ないでください và đưa lời khuyên với 〜ほうが いいです.'
    },
    vocab: [
      {
        kana: 'くすり',
        kanji: '薬',
        romaji: 'kusuri',
        meaning: { en: 'medicine', vi: 'thuốc' }
      },
      {
        kana: 'びょういん',
        kanji: '病院',
        romaji: 'byōin',
        meaning: { en: 'hospital', vi: 'bệnh viện' }
      },
      {
        kana: 'たばこ',
        romaji: 'tabako',
        meaning: { en: 'cigarette, tobacco', vi: 'thuốc lá' }
      },
      {
        kana: 'すいます',
        kanji: '吸います',
        romaji: 'suimasu',
        meaning: { en: 'to smoke, inhale', vi: 'hút' }
      },
      {
        kana: 'むり',
        kanji: '無理',
        romaji: 'muri',
        meaning: { en: 'overdoing it, impossible (な-adj)', vi: 'quá sức (tính từ -な)' }
      },
      {
        kana: 'うんどう',
        kanji: '運動',
        romaji: 'undō',
        meaning: { en: 'exercise', vi: 'vận động, tập thể dục' }
      },
      {
        kana: 'ねつ',
        kanji: '熱',
        romaji: 'netsu',
        meaning: { en: 'fever', vi: 'sốt' }
      },
      {
        kana: 'きをつけます',
        kanji: '気をつけます',
        romaji: 'ki o tsukemasu',
        meaning: { en: 'to be careful', vi: 'chú ý, cẩn thận' }
      },
      {
        kana: 'はやく',
        kanji: '早く',
        romaji: 'hayaku',
        meaning: { en: 'early, quickly', vi: 'sớm, nhanh' }
      },
      {
        kana: 'ゆっくり',
        romaji: 'yukkuri',
        meaning: { en: 'slowly, restfully', vi: 'từ từ, thong thả' }
      },
      {
        kana: 'たくさん',
        romaji: 'takusan',
        meaning: { en: 'a lot, many', vi: 'nhiều' }
      }
    ],
    grammar: [
      {
        pattern: 'V(ない形)で ください',
        title: { en: 'Please do not...', vi: 'Xin đừng...' },
        explanation: {
          en: 'Take the ない-form of a verb and add で ください to politely ask someone not to do something.',
          vi: 'Lấy thể ない của động từ rồi thêm で ください để lịch sự yêu cầu ai đó đừng làm gì.'
        },
        examples: [
          {
            jp: 'ここで たばこを すわないで ください。',
            romaji: 'Koko de tabako o suwanai de kudasai.',
            meaning: {
              en: 'Please do not smoke here.',
              vi: 'Xin đừng hút thuốc ở đây.'
            }
          },
          {
            jp: 'むりを しないで ください。',
            romaji: 'Muri o shinai de kudasai.',
            meaning: {
              en: 'Please do not overdo it.',
              vi: 'Xin đừng làm quá sức.'
            }
          }
        ]
      },
      {
        pattern: 'V(た形)ほうが いいです',
        title: { en: 'You had better... (advice)', vi: 'Nên... (lời khuyên)' },
        explanation: {
          en: 'Use the た-form + ほうが いいです to recommend that someone do something.',
          vi: 'Dùng thể た + ほうが いいです để khuyên ai đó nên làm gì.'
        },
        examples: [
          {
            jp: 'くすりを のんだ ほうが いいです。',
            romaji: 'Kusuri o nonda hō ga ii desu.',
            meaning: {
              en: 'You had better take some medicine.',
              vi: 'Bạn nên uống thuốc thì hơn.'
            }
          },
          {
            jp: 'はやく びょういんへ いった ほうが いいです。',
            romaji: 'Hayaku byōin e itta hō ga ii desu.',
            meaning: {
              en: 'You had better go to the hospital soon.',
              vi: 'Bạn nên đi bệnh viện sớm thì hơn.'
            }
          }
        ]
      },
      {
        pattern: 'V(ない形)ほうが いいです',
        title: { en: 'You had better not... (advice)', vi: 'Không nên... (lời khuyên)' },
        explanation: {
          en: 'Use the ない-form + ほうが いいです to advise against doing something.',
          vi: 'Dùng thể ない + ほうが いいです để khuyên không nên làm gì.'
        },
        examples: [
          {
            jp: 'ねつが あるので、うんどうしない ほうが いいです。',
            romaji: 'Netsu ga aru node, undō shinai hō ga ii desu.',
            meaning: {
              en: 'Since you have a fever, you had better not exercise.',
              vi: 'Vì bạn đang sốt nên không nên vận động thì hơn.'
            }
          },
          {
            jp: 'たばこを すわない ほうが いいです。',
            romaji: 'Tabako o suwanai hō ga ii desu.',
            meaning: {
              en: 'You had better not smoke.',
              vi: 'Bạn không nên hút thuốc thì hơn.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Advice from a doctor', vi: 'Lời khuyên của bác sĩ' },
        lines: [
          {
            jp: 'ねつが あるので、きょうは うんどうしないで ください。',
            romaji: 'Netsu ga aru node, kyō wa undō shinai de kudasai.',
            meaning: {
              en: 'Since you have a fever, please do not exercise today.',
              vi: 'Vì bạn đang sốt nên hôm nay xin đừng vận động.'
            }
          },
          {
            jp: 'くすりを のんで、ゆっくり やすんだ ほうが いいです。',
            romaji: 'Kusuri o nonde, yukkuri yasunda hō ga ii desu.',
            meaning: {
              en: 'You had better take medicine and rest slowly.',
              vi: 'Bạn nên uống thuốc và nghỉ ngơi thong thả thì hơn.'
            }
          },
          {
            jp: 'みずを たくさん のんで、たばこを すわない ほうが いいです。',
            romaji: 'Mizu o takusan nonde, tabako o suwanai hō ga ii desu.',
            meaning: {
              en: 'Drink a lot of water, and you had better not smoke.',
              vi: 'Hãy uống nhiều nước, và bạn không nên hút thuốc thì hơn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What should the patient not do today?',
              vi: 'Hôm nay người bệnh không nên làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Exercise', vi: 'Vận động' } },
              { id: 'b', label: { en: 'Take medicine', vi: 'Uống thuốc' } },
              { id: 'c', label: { en: 'Drink water', vi: 'Uống nước' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does the doctor advise?',
              vi: 'Bác sĩ khuyên điều gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Smoke a little', vi: 'Hút thuốc một chút' } },
              { id: 'b', label: { en: 'Take medicine and rest', vi: 'Uống thuốc và nghỉ ngơi' } },
              { id: 'c', label: { en: 'Go to work', vi: 'Đi làm' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-23',
    number: 23,
    title: {
      en: 'Already, Still & Shopping',
      vi: 'Đã, Vẫn còn & Mua sắm'
    },
    focus: {
      en: 'Use もう (already) and まだ (still / not yet), and ask for things with 〜を ください.',
      vi: 'Dùng もう (đã) và まだ (vẫn còn / chưa), và xin đồ với 〜を ください.'
    },
    vocab: [
      {
        kana: 'もう',
        romaji: 'mō',
        meaning: { en: 'already', vi: 'đã, rồi' }
      },
      {
        kana: 'まだ',
        romaji: 'mada',
        meaning: { en: 'still, not yet', vi: 'vẫn còn, chưa' }
      },
      {
        kana: 'ください',
        romaji: 'kudasai',
        meaning: { en: 'please give me', vi: 'cho tôi, làm ơn' }
      },
      {
        kana: 'かいます',
        kanji: '買います',
        romaji: 'kaimasu',
        meaning: { en: 'to buy', vi: 'mua' }
      },
      {
        kana: 'ひとつ',
        kanji: '一つ',
        romaji: 'hitotsu',
        meaning: { en: 'one (thing)', vi: 'một cái' }
      },
      {
        kana: 'ふたつ',
        kanji: '二つ',
        romaji: 'futatsu',
        meaning: { en: 'two (things)', vi: 'hai cái' }
      },
      {
        kana: 'いくつ',
        romaji: 'ikutsu',
        meaning: { en: 'how many', vi: 'mấy cái, bao nhiêu cái' }
      },
      {
        kana: 'りんご',
        romaji: 'ringo',
        meaning: { en: 'apple', vi: 'quả táo' }
      },
      {
        kana: 'たまご',
        kanji: '卵',
        romaji: 'tamago',
        meaning: { en: 'egg', vi: 'trứng' }
      },
      {
        kana: 'ぎゅうにゅう',
        kanji: '牛乳',
        romaji: 'gyūnyū',
        meaning: { en: 'milk', vi: 'sữa' }
      },
      {
        kana: 'しゅくだい',
        kanji: '宿題',
        romaji: 'shukudai',
        meaning: { en: 'homework', vi: 'bài tập về nhà' }
      }
    ],
    grammar: [
      {
        pattern: 'N を (number) ください',
        title: { en: 'Please give me N', vi: 'Cho tôi N' },
        explanation: {
          en: 'Use N を ください to ask for something. Put a counter after を to say how many, e.g. りんごを ふたつ.',
          vi: 'Dùng N を ください để xin thứ gì đó. Đặt số đếm sau を để nói số lượng, vd りんごを ふたつ.'
        },
        examples: [
          {
            jp: 'りんごを ふたつ ください。',
            romaji: 'Ringo o futatsu kudasai.',
            meaning: { en: 'Please give me two apples.', vi: 'Cho tôi hai quả táo.' }
          },
          {
            jp: 'ぎゅうにゅうを ひとつ ください。',
            romaji: 'Gyūnyū o hitotsu kudasai.',
            meaning: { en: 'Please give me one milk.', vi: 'Cho tôi một hộp sữa.' }
          }
        ]
      },
      {
        pattern: 'もう V ました',
        title: { en: 'Already done (もう)', vi: 'Đã làm rồi (もう)' },
        explanation: {
          en: 'もう before a past verb means "already". The answer "no, not yet" is いいえ、まだです.',
          vi: 'もう trước động từ quá khứ nghĩa là "đã... rồi". Câu trả lời "chưa" là いいえ、まだです.'
        },
        examples: [
          {
            jp: 'もう しゅくだいを しました。',
            romaji: 'Mō shukudai o shimashita.',
            meaning: { en: 'I have already done my homework.', vi: 'Tôi đã làm bài tập rồi.' }
          },
          {
            jp: 'もう ひるごはんを たべましたか。',
            romaji: 'Mō hirugohan o tabemashita ka.',
            meaning: { en: 'Have you eaten lunch already?', vi: 'Bạn đã ăn trưa chưa?' }
          }
        ]
      },
      {
        pattern: 'まだ ... / まだ V ません',
        title: { en: 'Still / not yet (まだ)', vi: 'Vẫn còn / chưa (まだ)' },
        explanation: {
          en: 'まだ with an affirmative means "still"; まだです or まだ + a negative verb means "not yet".',
          vi: 'まだ với câu khẳng định nghĩa là "vẫn còn"; まだです hoặc まだ + động từ phủ định nghĩa là "chưa".'
        },
        examples: [
          {
            jp: 'まだ じかんが あります。',
            romaji: 'Mada jikan ga arimasu.',
            meaning: { en: 'There is still time.', vi: 'Vẫn còn thời gian.' }
          },
          {
            jp: 'いいえ、まだ かいません。',
            romaji: 'Iie, mada kaimasen.',
            meaning: { en: 'No, I have not bought it yet.', vi: 'Không, tôi vẫn chưa mua.' }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'At the supermarket', vi: 'Ở siêu thị' },
        lines: [
          {
            jp: 'みせの ひと：いらっしゃいませ。',
            romaji: 'Mise no hito: Irasshaimase.',
            meaning: { en: 'Shop staff: Welcome.', vi: 'Nhân viên: Xin mời vào.' }
          },
          {
            jp: 'きゃく：りんごを ふたつと、たまごを ください。',
            romaji: 'Kyaku: Ringo o futatsu to, tamago o kudasai.',
            meaning: {
              en: 'Customer: Please give me two apples and some eggs.',
              vi: 'Khách: Cho tôi hai quả táo và trứng.'
            }
          },
          {
            jp: 'きゃく：ぎゅうにゅうは もう かいましたから、まだ いりません。',
            romaji: 'Kyaku: Gyūnyū wa mō kaimashita kara, mada irimasen.',
            meaning: {
              en: 'Customer: I already bought milk, so I do not need it yet.',
              vi: 'Khách: Sữa tôi đã mua rồi nên chưa cần.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'How many apples does the customer want?',
              vi: 'Khách muốn mấy quả táo?'
            },
            choices: [
              { id: 'a', label: { en: 'One', vi: 'Một' } },
              { id: 'b', label: { en: 'Two', vi: 'Hai' } },
              { id: 'c', label: { en: 'Three', vi: 'Ba' } }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: {
              en: 'Why does the customer not need milk?',
              vi: 'Tại sao khách không cần sữa?'
            },
            choices: [
              {
                id: 'a',
                label: { en: 'They already bought it', vi: 'Vì đã mua rồi' }
              },
              { id: 'b', label: { en: 'They dislike milk', vi: 'Vì ghét sữa' } },
              { id: 'c', label: { en: 'It is too expensive', vi: 'Vì quá đắt' } }
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
      en: 'Opinions & Plans',
      vi: 'Ý kiến & Dự định'
    },
    focus: {
      en: 'Make predictions with 〜でしょう, give opinions with 〜と 思います, and state plans with 〜つもりです.',
      vi: 'Dự đoán với 〜でしょう, nêu ý kiến với 〜と 思います, và nói dự định với 〜つもりです.'
    },
    vocab: [
      {
        kana: 'おもいます',
        kanji: '思います',
        romaji: 'omoimasu',
        meaning: { en: 'to think', vi: 'nghĩ' }
      },
      {
        kana: 'つもり',
        romaji: 'tsumori',
        meaning: { en: 'intention, plan', vi: 'dự định' }
      },
      {
        kana: 'たぶん',
        romaji: 'tabun',
        meaning: { en: 'probably, maybe', vi: 'có lẽ' }
      },
      {
        kana: 'はれ',
        kanji: '晴れ',
        romaji: 'hare',
        meaning: { en: 'sunny weather', vi: 'trời nắng' }
      },
      {
        kana: 'くもり',
        kanji: '曇り',
        romaji: 'kumori',
        meaning: { en: 'cloudy weather', vi: 'trời nhiều mây' }
      },
      {
        kana: 'らいしゅう',
        kanji: '来週',
        romaji: 'raishū',
        meaning: { en: 'next week', vi: 'tuần sau' }
      },
      {
        kana: 'らいねん',
        kanji: '来年',
        romaji: 'rainen',
        meaning: { en: 'next year', vi: 'năm sau' }
      },
      {
        kana: 'なつやすみ',
        kanji: '夏休み',
        romaji: 'natsuyasumi',
        meaning: { en: 'summer vacation', vi: 'nghỉ hè' }
      },
      {
        kana: 'りゅうがく',
        kanji: '留学',
        romaji: 'ryūgaku',
        meaning: { en: 'studying abroad', vi: 'du học' }
      },
      {
        kana: 'べんきょう',
        kanji: '勉強',
        romaji: 'benkyō',
        meaning: { en: 'study', vi: 'việc học' }
      },
      {
        kana: 'けっこん',
        kanji: '結婚',
        romaji: 'kekkon',
        meaning: { en: 'marriage', vi: 'kết hôn' }
      }
    ],
    grammar: [
      {
        pattern: '〜でしょう',
        title: { en: 'Probably (〜でしょう)', vi: 'Có lẽ (〜でしょう)' },
        explanation: {
          en: 'でしょう after a plain form or noun expresses a prediction. It often pairs with たぶん (probably).',
          vi: 'でしょう sau thể thường hoặc danh từ diễn đạt sự dự đoán. Nó thường đi cùng たぶん (có lẽ).'
        },
        examples: [
          {
            jp: 'あしたは はれでしょう。',
            romaji: 'Ashita wa hare deshō.',
            meaning: { en: 'It will probably be sunny tomorrow.', vi: 'Ngày mai có lẽ trời nắng.' }
          },
          {
            jp: 'らいしゅうは たぶん さむいでしょう。',
            romaji: 'Raishū wa tabun samui deshō.',
            meaning: {
              en: 'Next week it will probably be cold.',
              vi: 'Tuần sau có lẽ trời sẽ lạnh.'
            }
          }
        ]
      },
      {
        pattern: '〜と 思います',
        title: { en: 'I think that... (〜と 思います)', vi: 'Tôi nghĩ rằng... (〜と 思います)' },
        explanation: {
          en: 'Put a plain-form sentence before と 思います to give your opinion or guess.',
          vi: 'Đặt một câu ở thể thường trước と 思います để nêu ý kiến hoặc phỏng đoán của bạn.'
        },
        examples: [
          {
            jp: 'にほんごは おもしろいと 思います。',
            romaji: 'Nihongo wa omoshiroi to omoimasu.',
            meaning: {
              en: 'I think Japanese is interesting.',
              vi: 'Tôi nghĩ tiếng Nhật thú vị.'
            }
          },
          {
            jp: 'あした くもりだと 思います。',
            romaji: 'Ashita kumori da to omoimasu.',
            meaning: {
              en: 'I think it will be cloudy tomorrow.',
              vi: 'Tôi nghĩ ngày mai trời sẽ nhiều mây.'
            }
          }
        ]
      },
      {
        pattern: 'V(辞書形)つもりです',
        title: { en: 'I intend to... (〜つもりです)', vi: 'Tôi dự định... (〜つもりです)' },
        explanation: {
          en: 'Use the dictionary form + つもりです to state a firm plan or intention.',
          vi: 'Dùng thể từ điển + つもりです để nói một kế hoạch hay dự định chắc chắn.'
        },
        examples: [
          {
            jp: 'らいねん にほんへ りゅうがくする つもりです。',
            romaji: 'Rainen Nihon e ryūgaku suru tsumori desu.',
            meaning: {
              en: 'I intend to study abroad in Japan next year.',
              vi: 'Năm sau tôi dự định đi du học ở Nhật.'
            }
          },
          {
            jp: 'なつやすみに にほんごを べんきょうする つもりです。',
            romaji: 'Natsuyasumi ni nihongo o benkyō suru tsumori desu.',
            meaning: {
              en: 'I intend to study Japanese during summer vacation.',
              vi: 'Vào kỳ nghỉ hè tôi dự định học tiếng Nhật.'
            }
          }
        ]
      }
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: "Rin's plan", vi: 'Dự định của Rin' },
        lines: [
          {
            jp: 'リンさんは らいねん にほんへ りゅうがくする つもりです。',
            romaji: 'Rin-san wa rainen Nihon e ryūgaku suru tsumori desu.',
            meaning: {
              en: 'Rin intends to study abroad in Japan next year.',
              vi: 'Năm sau Rin dự định đi du học ở Nhật.'
            }
          },
          {
            jp: 'にほんごは むずかしいですが、おもしろいと 思います。',
            romaji: 'Nihongo wa muzukashii desu ga, omoshiroi to omoimasu.',
            meaning: {
              en: 'Japanese is difficult, but she thinks it is interesting.',
              vi: 'Tiếng Nhật khó, nhưng cô ấy nghĩ nó thú vị.'
            }
          },
          {
            jp: 'なつやすみは たぶん いそがしいでしょう。',
            romaji: 'Natsuyasumi wa tabun isogashii deshō.',
            meaning: {
              en: 'Summer vacation will probably be busy.',
              vi: 'Kỳ nghỉ hè có lẽ sẽ bận rộn.'
            }
          }
        ],
        questions: [
          {
            id: 'q1',
            question: {
              en: 'What does Rin intend to do next year?',
              vi: 'Năm sau Rin dự định làm gì?'
            },
            choices: [
              { id: 'a', label: { en: 'Study abroad in Japan', vi: 'Đi du học ở Nhật' } },
              { id: 'b', label: { en: 'Get married', vi: 'Kết hôn' } },
              { id: 'c', label: { en: 'Buy a house', vi: 'Mua nhà' } }
            ],
            correctId: 'a'
          },
          {
            id: 'q2',
            question: {
              en: 'What does Rin think about Japanese?',
              vi: 'Rin nghĩ gì về tiếng Nhật?'
            },
            choices: [
              { id: 'a', label: { en: 'It is boring', vi: 'Nó nhàm chán' } },
              { id: 'b', label: { en: 'It is interesting', vi: 'Nó thú vị' } },
              { id: 'c', label: { en: 'It is easy', vi: 'Nó dễ' } }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  }
];
