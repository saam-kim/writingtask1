import React, { useState } from 'react';
import type { UserStats, TimerLimit, PracticeSettings } from '../types/question';
import { StatsCard } from './StatsCard';

interface HomeScreenProps {
  stats: UserStats;
  totalAvailableQuestions: Record<number, number>;
  onStartPractice: (settings: PracticeSettings) => void;
  onStartReview: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  stats,
  totalAvailableQuestions,
  onStartPractice,
  onStartReview,
}) => {
  const [level, setLevel] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timerLimit, setTimerLimit] = useState<TimerLimit>(0);

  const availableCount = totalAvailableQuestions[level] || 0;
  const isQuestionShortage = questionCount > availableCount;

  const handleStart = () => {
    if (isQuestionShortage) return;
    onStartPractice({ level, questionCount, timerLimit });
  };

  const questionCountOptions = [5, 10, 15, 20, 25, 30, 50];
  const timerOptions: { label: string; value: TimerLimit }[] = [
    { label: 'Off', value: 0 },
    { label: '30s', value: 30 },
    { label: '45s', value: 45 },
    { label: '60s', value: 60 },
  ];

  const levelDescriptions = [
    '기본 의문문 & Be동사 중심 (4~5 chunks)',
    '기본 접속사 & 조동사 (5~6 chunks)',
    '관계절 & 간접의문문 (6~7 chunks)',
    '복합 접속사 & 긴 명사구 (7~8 chunks)',
    '학술 상황 & 오답 분별 (8~10 chunks)',
  ];

  return (
    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      <header style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: 'var(--primary)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
          TOEFL Build a Sentence
        </h1>
        <p className="description" style={{ margin: '8px 0 0 0', fontSize: '16px' }}>
          Tap the chunks to build the correct response.
        </p>
      </header>

      {/* Stats Card */}
      <StatsCard stats={stats} />

      {/* Settings Panel */}
      <div className="card">
        <h2 style={{ fontSize: '20px', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>연습 설정 (Settings)</h2>

        {/* Level Select */}
        <div className="selector-group">
          <label className="selector-label">난이도 선택 (Difficulty)</label>
          <div className="level-cards">
            {([1, 2, 3, 4, 5] as const).map((lvl) => (
              <div
                key={lvl}
                className={`level-card ${level === lvl ? 'selected' : ''}`}
                onClick={() => setLevel(lvl)}
              >
                Lv {lvl}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-sub)', marginTop: '6px', fontWeight: '500' }}>
            {levelDescriptions[level - 1]} (제공 문제: {availableCount}개)
          </p>
        </div>

        {/* Question Count Select */}
        <div className="selector-group" style={{ marginTop: '16px' }}>
          <label className="selector-label">문제 개수 선택 (Questions)</label>
          <div className="option-pill-grid">
            {questionCountOptions.map((cnt) => (
              <button
                key={cnt}
                type="button"
                className={`option-pill ${questionCount === cnt ? 'selected' : ''}`}
                onClick={() => setQuestionCount(cnt)}
              >
                {cnt}문제
              </button>
            ))}
          </div>
        </div>

        {/* Timer Option Select */}
        <div className="selector-group" style={{ marginTop: '16px' }}>
          <label className="selector-label">타이머 제한시간 (Timer)</label>
          <div className="option-pill-grid">
            {timerOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`option-pill ${timerLimit === opt.value ? 'selected' : ''}`}
                onClick={() => setTimerLimit(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Warning Message if questions are short */}
        {isQuestionShortage && (
          <div 
            style={{ 
              backgroundColor: 'var(--incorrect-bg)', 
              color: 'var(--incorrect-text)', 
              padding: '12px 16px', 
              borderRadius: 'var(--radius-sm)', 
              fontSize: '14px', 
              fontWeight: '500', 
              border: '1px solid var(--border-incorrect)',
              marginTop: '16px',
              textAlign: 'center'
            }}
          >
            선택한 난이도의 문제가 부족합니다. 문제 수를 줄이거나 문제 데이터를 추가해 주세요.
          </div>
        )}

        {/* Start Practice Button */}
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '20px' }}
          onClick={handleStart}
          disabled={isQuestionShortage}
        >
          연습 시작 (Start Practice)
        </button>

        {/* Review Mistakes Button */}
        <button
          type="button"
          className="btn btn-secondary"
          style={{ width: '100%', marginTop: '10px' }}
          onClick={onStartReview}
          disabled={stats.reviewList.length === 0}
        >
          오답 복습 (Review Mistakes) ({stats.reviewList.length})
        </button>
      </div>
    </div>
  );
};
