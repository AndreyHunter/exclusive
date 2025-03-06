import { render, screen } from '@testing-library/react';

import type { ProductWithInfo } from 'types/index';

import { ProductInfo } from './ProductInfo';

jest.mock('@components/molecules/productRating/ProductRating', () => ({
  ProductRating: () => <div data-testid="product-rating">Rating</div>,
}));

jest.mock('@components/molecules/colorsList/ColorsList', () => ({
  ColorsList: () => <div data-testid="colors-list">Colors</div>,
}));

jest.mock('@components/molecules/sizeList/SizeList', () => ({
  SizeList: () => <div data-testid="size-list">Sizes</div>,
}));

jest.mock('@components/molecules/counter/Counter', () => ({
  Counter: () => <div data-testid="counter">Counter</div>,
}));

jest.mock('@components/molecules/deliveryInfo/DeliveryInfo', () => ({
  DeliveryInfo: () => <div data-testid="delivery-info">Delivery Info</div>,
}));

jest.mock('@components/atoms/button/Button', () => ({
  Button: () => <button data-testid="buy-now">Buy Now</button>,
}));

jest.mock('@hooks/useCounter', () => ({
  useCounter: () => ({
    count: 1,
    increment: jest.fn(),
    decrement: jest.fn(),
  }),
}));

export const mockProductWithInfo: ProductWithInfo = {
  _id: '1',
  name: 'product-name',
  price: 100,
  discountedPrice: 80,
  inStock: true,
  category: 'test-category',
  images: ['cat.jpg', 'dog.png'],
  rating: 4,
  reviewsCount: 170,
  description: 'product-description',
  image: 'image1.jpg',
  flashSales: false,
  bestSelling: true,
  colors: [
    { name: 'Red', color: '#FF0000' },
    { name: 'Blue', color: '#0000FF' },
  ],
  sizes: ['S', 'M', 'L'],
};

describe('ProductInfo', () => {
  it('renders basic product information and mocked components', () => {
    render(<ProductInfo product={mockProductWithInfo} />);

    expect(screen.getByText(/product-name/i)).toBeInTheDocument();
    expect(screen.getByText(/product-description/i)).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();

    expect(screen.getByTestId('product-rating')).toBeInTheDocument();
    expect(screen.getByTestId('colors-list')).toBeInTheDocument();
    expect(screen.getByTestId('size-list')).toBeInTheDocument();
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('buy-now')).toBeInTheDocument();
    expect(screen.getByTestId('delivery-info')).toBeInTheDocument();
  });
});
