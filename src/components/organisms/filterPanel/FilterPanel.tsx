import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Flex } from '@components/helpers/flex/Flex';
import { CostRangeForm } from '@components/molecules/CostRangeForm/CostRangeForm';
import { Checkbox } from '@components/atoms/checkbox/Checkbox';
import {
  setPriceRange,
  setSpecificFilter,
  selectAllFilters,
} from '@features/productFilters/productFiltersSlice';
import { Separator } from '@/components/atoms/separator/Separator';
import axios from '@services/axiosConfig';

import styles from './filterPanel.module.scss';

interface FilterOption {
  label: string;
  value: string;
}

export interface Filter {
  key: string;
  label: string;
  options: FilterOption[];
}

export const FilterPanel = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const categoryPath = pathname.replace('/products', '').replace(/^\//, '');
  const isSubcategory = categoryPath.split('/').length > 1;

  const filters = useAppSelector(selectAllFilters);
  const [specificFilters, setSpecificFilters] = useState<Filter[]>([]);

  useEffect(() => {
    const getFilters = async () => {
      try {
        if (categoryPath && isSubcategory) {
          const response = await axios.get('/products/filters', { params: { categoryPath } });
          const filtersData = response.data;

          const specificFiltersArray = Object.entries(filtersData).map(([key, values]) => ({
            key,
            label: key.charAt(0).toUpperCase() + key.slice(1),
            options: (values as string[]).map((value) => ({ label: value, value })),
          }));

          setSpecificFilters(specificFiltersArray);
        }
      } catch (err) {
        const error = (err as Error).message;
        console.log(error);
      }
    };

    getFilters();

    return () => {
      setSpecificFilters([]);
    };
  }, [categoryPath, isSubcategory]);

  const handlePriceRangeChange = (min: number, max: number) => {
    dispatch(setPriceRange([min, max]));
  };

  const handleSpecificFilterChange = (key: string, value: any) => {
    dispatch(setSpecificFilter({ key, value }));
  };

  return (
    <section className={styles.root}>
      <h3 className={styles.top}>Filters</h3>
      <div className={styles.filters}>
        <CostRangeForm
          minPrice={filters.priceRange[0]}
          maxPrice={filters.priceRange[1]}
          onPriceRangeChange={handlePriceRangeChange}
        />

        {specificFilters.map((filter, index) => {
          if (filter.options.length) {
            return (
              <div key={filter.key}>
                <Flex gap={10} flexDirection="column" className={styles.filter}>
                  <h4>{filter.label}</h4>
                  {filter.options.map((option) => (
                    <Checkbox
                      key={option.label}
                      checked={filters.specificFilters[filter.key]?.includes(option.value) || false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const currentValues =
                          (filters.specificFilters[filter.key] as string[]) || [];
                        const newValues = e.target.checked
                          ? [...currentValues, option.value]
                          : currentValues.filter((v) => v !== option.value);
                        handleSpecificFilterChange(filter.key, newValues);
                      }}
                      label={option.label}
                    />
                  ))}
                </Flex>
                {index < specificFilters.length - 1 && <Separator />}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};
