import React from 'react';
import { 
  BookOpen, Flame, Award, Calendar, Clock, CheckCircle2, 
  ArrowRight, Play, Sparkles, TrendingUp, Code2, Compass, GitCompare, LogIn
} from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import { useEvents } from '../context/EventContext';

export function DashboardPage({ navigate, onOpenQuiz, onOpenGoogleAuth }) {
  const { courses, enrolledCourseIds, completedLessons, getCourseProgress, certificates, enrollCourse } = useCourses();
  const { user, isAuthenticated } = useAuth();
  const { userRegistrations, events } = useEvents();

  const enrolledCourses = courses.filter(c => enrolledCourseIds.includes(c.id));

  // Compute total completed lessons platform-wide
  let totalCompletedLessonsCount = 0;
  Object.values(completedLessons).forEach(list => {
    totalCompletedLessonsCount += (list || []).length;
  });

  const registeredEventList = Object.values(userRegistrations || {});

  const recommendedCourses = courses.filter(c => !enrolledCourseIds.includes(c.id)).slice(0, 3);

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-xl">
        {/* Guest Mode Callout Banner */}
        {!isAuthenticated && (
          <div style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
            border: '1px solid #BFDBFE',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.75rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Sparkles size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1E293B', margin: 0 }}>
                  Viewing Dashboard in Guest Mode
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#64748B', margin: '2px 0 0 0' }}>
                  Sign in with Google to synchronize your compiler projects, keep your streak alive, and generate verified certificates in your own name.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <button
                onClick={() => onOpenGoogleAuth ? onOpenGoogleAuth() : navigate('login')}
                className="btn btn-secondary btn-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  background: '#FFFFFF',
                  borderColor: '#CBD5E1',
                  color: '#1E293B'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              <button
                onClick={() => navigate('signup')}
                className="btn btn-primary btn-sm"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {/* Welcome Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
              Learner Command Center
            </div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800 }}>
              Welcome back, {user ? user.name : 'Learner'}! 👋
            </h1>
          </div>

          {/* Quick Streak & Stats Header Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '0.75rem 1.25rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Flame size={20} fill="#F59E0B" color="#F59E0B" />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-amber)' }}>
                  {user ? user.streak : 12} Days
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Active Streak</div>
              </div>
            </div>

            <div style={{ width: '1px', height: '28px', background: 'var(--border-subtle)' }} />

            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
                {totalCompletedLessonsCount}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Lessons Done</div>
            </div>

            <div style={{ width: '1px', height: '28px', background: 'var(--border-subtle)' }} />

            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                {certificates.length}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Certificates</div>
            </div>
          </div>
        </div>

        {/* Quick Launch Hub Shortcuts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          <div
            onClick={() => navigate('playground')}
            className="card card-hover"
            style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--brand-primary-subtle)', color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Online Compiler</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>20+ languages sandbox</div>
            </div>
          </div>

          <div
            onClick={() => navigate('events')}
            className="card card-hover"
            style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--accent-emerald-subtle)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Live Events & Workshops</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Interactive webinars</div>
            </div>
          </div>

          <div
            onClick={() => navigate('courses')}
            className="card card-hover"
            style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--accent-purple-subtle)', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>20 Language Tracks</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Curated with 3 modules</div>
            </div>
          </div>

          <div
            onClick={() => navigate('certificates')}
            className="card card-hover"
            style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--accent-amber-subtle)', color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>My Certificates</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Download in your name</div>
            </div>
          </div>
        </div>

        {/* Continue Learning Spotlight */}
        {enrolledCourses.length > 0 && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(248, 250, 252, 0.9) 100%)',
            border: '1px solid #BFDBFE',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem 2rem',
            marginBottom: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="badge badge-primary">Active Learning Focus</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{enrolledCourses[0].category}</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {enrolledCourses[0].title}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <span>Progress: <strong>{getCourseProgress(enrolledCourses[0].id)}%</strong></span>
                <span>•</span>
                <span>Module 1: Language Syntax & Interactive References</span>
              </div>
            </div>

            <button
              onClick={() => {
                const firstLes = enrolledCourses[0].modules[0]?.lessons[0]?.id || 'les-py-101';
                navigate(`course/${enrolledCourses[0].id}/lesson/${firstLes}`);
              }}
              className="btn btn-primary btn-lg"
              style={{ gap: '0.5rem' }}
            >
              <Play size={18} fill="#FFFFFF" />
              <span>Resume Lesson</span>
            </button>
          </div>
        )}

        {/* 2-Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {/* Left 2 Cols: Enrolled Masterclasses */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Your Enrolled Masterclasses</h2>
              <button onClick={() => navigate('courses')} className="btn btn-ghost btn-sm" style={{ color: 'var(--brand-primary)' }}>
                Browse All 20 Languages +
              </button>
            </div>

            {enrolledCourses.length === 0 ? (
              <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                <BookOpen size={36} color="var(--brand-primary)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  No courses enrolled yet!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                  Choose from Python, Java, C++, Go, Rust, or any of our 20 comprehensive tracks to begin your learning streak.
                </p>
                <button onClick={() => navigate('courses')} className="btn btn-primary">
                  Explore Course Catalog
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {enrolledCourses.map(course => {
                  const progress = getCourseProgress(course.id);
                  let totalLessons = 0;
                  (course.modules || []).forEach(m => totalLessons += (m.lessons || []).length);
                  const completedCount = (completedLessons[course.id] || []).length;

                  return (
                    <div
                      key={course.id}
                      className="card card-hover"
                      style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div>
                          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.35rem' }}>
                            <span className="badge badge-primary">{course.category}</span>
                            <span className="badge badge-muted">{course.language}</span>
                          </div>
                          <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{course.title}</h3>
                        </div>
                        <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                          {progress}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="progress-bar-container" style={{ height: '8px' }}>
                        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                        <span>{completedCount} of {totalLessons} lessons completed</span>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <button
                            onClick={() => navigate(`course/${course.id}`)}
                            className="btn btn-secondary btn-sm"
                          >
                            Syllabus
                          </button>
                          <button
                            onClick={() => {
                              const lesId = course.modules[0]?.lessons[0]?.id || 'les-py-101';
                              navigate(`course/${course.id}/lesson/${lesId}`);
                            }}
                            className="btn btn-primary btn-sm"
                          >
                            Continue Learning →
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right 1 Col: Credentials, Registered Events & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Certificates Box */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={18} color="var(--brand-primary)" />
                  Earned Certificates ({certificates.length})
                </h3>
              </div>

              {certificates.length === 0 ? (
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Pass a masterclass final exam with 80%+ and complete all lessons to auto-issue your official accredited certificate!
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {certificates.map(cert => (
                    <div
                      key={cert.id}
                      onClick={() => navigate('certificates')}
                      style={{
                        padding: '0.75rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {cert.courseTitle}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--brand-primary)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                        {cert.code} • Grade {cert.grade}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => navigate('certificates')}
                className="btn btn-ghost btn-sm"
                style={{ width: '100%', marginTop: '1rem', color: 'var(--brand-primary)' }}
              >
                View Certificate Gallery →
              </button>
            </div>

            {/* Upcoming Registered Events */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} color="var(--accent-emerald)" />
                Upcoming Live Sessions
              </h3>

              {registeredEventList.length === 0 ? (
                <div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    You have not registered for any live workshops yet.
                  </div>
                  {events && events.length > 0 && (
                    <div style={{
                      padding: '0.75rem',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      marginBottom: '0.75rem'
                    }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>Featured Event</div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>{events[0].title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{events[0].date} • {events[0].time}</div>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {registeredEventList.map(reg => (
                    <div
                      key={reg.eventId}
                      style={{
                        padding: '0.75rem',
                        background: 'var(--bg-surface)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {reg.eventTitle}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {reg.date} • {reg.time}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => navigate('events')}
                className="btn btn-ghost btn-sm"
                style={{ width: '100%', marginTop: '0.5rem', color: 'var(--brand-primary)' }}
              >
                Explore Live Schedule →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
