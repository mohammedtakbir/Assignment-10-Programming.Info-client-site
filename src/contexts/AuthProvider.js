import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    //* update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    };

    //* get currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    //* Sign out an user
    const userSignOut = () => {
        return signOut(auth)
    };


    const authInfo = {
        user,
        userSignUp,
        userLogIn,
        GoogleSignIn,
        githubSignIn,
        updateUserProfile,
        userSignOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;