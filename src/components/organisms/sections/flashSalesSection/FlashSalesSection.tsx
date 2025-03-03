import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchFlashSales, selectFlashSales } from '@features/products/productsSlice';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { Countdown } from '@components/molecules/countdown/Countdown';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { ProductSlider } from '@components/organisms/productSlider/ProductSlider';

import styles from './flashSalesSection.module.scss';

export const FlashSalesSection = ({ className }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectFlashSales);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    dispatch(fetchFlashSales({ limit }));
  }, [dispatch, limit]);

  const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

  return (
    <section className={combinedClasses}>
      <Container>
        <Flex className={styles.flex} alignItems="flex-end" flexWrap="wrap">
          <SectionLabelWithTitle label="Today’s" title="Flash Sales" />
          <Countdown variant="transparent" endDate={new Date('2025-03-30T08:52:00')} />
        </Flex>

        <ProductSlider products={products} sliderId="flash-sales" buttonsPosition="top" />
        <Flex justifyContent="center" className={styles.button}>
          <Button title="View All Products" />
        </Flex>
      </Container>
    </section>
  );
};
