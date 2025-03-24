import { clsx } from 'clsx';

import { ProductCardContainer as ProductCard } from '@components/molecules/productCard/ProductCardContainer';
import type { Product } from 'types/index';
import { Loader } from '@/components/atoms/loader/Loader';

import styles from './productList.module.scss';

export interface ProductsListProps {
  products: Product[] | undefined;
  className?: string;
  ref?: React.RefObject<HTMLLIElement | null>;
  loading: boolean;
  error: string | null | undefined;
}

export const ProductsList = ({ products, ref, loading, error, className }: ProductsListProps) => {
  const classes = clsx(styles.root, className);
  return (
    <ul className={classes}>
      {loading ? (
        <Loader />
      ) : error ? (
        error
      ) : products ? (
        products.map((product, index) => (
          <ProductCard
            key={product._id}
            product={product}
            ref={index === products.length - 1 ? ref : null}
          />
        ))
      ) : null}
    </ul>
  );
};
