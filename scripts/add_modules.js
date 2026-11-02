import fs from 'fs';
import { PROGRAMMING_LANGUAGES_COURSES } from '../src/data/programmingLanguagesCourses.js';

const moduleMap = {
  'c-lang': { modTitle: 'Module 2: Structs, Dynamic Memory & Pointers', topic: 'Pointers & Dynamic Allocation (malloc/free)', quizId: 'quiz-c-mod-2', lang: 'c', starter: '#include <stdio.h>\n#include <stdlib.h>\nstruct Item { int id; float price; };\nint main() {\n    struct Item *it = (struct Item*)malloc(sizeof(struct Item));\n    it->id = 1; it->price = 29.99f;\n    printf("Item ID: %d, Price: $%.2f\\n", it->id, it->price);\n    free(it);\n    return 0;\n}' },
  'cpp-lang': { modTitle: 'Module 2: OOP, Classes & Smart Pointers', topic: 'Classes, RAII & std::unique_ptr', quizId: 'quiz-cpp-mod-2', lang: 'cpp', starter: '#include <iostream>\n#include <memory>\nclass Agent { public: void act() { std::cout << "Agent action complete\\n"; } };\nint main() {\n    auto a = std::make_unique<Agent>();\n    a->act();\n    return 0;\n}' },
  'java-lang': { modTitle: 'Module 2: OOP, Interfaces & Collections', topic: 'Inheritance & HashMap', quizId: 'quiz-java-mod-2', lang: 'java', starter: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> map = new HashMap<>();\n        map.put("Java", 21);\n        System.out.println("Version: " + map.get("Java"));\n    }\n}' },
  'python-lang': { modTitle: 'Module 2: Advanced Python & Comprehensions', topic: 'Comprehensions & Decorators', quizId: 'quiz-python-mod-2', lang: 'python', starter: 'nums = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in nums if x % 2 != 0]\nprint("Odd Squares:", squares)' },
  'javascript-lang': { modTitle: 'Module 2: Async JS, Promises & ES6+', topic: 'Async/Await & Event Loop', quizId: 'quiz-javascript-mod-2', lang: 'javascript', starter: 'async function load() {\n  const res = await Promise.resolve({ ok: true, status: 200 });\n  console.log("Loaded status:", res.status);\n}\nload();' },
  'typescript-lang': { modTitle: 'Module 2: Generics & Advanced Types', topic: 'Generics & Utility Types', quizId: 'quiz-typescript-mod-2', lang: 'typescript', starter: 'interface Store<T> { data: T; }\nconst s: Store<string> = { data: "EduMind AI" };\nconsole.log(s.data);' },
  'csharp-lang': { modTitle: 'Module 2: LINQ, Records & Async .NET', topic: 'LINQ & Immutability', quizId: 'quiz-csharp-mod-2', lang: 'csharp', starter: 'using System;\nusing System.Linq;\npublic class Program {\n    public static void Main() {\n        int[] arr = { 1, 2, 3, 4, 5 };\n        Console.WriteLine("Evens: " + string.Join(", ", arr.Where(x => x % 2 == 0)));\n    }\n}' },
  'golang-lang': { modTitle: 'Module 2: Goroutines, Channels & Concurrency', topic: 'Goroutines & Channels', quizId: 'quiz-go-mod-2', lang: 'go', starter: 'package main\nimport "fmt"\nfunc main() {\n    ch := make(chan string, 1)\n    ch <- "Go Routine Message"\n    fmt.Println(<-ch)\n}' },
  'rust-lang': { modTitle: 'Module 2: Lifetimes, Traits & Pattern Matching', topic: 'Traits & Option Matching', quizId: 'quiz-rust-mod-2', lang: 'rust', starter: 'fn main() {\n    let opt = Some(42);\n    match opt {\n        Some(val) => println!("Value: {}", val),\n        None => (),\n    }\n}' },
  'php-lang': { modTitle: 'Module 2: PHP 8 OOP & Modern REST APIs', topic: 'Constructor Promotion & JSON', quizId: 'quiz-php-mod-2', lang: 'php', starter: '<?php\nclass User { public function __construct(public string $name) {} }\n$u = new User("Elena");\necho json_encode(["user" => $u->name]);' },
  'kotlin-lang': { modTitle: 'Module 2: Null Safety, Data Classes & Coroutines', topic: 'Null Safety & Data Classes', quizId: 'quiz-kotlin-mod-2', lang: 'kotlin', starter: 'data class Item(val id: Int, val title: String?)\nfun main() {\n    val it = Item(1, "Kotlin Masterclass")\n    println("Title: " + (it.title ?: "Default"))\n}' },
  'swift-lang': { modTitle: 'Module 2: Protocols, Optionals & SwiftUI', topic: 'Protocols & Guard Let', quizId: 'quiz-swift-mod-2', lang: 'swift', starter: 'protocol Drivable { func drive(); }\nstruct Car: Drivable { func drive() { print("Driving smoothly"); } }\nCar().drive()' },
  'ruby-lang': { modTitle: 'Module 2: Blocks, Procs & Enumerable', topic: 'Yield Blocks & Metaprogramming', quizId: 'quiz-ruby-mod-2', lang: 'ruby', starter: 'def run_twice; yield; yield; end\nrun_twice { puts "Executing block!" }' },
  'dart-lang': { modTitle: 'Module 2: Streams, Futures & Flutter State', topic: 'Futures & Async Streams', quizId: 'quiz-dart-mod-2', lang: 'dart', starter: 'void main() async {\n  final res = await Future.value("Dart async ready");\n  print(res);\n}' },
  'r-lang': { modTitle: 'Module 2: Data Manipulation (dplyr & ggplot2)', topic: 'Data Frames & Vectorization', quizId: 'quiz-r-mod-2', lang: 'r', starter: 'df <- data.frame(item = c("A", "B"), val = c(10, 20))\nprint(summary(df))' },
  'sql-lang': { modTitle: 'Module 2: Relational JOINs & Aggregations', topic: 'INNER/LEFT JOIN & GROUP BY', quizId: 'quiz-sql-mod-2', lang: 'sql', starter: 'SELECT u.name, COUNT(o.id) as orders FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.name;' },
  'html-lang': { modTitle: 'Module 2: Semantic HTML5 & Accessibility', topic: 'Semantic Layouts & Forms', quizId: 'quiz-html-mod-2', lang: 'html', starter: '<form aria-label="Login"><label for="u">User</label><input id="u" type="text" /><button>Submit</button></form>' },
  'css-lang': { modTitle: 'Module 2: CSS Flexbox, Grid & Responsiveness', topic: 'Grid Layouts & Media Queries', quizId: 'quiz-css-mod-2', lang: 'css', starter: '.grid-box { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }' },
  'bash-lang': { modTitle: 'Module 2: Control Flow & Automation Scripts', topic: 'Loops & Positional Parameters', quizId: 'quiz-bash-mod-2', lang: 'bash', starter: '#!/bin/bash\nfor item in "$@"; do\n    echo "Processing $item"\ndone' },
  'matlab-lang': { modTitle: 'Module 2: Matrix Computation & Visualization', topic: 'Vectorized Arrays & Plotting', quizId: 'quiz-matlab-mod-2', lang: 'matlab', starter: 't = 0:0.1:10;\ny = sin(t);\nfprintf("Max amplitude: %.2f\\n", max(y));' }
};

for (const c of PROGRAMMING_LANGUAGES_COURSES) {
  const info = moduleMap[c.id];
  if (info && c.modules.length < 2) {
    const video = c.modules[0]?.lessons[0]?.videoUrl || 'https://www.youtube-nocookie.com/embed/yoHtxG11i7U';
    c.modules.push({
      id: info.quizId.replace('quiz-', 'mod-'),
      title: info.modTitle,
      description: 'Deep dive into ' + info.topic + ' with real-world architecture patterns and hands-on coding practice.',
      quizId: info.quizId,
      lessons: [
        {
          id: info.quizId.replace('quiz-', 'les-') + '-01',
          title: info.topic + ' Master Lesson',
          readTime: '12 min',
          videoDuration: '14:00',
          videoUrl: video,
          transcript: '00:00 In this lesson we master ' + info.topic + ' with production code examples and best practices.',
          hasCodeEditor: true,
          language: info.lang,
          starterCode: info.starter,
          definition: info.topic + ' is a core concept enabling clean, performant and scalable software architecture.',
          syntax: '// Standard ' + info.topic + ' implementation',
          parameters: [],
          returnVal: 'Production-ready execution.',
          examples: [
            {
              title: info.topic + ' Practical Example',
              code: info.starter,
              explanation: 'Demonstrates key mechanics and idiom in action.',
              runnable: true
            }
          ],
          gotchas: 'Common Gotcha: Edge cases and null checks should always be guarded defensively.',
          supportNotes: 'Industry best practices.',
          relatedConcepts: [info.topic, 'Design Patterns', 'Performance Optimization'],
          resources: [
            { id: 'res-' + c.id + '-201', title: info.topic + ' Reference Guide (PDF)', type: 'PDF', size: '2.2 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'Mastering ' + info.topic + ' elevates code quality and performance.',
            'Always test edge cases and guard against unexpected inputs.'
          ]
        }
      ]
    });
  }
}

const out = '// 20 Complete Programming Language Courses Database for EduMind.AI\n// Covers: C, C++, Java, Python, JavaScript, TypeScript, C#, Go, Rust, PHP, Kotlin, Swift, Ruby, Dart, R, SQL, HTML, CSS, Bash, MATLAB\n\nexport const PROGRAMMING_LANGUAGES_COURSES = ' + JSON.stringify(PROGRAMMING_LANGUAGES_COURSES, null, 2) + ';\n';

fs.writeFileSync('./src/data/programmingLanguagesCourses.js', out, 'utf8');
console.log('Successfully appended Module 2 to all 20 language courses!');
