import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '@/types/user';
import {
  getCurrentUser,
  setCurrentUser,
  findUserByEmail,
  updateUser,
  createUser,
  hashPassword,
  verifyPassword,
  validatePassword,
  initializeDefaultAccounts,
} from '@/lib/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize default accounts on app load
    initializeDefaultAccounts();

    // Check for existing session
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (
    email: string,
    password?: string
  ): Promise<{ success: boolean; requiresPassword?: boolean; message?: string }> => {
    const foundUser = findUserByEmail(email);

    if (!foundUser) {
      return { success: false, message: 'Nie znaleziono użytkownika z tym adresem email' };
    }

    // First login - no password required
    if (foundUser.isFirstLogin && !password) {
      setUser(foundUser);
      setCurrentUser(foundUser);
      return { success: true };
    }

    // First login but tried with password - redirect to set password flow
    if (foundUser.isFirstLogin && password) {
      return { success: false, message: 'To pierwsze logowanie. Zostaniesz poproszony o ustawienie hasła.' };
    }

    // Not first login - password required
    if (!foundUser.isFirstLogin && !password) {
      return { success: false, requiresPassword: true, message: 'Wymagane hasło' };
    }

    // Verify password
    if (!foundUser.isFirstLogin && password && foundUser.password) {
      if (verifyPassword(password, foundUser.password)) {
        setUser(foundUser);
        setCurrentUser(foundUser);
        return { success: true };
      } else {
        return { success: false, message: 'Nieprawidłowe hasło' };
      }
    }

    return { success: false, message: 'Błąd logowania' };
  };

  const register = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> => {
    const existingUser = findUserByEmail(email);

    if (existingUser) {
      return { success: false, message: 'Użytkownik z tym adresem email już istnieje' };
    }

    const validation = validatePassword(password);
    if (!validation.valid) {
      return { success: false, message: validation.message };
    }

    // Determine CV type based on email pattern or default
    let cvType: 'alan-urban' | 'waldemar-wanat' = 'alan-urban';
    if (email.toLowerCase().includes('wanat') || email.toLowerCase().includes('wwanat')) {
      cvType = 'waldemar-wanat';
    }

    const newUser = createUser(email, hashPassword(password), cvType);
    setUser(newUser);
    setCurrentUser(newUser);

    return { success: true };
  };

  const setPassword = async (password: string): Promise<{ success: boolean; message?: string }> => {
    if (!user) {
      return { success: false, message: 'Brak zalogowanego użytkownika' };
    }

    const validation = validatePassword(password);
    if (!validation.valid) {
      return { success: false, message: validation.message };
    }

    const updatedUser = updateUser(user.id, {
      password: hashPassword(password),
      isFirstLogin: false,
    });

    if (updatedUser) {
      setUser(updatedUser);
      setCurrentUser(updatedUser);
      return { success: true };
    }

    return { success: false, message: 'Nie udało się zaktualizować hasła' };
  };

  const logout = () => {
    setUser(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        setPassword,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
