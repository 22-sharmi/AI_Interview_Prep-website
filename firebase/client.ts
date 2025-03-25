import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqgDD1BA8s3JITMx_IMpwnRTOS2PKkg7k",
  authDomain: "mock-mate-5ed35.firebaseapp.com",
  projectId: "mock-mate-5ed35",
  storageBucket: "mock-mate-5ed35.firebasestorage.app",
  messagingSenderId: "621310608190",
  appId: "1:621310608190:web:d07c8e49b96f5fd0fba26f",
  measurementId: "G-V7TJDM3EJ2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);