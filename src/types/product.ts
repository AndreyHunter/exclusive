export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  discountedPrice?: number | null;
  inStock: number;
  images: string[];
  color?: string;
  size?: string;
  sku?: string;
  rating: number;
  reviewsCount: number;
}

interface AvailableOptions {
  colors: string[];
  sizes: string[];
}

interface VariationOption {
  productId: string;
  color?: string;
  size?: string;
  price: number;
  discountedPrice?: number | null;
  inStock: number;
  sku?: string;
}

interface BaseProductData {
  _id: string;
  baseName: string;
  baseDescription?: string;
  additionalDescription?: string;
  baseCharacteristics?: string[];
  rating: number;
  reviewsCount: number;
  manufacturer?: string;
}

interface CurrentVariationData {
  _id: string;
  name: string;
  sku?: string;
  price: number;
  discountedPrice?: number | null;
  inStock: number;
  images: string[];
  color?: string;
  size?: string;
  description?: string;
  characteristics?: string[];
  category: string;
}

export interface ProductPageData {
  variation: CurrentVariationData;
  baseProduct: BaseProductData;
  options: AvailableOptions;
  variationsMap: VariationOption[];
}

export type ProductsResponse = {
  products: Product[];
  hasMore: boolean;
};

export type Cart = { product: Product; quantity: number }[];
