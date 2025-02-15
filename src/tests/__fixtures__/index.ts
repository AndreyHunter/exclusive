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
