import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfig = {
  apiKey: "AIzaSyC0NTpoQgDzLDodZFHlvTWLObdReWzO2pQ",
  authDomain: "zeno-films-15e58.firebaseapp.com",
  projectId: "zeno-films-15e58",
  storageBucket: "zeno-films-15e58.appspot.com",
  messagingSenderId: "68376333258",
  appId: "1:68376333258:web:60b6c6c6f9a746d6315d33",
};

firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
