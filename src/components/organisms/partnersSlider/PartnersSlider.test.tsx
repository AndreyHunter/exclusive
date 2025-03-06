import { render, screen } from '@testing-library/react';

import * as mediaQueryHook from '@hooks/useMediaQuery';
import type { TypePartnerCard } from 'types/static';

import { PartnersSlider } from './PartnersSlider';

jest.mock('swiper/modules', () => ({
  Pagination: jest.fn(),
}));

jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/pagination', () => ({}));

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

describe('PartnersSlider', () => {
  beforeEach(() => {
    jest.spyOn(mediaQueryHook, 'useMediaQuery');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders Swiper if partners.length > 3', () => {
    const mockPartners: TypePartnerCard[] = [
      { id: 1, name: 'Partner 1', position: 'CEO', image: 'image1.jpg' },
      { id: 2, name: 'Partner 2', position: 'CTO', image: 'image2.jpg' },
      { id: 3, name: 'Partner 3', position: 'Manager', image: 'image3.jpg' },
      { id: 4, name: 'Partner 4', position: 'Developer', image: 'image4.jpg' },
    ];
    jest.spyOn(mediaQueryHook, 'useMediaQuery').mockReturnValue(false);
    render(<PartnersSlider partners={mockPartners} />);
    expect(screen.getByTestId('swiper')).toBeInTheDocument();
    expect(screen.getAllByTestId('swiper-slide')).toHaveLength(4);
  });

  it('renders list if partners.length <= 3 and isSmall is false', () => {
    const mockPartners: TypePartnerCard[] = [
      { id: 1, name: 'Partner 1', position: 'CEO', image: 'image1.jpg' },
      { id: 2, name: 'Partner 2', position: 'CTO', image: 'image2.jpg' },
      { id: 3, name: 'Partner 3', position: 'Manager', image: 'image3.jpg' },
    ];
    jest.spyOn(mediaQueryHook, 'useMediaQuery').mockReturnValue(false);
    render(<PartnersSlider partners={mockPartners} />);
    expect(screen.queryByTestId('swiper')).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
