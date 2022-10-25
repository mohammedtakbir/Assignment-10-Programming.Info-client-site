import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    //* create an user
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //* login an user
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    //* SignIn with Google
    const GoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    };

    //* SignIn with Github
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    };










    const authInfo = { user, userSignUp, userLogIn, GoogleSignIn, githubSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;