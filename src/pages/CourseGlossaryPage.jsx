import React, { useState } from 'react';
import { Search, FileText, ArrowLeft, BookOpen } from 'lucide-react';
import { useCourses } from '../context/CourseContext';

export function CourseGlossaryPage({ navigate }) {
  const { courses } = useCourses();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('all');

  const allGlossaryTerms = [];
  courses.forEach(c => {
    (c.glossary || []).forEach(g => {
      allGlossaryTerms.push({
        ...g,
        courseId: c.id,
        courseTitle: c.title,
        category: c.category
      });
    });
  });

  const filtered = allGlossaryTerms.filter(item => {
    const matchesSearch = !searchTerm || 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCourse = selectedCourseFilter === 'all' || item.courseId === selectedCourseFilter;

    return matchesSearch && matchesCourse;
  });

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-lg">
        <button
          onClick={() => navigate('courses')}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Courses
        </button>

        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            EduMind.AI Technical Glossary
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            A unified, searchable reference index of all computational terms, memory architectures, algorithms, and design principles across our courses.
          </p>
        </div>

        {/* Search & Filter */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--bg-input)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.5rem 0.875rem',
            flex: 1,
            minWidth: '240px'
          }}>
            <Search size={16} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search glossary terms or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                color: 'var(--text-primary)',
                width: '100%',
                fontSize: '0.875rem'
              }}
            />
          </div>

          <select
            value={selectedCourseFilter}
            onChange={(e) => setSelectedCourseFilter(e.target.value)}
            className="form-select"
            style={{ width: 'auto' }}
          >
            <option value="all">All Masterclasses</option>
            {courses.map(c => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>

        {/* Glossary Terms Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{ padding: '1.25rem 1.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--brand-primary-light)', fontWeight: 700 }}>
                  {item.term}
                </h3>
                <span className="badge badge-muted" style={{ fontSize: '0.75rem' }}>
                  {item.courseTitle}
                </span>
              </div>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                {item.definition}
              </p>
            </div>
          ))}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              No glossary terms matching "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
