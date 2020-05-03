import React from "react";
import { Route, Link } from "react-router-dom";
import { Button } from "evergreen-ui";
import styles from "./style.module.sass";
import AphorismsPage from "../AphorismsPage";

const MainPage = () => {
  return (
    <div>
      <div className={styles.navigation}>
        <Link to="/admin/aphorisms">Aphorisms</Link>
        <Link to="/admin/materials">Materials</Link>
        <Link to="/admin/tasks">Tasks</Link>
      </div>

      <h1 className={styles.header}>New Best App</h1>

      <Route path="/admin/aphorisms" component={AphorismsPage} />
    </div>
  );
};

export default MainPage;
