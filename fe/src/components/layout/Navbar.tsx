"use client";

import React from "react";
import { BookOpen, Sparkles, Volume2, Trophy, Flame, Layers } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  streakCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  streakCount,
}) => {
  const navItems = [
    { id: "flashcard", label: "Flashcards", icon: Layers },
    { id: "vocab", label: "Từ vựng HSK", icon: BookOpen },
    { id: "quiz", label: "Luyện trắc nghiệm", icon: Trophy },
    { id: "pinyin", label: "Ngữ âm & Phát âm", icon: Volume2 },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-900/80 border-b border-stone-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab("flashcard")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center shadow-lg shadow-red-900/30 font-bold text-white text-lg border border-red-400/30 group-hover:scale-105 transition-transform">
              华
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-red-400 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                  HuaYu Hub
                </span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-red-900/40 text-red-300 border border-red-700/50">
                  HSK
                </span>
              </div>
              <p className="text-xs text-stone-400 font-medium">Ôn tập tiếng Trung thông minh</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-red-950/60 text-amber-300 border border-red-700/50 shadow-inner"
                      : "text-stone-300 hover:text-white hover:bg-stone-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-stone-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Progress Badges */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 bg-stone-800/80 px-3 py-1.5 rounded-full border border-stone-700/70 shadow-sm">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span className="text-xs font-bold text-orange-400">{streakCount} ngày chuỗi</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-medium text-amber-300">HSK 1 - 6</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-stone-800/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center py-1 px-2 text-xs font-medium ${
                  isActive ? "text-amber-400 font-semibold" : "text-stone-400"
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
