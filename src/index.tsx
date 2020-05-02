import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const render = (Component: any) => {
  return ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render(App);

if ((module as any).hot) {
  (module as any).hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
