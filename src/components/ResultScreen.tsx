import React from 'react';

interface ResultScreenProps {
  correctCount: number;
  incorrectCount: number;
  totalQuestions: number;
  onRetry: () => void;
  onBackToHome: () => void;
  onStartReview: () => void;
  hasReviewItems: boolean;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  correctCount,
  incorrectCount,
  totalQuestions,
  onRetry,
  onBackToHome,
  onStartReview,
  hasReviewItems,
}) => {
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return (
    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', color: 'var(--primary)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
          학습 결과 (Results)
        </h1>
        <p className="description" style={{ margin: '8px 0 0 0' }}>
          수고하셨습니다! 결과를 확인하고 취약점을 복습해 보세요.
        </p>
      </div>

      {/* Main Score Card */}
      <div className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: accuracy >= 70 ? 'var(--correct-bg)' : 'var(--primary-light)', border: `4px solid ${accuracy >= 70 ? 'var(--correct)' : 'var(--primary)'}`, marginBottom: '20px' }}>
          <span style={{ fontSize: '32px', fontWeight: '800', color: accuracy >= 70 ? 'var(--correct-text)' : 'var(--primary)' }}>
            {accuracy}%
          </span>
        </div>

        <div className="stats-grid" style={{ marginTop: '16px' }}>
          <div className="stat-item">
            <div className="stat-val" style={{ color: 'var(--text-main)' }}>{totalQuestions}</div>
            <div className="stat-lbl">총 문제 수</div>
          </div>
          <div className="stat-item">
            <div className="stat-val" style={{ color: 'var(--correct)' }}>{correctCount}</div>
            <div className="stat-lbl">정답 수</div>
          </div>
          <div className="stat-item">
            <div className="stat-val" style={{ color: 'var(--incorrect)' }}>{incorrectCount}</div>
            <div className="stat-lbl">오답 수</div>
          </div>
          <div className="stat-item">
            <div className="stat-val" style={{ color: '#4F46E5', fontSize: '18px', paddingTop: '6px' }}>
              {accuracy >= 80 ? '🏅 Excellent' : accuracy >= 50 ? '👍 Good Job' : '📚 Keep Trying'}
            </div>
            <div className="stat-lbl">성취도</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onRetry}
          style={{ width: '100%' }}
        >
          🔄 다시 풀기 (Retry Session)
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onStartReview}
          disabled={!hasReviewItems}
          style={{ width: '100%' }}
        >
          ✍️ 틀린 문제 복습 (Review Mistakes)
        </button>

        <button
          type="button"
          className="btn btn-outline"
          onClick={onBackToHome}
          style={{ width: '100%', marginTop: '10px' }}
        >
          🏠 홈 화면으로 이동 (Back to Home)
        </button>
      </div>
    </div>
  );
};
