import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

import { SignupForm } from './SignupForm';

const handleSignupMock = jest.fn();

jest.mock('@hooks/useAuth.ts', () => ({
  useAuth: () => ({
    handleSignup: handleSignupMock,
    error: null,
  }),
}));

const useNavigateMock = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => useNavigateMock,
}));

type FillFormProps = {
  name: string;
  contact: string;
  password: string;
};

const fillForm = async ({ name, contact, password }: FillFormProps) => {
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const contactInput = screen.getByPlaceholderText(/Email or Phone Number/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);

  await userEvent.clear(nameInput);
  await userEvent.clear(contactInput);
  await userEvent.clear(passwordInput);

  await userEvent.type(nameInput, name);
  await userEvent.type(contactInput, contact);
  await userEvent.type(passwordInput, password);
};

const submitForm = async () => {
  await userEvent.click(screen.getByRole('button', { name: /Create Account/i }));
};

describe('SignupForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>,
    );
  });

  const name = 'Alex';
  const contact = 'alex22@gmail.com';
  const password = 'passwordAl123';

  describe('Essential', () => {
    it('renders essential elements', () => {
      expect(screen.getByText(/Create an account/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Email or Phone Number/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Create Account/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Sign up with Google/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Log in/i })).toBeInTheDocument();
    });

    it('checks if button is disabled initially and enabled after fields are filled', async () => {
      const button = screen.getByRole('button', { name: /Create Account/i });
      expect(button).toBeDisabled();

      await fillForm({ name, contact, password });
      expect(button).not.toBeDisabled();
    });

    it('executes and navigates when form is submitted', async () => {
      handleSignupMock.mockReturnValue(true);
      await fillForm({ name, contact, password });
      await submitForm();
      await waitFor(() => {
        expect(handleSignupMock).toHaveBeenCalledWith({
          name,
          contact,
          password,
        });
        expect(useNavigateMock).toHaveBeenCalledWith('/');
      });
    });

    it('resets form after successful signup', async () => {
      handleSignupMock.mockReturnValue(true);
      await fillForm({ name, contact, password });
      await submitForm();
      await waitFor(() => {
        expect(screen.getByPlaceholderText(/Name/i)).toHaveValue('');
        expect(screen.getByPlaceholderText(/Email or Phone Number/i)).toHaveValue('');
        expect(screen.getByPlaceholderText(/Password/i)).toHaveValue('');
      });
    });

    it('checks link path', () => {
      const link = screen.getByRole('link', { name: /Log in/i });
      expect(link).toHaveAttribute('href', `/${ROUTES.AUTH}/${ROUTES.SIGNIN}`);
    });

    it('does not navigate when signup fails', async () => {
      handleSignupMock.mockReturnValue(false);
      await fillForm({ name, contact, password });
      await submitForm();
      await waitFor(() => {
        expect(handleSignupMock).toHaveBeenCalledWith({ name, contact, password });
        expect(useNavigateMock).not.toHaveBeenCalled();
      });
    });
  });

  describe('Validation', () => {
    it('renders errors for name input', async () => {
      await fillForm({ name: 'a', contact, password });
      await submitForm();
      expect(screen.getByText(/Name should be at least 2 characters/i)).toBeInTheDocument();

      await fillForm({ name: '33', contact, password });
      expect(screen.getByText(/Name should not start with a number/i)).toBeInTheDocument();

      await userEvent.clear(screen.getByPlaceholderText(/Name/i));
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    });

    it('renders errors for contact input', async () => {
      await fillForm({ contact: 'invalid', name, password });
      await submitForm();
      expect(screen.getByText(/Incorrect email or phone/i)).toBeInTheDocument();

      await userEvent.clear(screen.getByPlaceholderText(/Email or Phone Number/i));
      expect(screen.getByText(/Enter email or phone/i)).toBeInTheDocument();
    });

    it('renders errors for password input', async () => {
      await fillForm({ password: 'te', name, contact });
      await submitForm();
      expect(screen.getByText(/Password should be at least 3 characters/i)).toBeInTheDocument();

      await fillForm({ password: 'test', name, contact });
      expect(screen.getByText(/Password should include at least 1 number/i)).toBeInTheDocument();

      await fillForm({ password: 'test1', name, contact });
      expect(
        screen.getByText(/Password should include at least 1 capital letter/i),
      ).toBeInTheDocument();

      await userEvent.clear(screen.getByPlaceholderText(/Password/i));
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });
  });
});
