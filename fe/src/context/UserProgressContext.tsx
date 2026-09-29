"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface UserProgressContextType {
  streakCount: number;
  masteredIds: string[];
  totalScore: number;
  quizzesCompleted: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleWordMastered: (wordId: string) => void;
  handleQuizComplete: (score: number) => void;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [streakCount, setStreakCount] = useState<number>(3);
  const [masteredIds, setMasteredIds] = useState<string[]>(["vocab-1", "vocab-2"]);
  const [totalScore, setTotalScore] = useState<number>(180);
  const [quizzesCompleted, setQuizzesCompleted] = useState<number>(4);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sync with localStorage on client mount
  useEffect(() => {
    try {
      const savedMastered =
        localStorage.getItem("sinnochina_mastered_words") ||
        localStorage.getItem("huayu_mastered_words");
      if (savedMastered) {
        setMasteredIds(JSON.parse(savedMastered));
      }
      const savedStreak =
        localStorage.getItem("sinnochina_streak") ||
        localStorage.getItem("huayu_streak");
      if (savedStreak) {
        setStreakCount(parseInt(savedStreak, 10));
      }
      const savedScore =
        localStorage.getItem("sinnochina_total_score") ||
        localStorage.getItem("huayu_total_score");
      if (savedScore) {
        setTotalScore(parseInt(savedScore, 10));
      }
      const savedQuizzes =
        localStorage.getItem("sinnochina_quizzes_completed") ||
        localStorage.getItem("huayu_quizzes_completed");
      if (savedQuizzes) {
        setQuizzesCompleted(parseInt(savedQuizzes, 10));
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
        localStorage.setItem("sinnochina_mastered_words", JSON.stringify(updated));
      } catch {
        // Ignore
      }
    }
  };

  const handleQuizComplete = (score: number) => {
    const newScore = totalScore + score * 10;
    const newCompleted = quizzesCompleted + 1;
    setTotalScore(newScore);
    setQuizzesCompleted(newCompleted);

    try {
      localStorage.setItem("sinnochina_total_score", newScore.toString());
      localStorage.setItem("sinnochina_quizzes_completed", newCompleted.toString());
    } catch {
      // Ignore
    }

    if (score >= 3) {
      const newStreak = streakCount + 1;
      setStreakCount(newStreak);
      try {
        localStorage.setItem("sinnochina_streak", newStreak.toString());
      } catch {
        // Ignore
      }
    }
  };

  return (
    <UserProgressContext.Provider
      value={{
        streakCount,
        masteredIds,
        totalScore,
        quizzesCompleted,
        searchQuery,
        setSearchQuery,
        handleWordMastered,
        handleQuizComplete,
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error("useUserProgress must be used within a UserProgressProvider");
  }
  return context;
};
