import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut,updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser = (email, password, imageURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            if (imageURL) {
              updateProfile(user, { photoURL: imageURL })
                .then(() => {
                  console.log("Profile photo updated successfully!");
                })
                .catch((error) => {
                  console.log("Error updating profile photo:", error);
                });
            }
            return userCredential;
          })
          .catch((error) => {
            console.log("Error creating user:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      };
     const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
     }
     const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
   


    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false);
        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
        
        {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;