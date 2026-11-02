import React from 'react';
import { X, Download, Calendar, MapPin, User, CheckCircle2, QrCode } from 'lucide-react';

export function EventTicketModal({ registration, isOpen, onClose }) {
  if (!isOpen || !registration) return null;

  const handleDownloadICS = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//EduMind.AI//Events//EN
BEGIN:VEVENT
UID:${registration.ticketCode}@edumind.ai
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:20260820T180000Z
DTEND:20260820T200000Z
SUMMARY:${registration.eventTitle}
DESCRIPTION:EduMind.AI Live Session. Ticket Code: ${registration.ticketCode}
LOCATION:${registration.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `EduMind-Event-${registration.ticketCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '480px', textAlign: 'center' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <QrCode size={18} color="var(--brand-primary-light)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Official Event Pass</h3>
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-sm">✕</button>
        </div>

        <div className="modal-body">
          {/* Ticket Card */}
          <div style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            border: '2px dashed var(--brand-primary-light)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem 1.25rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--brand-primary-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              EduMind.AI Live Accreditation Pass
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              {registration.eventTitle}
            </h3>

            {/* Rendered Dynamic QR Code */}
            <div style={{
              background: '#FFFFFF',
              padding: '0.75rem',
              borderRadius: 'var(--radius-md)',
              display: 'inline-block',
              margin: '0 auto 1.25rem auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}>
              {registration.qrDataUrl ? (
                <img 
                  src={registration.qrDataUrl} 
                  alt="Event QR Ticket Code" 
                  style={{ width: '180px', height: '180px', display: 'block' }}
                />
              ) : (
                <div style={{ width: '180px', height: '180px', background: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  QR Code
                </div>
              )}
            </div>

            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-primary-light)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
              {registration.ticketCode}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', textAlign: 'left', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Attendee:</span>
                <strong style={{ color: '#FFFFFF' }}>{registration.attendeeName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Tier:</span>
                <strong style={{ color: 'var(--brand-primary-light)' }}>{registration.tier}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Date & Time:</span>
                <strong style={{ color: '#FFFFFF' }}>{registration.date} ({registration.time})</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ justifyContent: 'center', gap: '1rem' }}>
          <button onClick={handleDownloadICS} className="btn btn-primary btn-sm">
            <Calendar size={15} /> Add to Calendar (.ics)
          </button>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
