import { render, screen } from '@testing-library/react';

import { statisticCards } from '@constants/statisticCards';

import { OurStatisticList } from './OurStatisticList';

jest.mock('@components/molecules/ourStatisticItem/OurStatisticItem', () => ({
  OurStatisticItem: () => <div data-testid="statistic-item" />,
}));

describe('OurStatisticList', () => {
  it('renders OurStatisticItem for each element in statisticCards', () => {
    render(<OurStatisticList />);
    expect(screen.getAllByTestId('statistic-item')).toHaveLength(statisticCards.length);
  });
});
