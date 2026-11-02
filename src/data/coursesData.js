// Reference-Depth Master Course Curriculum Database for EduMind.AI
// Merges Programming Fundamentals, 20 Core Language Courses, and Advanced Masterclasses

import { FUNDAMENTALS_COURSE } from './fundamentalsCourse';
import { PROGRAMMING_LANGUAGES_COURSES } from './programmingLanguagesCourses';

// Base courses (Foundations and Advanced)
const BASE_COURSES = [
  {
    id: 'python-beginners',
    title: 'Python for Absolute Beginners: Zero to Mini-Project',
    subtitle: 'Learn programming fundamentals from scratch with zero prior experience. Master variables, loops, functions, and build a working terminal app.',
    category: 'Beginner Foundations',
    difficulty: 'Beginner',
    estimatedHours: 18,
    rating: 4.97,
    reviewsCount: 2310,
    language: 'Python',
    icon: '🐍',
    instructor: {
      name: 'Dr. Sarah Chen',
      role: 'Foundations Lead & Python Software Foundation Member',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'Award-winning educator who has introduced over 150,000 first-time students to programming.'
    },
    prerequisites: ['Zero prior coding experience required'],
    outcomes: [
      'Write your first Python program, variables, and handle user inputs',
      'Control program flow with if/elif/else statements and while/for loops',
      'Organize code with reusable functions and error handling'
    ],
    modules: [
      {
        id: 'mod-pyb-1',
        title: 'Module 1: Hello World, Variables & Basic Operations',
        description: 'Understand data types, string formatting, and mathematical operations.',
        quizId: 'quiz-pyb-mod-1',
        lessons: [
          {
            id: 'les-pyb-101',
            title: 'Printing to Screen & Variable Basics',
            readTime: '6 min',
            videoDuration: '4:30',
            videoUrl: 'https://www.youtube-nocookie.com/embed/rfscVS0vtbw',
            transcript: `00:00 Welcome to Python for Beginners.`,
            hasCodeEditor: true,
            language: 'python',
            starterCode: `learner_name = "Alex"
course_topic = "Python Basics"
print(f"Welcome {learner_name} to EduMind.AI {course_topic}!")`,
            definition: 'The print() function outputs text or values directly to the standard output screen.',
            syntax: 'print(*objects, sep=" ", end="\\n")',
            parameters: [
              { name: 'objects', type: 'Any', required: true, default: 'Required', description: 'Values to print' }
            ],
            returnVal: 'None',
            examples: [
              {
                title: 'Formatted Output',
                code: `price = 100\ntax = 0.08\nprint(f"Total: \\\${price * (1 + tax):.2f}")`,
                explanation: 'Calculates tax and formats float to 2 decimal places.',
                runnable: true
              }
            ],
            gotchas: 'Python is case sensitive: `Name` and `name` are separate variables.',
            supportNotes: 'Python 3.6+.',
            relatedConcepts: ['Variables', 'F-Strings'],
            resources: [{ id: 'res-1', title: 'Python Quick Start', type: 'PDF', size: '1.2 MB' }],
            keyTakeaways: ['print() displays text to console.']
          }
        ]
      }
    ],
    finalExamId: 'exam-pyb-final',
    glossary: [{ term: 'Variable', definition: 'A named container for data.' }]
  },

  {
    id: 'java-enterprise',
    title: 'Java 21 & Enterprise Cloud Architecture',
    subtitle: 'Master modern Java 21, Virtual Threads (Project Loom), Spring Boot microservices, and JVM performance tuning.',
    category: 'Enterprise Engineering',
    difficulty: 'Intermediate to Advanced',
    estimatedHours: 48,
    rating: 4.95,
    reviewsCount: 1180,
    language: 'Java',
    icon: '☕',
    instructor: {
      name: 'Christian Meyer',
      role: 'Principal Java Champion',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      bio: '20+ years building high-throughput systems.'
    },
    prerequisites: ['Basic OOP concepts'],
    outcomes: ['Write scalable concurrent code with Java 21 Virtual Threads'],
    modules: [
      {
        id: 'mod-java-1',
        title: 'Module 1: Modern Java 21 Syntax & Records',
        description: 'Eliminate boilerplate with immutable Record classes.',
        quizId: 'quiz-java-mod-1',
        lessons: [
          {
            id: 'les-java-101',
            title: 'Immutable Records & Pattern Matching',
            readTime: '11 min',
            videoDuration: '7:40',
            videoUrl: 'https://www.youtube-nocookie.com/embed/rfscVS0vtbw',
            transcript: `00:00 Java 21 Records.`,
            hasCodeEditor: true,
            language: 'java',
            starterCode: `public class Main {
    record Student(String name, int score) {}
    public static void main(String[] args) {
        Student s = new Student("Alex", 98);
        System.out.println("Student: " + s.name() + ", Score: " + s.score());
    }
}`,
            definition: 'A Record in Java is an immutable data-carrier class that automatically generates constructors, accessors, equals, and hashCode.',
            syntax: 'public record RecordName(Type field1, Type field2) {}',
            parameters: [
              { name: 'RecordName', type: 'Identifier', required: true, default: 'Required', description: 'PascalCase name' }
            ],
            returnVal: 'Instantiates immutable Record object.',
            examples: [
              {
                title: 'Record Accessor',
                code: `record User(String email) {}\nSystem.out.println(new User("a@b.com").email());`,
                explanation: 'Automatic accessor invocation.',
                runnable: true
              }
            ],
            gotchas: 'Records are shallowly immutable.',
            supportNotes: 'Java 21 LTS.',
            relatedConcepts: ['Virtual Threads', 'Sealed Interfaces'],
            resources: [{ id: 'res-1', title: 'Java 21 Syntax Guide', type: 'PDF', size: '2.4 MB' }],
            keyTakeaways: ['Records eliminate boilerplate code.']
          }
        ]
      }
    ],
    finalExamId: 'exam-java-final',
    glossary: [{ term: 'Virtual Threads', definition: 'Lightweight user-mode threads in JVM.' }]
  },

  {
    id: 'dsa-mastery',
    title: 'Data Structures & High-Performance Algorithms',
    subtitle: 'Conquer Trees, Graphs, Dynamic Programming, and complexity analysis for top-tier engineering interviews.',
    category: 'Computer Science',
    difficulty: 'Intermediate to Advanced',
    estimatedHours: 50,
    rating: 4.98,
    reviewsCount: 1670,
    language: 'JavaScript',
    icon: '🌳',
    instructor: {
      name: 'Priya Sharma',
      role: 'Staff Systems Engineer & ICPC Finalist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      bio: 'Algorithmist with deep expertise in graph theory.'
    },
    prerequisites: ['Basic programming familiarity'],
    outcomes: ['Master Big-O analysis, Trees, Heaps, and Dynamic Programming'],
    modules: [
      {
        id: 'mod-dsa-1',
        title: 'Module 1: Binary Search & Complexity Analysis',
        description: 'Analyze algorithm efficiency with Big-O notation.',
        quizId: 'quiz-dsa-mod-1',
        lessons: [
          {
            id: 'les-dsa-101',
            title: 'Binary Search & The Logarithmic Advantage',
            readTime: '11 min',
            videoDuration: '8:10',
            videoUrl: 'https://www.youtube-nocookie.com/embed/rfscVS0vtbw',
            transcript: `00:00 The Power of Logarithmic Search.`,
            hasCodeEditor: true,
            language: 'javascript',
            starterCode: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log("Index of 7 in [1,3,5,7,9]:", binarySearch([1,3,5,7,9], 7));`,
            definition: 'Binary Search is an efficient divide-and-conquer algorithm that locates a value in a sorted array in O(log n) time.',
            syntax: 'binarySearch(sortedArray, target)',
            parameters: [
              { name: 'sortedArray', type: 'Array', required: true, default: 'Required', description: 'Sorted items' }
            ],
            returnVal: 'Index or -1',
            examples: [
              {
                title: 'Finding Item',
                code: `console.log(binarySearch([2,4,6,8,10], 8));`,
                explanation: 'Returns index 3 in 2 steps.',
                runnable: true
              }
            ],
            gotchas: 'Array must be sorted prior to binary search.',
            supportNotes: 'Universal algorithm.',
            relatedConcepts: ['Two Pointers', 'Big-O'],
            resources: [{ id: 'res-1', title: 'DSA Cheatsheet', type: 'PDF', size: '2.8 MB' }],
            keyTakeaways: ['Reduces search time from O(n) to O(log n).']
          }
        ]
      }
    ],
    finalExamId: 'exam-dsa-final',
    glossary: [{ term: 'Binary Search', definition: 'Search algorithm that divides search space in half.' }]
  },

  {
    id: 'fullstack-react',
    title: 'Full-Stack Modern React 19 & Cloud Architecture',
    subtitle: 'Build production-ready React 19 web applications with Next.js, Server Actions, Tailwind CSS, and scalable cloud state management.',
    category: 'Web Development',
    difficulty: 'Intermediate to Advanced',
    estimatedHours: 46,
    rating: 4.97,
    reviewsCount: 1940,
    language: 'JavaScript',
    icon: '⚛️',
    instructor: {
      name: 'Samantha Taylor',
      role: 'Principal Frontend Architect',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      bio: 'Author of enterprise React design systems.'
    },
    prerequisites: ['JavaScript ES6+ fundamentals'],
    outcomes: ['Build enterprise React 19 applications with hooks and context'],
    modules: [
      {
        id: 'mod-react-1',
        title: 'Module 1: React 19 Hooks & State Pipelines',
        description: 'useState, useEffect, and reactive component lifecycles.',
        quizId: 'quiz-react-mod-1',
        lessons: [
          {
            id: 'les-react-101',
            title: 'Modern React Component State & Effects',
            readTime: '9 min',
            videoDuration: '6:15',
            videoUrl: 'https://www.youtube-nocookie.com/embed/rfscVS0vtbw',
            transcript: `00:00 Welcome to React 19.`,
            hasCodeEditor: true,
            language: 'javascript',
            starterCode: `// React Functional State Concept
function createCounter() {
  let count = 0;
  return {
    increment: () => { count++; console.log("State updated:", count); return count; },
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment();
counter.increment();`,
            definition: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces with component state pipelines.',
            syntax: 'const [state, setState] = useState(initial);',
            parameters: [],
            returnVal: 'Virtual DOM nodes.',
            examples: [
              {
                title: 'State Hook Usage',
                code: `console.log("React State Pipeline Active");`,
                explanation: 'Manages reactive state.',
                runnable: true
              }
            ],
            gotchas: 'Never mutate state directly; always use setter functions.',
            supportNotes: 'React 18 & 19.',
            relatedConcepts: ['Virtual DOM', 'JSX', 'Hooks'],
            resources: [{ id: 'res-1', title: 'React 19 Cheatsheet', type: 'PDF', size: '2.5 MB' }],
            keyTakeaways: ['State triggers automatic UI re-renders.']
          }
        ]
      }
    ],
    finalExamId: 'exam-react-final',
    glossary: [{ term: 'Hooks', definition: 'Functions allowing state attachment to functional components.' }]
  }
];

// Combine all 21 Courses
export const COURSES_DATA = [
  FUNDAMENTALS_COURSE,
  ...PROGRAMMING_LANGUAGES_COURSES,
  ...BASE_COURSES
];
