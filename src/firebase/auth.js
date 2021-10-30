import {
  signIn,
  signOut,
  signInError,
  signOutError,
} from "../redux/actions/authActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const signInUserWithGoogle = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        toast.success("Sign in succesful");
        dispatch(signIn(result));
      })
      .catch((error) => {
        toast.error("Failed to Sign in");
        dispatch(signInError(error));
      });
  };
};

export const signOutUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        toast.success("Sign out succesful");
        dispatch(signOut());
      })
      .catch((error) => {
        toast.error("Failed to sign out");
        dispatch(signOutError(error));
      });
  };
};
