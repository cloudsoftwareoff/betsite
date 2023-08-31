import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDr-vuMvYTcLJa17w9lQRi78-6lJ8rqTMw",
  authDomain: "bet-365-cb0d6.firebaseapp.com",
  projectId: "bet-365-cb0d6",
  storageBucket: "bet-365-cb0d6.appspot.com",
  messagingSenderId: "246547100644",
  appId: "1:246547100644:web:905922410cb23eb8f08df1",
  measurementId: "G-BQWD34QTXV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the authentication instance from Firebase

export  {auth}; // Export the auth instance
