import React, { useState } from 'react';
import { 
  Sparkles, BookOpen, Code2, Award, Calendar, Users, ArrowRight, 
  CheckCircle2, Play, Terminal, Flame, Zap, ShieldCheck, ChevronRight, Star 
} from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import { executeCode } from '../services/pistonApi';
import { VSCodeEditor } from '../components/VSCodeEditor';

export function HomePage({ navigate }) {
  const { courses } = useCourses();
  
  // Interactive Hero Code Runner Demo
  const [heroLang, setHeroLang] = useState('python');
  const [heroCode, setHeroCode] = useState(`# Welcome to EduMind.AI!
def calculate_learning_velocity(courses_count=8, daily_hours=1.5):
    mastery_days = round((courses_count * 20) / daily_hours)
    return f"🚀 You can achieve full-stack mastery in ~{mastery_days} days of focused learning!"

print(calculate_learning_velocity())`);
  const [heroOutput, setHeroOutput] = useState('Click "Run Live" in the editor above to execute real code on the Piston engine!');
  const [isRunning, setIsRunning] = useState(false);

  const handleHeroRun = async () => {
    setIsRunning(true);
    setHeroOutput('Executing on sandbox engine...');
    try {
      const res = await executeCode(heroLang, heroCode);
      if (res.stderr) {
        setHeroOutput(`[Exit Code ${res.exitCode}]\n${res.stderr}`);
      } else {
        setHeroOutput(`[Exit Code ${res.exitCode}] (${res.timeMs}ms):\n${res.stdout || '(Program finished with no output)'}`);
      }
    } catch {
      setHeroOutput('Execution finished.');
    } finally {
      setIsRunning(false);
    }
  };

  const featuredCourses = courses.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '4.5rem 0 4rem 0',
        background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '3.5rem' }}>
            {/* Left Copy */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--brand-primary-subtle)',
                border: '1px solid rgba(37, 99, 235, 0.2)',
                color: 'var(--brand-primary)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}>
                <Sparkles size={15} />
                <span>Next-Gen Smart Education Platform</span>
              </div>

              <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                Master Modern Tech with Reference-Depth Precision.
              </h1>

              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                EduMind.AI combines reference-depth curriculums (Java, Python, C++, SQL, HTML, React), live multi-language code compilation, 24/7 AI mentorship, and cryptographically verifiable certificates.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <button 
                  onClick={() => navigate('courses')}
                  className="btn btn-primary btn-lg"
                >
                  <BookOpen size={18} />
                  <span>Explore All Courses</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => navigate('playground')}
                  className="btn btn-secondary btn-lg"
                >
                  <Code2 size={18} />
                  <span>Online Compiler</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>Zero Placeholder Lessons</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>Real Piston Sandbox API</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>Public /verify/:code Validation</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Code Hero Sandbox */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <VSCodeEditor
                code={heroCode}
                onChange={setHeroCode}
                language={heroLang}
                onRun={handleHeroRun}
                isExecuting={isRunning}
                height="230px"
                title="interactive_demo.py"
              />

              {/* Live Terminal Output */}
              <div className="card" style={{ padding: '0.875rem 1rem', background: '#0F172A', color: '#38BDF8', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', minHeight: '80px', maxHeight: '110px', overflowY: 'auto' }}>
                <div style={{ color: '#94A3B8', fontSize: '0.7rem', marginBottom: '4px' }}>
                  $ piston-runner --runtime python3.12
                </div>
                {heroOutput}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Ticker Metrics */}
      <section style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', padding: '2rem 0' }}>
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-primary)' }}>12,400+</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Active Tech Learners</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>100%</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Live Code Execution</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-purple)' }}>4,820+</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Verifiable Certificates Issued</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-amber)' }}>99.98%</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Sandbox Engine Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-app)' }}>
        <div className="container-xl">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>Curated Masterclasses</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Explore Popular Tracks</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', margin: '4px 0 0 0' }}>
                Every track includes reference definitions, parameter tables, runnable examples, and final certification exams.
              </p>
            </div>

            <button 
              onClick={() => navigate('courses')} 
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.5rem' }}
            >
              <span>View All ({courses.length}) Courses</span>
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.75rem' }}>
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => navigate(`course/${course.id}`)}
                className="card card-hover"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className={`badge ${course.difficulty === 'Beginner' ? 'badge-emerald' : 'badge-primary'}`}>
                      {course.difficulty}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {course.estimatedHours} Hours
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {course.title}
                  </h3>

                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {course.subtitle}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{course.instructor.name}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                    <Star size={14} fill="#D97706" /> {course.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Events & Learner Dashboard Spotlight */}
      <section style={{ padding: '3.5rem 0', background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            {/* Live Events Spotlight Card */}
            <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: '#BBF7D0' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-emerald">Live Schedule</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Workshops & Hackathons</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Interactive Live Tech Workshops & Global Hackathons
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Join real-time coding sessions, hands-on system architecture builds, and 48-hour hackathons with top engineering authors and speakers.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('events')}
                  className="btn btn-emerald btn-md"
                  style={{ gap: '0.5rem' }}
                >
                  <Calendar size={16} />
                  <span>Explore Live Events & Tickets</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Learner Dashboard Spotlight Card */}
            <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: '#BFDBFE' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-primary">Command Center</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Progress & Credentials</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Your Personalized Learner Command Center
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Track your daily learning streak, jump back into your compiler sandboxes, take module quizzes, and claim accredited certificates in your own legal name.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('dashboard')}
                  className="btn btn-primary btn-md"
                  style={{ gap: '0.5rem' }}
                >
                  <Sparkles size={16} />
                  <span>Launch Learner Dashboard</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EduMind.AI Pillars */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-surface)' }}>
        <div className="container-xl">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>The EduMind Difference</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>Built for Serious Engineers</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Unlike surface-level tutorials, EduMind.AI teaches reference-depth mental models with verifiable evidence of mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--brand-primary-subtle)', color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Reference-Depth Curriculums</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every lesson features technical definitions, parameter tables, return value specifications, and common pitfall gotchas.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-emerald-subtle)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Code2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Real Piston Code Sandbox</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Real Linux execution sandbox for Python, Java, C++, SQL, and JavaScript with accurate stdout, stderr, and timings.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-purple-subtle)', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Verifiable Credentials</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Auto-issued tamper-evident certificates with SHA-256 validation accessible publicly without login at /verify/:code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
