import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import Routes from "routes/index.js";
import { BrowserRouter as Router } from "react-router-dom";

import { UserAuthChecker } from "components/userAuthChecker";
import { createAppStore } from "reduxStore";

import { Debug } from "@cm/debug";
import s from "./app.module.css";
const store = createAppStore();
export const App = () => {
  return (
    <>
      <Debug show={false} />
      <ReduxProvider store={store}>
        {/* <UserAuthChecker /> */}
        <Router>
          <Routes />
        </Router>
      </ReduxProvider>
    </>
  );
};
