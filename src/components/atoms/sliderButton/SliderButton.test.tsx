import { render, screen } from '@testing-library/react';

import { SliderButton } from './SliderButton';

describe('SliderButton component', () => {
  it('renders arrow icon rotated -90d degrees left when direction is "left"', () => {
    render(<SliderButton direction="left" />);
    expect(screen.getByTestId('svg-mock')).toHaveStyle('transform: rotate(-90deg)');
  });
  it('renders arrow icon rotated 90d degrees right when direction is "right"', () => {
    render(<SliderButton direction="right" />);
    expect(screen.getByTestId('svg-mock')).toHaveStyle('transform: rotate(90deg)');
  });
});
