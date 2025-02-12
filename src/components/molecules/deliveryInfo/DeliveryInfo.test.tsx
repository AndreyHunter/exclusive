import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { DeliveryInfo } from './DeliveryInfo';

describe('DeliveryInfo component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <DeliveryInfo />
      </MemoryRouter>,
    );

    expect(screen.getByText('Free Delivery')).toBeInTheDocument();
    expect(
      screen.getByText('Enter your postal code for Delivery Availability'),
    ).toBeInTheDocument();

    expect(screen.getByText('Return Delivery')).toBeInTheDocument();
    expect(screen.getByText('Free 30 Days Delivery Returns.')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /details/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/details');
  });
});
