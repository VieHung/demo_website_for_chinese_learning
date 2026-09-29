"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Trophy, Sparkles } from "lucide-react";

interface SlideData {
  image: string;
  badge: string;
  hanzi: string;
  pinyin: string;
  translation: string;
  authorNote?: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    image: "/images/hero/slide1.jpg",
    badge: "华语通 • HSK 1 - 6 全阶通关",
    hanzi: "书山有路勤为径，学海无涯苦作舟",
    pinyin: "Shū shān yǒu lù qín wéi jìng, xué hǎi wú yá kǔ zuò zhōu",
    translation: "Núi sách có đường, siêng năng là lối — Biển học vô bờ, bền bỉ làm thuyền",
    authorNote: "Cổ huấn khuyến học",
    description:
      "Hệ thống flashcard 3D thông minh, tích hợp âm Hán Việt độc quyền và phát âm chuẩn Bắc Kinh giúp bạn làm chủ từ vựng HSK 1 đến HSK 6 vững chắc.",
    primaryBtnText: "Luyện Flashcard 3D",
    secondaryBtnText: "Khám phá từ vựng HSK",
  },
  {
    image: "/images/hero/slide2.jpg",
    badge: "循序渐进 • 循理而行",
    hanzi: "温故而知新，可以为师矣",
    pinyin: "Wēn gù ér zhī xīn, kě yǐ wéi shī yǐ",
    translation: "Ôn lại điều cũ để thấu hiểu điều mới, ắt có thể làm thầy",
    authorNote: "Khổng Tử • 《论语·为政》",
    description:
      "Ứng dụng thuật toán lặp lại ngắt quãng (Spaced Repetition System) cá nhân hóa lộ trình, ôn đúng từ lúc sắp quên, tăng hiệu suất ghi nhớ gấp 3 lần.",
    primaryBtnText: "Bắt đầu ôn tập",
    secondaryBtnText: "Luyện ngữ âm & Pinyin",
  },
  {
    image: "/images/hero/slide3.jpg",
    badge: "决胜巅峰 • 破浪前行",
    hanzi: "长风破浪会有时，直挂云帆济沧海",
    pinyin: "Cháng fēng pò làng huì yǒu shí, zhí guà yún fān jì cāng hǎi",
    translation: "Sẽ có ngày cưỡi gió rẽ sóng, giương buồm mây vượt biển lớn",
    authorNote: "Thi tiên Lý Bạch • 《行路难》",
    description:
      "Thử thách phản xạ với kho đề trắc nghiệm HSK đa dạng: nhận diện mặt chữ Hán, điền từ ngữ cảnh, nghe hiểu và phân tích cấu trúc bộ thủ.",
    primaryBtnText: "Làm trắc nghiệm HSK",
    secondaryBtnText: "Tra cứu kho từ vựng",
  },
];

interface HeroBannerProps {
  onStartFlashcard: () => void;
  onStartQuiz: () => void;
  onExploreVocab: () => void;
  onPracticePinyin: () => void;
  streakCount: number;
  totalWords: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartFlashcard,
  onStartQuiz,
  onExploreVocab,
  onPracticePinyin,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    startAutoplay();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 7000);
  }, [nextSlide]);

  useEffect(() => {
    if (isLoaded) {
      startAutoplay();
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isLoaded, startAutoplay]);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <section className="relative w-full h-screen min-h-[680px] max-h-[1080px] overflow-hidden bg-stone-950 select-none">
      {/* Slide background layers with crossfade and Ken Burns zoom effect */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background image container */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Gradient Overlays for high readability and premium aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/40 to-transparent" />
          </div>
        );
      })}

      {/* Main Content Layout */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-4xl py-12">

          {/* Majestic Chinese Typography */}
          <div className="mb-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-100 font-serif tracking-wide leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {currentSlide.hanzi}
            </h1>
          </div>

          {/* Pinyin with tone markers */}
          <div className="text-base sm:text-xl font-medium text-amber-400/95 tracking-wider font-sans mb-4 drop-shadow-md">
            {currentSlide.pinyin}
          </div>

          {/* Vietnamese Translation Banner */}
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-stone-900/80 border border-amber-500/30 backdrop-blur-md mb-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300/80">
                Bản dịch tiếng Việt
              </span>
              {currentSlide.authorNote && (
                <span className="text-[11px] text-stone-400 font-medium ml-auto">
                  ({currentSlide.authorNote})
                </span>
              )}
            </div>
            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              “{currentSlide.translation}”
            </p>
          </div>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mb-8 leading-relaxed drop-shadow">
            {currentSlide.description}
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                if (activeIndex === 0) onStartFlashcard();
                else if (activeIndex === 1) onStartFlashcard();
                else onStartQuiz();
              }}
              className="flex items-center space-x-2 px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm shadow-2xl shadow-red-950/70 border border-red-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{currentSlide.primaryBtnText}</span>
            </button>

            <button
              onClick={() => {
                if (activeIndex === 0) onExploreVocab();
                else if (activeIndex === 1) onPracticePinyin();
                else onExploreVocab();
              }}
              className="flex items-center space-x-2 px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700/80 backdrop-blur-md font-semibold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>{currentSlide.secondaryBtnText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-stone-900/60 hover:bg-red-600/80 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        aria-label="Slide trước"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-stone-900/60 hover:bg-red-600/80 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        aria-label="Slide sau"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators: Dots and Counter */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dots */}
        <div className="flex items-center space-x-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-8 bg-gradient-to-r from-red-500 to-amber-400 shadow-md shadow-red-900/50"
                  : "w-2 bg-stone-600/80 hover:bg-stone-400"
              }`}
              aria-label={`Đi tới slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="px-3 py-1 rounded-full bg-stone-900/80 border border-stone-800 text-stone-400 text-xs font-mono backdrop-blur-md">
          <span className="text-amber-300 font-bold">0{activeIndex + 1}</span> / 0{HERO_SLIDES.length}
        </div>
      </div>
    </section>
  );
};
