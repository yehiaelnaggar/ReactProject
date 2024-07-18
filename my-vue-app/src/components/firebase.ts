import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZL4Zvelu-zpwRTjt1JeuNh96dOmmbucE",
  authDomain: "react-project-7743f.firebaseapp.com",
  projectId: "react-project-7743f",
  storageBucket: "react-project-7743f.appspot.com",
  messagingSenderId: "713469952668",
  appId: "1:713469952668:web:311e4f1330afdcd039e359",
  measurementId: "G-9DDCN3K4XP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
