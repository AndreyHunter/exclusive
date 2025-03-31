import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mockProductInfo } from '@tests/__fixtures__';

import ProductPage from './ProductPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs" />,
}));

jest.mock('@components/organisms/productInfo/ProductInfo', () => ({
  ProductInfo: () => <div data-testid="product-info" />,
}));

jest.mock('@components/organisms/productImagesSlider/ProductImagesSlider', () => ({
  ProductImagesSlider: () => <div data-testid="product-images-slider" />,
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
        <ProductPage product={mockProductInfo} />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('product-images-slider')).toBeInTheDocument();
    expect(screen.getByTestId('product-info')).toBeInTheDocument();
    expect(screen.getByTestId('suggested-products')).toBeInTheDocument();
  });
});
