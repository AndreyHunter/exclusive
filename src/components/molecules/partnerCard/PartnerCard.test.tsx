import { render, screen } from '@testing-library/react';

import type { TypePartnerCard } from 'types/static';

import { PartnerCard } from './PartnerCard';

const DummyIcon = () => <svg data-testid="dummy-icon" />;

const partner: TypePartnerCard = {
  id: 1,
  image: 'partner-image.jpg',
  name: 'Partner Name',
  position: 'Partner Position',
  links: [
    {
      name: 'facebook',
      path: 'https://facebook.com/partner',
      icon: DummyIcon,
    },
    {
      name: 'instagram',
      path: 'https://instagram.com/partner',
      icon: DummyIcon,
    },
  ],
};

describe('PartnerCard component', () => {
  beforeEach(() => {
    render(<PartnerCard partner={partner} />);
  });

  it('renders the partner image with correct src and alt', () => {
    const image = screen.getByRole('img', { name: partner.name });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', partner.image);
    expect(image).toHaveAttribute('alt', partner.name);
  });

  it('renders the partner name and position', () => {
    expect(screen.getByText(partner.name)).toBeInTheDocument();
    expect(screen.getByText(partner.position)).toBeInTheDocument();
  });

  it('renders the correct number of links with proper href and target', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(partner.links!.length);

    partner.links!.forEach((link, index) => {
      expect(links[index]).toHaveAttribute('href', link.path);
      expect(links[index]).toHaveAttribute('target', '_black');
    });
  });

  it('renders icon components inside links', () => {
    const icons = screen.getAllByTestId('dummy-icon');
    expect(icons.length).toBeGreaterThan(0);
  });
});
