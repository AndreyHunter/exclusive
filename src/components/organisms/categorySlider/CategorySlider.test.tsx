import { render, screen } from '@testing-library/react';

import { gameCategories } from '@constants/gameCategories';

import { CategorySlider } from './CategorySlider';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-mock">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide-mock">{children}</div>
  ),
}));

jest.mock('./settings', () => ({
  settings: {},
}));

jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/navigation', () => ({}));

jest.mock('@components/molecules/categoryItem/CategoryItem', () => ({
  CategoryItem: jest.fn(() => <div data-testid="category-item-mock" />),
}));

describe('CategorySlider', () => {
  it('renders correctly', () => {
    render(<CategorySlider />);
    expect(screen.getByTestId('swiper-mock')).toBeInTheDocument();
  });

  it('renders the correct number of CategoryItem components', () => {
    render(<CategorySlider />);
    const categoryItems = screen.getAllByTestId('category-item-mock');
    expect(categoryItems).toHaveLength(gameCategories.length);
  });

  it('renders navigation buttons with correct classes', () => {
    render(<CategorySlider />);
    const prevButton = screen.getByRole('previous-slide');
    const nextButton = screen.getByRole('next-slide');
    expect(prevButton).toHaveClass('categories-slider-button-prev');
    expect(nextButton).toHaveClass('categories-slider-button-next');
  });
});
