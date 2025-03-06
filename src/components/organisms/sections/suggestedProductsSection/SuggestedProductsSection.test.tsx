import { render, screen } from '@testing-library/react';

import { mockProducts } from '@tests/__fixtures__';

import { SuggestedProductsSection } from './SuggestedProductsSection';

jest.mock('@components/organisms/productSlider/ProductSlider', () => ({
  ProductSlider: () => <div data-testid="mock-product-slider" />,
}));

describe('SuggestedProductsSection', () => {
  it('renders the section title and product slider', () => {
    const sectionTitle = 'Suggested Products';
    render(<SuggestedProductsSection products={mockProducts} sectionTitle={sectionTitle} />);
    expect(screen.getByText(sectionTitle)).toBeInTheDocument();
    expect(screen.getByTestId('mock-product-slider')).toBeInTheDocument();
  });
});
