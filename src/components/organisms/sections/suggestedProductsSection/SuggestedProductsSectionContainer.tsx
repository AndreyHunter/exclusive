import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { fetchFlashSales, selectFlashSales } from '@features/products/productsSlice';

import { SuggestedProductsSection } from './SuggestedProductsSection';

interface SuggestedProductsSectionContainerProps {
  sectionTitle: string;
  className?: string;
}

export const SuggestedProductsSectionContainer = ({
  sectionTitle,
  className,
}: SuggestedProductsSectionContainerProps) => {
  const dispatch = useAppDispatch();
  const flashSales = useAppSelector(selectFlashSales);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(fetchFlashSales({ limit }));
  }, [dispatch, limit]);

  return (
    <SuggestedProductsSection
      products={flashSales}
      sectionTitle={sectionTitle}
      className={className}
    />
  );
};
