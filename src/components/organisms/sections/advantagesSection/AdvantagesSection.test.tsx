import { render, screen } from '@testing-library/react';

import { advantages } from '@constants/advantages';

import { AdvantagesSection } from './AdvantagesSection';

describe('AdvantagesSection', () => {
  it('renders advantages correctly', () => {
    render(<AdvantagesSection />);
    expect(screen.getAllByRole('listitem')).toHaveLength(advantages.length);
  });

  it('handles empty advantages', () => {
    render(<AdvantagesSection advantages={[]} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});
