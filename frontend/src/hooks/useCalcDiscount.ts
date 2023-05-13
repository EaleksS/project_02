import { IProduct } from "../types/products.interface";

export const useCalcDiscount = (product: IProduct) => {
  return Math.round(
    (product.price *
      (product?.quantity ? product?.quantity : 1) *
      (100 - product.discount)) /
      100
  );
};
