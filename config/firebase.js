// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKxKN732ljOWrmntkV2W2FhjOrKwWA1Jo",
  authDomain: "student-8ded4.firebaseapp.com",
  projectId: "student-8ded4",
  storageBucket: "student-8ded4.appspot.com",
  messagingSenderId: "955145913836",
  appId: "1:955145913836:web:f78a62eeb6214440e6ecc9",
  measurementId: "G-V3CT15HSHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore= getFirestore(app)

export {firestore , app}