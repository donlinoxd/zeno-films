import * as actions from "../actions/actionTypes";

const initState = {
  error: "",
  isLogged: false,
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SIGNIN_USER:
      return {
        error: "",
        user: action.payload,
        isLogged: true,
      };
    case actions.SIGNIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.SIGNOUT_USER:
      return {
        ...state,
        user: null,
        isLogged: false,
        error: "",
      };
    case actions.SIGNOUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
