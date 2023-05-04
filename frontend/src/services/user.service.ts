import axios from "axios";
import { BASE_URL } from "../http/index";

export const User = {
  async getProfile() {
    return await axios.get(`${BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  },

  async getProfileChange(email: string, password: string | number) {
    return await axios.put(
      `${BASE_URL}/auth/register`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
  },
};
