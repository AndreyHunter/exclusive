import { render, screen } from '@testing-library/react';

import AboutPage from './AboutPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs"></div>,
}));

jest.mock('@components/organisms/sections/ourStorySection/OurStorySection', () => ({
  OurStorySection: () => <div data-testid="our-story-section"></div>,
}));

jest.mock('@components/organisms/ourStatisticList/OurStatisticList', () => ({
  OurStatisticList: () => <div data-testid="our-statistic-list"></div>,
}));

jest.mock('@components/organisms/partnersSlider/PartnersSlider', () => ({
  PartnersSlider: () => <div data-testid="partners-slider"></div>,
}));

jest.mock('@components/organisms/sections/advantagesSection/AdvantagesSection', () => ({
  AdvantagesSection: () => <div data-testid="advantages-section"></div>,
}));

describe('AboutPage', () => {
  it('renders children elements', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('our-story-section')).toBeInTheDocument();
    expect(screen.getByTestId('our-statistic-list')).toBeInTheDocument();
    expect(screen.getByTestId('partners-slider')).toBeInTheDocument();
    expect(screen.getByTestId('advantages-section')).toBeInTheDocument();
  });
});
