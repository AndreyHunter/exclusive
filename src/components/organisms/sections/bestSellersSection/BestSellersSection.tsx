import { clsx } from 'clsx';

import { useMediaQuery } from '@hooks/useMediaQuery';
import { useProducts } from '@hooks/useProducts';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { ProductSlider } from '@components/organisms/productSlider/ProductSlider';
import { ROUTES } from '@routes/routes';

import styles from './bestSellersSection.module.scss';

interface BestSellersSectionProps {
  className?: string;
}

export const BestSellersSection = ({ className }: BestSellersSectionProps) => {
  const { products, loading, error } = useProducts({
    productType: 'best-sellers',
    page: 1,
    limit: 8,
  });
  const classes = clsx(styles.root, className);
  const isMobile = useMediaQuery('(max-width: 668px)');

  return (
    <section className={classes}>
      <Container>
        <div className={styles.block}>
          <SectionLabelWithTitle label="This Month" title="Best Selling Products" />
          {!isMobile && (
            <Button tagElement="link" to={`${ROUTES.PRODUCTS}/best-sellers`}>
              View All
            </Button>
          )}
        </div>
        <ProductSlider
          products={products}
          loading={loading}
          error={error}
          sliderId="best-sellers"
        />
        {isMobile && (
          <Flex justifyContent="center" className={styles.button}>
            <Button tagElement="link" to={`${ROUTES.PRODUCTS}/best-sellers`}>
              View All
            </Button>
          </Flex>
        )}
      </Container>
    </section>
  );
};
