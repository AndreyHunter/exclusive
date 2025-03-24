import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { mockProducts } from '@tests/__fixtures__';
import type { Product } from '@/types';

import { OurProductsSection } from './OurProductsSection';

jest.mock('@hooks/useProducts', () => ({
  useProducts: () => ({
    products: mockProducts,
    loading: false,
    error: null,
  }),
}));

jest.mock('@components/molecules/productCard/ProductCardContainer', () => ({
  ProductCardContainer: ({ product }: { product: Product }) => (
    <li key={product._id}>{product.name}</li>
  ),
}));

jest.mock('@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle', () => ({
  SectionLabelWithTitle: () => <div data-testid="section-label"></div>,
}));

describe('OurProductsSection', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OurProductsSection />
      </MemoryRouter>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders basic components correctly', () => {
    expect(screen.getByTestId('section-label')).toBeInTheDocument();
    expect(screen.getByText(/View All Products/i)).toBeInTheDocument();
  });

  it('renders the correct number of ProductCard elements', () => {
    const productItems = screen.getAllByRole('listitem');
    expect(productItems.length).toBe(2);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('sets the correct link path for "View All Products"', () => {
    expect(screen.getByText(/View All Products/i)).toHaveAttribute('href', `/${ROUTES.PRODUCTS}`);
  });
});
