"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Volume2, Music, Sparkles, BookOpen, Layers, ArrowLeft, Mic } from "lucide-react";
import { PinyinPracticeSection } from "@/components/sections/PinyinPracticeSection";

export default function PinyinPage() {
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Trang chủ</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-amber-300 font-medium">Ngữ âm & Phát âm Pinyin</span>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-950/40 via-stone-900 to-amber-950/60 border border-stone-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trung Tâm Ngữ Âm & Ma Trận Pinyin
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
              Nền móng phát âm chuẩn tiếng Phổ thông: Bảng tương tác 21 thanh mẫu, 36 vận mẫu và kỹ thuật làm chủ 4 thanh điệu cùng thanh nhẹ.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/tu-vung"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-xs sm:text-sm transition-all hover:scale-105"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Tra từ vựng thực tế</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Pinyin Practice Section */}
      <PinyinPracticeSection />

      {/* Cross Navigation */}
      <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/flashcards"
          className="flex items-center justify-between p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-600/50 hover:bg-stone-900 transition-all group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm group-hover:text-red-300 transition-colors">
                Luyện thẻ ghi nhớ Flashcard 3D
              </h4>
              <p className="text-xs text-stone-400">Ứng dụng Pinyin vừa học vào từ vựng HSK hoàn chỉnh</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/tu-vung"
          className="flex items-center justify-between p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-600/50 hover:bg-stone-900 transition-all group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-700/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm group-hover:text-amber-300 transition-colors">
                Khám phá kho từ vựng HSK
              </h4>
              <p className="text-xs text-stone-400">Tra cứu các từ có âm thanh mẫu và vận mẫu tương ứng</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
