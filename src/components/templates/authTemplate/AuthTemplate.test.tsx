import { render, screen } from '@testing-library/react';

import AuthTemplate from './AuthTemplate';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div data-testid="outlet">Outlet</div>,
}));

describe('AuthTemplate', () => {
  it('renders correctly', () => {
    render(<AuthTemplate />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });
});
