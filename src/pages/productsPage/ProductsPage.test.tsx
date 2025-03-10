import { render, screen } from '@testing-library/react';

import { mockProducts } from '@tests/__fixtures__';

import ProductsPage from './ProductsPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs"></div>,
}));

jest.mock('@components/molecules/productList/ProductList', () => ({
  ProductsList: () => <div data-testid="products-list"></div>,
}));

jest.mock('@components/atoms/loader/Loader', () => ({
  Loader: () => <div data-testid="loader"></div>,
}));

describe('ProductsPage', () => {
  const props = {
    products: mockProducts,
    error: null,
    loading: false,
    breadCrumbs: [{ name: 'Home', path: '/' }],
    categoryName: 'Test Category',
  };

  it('renders main elements correctly when loading is false and error is null', () => {
    render(<ProductsPage {...props} />);

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();

    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.queryByText(/Error:/)).not.toBeInTheDocument();
    expect(screen.getByTestId('products-list')).toBeInTheDocument();
  });

  it('renders loader when loading is true', () => {
    render(<ProductsPage {...props} loading={true} />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.queryByTestId('products-list')).not.toBeInTheDocument();
    expect(screen.queryByText(/Error:/)).not.toBeInTheDocument();
  });

  it('renders error message when error is present', () => {
    render(<ProductsPage {...props} error="Failed to load products" />);

    expect(screen.getByText(/Error: Failed to load products/i)).toBeInTheDocument();
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.queryByTestId('products-list')).not.toBeInTheDocument();
  });
});
