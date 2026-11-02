// Interactive Quizzes and Comprehensive Final Exams Database for EduMind.AI

export const QUIZZES_DATA = {
  "quiz-fund-mod-1": {
    "id": "quiz-fund-mod-1",
    "title": "Programming Fundamentals — Module 1 Quiz (Core Mechanics)",
    "courseId": "programming-fundamentals",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-f1-1",
        "type": "multiple-choice",
        "question": "What is the primary difference between a compiler and an interpreter?",
        "options": [
          "Compilers translate whole source code ahead of time; interpreters execute line-by-line in real time",
          "Compilers only run Python; interpreters run C++",
          "Interpreters produce binary executable machine files",
          "There is no difference"
        ],
        "correctAnswer": 0,
        "explanation": "Compilers translate entire programs ahead of time into machine binary, while interpreters translate and execute source code line-by-line dynamically."
      },
      {
        "id": "q-f1-2",
        "type": "multiple-choice",
        "question": "Which type of computer memory is fastest and stores fixed-size local variables in LIFO order?",
        "options": [
          "Stack Memory",
          "Heap Memory",
          "Hard Disk Drive",
          "Virtual Paging"
        ],
        "correctAnswer": 0,
        "explanation": "Stack memory is extremely fast, fixed-size LIFO memory allocated for function stack frames and local primitives."
      },
      {
        "id": "q-f1-3",
        "type": "code-predict",
        "question": "What does this loop asymptotic complexity represent in Big-O notation?",
        "codeSnippet": "for i in range(N):\n    for j in range(N):\n        total += 1",
        "options": [
          "O(N^2) Quadratic",
          "O(N) Linear",
          "O(1) Constant",
          "O(log N)"
        ],
        "correctAnswer": 0,
        "explanation": "Two nested loops each running N times result in N * N = N^2 operations, which is O(N^2) Quadratic time."
      },
      {
        "id": "q-f1-4",
        "type": "multi-select",
        "question": "Which of the following are universal primitive data types? (Select all that apply)",
        "options": [
          "Integer",
          "Boolean",
          "Float",
          "Microservice"
        ],
        "correctAnswer": [
          0,
          1,
          2
        ],
        "explanation": "Integer, Boolean, and Float are primitive data types. Microservice is a software architecture pattern."
      }
    ]
  },
  "quiz-fund-mod-2": {
    "id": "quiz-fund-mod-2",
    "title": "Programming Fundamentals — Module 2 Quiz (Functions & Scope)",
    "courseId": "programming-fundamentals",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-f2-1",
        "type": "multiple-choice",
        "question": "What is a \"Pure Function\" in programming?",
        "options": [
          "A function that always produces the exact same output for the same input with zero side effects",
          "A function written without any parameters",
          "A function that only compiles in C",
          "A function that mutates global variables"
        ],
        "correctAnswer": 0,
        "explanation": "Pure functions depend only on their inputs and cause no observable side effects (like mutating global state or performing external I/O)."
      },
      {
        "id": "q-f2-2",
        "type": "multiple-choice",
        "question": "What happens when a recursive function lacks a base case?",
        "options": [
          "Stack Overflow (Infinite Call Stack exhaustion)",
          "It executes in O(1) time",
          "Compiler turns it into a for-loop",
          "It returns 0"
        ],
        "correctAnswer": 0,
        "explanation": "Without a base case, recursion continually pushes frames onto the call stack until memory is exhausted, throwing a Stack Overflow error."
      },
      {
        "id": "q-f2-3",
        "type": "multiple-choice",
        "question": "What is \"Lexical Scope\" in modern programming languages?",
        "options": [
          "Variables are scoped according to their physical position in the source code nesting structure",
          "Variables are only accessible from remote cloud servers",
          "Variables change scope randomly at runtime",
          "Variables must all be declared globally"
        ],
        "correctAnswer": 0,
        "explanation": "Lexical scope means variable access is determined by block nesting location in source code at compile/parse time."
      }
    ]
  },
  "quiz-fund-mod-3": {
    "id": "quiz-fund-mod-3",
    "title": "Programming Fundamentals — Module 3 Quiz (Data Structures)",
    "courseId": "programming-fundamentals",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-f3-1",
        "type": "multiple-choice",
        "question": "What is the average time complexity of looking up a value by key in a Hash Table?",
        "options": [
          "O(1) Constant Time",
          "O(N) Linear Time",
          "O(N^2) Quadratic",
          "O(log N)"
        ],
        "correctAnswer": 0,
        "explanation": "Hash tables map keys to bucket indices using a hash function, providing O(1) average lookup time."
      },
      {
        "id": "q-f3-2",
        "type": "multiple-choice",
        "question": "What is the mandatory prerequisite before executing a Binary Search on an array?",
        "options": [
          "The array must be sorted in order",
          "The array must only contain integers",
          "The array must be stored on disk",
          "The array must have an even length"
        ],
        "correctAnswer": 0,
        "explanation": "Binary Search requires a sorted collection so it can discard half the remaining search space on each iteration."
      },
      {
        "id": "q-f3-3",
        "type": "multiple-choice",
        "question": "Which data structure operates on a First-In-First-Out (FIFO) access policy?",
        "options": [
          "Queue",
          "Stack",
          "Binary Search Tree",
          "Hash Map"
        ],
        "correctAnswer": 0,
        "explanation": "A Queue enforces FIFO order: elements inserted first are processed first."
      }
    ]
  },
  "quiz-fund-mod-4": {
    "id": "quiz-fund-mod-4",
    "title": "Programming Fundamentals — Module 4 Quiz (OOP & Systems Design)",
    "courseId": "programming-fundamentals",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-f4-1",
        "type": "multiple-choice",
        "question": "Which OOP pillar restricts direct access to internal state and hides object representation behind methods?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Inheritance",
          "Concurrency"
        ],
        "correctAnswer": 0,
        "explanation": "Encapsulation bundles data and methods while keeping internal state private to prevent unauthorized manipulation."
      },
      {
        "id": "q-f4-2",
        "type": "multiple-choice",
        "question": "In the DRY software engineering principle, what does DRY stand for?",
        "options": [
          "Don't Repeat Yourself",
          "Data Routing Yield",
          "Direct Resource Yield",
          "Dynamic Run Yield"
        ],
        "correctAnswer": 0,
        "explanation": "DRY stands for 'Don't Repeat Yourself', emphasizing code reuse and modularity."
      }
    ]
  },
  "exam-fund-final": {
    "id": "exam-fund-final",
    "title": "Programming Fundamentals — Final Certification Exam",
    "courseId": "programming-fundamentals",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-ff-1",
        "type": "multiple-choice",
        "question": "What happens to stack-allocated variables when a function exits?",
        "options": [
          "Their stack frame is popped and memory is immediately reclaimed",
          "They remain in RAM forever until reboot",
          "They are moved to heap automatically",
          "They trigger a compiler error"
        ],
        "correctAnswer": 0,
        "explanation": "When a function returns, its stack frame is instantly popped, deallocating all local stack variables in O(1) time."
      },
      {
        "id": "q-ff-2",
        "type": "multiple-choice",
        "question": "Which sorting algorithm has a guaranteed O(N log N) worst-case time complexity?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Bubble Sort",
          "Insertion Sort"
        ],
        "correctAnswer": 0,
        "explanation": "Merge Sort guarantees O(N log N) time in all cases (best, average, worst) by recursively halving and merging lists."
      },
      {
        "id": "q-ff-3",
        "type": "multiple-choice",
        "question": "What is the primary benefit of Object-Oriented Polymorphism?",
        "options": [
          "Allowing different types to respond to the same interface or method call appropriately",
          "Making code run 100x faster",
          "Eliminating all memory usage",
          "Preventing functions from having parameters"
        ],
        "correctAnswer": 0,
        "explanation": "Polymorphism allows code to interact with abstract interfaces without needing to know concrete implementation classes."
      }
    ]
  },
  "quiz-c-mod-1": {
    "id": "quiz-c-mod-1",
    "title": "C — Module 1 Quiz (Syntax & Compilation)",
    "courseId": "c-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-c-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind C's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Syntax & Compilation",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "C Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-c-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in C?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid C code."
      },
      {
        "id": "q-c-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid C code following Module 1 conventions:",
        "codeSnippet": "// C Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid C constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-c-mod-2": {
    "id": "quiz-c-mod-2",
    "title": "C — Module 2 Quiz (Pointers & Memory)",
    "courseId": "c-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-c-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Pointers & Memory in C?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Pointers & Memory gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-c-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Pointers & Memory in C?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-c-mod-3": {
    "id": "quiz-c-mod-3",
    "title": "C — Module 3 Quiz (Structs & Dynamic Allocation)",
    "courseId": "c-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-c-3-1",
        "type": "multiple-choice",
        "question": "In advanced C software engineering (Structs & Dynamic Allocation), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern C ecosystems utilize Structs & Dynamic Allocation to maximize throughput and maintain stability."
      },
      {
        "id": "q-c-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise C production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-c-final": {
    "id": "exam-c-final",
    "title": "C Certified Developer — Final Comprehensive Exam",
    "courseId": "c-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-c-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of C in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for c-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "C is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-c-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in C systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-c-f-3",
        "type": "code-predict",
        "question": "When deploying production C solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-cpp-mod-1": {
    "id": "quiz-cpp-mod-1",
    "title": "C++ — Module 1 Quiz (Syntax & STL)",
    "courseId": "cpp-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-cpp-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind C++'s syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Syntax & STL",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "C++ Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-cpp-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in C++?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid C++ code."
      },
      {
        "id": "q-cpp-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid C++ code following Module 1 conventions:",
        "codeSnippet": "// C++ Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid C++ constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-cpp-mod-2": {
    "id": "quiz-cpp-mod-2",
    "title": "C++ — Module 2 Quiz (Classes & RAII)",
    "courseId": "cpp-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-cpp-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Classes & RAII in C++?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Classes & RAII gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-cpp-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Classes & RAII in C++?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-cpp-mod-3": {
    "id": "quiz-cpp-mod-3",
    "title": "C++ — Module 3 Quiz (Smart Pointers & Templates)",
    "courseId": "cpp-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-cpp-3-1",
        "type": "multiple-choice",
        "question": "In advanced C++ software engineering (Smart Pointers & Templates), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern C++ ecosystems utilize Smart Pointers & Templates to maximize throughput and maintain stability."
      },
      {
        "id": "q-cpp-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise C++ production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-cpp-final": {
    "id": "exam-cpp-final",
    "title": "C++ Certified Developer — Final Comprehensive Exam",
    "courseId": "cpp-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-cpp-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of C++ in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for cpp-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "C++ is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-cpp-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in C++ systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-cpp-f-3",
        "type": "code-predict",
        "question": "When deploying production C++ solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-java-mod-1": {
    "id": "quiz-java-mod-1",
    "title": "Java — Module 1 Quiz (Java 21 Syntax & JVM)",
    "courseId": "java-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-java-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Java's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Java 21 Syntax & JVM",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Java Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-java-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Java?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Java code."
      },
      {
        "id": "q-java-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Java code following Module 1 conventions:",
        "codeSnippet": "// Java Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Java constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-java-mod-2": {
    "id": "quiz-java-mod-2",
    "title": "Java — Module 2 Quiz (OOP & Interfaces)",
    "courseId": "java-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-java-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering OOP & Interfaces in Java?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "OOP & Interfaces gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-java-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with OOP & Interfaces in Java?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-java-mod-3": {
    "id": "quiz-java-mod-3",
    "title": "Java — Module 3 Quiz (Collections & Virtual Threads)",
    "courseId": "java-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-java-3-1",
        "type": "multiple-choice",
        "question": "In advanced Java software engineering (Collections & Virtual Threads), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Java ecosystems utilize Collections & Virtual Threads to maximize throughput and maintain stability."
      },
      {
        "id": "q-java-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Java production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-java-final": {
    "id": "exam-java-final",
    "title": "Java Certified Developer — Final Comprehensive Exam",
    "courseId": "java-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-java-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Java in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for java-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Java is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-java-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Java systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-java-f-3",
        "type": "code-predict",
        "question": "When deploying production Java solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-python-mod-1": {
    "id": "quiz-python-mod-1",
    "title": "Python — Module 1 Quiz (Syntax & Control Flow)",
    "courseId": "python-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-python-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Python's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Syntax & Control Flow",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Python Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-python-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Python?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Python code."
      },
      {
        "id": "q-python-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Python code following Module 1 conventions:",
        "codeSnippet": "// Python Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Python constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-python-mod-2": {
    "id": "quiz-python-mod-2",
    "title": "Python — Module 2 Quiz (Data Structures & Comprehensions)",
    "courseId": "python-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-python-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Data Structures & Comprehensions in Python?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Data Structures & Comprehensions gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-python-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Data Structures & Comprehensions in Python?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-python-mod-3": {
    "id": "quiz-python-mod-3",
    "title": "Python — Module 3 Quiz (OOP & Asyncio)",
    "courseId": "python-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-python-3-1",
        "type": "multiple-choice",
        "question": "In advanced Python software engineering (OOP & Asyncio), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Python ecosystems utilize OOP & Asyncio to maximize throughput and maintain stability."
      },
      {
        "id": "q-python-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Python production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-python-final": {
    "id": "exam-python-final",
    "title": "Python Certified Developer — Final Comprehensive Exam",
    "courseId": "python-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-python-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Python in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for python-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Python is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-python-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Python systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-python-f-3",
        "type": "code-predict",
        "question": "When deploying production Python solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-javascript-mod-1": {
    "id": "quiz-javascript-mod-1",
    "title": "JavaScript — Module 1 Quiz (ES6+ Syntax & Scope)",
    "courseId": "javascript-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-javascript-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind JavaScript's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around ES6+ Syntax & Scope",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "JavaScript Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-javascript-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in JavaScript?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid JavaScript code."
      },
      {
        "id": "q-javascript-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid JavaScript code following Module 1 conventions:",
        "codeSnippet": "// JavaScript Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid JavaScript constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-javascript-mod-2": {
    "id": "quiz-javascript-mod-2",
    "title": "JavaScript — Module 2 Quiz (Promises & Async/Await)",
    "courseId": "javascript-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-javascript-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Promises & Async/Await in JavaScript?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Promises & Async/Await gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-javascript-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Promises & Async/Await in JavaScript?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-javascript-mod-3": {
    "id": "quiz-javascript-mod-3",
    "title": "JavaScript — Module 3 Quiz (Closures & Prototypes)",
    "courseId": "javascript-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-javascript-3-1",
        "type": "multiple-choice",
        "question": "In advanced JavaScript software engineering (Closures & Prototypes), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern JavaScript ecosystems utilize Closures & Prototypes to maximize throughput and maintain stability."
      },
      {
        "id": "q-javascript-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise JavaScript production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-javascript-final": {
    "id": "exam-javascript-final",
    "title": "JavaScript Certified Developer — Final Comprehensive Exam",
    "courseId": "javascript-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-javascript-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of JavaScript in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for javascript-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "JavaScript is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-javascript-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in JavaScript systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-javascript-f-3",
        "type": "code-predict",
        "question": "When deploying production JavaScript solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-typescript-mod-1": {
    "id": "quiz-typescript-mod-1",
    "title": "TypeScript — Module 1 Quiz (Static Types & Interfaces)",
    "courseId": "typescript-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-typescript-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind TypeScript's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Static Types & Interfaces",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "TypeScript Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-typescript-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in TypeScript?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid TypeScript code."
      },
      {
        "id": "q-typescript-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid TypeScript code following Module 1 conventions:",
        "codeSnippet": "// TypeScript Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid TypeScript constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-typescript-mod-2": {
    "id": "quiz-typescript-mod-2",
    "title": "TypeScript — Module 2 Quiz (Generics & Unions)",
    "courseId": "typescript-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-typescript-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Generics & Unions in TypeScript?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Generics & Unions gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-typescript-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Generics & Unions in TypeScript?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-typescript-mod-3": {
    "id": "quiz-typescript-mod-3",
    "title": "TypeScript — Module 3 Quiz (Utility Types & Mapping)",
    "courseId": "typescript-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-typescript-3-1",
        "type": "multiple-choice",
        "question": "In advanced TypeScript software engineering (Utility Types & Mapping), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern TypeScript ecosystems utilize Utility Types & Mapping to maximize throughput and maintain stability."
      },
      {
        "id": "q-typescript-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise TypeScript production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-typescript-final": {
    "id": "exam-typescript-final",
    "title": "TypeScript Certified Developer — Final Comprehensive Exam",
    "courseId": "typescript-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-typescript-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of TypeScript in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for typescript-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "TypeScript is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-typescript-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in TypeScript systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-typescript-f-3",
        "type": "code-predict",
        "question": "When deploying production TypeScript solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-csharp-mod-1": {
    "id": "quiz-csharp-mod-1",
    "title": "C# — Module 1 Quiz (C# 12 & .NET 8 Basics)",
    "courseId": "csharp-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-csharp-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind C#'s syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around C# 12 & .NET 8 Basics",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "C# Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-csharp-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in C#?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid C# code."
      },
      {
        "id": "q-csharp-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid C# code following Module 1 conventions:",
        "codeSnippet": "// C# Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid C# constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-csharp-mod-2": {
    "id": "quiz-csharp-mod-2",
    "title": "C# — Module 2 Quiz (LINQ & Records)",
    "courseId": "csharp-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-csharp-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering LINQ & Records in C#?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "LINQ & Records gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-csharp-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with LINQ & Records in C#?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-csharp-mod-3": {
    "id": "quiz-csharp-mod-3",
    "title": "C# — Module 3 Quiz (Async Tasks & Services)",
    "courseId": "csharp-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-csharp-3-1",
        "type": "multiple-choice",
        "question": "In advanced C# software engineering (Async Tasks & Services), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern C# ecosystems utilize Async Tasks & Services to maximize throughput and maintain stability."
      },
      {
        "id": "q-csharp-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise C# production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-csharp-final": {
    "id": "exam-csharp-final",
    "title": "C# Certified Developer — Final Comprehensive Exam",
    "courseId": "csharp-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-csharp-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of C# in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for csharp-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "C# is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-csharp-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in C# systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-csharp-f-3",
        "type": "code-predict",
        "question": "When deploying production C# solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-golang-mod-1": {
    "id": "quiz-golang-mod-1",
    "title": "Go — Module 1 Quiz (Packages & Structs)",
    "courseId": "golang-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-golang-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Go's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Packages & Structs",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Go Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-golang-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Go?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Go code."
      },
      {
        "id": "q-golang-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Go code following Module 1 conventions:",
        "codeSnippet": "// Go Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Go constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-golang-mod-2": {
    "id": "quiz-golang-mod-2",
    "title": "Go — Module 2 Quiz (Goroutines & Channels)",
    "courseId": "golang-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-golang-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Goroutines & Channels in Go?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Goroutines & Channels gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-golang-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Goroutines & Channels in Go?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-golang-mod-3": {
    "id": "quiz-golang-mod-3",
    "title": "Go — Module 3 Quiz (Interfaces & REST APIs)",
    "courseId": "golang-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-golang-3-1",
        "type": "multiple-choice",
        "question": "In advanced Go software engineering (Interfaces & REST APIs), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Go ecosystems utilize Interfaces & REST APIs to maximize throughput and maintain stability."
      },
      {
        "id": "q-golang-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Go production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-golang-final": {
    "id": "exam-golang-final",
    "title": "Go Certified Developer — Final Comprehensive Exam",
    "courseId": "golang-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-golang-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Go in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for golang-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Go is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-golang-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Go systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-golang-f-3",
        "type": "code-predict",
        "question": "When deploying production Go solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-rust-mod-1": {
    "id": "quiz-rust-mod-1",
    "title": "Rust — Module 1 Quiz (Syntax & Mutability)",
    "courseId": "rust-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-rust-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Rust's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Syntax & Mutability",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Rust Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-rust-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Rust?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Rust code."
      },
      {
        "id": "q-rust-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Rust code following Module 1 conventions:",
        "codeSnippet": "// Rust Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Rust constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-rust-mod-2": {
    "id": "quiz-rust-mod-2",
    "title": "Rust — Module 2 Quiz (Ownership & Borrowing)",
    "courseId": "rust-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-rust-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Ownership & Borrowing in Rust?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Ownership & Borrowing gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-rust-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Ownership & Borrowing in Rust?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-rust-mod-3": {
    "id": "quiz-rust-mod-3",
    "title": "Rust — Module 3 Quiz (Traits & Pattern Matching)",
    "courseId": "rust-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-rust-3-1",
        "type": "multiple-choice",
        "question": "In advanced Rust software engineering (Traits & Pattern Matching), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Rust ecosystems utilize Traits & Pattern Matching to maximize throughput and maintain stability."
      },
      {
        "id": "q-rust-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Rust production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-rust-final": {
    "id": "exam-rust-final",
    "title": "Rust Certified Developer — Final Comprehensive Exam",
    "courseId": "rust-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-rust-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Rust in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for rust-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Rust is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-rust-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Rust systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-rust-f-3",
        "type": "code-predict",
        "question": "When deploying production Rust solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-php-mod-1": {
    "id": "quiz-php-mod-1",
    "title": "PHP — Module 1 Quiz (PHP 8 Basics & Arrays)",
    "courseId": "php-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-php-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind PHP's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around PHP 8 Basics & Arrays",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "PHP Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-php-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in PHP?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid PHP code."
      },
      {
        "id": "q-php-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid PHP code following Module 1 conventions:",
        "codeSnippet": "// PHP Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid PHP constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-php-mod-2": {
    "id": "quiz-php-mod-2",
    "title": "PHP — Module 2 Quiz (OOP & Promotion)",
    "courseId": "php-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-php-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering OOP & Promotion in PHP?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "OOP & Promotion gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-php-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with OOP & Promotion in PHP?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-php-mod-3": {
    "id": "quiz-php-mod-3",
    "title": "PHP — Module 3 Quiz (PDO Security & REST APIs)",
    "courseId": "php-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-php-3-1",
        "type": "multiple-choice",
        "question": "In advanced PHP software engineering (PDO Security & REST APIs), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern PHP ecosystems utilize PDO Security & REST APIs to maximize throughput and maintain stability."
      },
      {
        "id": "q-php-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise PHP production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-php-final": {
    "id": "exam-php-final",
    "title": "PHP Certified Developer — Final Comprehensive Exam",
    "courseId": "php-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-php-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of PHP in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for php-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "PHP is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-php-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in PHP systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-php-f-3",
        "type": "code-predict",
        "question": "When deploying production PHP solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-kotlin-mod-1": {
    "id": "quiz-kotlin-mod-1",
    "title": "Kotlin — Module 1 Quiz (Syntax & Null Safety)",
    "courseId": "kotlin-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-kotlin-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Kotlin's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Syntax & Null Safety",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Kotlin Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-kotlin-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Kotlin?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Kotlin code."
      },
      {
        "id": "q-kotlin-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Kotlin code following Module 1 conventions:",
        "codeSnippet": "// Kotlin Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Kotlin constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-kotlin-mod-2": {
    "id": "quiz-kotlin-mod-2",
    "title": "Kotlin — Module 2 Quiz (Data Classes & Lambdas)",
    "courseId": "kotlin-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-kotlin-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Data Classes & Lambdas in Kotlin?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Data Classes & Lambdas gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-kotlin-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Data Classes & Lambdas in Kotlin?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-kotlin-mod-3": {
    "id": "quiz-kotlin-mod-3",
    "title": "Kotlin — Module 3 Quiz (Coroutines & Flow)",
    "courseId": "kotlin-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-kotlin-3-1",
        "type": "multiple-choice",
        "question": "In advanced Kotlin software engineering (Coroutines & Flow), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Kotlin ecosystems utilize Coroutines & Flow to maximize throughput and maintain stability."
      },
      {
        "id": "q-kotlin-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Kotlin production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-kotlin-final": {
    "id": "exam-kotlin-final",
    "title": "Kotlin Certified Developer — Final Comprehensive Exam",
    "courseId": "kotlin-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-kotlin-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Kotlin in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for kotlin-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Kotlin is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-kotlin-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Kotlin systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-kotlin-f-3",
        "type": "code-predict",
        "question": "When deploying production Kotlin solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-swift-mod-1": {
    "id": "quiz-swift-mod-1",
    "title": "Swift — Module 1 Quiz (Swift Basics & Optionals)",
    "courseId": "swift-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-swift-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Swift's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Swift Basics & Optionals",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Swift Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-swift-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Swift?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Swift code."
      },
      {
        "id": "q-swift-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Swift code following Module 1 conventions:",
        "codeSnippet": "// Swift Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Swift constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-swift-mod-2": {
    "id": "quiz-swift-mod-2",
    "title": "Swift — Module 2 Quiz (Structs & Protocols)",
    "courseId": "swift-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-swift-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Structs & Protocols in Swift?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Structs & Protocols gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-swift-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Structs & Protocols in Swift?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-swift-mod-3": {
    "id": "quiz-swift-mod-3",
    "title": "Swift — Module 3 Quiz (SwiftUI & State)",
    "courseId": "swift-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-swift-3-1",
        "type": "multiple-choice",
        "question": "In advanced Swift software engineering (SwiftUI & State), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Swift ecosystems utilize SwiftUI & State to maximize throughput and maintain stability."
      },
      {
        "id": "q-swift-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Swift production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-swift-final": {
    "id": "exam-swift-final",
    "title": "Swift Certified Developer — Final Comprehensive Exam",
    "courseId": "swift-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-swift-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Swift in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for swift-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Swift is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-swift-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Swift systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-swift-f-3",
        "type": "code-predict",
        "question": "When deploying production Swift solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-ruby-mod-1": {
    "id": "quiz-ruby-mod-1",
    "title": "Ruby — Module 1 Quiz (Syntax & OOP Classes)",
    "courseId": "ruby-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-ruby-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Ruby's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Syntax & OOP Classes",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Ruby Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-ruby-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Ruby?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Ruby code."
      },
      {
        "id": "q-ruby-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Ruby code following Module 1 conventions:",
        "codeSnippet": "// Ruby Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Ruby constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-ruby-mod-2": {
    "id": "quiz-ruby-mod-2",
    "title": "Ruby — Module 2 Quiz (Blocks & Procs)",
    "courseId": "ruby-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-ruby-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Blocks & Procs in Ruby?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Blocks & Procs gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-ruby-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Blocks & Procs in Ruby?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-ruby-mod-3": {
    "id": "quiz-ruby-mod-3",
    "title": "Ruby — Module 3 Quiz (Rails MVC & Metaprogramming)",
    "courseId": "ruby-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-ruby-3-1",
        "type": "multiple-choice",
        "question": "In advanced Ruby software engineering (Rails MVC & Metaprogramming), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Ruby ecosystems utilize Rails MVC & Metaprogramming to maximize throughput and maintain stability."
      },
      {
        "id": "q-ruby-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Ruby production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-ruby-final": {
    "id": "exam-ruby-final",
    "title": "Ruby Certified Developer — Final Comprehensive Exam",
    "courseId": "ruby-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-ruby-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Ruby in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for ruby-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Ruby is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-ruby-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Ruby systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-ruby-f-3",
        "type": "code-predict",
        "question": "When deploying production Ruby solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-dart-mod-1": {
    "id": "quiz-dart-mod-1",
    "title": "Dart — Module 1 Quiz (Syntax & Null Safety)",
    "courseId": "dart-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-dart-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Dart's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Syntax & Null Safety",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Dart Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-dart-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Dart?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Dart code."
      },
      {
        "id": "q-dart-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Dart code following Module 1 conventions:",
        "codeSnippet": "// Dart Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Dart constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-dart-mod-2": {
    "id": "quiz-dart-mod-2",
    "title": "Dart — Module 2 Quiz (OOP & Mixins)",
    "courseId": "dart-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-dart-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering OOP & Mixins in Dart?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "OOP & Mixins gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-dart-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with OOP & Mixins in Dart?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-dart-mod-3": {
    "id": "quiz-dart-mod-3",
    "title": "Dart — Module 3 Quiz (Futures & Flutter State)",
    "courseId": "dart-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-dart-3-1",
        "type": "multiple-choice",
        "question": "In advanced Dart software engineering (Futures & Flutter State), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Dart ecosystems utilize Futures & Flutter State to maximize throughput and maintain stability."
      },
      {
        "id": "q-dart-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Dart production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-dart-final": {
    "id": "exam-dart-final",
    "title": "Dart Certified Developer — Final Comprehensive Exam",
    "courseId": "dart-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-dart-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Dart in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for dart-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Dart is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-dart-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Dart systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-dart-f-3",
        "type": "code-predict",
        "question": "When deploying production Dart solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-r-mod-1": {
    "id": "quiz-r-mod-1",
    "title": "R — Module 1 Quiz (Vectors & Arithmetic)",
    "courseId": "r-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-r-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind R's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Vectors & Arithmetic",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "R Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-r-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in R?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid R code."
      },
      {
        "id": "q-r-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid R code following Module 1 conventions:",
        "codeSnippet": "// R Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid R constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-r-mod-2": {
    "id": "quiz-r-mod-2",
    "title": "R — Module 2 Quiz (Data Frames & dplyr)",
    "courseId": "r-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-r-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Data Frames & dplyr in R?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Data Frames & dplyr gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-r-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Data Frames & dplyr in R?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-r-mod-3": {
    "id": "quiz-r-mod-3",
    "title": "R — Module 3 Quiz (ggplot2 & Statistics)",
    "courseId": "r-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-r-3-1",
        "type": "multiple-choice",
        "question": "In advanced R software engineering (ggplot2 & Statistics), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern R ecosystems utilize ggplot2 & Statistics to maximize throughput and maintain stability."
      },
      {
        "id": "q-r-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise R production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-r-final": {
    "id": "exam-r-final",
    "title": "R Certified Developer — Final Comprehensive Exam",
    "courseId": "r-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-r-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of R in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for r-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "R is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-r-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in R systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-r-f-3",
        "type": "code-predict",
        "question": "When deploying production R solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-sql-mod-1": {
    "id": "quiz-sql-mod-1",
    "title": "SQL — Module 1 Quiz (DDL, DML & Aggregations)",
    "courseId": "sql-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-sql-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind SQL's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around DDL, DML & Aggregations",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "SQL Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-sql-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in SQL?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid SQL code."
      },
      {
        "id": "q-sql-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid SQL code following Module 1 conventions:",
        "codeSnippet": "// SQL Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid SQL constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-sql-mod-2": {
    "id": "quiz-sql-mod-2",
    "title": "SQL — Module 2 Quiz (Multi-Table JOINs)",
    "courseId": "sql-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-sql-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Multi-Table JOINs in SQL?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Multi-Table JOINs gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-sql-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Multi-Table JOINs in SQL?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-sql-mod-3": {
    "id": "quiz-sql-mod-3",
    "title": "SQL — Module 3 Quiz (Window Functions & Indexing)",
    "courseId": "sql-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-sql-3-1",
        "type": "multiple-choice",
        "question": "In advanced SQL software engineering (Window Functions & Indexing), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern SQL ecosystems utilize Window Functions & Indexing to maximize throughput and maintain stability."
      },
      {
        "id": "q-sql-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise SQL production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-sql-final": {
    "id": "exam-sql-final",
    "title": "SQL Certified Developer — Final Comprehensive Exam",
    "courseId": "sql-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-sql-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of SQL in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for sql-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "SQL is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-sql-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in SQL systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-sql-f-3",
        "type": "code-predict",
        "question": "When deploying production SQL solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-html-mod-1": {
    "id": "quiz-html-mod-1",
    "title": "HTML — Module 1 Quiz (Document Tree & Elements)",
    "courseId": "html-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-html-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind HTML's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Document Tree & Elements",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "HTML Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-html-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in HTML?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid HTML code."
      },
      {
        "id": "q-html-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid HTML code following Module 1 conventions:",
        "codeSnippet": "// HTML Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid HTML constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-html-mod-2": {
    "id": "quiz-html-mod-2",
    "title": "HTML — Module 2 Quiz (Semantic Forms & Validation)",
    "courseId": "html-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-html-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Semantic Forms & Validation in HTML?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Semantic Forms & Validation gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-html-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Semantic Forms & Validation in HTML?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-html-mod-3": {
    "id": "quiz-html-mod-3",
    "title": "HTML — Module 3 Quiz (Accessibility & SEO)",
    "courseId": "html-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-html-3-1",
        "type": "multiple-choice",
        "question": "In advanced HTML software engineering (Accessibility & SEO), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern HTML ecosystems utilize Accessibility & SEO to maximize throughput and maintain stability."
      },
      {
        "id": "q-html-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise HTML production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-html-final": {
    "id": "exam-html-final",
    "title": "HTML Certified Developer — Final Comprehensive Exam",
    "courseId": "html-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-html-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of HTML in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for html-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "HTML is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-html-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in HTML systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-html-f-3",
        "type": "code-predict",
        "question": "When deploying production HTML solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-css-mod-1": {
    "id": "quiz-css-mod-1",
    "title": "CSS — Module 1 Quiz (Box Model & Specificity)",
    "courseId": "css-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-css-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind CSS's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Box Model & Specificity",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "CSS Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-css-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in CSS?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid CSS code."
      },
      {
        "id": "q-css-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid CSS code following Module 1 conventions:",
        "codeSnippet": "// CSS Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid CSS constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-css-mod-2": {
    "id": "quiz-css-mod-2",
    "title": "CSS — Module 2 Quiz (Flexbox & CSS Grid)",
    "courseId": "css-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-css-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Flexbox & CSS Grid in CSS?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Flexbox & CSS Grid gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-css-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Flexbox & CSS Grid in CSS?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-css-mod-3": {
    "id": "quiz-css-mod-3",
    "title": "CSS — Module 3 Quiz (Animations & Container Queries)",
    "courseId": "css-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-css-3-1",
        "type": "multiple-choice",
        "question": "In advanced CSS software engineering (Animations & Container Queries), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern CSS ecosystems utilize Animations & Container Queries to maximize throughput and maintain stability."
      },
      {
        "id": "q-css-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise CSS production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-css-final": {
    "id": "exam-css-final",
    "title": "CSS Certified Developer — Final Comprehensive Exam",
    "courseId": "css-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-css-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of CSS in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for css-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "CSS is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-css-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in CSS systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-css-f-3",
        "type": "code-predict",
        "question": "When deploying production CSS solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-bash-mod-1": {
    "id": "quiz-bash-mod-1",
    "title": "Bash — Module 1 Quiz (Terminal & Scripting)",
    "courseId": "bash-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-bash-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind Bash's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Terminal & Scripting",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "Bash Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-bash-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in Bash?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid Bash code."
      },
      {
        "id": "q-bash-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid Bash code following Module 1 conventions:",
        "codeSnippet": "// Bash Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid Bash constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-bash-mod-2": {
    "id": "quiz-bash-mod-2",
    "title": "Bash — Module 2 Quiz (Pipes, grep, sed & awk)",
    "courseId": "bash-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-bash-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Pipes, grep, sed & awk in Bash?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Pipes, grep, sed & awk gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-bash-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Pipes, grep, sed & awk in Bash?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-bash-mod-3": {
    "id": "quiz-bash-mod-3",
    "title": "Bash — Module 3 Quiz (Functions & Automation)",
    "courseId": "bash-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-bash-3-1",
        "type": "multiple-choice",
        "question": "In advanced Bash software engineering (Functions & Automation), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern Bash ecosystems utilize Functions & Automation to maximize throughput and maintain stability."
      },
      {
        "id": "q-bash-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise Bash production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-bash-final": {
    "id": "exam-bash-final",
    "title": "Bash Certified Developer — Final Comprehensive Exam",
    "courseId": "bash-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-bash-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of Bash in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for bash-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "Bash is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-bash-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in Bash systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-bash-f-3",
        "type": "code-predict",
        "question": "When deploying production Bash solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-matlab-mod-1": {
    "id": "quiz-matlab-mod-1",
    "title": "MATLAB — Module 1 Quiz (Matrix Math & Slicing)",
    "courseId": "matlab-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-matlab-1-1",
        "type": "multiple-choice",
        "question": "What is the core structural design principle behind MATLAB's syntax in Module 1?",
        "options": [
          "Explicit type safety and deterministic execution structured around Matrix Math & Slicing",
          "Unstructured global memory access without rules",
          "Executing exclusively on client web browsers",
          "Automatic cloud server deployment without local compilation"
        ],
        "correctAnswer": 0,
        "explanation": "MATLAB Module 1 establishes foundational control flow, variables, and idioms designed for maintainability and correctness."
      },
      {
        "id": "q-matlab-1-2",
        "type": "multiple-choice",
        "question": "How are standard variables and statements structured in MATLAB?",
        "options": [
          "Following strict grammar, lexical scope boundaries, and idiomatic naming conventions",
          "Variables cannot be created in Module 1",
          "Only global mutable values are allowed",
          "Code must be written on a single line"
        ],
        "correctAnswer": 0,
        "explanation": "Proper scoping and clean syntax declaration are essential to writing valid MATLAB code."
      },
      {
        "id": "q-matlab-1-3",
        "type": "code-predict",
        "question": "Predict the outcome of running valid MATLAB code following Module 1 conventions:",
        "codeSnippet": "// MATLAB Execution Test\n// Evaluates core basic constructs and declarations",
        "options": [
          "Executes cleanly and returns expected output or exit status 0",
          "Throws runtime syntax panic",
          "Halts hardware system",
          "Returns undefined memory segment"
        ],
        "correctAnswer": 0,
        "explanation": "Valid MATLAB constructs compile or interpret smoothly, yielding structured console output."
      }
    ]
  },
  "quiz-matlab-mod-2": {
    "id": "quiz-matlab-mod-2",
    "title": "MATLAB — Module 2 Quiz (Plotting & Graphics)",
    "courseId": "matlab-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-matlab-2-1",
        "type": "multiple-choice",
        "question": "What is the primary advantage of mastering Plotting & Graphics in MATLAB?",
        "options": [
          "Enables scalable, reusable, and efficient data handling and modular architecture",
          "Eliminates the need for testing or debugging",
          "Reduces all program runtimes to 0 milliseconds",
          "Replaces the underlying operating system"
        ],
        "correctAnswer": 0,
        "explanation": "Plotting & Graphics gives developers modular abstractions to structure complex domain problems."
      },
      {
        "id": "q-matlab-2-2",
        "type": "multiple-choice",
        "question": "Which best practice should always be applied when working with Plotting & Graphics in MATLAB?",
        "options": [
          "Guarding edge conditions, respecting scope boundaries, and handling errors defensively",
          "Hardcoding credentials in public repos",
          "Ignoring memory allocation bounds",
          "Never encapsulating state"
        ],
        "correctAnswer": 0,
        "explanation": "Defensive error checking and clean encapsulation prevent bugs and memory corruption."
      }
    ]
  },
  "quiz-matlab-mod-3": {
    "id": "quiz-matlab-mod-3",
    "title": "MATLAB — Module 3 Quiz (Linear Systems & ODEs)",
    "courseId": "matlab-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-matlab-3-1",
        "type": "multiple-choice",
        "question": "In advanced MATLAB software engineering (Linear Systems & ODEs), how is optimal performance achieved?",
        "options": [
          "Leveraging asynchronous pipelines, idiomatic language abstractions, and clean resource cleanup",
          "Using infinite busy-wait polling loops",
          "Disabling all runtime safety checks",
          "Running all code sequentially on a single thread without optimization"
        ],
        "correctAnswer": 0,
        "explanation": "Modern MATLAB ecosystems utilize Linear Systems & ODEs to maximize throughput and maintain stability."
      },
      {
        "id": "q-matlab-3-2",
        "type": "multiple-choice",
        "question": "What is the recommended design pattern for enterprise MATLAB production projects?",
        "options": [
          "Separation of concerns with modular interfaces and comprehensive test suites",
          "Monolithic single-file spaghetti scripts",
          "Writing without linting or static type analysis",
          "Ignoring compiler warnings"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of concerns ensures testability, scalability, and long-term maintainability."
      }
    ]
  },
  "exam-matlab-final": {
    "id": "exam-matlab-final",
    "title": "MATLAB Certified Developer — Final Comprehensive Exam",
    "courseId": "matlab-lang",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-matlab-f-1",
        "type": "multiple-choice",
        "question": "What is the primary strength of MATLAB in modern software engineering?",
        "options": [
          "Its specialized execution model, robust tooling ecosystem, and rich standard library designed for matlab-lang",
          "It has no syntax rules",
          "It cannot be run on computers",
          "It requires no runtime or compiler"
        ],
        "correctAnswer": 0,
        "explanation": "MATLAB is engineered for performance, readability, and ecosystem support in its target domain."
      },
      {
        "id": "q-matlab-f-2",
        "type": "multiple-choice",
        "question": "Which architectural approach best ensures high reliability in MATLAB systems?",
        "options": [
          "Strict type discipline, automated unit testing, defensive validation, and modular decoupling",
          "Skipping compilation checks",
          "Using global shared mutable state across threads without locks",
          "Ignoring memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Decoupled, tested, and defensively programmed codebases produce industry-grade resilience."
      },
      {
        "id": "q-matlab-f-3",
        "type": "code-predict",
        "question": "When deploying production MATLAB solutions, what is the expected CI/CD pipeline outcome?",
        "codeSnippet": "// CI/CD Build & Test Verification\n// Compiles all modules and runs automated test suites",
        "options": [
          "All test suites pass with 100% test coverage and 0 linting errors",
          "Pipeline crashes silently",
          "Deploys broken code to production",
          "Ignores build failures"
        ],
        "correctAnswer": 0,
        "explanation": "Automated test runners guarantee that clean code meeting all requirements is deployed safely."
      }
    ]
  },
  "quiz-pyb-mod-1": {
    "id": "quiz-pyb-mod-1",
    "title": "Python for Absolute Beginners — Module 1 Quiz",
    "courseId": "python-beginners",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-pb-1",
        "type": "multiple-choice",
        "question": "Which function outputs text to the standard console screen in Python?",
        "options": [
          "print()",
          "echo()",
          "System.out.println()",
          "console.log()"
        ],
        "correctAnswer": 0,
        "explanation": "Python uses the built-in print() function to output text to standard output."
      }
    ]
  },
  "exam-pyb-final": {
    "id": "exam-pyb-final",
    "title": "Python for Beginners — Final Certification Exam",
    "courseId": "python-beginners",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-pbf-1",
        "type": "multiple-choice",
        "question": "What is the correct syntax for a variable declaration in Python?",
        "options": [
          "x = 10",
          "int x = 10;",
          "var x := 10",
          "let x = 10"
        ],
        "correctAnswer": 0,
        "explanation": "Python uses dynamic typing where assignment `x = 10` declares and binds the variable."
      }
    ]
  },
  "quiz-web-mod-1": {
    "id": "quiz-web-mod-1",
    "title": "Web Development Fundamentals — Module 1 Quiz",
    "courseId": "web-basics",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-wb-1",
        "type": "multiple-choice",
        "question": "Which HTML element contains the visible content of an HTML document?",
        "options": [
          "<body>",
          "<head>",
          "<title>",
          "<meta>"
        ],
        "correctAnswer": 0,
        "explanation": "The <body> element encapsulates all visible UI components and text rendered on screen."
      }
    ]
  },
  "exam-web-final": {
    "id": "exam-web-final",
    "title": "Web Development — Final Certification Exam",
    "courseId": "web-basics",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-wbf-1",
        "type": "multiple-choice",
        "question": "Which CSS property creates a two-dimensional grid layout system?",
        "options": [
          "display: grid",
          "display: flex",
          "position: absolute",
          "float: left"
        ],
        "correctAnswer": 0,
        "explanation": "`display: grid` enables powerful two-dimensional row and column grid layouts in CSS."
      }
    ]
  },
  "quiz-react-mod-1": {
    "id": "quiz-react-mod-1",
    "title": "React 19 Masterclass — Module 1 Quiz",
    "courseId": "react-mastery",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-rm-1",
        "type": "multiple-choice",
        "question": "What hook is used to declare state in a React functional component?",
        "options": [
          "useState()",
          "useEffect()",
          "useRef()",
          "useContext()"
        ],
        "correctAnswer": 0,
        "explanation": "`useState` is the core React hook that holds state and returns a setter function to trigger re-renders."
      }
    ]
  },
  "exam-react-final": {
    "id": "exam-react-final",
    "title": "React 19 Masterclass — Final Certification Exam",
    "courseId": "react-mastery",
    "passingScore": 80,
    "questions": [
      {
        "id": "q-rmf-1",
        "type": "multiple-choice",
        "question": "Why should state never be directly mutated in React?",
        "options": [
          "Direct mutations bypass React reactivity and will not trigger component re-renders",
          "It causes JavaScript to crash immediately",
          "State cannot be changed in React",
          "It converts functional components to class components"
        ],
        "correctAnswer": 0,
        "explanation": "Calling state setter functions informs React of changes so it can calculate Virtual DOM diffs and update the UI."
      }
    ]
  }
};
