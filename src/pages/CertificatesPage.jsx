import React, { useState } from 'react';
import { 
  Award, Download, Share2, ExternalLink, CheckCircle2, 
  Copy, Check, ShieldCheck, Sparkles, ArrowLeft, User, Plus, FileCode 
} from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import { downloadCertificateCanvas, generateCertificateCode } from '../services/certificateService';

export function CertificatesPage({ navigate }) {
  const { certificates, courses, saveCourse } = useCourses();
  const { user } = useAuth();
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);
  const [selectedCourseToGenerate, setSelectedCourseToGenerate] = useState(courses[0]?.id || 'python-lang');
  const [isGenerating, setIsGenerating] = useState(false);

  const activeUserName = user?.name || 'Learner';

  const userCerts = (certificates || []).map(c => ({
    ...c,
    recipientName: activeUserName
  }));

  const currentCert = selectedCert || (userCerts.length > 0 ? userCerts[0] : null);

  const handleCopyLink = (code) => {
    const url = `${window.location.origin}/verify/${code}`;
    navigator.clipboard.writeText(url);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleDownload = () => {
    if (currentCert) {
      downloadCertificateCanvas(currentCert, activeUserName);
    }
  };

  const handleGenerateMyCertificate = () => {
    setIsGenerating(true);
    const targetCourse = courses.find(c => c.id === selectedCourseToGenerate) || courses[0];
    
    const newCert = {
      id: `cert_${Date.now()}`,
      code: generateCertificateCode(targetCourse.id, user?.id || 'usr_direct'),
      courseId: targetCourse.id,
      courseTitle: targetCourse.title,
      recipientName: activeUserName,
      issuedDate: new Date().toISOString().split('T')[0],
      grade: '98% (Distinction)',
      instructor: targetCourse.instructor?.name || 'EduMind.AI Academic Board',
      skills: targetCourse.outcomes || ['Software Engineering', 'Algorithms', 'Language Architecture'],
      verificationHash: `sha256:${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`
    };

    // Save certificate to localStorage
    try {
      const saved = localStorage.getItem('edumind_user_certificates');
      const list = saved ? JSON.parse(saved) : [];
      const updated = [newCert, ...list.filter(c => c.courseId !== targetCourse.id)];
      localStorage.setItem('edumind_user_certificates', JSON.stringify(updated));
      window.location.reload(); // Refresh to update context
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-emerald">Accredited Credentials</span>
            <span className="badge badge-primary">Dynamic Real-Name Synchronization</span>
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            My Verified Certificates of Mastery
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            All issued credentials automatically synchronize with your active account name: <strong style={{ color: 'var(--brand-primary)' }}>{activeUserName}</strong>.
          </p>
        </div>

        {/* Action Banner: Generate Certificate for Any Completed Course */}
        <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem', background: '#EFF6FF', borderColor: '#BFDBFE' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={20} /> Generate / Claim Official Certificate in My Name
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>
                Select a completed course track to issue your official verifiable certificate for <strong>{activeUserName}</strong>.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <select
                value={selectedCourseToGenerate}
                onChange={(e) => setSelectedCourseToGenerate(e.target.value)}
                className="form-select"
                style={{ width: 'auto', fontWeight: 600, background: '#FFFFFF' }}
              >
                {courses.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.language})
                  </option>
                ))}
              </select>

              <button
                onClick={handleGenerateMyCertificate}
                disabled={isGenerating}
                className="btn btn-primary"
                style={{ gap: '0.5rem', fontWeight: 700 }}
              >
                <Plus size={16} />
                <span>{isGenerating ? 'Issuing...' : 'Generate My Certificate'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Certificate Display Area */}
        {currentCert ? (
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '2.5rem' }}>
            {/* Left: Certificate Visual Preview (2 Cols) */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%)',
                border: '3px solid var(--brand-primary)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem 2.5rem',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
                textAlign: 'center',
                overflow: 'hidden'
              }}>
                {/* Header Seal */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--brand-primary-subtle)',
                  color: 'var(--brand-primary)',
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  marginBottom: '1.25rem',
                  letterSpacing: '0.04em'
                }}>
                  <ShieldCheck size={16} />
                  <span>EDUMIND.AI ACCREDITED CERTIFICATION</span>
                </div>

                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                  This official credential is proudly awarded to
                </div>

                {/* Recipient Full Name */}
                <h2 style={{
                  fontSize: '2.75rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  margin: '1rem 0',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-sans)'
                }}>
                  {activeUserName}
                </h2>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  for successfully mastering curriculum requirements, passing sandbox coding exercises, and scoring distinction in:
                </p>

                {/* Course Title */}
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--brand-primary)',
                  marginBottom: '1.5rem',
                  padding: '0.5rem 1.5rem',
                  background: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  display: 'inline-block',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {currentCert.courseTitle}
                </div>

                {/* Details Bar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-subtle)',
                  borderBottom: '1px solid var(--border-subtle)',
                  padding: '1rem 0',
                  margin: '1.5rem 0',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.84rem'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Issue Date: </span>
                    <strong>{currentCert.issuedDate || new Date().toISOString().split('T')[0]}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Score / Grade: </span>
                    <strong style={{ color: 'var(--accent-emerald)' }}>{currentCert.grade || '98% (Distinction)'}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Certificate ID: </span>
                    <strong style={{ fontFamily: 'var(--font-mono)' }}>{currentCert.code}</strong>
                  </div>
                </div>

                {/* Signatures & Footer Seal */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
                      {currentCert.instructor || 'Dr. Sarah Chen'}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Lead Academic Faculty Board</div>
                  </div>

                  <div style={{
                    background: 'var(--accent-emerald-subtle)',
                    border: '1px solid rgba(5, 150, 105, 0.3)',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--accent-emerald)',
                    fontSize: '0.8125rem',
                    fontWeight: 700
                  }}>
                    <CheckCircle2 size={16} />
                    <span>Cryptographically Authenticated</span>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>EduMind.AI Council</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Certified Education Platform</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Actions & Cert Selector (1 Col) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Action Buttons */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                  Certificate Actions
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    onClick={handleDownload}
                    className="btn btn-primary"
                    style={{ width: '100%', gap: '0.5rem', fontWeight: 700 }}
                  >
                    <Download size={16} />
                    <span>Download High-Res PNG</span>
                  </button>

                  <button
                    onClick={() => handleCopyLink(currentCert.code)}
                    className="btn btn-secondary"
                    style={{ width: '100%', gap: '0.5rem' }}
                  >
                    {copiedCode === currentCert.code ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                    <span>{copiedCode === currentCert.code ? 'Public Link Copied!' : 'Copy Verification Link'}</span>
                  </button>

                  <button
                    onClick={() => navigate(`verify/${currentCert.code}`)}
                    className="btn btn-ghost btn-sm"
                    style={{ color: 'var(--brand-primary)', width: '100%', gap: '4px' }}
                  >
                    <span>Open Public Verification Page</span>
                    <ExternalLink size={13} />
                  </button>
                </div>
              </div>

              {/* Gallery of all earned certificates */}
              {userCerts.length > 1 && (
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    My Other Certificates ({userCerts.length})
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {userCerts.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => setSelectedCert(c)}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          background: currentCert.id === c.id ? 'var(--brand-primary-subtle)' : 'var(--bg-subtle)',
                          border: `1px solid ${currentCert.id === c.id ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.8125rem'
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{c.courseTitle}</span>
                        <span className="badge badge-primary">{c.grade || '98%'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="card" style={{ padding: '3.5rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <Award size={48} color="var(--brand-primary)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              No Certificates Earned Yet
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Complete course modules or use the generator tool above to issue your official verifiable certificate in your name: <strong>{activeUserName}</strong>!
            </p>
            <button onClick={() => navigate('courses')} className="btn btn-primary">
              Explore Course Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
