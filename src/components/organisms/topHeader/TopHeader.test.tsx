import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { TopHeader } from './TopHeader';

jest.mock('@hooks/useMediaQuery', () => ({
  useMediaQuery: jest.fn(),
}));

jest.mock('@components/molecules/languageSelect/LanguageSelect', () => ({
  LanguageSelect: () => <div data-testid="language-select"></div>,
}));

jest.mock('@components/atoms/burgerButton/BurgerButton', () => ({
  BurgerButton: () => <div data-testid="burger-button"></div>,
}));

jest.mock('@/app/hooks', () => ({
  useAppSelector: () => jest.fn(),
  useAppDispatch: jest.fn(),
}));

describe('TopHeader', () => {
  it('renders essential elements', () => {
    render(
      <MemoryRouter>
        <TopHeader />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Summer Sale For /i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ShopNow/i })).toBeInTheDocument();
    expect(screen.getByTestId('language-select')).toBeInTheDocument();
  });

  it("doesn't render BurgerButton on large sizes", () => {
    const useMediaQuery = jest.requireMock('@hooks/useMediaQuery').useMediaQuery;
    useMediaQuery.mockReturnValue(false);
    render(
      <MemoryRouter>
        <TopHeader />
      </MemoryRouter>,
    );
    expect(screen.queryByTestId('burger-button')).not.toBeInTheDocument();
  });

  it('renders BurgerButton on small sizes', () => {
    const useMediaQuery = jest.requireMock('@hooks/useMediaQuery').useMediaQuery;
    useMediaQuery.mockReturnValue(true);
    render(
      <MemoryRouter>
        <TopHeader />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('burger-button')).toBeInTheDocument();
  });
});
