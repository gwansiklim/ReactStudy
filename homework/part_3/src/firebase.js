// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByTl-TWl9NqRikIJyBDKrARxdoxOM9fWM",
    authDomain: "friend-test-b99cb.firebaseapp.com",
    projectId: "friend-test-b99cb",
    storageBucket: "friend-test-b99cb.appspot.com",
    messagingSenderId: "1099069846442",
    appId: "1:1099069846442:web:84acd8c96dee532d36f1d3",
    measurementId: "G-PB09QQD0R9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };