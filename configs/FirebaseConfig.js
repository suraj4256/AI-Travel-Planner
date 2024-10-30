// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASEE_API_KEY,
  authDomain: "ai-travel-planner-ee8f6.firebaseapp.com",
  projectId: "ai-travel-planner-ee8f6",
  storageBucket: "ai-travel-planner-ee8f6.appspot.com",
  messagingSenderId: "517405173349",
  appId: "1:517405173349:web:1c4ec945e0ee597f86088c",
  measurementId: "G-6C7K2CGL8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
