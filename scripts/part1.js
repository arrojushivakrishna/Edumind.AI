import fs from 'fs';

const p1 = [
  {
    id: 'c-lang', title: 'C Programming: The Master Foundation of Computing', subtitle: 'Understand memory, pointers, system calls, and hardware-level execution with the timeless language that built UNIX and Linux.',
    category: 'Systems & Low-Level', difficulty: 'Beginner to Intermediate', hours: 35, rating: 4.98, reviews: 3120, language: 'C', icon: '⚡',
    instructor: { name: 'Dr. Dennis Reynolds', role: 'Systems & Kernel Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', bio: '25 years in embedded systems.' },
    mods: [
      { id: 'mod-c-1', title: 'Module 1: Syntax, Variables & Compilation Pipeline', desc: 'Compilation stages (GCC/Clang), data types, and format specifiers.', video: 'https://www.youtube-nocookie.com/embed/KJgsSFOSQv0', starter: '#include <stdio.h>\n\nint main() {\n    printf("Welcome to C on EduMind.AI!\\n");\n    int year = 1972;\n    printf("C created in %d\\n", year);\n    return 0;\n}' },
      { id: 'mod-c-2', title: 'Module 2: Pointers, Memory Addresses & Pointer Arithmetic', desc: 'Addresses (&), dereference (*), and pointer arithmetic.', video: 'https://www.youtube-nocookie.com/embed/8yFqKz3LpBw', starter: '#include <stdio.h>\n\nint main() {\n    int val = 42;\n    int *p = &val;\n    *p = 100;\n    printf("Val via pointer: %d\\n", val);\n    return 0;\n}' },
      { id: 'mod-c-3', title: 'Module 3: Structs, Dynamic Memory (malloc/free) & File I/O', desc: 'Custom structs, heap allocation, and file operations.', video: 'https://www.youtube-nocookie.com/embed/87SH2Cn0s9A', starter: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Item { int id; float price; };\nint main() {\n    struct Item *it = (struct Item*)malloc(sizeof(struct Item));\n    it->id = 1; it->price = 49.99f;\n    printf("Item %d: $%.2f\\n", it->id, it->price);\n    free(it);\n    return 0;\n}' }
    ]
  },
  {
    id: 'cpp-lang', title: 'C++ Masterclass: High-Performance Systems & Modern C++20', subtitle: 'Master object-oriented programming, RAII, smart pointers, templates, and the STL for games and high-frequency trading.',
    category: 'Systems & Game Dev', difficulty: 'Beginner to Advanced', hours: 45, rating: 4.97, reviews: 2890, language: 'C++', icon: '🚀',
    instructor: { name: 'Marcus Vance', role: 'Principal Graphics & Engine Architect', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', bio: 'Former AAA game engine developer.' },
    mods: [
      { id: 'mod-cpp-1', title: 'Module 1: Modern C++ Syntax & STL std::vector', desc: 'Namespaces, streams, auto type deduction, and dynamic vectors.', video: 'https://www.youtube-nocookie.com/embed/vLnPwxZdW4Y', starter: '#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> scores = {95, 88, 76};\n    scores.push_back(100);\n    for (auto s : scores) std::cout << "Score: " << s << "\\n";\n    return 0;\n}' },
      { id: 'mod-cpp-2', title: 'Module 2: Object-Oriented C++, Classes & RAII', desc: 'Classes, constructors, destructors, and resource cleanup.', video: 'https://www.youtube-nocookie.com/embed/1v_4dL8280g', starter: '#include <iostream>\n\nclass Entity {\npublic:\n    Entity() { std::cout << "Created\\n"; }\n    ~Entity() { std::cout << "Destroyed (RAII)\\n"; }\n};\nint main() { Entity e; return 0; }' },
      { id: 'mod-cpp-3', title: 'Module 3: Smart Pointers (unique_ptr), Templates & Concurrency', desc: 'Smart pointers, generic templates, and multi-threading.', video: 'https://www.youtube-nocookie.com/embed/8jLOx1hD3_o', starter: '#include <iostream>\n#include <memory>\n\nint main() {\n    auto ptr = std::make_unique<int>(42);\n    std::cout << "Smart pointer val: " << *ptr << "\\n";\n    return 0;\n}' }
    ]
  },
  {
    id: 'java-lang', title: 'Java 21 Masterclass: Enterprise Cloud Architecture', subtitle: 'Master modern Java 21, Virtual Threads (Project Loom), OOP, Spring Boot microservices, and JVM performance tuning.',
    category: 'Enterprise Engineering', difficulty: 'Beginner to Advanced', hours: 48, rating: 4.95, reviews: 1180, language: 'Java', icon: '☕',
    instructor: { name: 'Christian Meyer', role: 'Principal Java Champion', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', bio: '20+ years building high-throughput Java systems.' },
    mods: [
      { id: 'mod-java-1', title: 'Module 1: Java 21 Syntax, JVM & Entry Point', desc: 'Bytecode, JVM architecture, types, and the main() method.', video: 'https://www.youtube-nocookie.com/embed/grEKMHGYyns', starter: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Java 21 Active on EduMind.AI!");\n    }\n}' },
      { id: 'mod-java-2', title: 'Module 2: OOP Inheritance, Interfaces & Polymorphism', desc: 'Abstract classes, interfaces, method overriding, and polymorphism.', video: 'https://www.youtube-nocookie.com/embed/xk4_1vDrzzo', starter: 'interface Greeter { void greet(); }\nclass Bot implements Greeter {\n    public void greet() { System.out.println("Hello from Java Bot!"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Greeter g = new Bot(); g.greet();\n    }\n}' },
      { id: 'mod-java-3', title: 'Module 3: Collections Framework, Streams API & Virtual Threads', desc: 'HashMap, ArrayList, functional Streams, and lightweight Virtual Threads.', video: 'https://www.youtube-nocookie.com/embed/eIrMbAQSU34', starter: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList("Java", "Kotlin", "Scala");\n        list.stream().map(String::toUpperCase).forEach(System.out::println);\n    }\n}' }
    ]
  },
  {
    id: 'python-lang', title: 'Python Mastery: Zero to Data Science & Web Engineering', subtitle: 'Master modern Python 3.12, OOP, decorators, asynchronous async/await, REST APIs, and data science pipelines.',
    category: 'Full-Stack & Data', difficulty: 'Beginner to Advanced', hours: 42, rating: 4.99, reviews: 4500, language: 'Python', icon: '🐍',
    instructor: { name: 'Dr. Sarah Chen', role: 'Python Lead Educator', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', bio: 'Taught over 200,000 students worldwide.' },
    mods: [
      { id: 'mod-py-1', title: 'Module 1: Python Fundamentals, Data Types & Control Flow', desc: 'Variables, dynamic typing, f-strings, conditionals, and loops.', video: 'https://www.youtube-nocookie.com/embed/rfscVS0vtbw', starter: 'user = "Elena"\nprint(f"Welcome {user} to Python 3.12 on EduMind.AI!")' },
      { id: 'mod-py-2', title: 'Module 2: Data Structures, Comprehensions & Lambdas', desc: 'Lists, Dictionaries, Sets, and list/dict comprehensions.', video: 'https://www.youtube-nocookie.com/embed/_uQrJ0TkZlc', starter: 'nums = [1, 2, 3, 4, 5, 6]\neven_squares = [x**2 for x in nums if x % 2 == 0]\nprint("Even Squares:", even_squares)' },
      { id: 'mod-py-3', title: 'Module 3: OOP Classes, Decorators, Generators & Asyncio', desc: 'Pythonic classes, custom decorators, generators, and async I/O.', video: 'https://www.youtube-nocookie.com/embed/nLRL_NcnK-4', starter: 'def logger(fn):\n    def wrapper(*args):\n        print(f"Calling {fn.__name__}...")\n        return fn(*args)\n    return wrapper\n\n@logger\ndef multiply(a, b): return a * b\nprint("Result:", multiply(6, 7))' }
    ]
  },
  {
    id: 'javascript-lang', title: 'Modern JavaScript & Full-Stack Node.js Masterclass', subtitle: 'Master ES2024+, asynchronous Event Loop, Promises, Async/Await, Web APIs, and Node.js backend development.',
    category: 'Web & Full-Stack', difficulty: 'Beginner to Advanced', hours: 40, rating: 4.96, reviews: 3750, language: 'JavaScript', icon: '🌐',
    instructor: { name: 'Alex Rivera', role: 'Staff Frontend Architect', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', bio: '12+ years in web development.' },
    mods: [
      { id: 'mod-js-1', title: 'Module 1: JavaScript Fundamentals, Scope & ES6+', desc: 'let/const, arrow functions, destructuring, and array methods.', video: 'https://www.youtube-nocookie.com/embed/PkZNo7MFNFg', starter: 'const user = { name: "Elena", role: "Architect" };\nconst { name, role } = user;\nconsole.log(`Engineer: ${name} (${role})`);' },
      { id: 'mod-js-2', title: 'Module 2: Asynchronous JS, Promises & Async/Await', desc: 'Event loop, Promises, async/await, and non-blocking I/O.', video: 'https://www.youtube-nocookie.com/embed/W6NZfCO5SIk', starter: 'async function fetchStatus() {\n  const res = await Promise.resolve({ ok: true });\n  console.log("Status resolved:", res.ok);\n}\nfetchStatus();' },
      { id: 'mod-js-3', title: 'Module 3: Closures, Prototypal Inheritance & Modules', desc: 'Lexical scope, closures, prototype chain, and ES Modules.', video: 'https://www.youtube-nocookie.com/embed/EerdGm-ehJQ', starter: 'function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = counter();\nconsole.log(c(), c(), c());' }
    ]
  }
];

fs.writeFileSync('scripts/courses_part1.json', JSON.stringify(p1, null, 2), 'utf8');
console.log('Saved part 1');
