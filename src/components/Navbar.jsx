import React, { useState } from 'react';
import { 
  Sparkles, Search, Bell, Flame, User, Settings, LogOut, 
  BookOpen, Code2, Calendar, Users, Award, Shield, ChevronDown, Plus,
  Compass, GitCompare, LayoutDashboard
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';

export function Navbar({ currentRoute, navigate, onOpenSearch, onOpenNotifications, onOpenAuth, onOpenGoogleAuth }) {
  const { user, isAuthenticated, logout, switchRole } = useAuth();
  const { unreadCount } = useNotifications();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const navLinks = [
    { key: 'courses', label: 'Languages', icon: BookOpen },
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'playground', label: 'Compiler', icon: Code2 },
    { key: 'roadmaps', label: 'Roadmaps', icon: Compass },
    { key: 'compare', label: 'Compare', icon: GitCompare },
    { key: 'community', label: 'Community', icon: Users },
    { key: 'certificates', label: 'Certificates', icon: Award }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 800,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '66px',
        width: '100%',
        maxWidth: '1560px',
        margin: '0 auto',
        padding: '0 1.25rem',
        gap: '1rem'
      }}>
        {/* Left: Brand Logo & Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: 0, flex: 1 }}>
          {/* Brand Logo */}
          <div
            onClick={() => navigate('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer', userSelect: 'none', flexShrink: 0 }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)'
            }}>
              <Sparkles size={20} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                EduMind<span style={{ color: 'var(--brand-primary)' }}>.AI</span>
              </span>
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Smart Education
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '2px 0'
          }}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentRoute === link.key || currentRoute.startsWith(`${link.key}/`);
              return (
                <button
                  key={link.key}
                  onClick={() => navigate(link.key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.38rem 0.55rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--brand-primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--brand-primary-subtle)' : 'transparent',
                    transition: 'all var(--transition-fast)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <Icon size={15} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="btn btn-secondary btn-sm"
            style={{ color: 'var(--text-secondary)', padding: '0.35rem 0.65rem', gap: '0.45rem', flexShrink: 0 }}
            title="Search courses, lessons, topics (Cmd+K)"
          >
            <Search size={14} />
            <span style={{ fontSize: '0.8125rem' }}>Search</span>
            <kbd style={{ fontSize: '0.68rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-medium)', padding: '1px 5px', borderRadius: '4px' }}>
              ⌘K
            </kbd>
          </button>

          {/* Streak Counter (if logged in) */}
          {isAuthenticated && (
            <div
              onClick={() => navigate('dashboard')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--accent-amber-subtle)',
                border: '1px solid rgba(217, 119, 6, 0.25)',
                color: 'var(--accent-amber)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
              title="Current Learning Streak"
            >
              <Flame size={15} fill="#D97706" />
              <span>{user?.streak || 12}d</span>
            </div>
          )}

          {/* Notification Bell */}
          <button
            onClick={onOpenNotifications}
            style={{
              position: 'relative',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)'
            }}
            title="Notifications & Transactional Outbox"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--accent-rose)',
                color: '#FFFFFF',
                fontSize: '0.65rem',
                fontWeight: 800,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #FFFFFF'
              }}>
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Profile / Auth State */}
          {isAuthenticated ? (
            <div style={{ position: 'relative' }}>
              <div
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.3rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'}
                  alt={user?.name || 'User'}
                  style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {user?.name?.split(' ')[0] || 'Learner'}
                </span>
                <ChevronDown size={14} color="var(--text-muted)" />
              </div>

              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '46px',
                    right: 0,
                    width: '230px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '0.5rem',
                    zIndex: 900
                  }}
                  onMouseLeave={() => setIsProfileMenuOpen(false)}
                >
                  <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.25rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{user?.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user?.email}</div>
                  </div>

                  <button
                    onClick={() => { navigate('dashboard'); setIsProfileMenuOpen(false); }}
                    className="btn btn-ghost btn-sm"
                    style={{ width: '100%', justifyContent: 'flex-start', gap: '0.5rem' }}
                  >
                    <User size={15} /> Learner Dashboard
                  </button>

                  <button
                    onClick={() => { navigate('certificates'); setIsProfileMenuOpen(false); }}
                    className="btn btn-ghost btn-sm"
                    style={{ width: '100%', justifyContent: 'flex-start', gap: '0.5rem' }}
                  >
                    <Award size={15} /> My Certificates
                  </button>

                  <button
                    onClick={() => { navigate('events'); setIsProfileMenuOpen(false); }}
                    className="btn btn-ghost btn-sm"
                    style={{ width: '100%', justifyContent: 'flex-start', gap: '0.5rem' }}
                  >
                    <Calendar size={15} /> Workshops & Live Events
                  </button>

                  <button
                    onClick={() => { navigate('settings'); setIsProfileMenuOpen(false); }}
                    className="btn btn-ghost btn-sm"
                    style={{ width: '100%', justifyContent: 'flex-start', gap: '0.5rem' }}
                  >
                    <Settings size={15} /> Settings & Preferences
                  </button>

                  <button
                    onClick={() => { navigate('admin-cms'); setIsProfileMenuOpen(false); }}
                    className="btn btn-ghost btn-sm"
                    style={{ width: '100%', justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--brand-primary)' }}
                  >
                    <Shield size={15} /> Admin Course Builder
                  </button>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: '0.35rem', paddingTop: '0.35rem' }}>
                    <button
                      onClick={() => { logout(); setIsProfileMenuOpen(false); navigate('home'); }}
                      className="btn btn-ghost btn-sm"
                      style={{ width: '100%', justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--accent-rose)' }}
                    >
                      <LogOut size={15} /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
              <button
                onClick={() => onOpenGoogleAuth ? onOpenGoogleAuth() : navigate('login')}
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, padding: '0.35rem 0.65rem', whiteSpace: 'nowrap' }}
                title="Sign in with Google"
              >
                <svg width="15" height="15" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google Sign In</span>
              </button>
              <button
                onClick={() => navigate('login')}
                className="btn btn-ghost btn-sm"
                style={{ padding: '0.35rem 0.65rem', whiteSpace: 'nowrap' }}
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('signup')}
                className="btn btn-primary btn-sm"
                style={{ padding: '0.35rem 0.85rem', whiteSpace: 'nowrap', fontWeight: 700 }}
              >
                Sign Up Free
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
