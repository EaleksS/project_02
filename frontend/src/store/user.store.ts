import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User } from "../services/user.service";
import { IProfile } from "../types/user.interface";
import { IProduct } from "../types/products.interface";
import { produce } from "immer";

type useUser = {
  isError: boolean;
  setIsError: (bool: boolean) => void;
  profile: null | IProfile;
  getProfile: () => void;
  getProfileChange: (email: string, password: string | number) => void;
  addInBasket: (product: IProduct) => void;
  deleteInBasket: (product: IProduct) => void;
};

export const useUser = create(
  devtools<useUser>((set) => ({
    isError: false,
    setIsError: (bool) => {
      set({ isError: bool });
    },
    profile: null,
    getProfile: () => {
      User.getProfile()
        .then((res) => {
          set({ profile: res.data });
        })
        .catch((err) => console.log(err));
    },
    getProfileChange: (email, password) => {
      User.getProfileChange(email, password)
        .then((res) => set({ profile: res.data }))
        .catch((err) => console.log(err));
    },
    addInBasket: (product) => {
      set(
        produce((state) => {
          state.profile.basket = [...state.profile.basket, product];
        })
      );
    },
    deleteInBasket: (product) => {
      set(
        produce((state) => {
          state.profile.basket = state.profile?.basket.filter(
            (pro: IProduct) => product._id !== pro._id
          );
        })
      );
    },
  }))
);
