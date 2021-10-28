import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./stylesheet/style.css";
import { store, rrfProps } from "./redux/store";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
