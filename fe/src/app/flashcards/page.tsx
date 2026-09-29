"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Layers, Trophy, BookOpen, Sparkles, ArrowLeft } from "lucide-react";
import { FlashcardSection } from "@/components/sections/FlashcardSection";
import { INITIAL_VOCAB_LIST } from "@/data/chineseData";
import { useUserProgress } from "@/context/UserProgressContext";

export default function FlashcardsPage() {
  const { handleWordMastered, masteredIds } = useUserProgress();

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Trang chủ</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-amber-300 font-medium">Luyện Flashcards 3D</span>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-950/60 via-stone-900 to-amber-950/40 border border-red-800/40 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Luyện Trí Nhớ Từ Vựng Qua Thẻ Flashcard 3D
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
              Lật thẻ tương tác 360°, nghe phát âm chuẩn giọng bản xứ, ghi nhớ Hán tự qua âm Hán-Việt tương đồng và đánh dấu từ vựng đã nắm vững.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto bg-stone-900/80 px-4 py-3 rounded-xl border border-stone-800">
            <div className="text-right">
              <div className="text-xs text-stone-400">Đã nắm vững</div>
              <div className="text-xl font-black text-amber-400">
                {masteredIds.length} <span className="text-xs font-normal text-stone-500">/ {INITIAL_VOCAB_LIST.length} từ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Flashcard Section */}
      <FlashcardSection
        words={INITIAL_VOCAB_LIST}
        onWordMastered={handleWordMastered}
      />

      {/* Quick Navigation Footer */}
      <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                Xem toàn bộ kho từ vựng
              </h4>
              <p className="text-xs text-stone-400">Tra cứu chi tiết từng từ, số nét và bộ thủ</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/trac-nghiem"
          className="flex items-center justify-between p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-red-600/50 hover:bg-stone-900 transition-all group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm group-hover:text-red-300 transition-colors">
                Kiểm tra phản xạ qua trắc nghiệm
              </h4>
              <p className="text-xs text-stone-400">Thử tài ghi nhớ từ vựng với các câu hỏi HSK</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
