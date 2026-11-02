import React, { createContext, useContext, useState, useEffect } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { QUIZZES_DATA } from '../data/quizzesData';
import { generateCertificateCode } from '../services/certificateService';

const CourseContext = createContext();

export function CourseProvider({ children }) {
  // Always load latest COURSES_DATA merged with custom CMS courses
  const [courses, setCourses] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_courses');
      if (!saved) return COURSES_DATA;
      const parsed = JSON.parse(saved);
      const baseCourseIds = new Set(COURSES_DATA.map(c => c.id));
      const customCourses = parsed.filter(c => !baseCourseIds.has(c.id));
      return [...COURSES_DATA, ...customCourses];
    } catch {
      return COURSES_DATA;
    }
  });

  const [enrolledCourseIds, setEnrolledCourseIds] = useState(() => {
    const defaultIds = ['python-lang', 'programming-fundamentals', 'java-lang', 'c-lang'];
    try {
      const saved = localStorage.getItem('edumind_enrolled_courses');
      if (!saved) return defaultIds;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultIds;
    } catch {
      return defaultIds;
    }
  });

  // Completed lessons map: { 'python-mastery': ['les-py-101', 'les-py-102'] }
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_completed_lessons');
      return saved ? JSON.parse(saved) : { 'python-beginners': ['les-pyb-101'] };
    } catch {
      return { 'python-beginners': ['les-pyb-101'] };
    }
  });

  // Quiz attempts map: { [quizId]: { bestScore: number, passed: boolean, attempts: [] } }
  const [quizAttempts, setQuizAttempts] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_quiz_attempts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // User issued certificates
  const [certificates, setCertificates] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_user_certificates');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Bookmarks state: array of { courseId, lessonId, title, courseTitle, bookmarkedAt }
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Personal Notes state: { [courseId_lessonId]: string }
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Helper to get active user name
  const getActiveUserName = () => {
    try {
      const u = localStorage.getItem('edumind_auth_user');
      if (u) {
        const parsed = JSON.parse(u);
        if (parsed && parsed.name) return parsed.name;
      }
    } catch {
      // Ignore
    }
    return 'Learner';
  };

  useEffect(() => {
    localStorage.setItem('edumind_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('edumind_enrolled_courses', JSON.stringify(enrolledCourseIds));
  }, [enrolledCourseIds]);

  useEffect(() => {
    localStorage.setItem('edumind_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('edumind_quiz_attempts', JSON.stringify(quizAttempts));
  }, [quizAttempts]);

  useEffect(() => {
    localStorage.setItem('edumind_user_certificates', JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem('edumind_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('edumind_notes', JSON.stringify(notes));
  }, [notes]);

  const toggleBookmark = (courseId, lessonId, title, courseTitle) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.courseId === courseId && b.lessonId === lessonId);
      if (exists) {
        return prev.filter(b => !(b.courseId === courseId && b.lessonId === lessonId));
      } else {
        return [{ courseId, lessonId, title, courseTitle, bookmarkedAt: new Date().toISOString() }, ...prev];
      }
    });
  };

  const isBookmarked = (courseId, lessonId) => {
    return bookmarks.some(b => b.courseId === courseId && b.lessonId === lessonId);
  };

  const saveNote = (courseId, lessonId, text) => {
    const key = `${courseId}_${lessonId}`;
    setNotes(prev => ({ ...prev, [key]: text }));
  };

  const getNote = (courseId, lessonId) => {
    const key = `${courseId}_${lessonId}`;
    return notes[key] || '';
  };

  // Calculate live progress % for a course
  const getCourseProgress = (courseId) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    
    let totalLessons = 0;
    (course.modules || []).forEach(mod => {
      totalLessons += (mod.lessons || []).length;
    });

    if (totalLessons === 0) return 0;

    const completed = (completedLessons[courseId] || []).length;
    const pct = Math.round((completed / totalLessons) * 100);
    return Math.min(100, Math.max(0, pct));
  };

  const enrollCourse = (courseId) => {
    if (!enrolledCourseIds.includes(courseId)) {
      setEnrolledCourseIds(prev => [...prev, courseId]);
    }
  };

  const markLessonComplete = (courseId, lessonId) => {
    setCompletedLessons(prev => {
      const currentList = prev[courseId] || [];
      if (!currentList.includes(lessonId)) {
        const nextList = [...currentList, lessonId];
        const updated = { ...prev, [courseId]: nextList };
        
        // Check if this unlocks certification (100% lessons + final exam passed)
        checkAndIssueCertificate(courseId, nextList, quizAttempts);
        return updated;
      }
      return prev;
    });
  };

  const recordQuizAttempt = (quizId, score, passed, courseId) => {
    setQuizAttempts(prev => {
      const existing = prev[quizId] || { bestScore: 0, passed: false, attempts: [] };
      const newBestScore = Math.max(existing.bestScore, score);
      const isPassed = existing.passed || passed;
      
      const updated = {
        ...prev,
        [quizId]: {
          bestScore: newBestScore,
          passed: isPassed,
          attempts: [...existing.attempts, { score, passed, date: new Date().toISOString() }]
        }
      };

      if (courseId) {
        checkAndIssueCertificate(courseId, completedLessons[courseId] || [], updated);
      }

      return updated;
    });
  };

  const checkAndIssueCertificate = (courseId, completedLessonList, currentQuizAttempts) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    let totalLessons = 0;
    (course.modules || []).forEach(m => totalLessons += (m.lessons || []).length);
    const isAllLessonsDone = (completedLessonList || []).length >= totalLessons && totalLessons > 0;

    const finalExamId = course.finalExamId;
    const finalExamAttempt = currentQuizAttempts[finalExamId];
    const isExamPassed = finalExamAttempt && finalExamAttempt.passed;

    if (isAllLessonsDone && isExamPassed) {
      const recipient = getActiveUserName();
      setCertificates(prev => {
        if (!prev.some(cert => cert.courseId === courseId)) {
          const newCert = {
            id: `cert_${Date.now()}`,
            code: generateCertificateCode(courseId, 'usr_' + Date.now().toString(36)),
            courseId: course.id,
            courseTitle: course.title,
            recipientName: recipient,
            issuedDate: new Date().toISOString().split('T')[0],
            grade: `${finalExamAttempt.bestScore}%`,
            instructor: course.instructor ? course.instructor.name : 'EduMind Faculty Board',
            skills: course.outcomes || ['Technical Mastery', 'Software Engineering']
          };
          return [...prev, newCert];
        }
        return prev;
      });
    }
  };

  // CMS: Validate Course Completeness
  const checkCourseCompleteness = (course) => {
    const issues = [];
    if (!course.title || course.title.trim().length < 5) issues.push('Course title must be at least 5 characters');
    if (!course.description && !course.subtitle) issues.push('Course description is required');
    if (!course.modules || course.modules.length === 0) issues.push('Course must have at least 1 module');

    (course.modules || []).forEach((mod, mIdx) => {
      if (!mod.title) issues.push(`Module ${mIdx + 1}: Title is missing`);
      if (!mod.lessons || mod.lessons.length === 0) {
        issues.push(`Module ${mIdx + 1}: Must contain at least 1 lesson`);
      } else {
        mod.lessons.forEach((les, lIdx) => {
          if (!les.title) issues.push(`Module ${mIdx + 1}, Lesson ${lIdx + 1}: Title is missing`);
          if (!les.definition) issues.push(`Module ${mIdx + 1}, Lesson ${lIdx + 1}: Definition block is missing`);
          if (!les.syntax) issues.push(`Module ${mIdx + 1}, Lesson ${lIdx + 1}: Formal syntax block is missing`);
          if (!les.parameters || les.parameters.length === 0) issues.push(`Module ${mIdx + 1}, Lesson ${lIdx + 1}: Parameters table is missing`);
          if (!les.examples || les.examples.length === 0) issues.push(`Module ${mIdx + 1}, Lesson ${lIdx + 1}: Worked runnable examples are missing`);
          if (!les.gotchas) issues.push(`Module ${mIdx + 1}, Lesson ${lIdx + 1}: Common gotchas are missing`);
        });
      }
    });

    return {
      isComplete: issues.length === 0,
      issues
    };
  };

  // CMS: Add or Update Course
  const saveCourse = (courseData) => {
    setCourses(prev => {
      const exists = prev.some(c => c.id === courseData.id);
      if (exists) {
        return prev.map(c => c.id === courseData.id ? courseData : c);
      } else {
        return [...prev, courseData];
      }
    });
  };

  return (
    <CourseContext.Provider value={{
      courses,
      enrolledCourseIds,
      completedLessons,
      quizAttempts,
      certificates,
      bookmarks,
      notes,
      getCourseProgress,
      enrollCourse,
      markLessonComplete,
      recordQuizAttempt,
      checkCourseCompleteness,
      saveCourse,
      toggleBookmark,
      isBookmarked,
      saveNote,
      getNote
    }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (!context) throw new Error('useCourses must be used within CourseProvider');
  return context;
}
