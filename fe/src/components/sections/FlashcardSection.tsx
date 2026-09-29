"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VocabWord, HSKLevel } from "@/types";
import { speakChinese } from "@/utils/speech";
import { 
  Volume2, 
  RotateCw, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Shuffle, 
  Eye, 
  EyeOff,
  Sparkles
} from "lucide-react";

interface FlashcardSectionProps {
  words: VocabWord[];
  onWordMastered?: (wordId: string) => void;
}

export const FlashcardSection: React.FC<FlashcardSectionProps> = ({
  words,
  onWordMastered,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<HSKLevel | 0>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPinyinHint, setShowPinyinHint] = useState(true);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);

  // Filter words by selected level
  const filteredWords = selectedLevel === 0 
    ? words 
    : words.filter((w) => w.hskLevel === selectedLevel);

  const currentWord = filteredWords[currentIndex] || filteredWords[0];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredWords.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(filteredWords.length - 1);
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    setCurrentIndex(randomIndex);
  };

  const handleMarkMastered = () => {
    if (!currentWord) return;
    if (!masteredIds.includes(currentWord.id)) {
      setMasteredIds([...masteredIds, currentWord.id]);
      if (onWordMastered) onWordMastered(currentWord.id);
    }
    handleNext();
  };

  if (!currentWord) {
    return (
      <div className="text-center py-16 text-stone-400">
        Không có từ vựng phù hợp với cấp độ này.
      </div>
    );
  }

  const isCurrentMastered = masteredIds.includes(currentWord.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Level Selector Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            Thẻ Ghi Nhớ Flashcard
          </h2>
          <p className="text-xs text-stone-400 mt-0.5">
            Nhấn vào thẻ hoặc biểu tượng lật để xem giải nghĩa, âm Hán Việt và câu ví dụ
          </p>
        </div>

        {/* HSK Level Filter */}
        <div className="flex items-center space-x-1.5 bg-stone-900/90 p-1 rounded-xl border border-stone-800">
          <button
            onClick={() => { setSelectedLevel(0); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
              selectedLevel === 0 ? "bg-red-600 text-white shadow-sm" : "text-stone-400 hover:text-white"
            }`}
          >
            Tất cả
          </button>
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <button
              key={level}
              onClick={() => { setSelectedLevel(level as HSKLevel); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                selectedLevel === level
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              HSK {level}
            </button>
          ))}
        </div>
      </div>

      {/* Progress & Deck Status Bar */}
      <div className="flex items-center justify-between text-xs text-stone-400 mb-4 px-1">
        <div className="flex items-center gap-2">
          <span>Thẻ {currentIndex + 1} / {filteredWords.length}</span>
          {isCurrentMastered && (
            <span className="text-amber-400 flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Đã thuộc
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPinyinHint(!showPinyinHint)}
            className="flex items-center gap-1 hover:text-amber-300 transition-colors"
          >
            {showPinyinHint ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showPinyinHint ? "Ẩn Pinyin" : "Hiện Pinyin"}</span>
          </button>
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1 hover:text-amber-300 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Xáo trộn</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-stone-800 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / filteredWords.length) * 100}%` }}
        />
      </div>

      {/* 3D Flashcard Container */}
      <div className="relative min-h-[380px] perspective-[1200px] mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWord.id + (isFlipped ? "-back" : "-front")}
            initial={{ opacity: 0, rotateY: isFlipped ? -90 : 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: isFlipped ? 90 : -90 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full h-full min-h-[380px] rounded-3xl p-8 cursor-pointer select-none transition-all shadow-2xl relative overflow-hidden flex flex-col justify-between border ${
              isFlipped
                ? "bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 border-amber-600/30 text-white"
                : "bg-gradient-to-br from-stone-900 via-red-950/20 to-stone-900 border-stone-800 hover:border-red-600/40 text-stone-100"
            }`}
          >
            {/* Background Decorative Chinese Watermark */}
            <div className="absolute right-4 bottom-2 text-[140px] font-serif font-black opacity-[0.03] pointer-events-none select-none">
              {currentWord.hanzi}
            </div>

            {/* Card Header */}
            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-800/90 text-amber-300 border border-stone-700/60">
                HSK {currentWord.hskLevel} {currentWord.category ? `• ${currentWord.category}` : ""}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    speakChinese(currentWord.hanzi);
                  }}
                  className="p-2.5 rounded-full bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-white border border-red-500/30 transition-all hover:scale-110 active:scale-95"
                  title="Nghe phát âm bản xứ"
                >
                  <Volume2 className="w-5 h-5" />
                </button>

                <div className="p-2.5 rounded-full bg-stone-800/80 text-stone-400 hover:text-white border border-stone-700/60">
                  <RotateCw className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card Body */}
            {!isFlipped ? (
              /* FRONT SIDE */
              <div className="flex flex-col items-center justify-center my-auto py-6 z-10">
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-7xl sm:text-8xl font-black text-amber-100 font-serif tracking-wider mb-4 drop-shadow-md"
                >
                  {currentWord.hanzi}
                </motion.div>

                {showPinyinHint && (
                  <div className="text-xl sm:text-2xl font-medium text-amber-400/90 tracking-wide font-sans mb-2">
                    {currentWord.pinyin}
                  </div>
                )}

                <div className="text-xs text-stone-500 flex items-center gap-1 mt-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nhấn vào thẻ để lật xem giải nghĩa & âm Hán Việt</span>
                </div>
              </div>
            ) : (
              /* BACK SIDE */
              <div className="flex flex-col my-auto py-4 z-10">
                <div className="flex flex-wrap items-baseline gap-3 mb-4 border-b border-stone-800 pb-3">
                  <span className="text-4xl font-bold font-serif text-amber-300">
                    {currentWord.hanzi}
                  </span>
                  <span className="text-xl font-medium text-amber-400">
                    {currentWord.pinyin}
                  </span>
                  <span className="text-sm font-semibold px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/50">
                    Hán-Việt: {currentWord.hanViet}
                  </span>
                  {currentWord.radical && (
                    <span className="text-xs text-stone-400 ml-auto">
                      Bộ thủ: {currentWord.radical}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Nghĩa tiếng Việt</span>
                  <p className="text-xl font-bold text-white mt-1">
                    {currentWord.meaning}
                  </p>
                </div>

                {/* Example sentence */}
                {currentWord.examples && currentWord.examples.length > 0 && (
                  <div className="bg-stone-950/60 rounded-xl p-4 border border-stone-800/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-amber-400">Ví dụ câu:</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakChinese(currentWord.examples[0].hanzi);
                        }}
                        className="text-stone-400 hover:text-amber-300 transition-colors"
                        title="Nghe câu ví dụ"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-base text-stone-100 font-serif">
                      {currentWord.examples[0].hanzi}
                    </p>
                    <p className="text-xs text-amber-400/80 mt-0.5 font-sans">
                      {currentWord.examples[0].pinyin}
                    </p>
                    <p className="text-xs text-stone-400 mt-1 italic">
                      → {currentWord.examples[0].vietnamese}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Card Footer */}
            <div className="flex items-center justify-between text-xs text-stone-400 z-10 pt-3 border-t border-stone-800/60">
              <span>{isFlipped ? "Đang xem mặt sau" : "Đang xem mặt trước"}</span>
              <span className="text-amber-500 font-medium">Ấn phím Space để lật</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handlePrev}
          className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Trước</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleNext}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-300 hover:bg-stone-800 transition-all"
          >
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium">Cần ôn lại</span>
          </button>

          <button
            onClick={handleMarkMastered}
            className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-amber-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Đã thuộc từ này</span>
          </button>
        </div>

        <button
          onClick={handleNext}
          className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800 transition-all"
        >
          <span className="text-sm font-medium">Tiếp theo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
