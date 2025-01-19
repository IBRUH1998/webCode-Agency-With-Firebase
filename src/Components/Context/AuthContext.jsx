import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import app from '../Firebase/Firebase.config'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const auth = getAuth(app)
  //register with firebase
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // login with firebase
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // google login with firebase
  const googleLogin = () => {
    const GoogleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, GoogleProvider)
  }
  // Logout with firebase
  const logOut = () => {
    return signOut(auth)
  }
  // manage user and monitoring user information
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
    })
    return unSubscribe
  }, [auth])
  const value = {
    user,
    signUpWithEmail,
    signInWithEmail,
    googleLogin,
    logOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
