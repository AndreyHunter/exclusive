import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Logo } from './Logo';
import styles from './logo.module.scss';

describe('Logo component', () => {
  it('checks if color adds a white class', () => {
    render(
      <MemoryRouter>
        <Logo color="white" />
      </MemoryRouter>,
    );
    const element = screen.getByText(/Exclusive/i);
    expect(element).toHaveClass(styles.white);
  });

  it('checks if color prop adds a black class', () => {
    render(
      <MemoryRouter>
        <Logo color="black" />
      </MemoryRouter>,
    );
    const element = screen.getByText(/Exclusive/i);
    expect(element).toHaveClass(styles.black);
  });
});
