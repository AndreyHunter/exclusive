import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('@components/organisms/sections/heroSection/HeroSection', () => ({
  HeroSection: () => <div data-testid="hero-section"></div>,
}));

jest.mock('@components/organisms/sections/flashSalesSection/FlashSalesSection', () => ({
  FlashSalesSection: () => <div data-testid="flash-sales-section"></div>,
}));

jest.mock('@components/organisms/sections/categoriesSection/CategoriesSection', () => ({
  CategoriesSection: () => <div data-testid="categories-section"></div>,
}));

jest.mock('@components/organisms/sections/bestSellersSection/BestSellersSection', () => ({
  BestSellersSection: () => <div data-testid="best-sellers-section"></div>,
}));

jest.mock('@components/organisms/sections/promotionSection/PromotionSection', () => ({
  PromotionSection: () => <div data-testid="promotion-section"></div>,
}));

jest.mock('@components/organisms/sections/ourProductsSection/OurProductsSection', () => ({
  OurProductsSection: () => <div data-testid="our-products-section"></div>,
}));

jest.mock('@components/organisms/sections/newArrivalSection/newArrivalSection', () => ({
  NewArrivalSection: () => <div data-testid="new-arrival-section"></div>,
}));

jest.mock('@components/organisms/sections/advantagesSection/AdvantagesSection', () => ({
  AdvantagesSection: () => <div data-testid="advantages-section"></div>,
}));

describe('HomePage', () => {
  it('renders all sections correctly', () => {
    render(<HomePage />);

    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('flash-sales-section')).toBeInTheDocument();
    expect(screen.getByTestId('categories-section')).toBeInTheDocument();
    expect(screen.getByTestId('best-sellers-section')).toBeInTheDocument();
    expect(screen.getByTestId('promotion-section')).toBeInTheDocument();
    expect(screen.getByTestId('our-products-section')).toBeInTheDocument();
    expect(screen.getByTestId('new-arrival-section')).toBeInTheDocument();
    expect(screen.getByTestId('advantages-section')).toBeInTheDocument();
  });
});
