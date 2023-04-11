import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3i78MhzYJmOJj928WqYovYGaBBn11qSI",
    authDomain: "andchat-e23f1.firebaseapp.com",
    databaseURL: "https://andchat-e23f1-default-rtdb.firebaseio.com",
    projectId: "andchat-e23f1",
    storageBucket: "andchat-e23f1.appspot.com",
    messagingSenderId: "105427893137",
    appId: "1:105427893137:web:91e37089a2a6c1b6247830",
    measurementId: "G-TBWH0VZ0W5"
};
const app = initializeApp(firebaseConfig);

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export { loginWithGoogle };