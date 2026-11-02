import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, Users, Ticket, CheckCircle2, 
  ArrowRight, Video, Filter, Plus, QrCode, Sparkles, ExternalLink 
} from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { useNotifications } from '../context/NotificationContext';
import { useAuth } from '../context/AuthContext';

export function EventsPage({ navigate, onOpenTicketModal, onOpenGoogleAuth }) {
  const { events, userRegistrations, registerForEvent, cancelRegistration, submitEventProposal } = useEvents();
  const { dispatchTransactionalEmail } = useNotifications();
  const { user } = useAuth();

  const [viewMode, setViewMode] = useState('list'); // 'list' | 'calendar'
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Registration Modal State
  const [registeringEvent, setRegisteringEvent] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [attendeeCount, setAttendeeCount] = useState(1);
  const [isSubmittingReg, setIsSubmittingReg] = useState(false);

  // Proposal Modal State
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [proposalForm, setProposalForm] = useState({
    title: '',
    type: 'workshop',
    topic: 'AI & Data Science',
    description: '',
    proposedDate: ''
  });

  const types = ['all', 'workshop', 'webinar', 'hackathon'];
  const topics = ['all', 'AI & Data Science', 'Web Development', 'Software Engineering'];

  const filteredEvents = events.filter(e => {
    const matchesType = selectedType === 'all' || e.type === selectedType;
    const matchesTopic = selectedTopic === 'all' || e.category === selectedTopic;
    return matchesType && matchesTopic;
  });

  const handleOpenRegister = (ev) => {
    setRegisteringEvent(ev);
    setSelectedTier(ev.tiers[0] || { name: 'General Admission', price: 0 });
    setAttendeeCount(1);
  };

  const handleConfirmRegistration = async () => {
    if (!registeringEvent) return;
    setIsSubmittingReg(true);

    try {
      const activeName = user?.name || 'Learner';
      const activeEmail = user?.email || 'learner@gmail.com';

      const res = await registerForEvent(registeringEvent.id, {
        tierName: selectedTier.name,
        attendeesCount: attendeeCount,
        attendeeName: activeName,
        attendeeEmail: activeEmail
      });

      if (res.success) {
        // Send simulated transactional email
        dispatchTransactionalEmail({
          to: activeEmail,
          subject: `🎟️ Confirmed: ${registeringEvent.title}`,
          type: 'event_confirmation',
          inAppTitle: `Event Confirmed: ${registeringEvent.title}`,
          inAppMessage: `Your spot has been confirmed with Ticket Code ${res.registration.ticketCode}. Calendar invite attached.`,
          htmlContent: `
            <div style="font-family: sans-serif; background: #0F172A; color: #FFFFFF; padding: 20px; border-radius: 8px;">
              <h2 style="color: #38BDF8;">EduMind.AI Event Ticket</h2>
              <p>Hi ${res.registration.attendeeName}, you are registered for <strong>${registeringEvent.title}</strong>.</p>
              <div style="background: #1E293B; padding: 12px; border-radius: 6px; margin: 15px 0;">
                <p>Ticket Code: <strong style="color: #38BDF8;">${res.registration.ticketCode}</strong></p>
                <p>Date: ${registeringEvent.date} at ${registeringEvent.time}</p>
                <p>Pass Tier: ${selectedTier.name} ($${selectedTier.price})</p>
              </div>
            </div>
          `
        });

        setRegisteringEvent(null);
        if (onOpenTicketModal) {
          onOpenTicketModal(res.registration);
        }
      }
    } catch (err) {
      alert('Error registering: ' + err.message);
    } finally {
      setIsSubmittingReg(false);
    }
  };

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    submitEventProposal(proposalForm);
    alert('Thank you! Your event proposal has been submitted to the EduMind curriculum board for review.');
    setIsProposalOpen(false);
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Live Workshops, Hackathons & Tech Events
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Join interactive live coding sessions, compete in global hackathons, and connect directly with industry authors.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              onClick={() => setIsProposalOpen(true)}
              className="btn btn-secondary btn-sm"
            >
              <Plus size={15} /> Propose Community Event
            </button>
            <button 
              onClick={() => navigate('admin-checkin')}
              className="btn btn-ghost btn-sm"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              <QrCode size={15} /> Admin Check-In Desk
            </button>
          </div>
        </div>

        {/* Filters & View Switcher */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="form-select"
              style={{ width: 'auto', padding: '0.45rem 0.85rem' }}
            >
              {types.map(t => (
                <option key={t} value={t}>
                  {t === 'all' ? 'All Event Types' : t.toUpperCase()}
                </option>
              ))}
            </select>

            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="form-select"
              style={{ width: 'auto', padding: '0.45rem 0.85rem' }}
            >
              {topics.map(tp => (
                <option key={tp} value={tp}>
                  {tp === 'all' ? 'All Topics' : tp}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', gap: '0.35rem', background: 'var(--bg-input)', padding: '0.25rem', borderRadius: 'var(--radius-sm)' }}>
            <button
              onClick={() => setViewMode('list')}
              className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-ghost'}`}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`btn btn-sm ${viewMode === 'calendar' ? 'btn-primary' : 'btn-ghost'}`}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
            >
              Calendar View
            </button>
          </div>
        </div>

        {/* Events Grid View */}
        {viewMode === 'list' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredEvents.map(event => {
              const reg = userRegistrations[event.id];
              const isRegistered = !!reg;
              const spotsLeft = Math.max(0, event.capacity - event.registeredCount);
              const isFull = spotsLeft === 0;

              return (
                <div
                  key={event.id}
                  className="card"
                  style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span className="badge badge-primary">{event.type.toUpperCase()}</span>
                        <span className="badge badge-muted">{event.category}</span>
                        {event.featured && <span className="badge badge-amber">Featured</span>}
                        {isRegistered && <span className="badge badge-emerald">Registered ✓</span>}
                      </div>
                      <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{event.title}</h2>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: event.price === 0 ? 'var(--accent-emerald)' : 'var(--text-primary)' }}>
                        {event.price === 0 ? 'Free Pass' : `$${event.price}`}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: isFull ? 'var(--accent-amber)' : 'var(--text-muted)' }}>
                        {isFull ? `Waitlist Active (${event.waitlistCount} waiting)` : `${spotsLeft} spots remaining`}
                      </div>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                    {event.description}
                  </p>

                  {/* Metadata Row */}
                  <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    padding: '0.875rem 1rem',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={15} color="var(--brand-primary-light)" />
                      <span>{event.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={15} color="var(--brand-primary-light)" />
                      <span>{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={15} color="var(--brand-primary-light)" />
                      <span>{event.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Users size={15} color="var(--brand-primary-light)" />
                      <span>Host: <strong>{event.host.name}</strong></span>
                    </div>
                  </div>

                  {/* Actions & Tiers */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                    {event.relatedCourseId && (
                      <button 
                        onClick={() => navigate(`course/${event.relatedCourseId}`)}
                        className="btn btn-ghost btn-sm"
                        style={{ color: 'var(--brand-primary-light)', padding: '0' }}
                      >
                        Related Masterclass Curriculum →
                      </button>
                    )}

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {isRegistered ? (
                        <>
                          <button
                            onClick={() => onOpenTicketModal && onOpenTicketModal(reg)}
                            className="btn btn-secondary btn-sm"
                          >
                            <QrCode size={15} /> View Ticket & QR
                          </button>
                          <button
                            onClick={() => navigate(`live-room/${event.id}`)}
                            className="btn btn-emerald btn-sm"
                          >
                            <Video size={15} /> Enter Live Auditorium
                          </button>
                          <button
                            onClick={() => cancelRegistration(event.id)}
                            className="btn btn-ghost btn-sm"
                            style={{ color: 'var(--accent-rose)', fontSize: '0.75rem' }}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleOpenRegister(event)}
                          className="btn btn-primary btn-sm"
                        >
                          <Ticket size={15} /> {isFull ? 'Join Waitlist' : 'Register for Ticket'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Calendar View */
          <div className="card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>August 2026 Interactive Calendar</h3>
            <div className="grid grid-cols-7" style={{ gap: '0.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7" style={{ gap: '0.5rem' }}>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
                const dayStr = `2026-08-${String(day).padStart(2, '0')}`;
                const dayEvents = events.filter(e => e.date === dayStr);

                return (
                  <div
                    key={day}
                    style={{
                      minHeight: '80px',
                      background: dayEvents.length > 0 ? 'rgba(2, 132, 199, 0.1)' : 'var(--bg-surface)',
                      border: `1px solid ${dayEvents.length > 0 ? 'var(--brand-primary-light)' : 'var(--border-subtle)'}`,
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.35rem',
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{day}</span>
                    {dayEvents.map(de => (
                      <div
                        key={de.id}
                        onClick={() => handleOpenRegister(de)}
                        style={{
                          fontSize: '0.65rem',
                          background: 'var(--brand-primary)',
                          color: '#FFFFFF',
                          padding: '2px 4px',
                          borderRadius: '3px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          cursor: 'pointer'
                        }}
                        title={de.title}
                      >
                        {de.title}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Registration Modal */}
        {registeringEvent && (
          <div className="modal-overlay" onClick={() => setRegisteringEvent(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                    Register for {registeringEvent.title}
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {registeringEvent.date} • {registeringEvent.time}
                  </div>
                </div>
                <button onClick={() => setRegisteringEvent(null)} className="btn btn-ghost btn-sm">✕</button>
              </div>

              <div className="modal-body">
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Select Ticket Tier</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {registeringEvent.tiers.map((tier, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedTier(tier)}
                        style={{
                          padding: '1rem',
                          background: selectedTier?.name === tier.name ? 'rgba(2, 132, 199, 0.12)' : 'var(--bg-surface)',
                          border: `1px solid ${selectedTier?.name === tier.name ? 'var(--brand-primary-light)' : 'var(--border-subtle)'}`,
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{tier.name}</span>
                          <span style={{ fontWeight: 800, color: tier.price === 0 ? 'var(--accent-emerald)' : 'var(--brand-primary-light)' }}>
                            {tier.price === 0 ? 'Free' : `$${tier.price}`}
                          </span>
                        </div>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                          {tier.perks.map((p, pIdx) => <li key={pIdx}>{p}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Group Registration (Number of Attendees)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={attendeeCount}
                    onChange={(e) => setAttendeeCount(parseInt(e.target.value) || 1)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button onClick={() => setRegisteringEvent(null)} className="btn btn-secondary btn-sm">Cancel</button>
                <button 
                  onClick={handleConfirmRegistration}
                  disabled={isSubmittingReg}
                  className="btn btn-primary btn-sm"
                >
                  {isSubmittingReg ? 'Securing Spot...' : 'Confirm Ticket Reservation'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Proposal Modal */}
        {isProposalOpen && (
          <div className="modal-overlay" onClick={() => setIsProposalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Propose a Community Workshop / AMA</h3>
                <button onClick={() => setIsProposalOpen(false)} className="btn btn-ghost btn-sm">✕</button>
              </div>
              <form onSubmit={handleSubmitProposal}>
                <div className="modal-body">
                  <div className="form-group">
                    <label className="form-label">Event Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Distributed Lock-Free Systems in Rust"
                      value={proposalForm.title}
                      onChange={(e) => setProposalForm({ ...proposalForm, title: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Topic Category</label>
                    <select
                      value={proposalForm.topic}
                      onChange={(e) => setProposalForm({ ...proposalForm, topic: e.target.value })}
                      className="form-select"
                    >
                      <option value="AI & Data Science">AI & Data Science</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Software Engineering">Software Engineering</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Detailed Agenda & Objectives</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what learners will code and take away..."
                      value={proposalForm.description}
                      onChange={(e) => setProposalForm({ ...proposalForm, description: e.target.value })}
                      className="form-textarea"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" onClick={() => setIsProposalOpen(false)} className="btn btn-secondary btn-sm">Cancel</button>
                  <button type="submit" className="btn btn-primary btn-sm">Submit for Review</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
