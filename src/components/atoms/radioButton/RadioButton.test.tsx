import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioButton } from './RadioButton';

const noop = () => {};

describe('RadioButton component', () => {
  it('checks if the radio button is selected', () => {
    render(<RadioButton checked={true} onChange={noop} />);
    const element = screen.getByRole('radio');
    expect(element).toBeChecked();
  });

  it('checks if the radio button isn"t selected', () => {
    render(<RadioButton checked={false} onChange={noop} />);
    const element = screen.getByRole('radio');
    expect(element).not.toBeChecked();
  });

  it('calls onChange when clicked', async () => {
    const onChange = jest.fn();
    render(<RadioButton checked={false} onChange={onChange} />);
    const element = screen.getByRole('radio');
    await userEvent.click(element);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
