import { useState, useEffect } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { PracticeScreen } from './components/PracticeScreen';
import { ResultScreen } from './components/ResultScreen';
import { questions } from './data/questions';
import type { Question, UserStats, PracticeSettings } from './types/question';
import { getStats, recordQuestionResult, removeFromReview } from './utils/storage';
import { shuffleArray } from './utils/shuffle';
import './index.css';

type ScreenState = 'HOME' | 'PRACTICE' | 'RESULT';

function App() {
  const [screen, setScreen] = useState<ScreenState>('HOME');
  const [stats, setStats] = useState<UserStats>(getStats());
  const [settings, setSettings] = useState<PracticeSettings>({
    level: 3,
    questionCount: 10,
    timerLimit: 0,
  });

  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  
  // Current session results to show on the result screen
  const [sessionResults, setSessionResults] = useState({
    correctCount: 0,
    incorrectCount: 0,
    totalCount: 0,
  });

  // Keep stats in sync
  useEffect(() => {
    setStats(getStats());
  }, [screen]);

  // Calculate available questions per level
  const totalAvailableQuestions: Record<number, number> = {
    1: questions.filter((q) => q.level === 1).length,
    2: questions.filter((q) => q.level === 2).length,
    3: questions.filter((q) => q.level === 3).length,
    4: questions.filter((q) => q.level === 4).length,
    5: questions.filter((q) => q.level === 5).length,
  };

  // Start a standard practice session
  const handleStartPractice = (newSettings: PracticeSettings) => {
    setSettings(newSettings);
    setIsReviewMode(false);

    // Filter questions by selected level
    const filtered = questions.filter((q) => q.level === newSettings.level);
    
    // Pick random questions up to count
    const shuffled = shuffleArray(filtered);
    const selected = shuffled.slice(0, newSettings.questionCount);

    setSessionQuestions(selected);
    setScreen('PRACTICE');
  };

  // Start a review session
  const handleStartReview = () => {
    setIsReviewMode(true);
    
    const reviewIds = stats.reviewList;
    if (reviewIds.length === 0) return;

    // Retrieve full question details for review IDs
    const reviewQuestions = questions.filter((q) => reviewIds.includes(q.id));
    const shuffled = shuffleArray(reviewQuestions);

    setSessionQuestions(shuffled);
    
    // Set dummy count for UI progress bar referencing settings
    setSettings({
      level: 1, // Will be overridden per question
      questionCount: reviewQuestions.length,
      timerLimit: 0, // Disable timer in review mode for focus
    });

    setScreen('PRACTICE');
  };

  // Callback when practice/review session completes
  const handleFinishSession = (correctIds: string[], incorrectIds: string[]) => {
    let finalStats = getStats();

    // 1. Record each question's result in localStorage
    sessionQuestions.forEach((q) => {
      const wasCorrect = correctIds.includes(q.id);
      finalStats = recordQuestionResult(q.id, q.level, wasCorrect);
    });

    // 2. Set results for result screen
    setSessionResults({
      correctCount: correctIds.length,
      incorrectCount: incorrectIds.length,
      totalCount: sessionQuestions.length,
    });

    setStats(finalStats);
    setScreen('RESULT');
  };

  // Remove question from review list immediately (when toggled in Practice screen)
  const handleRemoveFromReview = (id: string) => {
    const updatedStats = removeFromReview(id);
    setStats(updatedStats);
  };

  // Back to home screen
  const handleBackToHome = () => {
    setScreen('HOME');
  };

  // Retry the same session (shuffling same list of questions again)
  const handleRetrySession = () => {
    const reshuffled = shuffleArray(sessionQuestions);
    setSessionQuestions(reshuffled);
    setScreen('PRACTICE');
  };

  return (
    <div className="app-wrapper">
      {screen === 'HOME' && (
        <HomeScreen
          stats={stats}
          totalAvailableQuestions={totalAvailableQuestions}
          onStartPractice={handleStartPractice}
          onStartReview={handleStartReview}
        />
      )}

      {screen === 'PRACTICE' && (
        <PracticeScreen
          questions={sessionQuestions}
          settings={settings}
          isReviewMode={isReviewMode}
          onFinishSession={handleFinishSession}
          onBackToHome={handleBackToHome}
          onRemoveFromReview={handleRemoveFromReview}
        />
      )}

      {screen === 'RESULT' && (
        <ResultScreen
          correctCount={sessionResults.correctCount}
          incorrectCount={sessionResults.incorrectCount}
          totalQuestions={sessionResults.totalCount}
          onRetry={handleRetrySession}
          onBackToHome={handleBackToHome}
          onStartReview={handleStartReview}
          hasReviewItems={stats.reviewList.length > 0}
        />
      )}
    </div>
  );
}

export default App;
