import { clsx } from 'clsx';

import { ProductCardContainer as ProductCard } from '@components/molecules/productCard/ProductCardContainer';
import type { Product } from 'types/index';

import styles from './productList.module.scss';

interface ProductsListProps {
  products: Product[] | undefined;
  className?: string;
}

export const ProductsList = ({ products, className }: ProductsListProps) => {
  const classes = clsx(styles.root, className);
  return (
    <ul className={classes}>
      {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
    </ul>
  );
};
