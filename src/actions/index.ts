interface IData {
  login: string;
  password: string;
}

export const loginAction = async (data: IData, dispatch: Function) => {
  // emulate
  setTimeout(() => {
    if (data.login === "log" && data.password === "pass") {
      dispatch({ type: "success", payload: "success" });
    }
  }, 1000);
};
