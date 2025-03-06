import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

import { PromotionSection } from './PromotionSection';

jest.mock('@components/molecules/countdown/Countdown', () => ({
  Countdown: () => <div data-testid="countdown-mock"></div>,
}));

describe('PromotionSection', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PromotionSection />
      </MemoryRouter>,
    );
  });

  it('renders components', () => {
    const title = screen.getByText(/enhance your music experience/i);
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
    expect(screen.getByTestId('countdown-mock')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /buy now!/i })).toBeInTheDocument();
  });

  it('renders link with the correct href', () => {
    const button = screen.getByRole('link', { name: /buy now!/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', `/${ROUTES.PRODUCT}/example`);
  });
});
