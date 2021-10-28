import * as actions from "../actions/actionTypes";

const initState = {
  error: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SIGNIN_USER:
      return {
        ...state,
      };
    case actions.SIGNIN_ERROR:
      return {
        ...state,
      };
    case actions.SIGNOUT_USER:
      return {
        ...state,
        error: action.payload,
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
