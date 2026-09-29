"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Trophy, Sparkles, Layers, BookOpen, ArrowLeft, Target, Award } from "lucide-react";
import { QuizSection } from "@/components/sections/QuizSection";
import { INITIAL_QUIZ_LIST } from "@/data/chineseData";
import { useUserProgress } from "@/context/UserProgressContext";

export default function QuizPage() {
  const { handleQuizComplete, totalScore, quizzesCompleted } = useUserProgress();

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Trang chủ</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-amber-300 font-medium">Luyện trắc nghiệm HSK</span>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-amber-950/60 via-stone-900 to-red-950/40 border border-amber-800/40 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Luyện Trắc Nghiệm & Phản Xạ Tiếng Trung
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
              Củng cố phản xạ nhận diện mặt chữ Hán, chọn đúng phiên âm Pinyin, điền từ vào ngữ cảnh và nghe hiểu theo mẫu đề thi HSK tiêu chuẩn.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto bg-stone-900/80 px-4 py-3 rounded-xl border border-stone-800">
            <Award className="w-8 h-8 text-amber-400" />
            <div>
              <div className="text-xs text-stone-400">Điểm tích lũy</div>
              <div className="text-xl font-black text-amber-300">
                {totalScore} <span className="text-xs font-normal text-stone-500">điểm ({quizzesCompleted} bài đã làm)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Quiz Section */}
      <QuizSection
        questions={INITIAL_QUIZ_LIST}
        onQuizComplete={handleQuizComplete}
      />

      {/* Cross Navigation */}
      <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/flashcards"
          className="flex items-center justify-between p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-red-600/50 hover:bg-stone-900 transition-all group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm group-hover:text-red-300 transition-colors">
                Ôn lại thẻ Flashcard 3D
              </h4>
              <p className="text-xs text-stone-400">Củng cố các từ vựng chưa nhớ kỹ trong bài thi</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/bang-vang"
          className="flex items-center justify-between p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-600/50 hover:bg-stone-900 transition-all group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-700/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm group-hover:text-amber-300 transition-colors">
                Xem Bảng Vàng & Thành Tích
              </h4>
              <p className="text-xs text-stone-400">Kiểm tra thứ hạng và bộ sưu tập huy hiệu của bạn</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
