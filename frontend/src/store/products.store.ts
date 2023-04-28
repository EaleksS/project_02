import { create } from 'zustand';
import { IUser } from '../types/auth.interface';
import { toast } from 'react-toastify';
import { persist } from 'zustand/middleware';
import { IProduct } from '../types/products.interface';
import { Products } from '../services/products.service';

type useProduct = {
  products: null | IProduct[];
  getProducts: () => void;
  productById: null | IProduct;
  getProductById: (id: string) => void;
};

export const useProduct = create(
  persist<useProduct>(
    (set, get) => ({
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
          .catch((err) => console.log(err));
      },
    }),
    { name: 'products' }
  )
);
