// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSIftBRNXtdNJ8Gihllv__zisOiWZbxJQ",
  authDomain: "netflix-ai-a5a69.firebaseapp.com",
  projectId: "netflix-ai-a5a69",
  storageBucket: "netflix-ai-a5a69.appspot.com",
  messagingSenderId: "401814568734",
  appId: "1:401814568734:web:43df96c0d7f5b7387d130f",
  measurementId: "G-2FT5B6D5J5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
