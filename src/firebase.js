import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAppiao3X5qZrXEOQc32txvUlUSa0PJe5A",
    authDomain: "video-app-d7c83.firebaseapp.com",
    projectId: "video-app-d7c83",
    storageBucket: "video-app-d7c83.appspot.com",
    messagingSenderId: "824398436486",
    appId: "1:824398436486:web:0083c8d5e52147b1e49907",
    measurementId: "G-MDNK1446X2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const registerWithEmailandPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log(user)

    } catch (error) {
        console.log(error)
    };
};

const loginWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error)
    };
};

const logOut = () => {
    signOut(auth);
};


export {
    db,
    auth,
    registerWithEmailandPassword,
    loginWithEmailAndPassword,
    logOut
};




