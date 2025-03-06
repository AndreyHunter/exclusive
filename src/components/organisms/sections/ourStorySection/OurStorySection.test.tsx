import { render, screen } from '@testing-library/react';

import { OurStorySection } from './OurStorySection';

describe('OurStorySection', () => {
  it('renders correctly with expected content', () => {
    render(<OurStorySection />);

    expect(screen.getByText('Our Story')).toBeInTheDocument();

    expect(
      screen.getByText(
        /Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace/,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Exclusive has more than 1 Million products to offer/),
    ).toBeInTheDocument();

    const image = screen.getByAltText('about-image');
    expect(image).toBeInTheDocument();
  });
});
