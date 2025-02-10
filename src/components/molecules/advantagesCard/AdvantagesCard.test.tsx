import { render, screen } from '@testing-library/react';

import { AdvantagesCard } from './AdvantagesCard';

const mockIcon = () => <svg data-testid="icon" />;

describe('AdvantagesCard', () => {
  it('renders title, description, and icon', () => {
    render(<AdvantagesCard title="Test Title" desc="Test Description" icon={mockIcon} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
