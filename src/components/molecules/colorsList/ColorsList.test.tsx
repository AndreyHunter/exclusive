import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

import { ColorsList } from './ColorsList';

const mockColors = [
  {
    name: 'green',
    color: 'green',
  },
  {
    name: 'yellow',
    color: 'yellow',
  },
];

const WrapperComponent = () => {
  const [color, setColor] = useState('');
  return <ColorsList colors={mockColors} checked={color} onChange={setColor} />;
};

describe('ColorsList component', () => {
  it('changes selected color when clicked', async () => {
    render(<WrapperComponent />);
    const element = screen.getByRole('radio', { name: /green/i });
    await userEvent.click(element);
    expect(element).toBeChecked();
  });
});
