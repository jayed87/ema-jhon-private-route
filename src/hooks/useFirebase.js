import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //     console.log(result.user);
        // }).catch((error) => {
        //     setError(error.message);
        // });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        error
    }

}
export default useFirebase;