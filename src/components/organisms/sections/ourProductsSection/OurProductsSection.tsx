import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchProducts, selectProducts } from '@features/products/productsSlice';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { ProductCardContainer as ProductCard } from '@components/molecules/productCard/ProductCardContainer';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';

import styles from './ourProductsSection.module.scss';

export const OurProductsSection = ({ className }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [limit, setLimit] = useState(8);
  const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

  useEffect(() => {
    dispatch(fetchProducts({ limit }));
  }, [dispatch, limit]);

  return (
    <section className={combinedClasses}>
      <Container>
        <div className={styles.block}>
          <SectionLabelWithTitle label="Our Products" title="Explore Our Products" />
        </div>
        <ul className={styles.list}>
          {products &&
            products.map((product) => <ProductCard key={product._id} product={product} />)}
        </ul>
        <div className={styles.button}>
          <Button title="View All Products" />
        </div>
      </Container>
    </section>
  );
};
