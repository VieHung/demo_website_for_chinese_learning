"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  Flame,
  Award,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Medal,
  Zap,
  BookOpen,
  Target,
  Sparkles,
} from "lucide-react";
import { useUserProgress } from "@/context/UserProgressContext";

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  level: string;
  streak: number;
  score: number;
  masteredWords: number;
}

const MOCK_LEADERBOARD: LeaderboardUser[] = [
  {
    rank: 1,
    name: "Minh Anh (明英)",
    avatar: "🥇",
    level: "HSK 5",
    streak: 42,
    score: 1850,
    masteredWords: 480,
  },
  {
    rank: 2,
    name: "Quốc Bảo (宝儿)",
    avatar: "🥈",
    level: "HSK 4",
    streak: 28,
    score: 1420,
    masteredWords: 340,
  },
  {
    rank: 3,
    name: "Thùy Chi (芝芝)",
    avatar: "🥉",
    level: "HSK 3",
    streak: 19,
    score: 1120,
    masteredWords: 260,
  },
  {
    rank: 4,
    name: "Hoàng Long (龙飞)",
    avatar: "⭐",
    level: "HSK 3",
    streak: 14,
    score: 890,
    masteredWords: 190,
  },
  {
    rank: 5,
    name: "Bạn",
    avatar: "🎯",
    level: "HSK 2",
    streak: 3,
    score: 180,
    masteredWords: 12,
  },
  {
    rank: 6,
    name: "Phương Linh (玲玲)",
    avatar: "⭐",
    level: "HSK 1",
    streak: 5,
    score: 160,
    masteredWords: 18,
  },
];

export default function BangVangPage() {
  const { streakCount, masteredIds, totalScore, quizzesCompleted } = useUserProgress();
  const [filterPeriod, setFilterPeriod] = useState<"week" | "month" | "all">("week");

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Trang chủ</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-amber-300 font-medium">Bảng Vàng Danh Dự & Thành Tích</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-950/70 via-stone-900 to-red-950/60 border border-amber-800/40 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bảng Vàng Thi Đua & Hồ Sơ Thành Tích
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Cùng cộng đồng học viên SinnoChinese thi đua mỗi ngày. Tích lũy điểm số qua Flashcards 3D, hoàn thành bài kiểm tra trắc nghiệm HSK và duy trì chuỗi học tập liên tục.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/trac-nghiem"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-bold text-sm shadow-xl shadow-amber-950/50 transition-all hover:scale-105"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Thi đấu tích điểm ngay</span>
            </Link>
          </div>
        </div>
      </div>

      {/* User Overview Dashboard Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-orange-950/70 border border-orange-600/50 flex items-center justify-center text-orange-400">
            <Flame className="w-6 h-6 fill-orange-500 text-orange-500 animate-pulse" />
          </div>
          <div>
            <div className="text-xs text-stone-400 font-medium">Chuỗi ngày học</div>
            <div className="text-2xl font-black text-orange-400">{streakCount} ngày</div>
            <div className="text-[11px] text-stone-500">Duy trì đều đặn</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-amber-950/70 border border-amber-600/50 flex items-center justify-center text-amber-400">
            <Trophy className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <div className="text-xs text-stone-400 font-medium">Tổng điểm tích lũy</div>
            <div className="text-2xl font-black text-amber-300">{totalScore} đ</div>
            <div className="text-[11px] text-stone-500">Xếp hạng 5 tuần này</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-amber-950/70 border border-amber-600/50 flex items-center justify-center text-amber-400">
            <CheckCircle2 className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <div className="text-xs text-stone-400 font-medium">Từ vựng đã nắm</div>
            <div className="text-2xl font-black text-amber-300">{masteredIds.length} từ</div>
            <div className="text-[11px] text-stone-500">Đã ghi nhớ sâu</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-red-950/70 border border-red-600/50 flex items-center justify-center text-red-400">
            <Award className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <div className="text-xs text-stone-400 font-medium">Bài thi đã làm</div>
            <div className="text-2xl font-black text-red-400">{quizzesCompleted} bài</div>
            <div className="text-[11px] text-stone-500">Tỷ lệ đúng cao</div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Section: Leaderboard + Rules & Point System */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Bảng Vàng Xếp Hạng (2 spans) */}
        <div className="lg:col-span-2 bg-stone-900/80 border border-stone-800 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Medal className="w-5 h-5 text-amber-400" />
                <span>Bảng Vàng Thi Đua Tuần</span>
              </h2>
              <p className="text-xs text-stone-400 mt-1">
                Tự động tính theo tổng điểm trắc nghiệm và chuỗi ngày học tập
              </p>
            </div>

            <div className="flex items-center space-x-1 bg-stone-950 p-1 rounded-xl border border-stone-800 self-start sm:self-auto">
              <button
                onClick={() => setFilterPeriod("week")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterPeriod === "week"
                    ? "bg-amber-500 text-stone-950 shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                Tuần này
              </button>
              <button
                onClick={() => setFilterPeriod("month")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterPeriod === "month"
                    ? "bg-amber-500 text-stone-950 shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                Tháng này
              </button>
              <button
                onClick={() => setFilterPeriod("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterPeriod === "all"
                    ? "bg-amber-500 text-stone-950 shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                Tất cả
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 text-xs uppercase tracking-wider">
                  <th className="py-3 px-3">Hạng</th>
                  <th className="py-3 px-4">Học viên</th>
                  <th className="py-3 px-3 text-center">Trình độ</th>
                  <th className="py-3 px-3 text-center">Chuỗi</th>
                  <th className="py-3 px-4 text-right">Điểm số</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-medium">
                {MOCK_LEADERBOARD.map((user) => {
                  const isCurrentUser = user.rank === 5;
                  const displayScore = isCurrentUser ? totalScore : user.score;
                  const displayStreak = isCurrentUser ? streakCount : user.streak;

                  return (
                    <tr
                      key={user.rank}
                      className={`transition-colors ${
                        isCurrentUser
                          ? "bg-amber-950/30 border-l-4 border-l-amber-500 text-white font-bold"
                          : "hover:bg-stone-800/40 text-stone-300"
                      }`}
                    >
                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-black">
                          {user.rank === 1 && <span className="text-amber-400 text-base">🥇</span>}
                          {user.rank === 2 && <span className="text-stone-300 text-base">🥈</span>}
                          {user.rank === 3 && <span className="text-amber-600 text-base">🥉</span>}
                          {user.rank > 3 && (
                            <span className="text-stone-400 font-semibold">{user.rank}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{user.avatar}</span>
                          <div>
                            <div className="font-semibold flex items-center gap-1.5">
                              <span>{user.name}</span>
                              {isCurrentUser && (
                                <span className="text-xs text-amber-400 font-semibold">
                                  (Tài khoản của bạn)
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-stone-500 font-normal">
                              {user.masteredWords} từ thuộc
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <span className="text-xs text-stone-300 font-medium">
                          {user.level}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 text-xs text-orange-400 font-bold">
                          <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                          {displayStreak}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <span className="font-black text-amber-300 text-base">
                          {displayScore} đ
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Thể Lệ & Cách Tích Lũy Điểm */}
        <div className="space-y-6">
          <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Cơ Chế Tính Điểm Thi Đua</span>
            </h3>
            <p className="text-xs text-stone-400 mb-5 leading-relaxed">
              Tích lũy điểm số hàng ngày thông qua các hoạt động học tập trên SinnoChinese để nâng cao thứ hạng:
            </p>

            <div className="space-y-4 text-xs text-stone-300">
              <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800">
                <div className="font-bold text-amber-300 text-sm mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>Hoàn thành bài trắc nghiệm HSK</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Mỗi câu trả lời đúng được cộng 10 điểm. Vượt qua bài kiểm tra với điểm số trên 80% được cộng thêm điểm thưởng.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800">
                <div className="font-bold text-orange-400 text-sm mb-1 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span>Làm chủ từ vựng Flashcard</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Đánh dấu thuộc một từ mới sau các lượt lật thẻ nhận 5 điểm tích lũy vào tài khoản.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800">
                <div className="font-bold text-orange-400 text-sm mb-1 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                  <span>Duy trì chuỗi ngày học</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Học tập liên tục mỗi ngày giúp duy trì chuỗi học và nhận thưởng điểm chuỗi sau mỗi 7 ngày bền bỉ.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800">
              <Link
                href="/trac-nghiem"
                className="w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Bắt đầu làm bài thi tích điểm</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
