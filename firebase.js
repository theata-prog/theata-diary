// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDscfSHrIKKew0DAukX2_NKmrtYkr0exPk",
  authDomain: "theata-diary.firebaseapp.com",
  projectId: "theata-diary",
  storageBucket: "theata-diary.appspot.com",
  messagingSenderId: "133774095516",
  appId: "1:133774095516:web:c16b2473957bed9e122959",
  measurementId: "G-E3K7DKTT8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}