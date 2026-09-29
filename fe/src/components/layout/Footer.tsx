"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  Layers,
  BookOpen,
  Trophy,
  Volume2,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-stone-800/80 bg-stone-950/95 py-12 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* CỘT 1: THƯƠNG HIỆU SINNOCHINESE */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-amber-600 flex items-center justify-center font-bold text-white text-base shadow-lg shadow-red-900/40 group-hover:scale-105 transition-transform">
                华
              </div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-red-400 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                SinnoChinese
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Nền tảng học và ôn luyện tiếng Trung trực tuyến toàn diện cho người Việt: Thẻ nhớ Flashcard 3D, từ điển HSK đối chiếu âm Hán-Việt, trắc nghiệm phản xạ và ngữ âm Pinyin tương tác.
            </p>

            <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-xs text-amber-300/90 font-serif leading-relaxed">
              千里之行，始于足下
              <div className="text-[11px] text-stone-400 font-sans mt-0.5">
                (Hành trình ngàn dặm khởi nguồn từ một bước chân)
              </div>
            </div>
          </div>

          {/* CỘT 2: CÁC PHÒNG HỌC CHUYÊN SÂU */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Phòng Học Chuyên Sâu</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/bai-hoc"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors group"
                >
                  <BookOpen className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors" />
                  <span>Chương Trình Bài Học HSK</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/doc-song-ngu"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors group"
                >
                  <Compass className="w-4 h-4 text-stone-500 group-hover:text-orange-400 transition-colors" />
                  <span>Đọc Báo Song Ngữ Tương Tác</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ngu-phap"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors group"
                >
                  <Sparkles className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors" />
                  <span>Sổ Tay Ngữ Pháp Hệ Thống</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/flashcards"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors group"
                >
                  <Layers className="w-4 h-4 text-stone-500 group-hover:text-red-400 transition-colors" />
                  <span>Phòng Flashcards 3D (SRS)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tu-vung"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors group"
                >
                  <BookOpen className="w-4 h-4 text-stone-500 group-hover:text-orange-400 transition-colors" />
                  <span>Kho Từ Vựng HSK 1 - 6</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/trac-nghiem"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors group"
                >
                  <Trophy className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors" />
                  <span>Luyện Đề & Trắc Nghiệm HSK</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pinyin"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors group"
                >
                  <Volume2 className="w-4 h-4 text-stone-500 group-hover:text-red-400 transition-colors" />
                  <span>Trung Tâm Ngữ Âm & Pinyin</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: LỘ TRÌNH CẤP ĐỘ HSK */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Lộ Trình Cấp Độ HSK
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <Link
                  href="/tu-vung"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors group py-0.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>HSK 1 - Nhập môn</span>
                  </div>
                  <span className="text-[11px] text-stone-500 group-hover:text-stone-400">
                    150 từ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tu-vung"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors group py-0.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>HSK 2 - Giao tiếp cơ bản</span>
                  </div>
                  <span className="text-[11px] text-stone-500 group-hover:text-stone-400">
                    300 từ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tu-vung"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors group py-0.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>HSK 3 - Trung cấp</span>
                  </div>
                  <span className="text-[11px] text-stone-500 group-hover:text-stone-400">
                    600 từ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tu-vung"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors group py-0.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>HSK 4 - Làm chủ ngữ pháp</span>
                  </div>
                  <span className="text-[11px] text-stone-500 group-hover:text-stone-400">
                    1200 từ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tu-vung"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors group py-0.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>HSK 5 - Cao cấp & Đàm phán</span>
                  </div>
                  <span className="text-[11px] text-stone-500 group-hover:text-stone-400">
                    2500 từ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tu-vung"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors group py-0.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span>HSK 6 - Tinh thông thành ngữ</span>
                  </div>
                  <span className="text-[11px] text-stone-500 group-hover:text-stone-400">
                    5000+ từ
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 4: PHƯƠNG PHÁP HỌC TỐI ƯU */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Phương Pháp Học Tập
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-300">
                <div className="font-semibold text-amber-300 flex items-center gap-1.5 mb-0.5">
                  <span>Âm Hán - Việt tương đồng</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-snug">
                  Đòn bẩy 70% từ vựng tương đồng giúp người Việt ghi nhớ chữ Hán nhanh gấp 3 lần.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-300">
                <div className="font-semibold text-orange-400 flex items-center gap-1.5 mb-0.5">
                  <span>Phát âm chuẩn giọng bản xứ</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-snug">
                  Tích hợp Web Speech chuẩn giọng Bắc Kinh cho từng từ và mẫu câu đàm thoại.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-300">
                <div className="font-semibold text-red-400 flex items-center gap-1.5 mb-0.5">
                  <span>Lặp lại ngắt quãng (SRS)</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-snug">
                  Thuật toán nhắc lại từ vựng vào đúng thời điểm sắp quên để ghi nhớ vĩnh viễn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & QUICK LINKS */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} SinnoChinese. Nền tảng học tiếng Trung trực tuyến dành cho người Việt.
          </p>

          <div className="flex items-center gap-4 text-xs text-stone-400">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Trang chủ
            </Link>
            <span>•</span>
            <Link href="/tu-vung" className="hover:text-amber-300 transition-colors">
              Từ vựng
            </Link>
            <span>•</span>
            <Link href="/trac-nghiem" className="hover:text-amber-300 transition-colors">
              Luyện thi
            </Link>
            <span>•</span>
            <div className="flex items-center gap-1 text-stone-500">
              <span>Trải nghiệm học tập tối ưu</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
