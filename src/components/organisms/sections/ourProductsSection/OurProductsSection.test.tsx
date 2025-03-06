import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import * as reduxHooks from '@/app/hooks';
import { ROUTES } from '@routes/routes';

import { OurProductsSection } from './OurProductsSection';

jest.mock('@features/products/productsSlice', () => ({
  fetchProducts: jest.fn(),
  selectProducts: jest.fn(),
}));

jest.mock('@components/molecules/productCard/ProductCardContainer', () => ({
  ProductCardContainer: ({ product }: { product: { _id: string; name: string } }) => (
    <li key={product._id}>{product.name}</li>
  ),
}));

jest.mock('@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle', () => ({
  SectionLabelWithTitle: () => <div data-testid="section-label"></div>,
}));

jest.mock('@/app/hooks', () => ({
  useAppDispatch: jest.fn(() => jest.fn()),
  useAppSelector: jest.fn(),
}));

describe('OurProductsSection', () => {
  const mockProducts = [
    { _id: '1', name: 'Product 1' },
    { _id: '2', name: 'Product 2' },
  ];

  beforeEach(() => {
    jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue(mockProducts);
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
