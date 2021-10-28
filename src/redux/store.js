import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { getFirebase } from "react-redux-firebase";
import firebase from "../config/fbConfig";
import { createFirestoreInstance } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { store, rrfProps };
