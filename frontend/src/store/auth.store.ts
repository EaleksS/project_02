import { Auth } from '../services/auth.service';
import { create } from 'zustand';
import { IUser } from '../types/auth.interface';
import { toast } from 'react-toastify';

type useAuth = {
  user: null | IUser;
  getLogin: (email: string, password: string | number) => void;
  getRefresh: () => void;
  getRegister: (email: string, password: string | number) => void;
  getLogout: () => void;
};

export const useAuth = create<useAuth>((set) => ({
  user: null,
  getLogin: (email, password) => {
    Auth.getLogin(email, password)
      .then((res) => {
        set({ user: res.data });
        toast.success('Вы успешно вошли');
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  },
  getRefresh: () => {
    Auth.getRefresh()
      .then((res) => set({ user: res.data }))
      .catch(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      });
  },
  getRegister: (email, password) => {
    Auth.getRegister(email, password)
      .then(() => toast.success('вы успешно зарегистрировались'))
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  },
  getLogout: () => {
    set({ user: null });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
}));
