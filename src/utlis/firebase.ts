// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDibdKV1EYd9cpoW4qU89tKTyDPo-11zw0",
  authDomain: "foo-boo-briyani.firebaseapp.com",
  projectId: "foo-boo-briyani",
  storageBucket: "foo-boo-briyani.firebasestorage.app",
  messagingSenderId: "399886137203",
  appId: "1:399886137203:web:a303046c732e33c20f3706",
  measurementId: "G-79JM9M7RGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);