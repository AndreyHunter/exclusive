import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { SizeList } from './SizeList';
import styles from './sizeList.module.scss';

describe('SizeList', () => {
  const noop = () => {};
  const mockSizes = ['xs', 'l', 'xl'];

  const Wrapper = () => {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSelectedSize = (size: string) => {
      setSelectedSize(size);
    };

    return <SizeList sizes={mockSizes} selectedSize={selectedSize} onChange={handleSelectedSize} />;
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
});
