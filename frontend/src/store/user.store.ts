import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IUser } from "../types/auth.interface";
import { User } from "../services/user.service";
import { IProfile } from "../types/user.interface";
import { IProduct } from "../types/products.interface";

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
  devtools<useUser>((set, get) => ({
    isError: false,
    setIsError: (bool) => {
      set({ isError: bool });
    },
    profile: null,
    getProfile: () => {
      User.getProfile()
        .then((res) => {
          console.log(res);
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
      get().profile?.basket.push(product);

      set({ profile: get().profile });
    },
    deleteInBasket: (product) => {
      const profile = get().profile;

      if (profile) {
        const profile2: IProfile = {
          _id: profile._id,
          email: profile.email,
          password: profile.password,
          isAdmin: profile.isAdmin,
          favorite: profile.favorite,
          basket: profile.basket.filter((e) => e._id !== product._id),
          order: profile.order,
          createdAt: profile.createdAt,
          updatedAt: profile.updatedAt,
          __v: profile.__v,
        };

        profile2 && set({ profile: profile2 });
      }
    },
  }))
);
