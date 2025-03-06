import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProductInfoSlider } from './ProductInfoSlider';

jest.mock('swiper/react', () => ({
  Swiper: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div data-testid="swiper" className={className}>
      {children}
    </div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

jest.mock('./settings', () => ({
  settings: {
    thumbs: { slidesPerView: 5 },
    main: { navigation: true },
  },
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

describe('ProductInfoSlider', () => {
  const mockImages: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

  it('renders both Swiper components', () => {
    render(<ProductInfoSlider images={mockImages} />);

    const swipers = screen.getAllByTestId('swiper');
    expect(swipers).toHaveLength(2);
  });

  it('renders correct number of slides for both swipers', () => {
    render(<ProductInfoSlider images={mockImages} />);

    const slides = screen.getAllByTestId('swiper-slide');
    expect(slides).toHaveLength(mockImages.length * 2);
  });

  it('renders all images correctly', () => {
    render(<ProductInfoSlider images={mockImages} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockImages.length * 2);

    mockImages.forEach((imageSrc) => {
      const imageElements = screen.getAllByRole('img', { name: '' });
      const matchingImages = imageElements.filter((img) => img.getAttribute('src') === imageSrc);
      expect(matchingImages.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders navigation buttons', () => {
    render(<ProductInfoSlider images={mockImages} />);

    expect(screen.getByTestId('slider-button-left')).toBeInTheDocument();
    expect(screen.getByTestId('slider-button-right')).toBeInTheDocument();
  });
});
