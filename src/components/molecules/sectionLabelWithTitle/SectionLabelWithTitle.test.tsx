import { render, screen } from '@testing-library/react';

import { SectionLabelWithTitle } from './SectionLabelWithTitle';

describe('SectionLabelWithTitle', () => {
  it('renders label and title', () => {
    render(<SectionLabelWithTitle label="test-label" title="test-title" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });
});
