import React from "react";
import { Button, Pane, TextInput } from "evergreen-ui";
import styles from "./style.module.sass";

const LoginPage = () => {
  return (
    <div className={styles.main}>
      <h1>LoginPage</h1>
      <Pane
        elevation={2}
        width={350}
        height={220}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <TextInput
          className={styles.input}
          name="login"
          placeholder="Login"
          description="login"
          required
        />
        <TextInput
          className={styles.input}
          name="password"
          placeholder="password"
          description="login"
          required
        />
        <Button
          className={styles.button}
          onClick={() => alert(123)}
          appearance="primary"
        >
          Login
        </Button>
      </Pane>
    </div>
  );
};

export default LoginPage;
