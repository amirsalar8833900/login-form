// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtJdtDaAXIC9HcNJgfR65WIrfLuGgKeK8",
  authDomain: "login-page-2398f.firebaseapp.com",
  projectId: "login-page-2398f",
  storageBucket: "login-page-2398f.appspot.com",
  messagingSenderId: "553361648860",
  appId: "1:553361648860:web:eb0f4eacd411c2fced1819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
  
export { app,auth}