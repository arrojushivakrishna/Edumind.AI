import React, { useState } from 'react';
import { 
  User, Lock, Bell, Shield, Moon, Sun, Download, Trash2, CheckCircle2, ArrowLeft 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function SettingsPage({ navigate }) {
  const { user, updateUserProfile, theme, toggleTheme } = useAuth();
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'security' | 'notifications' | 'privacy' | 'appearance'

  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Notification toggles
  const [notifToggles, setNotifToggles] = useState(user?.notificationSettings || {
    eventConfirmation: true,
    eventReminders: true,
    certificateIssued: true,
    communityReplies: true,
    directMessages: true,
    marketingUpdates: false
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateUserProfile({ name, bio, avatar, notificationSettings: notifToggles });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleExportData = () => {
    const data = {
      user,
      exportedAt: new Date().toISOString(),
      platform: 'EduMind.AI'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `edumind-data-${user?.username || 'user'}.json`;
    link.click();
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-lg">
        <button
          onClick={() => navigate('dashboard')}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </button>

        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '2rem' }}>
          Account Settings & Preferences
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4" style={{ gap: '2rem' }}>
          {/* Settings Tabs Sidebar */}
          <div>
            <div className="card" style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {[
                { key: 'profile', label: 'Public Profile', icon: User },
                { key: 'security', label: 'Security & Auth', icon: Lock },
                { key: 'notifications', label: 'Email Notifications', icon: Bell },
                { key: 'privacy', label: 'Privacy & Data', icon: Shield },
                { key: 'appearance', label: 'Theme & Display', icon: Sun }
              ].map(t => {
                const Icon = t.icon;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    style={{
                      padding: '0.625rem 0.875rem',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      fontSize: '0.875rem',
                      fontWeight: activeTab === t.key ? 700 : 500,
                      color: activeTab === t.key ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                      background: activeTab === t.key ? 'rgba(2, 132, 199, 0.12)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <Icon size={16} />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content (3 Cols) */}
          <div style={{ gridColumn: 'span 3' }}>
            <div className="card" style={{ padding: '2rem' }}>
              {/* Tab 1: Profile */}
              {activeTab === 'profile' && (
                <form onSubmit={handleSaveProfile}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                    Profile Information
                  </h3>

                  <div className="form-group">
                    <label className="form-label">Display Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Avatar Image URL</label>
                    <input
                      type="url"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Bio (visible on public profile & community)</label>
                    <textarea
                      rows={3}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="form-textarea"
                    />
                  </div>

                  {saveSuccess && (
                    <div style={{ color: 'var(--accent-emerald)', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1rem' }}>
                      <CheckCircle2 size={16} /> Settings saved successfully!
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary btn-sm">
                    Save Changes
                  </button>
                </form>
              )}

              {/* Tab 2: Security */}
              {activeTab === 'security' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                    Security & Password
                  </h3>
                  <div className="form-group">
                    <label className="form-label">Current Password</label>
                    <input type="password" placeholder="••••••••••••" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input type="password" placeholder="••••••••••••" className="form-input" />
                  </div>
                  <button onClick={() => alert('Password updated successfully!')} className="btn btn-primary btn-sm">
                    Update Password
                  </button>
                </div>
              )}

              {/* Tab 3: Notification Preferences */}
              {activeTab === 'notifications' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Transactional Email Preferences
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', marginBottom: '1.5rem' }}>
                    Control which real-time notifications are delivered to your inbox from EduMind.AI.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { key: 'eventConfirmation', label: 'Event Registrations & QR Tickets', desc: 'Instant confirmations with calendar invites' },
                      { key: 'eventReminders', label: 'Event 24-Hour Reminders', desc: 'Notifications before live workshops begin' },
                      { key: 'certificateIssued', label: 'Accreditation & Certificate Issuance', desc: 'When you pass final exams and earn credentials' },
                      { key: 'communityReplies', label: 'Community Replies & Mentions', desc: 'When peers reply to your code questions or showcases' }
                    ].map(item => (
                      <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.label}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                        </div>
                        <input
                          type="checkbox"
                          checked={notifToggles[item.key] !== false}
                          onChange={(e) => setNotifToggles({ ...notifToggles, [item.key]: e.target.checked })}
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                      </div>
                    ))}
                  </div>

                  <button onClick={handleSaveProfile} className="btn btn-primary btn-sm" style={{ marginTop: '1.5rem' }}>
                    Save Preferences
                  </button>
                </div>
              )}

              {/* Tab 4: Privacy & Data */}
              {activeTab === 'privacy' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Data Portability & Privacy Rights
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Download a full JSON archive of your completed courses, code execution history, and forum posts in compliance with global GDPR standards.
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button onClick={handleExportData} className="btn btn-secondary btn-sm">
                      <Download size={15} /> Export My Account Data (.JSON)
                    </button>
                    <button onClick={() => alert('Account deletion request registered. An email confirmation has been sent.')} className="btn btn-danger btn-sm">
                      <Trash2 size={15} /> Request Account Deletion
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 5: Appearance */}
              {activeTab === 'appearance' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Display & Theme Settings
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                    Toggle between dark and high-contrast light aesthetics.
                  </p>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      onClick={toggleTheme}
                      className={`btn ${theme === 'dark' ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      <Moon size={16} /> Dark Mode (Default)
                    </button>
                    <button
                      onClick={toggleTheme}
                      className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      <Sun size={16} /> Light Mode
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
