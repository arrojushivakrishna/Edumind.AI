import React, { useState } from 'react';
import { 
  ArrowLeft, Users, ThumbsUp, Send, MessageSquare, Download, 
  Share2, Award, Sparkles, CheckCircle2, Shield 
} from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { useAuth } from '../context/AuthContext';

export function LiveEventRoomPage({ eventId, navigate }) {
  const { events } = useEvents();
  const { user } = useAuth();
  const event = events.find(e => e.id === eventId) || events[0];

  const [activeTab, setActiveTab] = useState('qa'); // 'qa' | 'chat' | 'resources'
  const [qaList, setQaList] = useState([
    { id: 1, author: 'David Kim', text: 'How do cyclical agent graphs handle runaway memory recursion?', upvotes: 24, userVoted: false },
    { id: 2, author: 'Samantha Taylor', text: 'Will the Python 3.12 GIL changes affect multi-agent async throughput?', upvotes: 18, userVoted: false },
    { id: 3, author: 'Elena Rostova', text: 'Can we inspect the live state variables in real-time telemetry?', upvotes: 9, userVoted: false }
  ]);
  const [questionInput, setQuestionInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'Priya Sharma', text: 'Welcome everyone to the live stage! Audio and stream look crisp.' },
    { id: 2, sender: 'Marcus Vance', text: 'Excited for the live coding architecture section!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  const handleUpvoteQA = (id) => {
    setQaList(prev => prev.map(q => {
      if (q.id === id) {
        return {
          ...q,
          upvotes: q.userVoted ? q.upvotes - 1 : q.upvotes + 1,
          userVoted: !q.userVoted
        };
      }
      return q;
    }));
  };

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!questionInput.trim()) return;
    const newQ = {
      id: Date.now(),
      author: user ? user.name : 'Anonymous Learner',
      text: questionInput,
      upvotes: 1,
      userVoted: true
    };
    setQaList([newQ, ...qaList]);
    setQuestionInput('');
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: user ? user.name : 'You',
      text: chatInput
    };
    setChatMessages([...chatMessages, newMsg]);
    setChatInput('');
  };

  return (
    <div style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container-xl">
        <button
          onClick={() => navigate('events')}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Events Hub
        </button>

        {/* Live Stage Banner */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className="badge badge-rose" style={{ animation: 'pulseGlow 2s infinite' }}>
                ● LIVE BROADCAST
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                {event.location}
              </span>
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{event.title}</h1>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.85rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8125rem',
            color: 'var(--accent-emerald)',
            fontWeight: 700
          }}>
            <Users size={16} />
            <span>218 Learners Currently Watching</span>
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '1.5rem' }}>
          {/* Left: Stream Video Player (2 Cols) */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{
              background: '#05080E',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              <video
                controls
                autoPlay
                muted
                style={{ width: '100%', maxHeight: '480px', display: 'block' }}
                poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Event Host Details */}
            <div className="card" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <img
                  src={event.host.avatar}
                  alt={event.host.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                />
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{event.host.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--brand-primary-light)' }}>{event.host.role}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={() => alert('Attendance badge added to your EduMind profile!')} 
                  className="btn btn-secondary btn-sm"
                >
                  <Award size={15} /> Claim Event Badge
                </button>
              </div>
            </div>
          </div>

          {/* Right: Interactive Q&A / Live Chat Drawer (1 Col) */}
          <div className="card" style={{ height: '600px', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
            {/* Tabs */}
            <div style={{
              display: 'flex',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'var(--bg-card-elevated)'
            }}>
              <button
                onClick={() => setActiveTab('qa')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: activeTab === 'qa' ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                  borderBottom: activeTab === 'qa' ? '2px solid var(--brand-primary-light)' : '2px solid transparent',
                  background: 'transparent'
                }}
              >
                Live Q&A ({qaList.length})
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: activeTab === 'chat' ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                  borderBottom: activeTab === 'chat' ? '2px solid var(--brand-primary-light)' : '2px solid transparent',
                  background: 'transparent'
                }}
              >
                Audience Chat
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: activeTab === 'resources' ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                  borderBottom: activeTab === 'resources' ? '2px solid var(--brand-primary-light)' : '2px solid transparent',
                  background: 'transparent'
                }}
              >
                Slides & Survey
              </button>
            </div>

            {/* Tab: Q&A */}
            {activeTab === 'qa' && (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {qaList.map(q => (
                    <div
                      key={q.id}
                      style={{
                        padding: '0.75rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'flex-start'
                      }}
                    >
                      <button
                        onClick={() => handleUpvoteQA(q.id)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          padding: '0.35rem 0.5rem',
                          background: q.userVoted ? 'rgba(2, 132, 199, 0.2)' : 'var(--bg-card)',
                          border: `1px solid ${q.userVoted ? 'var(--brand-primary-light)' : 'var(--border-subtle)'}`,
                          borderRadius: 'var(--radius-xs)',
                          color: q.userVoted ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                          cursor: 'pointer'
                        }}
                      >
                        <ThumbsUp size={13} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{q.upvotes}</span>
                      </button>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>{q.author}</div>
                        <div style={{ fontSize: '0.84rem', color: 'var(--text-primary)', marginTop: '2px', lineHeight: 1.4 }}>
                          {q.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAskQuestion} style={{ padding: '0.75rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card-elevated)', display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Submit a question for speaker..."
                    value={questionInput}
                    onChange={(e) => setQuestionInput(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.8125rem', padding: '0.4rem 0.65rem' }}
                  />
                  <button type="submit" className="btn btn-primary btn-sm">Ask</button>
                </form>
              </div>
            )}

            {/* Tab: Chat */}
            {activeTab === 'chat' && (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {chatMessages.map(m => (
                    <div key={m.id} style={{ fontSize: '0.8125rem' }}>
                      <strong style={{ color: 'var(--brand-primary-light)' }}>{m.sender}: </strong>
                      <span style={{ color: 'var(--text-secondary)' }}>{m.text}</span>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendChat} style={{ padding: '0.75rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card-elevated)', display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Type a chat message..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.8125rem', padding: '0.4rem 0.65rem' }}
                  />
                  <button type="submit" className="btn btn-primary btn-sm"><Send size={14} /></button>
                </form>
              </div>
            )}

            {/* Tab: Slides & Survey */}
            {activeTab === 'resources' && (
              <div style={{ padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Session Downloads</h4>
                  <button onClick={() => alert('Downloading Session Deck (PDF)...')} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Download size={14} /> Full Slide Deck (.PDF 14.2 MB)
                  </button>
                  <button onClick={() => alert('Downloading GitHub Starter Code (.ZIP)...')} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'flex-start', gap: '0.5rem' }}>
                    <Download size={14} /> Sample Agent Code Repo (.ZIP)
                  </button>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Post-Event Rating & Feedback</h4>
                  {surveyCompleted ? (
                    <div style={{ color: 'var(--accent-emerald)', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={16} /> Thank you for rating this session!
                    </div>
                  ) : (
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>How valuable was this live masterclass?</p>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        {[5, 4, 3, 2, 1].map(star => (
                          <button key={star} onClick={() => setSurveyCompleted(true)} className="btn btn-secondary btn-sm" style={{ padding: '0.25rem 0.5rem' }}>
                            ★ {star}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
