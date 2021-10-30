import * as actions from "./actionTypes";

export const signIn = (user) => {
  return {
    type: actions.SIGNIN_USER,
    payload: user,
  };
};

export const signInError = (error) => {
  return {
    type: actions.SIGNIN_ERROR,
    payload: error.message,
  };
};

export const signOut = () => {
  return {
    type: actions.SIGNOUT_USER,
  };
};

export const signOutError = (error) => {
  return {
    type: actions.SIGNOUT_ERROR,
    payload: error.message,
  };
};
