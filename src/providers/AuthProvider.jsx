import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (user, dName, pURL) => {
        return updateProfile(user, {
            displayName: dName,
            photoURL: pURL,
        });
    };

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            });
        };

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        logInUser,
        signInWithGoogle,
        registerUser,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
