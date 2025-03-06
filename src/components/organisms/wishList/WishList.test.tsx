import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mockProducts } from '@tests/__fixtures__';
import type { Product } from 'types/index';

import { WishList } from './WishList';

jest.mock('@components/molecules/productCard/ProductCardContainer', () => ({
  ProductCardContainer: ({ product }: { product: Product }) => (
    <li key={product._id}>{product.name}</li>
  ),
}));

describe('WishList', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <WishList products={mockProducts} />
      </MemoryRouter>,
    );
    expect(screen.getByText(`Wishlist (${mockProducts.length})`)).toBeInTheDocument();
    expect(screen.getByText(/Move All To Bag/i)).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(mockProducts[index].name);
    });
    expect(listItems).toHaveLength(mockProducts.length);
  });

  it('renders with no products', () => {
    render(
      <MemoryRouter>
        <WishList products={[]} />
      </MemoryRouter>,
    );
    expect(screen.getByText(`Wishlist (0)`)).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
