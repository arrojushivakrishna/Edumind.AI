import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export function PricingPage({ navigate }) {
  const tiers = [
    {
      name: 'Free Community Learner',
      price: '$0',
      period: 'forever',
      description: 'Ideal for self-paced independent learners building solid tech fundamentals.',
      features: [
        'Full access to all reference-depth lessons',
        'Unlimited code execution via Piston API',
        'Standard module knowledge quizzes',
        'Community spaces & project showcases',
        'Live event attendance (free tier passes)'
      ],
      cta: 'Current Plan',
      isPrimary: false
    },
    {
      name: 'EduMind Pro Scholar',
      price: '$19',
      period: 'per month',
      description: 'For engineers seeking verifiable career credentials and 24/7 AI mentor power.',
      features: [
        'Everything in Free Community Learner',
        'Accredited Final Certification Exams',
        'Cryptographic Tamper-Evident Certificates',
        'Unlimited EduMind AI Copilot assistance',
        'Priority Question Queue in live events',
        'Direct 1:1 mentorship connection matching'
      ],
      cta: 'Upgrade to Pro',
      isPrimary: true
    },
    {
      name: 'Enterprise / Team Cohorts',
      price: '$49',
      period: 'per seat / month',
      description: 'Tailored for engineering teams, university bootcamps, and training cohorts.',
      features: [
        'Everything in Pro Scholar',
        'Custom private course authoring CMS',
        'Team progress & drop-off analytics',
        'Dedicated hackathon hosting arena',
        'Custom verified certificate templates',
        'Dedicated SLA & support engineer'
      ],
      cta: 'Contact Enterprise',
      isPrimary: false
    }
  ];

  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-xl">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>Transparent Investment</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Predictable Pricing for Elite Engineers
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Free reference lessons forever. Upgrade when you need authenticated credentials and high-volume AI mentorship.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '2rem', alignItems: 'stretch' }}>
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: tier.isPrimary ? '2px solid var(--brand-primary-light)' : '1px solid var(--border-subtle)',
                boxShadow: tier.isPrimary ? 'var(--shadow-glow)' : 'none',
                position: 'relative'
              }}
            >
              {tier.isPrimary && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--brand-primary)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  letterSpacing: '0.05em'
                }}>
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{tier.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>{tier.price}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/{tier.period}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '40px' }}>
                  {tier.description}
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    What's included:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                        <Check size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => alert(`Selected plan: ${tier.name}`)}
                className={`btn ${tier.isPrimary ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', padding: '0.75rem' }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
