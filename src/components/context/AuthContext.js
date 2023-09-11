// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Check if the user is authenticated when the component mounts
  useEffect(() => {
    async function checkAuth() {
      try {
        const user = await authService.getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error('AuthContext - Error checking authentication:', error);
      }
    }

    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const user = await authService.login(credentials);
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      const user = await authService.signup(userData);
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setCurrentUser(null);
    } catch (error) {
      throw error;
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
