import React, { createContext, useContext, useState } from 'react'

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, name: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, name: string) => {
    setUser({ email, name })
  }

  const logout = () => {
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
