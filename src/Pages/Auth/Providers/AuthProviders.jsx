import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase.config";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUser = (auth) => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
      const userInformation = {email: currentUser.email}
      axiosPublic.post('/jwt', userInformation)
      .then(res => {
        if(res.data.token){
          localStorage.setItem('access-token', res.data.token)
        }
      })
      }
      else{
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    googleSignIn,
    loginUser,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node,
};
