import firebase from "../config/fbConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const addWatchlist = (userId, movie) => {
  return (dispatch, getState, { getFirebase }) => {
    const db = getFirebase().firestore();
    const userDoc = db.collection("users").doc(userId);
    userDoc.get().then((doc) => {
      if (doc.exists) {
        userDoc
          .update({
            movies: firebase.firestore.FieldValue.arrayUnion(movie),
          })
          .then(() =>
            toast.success("Success! You've added a movie to your watch list.")
          )
          .catch((error) =>
            toast.error("Error! The attempt to add a movie was unsuccessful.")
          );
      } else {
        const { displayName, email, phoneNumber, photoURL } =
          getState().firebase.auth;
        userDoc
          .set({
            displayName,
            email,
            phoneNumber,
            photoURL,
            movies: [movie],
          })
          .then(() =>
            toast.success("Success! You've added a movie to your watch list.")
          )
          .catch((error) =>
            toast.error("Error! The attempt to add a movie was unsuccessful.")
          );
      }
    });
  };
};

export const removeWatchlist = (userId, movie) => {
  return (dispatch, getState, { getFirebase }) => {
    const db = getFirebase().firestore();
    db.collection("users")
      .doc(userId)
      .update({
        movies: firebase.firestore.FieldValue.arrayRemove(movie),
      })
      .then(() => {
        toast.success("Success! You've removed a movie to your watch list.");
      })
      .catch((error) => {
        toast.error("Error! The attempt to remove a movie was unsuccessful.");
      });
  };
};
