// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApRYkWiMs7whK0k1wTZJlv0p3MvdsSjww",
  authDomain: "sticky-3fc5a.firebaseapp.com",
  projectId: "sticky-3fc5a",
  storageBucket: "sticky-3fc5a.appspot.com",
  messagingSenderId: "597973193495",
  appId: "1:597973193495:web:7da998d4536e1aee8f9d52",
  measurementId: "G-M2Z5CN8SK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
