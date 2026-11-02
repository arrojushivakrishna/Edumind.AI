import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, Code2, Copy, Check, Play, Terminal, Eye, FileCode, CheckCircle2, RotateCcw 
} from 'lucide-react';

// Fallback IntelliSense dictionary if needed
const DEFAULT_INTELLISENSE = {
  javascript: [
    { label: 'function', type: 'keyword', snippet: 'function name(params) {\n  \n}', doc: 'Declares a JavaScript function' },
    { label: 'const', type: 'keyword', snippet: 'const variable = value;', doc: 'Declares a block-scoped constant' },
    { label: 'let', type: 'keyword', snippet: 'let variable = value;', doc: 'Declares a reassignable variable' },
    { label: 'async', type: 'keyword', snippet: 'async function name() {\n  \n}', doc: 'Declares an async function' },
    { label: 'console.log', type: 'snippet', snippet: 'console.log();', doc: 'Prints output to terminal' }
  ],
  python: [
    { label: 'def', type: 'keyword', snippet: 'def function_name(param1, param2):\n    return', doc: 'Defines a Python function' },
    { label: 'class', type: 'keyword', snippet: 'class ClassName:\n    def __init__(self):\n        pass', doc: 'Defines an OOP class' },
    { label: 'print', type: 'snippet', snippet: 'print()', doc: 'Outputs text to console' },
    { label: 'import', type: 'keyword', snippet: 'import numpy as np', doc: 'Imports a module' }
  ],
  java: [
    { label: 'public class Main', type: 'snippet', snippet: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java!");\n    }\n}', doc: 'Standard Java class' },
    { label: 'System.out.println', type: 'snippet', snippet: 'System.out.println();', doc: 'Prints text line' }
  ],
  sql: [
    { label: 'SELECT ... FROM', type: 'snippet', snippet: 'SELECT * FROM table_name WHERE condition;', doc: 'Retrieves matching rows' },
    { label: 'INSERT INTO', type: 'snippet', snippet: 'INSERT INTO table_name VALUES ();', doc: 'Inserts row' }
  ],
  cpp: [
    { label: '#include <iostream>', type: 'snippet', snippet: '#include <iostream>\n\nint main() {\n    std::cout << "Hello C++!" << std::endl;\n    return 0;\n}', doc: 'C++ template' }
  ]
};

export function VSCodeEditor({
  code,
  onChange,
  language = 'javascript',
  onRun = null,
  isExecuting = false,
  height = '360px',
  title = null
}) {
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [copied, setCopied] = useState(false);

  const textareaRef = useRef(null);
  const lineCount = (code || '').split('\n').length;

  const activeDict = DEFAULT_INTELLISENSE[language] || DEFAULT_INTELLISENSE.javascript;

  const handleKeyUp = (e) => {
    updateCursorPos();
    checkAutoComplete(e);
  };

  const handleClick = () => {
    updateCursorPos();
    setShowSuggestions(false);
  };

  const updateCursorPos = () => {
    const el = textareaRef.current;
    if (!el) return;
    const textBefore = el.value.substring(0, el.selectionStart);
    const lines = textBefore.split('\n');
    const line = lines.length;
    const col = lines[lines.length - 1].length + 1;
    setCursorPos({ line, col });
  };

  const checkAutoComplete = (e) => {
    if (['ArrowUp', 'ArrowDown', 'Enter', 'Tab', 'Escape'].includes(e.key)) return;

    const el = textareaRef.current;
    if (!el) return;

    const textBefore = el.value.substring(0, el.selectionStart);
    const match = textBefore.match(/([a-zA-Z0-9_.:]+)$/);

    if (match && match[1].length >= 1) {
      const typedWord = match[1].toLowerCase();
      const matched = activeDict.filter(item => 
        item.label.toLowerCase().includes(typedWord)
      );

      if (matched.length > 0) {
        setSuggestions(matched.slice(0, 5));
        setSuggestionIndex(0);
        setShowSuggestions(true);
        return;
      }
    }

    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    const el = textareaRef.current;
    if (!el) return;

    // IntelliSense Navigation
    if (showSuggestions && suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSuggestionIndex((prev) => (prev + 1) % suggestions.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSuggestionIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
        return;
      }
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        insertSuggestion(suggestions[suggestionIndex]);
        return;
      }
      if (e.key === 'Escape') {
        setShowSuggestions(false);
        return;
      }
    }

    // Tab key 2 spaces indentation
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      onChange(newCode);
      setTimeout(() => {
        el.selectionStart = el.selectionEnd = start + 2;
        updateCursorPos();
      }, 0);
      return;
    }

    // Auto-close brackets & quotes
    const pairs = { '(': ')', '{': '}', '[': ']', '"': '"', "'": "'", '`': '`' };
    if (pairs[e.key]) {
      const start = el.selectionStart;
      const end = el.selectionEnd;
      if (start !== end) {
        e.preventDefault();
        const selected = code.substring(start, end);
        const wrapped = e.key + selected + pairs[e.key];
        const newCode = code.substring(0, start) + wrapped + code.substring(end);
        onChange(newCode);
        setTimeout(() => {
          el.selectionStart = start + 1;
          el.selectionEnd = end + 1;
        }, 0);
        return;
      }
    }
  };

  const insertSuggestion = (item) => {
    const el = textareaRef.current;
    if (!el) return;

    const start = el.selectionStart;
    const textBefore = code.substring(0, start);
    const textAfter = code.substring(start);
    
    const match = textBefore.match(/([a-zA-Z0-9_.:]+)$/);
    const wordLength = match ? match[1].length : 0;

    const prefix = textBefore.substring(0, textBefore.length - wordLength);
    const snippetToInsert = item.snippet || item.label;
    const newCode = prefix + snippetToInsert + textAfter;

    onChange(newCode);
    setShowSuggestions(false);

    setTimeout(() => {
      el.focus();
      const newPos = prefix.length + snippetToInsert.length;
      el.selectionStart = el.selectionEnd = newPos;
      updateCursorPos();
    }, 0);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormatCode = () => {
    try {
      const lines = code.split('\n');
      const cleaned = lines.map(l => l.trimEnd()).join('\n');
      onChange(cleaned);
    } catch {
      // Ignore
    }
  };

  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-sm)',
      position: 'relative'
    }}>
      {/* Light VS Code Title Bar */}
      <div style={{
        background: '#F8FAFC',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
          
          <span style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginLeft: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <FileCode size={13} color="var(--brand-primary)" /> {title || `main.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language}`}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={handleFormatCode}
            className="btn btn-ghost btn-sm"
            style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', color: 'var(--text-secondary)' }}
            title="Format code"
          >
            Format
          </button>

          <button
            onClick={handleCopyCode}
            className="btn btn-ghost btn-sm"
            style={{ padding: '0.25rem 0.5rem', color: 'var(--text-secondary)' }}
            title="Copy Code"
          >
            {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
          </button>

          {onRun && (
            <button
              onClick={onRun}
              disabled={isExecuting}
              className="btn btn-emerald btn-sm"
              style={{ padding: '0.35rem 0.85rem', fontSize: '0.75rem', gap: '4px', fontWeight: 700 }}
            >
              <Play size={13} fill="#FFFFFF" />
              <span>{isExecuting ? 'Running...' : 'Run'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Editor Body: Line Numbers Gutter + Light Textarea */}
      <div style={{
        position: 'relative',
        display: 'flex',
        height: height,
        background: '#FFFFFF',
        overflow: 'hidden'
      }}>
        {/* Line Numbers Gutter */}
        <div style={{
          width: '44px',
          background: '#F8FAFC',
          borderRight: '1px solid var(--border-subtle)',
          padding: '1rem 0',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.84rem',
          lineHeight: '1.6',
          color: 'var(--text-muted)',
          textAlign: 'right',
          userSelect: 'none',
          overflowY: 'hidden'
        }}>
          {Array.from({ length: Math.max(12, lineCount) }, (_, i) => (
            <div
              key={i}
              style={{
                paddingRight: '10px',
                color: cursorPos.line === i + 1 ? 'var(--brand-primary)' : '#94A3B8',
                fontWeight: cursorPos.line === i + 1 ? 700 : 400
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Textarea Input */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => { onChange(e.target.value); checkAutoComplete(e); }}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onClick={handleClick}
          spellCheck="false"
          style={{
            flex: 1,
            height: '100%',
            background: '#FFFFFF',
            color: '#0F172A',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            padding: '1rem',
            border: 'none',
            outline: 'none',
            resize: 'none',
            whiteSpace: 'pre',
            overflowY: 'auto',
            overflowX: 'auto',
            tabSize: 2
          }}
        />

        {/* Clean Light IntelliSense Autocomplete Floating Popup */}
        {showSuggestions && suggestions.length > 0 && (
          <div style={{
            position: 'absolute',
            left: '60px',
            top: `${Math.min(260, Math.max(40, (cursorPos.line - 1) * 22 + 10))}px`,
            background: '#FFFFFF',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 50,
            width: '300px',
            overflow: 'hidden',
            animation: 'fadeIn 0.1s ease'
          }}>
            <div style={{ background: '#F1F5F9', padding: '4px 8px', fontSize: '0.7rem', color: 'var(--brand-primary)', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
              <span>INTELLISENSE</span>
              <span>Tab / ↵ to insert</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {suggestions.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => insertSuggestion(item)}
                  style={{
                    padding: '0.45rem 0.75rem',
                    background: suggestionIndex === idx ? 'var(--brand-primary-subtle)' : 'transparent',
                    borderLeft: `3px solid ${suggestionIndex === idx ? 'var(--brand-primary)' : 'transparent'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {item.label}
                    </span>
                    <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>
                      {item.type}
                    </span>
                  </div>
                  {item.doc && (
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.doc}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Light Status Bar */}
      <div style={{
        background: '#F8FAFC',
        borderTop: '1px solid var(--border-subtle)',
        padding: '0.3rem 0.85rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span>Ln {cursorPos.line}, Col {cursorPos.col}</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>
            {language.toUpperCase()}
          </span>
          <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>Prettier ✓</span>
        </div>
      </div>
    </div>
  );
}
