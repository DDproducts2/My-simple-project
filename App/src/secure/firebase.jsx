import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyA85n0Ar1tr71TxLttxQBjBMKYlAlBo0Bg",
  authDomain: "quizo-final.firebaseapp.com",
  databaseURL: "https://quizo-final-default-rtdb.firebaseio.com",
  projectId: "quizo-final",
  storageBucket: "quizo-final.appspot.com",
  messagingSenderId: "111494109329",
  appId: "1:111494109329:web:5ee04debfcfbc562938730"
  
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}
