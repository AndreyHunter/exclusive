import { render, screen } from '@testing-library/react';

import { HeroSection } from './HeroSection';

jest.mock('@components/organisms/categoryNav/CategoryNav', () => ({
  CategoryNav: () => <div data-testid="category-nav"></div>,
}));

jest.mock('@components/organisms/mainSlider/MainSlider', () => ({
  MainSlider: () => <div data-testid="main-slider"></div>,
}));

describe('HeroSection', () => {
  it('renders CategoryNav and MainSlider correctly', () => {
    render(<HeroSection />);

    expect(screen.getByTestId('category-nav')).toBeInTheDocument();
    expect(screen.getByTestId('main-slider')).toBeInTheDocument();
  });
});
