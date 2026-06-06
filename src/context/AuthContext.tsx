import React, { createContext, useContext, useState } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_URL = 'http://localhost:5000/api';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('swad_user');
    return saved ? JSON.parse(saved) : null;
  })

  const login = async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    
    localStorage.setItem('swad_token', data.token);
    localStorage.setItem('swad_user', JSON.stringify(data.user));
    setUser(data.user);
  }

  const register = async (email: string, password: string, name: string) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    
    localStorage.setItem('swad_token', data.token);
    localStorage.setItem('swad_user', JSON.stringify(data.user));
    setUser(data.user);
  }

  const logout = () => {
    localStorage.removeItem('swad_token');
    localStorage.removeItem('swad_user');
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ 
      user, login, logout, isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
