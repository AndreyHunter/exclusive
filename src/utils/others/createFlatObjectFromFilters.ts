import type { FiltersState } from '@features/productFilters/productFiltersSlice';

export const createFlatObjectFromFilters = (filters: FiltersState) => {
  const params: { [key: string]: string | number | boolean } = {};

  if (filters.priceRange) {
    params.minPrice = filters.priceRange[0];
    params.maxPrice = filters.priceRange[1];
  }

  if (filters.sortBy) params.sortBy = filters.sortBy;

  if (filters.specificFilters) {
    Object.entries(filters.specificFilters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params[key] = value.join(',');
      } else {
        params[key] = value;
      }
    });
  }

  return params;
};
