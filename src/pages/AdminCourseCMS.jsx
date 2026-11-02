import React, { useState } from 'react';
import { 
  Shield, Plus, ArrowUp, ArrowDown, Trash2, Edit3, CheckCircle2, 
  AlertTriangle, BookOpen, FileText, Check, ArrowLeft 
} from 'lucide-react';
import { useCourses } from '../context/CourseContext';

export function AdminCourseCMS({ navigate }) {
  const { courses, addCourse, updateCourse, deleteCourse, checkCourseCompleteness } = useCourses();
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id || '');
  const [isEditing, setIsEditing] = useState(false);

  const activeCourse = courses.find(c => c.id === selectedCourseId) || courses[0];
  const completeness = checkCourseCompleteness(activeCourse);

  // New Lesson Form
  const [newLessonModalOpen, setNewLessonModalOpen] = useState(false);
  const [targetModuleId, setTargetModuleId] = useState(null);
  const [lessonForm, setLessonForm] = useState({
    title: '',
    definition: '',
    syntax: '',
    parameters: [
      { name: 'param1', type: 'str', required: true, default: 'None', description: 'Primary parameter description' }
    ],
    starterCode: '# Python practice snippet\nprint("Hello EduMind!")',
    gotchas: 'Remember to validate input types.',
    readTime: '10 min',
    language: 'python'
  });

  const handleMoveModule = (idx, direction) => {
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= activeCourse.modules.length) return;

    const modules = [...activeCourse.modules];
    const temp = modules[idx];
    modules[idx] = modules[newIdx];
    modules[newIdx] = temp;

    updateCourse(activeCourse.id, { modules });
  };

  const handleAddModule = () => {
    const newMod = {
      id: `mod_${Date.now()}`,
      title: `Module ${activeCourse.modules.length + 1}: Advanced Topics`,
      description: 'Newly authored curriculum module.',
      quizId: null,
      lessons: []
    };
    updateCourse(activeCourse.id, { modules: [...activeCourse.modules, newMod] });
  };

  const handleSaveNewLesson = (e) => {
    e.preventDefault();
    if (!targetModuleId) return;

    const newLesson = {
      id: `les_${Date.now()}`,
      title: lessonForm.title,
      definition: lessonForm.definition,
      syntax: lessonForm.syntax,
      parameters: lessonForm.parameters,
      returnVal: 'Returns evaluated output',
      examples: [
        { title: 'Standard Usage', code: lessonForm.starterCode, explanation: 'Basic example explanation' }
      ],
      gotchas: lessonForm.gotchas,
      supportNotes: 'Available across all standard environments.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      videoDuration: '5:00',
      transcript: 'Full video walkthrough transcript...',
      starterCode: lessonForm.starterCode,
      hasCodeEditor: true,
      language: lessonForm.language,
      readTime: lessonForm.readTime
    };

    const updatedModules = activeCourse.modules.map(m => {
      if (m.id === targetModuleId) {
        return { ...m, lessons: [...(m.lessons || []), newLesson] };
      }
      return m;
    });

    updateCourse(activeCourse.id, { modules: updatedModules });
    setNewLessonModalOpen(false);
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-xl">
        <button
          onClick={() => navigate('courses')}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Catalog
        </button>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(2, 132, 199, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-primary-light)'
            }}>
              <Shield size={22} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>
                Course Authoring CMS & Curriculum Builder
              </h1>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0 }}>
                Manage modules, drag-and-drop lessons, and validate reference-depth completeness before publishing.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="form-select"
              style={{ width: 'auto', fontWeight: 600 }}
            >
              {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </div>
        </div>

        {/* Completeness Checklist Alert */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: completeness.isComplete ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
          border: `1px solid ${completeness.isComplete ? 'var(--accent-emerald)' : 'var(--accent-amber)'}`,
          borderRadius: 'var(--radius-md)',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1rem', color: completeness.isComplete ? 'var(--accent-emerald)' : 'var(--accent-amber)', marginBottom: '0.35rem' }}>
              {completeness.isComplete ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
              <span>{completeness.isComplete ? 'Pre-Publish Standard Met: Ready for Live Catalog' : 'Completeness Requirements Missing (Draft Mode)'}</span>
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              EduMind.AI enforces zero placeholder lessons. Every concept must have definitions, signatures, parameters tables, runnable examples, and gotchas.
            </div>
            {!completeness.isComplete && (
              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.75rem', color: 'var(--accent-amber)', marginTop: '0.5rem' }}>
                {completeness.issues.map((iss, iIdx) => <li key={iIdx}>{iss}</li>)}
              </ul>
            )}
          </div>

          <span className={`badge ${completeness.isComplete ? 'badge-emerald' : 'badge-amber'}`}>
            {completeness.isComplete ? 'Live & Published' : 'Draft Status'}
          </span>
        </div>

        {/* Course Modules Management */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Curriculum Structure</h2>
          <button onClick={handleAddModule} className="btn btn-primary btn-sm">
            <Plus size={15} /> Add New Module
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          {activeCourse.modules.map((mod, mIdx) => (
            <div key={mod.id} className="card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {mod.title}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {mod.description}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => handleMoveModule(mIdx, -1)}
                    disabled={mIdx === 0}
                    className="btn btn-ghost btn-sm"
                    title="Move Module Up"
                  >
                    <ArrowUp size={15} />
                  </button>
                  <button
                    onClick={() => handleMoveModule(mIdx, 1)}
                    disabled={mIdx === activeCourse.modules.length - 1}
                    className="btn btn-ghost btn-sm"
                    title="Move Module Down"
                  >
                    <ArrowDown size={15} />
                  </button>
                  <button
                    onClick={() => {
                      setTargetModuleId(mod.id);
                      setNewLessonModalOpen(true);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <Plus size={14} /> Add Lesson
                  </button>
                </div>
              </div>

              {/* Lessons inside Module */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {(mod.lessons || []).map((les) => (
                  <div
                    key={les.id}
                    style={{
                      padding: '0.625rem 0.875rem',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginRight: '0.5rem' }}>
                        {les.title}
                      </span>
                      <span className="badge badge-muted" style={{ fontSize: '0.7rem' }}>
                        {les.language || 'Python'}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                      ✓ Reference Standard
                    </div>
                  </div>
                ))}

                {(mod.lessons || []).length === 0 && (
                  <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                    No lessons in this module yet. Click "+ Add Lesson" to build reference content.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Lesson Modal */}
        {newLessonModalOpen && (
          <div className="modal-overlay" onClick={() => setNewLessonModalOpen(false)}>
            <div className="modal-content" style={{ maxWidth: '650px' }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Add Reference-Depth Lesson</h3>
                <button onClick={() => setNewLessonModalOpen(false)} className="btn btn-ghost btn-sm">✕</button>
              </div>

              <form onSubmit={handleSaveNewLesson}>
                <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                  <div className="form-group">
                    <label className="form-label">Lesson Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asynchronous Generators and Iterators"
                      value={lessonForm.title}
                      onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Technical Definition (1-2 sentences)</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Clear plain-text definition of this concept..."
                      value={lessonForm.definition}
                      onChange={(e) => setLessonForm({ ...lessonForm, definition: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Syntax / Signature</label>
                    <input
                      type="text"
                      required
                      placeholder="async def function_name(*args) -> AsyncIterator[T]:"
                      value={lessonForm.syntax}
                      onChange={(e) => setLessonForm({ ...lessonForm, syntax: e.target.value })}
                      className="form-input"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Starter Practice Code</label>
                    <textarea
                      rows={4}
                      value={lessonForm.starterCode}
                      onChange={(e) => setLessonForm({ ...lessonForm, starterCode: e.target.value })}
                      className="form-textarea"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Common Mistakes & Gotchas</label>
                    <textarea
                      rows={2}
                      placeholder="What errors will learners face and how to resolve them?"
                      value={lessonForm.gotchas}
                      onChange={(e) => setLessonForm({ ...lessonForm, gotchas: e.target.value })}
                      className="form-textarea"
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" onClick={() => setNewLessonModalOpen(false)} className="btn btn-secondary btn-sm">Cancel</button>
                  <button type="submit" className="btn btn-primary btn-sm">Save & Attach to Module</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
