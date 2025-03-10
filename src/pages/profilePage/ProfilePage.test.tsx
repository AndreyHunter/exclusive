import { render, screen } from '@testing-library/react';

import ProfilePage from './ProfilePage';

jest.mock('@components/organisms/editProfileForm/EditProfileForm', () => ({
  EditProfileForm: () => <div data-testid="edit-profile-form"></div>,
}));

describe('ProfilePage', () => {
  it('renders main elements', () => {
    render(<ProfilePage />);
    expect(screen.getByTestId('edit-profile-form')).toBeInTheDocument();
  });
});
