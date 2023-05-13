import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  IComment,
  ICreateComment,
  IProduct,
} from "../types/products.interface";
import { Products } from "../services/products.service";
import { toast } from "react-toastify";
import { produce } from "../../node_modules/immer";

type useProduct = {
  isError: boolean;
  setIsError: (bool: boolean) => void;
  products: null | IProduct[];
  getProducts: () => void;
  productById: null | IProduct;
  isLoader: boolean;
  getProductById: (id: string) => void;
  getAddComment: (id: string, comment: ICreateComment) => void;
  getDeleteComment: (id: string, commentId: string) => void;
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
      isLoader: false,
      getProductById: (id) => {
        get().productById?._id !== id && set({ isLoader: true });
        Products.getProductById(id)
          .then((res) => set({ productById: res.data }))
          .catch(() => set({ isError: true }))
          .finally(() => set({ isLoader: false }));
      },
      getAddComment: (id, comment) => {
        Products.getAddComment(id, comment)
          .then(() => {
            toast.success(`Коммент добавлен, уважаемый ${comment.name}`);

            set(
              produce((state) => {
                state.productById.comments = [
                  ...state.productById.comments,
                  { ...comment, createdAt: "", _id: String(Math.random()) },
                ];
              })
            );
          })
          .catch(() => toast.error(`Коммент не добален, произошла ошибка`));
      },
      getDeleteComment: (id, commentId) => {
        Products.getDeleteComment(id, commentId)
          .then(() => {
            toast.success(`Коммент удален`);

            set(
              produce((state) => {
                state.productById.comments = state.productById?.comments.filter(
                  (comment: IComment) => commentId !== comment._id
                );
              })
            );
          })
          .catch(() => toast.error(`Коммент не удален. Произошла ошибка`));
      },
    }),
    { name: "products" }
  )
);
