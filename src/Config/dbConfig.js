// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwUx93aT-ZrLpzHUlqRsXSYTQ5zoA0o9M",
  authDomain: "carenook-25251.firebaseapp.com",
  databaseURL: "https://carenook-25251-default-rtdb.firebaseio.com",
  projectId: "carenook-25251",
  storageBucket: "carenook-25251.appspot.com",
  messagingSenderId: "426941387636",
  appId: "1:426941387636:web:5aefa9268d5e9d64a39221",
  measurementId: "G-LBFSZFXLMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export const db = new getFirestore(app);
