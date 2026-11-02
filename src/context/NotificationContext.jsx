import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    category: 'event',
    title: 'Registration Confirmed: Autonomous AI Agents Workshop',
    message: 'Your ticket and calendar invite for August 20 have been confirmed. Access code: TIC-9812-AI.',
    timestamp: '10 min ago',
    read: false,
    link: '/events'
  },
  {
    id: 'notif-2',
    category: 'community',
    title: 'Priya Sharma marked an accepted answer',
    message: 'Your explanation on Timsort & Powersort in Python was pinned as the Best Answer.',
    timestamp: '2 hours ago',
    read: false,
    link: '/community'
  },
  {
    id: 'notif-3',
    category: 'certificate',
    title: 'Milestone Unlocked: 12-Day Learning Streak 🔥',
    message: 'You have consistently coded and completed lessons for 12 consecutive days on EduMind.AI!',
    timestamp: '1 day ago',
    read: true,
    link: '/dashboard'
  }
];

const INITIAL_EMAILS = [
  {
    id: 'eml-101',
    to: 'alex.rivera@example.com',
    from: 'EduMind.AI <notifications@edumind.ai>',
    subject: '🎟️ Confirmed: Ticket for Autonomous AI Agents Workshop',
    date: 'Today at 14:20',
    type: 'event_confirmation',
    htmlContent: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #F8FAFC; padding: 24px; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.3);">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
          <h2 style="color: #38BDF8; margin: 0; font-size: 20px;">EduMind.AI Events</h2>
        </div>
        <h3 style="color: #FFFFFF; font-size: 18px; margin-bottom: 8px;">You're In! Registration Confirmed</h3>
        <p style="color: #94A3B8; font-size: 14px; line-height: 1.5;">Hi Alex, your spot is reserved for <strong>Building Autonomous AI Agents with LangGraph & Python</strong>.</p>
        
        <div style="background: #1E293B; border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px dashed #38BDF8;">
          <p style="margin: 0 0 6px 0; font-size: 13px; color: #94A3B8;">Ticket ID: <strong style="color: #38BDF8;">TIC-9812-AI</strong></p>
          <p style="margin: 0 0 6px 0; font-size: 13px; color: #94A3B8;">Date & Time: <strong style="color: #F8FAFC;">August 20, 2026 at 18:00 UTC</strong></p>
          <p style="margin: 0; font-size: 13px; color: #94A3B8;">Location: <strong style="color: #F8FAFC;">EduMind Interactive Live Stage</strong></p>
        </div>

        <p style="font-size: 12px; color: #64748B;">Attached: Calendar invite (.ics) • Unique attendee QR code</p>
      </div>
    `
  }
];

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_notifications');
      return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  });

  const [sentEmails, setSentEmails] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_sent_emails');
      return saved ? JSON.parse(saved) : INITIAL_EMAILS;
    } catch {
      return INITIAL_EMAILS;
    }
  });

  useEffect(() => {
    localStorage.setItem('edumind_notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('edumind_sent_emails', JSON.stringify(sentEmails));
  }, [sentEmails]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const addNotification = ({ category = 'general', title, message, link = '#' }) => {
    const newNotif = {
      id: `notif_${Date.now()}`,
      category,
      title,
      message,
      timestamp: 'Just now',
      read: false,
      link
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  // Dispatch a simulated transactional email and notify
  const dispatchTransactionalEmail = ({ to, subject, type, htmlContent, inAppTitle, inAppMessage }) => {
    const newEmail = {
      id: `eml_${Date.now()}`,
      to: to || 'alex.rivera@example.com',
      from: 'EduMind.AI <notifications@edumind.ai>',
      subject,
      date: 'Just now',
      type,
      htmlContent
    };

    setSentEmails(prev => [newEmail, ...prev]);

    if (inAppTitle) {
      addNotification({
        category: type.includes('event') ? 'event' : type.includes('cert') ? 'certificate' : 'general',
        title: inAppTitle,
        message: inAppMessage || subject
      });
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        sentEmails,
        markAsRead,
        markAllAsRead,
        addNotification,
        dispatchTransactionalEmail
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotifications must be used within NotificationProvider');
  return context;
}
