import React from 'react';
import type { UserStats } from '../types/question';

interface StatsCardProps {
  stats: UserStats;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  const overallAccuracy = stats.totalSolved > 0 
    ? Math.round((stats.correctCount / stats.totalSolved) * 100) 
    : 0;

  return (
    <div className="card">
      <h2 style={{ fontSize: '20px', marginBottom: '14px', textAlign: 'center', fontFamily: 'var(--font-display)' }}>
        학습 대시보드 (Dashboard)
      </h2>
      
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-val">{stats.totalSolved}</div>
          <div className="stat-lbl">전체 풀이</div>
        </div>
        <div className="stat-item">
          <div className="stat-val">{overallAccuracy}%</div>
          <div className="stat-lbl">평균 정확도</div>
        </div>
        <div className="stat-item">
          <div className="stat-val">{stats.reviewList.length}</div>
          <div className="stat-lbl">복습 필요</div>
        </div>
        <div className="stat-item">
          <div className="stat-val" style={{ fontSize: '14px', color: '#64748B', paddingTop: '6px' }}>
            {stats.lastStudyDate || '기록 없음'}
          </div>
          <div className="stat-lbl">최근 학습일</div>
        </div>
      </div>

      <div style={{ marginTop: '16px' }}>
        <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>
          난이도별 정답률
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
          {[1, 2, 3, 4, 5].map((lvl) => {
            const levelStat = stats.levelAccuracy[lvl] || { correct: 0, total: 0 };
            const pct = levelStat.total > 0 ? Math.round((levelStat.correct / levelStat.total) * 100) : 0;
            return (
              <div 
                key={lvl} 
                style={{ 
                  backgroundColor: '#F8FAFC', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '8px', 
                  padding: '8px 4px', 
                  textAlign: 'center' 
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--primary)' }}>Lv {lvl}</div>
                <div style={{ fontSize: '14px', fontWeight: '700', marginTop: '2px' }}>{pct}%</div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>{levelStat.correct}/{levelStat.total}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
