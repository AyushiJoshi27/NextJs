import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBc8mBloykBWqW3OyGBXQY1DHqKOhXHU30",
    authDomain: "nextjs-course-521b4.firebaseapp.com",
    databaseURL: "https://nextjs-course-521b4-default-rtdb.firebaseio.com",
    projectId: "nextjs-course-521b4",
    storageBucket: "nextjs-course-521b4.appspot.com",
    messagingSenderId: "543845647057",
    appId: "1:543845647057:web:006748e89715a3e4b3fbf0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);