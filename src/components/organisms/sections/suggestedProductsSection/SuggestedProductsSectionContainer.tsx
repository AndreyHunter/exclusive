import { SuggestedProductsSection } from './SuggestedProductsSection';

interface SuggestedProductsSectionContainerProps {
  sectionTitle: string;
  className?: string;
}

export const SuggestedProductsSectionContainer = ({
  sectionTitle,
  className,
}: SuggestedProductsSectionContainerProps) => {
  return (
    <SuggestedProductsSection products={[]} sectionTitle={sectionTitle} className={className} />
  );
};
