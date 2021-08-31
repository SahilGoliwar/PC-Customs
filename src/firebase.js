import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPlUqVC_UKf0HtJg-pJRbwEGw-Y9LlpnQ",
  authDomain: "custom-pc-254cf.firebaseapp.com",
  projectId: "custom-pc-254cf",
  storageBucket: "custom-pc-254cf.appspot.com",
  messagingSenderId: "704712755666",
  appId: "1:704712755666:web:35c07651a806acb668200b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
