export interface BreadCrumbsType {
  path: string;
  name: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  discountedPrice: number;
  inStock: boolean;
  category: string;
  images: string[];
  rating: number;
  reviewsCount: number;
}
