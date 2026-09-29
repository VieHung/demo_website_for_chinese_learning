export type HSKLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface ExampleSentence {
  hanzi: string;
  pinyin: string;
  vietnamese: string;
}

export interface VocabWord {
  id: string;
  hanzi: string;
  pinyin: string;
  hanViet: string; // Âm Hán Việt rất quan trọng cho người Việt học tiếng Trung
  meaning: string;
  hskLevel: HSKLevel;
  radical?: string; // Bộ thủ
  strokeCount?: number; // Số nét
  category?: string; // Chủ đề
  examples: ExampleSentence[];
}

export interface QuizQuestion {
  id: string;
  type: "hanzi-to-pinyin" | "hanzi-to-meaning" | "listen-and-choose" | "fill-blank";
  prompt: string;
  subPrompt?: string;
  audioText?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hskLevel: HSKLevel;
}

export interface UserProgress {
  streakDays: number;
  totalWordsLearned: number;
  quizzesCompleted: number;
  accuracyRate: number;
  savedWordIds: string[];
}
