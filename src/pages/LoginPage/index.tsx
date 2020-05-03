import React, { useState, useContext } from "react";
import { Button, Pane, TextInput } from "evergreen-ui";
import styles from "./style.module.sass";
import { Context } from "../../reducer";
import { loginAction } from "../../actions";

const LoginPage = () => {
  const [login, loginChange] = useState("");
  const [password, passwordChange] = useState("");
  const { dispatch } = useContext(Context);

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
          value={login}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            loginChange(e.target.value)
          }
        />
        <TextInput
          className={styles.input}
          name="password"
          placeholder="password"
          description="login"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            passwordChange(e.target.value)
          }
        />
        <Button
          className={styles.button}
          disabled={!login && !password}
          onClick={() => loginAction({ login, password }, dispatch)}
          appearance="primary"
        >
          Login
        </Button>
      </Pane>
    </div>
  );
};

export default LoginPage;
