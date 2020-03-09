import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import Routes from "routes/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { TopBar } from "components/topBar";
import { UserAuthChecker } from "components/userAuthChecker";
import { createAppStore } from "reduxStore";

const store = createAppStore();
export const App = () => {
  return (
    <ReduxProvider store={store}>
      <UserAuthChecker />
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </ReduxProvider>
  );
};
