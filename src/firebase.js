// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXCfOQf4sQtKC5EHVgznjKkOayR9foCao",
  authDomain: "techdetect-31c74.firebaseapp.com",
  projectId: "techdetect-31c74",
  storageBucket: "techdetect-31c74.appspot.com",
  messagingSenderId: "480948058361",
  appId: "1:480948058361:web:c04a07c5afbcc375f80a28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
