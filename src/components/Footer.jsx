import React from 'react';
import { Sparkles, Heart, ShieldCheck, Code2, Globe } from 'lucide-react';

export function Footer({ navigate }) {
  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand Info (2 Cols) */}
          <div style={{ gridColumn: 'span 2' }}>
            <div
              onClick={() => navigate('home')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer', marginBottom: '1rem', userSelect: 'none' }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--brand-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Sparkles size={18} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                EduMind<span style={{ color: 'var(--brand-primary)' }}>.AI</span>
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '380px', marginBottom: '1.25rem' }}>
              The next-generation smart education platform combining reference-depth curriculums, live multi-language code compilation, 24/7 AI mentorship, and cryptographically verifiable certificates.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600, background: 'var(--accent-emerald-subtle)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
              <ShieldCheck size={14} />
              <span>All Systems Operational • Live Piston Sandbox</span>
            </div>
          </div>

          {/* Column 1: Foundational Tracks */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Foundations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><a href="#course/python-beginners" style={{ transition: 'color 0.15s' }}>Python for Beginners</a></li>
              <li><a href="#course/java-beginners" style={{ transition: 'color 0.15s' }}>Java 101 Programming</a></li>
              <li><a href="#course/cpp-beginners" style={{ transition: 'color 0.15s' }}>C++ Fundamentals</a></li>
              <li><a href="#course/html-beginners" style={{ transition: 'color 0.15s' }}>HTML5 from Scratch</a></li>
              <li><a href="#course/css-beginners" style={{ transition: 'color 0.15s' }}>CSS3 & Flexbox Basics</a></li>
              <li><a href="#course/sql-fundamentals" style={{ transition: 'color 0.15s' }}>SQL for Beginners</a></li>
            </ul>
          </div>

          {/* Column 2: Advanced Tracks */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Masterclasses
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><a href="#course/python-mastery">Python AI Engineering</a></li>
              <li><a href="#course/java-enterprise">Java 21 Cloud Architecture</a></li>
              <li><a href="#course/javascript-deep-dive">Modern JavaScript ES2024</a></li>
              <li><a href="#course/fullstack-react">Full-Stack React 19</a></li>
              <li><a href="#course/dsa-mastery">Data Structures & Algo</a></li>
              <li><a href="#glossary">Technical Glossary</a></li>
            </ul>
          </div>

          {/* Column 3: Platform & Links */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><a href="#playground">Online VS Code Compiler</a></li>
              <li><a href="#events">Live Workshops & Events</a></li>
              <li><a href="#community">Community Spaces</a></li>
              <li><a href="#verify">Verify Certificate (/verify)</a></li>
              <li><a href="#pricing">Pricing & Plans</a></li>
              <li><a href="#help">Help & Support FAQ</a></li>
              <li><a href="#legal">Privacy & Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>EduMind.AI</strong>. Empowering self-directed engineers globally.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#legal" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</a>
            <a href="#legal" style={{ color: 'var(--text-secondary)' }}>Terms of Service</a>
            <a href="#help" style={{ color: 'var(--text-secondary)' }}>System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
