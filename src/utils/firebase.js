// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ1jRR9aHeRC3I1mLmMrJ6bgdJtsDVUp8",
  authDomain: "netflix-gpt-a4d7c.firebaseapp.com",
  projectId: "netflix-gpt-a4d7c",
  storageBucket: "netflix-gpt-a4d7c.firebasestorage.app",
  messagingSenderId: "541450999081",
  appId: "1:541450999081:web:9ffcfc03b7b3f2d906d338"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();