import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { __getMusic } from "./redux/module/musicSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch(__getMusic())
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);