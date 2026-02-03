import { User } from '@/types/user';

const USERS_STORAGE_KEY = 'cv_app_users';
const CURRENT_USER_KEY = 'cv_app_current_user';
const REMEMBER_ME_KEY = 'cv_app_remember_me';

// Initialize pre-created accounts
export const initializeDefaultAccounts = () => {
  const existingUsers = getUsers();

  // Check if default accounts already exist
  const alanExists = existingUsers.some(u => u.email === 'alan.urban23@gmail.com');
  const waldemarExists = existingUsers.some(u => u.email === 'wwanat01@gmail.com');

  const users = [...existingUsers];

  if (!alanExists) {
    users.push({
      id: crypto.randomUUID(),
      email: 'alan.urban23@gmail.com',
      isFirstLogin: true,
      cvType: 'alan-urban',
      createdAt: new Date().toISOString(),
    });
  }

  if (!waldemarExists) {
    users.push({
      id: crypto.randomUUID(),
      email: 'wwanat01@gmail.com',
      isFirstLogin: true,
      cvType: 'waldemar-wanat',
      createdAt: new Date().toISOString(),
    });
  }

  if (!alanExists || !waldemarExists) {
    saveUsers(users);
  }
};

export const getUsers = (): User[] => {
  const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
  return usersJson ? JSON.parse(usersJson) : [];
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

export const findUserByEmail = (email: string): User | undefined => {
  const users = getUsers();
  return users.find(u => u.email.toLowerCase() === email.toLowerCase());
};

export const createUser = (email: string, password: string, cvType: 'alan-urban' | 'waldemar-wanat'): User => {
  const users = getUsers();
  const newUser: User = {
    id: crypto.randomUUID(),
    email,
    password,
    isFirstLogin: false,
    cvType,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

export const updateUser = (userId: string, updates: Partial<User>) => {
  const users = getUsers();
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    saveUsers(users);
    return users[index];
  }
  return null;
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem(CURRENT_USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

export const setCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

export const validatePassword = (password: string): { valid: boolean; message?: string } => {
  if (password.length < 6) {
    return { valid: false, message: 'Hasło musi mieć co najmniej 6 znaków' };
  }
  return { valid: true };
};

// Simple hash function for demo (in production, use proper hashing like bcrypt on backend)
export const hashPassword = (password: string): string => {
  return btoa(password); // Base64 encode for demo only
};

export const verifyPassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};

// Remember me - stores email for auto-fill
export const getRememberedEmail = (): string | null => {
  return localStorage.getItem(REMEMBER_ME_KEY);
};

export const setRememberedEmail = (email: string | null) => {
  if (email) {
    localStorage.setItem(REMEMBER_ME_KEY, email);
  } else {
    localStorage.removeItem(REMEMBER_ME_KEY);
  }
};

// Sync session user with the actual stored user data to prevent stale snapshots
export const syncCurrentUserWithStore = (): User | null => {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;

  const users = getUsers();
  // Find the user in the store by ID first, then by email as fallback
  let storedUser = users.find(u => u.id === currentUser.id);
  if (!storedUser) {
    storedUser = users.find(u => u.email.toLowerCase() === currentUser.email.toLowerCase());
  }

  if (storedUser) {
    // Update the session with the latest data from the store
    setCurrentUser(storedUser);
    return storedUser;
  }

  // User no longer exists in store - clear the session
  setCurrentUser(null);
  return null;
};
