import axios from 'axios';
import { BASE_URL } from '../http/index';

export const User = {
  async getProfile() {
    return await axios.get(`${BASE_URL}/auth/login`, {
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    });
  },

  async getProfileChange(email: string) {
    return await axios.put(
      `${BASE_URL}/auth/register`,
      {
        email: email,
      },
      {
        headers: {
          Authorization: localStorage.getItem('accessToken'),
        },
      }
    );
  },
};
