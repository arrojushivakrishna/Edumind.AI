import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, X, Send, Bot, RotateCcw, Copy, Check, Maximize2, Minimize2, 
  Settings, Key, AlertCircle, RefreshCw
} from 'lucide-react';
import { streamAIResponse, AI_PERSONA, getAIConfig, saveAIConfig } from '../services/aiService';

export function AIChatWidget({ activeLessonContext = null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [activeMode, setActiveMode] = useState('claude_chatgpt'); // 'claude_chatgpt' | 'debugger' | 'optimizer' | 'architect'
  const [lastFailedText, setLastFailedText] = useState(null);

  // AI Configuration state
  const [aiConfig, setAiConfigState] = useState(getAIConfig());
  const [tempCopilotKey, setTempCopilotKey] = useState(aiConfig.copilotApiKey || '');
  const [tempCopilotEndpoint, setTempCopilotEndpoint] = useState(aiConfig.copilotEndpoint || '');
  const [tempGeminiKey, setTempGeminiKey] = useState(aiConfig.geminiApiKey || '');
  const [tempOpenAIKey, setTempOpenAIKey] = useState(aiConfig.openaiApiKey || '');
  const [tempProvider, setTempProvider] = useState(aiConfig.provider || (aiConfig.copilotApiKey ? 'copilot' : 'auto'));
  const [configSaveNotice, setConfigSaveNotice] = useState(false);

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_ai_history_v3');
      return saved ? JSON.parse(saved) : [
        {
          id: 'welcome-1',
          sender: 'assistant',
          text: `👋 Hello! I'm **${AI_PERSONA.name}**, your world-class AI educational assistant & coding mentor.\n\nI can:\n* 🔬 **Explain science, physics, biology & chemistry** with rigorous formulas & concepts\n* 📐 **Solve math & algebra equations** step-by-step (e.g. *"Solve 2x + 5 = 15"*)\n* 💻 **Explain programming concepts** (e.g. *"Inheritance in Python"* with code)\n* 📝 **Generate exam questions** or summarize articles\n* 🔍 **Debug code & optimize algorithms** for your lessons\n\nAsk me any question or pick a quick prompt below to get started!`
        }
      ];
    } catch {
      return [
        {
          id: 'welcome-1',
          sender: 'assistant',
          text: `👋 Hello! I'm **${AI_PERSONA.name}**, your world-class AI educational assistant.\n\nAsk me anything to get started!`
        }
      ];
    }
  });

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('edumind_ai_history_v3', JSON.stringify(messages));
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Auto-resize textarea as user types
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSendMessage = async (textToSend, overrideMode) => {
    const rawText = textToSend !== undefined ? textToSend : input;
    const text = rawText.trim();
    if (!text || isStreaming) return;

    const currentM = overrideMode || activeMode;
    const userMsgId = `usr_${Date.now()}`;
    const botMsgId = `bot_${Date.now()}`;

    // Add user message to list
    const updatedMessages = [
      ...messages,
      { id: userMsgId, sender: 'user', text }
    ];
    setMessages(updatedMessages);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    setIsStreaming(true);
    setLastFailedText(null);

    // Initial placeholder bot message
    setMessages(prev => [
      ...prev,
      { 
        id: botMsgId, 
        sender: 'assistant', 
        text: 'Thinking & analyzing your question...',
        isThinking: true 
      }
    ]);

    try {
      await streamAIResponse(
        text, 
        activeLessonContext || {}, 
        (accumulatedText) => {
          setMessages(prev => prev.map(m => m.id === botMsgId ? { 
            ...m, 
            text: accumulatedText,
            isThinking: false,
            isError: false 
          } : m));
        },
        currentM,
        updatedMessages
      );
    } catch (err) {
      const errorMessage = err?.message || 'Encountered an issue generating response. Please try again.';
      setLastFailedText(text);
      setMessages(prev => prev.map(m => m.id === botMsgId ? { 
        ...m, 
        text: `⚠️ **AI Service Error**: ${errorMessage}\n\nPlease verify your API key in Settings, check your internet connection, or click **Retry** below.`,
        isError: true,
        isThinking: false,
        failedQuery: text
      } : m));
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleRetry = (queryToRetry) => {
    const retryText = queryToRetry || lastFailedText;
    if (retryText) {
      handleSendMessage(retryText);
    }
  };

  const handleCopyMessage = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    const initialMsg = [
      {
        id: `welcome_${Date.now()}`,
        sender: 'assistant',
        text: `✨ Chat session reset. What would you like to learn or solve next?`
      }
    ];
    setMessages(initialMsg);
    setLastFailedText(null);
    localStorage.setItem('edumind_ai_history_v3', JSON.stringify(initialMsg));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    const updated = {
      ...aiConfig,
      provider: tempProvider,
      copilotApiKey: tempCopilotKey.trim(),
      copilotEndpoint: tempCopilotEndpoint.trim(),
      geminiApiKey: tempGeminiKey.trim(),
      openaiApiKey: tempOpenAIKey.trim()
    };
    saveAIConfig(updated);
    setAiConfigState(updated);
    setConfigSaveNotice(true);
    setTimeout(() => {
      setConfigSaveNotice(false);
      setIsSettingsOpen(false);
    }, 1200);
  };

  const renderFormattedText = (content) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return (
      <div style={{ fontSize: '0.84rem', lineHeight: 1.6 }}>
        {parts.map((part, pIdx) => {
          if (part.startsWith('```') && part.endsWith('```')) {
            const lines = part.slice(3, -3).trim().split('\n');
            const firstLine = lines[0].trim();
            const hasLang = !firstLine.includes(' ') && firstLine.length < 15 && firstLine.length > 0;
            const lang = hasLang ? firstLine : 'code';
            const snippet = (hasLang ? lines.slice(1) : lines).join('\n');

            return (
              <div key={pIdx} style={{ margin: '0.65rem 0', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid #334155', background: '#0F172A' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.35rem 0.65rem', background: '#1E293B', borderBottom: '1px solid #334155', color: '#94A3B8', fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ fontWeight: 700, color: '#38BDF8' }}>{lang.toUpperCase()}</span>
                  <button
                    onClick={() => handleCopyMessage(`code_${pIdx}`, snippet)}
                    className="btn btn-ghost btn-sm"
                    style={{ padding: '2px 6px', fontSize: '0.68rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    {copiedId === `code_${pIdx}` ? <Check size={12} color="#10B981" /> : <Copy size={12} />}
                    <span>{copiedId === `code_${pIdx}` ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre style={{ margin: 0, padding: '0.75rem', color: '#E2E8F0', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', overflowX: 'auto', lineHeight: 1.45 }}>
                  <code>{snippet}</code>
                </pre>
              </div>
            );
          }

          // Format basic markdown headers, bold, and line breaks
          const formattedLines = part.split('\n').map((line, lIdx) => {
            // Table row rendering
            if (line.startsWith('|') && line.endsWith('|')) {
              return (
                <div key={lIdx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', background: 'rgba(0,0,0,0.03)', padding: '2px 4px', borderRadius: '3px' }}>
                  {line}
                </div>
              );
            }

            // Headers
            if (line.startsWith('### ')) {
              return <div key={lIdx} style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-primary)', marginTop: '0.6rem', marginBottom: '0.3rem' }}>{line.replace('### ', '')}</div>;
            }
            if (line.startsWith('#### ')) {
              return <div key={lIdx} style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--brand-primary)', marginTop: '0.5rem', marginBottom: '0.2rem' }}>{line.replace('#### ', '')}</div>;
            }
            if (line.startsWith('---')) {
              return <hr key={lIdx} style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '0.6rem 0' }} />;
            }

            return (
              <span key={lIdx}>
                {line}
                {lIdx < part.split('\n').length - 1 && <br />}
              </span>
            );
          });

          return (
            <div key={pIdx} style={{ whiteSpace: 'pre-wrap' }}>
              {formattedLines}
            </div>
          );
        })}
      </div>
    );
  };

  const getActiveBadgeLabel = () => {
    if (aiConfig.copilotApiKey) return '🚀 Real-World Copilot Active';
    if (aiConfig.geminiApiKey) return 'Gemini Cloud API Active';
    if (aiConfig.openaiApiKey) return 'OpenAI Cloud API Active';
    return 'EduMind Autonomous AI Active';
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ai-widget-button"
        title="Open EduMind AI Mentor (ChatGPT & Claude Caliber)"
        style={{
          boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
          background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
        }}
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
      </button>

      {/* Chat Drawer */}
      {isOpen && (
        <div 
          className="ai-chat-drawer" 
          style={{ 
            width: isExpanded ? '660px' : '450px', 
            height: isExpanded ? '720px' : '590px',
            maxHeight: '85vh', 
            maxWidth: '94vw',
            display: 'flex', 
            flexDirection: 'column',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-xl)',
            zIndex: 1000
          }}
        >
          {/* Header */}
          <div className="ai-chat-header" style={{ background: '#F8FAFC', padding: '0.75rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '9px',
                background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)'
              }}>
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {AI_PERSONA.name}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }} />
                  {getActiveBadgeLabel()}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="btn btn-ghost btn-sm"
                style={{ padding: '0.3rem', color: isSettingsOpen ? 'var(--brand-primary)' : 'var(--text-muted)' }}
                title="AI Settings & API Keys"
              >
                <Settings size={15} />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn btn-ghost btn-sm"
                style={{ padding: '0.3rem', color: 'var(--text-muted)' }}
                title={isExpanded ? 'Collapse' : 'Expand window'}
              >
                {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
              <button 
                onClick={handleClearHistory}
                className="btn btn-ghost btn-sm"
                style={{ padding: '0.3rem', color: 'var(--text-muted)' }}
                title="Clear chat history"
              >
                <RotateCcw size={14} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="btn btn-ghost btn-sm"
                style={{ padding: '0.3rem' }}
                title="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Settings Drawer Overlay */}
          {isSettingsOpen && (
            <div style={{
              background: '#FFFFFF',
              borderBottom: '2px solid var(--brand-primary)',
              padding: '0.85rem 1rem',
              fontSize: '0.78rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Key size={14} color="var(--brand-primary)" /> AI API Settings & Providers
                </span>
                <button onClick={() => setIsSettingsOpen(false)} className="btn btn-ghost btn-sm" style={{ padding: '2px 5px' }}>
                  <X size={13} />
                </button>
              </div>

              <form onSubmit={handleSaveSettings}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '3px' }}>
                    Active Provider Mode:
                  </label>
                  <select 
                    value={tempProvider} 
                    onChange={(e) => setTempProvider(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.75rem', padding: '0.3rem 0.5rem', width: '100%' }}
                  >
                    <option value="copilot">🚀 Real-World Copilot (Microsoft / GitHub Copilot)</option>
                    <option value="auto">Auto (Copilot / Gemini / OpenAI / Autonomous)</option>
                    <option value="gemini">Google Gemini API (gemini-1.5-flash)</option>
                    <option value="openai">OpenAI API (gpt-4o-mini)</option>
                  </select>
                </div>

                {/* Copilot API Key Input */}
                <div style={{ marginBottom: '0.5rem', background: '#F8FAFC', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label style={{ fontWeight: 700, color: '#1E293B', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      🚀 Copilot API Key:
                    </label>
                    <a 
                      href="https://github.com/settings/tokens" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--brand-primary)', fontSize: '0.68rem', textDecoration: 'underline' }}
                    >
                      GitHub Token ↗
                    </a>
                  </div>
                  <input
                    type="password"
                    placeholder="ghp_... or ghu_... or Copilot API Key"
                    value={tempCopilotKey}
                    onChange={(e) => setTempCopilotKey(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.75rem', padding: '0.3rem 0.5rem', width: '100%', marginBottom: '4px' }}
                  />
                  <input
                    type="text"
                    placeholder="Endpoint: https://models.inference.ai.azure.com/chat/completions"
                    value={tempCopilotEndpoint}
                    onChange={(e) => setTempCopilotEndpoint(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.68rem', padding: '0.2rem 0.4rem', width: '100%', color: 'var(--text-muted)' }}
                    title="Custom Copilot or Azure OpenAI Endpoint URL"
                  />
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '3px' }}>
                      Google Gemini API Key:
                    </label>
                    <a 
                      href="https://aistudio.google.com/app/apikey" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--brand-primary)', fontSize: '0.7rem', textDecoration: 'underline' }}
                    >
                      Get Free Key ↗
                    </a>
                  </div>
                  <input
                    type="password"
                    placeholder="AIzaSy... (leave blank to use autonomous engine)"
                    value={tempGeminiKey}
                    onChange={(e) => setTempGeminiKey(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.75rem', padding: '0.3rem 0.5rem', width: '100%' }}
                  />
                </div>

                <div style={{ marginBottom: '0.65rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '3px' }}>
                      OpenAI API Key (Optional):
                    </label>
                    <a 
                      href="https://platform.openai.com/api-keys" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--brand-primary)', fontSize: '0.7rem', textDecoration: 'underline' }}
                    >
                      OpenAI Keys ↗
                    </a>
                  </div>
                  <input
                    type="password"
                    placeholder="sk-... (optional)"
                    value={tempOpenAIKey}
                    onChange={(e) => setTempOpenAIKey(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.75rem', padding: '0.3rem 0.5rem', width: '100%' }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', alignItems: 'center' }}>
                  {configSaveNotice && (
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.72rem' }}>
                      ✓ Settings Saved!
                    </span>
                  )}
                  <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}>
                    Save & Apply
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Mode Selector Chips */}
          <div style={{
            display: 'flex',
            gap: '0.35rem',
            padding: '0.4rem 0.75rem',
            background: '#F1F5F9',
            borderBottom: '1px solid var(--border-subtle)',
            overflowX: 'auto'
          }}>
            {[
              { id: 'claude_chatgpt', label: '🤖 Universal AI Mentor' },
              { id: 'debugger', label: '🔍 Bug Hunter / Fix' },
              { id: 'optimizer', label: '⚡ Code Optimizer' },
              { id: 'architect', label: '🏗️ System Architect' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setActiveMode(m.id)}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: activeMode === m.id ? 700 : 500,
                  padding: '0.25rem 0.55rem',
                  borderRadius: 'var(--radius-full)',
                  background: activeMode === m.id ? 'var(--brand-primary)' : '#FFFFFF',
                  color: activeMode === m.id ? '#FFFFFF' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: activeMode === m.id ? 'var(--brand-primary)' : 'var(--border-subtle)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer'
                }}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Active Context Banner if on lesson */}
          {activeLessonContext && activeLessonContext.lessonTitle && (
            <div style={{
              background: 'rgba(37, 99, 235, 0.08)',
              borderBottom: '1px solid rgba(37, 99, 235, 0.15)',
              padding: '0.35rem 0.75rem',
              fontSize: '0.72rem',
              color: 'var(--brand-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                📍 Context: <strong>{activeLessonContext.lessonTitle}</strong>
              </span>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>({activeLessonContext.language || 'Code'})</span>
            </div>
          )}

          {/* Messages Feed */}
          <div className="ai-chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`ai-message ${m.sender === 'user' ? 'ai-message-user' : 'ai-message-bot'}`}
                style={{ 
                  position: 'relative',
                  border: m.isError ? '1px solid #FCA5A5' : undefined,
                  background: m.isError ? '#FEF2F2' : undefined 
                }}
              >
                {m.sender === 'assistant' && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ 
                      fontSize: '0.7rem', 
                      fontWeight: 700, 
                      color: m.isError ? '#DC2626' : 'var(--brand-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '4px' 
                    }}>
                      {m.isError ? <AlertCircle size={12} /> : <Sparkles size={11} />}
                      {AI_PERSONA.name}
                    </div>
                    <button
                      onClick={() => handleCopyMessage(m.id, m.text)}
                      className="btn btn-ghost btn-sm"
                      style={{ padding: '2px 5px', fontSize: '0.65rem', color: 'var(--text-muted)' }}
                      title="Copy response"
                    >
                      {copiedId === m.id ? <Check size={12} color="var(--accent-emerald)" /> : <Copy size={12} />}
                    </button>
                  </div>
                )}

                {/* Message Content */}
                {m.sender === 'assistant' ? (
                  <div>
                    {renderFormattedText(m.text)}
                    {m.isError && (
                      <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #FECACA', display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleRetry(m.failedQuery)}
                          className="btn btn-primary btn-sm"
                          style={{ fontSize: '0.72rem', padding: '0.25rem 0.65rem', display: 'flex', alignItems: 'center', gap: '4px', background: '#DC2626', borderColor: '#DC2626' }}
                        >
                          <RefreshCw size={12} /> Retry Request
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.84rem', lineHeight: 1.6 }}>
                    {m.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div style={{
            padding: '0.4rem 0.75rem',
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: '0.35rem',
            overflowX: 'auto'
          }}>
            <button
              onClick={() => handleSendMessage('What is photosynthesis?')}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.7rem', padding: '0.25rem 0.5rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' }}
            >
              🌿 Photosynthesis
            </button>
            <button
              onClick={() => handleSendMessage('Solve 2x + 5 = 15')}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.7rem', padding: '0.25rem 0.5rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' }}
            >
              📐 Solve 2x + 5 = 15
            </button>
            <button
              onClick={() => handleSendMessage('Explain inheritance in Python with an example')}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.7rem', padding: '0.25rem 0.5rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' }}
            >
              🐍 Python Inheritance
            </button>
            <button
              onClick={() => handleSendMessage('Give me 10 questions for a physics exam')}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.7rem', padding: '0.25rem 0.5rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' }}
            >
              ⚛️ Physics Exam (10 Qs)
            </button>
            <button
              onClick={() => handleSendMessage('Who is the Prime Minister of India?')}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.7rem', padding: '0.25rem 0.5rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' }}
            >
              🇮🇳 PM of India
            </button>
          </div>

          {/* Multiline Input Box with Shift+Enter Support */}
          <div className="ai-chat-input-area" style={{ padding: '0.65rem 0.75rem', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
            <textarea
              ref={textareaRef}
              rows={1}
              placeholder="Ask anything (Shift+Enter for newline, Enter to send)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isStreaming}
              className="form-input"
              style={{ 
                flex: 1, 
                fontSize: '0.8125rem', 
                padding: '0.45rem 0.75rem', 
                resize: 'none',
                minHeight: '38px',
                maxHeight: '120px',
                lineHeight: '1.4'
              }}
            />
            <button 
              type="button"
              onClick={() => handleSendMessage()}
              disabled={!input.trim() || isStreaming}
              className="btn btn-primary btn-sm"
              style={{ 
                height: '38px',
                padding: '0 0.85rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
              title="Send message"
            >
              {isStreaming ? (
                <div style={{ width: '15px', height: '15px', border: '2px solid #FFFFFF', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
              ) : (
                <Send size={15} />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
