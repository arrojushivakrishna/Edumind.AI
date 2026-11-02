import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Play, CheckCircle2, ArrowLeft, ArrowRight, Download, 
  ExternalLink, FileText, Code2, AlertTriangle, Info, Terminal, 
  Sparkles, Video, Bookmark, BookmarkCheck, Edit3, HelpCircle, 
  Check, X, Compass, ChevronRight, Layers, Flame
} from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import { executeCode } from '../services/pistonApi';
import { VSCodeEditor } from '../components/VSCodeEditor';

export function LessonViewerPage({ courseId, lessonId, navigate, onOpenQuiz, setAiContext }) {
  const { 
    courses, completedLessons, markLessonComplete, 
    toggleBookmark, isBookmarked, saveNote, getNote 
  } = useCourses();

  const course = courses.find(c => c.id === courseId) || courses[0];
  
  // Find current module and lesson
  let currentModule = null;
  let currentLesson = null;

  if (course && course.modules) {
    for (const mod of course.modules) {
      const found = (mod.lessons || []).find(l => l.id === lessonId);
      if (found) {
        currentModule = mod;
        currentLesson = found;
        break;
      }
    }
  }

  // Fallback to first lesson if not found
  if (!currentLesson && course && course.modules && course.modules[0] && course.modules[0].lessons) {
    currentModule = course.modules[0];
    currentLesson = course.modules[0].lessons[0];
  }

  // Code editor state
  const [code, setCode] = useState(currentLesson ? currentLesson.starterCode : '');
  const [stdin, setStdin] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('Output will appear here upon clicking Run.');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStats, setExecutionStats] = useState(null);
  const [showTranscript, setShowTranscript] = useState(false);

  // Notes & Practice Problem state
  const [showNotes, setShowNotes] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);

  const [practiceCode, setPracticeCode] = useState('');
  const [practiceTestResults, setPracticeTestResults] = useState(null);
  const [isEvaluatingPractice, setIsEvaluatingPractice] = useState(false);

  // Sync state when lesson changes
  useEffect(() => {
    if (currentLesson) {
      setCode(currentLesson.starterCode || '');
      setTerminalOutput('Output will appear here upon clicking Run.');
      setExecutionStats(null);
      setShowTranscript(false);
      
      const existingNote = getNote(course.id, currentLesson.id);
      setNoteContent(existingNote);

      if (currentLesson.practiceProblem) {
        setPracticeCode(currentLesson.practiceProblem.starterCode || '');
        setPracticeTestResults(null);
      }

      if (setAiContext) {
        setAiContext({
          lessonTitle: currentLesson.title,
          courseTitle: course.title,
          language: currentLesson.language || course.language || 'python',
          codeSnippet: currentLesson.starterCode
        });
      }
    }
  }, [lessonId, currentLesson, course, setAiContext]);

  if (!course || !currentLesson) {
    return (
      <div style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Lesson Not Found</h2>
        <button onClick={() => navigate('courses')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Courses
        </button>
      </div>
    );
  }

  const isCompleted = (completedLessons[course.id] || []).includes(currentLesson.id);
  const bookmarked = isBookmarked(course.id, currentLesson.id);

  // Next / Previous Navigation
  const allLessons = [];
  course.modules.forEach(m => {
    (m.lessons || []).forEach(l => allLessons.push(l));
  });
  const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const handleRunCode = async () => {
    setIsExecuting(true);
    setTerminalOutput('Executing on sandbox engine...');
    try {
      const res = await executeCode(currentLesson.language ? currentLesson.language.toLowerCase() : (course.language ? course.language.toLowerCase() : 'python'), code, stdin);
      setExecutionStats(res);
      if (res.stderr) {
        setTerminalOutput(`[Exit Code ${res.exitCode}]\n${res.stderr}`);
      } else {
        setTerminalOutput(`[Exit Code ${res.exitCode}] (${res.timeMs}ms):\n${res.stdout || '(Program completed with no output)'}`);
      }
      // Auto mark completed upon executing code
      markLessonComplete(course.id, currentLesson.id);
    } catch {
      setTerminalOutput('Execution completed.');
    } finally {
      setIsExecuting(false);
    }
  };

  const handleSaveNote = () => {
    saveNote(course.id, currentLesson.id, noteContent);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2000);
  };

  const handleRunPractice = async () => {
    if (!currentLesson.practiceProblem) return;
    setIsEvaluatingPractice(true);
    try {
      const lang = currentLesson.language ? currentLesson.language.toLowerCase() : 'python';
      const testCases = currentLesson.practiceProblem.testCases || [];
      const results = [];

      for (let i = 0; i < testCases.length; i++) {
        const tc = testCases[i];
        const res = await executeCode(lang, practiceCode, tc.input);
        const actual = (res.stdout || '').trim();
        const expected = (tc.expectedOutput || '').trim();
        const passed = actual.includes(expected);
        results.push({ testIndex: i + 1, input: tc.input, expected, actual, passed });
      }

      setPracticeTestResults(results);
    } catch {
      // Ignore
    } finally {
      setIsEvaluatingPractice(false);
    }
  };

  return (
    <div style={{ padding: '2rem 0 6rem 0', background: 'var(--bg-app)' }}>
      <div className="container-xl">
        {/* Breadcrumb & Top Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <button
              onClick={() => navigate(`course/${course.id}`)}
              className="btn btn-ghost btn-sm"
              style={{ padding: '0.25rem 0.5rem', color: 'var(--text-secondary)' }}
            >
              <ArrowLeft size={16} /> {course.title}
            </button>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{currentLesson.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {/* Bookmark Button */}
            <button
              onClick={() => toggleBookmark(course.id, currentLesson.id, currentLesson.title, course.title)}
              className="btn btn-secondary btn-sm"
              style={{ color: bookmarked ? 'var(--brand-primary)' : 'var(--text-secondary)' }}
              title="Bookmark this lesson"
            >
              {bookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            {/* Notes Button */}
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="btn btn-secondary btn-sm"
              style={{ color: showNotes ? 'var(--brand-primary)' : 'var(--text-secondary)' }}
            >
              <Edit3 size={15} />
              <span>Notes {noteContent ? '•' : ''}</span>
            </button>

            {isCompleted ? (
              <span className="badge badge-emerald">
                <CheckCircle2 size={13} /> Completed
              </span>
            ) : (
              <button
                onClick={() => markLessonComplete(course.id, currentLesson.id)}
                className="btn btn-secondary btn-sm"
              >
                Mark Complete
              </button>
            )}

            {currentModule && currentModule.quizId && (
              <button
                onClick={() => onOpenQuiz(currentModule.quizId, course.id)}
                className="btn btn-primary btn-sm"
              >
                Module Quiz
              </button>
            )}
          </div>
        </div>

        {/* Personal Notes Drawer (if opened) */}
        {showNotes && (
          <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem', background: '#FFFBEB', borderColor: '#FDE68A' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#92400E', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Edit3 size={15} /> My Personal Study Notes for "{currentLesson.title}"
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {noteSavedFeedback && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>Saved ✓</span>
                )}
                <button onClick={handleSaveNote} className="btn btn-primary btn-sm" style={{ padding: '0.2rem 0.65rem', fontSize: '0.75rem' }}>
                  Save Note
                </button>
              </div>
            </div>
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Jot down personal key takeaways, syntax reminders, interview tips, or questions for this lesson..."
              style={{
                width: '100%',
                minHeight: '80px',
                padding: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #FCD34D',
                background: '#FFFFFF',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none'
              }}
            />
          </div>
        )}

        {/* Main 2-Column Reference Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '2rem', alignItems: 'flex-start' }}>
          {/* Left Column: Reference Documentation Standard (2 Cols) */}
          <div style={{ gridColumn: 'span 2' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge badge-primary">
                  {course.language} • {currentLesson.readTime || '8 min read'}
                </span>
                <span className="badge badge-emerald">
                  Difficulty: 🟢 Beginner
                </span>
              </div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {currentLesson.title}
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                {currentModule?.title}
              </p>
            </div>

            {/* 1. Technical Definition Box */}
            <div className="ref-section" style={{ background: 'var(--brand-primary-subtle)', borderColor: 'rgba(37, 99, 235, 0.2)' }}>
              <div className="ref-header" style={{ color: 'var(--brand-primary)', borderBottomColor: 'rgba(37, 99, 235, 0.2)' }}>
                <Info size={18} />
                <span>Technical Definition & Mental Model</span>
              </div>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {currentLesson.definition}
              </p>
            </div>

            {/* 2. Visual Diagram / Flowchart (if available) */}
            {(currentLesson.diagramText || course.diagram) && (
              <div className="ref-section" style={{ background: '#0F172A', color: '#38BDF8', borderColor: '#334155' }}>
                <div className="ref-header" style={{ color: '#F8FAFC', borderBottomColor: '#334155' }}>
                  <Layers size={18} color="#38BDF8" />
                  <span>Architecture & Execution Flow Diagram</span>
                </div>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: 1.4, overflowX: 'auto', margin: 0 }}>
                  {currentLesson.diagramText || course.diagram}
                </pre>
              </div>
            )}

            {/* 3. Formal Syntax Block */}
            <div className="ref-section">
              <div className="ref-header">
                <Code2 size={18} />
                <span>Formal Syntax & Method Signature</span>
              </div>
              <div className="code-block" style={{ margin: '0.5rem 0' }}>
                <code>{currentLesson.syntax}</code>
              </div>
              {currentLesson.returnVal && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <strong>Returns:</strong> <code>{currentLesson.returnVal}</code>
                </div>
              )}
            </div>

            {/* 4. Parameters / Attributes Table */}
            {currentLesson.parameters && currentLesson.parameters.length > 0 && (
              <div className="ref-section">
                <div className="ref-header">
                  <FileText size={18} />
                  <span>Parameters & Type Specifications</span>
                </div>
                <table className="params-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Type</th>
                      <th>Required</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentLesson.parameters.map((param, idx) => (
                      <tr key={idx}>
                        <td><strong><code>{param.name}</code></strong></td>
                        <td><code>{param.type}</code></td>
                        <td>
                          <span className={`badge ${param.required ? 'badge-rose' : 'badge-muted'}`} style={{ fontSize: '0.7rem' }}>
                            {param.required ? 'Yes' : 'Optional'}
                          </span>
                        </td>
                        <td><code>{param.default}</code></td>
                        <td>{param.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* 5. Video Walkthrough & Captions */}
            {currentLesson.videoUrl && (
              <div className="ref-section">
                <div className="ref-header">
                  <Video size={18} />
                  <span>Video Walkthrough ({currentLesson.videoDuration || '10:00'})</span>
                </div>
                {(() => {
                  const url = currentLesson.videoUrl;
                  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
                  const match = url ? url.match(regExp) : null;
                  const embedUrl = match && match[1] 
                    ? `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0&modestbranding=1`
                    : (url && url.includes('embed') ? url : null);

                  if (embedUrl) {
                    return (
                      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginBottom: '0.75rem', background: '#000000' }}>
                        <iframe
                          src={embedUrl}
                          title={currentLesson.title}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    );
                  }

                  return (
                    <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginBottom: '0.75rem' }}>
                      <video
                        controls
                        style={{ width: '100%', maxHeight: '360px', display: 'block', background: '#000' }}
                        poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
                      >
                        <source src={currentLesson.videoUrl} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                    </div>
                  );
                })()}
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="btn btn-ghost btn-sm"
                  style={{ color: 'var(--brand-primary)', padding: '0.25rem 0.5rem' }}
                >
                  {showTranscript ? 'Hide Captions & Transcript' : 'Show Full Transcript & Timestamps'}
                </button>
                {showTranscript && (
                  <div style={{ marginTop: '0.75rem', padding: '1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.8125rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', whiteSpace: 'pre-wrap' }}>
                    {currentLesson.transcript}
                  </div>
                )}
              </div>
            )}

            {/* 6. Worked Examples */}
            {currentLesson.examples && currentLesson.examples.length > 0 && (
              <div className="ref-section">
                <div className="ref-header">
                  <Code2 size={18} />
                  <span>Worked Step-by-Step Examples</span>
                </div>
                {currentLesson.examples.map((ex, eIdx) => (
                  <div key={eIdx} style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                      Example {eIdx + 1}: {ex.title}
                    </h4>
                    <div className="code-block" style={{ marginBottom: '0.5rem' }}>
                      <code>{ex.code}</code>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {ex.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 7. Common Mistakes & Gotchas */}
            {currentLesson.gotchas && (
              <div className="ref-section" style={{ background: 'var(--accent-amber-subtle)', borderColor: 'rgba(217, 119, 6, 0.25)' }}>
                <div className="ref-header" style={{ color: 'var(--accent-amber)', borderBottomColor: 'rgba(217, 119, 6, 0.25)' }}>
                  <AlertTriangle size={18} />
                  <span>Common Pitfalls & Gotchas</span>
                </div>
                <p style={{ color: '#92400E', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {currentLesson.gotchas}
                </p>
              </div>
            )}

            {/* 8. Interactive Coding Practice Challenge (if available) */}
            {currentLesson.practiceProblem && (
              <div className="ref-section" style={{ borderColor: 'var(--brand-primary)', background: '#F8FAFC' }}>
                <div className="ref-header" style={{ color: 'var(--brand-primary)' }}>
                  <Flame size={18} />
                  <span>Coding Practice Problem: {currentLesson.practiceProblem.title}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {currentLesson.practiceProblem.description}
                </p>

                <VSCodeEditor
                  code={practiceCode}
                  onChange={setPracticeCode}
                  language={currentLesson.language ? currentLesson.language.toLowerCase() : 'python'}
                  onRun={handleRunPractice}
                  isExecuting={isEvaluatingPractice}
                  height="200px"
                  title="practice_solution"
                />

                {practiceTestResults && (
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700 }}>Test Case Evaluation:</span>
                    {practiceTestResults.map((tr) => (
                      <div
                        key={tr.testIndex}
                        style={{
                          padding: '0.5rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          background: tr.passed ? 'var(--accent-emerald-subtle)' : 'var(--accent-rose-subtle)',
                          border: `1px solid ${tr.passed ? 'rgba(5, 150, 105, 0.3)' : 'rgba(225, 29, 72, 0.3)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.8125rem'
                        }}
                      >
                        <span>Test #{tr.testIndex}: Input {tr.input}</span>
                        <span style={{ fontWeight: 700, color: tr.passed ? 'var(--accent-emerald)' : 'var(--accent-rose)' }}>
                          {tr.passed ? 'PASSED ✓' : 'FAILED ✗'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Bottom Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
              {prevLesson ? (
                <button
                  onClick={() => navigate(`course/${course.id}/lesson/${prevLesson.id}`)}
                  className="btn btn-secondary btn-sm"
                >
                  <ArrowLeft size={16} /> Previous Lesson
                </button>
              ) : <div />}

              {nextLesson ? (
                <button
                  onClick={() => navigate(`course/${course.id}/lesson/${nextLesson.id}`)}
                  className="btn btn-primary btn-sm"
                >
                  Next Lesson <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={() => onOpenQuiz(course.finalExamId, course.id)}
                  className="btn btn-emerald btn-sm"
                >
                  Take Final Certification Exam 🎉
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Live Code Sandbox & Resources (1 Col) */}
          <div>
            <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* VS Code Editor */}
              <div>
                <VSCodeEditor
                  code={code}
                  onChange={setCode}
                  language={currentLesson.language ? currentLesson.language.toLowerCase() : (course.language ? course.language.toLowerCase() : 'python')}
                  onRun={handleRunCode}
                  isExecuting={isExecuting}
                  height="260px"
                  title={`practice.${currentLesson.language === 'python' ? 'py' : currentLesson.language === 'javascript' ? 'js' : currentLesson.language === 'c' ? 'c' : currentLesson.language === 'cpp' ? 'cpp' : currentLesson.language === 'java' ? 'java' : 'code'}`}
                />

                {/* Stdin input */}
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.4rem 0.75rem', marginTop: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Standard input (stdin)..."
                    value={stdin}
                    onChange={(e) => setStdin(e.target.value)}
                    style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
                  />
                </div>

                {/* Output console */}
                <div className="card" style={{ marginTop: '0.5rem', background: '#0F172A', color: '#38BDF8', padding: '0.875rem', minHeight: '100px', maxHeight: '160px', overflowY: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
                  <div style={{ color: '#94A3B8', fontSize: '0.7rem', marginBottom: '2px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>$ live-execution-console</span>
                    {executionStats && <span>{executionStats.timeMs}ms</span>}
                  </div>
                  {terminalOutput}
                </div>
              </div>

              {/* Downloadable Assets */}
              <div className="card" style={{ padding: '1.25rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={16} color="var(--brand-primary)" />
                  <span>Downloadable Lesson Assets</span>
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {(currentLesson.resources || [
                    { id: 'res_1', title: 'Lesson Cheat Sheet & Summary Notes', type: 'PDF', size: '1.4 MB' }
                  ]).map((res, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        padding: '0.5rem 0.75rem',
                        background: 'var(--bg-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.8125rem'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{res.title}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{res.type} • {res.size}</div>
                      </div>
                      <a href="#" download className="btn btn-ghost btn-sm" style={{ padding: '0.2rem 0.4rem', color: 'var(--brand-primary)' }}>
                        <Download size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
