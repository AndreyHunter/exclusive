import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchFlashSales, selectFlashSales } from '@features/products/productsSlice';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { Countdown } from '@components/molecules/countdown/Countdown';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { ProductSlider } from '@components/organisms/productSlider/ProductSlider';
import { ROUTES } from '@/routes/routes';

import styles from './flashSalesSection.module.scss';

interface FlashSalesSectionProps {
  className?: string;
}

export const FlashSalesSection = ({ className }: FlashSalesSectionProps) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectFlashSales);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    dispatch(fetchFlashSales({ limit, page: 1 }));
  }, [dispatch, limit]);

  const classes = clsx(styles.root, className);
  return (
    <section className={classes}>
      <Container>
        <Flex className={styles.flex} alignItems="flex-end" flexWrap="wrap">
          <SectionLabelWithTitle label="Today’s" title="Flash Sales" />
          <Countdown variant="transparent" endDate={new Date('2025-03-30T08:52:00')} />
        </Flex>

        <ProductSlider products={products} sliderId="flash-sales" buttonsPosition="top" />
        <Flex justifyContent="center" className={styles.button}>
          <Button tagElement="link" to={`/${ROUTES.PRODUCTS}/flash-sales`}>
            View All Products
          </Button>
        </Flex>
      </Container>
    </section>
  );
};
