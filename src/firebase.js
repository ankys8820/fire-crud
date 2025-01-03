// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: " AIzaSyAyUtmS71BD8iusCzfAT9pt8o-pbgHt1Tg",
  authDomain: "auth-fire-f8aed.firebaseapp.com",
  projectId: "auth-fire-f8aed",
  storageBucket: "auth-fire-f8aed.firebasestorage.app",
  messagingSenderId: "88219112877",
  appId: "1:88219112877:web:c26df41550d8795375bd24",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { auth, db };
