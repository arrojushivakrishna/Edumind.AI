import React, { useState } from 'react';
import { 
  BookOpen, Clock, Award, Star, CheckCircle2, ChevronDown, ChevronUp, 
  Play, Lock, FileText, ArrowRight, ShieldCheck, UserCheck 
} from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';

export function CourseDetailPage({ courseId, navigate, onOpenQuiz }) {
  const { courses, enrolledCourseIds, enrollCourse, getCourseProgress, completedLessons } = useCourses();
  const { isAuthenticated } = useAuth();

  const course = courses.find(c => c.id === courseId) || courses[0];
  const isEnrolled = enrolledCourseIds.includes(course.id);
  const progress = getCourseProgress(course.id);
  const courseCompletedLessons = completedLessons[course.id] || [];

  // Expanded modules accordion state
  const [expandedModules, setExpandedModules] = useState({
    [course.modules[0]?.id || 'mod-1']: true
  });

  const toggleModule = (modId) => {
    setExpandedModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  const handleEnroll = () => {
    enrollCourse(course.id);
  };

  // Find next uncompleted lesson or first lesson
  let nextLesson = null;
  for (const mod of course.modules) {
    for (const les of mod.lessons || []) {
      if (!courseCompletedLessons.includes(les.id)) {
        nextLesson = { modId: mod.id, lesId: les.id };
        break;
      }
    }
    if (nextLesson) break;
  }
  if (!nextLesson && course.modules[0]?.lessons[0]) {
    nextLesson = { modId: course.modules[0].id, lesId: course.modules[0].lessons[0].id };
  }

  let totalLessonsCount = 0;
  course.modules.forEach(m => totalLessonsCount += (m.lessons || []).length);

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-xl">
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <a href="#courses" onClick={(e) => { e.preventDefault(); navigate('courses'); }}>Courses</a>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary-light)' }}>{course.category}</span>
          <span>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{course.title}</span>
        </div>

        {/* Hero Course Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Main Info (2 Cols) */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge badge-primary">{course.category}</span>
              <span className="badge badge-muted">{course.difficulty}</span>
              <span className="badge badge-emerald">Verified Curriculum</span>
            </div>

            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
              {course.title}
            </h1>

            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {course.subtitle}
            </p>

            {/* Quick Metrics */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              padding: '1.25rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Rating</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} fill="#F59E0B" /> {course.rating} ({course.reviewsCount} reviews)
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Estimated Time</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  ⏱ {course.estimatedHours} Hours
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Curriculum</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  📚 {course.modules.length} Modules ({totalLessonsCount} Lessons)
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Language & Tools</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--brand-primary-light)' }}>
                  {course.language}
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
                What You'll Be Able to Build & Do
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '0.875rem'
              }}>
                {(course.outcomes || []).map((outcome, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.875rem 1rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Prerequisites
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {(course.prerequisites || []).map((req, idx) => (
                  <li key={idx} style={{ marginBottom: '0.375rem' }}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar CTA & Instructor Card (1 Col) */}
          <div>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-md)',
              position: 'sticky',
              top: '90px'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Enrollment & Progress</h3>
              
              {isEnrolled ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Completed</span>
                    <span style={{ fontWeight: 700, color: 'var(--brand-primary-light)' }}>{progress}%</span>
                  </div>
                  <div className="progress-bar-container" style={{ height: '10px', marginBottom: '1.25rem' }}>
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <button
                    onClick={() => {
                      if (nextLesson) {
                        navigate(`course/${course.id}/lesson/${nextLesson.lesId}`);
                      }
                    }}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.875rem', marginBottom: '0.75rem' }}
                  >
                    <span>Continue Learning</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Free with Account
                  </div>
                  <button
                    onClick={handleEnroll}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.875rem', marginBottom: '0.75rem' }}
                  >
                    <span>Enroll in Masterclass</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}

              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1.5rem' }}>
                Full lifetime access • Verifiable certificate included
              </div>

              {/* Instructor Credentials */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Course Author & Instructor
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {course.instructor.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--brand-primary-light)' }}>
                      {course.instructor.role}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {course.instructor.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Syllabus & Curriculum Accordions */}
        <div style={{ maxWidth: '850px', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Course Syllabus</h2>
            <button 
              onClick={() => navigate('glossary')}
              className="btn btn-ghost btn-sm"
              style={{ color: 'var(--brand-primary-light)' }}
            >
              <FileText size={15} /> View Course Technical Glossary
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {course.modules.map((module, mIdx) => {
              const isExpanded = !!expandedModules[module.id];
              return (
                <div
                  key={module.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Module Accordion Header */}
                  <div
                    onClick={() => toggleModule(module.id)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      background: isExpanded ? 'var(--bg-card-elevated)' : 'transparent',
                      transition: 'background var(--transition-fast)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {module.title}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                        {module.description}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="badge badge-muted" style={{ fontSize: '0.75rem' }}>
                        {(module.lessons || []).length} Lessons
                      </span>
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>

                  {/* Lessons List in Module */}
                  {isExpanded && (
                    <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '0.5rem 0' }}>
                      {(module.lessons || []).map((lesson, lIdx) => {
                        const isDone = courseCompletedLessons.includes(lesson.id);
                        return (
                          <div
                            key={lesson.id}
                            onClick={() => navigate(`course/${course.id}/lesson/${lesson.id}`)}
                            style={{
                              padding: '0.875rem 1.5rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              cursor: 'pointer',
                              borderBottom: lIdx < module.lessons.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                              transition: 'background var(--transition-fast)'
                            }}
                            className="lesson-row-hover"
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                              {isDone ? (
                                <CheckCircle2 size={18} color="var(--accent-emerald)" />
                              ) : (
                                <div style={{
                                  width: '18px',
                                  height: '18px',
                                  borderRadius: '50%',
                                  border: '2px solid var(--border-medium)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }} />
                              )}
                              <div>
                                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                  {lesson.title}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                  ⏱ {lesson.readTime} read • 🎬 {lesson.videoDuration} video • Reference Standard
                                </div>
                              </div>
                            </div>

                            <span style={{ fontSize: '0.8125rem', color: 'var(--brand-primary-light)', fontWeight: 600 }}>
                              Start Lesson →
                            </span>
                          </div>
                        );
                      })}

                      {/* Module Quiz Trigger */}
                      {module.quizId && (
                        <div
                          onClick={() => onOpenQuiz(module.quizId, course.id)}
                          style={{
                            padding: '0.875rem 1.5rem',
                            background: 'rgba(2, 132, 199, 0.08)',
                            borderTop: '1px solid var(--border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Award size={18} color="var(--brand-primary-light)" />
                            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--brand-primary-light)' }}>
                              Module Mastery Quiz (5+ Questions)
                            </span>
                          </div>
                          <span className="badge badge-primary">Test Knowledge</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Course Final Exam Trigger */}
            {course.finalExamId && (
              <div
                onClick={() => onOpenQuiz(course.finalExamId, course.id)}
                style={{
                  background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
                  border: '1px solid var(--brand-primary-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={20} color="var(--accent-emerald)" />
                    Comprehensive Final Certification Exam (15 Questions)
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    Required for official certificate accreditation (Passing score: 80%)
                  </div>
                </div>
                <button className="btn btn-emerald btn-sm">
                  Launch Final Exam
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
