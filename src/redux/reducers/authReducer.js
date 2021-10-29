import * as actions from "../actions/actionTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const initState = {
  error: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SIGNIN_USER:
      toast.success("Sign in succesful");
      return {
        ...state,
      };
    case actions.SIGNIN_ERROR:
      toast.error("Failed to Sign in");
      return {
        ...state,
      };
    case actions.SIGNOUT_USER:
      toast.success("Sign out succesful");
      return {
        ...state,
        error: action.payload,
      };
    case actions.SIGNOUT_ERROR:
      toast.error("Failed to sign out");
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
