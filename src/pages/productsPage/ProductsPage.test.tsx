import { render, screen } from '@testing-library/react';

import { mockProducts } from '@tests/__fixtures__';

import ProductsPage from './ProductsPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs"></div>,
}));

jest.mock('@components/molecules/productList/ProductList.tsx', () => ({
  ProductsList: () => <ul data-testid="products-list"></ul>,
}));

jest.mock('@components/organisms/filterPanel/FilterPanel', () => ({
  FilterPanel: () => <div data-testid="filter-panel"></div>,
}));

jest.mock('@components/molecules/sortSelect/SortSelect', () => ({
  SortSelect: () => <div data-testid="sort-select"></div>,
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
    expect(screen.getByTestId('products-list')).toBeInTheDocument();
    expect(screen.getByTestId('filter-panel')).toBeInTheDocument();
    expect(screen.getByTestId('sort-select')).toBeInTheDocument();
  });
});
