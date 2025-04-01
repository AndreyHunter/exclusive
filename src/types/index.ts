export interface BreadCrumbsType {
  path: string;
  name: string;
}

export interface User {
  _id: string;
  token: string;
  name: string;
}

export type RejectValueType = {
  rejectValue: string;
};

export type { Product, ProductsResponse, ProductPageData, Cart } from './product';
