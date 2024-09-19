/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDehUuFtjQdtcB7w_ws4RmH6EkJzzzg-K8",
  authDomain: "community-fe112.firebaseapp.com",
  databaseURL: "https://community-fe112-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "community-fe112",
  storageBucket: "community-fe112.appspot.com",
  messagingSenderId: "460014666734",
  appId: "1:460014666734:web:75c9c6fe7d4816a54644ff",
  measurementId: "G-CSKRZ1Z9EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);