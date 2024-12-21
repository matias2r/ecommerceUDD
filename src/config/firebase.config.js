// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlpWGq-BZMRzPCJXUxNnntOmqjnVn2JQQ",
  authDomain: "proyectoudd.firebaseapp.com",
  projectId: "proyectoudd",
  storageBucket: "proyectoudd.firebasestorage.app",
  messagingSenderId: "1079776959649",
  appId: "1:1079776959649:web:be7668dd312da3f26ba4e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);