import { render, screen } from '@testing-library/react';

import { OrderForm } from './OrderForm';

describe('OrderForm', () => {
  const handleSetCheckedMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form with all field labels', () => {
    render(<OrderForm checked={false} handleSetChecked={handleSetCheckedMock} />);

    expect(screen.getByText(/first name/i)).toBeInTheDocument();
    expect(screen.getByText(/company name/i)).toBeInTheDocument();
    expect(screen.getByText(/street address/i)).toBeInTheDocument();
    expect(screen.getByText(/town\/city/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByText(/email address/i)).toBeInTheDocument();
  });
});
