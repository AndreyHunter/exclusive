import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProductPage from './ProductPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs" />,
}));

jest.mock('@components/organisms/productInfo/ProductInfo', () => ({
  ProductInfo: () => <div data-testid="product-info" />,
}));

jest.mock('@components/organisms/productInfoSlider/ProductInfoSlider', () => ({
  ProductInfoSlider: () => <div data-testid="product-slider" />,
}));

jest.mock(
  '@components/organisms/sections/suggestedProductsSection/SuggestedProductsSectionContainer',
  () => ({
    SuggestedProductsSectionContainer: () => <div data-testid="suggested-products" />,
  }),
);

jest.mock('@utils/index', () => ({
  Utils: {
    generateBreadcrumbs: () => [],
  },
}));

describe('ProductPage', () => {
  it('renders components correctly', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('product-slider')).toBeInTheDocument();
    expect(screen.getByTestId('product-info')).toBeInTheDocument();
    expect(screen.getByTestId('suggested-products')).toBeInTheDocument();
  });
});
