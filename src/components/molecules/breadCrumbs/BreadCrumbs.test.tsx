import { render, screen } from '@testing-library/react';

import { BreadCrumbs } from './BreadCrumbs';
import styles from './breadCrumbs.module.scss';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }: LinkProps) => <a href={to}>{children}</a>,
}));

const breadcrumbs = [
  { path: '/test1', name: 'first' },
  { path: '/test2', name: 'second' },
  { path: '/test3', name: 'third' },
];

describe('BreadCrumbs component', () => {
  it('renders with only home page if no props are passed', () => {
    render(<BreadCrumbs elements={breadcrumbs} />);
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
  });
  it('renders with breadcrumbs elements if prop is passed', () => {
    render(<BreadCrumbs elements={breadcrumbs} />);
    const items = screen.getAllByRole('link');
    expect(items[0]).toHaveAttribute('href', '/');
    expect(items[1]).toHaveAttribute('href', '/test1');
    expect(items[2]).toHaveAttribute('href', '/test2');
    expect(screen.getByText('third')).toBeInTheDocument();
    expect(screen.getByText('third')).toHaveClass(styles.active);
  });
  it('renders with activePage if prop is passed', () => {
    render(<BreadCrumbs elements={breadcrumbs} activePage="About" />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
