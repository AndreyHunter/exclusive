import { render, screen } from '@testing-library/react';

import { Button } from './Button';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => (
    <a {...props} href={to}>
      {children}
    </a>
  ),
}));

describe('Button component', () => {
  const buttonId = 'button-testid';

  test('checks render like link', () => {
    render(
      <Button data-testid={buttonId} tagElement="link" to="about">
        Link
      </Button>,
    );

    const buttonLink = screen.getByTestId(buttonId);

    expect(buttonLink.tagName).toBe('A');
    expect(buttonLink).toHaveTextContent('Link');
    expect(buttonLink).toHaveAttribute('href', 'about');
  });

  test('checks render like usual button', () => {
    render(
      <Button data-testid={buttonId} tagElement="button">
        Click
      </Button>,
    );

    const button = screen.getByTestId(buttonId);

    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveTextContent('Click');
  });

  test('checks if there is loader', () => {
    render(<Button tagElement="button" loading={true}></Button>);
    const loader = screen.getByTestId('button-loader');
    expect(loader).toBeInTheDocument();
  });
});
