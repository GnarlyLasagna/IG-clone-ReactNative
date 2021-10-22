// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACNm24UQ_JVYTONic1U5L8t9vadm9zUp0",
  authDomain: "ig-clone-ee3b0.firebaseapp.com",
  projectId: "ig-clone-ee3b0",
  storageBucket: "ig-clone-ee3b0.appspot.com",
  messagingSenderId: "618458623203",
  appId: "1:618458623203:web:f2d3c55b270e60bf2ca9d6",
  measurementId: "G-ZXSN08K5KM",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
