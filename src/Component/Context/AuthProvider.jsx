import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUsers(currentUser);
      // console.log("Current Users in AuthProvider", currentUser);
      if (currentUser) {
        axios.post(
          "http://localhost:5000/jwt",
          loggedUser,
          {
            withCredentials: true,
          }
        );
        // .then((res) => console.log(res.data));
      } else {
        axios.post(
          "http://localhost:5000/logout",
          loggedUser,
          {
            withCredentials: true,
          }
        );
        // .then((res) => console.log(res.data));
      }
    });
    return () => unsubscribe();
  }, []);

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userGoogleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const userLoginWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    userGoogleLogin,
    userSignOut,
    userLoginWithEmail,
    signInWithEmail,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
