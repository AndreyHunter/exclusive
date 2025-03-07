import { render, screen } from '@testing-library/react';

import LayoutTemplate from './LayoutTemplate';

jest.mock('@components/organisms/topHeader/TopHeader', () => ({
  TopHeader: () => <div data-testid="top-header">Top Header</div>,
}));

jest.mock('@components/organisms/header/Header', () => ({
  Header: () => <div data-testid="header">Header</div>,
}));

jest.mock('@components/organisms/footer/Footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

jest.mock('@components/organisms/mobileMenu/MobileMenu', () => ({
  MobileMenu: () => <div data-testid="mobile-menu">Mobile Menu</div>,
}));

jest.mock('@components/molecules/scrollToTopButton/scrollToTopButton', () => ({
  ScrollToTopButton: () => <div data-testid="scroll-to-top">Scroll To Top Button</div>,
}));

jest.mock('react-router-dom', () => ({
  useLocation: () => ({ pathname: '/test-path' }),
  Outlet: () => <div data-testid="outlet">Main Content Outlet</div>,
}));

const scrollToMock = jest.fn();
window.scrollTo = scrollToMock;

describe('LayoutTemplate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all layout components correctly', () => {
    render(<LayoutTemplate />);

    expect(screen.getByTestId('top-header')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-to-top')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });

  it('scrolls to top when pathname changes', () => {
    render(<LayoutTemplate />);

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: 'auto',
    });
  });
});
