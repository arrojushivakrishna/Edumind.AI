import React from 'react';
import { 
  Award, Flame, Sparkles, ExternalLink, Code2, ArrowLeft, 
  MessageSquare, UserCheck, ShieldCheck 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCourses } from '../context/CourseContext';
import { useCommunity } from '../context/CommunityContext';

export function UserProfilePage({ username, navigate, onOpenDM }) {
  const { user } = useAuth();
  const { certificates } = useCourses();
  const { posts } = useCommunity();

  // Find user's showcased projects from community posts
  const userShowcases = posts.filter(p => p.author.username === username && p.category === 'showcase');

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-lg">
        <button
          onClick={() => navigate('community')}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Community
        </button>

        {/* Profile Header Banner */}
        <div className="card" style={{ padding: '2.5rem 2rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'}
              alt={username}
              style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-primary-light)' }}
            />

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, margin: 0 }}>
                  {user ? user.name : 'Alex Rivera'}
                </h1>
                <span className="badge badge-primary">@{username}</span>
                <span className="badge badge-emerald">Verified Learner</span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '1rem', maxWidth: '600px' }}>
                {user?.bio || 'Software engineer passionate about AI architecture, distributed systems, and modern web engineering.'}
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-amber)', fontWeight: 700 }}>
                  <Flame size={16} fill="#F59E0B" /> {user?.streak || 12} Day Streak
                </span>
                <span>⚡ <strong>{user?.reputation || 840}</strong> Reputation Points</span>
                <span>🎓 <strong>{certificates.length || 1}</strong> Accredited Certifications</span>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenDM && onOpenDM(username)}
                className="btn btn-primary btn-sm"
              >
                <MessageSquare size={15} /> Send Direct Message
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '2rem' }}>
          {/* Verified Certificates */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} color="var(--brand-primary-light)" />
              Earned Certifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(certificates.length > 0 ? certificates : [
                {
                  code: 'EDU-2026-PY-9842F',
                  courseTitle: 'Python Masterclass: From Fundamentals to AI Engineering',
                  grade: '98% (Distinction)',
                  issuedDate: '2026-08-14'
                }
              ]).map(c => (
                <div
                  key={c.code}
                  style={{
                    padding: '0.875rem 1rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {c.courseTitle}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <span style={{ color: 'var(--brand-primary-light)', fontFamily: 'var(--font-mono)' }}>{c.code}</span>
                    <span>Grade: {c.grade} • {c.issuedDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Showcased Projects */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="var(--accent-emerald)" />
              Showcased Projects
            </h3>

            {userShowcases.length === 0 ? (
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                No showcased projects posted yet. Finish a masterclass to showcase your build!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {userShowcases.map(sc => (
                  <div key={sc.id} style={{ padding: '0.875rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {sc.title}
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: '0 0 0.5rem 0' }}>
                      {sc.content.substring(0, 120)}...
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {sc.projectMeta?.liveDemo && (
                        <a href={sc.projectMeta.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ fontSize: '0.75rem' }}>
                          <ExternalLink size={12} /> Demo
                        </a>
                      )}
                      {sc.projectMeta?.github && (
                        <a href={sc.projectMeta.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ fontSize: '0.75rem' }}>
                          <Code2 size={12} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
