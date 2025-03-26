import { useProducts } from '@/hooks/useProducts';

import { SuggestedProductsSection } from './SuggestedProductsSection';

interface SuggestedProductsSectionContainerProps {
  sectionTitle: string;
  productType?: 'products' | 'flash-sales' | 'best-sellers';
  page?: number;
  limit?: number;
  className?: string;
}

export const SuggestedProductsSectionContainer = ({
  sectionTitle,
  productType = 'products',
  page = 1,
  limit = 8,
  className,
}: SuggestedProductsSectionContainerProps) => {
  const { products } = useProducts({ productType, page, limit });

  return (
    <SuggestedProductsSection
      products={products}
      sectionTitle={sectionTitle}
      className={className}
    />
  );
};
