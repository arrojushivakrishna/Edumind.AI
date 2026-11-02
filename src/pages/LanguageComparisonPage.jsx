import React, { useState } from 'react';
import { 
  GitCompare, Search, Filter, ArrowRight, Zap, CheckCircle2, Star, ShieldCheck 
} from 'lucide-react';
import { LANGUAGE_COMPARISONS } from '../data/comparisonData';

export function LanguageComparisonPage({ navigate }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web & Full-Stack', 'AI & Scripting', 'Systems & Games', 'Systems & Low-Level', 'Enterprise & Backend', 'Mobile & Apple', 'Mobile & Multiplatform', 'Databases', 'DevOps & Automation'];
  const difficulties = ['All', 'Easy', 'Easy-Medium', 'Medium', 'Medium-Hard', 'Hard'];

  const filteredList = LANGUAGE_COMPARISONS.filter(item => {
    const matchesSearch = !searchQuery || 
      item.language.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.mainUse.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.popularFor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat = filterCategory === 'All' || item.category === filterCategory;
    const matchesDiff = filterDifficulty === 'All' || item.difficulty === filterDifficulty;

    return matchesSearch && matchesCat && matchesDiff;
  });

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
            <GitCompare size={15} />
            <span>Interactive Language Comparison Matrix</span>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Choose the Right Language for Your Goal
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px' }}>
            Compare execution speed, learning curves, typing paradigms, and primary industry applications across all major programming languages.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search languages by domain (AI, Web, Games, Mobile, Systems)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.25rem' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Difficulty:</span>
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="form-select"
                style={{ width: 'auto', padding: '0.5rem 0.85rem', fontSize: '0.84rem' }}
              >
                {difficulties.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: filterCategory === cat ? 700 : 500,
                  background: filterCategory === cat ? 'var(--brand-primary)' : 'var(--bg-subtle)',
                  color: filterCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: filterCategory === cat ? 'var(--brand-primary)' : 'var(--border-subtle)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="card" style={{ overflowX: 'auto', borderRadius: 'var(--radius-xl)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-medium)' }}>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Language</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Difficulty</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Execution Speed</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Typing & Paradigm</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Primary Domains & Use Cases</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((item, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    transition: 'background 0.15s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  {/* Language & Icon */}
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                      <div>
                        <div>{item.language}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.category}</div>
                      </div>
                    </div>
                  </td>

                  {/* Difficulty */}
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span className={`badge ${
                      item.difficulty.includes('Easy') ? 'badge-emerald' : 
                      item.difficulty.includes('Hard') ? 'badge-rose' : 'badge-primary'
                    }`}>
                      {item.difficulty}
                    </span>
                  </td>

                  {/* Execution Speed */}
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.84rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Zap size={14} color="var(--brand-primary)" />
                      <span>{item.speed}</span>
                    </div>
                  </td>

                  {/* Typing & Paradigm */}
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
                    <div><strong>{item.typing}</strong></div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{item.paradigm}</div>
                  </td>

                  {/* Main Use */}
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.84rem', maxWidth: '320px', lineHeight: 1.5 }}>
                    <div>{item.mainUse}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--brand-primary)', marginTop: '2px', fontWeight: 600 }}>
                      Best for: {item.popularFor}
                    </div>
                  </td>

                  {/* Action */}
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <button
                      onClick={() => navigate(`course/${item.courseId}`)}
                      className="btn btn-secondary btn-sm"
                      style={{ gap: '4px', whiteSpace: 'nowrap' }}
                    >
                      <span>Start Course</span>
                      <ArrowRight size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
