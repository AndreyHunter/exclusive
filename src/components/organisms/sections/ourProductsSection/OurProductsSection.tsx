import { clsx } from 'clsx';

import { useProducts } from '@hooks/useProducts';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { ProductCardContainer as ProductCard } from '@components/molecules/productCard/ProductCardContainer';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { ROUTES } from '@routes/routes';
import { Loader } from '@components/atoms/loader/Loader';

import styles from './ourProductsSection.module.scss';

interface OurProductsSectionProps {
  className?: string;
}

export const OurProductsSection = ({ className }: OurProductsSectionProps) => {
  const { products, loading, error } = useProducts({ productType: 'products', page: 1, limit: 8 });
  const classes = clsx(styles.root, className);

  return (
    <section className={classes}>
      <Container>
        <div className={styles.block}>
          <SectionLabelWithTitle label="Our Products" title="Explore Our Products" />
        </div>
        <ul className={styles.list}>
          {loading ? (
            <Loader />
          ) : error ? (
            error
          ) : (
            products.map((product) => <ProductCard key={product._id} product={product} />)
          )}
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
