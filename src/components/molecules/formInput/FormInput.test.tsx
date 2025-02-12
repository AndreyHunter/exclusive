import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormInput } from './FormInput';
import styles from './formInput.module.scss';

describe('FormInput component', () => {
  it('renders with placeholder', () => {
    render(<FormInput placeholder="Enter your name" />);
    expect(screen.getByText('Enter your name')).toBeInTheDocument();
  });

  it('displays asterisk if required', () => {
    render(<FormInput placeholder="Email" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('focuses and blurs correctly', async () => {
    const user = userEvent.setup();
    render(<FormInput placeholder="Username" />);
    const input = screen.getByRole('textbox');

    await user.click(input);
    expect(screen.getByText('Username')).toHaveClass(styles.focused);

    await user.tab();
    expect(screen.getByText('Username')).not.toHaveClass(styles.focused);

    await user.click(input);
    await user.keyboard('Test');
    expect(screen.getByRole('textbox')).toHaveValue('Test');

    await user.tab();
    expect(screen.getByText('Username')).toHaveClass(styles.focused);
  });

  it('renders without placeholder', () => {
    render(<FormInput />);
    expect(screen.queryByText('placeholder')).not.toBeInTheDocument();
  });
});
