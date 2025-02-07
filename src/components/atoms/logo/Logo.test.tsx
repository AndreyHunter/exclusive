import { render, screen } from '@testing-library/react';

import { Logo } from './Logo';
import styles from './logo.module.scss';
import type { LogoProps } from './Logo';

jest.mock('react-router-dom', () => ({
  Link: ({ className }: LogoProps) => (
    <a className={className} href="">
      Exclusive
    </a>
  ),
}));

describe('Logo component', () => {
  it('checks if color adds a white class', () => {
    render(<Logo color="white" />);
    const element = screen.getByText(/Exclusive/i);
    expect(element).toHaveClass(styles.white);
  });

  it('checks if color prop adds a black class', () => {
    render(<Logo color="black" />);
    const element = screen.getByText(/Exclusive/i);
    expect(element).toHaveClass(styles.black);
  });
});
