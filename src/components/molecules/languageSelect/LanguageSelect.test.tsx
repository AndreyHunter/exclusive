import { render, screen } from '@testing-library/react';

import { LanguageSelect } from './LanguageSelect';

jest.mock('react-select', () => {
  let mockedProps: any = {};
  const MockSelect = (props: any) => {
    mockedProps = props;
    return <div data-testid="react-select-mock" />;
  };
  MockSelect.mockGetProps = () => mockedProps;
  return MockSelect;
});

describe('LanguageSelect component', () => {
  it('renders react-select component with correct props', () => {
    render(<LanguageSelect />);

    expect(screen.getByTestId('react-select-mock')).toBeInTheDocument();

    const mockedSelectProps = jest.requireMock('react-select').mockGetProps();

    expect(mockedSelectProps.options).toEqual([
      { value: 'en', label: 'English' },
      { value: 'ua', label: 'Ukraine' },
    ]);
    expect(mockedSelectProps.styles).toBeDefined();
    expect(mockedSelectProps.defaultValue).toEqual({ value: 'en', label: 'English' });
    expect(mockedSelectProps.isSearchable).toBe(false);
  });
});
