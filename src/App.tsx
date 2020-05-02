import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainPage from "./Pages/MainPage/MainPage";
import { Pane, Spinner } from "evergreen-ui";
import { checkAuth } from "./helpers/checkAuth";

const App = () => {
  const [stateAuth, checkingAuth] = useState("pending");
  useEffect(() => {
    const firstRender = async () => {
      const auth = await checkAuth();
      checkingAuth(auth);
    };
    firstRender();
  }, []);
  return (
    <Router>
      <Route
        render={() => {
          switch (stateAuth) {
            case "pending":
              return (
                <Pane
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={400}
                >
                  <Spinner />
                </Pane>
              );
            case "success":
              return (
                <>
                  <Route path="/" component={MainPage} />
                  <Redirect to={{ pathname: "/" }} />;
                </>
              );
            case "login":
              return (
                <>
                  <Route path="/login" component={LoginPage} />
                  <Redirect to={{ pathname: "/login" }} />
                </>
              );

            default:
              break;
          }
        }}
      />
    </Router>
  );
};

export default App;
