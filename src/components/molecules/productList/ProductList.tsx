import { ProductCardContainer as ProductCard } from '@components/molecules/productCard/ProductCardContainer';

import styles from './productList.module.scss';

export const ProductsList = ({ products, className }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return (
    <ul className={combinedClasses}>
      {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
    </ul>
  );
};
