import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { SigninForm } from './SigninForm';

const handleSigninMock = jest.fn();

jest.mock('@hooks/useAuth', () => ({
  useAuth: () => ({
    handleSignin: handleSigninMock,
    error: null,
  }),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const fillForm = async (email: string, password: string) => {
  await userEvent.type(screen.getByPlaceholderText(/Email or Phone Number/i), email);
  await userEvent.type(screen.getByPlaceholderText(/Password/i), password);
};

const submitForm = async () => {
  await userEvent.click(screen.getByRole('button', { name: /Log in/i }));
};

describe('SigninForm', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SigninForm />
      </MemoryRouter>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const testEmail = 'test@example.com';
  const testPassword = 'testPassword123';

  describe('Essential', () => {
    it('renders essential elements', () => {
      expect(screen.getByText(/Log in to Exclusive/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Email or Phone Number/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument();
    });

    it('disables the login button when fields are empty', async () => {
      const button = screen.getByRole('button', { name: /Log in/i });
      expect(button).toBeDisabled();

      await fillForm(testEmail, testPassword);
      expect(button).not.toBeDisabled();
    });

    it('navigates to home on successful signin', async () => {
      handleSigninMock.mockReturnValue(true);
      await fillForm(testEmail, testPassword);
      await submitForm();

      await waitFor(() => {
        expect(handleSigninMock).toHaveBeenCalledWith({
          contact: testEmail,
          password: testPassword,
        });
        expect(mockNavigate).toHaveBeenCalledWith('/');
      });
    });

    it('resets form after successful signup', async () => {
      handleSigninMock.mockReturnValue(true);
      await fillForm(testEmail, testPassword);
      await submitForm();
      await waitFor(() => {
        expect(screen.getByPlaceholderText(/Email or Phone Number/i)).toHaveValue('');
        expect(screen.getByPlaceholderText(/Password/i)).toHaveValue('');
      });
    });
  });

  describe('Validation', () => {
    it('renders an error when contact is invalid', async () => {
      await fillForm('invalid', testPassword);
      await submitForm();
      expect(screen.getByText(/Incorrect email or phone/i)).toBeInTheDocument();
    });

    it('shows password validation errors', async () => {
      await fillForm(testEmail, 'a');
      await submitForm();
      expect(screen.getByText(/Password should be at least 3 characters/i)).toBeInTheDocument();

      await fillForm(testEmail, 'aaa');
      expect(screen.getByText(/Password should include at least 1 number/i)).toBeInTheDocument();

      await fillForm(testEmail, 'aaa1');
      expect(
        screen.getByText(/Password should include at least 1 capital letter/i),
      ).toBeInTheDocument();
    });

    it('displays errors for empty fields after submission and clearing', async () => {
      await fillForm(testEmail, testPassword);
      await submitForm();
      expect(handleSigninMock).toHaveBeenCalledTimes(1);

      await userEvent.clear(screen.getByPlaceholderText(/Password/i));
      await userEvent.clear(screen.getByPlaceholderText(/Email or Phone Number/i));

      expect(screen.getByText(/Enter email or phone/i)).toBeInTheDocument();
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });
  });
});
