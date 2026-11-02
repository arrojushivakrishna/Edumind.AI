import React, { useState } from 'react';
import { ArrowLeft, Shield, Lock, FileText } from 'lucide-react';

export function LegalPage({ navigate }) {
  const [activeLegalTab, setActiveLegalTab] = useState('privacy'); // 'privacy' | 'terms' | 'cookies'

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-lg">
        <button
          onClick={() => navigate('home')}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '2rem',
          gap: '1rem'
        }}>
          {[
            { key: 'privacy', label: 'Privacy Policy' },
            { key: 'terms', label: 'Terms of Service' },
            { key: 'cookies', label: 'Cookie Policy' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveLegalTab(tab.key)}
              style={{
                padding: '0.75rem 1rem',
                fontSize: '0.9375rem',
                fontWeight: activeLegalTab === tab.key ? 700 : 500,
                color: activeLegalTab === tab.key ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                borderBottom: activeLegalTab === tab.key ? '2px solid var(--brand-primary-light)' : '2px solid transparent',
                background: 'transparent'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="card" style={{ padding: '2.5rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
          {activeLegalTab === 'privacy' && (
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                EduMind.AI Privacy Policy
              </h1>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Effective: August 14, 2026</p>
              
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                1. Information We Collect
              </h3>
              <p>
                EduMind.AI collects account credentials, lesson progress metrics, code playground execution logs, and voluntary forum contributions to deliver accurate progress calculation and accredited certificates.
              </p>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                2. Code Sandbox Execution Privacy
              </h3>
              <p>
                Code submitted through our Monaco/CodeMirror editor is passed to isolated sandbox containers via the Piston API. Execution sessions are ephemeral, securely destroyed upon program termination, and not used for LLM training without explicit opt-in.
              </p>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                3. Your Data Portability Rights
              </h3>
              <p>
                You retain full ownership of your data and can export all records in machine-readable JSON format or delete your account at any time via Account Settings.
              </p>
            </div>
          )}

          {activeLegalTab === 'terms' && (
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Terms of Service
              </h1>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Effective: August 14, 2026</p>
              <p>
                By accessing EduMind.AI, you agree to adhere to our community code of conduct, respect intellectual property, and uphold academic integrity during exams.
              </p>
            </div>
          )}

          {activeLegalTab === 'cookies' && (
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Cookie Notice
              </h1>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Effective: August 14, 2026</p>
              <p>
                We use strictly essential cookies and local storage tokens to preserve your active session, theme preferences, and course completion states across device reloads.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
