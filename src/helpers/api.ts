import axios from "axios";
import { BASE_URL } from "../constants";
/**
 * Request to api
 *
 * @param {String} url
 * @param {srting} method
 * @param {Object} axios config
 *
 */
type Method = "GET" | "POST" | "PUT" | "DELETE";

const api = (url: string, method: Method, own?: boolean) => {
  return axios({
    url: own ? url : `${BASE_URL}${url}`,
    method,
    timeout: 30000,
  });
};

export default api;
