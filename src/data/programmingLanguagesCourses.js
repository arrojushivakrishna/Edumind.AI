// 20 Complete Programming Language Courses Database for EduMind.AI
// Covers: C, C++, Java, Python, JavaScript, TypeScript, C#, Go, Rust, PHP, Kotlin, Swift, Ruby, Dart, R, SQL, HTML, CSS, Bash, MATLAB

export const PROGRAMMING_LANGUAGES_COURSES = [
  {
    "id": "c-lang",
    "title": "C Programming: The Master Foundation of Computing",
    "subtitle": "Understand memory, pointers, system calls, and hardware-level execution with the timeless language that built UNIX and Linux.",
    "category": "Systems & Low-Level",
    "difficulty": "Beginner to Intermediate",
    "estimatedHours": 35,
    "rating": 4.98,
    "reviewsCount": 3120,
    "language": "C",
    "icon": "⚡",
    "instructor": {
      "name": "Dr. Dennis Reynolds",
      "role": "Systems & Kernel Developer",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      "bio": "25 years in embedded systems."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic C programs from scratch",
      "Design robust algorithms and data structures using modern C standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified C Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (C) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-c-1",
        "title": "Module 1: Syntax, Variables & Compilation Pipeline",
        "description": "Compilation stages (GCC/Clang), data types, and format specifiers.",
        "quizId": "quiz-c-mod-1",
        "lessons": [
          {
            "id": "les-c-101",
            "title": "Syntax, Variables & Compilation Pipeline Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/KJgsSFOSQv0",
            "transcript": "00:00 Welcome to Module 1: Syntax, Variables & Compilation Pipeline!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "c",
            "starterCode": "#include <stdio.h>\n\nint main() {\n    printf(\"Welcome to C on EduMind.AI!\\n\");\n    int year = 1972;\n    printf(\"C created in %d\\n\", year);\n    return 0;\n}",
            "definition": "C Syntax, Variables & Compilation Pipeline is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C implementation pattern\n#include <stdio.h>\n\nint main() {\n    printf(\"Welcome to C on EduMind.AI!\\n\");",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C routines."
              }
            ],
            "returnVal": "Standard C execution exit status and return data.",
            "examples": [
              {
                "title": "Syntax, Variables & Compilation Pipeline Practical Example",
                "code": "#include <stdio.h>\n\nint main() {\n    printf(\"Welcome to C on EduMind.AI!\\n\");\n    int year = 1972;\n    printf(\"C created in %d\\n\", year);\n    return 0;\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Syntax, Variables & Compilation Pipeline.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C code.",
            "supportNotes": "Fully supported in modern C runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-c-101",
                "title": "C Syntax, Variables & Compilation Pipeline Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-c-102",
                "title": "C Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Syntax, Variables & Compilation Pipeline unlocks advanced problem-solving in C.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-c-2",
        "title": "Module 2: Pointers, Memory Addresses & Pointer Arithmetic",
        "description": "Addresses (&), dereference (*), and pointer arithmetic.",
        "quizId": "quiz-c-mod-2",
        "lessons": [
          {
            "id": "les-c-201",
            "title": "Pointers, Memory Addresses & Pointer Arithmetic Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/8yFqKz3LpBw",
            "transcript": "00:00 Welcome to Module 2: Pointers, Memory Addresses & Pointer Arithmetic!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "c",
            "starterCode": "#include <stdio.h>\n\nint main() {\n    int val = 42;\n    int *p = &val;\n    *p = 100;\n    printf(\"Val via pointer: %d\\n\", val);\n    return 0;\n}",
            "definition": "C Pointers, Memory Addresses & Pointer Arithmetic is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C implementation pattern\n#include <stdio.h>\n\nint main() {\n    int val = 42;",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C routines."
              }
            ],
            "returnVal": "Standard C execution exit status and return data.",
            "examples": [
              {
                "title": "Pointers, Memory Addresses & Pointer Arithmetic Practical Example",
                "code": "#include <stdio.h>\n\nint main() {\n    int val = 42;\n    int *p = &val;\n    *p = 100;\n    printf(\"Val via pointer: %d\\n\", val);\n    return 0;\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Pointers, Memory Addresses & Pointer Arithmetic.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C code.",
            "supportNotes": "Fully supported in modern C runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-c-201",
                "title": "C Pointers, Memory Addresses & Pointer Arithmetic Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-c-202",
                "title": "C Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Pointers, Memory Addresses & Pointer Arithmetic unlocks advanced problem-solving in C.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-c-3",
        "title": "Module 3: Structs, Dynamic Memory (malloc/free) & File I/O",
        "description": "Custom structs, heap allocation, and file operations.",
        "quizId": "quiz-c-mod-3",
        "lessons": [
          {
            "id": "les-c-301",
            "title": "Structs, Dynamic Memory (malloc/free) & File I/O Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/87SH2Cn0s9A",
            "transcript": "00:00 Welcome to Module 3: Structs, Dynamic Memory (malloc/free) & File I/O!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "c",
            "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Item { int id; float price; };\nint main() {\n    struct Item *it = (struct Item*)malloc(sizeof(struct Item));\n    it->id = 1; it->price = 49.99f;\n    printf(\"Item %d: $%.2f\\n\", it->id, it->price);\n    free(it);\n    return 0;\n}",
            "definition": "C Structs, Dynamic Memory (malloc/free) & File I/O is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C implementation pattern\n#include <stdio.h>\n#include <stdlib.h>\n\nstruct Item { int id; float price; };",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C routines."
              }
            ],
            "returnVal": "Standard C execution exit status and return data.",
            "examples": [
              {
                "title": "Structs, Dynamic Memory (malloc/free) & File I/O Practical Example",
                "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Item { int id; float price; };\nint main() {\n    struct Item *it = (struct Item*)malloc(sizeof(struct Item));\n    it->id = 1; it->price = 49.99f;\n    printf(\"Item %d: $%.2f\\n\", it->id, it->price);\n    free(it);\n    return 0;\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Structs, Dynamic Memory (malloc/free) & File I/O.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C code.",
            "supportNotes": "Fully supported in modern C runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-c-301",
                "title": "C Structs, Dynamic Memory (malloc/free) & File I/O Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-c-302",
                "title": "C Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Structs, Dynamic Memory (malloc/free) & File I/O unlocks advanced problem-solving in C.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-c-final",
    "glossary": [
      {
        "term": "C Runtime",
        "definition": "The execution environment that executes compiled or interpreted C instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "cpp-lang",
    "title": "C++ Masterclass: High-Performance Systems & Modern C++20",
    "subtitle": "Master object-oriented programming, RAII, smart pointers, templates, and the STL for games and high-frequency trading.",
    "category": "Systems & Game Dev",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 45,
    "rating": 4.97,
    "reviewsCount": 2890,
    "language": "C++",
    "icon": "🚀",
    "instructor": {
      "name": "Marcus Vance",
      "role": "Principal Graphics & Engine Architect",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      "bio": "Former AAA game engine developer."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic C++ programs from scratch",
      "Design robust algorithms and data structures using modern C++ standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified C++ Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (C++) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-cpp-1",
        "title": "Module 1: Modern C++ Syntax & STL std::vector",
        "description": "Namespaces, streams, auto type deduction, and dynamic vectors.",
        "quizId": "quiz-cpp-mod-1",
        "lessons": [
          {
            "id": "les-cpp-101",
            "title": "Modern C++ Syntax & STL std::vector Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/vLnPwxZdW4Y",
            "transcript": "00:00 Welcome to Module 1: Modern C++ Syntax & STL std::vector!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C++.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "cpp",
            "starterCode": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> scores = {95, 88, 76};\n    scores.push_back(100);\n    for (auto s : scores) std::cout << \"Score: \" << s << \"\\n\";\n    return 0;\n}",
            "definition": "C++ Modern C++ Syntax & STL std::vector is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C++ implementation pattern\n#include <iostream>\n#include <vector>\n\nint main() {",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C++ routines."
              }
            ],
            "returnVal": "Standard C++ execution exit status and return data.",
            "examples": [
              {
                "title": "Modern C++ Syntax & STL std::vector Practical Example",
                "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> scores = {95, 88, 76};\n    scores.push_back(100);\n    for (auto s : scores) std::cout << \"Score: \" << s << \"\\n\";\n    return 0;\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Modern C++ Syntax & STL std::vector.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C++ code.",
            "supportNotes": "Fully supported in modern C++ runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-cpp-101",
                "title": "C++ Modern C++ Syntax & STL std::vector Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-cpp-102",
                "title": "C++ Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Modern C++ Syntax & STL std::vector unlocks advanced problem-solving in C++.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-cpp-2",
        "title": "Module 2: Object-Oriented C++, Classes & RAII",
        "description": "Classes, constructors, destructors, and resource cleanup.",
        "quizId": "quiz-cpp-mod-2",
        "lessons": [
          {
            "id": "les-cpp-201",
            "title": "Object-Oriented C++, Classes & RAII Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/1v_4dL8280g",
            "transcript": "00:00 Welcome to Module 2: Object-Oriented C++, Classes & RAII!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C++.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "cpp",
            "starterCode": "#include <iostream>\n\nclass Entity {\npublic:\n    Entity() { std::cout << \"Created\\n\"; }\n    ~Entity() { std::cout << \"Destroyed (RAII)\\n\"; }\n};\nint main() { Entity e; return 0; }",
            "definition": "C++ Object-Oriented C++, Classes & RAII is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C++ implementation pattern\n#include <iostream>\n\nclass Entity {\npublic:",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C++ routines."
              }
            ],
            "returnVal": "Standard C++ execution exit status and return data.",
            "examples": [
              {
                "title": "Object-Oriented C++, Classes & RAII Practical Example",
                "code": "#include <iostream>\n\nclass Entity {\npublic:\n    Entity() { std::cout << \"Created\\n\"; }\n    ~Entity() { std::cout << \"Destroyed (RAII)\\n\"; }\n};\nint main() { Entity e; return 0; }",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Object-Oriented C++, Classes & RAII.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C++ code.",
            "supportNotes": "Fully supported in modern C++ runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-cpp-201",
                "title": "C++ Object-Oriented C++, Classes & RAII Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-cpp-202",
                "title": "C++ Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Object-Oriented C++, Classes & RAII unlocks advanced problem-solving in C++.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-cpp-3",
        "title": "Module 3: Smart Pointers (unique_ptr), Templates & Concurrency",
        "description": "Smart pointers, generic templates, and multi-threading.",
        "quizId": "quiz-cpp-mod-3",
        "lessons": [
          {
            "id": "les-cpp-301",
            "title": "Smart Pointers (unique_ptr), Templates & Concurrency Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/8jLOx1hD3_o",
            "transcript": "00:00 Welcome to Module 3: Smart Pointers (unique_ptr), Templates & Concurrency!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C++.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "cpp",
            "starterCode": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto ptr = std::make_unique<int>(42);\n    std::cout << \"Smart pointer val: \" << *ptr << \"\\n\";\n    return 0;\n}",
            "definition": "C++ Smart Pointers (unique_ptr), Templates & Concurrency is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C++ implementation pattern\n#include <iostream>\n#include <memory>\n\nint main() {",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C++ routines."
              }
            ],
            "returnVal": "Standard C++ execution exit status and return data.",
            "examples": [
              {
                "title": "Smart Pointers (unique_ptr), Templates & Concurrency Practical Example",
                "code": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto ptr = std::make_unique<int>(42);\n    std::cout << \"Smart pointer val: \" << *ptr << \"\\n\";\n    return 0;\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Smart Pointers (unique_ptr), Templates & Concurrency.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C++ code.",
            "supportNotes": "Fully supported in modern C++ runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-cpp-301",
                "title": "C++ Smart Pointers (unique_ptr), Templates & Concurrency Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-cpp-302",
                "title": "C++ Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Smart Pointers (unique_ptr), Templates & Concurrency unlocks advanced problem-solving in C++.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-cpp-final",
    "glossary": [
      {
        "term": "C++ Runtime",
        "definition": "The execution environment that executes compiled or interpreted C++ instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "java-lang",
    "title": "Java 21 Masterclass: Enterprise Cloud Architecture",
    "subtitle": "Master modern Java 21, Virtual Threads (Project Loom), OOP, Spring Boot microservices, and JVM performance tuning.",
    "category": "Enterprise Engineering",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 48,
    "rating": 4.95,
    "reviewsCount": 1180,
    "language": "Java",
    "icon": "☕",
    "instructor": {
      "name": "Christian Meyer",
      "role": "Principal Java Champion",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      "bio": "20+ years building high-throughput Java systems."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Java programs from scratch",
      "Design robust algorithms and data structures using modern Java standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Java Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Java) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-java-1",
        "title": "Module 1: Java 21 Syntax, JVM & Entry Point",
        "description": "Bytecode, JVM architecture, types, and the main() method.",
        "quizId": "quiz-java-mod-1",
        "lessons": [
          {
            "id": "les-java-101",
            "title": "Java 21 Syntax, JVM & Entry Point Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/grEKMHGYyns",
            "transcript": "00:00 Welcome to Module 1: Java 21 Syntax, JVM & Entry Point!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Java.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "java",
            "starterCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Java 21 Active on EduMind.AI!\");\n    }\n}",
            "definition": "Java Java 21 Syntax, JVM & Entry Point is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Java implementation pattern\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Java 21 Active on EduMind.AI!\");\n    }",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Java routines."
              }
            ],
            "returnVal": "Standard Java execution exit status and return data.",
            "examples": [
              {
                "title": "Java 21 Syntax, JVM & Entry Point Practical Example",
                "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Java 21 Active on EduMind.AI!\");\n    }\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Java 21 Syntax, JVM & Entry Point.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Java code.",
            "supportNotes": "Fully supported in modern Java runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-java-101",
                "title": "Java Java 21 Syntax, JVM & Entry Point Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-java-102",
                "title": "Java Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Java 21 Syntax, JVM & Entry Point unlocks advanced problem-solving in Java.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-java-2",
        "title": "Module 2: OOP Inheritance, Interfaces & Polymorphism",
        "description": "Abstract classes, interfaces, method overriding, and polymorphism.",
        "quizId": "quiz-java-mod-2",
        "lessons": [
          {
            "id": "les-java-201",
            "title": "OOP Inheritance, Interfaces & Polymorphism Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/xk4_1vDrzzo",
            "transcript": "00:00 Welcome to Module 2: OOP Inheritance, Interfaces & Polymorphism!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Java.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "java",
            "starterCode": "interface Greeter { void greet(); }\nclass Bot implements Greeter {\n    public void greet() { System.out.println(\"Hello from Java Bot!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Greeter g = new Bot(); g.greet();\n    }\n}",
            "definition": "Java OOP Inheritance, Interfaces & Polymorphism is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Java implementation pattern\ninterface Greeter { void greet(); }\nclass Bot implements Greeter {\n    public void greet() { System.out.println(\"Hello from Java Bot!\"); }\n}",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Java routines."
              }
            ],
            "returnVal": "Standard Java execution exit status and return data.",
            "examples": [
              {
                "title": "OOP Inheritance, Interfaces & Polymorphism Practical Example",
                "code": "interface Greeter { void greet(); }\nclass Bot implements Greeter {\n    public void greet() { System.out.println(\"Hello from Java Bot!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Greeter g = new Bot(); g.greet();\n    }\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: OOP Inheritance, Interfaces & Polymorphism.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Java code.",
            "supportNotes": "Fully supported in modern Java runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-java-201",
                "title": "Java OOP Inheritance, Interfaces & Polymorphism Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-java-202",
                "title": "Java Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering OOP Inheritance, Interfaces & Polymorphism unlocks advanced problem-solving in Java.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-java-3",
        "title": "Module 3: Collections Framework, Streams API & Virtual Threads",
        "description": "HashMap, ArrayList, functional Streams, and lightweight Virtual Threads.",
        "quizId": "quiz-java-mod-3",
        "lessons": [
          {
            "id": "les-java-301",
            "title": "Collections Framework, Streams API & Virtual Threads Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/eIrMbAQSU34",
            "transcript": "00:00 Welcome to Module 3: Collections Framework, Streams API & Virtual Threads!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Java.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "java",
            "starterCode": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList(\"Java\", \"Kotlin\", \"Scala\");\n        list.stream().map(String::toUpperCase).forEach(System.out::println);\n    }\n}",
            "definition": "Java Collections Framework, Streams API & Virtual Threads is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Java implementation pattern\nimport java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Java routines."
              }
            ],
            "returnVal": "Standard Java execution exit status and return data.",
            "examples": [
              {
                "title": "Collections Framework, Streams API & Virtual Threads Practical Example",
                "code": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList(\"Java\", \"Kotlin\", \"Scala\");\n        list.stream().map(String::toUpperCase).forEach(System.out::println);\n    }\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Collections Framework, Streams API & Virtual Threads.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Java code.",
            "supportNotes": "Fully supported in modern Java runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-java-301",
                "title": "Java Collections Framework, Streams API & Virtual Threads Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-java-302",
                "title": "Java Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Collections Framework, Streams API & Virtual Threads unlocks advanced problem-solving in Java.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-java-final",
    "glossary": [
      {
        "term": "Java Runtime",
        "definition": "The execution environment that executes compiled or interpreted Java instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "python-lang",
    "title": "Python Mastery: Zero to Data Science & Web Engineering",
    "subtitle": "Master modern Python 3.12, OOP, decorators, asynchronous async/await, REST APIs, and data science pipelines.",
    "category": "Full-Stack & Data",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 42,
    "rating": 4.99,
    "reviewsCount": 4500,
    "language": "Python",
    "icon": "🐍",
    "instructor": {
      "name": "Dr. Sarah Chen",
      "role": "Python Lead Educator",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "bio": "Taught over 200,000 students worldwide."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Python programs from scratch",
      "Design robust algorithms and data structures using modern Python standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Python Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Python) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-python-1",
        "title": "Module 1: Python Fundamentals, Data Types & Control Flow",
        "description": "Variables, dynamic typing, f-strings, conditionals, and loops.",
        "quizId": "quiz-python-mod-1",
        "lessons": [
          {
            "id": "les-python-101",
            "title": "Python Fundamentals, Data Types & Control Flow Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/rfscVS0vtbw",
            "transcript": "00:00 Welcome to Module 1: Python Fundamentals, Data Types & Control Flow!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Python.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "python",
            "starterCode": "user = \"Elena\"\nprint(f\"Welcome {user} to Python 3.12 on EduMind.AI!\")",
            "definition": "Python Python Fundamentals, Data Types & Control Flow is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Python implementation pattern\nuser = \"Elena\"\nprint(f\"Welcome {user} to Python 3.12 on EduMind.AI!\")",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Python routines."
              }
            ],
            "returnVal": "Standard Python execution exit status and return data.",
            "examples": [
              {
                "title": "Python Fundamentals, Data Types & Control Flow Practical Example",
                "code": "user = \"Elena\"\nprint(f\"Welcome {user} to Python 3.12 on EduMind.AI!\")",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Python Fundamentals, Data Types & Control Flow.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Python code.",
            "supportNotes": "Fully supported in modern Python runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-python-101",
                "title": "Python Python Fundamentals, Data Types & Control Flow Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-python-102",
                "title": "Python Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Python Fundamentals, Data Types & Control Flow unlocks advanced problem-solving in Python.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-python-2",
        "title": "Module 2: Data Structures, Comprehensions & Lambdas",
        "description": "Lists, Dictionaries, Sets, and list/dict comprehensions.",
        "quizId": "quiz-python-mod-2",
        "lessons": [
          {
            "id": "les-python-201",
            "title": "Data Structures, Comprehensions & Lambdas Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/_uQrJ0TkZlc",
            "transcript": "00:00 Welcome to Module 2: Data Structures, Comprehensions & Lambdas!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Python.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "python",
            "starterCode": "nums = [1, 2, 3, 4, 5, 6]\neven_squares = [x**2 for x in nums if x % 2 == 0]\nprint(\"Even Squares:\", even_squares)",
            "definition": "Python Data Structures, Comprehensions & Lambdas is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Python implementation pattern\nnums = [1, 2, 3, 4, 5, 6]\neven_squares = [x**2 for x in nums if x % 2 == 0]\nprint(\"Even Squares:\", even_squares)",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Python routines."
              }
            ],
            "returnVal": "Standard Python execution exit status and return data.",
            "examples": [
              {
                "title": "Data Structures, Comprehensions & Lambdas Practical Example",
                "code": "nums = [1, 2, 3, 4, 5, 6]\neven_squares = [x**2 for x in nums if x % 2 == 0]\nprint(\"Even Squares:\", even_squares)",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Data Structures, Comprehensions & Lambdas.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Python code.",
            "supportNotes": "Fully supported in modern Python runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-python-201",
                "title": "Python Data Structures, Comprehensions & Lambdas Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-python-202",
                "title": "Python Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Data Structures, Comprehensions & Lambdas unlocks advanced problem-solving in Python.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-python-3",
        "title": "Module 3: OOP Classes, Decorators, Generators & Asyncio",
        "description": "Pythonic classes, custom decorators, generators, and async I/O.",
        "quizId": "quiz-python-mod-3",
        "lessons": [
          {
            "id": "les-python-301",
            "title": "OOP Classes, Decorators, Generators & Asyncio Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/nLRL_NcnK-4",
            "transcript": "00:00 Welcome to Module 3: OOP Classes, Decorators, Generators & Asyncio!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Python.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "python",
            "starterCode": "def logger(fn):\n    def wrapper(*args):\n        print(f\"Calling {fn.__name__}...\")\n        return fn(*args)\n    return wrapper\n\n@logger\ndef multiply(a, b): return a * b\nprint(\"Result:\", multiply(6, 7))",
            "definition": "Python OOP Classes, Decorators, Generators & Asyncio is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Python implementation pattern\ndef logger(fn):\n    def wrapper(*args):\n        print(f\"Calling {fn.__name__}...\")\n        return fn(*args)",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Python routines."
              }
            ],
            "returnVal": "Standard Python execution exit status and return data.",
            "examples": [
              {
                "title": "OOP Classes, Decorators, Generators & Asyncio Practical Example",
                "code": "def logger(fn):\n    def wrapper(*args):\n        print(f\"Calling {fn.__name__}...\")\n        return fn(*args)\n    return wrapper\n\n@logger\ndef multiply(a, b): return a * b\nprint(\"Result:\", multiply(6, 7))",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: OOP Classes, Decorators, Generators & Asyncio.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Python code.",
            "supportNotes": "Fully supported in modern Python runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-python-301",
                "title": "Python OOP Classes, Decorators, Generators & Asyncio Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-python-302",
                "title": "Python Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering OOP Classes, Decorators, Generators & Asyncio unlocks advanced problem-solving in Python.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-python-final",
    "glossary": [
      {
        "term": "Python Runtime",
        "definition": "The execution environment that executes compiled or interpreted Python instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "javascript-lang",
    "title": "Modern JavaScript & Full-Stack Node.js Masterclass",
    "subtitle": "Master ES2024+, asynchronous Event Loop, Promises, Async/Await, Web APIs, and Node.js backend development.",
    "category": "Web & Full-Stack",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 40,
    "rating": 4.96,
    "reviewsCount": 3750,
    "language": "JavaScript",
    "icon": "🌐",
    "instructor": {
      "name": "Alex Rivera",
      "role": "Staff Frontend Architect",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "bio": "12+ years in web development."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic JavaScript programs from scratch",
      "Design robust algorithms and data structures using modern JavaScript standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified JavaScript Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (JavaScript) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-javascript-1",
        "title": "Module 1: JavaScript Fundamentals, Scope & ES6+",
        "description": "let/const, arrow functions, destructuring, and array methods.",
        "quizId": "quiz-javascript-mod-1",
        "lessons": [
          {
            "id": "les-javascript-101",
            "title": "JavaScript Fundamentals, Scope & ES6+ Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/PkZNo7MFNFg",
            "transcript": "00:00 Welcome to Module 1: JavaScript Fundamentals, Scope & ES6+!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for JavaScript.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "javascript",
            "starterCode": "const user = { name: \"Elena\", role: \"Architect\" };\nconst { name, role } = user;\nconsole.log(`Engineer: ${name} (${role})`);",
            "definition": "JavaScript JavaScript Fundamentals, Scope & ES6+ is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard JavaScript implementation pattern\nconst user = { name: \"Elena\", role: \"Architect\" };\nconst { name, role } = user;\nconsole.log(`Engineer: ${name} (${role})`);",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for JavaScript routines."
              }
            ],
            "returnVal": "Standard JavaScript execution exit status and return data.",
            "examples": [
              {
                "title": "JavaScript Fundamentals, Scope & ES6+ Practical Example",
                "code": "const user = { name: \"Elena\", role: \"Architect\" };\nconst { name, role } = user;\nconsole.log(`Engineer: ${name} (${role})`);",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: JavaScript Fundamentals, Scope & ES6+.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing JavaScript code.",
            "supportNotes": "Fully supported in modern JavaScript runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-javascript-101",
                "title": "JavaScript JavaScript Fundamentals, Scope & ES6+ Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-javascript-102",
                "title": "JavaScript Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering JavaScript Fundamentals, Scope & ES6+ unlocks advanced problem-solving in JavaScript.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-javascript-2",
        "title": "Module 2: Asynchronous JS, Promises & Async/Await",
        "description": "Event loop, Promises, async/await, and non-blocking I/O.",
        "quizId": "quiz-javascript-mod-2",
        "lessons": [
          {
            "id": "les-javascript-201",
            "title": "Asynchronous JS, Promises & Async/Await Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/W6NZfCO5SIk",
            "transcript": "00:00 Welcome to Module 2: Asynchronous JS, Promises & Async/Await!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for JavaScript.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "javascript",
            "starterCode": "async function fetchStatus() {\n  const res = await Promise.resolve({ ok: true });\n  console.log(\"Status resolved:\", res.ok);\n}\nfetchStatus();",
            "definition": "JavaScript Asynchronous JS, Promises & Async/Await is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard JavaScript implementation pattern\nasync function fetchStatus() {\n  const res = await Promise.resolve({ ok: true });\n  console.log(\"Status resolved:\", res.ok);\n}",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for JavaScript routines."
              }
            ],
            "returnVal": "Standard JavaScript execution exit status and return data.",
            "examples": [
              {
                "title": "Asynchronous JS, Promises & Async/Await Practical Example",
                "code": "async function fetchStatus() {\n  const res = await Promise.resolve({ ok: true });\n  console.log(\"Status resolved:\", res.ok);\n}\nfetchStatus();",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Asynchronous JS, Promises & Async/Await.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing JavaScript code.",
            "supportNotes": "Fully supported in modern JavaScript runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-javascript-201",
                "title": "JavaScript Asynchronous JS, Promises & Async/Await Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-javascript-202",
                "title": "JavaScript Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Asynchronous JS, Promises & Async/Await unlocks advanced problem-solving in JavaScript.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-javascript-3",
        "title": "Module 3: Closures, Prototypal Inheritance & Modules",
        "description": "Lexical scope, closures, prototype chain, and ES Modules.",
        "quizId": "quiz-javascript-mod-3",
        "lessons": [
          {
            "id": "les-javascript-301",
            "title": "Closures, Prototypal Inheritance & Modules Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/EerdGm-ehJQ",
            "transcript": "00:00 Welcome to Module 3: Closures, Prototypal Inheritance & Modules!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for JavaScript.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "javascript",
            "starterCode": "function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = counter();\nconsole.log(c(), c(), c());",
            "definition": "JavaScript Closures, Prototypal Inheritance & Modules is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard JavaScript implementation pattern\nfunction counter() {\n  let count = 0;\n  return () => ++count;\n}",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for JavaScript routines."
              }
            ],
            "returnVal": "Standard JavaScript execution exit status and return data.",
            "examples": [
              {
                "title": "Closures, Prototypal Inheritance & Modules Practical Example",
                "code": "function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = counter();\nconsole.log(c(), c(), c());",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Closures, Prototypal Inheritance & Modules.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing JavaScript code.",
            "supportNotes": "Fully supported in modern JavaScript runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-javascript-301",
                "title": "JavaScript Closures, Prototypal Inheritance & Modules Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-javascript-302",
                "title": "JavaScript Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Closures, Prototypal Inheritance & Modules unlocks advanced problem-solving in JavaScript.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-javascript-final",
    "glossary": [
      {
        "term": "JavaScript Runtime",
        "definition": "The execution environment that executes compiled or interpreted JavaScript instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "typescript-lang",
    "title": "TypeScript Masterclass: Type Systems & Scalable Architecture",
    "subtitle": "Master static typing, generics, union/intersection types, keyof, conditional types, and enterprise architecture.",
    "category": "Web & Full-Stack",
    "difficulty": "Intermediate to Advanced",
    "estimatedHours": 38,
    "rating": 4.97,
    "reviewsCount": 2450,
    "language": "TypeScript",
    "icon": "🔷",
    "instructor": {
      "name": "Elena Rostova",
      "role": "Principal Systems Architect",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "bio": "Compiler engineer and author."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic TypeScript programs from scratch",
      "Design robust algorithms and data structures using modern TypeScript standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified TypeScript Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (TypeScript) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-typescript-1",
        "title": "Module 1: Static Types, Interfaces & Type Aliases",
        "description": "Strict types, interfaces, optional fields, and type annotations.",
        "quizId": "quiz-typescript-mod-1",
        "lessons": [
          {
            "id": "les-typescript-101",
            "title": "Static Types, Interfaces & Type Aliases Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/BwuLxPH8IDs",
            "transcript": "00:00 Welcome to Module 1: Static Types, Interfaces & Type Aliases!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for TypeScript.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "typescript",
            "starterCode": "interface Student { id: number; name: string; }\nconst s: Student = { id: 101, name: \"Elena\" };\nconsole.log(`Student ${s.name} (${s.id})`);",
            "definition": "TypeScript Static Types, Interfaces & Type Aliases is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard TypeScript implementation pattern\ninterface Student { id: number; name: string; }\nconst s: Student = { id: 101, name: \"Elena\" };\nconsole.log(`Student ${s.name} (${s.id})`);",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for TypeScript routines."
              }
            ],
            "returnVal": "Standard TypeScript execution exit status and return data.",
            "examples": [
              {
                "title": "Static Types, Interfaces & Type Aliases Practical Example",
                "code": "interface Student { id: number; name: string; }\nconst s: Student = { id: 101, name: \"Elena\" };\nconsole.log(`Student ${s.name} (${s.id})`);",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Static Types, Interfaces & Type Aliases.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing TypeScript code.",
            "supportNotes": "Fully supported in modern TypeScript runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-typescript-101",
                "title": "TypeScript Static Types, Interfaces & Type Aliases Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-typescript-102",
                "title": "TypeScript Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Static Types, Interfaces & Type Aliases unlocks advanced problem-solving in TypeScript.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-typescript-2",
        "title": "Module 2: Generics, Unions & Type Narrowing",
        "description": "Generic functions/classes, discriminated unions, and type guards.",
        "quizId": "quiz-typescript-mod-2",
        "lessons": [
          {
            "id": "les-typescript-201",
            "title": "Generics, Unions & Type Narrowing Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/d56mG7DezGs",
            "transcript": "00:00 Welcome to Module 2: Generics, Unions & Type Narrowing!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for TypeScript.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "typescript",
            "starterCode": "function wrap<T>(item: T): T[] { return [item]; }\nconsole.log(wrap<string>(\"TypeScript\"));\nconsole.log(wrap<number>(42));",
            "definition": "TypeScript Generics, Unions & Type Narrowing is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard TypeScript implementation pattern\nfunction wrap<T>(item: T): T[] { return [item]; }\nconsole.log(wrap<string>(\"TypeScript\"));\nconsole.log(wrap<number>(42));",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for TypeScript routines."
              }
            ],
            "returnVal": "Standard TypeScript execution exit status and return data.",
            "examples": [
              {
                "title": "Generics, Unions & Type Narrowing Practical Example",
                "code": "function wrap<T>(item: T): T[] { return [item]; }\nconsole.log(wrap<string>(\"TypeScript\"));\nconsole.log(wrap<number>(42));",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Generics, Unions & Type Narrowing.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing TypeScript code.",
            "supportNotes": "Fully supported in modern TypeScript runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-typescript-201",
                "title": "TypeScript Generics, Unions & Type Narrowing Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-typescript-202",
                "title": "TypeScript Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Generics, Unions & Type Narrowing unlocks advanced problem-solving in TypeScript.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-typescript-3",
        "title": "Module 3: Utility Types (Partial, Pick) & Mapped Types",
        "description": "Partial, Readonly, Record, Pick, Omit, and conditional types.",
        "quizId": "quiz-typescript-mod-3",
        "lessons": [
          {
            "id": "les-typescript-301",
            "title": "Utility Types (Partial, Pick) & Mapped Types Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/zQnBQ4tB3ZA",
            "transcript": "00:00 Welcome to Module 3: Utility Types (Partial, Pick) & Mapped Types!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for TypeScript.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "typescript",
            "starterCode": "interface User { id: number; name: string; email: string; }\ntype Patch = Partial<User>;\nconst update: Patch = { name: \"New Name\" };\nconsole.log(update);",
            "definition": "TypeScript Utility Types (Partial, Pick) & Mapped Types is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard TypeScript implementation pattern\ninterface User { id: number; name: string; email: string; }\ntype Patch = Partial<User>;\nconst update: Patch = { name: \"New Name\" };\nconsole.log(update);",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for TypeScript routines."
              }
            ],
            "returnVal": "Standard TypeScript execution exit status and return data.",
            "examples": [
              {
                "title": "Utility Types (Partial, Pick) & Mapped Types Practical Example",
                "code": "interface User { id: number; name: string; email: string; }\ntype Patch = Partial<User>;\nconst update: Patch = { name: \"New Name\" };\nconsole.log(update);",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Utility Types (Partial, Pick) & Mapped Types.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing TypeScript code.",
            "supportNotes": "Fully supported in modern TypeScript runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-typescript-301",
                "title": "TypeScript Utility Types (Partial, Pick) & Mapped Types Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-typescript-302",
                "title": "TypeScript Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Utility Types (Partial, Pick) & Mapped Types unlocks advanced problem-solving in TypeScript.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-typescript-final",
    "glossary": [
      {
        "term": "TypeScript Runtime",
        "definition": "The execution environment that executes compiled or interpreted TypeScript instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "csharp-lang",
    "title": "C# Masterclass: Modern .NET 8 & Enterprise Architecture",
    "subtitle": "Master C# 12, .NET 8, LINQ, Entity Framework Core, asynchronous Tasks, records, and dependency injection.",
    "category": "Enterprise Engineering",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 44,
    "rating": 4.96,
    "reviewsCount": 2100,
    "language": "C#",
    "icon": "💜",
    "instructor": {
      "name": "David Miller",
      "role": "Microsoft MVP",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      "bio": "20+ years in .NET enterprise architectures."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic C# programs from scratch",
      "Design robust algorithms and data structures using modern C# standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified C# Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (C#) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-csharp-1",
        "title": "Module 1: C# 12 Core Syntax & Control Flow",
        "description": "Types, methods, top-level statements, and namespaces in C#.",
        "quizId": "quiz-csharp-mod-1",
        "lessons": [
          {
            "id": "les-csharp-101",
            "title": "C# 12 Core Syntax & Control Flow Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/GhQdlIFylQ8",
            "transcript": "00:00 Welcome to Module 1: C# 12 Core Syntax & Control Flow!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C#.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "csharp",
            "starterCode": "using System;\npublic class Program {\n    public static void Main() {\n        Console.WriteLine(\"C# 12 & .NET 8 Running!\");\n    }\n}",
            "definition": "C# C# 12 Core Syntax & Control Flow is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C# implementation pattern\nusing System;\npublic class Program {\n    public static void Main() {\n        Console.WriteLine(\"C# 12 & .NET 8 Running!\");",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C# routines."
              }
            ],
            "returnVal": "Standard C# execution exit status and return data.",
            "examples": [
              {
                "title": "C# 12 Core Syntax & Control Flow Practical Example",
                "code": "using System;\npublic class Program {\n    public static void Main() {\n        Console.WriteLine(\"C# 12 & .NET 8 Running!\");\n    }\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: C# 12 Core Syntax & Control Flow.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C# code.",
            "supportNotes": "Fully supported in modern C# runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-csharp-101",
                "title": "C# C# 12 Core Syntax & Control Flow Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-csharp-102",
                "title": "C# Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering C# 12 Core Syntax & Control Flow unlocks advanced problem-solving in C#.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-csharp-2",
        "title": "Module 2: LINQ Queries, Collections & Records",
        "description": "LINQ query syntax, IEnumerable, lambda filters, and records.",
        "quizId": "quiz-csharp-mod-2",
        "lessons": [
          {
            "id": "les-csharp-201",
            "title": "LINQ Queries, Collections & Records Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/wxznTygnRfQ",
            "transcript": "00:00 Welcome to Module 2: LINQ Queries, Collections & Records!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C#.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "csharp",
            "starterCode": "using System;\nusing System.Linq;\npublic class Program {\n    public static void Main() {\n        int[] nums = { 1, 2, 3, 4, 5, 6 };\n        Console.WriteLine(\"Evens: \" + string.Join(\", \", nums.Where(n => n % 2 == 0)));\n    }\n}",
            "definition": "C# LINQ Queries, Collections & Records is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C# implementation pattern\nusing System;\nusing System.Linq;\npublic class Program {\n    public static void Main() {",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C# routines."
              }
            ],
            "returnVal": "Standard C# execution exit status and return data.",
            "examples": [
              {
                "title": "LINQ Queries, Collections & Records Practical Example",
                "code": "using System;\nusing System.Linq;\npublic class Program {\n    public static void Main() {\n        int[] nums = { 1, 2, 3, 4, 5, 6 };\n        Console.WriteLine(\"Evens: \" + string.Join(\", \", nums.Where(n => n % 2 == 0)));\n    }\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: LINQ Queries, Collections & Records.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C# code.",
            "supportNotes": "Fully supported in modern C# runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-csharp-201",
                "title": "C# LINQ Queries, Collections & Records Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-csharp-202",
                "title": "C# Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering LINQ Queries, Collections & Records unlocks advanced problem-solving in C#.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-csharp-3",
        "title": "Module 3: Asynchronous Tasks (async/await) & .NET 8 API",
        "description": "Tasks, async/await pipelines, and cloud microservice patterns.",
        "quizId": "quiz-csharp-mod-3",
        "lessons": [
          {
            "id": "les-csharp-301",
            "title": "Asynchronous Tasks (async/await) & .NET 8 API Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/0QUgvfuKvWU",
            "transcript": "00:00 Welcome to Module 3: Asynchronous Tasks (async/await) & .NET 8 API!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for C#.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "csharp",
            "starterCode": "using System;\nusing System.Threading.Tasks;\npublic class Program {\n    public static async Task Main() {\n        await Task.Delay(10);\n        Console.WriteLine(\"Async Task complete in .NET 8\");\n    }\n}",
            "definition": "C# Asynchronous Tasks (async/await) & .NET 8 API is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard C# implementation pattern\nusing System;\nusing System.Threading.Tasks;\npublic class Program {\n    public static async Task Main() {",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for C# routines."
              }
            ],
            "returnVal": "Standard C# execution exit status and return data.",
            "examples": [
              {
                "title": "Asynchronous Tasks (async/await) & .NET 8 API Practical Example",
                "code": "using System;\nusing System.Threading.Tasks;\npublic class Program {\n    public static async Task Main() {\n        await Task.Delay(10);\n        Console.WriteLine(\"Async Task complete in .NET 8\");\n    }\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Asynchronous Tasks (async/await) & .NET 8 API.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing C# code.",
            "supportNotes": "Fully supported in modern C# runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-csharp-301",
                "title": "C# Asynchronous Tasks (async/await) & .NET 8 API Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-csharp-302",
                "title": "C# Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Asynchronous Tasks (async/await) & .NET 8 API unlocks advanced problem-solving in C#.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-csharp-final",
    "glossary": [
      {
        "term": "C# Runtime",
        "definition": "The execution environment that executes compiled or interpreted C# instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "golang-lang",
    "title": "Go (Golang) Masterclass: High-Throughput Cloud Microservices",
    "subtitle": "Master Go 1.22, Goroutines, Channels, CSP concurrency, HTTP microservices, and high-performance backend architecture.",
    "category": "Systems & Backend",
    "difficulty": "Beginner to Intermediate",
    "estimatedHours": 36,
    "rating": 4.98,
    "reviewsCount": 3100,
    "language": "Go",
    "icon": "🦫",
    "instructor": {
      "name": "Klaus Richter",
      "role": "Principal Systems Engineer",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      "bio": "Building distributed infrastructure in Go."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Go programs from scratch",
      "Design robust algorithms and data structures using modern Go standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Go Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Go) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-golang-1",
        "title": "Module 1: Go Syntax, Packages, Structs & Pointers",
        "description": "Packages, structs, receiver methods, and explicit error handling.",
        "quizId": "quiz-golang-mod-1",
        "lessons": [
          {
            "id": "les-golang-101",
            "title": "Go Syntax, Packages, Structs & Pointers Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/YS4e4q9oBaU",
            "transcript": "00:00 Welcome to Module 1: Go Syntax, Packages, Structs & Pointers!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Go.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "go",
            "starterCode": "package main\nimport \"fmt\"\ntype Server struct { Host string; Port int }\nfunc main() {\n    s := Server{\"localhost\", 8080}\n    fmt.Printf(\"Server on %s:%d\\n\", s.Host, s.Port)\n}",
            "definition": "Go Go Syntax, Packages, Structs & Pointers is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Go implementation pattern\npackage main\nimport \"fmt\"\ntype Server struct { Host string; Port int }\nfunc main() {",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Go routines."
              }
            ],
            "returnVal": "Standard Go execution exit status and return data.",
            "examples": [
              {
                "title": "Go Syntax, Packages, Structs & Pointers Practical Example",
                "code": "package main\nimport \"fmt\"\ntype Server struct { Host string; Port int }\nfunc main() {\n    s := Server{\"localhost\", 8080}\n    fmt.Printf(\"Server on %s:%d\\n\", s.Host, s.Port)\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Go Syntax, Packages, Structs & Pointers.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Go code.",
            "supportNotes": "Fully supported in modern Go runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-golang-101",
                "title": "Go Go Syntax, Packages, Structs & Pointers Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-golang-102",
                "title": "Go Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Go Syntax, Packages, Structs & Pointers unlocks advanced problem-solving in Go.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-golang-2",
        "title": "Module 2: Goroutines, Channels & CSP Concurrency",
        "description": "Lightweight Goroutines, buffered channels, select, and sync.",
        "quizId": "quiz-golang-mod-2",
        "lessons": [
          {
            "id": "les-golang-201",
            "title": "Goroutines, Channels & CSP Concurrency Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/yyUHQIec83I",
            "transcript": "00:00 Welcome to Module 2: Goroutines, Channels & CSP Concurrency!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Go.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "go",
            "starterCode": "package main\nimport \"fmt\"\nfunc main() {\n    ch := make(chan string, 1)\n    ch <- \"Go Concurrent Pipeline Active\"\n    fmt.Println(<-ch)\n}",
            "definition": "Go Goroutines, Channels & CSP Concurrency is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Go implementation pattern\npackage main\nimport \"fmt\"\nfunc main() {\n    ch := make(chan string, 1)",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Go routines."
              }
            ],
            "returnVal": "Standard Go execution exit status and return data.",
            "examples": [
              {
                "title": "Goroutines, Channels & CSP Concurrency Practical Example",
                "code": "package main\nimport \"fmt\"\nfunc main() {\n    ch := make(chan string, 1)\n    ch <- \"Go Concurrent Pipeline Active\"\n    fmt.Println(<-ch)\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Goroutines, Channels & CSP Concurrency.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Go code.",
            "supportNotes": "Fully supported in modern Go runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-golang-201",
                "title": "Go Goroutines, Channels & CSP Concurrency Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-golang-202",
                "title": "Go Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Goroutines, Channels & CSP Concurrency unlocks advanced problem-solving in Go.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-golang-3",
        "title": "Module 3: Implicit Interfaces & HTTP REST Microservices",
        "description": "Interfaces, net/http microservices, and JSON encoding.",
        "quizId": "quiz-golang-mod-3",
        "lessons": [
          {
            "id": "les-golang-301",
            "title": "Implicit Interfaces & HTTP REST Microservices Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/446E-r0rXHI",
            "transcript": "00:00 Welcome to Module 3: Implicit Interfaces & HTTP REST Microservices!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Go.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "go",
            "starterCode": "package main\nimport \"fmt\"\ntype Worker interface { Work() string }\ntype Bot struct{}\nfunc (b Bot) Work() string { return \"Bot processing jobs\" }\nfunc main() {\n    var w Worker = Bot{}\n    fmt.Println(w.Work())\n}",
            "definition": "Go Implicit Interfaces & HTTP REST Microservices is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Go implementation pattern\npackage main\nimport \"fmt\"\ntype Worker interface { Work() string }\ntype Bot struct{}",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Go routines."
              }
            ],
            "returnVal": "Standard Go execution exit status and return data.",
            "examples": [
              {
                "title": "Implicit Interfaces & HTTP REST Microservices Practical Example",
                "code": "package main\nimport \"fmt\"\ntype Worker interface { Work() string }\ntype Bot struct{}\nfunc (b Bot) Work() string { return \"Bot processing jobs\" }\nfunc main() {\n    var w Worker = Bot{}\n    fmt.Println(w.Work())\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Implicit Interfaces & HTTP REST Microservices.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Go code.",
            "supportNotes": "Fully supported in modern Go runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-golang-301",
                "title": "Go Implicit Interfaces & HTTP REST Microservices Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-golang-302",
                "title": "Go Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Implicit Interfaces & HTTP REST Microservices unlocks advanced problem-solving in Go.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-golang-final",
    "glossary": [
      {
        "term": "Go Runtime",
        "definition": "The execution environment that executes compiled or interpreted Go instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "rust-lang",
    "title": "Rust Programming: Memory Safety Without Garbage Collection",
    "subtitle": "Master ownership, borrowing, lifetimes, pattern matching, traits, concurrency, and WebAssembly.",
    "category": "Systems & WebAssembly",
    "difficulty": "Intermediate to Advanced",
    "estimatedHours": 50,
    "rating": 4.99,
    "reviewsCount": 3800,
    "language": "Rust",
    "icon": "🦀",
    "instructor": {
      "name": "Elena Rostova",
      "role": "Systems Architect",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "bio": "Compiler engineer."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Rust programs from scratch",
      "Design robust algorithms and data structures using modern Rust standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Rust Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Rust) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-rust-1",
        "title": "Module 1: Rust Syntax, Mutability & Types",
        "description": "Variables, mutability, functions, and control flow in Rust.",
        "quizId": "quiz-rust-mod-1",
        "lessons": [
          {
            "id": "les-rust-101",
            "title": "Rust Syntax, Mutability & Types Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/MsocPEZBd-M",
            "transcript": "00:00 Welcome to Module 1: Rust Syntax, Mutability & Types!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Rust.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "rust",
            "starterCode": "fn main() {\n    let mut count = 0;\n    count += 1;\n    println!(\"Rust counter: {}\", count);\n}",
            "definition": "Rust Rust Syntax, Mutability & Types is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Rust implementation pattern\nfn main() {\n    let mut count = 0;\n    count += 1;\n    println!(\"Rust counter: {}\", count);",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Rust routines."
              }
            ],
            "returnVal": "Standard Rust execution exit status and return data.",
            "examples": [
              {
                "title": "Rust Syntax, Mutability & Types Practical Example",
                "code": "fn main() {\n    let mut count = 0;\n    count += 1;\n    println!(\"Rust counter: {}\", count);\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Rust Syntax, Mutability & Types.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Rust code.",
            "supportNotes": "Fully supported in modern Rust runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-rust-101",
                "title": "Rust Rust Syntax, Mutability & Types Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-rust-102",
                "title": "Rust Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Rust Syntax, Mutability & Types unlocks advanced problem-solving in Rust.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-rust-2",
        "title": "Module 2: Ownership, Borrowing & Lifetimes",
        "description": "Single-ownership model, references (&), and borrow checker rules.",
        "quizId": "quiz-rust-mod-2",
        "lessons": [
          {
            "id": "les-rust-201",
            "title": "Ownership, Borrowing & Lifetimes Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/ygL_xcgkrtQ",
            "transcript": "00:00 Welcome to Module 2: Ownership, Borrowing & Lifetimes!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Rust.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "rust",
            "starterCode": "fn get_length(s: &String) -> usize { s.len() }\nfn main() {\n    let text = String::from(\"EduMind\");\n    println!(\"Length: {}\", get_length(&text));\n}",
            "definition": "Rust Ownership, Borrowing & Lifetimes is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Rust implementation pattern\nfn get_length(s: &String) -> usize { s.len() }\nfn main() {\n    let text = String::from(\"EduMind\");\n    println!(\"Length: {}\", get_length(&text));",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Rust routines."
              }
            ],
            "returnVal": "Standard Rust execution exit status and return data.",
            "examples": [
              {
                "title": "Ownership, Borrowing & Lifetimes Practical Example",
                "code": "fn get_length(s: &String) -> usize { s.len() }\nfn main() {\n    let text = String::from(\"EduMind\");\n    println!(\"Length: {}\", get_length(&text));\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Ownership, Borrowing & Lifetimes.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Rust code.",
            "supportNotes": "Fully supported in modern Rust runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-rust-201",
                "title": "Rust Ownership, Borrowing & Lifetimes Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-rust-202",
                "title": "Rust Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Ownership, Borrowing & Lifetimes unlocks advanced problem-solving in Rust.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-rust-3",
        "title": "Module 3: Enums, Pattern Matching, Traits & Error Handling",
        "description": "Option, Result, match expressions, traits, and zero-cost abstractions.",
        "quizId": "quiz-rust-mod-3",
        "lessons": [
          {
            "id": "les-rust-301",
            "title": "Enums, Pattern Matching, Traits & Error Handling Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/5C_HPTJg5ek",
            "transcript": "00:00 Welcome to Module 3: Enums, Pattern Matching, Traits & Error Handling!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Rust.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "rust",
            "starterCode": "enum Status { Ok(i32), Err }\nfn main() {\n    match Status::Ok(200) {\n        Status::Ok(code) => println!(\"Success code: {}\", code),\n        Status::Err => println!(\"Failed\"),\n    }\n}",
            "definition": "Rust Enums, Pattern Matching, Traits & Error Handling is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Rust implementation pattern\nenum Status { Ok(i32), Err }\nfn main() {\n    match Status::Ok(200) {\n        Status::Ok(code) => println!(\"Success code: {}\", code),",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Rust routines."
              }
            ],
            "returnVal": "Standard Rust execution exit status and return data.",
            "examples": [
              {
                "title": "Enums, Pattern Matching, Traits & Error Handling Practical Example",
                "code": "enum Status { Ok(i32), Err }\nfn main() {\n    match Status::Ok(200) {\n        Status::Ok(code) => println!(\"Success code: {}\", code),\n        Status::Err => println!(\"Failed\"),\n    }\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Enums, Pattern Matching, Traits & Error Handling.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Rust code.",
            "supportNotes": "Fully supported in modern Rust runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-rust-301",
                "title": "Rust Enums, Pattern Matching, Traits & Error Handling Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-rust-302",
                "title": "Rust Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Enums, Pattern Matching, Traits & Error Handling unlocks advanced problem-solving in Rust.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-rust-final",
    "glossary": [
      {
        "term": "Rust Runtime",
        "definition": "The execution environment that executes compiled or interpreted Rust instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "php-lang",
    "title": "Modern PHP 8 & Web Application Architecture",
    "subtitle": "Master PHP 8.3, OOP, PDO database security, MVC architecture, REST APIs, and modern PHP ecosystem.",
    "category": "Web & Full-Stack",
    "difficulty": "Beginner to Intermediate",
    "estimatedHours": 36,
    "rating": 4.95,
    "reviewsCount": 2300,
    "language": "PHP",
    "icon": "🐘",
    "instructor": {
      "name": "Marc Dubois",
      "role": "Web Architect",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      "bio": "18+ years web engineering."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic PHP programs from scratch",
      "Design robust algorithms and data structures using modern PHP standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified PHP Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (PHP) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-php-1",
        "title": "Module 1: PHP 8 Basics, Superglobals & Arrays",
        "description": "Variables, superglobals, associative arrays, and loops.",
        "quizId": "quiz-php-mod-1",
        "lessons": [
          {
            "id": "les-php-101",
            "title": "PHP 8 Basics, Superglobals & Arrays Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/OK_JCtrrv-c",
            "transcript": "00:00 Welcome to Module 1: PHP 8 Basics, Superglobals & Arrays!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for PHP.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "php",
            "starterCode": "<?php\n$data = [\"framework\" => \"PHP 8.3\", \"status\" => \"active\"];\necho \"Status: \" . $data[\"framework\"];",
            "definition": "PHP PHP 8 Basics, Superglobals & Arrays is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard PHP implementation pattern\n<?php\n$data = [\"framework\" => \"PHP 8.3\", \"status\" => \"active\"];\necho \"Status: \" . $data[\"framework\"];",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for PHP routines."
              }
            ],
            "returnVal": "Standard PHP execution exit status and return data.",
            "examples": [
              {
                "title": "PHP 8 Basics, Superglobals & Arrays Practical Example",
                "code": "<?php\n$data = [\"framework\" => \"PHP 8.3\", \"status\" => \"active\"];\necho \"Status: \" . $data[\"framework\"];",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: PHP 8 Basics, Superglobals & Arrays.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing PHP code.",
            "supportNotes": "Fully supported in modern PHP runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-php-101",
                "title": "PHP PHP 8 Basics, Superglobals & Arrays Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-php-102",
                "title": "PHP Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering PHP 8 Basics, Superglobals & Arrays unlocks advanced problem-solving in PHP.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-php-2",
        "title": "Module 2: PHP 8 OOP & Constructor Promotion",
        "description": "Constructor promotion, typed properties, and match expressions.",
        "quizId": "quiz-php-mod-2",
        "lessons": [
          {
            "id": "les-php-201",
            "title": "PHP 8 OOP & Constructor Promotion Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/2eebptXfEvw",
            "transcript": "00:00 Welcome to Module 2: PHP 8 OOP & Constructor Promotion!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for PHP.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "php",
            "starterCode": "<?php\nclass User {\n    public function __construct(public string $name) {}\n}\n$u = new User(\"Elena\");\necho \"User: \" . $u->name;",
            "definition": "PHP PHP 8 OOP & Constructor Promotion is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard PHP implementation pattern\n<?php\nclass User {\n    public function __construct(public string $name) {}\n}",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for PHP routines."
              }
            ],
            "returnVal": "Standard PHP execution exit status and return data.",
            "examples": [
              {
                "title": "PHP 8 OOP & Constructor Promotion Practical Example",
                "code": "<?php\nclass User {\n    public function __construct(public string $name) {}\n}\n$u = new User(\"Elena\");\necho \"User: \" . $u->name;",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: PHP 8 OOP & Constructor Promotion.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing PHP code.",
            "supportNotes": "Fully supported in modern PHP runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-php-201",
                "title": "PHP PHP 8 OOP & Constructor Promotion Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-php-202",
                "title": "PHP Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering PHP 8 OOP & Constructor Promotion unlocks advanced problem-solving in PHP.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-php-3",
        "title": "Module 3: PDO Database Security & JSON REST APIs",
        "description": "PDO prepared statements, transactions, and REST endpoints.",
        "quizId": "quiz-php-mod-3",
        "lessons": [
          {
            "id": "les-php-301",
            "title": "PDO Database Security & JSON REST APIs Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/MYyJ4PuL4pY",
            "transcript": "00:00 Welcome to Module 3: PDO Database Security & JSON REST APIs!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for PHP.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "php",
            "starterCode": "<?php\nheader(\"Content-Type: application/json\");\necho json_encode([\"status\" => 200, \"message\" => \"API Ready\"]);",
            "definition": "PHP PDO Database Security & JSON REST APIs is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard PHP implementation pattern\n<?php\nheader(\"Content-Type: application/json\");\necho json_encode([\"status\" => 200, \"message\" => \"API Ready\"]);",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for PHP routines."
              }
            ],
            "returnVal": "Standard PHP execution exit status and return data.",
            "examples": [
              {
                "title": "PDO Database Security & JSON REST APIs Practical Example",
                "code": "<?php\nheader(\"Content-Type: application/json\");\necho json_encode([\"status\" => 200, \"message\" => \"API Ready\"]);",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: PDO Database Security & JSON REST APIs.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing PHP code.",
            "supportNotes": "Fully supported in modern PHP runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-php-301",
                "title": "PHP PDO Database Security & JSON REST APIs Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-php-302",
                "title": "PHP Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering PDO Database Security & JSON REST APIs unlocks advanced problem-solving in PHP.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-php-final",
    "glossary": [
      {
        "term": "PHP Runtime",
        "definition": "The execution environment that executes compiled or interpreted PHP instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "kotlin-lang",
    "title": "Kotlin Masterclass: Modern Android & Multiplatform",
    "subtitle": "Master Kotlin 2.0, Null Safety, Coroutines, Flow, Jetpack Compose, and Kotlin Multiplatform.",
    "category": "Mobile & Multiplatform",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 42,
    "rating": 4.97,
    "reviewsCount": 2600,
    "language": "Kotlin",
    "icon": "🎯",
    "instructor": {
      "name": "Philipp Lackner",
      "role": "Android Specialist",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      "bio": "Mobile app creator."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Kotlin programs from scratch",
      "Design robust algorithms and data structures using modern Kotlin standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Kotlin Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Kotlin) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-kotlin-1",
        "title": "Module 1: Kotlin Syntax, Null Safety & Types",
        "description": "val/var, null safety, Elvis operator (?:), and smart casts.",
        "quizId": "quiz-kotlin-mod-1",
        "lessons": [
          {
            "id": "les-kotlin-101",
            "title": "Kotlin Syntax, Null Safety & Types Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/F9UC9DY-vIU",
            "transcript": "00:00 Welcome to Module 1: Kotlin Syntax, Null Safety & Types!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Kotlin.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "kotlin",
            "starterCode": "fun main() {\n    val app = \"Kotlin 2.0\"\n    val opt: String? = null\n    println(\"$app - Fallback: ${opt ?: \"Default\"}\")\n}",
            "definition": "Kotlin Kotlin Syntax, Null Safety & Types is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Kotlin implementation pattern\nfun main() {\n    val app = \"Kotlin 2.0\"\n    val opt: String? = null\n    println(\"$app - Fallback: ${opt ?: \"Default\"}\")",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Kotlin routines."
              }
            ],
            "returnVal": "Standard Kotlin execution exit status and return data.",
            "examples": [
              {
                "title": "Kotlin Syntax, Null Safety & Types Practical Example",
                "code": "fun main() {\n    val app = \"Kotlin 2.0\"\n    val opt: String? = null\n    println(\"$app - Fallback: ${opt ?: \"Default\"}\")\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Kotlin Syntax, Null Safety & Types.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Kotlin code.",
            "supportNotes": "Fully supported in modern Kotlin runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-kotlin-101",
                "title": "Kotlin Kotlin Syntax, Null Safety & Types Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-kotlin-102",
                "title": "Kotlin Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Kotlin Syntax, Null Safety & Types unlocks advanced problem-solving in Kotlin.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-kotlin-2",
        "title": "Module 2: Data Classes, Extension Functions & Lambdas",
        "description": "Data classes, custom extensions, and higher-order functions.",
        "quizId": "quiz-kotlin-mod-2",
        "lessons": [
          {
            "id": "les-kotlin-201",
            "title": "Data Classes, Extension Functions & Lambdas Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/5flXf8nuq60",
            "transcript": "00:00 Welcome to Module 2: Data Classes, Extension Functions & Lambdas!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Kotlin.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "kotlin",
            "starterCode": "data class User(val id: Int, val name: String)\nfun String.exclaim() = \"$this!\"\nfun main() {\n    println(User(1, \"Elena\"))\n    println(\"Kotlin\".exclaim())\n}",
            "definition": "Kotlin Data Classes, Extension Functions & Lambdas is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Kotlin implementation pattern\ndata class User(val id: Int, val name: String)\nfun String.exclaim() = \"$this!\"\nfun main() {\n    println(User(1, \"Elena\"))",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Kotlin routines."
              }
            ],
            "returnVal": "Standard Kotlin execution exit status and return data.",
            "examples": [
              {
                "title": "Data Classes, Extension Functions & Lambdas Practical Example",
                "code": "data class User(val id: Int, val name: String)\nfun String.exclaim() = \"$this!\"\nfun main() {\n    println(User(1, \"Elena\"))\n    println(\"Kotlin\".exclaim())\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Data Classes, Extension Functions & Lambdas.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Kotlin code.",
            "supportNotes": "Fully supported in modern Kotlin runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-kotlin-201",
                "title": "Kotlin Data Classes, Extension Functions & Lambdas Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-kotlin-202",
                "title": "Kotlin Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Data Classes, Extension Functions & Lambdas unlocks advanced problem-solving in Kotlin.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-kotlin-3",
        "title": "Module 3: Coroutines, Flow Streams & Compose",
        "description": "suspend functions, Coroutines, Flow, and UI architecture.",
        "quizId": "quiz-kotlin-mod-3",
        "lessons": [
          {
            "id": "les-kotlin-301",
            "title": "Coroutines, Flow Streams & Compose Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/BBwyX_B6z0s",
            "transcript": "00:00 Welcome to Module 3: Coroutines, Flow Streams & Compose!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Kotlin.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "kotlin",
            "starterCode": "fun main() {\n    println(\"Coroutines enable non-blocking concurrent pipelines in Kotlin.\")\n}",
            "definition": "Kotlin Coroutines, Flow Streams & Compose is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Kotlin implementation pattern\nfun main() {\n    println(\"Coroutines enable non-blocking concurrent pipelines in Kotlin.\")\n}",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Kotlin routines."
              }
            ],
            "returnVal": "Standard Kotlin execution exit status and return data.",
            "examples": [
              {
                "title": "Coroutines, Flow Streams & Compose Practical Example",
                "code": "fun main() {\n    println(\"Coroutines enable non-blocking concurrent pipelines in Kotlin.\")\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Coroutines, Flow Streams & Compose.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Kotlin code.",
            "supportNotes": "Fully supported in modern Kotlin runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-kotlin-301",
                "title": "Kotlin Coroutines, Flow Streams & Compose Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-kotlin-302",
                "title": "Kotlin Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Coroutines, Flow Streams & Compose unlocks advanced problem-solving in Kotlin.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-kotlin-final",
    "glossary": [
      {
        "term": "Kotlin Runtime",
        "definition": "The execution environment that executes compiled or interpreted Kotlin instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "swift-lang",
    "title": "Swift & SwiftUI Masterclass: iOS & macOS App Engineering",
    "subtitle": "Master Swift 5.9/6, Protocol-Oriented Programming, Optionals, Closures, and SwiftUI architecture.",
    "category": "Mobile & Apple Platforms",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 45,
    "rating": 4.98,
    "reviewsCount": 2900,
    "language": "Swift",
    "icon": "🍎",
    "instructor": {
      "name": "Sean Allen",
      "role": "Staff iOS Engineer",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      "bio": "iOS engineer and educator."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Swift programs from scratch",
      "Design robust algorithms and data structures using modern Swift standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Swift Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Swift) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-swift-1",
        "title": "Module 1: Swift Basics, Optionals & Control Flow",
        "description": "Constants, variables, optional binding (if let / guard let).",
        "quizId": "quiz-swift-mod-1",
        "lessons": [
          {
            "id": "les-swift-101",
            "title": "Swift Basics, Optionals & Control Flow Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/U3aXWizDbQ4",
            "transcript": "00:00 Welcome to Module 1: Swift Basics, Optionals & Control Flow!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Swift.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "swift",
            "starterCode": "let track = \"Swift Masterclass\"\nvar score: Int? = 98\nif let s = score { print(\"\\(track) - Score: \\(s)\") }",
            "definition": "Swift Swift Basics, Optionals & Control Flow is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Swift implementation pattern\nlet track = \"Swift Masterclass\"\nvar score: Int? = 98\nif let s = score { print(\"\\(track) - Score: \\(s)\") }",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Swift routines."
              }
            ],
            "returnVal": "Standard Swift execution exit status and return data.",
            "examples": [
              {
                "title": "Swift Basics, Optionals & Control Flow Practical Example",
                "code": "let track = \"Swift Masterclass\"\nvar score: Int? = 98\nif let s = score { print(\"\\(track) - Score: \\(s)\") }",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Swift Basics, Optionals & Control Flow.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Swift code.",
            "supportNotes": "Fully supported in modern Swift runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-swift-101",
                "title": "Swift Swift Basics, Optionals & Control Flow Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-swift-102",
                "title": "Swift Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Swift Basics, Optionals & Control Flow unlocks advanced problem-solving in Swift.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-swift-2",
        "title": "Module 2: Structs, Protocols & Extensions",
        "description": "Value types (structs), protocol contracts, and extensions.",
        "quizId": "quiz-swift-mod-2",
        "lessons": [
          {
            "id": "les-swift-201",
            "title": "Structs, Protocols & Extensions Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/cw_3r_y1zYc",
            "transcript": "00:00 Welcome to Module 2: Structs, Protocols & Extensions!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Swift.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "swift",
            "starterCode": "protocol Identifiable { var id: String { get } }\nstruct App: Identifiable { let id: String }\nprint(\"App ID: \\(App(id: \"app-101\").id)\")",
            "definition": "Swift Structs, Protocols & Extensions is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Swift implementation pattern\nprotocol Identifiable { var id: String { get } }\nstruct App: Identifiable { let id: String }\nprint(\"App ID: \\(App(id: \"app-101\").id)\")",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Swift routines."
              }
            ],
            "returnVal": "Standard Swift execution exit status and return data.",
            "examples": [
              {
                "title": "Structs, Protocols & Extensions Practical Example",
                "code": "protocol Identifiable { var id: String { get } }\nstruct App: Identifiable { let id: String }\nprint(\"App ID: \\(App(id: \"app-101\").id)\")",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Structs, Protocols & Extensions.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Swift code.",
            "supportNotes": "Fully supported in modern Swift runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-swift-201",
                "title": "Swift Structs, Protocols & Extensions Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-swift-202",
                "title": "Swift Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Structs, Protocols & Extensions unlocks advanced problem-solving in Swift.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-swift-3",
        "title": "Module 3: SwiftUI Declarative UI & State Management",
        "description": "@State, @Binding, View hierarchy, and reactive UI updates.",
        "quizId": "quiz-swift-mod-3",
        "lessons": [
          {
            "id": "les-swift-301",
            "title": "SwiftUI Declarative UI & State Management Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/b1ZC431y3AM",
            "transcript": "00:00 Welcome to Module 3: SwiftUI Declarative UI & State Management!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Swift.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "swift",
            "starterCode": "print(\"SwiftUI updates UI views automatically when @State variables mutate.\")",
            "definition": "Swift SwiftUI Declarative UI & State Management is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Swift implementation pattern\nprint(\"SwiftUI updates UI views automatically when @State variables mutate.\")",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Swift routines."
              }
            ],
            "returnVal": "Standard Swift execution exit status and return data.",
            "examples": [
              {
                "title": "SwiftUI Declarative UI & State Management Practical Example",
                "code": "print(\"SwiftUI updates UI views automatically when @State variables mutate.\")",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: SwiftUI Declarative UI & State Management.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Swift code.",
            "supportNotes": "Fully supported in modern Swift runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-swift-301",
                "title": "Swift SwiftUI Declarative UI & State Management Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-swift-302",
                "title": "Swift Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering SwiftUI Declarative UI & State Management unlocks advanced problem-solving in Swift.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-swift-final",
    "glossary": [
      {
        "term": "Swift Runtime",
        "definition": "The execution environment that executes compiled or interpreted Swift instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "ruby-lang",
    "title": "Ruby & Rails Masterclass: Full-Stack Web Development",
    "subtitle": "Master Ruby 3.2, Object-Oriented Mixins, Blocks, Procs, Lambdas, Metaprogramming, and Ruby on Rails.",
    "category": "Web & Full-Stack",
    "difficulty": "Beginner to Intermediate",
    "estimatedHours": 38,
    "rating": 4.94,
    "reviewsCount": 1950,
    "language": "Ruby",
    "icon": "💎",
    "instructor": {
      "name": "Yukihiro Matsumoto & Team",
      "role": "Ruby Core Contributor",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "bio": "Dedicated to developer productivity."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Ruby programs from scratch",
      "Design robust algorithms and data structures using modern Ruby standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Ruby Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Ruby) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-ruby-1",
        "title": "Module 1: Ruby Syntax, Symbols & OOP Basics",
        "description": "Dynamic typing, symbols, string interpolation, and classes.",
        "quizId": "quiz-ruby-mod-1",
        "lessons": [
          {
            "id": "les-ruby-101",
            "title": "Ruby Syntax, Symbols & OOP Basics Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/t_ispmWmdjY",
            "transcript": "00:00 Welcome to Module 1: Ruby Syntax, Symbols & OOP Basics!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Ruby.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "ruby",
            "starterCode": "class Course; attr_accessor :title; end\nc = Course.new; c.title = \"Ruby 3.2\"\nputs \"Active: #{c.title}\"",
            "definition": "Ruby Ruby Syntax, Symbols & OOP Basics is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Ruby implementation pattern\nclass Course; attr_accessor :title; end\nc = Course.new; c.title = \"Ruby 3.2\"\nputs \"Active: #{c.title}\"",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Ruby routines."
              }
            ],
            "returnVal": "Standard Ruby execution exit status and return data.",
            "examples": [
              {
                "title": "Ruby Syntax, Symbols & OOP Basics Practical Example",
                "code": "class Course; attr_accessor :title; end\nc = Course.new; c.title = \"Ruby 3.2\"\nputs \"Active: #{c.title}\"",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Ruby Syntax, Symbols & OOP Basics.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Ruby code.",
            "supportNotes": "Fully supported in modern Ruby runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-ruby-101",
                "title": "Ruby Ruby Syntax, Symbols & OOP Basics Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-ruby-102",
                "title": "Ruby Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Ruby Syntax, Symbols & OOP Basics unlocks advanced problem-solving in Ruby.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-ruby-2",
        "title": "Module 2: Blocks, Procs, Lambdas & Enumerable",
        "description": "Custom block yields, Procs, Lambdas, and Enumerable methods.",
        "quizId": "quiz-ruby-mod-2",
        "lessons": [
          {
            "id": "les-ruby-201",
            "title": "Blocks, Procs, Lambdas & Enumerable Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/Dji9ALCgFP8",
            "transcript": "00:00 Welcome to Module 2: Blocks, Procs, Lambdas & Enumerable!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Ruby.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "ruby",
            "starterCode": "def run_twice; yield; yield; end\nrun_twice { puts \"Yielded block executed\" }",
            "definition": "Ruby Blocks, Procs, Lambdas & Enumerable is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Ruby implementation pattern\ndef run_twice; yield; yield; end\nrun_twice { puts \"Yielded block executed\" }",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Ruby routines."
              }
            ],
            "returnVal": "Standard Ruby execution exit status and return data.",
            "examples": [
              {
                "title": "Blocks, Procs, Lambdas & Enumerable Practical Example",
                "code": "def run_twice; yield; yield; end\nrun_twice { puts \"Yielded block executed\" }",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Blocks, Procs, Lambdas & Enumerable.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Ruby code.",
            "supportNotes": "Fully supported in modern Ruby runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-ruby-201",
                "title": "Ruby Blocks, Procs, Lambdas & Enumerable Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-ruby-202",
                "title": "Ruby Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Blocks, Procs, Lambdas & Enumerable unlocks advanced problem-solving in Ruby.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-ruby-3",
        "title": "Module 3: Ruby on Rails MVC & Metaprogramming",
        "description": "ActiveRecord, ActionController, routes, and metaprogramming.",
        "quizId": "quiz-ruby-mod-3",
        "lessons": [
          {
            "id": "les-ruby-301",
            "title": "Ruby on Rails MVC & Metaprogramming Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/fmyvWz5TUWg",
            "transcript": "00:00 Welcome to Module 3: Ruby on Rails MVC & Metaprogramming!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Ruby.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "ruby",
            "starterCode": "puts \"Rails follows Convention over Configuration (CoC).\"",
            "definition": "Ruby Ruby on Rails MVC & Metaprogramming is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Ruby implementation pattern\nputs \"Rails follows Convention over Configuration (CoC).\"",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Ruby routines."
              }
            ],
            "returnVal": "Standard Ruby execution exit status and return data.",
            "examples": [
              {
                "title": "Ruby on Rails MVC & Metaprogramming Practical Example",
                "code": "puts \"Rails follows Convention over Configuration (CoC).\"",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Ruby on Rails MVC & Metaprogramming.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Ruby code.",
            "supportNotes": "Fully supported in modern Ruby runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-ruby-301",
                "title": "Ruby Ruby on Rails MVC & Metaprogramming Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-ruby-302",
                "title": "Ruby Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Ruby on Rails MVC & Metaprogramming unlocks advanced problem-solving in Ruby.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-ruby-final",
    "glossary": [
      {
        "term": "Ruby Runtime",
        "definition": "The execution environment that executes compiled or interpreted Ruby instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "dart-lang",
    "title": "Dart & Flutter Masterclass: Cross-Platform Mobile",
    "subtitle": "Master Dart 3.x, Sound Null Safety, Futures, Streams, Mixins, and Flutter mobile architecture.",
    "category": "Mobile & Multiplatform",
    "difficulty": "Beginner to Intermediate",
    "estimatedHours": 38,
    "rating": 4.96,
    "reviewsCount": 2200,
    "language": "Dart",
    "icon": "🎯",
    "instructor": {
      "name": "Lucas Scott",
      "role": "Lead Flutter Engineer",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      "bio": "Mobile engineer."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Dart programs from scratch",
      "Design robust algorithms and data structures using modern Dart standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Dart Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Dart) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-dart-1",
        "title": "Module 1: Dart Syntax, Null Safety & Collections",
        "description": "Variables, records, patterns, sound null safety, and lists/maps.",
        "quizId": "quiz-dart-mod-1",
        "lessons": [
          {
            "id": "les-dart-101",
            "title": "Dart Syntax, Null Safety & Collections Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/Ej_Pcr4uC2Q",
            "transcript": "00:00 Welcome to Module 1: Dart Syntax, Null Safety & Collections!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Dart.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "dart",
            "starterCode": "void main() {\n  final app = \"Dart 3.x\";\n  print(\"Running on $app with sound null safety.\");\n}",
            "definition": "Dart Dart Syntax, Null Safety & Collections is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Dart implementation pattern\nvoid main() {\n  final app = \"Dart 3.x\";\n  print(\"Running on $app with sound null safety.\");\n}",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Dart routines."
              }
            ],
            "returnVal": "Standard Dart execution exit status and return data.",
            "examples": [
              {
                "title": "Dart Syntax, Null Safety & Collections Practical Example",
                "code": "void main() {\n  final app = \"Dart 3.x\";\n  print(\"Running on $app with sound null safety.\");\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Dart Syntax, Null Safety & Collections.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Dart code.",
            "supportNotes": "Fully supported in modern Dart runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-dart-101",
                "title": "Dart Dart Syntax, Null Safety & Collections Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-dart-102",
                "title": "Dart Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Dart Syntax, Null Safety & Collections unlocks advanced problem-solving in Dart.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-dart-2",
        "title": "Module 2: OOP, Mixins & Abstract Classes",
        "description": "Classes, mixins, factory constructors, and interfaces.",
        "quizId": "quiz-dart-mod-2",
        "lessons": [
          {
            "id": "les-dart-201",
            "title": "OOP, Mixins & Abstract Classes Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/5F-6n_2XWR8",
            "transcript": "00:00 Welcome to Module 2: OOP, Mixins & Abstract Classes!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Dart.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "dart",
            "starterCode": "mixin Logger { void log(String m) => print(\"[LOG] $m\"); }\nclass Service with Logger {}\nvoid main() => Service().log(\"Ready\");",
            "definition": "Dart OOP, Mixins & Abstract Classes is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Dart implementation pattern\nmixin Logger { void log(String m) => print(\"[LOG] $m\"); }\nclass Service with Logger {}\nvoid main() => Service().log(\"Ready\");",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Dart routines."
              }
            ],
            "returnVal": "Standard Dart execution exit status and return data.",
            "examples": [
              {
                "title": "OOP, Mixins & Abstract Classes Practical Example",
                "code": "mixin Logger { void log(String m) => print(\"[LOG] $m\"); }\nclass Service with Logger {}\nvoid main() => Service().log(\"Ready\");",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: OOP, Mixins & Abstract Classes.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Dart code.",
            "supportNotes": "Fully supported in modern Dart runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-dart-201",
                "title": "Dart OOP, Mixins & Abstract Classes Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-dart-202",
                "title": "Dart Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering OOP, Mixins & Abstract Classes unlocks advanced problem-solving in Dart.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-dart-3",
        "title": "Module 3: Futures, Streams & Async Flutter Architecture",
        "description": "Futures, async/await, Stream controllers, and state management.",
        "quizId": "quiz-dart-mod-3",
        "lessons": [
          {
            "id": "les-dart-301",
            "title": "Futures, Streams & Async Flutter Architecture Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/1gDhl4leEzA",
            "transcript": "00:00 Welcome to Module 3: Futures, Streams & Async Flutter Architecture!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Dart.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "dart",
            "starterCode": "Future<String> load() async => \"Data loaded\";\nvoid main() async => print(await load());",
            "definition": "Dart Futures, Streams & Async Flutter Architecture is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Dart implementation pattern\nFuture<String> load() async => \"Data loaded\";\nvoid main() async => print(await load());",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Dart routines."
              }
            ],
            "returnVal": "Standard Dart execution exit status and return data.",
            "examples": [
              {
                "title": "Futures, Streams & Async Flutter Architecture Practical Example",
                "code": "Future<String> load() async => \"Data loaded\";\nvoid main() async => print(await load());",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Futures, Streams & Async Flutter Architecture.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Dart code.",
            "supportNotes": "Fully supported in modern Dart runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-dart-301",
                "title": "Dart Futures, Streams & Async Flutter Architecture Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-dart-302",
                "title": "Dart Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Futures, Streams & Async Flutter Architecture unlocks advanced problem-solving in Dart.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-dart-final",
    "glossary": [
      {
        "term": "Dart Runtime",
        "definition": "The execution environment that executes compiled or interpreted Dart instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "r-lang",
    "title": "R Programming: Statistical Analysis & Data Science",
    "subtitle": "Master R 4.x, Vectorization, Data Frames, Tidyverse (dplyr), and ggplot2 visualizations.",
    "category": "Data Science & Stats",
    "difficulty": "Beginner to Intermediate",
    "estimatedHours": 36,
    "rating": 4.95,
    "reviewsCount": 1800,
    "language": "R",
    "icon": "📊",
    "instructor": {
      "name": "Dr. Evelyn Ward",
      "role": "Lead Biostatistician",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "bio": "20+ years statistical computing."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic R programs from scratch",
      "Design robust algorithms and data structures using modern R standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified R Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (R) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-r-1",
        "title": "Module 1: R Syntax, Vectors & Vectorized Math",
        "description": "Vector arithmetic, 1-based indexing, factors, and matrices.",
        "quizId": "quiz-r-mod-1",
        "lessons": [
          {
            "id": "les-r-101",
            "title": "R Syntax, Vectors & Vectorized Math Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/_V8eKsto3Ug",
            "transcript": "00:00 Welcome to Module 1: R Syntax, Vectors & Vectorized Math!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for R.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "r",
            "starterCode": "x <- c(10, 20, 30, 40)\nprint(paste(\"Mean value:\", mean(x)))",
            "definition": "R R Syntax, Vectors & Vectorized Math is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard R implementation pattern\nx <- c(10, 20, 30, 40)\nprint(paste(\"Mean value:\", mean(x)))",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for R routines."
              }
            ],
            "returnVal": "Standard R execution exit status and return data.",
            "examples": [
              {
                "title": "R Syntax, Vectors & Vectorized Math Practical Example",
                "code": "x <- c(10, 20, 30, 40)\nprint(paste(\"Mean value:\", mean(x)))",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: R Syntax, Vectors & Vectorized Math.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing R code.",
            "supportNotes": "Fully supported in modern R runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-r-101",
                "title": "R R Syntax, Vectors & Vectorized Math Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-r-102",
                "title": "R Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering R Syntax, Vectors & Vectorized Math unlocks advanced problem-solving in R.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-r-2",
        "title": "Module 2: Data Frames & Tidyverse Data Wrangling",
        "description": "Data frames, filter, select, mutate, and summarization in R.",
        "quizId": "quiz-r-mod-2",
        "lessons": [
          {
            "id": "les-r-201",
            "title": "Data Frames & Tidyverse Data Wrangling Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/BvKETZ6kr9Q",
            "transcript": "00:00 Welcome to Module 2: Data Frames & Tidyverse Data Wrangling!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for R.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "r",
            "starterCode": "df <- data.frame(item = c(\"A\", \"B\"), score = c(95, 88))\nprint(summary(df))",
            "definition": "R Data Frames & Tidyverse Data Wrangling is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard R implementation pattern\ndf <- data.frame(item = c(\"A\", \"B\"), score = c(95, 88))\nprint(summary(df))",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for R routines."
              }
            ],
            "returnVal": "Standard R execution exit status and return data.",
            "examples": [
              {
                "title": "Data Frames & Tidyverse Data Wrangling Practical Example",
                "code": "df <- data.frame(item = c(\"A\", \"B\"), score = c(95, 88))\nprint(summary(df))",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Data Frames & Tidyverse Data Wrangling.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing R code.",
            "supportNotes": "Fully supported in modern R runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-r-201",
                "title": "R Data Frames & Tidyverse Data Wrangling Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-r-202",
                "title": "R Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Data Frames & Tidyverse Data Wrangling unlocks advanced problem-solving in R.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-r-3",
        "title": "Module 3: ggplot2 Visualizations & Statistical Modeling",
        "description": "Grammar of graphics, aesthetics, and linear regression models.",
        "quizId": "quiz-r-mod-3",
        "lessons": [
          {
            "id": "les-r-301",
            "title": "ggplot2 Visualizations & Statistical Modeling Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/9kYUGMg_14s",
            "transcript": "00:00 Welcome to Module 3: ggplot2 Visualizations & Statistical Modeling!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for R.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "r",
            "starterCode": "print(\"ggplot2 creates layered publication-quality charts.\")",
            "definition": "R ggplot2 Visualizations & Statistical Modeling is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard R implementation pattern\nprint(\"ggplot2 creates layered publication-quality charts.\")",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for R routines."
              }
            ],
            "returnVal": "Standard R execution exit status and return data.",
            "examples": [
              {
                "title": "ggplot2 Visualizations & Statistical Modeling Practical Example",
                "code": "print(\"ggplot2 creates layered publication-quality charts.\")",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: ggplot2 Visualizations & Statistical Modeling.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing R code.",
            "supportNotes": "Fully supported in modern R runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-r-301",
                "title": "R ggplot2 Visualizations & Statistical Modeling Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-r-302",
                "title": "R Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering ggplot2 Visualizations & Statistical Modeling unlocks advanced problem-solving in R.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-r-final",
    "glossary": [
      {
        "term": "R Runtime",
        "definition": "The execution environment that executes compiled or interpreted R instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "sql-lang",
    "title": "SQL & Relational Database Architecture Masterclass",
    "subtitle": "Master SQL, Relational Schema Design, Complex Multi-Table JOINs, Subqueries, Window Functions, and Index Optimization.",
    "category": "Databases & Data Engineering",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 38,
    "rating": 4.98,
    "reviewsCount": 3400,
    "language": "SQL",
    "icon": "🗄️",
    "instructor": {
      "name": "Kavita Patel",
      "role": "Staff Database Architect",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      "bio": "Specialist in PostgreSQL, MySQL, and distributed query performance."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic SQL programs from scratch",
      "Design robust algorithms and data structures using modern SQL standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified SQL Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (SQL) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-sql-1",
        "title": "Module 1: Relational Foundations, DDL & DML Queries",
        "description": "SELECT, WHERE, ORDER BY, GROUP BY, INSERT, UPDATE, DELETE, and data constraints.",
        "quizId": "quiz-sql-mod-1",
        "lessons": [
          {
            "id": "les-sql-101",
            "title": "Relational Foundations, DDL & DML Queries Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/HXV3zeRR3h4",
            "transcript": "00:00 Welcome to Module 1: Relational Foundations, DDL & DML Queries!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for SQL.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "sql",
            "starterCode": "-- SQL Query Example\nSELECT \n    department,\n    COUNT(id) AS employee_count,\n    ROUND(AVG(salary), 2) AS avg_salary\nFROM employees\nWHERE status = 'active'\nGROUP BY department\nHAVING COUNT(id) > 2\nORDER BY avg_salary DESC;",
            "definition": "SQL Relational Foundations, DDL & DML Queries is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard SQL implementation pattern\n-- SQL Query Example\nSELECT \n    department,\n    COUNT(id) AS employee_count,",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for SQL routines."
              }
            ],
            "returnVal": "Standard SQL execution exit status and return data.",
            "examples": [
              {
                "title": "Relational Foundations, DDL & DML Queries Practical Example",
                "code": "-- SQL Query Example\nSELECT \n    department,\n    COUNT(id) AS employee_count,\n    ROUND(AVG(salary), 2) AS avg_salary\nFROM employees\nWHERE status = 'active'\nGROUP BY department\nHAVING COUNT(id) > 2\nORDER BY avg_salary DESC;",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Relational Foundations, DDL & DML Queries.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing SQL code.",
            "supportNotes": "Fully supported in modern SQL runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-sql-101",
                "title": "SQL Relational Foundations, DDL & DML Queries Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-sql-102",
                "title": "SQL Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Relational Foundations, DDL & DML Queries unlocks advanced problem-solving in SQL.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-sql-2",
        "title": "Module 2: Multi-Table Relationships, JOINs & Subqueries",
        "description": "INNER, LEFT, RIGHT, FULL OUTER JOINs, correlated subqueries, and UNION operations.",
        "quizId": "quiz-sql-mod-2",
        "lessons": [
          {
            "id": "les-sql-201",
            "title": "Multi-Table Relationships, JOINs & Subqueries Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/7S_tz1z_5bA",
            "transcript": "00:00 Welcome to Module 2: Multi-Table Relationships, JOINs & Subqueries!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for SQL.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "sql",
            "starterCode": "-- Multi-table INNER & LEFT JOIN\nSELECT \n    u.username,\n    o.order_id,\n    o.total_amount,\n    o.order_date\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE o.total_amount > 100.00\nORDER BY o.order_date DESC;",
            "definition": "SQL Multi-Table Relationships, JOINs & Subqueries is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard SQL implementation pattern\n-- Multi-table INNER & LEFT JOIN\nSELECT \n    u.username,\n    o.order_id,",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for SQL routines."
              }
            ],
            "returnVal": "Standard SQL execution exit status and return data.",
            "examples": [
              {
                "title": "Multi-Table Relationships, JOINs & Subqueries Practical Example",
                "code": "-- Multi-table INNER & LEFT JOIN\nSELECT \n    u.username,\n    o.order_id,\n    o.total_amount,\n    o.order_date\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE o.total_amount > 100.00\nORDER BY o.order_date DESC;",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Multi-Table Relationships, JOINs & Subqueries.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing SQL code.",
            "supportNotes": "Fully supported in modern SQL runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-sql-201",
                "title": "SQL Multi-Table Relationships, JOINs & Subqueries Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-sql-202",
                "title": "SQL Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Multi-Table Relationships, JOINs & Subqueries unlocks advanced problem-solving in SQL.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-sql-3",
        "title": "Module 3: Advanced Window Functions, CTEs & Index Optimization",
        "description": "ROW_NUMBER(), RANK(), PARTITION BY, Common Table Expressions (WITH), and B-Tree indexing.",
        "quizId": "quiz-sql-mod-3",
        "lessons": [
          {
            "id": "les-sql-301",
            "title": "Advanced Window Functions, CTEs & Index Optimization Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/9Pzj7MxzcEQ",
            "transcript": "00:00 Welcome to Module 3: Advanced Window Functions, CTEs & Index Optimization!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for SQL.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "sql",
            "starterCode": "-- Window Function with CTE\nWITH RankedScores AS (\n    SELECT \n        student_name,\n        subject,\n        score,\n        DENSE_RANK() OVER (PARTITION BY subject ORDER BY score DESC) AS rank_pos\n    FROM exam_results\n)\nSELECT * FROM RankedScores WHERE rank_pos <= 3;",
            "definition": "SQL Advanced Window Functions, CTEs & Index Optimization is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard SQL implementation pattern\n-- Window Function with CTE\nWITH RankedScores AS (\n    SELECT \n        student_name,",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for SQL routines."
              }
            ],
            "returnVal": "Standard SQL execution exit status and return data.",
            "examples": [
              {
                "title": "Advanced Window Functions, CTEs & Index Optimization Practical Example",
                "code": "-- Window Function with CTE\nWITH RankedScores AS (\n    SELECT \n        student_name,\n        subject,\n        score,\n        DENSE_RANK() OVER (PARTITION BY subject ORDER BY score DESC) AS rank_pos\n    FROM exam_results\n)\nSELECT * FROM RankedScores WHERE rank_pos <= 3;",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Advanced Window Functions, CTEs & Index Optimization.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing SQL code.",
            "supportNotes": "Fully supported in modern SQL runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-sql-301",
                "title": "SQL Advanced Window Functions, CTEs & Index Optimization Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-sql-302",
                "title": "SQL Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Advanced Window Functions, CTEs & Index Optimization unlocks advanced problem-solving in SQL.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-sql-final",
    "glossary": [
      {
        "term": "SQL Runtime",
        "definition": "The execution environment that executes compiled or interpreted SQL instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "html-lang",
    "title": "HTML5 Semantic Web Architecture & Accessibility",
    "subtitle": "Master modern semantic HTML5, accessible ARIA roles, modern forms, SEO optimization, and multimedia web components.",
    "category": "Web & Frontend",
    "difficulty": "Beginner to Intermediate",
    "estimatedHours": 25,
    "rating": 4.96,
    "reviewsCount": 2950,
    "language": "HTML",
    "icon": "🌐",
    "instructor": {
      "name": "Sarah Jenkins",
      "role": "Accessibility & Standards Engineer",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      "bio": "W3C Accessibility Working Group contributor."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic HTML programs from scratch",
      "Design robust algorithms and data structures using modern HTML standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified HTML Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (HTML) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-html-1",
        "title": "Module 1: Document Anatomy, Semantic Structure & Text",
        "description": "DOCTYPE, html/head/body, headings, paragraphs, lists, links, and semantic tags.",
        "quizId": "quiz-html-mod-1",
        "lessons": [
          {
            "id": "les-html-101",
            "title": "Document Anatomy, Semantic Structure & Text Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/kUMe1FH4CHE",
            "transcript": "00:00 Welcome to Module 1: Document Anatomy, Semantic Structure & Text!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for HTML.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "html",
            "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Semantic HTML5 Example</title>\n</head>\n<body>\n  <header>\n    <h1>EduMind.AI Platform</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#courses\">Courses</a></li>\n        <li><a href=\"#editor\">Compiler</a></li>\n      </ul>\n    </nav>\n  </header>\n</body>\n</html>",
            "definition": "HTML Document Anatomy, Semantic Structure & Text is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard HTML implementation pattern\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for HTML routines."
              }
            ],
            "returnVal": "Standard HTML execution exit status and return data.",
            "examples": [
              {
                "title": "Document Anatomy, Semantic Structure & Text Practical Example",
                "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Semantic HTML5 Example</title>\n</head>\n<body>\n  <header>\n    <h1>EduMind.AI Platform</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#courses\">Courses</a></li>\n        <li><a href=\"#editor\">Compiler</a></li>\n      </ul>\n    </nav>\n  </header>\n</body>\n</html>",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Document Anatomy, Semantic Structure & Text.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing HTML code.",
            "supportNotes": "Fully supported in modern HTML runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-html-101",
                "title": "HTML Document Anatomy, Semantic Structure & Text Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-html-102",
                "title": "HTML Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Document Anatomy, Semantic Structure & Text unlocks advanced problem-solving in HTML.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-html-2",
        "title": "Module 2: Semantic Sections, Modern Forms & Validation",
        "description": "header, nav, main, article, section, aside, footer, and HTML5 native form controls.",
        "quizId": "quiz-html-mod-2",
        "lessons": [
          {
            "id": "les-html-201",
            "title": "Semantic Sections, Modern Forms & Validation Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/mJgBOIoGihA",
            "transcript": "00:00 Welcome to Module 2: Semantic Sections, Modern Forms & Validation!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for HTML.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "html",
            "starterCode": "<main>\n  <section aria-labelledby=\"form-heading\">\n    <h2 id=\"form-heading\">Student Registration</h2>\n    <form action=\"/register\" method=\"POST\">\n      <label for=\"uname\">Full Name:</label>\n      <input type=\"text\" id=\"uname\" name=\"name\" required placeholder=\"Elena Rostova\">\n      <button type=\"submit\">Enroll Now</button>\n    </form>\n  </section>\n</main>",
            "definition": "HTML Semantic Sections, Modern Forms & Validation is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard HTML implementation pattern\n<main>\n  <section aria-labelledby=\"form-heading\">\n    <h2 id=\"form-heading\">Student Registration</h2>\n    <form action=\"/register\" method=\"POST\">",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for HTML routines."
              }
            ],
            "returnVal": "Standard HTML execution exit status and return data.",
            "examples": [
              {
                "title": "Semantic Sections, Modern Forms & Validation Practical Example",
                "code": "<main>\n  <section aria-labelledby=\"form-heading\">\n    <h2 id=\"form-heading\">Student Registration</h2>\n    <form action=\"/register\" method=\"POST\">\n      <label for=\"uname\">Full Name:</label>\n      <input type=\"text\" id=\"uname\" name=\"name\" required placeholder=\"Elena Rostova\">\n      <button type=\"submit\">Enroll Now</button>\n    </form>\n  </section>\n</main>",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Semantic Sections, Modern Forms & Validation.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing HTML code.",
            "supportNotes": "Fully supported in modern HTML runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-html-201",
                "title": "HTML Semantic Sections, Modern Forms & Validation Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-html-202",
                "title": "HTML Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Semantic Sections, Modern Forms & Validation unlocks advanced problem-solving in HTML.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-html-3",
        "title": "Module 3: Web Accessibility (a11y), ARIA & OpenGraph SEO",
        "description": "ARIA attributes, screen reader optimization, landmark roles, and OpenGraph metadata.",
        "quizId": "quiz-html-mod-3",
        "lessons": [
          {
            "id": "les-html-301",
            "title": "Web Accessibility (a11y), ARIA & OpenGraph SEO Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/UB1O30fR-EE",
            "transcript": "00:00 Welcome to Module 3: Web Accessibility (a11y), ARIA & OpenGraph SEO!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for HTML.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "html",
            "starterCode": "<article role=\"region\" aria-label=\"Course Card\">\n  <h3 tabindex=\"0\">Mastering Web Standards</h3>\n  <p>Semantic markup ensures maximum accessibility across screen readers and devices.</p>\n  <button aria-expanded=\"false\" aria-controls=\"extra-details\">View Details</button>\n</article>",
            "definition": "HTML Web Accessibility (a11y), ARIA & OpenGraph SEO is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard HTML implementation pattern\n<article role=\"region\" aria-label=\"Course Card\">\n  <h3 tabindex=\"0\">Mastering Web Standards</h3>\n  <p>Semantic markup ensures maximum accessibility across screen readers and devices.</p>\n  <button aria-expanded=\"false\" aria-controls=\"extra-details\">View Details</button>",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for HTML routines."
              }
            ],
            "returnVal": "Standard HTML execution exit status and return data.",
            "examples": [
              {
                "title": "Web Accessibility (a11y), ARIA & OpenGraph SEO Practical Example",
                "code": "<article role=\"region\" aria-label=\"Course Card\">\n  <h3 tabindex=\"0\">Mastering Web Standards</h3>\n  <p>Semantic markup ensures maximum accessibility across screen readers and devices.</p>\n  <button aria-expanded=\"false\" aria-controls=\"extra-details\">View Details</button>\n</article>",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Web Accessibility (a11y), ARIA & OpenGraph SEO.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing HTML code.",
            "supportNotes": "Fully supported in modern HTML runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-html-301",
                "title": "HTML Web Accessibility (a11y), ARIA & OpenGraph SEO Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-html-302",
                "title": "HTML Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Web Accessibility (a11y), ARIA & OpenGraph SEO unlocks advanced problem-solving in HTML.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-html-final",
    "glossary": [
      {
        "term": "HTML Runtime",
        "definition": "The execution environment that executes compiled or interpreted HTML instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "css-lang",
    "title": "Modern CSS3, Flexbox, Grid & Responsive Layouts",
    "subtitle": "Master modern CSS, Flexbox, CSS Grid, custom properties (CSS Variables), transitions, keyframe animations, and container queries.",
    "category": "Web & Frontend",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 32,
    "rating": 4.97,
    "reviewsCount": 3100,
    "language": "CSS",
    "icon": "🎨",
    "instructor": {
      "name": "Liam Chen",
      "role": "Principal Design Technologist",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      "bio": "CSS architecture specialist and design system author."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic CSS programs from scratch",
      "Design robust algorithms and data structures using modern CSS standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified CSS Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (CSS) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-css-1",
        "title": "Module 1: The Box Model, Selectors & Cascade Specificity",
        "description": "Margin, border, padding, content, specificity calculus, and modern CSS custom variables.",
        "quizId": "quiz-css-mod-1",
        "lessons": [
          {
            "id": "les-css-101",
            "title": "The Box Model, Selectors & Cascade Specificity Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/1Rs2ND1ryYc",
            "transcript": "00:00 Welcome to Module 1: The Box Model, Selectors & Cascade Specificity!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for CSS.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "css",
            "starterCode": ":root {\n  --primary: #4f46e5;\n  --surface: #ffffff;\n  --radius: 12px;\n}\n\n.card {\n  background: var(--surface);\n  border: 1px solid #e2e8f0;\n  border-radius: var(--radius);\n  padding: 24px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n}",
            "definition": "CSS The Box Model, Selectors & Cascade Specificity is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard CSS implementation pattern\n:root {\n  --primary: #4f46e5;\n  --surface: #ffffff;\n  --radius: 12px;",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for CSS routines."
              }
            ],
            "returnVal": "Standard CSS execution exit status and return data.",
            "examples": [
              {
                "title": "The Box Model, Selectors & Cascade Specificity Practical Example",
                "code": ":root {\n  --primary: #4f46e5;\n  --surface: #ffffff;\n  --radius: 12px;\n}\n\n.card {\n  background: var(--surface);\n  border: 1px solid #e2e8f0;\n  border-radius: var(--radius);\n  padding: 24px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: The Box Model, Selectors & Cascade Specificity.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing CSS code.",
            "supportNotes": "Fully supported in modern CSS runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-css-101",
                "title": "CSS The Box Model, Selectors & Cascade Specificity Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-css-102",
                "title": "CSS Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering The Box Model, Selectors & Cascade Specificity unlocks advanced problem-solving in CSS.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-css-2",
        "title": "Module 2: Flexbox Alignment & CSS Grid Layouts",
        "description": "One-dimensional Flexbox, two-dimensional CSS Grid (grid-template-columns, gap, auto-fit, minmax).",
        "quizId": "quiz-css-mod-2",
        "lessons": [
          {
            "id": "les-css-201",
            "title": "Flexbox Alignment & CSS Grid Layouts Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/K74l26pE4YA",
            "transcript": "00:00 Welcome to Module 2: Flexbox Alignment & CSS Grid Layouts!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for CSS.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "css",
            "starterCode": ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 16px;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}",
            "definition": "CSS Flexbox Alignment & CSS Grid Layouts is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard CSS implementation pattern\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for CSS routines."
              }
            ],
            "returnVal": "Standard CSS execution exit status and return data.",
            "examples": [
              {
                "title": "Flexbox Alignment & CSS Grid Layouts Practical Example",
                "code": ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 16px;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Flexbox Alignment & CSS Grid Layouts.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing CSS code.",
            "supportNotes": "Fully supported in modern CSS runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-css-201",
                "title": "CSS Flexbox Alignment & CSS Grid Layouts Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-css-202",
                "title": "CSS Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Flexbox Alignment & CSS Grid Layouts unlocks advanced problem-solving in CSS.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-css-3",
        "title": "Module 3: Transitions, Keyframe Animations & Container Queries",
        "description": "GPU-accelerated transforms, spring animations, @keyframes, and modern @container rules.",
        "quizId": "quiz-css-mod-3",
        "lessons": [
          {
            "id": "les-css-301",
            "title": "Transitions, Keyframe Animations & Container Queries Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/yfoY53QXEnI",
            "transcript": "00:00 Welcome to Module 3: Transitions, Keyframe Animations & Container Queries!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for CSS.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "css",
            "starterCode": "@keyframes fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n\n.animated-banner {\n  animation: fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}",
            "definition": "CSS Transitions, Keyframe Animations & Container Queries is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard CSS implementation pattern\n@keyframes fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(10px);",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for CSS routines."
              }
            ],
            "returnVal": "Standard CSS execution exit status and return data.",
            "examples": [
              {
                "title": "Transitions, Keyframe Animations & Container Queries Practical Example",
                "code": "@keyframes fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n\n.animated-banner {\n  animation: fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Transitions, Keyframe Animations & Container Queries.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing CSS code.",
            "supportNotes": "Fully supported in modern CSS runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-css-301",
                "title": "CSS Transitions, Keyframe Animations & Container Queries Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-css-302",
                "title": "CSS Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Transitions, Keyframe Animations & Container Queries unlocks advanced problem-solving in CSS.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-css-final",
    "glossary": [
      {
        "term": "CSS Runtime",
        "definition": "The execution environment that executes compiled or interpreted CSS instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "bash-lang",
    "title": "Bash Scripting & Linux Terminal Automation",
    "subtitle": "Master Linux CLI, Unix pipelines, Shell scripting, I/O redirection, regex with grep/sed/awk, and cron jobs.",
    "category": "DevOps & Systems",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": 30,
    "rating": 4.97,
    "reviewsCount": 2200,
    "language": "Bash",
    "icon": "💻",
    "instructor": {
      "name": "Dave Watson",
      "role": "Principal Site Reliability Engineer",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      "bio": "Author of enterprise Linux automation playbooks."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic Bash programs from scratch",
      "Design robust algorithms and data structures using modern Bash standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified Bash Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (Bash) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-bash-1",
        "title": "Module 1: Terminal Fundamentals, Shell Variables & Conditionals",
        "description": "Command execution, exit codes ($?), environment variables, and [ ... ] test expressions.",
        "quizId": "quiz-bash-mod-1",
        "lessons": [
          {
            "id": "les-bash-101",
            "title": "Terminal Fundamentals, Shell Variables & Conditionals Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/oxuRxtrO2Ag",
            "transcript": "00:00 Welcome to Module 1: Terminal Fundamentals, Shell Variables & Conditionals!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Bash.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "bash",
            "starterCode": "#!/usr/bin/env bash\nset -euo pipefail\n\nTARGET_DIR=\"${1:-./logs}\"\n\nif [ -d \"$TARGET_DIR\" ]; then\n    echo \"[INFO] Found directory: $TARGET_DIR\"\nelse\n    echo \"[WARN] Directory not found, creating $TARGET_DIR...\"\n    mkdir -p \"$TARGET_DIR\"\nfi",
            "definition": "Bash Terminal Fundamentals, Shell Variables & Conditionals is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Bash implementation pattern\n#!/usr/bin/env bash\nset -euo pipefail\n\nTARGET_DIR=\"${1:-./logs}\"",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Bash routines."
              }
            ],
            "returnVal": "Standard Bash execution exit status and return data.",
            "examples": [
              {
                "title": "Terminal Fundamentals, Shell Variables & Conditionals Practical Example",
                "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nTARGET_DIR=\"${1:-./logs}\"\n\nif [ -d \"$TARGET_DIR\" ]; then\n    echo \"[INFO] Found directory: $TARGET_DIR\"\nelse\n    echo \"[WARN] Directory not found, creating $TARGET_DIR...\"\n    mkdir -p \"$TARGET_DIR\"\nfi",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Terminal Fundamentals, Shell Variables & Conditionals.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Bash code.",
            "supportNotes": "Fully supported in modern Bash runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-bash-101",
                "title": "Bash Terminal Fundamentals, Shell Variables & Conditionals Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-bash-102",
                "title": "Bash Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Terminal Fundamentals, Shell Variables & Conditionals unlocks advanced problem-solving in Bash.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-bash-2",
        "title": "Module 2: Unix Pipelines, grep, sed & awk Data Processing",
        "description": "Standard streams (stdin, stdout, stderr), pipe chains, and regex stream filtering.",
        "quizId": "quiz-bash-mod-2",
        "lessons": [
          {
            "id": "les-bash-201",
            "title": "Unix Pipelines, grep, sed & awk Data Processing Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/v-F3YLd6oMw",
            "transcript": "00:00 Welcome to Module 2: Unix Pipelines, grep, sed & awk Data Processing!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Bash.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "bash",
            "starterCode": "#!/usr/bin/env bash\n# Filter active HTTP 200 responses from web logs\ncat access.log 2>/dev/null | grep \" 200 \" | awk '{print $1, $7}' | sort | uniq -c | sort -nr | head -n 5",
            "definition": "Bash Unix Pipelines, grep, sed & awk Data Processing is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Bash implementation pattern\n#!/usr/bin/env bash\n# Filter active HTTP 200 responses from web logs\ncat access.log 2>/dev/null | grep \" 200 \" | awk '{print $1, $7}' | sort | uniq -c | sort -nr | head -n 5",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Bash routines."
              }
            ],
            "returnVal": "Standard Bash execution exit status and return data.",
            "examples": [
              {
                "title": "Unix Pipelines, grep, sed & awk Data Processing Practical Example",
                "code": "#!/usr/bin/env bash\n# Filter active HTTP 200 responses from web logs\ncat access.log 2>/dev/null | grep \" 200 \" | awk '{print $1, $7}' | sort | uniq -c | sort -nr | head -n 5",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: Unix Pipelines, grep, sed & awk Data Processing.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Bash code.",
            "supportNotes": "Fully supported in modern Bash runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-bash-201",
                "title": "Bash Unix Pipelines, grep, sed & awk Data Processing Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-bash-202",
                "title": "Bash Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Unix Pipelines, grep, sed & awk Data Processing unlocks advanced problem-solving in Bash.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-bash-3",
        "title": "Module 3: Functions, Cron Automation & Robust Error Traps",
        "description": "Modular bash functions, trap cleanup handlers, arguments parsing, and systemd/cron triggers.",
        "quizId": "quiz-bash-mod-3",
        "lessons": [
          {
            "id": "les-bash-301",
            "title": "Functions, Cron Automation & Robust Error Traps Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/tK9Oc6AEnR4",
            "transcript": "00:00 Welcome to Module 3: Functions, Cron Automation & Robust Error Traps!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for Bash.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "bash",
            "starterCode": "#!/usr/bin/env bash\nset -eo pipefail\n\ncleanup() {\n    echo \"[CLEANUP] Removing temp files...\"\n    rm -f /tmp/edumind-*.tmp\n}\ntrap cleanup EXIT\n\necho \"[INFO] Executing automated maintenance pipeline...\"",
            "definition": "Bash Functions, Cron Automation & Robust Error Traps is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard Bash implementation pattern\n#!/usr/bin/env bash\nset -eo pipefail\n\ncleanup() {",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for Bash routines."
              }
            ],
            "returnVal": "Standard Bash execution exit status and return data.",
            "examples": [
              {
                "title": "Functions, Cron Automation & Robust Error Traps Practical Example",
                "code": "#!/usr/bin/env bash\nset -eo pipefail\n\ncleanup() {\n    echo \"[CLEANUP] Removing temp files...\"\n    rm -f /tmp/edumind-*.tmp\n}\ntrap cleanup EXIT\n\necho \"[INFO] Executing automated maintenance pipeline...\"",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Functions, Cron Automation & Robust Error Traps.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing Bash code.",
            "supportNotes": "Fully supported in modern Bash runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-bash-301",
                "title": "Bash Functions, Cron Automation & Robust Error Traps Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-bash-302",
                "title": "Bash Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Functions, Cron Automation & Robust Error Traps unlocks advanced problem-solving in Bash.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-bash-final",
    "glossary": [
      {
        "term": "Bash Runtime",
        "definition": "The execution environment that executes compiled or interpreted Bash instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  },
  {
    "id": "matlab-lang",
    "title": "MATLAB for Engineers: Matrix Computation & Simulation",
    "subtitle": "Master MATLAB syntax, vectorized matrix operations, numerical algorithms, Simulink models, and 2D/3D visualization.",
    "category": "Engineering & Simulation",
    "difficulty": "Beginner to Intermediate",
    "estimatedHours": 34,
    "rating": 4.95,
    "reviewsCount": 1750,
    "language": "MATLAB",
    "icon": "🧮",
    "instructor": {
      "name": "Prof. Hans Weber",
      "role": "Computational Physics Chair",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "bio": "Author of Numerical Methods in Modern Engineering."
    },
    "prerequisites": [
      "Basic computer literacy",
      "Curiosity and passion for programming"
    ],
    "outcomes": [
      "Write, compile, and debug idiomatic MATLAB programs from scratch",
      "Design robust algorithms and data structures using modern MATLAB standards",
      "Understand memory management, execution lifecycles, and asynchronous concurrency",
      "Pass module quizzes and earn your industry-verified MATLAB Certificate of Completion"
    ],
    "diagram": "\n  +----------------------+      +----------------------+      +----------------------+\n  | Source Code (MATLAB) | ---> | Compiler / Runtime   | ---> | Verified Execution   |\n  +----------------------+      +----------------------+      +----------------------+\n    ",
    "modules": [
      {
        "id": "mod-matlab-1",
        "title": "Module 1: Matrix Algebra, Indexing & Array Operations",
        "description": "Vectors, 2D matrices, element-wise dot operators (.*, ./), and slicing.",
        "quizId": "quiz-matlab-mod-1",
        "lessons": [
          {
            "id": "les-matlab-101",
            "title": "Matrix Algebra, Indexing & Array Operations Deep Dive",
            "readTime": "10 min",
            "videoDuration": "12:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/T_ekAD7U-wU",
            "transcript": "00:00 Welcome to Module 1: Matrix Algebra, Indexing & Array Operations!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for MATLAB.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "matlab",
            "starterCode": "% MATLAB Matrix Fundamentals\nA = [1, 2, 3; 4, 5, 6; 7, 8, 9];\nB = eye(3) * 10;\n\n% Matrix multiplication vs Element-wise\nC = A * B;\nD = A .* B;\n\ndisp('Matrix Product A * B:');\ndisp(C);",
            "definition": "MATLAB Matrix Algebra, Indexing & Array Operations is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard MATLAB implementation pattern\n% MATLAB Matrix Fundamentals\nA = [1, 2, 3; 4, 5, 6; 7, 8, 9];\nB = eye(3) * 10;\n",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for MATLAB routines."
              }
            ],
            "returnVal": "Standard MATLAB execution exit status and return data.",
            "examples": [
              {
                "title": "Matrix Algebra, Indexing & Array Operations Practical Example",
                "code": "% MATLAB Matrix Fundamentals\nA = [1, 2, 3; 4, 5, 6; 7, 8, 9];\nB = eye(3) * 10;\n\n% Matrix multiplication vs Element-wise\nC = A * B;\nD = A .* B;\n\ndisp('Matrix Product A * B:');\ndisp(C);",
                "explanation": "Demonstrates verified, runnable syntax for Module 1: Matrix Algebra, Indexing & Array Operations.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing MATLAB code.",
            "supportNotes": "Fully supported in modern MATLAB runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-matlab-101",
                "title": "MATLAB Matrix Algebra, Indexing & Array Operations Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.5 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-matlab-102",
                "title": "MATLAB Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Matrix Algebra, Indexing & Array Operations unlocks advanced problem-solving in MATLAB.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-matlab-2",
        "title": "Module 2: 2D/3D Plotting, Visualization & Scripting",
        "description": "plot, surf, meshgrid, subplot, figure titles, and numerical simulation routines.",
        "quizId": "quiz-matlab-mod-2",
        "lessons": [
          {
            "id": "les-matlab-201",
            "title": "2D/3D Plotting, Visualization & Scripting Deep Dive",
            "readTime": "13 min",
            "videoDuration": "16:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/2Rz83z8Hn3w",
            "transcript": "00:00 Welcome to Module 2: 2D/3D Plotting, Visualization & Scripting!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for MATLAB.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "matlab",
            "starterCode": "% 2D Sine Wave Signal\nt = 0:0.01:2*pi;\ny = sin(2*pi*5*t) .* exp(-t);\n\nfigure;\nplot(t, y, 'LineWidth', 2, 'Color', [0.2 0.4 0.8]);\ngrid on;\ntitle('Damped Oscillation Signal');\nxlabel('Time (seconds)');\nylabel('Amplitude');",
            "definition": "MATLAB 2D/3D Plotting, Visualization & Scripting is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard MATLAB implementation pattern\n% 2D Sine Wave Signal\nt = 0:0.01:2*pi;\ny = sin(2*pi*5*t) .* exp(-t);\n",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for MATLAB routines."
              }
            ],
            "returnVal": "Standard MATLAB execution exit status and return data.",
            "examples": [
              {
                "title": "2D/3D Plotting, Visualization & Scripting Practical Example",
                "code": "% 2D Sine Wave Signal\nt = 0:0.01:2*pi;\ny = sin(2*pi*5*t) .* exp(-t);\n\nfigure;\nplot(t, y, 'LineWidth', 2, 'Color', [0.2 0.4 0.8]);\ngrid on;\ntitle('Damped Oscillation Signal');\nxlabel('Time (seconds)');\nylabel('Amplitude');",
                "explanation": "Demonstrates verified, runnable syntax for Module 2: 2D/3D Plotting, Visualization & Scripting.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing MATLAB code.",
            "supportNotes": "Fully supported in modern MATLAB runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-matlab-201",
                "title": "MATLAB 2D/3D Plotting, Visualization & Scripting Architecture Guide (PDF)",
                "type": "PDF",
                "size": "2.9 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-matlab-202",
                "title": "MATLAB Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering 2D/3D Plotting, Visualization & Scripting unlocks advanced problem-solving in MATLAB.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      },
      {
        "id": "mod-matlab-3",
        "title": "Module 3: Linear Systems, ODE Solvers & Simulink Integration",
        "description": "Solving Ax=b via backslash operator, ode45 differential equations, and engineering workflows.",
        "quizId": "quiz-matlab-mod-3",
        "lessons": [
          {
            "id": "les-matlab-301",
            "title": "Linear Systems, ODE Solvers & Simulink Integration Deep Dive",
            "readTime": "16 min",
            "videoDuration": "20:30",
            "videoUrl": "https://www.youtube-nocookie.com/embed/0K42_oQ_x8E",
            "transcript": "00:00 Welcome to Module 3: Linear Systems, ODE Solvers & Simulink Integration!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for MATLAB.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.",
            "hasCodeEditor": true,
            "language": "matlab",
            "starterCode": "% Solving System of Linear Equations Ax = b\nA = [3, 2, -1; 2, -2, 4; -1, 0.5, -1];\nb = [1; -2; 0];\n\nx = A \\ b;\ndisp('Solution Vector x:');\ndisp(x);",
            "definition": "MATLAB Linear Systems, ODE Solvers & Simulink Integration is a fundamental pillar of writing clean, high-performance, and maintainable software.",
            "syntax": "// Standard MATLAB implementation pattern\n% Solving System of Linear Equations Ax = b\nA = [3, 2, -1; 2, -2, 4; -1, 0.5, -1];\nb = [1; -2; 0];\n",
            "parameters": [
              {
                "name": "config",
                "type": "Object / Parameter",
                "required": true,
                "default": "Standard",
                "description": "Configures runtime execution for MATLAB routines."
              }
            ],
            "returnVal": "Standard MATLAB execution exit status and return data.",
            "examples": [
              {
                "title": "Linear Systems, ODE Solvers & Simulink Integration Practical Example",
                "code": "% Solving System of Linear Equations Ax = b\nA = [3, 2, -1; 2, -2, 4; -1, 0.5, -1];\nb = [1; -2; 0];\n\nx = A \\ b;\ndisp('Solution Vector x:');\ndisp(x);",
                "explanation": "Demonstrates verified, runnable syntax for Module 3: Linear Systems, ODE Solvers & Simulink Integration.",
                "runnable": true
              }
            ],
            "gotchas": "Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing MATLAB code.",
            "supportNotes": "Fully supported in modern MATLAB runtimes and IDE compilers.",
            "relatedConcepts": [
              "Data Structures & Algorithms",
              "Memory Efficiency",
              "Clean Architecture",
              "Concurrency & Asynchronous I/O"
            ],
            "resources": [
              {
                "id": "res-matlab-301",
                "title": "MATLAB Linear Systems, ODE Solvers & Simulink Integration Architecture Guide (PDF)",
                "type": "PDF",
                "size": "3.3 MB",
                "downloadUrl": "#"
              },
              {
                "id": "res-matlab-302",
                "title": "MATLAB Quick Reference & Cheatsheet",
                "type": "Cheat Sheet",
                "size": "850 KB",
                "downloadUrl": "#"
              }
            ],
            "keyTakeaways": [
              "Mastering Linear Systems, ODE Solvers & Simulink Integration unlocks advanced problem-solving in MATLAB.",
              "Always leverage standard libraries and built-in type checkers for optimal reliability.",
              "Test your code in the online interactive editor sandbox before taking the module quiz."
            ]
          }
        ]
      }
    ],
    "finalExamId": "exam-matlab-final",
    "glossary": [
      {
        "term": "MATLAB Runtime",
        "definition": "The execution environment that executes compiled or interpreted MATLAB instructions."
      },
      {
        "term": "Syntax",
        "definition": "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs."
      },
      {
        "term": "Data Structures",
        "definition": "Specialized formats for organizing, processing, retrieving, and storing data."
      }
    ]
  }
];
