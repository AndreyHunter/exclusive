import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mockProduct } from '@tests/__fixtures__/';
import { ROUTES } from '@routes/routes';
import { Numbers } from '@utils/index';

import { ProductCard } from './ProductCard';

jest.mock('@components/molecules/addToCartButton/AddToCartButton.tsx', () => ({
  AddToCartButton: () => <div data-testid="addToCartButton">AddToCartButton</div>,
}));

jest.mock('@components/molecules/productRating/ProductRating.tsx', () => ({
  ProductRating: () => <div data-testid="rating">Rating</div>,
}));

describe('ProductCard', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProductCard
          product={mockProduct}
          discount={Numbers.calcDiscount(mockProduct.price, mockProduct.discountedPrice!)}
          loading={false}
          showAddedMessage={false}
          rating={4}
          reviewsCount={140}
          onAddToCart={jest.fn()}
          onSetRating={jest.fn()}
        />
      </MemoryRouter>,
    );
  });

  it("checks children's render", () => {
    expect(screen.getByTestId('addToCartButton')).toBeInTheDocument();
    expect(screen.getByTestId('rating')).toBeInTheDocument();
  });

  describe('ProductImage', () => {
    it('checks image attributes', () => {
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', mockProduct.images[0]);
      expect(image).toHaveAttribute('alt', mockProduct.name);
    });

    it('navigates to product page', () => {
      expect(screen.getByRole('img').parentElement).toHaveAttribute(
        'href',
        `/${ROUTES.PRODUCT}/${mockProduct._id}`,
      );
    });
  });

  describe('ProductName', () => {
    it('checks product name render', () => {
      expect(screen.getByText(/Classic T-Shirt - Black/i)).toBeInTheDocument();
    });

    it('navigates to product page', () => {
      expect(screen.getByText(/Classic T-Shirt - Black/i)).toHaveAttribute(
        'href',
        `/${ROUTES.PRODUCT}/${mockProduct._id}`,
      );
    });
  });

  describe('ProductPrice', () => {
    it('checks product price render', () => {
      expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
      expect(screen.getByText(`$${mockProduct.discountedPrice}`)).toBeInTheDocument();
    });

    it('checks discount label render', () => {
      expect(screen.getByText(`-16%`)).toBeInTheDocument();
    });
  });
});
