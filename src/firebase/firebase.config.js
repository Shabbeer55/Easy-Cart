// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-SZ083P-uhQgtiX0O7LwBmQ6xL24CoNw",
  authDomain: "easy-cart-863ed.firebaseapp.com",
  projectId: "easy-cart-863ed",
  storageBucket: "easy-cart-863ed.appspot.com",
  messagingSenderId: "825899620493",
  appId: "1:825899620493:web:f809a4d7e745478b91eac4",
  measurementId: "G-RWRV9TVK7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;