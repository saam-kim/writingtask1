export interface Question {
  id: string;
  level: 1 | 2 | 3 | 4 | 5;
  context: string;
  sentenceTemplate: string;
  chunks: string[];
  answer: string[];
  explanation?: string;
  koreanExplanation?: string;
  grammarPoints?: string;
}

export interface LevelStats {
  correct: number;
  total: number;
}

export interface UserStats {
  totalSolved: number;
  correctCount: number;
  incorrectCount: number;
  levelAccuracy: Record<number, LevelStats>;
  lastStudyDate: string;
  wrongQuestionIds: string[];
  reviewList: string[];
}

export type TimerLimit = 0 | 30 | 45 | 60; // 0 means Off

export interface PracticeSettings {
  level: 1 | 2 | 3 | 4 | 5;
  questionCount: number;
  timerLimit: TimerLimit;
}
