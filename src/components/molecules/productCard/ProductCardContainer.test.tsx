import { render } from '@testing-library/react';

import { mockProduct } from '@tests/__fixtures__/index';

import { ProductCardContainer } from './ProductCardContainer';
import { ProductCard } from './ProductCard';

jest.mock('./ProductCard', () => ({
  ProductCard: jest.fn(),
}));

jest.mock('@features/cart/cartSlice', () => ({
  addToCart: () => {},
}));

jest.mock('@/app/hooks', () => ({
  useAppDispatch: () => {},
}));

describe('ProductCardContainer', () => {
  it('checks passing props to ProductCard', () => {
    render(<ProductCardContainer product={mockProduct} />);

    expect(ProductCard).toHaveBeenCalledWith(
      expect.objectContaining({
        product: mockProduct,
        discount: expect.any(Number),
        showAddedMessage: expect.any(Boolean),
        loading: expect.any(Boolean),
        rating: expect.any(Number),
        reviewsCount: expect.any(Number),
        onAddToCart: expect.any(Function),
        onSetRating: expect.any(Function),
      }),
      undefined,
    );
  });
});
