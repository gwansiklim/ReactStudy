// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAU44cjUATghGHRAL2UUUZ98EjaWGXMo2Q",
    authDomain: "friend-test-6e8b3.firebaseapp.com",
    projectId: "friend-test-6e8b3",
    storageBucket: "friend-test-6e8b3.appspot.com",
    messagingSenderId: "12788384480",
    appId: "1:12788384480:web:d43d83740cb622ee6f8685",
    measurementId: "G-SRZJK9S5RT"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
