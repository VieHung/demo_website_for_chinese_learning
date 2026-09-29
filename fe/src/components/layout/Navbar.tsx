"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  Volume2,
  Trophy,
  Flame,
  Layers,
  Search,
  Home,
  CheckCircle2,
  Menu,
  X,
  Compass,
  GraduationCap,
  FileText,
} from "lucide-react";
import { useUserProgress } from "@/context/UserProgressContext";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { streakCount, masteredIds, totalScore } = useUserProgress();
  const [searchInput, setSearchInput] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Trang chủ", icon: Home },
    { href: "/bai-hoc", label: "Bài học HSK", icon: GraduationCap },
    { href: "/doc-song-ngu", label: "Đọc song ngữ", icon: FileText },
    { href: "/ngu-phap", label: "Ngữ pháp", icon: BookOpen },
    { href: "/flashcards", label: "Flashcards 3D", icon: Layers },
    { href: "/tu-vung", label: "Từ vựng HSK", icon: BookOpen },
    { href: "/trac-nghiem", label: "Luyện trắc nghiệm", icon: Trophy },
    { href: "/pinyin", label: "Ngữ âm & Pinyin", icon: Volume2 },
    { href: "/bang-vang", label: "Bảng vàng", icon: Compass },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/tu-vung?q=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput("");
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-stone-800 shadow-xl transition-all">
      {/* TẦNG 1: Tiện ích, Logo, Tìm kiếm & Thông tin tiến độ người học */}
      <div className="border-b border-stone-800/80 bg-stone-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo Brand SinnoChinese */}
            <Link
              href="/"
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-amber-600 flex items-center justify-center shadow-lg shadow-red-900/40 font-bold text-white text-xl border border-red-400/40 group-hover:scale-105 transition-transform duration-300">
                华
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-red-400 via-amber-200 to-amber-400 bg-clip-text text-transparent block">
                  SinnoChinese
                </span>
                <p className="text-[11px] text-stone-400 hidden sm:block">
                  Nền tảng học & luyện thi tiếng Trung trực tuyến
                </p>
              </div>
            </Link>

            {/* Quick Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex flex-1 max-w-md mx-4 relative"
            >
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Tra từ vựng Hán tự, Pinyin, Hán Việt..."
                className="w-full bg-stone-950/90 text-sm text-stone-200 placeholder-stone-500 pl-10 pr-16 py-2 rounded-full border border-stone-700/80 focus:outline-none focus:border-amber-500/80 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-red-700 to-amber-700 text-white rounded-full text-xs font-semibold hover:from-red-600 hover:to-amber-600 transition-colors shadow-sm"
              >
                Tra cứu
              </button>
            </form>

            {/* User Indicators */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Streak */}
              <div 
                title="Chuỗi ngày học liên tục"
                className="flex items-center space-x-1.5 bg-stone-800/90 px-3 py-1.5 rounded-full border border-orange-500/30 shadow-sm"
              >
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
                <span className="text-xs font-bold text-orange-400">{streakCount} ngày</span>
              </div>

              {/* Mastered Words Count */}
              <Link
                href="/flashcards"
                title="Số từ vựng đã nắm vững"
                className="hidden lg:flex items-center space-x-1.5 bg-orange-950/40 border border-orange-700/40 px-3 py-1.5 rounded-full text-xs font-semibold text-orange-400 hover:bg-orange-900/40 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                <span>{masteredIds.length} từ thuộc</span>
              </Link>

              {/* Điểm tích lũy */}
              <Link
                href="/bang-vang"
                title="Điểm tích lũy thi trắc nghiệm"
                className="hidden sm:flex items-center space-x-1.5 bg-amber-950/40 border border-amber-600/40 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-300 hover:bg-amber-900/40 transition-colors"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>{totalScore} đ</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
                aria-label="Mở danh mục điều hướng"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TẦNG 2: Thanh Menu Chuyên Mục Học Tập */}
      <div className="bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex items-center space-x-1 py-1.5 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative whitespace-nowrap ${
                    isActive
                      ? "bg-red-950/80 text-amber-300 border border-red-700/60 shadow-inner font-semibold"
                      : "text-stone-300 hover:text-white hover:bg-stone-900/80"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-amber-400" : "text-stone-400"
                    }`}
                  />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-red-500 via-amber-400 to-red-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-950 px-4 py-3 space-y-2">
          {/* Mobile search */}
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Tra từ vựng, Pinyin..."
              className="w-full bg-stone-900 text-sm text-stone-200 pl-9 pr-4 py-2 rounded-lg border border-stone-700 focus:outline-none focus:border-amber-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? "bg-red-950/70 text-amber-300 border border-red-700/50"
                    : "text-stone-300 hover:bg-stone-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-stone-400"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
