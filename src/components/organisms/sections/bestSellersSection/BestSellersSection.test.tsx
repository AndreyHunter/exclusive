import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import * as mediaQuery from '@hooks/useMediaQuery';
import { ROUTES } from '@routes/routes';

import { BestSellersSection } from './BestSellersSection';

jest.mock('@/app/hooks', () => ({
  useAppDispatch: jest.fn(() => jest.fn()),
  useAppSelector: jest.fn(),
}));

jest.mock('@features/products/productsSlice', () => ({
  fetchBestSellers: () => {},
  selectBestSellers: () => {},
}));

jest.mock('@components/organisms/productSlider/ProductSlider', () => ({
  ProductSlider: () => <div data-testid="product-slider"></div>,
}));

jest.mock('@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle', () => ({
  SectionLabelWithTitle: () => <div data-testid="section-label"></div>,
}));

describe('BestSellersSection', () => {
  const mockUseMediaQuery = jest.spyOn(mediaQuery, 'useMediaQuery');

  it('renders children correctly', () => {
    mockUseMediaQuery.mockReturnValue(false);
    render(
      <MemoryRouter>
        <BestSellersSection />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('product-slider')).toBeInTheDocument();
    expect(screen.getByTestId('section-label')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('renders with desktop link with correct text and path', () => {
    mockUseMediaQuery.mockReturnValue(false);
    render(
      <MemoryRouter>
        <BestSellersSection />
      </MemoryRouter>,
    );
    const desktopLink = screen.getByRole('link', { name: /view all/i });
    expect(desktopLink).toBeInTheDocument();
    expect(desktopLink).toHaveAttribute('href', `/${ROUTES.PRODUCTS}/best-sellers`);
  });

  it('renders with desktop link with correct text and path', () => {
    mockUseMediaQuery.mockReturnValue(true);
    render(
      <MemoryRouter>
        <BestSellersSection />
      </MemoryRouter>,
    );
    const mobileLink = screen.getByRole('link', { name: /view all/i });
    expect(mobileLink).toBeInTheDocument();
    expect(mobileLink).toHaveAttribute('href', `/${ROUTES.PRODUCTS}/best-sellers`);
  });
});
