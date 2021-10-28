import * as actions from "./actionTypes";

export const signInUserWithGoogle = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        alert("Sign in successfully");
        dispatch({ type: actions.SIGNIN_USER, payload: "Log in Success" });
      })
      .catch((error) => {
        alert(`Failed to Sign in! ${error.message}`);
        dispatch({ type: actions.SIGNIN_ERROR, payload: "Log in Error" });
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
        alert("Sign out successfully");
        dispatch({ type: actions.SIGNOUT_USER });
      })
      .catch((error) => {
        alert(`Failed Sign out! ${error.message}`);
        dispatch({ type: actions.SIGNOUT_ERROR, payload: "Sign Out Error" });
      });
  };
};
