import React from "react";
import { Provider as ReduxProvider } from "react-redux";

/* import Routes from "routes/index.js"; */
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "components/header";

import { UserAuthChecker } from "components/userAuthChecker";
import { createAppStore } from "reduxStore";
import "./app.scss";
const store = createAppStore();
export const App = () => {
  return (
    <ReduxProvider store={store}>
      <UserAuthChecker />
      <Router>
        <Header />
        {/* <TestHeader />
        <Routes /> */}
      </Router>
    </ReduxProvider>
  );
};
