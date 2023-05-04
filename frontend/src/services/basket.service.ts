import axios from "axios";
import { BASE_URL } from "../http/index";
import { IProduct } from "../types/products.interface";

export const Basket = {
  async getAddInBasket(id: string, product: IProduct) {
    return await axios.post(`${BASE_URL}/users/addInBasket/${id}`, product);
  },

  async getDeleteInBasket(id: string, idProduct: string) {
    return await axios.delete(`${BASE_URL}/users/deleteInBasket/${id}`, {
      data: { _id: idProduct },
    });
  },
};
