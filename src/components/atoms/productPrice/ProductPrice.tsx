import React from 'react';
import { clsx } from 'clsx';

import styles from './productPrice.module.scss';

interface ProductPriceProps {
  price: number;
  discountedPrice?: number | null;
  className?: string;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  discountedPrice,
  className,
}) => {
  const classes = clsx(styles.root, className);

  return (
    <div className={classes}>
      <span className={styles.price}>${discountedPrice || price}</span>
      {discountedPrice && <span className={styles.discountedPrice}>${price}</span>}
    </div>
  );
};
