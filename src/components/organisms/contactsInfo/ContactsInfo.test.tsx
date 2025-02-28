import { render, screen } from '@testing-library/react';

import { ContactsInfo } from './ContactsInfo';

describe('ContactsInfo', () => {
  it('renders contact sections with correct information', () => {
    render(<ContactsInfo />);

    expect(screen.getByText(/Call To Us/i)).toBeInTheDocument();
    expect(screen.getByText('We are available 24/7, 7 days a week.')).toBeInTheDocument();
    expect(screen.getByText('Phone: +8801611112222')).toBeInTheDocument();

    expect(screen.getByText(/Write To US/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Fill out our form and we will contact you within 24 hours./i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Emails: customer@exclusive.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Emails: support@exclusive.com/i)).toBeInTheDocument();
  });
});
