import React from 'react';
import { render, screen } from '@testing-library/react';

import { OurStatisticItem } from './OurStatisticItem';
import styles from './ourStatisticItem.module.scss';

interface CircleContainerIconMockProps {
  children: React.ReactNode;
  className: string;
}

jest.mock('@components/atoms/circleContainerIcon/CircleContainerIcon', () => ({
  CircleContainerIcon: ({ children, className }: CircleContainerIconMockProps) => (
    <div className={className} data-testid="circle-container-id">
      {children}
    </div>
  ),
}));

describe('OurStatisticItem Component', () => {
  const testAmount = 1234;
  const testDesc = 'Test Description';
  const testIconId = 'mock-icon';
  const MockIcon = () => <svg data-testid={testIconId} />;

  const renderComponent = (changeOnHover: 'fill' | 'stroke' = 'fill') => {
    render(
      <OurStatisticItem
        amount={testAmount}
        desc={testDesc}
        icon={MockIcon}
        changeOnHover={changeOnHover}
      />,
    );
  };

  it('renders with props and checks content', () => {
    renderComponent();
    expect(screen.getByText(`${testAmount}k`)).toBeInTheDocument();
    expect(screen.getByText(testDesc)).toBeInTheDocument();
    expect(screen.getByTestId(testIconId)).toBeInTheDocument();
  });

  it('applies styles.fill class when changeOnHover is "fill"', () => {
    renderComponent('fill');
    const circleContainer = screen.getByTestId('circle-container-id');
    expect(circleContainer).toHaveClass(styles.fill);
    expect(circleContainer).not.toHaveClass(styles.stroke);
  });

  it('applies styles.stroke class when changeOnHover is "stroke"', () => {
    renderComponent('stroke');
    const circleContainer = screen.getByTestId('circle-container-id');
    expect(circleContainer).toHaveClass(styles.stroke);
    expect(circleContainer).not.toHaveClass(styles.fill);
  });
});
