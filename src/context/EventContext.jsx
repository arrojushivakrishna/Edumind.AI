import React, { createContext, useContext, useState, useEffect } from 'react';
import { EVENTS_DATA } from '../data/eventsData';
import QRCode from 'qrcode';

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_events');
      return saved ? JSON.parse(saved) : EVENTS_DATA;
    } catch {
      return EVENTS_DATA;
    }
  });

  // Map of registered events for current user
  // { 'evt-ai-agentic-2026': { ticketCode: 'TIC-9812-AI', tier: 'Standard Pass', registeredAt: '...', qrDataUrl: '...', isWaitlisted: false, checkedIn: false } }
  const [userRegistrations, setUserRegistrations] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_user_registrations');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Check-in registry for admin check-in desk
  // [ { ticketCode: '...', eventId: '...', attendeeName: '...', checkInTime: '...' } ]
  const [checkInLogs, setCheckInLogs] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_checkin_logs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Community proposed events
  const [eventProposals, setEventProposals] = useState([]);

  useEffect(() => {
    localStorage.setItem('edumind_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('edumind_user_registrations', JSON.stringify(userRegistrations));
  }, [userRegistrations]);

  useEffect(() => {
    localStorage.setItem('edumind_checkin_logs', JSON.stringify(checkInLogs));
  }, [checkInLogs]);

  // Register for an event
  const registerForEvent = async (eventId, { tierName = 'Standard Pass', attendeesCount = 1, attendeeName = 'Alex Rivera', attendeeEmail = 'alex.rivera@example.com' } = {}) => {
    const event = events.find(e => e.id === eventId);
    if (!event) return { success: false, message: 'Event not found' };

    const isFull = event.registeredCount >= event.capacity;
    const ticketCode = `TIC-${Math.floor(1000 + Math.random() * 9000)}-${event.id.substring(4, 8).toUpperCase()}`;

    // Generate QR Code Data URL
    let qrDataUrl = '';
    try {
      qrDataUrl = await QRCode.toDataURL(JSON.stringify({
        ticketCode,
        eventId: event.id,
        eventTitle: event.title,
        attendeeName,
        attendeeEmail,
        tier: tierName
      }), { width: 250, margin: 2, color: { dark: '#0F172A', light: '#FFFFFF' } });
    } catch (e) {
      console.error('QR generation error:', e);
    }

    const regRecord = {
      ticketCode,
      eventId: event.id,
      eventTitle: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      tier: tierName,
      attendeesCount,
      attendeeName,
      attendeeEmail,
      registeredAt: new Date().toISOString(),
      qrDataUrl,
      isWaitlisted: isFull,
      checkedIn: false
    };

    setUserRegistrations(prev => ({
      ...prev,
      [eventId]: regRecord
    }));

    // Update event counter
    setEvents(prev => prev.map(ev => {
      if (ev.id === eventId) {
        return {
          ...ev,
          registeredCount: isFull ? ev.registeredCount : ev.registeredCount + attendeesCount,
          waitlistCount: isFull ? ev.waitlistCount + attendeesCount : ev.waitlistCount
        };
      }
      return ev;
    }));

    return {
      success: true,
      isWaitlisted: isFull,
      registration: regRecord
    };
  };

  // Cancel registration (auto-promotes waitlist)
  const cancelRegistration = (eventId) => {
    const existing = userRegistrations[eventId];
    if (!existing) return;

    setUserRegistrations(prev => {
      const copy = { ...prev };
      delete copy[eventId];
      return copy;
    });

    setEvents(prev => prev.map(ev => {
      if (ev.id === eventId) {
        const hasWaitlist = ev.waitlistCount > 0;
        return {
          ...ev,
          registeredCount: hasWaitlist ? ev.registeredCount : Math.max(0, ev.registeredCount - 1),
          waitlistCount: hasWaitlist ? Math.max(0, ev.waitlistCount - 1) : 0
        };
      }
      return ev;
    }));
  };

  // Admin Check-In Desk
  const processAdminCheckIn = (ticketCode) => {
    const cleanCode = (ticketCode || '').trim().toUpperCase();
    if (!cleanCode) return { status: 'error', message: 'Ticket code required' };

    // Check if already checked in
    const existingCheckIn = checkInLogs.find(l => l.ticketCode === cleanCode);
    if (existingCheckIn) {
      return {
        status: 'duplicate',
        message: `DUPLICATE CHECK-IN WARNING: Ticket ${cleanCode} was already checked in at ${new Date(existingCheckIn.checkInTime).toLocaleTimeString()}`,
        log: existingCheckIn
      };
    }

    // Match registration
    const matchReg = Object.values(userRegistrations).find(r => r.ticketCode.toUpperCase() === cleanCode);
    const attendeeName = matchReg ? matchReg.attendeeName : 'Attendee (General)';
    const eventTitle = matchReg ? matchReg.eventTitle : 'EduMind Live Session';

    const newLog = {
      id: `chk_${Date.now()}`,
      ticketCode: cleanCode,
      attendeeName,
      eventTitle,
      checkInTime: new Date().toISOString()
    };

    setCheckInLogs(prev => [newLog, ...prev]);

    // Update user registration state if matches
    if (matchReg) {
      setUserRegistrations(prev => ({
        ...prev,
        [matchReg.eventId]: { ...prev[matchReg.eventId], checkedIn: true }
      }));
    }

    return {
      status: 'success',
      message: `Checked in successfully: ${attendeeName}`,
      log: newLog
    };
  };

  // Propose an event
  const submitEventProposal = (proposal) => {
    const newProposal = {
      id: `prop_${Date.now()}`,
      ...proposal,
      status: 'pending_review',
      submittedAt: new Date().toISOString()
    };
    setEventProposals(prev => [newProposal, ...prev]);
    return { success: true, proposal: newProposal };
  };

  return (
    <EventContext.Provider
      value={{
        events,
        userRegistrations,
        checkInLogs,
        eventProposals,
        registerForEvent,
        cancelRegistration,
        processAdminCheckIn,
        submitEventProposal
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) throw new Error('useEvents must be used within EventProvider');
  return context;
}
