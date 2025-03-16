import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchProducts, selectProducts } from '@features/products/productsSlice';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { ProductCardContainer as ProductCard } from '@components/molecules/productCard/ProductCardContainer';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { ROUTES } from '@routes/routes';

import styles from './ourProductsSection.module.scss';

interface OurProductsSectionProps {
  className?: string;
}

export const OurProductsSection = ({ className }: OurProductsSectionProps) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [limit, setLimit] = useState(8);
  const classes = clsx(styles.root, className);

  useEffect(() => {
    dispatch(fetchProducts({ limit, page: 1 }));
  }, [dispatch, limit]);

  return (
    <section className={classes}>
      <Container>
        <div className={styles.block}>
          <SectionLabelWithTitle label="Our Products" title="Explore Our Products" />
        </div>
        <ul className={styles.list}>
          {products.length &&
            products.map((product) => <ProductCard key={product._id} product={product} />)}
        </ul>
        <div className={styles.button}>
          <Button tagElement="link" to={ROUTES.PRODUCTS}>
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
};
