// Community Forum, Project Showcases, Polls, Mentorship & Study Groups Database

export const COMMUNITY_SPACES = [
  { id: 'all', name: 'All Spaces', description: 'Everything across the EduMind.AI ecosystem' },
  { id: 'python', name: 'Python & AI Engineering', description: 'PyTorch, FastAPI, data engineering & machine learning' },
  { id: 'web-dev', name: 'Web & Full-Stack', description: 'React, Next.js, Node.js, and modern UI engineering' },
  { id: 'dsa', name: 'Algorithms & Systems', description: 'Data structures, Big-O, low-latency code, and Rust' },
  { id: 'showcase', name: 'Project Showcase', description: 'Show what you built after completing courses' },
  { id: 'study-lounge', name: 'Study Jams & Accountability', description: 'Form study cohorts, share daily wins, and keep streaks' }
];

export const INITIAL_POSTS = [
  {
    id: 'post-101',
    spaceId: 'showcase',
    category: 'showcase', // question | showcase | discussion | poll
    title: 'Showcase: Built a Real-Time Distributed Task Queue in Python & Redis',
    content: `After completing Module 2 of the **Python Masterclass**, I wanted to apply object-oriented design and async workers to solve task starvation in distributed queues.\n\nKey features:\n- Fault-tolerant exponential backoff retries\n- Priority queueing using binary heaps\n- Live metrics dashboard with WebSocket telemetry\n\nWould love feedback on my memory usage and lock-free queue architecture!`,
    author: {
      username: 'dev_alex',
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      reputation: 840,
      badges: ['Verified Python Master', 'Top Contributor']
    },
    createdAt: '2 hours ago',
    upvotes: 42,
    downvotes: 1,
    userVote: null,
    projectMeta: {
      liveDemo: 'https://demo.edumind.example/task-queue',
      github: 'https://github.com/alexrivera/distributed-task-queue',
      previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80'
    },
    comments: [
      {
        id: 'c-1',
        author: {
          username: 'dr_sarah_chen',
          name: 'Dr. Sarah Chen',
          role: 'Instructor',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
          reputation: 9999,
          badges: ['EduMind Author', 'AI Lead']
        },
        content: `Outstanding implementation, Alex! Your handling of async worker backpressure is clean and idiomatic. Consider benchmarking throughput under 10k concurrent tasks.`,
        createdAt: '1 hour ago',
        upvotes: 18,
        isAcceptedAnswer: false
      }
    ]
  },
  {
    id: 'post-102',
    spaceId: 'python',
    category: 'question',
    title: 'Why does Python list.sort() outperform custom quicksort on partially ordered data?',
    content: `I benchmarked Python's built-in \`list.sort()\` against a classic Quicksort implementation on an array that is 80% sorted. The built-in sort was almost 10x faster. What internal algorithm is CPython using here?`,
    author: {
      username: 'code_newbie_99',
      name: 'Jordan Lee',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
      reputation: 120,
      badges: ['Learner']
    },
    createdAt: '5 hours ago',
    upvotes: 29,
    downvotes: 0,
    userVote: null,
    comments: [
      {
        id: 'c-2',
        author: {
          username: 'priya_dsa',
          name: 'Priya Sharma',
          role: 'Staff Engineer',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
          reputation: 4350,
          badges: ['Algorithm Specialist', 'Mentor']
        },
        content: `Python uses **Powersort / Timsort**, which is a hybrid of Merge Sort and Insertion Sort designed explicitly to exploit existing order ("natural runs") in real-world data.\n\nOn partially sorted data, Timsort identifies existing ascending runs in $O(n)$ linear time, avoiding the recursive splitting overhead of standard Quicksort!`,
        createdAt: '4 hours ago',
        upvotes: 34,
        isAcceptedAnswer: true
      }
    ]
  },
  {
    id: 'post-103',
    spaceId: 'study-lounge',
    category: 'poll',
    title: 'Community Poll: Which deep-dive masterclass should EduMind.AI produce next?',
    content: `Vote for the technology stack you'd love to see with our reference-depth curriculum and live interactive compilers:`,
    author: {
      username: 'edumind_team',
      name: 'EduMind Curriculum Board',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80',
      reputation: 5000,
      badges: ['Official Team']
    },
    createdAt: '1 day ago',
    upvotes: 68,
    downvotes: 2,
    userVote: null,
    pollData: {
      totalVotes: 342,
      userVotedOption: null,
      options: [
        { id: 'opt-1', label: 'Rust for High-Frequency Systems & WebAssembly', votes: 148 },
        { id: 'opt-2', label: 'Distributed Systems with Go & Kubernetes Internals', votes: 112 },
        { id: 'opt-3', label: 'LLM Fine-Tuning & Quantization from Scratch', votes: 82 }
      ]
    },
    comments: []
  }
];

export const STUDY_GROUPS = [
  {
    id: 'sg-py-sprint',
    name: 'Python 30-Day Mastery Sprint',
    courseId: 'python-mastery',
    memberCount: 84,
    description: 'Daily code problem discussions, review swaps, and weekly Sunday study sessions.',
    nextSession: 'Sunday 15:00 UTC',
    isMember: true
  },
  {
    id: 'sg-dsa-interview',
    name: 'Top Tech DSA & Graph Practice Cohort',
    courseId: 'dsa-mastery',
    memberCount: 120,
    description: 'Grinding LeetCode Hard and tree/graph patterns with mock pair-programming.',
    nextSession: 'Wednesday 18:00 UTC',
    isMember: false
  }
];

export const MENTORS_DIRECTORY = [
  {
    id: 'men-1',
    name: 'Dr. Sarah Chen',
    title: 'Lead AI Scientist & PyTorch Contributor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    specialties: ['Machine Learning', 'Python Architecture', 'Async Systems'],
    availableSlots: 3,
    rating: 5.0,
    reviews: 64
  },
  {
    id: 'men-2',
    name: 'Marcus Vance',
    title: 'Principal Frontend Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    specialties: ['React 19', 'Web Performance', 'Cloud Architecture'],
    availableSlots: 2,
    rating: 4.9,
    reviews: 52
  }
];

export const LEADERBOARD_USERS = [
  { rank: 1, name: 'Elena Rostova', username: 'elena_r', reputation: 4820, certs: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' },
  { rank: 2, name: 'Marcus Vance', username: 'marcus_v', reputation: 4350, certs: 4, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
  { rank: 3, name: 'David Kim', username: 'dkim_dev', reputation: 3910, certs: 4, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' },
  { rank: 4, name: 'Samantha Taylor', username: 'sam_t', reputation: 3200, certs: 3, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80' }
];
