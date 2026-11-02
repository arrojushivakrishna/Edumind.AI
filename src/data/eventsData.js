// Live Events, Workshops, and Hackathons Database for EduMind.AI

export const EVENTS_DATA = [
  {
    id: 'evt-ai-agentic-2026',
    title: 'Building Autonomous AI Agents with LangGraph & Python',
    type: 'workshop',
    category: 'AI & Data Science',
    date: '2026-08-20',
    time: '18:00 UTC (2 Hours)',
    isLive: false,
    capacity: 250,
    registeredCount: 242,
    waitlistCount: 14,
    price: 0, // Free
    isOnline: true,
    location: 'EduMind Live Interactive Auditorium (Online)',
    relatedCourseId: 'python-mastery',
    featured: true,
    trending: true,
    host: {
      name: 'Dr. Sarah Chen',
      role: 'Lead AI Scientist & EduMind Author',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'Pioneered memory architectures for multi-agent LLM systems.'
    },
    description: 'Join us for a hands-on live code session exploring autonomous agent graphs, cyclical memory persistence, and tool invocation with Python 3.12.',
    agenda: [
      '18:00 - 18:20: State Graph Primitives & Directed Acyclic Execution',
      '18:20 - 19:10: Live Coding: Deploying an Autonomous Research Agent',
      '19:10 - 19:40: Error Recovery, Sandboxing & Cost Guardrails',
      '19:40 - 20:00: Live Interactive Audience Q&A'
    ],
    tiers: [
      { name: 'Standard Pass', price: 0, perks: ['Live stream access', 'Interactive Q&A', 'Session recording & slides'] },
      { name: 'VIP Mentorship Pass', price: 49, perks: ['All Standard perks', '1:1 30-min Code Review', 'Priority Question Queue'] }
    ]
  },
  {
    id: 'evt-react19-perf',
    title: 'Zero-Runtime React 19 & Next.js Performance Masterclass',
    type: 'webinar',
    category: 'Web Development',
    date: '2026-08-24',
    time: '17:00 UTC (90 Mins)',
    isLive: false,
    capacity: 300,
    registeredCount: 180,
    waitlistCount: 0,
    price: 0,
    isOnline: true,
    location: 'EduMind Interactive Stage',
    relatedCourseId: 'fullstack-react',
    featured: false,
    trending: true,
    host: {
      name: 'Marcus Vance',
      role: 'Principal Frontend Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Specialist in compiler optimizations and core web vitals.'
    },
    description: 'Deep dive into the React 19 compiler internals, optimistic UI mutations, and server actions architecture.',
    agenda: [
      '17:00 - 17:30: React Compiler bytecode analysis',
      '17:30 - 18:00: Optimizing sub-millisecond INP scores',
      '18:00 - 18:30: Live refactoring demo & Audience Q&A'
    ],
    tiers: [
      { name: 'General Admission', price: 0, perks: ['Full HD Stream', 'Slide deck & sample repo', 'Attendance Badge'] }
    ]
  },
  {
    id: 'evt-hackathon-cloud-2026',
    title: 'EduMind 48-Hour Global Cloud & AI Hackathon',
    type: 'hackathon',
    category: 'Software Engineering',
    date: '2026-09-05',
    time: '48 Hours Continuous',
    isLive: false,
    capacity: 1000,
    registeredCount: 840,
    waitlistCount: 0,
    price: 0,
    isOnline: true,
    location: 'EduMind Virtual Hackathon Arena',
    relatedCourseId: 'dsa-mastery',
    featured: true,
    trending: false,
    host: {
      name: 'Priya Sharma & Panel',
      role: 'Staff Engineers & Venture Partners',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      bio: 'Judges from top tech accelerators and open-source foundations.'
    },
    description: 'Build production-ready open-source tools or intelligent agent applications. $25,000 prize pool, cloud compute credits, and mentorship from industry leaders.',
    agenda: [
      'Day 1 - 09:00: Opening Keynote & Team Formation',
      'Day 1 - 14:00: Mentor Checkpoint 1',
      'Day 2 - 12:00: Prototype Submission',
      'Day 2 - 18:00: Final Demo Day & Winner Ceremony'
    ],
    tiers: [
      { name: 'Hacker Registration', price: 0, perks: ['Compute Credits', 'Mentor Sessions', 'Certificate of Participation'] }
    ]
  }
];
