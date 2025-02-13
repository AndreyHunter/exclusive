import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

import { OrderItem } from './OrderItem';

describe('OrderItem component', () => {
  const testId = 'test-order-id';
  const testName = 'Test Order Name';
  const testImage = 'test-image-url.jpg';

  it('renders with props and checks content', () => {
    render(
      <MemoryRouter>
        <OrderItem id={testId} name={testName} image={testImage} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('img')).toHaveAttribute('src', testImage);
    expect(screen.getByRole('img')).toHaveAttribute('alt', testName);
    expect(screen.getByText(testName)).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', `/${ROUTES.PRODUCT}/${testId}`);
    });
  });
});
