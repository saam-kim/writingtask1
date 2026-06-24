import React, { useState, useEffect, useRef } from 'react';
import type { Question, PracticeSettings } from '../types/question';
import { ProgressBar } from './ProgressBar';
import { shuffleArray } from '../utils/shuffle';
import { DictionaryModal } from './DictionaryModal';

interface PracticeScreenProps {
  questions: Question[];
  settings: PracticeSettings;
  isReviewMode: boolean;
  onFinishSession: (correctIds: string[], incorrectIds: string[]) => void;
  onBackToHome: () => void;
  onRemoveFromReview: (id: string) => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({
  questions,
  settings,
  isReviewMode,
  onFinishSession,
  onBackToHome,
  onRemoveFromReview,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentQuestion = questions[currentIndex];

  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // Selected chunks by index in shuffled chunks
  const [shuffledChunks, setShuffledChunks] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [userSelectedText, setUserSelectedText] = useState<string[]>([]);

  // Scoring states
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showAnswerPanel, setShowAnswerPanel] = useState<boolean>(false);

  // History tracking for this session
  const correctQuestionsRef = useRef<string[]>([]);
  const incorrectQuestionsRef = useRef<string[]>([]);

  // Review removal confirmation prompt state
  const [showReviewRemovePrompt, setShowReviewRemovePrompt] = useState<boolean>(false);

  // Timer states
  const [timeLeft, setTimeLeft] = useState<number>(settings.timerLimit);
  const [timeOutOccurred, setTimeOutOccurred] = useState<boolean>(false);
  const timerIntervalRef = useRef<any>(null);

  // 1. Load/Shuffle question chunks on question change
  useEffect(() => {
    if (currentQuestion) {
      setShuffledChunks(shuffleArray(currentQuestion.chunks));
      setSelectedIndices([]);
      setUserSelectedText([]);
      setIsChecked(false);
      setIsCorrect(false);
      setShowAnswerPanel(false);
      setShowReviewRemovePrompt(false);
      setTimeOutOccurred(false);
      setTimeLeft(settings.timerLimit);
    }
  }, [currentQuestion, settings.timerLimit]);

  // 2. Timer Countdown Logic
  useEffect(() => {
    if (settings.timerLimit > 0 && !isChecked && !showAnswerPanel) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setTimeOutOccurred(true);
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [currentIndex, isChecked, showAnswerPanel, settings.timerLimit]);

  if (!currentQuestion) {
    return <div style={{ padding: '24px', textAlign: 'center' }}>데이터를 불러오는 중...</div>;
  }

  // Handle tap chunk from bank
  const handleTapChunk = (chunkIndex: number, text: string) => {
    if (isChecked || showAnswerPanel) return;
    if (selectedIndices.includes(chunkIndex)) return;

    // Check if slots are already full
    if (userSelectedText.length >= currentQuestion.answer.length) return;

    setSelectedIndices([...selectedIndices, chunkIndex]);
    setUserSelectedText([...userSelectedText, text]);
  };

  // Handle tap selected chunk to remove it
  const handleRemoveChunk = (indexInSelection: number) => {
    if (isChecked || showAnswerPanel) return;

    setSelectedIndices(selectedIndices.filter((_, idx) => idx !== indexInSelection));
    setUserSelectedText(userSelectedText.filter((_, idx) => idx !== indexInSelection));
  };

  // Undo button
  const handleUndo = () => {
    if (isChecked || showAnswerPanel || userSelectedText.length === 0) return;
    setSelectedIndices(selectedIndices.slice(0, -1));
    setUserSelectedText(userSelectedText.slice(0, -1));
  };

  // Clear button
  const handleClear = () => {
    if (isChecked || showAnswerPanel) return;
    setSelectedIndices([]);
    setUserSelectedText([]);
  };

  // Check Answer
  const handleCheckAnswer = () => {
    if (userSelectedText.length === 0) return;

    const correctAns = currentQuestion.answer;
    let match = true;
    if (userSelectedText.length !== correctAns.length) {
      match = false;
    } else {
      for (let i = 0; i < correctAns.length; i++) {
        if (userSelectedText[i] !== correctAns[i]) {
          match = false;
          break;
        }
      }
    }

    setIsChecked(true);
    setIsCorrect(match);

    if (match) {
      // Correct answer
      if (!correctQuestionsRef.current.includes(currentQuestion.id)) {
        correctQuestionsRef.current.push(currentQuestion.id);
      }
      // If we got it right, and it is review mode, prepare wrong list removal option
      if (isReviewMode) {
        setShowReviewRemovePrompt(true);
      }
    } else {
      // Incorrect answer
      if (!incorrectQuestionsRef.current.includes(currentQuestion.id)) {
        incorrectQuestionsRef.current.push(currentQuestion.id);
      }
    }
  };

  // Try again
  const handleTryAgain = () => {
    setIsChecked(false);
    // Reset selected text to let them rebuild
    setSelectedIndices([]);
    setUserSelectedText([]);
  };

  // Show Answer
  const handleShowAnswer = () => {
    setShowAnswerPanel(true);
    setIsChecked(true);
    setIsCorrect(false);
    // Fill the slots with correct answer for learning visual
    setUserSelectedText(currentQuestion.answer);
    if (!incorrectQuestionsRef.current.includes(currentQuestion.id)) {
      incorrectQuestionsRef.current.push(currentQuestion.id);
    }
  };

  // Next Question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Session finished
      onFinishSession(correctQuestionsRef.current, incorrectQuestionsRef.current);
    }
  };

  // Helper to split English text into clickable word spans
  const renderClickableText = (text: string) => {
    const words = text.split(/(\s+)/);
    return (
      <>
        {words.map((part, idx) => {
          if (/^\s+$/.test(part)) {
            return <React.Fragment key={idx}>{part}</React.Fragment>;
          }
          // Clean punctuation from word for lookup
          const cleanWord = part.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").trim();
          if (!cleanWord) {
            return <React.Fragment key={idx}>{part}</React.Fragment>;
          }
          return (
            <span
              key={idx}
              className="clickable-word"
              onClick={() => setSelectedWord(cleanWord)}
            >
              {part}
            </span>
          );
        })}
      </>
    );
  };

  // Build template chunks array
  const templateParts = currentQuestion.sentenceTemplate.split('_____');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto' }}>
      {/* Header Info */}
      <div className="header-bar">
        <div style={{ flex: 1, marginRight: '16px' }}>
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="badge badge-level">Lv {currentQuestion.level}</span>
          {settings.timerLimit > 0 && (
            <span className={`badge badge-timer ${timeLeft <= 10 && timeLeft > 0 ? 'urgent' : ''}`}>
              ⏱️ {timeOutOccurred ? 'Time Out' : `${timeLeft}s`}
            </span>
          )}
        </div>
      </div>

      <div style={{ padding: '20px', flex: 1 }}>
        {/* Context dialogue */}
        <div className="context-box">
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary)', marginBottom: '4px' }}>
            CONTEXT
          </div>
          {renderClickableText(currentQuestion.context)}
        </div>

        {/* Template hint */}
        <div className="template-box">
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#94A3B8', marginBottom: '6px' }}>
            TARGET TEMPLATE
          </div>
          {renderClickableText(currentQuestion.sentenceTemplate)}
        </div>

        {/* Answer Area */}
        <div className="answer-container">
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary)', marginBottom: '8px' }}>
            YOUR RESPONSE (Tap slots to remove)
          </div>
          <div className="answer-slots">
            {templateParts.map((part, index) => (
              <React.Fragment key={index}>
                {part && <span style={{ fontSize: '17px', fontWeight: '500', color: 'var(--text-main)' }}>{renderClickableText(part)}</span>}
                {index < currentQuestion.answer.length && (
                  userSelectedText[index] ? (
                    <span
                      className="answer-slot"
                      onClick={() => handleRemoveChunk(index)}
                    >
                      {userSelectedText[index]}
                    </span>
                  ) : (
                    <span className="answer-slot empty">_____</span>
                  )
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Time Out Alert */}
        {timeOutOccurred && !isChecked && !showAnswerPanel && (
          <div
            style={{
              backgroundColor: 'var(--timer-bg)',
              color: 'var(--timer-text)',
              padding: '12px',
              borderRadius: 'var(--radius-md)',
              fontSize: '15px',
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: '16px',
              border: '1px solid #FCD34D',
            }}
          >
            ⚠️ 제한시간이 초과되었습니다! 계속해서 문제를 풀어보세요.
          </div>
        )}

        {/* Chunk Bank */}
        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '8px', textAlign: 'center' }}>
          CHUNK BANK (Select in order)
        </div>
        <div className="chunk-bank">
          {shuffledChunks.map((chunk, index) => {
            const isSelected = selectedIndices.includes(index);
            return (
              <button
                key={index}
                type="button"
                className={`chunk-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => handleTapChunk(index, chunk)}
                disabled={isSelected || isChecked || showAnswerPanel}
              >
                {chunk}
              </button>
            );
          })}
        </div>

        {/* Feedback Panel */}
        {isChecked && (
          <div className={`feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
              {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
            </h3>
            <p style={{ fontSize: '15px' }}>
              {isCorrect 
                ? '정답입니다! 다음 문제로 이동하세요.' 
                : '선택한 배열이 일치하지 않습니다. 다시 시도하거나 해설을 확인해 보세요.'}
            </p>

            {isCorrect && !showAnswerPanel && (
              <button
                type="button"
                className="btn btn-outline"
                style={{ 
                  marginTop: '10px', 
                  minHeight: '36px', 
                  height: '36px', 
                  padding: '0 16px', 
                  fontSize: '14px', 
                  borderColor: 'var(--correct-border)', 
                  color: 'var(--correct-text)',
                  backgroundColor: '#FFFFFF'
                }}
                onClick={() => setShowAnswerPanel(true)}
              >
                📖 해설 보기 (Show Explanation)
              </button>
            )}

            {/* Review mode removal prompt */}
            {isCorrect && showReviewRemovePrompt && (
              <div 
                style={{ 
                  marginTop: '12px', 
                  padding: '10px', 
                  backgroundColor: '#FFFFFF', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid var(--correct-border)',
                  color: 'var(--text-main)'
                }}
              >
                <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                  이 문제를 복습 목록에서 제거하시겠습니까?
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    type="button"
                    className="btn btn-primary"
                    style={{ minHeight: '36px', height: '36px', padding: '0 12px', fontSize: '13px' }}
                    onClick={() => {
                      onRemoveFromReview(currentQuestion.id);
                      setShowReviewRemovePrompt(false);
                    }}
                  >
                    제거 (Remove)
                  </button>
                  <button 
                    type="button"
                    className="btn btn-outline"
                    style={{ minHeight: '36px', height: '36px', padding: '0 12px', fontSize: '13px' }}
                    onClick={() => setShowReviewRemovePrompt(false)}
                  >
                    유지 (Keep)
                  </button>
                </div>
              </div>
            )}

            {/* Show Answer details */}
            {showAnswerPanel && (
              <div className="explanation-panel">
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary)' }}>정답 문장:</span>
                  <div style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-main)', marginTop: '2px' }}>
                    {renderClickableText(
                      currentQuestion.sentenceTemplate.split('_____').map((part, idx) => {
                        return part + (currentQuestion.answer[idx] || '');
                      }).join('')
                    )}
                  </div>
                </div>
                {currentQuestion.koreanExplanation && (
                  <div style={{ marginTop: '8px' }}>
                    <h4>한국어 해설</h4>
                    <p>{currentQuestion.koreanExplanation}</p>
                  </div>
                )}
                {currentQuestion.grammarPoints && (
                  <div style={{ marginTop: '8px' }}>
                    <h4>핵심 문법 포인트</h4>
                    <span className="grammar-tag">{currentQuestion.grammarPoints}</span>
                  </div>
                )}
                {currentQuestion.paraphrases && currentQuestion.paraphrases.length > 0 && (
                  <div style={{ marginTop: '12px', borderTop: '1px solid var(--border)', paddingTop: '10px' }}>
                    <h4>💡 원어민 패러프레이징 제안 (Alternatives)</h4>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '6px', fontSize: '15px', color: 'var(--text-main)' }}>
                      {currentQuestion.paraphrases.map((para, i) => (
                        <li key={i} style={{ marginBottom: '6px', fontStyle: 'italic', lineHeight: '1.4' }}>
                          {renderClickableText(para)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Actions Button Bar */}
        <div style={{ marginTop: '24px' }}>
          {!isChecked && !showAnswerPanel ? (
            <div>
              <div className="controls-grid">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleUndo}
                  disabled={userSelectedText.length === 0}
                >
                  ↩️ Undo
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleClear}
                  disabled={userSelectedText.length === 0}
                >
                  🗑️ Clear
                </button>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '10px' }}
                onClick={handleCheckAnswer}
                disabled={userSelectedText.length < currentQuestion.answer.length}
              >
                ✔️ Check Answer
              </button>
            </div>
          ) : (
            <div>
              {!isCorrect && !showAnswerPanel && (
                <div className="controls-grid" style={{ marginBottom: '10px' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleTryAgain}
                  >
                    🔄 Try Again
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleShowAnswer}
                  >
                    📖 Show Answer
                  </button>
                </div>
              )}
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleNext}
              >
                {currentIndex < questions.length - 1 ? '➡️ Next Question' : '🏁 View Results'}
              </button>
            </div>
          )}

          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: '100%', marginTop: '12px', backgroundColor: 'transparent', color: 'var(--text-sub)' }}
            onClick={onBackToHome}
          >
            🏠 홈으로 돌아가기 (Exit to Home)
          </button>
        </div>
      </div>
      {selectedWord && (
        <DictionaryModal
          word={selectedWord}
          onClose={() => setSelectedWord(null)}
        />
      )}
    </div>
  );
};
