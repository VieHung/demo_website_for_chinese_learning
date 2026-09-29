import type { Metadata } from "next";
import { Inter, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { UserProgressProvider } from "@/context/UserProgressContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  title: "SinnoChinese | Nền Tảng Học & Luyện Thi Tiếng Trung HSK",
  description:
    "SinnoChinese - Nền tảng học tiếng Trung trực tuyến toàn diện: Khóa học bài bản, Đọc song ngữ tương tác, Flashcards 3D, Kho ngữ pháp hệ thống và Đấu trường trắc nghiệm phản xạ HSK.",
  keywords: ["SinnoChinese", "học tiếng Trung", "HSK", "bài đọc song ngữ", "flashcard tiếng Trung", "ngữ pháp tiếng Trung", "pinyin", "trắc nghiệm tiếng Trung"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${notoSerifSC.variable}`}>
      <body className="min-h-screen flex flex-col bg-stone-950 text-stone-100 antialiased selection:bg-red-600 selection:text-white">
        <UserProgressProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </UserProgressProvider>
      </body>
    </html>
  );
}
