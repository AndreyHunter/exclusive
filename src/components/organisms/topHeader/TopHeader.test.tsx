import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { TopHeader } from './TopHeader';

const useMediaQueryMock = jest.fn();

jest.mock('@hooks/useMediaQuery', () => ({
  useMediaQuery: useMediaQueryMock,
}));

jest.mock('@components/molecules/languageSelect/LanguageSelect', () => ({
  LanguageSelect: () => <div data-testid="language-select"></div>,
}));

jest.mock('@components/atoms/burgerButton/BurgerButton', () => ({
  BurgerButton: () => <div data-testid="burger-button"></div>,
}));

jest.mock('@/app/hooks', () => ({
  useAppSelector: jest.fn(() => false),
  useAppDispatch: jest.fn(),
}));

describe('TopHeader', () => {
  it('renders essential elements', () => {
    render(
      <MemoryRouter>
        <TopHeader />
      </MemoryRouter>,
    );
    screen.debug();
    expect(screen.getByText(/Summer Sale For /i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ShopNow/i })).toBeInTheDocument();
    expect(screen.getByTestId('language-select')).toBeInTheDocument();
  });

  it('renders BurgerButton component on small sizes', () => {
    useMediaQueryMock.mockReturnValue(true);
    render(
      <MemoryRouter>
        <TopHeader />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('burger-button')).toBeInTheDocument();
  });
});
