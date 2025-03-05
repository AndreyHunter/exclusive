import { render, screen } from '@testing-library/react';

import { CategoriesSection } from './CategoriesSection';

jest.mock('@components/helpers/container/Container', () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}));

jest.mock('@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle', () => ({
  SectionLabelWithTitle: () => <div data-testid="section-label"></div>,
}));

jest.mock('@components/organisms/categorySlider/CategorySlider', () => ({
  CategorySlider: () => <div data-testid="category-slider"></div>,
}));

describe('CategoriesSection', () => {
  it('renders correctly with mocked components', () => {
    render(<CategoriesSection />);

    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByTestId('section-label')).toBeInTheDocument();
    expect(screen.getByTestId('category-slider')).toBeInTheDocument();
  });
});
