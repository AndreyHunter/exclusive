import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('CheckBox component', () => {
  it('checks if component renders and has checked === false', () => {
    render(<Checkbox onChange={() => {}} />);
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    expect(input.checked).toBe(false);
  });

  it('checks if component has checked === true', async () => {
    const onChange = jest.fn();
    render(<Checkbox checked={true} onChange={onChange} />);
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    await userEvent.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input.checked).toBe(true);
  });
});
