import axios from "axios";
import { BASE_URL } from "../http/index";

export const Auth = {
  async getLogin(email: string, password: string | number) {
    return await axios.post(`${BASE_URL}/auth/login`, {
      email: email,
      password: password,
    });
  },

  async getRegister(email: string, password: string | number) {
    return await axios.post(`${BASE_URL}/auth/register`, {
      email: email,
      password: password,
    });
  },

  async getRefresh() {
    return await axios.post(`${BASE_URL}/auth/login/access-token`, {
      refreshToken: localStorage.getItem("refreshToken"),
    });
  },
};
