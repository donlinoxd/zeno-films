import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

production config
const fbConfig = {
  apiKey: "AIzaSyC0NTpoQgDzLDodZFHlvTWLObdReWzO2pQ",
  authDomain: "zeno-films-15e58.firebaseapp.com",
  projectId: "zeno-films-15e58",
  storageBucket: "zeno-films-15e58.appspot.com",
  messagingSenderId: "68376333258",
  appId: "1:68376333258:web:60b6c6c6f9a746d6315d33",
};

// development config
// const fbConfig = {
//   apiKey: "AIzaSyDnPxJl6BpQWBI2Rh1E_mUgip6UtnnI8WY",
//   authDomain: "zeno-films-dev-mode.firebaseapp.com",
//   projectId: "zeno-films-dev-mode",
//   storageBucket: "zeno-films-dev-mode.appspot.com",
//   messagingSenderId: "730463169202",
//   appId: "1:730463169202:web:b39b55a299c70370a5b7ab",
// };

firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
