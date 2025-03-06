import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

import { FlashSalesSection } from './FlashSalesSection';

jest.mock('@/app/hooks', () => ({
  useAppDispatch: jest.fn(() => jest.fn()),
  useAppSelector: jest.fn(),
}));

jest.mock('@features/products/productsSlice', () => ({
  fetchFlashSales: jest.fn(),
  selectFlashSales: jest.fn(),
}));

jest.mock('@components/organisms/productSlider/ProductSlider', () => ({
  ProductSlider: () => <div data-testid="product-slider"></div>,
}));

jest.mock('@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle', () => ({
  SectionLabelWithTitle: () => <div data-testid="section-label"></div>,
}));

jest.mock('@components/molecules/countdown/Countdown', () => ({
  Countdown: () => <div data-testid="countdown"></div>,
}));

describe('FlashSalesSection', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <FlashSalesSection />
      </MemoryRouter>,
    );
  });

  it('renders child components correctly', () => {
    expect(screen.getByTestId('product-slider')).toBeInTheDocument();
    expect(screen.getByTestId('section-label')).toBeInTheDocument();
    expect(screen.getByTestId('countdown')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view all products/i })).toBeInTheDocument();
  });

  it('renders link with correct text and path', () => {
    const link = screen.getByRole('link', { name: /view all products/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/${ROUTES.PRODUCTS}/flash-sales`);
  });
});
