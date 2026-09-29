import type { Metadata } from "next";
import { Inter, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif",
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HuaYu Hub | Nền Tảng Ôn Tập & Luyện Thi Tiếng Trung HSK",
  description:
    "Hệ thống ôn tập tiếng Trung toàn diện: Thẻ ghi nhớ Flashcard 3D, Kho từ vựng HSK 1 - 4 kèm âm Hán-Việt, Trắc nghiệm phản xạ và Luyện phát âm chuẩn bản xứ.",
  keywords: ["tiếng Trung", "HSK", "từ vựng HSK", "học tiếng Trung", "flashcard tiếng Trung", "âm Hán Việt", "pinyin"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${notoSerifSC.variable}`}>
      <body className="min-h-screen flex flex-col bg-stone-950 text-stone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
