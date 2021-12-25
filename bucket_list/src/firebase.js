// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPj4BlU0fQK71r6aCs7ty3U5FTimDs4V0",
  authDomain: "sparta-react-6ec90.firebaseapp.com",
  projectId: "sparta-react-6ec90",
  storageBucket: "sparta-react-6ec90.appspot.com",
  messagingSenderId: "859616105349",
  appId: "1:859616105349:web:ebc795d5a7379a01756aec",
  measurementId: "G-QND2TY8QT1"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = getFirestore();
export { db };