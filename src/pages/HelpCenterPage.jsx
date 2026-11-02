import React, { useState } from 'react';
import { 
  HelpCircle, Search, MessageSquare, CheckCircle2, ChevronDown, 
  ChevronUp, Send, ShieldCheck, ArrowLeft 
} from 'lucide-react';

export function HelpCenterPage({ navigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketForm, setTicketForm] = useState({ subject: '', category: 'courses', message: '' });

  const faqs = [
    {
      category: 'Certificates & Accreditation',
      question: 'How do I unlock and verify my certificate of mastery?',
      answer: 'Certificates are auto-issued the moment you complete 100% of the lessons in a masterclass and score 80% or higher on the comprehensive Final Certification Exam. Each certificate has a tamper-evident serial code verifiable without login at /verify/:code.'
    },
    {
      category: 'Code Execution Engine',
      question: 'How does code execution work in the browser?',
      answer: 'EduMind.AI connects directly to the open-source Piston container sandbox API. Code is compiled and executed in real isolated Linux runtimes with full stdout, stderr, execution timings, and exit codes. We never fake or simulate outputs.'
    },
    {
      category: 'Live Events & QR Tickets',
      question: 'What happens if a live workshop reaches capacity?',
      answer: 'When a workshop is full, you are automatically placed on the waitlist. If another attendee cancels their registration, the next learner on the waitlist is auto-promoted and sent a confirmation email with their QR ticket and .ics calendar invite.'
    },
    {
      category: 'AI Copilot Assistant',
      question: 'Why doesn’t the AI assistant give direct quiz answers?',
      answer: 'EduMind Copilot follows pedagogical Socratic guardrails. It is designed to explain conceptual mental models, debug runtime errors, and generate practice problems, but will not spoil active exam questions to preserve certificate integrity.'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    !searchQuery || 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-lg">
        <button
          onClick={() => navigate('home')}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            EduMind.AI Help & Support Center
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Find immediate answers or submit a support inquiry directly to our engineering team.
          </p>

          {/* System Status Pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', color: 'var(--accent-emerald)', fontSize: '0.75rem', fontWeight: 700, marginTop: '1rem' }}>
            <CheckCircle2 size={14} />
            <span>All Systems Operational • 99.98% Uptime</span>
          </div>
        </div>

        {/* Search FAQ */}
        <div className="card" style={{ maxWidth: '580px', margin: '0 auto 3rem auto', padding: '0.75rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Search size={18} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.9375rem', color: 'var(--text-primary)' }}
            />
          </div>
        </div>

        {/* FAQ Accordions */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            Frequently Answered Inquiries
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filteredFaqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="card"
                  style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      {faq.question}
                    </h3>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {isOpen && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: '0.75rem', margin: '0.75rem 0 0 0' }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Ticket Submission Form */}
        <div className="card" style={{ padding: '2.5rem 2rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Still Need Help? File a Support Ticket
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Our technical support staff typically responds within 2-4 hours.
          </p>

          {ticketSubmitted ? (
            <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--accent-emerald)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
              <CheckCircle2 size={32} color="var(--accent-emerald)" style={{ margin: '0 auto 0.5rem auto' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Ticket Successfully Created!</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                We assigned ticket #TCK-8921. An email notification has been dispatched to your account.
              </p>
            </div>
          ) : (
            <form onSubmit={handleTicketSubmit}>
              <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Brief description of the issue..."
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="courses">Courses & Lesson Content</option>
                    <option value="compiler">Piston Compiler Issue</option>
                    <option value="certificates">Certificate Verification</option>
                    <option value="events">Live Events & Tickets</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Detailed Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide step-by-step reproduction details or questions..."
                  value={ticketForm.message}
                  onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-sm">
                <Send size={15} /> Submit Support Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
