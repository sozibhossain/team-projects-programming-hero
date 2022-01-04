import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const registrerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
          });
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
        })
        .catch((error) => {
          setAuthError(error.message);
        });
    }

    // observer the user state
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
          });
          return () => unsubscribe;
    },[])

    const logout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
return{
    user,
    registrerUser,
    loginUser,
    // signInUsingGoogle,
    logout,
    authError
}

}

export default useFirebase;