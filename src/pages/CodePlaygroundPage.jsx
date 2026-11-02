import React, { useState } from 'react';
import { Play, Code2, Terminal, Sparkles, RotateCcw, Share2, Copy, Check, Eye, HelpCircle } from 'lucide-react';
import { executeCode, LANGUAGE_CONFIG } from '../services/pistonApi';
import { VSCodeEditor } from '../components/VSCodeEditor';

export function CodePlaygroundPage({ setAiContext }) {
  const [selectedLang, setSelectedLang] = useState('python');
  const [code, setCode] = useState(LANGUAGE_CONFIG.python.defaultCode);
  const [stdin, setStdin] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('Ready. Click "Run Code" or press Run in the VS Code editor.');
  const [isExecuting, setIsExecuting] = useState(false);
  const [stats, setStats] = useState(null);
  const [activeOutputTab, setActiveOutputTab] = useState('terminal'); // 'terminal' | 'preview'

  const handleLanguageChange = (langKey) => {
    setSelectedLang(langKey);
    setCode(LANGUAGE_CONFIG[langKey].defaultCode);
    setTerminalOutput(`Switched to ${LANGUAGE_CONFIG[langKey].name}. Ready to execute.`);
    setStats(null);
    if (langKey === 'html' || langKey === 'css') {
      setActiveOutputTab('preview');
    } else {
      setActiveOutputTab('terminal');
    }
  };

  const handleRun = async () => {
    setIsExecuting(true);
    setTerminalOutput('Compiling and executing code in sandbox...');
    try {
      const res = await executeCode(selectedLang, code, stdin);
      setStats(res);

      if (res.stderr) {
        setTerminalOutput(`[Exit Code ${res.exitCode}] Execution Error:\n${res.stderr}`);
      } else {
        setTerminalOutput(`[Exit Code ${res.exitCode}] Output:\n${res.stdout || '(Program completed with no output to stdout)'}`);
      }
    } catch (e) {
      setTerminalOutput(`Execution error: ${e.message}`);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleReset = () => {
    setCode(LANGUAGE_CONFIG[selectedLang].defaultCode);
    setStdin('');
    setStats(null);
  };

  return (
    <div style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container-xl">
        {/* Header */}
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
              <span className="badge badge-primary">VS Code IntelliSense Enabled</span>
              <span className="badge badge-emerald">Real Multi-Language Execution</span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>
              Interactive Online Compiler & IDE
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '4px 0 0 0' }}>
              Type keywords (`def`, `class`, `function`, `record`, `SELECT`, `async`) for instant VS Code IntelliSense & snippets.
            </p>
          </div>

          {/* Language Selector & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <select
              value={selectedLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="form-select"
              style={{ width: 'auto', fontWeight: 700, color: 'var(--brand-primary-light)' }}
            >
              {Object.keys(LANGUAGE_CONFIG).map(k => (
                <option key={k} value={k}>
                  {LANGUAGE_CONFIG[k].name}
                </option>
              ))}
            </select>

            <button onClick={handleReset} className="btn btn-secondary btn-sm" title="Reset to template">
              <RotateCcw size={15} /> Reset
            </button>

            <button
              onClick={handleRun}
              disabled={isExecuting}
              className="btn btn-emerald btn-sm"
              style={{ gap: '0.5rem', padding: '0.45rem 1.25rem', fontWeight: 700 }}
            >
              <Play size={15} fill="#FFFFFF" />
              <span>{isExecuting ? 'Executing...' : 'Run Code'}</span>
            </button>
          </div>
        </div>

        {/* IDE Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1.5rem' }}>
          {/* Left: VS Code IntelliSense Editor */}
          <div>
            <VSCodeEditor
              code={code}
              onChange={setCode}
              language={selectedLang}
              onRun={handleRun}
              isExecuting={isExecuting}
              height="540px"
              title={`main.${LANGUAGE_CONFIG[selectedLang].extension}`}
            />
          </div>

          {/* Right: Terminal Console & Live Split Visual Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '600px' }}>
            {/* Standard Input */}
            <div className="card" style={{ padding: '0.875rem 1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                Standard Input (stdin)
              </div>
              <input
                type="text"
                placeholder="Optional input parameters passed to stdin..."
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                className="form-input"
                style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', padding: '0.35rem 0.65rem' }}
              />
            </div>

            {/* Output Panel with Terminal & Live Visual Preview Tabs */}
            <div className="code-editor-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="code-editor-header">
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => setActiveOutputTab('terminal')}
                    style={{
                      padding: '0.25rem 0.65rem',
                      background: activeOutputTab === 'terminal' ? 'rgba(2, 132, 199, 0.2)' : 'transparent',
                      border: `1px solid ${activeOutputTab === 'terminal' ? 'var(--brand-primary-light)' : 'transparent'}`,
                      borderRadius: 'var(--radius-xs)',
                      color: activeOutputTab === 'terminal' ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    <Terminal size={13} />
                    <span>Live Terminal Console</span>
                  </button>

                  {(selectedLang === 'html' || selectedLang === 'css') && (
                    <button
                      onClick={() => setActiveOutputTab('preview')}
                      style={{
                        padding: '0.25rem 0.65rem',
                        background: activeOutputTab === 'preview' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                        border: `1px solid ${activeOutputTab === 'preview' ? 'var(--accent-emerald)' : 'transparent'}`,
                        borderRadius: 'var(--radius-xs)',
                        color: activeOutputTab === 'preview' ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      <Eye size={13} />
                      <span>Live Visual DOM Preview</span>
                    </button>
                  )}
                </div>

                {stats && (
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.7rem' }}>
                    <span className="badge badge-muted">Execution Time: {stats.timeMs}ms</span>
                    <span className={`badge ${stats.exitCode === 0 ? 'badge-emerald' : 'badge-rose'}`}>
                      Exit: {stats.exitCode}
                    </span>
                  </div>
                )}
              </div>

              {activeOutputTab === 'terminal' ? (
                <div className="terminal-window" style={{ flex: 1, maxHeight: 'none', minHeight: '340px' }}>
                  {terminalOutput}
                </div>
              ) : (
                /* Live HTML / CSS Visual Preview Frame */
                <div style={{ flex: 1, background: '#FFFFFF', borderRadius: '0 0 var(--radius-md) var(--radius-md)', overflow: 'hidden' }}>
                  <iframe
                    title="Live Preview"
                    srcDoc={selectedLang === 'css' ? `<style>${code}</style><div class="card-grid"><div class="card"><h2>CSS3 Component Preview</h2><p>Live CSS subgrid & variables rendering.</p></div></div>` : code}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    sandbox="allow-scripts"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
