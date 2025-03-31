import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mockProductInfo } from '@tests/__fixtures__';

import { ProductInfo } from './ProductInfo';

jest.mock('@/app/hooks', () => ({
  useAppDispatch: () => jest.fn(),
}));

jest.mock('@features/cart/cartSlice', () => ({
  addToCart: () => jest.fn(),
}));

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

describe('ProductInfo', () => {
  it('renders basic product information and mocked components', () => {
    render(
      <MemoryRouter>
        <ProductInfo product={mockProductInfo} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Classic T-Shirt/i)).toBeInTheDocument();
    expect(screen.getByText(/A comfortable black cotton T-shirt/i)).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();

    expect(screen.getByTestId('product-rating')).toBeInTheDocument();
    expect(screen.getByTestId('colors-list')).toBeInTheDocument();
    expect(screen.getByTestId('size-list')).toBeInTheDocument();
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('buy-now')).toBeInTheDocument();
    expect(screen.getByTestId('delivery-info')).toBeInTheDocument();
  });
});
