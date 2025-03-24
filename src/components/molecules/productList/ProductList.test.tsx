import { render, screen } from '@testing-library/react';

import type { Product } from 'types/index';

import { ProductsList } from './ProductList';
import type { ProductsListProps } from './ProductList';

jest.mock('@components/molecules/productCard/ProductCardContainer', () => ({
  ProductCardContainer: ({ product }: { product: Product }) => (
    <li data-testid="product-card">{product.name}</li>
  ),
}));

const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'Test Product 1',
    price: 100,
    discountedPrice: 80,
    inStock: true,
    category: 'Test Category',
    images: ['image1.jpg', 'image2.jpg'],
    rating: 4.5,
    reviewsCount: 10,
  },
  {
    _id: '2',
    name: 'Test Product 2',
    price: 200,
    discountedPrice: 150,
    inStock: true,
    category: 'Test Category',
    images: ['image3.jpg', 'image4.jpg'],
    rating: 4.5,
    reviewsCount: 10,
  },
];

describe('ProductsList', () => {
  const defaultProps: ProductsListProps = {
    products: mockProducts,
    loading: false,
    error: null,
  };

  it('renders list of products correctly', () => {
    render(<ProductsList {...defaultProps} />);

    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(2);
    expect(productCards[0]).toHaveTextContent('Test Product 1');
    expect(productCards[1]).toHaveTextContent('Test Product 2');
  });

  it('handles empty products array', () => {
    render(<ProductsList {...defaultProps} products={[]} />);
    const productCards = screen.queryAllByTestId('product-card');
    expect(productCards).toHaveLength(0);
  });

  it('renders correctly with undefined products', () => {
    render(<ProductsList {...defaultProps} products={undefined} />);
    const productCards = screen.queryAllByTestId('product-card');
    expect(productCards).toHaveLength(0);
  });
});
