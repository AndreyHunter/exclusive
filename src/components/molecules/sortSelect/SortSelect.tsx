import type { StylesConfig } from 'react-select';
import Select from 'react-select';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import type { SortBy } from '@features/productFilters/productFiltersSlice';
import { selectAllFilters, setSortBy } from '@features/productFilters/productFiltersSlice';

interface SortOption {
  value: string;
  label: string;
}

const customStyles: StylesConfig<SortOption, false> = {
  control: (base) => ({
    ...base,
    width: '200px',
    minWidth: '200px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px',
    fontSize: '14px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#888',
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: '#333',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#999',
  }),
  menu: (base) => ({
    ...base,
    width: '200px',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '4px',
  }),
  option: (base, state) => ({
    ...base,
    padding: '8px 12px',
    fontSize: '14px',
    backgroundColor: state.isSelected ? '#db4444' : 'white',
    color: state.isSelected ? 'white' : '#333',
    '&:hover': {
      backgroundColor: state.isSelected ? '#db4444' : '#f5f5f5',
    },
  }),
};

const sortOptions: SortOption[] = [
  { value: 'popularity', label: 'By popularity' },
  { value: 'rating', label: 'Top rated first' },
  { value: 'price_asc', label: 'Lowest to highest price' },
  { value: 'price_desc', label: 'Highest to lowest price' },
  { value: 'newest', label: 'Newest first' },
];

export const SortSelect = () => {
  const filters = useAppSelector(selectAllFilters);
  const dispatch = useAppDispatch();

  const handleSortBy = (selectedOption: SortOption | null) => {
    if (selectedOption) {
      dispatch(setSortBy(selectedOption.value as SortBy));
    }
  };

  return (
    <Select<SortOption>
      value={sortOptions.find((option) => option.value === filters.sortBy)}
      onChange={handleSortBy}
      options={sortOptions}
      styles={customStyles}
      classNamePrefix="react-select"
      placeholder="Sort by..."
    />
  );
};
