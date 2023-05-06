import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Basket } from "../services/basket.service";
import { IProduct } from "../types/products.interface";

type useBasket = {
  isActive: boolean;
  setIsActive: (bool?: boolean) => void;
  isError: boolean;
  setIsError: (bool: boolean) => void;
  getAddInBasket: (id: string, product: IProduct) => void;
  getDeleteInBasket: (id: string, idProduct: string) => void;
};

export const useBasket = create(
  devtools<useBasket>((set, get) => ({
    isActive: false,
    setIsActive: (bool) => {
      if (bool === false) return set({ isActive: false });

      if (bool === true) return set({ isActive: true });

      console.log("as");

      set({ isActive: !get().isActive });
    },
    isError: false,
    setIsError: (bool) => {
      set({ isError: bool });
    },
    getAddInBasket: (id, product) => {
      Basket.getAddInBasket(id, product)
        .then(() => console.log("Добавлен"))
        .catch((err) => console.log(err));
    },
    getDeleteInBasket: (id, idProduct) => {
      Basket.getDeleteInBasket(id, idProduct)
        .then(() => console.log("Удален"))
        .catch((err) => console.log(err));
    },
  }))
);
