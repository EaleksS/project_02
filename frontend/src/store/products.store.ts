import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICreateComment, IProduct } from "../types/products.interface";
import { Products } from "../services/products.service";
import { toast } from "react-toastify";

type useProduct = {
  isError: boolean;
  setIsError: (bool: boolean) => void;
  products: null | IProduct[];
  getProducts: () => void;
  productById: null | IProduct;
  getProductById: (id: string) => void;
  getAddComment: (id: string, comment: ICreateComment) => void;
};

export const useProduct = create(
  persist<useProduct>(
    (set, get) => ({
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
      getAddComment: (id, comment) => {
        Products.getAddComment(id, comment)
          .then(() => {
            toast.success(`Коммент добавлен, уважаемый ${comment.name}`);

            get().productById?.comments.push({
              ...comment,
              createdAt: "",
              _id: String(Math.random()),
            });

            set({ productById: get().productById });
          })
          .catch(() => toast.error(`Коммент не добален, произошла ошибка`));
      },
    }),
    { name: "products" }
  )
);
