"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, BookOpen, Layers, Trophy, ArrowLeft, BookMarked, Search } from "lucide-react";
import { VocabExplorer } from "@/components/sections/VocabExplorer";
import { INITIAL_VOCAB_LIST } from "@/data/chineseData";

function VocabContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Trang chủ</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-amber-300 font-medium">Kho Từ Vựng HSK</span>
      </nav>

      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-red-950/40 to-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Kho Từ Vựng Tiếng Trung HSK 1 - 6
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
              Khám phá từ mới với đầy đủ Hán tự, Pinyin kèm dấu thanh điệu, giải nghĩa chi tiết, âm Hán Việt độc quyền, số nét bút và câu ví dụ ứng dụng thực tế.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/flashcards"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-red-950/50 transition-all hover:scale-105"
            >
              <Layers className="w-4 h-4" />
              <span>Chuyển sang Flashcard</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Vocab Explorer Component */}
      <VocabExplorer words={INITIAL_VOCAB_LIST} initialSearch={q} />

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
                Luyện thẻ ghi nhớ 3D
              </h4>
              <p className="text-xs text-stone-400">Ôn tập từ vựng bằng phương pháp Flashcard thông minh</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/trac-nghiem"
          className="flex items-center justify-between p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-600/50 hover:bg-stone-900 transition-all group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-700/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm group-hover:text-amber-300 transition-colors">
                Kiểm tra kiến thức trắc nghiệm
              </h4>
              <p className="text-xs text-stone-400">Đo lường mức độ ghi nhớ qua các bài trắc nghiệm HSK</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}

export default function VocabPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-stone-400 flex flex-col items-center justify-center">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p>Đang tải kho từ vựng...</p>
      </div>
    }>
      <VocabContent />
    </Suspense>
  );
}
