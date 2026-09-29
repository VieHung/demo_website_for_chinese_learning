"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Play,
  Volume2,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  FileText,
  HelpCircle,
  Clock,
  Sparkles,
  Layers,
} from "lucide-react";
import { LESSONS_LIST, LessonData } from "@/data/coursesData";
import { speakChinese } from "@/utils/speech";
import { HSKLevel } from "@/types";

export default function LessonsPage() {
  const [selectedLevel, setSelectedLevel] = useState<HSKLevel | 0>(0);
  const [activeLesson, setActiveLesson] = useState<LessonData>(LESSONS_LIST[0]);
  const [activeTab, setActiveTab] = useState<"dialogue" | "vocab" | "grammar" | "quiz">("dialogue");
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const filteredLessons = LESSONS_LIST.filter(
    (l) => selectedLevel === 0 || l.hskLevel === selectedLevel
  );

  const handleSelectLesson = (lesson: LessonData) => {
    setActiveLesson(lesson);
    setActiveTab("dialogue");
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const handleSelectAnswer = (option: string) => {
    if (showAnswer) return;
    setSelectedAnswer(option);
    setShowAnswer(true);
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Trang chủ</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-amber-300 font-medium">Khóa Học & Bài Học HSK</span>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-950/60 via-stone-900 to-amber-950/40 border border-stone-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <GraduationCap className="w-7 h-7 text-amber-400" />
              <span>Chương Trình Bài Học Theo Cấp Độ HSK</span>
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Lộ trình bài giảng bài bản từ HSK 1 đến HSK 6: Hội thoại thực tế có phát âm bản ngữ, từ vựng trọng tâm, điểm ngữ pháp và bài tập củng cố sau mỗi bài học.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <Link
              href="/doc-song-ngu"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs sm:text-sm font-semibold transition-all hover:scale-105"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Đọc song ngữ</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Workspace: 2 Columns (Lesson list + Active lesson desk) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Sidebar: Lesson Directory (4 cols) */}
        <div className="lg:col-span-4 bg-stone-900/80 border border-stone-800 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Mục Lục Bài Học</span>
            </h2>
            <span className="text-xs text-stone-400">{filteredLessons.length} bài học</span>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedLevel(0)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedLevel === 0
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-stone-950 text-stone-400 hover:text-white"
              }`}
            >
              Tất cả
            </button>
            {[1, 2, 3, 4, 5, 6].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl as HSKLevel)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedLevel === lvl
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-stone-950 text-stone-400 hover:text-white"
                }`}
              >
                HSK {lvl}
              </button>
            ))}
          </div>

          {/* Lessons List Cards */}
          <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
            {filteredLessons.map((lesson) => {
              const isSelected = activeLesson.id === lesson.id;
              return (
                <div
                  key={lesson.id}
                  onClick={() => handleSelectLesson(lesson)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? "bg-red-950/40 border-red-700/60 shadow-inner"
                      : "bg-stone-950/70 border-stone-800 hover:border-stone-700 hover:bg-stone-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-amber-400 font-mono">
                      HSK {lesson.hskLevel} • Bài {lesson.unit}
                    </span>
                    <span className="text-[10px] text-stone-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lesson.estimatedMinutes} phút
                    </span>
                  </div>
                  <h3 className={`text-sm font-bold truncate ${isSelected ? "text-white" : "text-stone-300"}`}>
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-stone-400 font-serif mt-0.5 truncate">
                    {lesson.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Area: Interactive Lesson Desk (8 cols) */}
        <div className="lg:col-span-8 bg-stone-900/90 border border-stone-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Lesson Header */}
          <div className="p-6 border-b border-stone-800 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  HSK {activeLesson.hskLevel} — Unit {activeLesson.unit}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {activeLesson.title}
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 font-serif">
                  {activeLesson.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {activeLesson.estimatedMinutes} phút học
                </span>
              </div>
            </div>

            {/* Lesson Module Tabs (4 Core Elements) */}
            <div className="flex items-center space-x-2 mt-6 border-t border-stone-800 pt-4 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab("dialogue")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "dialogue"
                    ? "bg-red-600 text-white shadow-md shadow-red-950/50"
                    : "bg-stone-950 text-stone-400 hover:text-white"
                }`}
              >
                <span>Hội thoại mẫu</span>
              </button>

              <button
                onClick={() => setActiveTab("vocab")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "vocab"
                    ? "bg-red-600 text-white shadow-md shadow-red-950/50"
                    : "bg-stone-950 text-stone-400 hover:text-white"
                }`}
              >
                <span>Từ mới ({activeLesson.vocabulary.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("grammar")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "grammar"
                    ? "bg-red-600 text-white shadow-md shadow-red-950/50"
                    : "bg-stone-950 text-stone-400 hover:text-white"
                }`}
              >
                <span>Ngữ pháp ({activeLesson.grammarPoints.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("quiz")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "quiz"
                    ? "bg-red-600 text-white shadow-md shadow-red-950/50"
                    : "bg-stone-950 text-stone-400 hover:text-white"
                }`}
              >
                <span>Luyện tập nhanh</span>
              </button>
            </div>
          </div>

          {/* TAB 1: HỘI THOẠI MẪU (DIALOGUE) */}
          {activeTab === "dialogue" && (
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-400 pb-2 border-b border-stone-800">
                <span>Bấm vào biểu tượng loa để nghe phát âm từng câu</span>
                <button
                  onClick={() => {
                    const allText = activeLesson.dialogue.map((d) => d.hanzi).join(" ");
                    speakChinese(allText);
                  }}
                  className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Nghe toàn bộ hội thoại</span>
                </button>
              </div>

              <div className="space-y-4 pt-2">
                {activeLesson.dialogue.map((line) => (
                  <div
                    key={line.id}
                    className="p-4 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-start gap-4 transition-all hover:border-amber-600/40"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700/60 flex items-center justify-center text-xl shrink-0">
                      {line.avatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-amber-300">{line.speaker}</span>
                        <button
                          onClick={() => speakChinese(line.hanzi)}
                          className="p-1 rounded-lg bg-stone-900 hover:bg-red-600 text-stone-400 hover:text-white transition-colors cursor-pointer"
                          title="Nghe câu này"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-base sm:text-lg font-bold text-white font-serif tracking-wide">
                        {line.hanzi}
                      </p>
                      <p className="text-xs sm:text-sm text-amber-400/90 font-sans mt-0.5">
                        {line.pinyin}
                      </p>
                      <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                        → {line.vietnamese}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: TỪ MỚI CỦA BÀI HỌC (VOCABULARY) */}
          {activeTab === "vocab" && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 text-stone-400 text-xs uppercase tracking-wider">
                      <th className="py-3 px-3">Hán tự</th>
                      <th className="py-3 px-3">Pinyin</th>
                      <th className="py-3 px-3">Âm Hán Việt</th>
                      <th className="py-3 px-3">Loại từ</th>
                      <th className="py-3 px-3">Giải nghĩa</th>
                      <th className="py-3 px-2 text-right">Phát âm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60">
                    {activeLesson.vocabulary.map((w, idx) => (
                      <tr key={idx} className="hover:bg-stone-950/50 transition-colors">
                        <td className="py-3 px-3 font-serif font-black text-amber-200 text-base">
                          {w.hanzi}
                        </td>
                        <td className="py-3 px-3 text-amber-400 text-xs font-medium">
                          {w.pinyin}
                        </td>
                        <td className="py-3 px-3 text-stone-300 text-xs font-semibold">
                          {w.hanViet}
                        </td>
                        <td className="py-3 px-3 text-stone-400 text-xs">
                          <span className="px-2 py-0.5 rounded bg-stone-950 border border-stone-800 text-[11px]">
                            {w.type}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-white text-xs font-medium">
                          {w.meaning}
                        </td>
                        <td className="py-3 px-2 text-right">
                          <button
                            onClick={() => speakChinese(w.hanzi)}
                            className="p-1.5 rounded-lg bg-stone-950 hover:bg-red-600 text-stone-400 hover:text-white transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: NGỮ PHÁP TRỌNG TÂM (GRAMMAR) */}
          {activeTab === "grammar" && (
            <div className="p-6 space-y-6">
              {activeLesson.grammarPoints.map((gp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-3">
                  <h3 className="text-base font-bold text-amber-300 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-950 text-amber-400 border border-amber-800/60 flex items-center justify-center text-xs font-black">
                      {idx + 1}
                    </span>
                    <span>{gp.title}</span>
                  </h3>

                  <div className="p-3 rounded-xl bg-stone-900 border border-amber-800/40 font-mono text-xs sm:text-sm text-amber-300 font-bold">
                    {gp.structure}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {gp.explanation}
                  </p>

                  <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/80">
                    <div className="text-[11px] text-stone-500 mb-1">Ví dụ minh họa:</div>
                    <div className="text-sm sm:text-base font-bold text-white font-serif">
                      {gp.example.hanzi}
                    </div>
                    <div className="text-xs text-amber-400 font-sans mt-0.5">
                      {gp.example.pinyin}
                    </div>
                    <div className="text-xs text-stone-300 mt-1">
                      → {gp.example.vietnamese}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: BÀI TẬP NHANH (QUIZ) */}
          {activeTab === "quiz" && (
            <div className="p-6 space-y-6">
              <div className="p-5 rounded-2xl bg-stone-950/80 border border-stone-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 block">
                  Câu hỏi củng cố bài học
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                  {activeLesson.quickQuiz.question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {activeLesson.quickQuiz.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrect = opt === activeLesson.quickQuiz.correctAnswer;
                    let btnStyle = "bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-600/50";

                    if (showAnswer) {
                      if (isCorrect) btnStyle = "bg-emerald-950/70 border-emerald-500 text-emerald-300 font-bold";
                      else if (isSelected) btnStyle = "bg-red-950/70 border-red-500 text-red-300 font-bold";
                    } else if (isSelected) {
                      btnStyle = "bg-amber-950/70 border-amber-500 text-amber-300";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(opt)}
                        className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${btnStyle} cursor-pointer`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showAnswer && (
                  <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-xs sm:text-sm text-stone-300 animate-fadeIn">
                    <span className="font-bold text-amber-400 block mb-1">
                      ✓ Giải thích chi tiết:
                    </span>
                    {activeLesson.quickQuiz.explanation}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
