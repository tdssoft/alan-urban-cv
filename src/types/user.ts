export interface User {
  id: string;
  email: string;
  password?: string;
  isFirstLogin: boolean;
  cvType: 'alan-urban' | 'waldemar-wanat';
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; requiresPassword?: boolean; message?: string }>;
  register: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  setPassword: (password: string) => Promise<{ success: boolean; message?: string }>;
  isLoading: boolean;
}
