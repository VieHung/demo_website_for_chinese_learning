"use client";

import React, { useState } from "react";
import { VocabWord, HSKLevel } from "@/types";
import { speakChinese } from "@/utils/speech";
import { 
  Search, 
  Volume2, 
  BookMarked, 
  ExternalLink, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  Sparkles
} from "lucide-react";

interface VocabExplorerProps {
  words: VocabWord[];
  initialSearch?: string;
}

export const VocabExplorer: React.FC<VocabExplorerProps> = ({ words, initialSearch = "" }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedLevel, setSelectedLevel] = useState<HSKLevel | 0>(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Update searchTerm when initialSearch changes
  React.useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const filteredWords = words.filter((word) => {
    const matchesLevel = selectedLevel === 0 || word.hskLevel === selectedLevel;
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      word.hanzi.toLowerCase().includes(lowerSearch) ||
      word.pinyin.toLowerCase().includes(lowerSearch) ||
      word.meaning.toLowerCase().includes(lowerSearch) ||
      word.hanViet.toLowerCase().includes(lowerSearch);
    return matchesLevel && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>Kho Từ Vựng HSK Chuẩn</span>
            <span className="text-sm text-stone-400 font-normal">
              ({filteredWords.length} từ vựng)
            </span>
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Tra cứu chữ Hán, Pinyin, âm Hán Việt chuẩn xác và nghe phát âm giọng bản xứ
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo chữ Hán, pinyin, nghĩa..."
            className="w-full pl-9 pr-4 py-2 bg-stone-900 border border-stone-800 rounded-xl text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600 transition-all"
          />
        </div>
      </div>

      {/* Level Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        <button
          onClick={() => setSelectedLevel(0)}
          className={`px-4 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
            selectedLevel === 0
              ? "bg-red-600 text-white shadow-md shadow-red-950/40"
              : "bg-stone-900 border border-stone-800 text-stone-400 hover:text-white"
          }`}
        >
          Tất cả HSK ({words.length})
        </button>
        {[1, 2, 3, 4, 5, 6].map((level) => {
          const count = words.filter((w) => w.hskLevel === level).length;
          return (
            <button
              key={level}
              onClick={() => setSelectedLevel(level as HSKLevel)}
              className={`px-4 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                selectedLevel === level
                  ? "bg-red-600 text-white shadow-md shadow-red-950/40"
                  : "bg-stone-900 border border-stone-800 text-stone-400 hover:text-white"
              }`}
            >
              HSK {level} ({count})
            </button>
          );
        })}
      </div>

      {/* Word Grid */}
      {filteredWords.length === 0 ? (
        <div className="text-center py-16 bg-stone-900/50 rounded-2xl border border-stone-800">
          <BookMarked className="w-10 h-10 text-stone-600 mx-auto mb-2" />
          <p className="text-stone-400 font-medium text-sm">Không tìm thấy từ vựng nào khớp với từ khóa "{searchTerm}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((word) => {
            const isExpanded = expandedId === word.id;
            return (
              <div
                key={word.id}
                className="bg-stone-900/90 border border-stone-800 hover:border-stone-700 rounded-2xl p-5 transition-all duration-200 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  {/* Top info */}
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="font-bold text-amber-400 font-mono">
                      HSK {word.hskLevel}
                    </span>
                    {word.category && (
                      <span className="text-stone-400 font-medium">
                        • {word.category}
                      </span>
                    )}
                  </div>

                  {/* Hanzi, Pinyin & Audio Button */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold font-serif text-amber-100 hover:text-amber-300 transition-colors">
                          {word.hanzi}
                        </span>
                        <span className="text-base font-medium text-amber-400">
                          {word.pinyin}
                        </span>
                      </div>
                      <div className="text-xs text-stone-400 mt-0.5">
                        Âm Hán-Việt: <span className="font-semibold text-stone-200">{word.hanViet}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => speakChinese(word.hanzi)}
                      className="p-2.5 rounded-xl bg-stone-800 hover:bg-red-600/30 text-stone-300 hover:text-red-400 border border-stone-700/60 hover:border-red-500/40 transition-all active:scale-95"
                      title="Phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Meaning */}
                  <p className="text-sm font-semibold text-stone-100 mb-3 bg-stone-950/50 p-2.5 rounded-xl border border-stone-800/60">
                    {word.meaning}
                  </p>

                  {/* Radicals and Strokes */}
                  <div className="flex items-center gap-3 text-[11px] text-stone-400 mb-3">
                    {word.radical && (
                      <span>Bộ: <strong className="text-stone-300">{word.radical}</strong></span>
                    )}
                    {word.strokeCount && (
                      <span>Số nét: <strong className="text-stone-300">{word.strokeCount}</strong></span>
                    )}
                  </div>
                </div>

                {/* Example sentence drawer */}
                {word.examples && word.examples.length > 0 && (
                  <div className="border-t border-stone-800/80 pt-3 mt-1">
                    <button
                      onClick={() => toggleExpand(word.id)}
                      className="flex items-center justify-between w-full text-xs text-amber-400/90 hover:text-amber-300 font-medium transition-colors"
                    >
                      <span>Xem câu ví dụ ({word.examples.length})</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 space-y-2 bg-stone-950/80 p-3 rounded-xl border border-stone-800/80 text-xs">
                        {word.examples.map((ex, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-serif text-stone-200 text-sm">{ex.hanzi}</span>
                              <button
                                onClick={() => speakChinese(ex.hanzi)}
                                className="text-stone-400 hover:text-amber-400"
                              >
                                <Volume2 className="w-3 h-3" />
                              </button>
                            </div>
                            <p className="text-amber-400/80 font-sans text-[11px]">{ex.pinyin}</p>
                            <p className="text-stone-400 italic text-[11px]">→ {ex.vietnamese}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
