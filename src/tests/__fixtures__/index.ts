import type { Product } from 'types/index';

export const mockProduct: Product = {
  _id: '1',
  name: 'name',
  price: 100,
  discountedPrice: 80,
  inStock: true,
  category: 'test-category',
  images: ['cat.jpg', 'dog.png'],
  rating: 4,
  reviewsCount: 170,
};

export const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'Product 1',
    price: 100,
    discountedPrice: 90,
    inStock: true,
    category: 'category1',
    images: ['image1.jpg'],
    rating: 4.5,
    reviewsCount: 10,
  },
  {
    _id: '2',
    name: 'Product 2',
    price: 200,
    discountedPrice: 180,
    inStock: true,
    category: 'category2',
    images: ['image2.jpg'],
    rating: 4.2,
    reviewsCount: 5,
  },
];
