"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { FlashcardSection } from "@/components/sections/FlashcardSection";
import { VocabExplorer } from "@/components/sections/VocabExplorer";
import { QuizSection } from "@/components/sections/QuizSection";
import { PinyinPracticeSection } from "@/components/sections/PinyinPracticeSection";
import { INITIAL_VOCAB_LIST, INITIAL_QUIZ_LIST } from "@/data/chineseData";

export default function Home() {
  const [activeTab, setActiveTab] = useState("flashcard");
  const [streakCount, setStreakCount] = useState(3);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);

  // Load saved progress from localStorage if available
  useEffect(() => {
    try {
      const savedMastered = localStorage.getItem("huayu_mastered_words");
      if (savedMastered) {
        setMasteredIds(JSON.parse(savedMastered));
      }
      const savedStreak = localStorage.getItem("huayu_streak");
      if (savedStreak) {
        setStreakCount(parseInt(savedStreak, 10));
      }
    } catch {
      // Ignore localStorage read errors
    }
  }, []);

  const handleWordMastered = (wordId: string) => {
    if (!masteredIds.includes(wordId)) {
      const updated = [...masteredIds, wordId];
      setMasteredIds(updated);
      try {
        localStorage.setItem("huayu_mastered_words", JSON.stringify(updated));
      } catch {
        // Ignore
      }
    }
  };

  const handleQuizComplete = (score: number) => {
    // Increase streak if achieved a passing score
    if (score >= 3) {
      const newStreak = streakCount + 1;
      setStreakCount(newStreak);
      try {
        localStorage.setItem("huayu_streak", newStreak.toString());
      } catch {
        // Ignore
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100 selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        streakCount={streakCount}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroBanner
          onStartFlashcard={() => setActiveTab("flashcard")}
          onStartQuiz={() => setActiveTab("quiz")}
          onExploreVocab={() => setActiveTab("vocab")}
          onPracticePinyin={() => setActiveTab("pinyin")}
          streakCount={streakCount}
          totalWords={INITIAL_VOCAB_LIST.length}
        />

        {/* Dynamic Tab Body */}
        <div className="py-4">
          {activeTab === "flashcard" && (
            <FlashcardSection
              words={INITIAL_VOCAB_LIST}
              onWordMastered={handleWordMastered}
            />
          )}

          {activeTab === "vocab" && (
            <VocabExplorer words={INITIAL_VOCAB_LIST} />
          )}

          {activeTab === "quiz" && (
            <QuizSection
              questions={INITIAL_QUIZ_LIST}
              onQuizComplete={handleQuizComplete}
            />
          )}

          {activeTab === "pinyin" && (
            <PinyinPracticeSection />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
