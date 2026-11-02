import React from 'react';
import { Sparkles, ArrowLeft, Home, BookOpen } from 'lucide-react';

export function NotFoundPage({ navigate }) {
  return (
    <div style={{ padding: '6rem 0', textAlign: 'center' }}>
      <div className="container-lg">
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'rgba(2, 132, 199, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--brand-primary-light)',
          margin: '0 auto 1.5rem auto'
        }}>
          <Sparkles size={32} />
        </div>

        <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--brand-primary-light)', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </h1>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          Looks like this code path doesn't exist.
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '450px', margin: '0 auto 2rem auto' }}>
          The page or lesson you requested has moved or has been refactored. Let's get you back on track with your curriculum.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('home')} className="btn btn-primary btn-sm">
            <Home size={16} /> Return Home
          </button>
          <button onClick={() => navigate('courses')} className="btn btn-secondary btn-sm">
            <BookOpen size={16} /> Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
}
