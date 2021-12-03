// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLpECzUOPfzpjejS-EOYGdnds6gc5oHPo",
  authDomain: "sustainable-waves.firebaseapp.com",
  projectId: "sustainable-waves",
  storageBucket: "sustainable-waves.appspot.com",
  messagingSenderId: "199949170650",
  appId: "1:199949170650:web:aedccf23a25d9cbe3272e3",
  measurementId: "G-LLXJLSZ7VE"
};

const db = firebase.firestore();

export {db};




// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);