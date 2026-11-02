// Visual Career Roadmaps for EduMind.AI
// Step-by-step career path progressions for software engineers

export const CAREER_ROADMAPS = [
  {
    id: 'python-dev',
    title: 'Python Developer Career Roadmap',
    category: 'AI & Backend',
    description: 'From syntax fundamentals to building asynchronous microservices with FastAPI and machine learning pipelines.',
    icon: '🐍',
    difficulty: 'Beginner to Advanced',
    estimatedMonths: 6,
    steps: [
      { step: 1, title: 'Python Core Syntax', desc: 'Variables, Data Types, Control Flow, Functions, and Scope', courseId: 'python-lang' },
      { step: 2, title: 'Object-Oriented Programming (OOP)', desc: 'Classes, Dunder Methods, Inheritance, Polymorphism', courseId: 'python-mastery' },
      { step: 3, title: 'Data Structures & Algorithms', desc: 'Lists, Dictionaries, Big-O, Sorting, Binary Search', courseId: 'dsa-mastery' },
      { step: 4, title: 'Version Control & Git', desc: 'Git Branching, Pull Requests, Merge Conflicts, GitHub Actions', courseId: 'programming-fundamentals' },
      { step: 5, title: 'Relational Databases & SQL', desc: 'PostgreSQL, SQLAlchemy ORM, Indexing, Transactions', courseId: 'sql-lang' },
      { step: 6, title: 'Web APIs & Asynchronous Python', desc: 'FastAPI, Pydantic, AsyncIO, JWT Authentication', courseId: 'python-mastery' },
      { step: 7, title: 'Data Science & AI Foundations', desc: 'NumPy, Pandas, Vectorized Math, Scikit-Learn', courseId: 'python-mastery' },
      { step: 8, title: 'Docker, CI/CD & Cloud Deployment', desc: 'Containerization, Linux Server Config, NGINX', courseId: 'bash-lang' }
    ]
  },
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Developer Roadmap',
    category: 'Web Development',
    description: 'Master semantic HTML5, modern CSS layouts, JavaScript ES2024, React 19, Node.js backends, and cloud databases.',
    icon: '🌐',
    difficulty: 'Beginner to Advanced',
    estimatedMonths: 8,
    steps: [
      { step: 1, title: 'HTML5 & Semantic Markup', desc: 'Document Structure, Forms, Accessibility, SEO', courseId: 'html-lang' },
      { step: 2, title: 'Modern CSS3 & Responsive Design', desc: 'Flexbox, Grid, Custom Properties, Media Queries', courseId: 'css-lang' },
      { step: 3, title: 'JavaScript (ES2024)', desc: 'DOM Manipulation, Promises, Event Loop, Async/Await', courseId: 'javascript-lang' },
      { step: 4, title: 'TypeScript for Safety', desc: 'Static Typing, Interfaces, Generics, Utility Types', courseId: 'typescript-lang' },
      { step: 5, title: 'React 19 & State Management', desc: 'Component Architecture, Hooks, Context, Routing', courseId: 'fullstack-react' },
      { step: 6, title: 'Node.js & Express / Fastify', desc: 'REST APIs, Middleware, File Uploads, WebSockets', courseId: 'javascript-lang' },
      { step: 7, title: 'Databases (PostgreSQL & Redis)', desc: 'Schema Design, Foreign Keys, Caching, Joins', courseId: 'sql-lang' },
      { step: 8, title: 'Full-Stack Production Project', desc: 'Authentication, Payment Gateway, Vercel & AWS Deployment', courseId: 'fullstack-react' }
    ]
  },
  {
    id: 'java-enterprise-dev',
    title: 'Java Enterprise & Cloud Architect Roadmap',
    category: 'Enterprise Engineering',
    description: 'Design high-throughput distributed microservices with Java 21, Spring Boot 3, Docker, and Apache Kafka.',
    icon: '☕',
    difficulty: 'Intermediate to Advanced',
    estimatedMonths: 7,
    steps: [
      { step: 1, title: 'Java 21 Fundamentals', desc: 'Core Syntax, JVM Bytecode, Data Types, Control Flow', courseId: 'java-beginners' },
      { step: 2, title: 'OOP Design & Clean Architecture', desc: 'Encapsulation, SOLID Principles, Design Patterns', courseId: 'java-lang' },
      { step: 3, title: 'Collections & Stream API', desc: 'Generics, Lambda Expressions, Declarative Pipelines', courseId: 'java-lang' },
      { step: 4, title: 'Virtual Threads & Concurrency', desc: 'Project Loom, Thread Pools, ReentrantLock, Non-blocking I/O', courseId: 'java-enterprise' },
      { step: 5, title: 'Relational Databases & Hibernate', desc: 'PostgreSQL, JDBC, JPA, Query Optimization', courseId: 'sql-lang' },
      { step: 6, title: 'Spring Boot 3 Microservices', desc: 'Dependency Injection, Spring Security, REST Controllers', courseId: 'java-enterprise' },
      { step: 7, title: 'Distributed Messaging & Caching', desc: 'Kafka, RabbitMQ, Redis Distributed Caching', courseId: 'java-enterprise' },
      { step: 8, title: 'Kubernetes & JVM Performance Tuning', desc: 'ZGC, G1 Garbage Collection, Prometheus Monitoring', courseId: 'bash-lang' }
    ]
  },
  {
    id: 'cpp-game-systems',
    title: 'C++ Systems & Game Engine Developer',
    category: 'Systems & Game Dev',
    description: 'Build high-performance real-time software, game engines, physics simulations, and low-latency financial systems.',
    icon: '🚀',
    difficulty: 'Intermediate to Advanced',
    estimatedMonths: 9,
    steps: [
      { step: 1, title: 'C Fundamentals & Memory Models', desc: 'Pointers, Stack vs Heap, malloc/free, Binary I/O', courseId: 'c-lang' },
      { step: 2, title: 'Modern C++20 Core', desc: 'References, Classes, Constructors, RAII, Auto', courseId: 'cpp-lang' },
      { step: 3, title: 'Smart Pointers & Memory Safety', desc: 'unique_ptr, shared_ptr, weak_ptr, Move Semantics', courseId: 'cpp-lang' },
      { step: 4, title: 'Standard Template Library (STL)', desc: 'Vectors, Maps, Sets, Algorithms, Iterators', courseId: 'cpp-lang' },
      { step: 5, title: 'Data Structures & Algorithmic Speed', desc: 'Trees, Graphs, Spatial Partitioning (BVH, Octree)', courseId: 'dsa-mastery' },
      { step: 6, title: 'Multithreading & Lock-Free Queues', desc: 'std::thread, std::atomic, Mutexes, Race Conditions', courseId: 'cpp-lang' },
      { step: 7, title: '3D Math & Graphics API (Vulkan / OpenGL)', desc: 'Linear Algebra, Shaders, Vertex Buffers, Matrices', courseId: 'matlab-lang' },
      { step: 8, title: 'Custom Game Engine Architecture', desc: 'Entity-Component-System (ECS), Physics & Audio Subsystems', courseId: 'cpp-lang' }
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Developer (iOS & Android)',
    category: 'Mobile & Multiplatform',
    description: 'Build native iOS and Android apps with Kotlin, Swift, and cross-platform Dart/Flutter.',
    icon: '📱',
    difficulty: 'Beginner to Intermediate',
    estimatedMonths: 6,
    steps: [
      { step: 1, title: 'Programming Fundamentals', desc: 'Variables, Control Flow, Functions, OOP', courseId: 'programming-fundamentals' },
      { step: 2, title: 'Kotlin for Android', desc: 'Null Safety, Coroutines, Jetpack Compose UI', courseId: 'kotlin-lang' },
      { step: 3, title: 'Swift for iOS & macOS', desc: 'Optionals, Protocols, SwiftUI Declarative Views', courseId: 'swift-lang' },
      { step: 4, title: 'Cross-Platform Flutter & Dart', desc: 'Single Codebase for iOS & Android with Dart 3', courseId: 'dart-lang' },
      { step: 5, title: 'REST API & Local Caching', desc: 'Retrofit / URLSession, SQLite / Room, Offline First', courseId: 'sql-lang' },
      { step: 6, title: 'App Store & Play Store Deployment', desc: 'Code Signing, In-App Purchases, Push Notifications', courseId: 'mobile-dev' }
    ]
  },
  {
    id: 'devops-cloud-engineer',
    title: 'DevOps & Cloud Systems Engineer',
    category: 'DevOps & Cloud',
    description: 'Automate deployments, orchestrate containers with Kubernetes, configure Linux servers, and manage CI/CD.',
    icon: '☁️',
    difficulty: 'Intermediate to Advanced',
    estimatedMonths: 7,
    steps: [
      { step: 1, title: 'Linux Command Line & Bash Scripting', desc: 'Pipes, Shell Automation, Process Management, Cron', courseId: 'bash-lang' },
      { step: 2, title: 'Python for Automation & Tooling', desc: 'Scripting, OS Interaction, Network Requests, CLI Tools', courseId: 'python-lang' },
      { step: 3, title: 'Go for Systems & Cloud Tools', desc: 'Goroutines, High-Speed CLI Utilities, Docker Interfacing', courseId: 'golang-lang' },
      { step: 4, title: 'Relational Database Management', desc: 'PostgreSQL Backups, Replication, Connection Pooling', courseId: 'sql-lang' },
      { step: 5, title: 'Docker Containerization', desc: 'Multi-stage Dockerfiles, Networking, Volume Mounts', courseId: 'bash-lang' },
      { step: 6, title: 'Kubernetes Cluster Orchestration', desc: 'Pods, Deployments, Ingress, Helm Charts, Secrets', courseId: 'golang-lang' },
      { step: 7, title: 'CI/CD Pipelines & Monitoring', desc: 'GitHub Actions, Prometheus, Grafana, Distributed Tracing', courseId: 'bash-lang' }
    ]
  }
];
