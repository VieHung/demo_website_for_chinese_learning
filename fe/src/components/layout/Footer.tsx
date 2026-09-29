import React from "react";
import { Heart, Globe, BookOpen } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-stone-800/80 bg-stone-950/70 py-10 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                华
              </div>
              <span className="font-bold text-white text-base">HuaYu Hub</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-3">
              Hệ thống ôn luyện tiếng Trung thông minh theo tiêu chuẩn HSK mới, tích hợp phát âm chuẩn bản xứ, thẻ ghi nhớ Flashcard 3D và bài thi thử tương tác.
            </p>
            <div className="inline-block px-3 py-1 rounded bg-stone-800/70 border border-stone-700/50 text-xs text-amber-300 font-serif">
              千里之行，始于足下 (Hành trình ngàn dặm khởi nguồn từ một bước chân)
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Các cấp độ ôn tập</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="flex items-center gap-2 hover:text-amber-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                HSK 1 - Nhập môn căn bản (150 từ vựng)
              </li>
              <li className="flex items-center gap-2 hover:text-amber-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                HSK 2 - Giao tiếp hàng ngày (300 từ vựng)
              </li>
              <li className="flex items-center gap-2 hover:text-amber-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                HSK 3 - Trung cấp sơ khởi (600 từ vựng)
              </li>
              <li className="flex items-center gap-2 hover:text-amber-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                HSK 4 - Làm chủ ngữ pháp & thành ngữ (1200 từ vựng)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Tính năng học tập</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Âm Hán Việt</span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>Phát âm giọng AI</span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 flex items-center gap-2">
                <span className="text-red-400 font-bold">部</span>
                <span>Tra cứu bộ thủ</span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>SRS Lặp lại ngắt quãng</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© {new Date().getFullYear()} HuaYu Hub. Xây dựng cho người Việt học tiếng Trung.</p>
          <div className="flex items-center gap-1 mt-2 sm:mt-0">
            <span>Thiết kế tối ưu trải nghiệm học tập</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
