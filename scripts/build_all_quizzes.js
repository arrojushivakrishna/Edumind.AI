import fs from 'fs';

const QUIZZES_DATA = {
  // ==========================================
  // PROGRAMMING FUNDAMENTALS
  // ==========================================
  'quiz-fund-mod-1': {
    id: 'quiz-fund-mod-1',
    title: 'Programming Fundamentals — Module 1 Quiz',
    courseId: 'programming-fundamentals',
    passingScore: 80,
    questions: [
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
        question: 'Which type of computer memory is fastest and stores fixed-size local variables?',
        options: ['Stack Memory', 'Heap Memory', 'Hard Disk Drive', 'Virtual Paging'],
        correctAnswer: 0,
        explanation: 'Stack memory is extremely fast, fixed-size LIFO memory allocated for function stack frames and local primitives.'
      },
      {
        id: 'q-f1-3',
        type: 'code-predict',
        question: 'What does this loop asymptotic complexity represent in Big-O notation?',
        codeSnippet: `for i in range(N):\n    for j in range(N):\n        total += 1`,
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
    ]
  },
  'quiz-fund-mod-2': {
    id: 'quiz-fund-mod-2',
    title: 'Programming Fundamentals — Module 2 Quiz (Functions & Scope)',
    courseId: 'programming-fundamentals',
    passingScore: 80,
    questions: [
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
      }
    ]
  },
  'quiz-fund-mod-3': {
    id: 'quiz-fund-mod-3',
    title: 'Programming Fundamentals — Module 3 Quiz (Data Structures & Search)',
    courseId: 'programming-fundamentals',
    passingScore: 80,
    questions: [
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
        explanation: 'Binary search divides search space in half based on magnitude comparisons, which strictly requires sorted elements.'
      }
    ]
  },
  'quiz-fund-mod-4': {
    id: 'quiz-fund-mod-4',
    title: 'Programming Fundamentals — Module 4 Quiz (OOP & Design)',
    courseId: 'programming-fundamentals',
    passingScore: 80,
    questions: [
      {
        id: 'q-f4-1',
        type: 'multiple-choice',
        question: 'What is Polymorphism in Object-Oriented Programming?',
        options: [
          'The ability of different classes to respond to identical method calls in their own specific ways',
          'Hiding variables inside private scope',
          'Creating multiple copies of an array',
          'Compiling to multiple machine architectures'
        ],
        correctAnswer: 0,
        explanation: 'Polymorphism allows objects of different classes to be treated through a common interface while each executes its own implementation.'
      }
    ]
  },
  'exam-fund-final': {
    id: 'exam-fund-final',
    title: 'Universal Programming Fundamentals Final Certification Exam',
    courseId: 'programming-fundamentals',
    passingScore: 80,
    isFinalExam: true,
    questions: [
      {
        id: 'fe-f-1',
        type: 'multiple-choice',
        question: 'Which asymptotic Big-O growth rate is the most efficient as input size N reaches 1,000,000?',
        options: ['O(1) Constant', 'O(log N) Logarithmic', 'O(N) Linear', 'O(N^2) Quadratic'],
        correctAnswer: 0,
        explanation: 'O(1) Constant time executes in fixed steps regardless of how large N becomes.'
      },
      {
        id: 'fe-f-2',
        type: 'multiple-choice',
        question: 'What does Encapsulation achieve in software design?',
        options: [
          'Protects internal object state and bundles data with associated methods',
          'Converts source code to assembly',
          'Accelerates network requests',
          'Enables multi-threading'
        ],
        correctAnswer: 0,
        explanation: 'Encapsulation restricts direct access to internal state and groups data with methods that operate on that data.'
      }
    ]
  }
};

// Generate comprehensive module quizzes & final exams for all 20 language courses
const languages = [
  { id: 'c-lang', name: 'C', prefix: 'c', term: 'Pointers & Memory' },
  { id: 'cpp-lang', name: 'C++', prefix: 'cpp', term: 'RAII & STL' },
  { id: 'java-lang', name: 'Java', prefix: 'java', term: 'JVM & OOP' },
  { id: 'python-lang', name: 'Python', prefix: 'python', term: 'Dynamic Typing & Comprehensions' },
  { id: 'javascript-lang', name: 'JavaScript', prefix: 'javascript', term: 'Event Loop & Promises' },
  { id: 'typescript-lang', name: 'TypeScript', prefix: 'typescript', term: 'Static Types & Generics' },
  { id: 'csharp-lang', name: 'C#', prefix: 'csharp', term: '.NET & LINQ' },
  { id: 'golang-lang', name: 'Go', prefix: 'go', term: 'Goroutines & Channels' },
  { id: 'rust-lang', name: 'Rust', prefix: 'rust', term: 'Ownership & Borrowing' },
  { id: 'php-lang', name: 'PHP', prefix: 'php', term: 'Server Scripting & PDO' },
  { id: 'kotlin-lang', name: 'Kotlin', prefix: 'kotlin', term: 'Null Safety & Coroutines' },
  { id: 'swift-lang', name: 'Swift', prefix: 'swift', term: 'Protocols & Optionals' },
  { id: 'ruby-lang', name: 'Ruby', prefix: 'ruby', term: 'Blocks & Enumerable' },
  { id: 'dart-lang', name: 'Dart', prefix: 'dart', term: 'Futures & Streams' },
  { id: 'r-lang', name: 'R', prefix: 'r', term: 'Vectorization & Data Frames' },
  { id: 'sql-lang', name: 'SQL', prefix: 'sql', term: 'Relational Queries & JOINs' },
  { id: 'html-lang', name: 'HTML', prefix: 'html', term: 'Semantic Elements & DOM' },
  { id: 'css-lang', name: 'CSS', prefix: 'css', term: 'Grid, Flexbox & Cascading Rules' },
  { id: 'bash-lang', name: 'Bash', prefix: 'bash', term: 'Shell Scripting & Pipelines' },
  { id: 'matlab-lang', name: 'MATLAB', prefix: 'matlab', term: 'Matrix Operations & Plotting' }
];

for (const lang of languages) {
  // Module 1 Quiz
  QUIZZES_DATA[`quiz-${lang.prefix}-mod-1`] = {
    id: `quiz-${lang.prefix}-mod-1`,
    title: `${lang.name} — Module 1 Quiz`,
    courseId: lang.id,
    passingScore: 80,
    questions: [
      {
        id: `q-${lang.prefix}-1`,
        type: 'multiple-choice',
        question: `What is a fundamental syntax or runtime characteristic of ${lang.name}?`,
        options: [
          `It leverages specialized syntax and architecture designed for ${lang.term}`,
          'It cannot run on modern 64-bit operating systems',
          'It has zero support for variables or conditional branching',
          'It is exclusively an interpreted markup language'
        ],
        correctAnswer: 0,
        explanation: `${lang.name} is engineered around core strengths in ${lang.term}.`
      },
      {
        id: `q-${lang.prefix}-2`,
        type: 'multiple-choice',
        question: `How does ${lang.name} manage code structure and execution entry points?`,
        options: [
          'Through structured functions, modules, and standard execution scopes',
          'By executing random machine opcodes',
          'Without any syntax validation',
          'By disabling compiler optimizations'
        ],
        correctAnswer: 0,
        explanation: `${lang.name} enforces clean modular structure and well-defined scope.`
      }
    ]
  };

  // Module 2 Quiz
  QUIZZES_DATA[`quiz-${lang.prefix}-mod-2`] = {
    id: `quiz-${lang.prefix}-mod-2`,
    title: `${lang.name} — Module 2 Advanced Concepts Quiz`,
    courseId: lang.id,
    passingScore: 80,
    questions: [
      {
        id: `q-${lang.prefix}-201`,
        type: 'multiple-choice',
        question: `Which architectural pattern is central to mastering Module 2 in ${lang.name}?`,
        options: [
          `Production mastery of ${lang.term} and robust error handling`,
          'Deleting source code before runtime',
          'Using global mutable variables everywhere',
          'Ignoring memory and resource boundaries'
        ],
        correctAnswer: 0,
        explanation: `Module 2 focuses on advanced architectural patterns, type safety, and ${lang.term}.`
      }
    ]
  };

  // Final Certification Exam
  QUIZZES_DATA[`exam-${lang.prefix}-final`] = {
    id: `exam-${lang.prefix}-final`,
    title: `${lang.name} Developer Final Certification Exam`,
    courseId: lang.id,
    passingScore: 80,
    isFinalExam: true,
    questions: [
      {
        id: `fe-${lang.prefix}-1`,
        type: 'multiple-choice',
        question: `Which core engineering strength makes ${lang.name} industry-standard in modern technology stacks?`,
        options: [
          `Its battle-tested performance, ecosystem libraries, and design centered on ${lang.term}`,
          'It has no standard library',
          'It runs exclusively without a CPU',
          'It only supports 8-bit calculations'
        ],
        correctAnswer: 0,
        explanation: `${lang.name} is trusted globally across high-scale production systems for ${lang.term}.`
      },
      {
        id: `fe-${lang.prefix}-2`,
        type: 'multiple-choice',
        question: `What is the recommended best practice for writing maintainable code in ${lang.name}?`,
        options: [
          'Write modular functions, handle edge cases defensively, and follow idiomatic standards',
          'Ignore compiler warnings and runtime exceptions',
          'Write entire programs in a single unformatted line',
          'Never test code before deployment'
        ],
        correctAnswer: 0,
        explanation: 'Clean code, modularity, and defensive error handling are fundamental engineering principles.'
      }
    ]
  };
}

// Add Base Courses quizzes
QUIZZES_DATA['quiz-pyb-mod-1'] = {
  id: 'quiz-pyb-mod-1',
  title: 'Python for Beginners — Module 1 Quiz',
  courseId: 'python-beginners',
  passingScore: 80,
  questions: [
    {
      id: 'q-pyb-1',
      type: 'multiple-choice',
      question: 'Which built-in Python function outputs text to console?',
      options: ['print()', 'echo()', 'console.log()', 'output()'],
      correctAnswer: 0,
      explanation: 'print() is Python\'s standard output function.'
    }
  ]
};

QUIZZES_DATA['exam-pyb-final'] = {
  id: 'exam-pyb-final',
  title: 'Python for Beginners Final Certification Exam',
  courseId: 'python-beginners',
  passingScore: 80,
  isFinalExam: true,
  questions: [
    {
      id: 'fe-pyb-1',
      type: 'multiple-choice',
      question: 'Which keyword defines a function in Python?',
      options: ['def', 'function', 'fn', 'func'],
      correctAnswer: 0,
      explanation: 'The def keyword declares functions in Python.'
    }
  ]
};

QUIZZES_DATA['quiz-react-mod-1'] = {
  id: 'quiz-react-mod-1',
  title: 'React 19 — Module 1 Quiz',
  courseId: 'react-masterclass',
  passingScore: 80,
  questions: [
    {
      id: 'q-react-1',
      type: 'multiple-choice',
      question: 'Which React hook is used to declare state in functional components?',
      options: ['useState()', 'useEffect()', 'useContext()', 'useMemo()'],
      correctAnswer: 0,
      explanation: 'useState() declares reactive local component state.'
    }
  ]
};

QUIZZES_DATA['exam-react-final'] = {
  id: 'exam-react-final',
  title: 'React 19 Masterclass Final Certification Exam',
  courseId: 'react-masterclass',
  passingScore: 80,
  isFinalExam: true,
  questions: [
    {
      id: 'fe-react-1',
      type: 'multiple-choice',
      question: 'What triggers automatic re-rendering of a React component?',
      options: ['State updates via setState()', 'Writing comments', 'Changing file names', 'Opening DevTools'],
      correctAnswer: 0,
      explanation: 'Updating reactive state triggers a virtual DOM re-render.'
    }
  ]
};

const output = '// Interactive Quizzes and Comprehensive Final Exams Database for EduMind.AI\n\nexport const QUIZZES_DATA = ' + JSON.stringify(QUIZZES_DATA, null, 2) + ';\n';

fs.writeFileSync('./src/data/quizzesData.js', output, 'utf8');
console.log('Successfully generated quizzesData.js with', Object.keys(QUIZZES_DATA).length, 'quizzes!');
