export interface ICreateComment {
  name: string;
  comment: string;
  img: string;
}

export interface IComment {
  name: string;
  comment: string;
  img: string;
  createdAt: string;
  _id: string;
}

export interface ICreateProduct {
  name: string;
  price: number;
  discount: number;
  description: string;
  imageUrl: string;
  comments: IComment[];
  info: {
    weight: string;
    proteins: string;
    carbohydrates: string;
    fats: string;
    calories: string;
  };
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  discount: number;
  description: string;
  imageUrl: string;
  comments: [];
  info: {
    weight: string;
    proteins: string;
    carbohydrates: string;
    fats: string;
    calories: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
