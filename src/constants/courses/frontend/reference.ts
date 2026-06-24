import type { Bilingual, GrammarPoint, VocabItem } from '../types.ts';

export type ReferenceVocabGroup = {
  id: string;
  title: Bilingual;
  items: VocabItem[];
};

export type MeetingPhrase = {
  jp: string;
  romaji: string;
  meaning: Bilingual;
};

export type MeetingPhraseGroup = {
  id: string;
  title: Bilingual;
  phrases: MeetingPhrase[];
};

export const referenceVocabGroups: ReferenceVocabGroup[] = [
  {
    id: 'project-roles',
    title: { en: 'Project & roles', vi: 'Dự án & vai trò' },
    items: [
      {
        kana: 'ブリッジエスイー',
        romaji: 'burijji esuī',
        meaning: { en: 'bridge SE (BrSE)', vi: 'kỹ sư cầu nối (BrSE)' }
      },
      {
        kana: 'あんけん',
        kanji: '案件',
        romaji: 'anken',
        meaning: { en: 'project/case', vi: 'dự án/vụ việc' }
      },
      {
        kana: 'たんとうしゃ',
        kanji: '担当者',
        romaji: 'tantōsha',
        meaning: { en: 'person in charge', vi: 'người phụ trách' }
      },
      {
        kana: 'かんけいしゃ',
        kanji: '関係者',
        romaji: 'kankeisha',
        meaning: { en: 'stakeholder', vi: 'bên liên quan' }
      },
      {
        kana: 'こきゃく',
        kanji: '顧客',
        romaji: 'kokyaku',
        meaning: { en: 'client', vi: 'khách hàng' }
      },
      {
        kana: 'まどぐち',
        kanji: '窓口',
        romaji: 'madoguchi',
        meaning: { en: 'point of contact', vi: 'đầu mối liên hệ' }
      },
      {
        kana: 'じょうりゅうこうてい',
        kanji: '上流工程',
        romaji: 'jōryū kōtei',
        meaning: { en: 'upstream process', vi: 'công đoạn thượng nguồn' }
      },
      {
        kana: 'かりゅうこうてい',
        kanji: '下流工程',
        romaji: 'karyū kōtei',
        meaning: { en: 'downstream process', vi: 'công đoạn hạ nguồn' }
      },
      {
        kana: 'たいせい',
        kanji: '体制',
        romaji: 'taisei',
        meaning: { en: 'project/team structure', vi: 'cơ cấu tổ chức dự án' }
      },
      {
        kana: 'やくわりぶんたん',
        kanji: '役割分担',
        romaji: 'yakuwari buntan',
        meaning: { en: 'division of roles', vi: 'phân chia vai trò' }
      }
    ]
  },
  {
    id: 'requirements',
    title: { en: 'Requirements & spec', vi: 'Yêu cầu & đặc tả' },
    items: [
      {
        kana: 'ようけんていぎ',
        kanji: '要件定義',
        romaji: 'yōken teigi',
        meaning: { en: 'requirement definition', vi: 'định nghĩa yêu cầu' }
      },
      {
        kana: 'しようしょ',
        kanji: '仕様書',
        romaji: 'shiyōsho',
        meaning: { en: 'specification document', vi: 'tài liệu đặc tả' }
      },
      {
        kana: 'ようきゅう',
        kanji: '要求',
        romaji: 'yōkyū',
        meaning: { en: 'request', vi: 'yêu cầu' }
      },
      {
        kana: 'きのうようけん',
        kanji: '機能要件',
        romaji: 'kinō yōken',
        meaning: { en: 'functional requirement', vi: 'yêu cầu chức năng' }
      },
      {
        kana: 'ひきのうようけん',
        kanji: '非機能要件',
        romaji: 'hikinō yōken',
        meaning: { en: 'non-functional requirement', vi: 'yêu cầu phi chức năng' }
      },
      {
        kana: 'にんしきそご',
        kanji: '認識齟齬',
        romaji: 'ninshiki sogo',
        meaning: { en: 'misalignment of understanding', vi: 'lệch nhận thức' }
      },
      {
        kana: 'ぜんていじょうけん',
        kanji: '前提条件',
        romaji: 'zentei jōken',
        meaning: { en: 'precondition/assumption', vi: 'điều kiện tiền đề' }
      },
      {
        kana: 'せいやく',
        kanji: '制約',
        romaji: 'seiyaku',
        meaning: { en: 'constraint', vi: 'ràng buộc' }
      },
      {
        kana: 'うけいれじょうけん',
        kanji: '受け入れ条件',
        romaji: 'ukeire jōken',
        meaning: { en: 'acceptance criteria', vi: 'tiêu chí chấp nhận' }
      },
      {
        kana: 'がめんせんい',
        kanji: '画面遷移',
        romaji: "gamen sen'i",
        meaning: { en: 'screen transition', vi: 'chuyển màn hình' }
      }
    ]
  },
  {
    id: 'design',
    title: { en: 'Design & architecture', vi: 'Thiết kế & kiến trúc' },
    items: [
      {
        kana: 'きほんせっけい',
        kanji: '基本設計',
        romaji: 'kihon sekkei',
        meaning: { en: 'basic/high-level design', vi: 'thiết kế cơ bản' }
      },
      {
        kana: 'しょうさいせっけい',
        kanji: '詳細設計',
        romaji: 'shōsai sekkei',
        meaning: { en: 'detailed design', vi: 'thiết kế chi tiết' }
      },
      {
        kana: 'せっけいしょ',
        kanji: '設計書',
        romaji: 'sekkeisho',
        meaning: { en: 'design document', vi: 'tài liệu thiết kế' }
      },
      {
        kana: 'こうせい',
        kanji: '構成',
        romaji: 'kōsei',
        meaning: { en: 'configuration/structure', vi: 'cấu hình/cấu trúc' }
      },
      {
        kana: 'いぞんかんけい',
        kanji: '依存関係',
        romaji: 'izon kankei',
        meaning: { en: 'dependency', vi: 'quan hệ phụ thuộc' }
      },
      {
        kana: 'かくちょうせい',
        kanji: '拡張性',
        romaji: 'kakuchōsei',
        meaning: { en: 'extensibility', vi: 'khả năng mở rộng' }
      },
      {
        kana: 'ほしゅせい',
        kanji: '保守性',
        romaji: 'hoshusei',
        meaning: { en: 'maintainability', vi: 'khả năng bảo trì' }
      },
      {
        kana: 'かようせい',
        kanji: '可用性',
        romaji: 'kayōsei',
        meaning: { en: 'availability', vi: 'tính sẵn sàng' }
      },
      {
        kana: 'ひょうじゅんか',
        kanji: '標準化',
        romaji: 'hyōjunka',
        meaning: { en: 'standardization', vi: 'chuẩn hóa' }
      },
      {
        kana: 'さいりよう',
        kanji: '再利用',
        romaji: 'sairiyō',
        meaning: { en: 'reuse', vi: 'tái sử dụng' }
      }
    ]
  },
  {
    id: 'development',
    title: { en: 'Development & code', vi: 'Phát triển & code' },
    items: [
      {
        kana: 'じっそう',
        kanji: '実装',
        romaji: 'jissō',
        meaning: { en: 'implementation', vi: 'triển khai/code' }
      },
      {
        kana: 'かいしゅう',
        kanji: '改修',
        romaji: 'kaishū',
        meaning: { en: 'modification/rework', vi: 'chỉnh sửa/làm lại' }
      },
      {
        kana: 'しゅうせい',
        kanji: '修正',
        romaji: 'shūsei',
        meaning: { en: 'fix/correction', vi: 'sửa lỗi' }
      },
      {
        kana: 'さぶん',
        kanji: '差分',
        romaji: 'sabun',
        meaning: { en: 'diff', vi: 'phần khác biệt (diff)' }
      },
      {
        kana: 'はんえい',
        kanji: '反映',
        romaji: "han'ei",
        meaning: { en: 'apply/reflect', vi: 'áp dụng/phản ánh' }
      },
      {
        kana: 'きょうつうか',
        kanji: '共通化',
        romaji: 'kyōtsūka',
        meaning: { en: 'making common/sharing', vi: 'dùng chung hóa' }
      },
      {
        kana: 'めいめいきそく',
        kanji: '命名規則',
        romaji: 'meimei kisoku',
        meaning: { en: 'naming convention', vi: 'quy tắc đặt tên' }
      },
      {
        kana: 'かどくせい',
        kanji: '可読性',
        romaji: 'kadokusei',
        meaning: { en: 'readability', vi: 'tính dễ đọc' }
      },
      {
        kana: 'ぎじゅつてきふさい',
        kanji: '技術的負債',
        romaji: 'gijutsuteki fusai',
        meaning: { en: 'technical debt', vi: 'nợ kỹ thuật' }
      },
      {
        kana: 'てもどり',
        kanji: '手戻り',
        romaji: 'temodori',
        meaning: { en: 'rework due to mistakes', vi: 'làm lại do sai sót' }
      }
    ]
  },
  {
    id: 'frontend-web',
    title: { en: 'Frontend & web', vi: 'Frontend & web' },
    items: [
      {
        kana: 'がめん',
        kanji: '画面',
        romaji: 'gamen',
        meaning: { en: 'screen/view', vi: 'màn hình' }
      },
      {
        kana: 'ひょうじ',
        kanji: '表示',
        romaji: 'hyōji',
        meaning: { en: 'display', vi: 'hiển thị' }
      },
      {
        kana: 'びょうが',
        kanji: '描画',
        romaji: 'byōga',
        meaning: { en: 'rendering', vi: 'vẽ/render' }
      },
      {
        kana: 'ぶひん',
        kanji: '部品',
        romaji: 'buhin',
        meaning: { en: 'component/part', vi: 'component/linh kiện' }
      },
      {
        kana: 'じょうたいかんり',
        kanji: '状態管理',
        romaji: 'jōtai kanri',
        meaning: { en: 'state management', vi: 'quản lý state' }
      },
      {
        kana: 'おうとうせい',
        kanji: '応答性',
        romaji: 'ōtōsei',
        meaning: { en: 'responsiveness', vi: 'tính phản hồi' }
      },
      {
        kana: 'ごかんせい',
        kanji: '互換性',
        romaji: 'gokansei',
        meaning: { en: 'compatibility', vi: 'tính tương thích' }
      },
      {
        kana: 'びょうがくずれ',
        kanji: '描画崩れ',
        romaji: 'byōga kuzure',
        meaning: { en: 'broken rendering/layout', vi: 'vỡ hiển thị/layout' }
      },
      {
        kana: 'よみこみ',
        kanji: '読み込み',
        romaji: 'yomikomi',
        meaning: { en: 'loading', vi: 'tải/nạp' }
      },
      {
        kana: 'たいおうはば',
        kanji: '対応幅',
        romaji: 'taiō haba',
        meaning: { en: 'supported width range', vi: 'dải độ rộng hỗ trợ' }
      }
    ]
  },
  {
    id: 'testing-qa',
    title: { en: 'Testing & QA', vi: 'Testing & QA' },
    items: [
      {
        kana: 'たんたいテスト',
        kanji: '単体テスト',
        romaji: 'tantai tesuto',
        meaning: { en: 'unit test', vi: 'unit test' }
      },
      {
        kana: 'けつごうテスト',
        kanji: '結合テスト',
        romaji: 'ketsugō tesuto',
        meaning: { en: 'integration test', vi: 'integration test' }
      },
      {
        kana: 'かいきテスト',
        kanji: '回帰テスト',
        romaji: 'kaiki tesuto',
        meaning: { en: 'regression test', vi: 'regression test' }
      },
      {
        kana: 'ふぐあい',
        kanji: '不具合',
        romaji: 'fuguai',
        meaning: { en: 'bug/defect', vi: 'lỗi' }
      },
      {
        kana: 'さいげんてじゅん',
        kanji: '再現手順',
        romaji: 'saigen tejun',
        meaning: { en: 'reproduction steps', vi: 'các bước tái hiện' }
      },
      {
        kana: 'きたいけっか',
        kanji: '期待結果',
        romaji: 'kitai kekka',
        meaning: { en: 'expected result', vi: 'kết quả mong đợi' }
      },
      {
        kana: 'じっそくち',
        kanji: '実測値',
        romaji: 'jissokuchi',
        meaning: { en: 'actual result/value', vi: 'giá trị thực tế' }
      },
      {
        kana: 'けんしょう',
        kanji: '検証',
        romaji: 'kenshō',
        meaning: { en: 'verification', vi: 'kiểm chứng' }
      },
      {
        kana: 'ひんしつほしょう',
        kanji: '品質保証',
        romaji: 'hinshitsu hoshō',
        meaning: { en: 'quality assurance (QA)', vi: 'đảm bảo chất lượng' }
      },
      {
        kana: 'もうらせい',
        kanji: '網羅性',
        romaji: 'mōrasei',
        meaning: { en: 'test coverage/comprehensiveness', vi: 'độ bao phủ' }
      }
    ]
  },
  {
    id: 'infra-deploy',
    title: { en: 'Infrastructure & deployment', vi: 'Hạ tầng & triển khai' },
    items: [
      {
        kana: 'ほんばんかんきょう',
        kanji: '本番環境',
        romaji: 'honban kankyō',
        meaning: { en: 'production environment', vi: 'môi trường production' }
      },
      {
        kana: 'けんしょうかんきょう',
        kanji: '検証環境',
        romaji: 'kenshō kankyō',
        meaning: { en: 'staging environment', vi: 'môi trường staging' }
      },
      {
        kana: 'こうちく',
        kanji: '構築',
        romaji: 'kōchiku',
        meaning: { en: 'setup/build', vi: 'dựng/thiết lập' }
      },
      {
        kana: 'きりもどし',
        kanji: '切り戻し',
        romaji: 'kirimodoshi',
        meaning: { en: 'rollback', vi: 'quay lui (rollback)' }
      },
      {
        kana: 'かんし',
        kanji: '監視',
        romaji: 'kanshi',
        meaning: { en: 'monitoring', vi: 'giám sát' }
      },
      { kana: 'ふか', kanji: '負荷', romaji: 'fuka', meaning: { en: 'load', vi: 'tải' } },
      {
        kana: 'かどう',
        kanji: '稼働',
        romaji: 'kadō',
        meaning: { en: 'operation/uptime', vi: 'vận hành/hoạt động' }
      },
      {
        kana: 'いこう',
        kanji: '移行',
        romaji: 'ikō',
        meaning: { en: 'migration', vi: 'di chuyển/migration' }
      },
      {
        kana: 'じどうか',
        kanji: '自動化',
        romaji: 'jidōka',
        meaning: { en: 'automation', vi: 'tự động hóa' }
      },
      {
        kana: 'てじゅんしょ',
        kanji: '手順書',
        romaji: 'tejunsho',
        meaning: { en: 'procedure manual', vi: 'tài liệu quy trình' }
      }
    ]
  },
  {
    id: 'incident-logs',
    title: { en: 'Incidents & logs', vi: 'Sự cố & log' },
    items: [
      {
        kana: 'しょうがい',
        kanji: '障害',
        romaji: 'shōgai',
        meaning: { en: 'incident/failure', vi: 'sự cố' }
      },
      {
        kana: 'げんいん',
        kanji: '原因',
        romaji: "gen'in",
        meaning: { en: 'cause', vi: 'nguyên nhân' }
      },
      {
        kana: 'えいきょうはんい',
        kanji: '影響範囲',
        romaji: "eikyō han'i",
        meaning: { en: 'scope of impact', vi: 'phạm vi ảnh hưởng' }
      },
      {
        kana: 'ざんていたいおう',
        kanji: '暫定対応',
        romaji: 'zantei taiō',
        meaning: { en: 'temporary workaround', vi: 'xử lý tạm thời' }
      },
      {
        kana: 'こうきゅうたいおう',
        kanji: '恒久対応',
        romaji: 'kōkyū taiō',
        meaning: { en: 'permanent fix', vi: 'xử lý triệt để' }
      },
      {
        kana: 'さいはつぼうし',
        kanji: '再発防止',
        romaji: 'saihatsu bōshi',
        meaning: { en: 'recurrence prevention', vi: 'phòng tái diễn' }
      },
      {
        kana: 'きりわけ',
        kanji: '切り分け',
        romaji: 'kiriwake',
        meaning: { en: 'isolating the cause', vi: 'khoanh vùng nguyên nhân' }
      },
      {
        kana: 'ふっきゅう',
        kanji: '復旧',
        romaji: 'fukkyū',
        meaning: { en: 'recovery', vi: 'khôi phục' }
      },
      {
        kana: 'いちじたいおう',
        kanji: '一次対応',
        romaji: 'ichiji taiō',
        meaning: { en: 'first response', vi: 'xử lý ban đầu' }
      },
      {
        kana: 'ログちょうさ',
        romaji: 'rogu chōsa',
        meaning: { en: 'log investigation', vi: 'điều tra log' }
      }
    ]
  },
  {
    id: 'communication',
    title: { en: 'Meetings & communication', vi: 'Họp & giao tiếp' },
    items: [
      {
        kana: 'ぎじろく',
        kanji: '議事録',
        romaji: 'gijiroku',
        meaning: { en: 'meeting minutes', vi: 'biên bản họp' }
      },
      {
        kana: 'きょうゆう',
        kanji: '共有',
        romaji: 'kyōyū',
        meaning: { en: 'sharing', vi: 'chia sẻ' }
      },
      {
        kana: 'にんしきあわせ',
        kanji: '認識合わせ',
        romaji: 'ninshiki awase',
        meaning: { en: 'aligning understanding', vi: 'thống nhất nhận thức' }
      },
      {
        kana: 'ほうれんそう',
        kanji: '報連相',
        romaji: 'hōrensō',
        meaning: { en: 'report-contact-consult', vi: 'báo cáo - liên lạc - bàn bạc' }
      },
      {
        kana: 'かくにん',
        kanji: '確認',
        romaji: 'kakunin',
        meaning: { en: 'confirmation', vi: 'xác nhận' }
      },
      {
        kana: 'れんけい',
        kanji: '連携',
        romaji: 'renkei',
        meaning: { en: 'coordination', vi: 'phối hợp' }
      },
      {
        kana: 'ちょうせい',
        kanji: '調整',
        romaji: 'chōsei',
        meaning: { en: 'adjustment/coordination', vi: 'điều chỉnh/sắp xếp' }
      },
      {
        kana: 'もちかえり',
        kanji: '持ち帰り',
        romaji: 'mochikaeri',
        meaning: { en: 'taking back to consider', vi: 'mang về cân nhắc' }
      },
      {
        kana: 'ごうい',
        kanji: '合意',
        romaji: 'gōi',
        meaning: { en: 'agreement', vi: 'thống nhất/đồng thuận' }
      },
      {
        kana: 'かだいかんり',
        kanji: '課題管理',
        romaji: 'kadai kanri',
        meaning: { en: 'issue management', vi: 'quản lý vấn đề' }
      }
    ]
  },
  {
    id: 'estimation-schedule',
    title: { en: 'Estimation & schedule', vi: 'Ước lượng & tiến độ' },
    items: [
      {
        kana: 'みつもり',
        kanji: '見積もり',
        romaji: 'mitsumori',
        meaning: { en: 'estimate', vi: 'ước lượng' }
      },
      {
        kana: 'こうすう',
        kanji: '工数',
        romaji: 'kōsū',
        meaning: { en: 'man-hours/effort', vi: 'công sức (man-hour)' }
      },
      {
        kana: 'のうき',
        kanji: '納期',
        romaji: 'nōki',
        meaning: { en: 'deadline/delivery date', vi: 'hạn giao' }
      },
      {
        kana: 'しんちょく',
        kanji: '進捗',
        romaji: 'shinchoku',
        meaning: { en: 'progress', vi: 'tiến độ' }
      },
      { kana: 'ちえん', kanji: '遅延', romaji: 'chien', meaning: { en: 'delay', vi: 'trễ/chậm' } },
      {
        kana: 'ゆうせんど',
        kanji: '優先度',
        romaji: 'yūsendo',
        meaning: { en: 'priority', vi: 'mức ưu tiên' }
      },
      {
        kana: 'よゆう',
        kanji: '余裕',
        romaji: 'yoyū',
        meaning: { en: 'buffer/slack', vi: 'khoảng dư/buffer' }
      },
      {
        kana: 'まえだおし',
        kanji: '前倒し',
        romaji: 'maedaoshi',
        meaning: { en: 'moving the schedule up', vi: 'đẩy tiến độ lên sớm' }
      },
      {
        kana: 'うしろだおし',
        kanji: '後ろ倒し',
        romaji: 'ushirodaoshi',
        meaning: { en: 'pushing the schedule back', vi: 'lùi tiến độ' }
      },
      {
        kana: 'みなおし',
        kanji: '見直し',
        romaji: 'minaoshi',
        meaning: { en: 'review/revision', vi: 'rà soát lại' }
      }
    ]
  },
  {
    id: 'data-api',
    title: { en: 'Data & API', vi: 'Dữ liệu & API' },
    items: [
      {
        kana: 'しゅとく',
        kanji: '取得',
        romaji: 'shutoku',
        meaning: { en: 'fetch/acquire', vi: 'lấy/nhận' }
      },
      {
        kana: 'とうろく',
        kanji: '登録',
        romaji: 'tōroku',
        meaning: { en: 'register/create', vi: 'đăng ký/tạo' }
      },
      {
        kana: 'こうしん',
        kanji: '更新',
        romaji: 'kōshin',
        meaning: { en: 'update', vi: 'cập nhật' }
      },
      { kana: 'さくじょ', kanji: '削除', romaji: 'sakujo', meaning: { en: 'delete', vi: 'xóa' } },
      {
        kana: 'せいごうせい',
        kanji: '整合性',
        romaji: 'seigōsei',
        meaning: { en: 'consistency/integrity', vi: 'tính nhất quán' }
      },
      {
        kana: 'こうもく',
        kanji: '項目',
        romaji: 'kōmoku',
        meaning: { en: 'field/item', vi: 'trường/mục' }
      },
      {
        kana: 'ひっす',
        kanji: '必須',
        romaji: 'hissu',
        meaning: { en: 'required', vi: 'bắt buộc' }
      },
      {
        kana: 'にんい',
        kanji: '任意',
        romaji: "nin'i",
        meaning: { en: 'optional', vi: 'tùy chọn' }
      },
      {
        kana: 'けたすう',
        kanji: '桁数',
        romaji: 'ketasū',
        meaning: { en: 'number of digits', vi: 'số chữ số' }
      },
      {
        kana: 'もじすう',
        kanji: '文字数',
        romaji: 'mojisū',
        meaning: { en: 'character count', vi: 'số ký tự' }
      }
    ]
  },
  {
    id: 'security',
    title: { en: 'Security', vi: 'Bảo mật' },
    items: [
      {
        kana: 'ぜいじゃくせい',
        kanji: '脆弱性',
        romaji: 'zeijakusei',
        meaning: { en: 'vulnerability', vi: 'lỗ hổng' }
      },
      {
        kana: 'にんしょう',
        kanji: '認証',
        romaji: 'ninshō',
        meaning: { en: 'authentication', vi: 'xác thực' }
      },
      {
        kana: 'にんか',
        kanji: '認可',
        romaji: 'ninka',
        meaning: { en: 'authorization', vi: 'phân quyền' }
      },
      {
        kana: 'あんごうか',
        kanji: '暗号化',
        romaji: 'angōka',
        meaning: { en: 'encryption', vi: 'mã hóa' }
      },
      {
        kana: 'かいざん',
        kanji: '改ざん',
        romaji: 'kaizan',
        meaning: { en: 'tampering', vi: 'giả mạo/sửa trái phép' }
      },
      {
        kana: 'なりすまし',
        romaji: 'narisumashi',
        meaning: { en: 'impersonation/spoofing', vi: 'mạo danh' }
      },
      {
        kana: 'けんげん',
        kanji: '権限',
        romaji: 'kengen',
        meaning: { en: 'permission/privilege', vi: 'quyền hạn' }
      },
      {
        kana: 'こじんじょうほう',
        kanji: '個人情報',
        romaji: 'kojin jōhō',
        meaning: { en: 'personal information', vi: 'thông tin cá nhân' }
      },
      { kana: 'ろうえい', kanji: '漏洩', romaji: 'rōei', meaning: { en: 'leak', vi: 'rò rỉ' } },
      {
        kana: 'たいさく',
        kanji: '対策',
        romaji: 'taisaku',
        meaning: { en: 'countermeasure', vi: 'biện pháp đối phó' }
      }
    ]
  }
];

export const referenceGrammarPoints: GrammarPoint[] = [
  {
    pattern: 'N という認識でよろしいでしょうか',
    title: { en: 'Is my understanding that ~ correct?', vi: 'Tôi hiểu là ~ có đúng không?' },
    explanation: {
      en: 'Confirm a shared understanding politely before proceeding. Core BrSE phrase.',
      vi: 'Xác nhận cách hiểu chung một cách lịch sự trước khi tiến hành. Câu lõi của BrSE.'
    },
    examples: [
      {
        jp: '今回の対応はモバイルのみという認識でよろしいでしょうか。',
        romaji: 'Konkai no taiō wa mobairu nomi to iu ninshiki de yoroshii deshō ka.',
        meaning: {
          en: 'Is my understanding correct that this fix is for mobile only?',
          vi: 'Tôi hiểu lần này chỉ xử lý cho mobile, đúng không ạ?'
        }
      }
    ]
  },
  {
    pattern: 'N について確認させていただけますか',
    title: { en: 'May I confirm about ~?', vi: 'Cho tôi xác nhận về ~ được không?' },
    explanation: {
      en: 'Polite, humble way to open a clarification during a hearing or review.',
      vi: 'Cách lịch sự, khiêm nhường để mở đầu việc làm rõ trong buổi hearing hoặc review.'
    },
    examples: [
      {
        jp: '仕様について、二点確認させていただけますか。',
        romaji: 'Shiyō ni tsuite, ni-ten kakunin sasete itadakemasu ka.',
        meaning: {
          en: 'May I confirm two points about the spec?',
          vi: 'Cho tôi xác nhận hai điểm về spec được không ạ?'
        }
      }
    ]
  },
  {
    pattern: 'V（て形）いただけますでしょうか',
    title: { en: 'Could you kindly ~ for me?', vi: 'Anh/chị có thể ~ giúp được không ạ?' },
    explanation: {
      en: 'Very polite request, common when asking clients or seniors for action.',
      vi: 'Mẫu nhờ vả rất lịch sự, hay dùng khi nhờ khách hàng hoặc cấp trên.'
    },
    examples: [
      {
        jp: '画面の最新版を共有していただけますでしょうか。',
        romaji: 'Gamen no saishin-ban o kyōyū shite itadakemasu deshō ka.',
        meaning: {
          en: 'Could you kindly share the latest version of the screen?',
          vi: 'Anh/chị có thể chia sẻ bản mới nhất của màn hình giúp không ạ?'
        }
      }
    ]
  },
  {
    pattern: 'お手数ですが、〜',
    title: { en: 'Sorry to trouble you, but ~', vi: 'Phiền anh/chị, nhưng ~' },
    explanation: {
      en: 'Soften a request by acknowledging the effort you are asking for.',
      vi: 'Làm dịu lời nhờ bằng cách ghi nhận sự phiền hà mình gây ra.'
    },
    examples: [
      {
        jp: 'お手数ですが、再現手順を教えていただけますか。',
        romaji: 'Otesū desu ga, saigen tejun o oshiete itadakemasu ka.',
        meaning: {
          en: 'Sorry to trouble you, but could you tell me the reproduction steps?',
          vi: 'Phiền anh/chị cho biết các bước tái hiện được không ạ?'
        }
      }
    ]
  },
  {
    pattern: 'N の件ですが',
    title: { en: 'Regarding the matter of ~', vi: 'Về việc ~' },
    explanation: {
      en: 'Open a topic concisely in email or chat. Very common at work.',
      vi: 'Mở đầu một chủ đề ngắn gọn trong email/chat. Rất phổ biến nơi làm việc.'
    },
    examples: [
      {
        jp: '昨日の不具合の件ですが、原因が分かりました。',
        romaji: "Kinō no fuguai no ken desu ga, gen'in ga wakarimashita.",
        meaning: {
          en: "Regarding yesterday's bug, we have found the cause.",
          vi: 'Về lỗi hôm qua, chúng tôi đã tìm ra nguyên nhân.'
        }
      }
    ]
  },
  {
    pattern: '念のため、〜',
    title: { en: 'Just to be safe, ~', vi: 'Để chắc chắn, ~' },
    explanation: {
      en: 'Add a precautionary check or note without sounding distrustful.',
      vi: 'Thêm một bước kiểm tra/lưu ý phòng ngừa mà không gây cảm giác nghi ngờ.'
    },
    examples: [
      {
        jp: '念のため、本番反映前にもう一度確認します。',
        romaji: "Nen no tame, honban han'ei mae ni mō ichido kakunin shimasu.",
        meaning: {
          en: 'Just to be safe, I will check once more before applying to production.',
          vi: 'Để chắc chắn, tôi sẽ kiểm tra lại lần nữa trước khi áp lên production.'
        }
      }
    ]
  },
  {
    pattern: 'V（ます形）次第、ご連絡いたします',
    title: { en: 'I will contact you as soon as ~', vi: 'Tôi sẽ liên hệ ngay khi ~' },
    explanation: {
      en: 'Commit to follow up promptly once something is done. Humble form.',
      vi: 'Cam kết phản hồi ngay khi một việc hoàn tất. Dạng khiêm nhường.'
    },
    examples: [
      {
        jp: '確認が取れ次第、ご連絡いたします。',
        romaji: 'Kakunin ga tore shidai, go-renraku itashimasu.',
        meaning: {
          en: 'I will contact you as soon as I have confirmation.',
          vi: 'Tôi sẽ liên hệ ngay khi xác nhận được.'
        }
      }
    ]
  },
  {
    pattern: 'N とのことですが',
    title: { en: 'I understand that ~ (per what I heard)', vi: 'Nghe nói là ~' },
    explanation: {
      en: 'Repeat back information you received to confirm it before acting.',
      vi: 'Nhắc lại thông tin nhận được để xác nhận trước khi hành động.'
    },
    examples: [
      {
        jp: '納期が一週間延びるとのことですが、正しいでしょうか。',
        romaji: 'Nōki ga isshūkan nobiru to no koto desu ga, tadashii deshō ka.',
        meaning: {
          en: 'I understand the deadline moves a week later; is that correct?',
          vi: 'Nghe nói hạn giao lùi một tuần, có đúng không ạ?'
        }
      }
    ]
  },
  {
    pattern: '〜かと存じます',
    title: { en: 'I believe ~ (humble)', vi: 'Tôi cho rằng ~ (khiêm nhường)' },
    explanation: {
      en: 'State an opinion humbly to clients. Softer than 〜と思います.',
      vi: 'Nêu ý kiến khiêm nhường với khách hàng. Nhẹ hơn 〜と思います.'
    },
    examples: [
      {
        jp: '影響範囲は限定的かと存じます。',
        romaji: "Eikyō han'i wa genteiteki ka to zonjimasu.",
        meaning: {
          en: 'I believe the scope of impact is limited.',
          vi: 'Tôi cho rằng phạm vi ảnh hưởng là hạn chế.'
        }
      }
    ]
  },
  {
    pattern: 'N という前提で進めます',
    title: {
      en: 'We will proceed on the premise that ~',
      vi: 'Chúng tôi tiến hành với tiền đề là ~'
    },
    explanation: {
      en: 'Make your working assumption explicit so it can be corrected early.',
      vi: 'Nêu rõ giả định đang làm việc để được chỉnh sớm nếu sai.'
    },
    examples: [
      {
        jp: '対応はPCのみという前提で進めます。',
        romaji: 'Taiō wa PC nomi to iu zentei de susumemasu.',
        meaning: {
          en: 'We will proceed on the premise that support is for PC only.',
          vi: 'Chúng tôi tiến hành với tiền đề chỉ hỗ trợ PC.'
        }
      }
    ]
  },
  {
    pattern: '〜が懸念されます',
    title: { en: 'There is a concern that ~', vi: 'Có lo ngại rằng ~' },
    explanation: {
      en: 'Raise a risk formally and objectively in reports.',
      vi: 'Nêu rủi ro một cách trang trọng, khách quan trong báo cáo.'
    },
    examples: [
      {
        jp: 'このままでは納期遅延が懸念されます。',
        romaji: 'Kono mama de wa nōki chien ga kenen saremasu.',
        meaning: {
          en: 'As it stands, there is a concern about a deadline delay.',
          vi: 'Cứ như hiện tại, có lo ngại trễ hạn giao.'
        }
      }
    ]
  },
  {
    pattern: 'N を踏まえ、〜',
    title: { en: 'Based on / taking ~ into account', vi: 'Dựa trên / tính đến ~' },
    explanation: {
      en: 'Tie a decision to prior context, data, or feedback. Formal.',
      vi: 'Gắn quyết định với bối cảnh, dữ liệu hoặc phản hồi trước đó. Trang trọng.'
    },
    examples: [
      {
        jp: '前回の指摘を踏まえ、設計を見直しました。',
        romaji: 'Zenkai no shiteki o fumae, sekkei o minaoshimashita.',
        meaning: {
          en: 'Taking the previous feedback into account, we revised the design.',
          vi: 'Dựa trên góp ý lần trước, chúng tôi đã rà soát lại thiết kế.'
        }
      }
    ]
  },
  {
    pattern: '一度持ち帰って検討いたします',
    title: { en: 'Let me take it back and consider', vi: 'Cho tôi mang về cân nhắc' },
    explanation: {
      en: 'Politely defer a decision you cannot make on the spot.',
      vi: 'Lịch sự hoãn quyết định mà bạn chưa thể chốt ngay tại chỗ.'
    },
    examples: [
      {
        jp: 'こちらの要望は、一度持ち帰って検討いたします。',
        romaji: 'Kochira no yōbō wa, ichido mochikaette kentō itashimasu.',
        meaning: {
          en: 'I will take this request back and consider it.',
          vi: 'Yêu cầu này, cho tôi mang về cân nhắc đã ạ.'
        }
      }
    ]
  },
  {
    pattern: '〜で問題ないでしょうか',
    title: { en: 'Is ~ okay / any problem with ~?', vi: '~ có ổn không / có vấn đề gì không?' },
    explanation: {
      en: 'Seek final sign-off on a concrete decision.',
      vi: 'Xin chốt cuối cho một quyết định cụ thể.'
    },
    examples: [
      {
        jp: 'リリースは金曜の午後で問題ないでしょうか。',
        romaji: "Rirīsu wa kin'yō no gogo de mondai nai deshō ka.",
        meaning: {
          en: 'Is releasing on Friday afternoon okay?',
          vi: 'Release vào chiều thứ Sáu có ổn không ạ?'
        }
      }
    ]
  },
  {
    pattern: '認識に齟齬がないよう、〜',
    title: { en: 'To avoid misalignment, ~', vi: 'Để không lệch nhận thức, ~' },
    explanation: {
      en: 'Justify writing things down or confirming. Very BrSE-typical.',
      vi: 'Lý do để ghi lại hoặc xác nhận. Rất đặc trưng của BrSE.'
    },
    examples: [
      {
        jp: '認識に齟齬がないよう、決定事項を議事録に残します。',
        romaji: 'Ninshiki ni sogo ga nai yō, kettei jikō o gijiroku ni nokoshimasu.',
        meaning: {
          en: 'To avoid misalignment, we record decisions in the minutes.',
          vi: 'Để không lệch nhận thức, chúng tôi ghi quyết định vào biên bản.'
        }
      }
    ]
  },
  {
    pattern: 'ご確認のほど、よろしくお願いいたします',
    title: { en: 'Please kindly confirm', vi: 'Kính mong anh/chị xác nhận' },
    explanation: {
      en: 'Standard polite closing requesting confirmation in email.',
      vi: 'Câu kết lịch sự chuẩn để xin xác nhận trong email.'
    },
    examples: [
      {
        jp: '添付の仕様について、ご確認のほどよろしくお願いいたします。',
        romaji: 'Tenpu no shiyō ni tsuite, go-kakunin no hodo yoroshiku onegai itashimasu.',
        meaning: {
          en: 'Please kindly confirm the attached specification.',
          vi: 'Kính mong anh/chị xác nhận bản đặc tả đính kèm.'
        }
      }
    ]
  },
  {
    pattern: 'N という方向で進めてよろしいでしょうか',
    title: {
      en: 'May we proceed in the direction of ~?',
      vi: 'Tiến hành theo hướng ~ được không ạ?'
    },
    explanation: {
      en: 'Propose a direction and get agreement before committing effort.',
      vi: 'Đề xuất một hướng và xin đồng thuận trước khi bỏ công sức.'
    },
    examples: [
      {
        jp: '今回は最小構成という方向で進めてよろしいでしょうか。',
        romaji: 'Konkai wa saishō kōsei to iu hōkō de susumete yoroshii deshō ka.',
        meaning: {
          en: 'For this round, may we proceed with a minimal configuration?',
          vi: 'Lần này tiến hành theo hướng cấu hình tối thiểu được không ạ?'
        }
      }
    ]
  },
  {
    pattern: '〜については別途ご連絡いたします',
    title: { en: 'I will contact you separately about ~', vi: 'Về ~ tôi sẽ liên hệ riêng' },
    explanation: {
      en: 'Park a side topic to keep the current discussion focused.',
      vi: 'Tạm gác một chủ đề phụ để giữ trọng tâm cuộc trao đổi hiện tại.'
    },
    examples: [
      {
        jp: '見積もりについては別途ご連絡いたします。',
        romaji: 'Mitsumori ni tsuite wa betto go-renraku itashimasu.',
        meaning: {
          en: 'I will contact you separately about the estimate.',
          vi: 'Về phần ước lượng, tôi sẽ liên hệ riêng.'
        }
      }
    ]
  },
  {
    pattern: '恐れ入りますが、〜',
    title: { en: 'I am afraid to ask, but ~', vi: 'Thành thật xin lỗi, nhưng ~' },
    explanation: {
      en: 'A very humble opener for inconvenient requests to clients.',
      vi: 'Câu mở đầu rất khiêm nhường cho lời nhờ bất tiện với khách hàng.'
    },
    examples: [
      {
        jp: '恐れ入りますが、本日中にご回答いただけますか。',
        romaji: 'Osore irimasu ga, honjitsu-chū ni go-kaitō itadakemasu ka.',
        meaning: {
          en: 'I am afraid to ask, but could you reply within today?',
          vi: 'Thành thật xin lỗi, anh/chị có thể phản hồi trong hôm nay không ạ?'
        }
      }
    ]
  },
  {
    pattern: '〜を優先させていただきます',
    title: { en: 'We will prioritize ~ (humble)', vi: 'Chúng tôi xin ưu tiên ~' },
    explanation: {
      en: 'Announce a prioritization decision politely.',
      vi: 'Thông báo quyết định ưu tiên một cách lịch sự.'
    },
    examples: [
      {
        jp: 'まずは重大な不具合の修正を優先させていただきます。',
        romaji: 'Mazu wa jūdai na fuguai no shūsei o yūsen sasete itadakimasu.',
        meaning: {
          en: 'First, we will prioritize fixing the critical defects.',
          vi: 'Trước tiên, chúng tôi xin ưu tiên sửa các lỗi nghiêm trọng.'
        }
      }
    ]
  }
];

export const referenceMeetingPhrases: MeetingPhraseGroup[] = [
  {
    id: 'opening',
    title: { en: 'Opening the meeting', vi: 'Mở đầu cuộc họp' },
    phrases: [
      {
        jp: 'それでは、会議を始めます。',
        romaji: 'Sore dewa, kaigi o hajimemasu.',
        meaning: { en: "Well then, let's begin the meeting.", vi: 'Vậy thì, chúng ta bắt đầu họp.' }
      },
      {
        jp: 'お時間をいただき、ありがとうございます。',
        romaji: 'O-jikan o itadaki, arigatō gozaimasu.',
        meaning: { en: 'Thank you for your time.', vi: 'Cảm ơn anh/chị đã dành thời gian.' }
      },
      {
        jp: '本日のアジェンダを共有します。',
        romaji: 'Honjitsu no ajenda o kyōyū shimasu.',
        meaning: { en: "Let me share today's agenda.", vi: 'Tôi xin chia sẻ chương trình hôm nay.' }
      },
      {
        jp: 'まず、前回の議事録を確認します。',
        romaji: 'Mazu, zenkai no gijiroku o kakunin shimasu.',
        meaning: {
          en: "First, let's review the previous minutes.",
          vi: 'Trước tiên, ta xem lại biên bản lần trước.'
        }
      },
      {
        jp: '本日のゴールは認識合わせです。',
        romaji: 'Honjitsu no gōru wa ninshiki awase desu.',
        meaning: {
          en: "Today's goal is to align our understanding.",
          vi: 'Mục tiêu hôm nay là thống nhất nhận thức.'
        }
      }
    ]
  },
  {
    id: 'facilitating',
    title: { en: 'Facilitating', vi: 'Điều phối' },
    phrases: [
      {
        jp: '次の議題に移ります。',
        romaji: 'Tsugi no gidai ni utsurimasu.',
        meaning: { en: "Let's move on to the next topic.", vi: 'Chuyển sang nội dung tiếp theo.' }
      },
      {
        jp: '一つずつ確認していきましょう。',
        romaji: 'Hitotsu zutsu kakunin shite ikimashō.',
        meaning: { en: "Let's check them one by one.", vi: 'Ta kiểm tra từng cái một nhé.' }
      },
      {
        jp: '時間が限られているので、手短にお願いします。',
        romaji: 'Jikan ga kagirarete iru node, temijika ni onegai shimasu.',
        meaning: {
          en: "We're short on time, so please keep it brief.",
          vi: 'Thời gian có hạn, mong mọi người nói ngắn gọn.'
        }
      },
      {
        jp: 'いったん、この話は保留にしましょう。',
        romaji: 'Ittan, kono hanashi wa horyū ni shimashō.',
        meaning: { en: "Let's park this topic for now.", vi: 'Tạm gác chủ đề này lại đã.' }
      },
      {
        jp: 'ご意見はありますか。',
        romaji: 'Go-iken wa arimasu ka.',
        meaning: { en: 'Do you have any opinions?', vi: 'Anh/chị có ý kiến gì không?' }
      },
      {
        jp: '〜さんは、いかがですか。',
        romaji: '〜-san wa, ikaga desu ka.',
        meaning: { en: 'Mr./Ms. ~, what do you think?', vi: 'Anh/chị ~ thấy thế nào?' }
      }
    ]
  },
  {
    id: 'clarifying',
    title: { en: 'Clarifying & asking again', vi: 'Làm rõ & hỏi lại' },
    phrases: [
      {
        jp: 'すみません、もう一度おっしゃっていただけますか。',
        romaji: 'Sumimasen, mō ichido osshatte itadakemasu ka.',
        meaning: {
          en: 'Sorry, could you say that once more?',
          vi: 'Xin lỗi, anh/chị nói lại lần nữa được không?'
        }
      },
      {
        jp: '音声が少し途切れてしまいました。',
        romaji: 'Onsei ga sukoshi togirete shimaimashita.',
        meaning: { en: 'Your audio cut out a little.', vi: 'Âm thanh bị ngắt một chút.' }
      },
      {
        jp: '画面は見えていますでしょうか。',
        romaji: 'Gamen wa miete imasu deshō ka.',
        meaning: { en: 'Can you see my screen?', vi: 'Anh/chị thấy màn hình của tôi chứ?' }
      },
      {
        jp: 'つまり、〜ということでしょうか。',
        romaji: 'Tsumari, 〜 to iu koto deshō ka.',
        meaning: { en: 'So, do you mean ~?', vi: 'Tức là ~, đúng không ạ?' }
      },
      {
        jp: '具体的には、どういうことでしょうか。',
        romaji: 'Gutaiteki ni wa, dō iu koto deshō ka.',
        meaning: { en: 'Specifically, what do you mean?', vi: 'Cụ thể là như thế nào ạ?' }
      },
      {
        jp: '認識を合わせたいのですが、よろしいでしょうか。',
        romaji: 'Ninshiki o awasetai no desu ga, yoroshii deshō ka.',
        meaning: {
          en: "I'd like to align our understanding; is that okay?",
          vi: 'Tôi muốn thống nhất nhận thức, được không ạ?'
        }
      }
    ]
  },
  {
    id: 'agree-disagree',
    title: { en: 'Agreeing, disagreeing, reserving', vi: 'Đồng ý, phản đối, bảo lưu' },
    phrases: [
      {
        jp: 'その案に賛成です。',
        romaji: 'Sono an ni sansei desu.',
        meaning: { en: 'I agree with that proposal.', vi: 'Tôi đồng ý với phương án đó.' }
      },
      {
        jp: 'おっしゃる通りだと思います。',
        romaji: 'Ossharu tōri da to omoimasu.',
        meaning: { en: "I think you're exactly right.", vi: 'Tôi nghĩ đúng như anh/chị nói.' }
      },
      {
        jp: '申し訳ありませんが、少し懸念があります。',
        romaji: 'Mōshiwake arimasen ga, sukoshi kenen ga arimasu.',
        meaning: {
          en: "I'm sorry, but I have a slight concern.",
          vi: 'Xin lỗi, nhưng tôi có một chút lo ngại.'
        }
      },
      {
        jp: '別の案も検討したいです。',
        romaji: 'Betsu no an mo kentō shitai desu.',
        meaning: {
          en: "I'd like to consider another option too.",
          vi: 'Tôi muốn cân nhắc thêm phương án khác.'
        }
      },
      {
        jp: '一度持ち帰って検討させてください。',
        romaji: 'Ichido mochikaette kentō sasete kudasai.',
        meaning: {
          en: 'Please let me take it back and consider.',
          vi: 'Cho tôi mang về cân nhắc đã ạ.'
        }
      },
      {
        jp: '基本的には問題ないと思います。',
        romaji: 'Kihonteki ni wa mondai nai to omoimasu.',
        meaning: {
          en: 'Basically, I think there is no problem.',
          vi: 'Về cơ bản tôi thấy không có vấn đề gì.'
        }
      }
    ]
  },
  {
    id: 'time-progress',
    title: { en: 'Time & progress', vi: 'Thời gian & tiến độ' },
    phrases: [
      {
        jp: '残り時間が少なくなってきました。',
        romaji: 'Nokori jikan ga sukunaku natte kimashita.',
        meaning: { en: "We're running low on time.", vi: 'Thời gian còn lại không nhiều.' }
      },
      {
        jp: 'この件は次回に持ち越しましょう。',
        romaji: 'Kono ken wa jikai ni mochikoshimashō.',
        meaning: {
          en: "Let's carry this item over to next time.",
          vi: 'Việc này để sang lần sau nhé.'
        }
      },
      {
        jp: '進捗を共有していただけますか。',
        romaji: 'Shinchoku o kyōyū shite itadakemasu ka.',
        meaning: { en: 'Could you share your progress?', vi: 'Anh/chị chia sẻ tiến độ được không?' }
      },
      {
        jp: '予定の時間になりました。',
        romaji: 'Yotei no jikan ni narimashita.',
        meaning: { en: "We've reached the scheduled time.", vi: 'Đã đến giờ dự kiến.' }
      }
    ]
  },
  {
    id: 'closing',
    title: { en: 'Wrapping up & action items', vi: 'Tổng kết & việc cần làm' },
    phrases: [
      {
        jp: '本日の決定事項を確認します。',
        romaji: 'Honjitsu no kettei jikō o kakunin shimasu.',
        meaning: {
          en: "Let me confirm today's decisions.",
          vi: 'Tôi xin xác nhận các quyết định hôm nay.'
        }
      },
      {
        jp: '担当と期限を決めましょう。',
        romaji: 'Tantō to kigen o kimemashō.',
        meaning: {
          en: "Let's decide the owners and deadlines.",
          vi: 'Ta chốt người phụ trách và thời hạn nhé.'
        }
      },
      {
        jp: '議事録は後ほど共有します。',
        romaji: 'Gijiroku wa nochihodo kyōyū shimasu.',
        meaning: { en: 'I will share the minutes later.', vi: 'Biên bản tôi sẽ chia sẻ sau.' }
      },
      {
        jp: '他に何か質問はありますか。',
        romaji: 'Hoka ni nanika shitsumon wa arimasu ka.',
        meaning: { en: 'Are there any other questions?', vi: 'Còn câu hỏi nào khác không ạ?' }
      },
      {
        jp: '次回の日程を調整します。',
        romaji: 'Jikai no nittei o chōsei shimasu.',
        meaning: { en: "Let's arrange the next meeting date.", vi: 'Ta sắp xếp lịch buổi sau.' }
      },
      {
        jp: '以上で会議を終わります。ありがとうございました。',
        romaji: 'Ijō de kaigi o owarimasu. Arigatō gozaimashita.',
        meaning: {
          en: 'That concludes the meeting. Thank you.',
          vi: 'Cuộc họp đến đây kết thúc. Xin cảm ơn.'
        }
      }
    ]
  }
];
