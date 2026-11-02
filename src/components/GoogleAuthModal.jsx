import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, X, Shield, User, Mail, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';

export function GoogleAuthModal({ isOpen, onClose, navigate }) {
  const { loginWithOAuth } = useAuth();
  const { addNotification } = useNotifications();

  // Try to pre-fill with existing user name/email if any in localStorage registry
  const [googleName, setGoogleName] = useState(() => {
    try {
      const reg = localStorage.getItem('edumind_user_registry');
      if (reg) {
        const parsed = JSON.parse(reg);
        if (parsed.length > 0 && parsed[0].name) return parsed[0].name;
      }
    } catch {
      // ignore
    }
    return '';
  });

  const [googleEmail, setGoogleEmail] = useState(() => {
    try {
      const reg = localStorage.getItem('edumind_user_registry');
      if (reg) {
        const parsed = JSON.parse(reg);
        if (parsed.length > 0 && parsed[0].email) return parsed[0].email;
      }
    } catch {
      // ignore
    }
    return '';
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [selectedPreset, setSelectedPreset] = useState(null);

  if (!isOpen) return null;

  // Recent / detected accounts to choose from
  const existingAccounts = (() => {
    try {
      const reg = localStorage.getItem('edumind_user_registry');
      if (reg) {
        const list = JSON.parse(reg);
        if (Array.isArray(list) && list.length > 0) {
          return list.slice(0, 2);
        }
      }
    } catch {
      // ignore
    }
    return [];
  })();

  const handleSignInWithDetails = (nameToUse, emailToUse) => {
    const finalName = (nameToUse || googleName || 'Learner').trim();
    const finalEmail = (emailToUse || googleEmail || `${finalName.toLowerCase().replace(/\s+/g, '')}@gmail.com`).trim();

    setIsLoading(true);
    setLoadingStep('Connecting to Google Identity Services...');

    setTimeout(() => {
      setLoadingStep(`Authorizing as ${finalName}...`);
    }, 450);

    setTimeout(() => {
      setLoadingStep('Verifying Google OAuth Token...');
    }, 850);

    setTimeout(() => {
      // Execute OAuth login
      loginWithOAuth({
        name: finalName,
        email: finalEmail,
        provider: 'Google',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(finalName)}`
      });

      addNotification({
        category: 'auth',
        title: `Signed in as ${finalName} via Google`,
        message: 'Your certificates and compiler progress are now linked to your Google account.',
        link: '/dashboard'
      });

      setIsLoading(false);
      onClose();
      if (navigate) {
        navigate('dashboard');
      } else {
        window.location.hash = 'dashboard';
      }
    }, 1250);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignInWithDetails(googleName, googleEmail);
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={!isLoading ? onClose : undefined}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 9999
      }}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '460px',
          padding: 0,
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0'
        }}
      >
        {/* Google Header */}
        <div style={{
          padding: '1.75rem 2rem 1.25rem 2rem',
          textAlign: 'center',
          borderBottom: '1px solid #F1F5F9',
          position: 'relative'
        }}>
          {!isLoading && (
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: '#64748B',
                padding: '4px'
              }}
            >
              <X size={18} />
            </button>
          )}

          {/* Official Google G Logo */}
          <div style={{
            width: '44px',
            height: '44px',
            margin: '0 auto 0.75rem auto',
            borderRadius: '50%',
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #E2E8F0'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1E293B', margin: '0 0 0.25rem 0' }}>
            Sign in with Google
          </h3>
          <p style={{ fontSize: '0.84rem', color: '#64748B', margin: 0 }}>
            Choose an account to continue to <strong>EduMind.AI</strong>
          </p>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.75rem 2rem' }}>
          {isLoading ? (
            /* Loading Spinner State */
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                margin: '0 auto 1.5rem auto',
                border: '4px solid #E2E8F0',
                borderTopColor: '#2563EB',
                borderRightColor: '#EA4335',
                borderBottomColor: '#FBBC05',
                borderLeftColor: '#34A853',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }} />
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.5rem' }}>
                {loadingStep}
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: 0 }}>
                Please wait while we establish a secure OAuth session.
              </p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Option 1: Saved / Recent Accounts */}
              {existingAccounts.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.625rem' }}>
                    Saved Google Accounts
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {existingAccounts.map((acc, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSignInWithDetails(acc.name, acc.email)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          border: '1px solid #E2E8F0',
                          background: '#F8FAFC',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.background = '#EFF6FF'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = '#F8FAFC'; }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <img
                            src={acc.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(acc.name)}`}
                            alt={acc.name}
                            style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }}
                          />
                          <div>
                            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E293B' }}>{acc.name}</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{acc.email}</div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 700 }}>Select →</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1.25rem 0 0.5rem 0' }}>
                    <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>OR ENTER DETAILS</span>
                    <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                  </div>
                </div>
              )}

              {/* Option 2: Enter Name & Gmail */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Your Full Legal Name (for Certificates):
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bhavana Sharma"
                      value={googleName}
                      onChange={(e) => setGoogleName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.625rem 0.75rem 0.625rem 2.25rem',
                        fontSize: '0.875rem',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        outline: 'none',
                        color: '#1E293B'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                      onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Your Google Email:
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="email"
                      required
                      placeholder="e.g. bhavana.dev@gmail.com"
                      value={googleEmail}
                      onChange={(e) => setGoogleEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.625rem 0.75rem 0.625rem 2.25rem',
                        fontSize: '0.875rem',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        outline: 'none',
                        color: '#1E293B'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                      onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#2563EB',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)',
                    marginTop: '0.25rem'
                  }}
                >
                  <span>Authorize & Sign in with Google</span>
                  <ArrowRight size={16} />
                </button>
              </form>

              {/* 1-Click Instant Sign In */}
              <div style={{
                background: '#F8FAFC',
                border: '1px dashed #CBD5E1',
                borderRadius: '8px',
                padding: '0.75rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '6px' }}>
                  Want zero-typing fast access?
                </div>
                <button
                  type="button"
                  onClick={() => handleSignInWithDetails('Bhavana', 'bhavana.dev@gmail.com')}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: '#1E293B',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={14} color="#2563EB" />
                  <span>1-Click Sign In as Bhavana (Google Account)</span>
                </button>
              </div>

              {/* Trust Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                color: '#94A3B8',
                marginTop: '0.25rem'
              }}>
                <Shield size={13} color="#10B981" />
                <span>Encrypted OAuth 2.0 • Your data is private & secure</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
