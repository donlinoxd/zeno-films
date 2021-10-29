import * as actions from "./actionTypes";
import firebase from "../../config/fbConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const addWatchlist = (userId, movie) => {
  return (dispatch, getState, { getFirebase }) => {
    const toastId = toast.loading("Adding . . .");

    const db = getFirebase().firestore();
    const userDoc = db.collection("users").doc(userId);
    userDoc.get().then((doc) => {
      if (doc.exists) {
        userDoc
          .update({
            movies: firebase.firestore.FieldValue.arrayUnion(movie),
          })
          .then(() =>
            toast.update(toastId, {
              render: "Success! You've added a movie to your watch list.",
              type: "success",
              isLoading: false,
            })
          )
          .catch((error) =>
            toast.update(toastId, {
              render: "Error! The attempt to add a movie was unsuccessful.",
              type: "success",
              isLoading: false,
            })
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
            toast.update(toastId, {
              render: "Success! You've added a movie to your watch list.",
              type: "success",
              isLoading: false,
            })
          )
          .catch((error) =>
            toast.update(toastId, {
              render: "Error! The attempt to add a movie was unsuccessful.",
              type: "success",
              isLoading: false,
            })
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
