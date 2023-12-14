// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxrmo0q3P3Kml0HD-gNf6hVSC_3fgehBs",
  authDomain: "fastfood-ec49c.firebaseapp.com",
  projectId: "fastfood-ec49c",
  storageBucket: "fastfood-ec49c.appspot.com",
  messagingSenderId: "437668855792",
  appId: "1:437668855792:web:729a334475203a70b52735",
  measurementId: "G-9J7WT0PLRQ",
  databaseURL:"https://fastfood-ec49c-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;
