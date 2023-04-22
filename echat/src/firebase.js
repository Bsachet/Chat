import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore ()
export const storage = getStorage();