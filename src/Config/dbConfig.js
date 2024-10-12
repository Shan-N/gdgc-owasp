// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZU0BMjH74CoRscKd6x_ZlunazTlLAFuY",
  authDomain: "gdgc-cf505.firebaseapp.com",
  projectId: "gdgc-cf505",
  storageBucket: "gdgc-cf505.appspot.com",
  messagingSenderId: "640850895831",
  appId: "1:640850895831:web:2849ebf50733ae16e9e192",
  measurementId: "G-E8N1BH7N25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export const db = new getFirestore(app);
