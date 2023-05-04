import axios from "axios";
import { BASE_URL } from "../http/index";
import { ICreateComment, ICreateProduct } from "../types/products.interface";

export const Products = {
  async getProducts() {
    return await axios.get(`${BASE_URL}/products`);
  },

  async getProductById(id: string) {
    return await axios.get(`${BASE_URL}/products/${id}`);
  },

  // admin
  async getCreateProduct(product: ICreateProduct) {
    return await axios.post(`${BASE_URL}/products/create`, product);
  },

  // admin
  async getUpdateProduct(id: string, product: ICreateProduct) {
    return await axios.put(`${BASE_URL}/products/${id}`, product);
  },

  // admin
  async getDeleteProduct(id: string) {
    return await axios.delete(`${BASE_URL}/products/${id}`);
  },

  async getAddComment(id: string, comment: ICreateComment) {
    return await axios.post(`${BASE_URL}/products/addComment/${id}`, comment);
  },

  // admin
  async getDeleteComment(productId: string, commentId: string) {
    return await axios.delete(
      `${BASE_URL}/products/deleteComment/${productId}`,
      {
        data: { id: commentId },
      }
    );
  },
};
