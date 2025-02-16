import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SendEmailForm } from './SendEmailForm';

describe('SendEmailForm', () => {
  const handleSubmitMock = jest.fn();
  it('renders correctly', () => {
    render(<SendEmailForm onSubmit={handleSubmitMock} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('calls callback when provided', async () => {
    render(<SendEmailForm onSubmit={handleSubmitMock} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });
});
