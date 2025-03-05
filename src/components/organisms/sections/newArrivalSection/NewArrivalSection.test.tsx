import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@/routes/routes';

import { NewArrivalSection } from './newArrivalSection';

describe('NewArrivalSection', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NewArrivalSection />
      </MemoryRouter>,
    );
  });

  it('renders ShopNowLinks with correct href attributes', () => {
    const shopNowLinks = screen.getAllByRole('link', { name: /shop now/i });
    expect(shopNowLinks).toHaveLength(4);
    expect(shopNowLinks[0]).toHaveAttribute('href', `/${ROUTES.PRODUCT}/playstation`);
    expect(shopNowLinks[1]).toHaveAttribute('href', `/${ROUTES.PRODUCTS}/womans-fashion`);
    expect(shopNowLinks[2]).toHaveAttribute('href', `/${ROUTES.PRODUCTS}/electronic/speakers`);
    expect(shopNowLinks[3]).toHaveAttribute('href', `/${ROUTES.PRODUCT}/perfume`);
  });
});
