"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { QuizQuestion } from "@/types";
import { speakChinese } from "@/utils/speech";
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Volume2, 
  HelpCircle, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface QuizSectionProps {
  questions: QuizQuestion[];
  onQuizComplete?: (score: number) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  questions,
  onQuizComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (onQuizComplete) {
        onQuizComplete(score + (selectedOption === currentQ?.correctAnswer ? 0 : 0));
      }
      // Trigger confetti celebration if high score
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-900/30">
            <Trophy className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Hoàn thành bài luyện tập!</h3>
          <p className="text-sm text-stone-400 mb-6">
            Bạn đã trả lời đúng <strong className="text-amber-300 font-bold">{score} / {questions.length}</strong> câu hỏi.
          </p>

          <div className="w-full bg-stone-800 h-3 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-amber-400 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="text-4xl font-extrabold text-amber-300 mb-6">
            {percentage}%
          </div>

          <p className="text-xs text-stone-400 mb-8 max-w-sm mx-auto">
            {percentage >= 80
              ? "Xuất sắc! Bạn nắm rất vững kiến thức HSK vừa ôn tập."
              : percentage >= 50
              ? "Khá tốt! Hãy tiếp tục ôn tập thẻ Flashcard để đạt điểm tuyệt đối nhé."
              : "Đừng nản lòng! Hãy ôn lại từ vựng và thử sức lại nhé."}
          </p>

          <button
            onClick={handleRestart}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-semibold text-sm shadow-lg shadow-red-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Luyện tập lại</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>Trắc Nghiệm HSK Nhanh</span>
            <span className="text-xs text-amber-400 font-mono">
              (Câu {currentIndex + 1}/{questions.length})
            </span>
          </h2>
          <p className="text-xs text-stone-400 mt-1">Củng cố phản xạ nhận diện chữ Hán và ý nghĩa</p>
        </div>

        <div className="text-right">
          <span className="text-xs text-stone-400">Điểm hiện tại</span>
          <div className="text-lg font-bold text-amber-400">{score} điểm</div>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full h-1 bg-stone-800 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
          HSK {currentQ.hskLevel} • {currentQ.prompt}
        </div>

        {/* Big prompt or Hanzi */}
        {currentQ.subPrompt && (
          <div className="text-3xl sm:text-4xl font-serif font-bold text-white text-center my-6 py-4 bg-stone-950/60 rounded-2xl border border-stone-800/80">
            {currentQ.subPrompt}
          </div>
        )}

        {/* Listening button for audio question */}
        {currentQ.audioText && (
          <div className="flex flex-col items-center justify-center my-6 py-6 bg-stone-950/60 rounded-2xl border border-stone-800/80">
            <button
              onClick={() => speakChinese(currentQ.audioText!)}
              className="p-4 rounded-full bg-red-600/30 hover:bg-red-600/50 text-red-300 hover:text-white border border-red-500/40 transition-all hover:scale-110 active:scale-95 mb-2"
              title="Nhấn để nghe"
            >
              <Volume2 className="w-7 h-7" />
            </button>
            <span className="text-xs text-stone-400">Nhấn biểu tượng loa để nghe phát âm</span>
          </div>
        )}

        {/* Option choices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === currentQ.correctAnswer;

            let buttonStyle = "bg-stone-800/80 border-stone-700/60 text-stone-200 hover:bg-stone-800 hover:border-stone-600";

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = "bg-emerald-950/70 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-950/30";
              } else if (isSelected) {
                buttonStyle = "bg-red-950/70 border-red-500 text-red-200 shadow-md shadow-red-950/30";
              } else {
                buttonStyle = "bg-stone-900/50 border-stone-800 text-stone-500 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(option)}
                className={`p-4 rounded-xl border text-left font-medium text-sm sm:text-base flex items-center justify-between transition-all duration-200 ${buttonStyle}`}
              >
                <span>{option}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Explanation Box */}
        {isAnswered && (
          <div className="mt-6 p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-300">
            <div className="flex items-center gap-1.5 font-semibold text-amber-400 mb-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Giải thích chi tiết:</span>
            </div>
            <p className="leading-relaxed">{currentQ.explanation}</p>
          </div>
        )}
      </div>

      {/* Next question action button */}
      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-semibold text-sm shadow-lg shadow-red-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <span>{currentIndex < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
