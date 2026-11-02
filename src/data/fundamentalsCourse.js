// Programming Fundamentals Course Data for EduMind.AI
// Teaches the universal principles of computer programming common to all languages

export const FUNDAMENTALS_COURSE = {
  id: 'programming-fundamentals',
  title: 'Programming Fundamentals: The Universal Principles of Coding',
  subtitle: 'Master the foundational building blocks common to every programming language — from compilers and memory to algorithms and system design.',
  category: 'Foundations',
  difficulty: 'Beginner',
  estimatedHours: 30,
  rating: 4.99,
  reviewsCount: 3840,
  language: 'Pseudocode / Universal',
  icon: '🧠',
  instructor: {
    name: 'Prof. Alan Thorne',
    role: 'Distinguished Professor of Computer Science & Author',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    bio: '30+ years teaching computing fundamentals to over 200,000 engineers worldwide.'
  },
  prerequisites: [
    'No prior programming knowledge required',
    'Basic logical reasoning and arithmetic'
  ],
  outcomes: [
    'Understand how CPU, RAM, and compilers translate code into machine execution',
    'Master universal variables, control flow, loops, data structures, and functions',
    'Apply Object-Oriented Principles (OOP) and modern debugging techniques',
    'Analyze algorithm time and space complexity with Big-O notation',
    'Confidently choose and learn any programming language with ease'
  ],
  diagram: `
  +----------------------+      +----------------------+      +----------------------+      +------------------+
  | Source Code (.py/.c) | ---> | Compiler/Interpreter | ---> | Machine Code (0101s) | ---> | CPU Executes App |
  +----------------------+      +----------------------+      +----------------------+      +------------------+
  `,
  modules: [
    {
      id: 'mod-fund-1',
      title: 'Module 1: How Computers & Code Work',
      description: 'Understand source code, machine code, compiler vs interpreter, and computer memory.',
      quizId: 'quiz-fund-mod-1',
      lessons: [
        {
          id: 'les-fund-101',
          title: 'What is Programming? Compiler vs Interpreter',
          readTime: '10 min',
          videoDuration: '11:45',
          videoUrl: 'https://www.youtube-nocookie.com/embed/yoHtxG11i7U',
          transcript: `00:00 Welcome to Programming Fundamentals.
00:45 Programming is giving structured, unambiguous instructions to a computer to solve problems.
01:30 Compilers translate the entire source code to native machine code ahead of time (e.g. C, C++, Rust, Go).
02:45 Interpreters translate and execute source code line-by-line in real time (e.g. Python, JavaScript, Ruby).
04:00 Bytecode Virtual Machines (e.g. Java JVM, C# CLR) compile to intermediate bytecode that is JIT-compiled at runtime!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `# Programming is the translation of human logic into machine actions
def explain_execution_model(language_name, execution_type):
    return f"{language_name} uses a {execution_type} execution model."

print(explain_execution_model("C++", "Compiled (Ahead-Of-Time)"))
print(explain_execution_model("Python", "Interpreted / Bytecode"))
print(explain_execution_model("Java", "Hybrid Bytecode + JVM JIT"))`,
          definition: 'Programming is the process of creating a set of instructions that tell a computer how to perform a task using precise syntax and formal logic.',
          syntax: 'Source Code -> Translation Stage -> Machine Binary (0 & 1) -> CPU Execution',
          parameters: [
            { name: 'Source Code', type: 'Text File', required: true, default: 'Required', description: 'Human-readable instructions written in a programming language' },
            { name: 'Compiler', type: 'Translator Tool', required: true, default: 'Required', description: 'Translates high-level source code directly to machine binary' },
            { name: 'Interpreter', type: 'Runtime Engine', required: true, default: 'Required', description: 'Executes instructions directly line-by-line' }
          ],
          returnVal: 'Program output produced on stdout / UI display.',
          diagramText: `
  +-----------------------------------------------------------------------------------------+
  |                                 HOW CODE RUNS ON HARDWARE                               |
  +-----------------------------------------------------------------------------------------+
  | High-Level Code (Human)   -> Python, C++, Java, JavaScript, Rust                        |
  | Translation Engine        -> Compiler / JIT Interpreter / Bytecode Engine               |
  | Machine Code (Binary)     -> 01101001 01101110 01110100 01100101 (OpCodes & Registers) |
  | Hardware Execution        -> CPU ALU & Cache Registers -> Display Output                |
  +-----------------------------------------------------------------------------------------+
          `,
          examples: [
            {
              title: 'Comparing Compiled vs Interpreted Languages',
              code: `# Example of Dynamic Interpretation vs Static Types
number = 100        # In Python, variable types are inferred at runtime
number = "One Hundred"  # Reassignment is dynamically permitted
print("Dynamic Value:", number)`,
              explanation: 'Interpreted languages check types at runtime, whereas compiled languages enforce strict types during compile time.',
              runnable: true
            }
          ],
          gotchas: 'Common Gotcha: Assuming interpreted means slow and compiled means instant. Modern JIT (Just-In-Time) compilers in V8 (JS) and HotSpot (Java) optimize interpreted code into ultra-fast machine code dynamically.',
          supportNotes: 'Universal concept applicable to all 20+ programming languages.',
          relatedConcepts: ['CPU Architecture', 'Memory Hierarchy (RAM & Cache)', 'Syntax vs Semantics'],
          resources: [
            { id: 'res-fund-1', title: 'Universal Programming Fundamentals Roadmap (PDF)', type: 'PDF', size: '2.2 MB', downloadUrl: '#' }
          ],
          practiceProblem: {
            title: 'Identify the Execution Model',
            description: 'Write a function that accepts a programming language name and returns "Compiled", "Interpreted", or "Hybrid".',
            starterCode: `def get_model(lang):\n    # Write your classification logic\n    pass\n\nprint(get_model("Rust"))`,
            solutionCode: `def get_model(lang):\n    compiled = ["c", "c++", "rust", "go"]\n    interpreted = ["python", "ruby", "php", "javascript"]\n    hybrid = ["java", "c#", "kotlin"]\n    l = lang.lower()\n    if l in compiled: return "Compiled"\n    elif l in hybrid: return "Hybrid"\n    return "Interpreted"\n\nprint(get_model("Rust"))`,
            testCases: [
              { input: '"Rust"', expectedOutput: 'Compiled' },
              { input: '"Python"', expectedOutput: 'Interpreted' },
              { input: '"Java"', expectedOutput: 'Hybrid' }
            ]
          },
          keyTakeaways: [
            'All software ultimately executes as binary instructions (0s and 1s) on the CPU.',
            'Compilers translate before execution; interpreters translate during execution.',
            'Understanding memory and algorithms allows you to learn any language rapidly.'
          ]
        },
        {
          id: 'les-fund-102',
          title: 'Variables, Memory Allocation & Data Types',
          readTime: '12 min',
          videoDuration: '10:20',
          videoUrl: 'https://www.youtube-nocookie.com/embed/kM9ASKAni_s',
          transcript: `00:00 Variables are named memory addresses in computer RAM.
01:10 Primitive types (Integers, Floats, Characters, Booleans) store values directly in Stack memory.
02:30 Reference types (Objects, Arrays, Strings) store pointers to Heap memory!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `# Memory allocation demonstration
age = 25              # Integer (Stack allocated)
price = 99.95         # Float (Decimal)
is_active = True      # Boolean (True/False)
user_name = "Elena"   # String (Heap allocated array of characters)

print(f"User: {user_name}, Age: {age}, Price: \${price}, Active: {is_active}")`,
          definition: 'A variable is a symbolic name associated with a memory location that contains a value that may be modified during program execution.',
          syntax: 'datatype variable_name = initial_value; (Static) OR variable_name = value (Dynamic)',
          parameters: [
            { name: 'Integer', type: 'Whole Number', required: true, default: '0', description: 'Represents whole numbers without decimals (e.g. 42, -5)' },
            { name: 'Float / Double', type: 'Decimal Number', required: true, default: '0.0', description: 'Represents fractional real numbers (e.g. 3.14159)' },
            { name: 'Boolean', type: 'Logical Value', required: true, default: 'false', description: 'Binary truth value: true or false' },
            { name: 'String', type: 'Character Sequence', required: true, default: '""', description: 'Text encoded as UTF-8 / ASCII bytes' }
          ],
          returnVal: 'Allocates memory in RAM.',
          diagramText: `
  +-----------------------------------------------------------------------------------------+
  |                           STACK VS HEAP MEMORY ARCHITECTURE                             |
  +-----------------------------------------------------------------------------------------+
  | STACK (Fast, Fixed-Size, LIFO)  | HEAP (Dynamic, Flexible, Garbage Collected)           |
  |---------------------------------|-------------------------------------------------------|
  | age = 25 (4 bytes)              | "Elena" -> ['E','l','e','n','a'] (Array buffer)       |
  | is_active = True (1 byte)       | UserObject -> { id: 101, email: "elena@edumind.ai" }  |
  | user_ptr = 0x7FFE -> (Heap Ref) | Large Lists & Collections                             |
  +-----------------------------------------------------------------------------------------+
          `,
          examples: [
            {
              title: 'Data Types Reference Table in Action',
              code: `int_val = 10\nfloat_val = 10.5\nstr_val = "EduMind"\nbool_val = True\n\nprint("Types:", type(int_val), type(float_val), type(str_val), type(bool_val))`,
              explanation: 'Demonstrates Python dynamically determining fundamental data types.',
              runnable: true
            }
          ],
          gotchas: 'Common Gotcha: Integer overflow in languages with fixed bit widths (like C or Java 32-bit `int` exceeding 2,147,483,647). Python automatically converts to arbitrary-precision integers.',
          supportNotes: 'Universal across all programming languages.',
          relatedConcepts: ['Stack vs Heap', 'Pointers & References', 'Garbage Collection'],
          resources: [
            { id: 'res-fund-2', title: 'Universal Data Types Cheatsheet (PDF)', type: 'PDF', size: '1.5 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'Stack stores fast, fixed-size primitive variables.',
            'Heap stores dynamic, variable-size objects and collections.',
            'Type safety prevents logical crashes and memory corruptions.'
          ]
        },
        {
          id: 'les-fund-103',
          title: 'Conditionals, Control Flow & Flowcharts',
          readTime: '10 min',
          videoDuration: '9:15',
          videoUrl: 'https://www.youtube-nocookie.com/embed/8mAITcNt710',
          transcript: `00:00 Conditional logic directs the decision-making flow of your code.
01:00 If conditions evaluate Boolean expressions (True/False).
02:30 Else-if branches allow multi-way decisions.
03:45 Switch and Match statements provide clean pattern matching!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `def evaluate_grade(score):
    if score >= 90:
        return "A (Distinction) 🌟"
    elif score >= 80:
        return "B (Proficient) 👍"
    elif score >= 70:
        return "C (Passing) ✓"
    else:
        return "Retake Required 🔄"

print("Score 95:", evaluate_grade(95))
print("Score 82:", evaluate_grade(82))
print("Score 65:", evaluate_grade(65))`,
          definition: 'Conditional statements allow programs to execute specific blocks of code based on whether a specified Boolean test condition evaluates to true or false.',
          syntax: 'if (condition) { /* true block */ } else if (other) { /* second */ } else { /* default */ }',
          parameters: [
            { name: 'condition', type: 'Boolean Expression', required: true, default: 'Required', description: 'Expression resolving to true or false' }
          ],
          returnVal: 'Directs program control flow.',
          diagramText: `
  +-----------------------------------------------------------------------------------------+
  |                              CONDITIONAL FLOWCHART LOGIC                                |
  +-----------------------------------------------------------------------------------------+
  |                                       [Input: Score]                                    |
  |                                             |                                           |
  |                                             v                                           |
  |                                   < Is Score >= 90? >                                   |
  |                                     /             \\                                     |
  |                              (True)/               \\(False)                             |
  |                                   v                 v                                   |
  |                            [Grade: 'A']   < Is Score >= 80? >                           |
  |                                             /             \\                             |
  |                                      (True)/               \\(False)                     |
  |                                           v                 v                           |
  |                                    [Grade: 'B']       [Grade: 'C/Retake']               |
  +-----------------------------------------------------------------------------------------+
          `,
          examples: [
            {
              title: 'Logical Operators (AND, OR, NOT)',
              code: `has_passed_exam = True\nhas_completed_lessons = True\n\nif has_passed_exam and has_completed_lessons:\n    print("Certificate Unlocked! 🎓")\nelse:\n    print("Keep studying to earn your credential!")`,
              explanation: 'Both operands must be True for the AND expression to execute the success branch.',
              runnable: true
            }
          ],
          gotchas: 'Common Gotcha: Using assignment `=` instead of equality comparison `==` inside conditional statements.',
          supportNotes: 'Universal across all programming languages.',
          relatedConcepts: ['Boolean Logic', 'Short-Circuit Evaluation', 'Ternary Operator'],
          resources: [
            { id: 'res-fund-3', title: 'Control Flow & Logic Flowcharts Guide', type: 'PDF', size: '1.8 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'Conditionals allow dynamic decision making.',
            'Short-circuit evaluation stops checking as soon as the result is determined.',
            'Always handle edge cases in the default else branch.'
          ]
        },
        {
          id: 'les-fund-104',
          title: 'Loops, Iteration & Algorithmic Time Complexity',
          readTime: '12 min',
          videoDuration: '12:30',
          videoUrl: 'https://www.youtube-nocookie.com/embed/8hly31xKli0',
          transcript: `00:00 Loops automate repetitive tasks without repeating code (DRY principle).
01:15 For loops iterate over a known range or sequence.
02:30 While loops continue running as long as a condition remains true.
04:00 Big-O notation measures how loop iterations scale as input size N grows!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `# Comparing O(N) Linear Loop vs O(1) Constant Math
def sum_linear(n):
    # O(N) Time Complexity: loops N times
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

def sum_constant(n):
    # O(1) Time Complexity: Gauss formula executes in 1 step!
    return (n * (n + 1)) // 2

N = 1_000_000
print(f"O(N) Sum up to {N:,}:", sum_linear(N))
print(f"O(1) Sum up to {N:,}:", sum_constant(N))`,
          definition: 'Loops are control flow structures that repeatedly execute a target block of instructions until a termination condition is reached.',
          syntax: 'for (init; condition; step) { ... } OR while (condition) { ... }',
          parameters: [
            { name: 'Initialization', type: 'Statement', required: true, default: 'i = 0', description: 'Sets starting counter state' },
            { name: 'Termination Condition', type: 'Boolean', required: true, default: 'i < N', description: 'Condition evaluated before each iteration' },
            { name: 'Step Expression', type: 'Statement', required: true, default: 'i++', description: 'Advances counter state after each loop' }
          ],
          returnVal: 'Executes block N times.',
          diagramText: `
  +-----------------------------------------------------------------------------------------+
  |                           BIG-O ASYMPTOTIC SCALE COMPARISON                             |
  +-----------------------------------------------------------------------------------------+
  | Operations ^                                                                            |
  |            |                                                    / O(2^N) Exponential   |
  |            |                                        / O(N^2) Quadratic (Nested Loops)   |
  |            |                            / O(N log N) Linearithmic (MergeSort)          |
  |            |                / O(N) Linear (Single Loop)                                 |
  |            |    / O(log N) Logarithmic (Binary Search)                                  |
  |            | --- O(1) Constant (Math / Hash Lookup)                                     |
  |            +---------------------------------------------------------> Input Size (N)   |
  +-----------------------------------------------------------------------------------------+
          `,
          examples: [
            {
              title: 'Break and Continue Loop Controls',
              code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nfor num in numbers:\n    if num % 2 == 0:\n        continue  # Skip even numbers\n    if num > 7:\n        break     # Stop loop entirely\n    print("Odd Number:", num)`,
              explanation: '`continue` skips to the next iteration; `break` exits the loop immediately.',
              runnable: true
            }
          ],
          gotchas: 'Common Gotcha: Infinite loops caused by forgetting to update the while loop counter or base case.',
          supportNotes: 'Universal programming concept.',
          relatedConcepts: ['Big-O Notation', 'Nested Loops', 'Recursion vs Iteration'],
          resources: [
            { id: 'res-fund-4', title: 'Big-O Complexity & Algorithms Master Guide', type: 'PDF', size: '2.5 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'For loops are best when number of iterations is known.',
            'While loops are best when waiting for an external condition.',
            'Minimize nested loops to keep algorithm runtime optimal.'
          ]
        }
      ]
    },

    // =========================================================================
    // MODULE 2: Functions, Call Stack & Scope
    // =========================================================================
    {
      id: 'mod-fund-2',
      title: 'Module 2: Functions, Call Stack & Scope',
      description: 'Master modular code design, function parameters, stack frames, closures, and variable lifetimes.',
      quizId: 'quiz-fund-mod-2',
      lessons: [
        {
          id: 'les-fund-201',
          title: 'Functions, Parameters & Return Values',
          readTime: '10 min',
          videoDuration: '14:20',
          videoUrl: 'https://www.youtube-nocookie.com/embed/8mAITcNt710',
          transcript: `00:00 Functions encapsulate logic into reusable, modular subroutines.
01:15 Function parameters accept input data; return statements send data back.
02:40 Pure functions return the exact same output given the same input without side effects!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `def calculate_discount(price, discount_percent=10):
    savings = price * (discount_percent / 100)
    final_price = price - savings
    return final_price, savings

final, saved = calculate_discount(250, 20)
print(f"Final Price: \${final:.2f}, Saved: \${saved:.2f}")`,
          definition: 'A function is a named, reusable sequence of statements that performs a specific computation and optionally returns a result.',
          syntax: 'def function_name(param1, param2): return result',
          parameters: [
            { name: 'Parameters', type: 'Variables', required: true, default: 'None', description: 'Inputs passed into function signature' }
          ],
          returnVal: 'Calculated output value.',
          diagramText: `
  +-----------------------------------------------------------------------------------------+
  |                                 THE CALL STACK LIFECYCLE                                |
  +-----------------------------------------------------------------------------------------+
  | [ Stack Frame: calculate_discount(250, 20) ] -> Local variables: (price, discount)    |
  | [ Stack Frame: main() / global execution   ] -> Global scope references                 |
  +-----------------------------------------------------------------------------------------+
          `,
          examples: [
            {
              title: 'Default Arguments',
              code: `def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\nprint(greet("Sarah"))\nprint(greet("Dennis", "Good morning"))`,
              explanation: 'Default arguments provide fallback values when optional parameters are omitted.',
              runnable: true
            }
          ],
          gotchas: 'Common Gotcha: Mutating default mutable parameters in Python. Always use None as default.',
          supportNotes: 'Functions are first-class citizens in modern languages.',
          relatedConcepts: ['Pure Functions', 'Side Effects', 'Call Stack Frames'],
          resources: [
            { id: 'res-fund-5', title: 'Functional & Modular Architecture Guide', type: 'PDF', size: '1.7 MB', downloadUrl: '#' }
          ],
          practiceProblem: {
            title: 'Area Calculator',
            description: 'Write a function calculate_area(length, width) that returns the rectangle area, or -1 if any dimension is non-positive.',
            starterCode: `def calculate_area(length, width):\n    # Write logic\n    pass\n\nprint(calculate_area(5, 4))`,
            solutionCode: `def calculate_area(length, width):\n    if length <= 0 or width <= 0: return -1\n    return length * width\n\nprint(calculate_area(5, 4))`,
            testCases: [
              { input: '5, 4', expectedOutput: '20' },
              { input: '-2, 10', expectedOutput: '-1' }
            ]
          },
          keyTakeaways: [
            'Functions promote code reuse and separation of concerns.',
            'Keep functions small and focused on doing one single task well.'
          ]
        },
        {
          id: 'les-fund-202',
          title: 'Scope, Closures & Variable Lifetime',
          readTime: '11 min',
          videoDuration: '10:50',
          videoUrl: 'https://www.youtube-nocookie.com/embed/zOjov-2OZ0E',
          transcript: `00:00 Variable scope determines where in code a variable is accessible.
01:30 Global vs Local vs Block scope.
02:45 Closures occur when an inner function remembers variables from its outer enclosing scope!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `def make_multiplier(factor):
    def multiplier(number):
        return number * factor
    return multiplier

double = make_multiplier(2)
triple = make_multiplier(3)

print("Double 15:", double(15))
print("Triple 15:", triple(15))`,
          definition: 'Scope is the visibility and lifetime context of identifiers in a program.',
          syntax: 'Local -> Enclosing -> Global -> Built-in (LEGB Rule)',
          parameters: [],
          returnVal: 'Enclosing state preservation.',
          examples: [
            {
              title: 'Stateful Counter with Closures',
              code: `def make_counter():\n    count = 0\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    return increment\n\nc = make_counter()\nprint(c())\nprint(c())`,
              explanation: 'Preserves access to count across calls without global pollution.',
              runnable: true
            }
          ],
          gotchas: 'Common Gotcha: Variable shadowing when local name matches outer global name.',
          supportNotes: 'Essential for modern JS, Python, and Kotlin.',
          relatedConcepts: ['Lexical Scope', 'Closures'],
          resources: [
            { id: 'res-fund-6', title: 'Scope & Lifetime Guide', type: 'PDF', size: '1.4 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'Limit variable scope as narrowly as possible.',
            'Closures enable private state encapsulation.'
          ]
        }
      ]
    },

    // =========================================================================
    // MODULE 3: Core Data Structures & Search/Sort Algorithms
    // =========================================================================
    {
      id: 'mod-fund-3',
      title: 'Module 3: Essential Data Structures & Algorithms',
      description: 'Arrays, Hash Tables, Linked Lists, Stacks, Queues, Binary Search, and Sorting algorithms.',
      quizId: 'quiz-fund-mod-3',
      lessons: [
        {
          id: 'les-fund-301',
          title: 'Arrays vs Hash Tables: Memory & Time Complexity',
          readTime: '13 min',
          videoDuration: '16:00',
          videoUrl: 'https://www.youtube-nocookie.com/embed/8hly31xKli0',
          transcript: `00:00 Data structures organize and store data for efficient access.
01:30 Arrays provide O(1) random index access via contiguous memory buffers.
03:00 Hash Tables map keys to values with O(1) average lookup using hashing algorithms!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `user_db = {
    "usr_101": {"name": "Elena Rostova", "role": "Senior Architect"},
    "usr_102": {"name": "Marcus Vance", "role": "Full-Stack Engineer"}
}

user = user_db.get("usr_101")
print("User Lookup:", user["name"], "-", user["role"])`,
          definition: 'An Array stores elements in contiguous memory. A Hash Table maps keys to values using hash algorithms.',
          syntax: 'Array: arr[idx] (O(1)) | Hash Table: map[key] (O(1))',
          parameters: [],
          returnVal: 'Value retrieved.',
          examples: [
            {
              title: 'Two Sum Problem O(N)',
              code: `def two_sum(nums, target):\n    lookup = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in lookup: return [lookup[diff], i]\n        lookup[num] = i\n    return []\n\nprint("Indices:", two_sum([2, 7, 11, 15], 9))`,
              explanation: 'Hash map achieves linear O(N) time.',
              runnable: true
            }
          ],
          gotchas: 'Common Gotcha: Hash collisions handled via chaining or open addressing.',
          supportNotes: 'Universal data structures in all languages.',
          relatedConcepts: ['Hash Functions', 'Amortized O(1)'],
          resources: [
            { id: 'res-fund-8', title: 'Data Structures Master Cheatsheet (PDF)', type: 'PDF', size: '2.8 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'Arrays are best for sequential index-based access.',
            'Hash tables are best for fast key-value lookups.'
          ]
        },
        {
          id: 'les-fund-302',
          title: 'Binary Search & Sorting: O(log N) vs O(N log N)',
          readTime: '12 min',
          videoDuration: '14:45',
          videoUrl: 'https://www.youtube-nocookie.com/embed/8hly31xKli0',
          transcript: `00:00 Searching and sorting are fundamental CS algorithms.
01:30 Linear search is O(N).
03:00 Binary search divides a sorted collection in half each step for O(log N)!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `def binary_search(sorted_arr, target):
    low, high, steps = 0, len(sorted_arr) - 1, 0
    while low <= high:
        steps += 1
        mid = (low + high) // 2
        if sorted_arr[mid] == target: return mid, steps
        elif sorted_arr[mid] > target: high = mid - 1
        else: low = mid + 1
    return -1, steps

dataset = list(range(1, 1_000_001))
idx, steps = binary_search(dataset, 742_951)
print(f"Found at index {idx} in only {steps} comparisons!")`,
          definition: 'Binary search is an efficient O(log N) search algorithm on sorted collections.',
          syntax: 'mid = (low + high) // 2; check target == arr[mid]',
          parameters: [],
          returnVal: 'Index of found element.',
          examples: [
            {
              title: 'Standard Timsort O(N log N)',
              code: `nums = [42, 12, 88, 3, 99, 15, 7, 23]\nnums.sort()\nprint("Sorted:", nums)`,
              explanation: 'Efficient language sort runs in O(N log N).',
              runnable: true
            }
          ],
          gotchas: 'Binary search requires sorted array in advance.',
          supportNotes: 'Foundational algorithm.',
          relatedConcepts: ['Logarithmic Time', 'Sorting Algorithms'],
          resources: [
            { id: 'res-fund-9', title: 'Search & Sort Guide', type: 'PDF', size: '2.1 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'Binary search reduces 1 billion checks to ~30 steps.'
          ]
        }
      ]
    },

    // =========================================================================
    // MODULE 4: Object-Oriented Design & Clean Architecture
    // =========================================================================
    {
      id: 'mod-fund-4',
      title: 'Module 4: Object-Oriented Design & Clean Code',
      description: 'Master Encapsulation, Inheritance, Polymorphism, Abstraction, and SOLID architecture principles.',
      quizId: 'quiz-fund-mod-4',
      lessons: [
        {
          id: 'les-fund-401',
          title: 'The 4 Pillars of OOP: Classes, Objects & Polymorphism',
          readTime: '14 min',
          videoDuration: '18:30',
          videoUrl: 'https://www.youtube-nocookie.com/embed/pTB0EiLXUC8',
          transcript: `00:00 OOP models real-world domain logic into cohesive objects.
01:30 The 4 Pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism.
03:00 Encapsulation protects private state; Polymorphism allows different classes to share identical interfaces!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `class BankAccount:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self.__balance = balance # Private
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    def get_balance(self):
        return self.__balance

acc = BankAccount("Elena Rostova", 500.0)
acc.deposit(250.0)
print(f"Owner: {acc.owner}, Balance: \${acc.get_balance():.2f}")`,
          definition: 'OOP is a paradigm based on objects containing state (attributes) and behavior (methods).',
          syntax: 'class ClassName: def __init__(self): ...',
          parameters: [],
          returnVal: 'Object instance.',
          examples: [
            {
              title: 'Polymorphism in Action',
              code: `class Circle:\n    def __init__(self, r): self.r = r\n    def area(self): return 3.14159 * self.r * self.r\nclass Square:\n    def __init__(self, s): self.s = s\n    def area(self): return self.s * self.s\n\nshapes = [Circle(5), Square(4)]\nfor s in shapes: print(f"Area: {s.area():.2f}")`,
              explanation: 'Different classes share the same area() method signature.',
              runnable: true
            }
          ],
          gotchas: 'Favor Composition over deep inheritance trees.',
          supportNotes: 'Core paradigm in Java, C++, Python, C#, TypeScript.',
          relatedConcepts: ['Encapsulation', 'Polymorphism', 'SOLID'],
          resources: [
            { id: 'res-fund-10', title: 'OOP Design Patterns Guide', type: 'PDF', size: '3.1 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'Encapsulate state and behavior together.',
            'Program to interfaces rather than concrete implementations.'
          ]
        },
        {
          id: 'les-fund-402',
          title: 'Design Patterns & Robust Error Handling',
          readTime: '13 min',
          videoDuration: '15:20',
          videoUrl: 'https://www.youtube-nocookie.com/embed/tv-_1er1mWI',
          transcript: `00:00 Design patterns solve common architectural challenges.
01:30 Creational, Structural, and Behavioral patterns.
03:00 Robust error handling with try-catch guards against runtime halts!`,
          hasCodeEditor: true,
          language: 'python',
          starterCode: `# Strategy Pattern Example
class StandardShipping:
    def calculate(self, total): return 5.00
class ExpressShipping:
    def calculate(self, total): return 15.00

class Order:
    def __init__(self, total, strategy):
        self.total = total
        self.strategy = strategy
    def final_price(self):
        return self.total + self.strategy.calculate(self.total)

order = Order(100.0, ExpressShipping())
print(f"Total: \${order.final_price():.2f}")`,
          definition: 'Design patterns are standardized architectural templates for maintainable software.',
          syntax: 'Context Object -> Injected Strategy',
          parameters: [],
          returnVal: 'Flexible architecture.',
          examples: [
            {
              title: 'Defensive Exception Handling',
              code: `try:\n    val = int("42")\n    print("Parsed:", val)\nexcept ValueError as e:\n    print("Error:", e)\nfinally:\n    print("Cleanup completed.")`,
              explanation: 'try/except/finally prevents program termination on error.',
              runnable: true
            }
          ],
          gotchas: 'Never use bare except: pass.',
          supportNotes: 'Enterprise architectural patterns.',
          relatedConcepts: ['Strategy Pattern', 'Factory Pattern'],
          resources: [
            { id: 'res-fund-11', title: 'Top 10 Design Patterns (PDF)', type: 'PDF', size: '2.4 MB', downloadUrl: '#' }
          ],
          keyTakeaways: [
            'Decouple components for easier testing.',
            'Fail fast or handle exceptions gracefully.'
          ]
        }
      ]
    }
  ],
  finalExamId: 'exam-fund-final',
  glossary: [
    { term: 'Algorithm', definition: 'A step-by-step procedure for calculations and problem solving.' },
    { term: 'Compiler', definition: 'Translates source code to machine binary before execution.' },
    { term: 'Interpreter', definition: 'Executes instructions line-by-line in real time.' },
    { term: 'Big-O Notation', definition: 'Mathematical measure of algorithm asymptotic efficiency.' },
    { term: 'Encapsulation', definition: 'Bundling data and methods while restricting direct state access.' },
    { term: 'Polymorphism', definition: 'Ability of different types to respond to uniform method calls.' }
  ]
};

