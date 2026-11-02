import fs from 'fs';

const p4 = [
  {
    id: 'sql-lang', title: 'SQL & Relational Database Architecture Masterclass', subtitle: 'Master SQL, Relational Schema Design, Complex Multi-Table JOINs, Subqueries, Window Functions, and Index Optimization.',
    category: 'Databases & Data Engineering', difficulty: 'Beginner to Advanced', hours: 38, rating: 4.98, reviews: 3400, language: 'SQL', icon: '🗄️',
    instructor: { name: 'Kavita Patel', role: 'Staff Database Architect', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80', bio: 'Specialist in PostgreSQL, MySQL, and distributed query performance.' },
    mods: [
      { id: 'mod-sql-1', title: 'Module 1: Relational Foundations, DDL & DML Queries', desc: 'SELECT, WHERE, ORDER BY, GROUP BY, INSERT, UPDATE, DELETE, and data constraints.', video: 'https://www.youtube-nocookie.com/embed/HXV3zeRR3h4', starter: '-- SQL Query Example\nSELECT \n    department,\n    COUNT(id) AS employee_count,\n    ROUND(AVG(salary), 2) AS avg_salary\nFROM employees\nWHERE status = \'active\'\nGROUP BY department\nHAVING COUNT(id) > 2\nORDER BY avg_salary DESC;' },
      { id: 'mod-sql-2', title: 'Module 2: Multi-Table Relationships, JOINs & Subqueries', desc: 'INNER, LEFT, RIGHT, FULL OUTER JOINs, correlated subqueries, and UNION operations.', video: 'https://www.youtube-nocookie.com/embed/7S_tz1z_5bA', starter: '-- Multi-table INNER & LEFT JOIN\nSELECT \n    u.username,\n    o.order_id,\n    o.total_amount,\n    o.order_date\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE o.total_amount > 100.00\nORDER BY o.order_date DESC;' },
      { id: 'mod-sql-3', title: 'Module 3: Advanced Window Functions, CTEs & Index Optimization', desc: 'ROW_NUMBER(), RANK(), PARTITION BY, Common Table Expressions (WITH), and B-Tree indexing.', video: 'https://www.youtube-nocookie.com/embed/9Pzj7MxzcEQ', starter: '-- Window Function with CTE\nWITH RankedScores AS (\n    SELECT \n        student_name,\n        subject,\n        score,\n        DENSE_RANK() OVER (PARTITION BY subject ORDER BY score DESC) AS rank_pos\n    FROM exam_results\n)\nSELECT * FROM RankedScores WHERE rank_pos <= 3;' }
    ]
  },
  {
    id: 'html-lang', title: 'HTML5 Semantic Web Architecture & Accessibility', subtitle: 'Master modern semantic HTML5, accessible ARIA roles, modern forms, SEO optimization, and multimedia web components.',
    category: 'Web & Frontend', difficulty: 'Beginner to Intermediate', hours: 25, rating: 4.96, reviews: 2950, language: 'HTML', icon: '🌐',
    instructor: { name: 'Sarah Jenkins', role: 'Accessibility & Standards Engineer', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80', bio: 'W3C Accessibility Working Group contributor.' },
    mods: [
      { id: 'mod-html-1', title: 'Module 1: Document Anatomy, Semantic Structure & Text', desc: 'DOCTYPE, html/head/body, headings, paragraphs, lists, links, and semantic tags.', video: 'https://www.youtube-nocookie.com/embed/kUMe1FH4CHE', starter: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Semantic HTML5 Example</title>\n</head>\n<body>\n  <header>\n    <h1>EduMind.AI Platform</h1>\n    <nav>\n      <ul>\n        <li><a href="#courses">Courses</a></li>\n        <li><a href="#editor">Compiler</a></li>\n      </ul>\n    </nav>\n  </header>\n</body>\n</html>' },
      { id: 'mod-html-2', title: 'Module 2: Semantic Sections, Modern Forms & Validation', desc: 'header, nav, main, article, section, aside, footer, and HTML5 native form controls.', video: 'https://www.youtube-nocookie.com/embed/mJgBOIoGihA', starter: '<main>\n  <section aria-labelledby="form-heading">\n    <h2 id="form-heading">Student Registration</h2>\n    <form action="/register" method="POST">\n      <label for="uname">Full Name:</label>\n      <input type="text" id="uname" name="name" required placeholder="Elena Rostova">\n      <button type="submit">Enroll Now</button>\n    </form>\n  </section>\n</main>' },
      { id: 'mod-html-3', title: 'Module 3: Web Accessibility (a11y), ARIA & OpenGraph SEO', desc: 'ARIA attributes, screen reader optimization, landmark roles, and OpenGraph metadata.', video: 'https://www.youtube-nocookie.com/embed/UB1O30fR-EE', starter: '<article role="region" aria-label="Course Card">\n  <h3 tabindex="0">Mastering Web Standards</h3>\n  <p>Semantic markup ensures maximum accessibility across screen readers and devices.</p>\n  <button aria-expanded="false" aria-controls="extra-details">View Details</button>\n</article>' }
    ]
  },
  {
    id: 'css-lang', title: 'Modern CSS3, Flexbox, Grid & Responsive Layouts', subtitle: 'Master modern CSS, Flexbox, CSS Grid, custom properties (CSS Variables), transitions, keyframe animations, and container queries.',
    category: 'Web & Frontend', difficulty: 'Beginner to Advanced', hours: 32, rating: 4.97, reviews: 3100, language: 'CSS', icon: '🎨',
    instructor: { name: 'Liam Chen', role: 'Principal Design Technologist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', bio: 'CSS architecture specialist and design system author.' },
    mods: [
      { id: 'mod-css-1', title: 'Module 1: The Box Model, Selectors & Cascade Specificity', desc: 'Margin, border, padding, content, specificity calculus, and modern CSS custom variables.', video: 'https://www.youtube-nocookie.com/embed/1Rs2ND1ryYc', starter: ':root {\n  --primary: #4f46e5;\n  --surface: #ffffff;\n  --radius: 12px;\n}\n\n.card {\n  background: var(--surface);\n  border: 1px solid #e2e8f0;\n  border-radius: var(--radius);\n  padding: 24px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n}' },
      { id: 'mod-css-2', title: 'Module 2: Flexbox Alignment & CSS Grid Layouts', desc: 'One-dimensional Flexbox, two-dimensional CSS Grid (grid-template-columns, gap, auto-fit, minmax).', video: 'https://www.youtube-nocookie.com/embed/K74l26pE4YA', starter: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 16px;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}' },
      { id: 'mod-css-3', title: 'Module 3: Transitions, Keyframe Animations & Container Queries', desc: 'GPU-accelerated transforms, spring animations, @keyframes, and modern @container rules.', video: 'https://www.youtube-nocookie.com/embed/yfoY53QXEnI', starter: '@keyframes fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n\n.animated-banner {\n  animation: fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}' }
    ]
  },
  {
    id: 'bash-lang', title: 'Bash Scripting & Linux Terminal Automation', subtitle: 'Master Linux CLI, Unix pipelines, Shell scripting, I/O redirection, regex with grep/sed/awk, and cron jobs.',
    category: 'DevOps & Systems', difficulty: 'Beginner to Advanced', hours: 30, rating: 4.97, reviews: 2200, language: 'Bash', icon: '💻',
    instructor: { name: 'Dave Watson', role: 'Principal Site Reliability Engineer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', bio: 'Author of enterprise Linux automation playbooks.' },
    mods: [
      { id: 'mod-bash-1', title: 'Module 1: Terminal Fundamentals, Shell Variables & Conditionals', desc: 'Command execution, exit codes ($?), environment variables, and [ ... ] test expressions.', video: 'https://www.youtube-nocookie.com/embed/oxuRxtrO2Ag', starter: '#!/usr/bin/env bash\nset -euo pipefail\n\nTARGET_DIR="${1:-./logs}"\n\nif [ -d "$TARGET_DIR" ]; then\n    echo "[INFO] Found directory: $TARGET_DIR"\nelse\n    echo "[WARN] Directory not found, creating $TARGET_DIR..."\n    mkdir -p "$TARGET_DIR"\nfi' },
      { id: 'mod-bash-2', title: 'Module 2: Unix Pipelines, grep, sed & awk Data Processing', desc: 'Standard streams (stdin, stdout, stderr), pipe chains, and regex stream filtering.', video: 'https://www.youtube-nocookie.com/embed/v-F3YLd6oMw', starter: '#!/usr/bin/env bash\n# Filter active HTTP 200 responses from web logs\ncat access.log 2>/dev/null | grep " 200 " | awk \'{print $1, $7}\' | sort | uniq -c | sort -nr | head -n 5' },
      { id: 'mod-bash-3', title: 'Module 3: Functions, Cron Automation & Robust Error Traps', desc: 'Modular bash functions, trap cleanup handlers, arguments parsing, and systemd/cron triggers.', video: 'https://www.youtube-nocookie.com/embed/tK9Oc6AEnR4', starter: '#!/usr/bin/env bash\nset -eo pipefail\n\ncleanup() {\n    echo "[CLEANUP] Removing temp files..."\n    rm -f /tmp/edumind-*.tmp\n}\ntrap cleanup EXIT\n\necho "[INFO] Executing automated maintenance pipeline..."' }
    ]
  },
  {
    id: 'matlab-lang', title: 'MATLAB for Engineers: Matrix Computation & Simulation', subtitle: 'Master MATLAB syntax, vectorized matrix operations, numerical algorithms, Simulink models, and 2D/3D visualization.',
    category: 'Engineering & Simulation', difficulty: 'Beginner to Intermediate', hours: 34, rating: 4.95, reviews: 1750, language: 'MATLAB', icon: '🧮',
    instructor: { name: 'Prof. Hans Weber', role: 'Computational Physics Chair', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', bio: 'Author of Numerical Methods in Modern Engineering.' },
    mods: [
      { id: 'mod-matlab-1', title: 'Module 1: Matrix Algebra, Indexing & Array Operations', desc: 'Vectors, 2D matrices, element-wise dot operators (.*, ./), and slicing.', video: 'https://www.youtube-nocookie.com/embed/T_ekAD7U-wU', starter: '% MATLAB Matrix Fundamentals\nA = [1, 2, 3; 4, 5, 6; 7, 8, 9];\nB = eye(3) * 10;\n\n% Matrix multiplication vs Element-wise\nC = A * B;\nD = A .* B;\n\ndisp(\'Matrix Product A * B:\');\ndisp(C);' },
      { id: 'mod-matlab-2', title: 'Module 2: 2D/3D Plotting, Visualization & Scripting', desc: 'plot, surf, meshgrid, subplot, figure titles, and numerical simulation routines.', video: 'https://www.youtube-nocookie.com/embed/2Rz83z8Hn3w', starter: '% 2D Sine Wave Signal\nt = 0:0.01:2*pi;\ny = sin(2*pi*5*t) .* exp(-t);\n\nfigure;\nplot(t, y, \'LineWidth\', 2, \'Color\', [0.2 0.4 0.8]);\ngrid on;\ntitle(\'Damped Oscillation Signal\');\nxlabel(\'Time (seconds)\');\nylabel(\'Amplitude\');' },
      { id: 'mod-matlab-3', title: 'Module 3: Linear Systems, ODE Solvers & Simulink Integration', desc: 'Solving Ax=b via backslash operator, ode45 differential equations, and engineering workflows.', video: 'https://www.youtube-nocookie.com/embed/0K42_oQ_x8E', starter: '% Solving System of Linear Equations Ax = b\nA = [3, 2, -1; 2, -2, 4; -1, 0.5, -1];\nb = [1; -2; 0];\n\nx = A \\ b;\ndisp(\'Solution Vector x:\');\ndisp(x);' }
    ]
  }
];

fs.writeFileSync('scripts/courses_part4.json', JSON.stringify(p4, null, 2), 'utf8');
console.log('Successfully saved part 4 (SQL, HTML, CSS, Bash, MATLAB)');
