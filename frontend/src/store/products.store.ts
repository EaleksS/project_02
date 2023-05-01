import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IProduct } from '../types/products.interface';
import { Products } from '../services/products.service';

type useProduct = {
  isError: boolean;
  setIsError: (bool: boolean) => void;
  products: null | IProduct[];
  getProducts: () => void;
  productById: null | IProduct;
  getProductById: (id: string) => void;
};

export const useProduct = create(
  persist<useProduct>(
    (set) => ({
      isError: false,
      setIsError: (bool) => {
        set({ isError: bool });
      },
      products: null,
      getProducts: () => {
        Products.getProducts()
          .then((res) => set({ products: res.data }))
          .catch((err) => console.log(err));
      },
      productById: null,
      getProductById: (id) => {
        Products.getProductById(id)
          .then((res) => set({ productById: res.data }))
          .catch(() => set({ isError: true }));
      },
    }),
    { name: 'products' }
  )
);
