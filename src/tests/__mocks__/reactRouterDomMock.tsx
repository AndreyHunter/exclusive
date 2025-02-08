import type React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}

export default jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    Link: ({ to, children, ...props }: LinkProps) => (
      <a {...props} href={to}>
        {children}
      </a>
    ),
  };
});
