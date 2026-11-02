import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Award, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { QUIZZES_DATA } from '../data/quizzesData';
import { useCourses } from '../context/CourseContext';
import confetti from 'canvas-confetti';

export function QuizModal({ quizId, courseId, isOpen, onClose, navigate }) {
  const { recordQuizAttempt, quizAttempts } = useCourses();
  const quiz = QUIZZES_DATA[quizId];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [questionId]: answerIndex or array }
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreResult, setScoreResult] = useState(null);

  if (!isOpen || !quiz) return null;

  const currentQ = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;

  const handleSelectOption = (optIndex) => {
    if (isSubmitted) return;

    if (currentQ.type === 'multi-select') {
      const currentList = selectedAnswers[currentQ.id] || [];
      const updated = currentList.includes(optIndex)
        ? currentList.filter(i => i !== optIndex)
        : [...currentList, optIndex];
      setSelectedAnswers({ ...selectedAnswers, [currentQ.id]: updated });
    } else {
      setSelectedAnswers({ ...selectedAnswers, [currentQ.id]: optIndex });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;

    quiz.questions.forEach(q => {
      const userAns = selectedAnswers[q.id];
      if (q.type === 'multi-select') {
        const correctSet = new Set(q.correctAnswer);
        const userSet = new Set(userAns || []);
        if (correctSet.size === userSet.size && [...correctSet].every(val => userSet.has(val))) {
          correctCount++;
        }
      } else {
        if (userAns === q.correctAnswer) {
          correctCount++;
        }
      }
    });

    const scorePct = Math.round((correctCount / totalQuestions) * 100);
    const isPassed = scorePct >= (quiz.passingScore || 80);

    const result = {
      scorePct,
      correctCount,
      totalQuestions,
      isPassed
    };

    setScoreResult(result);
    setIsSubmitted(true);

    // Save to global context
    recordQuizAttempt(quiz.id, scorePct, isPassed, courseId);

    // Trigger celebratory confetti if passed!
    if (isPassed) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScoreResult(null);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '720px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(2, 132, 199, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-primary-light)'
            }}>
              <Award size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>
                {quiz.title}
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                {quiz.isFinalExam ? 'Official Final Certification Exam (Required: 80% passing)' : 'Module Knowledge Check (Required: 80% passing)'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-sm">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {!isSubmitted ? (
            <div>
              {/* Question Index Progress */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                <span>Question <strong>{currentQuestionIndex + 1}</strong> of {totalQuestions}</span>
                <span className="badge badge-muted">{currentQ.type.replace('-', ' ').toUpperCase()}</span>
              </div>

              {/* Progress bar */}
              <div className="progress-bar-container" style={{ height: '6px', marginBottom: '1.5rem' }}>
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }} 
                />
              </div>

              {/* Question Text */}
              <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.4 }}>
                {currentQ.question}
              </div>

              {/* Code snippet if code-predict */}
              {currentQ.codeSnippet && (
                <pre style={{
                  background: 'var(--bg-code)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  color: '#38BDF8',
                  overflowX: 'auto',
                  marginBottom: '1.25rem'
                }}>
                  <code>{currentQ.codeSnippet}</code>
                </pre>
              )}

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                {currentQ.options.map((opt, optIdx) => {
                  const isMulti = currentQ.type === 'multi-select';
                  const isSelected = isMulti 
                    ? (selectedAnswers[currentQ.id] || []).includes(optIdx)
                    : selectedAnswers[currentQ.id] === optIdx;

                  return (
                    <div
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      style={{
                        padding: '0.875rem 1rem',
                        background: isSelected ? 'rgba(2, 132, 199, 0.12)' : 'var(--bg-surface)',
                        border: `1px solid ${isSelected ? 'var(--brand-primary-light)' : 'var(--border-subtle)'}`,
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: isMulti ? '4px' : '50%',
                        border: `2px solid ${isSelected ? 'var(--brand-primary-light)' : 'var(--border-medium)'}`,
                        background: isSelected ? 'var(--brand-primary)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '0.7rem',
                        fontWeight: 700
                      }}>
                        {isSelected && '✓'}
                      </div>
                      <span style={{ fontSize: '0.9375rem', color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: isSelected ? 600 : 400 }}>
                        {opt}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Pagination controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="btn btn-secondary btn-sm"
                >
                  Previous
                </button>

                {currentQuestionIndex < totalQuestions - 1 ? (
                  <button
                    onClick={handleNext}
                    className="btn btn-primary btn-sm"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    className="btn btn-emerald btn-sm"
                  >
                    Submit Exam & View Score
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Breakdown & Explanations */
            <div>
              <div style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                background: scoreResult.isPassed ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
                border: `1px solid ${scoreResult.isPassed ? 'var(--accent-emerald)' : 'var(--accent-rose)'}`,
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem'
              }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: scoreResult.isPassed ? 'var(--accent-emerald)' : 'var(--accent-rose)', lineHeight: 1 }}>
                  {scoreResult.scorePct}%
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                  {scoreResult.isPassed ? '🎉 Assessment Passed with Excellence!' : 'Need 80% to Pass. Keep Practicing!'}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  You answered {scoreResult.correctCount} out of {scoreResult.totalQuestions} questions correctly.
                </div>

                {scoreResult.isPassed && quiz.isFinalExam && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <button
                      onClick={() => { onClose(); navigate('certificates'); }}
                      className="btn btn-emerald btn-sm"
                    >
                      <Sparkles size={16} /> View & Download Your Certificate
                    </button>
                  </div>
                )}
              </div>

              {/* Line-by-line Question Explanations */}
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
                Detailed Question & Answer Review
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '350px', overflowY: 'auto' }}>
                {quiz.questions.map((q, idx) => {
                  const userAns = selectedAnswers[q.id];
                  let isCorrect = false;
                  if (q.type === 'multi-select') {
                    const cSet = new Set(q.correctAnswer);
                    const uSet = new Set(userAns || []);
                    isCorrect = cSet.size === uSet.size && [...cSet].every(v => uSet.has(v));
                  } else {
                    isCorrect = userAns === q.correctAnswer;
                  }

                  return (
                    <div
                      key={q.id}
                      style={{
                        padding: '1rem',
                        background: 'var(--bg-surface)',
                        border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        {isCorrect ? (
                          <CheckCircle2 size={16} color="var(--accent-emerald)" />
                        ) : (
                          <AlertCircle size={16} color="var(--accent-rose)" />
                        )}
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          Q{idx + 1}: {q.question}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.5rem', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: 'var(--radius-xs)' }}>
                        💡 <strong>Explanation:</strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button onClick={handleRetake} className="btn btn-secondary btn-sm">
                  <RotateCcw size={14} /> Retake Assessment
                </button>
                <button onClick={onClose} className="btn btn-primary btn-sm">
                  Done Reviewing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
