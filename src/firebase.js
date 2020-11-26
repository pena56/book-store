import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANX0mFS4CD_dvHVsHPrGeJmx7cyya8yQU",
  authDomain: "book-store-680b6.firebaseapp.com",
  databaseURL: "https://book-store-680b6.firebaseio.com",
  projectId: "book-store-680b6",
  storageBucket: "book-store-680b6.appspot.com",
  messagingSenderId: "387540972387",
  appId: "1:387540972387:web:e6c8bb36d9c4604f859956",
  measurementId: "G-5LZN57P6EE",
});

const auth = firebase.auth();

export { auth };
