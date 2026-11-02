import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('edumind_theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('edumind_theme', theme);
  }, [theme]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('edumind_auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('edumind_auth_user');
    }
  }, [user]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  /**
   * Log in with Email & Password
   */
  const login = (email, password) => {
    if (!email) return { success: false, error: 'Email is required' };
    
    // Check if there are registered users in localStorage registry
    let registeredUsers = [];
    try {
      const savedRegistry = localStorage.getItem('edumind_user_registry');
      if (savedRegistry) registeredUsers = JSON.parse(savedRegistry);
    } catch {
      registeredUsers = [];
    }

    const matched = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    const loggedUser = matched ? {
      ...matched,
      lastLogin: new Date().toISOString()
    } : {
      id: `usr_${Date.now()}`,
      name: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Learner',
      username: email.split('@')[0].toLowerCase(),
      email: email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(email)}`,
      bio: 'Software engineer and learner on EduMind.AI',
      role: 'learner',
      reputation: 100,
      streak: 1,
      completedOnboarding: true,
      interests: ['Programming', 'Computer Science'],
      level: 'Beginner',
      isMentor: false,
      seekingMentor: true
    };

    setUser(loggedUser);
    return { success: true, user: loggedUser };
  };

  /**
   * Sign up with Full Name, Email, Password, and Role
   */
  const signup = ({ name, email, password, role = 'learner' }) => {
    const cleanName = (name || '').trim() || email.split('@')[0];
    const newUser = {
      id: `usr_${Date.now()}`,
      name: cleanName,
      username: cleanName.toLowerCase().replace(/\s+/g, '_'),
      email: email.trim(),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(cleanName)}`,
      bio: `Software engineer & ${role} exploring technology on EduMind.AI`,
      role: role,
      reputation: 50,
      streak: 1,
      completedOnboarding: true,
      interests: [],
      level: 'Beginner',
      isMentor: false,
      seekingMentor: true,
      registeredAt: new Date().toISOString()
    };

    // Save to user registry
    try {
      const savedRegistry = localStorage.getItem('edumind_user_registry');
      const registeredUsers = savedRegistry ? JSON.parse(savedRegistry) : [];
      const updated = [newUser, ...registeredUsers.filter(u => u.email !== newUser.email)];
      localStorage.setItem('edumind_user_registry', JSON.stringify(updated));
    } catch {
      // Ignore
    }

    setUser(newUser);
    return { success: true, user: newUser };
  };

  /**
   * OAuth Login with real details
   */
  const loginWithOAuth = ({ name, email, provider, avatar }) => {
    const cleanName = (name || '').trim() || 'Learner';
    const cleanEmail = (email || '').trim() || `${cleanName.toLowerCase().replace(/\s+/g, '')}@gmail.com`;

    const oauthUser = {
      id: `usr_oauth_${Date.now()}`,
      name: cleanName,
      username: cleanName.toLowerCase().replace(/\s+/g, '_'),
      email: cleanEmail,
      avatar: avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(cleanName)}`,
      bio: `Logged in via ${provider} on EduMind.AI`,
      role: 'learner',
      provider: provider,
      reputation: 150,
      streak: 1,
      completedOnboarding: true,
      interests: ['Full-Stack', 'AI', 'Cloud Systems'],
      level: 'Intermediate',
      isMentor: false,
      seekingMentor: false,
      registeredAt: new Date().toISOString()
    };

    // Save to registry
    try {
      const savedRegistry = localStorage.getItem('edumind_user_registry');
      const registeredUsers = savedRegistry ? JSON.parse(savedRegistry) : [];
      const updated = [oauthUser, ...registeredUsers.filter(u => u.email !== oauthUser.email)];
      localStorage.setItem('edumind_user_registry', JSON.stringify(updated));
    } catch {
      // Ignore
    }

    setUser(oauthUser);
    return { success: true, user: oauthUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edumind_auth_user');
  };

  const updateUserProfile = (updates) => {
    setUser(prev => {
      if (!prev) return updates;
      const updated = { ...prev, ...updates };
      
      // Update in registry as well
      try {
        const savedRegistry = localStorage.getItem('edumind_user_registry');
        const registeredUsers = savedRegistry ? JSON.parse(savedRegistry) : [];
        const filtered = registeredUsers.map(u => u.email === updated.email ? updated : u);
        localStorage.setItem('edumind_user_registry', JSON.stringify(filtered));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const completeOnboarding = (data) => {
    setUser(prev => ({
      ...prev,
      ...data,
      completedOnboarding: true
    }));
  };

  const switchRole = (newRole) => {
    setUser(prev => ({
      ...prev,
      role: newRole
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        theme,
        toggleTheme,
        login,
        signup,
        loginWithOAuth,
        logout,
        updateUserProfile,
        completeOnboarding,
        switchRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
