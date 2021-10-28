import * as actions from "./actionTypes";
import firebase from "../../config/fbConfig";

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
            alert("Success!!! You've added a movie to your watch list.")
          )
          .catch((error) =>
            alert("Error!!! The attempt to add a movie was unsuccessful.")
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
            alert("Success!!! You've added a movie to your watch list.")
          )
          .catch((error) =>
            alert("Error!!! The attempt to add a movie was unsuccessful.")
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
        dispatch({ type: actions.REMOVE_WATCHLIST_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: actions.REMOVE_WATCHLIST_ERROR });
      });
  };
};
