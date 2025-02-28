import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import type { SlideImg } from 'types/static';
import { ROUTES } from '@routes/routes';
import { closeUserMenu } from '@features/userMenu/userMenuSlice';

import { mainSlides } from './mainSlides';
import { MainSlider } from './MainSlider';

const mockDispatch = jest.fn();
jest.mock('@/app/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

jest.mock('swiper/modules', () => ({}));

jest.mock('swiper/react', () => ({
  Swiper: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <div onClick={onClick}>{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/pagination', () => ({}));

const MockProductPage = () => {
  const { pathname } = useLocation();
  return <div data-testid="product-page">Product: {pathname}</div>;
};

describe('MainSlider', () => {
  const mockSlides: SlideImg[] = [
    { id: 1, largeImgPath: 'large1.jpg', smallImgPath: 'small1.jpg' },
    { id: 2, largeImgPath: 'large2.jpg', smallImgPath: 'small2.jpg' },
  ];

  describe('Rendering', () => {
    it('renders slider with default slides', () => {
      render(
        <MemoryRouter>
          <MainSlider />
        </MemoryRouter>,
      );
      expect(screen.getAllByRole('img')).toHaveLength(mainSlides.length);
    });

    it('renders slider with custom slides', () => {
      render(
        <MemoryRouter>
          <MainSlider slides={mockSlides} />
        </MemoryRouter>,
      );
      expect(screen.getAllByRole('img')).toHaveLength(mockSlides.length);
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<MainSlider slides={mockSlides} />} />
            <Route path={`${ROUTES.PRODUCT}/:id`} element={<MockProductPage />} />
          </Routes>
        </MemoryRouter>,
      );
    });

    it('navigates to first page', async () => {
      await userEvent.click(screen.getAllByRole('link')[0]);
      expect(
        screen.getByText(`Product: /${ROUTES.PRODUCT}/${mockSlides[0].id}`),
      ).toBeInTheDocument();
    });

    it('navigates to second page', async () => {
      await userEvent.click(screen.getAllByRole('link')[1]);
      expect(
        screen.getByText(`Product: /${ROUTES.PRODUCT}/${mockSlides[1].id}`),
      ).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('closes user menu when clicking on the slider', async () => {
      render(
        <MemoryRouter>
          <MainSlider />
        </MemoryRouter>,
      );
      await userEvent.click(screen.getAllByRole('img')[0]);
      expect(mockDispatch).toHaveBeenCalledWith(closeUserMenu());
    });
  });
});
