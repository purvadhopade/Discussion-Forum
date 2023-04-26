// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc1Z1rJnYweWv4poPigbiGjM1wbIBUkxc",
  authDomain: "discussion-forum-df41d.firebaseapp.com",
  projectId: "discussion-forum-df41d",
  storageBucket: "discussion-forum-df41d.appspot.com",
  messagingSenderId: "829953125886",
  appId: "1:829953125886:web:19bacfbe458d5a211364af",
  measurementId: "G-202B3CNTTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

