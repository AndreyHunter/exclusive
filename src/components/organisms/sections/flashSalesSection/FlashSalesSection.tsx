import { clsx } from 'clsx';

import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { Countdown } from '@components/molecules/countdown/Countdown';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { ProductSlider } from '@components/organisms/productSlider/ProductSlider';
import { ROUTES } from '@routes/routes';
import { useProducts } from '@hooks/useProducts';

import styles from './flashSalesSection.module.scss';

interface FlashSalesSectionProps {
  className?: string;
}

export const FlashSalesSection = ({ className }: FlashSalesSectionProps) => {
  const { products, loading, error } = useProducts({
    productType: 'flash-sales',
    page: 1,
    limit: 8,
  });
  const classes = clsx(styles.root, className);
  return (
    <section className={classes}>
      <Container>
        <Flex className={styles.flex} alignItems="flex-end" flexWrap="wrap">
          <SectionLabelWithTitle label="Today’s" title="Flash Sales" />
          <Countdown variant="transparent" endDate={new Date('2025-05-30T08:52:00')} />
        </Flex>

        <ProductSlider
          products={products}
          loading={loading}
          error={error}
          sliderId="flash-sales"
          buttonsPosition="top"
        />
        <Flex justifyContent="center" className={styles.button}>
          <Button tagElement="link" to={`/${ROUTES.PRODUCTS}/flash-sales`}>
            View All Products
          </Button>
        </Flex>
      </Container>
    </section>
  );
};
