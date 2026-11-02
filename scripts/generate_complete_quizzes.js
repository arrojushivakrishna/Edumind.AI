import fs from 'fs';

const QUIZZES = {};

// Helper to add quiz
function addQuiz(id, title, courseId, questions, passingScore = 80) {
  QUIZZES[id] = {
    id,
    title,
    courseId,
    passingScore,
    questions
  };
}

// 1. Fundamentals Quizzes
addQuiz('quiz-fund-mod-1', 'Programming Fundamentals — Module 1 Quiz (Core Mechanics)', 'programming-fundamentals', [
  {
    id: 'q-f1-1',
    type: 'multiple-choice',
    question: 'What is the primary difference between a compiler and an interpreter?',
    options: [
      'Compilers translate whole source code ahead of time; interpreters execute line-by-line in real time',
      'Compilers only run Python; interpreters run C++',
      'Interpreters produce binary executable machine files',
      'There is no difference'
    ],
    correctAnswer: 0,
    explanation: 'Compilers translate entire programs ahead of time into machine binary, while interpreters translate and execute source code line-by-line dynamically.'
  },
  {
    id: 'q-f1-2',
    type: 'multiple-choice',
    question: 'Which type of computer memory is fastest and stores fixed-size local variables in LIFO order?',
    options: ['Stack Memory', 'Heap Memory', 'Hard Disk Drive', 'Virtual Paging'],
    correctAnswer: 0,
    explanation: 'Stack memory is extremely fast, fixed-size LIFO memory allocated for function stack frames and local primitives.'
  },
  {
    id: 'q-f1-3',
    type: 'code-predict',
    question: 'What does this loop asymptotic complexity represent in Big-O notation?',
    codeSnippet: 'for i in range(N):\n    for j in range(N):\n        total += 1',
    options: ['O(N^2) Quadratic', 'O(N) Linear', 'O(1) Constant', 'O(log N)'],
    correctAnswer: 0,
    explanation: 'Two nested loops each running N times result in N * N = N^2 operations, which is O(N^2) Quadratic time.'
  },
  {
    id: 'q-f1-4',
    type: 'multi-select',
    question: 'Which of the following are universal primitive data types? (Select all that apply)',
    options: ['Integer', 'Boolean', 'Float', 'Microservice'],
    correctAnswer: [0, 1, 2],
    explanation: 'Integer, Boolean, and Float are primitive data types. Microservice is a software architecture pattern.'
  }
]);

addQuiz('quiz-fund-mod-2', 'Programming Fundamentals — Module 2 Quiz (Functions & Scope)', 'programming-fundamentals', [
  {
    id: 'q-f2-1',
    type: 'multiple-choice',
    question: 'What is a "Pure Function" in programming?',
    options: [
      'A function that always produces the exact same output for the same input with zero side effects',
      'A function written without any parameters',
      'A function that only compiles in C',
      'A function that mutates global variables'
    ],
    correctAnswer: 0,
    explanation: 'Pure functions depend only on their inputs and cause no observable side effects (like mutating global state or performing external I/O).'
  },
  {
    id: 'q-f2-2',
    type: 'multiple-choice',
    question: 'What happens when a recursive function lacks a base case?',
    options: ['Stack Overflow (Infinite Call Stack exhaustion)', 'It executes in O(1) time', 'Compiler turns it into a for-loop', 'It returns 0'],
    correctAnswer: 0,
    explanation: 'Without a base case, recursion continually pushes frames onto the call stack until memory is exhausted, throwing a Stack Overflow error.'
  },
  {
    id: 'q-f2-3',
    type: 'multiple-choice',
    question: 'What is "Lexical Scope" in modern programming languages?',
    options: [
      'Variables are scoped according to their physical position in the source code nesting structure',
      'Variables are only accessible from remote cloud servers',
      'Variables change scope randomly at runtime',
      'Variables must all be declared globally'
    ],
    correctAnswer: 0,
    explanation: 'Lexical scope means variable access is determined by block nesting location in source code at compile/parse time.'
  }
]);

addQuiz('quiz-fund-mod-3', 'Programming Fundamentals — Module 3 Quiz (Data Structures)', 'programming-fundamentals', [
  {
    id: 'q-f3-1',
    type: 'multiple-choice',
    question: 'What is the average time complexity of looking up a value by key in a Hash Table?',
    options: ['O(1) Constant Time', 'O(N) Linear Time', 'O(N^2) Quadratic', 'O(log N)'],
    correctAnswer: 0,
    explanation: 'Hash tables map keys to bucket indices using a hash function, providing O(1) average lookup time.'
  },
  {
    id: 'q-f3-2',
    type: 'multiple-choice',
    question: 'What is the mandatory prerequisite before executing a Binary Search on an array?',
    options: ['The array must be sorted in order', 'The array must only contain integers', 'The array must be stored on disk', 'The array must have an even length'],
    correctAnswer: 0,
    explanation: 'Binary Search requires a sorted collection so it can discard half the remaining search space on each iteration.'
  },
  {
    id: 'q-f3-3',
    type: 'multiple-choice',
    question: 'Which data structure operates on a First-In-First-Out (FIFO) access policy?',
    options: ['Queue', 'Stack', 'Binary Search Tree', 'Hash Map'],
    correctAnswer: 0,
    explanation: 'A Queue enforces FIFO order: elements inserted first are processed first.'
  }
]);

addQuiz('quiz-fund-mod-4', 'Programming Fundamentals — Module 4 Quiz (OOP & Systems Design)', 'programming-fundamentals', [
  {
    id: 'q-f4-1',
    type: 'multiple-choice',
    question: 'Which OOP pillar restricts direct access to internal state and hides object representation behind methods?',
    options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Concurrency'],
    correctAnswer: 0,
    explanation: 'Encapsulation bundles data and methods while keeping internal state private to prevent unauthorized manipulation.'
  },
  {
    id: 'q-f4-2',
    type: 'multiple-choice',
    question: 'In the DRY software engineering principle, what does DRY stand for?',
    options: ["Don't Repeat Yourself", 'Data Routing Yield', 'Direct Resource Yield', 'Dynamic Run Yield'],
    correctAnswer: 0,
    explanation: "DRY stands for 'Don't Repeat Yourself', emphasizing code reuse and modularity."
  }
]);

addQuiz('exam-fund-final', 'Programming Fundamentals — Final Certification Exam', 'programming-fundamentals', [
  {
    id: 'q-ff-1',
    type: 'multiple-choice',
    question: 'What happens to stack-allocated variables when a function exits?',
    options: ['Their stack frame is popped and memory is immediately reclaimed', 'They remain in RAM forever until reboot', 'They are moved to heap automatically', 'They trigger a compiler error'],
    correctAnswer: 0,
    explanation: 'When a function returns, its stack frame is instantly popped, deallocating all local stack variables in O(1) time.'
  },
  {
    id: 'q-ff-2',
    type: 'multiple-choice',
    question: 'Which sorting algorithm has a guaranteed O(N log N) worst-case time complexity?',
    options: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Insertion Sort'],
    correctAnswer: 0,
    explanation: 'Merge Sort guarantees O(N log N) time in all cases (best, average, worst) by recursively halving and merging lists.'
  },
  {
    id: 'q-ff-3',
    type: 'multiple-choice',
    question: 'What is the primary benefit of Object-Oriented Polymorphism?',
    options: ['Allowing different types to respond to the same interface or method call appropriately', 'Making code run 100x faster', 'Eliminating all memory usage', 'Preventing functions from having parameters'],
    correctAnswer: 0,
    explanation: 'Polymorphism allows code to interact with abstract interfaces without needing to know concrete implementation classes.'
  }
]);

// 2. Language-Specific 3-Module Quizzes & Exams Generator
const languagesData = [
  { id: 'c', name: 'C', courseId: 'c-lang', t1: 'Syntax & Compilation', t2: 'Pointers & Memory', t3: 'Structs & Dynamic Allocation' },
  { id: 'cpp', name: 'C++', courseId: 'cpp-lang', t1: 'Syntax & STL', t2: 'Classes & RAII', t3: 'Smart Pointers & Templates' },
  { id: 'java', name: 'Java', courseId: 'java-lang', t1: 'Java 21 Syntax & JVM', t2: 'OOP & Interfaces', t3: 'Collections & Virtual Threads' },
  { id: 'python', name: 'Python', courseId: 'python-lang', t1: 'Syntax & Control Flow', t2: 'Data Structures & Comprehensions', t3: 'OOP & Asyncio' },
  { id: 'javascript', name: 'JavaScript', courseId: 'javascript-lang', t1: 'ES6+ Syntax & Scope', t2: 'Promises & Async/Await', t3: 'Closures & Prototypes' },
  { id: 'typescript', name: 'TypeScript', courseId: 'typescript-lang', t1: 'Static Types & Interfaces', t2: 'Generics & Unions', t3: 'Utility Types & Mapping' },
  { id: 'csharp', name: 'C#', courseId: 'csharp-lang', t1: 'C# 12 & .NET 8 Basics', t2: 'LINQ & Records', t3: 'Async Tasks & Services' },
  { id: 'golang', name: 'Go', courseId: 'golang-lang', t1: 'Packages & Structs', t2: 'Goroutines & Channels', t3: 'Interfaces & REST APIs' },
  { id: 'rust', name: 'Rust', courseId: 'rust-lang', t1: 'Syntax & Mutability', t2: 'Ownership & Borrowing', t3: 'Traits & Pattern Matching' },
  { id: 'php', name: 'PHP', courseId: 'php-lang', t1: 'PHP 8 Basics & Arrays', t2: 'OOP & Promotion', t3: 'PDO Security & REST APIs' },
  { id: 'kotlin', name: 'Kotlin', courseId: 'kotlin-lang', t1: 'Syntax & Null Safety', t2: 'Data Classes & Lambdas', t3: 'Coroutines & Flow' },
  { id: 'swift', name: 'Swift', courseId: 'swift-lang', t1: 'Swift Basics & Optionals', t2: 'Structs & Protocols', t3: 'SwiftUI & State' },
  { id: 'ruby', name: 'Ruby', courseId: 'ruby-lang', t1: 'Syntax & OOP Classes', t2: 'Blocks & Procs', t3: 'Rails MVC & Metaprogramming' },
  { id: 'dart', name: 'Dart', courseId: 'dart-lang', t1: 'Syntax & Null Safety', t2: 'OOP & Mixins', t3: 'Futures & Flutter State' },
  { id: 'r', name: 'R', courseId: 'r-lang', t1: 'Vectors & Arithmetic', t2: 'Data Frames & dplyr', t3: 'ggplot2 & Statistics' },
  { id: 'sql', name: 'SQL', courseId: 'sql-lang', t1: 'DDL, DML & Aggregations', t2: 'Multi-Table JOINs', t3: 'Window Functions & Indexing' },
  { id: 'html', name: 'HTML', courseId: 'html-lang', t1: 'Document Tree & Elements', t2: 'Semantic Forms & Validation', t3: 'Accessibility & SEO' },
  { id: 'css', name: 'CSS', courseId: 'css-lang', t1: 'Box Model & Specificity', t2: 'Flexbox & CSS Grid', t3: 'Animations & Container Queries' },
  { id: 'bash', name: 'Bash', courseId: 'bash-lang', t1: 'Terminal & Scripting', t2: 'Pipes, grep, sed & awk', t3: 'Functions & Automation' },
  { id: 'matlab', name: 'MATLAB', courseId: 'matlab-lang', t1: 'Matrix Math & Slicing', t2: 'Plotting & Graphics', t3: 'Linear Systems & ODEs' }
];

languagesData.forEach(lang => {
  // Module 1 Quiz
  addQuiz(`quiz-${lang.id}-mod-1`, `${lang.name} — Module 1 Quiz (${lang.t1})`, lang.courseId, [
    {
      id: `q-${lang.id}-1-1`,
      type: 'multiple-choice',
      question: `What is the core structural design principle behind ${lang.name}'s syntax in Module 1?`,
      options: [
        `Explicit type safety and deterministic execution structured around ${lang.t1}`,
        'Unstructured global memory access without rules',
        'Executing exclusively on client web browsers',
        'Automatic cloud server deployment without local compilation'
      ],
      correctAnswer: 0,
      explanation: `${lang.name} Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness.`
    },
    {
      id: `q-${lang.id}-1-2`,
      type: 'multiple-choice',
      question: `How are standard variables and statements structured in ${lang.name}?`,
      options: [
        'Following strict grammar, lexical scope boundaries, and idiomatic naming conventions',
        'Variables cannot be created in Module 1',
        'Only global mutable values are allowed',
        'Code must be written on a single line'
      ],
      correctAnswer: 0,
      explanation: `Proper scoping and clean syntax declaration are essential to writing valid ${lang.name} code.`
    },
    {
      id: `q-${lang.id}-1-3`,
      type: 'code-predict',
      question: `Predict the outcome of running valid ${lang.name} code following Module 1 conventions:`,
      codeSnippet: `// ${lang.name} Execution Test\n// Evaluates core basic constructs and declarations`,
      options: [
        'Executes cleanly and returns expected output or exit status 0',
        'Throws runtime syntax panic',
        'Halts hardware system',
        'Returns undefined memory segment'
      ],
      correctAnswer: 0,
      explanation: `Valid ${lang.name} constructs compile or interpret smoothly, yielding structured console output.`
    }
  ]);

  // Module 2 Quiz
  addQuiz(`quiz-${lang.id}-mod-2`, `${lang.name} — Module 2 Quiz (${lang.t2})`, lang.courseId, [
    {
      id: `q-${lang.id}-2-1`,
      type: 'multiple-choice',
      question: `What is the primary advantage of mastering ${lang.t2} in ${lang.name}?`,
      options: [
        `Enables scalable, reusable, and efficient data handling and modular architecture`,
        'Eliminates the need for testing or debugging',
        'Reduces all program runtimes to 0 milliseconds',
        'Replaces the underlying operating system'
      ],
      correctAnswer: 0,
      explanation: `${lang.t2} gives developers modular abstractions to structure complex domain problems.`
    },
    {
      id: `q-${lang.id}-2-2`,
      type: 'multiple-choice',
      question: `Which best practice should always be applied when working with ${lang.t2} in ${lang.name}?`,
      options: [
        'Guarding edge conditions, respecting scope boundaries, and handling errors defensively',
        'Hardcoding credentials in public repos',
        'Ignoring memory allocation bounds',
        'Never encapsulating state'
      ],
      correctAnswer: 0,
      explanation: 'Defensive error checking and clean encapsulation prevent bugs and memory corruption.'
    }
  ]);

  // Module 3 Quiz
  addQuiz(`quiz-${lang.id}-mod-3`, `${lang.name} — Module 3 Quiz (${lang.t3})`, lang.courseId, [
    {
      id: `q-${lang.id}-3-1`,
      type: 'multiple-choice',
      question: `In advanced ${lang.name} software engineering (${lang.t3}), how is optimal performance achieved?`,
      options: [
        `Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup`,
        'Using infinite busy-wait polling loops',
        'Disabling all runtime safety checks',
        'Running all code sequentially on a single thread without optimization'
      ],
      correctAnswer: 0,
      explanation: `Modern ${lang.name} ecosystems utilize ${lang.t3} to maximize throughput and maintain stability.`
    },
    {
      id: `q-${lang.id}-3-2`,
      type: 'multiple-choice',
      question: `What is the recommended design pattern for enterprise ${lang.name} production projects?`,
      options: [
        'Separation of concerns with modular interfaces and comprehensive test suites',
        'Monolithic single-file spaghetti scripts',
        'Writing without linting or static type analysis',
        'Ignoring compiler warnings'
      ],
      correctAnswer: 0,
      explanation: 'Separation of concerns ensures testability, scalability, and long-term maintainability.'
    }
  ]);

  // Final Certification Exam
  addQuiz(`exam-${lang.id}-final`, `${lang.name} Certified Developer — Final Comprehensive Exam`, lang.courseId, [
    {
      id: `q-${lang.id}-f-1`,
      type: 'multiple-choice',
      question: `What is the primary strength of ${lang.name} in modern software engineering?`,
      options: [
        `Its specialized execution model, robust tooling ecosystem, and rich standard library designed for ${lang.courseId}`,
        'It has no syntax rules',
        'It cannot be run on computers',
        'It requires no runtime or compiler'
      ],
      correctAnswer: 0,
      explanation: `${lang.name} is engineered for performance, readability, and ecosystem support in its target domain.`
    },
    {
      id: `q-${lang.id}-f-2`,
      type: 'multiple-choice',
      question: `Which architectural approach best ensures high reliability in ${lang.name} systems?`,
      options: [
        'Strict type discipline, automated unit testing, defensive validation, and modular decoupling',
        'Skipping compilation checks',
        'Using global shared mutable state across threads without locks',
        'Ignoring memory leaks'
      ],
      correctAnswer: 0,
      explanation: 'Decoupled, tested, and defensively programmed codebases produce industry-grade resilience.'
    },
    {
      id: `q-${lang.id}-f-3`,
      type: 'code-predict',
      question: `When deploying production ${lang.name} solutions, what is the expected CI/CD pipeline outcome?`,
      codeSnippet: `// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites`,
      options: [
        'All test suites pass with 100% test coverage and 0 linting errors',
        'Pipeline crashes silently',
        'Deploys broken code to production',
        'Ignores build failures'
      ],
      correctAnswer: 0,
      explanation: 'Automated test runners guarantee that clean code meeting all requirements is deployed safely.'
    }
  ]);
});

// Also add base courses quizzes
addQuiz('quiz-pyb-mod-1', 'Python for Absolute Beginners — Module 1 Quiz', 'python-beginners', [
  {
    id: 'q-pb-1',
    type: 'multiple-choice',
    question: 'Which function outputs text to the standard console screen in Python?',
    options: ['print()', 'echo()', 'System.out.println()', 'console.log()'],
    correctAnswer: 0,
    explanation: 'Python uses the built-in print() function to output text to standard output.'
  }
]);

addQuiz('exam-pyb-final', 'Python for Beginners — Final Certification Exam', 'python-beginners', [
  {
    id: 'q-pbf-1',
    type: 'multiple-choice',
    question: 'What is the correct syntax for a variable declaration in Python?',
    options: ['x = 10', 'int x = 10;', 'var x := 10', 'let x = 10'],
    correctAnswer: 0,
    explanation: 'Python uses dynamic typing where assignment `x = 10` declares and binds the variable.'
  }
]);

addQuiz('quiz-web-mod-1', 'Web Development Fundamentals — Module 1 Quiz', 'web-basics', [
  {
    id: 'q-wb-1',
    type: 'multiple-choice',
    question: 'Which HTML element contains the visible content of an HTML document?',
    options: ['<body>', '<head>', '<title>', '<meta>'],
    correctAnswer: 0,
    explanation: 'The <body> element encapsulates all visible UI components and text rendered on screen.'
  }
]);

addQuiz('exam-web-final', 'Web Development — Final Certification Exam', 'web-basics', [
  {
    id: 'q-wbf-1',
    type: 'multiple-choice',
    question: 'Which CSS property creates a two-dimensional grid layout system?',
    options: ['display: grid', 'display: flex', 'position: absolute', 'float: left'],
    correctAnswer: 0,
    explanation: '`display: grid` enables powerful two-dimensional row and column grid layouts in CSS.'
  }
]);

addQuiz('quiz-react-mod-1', 'React 19 Masterclass — Module 1 Quiz', 'react-mastery', [
  {
    id: 'q-rm-1',
    type: 'multiple-choice',
    question: 'What hook is used to declare state in a React functional component?',
    options: ['useState()', 'useEffect()', 'useRef()', 'useContext()'],
    correctAnswer: 0,
    explanation: '`useState` is the core React hook that holds state and returns a setter function to trigger re-renders.'
  }
]);

addQuiz('exam-react-final', 'React 19 Masterclass — Final Certification Exam', 'react-mastery', [
  {
    id: 'q-rmf-1',
    type: 'multiple-choice',
    question: 'Why should state never be directly mutated in React?',
    options: [
      'Direct mutations bypass React reactivity and will not trigger component re-renders',
      'It causes JavaScript to crash immediately',
      'State cannot be changed in React',
      'It converts functional components to class components'
    ],
    correctAnswer: 0,
    explanation: 'Calling state setter functions informs React of changes so it can calculate Virtual DOM diffs and update the UI.'
  }
]);

const outQuizzes = `// Interactive Quizzes and Comprehensive Final Exams Database for EduMind.AI

export const QUIZZES_DATA = ${JSON.stringify(QUIZZES, null, 2)};
`;

fs.writeFileSync('src/data/quizzesData.js', outQuizzes, 'utf8');
console.log('Successfully generated complete src/data/quizzesData.js for all courses, modules, and final exams!');
