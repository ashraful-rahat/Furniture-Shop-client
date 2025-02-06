/* eslint-disable react/prop-types */
import axios from 'axios'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/firbase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('CurrentUser-->', currentUser);
  
      if (currentUser?.email) {
        const user = { email: currentUser.email };
  
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
          withCredentials: true,
        })
        .then(res => {
          console.log('login', res.data);
        })
        .catch(err => {
          console.error('Error during login:', err);
        })
        .finally(() => {
          setLoading(false);
        });
      } else {
        axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, {
          withCredentials: true,
        })
        .then(res => {
          console.log('logout', res.data);
        })
        .catch(err => {
          console.error('Error during logout:', err);
        })
        .finally(() => {
          setLoading(false);
        });
      }
    });
  
    return () => {
      return unsubscribe();
    };
  }, []);
  

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider;
