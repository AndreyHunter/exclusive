import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

import { ColorsList } from './ColorsList';
import type { Color } from './ColorsList';

const mockColors: Color[] = [
  {
    productId: '1',
    color: 'green',
  },
  {
    productId: '2',
    color: 'yellow',
  },
];

describe('ColorsList', () => {
  it('navigates to another product', () => {
    render(
      <MemoryRouter>
        <ColorsList colors={mockColors} />
      </MemoryRouter>,
    );
    const element = screen.getAllByRole('link')[0];
    expect(element).toHaveAttribute('href', `/${ROUTES.PRODUCT}/${mockColors[0].productId}`);
  });
});
