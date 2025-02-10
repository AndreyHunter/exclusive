import { render, screen, within } from '@testing-library/react';
import React from 'react';

import { BanksList } from './BanksList';

jest.mock(
  '@assets/icons/banks/.+\\.svg\\?react$',
  () => ({
    __esModule: true,
    default: function MockSVG({
      children,
      ...props
    }: React.PropsWithChildren<{ 'data-testid'?: string }>) {
      const iconName = props['data-testid'] || 'mock-svg';
      return <div data-testid={iconName}>{children || `${iconName} Icon`}</div>;
    },
  }),
  { virtual: true },
);

jest.mock('@assets/icons/banks/nagad.png', () => 'nagad-icon-path');

describe('BanksList component', () => {
  it('renders all bank icons', () => {
    render(<BanksList />);

    const listItems = within(screen.getByRole('list')).getAllByRole('listitem');
    expect(listItems).toHaveLength(4);

    expect(listItems[0].children[0]).toBeInTheDocument();
    expect(listItems[1].children[0]).toBeInTheDocument();
    expect(listItems[2].children[0]).toBeInTheDocument();
    expect(listItems[3].querySelector('img')).toHaveAttribute('src', 'nagad-icon-path');
  });

  it('applies additional className when provided', () => {
    const customClass = 'custom-class';
    const { container } = render(<BanksList className={customClass} />);

    expect(container.firstChild).toHaveClass('root', customClass);
  });

  it('renders without additional className when not provided', () => {
    const { container } = render(<BanksList />);

    expect(container.firstChild).toHaveClass('root');
  });

  it('renders all list items with correct classes', () => {
    const { container } = render(<BanksList />);

    const listItems = container.getElementsByTagName('li');
    expect(listItems).toHaveLength(4);

    expect(listItems[0]).toHaveClass('item', 'bkash');
    expect(listItems[1]).toHaveClass('item', 'visa');
    expect(listItems[2]).toHaveClass('item', 'mastercard');
    expect(listItems[3]).toHaveClass('item', 'nagad');
  });
});
