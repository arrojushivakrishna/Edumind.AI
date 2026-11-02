import React, { useState } from 'react';
import { QrCode, CheckCircle2, AlertTriangle, ArrowLeft, Users, Shield, Clock } from 'lucide-react';
import { useEvents } from '../context/EventContext';

export function AdminCheckInPage({ navigate }) {
  const { checkInLogs, processAdminCheckIn, events } = useEvents();
  const [ticketInput, setTicketInput] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCheckIn = (e) => {
    e.preventDefault();
    if (!ticketInput.trim()) return;

    const res = processAdminCheckIn(ticketInput);
    setStatusMessage(res);
    if (res.status === 'success') {
      setTicketInput('');
    }
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-lg">
        <button
          onClick={() => navigate('events')}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Events Hub
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'rgba(2, 132, 199, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--brand-primary-light)'
          }}>
            <Shield size={22} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>
              Admin Live Event Check-In Desk
            </h1>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0 }}>
              Scan attendee QR codes or enter ticket serial codes to register live entry.
            </p>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '1rem', marginBottom: '2rem' }}>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Checked-In</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
              {checkInLogs.length} Attendees
            </div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Registered Capacity</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-primary-light)' }}>
              250 Capacity
            </div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Duplicate Entry Protection</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
              Active (Strict Single-Use)
            </div>
          </div>
        </div>

        {/* Scanner Input Box */}
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <form onSubmit={handleCheckIn}>
            <label className="form-label" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              Scan QR Barcode or Enter Ticket Code
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="e.g. TIC-9812-AI"
                value={ticketInput}
                onChange={(e) => setTicketInput(e.target.value)}
                autoFocus
                className="form-input"
                style={{ flex: 1, fontSize: '1.1rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '0 1.5rem' }}>
                <QrCode size={18} /> Validate & Check In
              </button>
            </div>
          </form>

          {/* Status Alert */}
          {statusMessage && (
            <div style={{
              marginTop: '1.25rem',
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              background: statusMessage.status === 'success' 
                ? 'rgba(16, 185, 129, 0.12)' 
                : statusMessage.status === 'duplicate' 
                  ? 'rgba(245, 158, 11, 0.15)' 
                  : 'rgba(244, 63, 94, 0.15)',
              border: `1px solid ${
                statusMessage.status === 'success' 
                  ? 'var(--accent-emerald)' 
                  : statusMessage.status === 'duplicate' 
                    ? 'var(--accent-amber)' 
                    : 'var(--accent-rose)'
              }`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              {statusMessage.status === 'success' ? (
                <CheckCircle2 size={20} color="var(--accent-emerald)" />
              ) : (
                <AlertTriangle size={20} color="var(--accent-amber)" />
              )}
              <div style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: statusMessage.status === 'success' ? 'var(--accent-emerald)' : 'var(--accent-amber)'
              }}>
                {statusMessage.message}
              </div>
            </div>
          )}
        </div>

        {/* Live Check-In Activity Logs */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={18} color="var(--brand-primary-light)" />
            Real-Time Check-In Ledger
          </h3>

          {checkInLogs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
              No check-ins recorded yet. Ready to scan.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {checkInLogs.map((log) => (
                <div
                  key={log.id}
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', marginRight: '0.75rem' }}>
                      {log.attendeeName}
                    </span>
                    <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                      {log.ticketCode}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {new Date(log.checkInTime).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
