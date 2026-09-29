"use client";

import { useState } from "react";
import Link from "next/link";
import { BILINGUAL_ARTICLES, BilingualArticle, BilingualWord } from "@/data/coursesData";

export default function DocSongNguPage() {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(BILINGUAL_ARTICLES[0].id);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [selectedWord, setSelectedWord] = useState<BilingualWord | null>(null);
  const [activeSentenceId, setActiveSentenceId] = useState<string | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const currentArticle = BILINGUAL_ARTICLES.find((a) => a.id === selectedArticleId) || BILINGUAL_ARTICLES[0];

  const speakChinese = (text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleReadFullArticle = () => {
    if (typeof window === "undefined") return;
    if (isPlayingAll) {
      window.speechSynthesis.cancel();
      setIsPlayingAll(false);
      return;
    }
    const fullText = currentArticle.sentences
      .map((s) => s.words.map((w) => w.hanzi).join(""))
      .join(" ");
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    utterance.onend = () => setIsPlayingAll(false);
    utterance.onerror = () => setIsPlayingAll(false);
    setIsPlayingAll(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-stone-400 mb-6">
          <Link href="/" className="hover:text-amber-400 transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-amber-400 font-medium">Đọc song ngữ tương tác</span>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-red-950/60 via-stone-900 to-amber-950/40 border border-amber-800/40 rounded-3xl p-6 sm:p-8 mb-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-red-400 tracking-tight">
              Đọc Báo Song Ngữ & Tra Từ Trực Tiếp
            </h1>
            <p className="mt-3 text-stone-300 text-base sm:text-lg leading-relaxed">
              Nhấp vào bất kỳ chữ Hán nào để tra cứu Pinyin, âm Hán Việt và ngữ nghĩa ngay lập tức kèm phát âm bản xứ chuẩn.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Article Selector & Word Inspector */}
          <div className="lg:col-span-4 space-y-6">
            {/* Article Library */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 shadow-xl">
              <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Danh mục bài đọc ({BILINGUAL_ARTICLES.length})
              </h2>

              <div className="space-y-3">
                {BILINGUAL_ARTICLES.map((article) => {
                  const isSelected = article.id === selectedArticleId;
                  return (
                    <button
                      key={article.id}
                      onClick={() => {
                        setSelectedArticleId(article.id);
                        setSelectedWord(null);
                        window.speechSynthesis?.cancel();
                        setIsPlayingAll(false);
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all border ${
                        isSelected
                          ? "bg-gradient-to-r from-red-950/70 to-amber-950/50 border-amber-500/60 shadow-lg text-amber-200"
                          : "bg-stone-900/60 border-stone-800 hover:bg-stone-800 hover:border-amber-700/50 text-stone-300"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                        <span className="font-semibold text-amber-400">HSK {article.hskLevel}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div className="font-semibold text-stone-100 text-sm line-clamp-1">{article.titleHanzi}</div>
                      <div className="text-xs text-stone-400 line-clamp-1 mt-0.5">{article.titleVi}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Word Inspector Card (Shows details when user clicks a word) */}
            <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-2xl p-6 shadow-xl sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400/90 mb-4 flex items-center justify-between">
                <span>Tra từ tức thì</span>
                {selectedWord && (
                  <button
                    onClick={() => setSelectedWord(null)}
                    className="text-xs text-stone-500 hover:text-stone-300"
                  >
                    Đóng
                  </button>
                )}
              </h3>

              {selectedWord ? (
                <div className="space-y-4">
                  <div className="bg-stone-950/80 border border-amber-600/40 rounded-2xl p-5 text-center relative overflow-hidden">
                    <div className="text-5xl font-black text-amber-300 font-serif mb-2 tracking-wide">
                      {selectedWord.hanzi}
                    </div>
                    <div className="text-lg font-bold text-orange-400">
                      {selectedWord.pinyin}
                    </div>
                    <button
                      onClick={() => speakChinese(selectedWord.hanzi)}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold transition-all border border-amber-500/40"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                      Nghe phát âm
                    </button>
                  </div>

                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between items-center p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                      <span className="text-stone-400">Âm Hán Việt:</span>
                      <span className="font-bold text-amber-400 uppercase tracking-wide">
                        {selectedWord.hanViet || "—"}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                      <span className="text-stone-400 block text-xs mb-1">Nghĩa tiếng Việt:</span>
                      <span className="font-semibold text-stone-100 text-sm">
                        {selectedWord.meaning || "—"}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 px-4">
                  <div className="w-14 h-14 rounded-2xl bg-stone-800/60 border border-amber-600/30 mx-auto flex items-center justify-center text-amber-400 mb-3">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-stone-300">Chưa chọn từ vựng</p>
                  <p className="text-xs text-stone-500 mt-1">
                    Nhấp vào bất kỳ từ Hán nào trong bài viết bên phải để xem phiên âm và âm Hán Việt.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Reading Area */}
          <div className="lg:col-span-8">
            <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {/* Reader Control Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setShowPinyin(!showPinyin)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                      showPinyin
                        ? "bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold"
                        : "bg-stone-800 text-stone-400 border-stone-700 hover:text-stone-200"
                    }`}
                  >
                    {showPinyin ? "Đang hiện Pinyin" : "Đã ẩn Pinyin"}
                  </button>

                  <button
                    onClick={() => setShowTranslation(!showTranslation)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                      showTranslation
                        ? "bg-orange-500 text-stone-950 border-orange-400 shadow-md font-bold"
                        : "bg-stone-800 text-stone-400 border-stone-700 hover:text-stone-200"
                    }`}
                  >
                    {showTranslation ? "Đang hiện Dịch nghĩa" : "Đã ẩn Dịch nghĩa"}
                  </button>
                </div>

                <button
                  onClick={handleReadFullArticle}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border shadow-lg ${
                    isPlayingAll
                      ? "bg-red-500/20 text-red-300 border-red-500"
                      : "bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-amber-400/60 font-extrabold"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isPlayingAll ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    )}
                  </svg>
                  {isPlayingAll ? "Dừng đọc bài" : "Đọc toàn bài"}
                </button>
              </div>

              {/* Article Headings */}
              <div className="py-6 border-b border-stone-800">
                <div className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2">
                  {currentArticle.category} • Trình độ HSK {currentArticle.hskLevel}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-100 font-serif leading-snug">
                  {currentArticle.titleHanzi}
                </h2>
                {showPinyin && (
                  <p className="text-sm font-medium text-amber-300/90 mt-1">
                    {currentArticle.titlePinyin}
                  </p>
                )}
                {showTranslation && (
                  <p className="text-sm text-stone-400 mt-2 italic">
                    {currentArticle.titleVi}
                  </p>
                )}
                <p className="text-xs text-stone-400 mt-4 leading-relaxed bg-stone-950/60 p-3 rounded-xl border border-stone-800">
                  {currentArticle.summary}
                </p>
              </div>

              {/* Sentence-by-sentence reading section */}
              <div className="py-6 space-y-6">
                {currentArticle.sentences.map((sentence, idx) => {
                  const isActive = activeSentenceId === sentence.id;
                  const sentenceHanzi = sentence.words.map((w) => w.hanzi).join("");

                  return (
                    <div
                      key={sentence.id}
                      className={`p-5 rounded-2xl transition-all border ${
                        isActive
                          ? "bg-stone-900 border-amber-500/60 shadow-md"
                          : "bg-stone-950/50 border-stone-800/80 hover:bg-stone-900/60"
                      }`}
                    >
                      {/* Sentence Audio play bar */}
                      <div className="flex items-center justify-between mb-3 text-xs text-stone-500">
                        <span className="font-mono">Câu #{idx + 1}</span>
                        <button
                          onClick={() => {
                            setActiveSentenceId(sentence.id);
                            speakChinese(sentenceHanzi);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors font-medium"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                          Nghe câu
                        </button>
                      </div>

                      {/* Interactive Words Cluster */}
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-3 leading-relaxed">
                        {sentence.words.map((word, wIdx) => {
                          const isPunctuation = [",", "。", "！", "？", "，"].includes(word.hanzi);
                          if (isPunctuation) {
                            return (
                              <span key={wIdx} className="text-xl text-stone-500 font-serif">
                                {word.hanzi}
                              </span>
                            );
                          }

                          const isWordSelected = selectedWord?.hanzi === word.hanzi;

                          return (
                            <button
                              key={wIdx}
                              onClick={() => {
                                setSelectedWord(word);
                                setActiveSentenceId(sentence.id);
                              }}
                              className={`group inline-flex flex-col items-center px-1.5 py-0.5 rounded-lg transition-all ${
                                isWordSelected
                                  ? "bg-amber-400 text-stone-950 font-bold shadow-md scale-105"
                                  : "hover:bg-stone-800 hover:text-amber-300"
                              }`}
                            >
                              {showPinyin && word.pinyin && (
                                <span
                                  className={`text-[11px] leading-tight transition-colors ${
                                    isWordSelected ? "text-stone-900 font-bold" : "text-amber-400/80 group-hover:text-amber-300"
                                  }`}
                                >
                                  {word.pinyin}
                                </span>
                              )}
                              <span
                                className={`text-xl sm:text-2xl font-medium font-serif leading-none mt-0.5 ${
                                  isWordSelected ? "text-stone-950" : "text-stone-100"
                                }`}
                              >
                                {word.hanzi}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Sentence Vietnamese Translation */}
                      {showTranslation && (
                        <div className="mt-3 pt-3 border-t border-stone-800 text-sm text-stone-300 font-sans">
                          {sentence.vietnamese}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Tips */}
              <div className="mt-6 pt-6 border-t border-stone-800 text-xs text-stone-400 flex items-start gap-2">
                <span className="text-amber-400 font-bold text-sm">💡 Mẹo học:</span>
                <span>
                  Đọc qua toàn bộ bài một lần không bật dịch để luyện phản xạ ngữ cảnh. Sau đó bấm vào các từ mới để tra âm Hán Việt - việc liên hệ với từ vựng tiếng Việt giúp ghi nhớ từ vựng sâu hơn 300%.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
