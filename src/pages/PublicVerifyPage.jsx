import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Search, CheckCircle2, AlertCircle, Award, 
  ExternalLink, Calendar, User, ArrowLeft, Download, Check 
} from 'lucide-react';
import { verifyCertificate, downloadCertificateCanvas } from '../services/certificateService';

export function PublicVerifyPage({ initialCode = '', navigate }) {
  const [codeQuery, setCodeQuery] = useState(initialCode || '');
  const [verifiedRecord, setVerifiedRecord] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (initialCode) {
      setCodeQuery(initialCode);
      const res = verifyCertificate(initialCode);
      setVerifiedRecord(res);
      setHasSearched(true);
    }
  }, [initialCode]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!codeQuery.trim()) return;
    const res = verifyCertificate(codeQuery.trim());
    setVerifiedRecord(res);
    setHasSearched(true);
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-lg">
        {/* Top Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'var(--accent-emerald-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-emerald)',
            margin: '0 auto 1rem auto'
          }}>
            <ShieldCheck size={26} />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            EduMind.AI Public Verification Portal
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            No login required. Authenticate genuine certificates, grades, and mastery records issued by EduMind.AI in real time.
          </p>
        </div>

        {/* Verification Lookup Input */}
        <div className="card" style={{ maxWidth: '580px', margin: '0 auto 3rem auto', padding: '1.25rem' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              type="text"
              placeholder="Enter Certificate Serial ID (e.g. EDU-2026-PY-9842F)..."
              value={codeQuery}
              onChange={(e) => setCodeQuery(e.target.value)}
              className="form-input"
              style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: '0.9375rem' }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0 1.25rem' }}>
              <Search size={16} /> Verify
            </button>
          </form>
        </div>

        {/* Verification Result Card */}
        {hasSearched && (
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {verifiedRecord ? (
              <div className="card" style={{
                border: '2px solid var(--accent-emerald)',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-lg)'
              }}>
                {/* Verified Header Pill */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--accent-emerald-subtle)',
                  border: '1px solid rgba(5, 150, 105, 0.3)',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}>
                  <CheckCircle2 size={16} />
                  <span>OFFICIALLY VERIFIED & AUTHENTIC</span>
                </div>

                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {verifiedRecord.courseTitle}
                </h2>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  Serial ID: <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-primary)' }}>{verifiedRecord.code}</strong>
                </div>

                {/* Recipient & Score Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                  background: 'var(--bg-subtle)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Certified Learner
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>
                      {verifiedRecord.recipientName}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Final Grade
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '4px' }}>
                      {verifiedRecord.grade}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Issue Date
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                      {verifiedRecord.issuedDate}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Accreditation Authority
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                      EduMind.AI Council
                    </div>
                  </div>
                </div>

                {/* Cryptographic SHA-256 Hash */}
                <div style={{
                  padding: '0.75rem 1rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  wordBreak: 'break-all'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Cryptographic Hash:</strong> {verifiedRecord.verificationHash}
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                  <button
                    onClick={() => downloadCertificateCanvas(verifiedRecord, verifiedRecord.recipientName)}
                    className="btn btn-primary"
                    style={{ gap: '0.5rem' }}
                  >
                    <Download size={16} /> Download Copy
                  </button>
                </div>
              </div>
            ) : (
              <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                <AlertCircle size={44} color="var(--accent-rose)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Certificate Not Found
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  No active certificate matches ID: <strong>{codeQuery}</strong>. Please verify the serial number and try again.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
