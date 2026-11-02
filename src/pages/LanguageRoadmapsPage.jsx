import React, { useState } from 'react';
import { 
  Compass, ArrowRight, CheckCircle2, BookOpen, Sparkles, ChevronRight, Clock, Star 
} from 'lucide-react';
import { CAREER_ROADMAPS } from '../data/roadmapsData';

export function LanguageRoadmapsPage({ navigate }) {
  const [selectedRoadmapId, setSelectedRoadmapId] = useState(CAREER_ROADMAPS[0].id);

  const activeRoadmap = CAREER_ROADMAPS.find(r => r.id === selectedRoadmapId) || CAREER_ROADMAPS[0];

  return (
    <div style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--brand-primary-subtle)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            color: 'var(--brand-primary)',
            fontSize: '0.8125rem',
            fontWeight: 700,
            marginBottom: '0.75rem'
          }}>
            <Compass size={15} />
            <span>Interactive Visual Career Roadmaps</span>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Structured Step-by-Step Learning Roadmaps
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px' }}>
            Follow curated end-to-end career roadmaps designed by industry staff engineers to navigate your journey from fundamentals to production systems.
          </p>
        </div>

        {/* Roadmap Selector Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {CAREER_ROADMAPS.map((r) => {
            const isSelected = r.id === selectedRoadmapId;
            return (
              <button
                key={r.id}
                onClick={() => setSelectedRoadmapId(r.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '0.875rem',
                  fontWeight: isSelected ? 700 : 500,
                  background: isSelected ? 'var(--brand-primary)' : 'var(--bg-surface)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--brand-primary)' : 'var(--border-subtle)',
                  boxShadow: isSelected ? '0 2px 8px rgba(37, 99, 235, 0.25)' : 'var(--shadow-xs)',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span>{r.icon}</span>
                <span>{r.title.split(' ')[0]} {r.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Roadmap Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '2rem', alignItems: 'flex-start' }}>
          {/* Left Summary Card (1 Col) */}
          <div className="card" style={{ padding: '2rem', position: 'sticky', top: '90px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{activeRoadmap.icon}</div>
            <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>{activeRoadmap.category}</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              {activeRoadmap.title}
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {activeRoadmap.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Difficulty Level:</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{activeRoadmap.difficulty}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Estimated Time:</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>~{activeRoadmap.estimatedMonths} Months</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Milestone Stages:</span>
                <span style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>{activeRoadmap.steps.length} Steps</span>
              </div>
            </div>

            <button
              onClick={() => navigate(`course/${activeRoadmap.steps[0].courseId}`)}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1.5rem' }}
            >
              <span>Begin Roadmap Step 1</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Step-by-Step Flow (2 Cols) */}
          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {activeRoadmap.steps.map((step, idx) => (
              <div
                key={step.step}
                className="card card-hover"
                style={{
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  {/* Step Number Badge */}
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--brand-primary-subtle)',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    color: 'var(--brand-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    flexShrink: 0
                  }}>
                    {step.step}
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`course/${step.courseId}`)}
                  className="btn btn-secondary btn-sm"
                  style={{ flexShrink: 0, gap: '4px' }}
                >
                  <span>Open Course</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
