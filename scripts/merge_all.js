import fs from 'fs';

const part1 = JSON.parse(fs.readFileSync('scripts/courses_part1.json', 'utf8'));
const part2 = JSON.parse(fs.readFileSync('scripts/courses_part2.json', 'utf8'));
const part3 = JSON.parse(fs.readFileSync('scripts/courses_part3.json', 'utf8'));
const part4 = JSON.parse(fs.readFileSync('scripts/courses_part4.json', 'utf8'));

const allParts = [...part1, ...part2, ...part3, ...part4];

const langPrefixMap = {
  'c-lang': 'c',
  'cpp-lang': 'cpp',
  'java-lang': 'java',
  'python-lang': 'python',
  'javascript-lang': 'javascript',
  'typescript-lang': 'typescript',
  'csharp-lang': 'csharp',
  'golang-lang': 'golang',
  'rust-lang': 'rust',
  'php-lang': 'php',
  'kotlin-lang': 'kotlin',
  'swift-lang': 'swift',
  'ruby-lang': 'ruby',
  'dart-lang': 'dart',
  'r-lang': 'r',
  'sql-lang': 'sql',
  'html-lang': 'html',
  'css-lang': 'css',
  'bash-lang': 'bash',
  'matlab-lang': 'matlab'
};

const codeLangMap = {
  'c-lang': 'c',
  'cpp-lang': 'cpp',
  'java-lang': 'java',
  'python-lang': 'python',
  'javascript-lang': 'javascript',
  'typescript-lang': 'typescript',
  'csharp-lang': 'csharp',
  'golang-lang': 'go',
  'rust-lang': 'rust',
  'php-lang': 'php',
  'kotlin-lang': 'kotlin',
  'swift-lang': 'swift',
  'ruby-lang': 'ruby',
  'dart-lang': 'dart',
  'r-lang': 'r',
  'sql-lang': 'sql',
  'html-lang': 'html',
  'css-lang': 'css',
  'bash-lang': 'bash',
  'matlab-lang': 'matlab'
};

const fullCourses = allParts.map(item => {
  const prefix = langPrefixMap[item.id] || item.id.replace('-lang', '');
  const langKey = codeLangMap[item.id] || 'javascript';

  const modules = item.mods.map((m, idx) => {
    const modNum = idx + 1;
    const modId = `mod-${prefix}-${modNum}`;
    const quizId = `quiz-${prefix}-mod-${modNum}`;
    const lesId = `les-${prefix}-${modNum}01`;

    return {
      id: modId,
      title: m.title,
      description: m.desc,
      quizId: quizId,
      lessons: [
        {
          id: lesId,
          title: m.title.replace(/^Module \d+:\s*/, '') + ' Deep Dive',
          readTime: `${10 + idx * 3} min`,
          videoDuration: `${12 + idx * 4}:30`,
          videoUrl: m.video,
          transcript: `00:00 Welcome to ${m.title}!\n01:15 In this comprehensive lesson, we cover essential fundamentals, architecture, and production coding patterns for ${item.language}.\n03:45 Step 1: Understanding core syntax, execution mechanics, and data layout.\n07:20 Step 2: Hands-on implementation in the online VS Code interactive compiler.\n12:10 Step 3: Best practices, memory management, common gotchas, and enterprise conventions.`,
          hasCodeEditor: true,
          language: langKey,
          starterCode: m.starter,
          definition: `${item.language} ${m.title.replace(/^Module \d+:\s*/, '')} is a fundamental pillar of writing clean, high-performance, and maintainable software.`,
          syntax: `// Standard ${item.language} implementation pattern\n${m.starter.split('\n').slice(0, 4).join('\n')}`,
          parameters: [
            {
              name: 'config',
              type: 'Object / Parameter',
              required: true,
              default: 'Standard',
              description: `Configures runtime execution for ${item.language} routines.`
            }
          ],
          returnVal: `Standard ${item.language} execution exit status and return data.`,
          examples: [
            {
              title: `${m.title.replace(/^Module \d+:\s*/, '')} Practical Example`,
              code: m.starter,
              explanation: `Demonstrates verified, runnable syntax for ${m.title}.`,
              runnable: true
            }
          ],
          gotchas: `Common Gotcha: Watch for type mismatches, scope boundaries, and unhandled edge conditions when executing ${item.language} code.`,
          supportNotes: `Fully supported in modern ${item.language} runtimes and IDE compilers.`,
          relatedConcepts: [
            'Data Structures & Algorithms',
            'Memory Efficiency',
            'Clean Architecture',
            'Concurrency & Asynchronous I/O'
          ],
          resources: [
            {
              id: `res-${prefix}-${modNum}01`,
              title: `${item.language} ${m.title.replace(/^Module \d+:\s*/, '')} Architecture Guide (PDF)`,
              type: 'PDF',
              size: `${(2.1 + modNum * 0.4).toFixed(1)} MB`,
              downloadUrl: '#'
            },
            {
              id: `res-${prefix}-${modNum}02`,
              title: `${item.language} Quick Reference & Cheatsheet`,
              type: 'Cheat Sheet',
              size: '850 KB',
              downloadUrl: '#'
            }
          ],
          keyTakeaways: [
            `Mastering ${m.title.replace(/^Module \d+:\s*/, '')} unlocks advanced problem-solving in ${item.language}.`,
            `Always leverage standard libraries and built-in type checkers for optimal reliability.`,
            `Test your code in the online interactive editor sandbox before taking the module quiz.`
          ]
        }
      ]
    };
  });

  return {
    id: item.id,
    title: item.title,
    subtitle: item.subtitle,
    category: item.category,
    difficulty: item.difficulty,
    estimatedHours: item.hours,
    rating: item.rating,
    reviewsCount: item.reviews,
    language: item.language,
    icon: item.icon,
    instructor: item.instructor,
    prerequisites: ['Basic computer literacy', 'Curiosity and passion for programming'],
    outcomes: [
      `Write, compile, and debug idiomatic ${item.language} programs from scratch`,
      `Design robust algorithms and data structures using modern ${item.language} standards`,
      `Understand memory management, execution lifecycles, and asynchronous concurrency`,
      `Pass module quizzes and earn your industry-verified ${item.language} Certificate of Completion`
    ],
    diagram: `
  +----------------------+      +----------------------+      +----------------------+
  | Source Code (${item.language}) | ---> | Compiler / Runtime   | ---> | Verified Execution   |
  +----------------------+      +----------------------+      +----------------------+
    `,
    modules: modules,
    finalExamId: `exam-${prefix}-final`,
    glossary: [
      { term: `${item.language} Runtime`, definition: `The execution environment that executes compiled or interpreted ${item.language} instructions.` },
      { term: 'Syntax', definition: 'The set of rules that defines the combinations of symbols that are considered to be correctly structured programs.' },
      { term: 'Data Structures', definition: 'Specialized formats for organizing, processing, retrieving, and storing data.' }
    ]
  };
});

const outContent = `// 20 Complete Programming Language Courses Database for EduMind.AI
// Covers: C, C++, Java, Python, JavaScript, TypeScript, C#, Go, Rust, PHP, Kotlin, Swift, Ruby, Dart, R, SQL, HTML, CSS, Bash, MATLAB

export const PROGRAMMING_LANGUAGES_COURSES = ${JSON.stringify(fullCourses, null, 2)};
`;

fs.writeFileSync('src/data/programmingLanguagesCourses.js', outContent, 'utf8');
console.log('Successfully generated src/data/programmingLanguagesCourses.js with 20 courses and 60 total modules!');
