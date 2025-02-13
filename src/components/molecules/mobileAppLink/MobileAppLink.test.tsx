import { render, screen } from '@testing-library/react';

import { MobileAppLink } from './MobileAppLink';

describe('MobileAppLink component', () => {
  it('renders with Google Play variant correctly', () => {
    render(<MobileAppLink variant="google" />);
    expect(screen.getByTestId('google')).toBeInTheDocument();
    expect(screen.queryByTestId('apple')).not.toBeInTheDocument();

    expect(screen.getByText('GET IT ON')).toBeInTheDocument();
    expect(screen.getByText('Google play')).toBeInTheDocument();
  });

  it('renders with Apple App Store variant correctly', () => {
    render(<MobileAppLink variant="apple" />);
    expect(screen.getByTestId('apple')).toBeInTheDocument();
    expect(screen.queryByTestId('google')).not.toBeInTheDocument();

    expect(screen.getByText('Download in the')).toBeInTheDocument();
    expect(screen.getByText('App store')).toBeInTheDocument();
  });
});
