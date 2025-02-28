import { render, screen } from '@testing-library/react';

import { EditProfileForm } from './EditProfileForm';

describe('EditProfileForm', () => {
  beforeEach(() => {
    render(<EditProfileForm />);
  });

  it('renders personal information inputs and labels', () => {
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Address/i)).toBeInTheDocument();

    expect(screen.getByText(/Md/i)).toBeInTheDocument();
    expect(screen.getByText(/Dow/i)).toBeInTheDocument();
    expect(screen.getByText(/jhon683@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Kingston, 5236, United State/i)).toBeInTheDocument();
  });

  it('renders password change inputs and buttons', () => {
    expect(screen.getByText(/Password Changes/i)).toBeInTheDocument();

    expect(screen.getByText(/Current Password/i)).toBeInTheDocument();
    expect(screen.getByText('New Password')).toBeInTheDocument();
    expect(screen.getByText('Confirm New Password')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Save Changes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Chancel/i })).toBeInTheDocument();
  });
});
