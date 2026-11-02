import React, { useState } from 'react';
import { X, Bell, Mail, CheckCircle2, Calendar, Award, MessageSquare, ExternalLink } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

export function NotificationModal({ isOpen, onClose, navigate }) {
  const { notifications, unreadCount, sentEmails, markAsRead, markAllAsRead } = useNotifications();
  const [activeTab, setActiveTab] = useState('inapp'); // 'inapp' | 'emails'
  const [selectedEmail, setSelectedEmail] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '680px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(2, 132, 199, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-primary-light)'
            }}>
              {activeTab === 'inapp' ? <Bell size={18} /> : <Mail size={18} />}
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>
                {activeTab === 'inapp' ? 'In-App Notifications' : 'Real-Time Email Center (Transactional Outbox)'}
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                {activeTab === 'inapp' ? `${unreadCount} unread alert${unreadCount === 1 ? '' : 's'}` : 'View simulated live transactional emails delivered to your inbox'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-sm">
            <X size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-surface)',
          padding: '0 1.5rem'
        }}>
          <button
            onClick={() => { setActiveTab('inapp'); setSelectedEmail(null); }}
            style={{
              padding: '0.75rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: activeTab === 'inapp' ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'inapp' ? '2px solid var(--brand-primary-light)' : '2px solid transparent',
              background: 'transparent'
            }}
          >
            In-App Alerts ({unreadCount})
          </button>
          <button
            onClick={() => setActiveTab('emails')}
            style={{
              padding: '0.75rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: activeTab === 'emails' ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'emails' ? '2px solid var(--brand-primary-light)' : '2px solid transparent',
              background: 'transparent'
            }}
          >
            Email Outbox Simulator ({sentEmails.length})
          </button>
        </div>

        {/* Body */}
        <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {activeTab === 'inapp' && (
            <div>
              {unreadCount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
                  <button 
                    onClick={markAllAsRead}
                    className="btn btn-ghost btn-sm"
                    style={{ fontSize: '0.75rem', color: 'var(--brand-primary-light)' }}
                  >
                    Mark all as read
                  </button>
                </div>
              )}

              {notifications.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                  No notifications yet. You're all caught up!
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {notifications.map((n) => {
                    const iconMap = {
                      event: Calendar,
                      certificate: Award,
                      community: MessageSquare,
                      general: Bell
                    };
                    const Icon = iconMap[n.category] || Bell;

                    return (
                      <div
                        key={n.id}
                        onClick={() => {
                          markAsRead(n.id);
                          if (n.link && n.link !== '#') {
                            navigate(n.link.replace('/', ''));
                            onClose();
                          }
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.875rem',
                          padding: '0.875rem 1rem',
                          background: n.read ? 'var(--bg-surface)' : 'rgba(2, 132, 199, 0.08)',
                          border: `1px solid ${n.read ? 'var(--border-subtle)' : 'rgba(56, 189, 248, 0.3)'}`,
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          background: n.read ? 'var(--bg-card-elevated)' : 'var(--brand-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          flexShrink: 0
                        }}>
                          <Icon size={15} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: n.read ? 600 : 700, color: 'var(--text-primary)' }}>
                              {n.title}
                            </div>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{n.timestamp}</span>
                          </div>
                          <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
                            {n.message}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === 'emails' && (
            <div>
              {selectedEmail ? (
                <div>
                  <button 
                    onClick={() => setSelectedEmail(null)}
                    className="btn btn-ghost btn-sm"
                    style={{ marginBottom: '1rem', padding: '0.25rem 0.5rem' }}
                  >
                    ← Back to Email Outbox
                  </button>
                  <div style={{
                    background: 'var(--bg-card-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem'
                  }}>
                    <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{selectedEmail.subject}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        From: <span style={{ color: 'var(--brand-primary-light)' }}>{selectedEmail.from}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        To: {selectedEmail.to} • {selectedEmail.date}
                      </div>
                    </div>
                    <div 
                      dangerouslySetInnerHTML={{ __html: selectedEmail.htmlContent }} 
                      style={{ borderRadius: '8px', overflow: 'hidden' }}
                    />
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {sentEmails.map((eml) => (
                    <div
                      key={eml.id}
                      onClick={() => setSelectedEmail(eml)}
                      style={{
                        padding: '0.875rem 1rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{eml.subject}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>To: {eml.to} • {eml.date}</div>
                      </div>
                      <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>Preview HTML</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
