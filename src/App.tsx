import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { Pane, Spinner } from "evergreen-ui";
import { checkAuth } from "./helpers/checkAuth";
import { initialState, loginReducer, Context } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  useEffect(() => {
    const firstRender = async () => {
      const logginState = await checkAuth();
      // dispatch({ type: logginState, payload: logginState });
    };
    firstRender();
  }, []);

  return (
    <Context.Provider value={{ dispatch }}>
      <Router>
        <Route
          render={() => {
            switch (state.logginState) {
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
                    <Route path="/admin" component={MainPage} />
                    <Redirect to={{ pathname: "/admin" }} />;
                  </>
                );
              case "login":
                return (
                  <>
                    <Route path="/admin/login" component={LoginPage} />
                    <Redirect to={{ pathname: "/admin/login" }} />
                  </>
                );

              default:
                break;
            }
          }}
        />
      </Router>
    </Context.Provider>
  );
};

export default App;
