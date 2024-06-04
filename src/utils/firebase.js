// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOman9AS8gvuvplbccrKEUeszGAI9rFc4",
  authDomain: "tailorsite-67997.firebaseapp.com",
  projectId: "tailorsite-67997",
  storageBucket: "tailorsite-67997.appspot.com",
  messagingSenderId: "570370256849",
  appId: "1:570370256849:web:4ef5d67d6f386142897af0",
  measurementId: "G-WKFVF3PZK1"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();