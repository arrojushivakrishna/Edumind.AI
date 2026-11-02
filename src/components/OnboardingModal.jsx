import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function OnboardingModal({ isOpen, onClose, navigate }) {
  const { user, completeOnboarding } = useAuth();
  const [step, setStep] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('Intermediate');
  const [selectedInterests, setSelectedInterests] = useState(['Python & AI', 'Full-Stack React']);

  if (!isOpen || (user && user.completedOnboarding)) return null;

  const levels = [
    { key: 'Beginner', title: 'Beginner', desc: 'New to coding or switching from another field' },
    { key: 'Intermediate', title: 'Intermediate', desc: 'Comfortable with syntax; looking to master architecture & algorithms' },
    { key: 'Advanced', title: 'Advanced', desc: 'Senior engineer focusing on systems, concurrency & AI models' }
  ];

  const interestOptions = [
    'Python & AI', 'Full-Stack React', 'Data Structures & Algorithms', 
    'Rust Systems', 'Machine Learning Pipelines', 'Cloud Architecture'
  ];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleFinish = () => {
    completeOnboarding({
      level: selectedLevel,
      interests: selectedInterests
    });
    onClose();
    navigate('dashboard');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '520px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} color="var(--brand-primary-light)" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>
              Personalize Your EduMind Journey (Step {step} of 2)
            </h3>
          </div>
        </div>

        <div className="modal-body">
          {step === 1 ? (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                What is your current programming background?
              </h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                We will tailor practice challenges and AI suggestions based on your comfort level.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {levels.map(lvl => (
                  <div
                    key={lvl.key}
                    onClick={() => setSelectedLevel(lvl.key)}
                    style={{
                      padding: '1rem',
                      background: selectedLevel === lvl.key ? 'rgba(2, 132, 199, 0.12)' : 'var(--bg-surface)',
                      border: `1px solid ${selectedLevel === lvl.key ? 'var(--brand-primary-light)' : 'var(--border-subtle)'}`,
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>{lvl.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{lvl.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Which tech stacks are you focusing on?
              </h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Select topics to receive tailored workshop invites and curated study groups.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {interestOptions.map(opt => {
                  const isSelected = selectedInterests.includes(opt);
                  return (
                    <div
                      key={opt}
                      onClick={() => toggleInterest(opt)}
                      style={{
                        padding: '0.875rem',
                        background: isSelected ? 'rgba(2, 132, 199, 0.15)' : 'var(--bg-surface)',
                        border: `1px solid ${isSelected ? 'var(--brand-primary-light)' : 'var(--border-subtle)'}`,
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.8125rem',
                        fontWeight: isSelected ? 700 : 500
                      }}
                    >
                      <span>{opt}</span>
                      {isSelected && <Check size={14} color="var(--brand-primary-light)" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          {step === 1 ? (
            <button onClick={() => setStep(2)} className="btn btn-primary btn-sm">
              Next Step <ArrowRight size={15} />
            </button>
          ) : (
            <button onClick={handleFinish} className="btn btn-emerald btn-sm">
              Launch Workspace 🎉
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
