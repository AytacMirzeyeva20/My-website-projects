import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// Demo credentials — change before deploying to production.
const ADMIN_USER = 'admin'
const ADMIN_PASS = 'velvet2026'

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(() => sessionStorage.getItem('vg_admin_authed') === 'true')

  const login = (username, password) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem('vg_admin_authed', 'true')
      setIsAuthed(true)
      return true
    }
    return false
  }

  const logout = () => {
    sessionStorage.removeItem('vg_admin_authed')
    setIsAuthed(false)
  }

  return <AuthContext.Provider value={{ isAuthed, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
