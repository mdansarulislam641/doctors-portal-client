import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { useState } from 'react';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
// create a new user or signIn with email and password
const createNewUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth,email, password);
}
console.log(user)
// update user name
const updateUserProfile = name =>{
    return updateProfile(auth.currentUser,{displayName:name})
}

//login register user
const signInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

// google sign in user
const GoogleSignInUser = ()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}

// logout user 
const logOutCurrentUser = () =>{
    setLoading(true)
    return signOut(auth)
}

// user observer 
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> unsubscribe() ;
},[])

    const authInfo = {
        user,
        createNewUser,
        updateUserProfile,
        signInUser,
        logOutCurrentUser,
        GoogleSignInUser,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;