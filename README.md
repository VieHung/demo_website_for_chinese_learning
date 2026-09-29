# HuaYu Hub - Web Ôn Tập Tiếng Trung (HSK)

Dự án website hỗ trợ ôn tập và luyện thi tiếng Trung HSK, kế thừa kiến trúc và trải nghiệm từ dự án **Everbloom** (Next.js App Router, TypeScript, Tailwind CSS, Framer Motion).

## 🚀 Cấu trúc dự án

```text
demo_website_for_chinese_learning/
├── fe/                                  # Frontend Next.js App
│   ├── src/
│   │   ├── app/                         # App Router (layout, page, globals.css)
│   │   ├── components/
│   │   │   ├── layout/                  # Navbar, Footer
│   │   │   └── sections/                # FlashcardSection, VocabExplorer, QuizSection, PinyinPracticeSection, HeroBanner
│   │   ├── data/                        # Dữ liệu từ vựng HSK, bài trắc nghiệm, thanh điệu pinyin
│   │   ├── types/                       # Định nghĩa TypeScript
│   │   └── utils/                       # Hỗ trợ Web Speech API phát âm chuẩn bản xứ (zh-CN)
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
└── README.md
```

## ✨ Tính năng nổi bật

1. **Thẻ ghi nhớ Flashcard 3D**:
   - Lật thẻ 3D mượt mà với Framer Motion.
   - Hiển thị Chữ Hán, Pinyin, **Âm Hán-Việt** (quan trọng cho người Việt), nghĩa tiếng Việt, bộ thủ và câu ví dụ.
   - Tích hợp giọng đọc bản xứ phát âm chuẩn (`zh-CN`).
   - Đánh dấu "Đã thuộc" và lưu tiến độ học tập vào `localStorage`.

2. **Kho từ vựng HSK chuẩn (HSK 1 - 4)**:
   - Tìm kiếm nhanh theo chữ Hán, Pinyin hoặc nghĩa tiếng Việt.
   - Bộ lọc theo từng cấp độ HSK.
   - Nghe phát âm từng từ và từng câu ví dụ.

3. **Luyện trắc nghiệm phản xạ HSK**:
   - Câu hỏi nhận diện mặt chữ, pinyin, câu hỏi nghe và điền từ vào chỗ trống.
   - Chấm điểm tức thì, giải thích chi tiết và hiệu ứng ăn mừng `canvas-confetti`.

4. **Bảng ngữ âm & Luyện phát âm Pinyin**:
   - Hướng dẫn chi tiết 4 thanh điệu (kèm mẹo phát âm cho người Việt).
   - Bảng 23 Thanh mẫu (phụ âm đầu) và Vận mẫu có thể bấm để nghe mẫu âm chuẩn.

## 🛠 Hướng dẫn chạy dự án

Di chuyển vào thư mục `fe` và chạy lệnh:

```bash
cd fe
npm run dev
```

Mở trình duyệt tại: [http://localhost:3000](http://localhost:3000)
