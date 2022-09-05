// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvGb96HH687Sw3PiKg2MugNeUwipwpMcI",
  authDomain: "cycling-e8bcc.firebaseapp.com",
  projectId: "cycling-e8bcc",
  storageBucket: "cycling-e8bcc.appspot.com",
  messagingSenderId: "295002544244",
  appId: "1:295002544244:web:9ee6600022538a655e1921",
  measurementId: "G-5PM8HW9NMM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)