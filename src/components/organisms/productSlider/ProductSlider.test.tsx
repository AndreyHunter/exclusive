import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockProducts } from '@tests/__fixtures__';
import type { Product } from 'types/index';

import { ProductSlider } from './ProductSlider';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-container">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

jest.mock('@components/molecules/productCard/ProductCardContainer', () => ({
  ProductCardContainer: ({ product }: { product: Product }) => (
    <div data-testid="product-card">{product.name}</div>
  ),
}));

jest.mock('@components/atoms/sliderButton/SliderButton', () => ({
  SliderButton: ({ direction, className }: { direction: string; className?: string }) => (
    <button data-testid={`slider-button-${direction}`} className={className}>
      {direction}
    </button>
  ),
}));

jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/navigation', () => ({}));
jest.mock('swiper/css/pagination', () => ({}));
jest.mock('./productSlider.scss', () => ({}));
jest.mock('swiper/modules', () => ({ Navigation: {} }));

jest.mock('@hooks/useMediaQuery', () => ({
  useMediaQuery: () => {},
}));

describe('ProductSlider', () => {
  const defaultProps = {
    products: mockProducts,
    sliderId: 'test-slider',
    buttonsPosition: 'default' as const,
  };

  it('renders correct number of product cards', () => {
    render(<ProductSlider {...defaultProps} />);
    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length);
  });

  it('renders navigation buttons', () => {
    render(<ProductSlider {...defaultProps} />);

    expect(screen.getByTestId('slider-button-left')).toBeInTheDocument();
    expect(screen.getByTestId('slider-button-right')).toBeInTheDocument();
  });

  it('handles empty products array', () => {
    render(<ProductSlider {...defaultProps} products={[]} />);
    expect(screen.queryAllByTestId('product-card')).toHaveLength(0);

    expect(screen.getByTestId('slider-button-left')).toBeInTheDocument();
    expect(screen.getByTestId('slider-button-right')).toBeInTheDocument();
  });
});
