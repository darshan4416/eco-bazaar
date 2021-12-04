import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLpECzUOPfzpjejS-EOYGdnds6gc5oHPo",
  authDomain: "sustainable-waves.firebaseapp.com",
  projectId: "sustainable-waves",
  storageBucket: "sustainable-waves.appspot.com",
  messagingSenderId: "199949170650",
  appId: "1:199949170650:web:aedccf23a25d9cbe3272e3",
  measurementId: "G-LLXJLSZ7VE"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

