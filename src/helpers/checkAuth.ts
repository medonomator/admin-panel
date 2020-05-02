import { getToken } from "./tokens";
import api from "./api";

export const checkAuth = async () => {
  try {
    if (!getToken()) {
      return "login";
    } else {
      // for test
      const res = await api("https://reqres.in/api/users?page=2", "GET", true);
      return "success";
      // take token and go to server verify token
    }
  } catch (e) {
    console.error(e);
    return "login";
  }
};
