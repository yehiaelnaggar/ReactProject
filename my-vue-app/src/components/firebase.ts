// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZL4Zvelu-zpwRTjt1JeuNh96dOmmbucE",
  authDomain: "react-project-7743f.firebaseapp.com",
  projectId: "react-project-7743f",
  storageBucket: "react-project-7743f.appspot.com",
  messagingSenderId: "713469952668",
  appId: "1:713469952668:web:311e4f1330afdcd039e359",
  measurementId: "G-9DDCN3K4XP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth (app);