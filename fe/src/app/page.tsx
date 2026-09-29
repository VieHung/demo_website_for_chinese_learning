"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  BookOpen,
  Trophy,
  Volume2,
  Flame,
  ArrowRight,
  Calendar,
  Zap,
  GraduationCap,
  FileText,
  Sparkles,
} from "lucide-react";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { INITIAL_VOCAB_LIST } from "@/data/chineseData";
import { useUserProgress } from "@/context/UserProgressContext";
import { speakChinese } from "@/utils/speech";

export default function Home() {
  const { streakCount, masteredIds, totalScore, quizzesCompleted } = useUserProgress();

  // Word of the day
  const todayWord = INITIAL_VOCAB_LIST[0] || {
    hanzi: "你好",
    pinyin: "nǐ hảo",
    hanViet: "Nhĩ Hảo",
    meaning: "Xin chào",
    examples: [
      {
        hanzi: "你好，很高兴认识你！",
        pinyin: "Nǐ hǎo, hěn gāoxìng rènshì nǐ!",
        vietnamese: "Xin chào, rất vui được làm quen với bạn!",
      },
    ],
  };

  const portalChannels = [
    {
      id: "bai-hoc",
      href: "/bai-hoc",
      title: "Chương Trình Bài Học HSK 1 - 6",
      subtitle: "Hội thoại, Nghe, Từ mới & Ngữ pháp Unit",
      description:
        "Lộ trình bài giảng chuẩn hóa theo từng Unit với hội thoại tương tác phát âm bản xứ, bảng từ vựng Hán-Việt và bài tập củng cố sau mỗi bài học.",
      icon: GraduationCap,
      accentGradient: "from-amber-600 via-orange-600 to-red-600",
      borderHover: "hover:border-amber-500/60",
      statsText: "Đầy đủ 6 Cấp độ HSK tiêu chuẩn",
      ctaText: "Vào học bài ngay",
    },
    {
      id: "doc-song-ngu",
      href: "/doc-song-ngu",
      title: "Đọc Báo Song Ngữ Tương Tác",
      subtitle: "Tra cứu Pinyin, Hán Việt và ngữ nghĩa tại chỗ",
      description:
        "Kho bài đọc văn hóa, đời sống kèm công cụ tra từ tức thì khi nhấp chuột, ẩn/hiện Pinyin và audio đọc toàn văn câu chuyện.",
      icon: FileText,
      accentGradient: "from-amber-600 via-orange-500 to-yellow-500",
      borderHover: "hover:border-amber-500/60",
      statsText: "Tích hợp tra cứu từ vựng 1-chạm",
      ctaText: "Khám phá bài đọc",
    },
    {
      id: "ngu-phap",
      href: "/ngu-phap",
      title: "Sổ Tay Ngữ Pháp Hệ Thống",
      subtitle: "Công thức câu, lưu ý thực chiến & câu ví dụ",
      description:
        "Tra cứu nhanh các cấu trúc trọng điểm (câu chữ 把, 比, 被, trợ từ 了/着/过...) kèm ví dụ song ngữ và giải thích chi tiết.",
      icon: Sparkles,
      accentGradient: "from-red-600 via-orange-600 to-amber-600",
      borderHover: "hover:border-red-500/60",
      statsText: "Đầy đủ cấu trúc then chốt HSK 1-6",
      ctaText: "Tra cứu ngữ pháp",
    },
    {
      id: "flashcard",
      href: "/flashcards",
      title: "Phòng Luyện Flashcards 3D",
      subtitle: "Ghi nhớ từ vựng qua lật thẻ tương tác",
      description:
        "Công nghệ lật thẻ 3D 360°, kết hợp âm Hán-Việt tương đồng và thuật toán nhắc từ đúng thời điểm sắp quên, giúp thuộc từ vựng lâu dài.",
      icon: Layers,
      accentGradient: "from-red-600 via-rose-600 to-amber-600",
      borderHover: "hover:border-red-500/60",
      statsText: `${masteredIds.length} / ${INITIAL_VOCAB_LIST.length} từ đã làm chủ`,
      ctaText: "Vào phòng Flashcard",
    },
    {
      id: "tu-vung",
      href: "/tu-vung",
      title: "Thư Viện Từ Vựng HSK",
      subtitle: "Bách khoa toàn thư từ vựng HSK 1 - 6",
      description:
        "Tra cứu chi tiết từng Hán tự, Pinyin chuẩn thanh điệu, phân tích bộ thủ, số nét bút và câu ví dụ hội thoại ứng dụng đời sống.",
      icon: BookOpen,
      accentGradient: "from-amber-600 via-yellow-600 to-orange-600",
      borderHover: "hover:border-amber-500/60",
      statsText: `${INITIAL_VOCAB_LIST.length}+ từ vựng chuẩn HSK`,
      ctaText: "Tra cứu từ vựng",
    },
    {
      id: "trac-nghiem",
      href: "/trac-nghiem",
      title: "Đấu Trường & Luyện Thi HSK",
      subtitle: "Trắc nghiệm phản xạ, bấm giờ thi thử",
      description:
        "Rèn luyện kỹ năng nhận diện mặt chữ Hán, điền từ ngữ cảnh, nghe hiểu và làm đề thi thử HSK với hệ thống tính điểm chuẩn xác.",
      icon: Trophy,
      accentGradient: "from-yellow-600 via-amber-600 to-orange-600",
      borderHover: "hover:border-amber-500/60",
      statsText: `${quizzesCompleted} bài thi hoàn thành • ${totalScore} điểm`,
      ctaText: "Làm bài trắc nghiệm",
    },
    {
      id: "pinyin",
      href: "/pinyin",
      title: "Trung Tâm Ngữ Âm Pinyin",
      subtitle: "Bảng ma trận phát âm chuẩn Bắc Kinh",
      description:
        "Ma trận âm thanh tương tác: 21 thanh mẫu, 36 vận mẫu, kỹ thuật làm chủ 4 thanh điệu và quy tắc biến điệu thanh nhẹ trong giao tiếp.",
      icon: Volume2,
      accentGradient: "from-red-700 via-red-600 to-orange-600",
      borderHover: "hover:border-orange-500/60",
      statsText: "Đầy đủ 21 Thanh mẫu & 36 Vận mẫu",
      ctaText: "Luyện phát âm ngay",
    },
  ];

  const hskRoadmap = [
    { level: "HSK 1", target: "150 từ", hours: "40 giờ", progress: 65, color: "from-amber-500 to-yellow-500" },
    { level: "HSK 2", target: "300 từ", hours: "80 giờ", progress: 40, color: "from-amber-600 to-orange-500" },
    { level: "HSK 3", target: "600 từ", hours: "150 giờ", progress: 15, color: "from-orange-500 to-red-500" },
    { level: "HSK 4", target: "1200 từ", hours: "300 giờ", progress: 8, color: "from-orange-600 to-red-600" },
    { level: "HSK 5", target: "2500 từ", hours: "600 giờ", progress: 3, color: "from-red-600 to-rose-600" },
    { level: "HSK 6", target: "5000+ từ", hours: "900+ giờ", progress: 1, color: "from-red-700 to-amber-600" },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* 1. HERO BANNER SLIDER TƯƠNG TÁC */}
      <HeroBanner
        streakCount={streakCount}
        totalWords={INITIAL_VOCAB_LIST.length}
      />

      <div id="portal-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-12">
        {/* 2. KHU VỰC THÔNG TIN NHANH & NHIỆM VỤ HÀNG NGÀY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cột Trái: Từ Vựng Nổi Bật Mỗi Ngày */}
          <div className="lg:col-span-2 bg-gradient-to-br from-stone-900 via-red-950/30 to-stone-900 border border-red-800/40 rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
                  Từ Vựng Mỗi Ngày • 每日一词
                </span>
              </div>
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Hôm nay
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-600/30 to-amber-600/30 border border-red-500/40 flex items-center justify-center shadow-inner">
                  <span className="text-4xl font-serif font-black text-amber-200">
                    {todayWord.hanzi}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-white tracking-wide">
                      {todayWord.pinyin}
                    </span>
                    <button
                      onClick={() => speakChinese(todayWord.hanzi)}
                      className="p-1.5 rounded-full bg-stone-800 hover:bg-red-600 text-stone-300 hover:text-white transition-all shadow-sm cursor-pointer"
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">
                    Âm Hán Việt: {todayWord.hanViet}
                  </div>
                  <div className="text-sm font-medium text-stone-200 mt-1">
                    Ý nghĩa: <span className="text-amber-400 font-semibold">{todayWord.meaning}</span>
                  </div>
                </div>
              </div>

              <div className="sm:text-right">
                <Link
                  href="/flashcards"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold text-xs sm:text-sm hover:from-red-500 hover:to-amber-500 shadow-md shadow-red-950/60 transition-transform hover:scale-105"
                >
                  <Layers className="w-4 h-4" />
                  <span>Học qua Flashcard</span>
                </Link>
              </div>
            </div>

            {todayWord.examples && todayWord.examples.length > 0 && (
              <div className="mt-4 pt-4 border-t border-stone-800/80 bg-stone-950/50 p-3 rounded-xl border border-stone-800/40">
                <div className="text-xs text-stone-400 mb-1">Ví dụ câu thực tế:</div>
                <div className="text-sm text-stone-200 font-medium font-serif">
                  {todayWord.examples[0].hanzi}
                </div>
                <div className="text-xs text-stone-400 italic">
                  {todayWord.examples[0].pinyin}
                </div>
                <div className="text-xs text-stone-300 mt-0.5">
                  → {todayWord.examples[0].vietnamese}
                </div>
              </div>
            )}
          </div>

          {/* Cột Phải: Thử Thách Hôm Nay */}
          <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Nhiệm Vụ Hôm Nay</span>
                </h3>
                <span className="text-xs text-orange-400 font-bold flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-orange-500" />
                  Chuỗi {streakCount} ngày
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-center justify-between">
                  <div className="text-xs font-semibold text-stone-200">Luyện 5 thẻ Flashcard</div>
                  <span className="text-xs text-amber-400 font-bold">+20 điểm</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-center justify-between">
                  <div className="text-xs font-semibold text-stone-300">Làm 1 bài trắc nghiệm HSK</div>
                  <Link
                    href="/trac-nghiem"
                    className="text-xs text-amber-300 hover:text-white font-medium"
                  >
                    Bắt đầu →
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
              <span className="text-stone-400">Xem thứ hạng của bạn:</span>
              <Link
                href="/bang-vang"
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Bảng vàng</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. LỐI VÀO CÁC PHÒNG HỌC & CÔNG CỤ CHUYÊN BIỆT */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Hệ Thống Phòng Học & Công Cụ Toàn Diện
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Tích hợp đầy đủ chương trình bài giảng chuẩn HSK, báo song ngữ tương tác tra từ 1-chạm, sổ tay ngữ pháp, flashcard 3D và luyện thi trắc nghiệm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.id}
                  className={`bg-stone-900/80 border border-stone-800 ${channel.borderHover} rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.accentGradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium mt-0.5">
                      {channel.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-xs text-stone-400 font-medium">
                      {channel.statsText}
                    </span>
                    <Link
                      href={channel.href}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs transition-all group-hover:bg-red-700 shadow-md"
                    >
                      <span>{channel.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. LỘ TRÌNH CẤP ĐỘ HSK */}
        <div className="bg-stone-900/60 border border-stone-800/80 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Lộ Trình Cấp Độ HSK Chuẩn Quốc Tế</span>
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">
                Đo lường tiến độ ôn tập từ HSK 1 đến HSK 6
              </p>
            </div>
            <Link
              href="/tu-vung"
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Xem chi tiết từ vựng theo cấp độ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {hskRoadmap.map((item) => (
              <div
                key={item.level}
                className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 hover:border-stone-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-base">{item.level}</span>
                  <span className="text-xs font-semibold text-amber-400">{item.progress}% hoàn thành</span>
                </div>
                <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-stone-400">
                  <span>Mục tiêu: {item.target}</span>
                  <span>Ước tính: {item.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. GỢI Ý THAM GIA BẢNG VÀNG THI ĐUA */}
        <div className="bg-gradient-to-r from-red-950/40 via-stone-900 to-amber-950/40 border border-amber-700/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-2xl shrink-0">
              🏆
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Bảng Vàng Thi Đua & Tích Lũy Thành Tích
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
                Bạn đang đạt chuỗi học {streakCount} ngày và tích lũy {totalScore} điểm. Cùng thi đua với các học viên khác trên SinnoChinese!
              </p>
            </div>
          </div>
          <Link
            href="/bang-vang"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-amber-950/50 transition-transform hover:scale-105 whitespace-nowrap shrink-0"
          >
            Xem Bảng Vàng Danh Dự
          </Link>
        </div>
      </div>
    </div>
  );
}
