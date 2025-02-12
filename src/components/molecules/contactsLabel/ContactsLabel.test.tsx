import { render, screen } from '@testing-library/react';

import { ContactsLabel } from './ContactsLabel';

describe('ContactsLabel component', () => {
  it('renders with icon when provided', () => {
    render(<ContactsLabel label="call us" icon="phone" />);
    expect(screen.getByTestId('svg-mock')).toBeInTheDocument();
  });
  it("doesn't render icon when isn't provided", () => {
    render(<ContactsLabel label="call us" />);
    expect(screen.queryByTestId('svg-mock')).not.toBeInTheDocument();
  });
});
