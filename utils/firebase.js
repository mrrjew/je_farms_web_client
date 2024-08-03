// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvOjc_skopGNsI4agtg6jtSNxCZdjUH3E",
  authDomain: "learning-83b92.firebaseapp.com",
  projectId: "learning-83b92",
  storageBucket: "learning-83b92.appspot.com",
  messagingSenderId: "428923679390",
  appId: "1:428923679390:web:9f6182aa91752f09f7018f",
  measurementId: "G-TZ6JPN9123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);