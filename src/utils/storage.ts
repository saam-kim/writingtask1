import type { UserStats } from '../types/question';

const STORAGE_KEY = 'toefl_writing_practice_stats';

const DEFAULT_STATS: UserStats = {
  totalSolved: 0,
  correctCount: 0,
  incorrectCount: 0,
  levelAccuracy: {
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 },
    4: { correct: 0, total: 0 },
    5: { correct: 0, total: 0 },
  },
  lastStudyDate: '',
  wrongQuestionIds: [],
  reviewList: [],
};

export const getStats = (): UserStats => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return { ...DEFAULT_STATS };
  try {
    const parsed = JSON.parse(data);
    return {
      ...DEFAULT_STATS,
      ...parsed,
      levelAccuracy: {
        ...DEFAULT_STATS.levelAccuracy,
        ...(parsed.levelAccuracy || {}),
      },
      wrongQuestionIds: parsed.wrongQuestionIds || [],
      reviewList: parsed.reviewList || [],
    };
  } catch {
    return { ...DEFAULT_STATS };
  }
};

export const saveStats = (stats: UserStats): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
};

export const recordQuestionResult = (questionId: string, level: 1 | 2 | 3 | 4 | 5, isCorrect: boolean): UserStats => {
  const stats = getStats();
  stats.totalSolved += 1;
  stats.lastStudyDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\. /g, '-').replace(/\./g, ''); // Format: YYYY-MM-DD

  if (!stats.levelAccuracy[level]) {
    stats.levelAccuracy[level] = { correct: 0, total: 0 };
  }
  stats.levelAccuracy[level].total += 1;

  if (isCorrect) {
    stats.correctCount += 1;
    stats.levelAccuracy[level].correct += 1;
  } else {
    stats.incorrectCount += 1;
    if (!stats.wrongQuestionIds.includes(questionId)) {
      stats.wrongQuestionIds.push(questionId);
    }
    if (!stats.reviewList.includes(questionId)) {
      stats.reviewList.push(questionId);
    }
  }

  saveStats(stats);
  return stats;
};

export const removeFromReview = (questionId: string): UserStats => {
  const stats = getStats();
  stats.reviewList = stats.reviewList.filter(id => id !== questionId);
  saveStats(stats);
  return stats;
};
