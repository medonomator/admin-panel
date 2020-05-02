import React from "react";
import { Button } from "evergreen-ui";
import styles from "./style.module.sass";

const MainPage = () => {
  return (
    <div>
      <h1 className={styles.header}>New Best App</h1>
      <Button appearance="primary">Hi Evergreen!</Button>
    </div>
  );
};

export default MainPage;
