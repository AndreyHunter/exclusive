import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Button } from './Button';
import type { PartialButtonProps } from './Button';

describe('Button', () => {
  const renderComponent = (props: PartialButtonProps) => {
    render(
      <MemoryRouter>
        <Button {...props}>{props.children}</Button>
      </MemoryRouter>,
    );
  };

  it('renders like link', () => {
    renderComponent({ tagElement: 'link', to: '/about', children: 'Link' });

    const buttonLink = screen.getByRole('link');

    expect(buttonLink.tagName).toBe('A');
    expect(buttonLink).toHaveTextContent('Link');
    expect(buttonLink).toHaveAttribute('href', '/about');
  });

  it('renders like button', () => {
    renderComponent({ tagElement: 'button', children: 'Click' });

    const button = screen.getByRole('button');

    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveTextContent('Click');
  });

  it('checks if there is loader', () => {
    renderComponent({ tagElement: 'button', loading: true });
    const loader = screen.getByTestId('button-loader');
    expect(loader).toBeInTheDocument();
  });
});
