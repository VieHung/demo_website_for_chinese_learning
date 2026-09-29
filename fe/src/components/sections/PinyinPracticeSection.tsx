"use client";

import React, { useState } from "react";
import { PINYIN_TONES } from "@/data/chineseData";
import { speakChinese } from "@/utils/speech";
import { Volume2, Music, Check, Info } from "lucide-react";

export const PinyinPracticeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tones" | "initials" | "finals">("tones");

  const initials = [
    { pinyin: "b", sample: "bà (ba)", sound: "b" },
    { pinyin: "p", sample: "pó (bà)", sound: "p" },
    { pinyin: "m", sample: "mā (mẹ)", sound: "m" },
    { pinyin: "f", sample: "fā (phát)", sound: "f" },
    { pinyin: "d", sample: "dà (lớn)", sound: "d" },
    { pinyin: "t", sample: "tā (nó)", sound: "t" },
    { pinyin: "n", sample: "nǐ (bạn)", sound: "n" },
    { pinyin: "l", sample: "lǎo (già)", sound: "l" },
    { pinyin: "g", sample: "gē (anh)", sound: "g" },
    { pinyin: "k", sample: "kě (khát)", sound: "k" },
    { pinyin: "h", sample: "hǎo (tốt)", sound: "h" },
    { pinyin: "j", sample: "jī (gà)", sound: "j" },
    { pinyin: "q", sample: "qī (bảy)", sound: "q" },
    { pinyin: "x", sample: "xī (tây)", sound: "x" },
    { pinyin: "zh", sample: "zhōng (trung)", sound: "zh" },
    { pinyin: "ch", sample: "chī (ăn)", sound: "ch" },
    { pinyin: "sh", sample: "shī (thầy)", sound: "sh" },
    { pinyin: "r", sample: "rén (người)", sound: "r" },
    { pinyin: "z", sample: "zì (chữ)", sound: "z" },
    { pinyin: "c", sample: "cài (món)", sound: "c" },
    { pinyin: "s", sample: "sì (bốn)", sound: "s" },
    { pinyin: "y", sample: "yī (một)", sound: "y" },
    { pinyin: "w", sample: "wǒ (tôi)", sound: "w" },
  ];

  const finals = [
    { pinyin: "a", sample: "ā" },
    { pinyin: "o", sample: "ō" },
    { pinyin: "e", sample: "ē" },
    { pinyin: "i", sample: "yī" },
    { pinyin: "u", sample: "wū" },
    { pinyin: "ü", sample: "yǖ" },
    { pinyin: "ai", sample: "āi" },
    { pinyin: "ei", sample: "ēi" },
    { pinyin: "ui", sample: "wēi" },
    { pinyin: "ao", sample: "āo" },
    { pinyin: "ou", sample: "ōu" },
    { pinyin: "iu", sample: "yōu" },
    { pinyin: "an", sample: "ān" },
    { pinyin: "en", sample: "ēn" },
    { pinyin: "in", sample: "yīn" },
    { pinyin: "ang", sample: "āng" },
    { pinyin: "eng", sample: "ēng" },
    { pinyin: "ing", sample: "yīng" },
    { pinyin: "ong", sample: "wēng" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>Bảng Ngữ Âm & Luyện Phát Âm Pinyin</span>
          <span className="text-xs text-amber-400 font-normal">
            (Chuẩn Bắc Kinh)
          </span>
        </h2>
        <p className="text-xs text-stone-400 mt-1">
          Luyện nghe và phát âm 4 thanh điệu cùng bảng Thanh mẫu (Initials) & Vận mẫu (Finals)
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-stone-800 pb-3 mb-8">
        <button
          onClick={() => setActiveTab("tones")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "tones"
              ? "bg-red-600 text-white shadow-md shadow-red-950/40"
              : "bg-stone-900 text-stone-400 hover:text-white border border-stone-800"
          }`}
        >
          4 Thanh Điệu (Tones)
        </button>
        <button
          onClick={() => setActiveTab("initials")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "initials"
              ? "bg-red-600 text-white shadow-md shadow-red-950/40"
              : "bg-stone-900 text-stone-400 hover:text-white border border-stone-800"
          }`}
        >
          Thanh Mẫu (23 Phụ âm đầu)
        </button>
        <button
          onClick={() => setActiveTab("finals")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "finals"
              ? "bg-red-600 text-white shadow-md shadow-red-950/40"
              : "bg-stone-900 text-stone-400 hover:text-white border border-stone-800"
          }`}
        >
          Vận Mẫu (Nguyên âm)
        </button>
      </div>

      {/* Content for Tones */}
      {activeTab === "tones" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PINYIN_TONES.map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 hover:border-amber-600/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-base">{item.tone}</span>
                    <span className="text-sm font-mono font-bold text-amber-400">
                      {item.symbol}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-800/80">
                  <div className="text-sm font-semibold text-amber-300">
                    Ví dụ: <span className="font-serif text-white ml-1">{item.example}</span>
                  </div>
                  <button
                    onClick={() => {
                      const wordOnly = item.example.split(" ")[0].replace(/[^a-zA-Zāáǎà]/g, "");
                      speakChinese(wordOnly || "ma");
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-300 hover:text-white border border-red-500/30 text-xs font-medium transition-all"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Nghe âm</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick tips for Vietnamese learners */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-700/30 text-xs text-amber-200/90 mt-6">
            <div className="flex items-center gap-2 font-bold text-amber-400 mb-1.5">
              <Info className="w-4 h-4" />
              <span>Mẹo phát âm cho người Việt:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-stone-300 pl-1">
              <li><strong>Thanh 1:</strong> Đọc giọng cao, ngân đều như hát nốt cao, không được hạ giọng.</li>
              <li><strong>Thanh 2:</strong> Gần giống dấu sắc tiếng Việt nhưng kéo dài và đi lên từ từ.</li>
              <li><strong>Thanh 3:</strong> Xuống thật trầm rồi hất nhẹ lên, khi ghép từ thường biến âm thành nửa thanh 3.</li>
              <li><strong>Thanh 4:</strong> Dứt khoát, giật giọng từ cao xuống thấp (không phải dấu huyền tiếng Việt).</li>
            </ul>
          </div>
        </div>
      )}

      {/* Content for Initials */}
      {activeTab === "initials" && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            {initials.map((item, idx) => (
              <button
                key={idx}
                onClick={() => speakChinese(item.sample)}
                className="group p-4 rounded-xl bg-stone-900 border border-stone-800 hover:border-red-600/50 hover:bg-stone-800/80 transition-all text-center"
              >
                <div className="text-2xl font-black text-amber-300 group-hover:scale-110 transition-transform">
                  {item.pinyin}
                </div>
                <div className="text-xs text-stone-400 mt-1 font-serif">
                  {item.sample}
                </div>
                <div className="mt-2 text-[10px] text-stone-500 flex items-center justify-center gap-1 group-hover:text-red-400">
                  <Volume2 className="w-3 h-3" />
                  <span>Nghe</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content for Finals */}
      {activeTab === "finals" && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            {finals.map((item, idx) => (
              <button
                key={idx}
                onClick={() => speakChinese(item.sample)}
                className="group p-4 rounded-xl bg-stone-900 border border-stone-800 hover:border-red-600/50 hover:bg-stone-800/80 transition-all text-center"
              >
                <div className="text-2xl font-black text-amber-300 group-hover:scale-110 transition-transform">
                  {item.pinyin}
                </div>
                <div className="text-xs text-stone-400 mt-1 font-serif">
                  {item.sample}
                </div>
                <div className="mt-2 text-[10px] text-stone-500 flex items-center justify-center gap-1 group-hover:text-red-400">
                  <Volume2 className="w-3 h-3" />
                  <span>Nghe</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
