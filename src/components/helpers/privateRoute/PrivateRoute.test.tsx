import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import authReducer, { setUser, logout } from '@features/auth/authSlice';

import { PrivateRoute } from './PrivateRoute';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('PrivateRoute component', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });
    mockNavigate.mockClear();
  });

  const renderWithProviders = (children: React.ReactNode) => {
    return render(
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>,
    );
  };

  it('renders children if user is authenticated', () => {
    store.dispatch(setUser({ user: { token: 'test-token', _id: 'test-id', name: 'Alex' } }));

    renderWithProviders(
      <PrivateRoute>
        <div>private page</div>
      </PrivateRoute>,
    );

    expect(screen.getByText(/private page/i)).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('navigates to auth page if user is not authenticated', () => {
    store.dispatch(logout());

    renderWithProviders(
      <PrivateRoute>
        <div>private page</div>
      </PrivateRoute>,
    );

    expect(screen.queryByText(/private page/i)).not.toBeInTheDocument();
    expect(mockNavigate).toHaveBeenCalledWith('/auth');
  });
});
