import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, MessageSquare } from 'lucide-react';
import { useCommunity } from '../context/CommunityContext';

export function DirectMessagesModal({ recipientUsername, isOpen, onClose }) {
  const { directMessages, sendDirectMessage } = useCommunity();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const thread = directMessages[recipientUsername] || [];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [thread, isOpen]);

  if (!isOpen || !recipientUsername) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    sendDirectMessage(recipientUsername, inputText);
    setInputText('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '480px', height: '560px', display: 'flex', flexDirection: 'column' }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--brand-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}>
              <User size={16} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>
                Direct Message with @{recipientUsername}
              </h3>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }} />
                Online
              </div>
            </div>
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-sm">✕</button>
        </div>

        {/* Message Thread */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {thread.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '2rem' }}>
              Say hello to start the conversation!
            </div>
          ) : (
            thread.map(msg => {
              const isMe = msg.sender === 'alexrivera';
              return (
                <div
                  key={msg.id}
                  style={{
                    alignSelf: isMe ? 'flex-end' : 'flex-start',
                    maxWidth: '80%',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-sm)',
                    background: isMe ? 'var(--brand-primary)' : 'var(--bg-surface)',
                    color: isMe ? '#FFFFFF' : 'var(--text-primary)',
                    border: `1px solid ${isMe ? 'transparent' : 'var(--border-subtle)'}`,
                    fontSize: '0.84rem',
                    lineHeight: 1.4
                  }}
                >
                  <div>{msg.text}</div>
                  <div style={{ fontSize: '0.65rem', color: isMe ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)', marginTop: '4px', textAlign: 'right' }}>
                    {msg.timestamp}
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Footer */}
        <form onSubmit={handleSend} style={{ padding: '0.75rem 1rem', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="form-input"
            style={{ fontSize: '0.8125rem', padding: '0.45rem 0.75rem' }}
          />
          <button type="submit" className="btn btn-primary btn-sm">
            <Send size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
