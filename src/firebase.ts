// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCORUT18LRr0VjeBrRETEA660L-ZwgDxzg",
  authDomain: "react-firebase-auth-2797f.firebaseapp.com",
  projectId: "react-firebase-auth-2797f",
  storageBucket: "react-firebase-auth-2797f.appspot.com",
  messagingSenderId: "968312974889",
  appId: "1:968312974889:web:a3821038ba46a01b68b638",
  measurementId: "G-Q8K2691EFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;