"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Trophy,
  ChevronDown,
} from "lucide-react";

interface SlideData {
  image: string;
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
  onStartFlashcard?: () => void;
  onStartQuiz?: () => void;
  onExploreVocab?: () => void;
  onPracticePinyin?: () => void;
  streakCount?: number;
  totalWords?: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartFlashcard,
  onStartQuiz,
  onExploreVocab,
  onPracticePinyin,
}) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Mobile Touch Swipe Handling
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const minSwipeDistance = 45;

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

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndXRef.current = null;
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > minSwipeDistance) {
      // Swiped Left -> Next Slide
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev Slide
      prevSlide();
    }
  };

  const currentSlide = HERO_SLIDES[activeIndex];

  const handlePrimaryClick = () => {
    if (activeIndex === 0) {
      onStartFlashcard ? onStartFlashcard() : router.push("/flashcards");
    } else if (activeIndex === 1) {
      onStartFlashcard ? onStartFlashcard() : router.push("/flashcards");
    } else {
      onStartQuiz ? onStartQuiz() : router.push("/trac-nghiem");
    }
  };

  const handleSecondaryClick = () => {
    if (activeIndex === 0) {
      onExploreVocab ? onExploreVocab() : router.push("/tu-vung");
    } else if (activeIndex === 1) {
      onPracticePinyin ? onPracticePinyin() : router.push("/pinyin");
    } else {
      onExploreVocab ? onExploreVocab() : router.push("/tu-vung");
    }
  };

  const scrollToContent = () => {
    const el = document.getElementById("portal-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-[calc(100dvh-64px)] md:h-[calc(100dvh-105px)] min-h-[520px] max-h-[1440px] overflow-hidden bg-stone-950 select-none flex flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
            {/* Background image container with cover & dynamic aspect ratio handling */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Gradient Overlays tailored for ultra-wides, laptops and mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 sm:via-stone-950/60 to-stone-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/60 sm:via-stone-950/40 to-transparent" />
          </div>
        );
      })}

      {/* Main Content Layout (Vertically centered, responsive padding) */}
      <div className="relative z-20 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center py-4 sm:py-8">
        <div className="max-w-4xl">
          {/* Majestic Chinese Typography (Adaptive for 360px mobile up to 4K displays) */}
          <div className="mb-2 sm:mb-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-amber-100 font-serif tracking-wide leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              {currentSlide.hanzi}
            </h1>
          </div>

          {/* Pinyin with tone markers */}
          <div className="text-xs sm:text-base md:text-lg lg:text-xl font-medium text-amber-400/95 tracking-wide font-sans mb-3 sm:mb-5 drop-shadow-md">
            {currentSlide.pinyin}
          </div>

          {/* Vietnamese Translation Card (Ergonomic padding on mobile) */}
          <div className="inline-block p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-stone-900/85 border border-amber-500/30 backdrop-blur-md mb-3 sm:mb-6 shadow-2xl max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-300/90">
                Bản dịch tiếng Việt
              </span>
              {currentSlide.authorNote && (
                <span className="text-[10px] sm:text-[11px] text-stone-400 font-medium ml-auto">
                  ({currentSlide.authorNote})
                </span>
              )}
            </div>
            <p className="text-xs sm:text-base md:text-lg font-bold text-white leading-relaxed">
              “{currentSlide.translation}”
            </p>
          </div>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm md:text-base text-stone-300 max-w-2xl mb-5 sm:mb-8 leading-relaxed drop-shadow line-clamp-2 sm:line-clamp-none">
            {currentSlide.description}
          </p>

          {/* Interactive CTAs: Responsive 2-column grid on mobile, row on desktop */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:items-center sm:gap-4 w-full sm:w-auto">
            <button
              onClick={handlePrimaryClick}
              className="flex items-center justify-center space-x-1.5 sm:space-x-2 py-3 px-3 sm:py-3.5 sm:px-7 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-red-950/70 border border-red-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span className="truncate">{currentSlide.primaryBtnText}</span>
            </button>

            <button
              onClick={handleSecondaryClick}
              className="flex items-center justify-center space-x-1.5 sm:space-x-2 py-3 px-3 sm:py-3.5 sm:px-6 rounded-xl bg-stone-900/85 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700/80 backdrop-blur-md font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg text-center"
            >
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span className="truncate">{currentSlide.secondaryBtnText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Controls: Side Arrows (Hidden on mobile to prevent obstruction) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-stone-900/70 hover:bg-red-600/80 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
        aria-label="Slide trước"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-stone-900/70 hover:bg-red-600/80 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
        aria-label="Slide sau"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Control Bar: Slide indicators, Scroll-down prompt & Counter */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-5">
        <div className="flex items-center justify-between border-t border-stone-800/60 pt-3">
          {/* Dots Indicator & Mobile Mini chevrons */}
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-6 sm:w-8 bg-gradient-to-r from-red-500 to-amber-400 shadow-md shadow-red-900/50"
                    : "w-1.5 sm:w-2 bg-stone-600/80 hover:bg-stone-400"
                }`}
                aria-label={`Đi tới slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Scroll Down Cue (Clickable to jump to content below) */}
          <button
            onClick={scrollToContent}
            className="flex items-center space-x-1.5 text-[11px] sm:text-xs text-stone-400 hover:text-amber-300 transition-colors group cursor-pointer"
            title="Cuộn xuống xem nội dung"
          >
            <span className="hidden sm:inline">Khám phá nội dung</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-amber-400 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Slide Counter */}
          <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stone-900/80 border border-stone-800 text-stone-400 text-[10px] sm:text-xs font-mono backdrop-blur-md">
            <span className="text-amber-300 font-bold">0{activeIndex + 1}</span> / 0{HERO_SLIDES.length}
          </div>
        </div>
      </div>
    </section>
  );
};
