import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.initialize";
import { useHistory } from "react-router";

initializeFirebaseAuth();

const useFirebase = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");
    const [success, setSuccess] = useState("");
    const [checkUser, setCheckUser] = useState(false);
    const [admin, setAdmin] = useState(null);
    const [userName, setUserName] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // To check if user is login
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                if (user.displayName) setUserName(user.displayName);
            } else {
                setUser({});
                setCheckUser(true);
                setUserName("");
            }
        });
    }, [auth]);
    useEffect(() => {
        if (user.email) {
            fetch(`${process.env.REACT_APP_DOMAIN}users/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.admin);
                    setCheckUser(true);
                });
        }
    }, [user]);

    // Login with google function
    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                history.push("/home");
                fetch(`${process.env.REACT_APP_DOMAIN}users`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        userName: user.displayName,
                        userEmail: user.email,
                        userImage: user.photoURL,
                        role: "user",
                    }),
                }).then();
            })
            .catch((error) => {
                // Handle Errors here.
            });
    };

    // Login with email pass function
    const loginWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user);
                history.push("/home");
            })
            .catch((error) => {
                setMessage("Invalid email or password. Please try again.");
            });
    };

    // Sign up with email pass function
    const signUpWithEmailPass = (name, email, password, url) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in
                setUser(user);
                history.push("/home");
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: url,
                })
                    .then(() => {
                        fetch(`${process.env.REACT_APP_DOMAIN}users`, {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify({
                                userName: name,
                                userEmail: email,
                                userImage: url,
                                role: "user",
                            }),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                setUserName(name);
                                setUser(auth.currentUser);
                            });
                    })
                    .catch((error) => {
                        // An error occurred
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode === "auth/weak-password")
                    setMessage2("Password should be at least 6 characters");
                else if (errorCode === "auth/email-already-in-use")
                    setMessage2(
                        "This email is already registered. Please Log In"
                    );
                else if (errorCode === "auth/network-request-failed")
                    setMessage2("Network error! Please try again later");
                else if (errorCode === "auth/invalid-email")
                    setMessage2("Invalid Email");
                else
                    setMessage2("Something went wrong. Please try again later");
            });
    };
    // Logout function
    const logout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setAdmin(null);
            })
            .catch((error) => {
                // An error happened.
            });
    };
    return {
        user,
        loginWithGoogle,
        loginWithEmailPass,
        signUpWithEmailPass,
        logout,
        message,
        setMessage,
        message2,
        setMessage2,
        success,
        setSuccess,
        checkUser,
        admin,
        userName,
    };
};
export default useFirebase;
