"use client";

import { useState } from "react";
import Link from "next/link";
import { GRAMMAR_TOPICS, GrammarItem } from "@/data/coursesData";

export default function NguPhapPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(GRAMMAR_TOPICS[0]?.id || null);

  const speakChinese = (text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const filteredTopics = GRAMMAR_TOPICS.filter((topic) => {
    const matchesLevel = selectedLevel === "all" || topic.hskLevel === selectedLevel;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      topic.title.toLowerCase().includes(q) ||
      topic.formula.toLowerCase().includes(q) ||
      topic.description.toLowerCase().includes(q) ||
      topic.category.toLowerCase().includes(q);
    return matchesLevel && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-stone-400 mb-6">
          <Link href="/" className="hover:text-amber-400 transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-amber-400 font-medium">Ngữ pháp hệ thống HSK</span>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-red-950/60 via-stone-900 to-amber-950/40 border border-amber-800/40 rounded-3xl p-6 sm:p-8 mb-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-red-400 tracking-tight">
              Sổ Tay Ngữ Pháp Tiếng Trung Hệ Thống
            </h1>
            <p className="mt-3 text-stone-300 text-base sm:text-lg leading-relaxed">
              Tổng hợp đầy đủ cấu trúc câu then chốt từ HSK 1 đến HSK 6 kèm công thức, lưu ý thực chiến và câu ví dụ song ngữ chuẩn ngữ điệu.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 sm:p-5 mb-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Level Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedLevel("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedLevel === "all"
                  ? "bg-gradient-to-r from-red-600 to-amber-600 text-white border-amber-400 shadow-md font-bold"
                  : "bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200"
              }`}
            >
              Tất cả các cấp
            </button>
            {[1, 2, 3, 4, 5, 6].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedLevel === lvl
                    ? "bg-gradient-to-r from-red-600 to-amber-600 text-white border-amber-400 shadow-md font-bold"
                    : "bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200"
                }`}
              >
                HSK {lvl}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Tìm câu chữ 把, 比, bị động..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-950 border border-stone-700 rounded-xl text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Grammar Topics Grid / List */}
        {filteredTopics.length > 0 ? (
          <div className="space-y-6">
            {filteredTopics.map((topic) => {
              const isExpanded = expandedTopicId === topic.id;

              return (
                <div
                  key={topic.id}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-700/50 transition-all"
                >
                  {/* Topic Card Header */}
                  <div
                    onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                    className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-stone-800/40 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="font-bold text-amber-400">Trình độ HSK {topic.hskLevel}</span>
                        <span className="text-stone-600">•</span>
                        <span className="text-orange-400 font-medium">{topic.category}</span>
                      </div>
                      <h2 className="text-xl font-bold text-stone-100">{topic.title}</h2>
                      <div className="text-xs text-amber-300 font-mono">
                        {topic.formula}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-stone-400">
                        {isExpanded ? "Thu gọn" : "Xem chi tiết"}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 transition-transform ${
                          isExpanded ? "rotate-180 text-amber-400" : ""
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Topic Card Content (Expanded) */}
                  {isExpanded && (
                    <div className="p-6 border-t border-stone-800 bg-stone-950/60 space-y-6">
                      {/* Structure formula block */}
                      <div className="bg-stone-900 border border-amber-500/40 rounded-xl p-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                          Công thức cấu trúc:
                        </div>
                        <div className="text-base sm:text-lg font-bold text-amber-200 font-mono">
                          {topic.formula}
                        </div>
                      </div>

                      {/* Explanation */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                          Giải thích ngữ pháp:
                        </h4>
                        <p className="text-stone-300 text-sm leading-relaxed">
                          {topic.description}
                        </p>
                      </div>

                      {/* Examples */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                          Ví dụ minh họa thực tế:
                        </h4>
                        <div className="space-y-3">
                          {topic.examples.map((ex, exIdx) => (
                            <div
                              key={exIdx}
                              className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex items-start justify-between gap-4"
                            >
                              <div className="space-y-1">
                                <div className="text-lg font-bold text-stone-100 font-serif">
                                  {ex.hanzi}
                                </div>
                                <div className="text-xs font-medium text-orange-400">
                                  {ex.pinyin}
                                </div>
                                <div className="text-xs text-stone-400">
                                  {ex.vietnamese}
                                </div>
                              </div>
                              <button
                                onClick={() => speakChinese(ex.hanzi)}
                                className="p-2 rounded-xl bg-stone-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-amber-600 hover:text-white text-stone-400 transition-all border border-stone-700 shrink-0"
                                title="Nghe phát âm"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Notes / Caveats */}
                      {topic.notes && (
                        <div className="p-4 rounded-xl bg-orange-950/30 border border-orange-600/40 text-xs text-orange-200 leading-relaxed flex items-start gap-2.5">
                          <span className="font-bold text-amber-400">⚠️ Lưu ý:</span>
                          <span>{topic.notes}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-stone-900/60 border border-stone-800 rounded-2xl">
            <p className="text-stone-400 text-sm">Không tìm thấy chủ điểm ngữ pháp phù hợp.</p>
            <button
              onClick={() => {
                setSelectedLevel("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-amber-400 hover:underline"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
