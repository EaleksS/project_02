import { IProduct } from "./products.interface";

export interface IProfile {
  _id: string;
  email: string;
  password: string;
  isAdmin: boolean;
  favorite: any[];
  basket: IProduct[];
  order: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
