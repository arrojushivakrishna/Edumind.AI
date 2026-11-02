import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';
import { EventProvider } from './context/EventContext';
import { CommunityProvider } from './context/CommunityContext';
import { NotificationProvider } from './context/NotificationContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';
import { NotificationModal } from './components/NotificationModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AuthModal } from './components/AuthModal';
import { OnboardingModal } from './components/OnboardingModal';
import { EventTicketModal } from './components/EventTicketModal';
import { DirectMessagesModal } from './components/DirectMessagesModal';
import { GoogleAuthModal } from './components/GoogleAuthModal';

import { HomePage } from './pages/HomePage';
import { CourseCatalogPage } from './pages/CourseCatalogPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LessonViewerPage } from './pages/LessonViewerPage';
import { CourseGlossaryPage } from './pages/CourseGlossaryPage';
import { QuizModal } from './pages/QuizModal';
import { CodePlaygroundPage } from './pages/CodePlaygroundPage';
import { EventsPage } from './pages/EventsPage';
import { LiveEventRoomPage } from './pages/LiveEventRoomPage';
import { AdminCheckInPage } from './pages/AdminCheckInPage';
import { CommunityPage } from './pages/CommunityPage';
import { DashboardPage } from './pages/DashboardPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { PublicVerifyPage } from './pages/PublicVerifyPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { PricingPage } from './pages/PricingPage';
import { LegalPage } from './pages/LegalPage';
import { AdminCourseCMS } from './pages/AdminCourseCMS';
import { LanguageRoadmapsPage } from './pages/LanguageRoadmapsPage';
import { LanguageComparisonPage } from './pages/LanguageComparisonPage';
import { AuthPage } from './pages/AuthPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppContent() {
  // Routing state
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.replace('#', '') || 'home';
    return hash;
  });

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isGoogleAuthOpen, setIsGoogleAuthOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(null);
  const [activeDMRecipient, setActiveDMRecipient] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(null); // { quizId, courseId }

  // Context passed to persistent AI assistant
  const [aiContext, setAiContext] = useState(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'home';
      setCurrentPath(hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route) => {
    window.location.hash = route;
    setCurrentPath(route);
    window.scrollTo(0, 0);
  };

  const handleOpenQuiz = (quizId, courseId) => {
    setActiveQuiz({ quizId, courseId });
  };

  // Route Resolver
  const renderCurrentView = () => {
    const cleanPath = (currentPath || 'home')
      .replace(/^[\/#]+/, '')
      .replace(/\/+$/, '')
      .split('?')[0] || 'home';

    if (cleanPath === 'home' || cleanPath === '') {
      return <HomePage navigate={navigate} />;
    }

    if (cleanPath === 'courses') {
      return <CourseCatalogPage navigate={navigate} />;
    }

    if (cleanPath.startsWith('course/') && cleanPath.includes('/lesson/')) {
      const parts = cleanPath.split('/');
      const cId = parts[1];
      const lId = parts[3];
      return <LessonViewerPage courseId={cId} lessonId={lId} navigate={navigate} onOpenQuiz={handleOpenQuiz} setAiContext={setAiContext} />;
    }

    if (cleanPath.startsWith('course/')) {
      const cId = cleanPath.replace('course/', '');
      return <CourseDetailPage courseId={cId} navigate={navigate} onOpenQuiz={handleOpenQuiz} />;
    }

    if (cleanPath === 'glossary') {
      return <CourseGlossaryPage navigate={navigate} />;
    }

    if (cleanPath === 'playground') {
      return <CodePlaygroundPage setAiContext={setAiContext} />;
    }

    if (cleanPath === 'events') {
      return <EventsPage navigate={navigate} onOpenTicketModal={(t) => setActiveTicket(t)} onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)} />;
    }

    if (cleanPath.startsWith('live-room/')) {
      const evId = cleanPath.replace('live-room/', '');
      return <LiveEventRoomPage eventId={evId} navigate={navigate} />;
    }

    if (cleanPath === 'admin-checkin') {
      return <AdminCheckInPage navigate={navigate} />;
    }

    if (cleanPath === 'community') {
      return <CommunityPage navigate={navigate} onOpenDM={(username) => setActiveDMRecipient(username)} />;
    }

    if (cleanPath === 'dashboard') {
      return <DashboardPage navigate={navigate} onOpenQuiz={handleOpenQuiz} onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)} />;
    }

    if (cleanPath === 'certificates') {
      return <CertificatesPage navigate={navigate} />;
    }

    if (cleanPath.startsWith('verify')) {
      const code = cleanPath.includes('/') ? cleanPath.split('/')[1] : '';
      return <PublicVerifyPage initialCode={code} navigate={navigate} />;
    }

    if (cleanPath.startsWith('u/')) {
      const uname = cleanPath.replace('u/', '');
      return <UserProfilePage username={uname} navigate={navigate} onOpenDM={(username) => setActiveDMRecipient(username)} />;
    }

    if (cleanPath === 'settings') {
      return <SettingsPage navigate={navigate} />;
    }

    if (cleanPath === 'help') {
      return <HelpCenterPage navigate={navigate} />;
    }

    if (cleanPath === 'pricing') {
      return <PricingPage navigate={navigate} />;
    }

    if (cleanPath === 'legal') {
      return <LegalPage navigate={navigate} />;
    }

    if (cleanPath === 'admin-cms') {
      return <AdminCourseCMS navigate={navigate} />;
    }

    if (cleanPath === 'roadmaps') {
      return <LanguageRoadmapsPage navigate={navigate} />;
    }

    if (cleanPath === 'compare') {
      return <LanguageComparisonPage navigate={navigate} />;
    }

    if (cleanPath === 'login') {
      return <AuthPage initialMode="login" navigate={navigate} onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)} />;
    }

    if (cleanPath === 'signup') {
      return <AuthPage initialMode="signup" navigate={navigate} onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)} />;
    }

    return <NotFoundPage navigate={navigate} />;
  };

  return (
    <div className="app-container">
      {/* Universal Navigation Header */}
      <Navbar
        currentRoute={currentPath}
        navigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)}
      />

      {/* Main Routed Page Content */}
      <main className="main-content">
        {renderCurrentView()}
      </main>

      {/* Persistent Universal Footer */}
      <Footer navigate={navigate} />

      {/* Persistent Context-Aware AI Learning Assistant */}
      <AIChatWidget activeLessonContext={aiContext} />

      {/* Global Interactive Modals */}
      <NotificationModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        navigate={navigate}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        navigate={navigate}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={() => {
          setIsAuthOpen(false);
          navigate('dashboard');
        }}
        onOpenGoogleAuth={() => {
          setIsAuthOpen(false);
          setIsGoogleAuthOpen(true);
        }}
        navigate={navigate}
      />

      <GoogleAuthModal
        isOpen={isGoogleAuthOpen}
        onClose={() => setIsGoogleAuthOpen(false)}
        navigate={navigate}
      />

      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        navigate={navigate}
      />

      {activeTicket && (
        <EventTicketModal
          registration={activeTicket}
          isOpen={!!activeTicket}
          onClose={() => setActiveTicket(null)}
        />
      )}

      {activeDMRecipient && (
        <DirectMessagesModal
          recipientUsername={activeDMRecipient}
          isOpen={!!activeDMRecipient}
          onClose={() => setActiveDMRecipient(null)}
        />
      )}

      {activeQuiz && (
        <QuizModal
          quizId={activeQuiz.quizId}
          courseId={activeQuiz.courseId}
          isOpen={!!activeQuiz}
          onClose={() => setActiveQuiz(null)}
          navigate={navigate}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <EventProvider>
          <CommunityProvider>
            <NotificationProvider>
              <AppContent />
            </NotificationProvider>
          </CommunityProvider>
        </EventProvider>
      </CourseProvider>
    </AuthProvider>
  );
}
