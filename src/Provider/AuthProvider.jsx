import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const loginUser = (email, password)=>{
        setLoading(true)
return signInWithEmailAndPassword(auth, email, password)
    }

    const loginInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
             console.log('current user', currentUser);
            setLoading(false);

            if(currentUser && currentUser.email){
                const accessUser = {
                    email: currentUser.email
                  }
                  console.log(accessUser)
                fetch('https://car-dcotor-server-side-from-modeul-showrab15.vercel.app/jwt',
                {
                  method: "POST",
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(accessUser)
                })
                .then(res => res.json())
                .then(data => {
                  console.log('jwt response', data);
                  //waring : local storage is not the bes place for stored access token(second best)
                  localStorage.setItem('car-access-token', data.token);
      
                })
            }
            else{
                localStorage.removeItem('car-access-token')

            }
        });
        return ()=>{
            return unsubscribe();
        }
    })
    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        loginInWithGoogle,
        logOut

    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;