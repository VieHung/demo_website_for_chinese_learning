# SinnoChinese - Cổng Học & Luyện Thi Tiếng Trung HSK

Nền tảng học tiếng Trung trực tuyến toàn diện, tổ chức theo kiến trúc đa trang chuyên biệt: Next.js App Router, TypeScript, Tailwind CSS, Framer Motion.

## 🚀 Cấu trúc dự án

```text
demo_website_for_chinese_learning/
├── fe/                                  # Frontend Next.js App
│   ├── src/
│   │   ├── app/                         # Hệ thống đa trang (App Router)
│   │   │   ├── page.tsx                 # Trang chủ (Home Portal & Lộ trình HSK)
│   │   │   ├── bai-hoc/page.tsx         # Hệ thống bài học theo lộ trình HSK 1 - 6
│   │   │   ├── doc-song-ngu/page.tsx    # Thư viện đọc song ngữ & tra từ tức thì
│   │   │   ├── ngu-phap/page.tsx        # Cẩm nang ngữ pháp hệ thống HSK 1 - 6
│   │   │   ├── flashcards/page.tsx      # Phòng luyện thẻ nhớ Flashcards 3D
│   │   │   ├── tu-vung/page.tsx         # Thư viện tra cứu từ vựng HSK 1 - 6
│   │   │   ├── trac-nghiem/page.tsx     # Đấu trường & Đề thi trắc nghiệm HSK
│   │   │   ├── pinyin/page.tsx          # Trung tâm ngữ âm & Ma trận Pinyin
│   │   │   ├── bang-vang/page.tsx       # Bảng vàng thi đua & Tiến độ cá nhân
│   │   │   ├── layout.tsx               # Root layout & Header 2 tầng SinnoChinese
│   │   │   └── globals.css              # Styling hệ thống
│   │   ├── components/
│   │   │   ├── layout/                  # Navbar (Header 2 tầng), Footer
│   │   │   └── sections/                # FlashcardSection, VocabExplorer, QuizSection, PinyinPracticeSection, HeroBanner
│   │   ├── context/                     # UserProgressContext (Đồng bộ tiến độ xuyên suốt các trang)
│   │   ├── data/                        # Dữ liệu từ vựng HSK, bài trắc nghiệm, thanh điệu pinyin
│   │   ├── types/                       # Định nghĩa TypeScript
│   │   └── utils/                       # Hỗ trợ Web Speech API phát âm chuẩn bản xứ (zh-CN)
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
└── README.md
```

## ✨ Các trang & Tính năng cốt lõi

1. **Trang chủ (`/`)**:
   - Cổng điều hướng 4 phòng học chuyên biệt.
   - Thẻ từ vựng mỗi ngày (Word of the day) kèm phát âm chuẩn và ví dụ câu thực tế.
   - Lộ trình HSK 1 - 4 đo lường tiến độ học tập.
   - Nhiệm vụ học tập hàng ngày và xem bảng vàng thi đua.

2. **Phòng Flashcards 3D (`/flashcards`)**:
   - Lật thẻ 3D mượt mà với Framer Motion.
   - Hiển thị Chữ Hán, Pinyin, **Âm Hán-Việt** (quan trọng cho người Việt), nghĩa tiếng Việt, bộ thủ và câu ví dụ.
   - Giọng đọc phát âm chuẩn Bắc Kinh (`zh-CN`).
   - Đánh dấu "Đã thuộc" và tự động lưu tiến độ vào `localStorage`.

3. **Kho từ vựng HSK chuẩn (`/tu-vung`)**:
   - Tìm kiếm nhanh theo chữ Hán, Pinyin hoặc nghĩa tiếng Việt.
   - Hỗ trợ thanh tìm kiếm nhanh từ Header toàn trang.
   - Bộ lọc theo từng cấp độ HSK.
   - Nghe phát âm từng từ và từng câu ví dụ.

4. **Luyện trắc nghiệm phản xạ HSK (`/trac-nghiem`)**:
   - Câu hỏi nhận diện mặt chữ, Pinyin, nghe hiểu và điền từ vào chỗ trống.
   - Bấm giờ, chấm điểm tức thì, giải thích chi tiết và hiệu ứng chúc mừng.

5. **Bảng ngữ âm & Luyện phát âm Pinyin (`/pinyin`)**:
   - Hướng dẫn chi tiết 4 thanh điệu và thanh nhẹ.
   - Bảng 21 Thanh mẫu (phụ âm đầu) và 36 Vận mẫu bấm nghe phát âm trực tiếp.

6. **Bảng vàng danh dự & Tiến độ (`/bang-vang`)**:
   - Xếp hạng thi đua học viên theo tuần/tháng.
   - Thống kê toàn diện: chuỗi ngày học liên tục (Streak), từ vựng đã nắm, điểm thi thử.

## 🛠 Hướng dẫn chạy dự án

Di chuyển vào thư mục `fe` và khởi chạy máy chủ phát triển:

```bash
cd fe
npm run dev
```

Mở trình duyệt tại: [http://localhost:3000](http://localhost:3000)
