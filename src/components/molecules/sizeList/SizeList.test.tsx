import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { SizeList } from './SizeList';
import styles from './sizeList.module.scss';

describe('SizeList', () => {
  const noop = (type: 'size' | 'color', value: string) => {};
  const mockSizes = ['xs', 'l', 'xl'];

  const Wrapper = () => {
    const [selectedSize, setSelectedSize] = useState('');

    const handleChange = (type: 'size' | 'color', value: string) => {
      if (type === 'size') {
        setSelectedSize(value);
      }
    };

    return <SizeList sizes={mockSizes} selectedSize={selectedSize} onChange={handleChange} />;
  };

  it('renders correctly', () => {
    render(<SizeList sizes={mockSizes} selectedSize="l" onChange={noop} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('sets size', async () => {
    render(<Wrapper />);
    const sizes = screen.getAllByRole('radio');
    await userEvent.click(sizes[0]);
    expect(sizes[0]).toBeChecked();
    expect(sizes[0].parentElement).toHaveClass(styles.checked);
  });

  it('sorts sizes in the correct order', () => {
    const unsortedSizes = ['xl', 'xs', 'l'];
    render(<SizeList sizes={unsortedSizes} selectedSize="" onChange={noop} />);

    const sizeLabels = screen.getAllByText(/XS|L|XL/);
    expect(sizeLabels[0].textContent).toBe('XS');
    expect(sizeLabels[1].textContent).toBe('L');
    expect(sizeLabels[2].textContent).toBe('XL');
  });

  it('displays sizes in uppercase', () => {
    render(<SizeList sizes={mockSizes} selectedSize="" onChange={noop} />);

    expect(screen.getByText('XS')).toBeInTheDocument();
    expect(screen.getByText('L')).toBeInTheDocument();
    expect(screen.getByText('XL')).toBeInTheDocument();
  });
});
