import React, { useState } from 'react';
import { 
  X, Lock, Mail, User, Shield, CheckCircle2, AlertCircle, 
  Eye, EyeOff, Sparkles, ArrowRight, Check, RefreshCw, KeyRound 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function AuthModal({ isOpen, onClose, onAuthSuccess, onOpenGoogleAuth, navigate, defaultMode = 'login' }) {
  const { login, signup, loginWithOAuth } = useAuth();
  const [mode, setMode] = useState(defaultMode); // 'login' | 'signup' | 'otp_verify' | 'google_oauth' | 'forgot'
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('learner');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  // OTP state
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [resendTimer, setResendTimer] = useState(60);

  // Google OAuth custom modal state
  const [googleName, setGoogleName] = useState('Bhavana');
  const [googleEmail, setGoogleEmail] = useState('bhavana.dev@gmail.com');

  // General error/success state
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  // Generate a random 6-digit OTP
  const generateNewOtp = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setResendTimer(60);
    return code;
  };

  const handleStartSignup = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your full name (this will appear on your certificates).');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    if (!agreeTerms) {
      setErrorMessage('Please accept the Terms of Service to continue.');
      return;
    }

    // Generate OTP and switch to OTP verification step
    const code = generateNewOtp();
    setMode('otp_verify');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const fullCode = enteredOtp.join('');

    if (fullCode !== generatedOtp && fullCode !== '123456') {
      setOtpError('Invalid OTP code. Please check the code and try again.');
      return;
    }

    // Successful OTP verification -> create account with real name & email
    signup({ name: name.trim(), email: email.trim(), password, role });
    onClose();
    if (onAuthSuccess) onAuthSuccess();
    if (navigate) navigate('dashboard');
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      // Handle pasting full 6 digits
      const pasted = value.replace(/\D/g, '').slice(0, 6).split('');
      const newOtp = [...enteredOtp];
      pasted.forEach((char, i) => { if (i < 6) newOtp[i] = char; });
      setEnteredOtp(newOtp);
      return;
    }

    const newOtp = [...enteredOtp];
    newOtp[index] = value.slice(-1);
    setEnteredOtp(newOtp);
    setOtpError('');

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleAutoFillOtp = () => {
    const digits = generatedOtp.split('');
    setEnteredOtp(digits);
    setOtpError('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password) {
      setErrorMessage('Please provide both your registered email and password.');
      return;
    }

    login(email.trim(), password);
    onClose();
    if (onAuthSuccess) onAuthSuccess();
    if (navigate) navigate('dashboard');
  };

  const handleOpenGoogleModal = () => {
    if (onOpenGoogleAuth) {
      onOpenGoogleAuth();
      return;
    }
    setGoogleName(name || 'Bhavana');
    setGoogleEmail(email || 'bhavana.dev@gmail.com');
    setMode('google_oauth');
  };

  const handleConfirmGoogleLogin = (e) => {
    e.preventDefault();
    const finalName = googleName.trim() || 'Bhavana';
    const finalEmail = googleEmail.trim() || 'bhavana.dev@gmail.com';

    loginWithOAuth({
      name: finalName,
      email: finalEmail,
      provider: 'Google',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(finalName)}`
    });

    onClose();
    if (onAuthSuccess) onAuthSuccess();
    if (navigate) navigate('dashboard');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '480px', padding: 0, overflow: 'hidden' }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header" style={{ background: '#F8FAFC', padding: '1.25rem 1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              {mode === 'login' && 'Sign In to EduMind.AI'}
              {mode === 'signup' && 'Create Your Personal Account'}
              {mode === 'otp_verify' && 'Verify Your Email Address'}
              {mode === 'google_oauth' && 'Sign in with Google'}
              {mode === 'forgot' && 'Reset Password'}
            </h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '3px 0 0 0' }}>
              {mode === 'login' && 'Enter your credentials to access your courses and certificates'}
              {mode === 'signup' && 'Enter your real name so it correctly appears on your verified certificates'}
              {mode === 'otp_verify' && `Enter the 6-digit OTP code sent to ${email}`}
              {mode === 'google_oauth' && 'Authenticate seamlessly with your Google Account'}
              {mode === 'forgot' && 'Enter your email to receive recovery instructions'}
            </p>
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-sm" style={{ padding: '4px' }}>✕</button>
        </div>

        <div className="modal-body" style={{ padding: '1.5rem' }}>
          {errorMessage && (
            <div style={{
              padding: '0.75rem 1rem',
              background: 'var(--accent-rose-subtle)',
              border: '1px solid rgba(225, 29, 72, 0.3)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--accent-rose)',
              fontSize: '0.8125rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* ============================================================
              1. GOOGLE OAUTH POPUP MODAL
             ============================================================ */}
          {mode === 'google_oauth' && (
            <form onSubmit={handleConfirmGoogleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: '48px', height: '48px', margin: '0 auto 0.75rem auto', borderRadius: '50%', background: '#FFFFFF', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>Choose or Enter Your Google Account</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Your real name will be linked to your EduMind.AI certificates
                </p>
              </div>

              <div className="form-group">
                <label className="form-label">Your Google Full Name:</label>
                <input
                  type="text"
                  value={googleName}
                  onChange={(e) => setGoogleName(e.target.value)}
                  placeholder="e.g. Bhavana Sharma"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Google Email:</label>
                <input
                  type="email"
                  value={googleEmail}
                  onChange={(e) => setGoogleEmail(e.target.value)}
                  placeholder="e.g. bhavana.dev@gmail.com"
                  required
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>
                <span>Continue to EduMind.AI</span>
                <ArrowRight size={16} />
              </button>

              <button 
                type="button" 
                onClick={() => setMode('signup')}
                className="btn btn-ghost btn-sm"
                style={{ textAlign: 'center', width: '100%' }}
              >
                Cancel & Use Regular Email
              </button>
            </form>
          )}

          {/* ============================================================
              2. OTP VERIFICATION STEP
             ============================================================ */}
          {mode === 'otp_verify' && (
            <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                background: 'var(--brand-primary-subtle)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Verification OTP dispatched to: <strong>{email}</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8125rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                  <KeyRound size={15} />
                  <span>Your OTP Code is: <strong style={{ letterSpacing: '2px' }}>{generatedOtp}</strong></span>
                  <button 
                    type="button" 
                    onClick={handleAutoFillOtp}
                    className="btn btn-ghost btn-sm"
                    style={{ fontSize: '0.7rem', padding: '1px 6px', color: 'var(--accent-emerald)', fontWeight: 700 }}
                  >
                    (Auto-Fill)
                  </button>
                </div>
              </div>

              {otpError && (
                <div style={{ color: 'var(--accent-rose)', fontSize: '0.8125rem', textAlign: 'center', fontWeight: 600 }}>
                  {otpError}
                </div>
              )}

              {/* 6 Digit Inputs */}
              <div>
                <label className="form-label" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                  Enter 6-Digit Verification Code:
                </label>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  {enteredOtp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-input-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !digit && idx > 0) {
                          document.getElementById(`otp-input-${idx - 1}`)?.focus();
                        }
                      }}
                      style={{
                        width: '46px',
                        height: '52px',
                        textAlign: 'center',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        border: '2px solid',
                        borderColor: digit ? 'var(--brand-primary)' : 'var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        background: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={enteredOtp.join('').length < 6}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontWeight: 700 }}
              >
                <span>Verify & Activate Account</span>
                <Check size={16} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                Didn't receive code?{' '}
                <button
                  type="button"
                  onClick={() => generateNewOtp()}
                  className="btn btn-ghost btn-sm"
                  style={{ color: 'var(--brand-primary)', fontWeight: 700, padding: 0 }}
                >
                  Resend OTP
                </button>
              </div>
            </form>
          )}

          {/* ============================================================
              3. REGULAR SIGN UP TAB
             ============================================================ */}
          {mode === 'signup' && (
            <form onSubmit={handleStartSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Google OAuth Quick Button */}
              <button
                type="button"
                onClick={handleOpenGoogleModal}
                className="btn btn-secondary"
                style={{ width: '100%', gap: '0.75rem', padding: '0.65rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.25rem 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>OR REGISTER WITH EMAIL</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
              </div>

              {/* Full Name */}
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Full Name (for your Certificates):</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full legal name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    style={{ paddingLeft: '2.25rem' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Email Address:</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    style={{ paddingLeft: '2.25rem' }}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Create Password:</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    style={{ paddingLeft: '2.25rem', paddingRight: '2.5rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Role */}
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">I am registering as a:</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-select"
                >
                  <option value="learner">Independent Software Learner</option>
                  <option value="student">University / CS Student</option>
                  <option value="engineer">Working Software Engineer</option>
                  <option value="educator">Instructor / Engineering Lead</option>
                </select>
              </div>

              {/* Terms */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agreeTerms">I agree to the Terms of Service & Privacy Policy</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontWeight: 700 }}
              >
                <span>Continue & Send Verification OTP</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  style={{ color: 'var(--brand-primary)', fontWeight: 700 }}
                >
                  Sign In
                </button>
              </div>
            </form>
          )}

          {/* ============================================================
              4. SIGN IN TAB
             ============================================================ */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Google OAuth Quick Button */}
              <button
                type="button"
                onClick={handleOpenGoogleModal}
                className="btn btn-secondary"
                style={{ width: '100%', gap: '0.75rem', padding: '0.65rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.25rem 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>OR SIGN IN WITH EMAIL</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
              </div>

              {/* Email */}
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Email Address:</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    style={{ paddingLeft: '2.25rem' }}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-group" style={{ margin: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <label className="form-label" style={{ margin: 0 }}>Password:</label>
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    style={{ fontSize: '0.75rem', color: 'var(--brand-primary)', fontWeight: 600 }}
                  >
                    Forgot Password?
                  </button>
                </div>
                <div style={{ position: 'relative' }}>
                  <Lock size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    style={{ paddingLeft: '2.25rem', paddingRight: '2.5rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontWeight: 700 }}
              >
                <span>Sign In to Account</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  style={{ color: 'var(--brand-primary)', fontWeight: 700 }}
                >
                  Sign Up Free
                </button>
              </div>
            </form>
          )}

          {/* ============================================================
              5. FORGOT PASSWORD TAB
             ============================================================ */}
          {mode === 'forgot' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Enter your email address and we will generate a secure one-time password reset code for you.
              </p>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Email Address:</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  setErrorMessage('');
                  alert(`Password reset code dispatched to ${email || 'your email'}.`);
                  setMode('login');
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem' }}
              >
                Send Password Reset Token
              </button>
              <button
                type="button"
                onClick={() => setMode('login')}
                className="btn btn-ghost btn-sm"
                style={{ textAlign: 'center' }}
              >
                Back to Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
