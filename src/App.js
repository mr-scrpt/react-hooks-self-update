import React from "react";
import Routes from "routes/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { TopBar } from "components/topBar";
import { CurrentUserProvider } from 'contexts';
import { CurrentUserChecker } from 'components/currentUserChecker';

function App() {
  return (
    <div>
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <TopBar />
            <Routes />
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
