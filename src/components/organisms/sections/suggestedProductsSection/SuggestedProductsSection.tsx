import { clsx } from 'clsx';

import { SectionLabel } from '@components/atoms/sectionLabel/SectionLabel';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { ProductSlider } from '@components/organisms/productSlider/ProductSlider';
import type { Product } from 'types/index';

import styles from './suggestedProductsSection.module.scss';

interface SuggestedProductsSectionProps {
  products: Product[];
  sectionTitle: string;
  className?: string;
}

export const SuggestedProductsSection = ({
  products,
  sectionTitle,
  className,
}: SuggestedProductsSectionProps) => {
  const classes = clsx(styles.root, className);

  return (
    <section className={classes}>
      <Container>
        <Flex justifyContent="space-between" className={styles.block}>
          <SectionLabel>{sectionTitle}</SectionLabel>
        </Flex>
        <ProductSlider
          products={products}
          buttonsPosition="default"
          sliderId="suggested-products"
        />
      </Container>
    </section>
  );
};
