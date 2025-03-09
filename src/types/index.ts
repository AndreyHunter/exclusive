export interface BreadCrumbsType {
  path: string;
  name: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  inStock: boolean;
  category: string;
  images: string[];
  rating: number;
  reviewsCount: number;
}

export interface ProductWithInfo extends Product {
  description?: string;
  image?: string;
  flashSales?: boolean;
  bestSelling?: boolean;
  colors?: { name: string; color: string }[];
  sizes?: string[];
}

export interface User {
  _id: string;
  token: string;
  name: string;
}

export type RejectValueType = {
  rejectValue: string;
};

export type Cart = { product: Product; quantity: number }[];
