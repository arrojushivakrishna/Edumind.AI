import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Code2, Users, FileText, ArrowRight } from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import { useCommunity } from '../context/CommunityContext';

export function GlobalSearchModal({ isOpen, onClose, navigate }) {
  const { courses } = useCourses();
  const { posts } = useCommunity();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle search
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  // Search Results
  const matchedCourses = courses.filter(c => 
    !cleanQ || c.title.toLowerCase().includes(cleanQ) || c.category.toLowerCase().includes(cleanQ)
  );

  const matchedLessons = [];
  courses.forEach(c => {
    c.modules.forEach(m => {
      (m.lessons || []).forEach(l => {
        if (cleanQ && (l.title.toLowerCase().includes(cleanQ) || l.definition.toLowerCase().includes(cleanQ))) {
          matchedLessons.push({ ...l, courseId: c.id, courseTitle: c.title, moduleTitle: m.title });
        }
      });
    });
  });

  const matchedGlossary = [];
  courses.forEach(c => {
    (c.glossary || []).forEach(g => {
      if (cleanQ && (g.term.toLowerCase().includes(cleanQ) || g.definition.toLowerCase().includes(cleanQ))) {
        matchedGlossary.push({ ...g, courseId: c.id, courseTitle: c.title });
      }
    });
  });

  const matchedPosts = posts.filter(p => 
    cleanQ && (p.title.toLowerCase().includes(cleanQ) || p.content.toLowerCase().includes(cleanQ))
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '640px', padding: 0, overflow: 'hidden' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-card-elevated)'
        }}>
          <Search size={20} color="var(--brand-primary-light)" />
          <input
            type="text"
            placeholder="Search all courses, reference definitions, syntax, code & posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              color: 'var(--text-primary)'
            }}
          />
          <button onClick={onClose} className="btn btn-ghost btn-sm" style={{ padding: '0.25rem' }}>
            <X size={18} />
          </button>
        </div>

        {/* Search Results List */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '1rem' }}>
          {/* Lessons */}
          {matchedLessons.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--brand-primary-light)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <BookOpen size={13} /> Reference Lessons ({matchedLessons.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {matchedLessons.map(l => (
                  <div
                    key={l.id}
                    onClick={() => {
                      navigate(`course/${l.courseId}/lesson/${l.id}`);
                      onClose();
                    }}
                    style={{
                      padding: '0.625rem 0.875rem',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{l.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{l.courseTitle} • {l.readTime}</div>
                    </div>
                    <ArrowRight size={14} color="var(--text-muted)" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Glossary */}
          {matchedGlossary.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-teal-light)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <FileText size={13} /> Technical Glossary ({matchedGlossary.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {matchedGlossary.map((g, idx) => (
                  <div
                    key={idx}
                    onClick={() => { navigate('glossary'); onClose(); }}
                    style={{
                      padding: '0.625rem 0.875rem',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-teal-light)' }}>{g.term}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{g.definition}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Courses */}
          {matchedCourses.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                Courses ({matchedCourses.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {matchedCourses.map(c => (
                  <div
                    key={c.id}
                    onClick={() => { navigate(`course/${c.id}`); onClose(); }}
                    style={{
                      padding: '0.625rem 0.875rem',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{c.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.category} • {c.estimatedHours} Hours • {c.difficulty}</div>
                    </div>
                    <span className="badge badge-primary">{c.language}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Community */}
          {matchedPosts.length > 0 && (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-indigo)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Users size={13} /> Community Discussions ({matchedPosts.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {matchedPosts.map(p => (
                  <div
                    key={p.id}
                    onClick={() => { navigate('community'); onClose(); }}
                    style={{
                      padding: '0.625rem 0.875rem',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{p.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>by {p.author.name} • {p.upvotes} upvotes</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchedCourses.length === 0 && matchedLessons.length === 0 && matchedGlossary.length === 0 && matchedPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              No matching curriculum or community posts found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
