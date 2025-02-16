import { render, screen } from '@testing-library/react';

import { SocialMediaList } from './SocialMediaList';

describe('SocialMediaList', () => {
  it('renders correctly', () => {
    render(<SocialMediaList />);
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });
});
