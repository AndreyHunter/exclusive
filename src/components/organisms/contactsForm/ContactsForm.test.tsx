import { render, screen } from '@testing-library/react';

import { ContactsForm } from './ContactsForm';

describe('ContactsForm', () => {
  it('renders inputs and button', () => {
    render(<ContactsForm />);
    expect(screen.getByText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Phone/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Massage/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Send Massage/i })).toBeInTheDocument();
  });
});
