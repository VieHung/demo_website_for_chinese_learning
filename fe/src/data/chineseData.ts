import { VocabWord, QuizQuestion } from "@/types";

export const INITIAL_VOCAB_LIST: VocabWord[] = [
  // HSK 1
  {
    id: "vocab-1",
    hanzi: "你好",
    pinyin: "nǐ hǎo",
    hanViet: "Nhĩ Hảo",
    meaning: "Xin chào",
    hskLevel: 1,
    radical: "亻 (Nhân đứng)",
    strokeCount: 7,
    category: "Chào hỏi",
    examples: [
      {
        hanzi: "你好，很高兴认识你！",
        pinyin: "Nǐ hǎo, hěn gāoxìng rènshì nǐ!",
        vietnamese: "Xin chào, rất vui được làm quen với bạn!"
      },
      {
        hanzi: "王老师，你好！",
        pinyin: "Wáng lǎoshī, nǐ hǎo!",
        vietnamese: "Thầy Vương, em chào thầy!"
      }
    ]
  },
  {
    id: "vocab-2",
    hanzi: "谢谢",
    pinyin: "xièxie",
    hanViet: "Tạ Tạ",
    meaning: "Cảm ơn",
    hskLevel: 1,
    radical: "讠 (Ngôn)",
    strokeCount: 12,
    category: "Giao tiếp",
    examples: [
      {
        hanzi: "非常感谢你的帮助！",
        pinyin: "Fēicháng gǎnxiè nǐ de bāngzhù!",
        vietnamese: "Vô cùng cảm ơn sự giúp đỡ của bạn!"
      },
      {
        hanzi: "不客气，谢谢你。",
        pinyin: "Bù kèqi, xièxie nǐ.",
        vietnamese: "Không có chi, cảm ơn bạn."
      }
    ]
  },
  {
    id: "vocab-3",
    hanzi: "学习",
    pinyin: "xuéxí",
    hanViet: "Học Tập",
    meaning: "Học, học tập",
    hskLevel: 1,
    radical: "子 (Tử)",
    strokeCount: 8,
    category: "Học tập",
    examples: [
      {
        hanzi: "我每天学习汉语两个小时。",
        pinyin: "Wǒ měitiān xuéxí hànyǔ liǎng gè xiǎoshí.",
        vietnamese: "Mỗi ngày tôi học tiếng Trung hai tiếng."
      },
      {
        hanzi: "好好学习，天天向上。",
        pinyin: "Hǎohǎo xuéxí, tiāntiān xiàngshàng.",
        vietnamese: "Học tập thật tốt, mỗi ngày một tiến bộ."
      }
    ]
  },
  {
    id: "vocab-4",
    hanzi: "朋友",
    pinyin: "péngyou",
    hanViet: "Bằng Hữu",
    meaning: "Bạn bè, người bạn",
    hskLevel: 1,
    radical: "月 (Nguyệt)",
    strokeCount: 8,
    category: "Quan hệ",
    examples: [
      {
        hanzi: "他是我的好朋友。",
        pinyin: "Tā shì wǒ de hǎo péngyou.",
        vietnamese: "Anh ấy là bạn tốt của tôi."
      }
    ]
  },

  // HSK 2
  {
    id: "vocab-5",
    hanzi: "准备",
    pinyin: "zhǔnbèi",
    hanViet: "Chuẩn Bị",
    meaning: "Chuẩn bị, dự định",
    hskLevel: 2,
    radical: "冫 (Băng)",
    strokeCount: 12,
    category: "Hành động",
    examples: [
      {
        hanzi: "你准备好参加HSK考试了吗？",
        pinyin: "Nǐ zhǔnbèi hǎo cānjiā HSK kǎoshì le ma?",
        vietnamese: "Bạn đã chuẩn bị sẵn sàng tham gia kỳ thi HSK chưa?"
      }
    ]
  },
  {
    id: "vocab-6",
    hanzi: "时间",
    pinyin: "shíjiān",
    hanViet: "Thời Gian",
    meaning: "Thời gian",
    hskLevel: 2,
    radical: "日 (Nhật)",
    strokeCount: 10,
    category: "Thời gian",
    examples: [
      {
        hanzi: "时间过得真快！",
        pinyin: "Shíjiān guò de zhēn kuài!",
        vietnamese: "Thời gian trôi qua thật nhanh!"
      }
    ]
  },

  // HSK 3
  {
    id: "vocab-7",
    hanzi: "努力",
    pinyin: "nǔlì",
    hanViet: "Nỗ Lực",
    meaning: "Cố gắng, nỗ lực, chăm chỉ",
    hskLevel: 3,
    radical: "力 (Lực)",
    strokeCount: 7,
    category: "Phẩm chất",
    examples: [
      {
        hanzi: "只要努力，就一定能成功。",
        pinyin: "Zhǐyào nǔlì, jiù yīdìng néng chénggōng.",
        vietnamese: "Chỉ cần cố gắng, nhất định sẽ thành công."
      }
    ]
  },
  {
    id: "vocab-8",
    hanzi: "明白",
    pinyin: "míngbai",
    hanViet: "Minh Bạch",
    meaning: "Hiểu rõ, rõ ràng",
    hskLevel: 3,
    radical: "日 (Nhật)",
    strokeCount: 8,
    category: "Nhận thức",
    examples: [
      {
        hanzi: "老师讲的内容你明白了吗？",
        pinyin: "Lǎoshī jiǎng de nèiróng nǐ míngbai le ma?",
        vietnamese: "Nội dung thầy giảng bạn đã hiểu chưa?"
      }
    ]
  },

  // HSK 4
  {
    id: "vocab-9",
    hanzi: "坚持",
    pinyin: "jiānchí",
    hanViet: "Kiên Trì",
    meaning: "Kiên trì, giữ vững",
    hskLevel: 4,
    radical: "土 (Thổ)",
    strokeCount: 9,
    category: "Ý chí",
    examples: [
      {
        hanzi: "坚持就是胜利。",
        pinyin: "Jiānchí jiù shì shènglì.",
        vietnamese: "Kiên trì chính là thắng lợi."
      }
    ]
  },
  {
    id: "vocab-10",
    hanzi: "经验",
    pinyin: "jīngyàn",
    hanViet: "Kinh Nghiệm",
    meaning: "Kinh nghiệm, trải nghiệm",
    hskLevel: 4,
    radical: "纟 (Mịch)",
    strokeCount: 13,
    category: "Kỹ năng",
    examples: [
      {
        hanzi: "他在汉语教学方面有丰富的经验。",
        pinyin: "Tā zài hànyǔ jiàoxué fāngmiàn yǒu fēngfù de jīngyàn.",
        vietnamese: "Anh ấy có nhiều kinh nghiệm trong giảng dạy tiếng Trung."
      }
    ]
  },

  // HSK 5
  {
    id: "vocab-11",
    hanzi: "梦想",
    pinyin: "mèngxiǎng",
    hanViet: "Mộng Tưởng",
    meaning: "Ước mơ, hoài bão",
    hskLevel: 5,
    radical: "夕 (Tịch)",
    strokeCount: 11,
    category: "Tâm hồn",
    examples: [
      {
        hanzi: "每个人都应该为了自己的梦想而奋斗。",
        pinyin: "Měi gèrén dōu yīnggāi wèile zìjǐ de mèngxiǎng ér fèndòu.",
        vietnamese: "Mỗi người đều nên phấn đấu vì ước mơ của bản thân."
      }
    ]
  },
  {
    id: "vocab-12",
    hanzi: "深刻",
    pinyin: "shēnkè",
    hanViet: "Thâm Khắc",
    meaning: "Sâu sắc, thâm thúy",
    hskLevel: 5,
    radical: "氵 (Thủy)",
    strokeCount: 11,
    category: "Tính chất",
    examples: [
      {
        hanzi: "这本书给我留下了深刻的印象。",
        pinyin: "Zhè běn shū gěi wǒ liúxià le shēnkè de yìnxiàng.",
        vietnamese: "Cuốn sách này để lại cho tôi ấn tượng sâu sắc."
      }
    ]
  },

  // HSK 6
  {
    id: "vocab-13",
    hanzi: "博大精深",
    pinyin: "bódà jīngshēn",
    hanViet: "Bác Đại Tinh Thâm",
    meaning: "Uyên bác và tinh sâu, bao la sâu rộng (thường nói về văn hóa, tri thức)",
    hskLevel: 6,
    radical: "十 (Thập)",
    strokeCount: 12,
    category: "Thành ngữ (Thành ngữ cao cấp)",
    examples: [
      {
        hanzi: "中华文化源远流长，博大精深。",
        pinyin: "Zhōnghuá wénhuà yuányuǎnbùliú, bódà jīngshēn.",
        vietnamese: "Văn hóa Trung Hoa cội nguồn sâu xa, uyên bác và tinh sâu."
      }
    ]
  },
  {
    id: "vocab-14",
    hanzi: "持之以恒",
    pinyin: "chí zhī yǐ héng",
    hanViet: "Trì Chi Dĩ Hằng",
    meaning: "Bền bỉ đến cùng, kiên trì không dao động",
    hskLevel: 6,
    radical: "扌 (Thủ)",
    strokeCount: 9,
    category: "Thành ngữ (Ý chí)",
    examples: [
      {
        hanzi: "学语言最需要持之以恒的精神。",
        pinyin: "Xué yǔyán zuì xūyào chí zhī yǐ héng de jīngshén.",
        vietnamese: "Học ngôn ngữ cần nhất là tinh thần kiên trì bền bỉ đến cùng."
      }
    ]
  }
];

export const INITIAL_QUIZ_LIST: QuizQuestion[] = [
  {
    id: "q-1",
    type: "hanzi-to-pinyin",
    prompt: "Chọn Pinyin chính xác cho chữ Hán sau:",
    subPrompt: "学习",
    options: ["xuéxí", "xièxie", "xuéshēng", "xūyào"],
    correctAnswer: "xuéxí",
    explanation: "Chữ '学习' (Học tập) có pinyin là 'xuéxí', thanh 2 + thanh 2.",
    hskLevel: 1
  },
  {
    id: "q-2",
    type: "hanzi-to-meaning",
    prompt: "Nghĩa của từ '准备' (zhǔnbèi) là gì?",
    subPrompt: "HSK 2 - Từ vựng hành động",
    options: ["Chuẩn bị", "Bắt đầu", "Kết thúc", "Nghỉ ngơi"],
    correctAnswer: "Chuẩn bị",
    explanation: "'准备' (Âm Hán Việt: Chuẩn Bị) có nghĩa là chuẩn bị hoặc dự tính làm việc gì đó.",
    hskLevel: 2
  },
  {
    id: "q-3",
    type: "listen-and-choose",
    prompt: "Nghe phát âm và chọn chữ Hán tương ứng:",
    audioText: "朋友",
    options: ["朋友", "苹果", "漂亮", "旁边"],
    correctAnswer: "朋友",
    explanation: "Từ được phát âm là 'péngyou' (Bạn bè) -> Chữ Hán là '朋友'.",
    hskLevel: 1
  },
  {
    id: "q-4",
    type: "fill-blank",
    prompt: "Điền từ thích hợp vào chỗ trống:",
    subPrompt: "只要_____，就一定能学好汉语。",
    options: ["努力", "漂亮", "容易", "便宜"],
    correctAnswer: "努力",
    explanation: "'只要努力，就一定能...' (Chỉ cần nỗ lực / cố gắng, thì nhất định có thể học tốt tiếng Hán).",
    hskLevel: 3
  },
  {
    id: "q-5",
    type: "hanzi-to-meaning",
    prompt: "Thành ngữ '坚持就是胜利' có nghĩa là gì?",
    subPrompt: "HSK 4 - Ý chí học tập",
    options: [
      "Kiên trì chính là thắng lợi",
      "Học nhiều sẽ thành công",
      "Thất bại là mẹ thành công",
      "Càng khó khăn càng tiến bước"
    ],
    correctAnswer: "Kiên trì chính là thắng lợi",
    explanation: "'坚持' (jiānchí: kiên trì) + '胜利' (shènglì: thắng lợi) -> Kiên trì chính là thắng lợi.",
    hskLevel: 4
  },
  {
    id: "q-6",
    type: "hanzi-to-meaning",
    prompt: "Thành ngữ HSK 6 '持之以恒' (chí zhī yǐ héng) có ý nghĩa tương đương câu nào?",
    subPrompt: "HSK 6 - Thành ngữ cao cấp",
    options: [
      "Bền bỉ kiên trì đến cùng",
      "Một đi không trở lại",
      "Nói một đằng làm một nẻo",
      "Tùy cơ ứng biến linh hoạt"
    ],
    correctAnswer: "Bền bỉ kiên trì đến cùng",
    explanation: "'持之以恒' biểu thị thái độ kiên trì giữ vững hành động liên tục không ngừng nghỉ.",
    hskLevel: 6
  }
];

export const PINYIN_TONES = [
  { tone: "Thanh 1 (Âm Bình - 阴平)", symbol: "ā / 55", desc: "Cao và bằng phẳng, giữ đều giọng", example: "mā (妈 - Mẹ)" },
  { tone: "Thanh 2 (Dương Bình - 阳平)", symbol: "á / 35", desc: "Lên giọng tương tự dấu sắc tiếng Việt", example: "má (麻 - Gai, mè)" },
  { tone: "Thanh 3 (Thượng Thanh - 上声)", symbol: "ǎ / 214", desc: "Hạ thấp rồi nâng lên nhẹ", example: "mǎ (马 - Con ngựa)" },
  { tone: "Thanh 4 (Khứ Thanh - 去声)", symbol: "à / 51", desc: "Dứt khoát từ cao rơi xuống thấp", example: "mà (骂 - Mắng)" },
  { tone: "Khinh thanh (Nhẹ - 轻声)", symbol: "a / --", desc: "Phát âm nhẹ, ngắn, không nhấn giọng", example: "ba (吧), ma (吗)" }
];
