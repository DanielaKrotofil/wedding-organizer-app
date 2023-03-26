// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_EFwkjKtl6vb0mW5YOIDVVDvdZOcq9g8",
  authDomain: "wedding-organizer-ac3e2.firebaseapp.com",
  projectId: "wedding-organizer-ac3e2",
  storageBucket: "wedding-organizer-ac3e2.appspot.com",
  messagingSenderId: "1087429421018",
  appId: "1:1087429421018:web:1a1fc3a795160e2646c2e3",
  measurementId: "G-HK7B8ZCKBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);