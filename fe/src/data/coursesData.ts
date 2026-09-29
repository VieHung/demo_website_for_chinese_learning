import { HSKLevel } from "@/types";

export interface DialogueLine {
  id: string;
  speaker: string;
  avatar: string;
  hanzi: string;
  pinyin: string;
  vietnamese: string;
}

export interface LessonData {
  id: string;
  hskLevel: HSKLevel;
  unit: number;
  title: string;
  subtitle: string;
  description: string;
  estimatedMinutes: number;
  dialogue: DialogueLine[];
  vocabulary: {
    hanzi: string;
    pinyin: string;
    hanViet: string;
    meaning: string;
    type: string;
  }[];
  grammarPoints: {
    title: string;
    structure: string;
    explanation: string;
    example: {
      hanzi: string;
      pinyin: string;
      vietnamese: string;
    };
  }[];
  quickQuiz: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
}

export interface InteractiveWord {
  hanzi: string;
  pinyin: string;
  hanViet: string;
  meaning: string;
}
export type BilingualWord = InteractiveWord;

export interface BilingualSentence {
  id: string;
  words: InteractiveWord[];
  vietnamese: string;
}

export interface BilingualArticle {
  id: string;
  titleHanzi: string;
  titlePinyin: string;
  titleVi: string;
  hskLevel: HSKLevel;
  category: string;
  readTime: string;
  summary: string;
  sentences: BilingualSentence[];
}

export interface GrammarItem {
  id: string;
  hskLevel: HSKLevel;
  title: string;
  formula: string;
  category: string;
  description: string;
  examples: {
    hanzi: string;
    pinyin: string;
    vietnamese: string;
  }[];
  notes?: string;
}

// 1. DANH SÁCH BÀI HỌC HSK CHUẨN MỰC (LESSONS CURRICULUM)
export const LESSONS_LIST: LessonData[] = [
  {
    id: "lesson-hsk1-1",
    hskLevel: 1,
    unit: 1,
    title: "Chào hỏi & Làm quen căn bản",
    subtitle: "Bài 1: 你好！(Xin chào!)",
    description: "Làm quen với các câu chào hỏi lịch thiệp, đại từ nhân xưng và quy tắc biến điệu hai thanh 3.",
    estimatedMinutes: 20,
    dialogue: [
      {
        id: "d1",
        speaker: "Đại Vệ (大卫)",
        avatar: "👨‍🎓",
        hanzi: "你好，王老师！",
        pinyin: "Nǐ hǎo, Wáng lǎoshī!",
        vietnamese: "Em chào thầy Vương ạ!",
      },
      {
        id: "d2",
        speaker: "Thầy Vương (王老师)",
        avatar: "👨‍🏫",
        hanzi: "你好！你是大卫吗？",
        pinyin: "Nǐ hǎo! Nǐ shì Dàwèi ma?",
        vietnamese: "Chào em! Em là Đại Vệ phải không?",
      },
      {
        id: "d3",
        speaker: "Đại Vệ (大卫)",
        avatar: "👨‍🎓",
        hanzi: "是的，我是大卫。很高兴认识您！",
        pinyin: "Shì de, wǒ shì Dàwèi. Hěn gāoxìng rènshì nín!",
        vietnamese: "Dạ đúng rồi, em là Đại Vệ. Rất vui được gặp thầy ạ!",
      },
      {
        id: "d4",
        speaker: "Thầy Vương (王老师)",
        avatar: "👨‍🏫",
        hanzi: "我也很高兴认识你。欢迎你来中国！",
        pinyin: "Wǒ yě hěn gāoxìng rènshì nǐ. Huānyíng nǐ lái Zhōngguó!",
        vietnamese: "Thầy cũng rất vui được biết em. Chào mừng em đến Trung Quốc!",
      },
    ],
    vocabulary: [
      { hanzi: "你好", pinyin: "nǐ hǎo", hanViet: "Nhĩ Hảo", meaning: "Xin chào", type: "Thành ngữ xã giao" },
      { hanzi: "老师", pinyin: "lǎoshī", hanViet: "Lão Sư", meaning: "Thầy cô giáo", type: "Danh từ" },
      { hanzi: "是", pinyin: "shì", hanViet: "Thị", meaning: "Là, đúng vậy", type: "Động từ" },
      { hanzi: "高兴", pinyin: "gāoxìng", hanViet: "Cao Hưng", meaning: "Vui mừng, phấn khởi", type: "Tính từ" },
      { hanzi: "认识", pinyin: "rènshì", hanViet: "Nhận Thức", meaning: "Quen biết, làm quen", type: "Động từ" },
      { hanzi: "您", pinyin: "nín", hanViet: "Nẫm", meaning: "Ngài, ông, bà (kính ngữ của 你)", type: "Đại từ" },
    ],
    grammarPoints: [
      {
        title: "Câu chữ '是' (Khẳng định danh tính)",
        structure: "Chủ ngữ + 是 + Tân ngữ",
        explanation: "Dùng để giới thiệu danh tính, nghề nghiệp, quốc tịch, tương đương với 'là' trong tiếng Việt.",
        example: {
          hanzi: "我是学生，他是老师。",
          pinyin: "Wǒ shì xuésheng, tā shì lǎoshī.",
          vietnamese: "Tôi là học sinh, thầy ấy là giáo viên.",
        },
      },
      {
        title: "Quy tắc biến điệu hai thanh 3 (3 + 3 -> 2 + 3)",
        structure: "Thanh 3 + Thanh 3 → Thanh 2 + Thanh 3",
        explanation: "Khi hai chữ thanh 3 đi liền nhau, chữ đầu tiên đọc thành thanh 2 (dấu sắc).",
        example: {
          hanzi: "你好 (nǐ + hǎo → ní hǎo)",
          pinyin: "nǐ hǎo (đọc là: ní hǎo)",
          vietnamese: "Xin chào",
        },
      },
    ],
    quickQuiz: {
      question: "Câu nào dưới đây dùng đúng kính ngữ khi chào người lớn tuổi hơn?",
      options: ["您好！", "你好！", "你是谁？", "他好！"],
      correctAnswer: "您好！",
      explanation: "'您' (nín) là cách gọi kính cẩn, tôn trọng hơn '你' (nǐ), dùng chào người lớn tuổi, thầy cô giáo.",
    },
  },
  {
    id: "lesson-hsk2-1",
    hskLevel: 2,
    unit: 2,
    title: "Mua sắm & Hỏi giá cả hàng hóa",
    subtitle: "Bài 2: 这个多少钱？(Cái này bao nhiêu tiền?)",
    description: "Học cách mặc cả, hỏi giá, đơn vị tiền tệ Trung Quốc (Tệ/Khối) và màu sắc kích cỡ.",
    estimatedMinutes: 25,
    dialogue: [
      {
        id: "d21",
        speaker: "Khách hàng (顾客)",
        avatar: "🛍️",
        hanzi: "老板，这件衣服多少钱？",
        pinyin: "Lǎobǎn, zhè jiàn yīfu duōshao qián?",
        vietnamese: "Chủ quán ơi, chiếc áo này giá bao nhiêu tiền vậy?",
      },
      {
        id: "d22",
        speaker: "Chủ quán (老板)",
        avatar: "🏪",
        hanzi: "这件两百块，质量非常好。",
        pinyin: "Zhè jiàn liǎng bǎi kuài, zhìliàng fēicháng hǎo.",
        vietnamese: "Chiếc này 200 tệ (khoảng 700k VNĐ), chất lượng rất tốt.",
      },
      {
        id: "d23",
        speaker: "Khách hàng (顾客)",
        avatar: "🛍️",
        hanzi: "太贵了，能不能便宜一点儿？一百五可以吗？",
        pinyin: "Tài guì le, néng bu néng piányi yìdiǎnr? Yì bǎi wǔ kěyǐ ma?",
        vietnamese: "Đắt quá, có thể bớt chút được không? 150 tệ được không bác?",
      },
      {
        id: "d24",
        speaker: "Chủ quán (老板)",
        avatar: "🏪",
        hanzi: "好吧，看你这么诚心，一百六卖给你！",
        pinyin: "Hǎo ba, kàn nǐ zhème chéngxīn, yì bǎi liù mài gěi nǐ!",
        vietnamese: "Được rồi, thấy bạn nhiệt tình, 160 tệ bán cho bạn luôn!",
      },
    ],
    vocabulary: [
      { hanzi: "衣服", pinyin: "yīfu", hanViet: "Y Phục", meaning: "Quần áo", type: "Danh từ" },
      { hanzi: "多少", pinyin: "duōshao", hanViet: "Đa Thiểu", meaning: "Bao nhiêu", type: "Đại từ hỏi" },
      { hanzi: "块", pinyin: "kuài", hanViet: "Khối", meaning: "Đồng tệ (khẩu ngữ của 元)", type: "Lượng từ" },
      { hanzi: "便宜", pinyin: "piányi", hanViet: "Tiện Nghi", meaning: "Rẻ", type: "Tính từ" },
      { hanzi: "贵", pinyin: "guì", hanViet: "Quý", meaning: "Đắt, đắt đỏ", type: "Tính từ" },
      { hanzi: "一点儿", pinyin: "yìdiǎnr", hanViet: "Nhất Điểm", meaning: "Một chút, một ít", type: "Phó từ" },
    ],
    grammarPoints: [
      {
        title: "Cấu trúc '太...了' (Biểu thị cảm thán hoặc mức độ cao)",
        structure: "Chủ ngữ + 太 + Tính từ + 了",
        explanation: "Dùng để thốt lên mức độ quá cao: 太贵了 (đắt quá), 太好了 (tốt quá).",
        example: {
          hanzi: "这件衣服太漂亮了！",
          pinyin: "Zhè jiàn yīfu tài piàoliang le!",
          vietnamese: "Bộ quần áo này đẹp quá!",
        },
      },
    ],
    quickQuiz: {
      question: "Muốn xin giảm giá bằng tiếng Trung, bạn nên nói thế nào?",
      options: ["太便宜了！", "能不能便宜一点儿？", "我不要了！", "多少钱？"],
      correctAnswer: "能不能便宜一点儿？",
      explanation: "'能不能便宜一点儿？' nghĩa là 'Có thể bớt chút được không ạ?'.",
    },
  },
  {
    id: "lesson-hsk3-1",
    hskLevel: 3,
    unit: 3,
    title: "Đặt kế hoạch du lịch & Dự báo thời tiết",
    subtitle: "Bài 3: 周末你打算做什么？(Cuối tuần bạn định làm gì?)",
    description: "Học cách dùng trợ từ dự định '打算', so sánh thời tiết và diễn đạt phương hướng du lịch.",
    estimatedMinutes: 30,
    dialogue: [
      {
        id: "d31",
        speaker: "Tiểu Lệ (小丽)",
        avatar: "👧",
        hanzi: "周末你打算去哪里旅游？",
        pinyin: "Zhōumò nǐ dǎsuàn qù nǎlǐ lǚyóu?",
        vietnamese: "Cuối tuần bạn dự định đi du lịch ở đâu thế?",
      },
      {
        id: "d32",
        speaker: "Tiểu Cương (小刚)",
        avatar: "👦",
        hanzi: "我打算去爬山。天气预报说周末是晴天。",
        pinyin: "Wǒ dǎsuàn qù páshān. Tiānqì yùbào shuō zhōumò shì qíngtiān.",
        vietnamese: "Mình định đi leo núi. Dự báo thời tiết bảo cuối tuần trời nắng đẹp.",
      },
      {
        id: "d33",
        speaker: "Tiểu Lệ (小丽)",
        avatar: "👧",
        hanzi: "爬山太累了，不如去喝咖啡看电影吧！",
        pinyin: "Páshān tài lèi le, bùrú qù hē kāfēi kàn diànyǐng ba!",
        vietnamese: "Leo núi mệt lắm, hay là đi uống cà phê xem phim đi!",
      },
    ],
    vocabulary: [
      { hanzi: "周末", pinyin: "zhōumò", hanViet: "Chu Mạt", meaning: "Cuối tuần", type: "Danh từ" },
      { hanzi: "打算", pinyin: "dǎsuàn", hanViet: "Đả Toán", meaning: "Dự định, lên kế hoạch", type: "Động từ" },
      { hanzi: "晴天", pinyin: "qíngtiān", hanViet: "Tình Thiên", meaning: "Trời nắng ráo", type: "Danh từ" },
      { hanzi: "爬山", pinyin: "páshān", hanViet: "Bà Sơn", meaning: "Leo núi", type: "Động từ" },
    ],
    grammarPoints: [
      {
        title: "Cấu trúc '打算' (Dự định làm gì đó)",
        structure: "Chủ ngữ + 打算 + Động từ / Cụm động từ",
        explanation: "Dùng để biểu đạt kế hoạch sắp tới trong tương lai gần.",
        example: {
          hanzi: "我打算明年去中国留学。",
          pinyin: "Wǒ dǎsuàn míngnián qù Zhōngguó liúxué.",
          vietnamese: "Tôi dự định năm sau sang Trung Quốc du học.",
        },
      },
    ],
    quickQuiz: {
      question: "Từ '打算' (dǎsuàn) mang ý nghĩa gì?",
      options: ["Đã xong", "Dự định", "Hủy bỏ", "Bắt buộc"],
      correctAnswer: "Dự định",
      explanation: "'打算' nghĩa là dự định, lên kế hoạch cho một việc sắp làm.",
    },
  },
  {
    id: "lesson-hsk5-1",
    hskLevel: 5,
    unit: 5,
    title: "Đàm phán thương mại & Hiệu suất doanh nghiệp",
    subtitle: "Bài 5: 商业谈判与投资策略 (Đàm phán thương mại và chiến lược đầu tư)",
    description: "Làm chủ từ vựng kinh doanh cao cấp, cách thuyết phục đối tác và tối ưu hóa hiệu suất làm việc.",
    estimatedMinutes: 35,
    dialogue: [
      {
        id: "d51",
        speaker: "Giám đốc Trương (张总)",
        avatar: "👔",
        hanzi: "李经理，关于这次在中国市场的投资，你们的谈判进展如何？",
        pinyin: "Lǐ jīnglǐ, guānyú zhè cì zài Zhōngguó shìchǎng de tóuzī, nǐmen de tánpàn jìnzhǎn rúhé?",
        vietnamese: "Giám đốc Lý, về dự án đầu tư vào thị trường Trung Quốc lần này, tiến độ đàm phán của các bạn thế nào rồi?",
      },
      {
        id: "d52",
        speaker: "Quản lý Lý (李经理)",
        avatar: "💼",
        hanzi: "双方经过友好协商，基本达成了共识。我们需要进一步提高供应链的执行效率。",
        pinyin: "Shuāngfāng jīngguò yǒuhǎo xiéshāng, jīběn dáchéng le gòngshí. Wǒmen xūyào jìnyíbù tígāo gōngyìngliàn de zhíxíng xiàolǜ.",
        vietnamese: "Hai bên qua thương thảo hữu nghị đã cơ bản đạt được đồng thuận. Chúng ta cần nâng cao hơn nữa hiệu suất chuỗi cung ứng.",
      },
    ],
    vocabulary: [
      { hanzi: "投资", pinyin: "tóuzī", hanViet: "Đầu Tư", meaning: "Đầu tư vốn, thời gian", type: "Động từ/Danh từ" },
      { hanzi: "谈判", pinyin: "tánpàn", hanViet: "Đàm Phán", meaning: "Thương lượng, đàm phán hợp đồng", type: "Động từ" },
      { hanzi: "效率", pinyin: "xiàolǜ", hanViet: "Hiệu Suất", meaning: "Năng suất, hiệu quả vận hành", type: "Danh từ" },
      { hanzi: "共识", pinyin: "gòngshí", hanViet: "Cộng Thức", meaning: "Nhận thức chung, sự đồng thuận", type: "Danh từ" },
    ],
    grammarPoints: [
      {
        title: "Cấu trúc giới từ '关于...' (Về vấn đề gì đó)",
        structure: "关于 + Đối tượng / Vấn đề, Chủ ngữ + Vị ngữ",
        explanation: "Dùng để nêu bật chủ đề bàn luận lên đầu mệnh đề trong văn phong công sở chuyên nghiệp.",
        example: {
          hanzi: "关于未来的合作，我们充满信心。",
          pinyin: "Guānyú wèilái de hézuò, wǒmen chōngmǎn xìnxīn.",
          vietnamese: "Về sự hợp tác trong tương lai, chúng tôi tràn đầy niềm tin.",
        },
      },
    ],
    quickQuiz: {
      question: "Cụm từ '达成共识' (dáchéng gòngshí) trong đàm phán có nghĩa là gì?",
      options: ["Hủy bỏ hợp đồng", "Đạt được sự đồng thuận", "Bất đồng ý kiến", "Kéo dài thời gian"],
      correctAnswer: "Đạt được sự đồng thuận",
      explanation: "'达成' (đạt được) + '共识' (sự đồng thuận/nhận thức chung).",
    },
  },
  {
    id: "lesson-hsk6-1",
    hskLevel: 6,
    unit: 6,
    title: "Triết lý cổ nhân & Tinh hoa thành ngữ",
    subtitle: "Bài 6: 博大精深的中华文化 (Văn hóa Trung Hoa bác đại tinh thâm)",
    description: "Thấm nhuần thành ngữ 4 chữ, triết lý 'Trì chi dĩ hằng', 'Vị vũ trù mâu' và tư duy văn phong học thuật cao cấp.",
    estimatedMinutes: 40,
    dialogue: [
      {
        id: "d61",
        speaker: "Giáo sư Trần (陈教授)",
        avatar: "📜",
        hanzi: "古人云：‘未雨绸缪’，在瞬息万变的大时代中，唯有持之以恒地自我提升，方能立于不败之地。",
        pinyin: "Gǔrén yún: ‘wèiyǔ chóumóu’, zài shùnxī wànbiàn de dà shídài zhōng, wéiyǒu chí zhī yǐ héng de zìwǒ tíshēng, fāng néng lì yú bú bài zhī dì.",
        vietnamese: "Cổ nhân nói: ‘Phải lo phòng bị trước khi mưa gió’, trong thời đại biến chuyển khôn lường, chỉ có kiên trì nâng cao bản thân mới đứng vững không bại.",
      },
      {
        id: "d62",
        speaker: "Nghiên cứu sinh (研究生)",
        avatar: "🎓",
        hanzi: "老师所言极是。做学问讲究循序渐进、精益求精，切不可急功近利。",
        pinyin: "Lǎoshī suǒ yán jí shì. Zuò xuéwen jiǎngjiu xún xù jiàn jìn, jīng yì qiú jīng, qiè bù kě jígōng jīnlì.",
        vietnamese: "Thầy dạy chí phải ạ. Làm học vấn coi trọng tuần tự tiến lên, đã tinh xảo càng vươn tới hoàn hảo, tuyệt đối không thể nóng vội tham lợi trước mắt.",
      },
    ],
    vocabulary: [
      { hanzi: "博大精深", pinyin: "bódà jīngshēn", hanViet: "Bác Đại Tinh Thâm", meaning: "Uyên bác sâu rộng", type: "Thành ngữ" },
      { hanzi: "持之以恒", pinyin: "chí zhī yǐ héng", hanViet: "Trì Chi Dĩ Hằng", meaning: "Bền bỉ kiên định đến cùng", type: "Thành ngữ" },
      { hanzi: "未雨绸缪", pinyin: "wèiyǔ chóumóu", hanViet: "Vị Vũ Trù Mâu", meaning: "Phòng ngừa chu tất từ trước", type: "Thành ngữ" },
      { hanzi: "循序渐进", pinyin: "xún xù jiàn jìn", hanViet: "Tuần Tự Tiệm Tiến", meaning: "Từng bước tiến bộ có hệ thống", type: "Thành ngữ" },
      { hanzi: "精益求精", pinyin: "jīng yì qiú jīng", hanViet: "Tinh Ích Cầu Tinh", meaning: "Luôn nỗ lực vươn tới sự hoàn hảo", type: "Thành ngữ" },
    ],
    grammarPoints: [
      {
        title: "Cấu trúc cổ văn '唯有...方能...' (Duy chỉ có... mới có thể...)",
        structure: "唯有 + Điều kiện tiên quyết + 方能 + Kết quả",
        explanation: "Thường gặp trong văn phong HSK 6 trang trọng, tương đương với '只有...才能...'.",
        example: {
          hanzi: "唯有坚持不懈，方能攀登学术高峰。",
          pinyin: "Wéiyǒu jiānchí búxiè, fāng néng pāndēng xuéshù gāofēng.",
          vietnamese: "Chỉ khi kiên trì không lùi bước, mới có thể trèo lên đỉnh cao học thuật.",
        },
      },
    ],
    quickQuiz: {
      question: "Thành ngữ nào mang ý nghĩa đối lập với '急于求成' (nóng vội muốn thành công ngay)?",
      options: ["循序渐进", "半途而废", "盲人摸象", "走马观花"],
      correctAnswer: "循序渐进",
      explanation: "'循序渐进' (từng bước vững chắc tiến lên) đối lập hoàn toàn với thái độ '急于求成' (nóng vội đốt cháy giai đoạn).",
    },
  },
];

// 2. THƯ VIỆN BÀI ĐỌC SONG NGỮ TƯƠNG TÁC (BILINGUAL INTERACTIVE READER)
export const BILINGUAL_ARTICLES: BilingualArticle[] = [
  {
    id: "article-1",
    titleHanzi: "中国茶文化：一叶一世界的宁静",
    titlePinyin: "Zhōngguó Chá Wénhuà: Yí Yè Yí Shìjiè de Níngjìng",
    titleVi: "Văn Hóa Trà Đạo Trung Hoa: Sự Tĩnh Lặng Trong Một Chiếc Lá",
    hskLevel: 3,
    category: "Văn hóa truyền thống",
    readTime: "3 phút",
    summary: "Khám phá nghệ thuật thưởng trà, nguồn gốc của các danh trà Long Tỉnh, Thiết Quan Âm và triết lý sống hòa hợp thiên nhiên.",
    sentences: [
      {
        id: "s1",
        words: [
          { hanzi: "中国", pinyin: "Zhōngguó", hanViet: "Trung Quốc", meaning: "Trung Quốc" },
          { hanzi: "是", pinyin: "shì", hanViet: "Thị", meaning: "Là" },
          { hanzi: "茶", pinyin: "chá", hanViet: "Trà", meaning: "Cây chè, lá trà" },
          { hanzi: "的", pinyin: "de", hanViet: "Đích", meaning: "Của" },
          { hanzi: "故乡", pinyin: "gùxiāng", hanViet: "Cố Hương", meaning: "Quê hương" },
          { hanzi: "。", pinyin: "", hanViet: "", meaning: "" },
        ],
        vietnamese: "Trung Quốc là quê hương của cây trà.",
      },
      {
        id: "s2",
        words: [
          { hanzi: "中国人", pinyin: "Zhōngguó rén", hanViet: "Trung Quốc Nhân", meaning: "Người Trung Quốc" },
          { hanzi: "喝茶", pinyin: "hē chá", hanViet: "Hát Trà", meaning: "Uống trà" },
          { hanzi: "的", pinyin: "de", hanViet: "Đích", meaning: "Của" },
          { hanzi: "历史", pinyin: "lìshǐ", hanViet: "Lịch Sử", meaning: "Lịch sử" },
          { hanzi: "已经", pinyin: "yǐjīng", hanViet: "Dĩ Kinh", meaning: "Đã" },
          { hanzi: "有", pinyin: "yǒu", hanViet: "Hữu", meaning: "Có" },
          { hanzi: "几千年", pinyin: "jǐ qiān nián", hanViet: "Kỷ Thiên Niên", meaning: "Mấy nghìn năm" },
          { hanzi: "了", pinyin: "le", hanViet: "Liễu", meaning: "Rồi" },
          { hanzi: "。", pinyin: "", hanViet: "", meaning: "" },
        ],
        vietnamese: "Lịch sử uống trà của người Trung Quốc đã có từ mấy nghìn năm trước.",
      },
      {
        id: "s3",
        words: [
          { hanzi: "喝茶", pinyin: "hē chá", hanViet: "Hát Trà", meaning: "Uống trà" },
          { hanzi: "不仅", pinyin: "bùjǐn", hanViet: "Bất Cận", meaning: "Không chỉ" },
          { hanzi: "对", pinyin: "duì", hanViet: "Đối", meaning: "Đối với" },
          { hanzi: "身体", pinyin: "shēntǐ", hanViet: "Thân Thể", meaning: "Sức khỏe" },
          { hanzi: "有益", pinyin: "yǒuyì", hanViet: "Hữu Ích", meaning: "Có lợi" },
          { hanzi: "，", pinyin: "", hanViet: "", meaning: "" },
          { hanzi: "更", pinyin: "gèng", hanViet: "Canh", meaning: "Càng, hơn nữa" },
          { hanzi: "是", pinyin: "shì", hanViet: "Thị", meaning: "Là" },
          { hanzi: "一种", pinyin: "yì zhǒng", hanViet: "Nhất Chủng", meaning: "Một loại" },
          { hanzi: "修身养性", pinyin: "xiūshēn yǎngxìng", hanViet: "Tu Thân Dưỡng Tính", meaning: "Tu thân dưỡng tính" },
          { hanzi: "的", pinyin: "de", hanViet: "Đích", meaning: "Của" },
          { hanzi: "生活方式", pinyin: "shēnghuó fāngshì", hanViet: "Sinh Hoạt Phương Thức", meaning: "Cách sống" },
          { hanzi: "。", pinyin: "", hanViet: "", meaning: "" },
        ],
        vietnamese: "Uống trà không chỉ có lợi cho sức khỏe, mà còn là một phong cách sống tu thân dưỡng tính.",
      },
    ],
  },
  {
    id: "article-2",
    titleHanzi: "学汉语的秘诀：持之以恒，贵在坚持",
    titlePinyin: "Xué Hànyǔ de Mìjué: Chí Zhī Yǐ Héng, Guì Zài Jiānchí",
    titleVi: "Bí Quyết Học Tiếng Trung: Kiên Trì Bền Bỉ, Quý Ở Lòng Nhẫn Nại",
    hskLevel: 4,
    category: "Phương pháp học tập",
    readTime: "4 phút",
    summary: "Tại sao người Việt có lợi thế vượt trội nhờ 70% từ Hán Việt tương đồng và cách vượt qua rào cản chữ Hán bằng Spaced Repetition.",
    sentences: [
      {
        id: "s201",
        words: [
          { hanzi: "很多人", pinyin: "hěn duō rén", hanViet: "Hẳn Đa Nhân", meaning: "Rất nhiều người" },
          { hanzi: "觉得", pinyin: "juéde", hanViet: "Giác Đắc", meaning: "Cảm thấy" },
          { hanzi: "汉字", pinyin: "hànzì", hanViet: "Hán Tự", meaning: "Chữ Hán" },
          { hanzi: "很难", pinyin: "hěn nán", hanViet: "Hẳn Nan", meaning: "Rất khó" },
          { hanzi: "写", pinyin: "xiě", hanViet: "Tả", meaning: "Viết" },
          { hanzi: "，", pinyin: "", hanViet: "", meaning: "" },
          { hanzi: "声调", pinyin: "shēngdiào", hanViet: "Thanh Điệu", meaning: "Thanh điệu" },
          { hanzi: "很难", pinyin: "hěn nán", hanViet: "Hẳn Nan", meaning: "Rất khó" },
          { hanzi: "发准", pinyin: "fā zhǔn", hanViet: "Phát Chuẩn", meaning: "Phát âm chuẩn" },
          { hanzi: "。", pinyin: "", hanViet: "", meaning: "" },
        ],
        vietnamese: "Rất nhiều người cảm thấy chữ Hán khó viết, thanh điệu khó phát âm chuẩn.",
      },
      {
        id: "s202",
        words: [
          { hanzi: "但是", pinyin: "dànshì", hanViet: "Đãn Thị", meaning: "Nhưng mà" },
          { hanzi: "越南人", pinyin: "Yuènán rén", hanViet: "Việt Nam Nhân", meaning: "Người Việt Nam" },
          { hanzi: "学汉语", pinyin: "xué hànyǔ", hanViet: "Học Hán Ngữ", meaning: "Học tiếng Hán" },
          { hanzi: "有", pinyin: "yǒu", hanViet: "Hữu", meaning: "Có" },
          { hanzi: "巨大", pinyin: "jùdà", hanViet: "Cự Đại", meaning: "Khổng lồ, to lớn" },
          { hanzi: "的", pinyin: "de", hanViet: "Đích", meaning: "Của" },
          { hanzi: "优势", pinyin: "yōushì", hanViet: "Ưu Thế", meaning: "Lợi thế" },
          { hanzi: "。", pinyin: "", hanViet: "", meaning: "" },
        ],
        vietnamese: "Thế nhưng người Việt Nam học tiếng Trung lại có lợi thế vô cùng to lớn.",
      },
      {
        id: "s203",
        words: [
          { hanzi: "因为", pinyin: "yīnwèi", hanViet: "Nhân Vị", meaning: "Bởi vì" },
          { hanzi: "越语", pinyin: "yuèyǔ", hanViet: "Việt Ngữ", meaning: "Tiếng Việt" },
          { hanzi: "中", pinyin: "zhōng", hanViet: "Trung", meaning: "Trong" },
          { hanzi: "有", pinyin: "yǒu", hanViet: "Hữu", meaning: "Có" },
          { hanzi: "大量的", pinyin: "dàliàng de", hanViet: "Đại Lượng Đích", meaning: "Số lượng lớn" },
          { hanzi: "汉越词", pinyin: "hànyuè cí", hanViet: "Hán Việt Từ", meaning: "Từ Hán Việt" },
          { hanzi: "，", pinyin: "", hanViet: "", meaning: "" },
          { hanzi: "只要", pinyin: "zhǐyào", hanViet: "Chỉ Yếu", meaning: "Chỉ cần" },
          { hanzi: "掌握", pinyin: "zhǎngwò", hanViet: "Chưởng Ác", meaning: "Nắm vững" },
          { hanzi: "对应", pinyin: "duìyìng", hanViet: "Đối Ứng", meaning: "Tương ứng" },
          { hanzi: "规律", pinyin: "guīlǜ", hanViet: "Quy Luật", meaning: "Quy luật" },
          { hanzi: "，", pinyin: "", hanViet: "", meaning: "" },
          { hanzi: "就能", pinyin: "jiù néng", hanViet: "Tựu Năng", meaning: "Thì có thể" },
          { hanzi: "事半功倍", pinyin: "shì bàn gōng bèi", hanViet: "Sự Bán Công Bội", meaning: "Làm nửa công gấp đôi" },
          { hanzi: "。", pinyin: "", hanViet: "", meaning: "" },
        ],
        vietnamese: "Bởi vì trong tiếng Việt có lượng lớn từ Hán Việt, chỉ cần nắm vững quy luật tương ứng thì học tập sẽ đạt hiệu quả gấp bội.",
      },
    ],
  },
];

// 3. KHO NGỮ PHÁP HỆ THỐNG HSK 1 - 6 (GRAMMAR GUIDE)
export const GRAMMAR_TOPICS: GrammarItem[] = [
  {
    id: "g1",
    hskLevel: 3,
    title: "Câu chữ 把 (把字句) - Cấu trúc xử lý tác động",
    formula: "Chủ ngữ + 把 + Tân ngữ + Động từ + Thành phần khác (了/bổ ngữ)",
    category: "Cấu trúc câu đặc biệt",
    description: "Câu chữ 把 dùng khi muốn nhấn mạnh sự xử lý, tác động của chủ ngữ làm thay đổi vị trí, trạng thái hoặc kết quả của tân ngữ.",
    examples: [
      {
        hanzi: "请你把这本书交给他。",
        pinyin: "Qǐng nǐ bǎ zhè běn shū jiāo gěi tā.",
        vietnamese: "Xin bạn hãy đưa cuốn sách này cho anh ấy.",
      },
      {
        hanzi: "他把作业做完了。",
        pinyin: "Tā bǎ zuòyè zuò wán le.",
        vietnamese: "Cậu ấy đã làm xong bài tập rồi.",
      },
    ],
    notes: "Động từ trong câu chữ 把 không được đứng trơ trọi một mình, phía sau luôn phải có thành phần bổ nghĩa như '了', bổ ngữ kết quả hoặc tân ngữ khác.",
  },
  {
    id: "g2",
    hskLevel: 3,
    title: "Câu so sánh chữ 比 (比字句)",
    formula: "A + 比 + B + Tính từ / Cụm động tính từ (+ 一点儿/得多/多了)",
    category: "Câu so sánh",
    description: "Dùng để so sánh mức độ giữa hai đối tượng A và B.",
    examples: [
      {
        hanzi: "今天比昨天冷得多。",
        pinyin: "Jīntiān bǐ zuótiān lěng de duō.",
        vietnamese: "Hôm nay lạnh hơn hôm qua rất nhiều.",
      },
      {
        hanzi: "他比我大两岁。",
        pinyin: "Tā bǐ wǒ dà liǎng suì.",
        vietnamese: "Anh ấy lớn hơn tôi hai tuổi.",
      },
    ],
    notes: "Không được dùng phó từ chỉ mức độ như '很', '非常', '太' phía trước tính từ trong câu chữ 比.",
  },
  {
    id: "g3",
    hskLevel: 4,
    title: "Câu bị động chữ 被 (被字句)",
    formula: "Chủ ngữ (kẻ chịu tác động) + 被 (+ Tác nhân) + Động từ + Thành phần khác",
    category: "Câu bị động",
    description: "Dùng để biểu thị sự việc không may hoặc kết quả mà chủ ngữ phải tiếp nhận một cách bị động.",
    examples: [
      {
        hanzi: "苹果被弟弟吃了。",
        pinyin: "Píngguǒ bèi dìdi chī le.",
        vietnamese: "Quả táo đã bị em trai ăn mất rồi.",
      },
      {
        hanzi: "我的自行车被偷了。",
        pinyin: "Wǒ de zìxíngchē bèi tōu le.",
        vietnamese: "Xe đạp của tôi đã bị trộm mất rồi.",
      },
    ],
  },
  {
    id: "g4",
    hskLevel: 2,
    title: "Trợ từ động thái 了, 着, 过 (Phân biệt 3 thì trạng thái)",
    formula: "Động từ + 了 (Đã xong) | Động từ + 着 (Đang diễn ra) | Động từ + 过 (Đã từng trải qua)",
    category: "Trợ từ động thái",
    description: "Ba trợ từ trọng tâm biểu thị thể của hành động trong tiếng Hán: hoàn thành, tiếp diễn và từng trải nghiệm.",
    examples: [
      {
        hanzi: "我吃了早饭。(Tôi đã ăn sáng)",
        pinyin: "Wǒ chī le zǎofàn.",
        vietnamese: "Hành động ăn sáng đã hoàn thành.",
      },
      {
        hanzi: "门开着。(Cửa đang mở)",
        pinyin: "Mén kāi zhe.",
        vietnamese: "Trạng thái mở cửa đang tiếp diễn duy trì.",
      },
      {
        hanzi: "我去过北京。(Tôi đã từng đi Bắc Kinh)",
        pinyin: "Wǒ qù guo Běijīng.",
        vietnamese: "Đã có kinh nghiệm / trải nghiệm đi Bắc Kinh trong quá khứ.",
      },
    ],
  },
];
