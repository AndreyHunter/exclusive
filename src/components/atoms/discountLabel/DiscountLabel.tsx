import React from 'react';
import { clsx } from 'clsx';

import styles from './discountLabel.module.scss';

interface DiscountLabelProps {
  discount: number;
  className?: string;
}

export const DiscountLabel: React.FC<DiscountLabelProps> = ({ discount, className }) => {
  const classes = clsx(styles.root, className);
  return <div>{discount && <div className={classes}>-{discount}%</div>}</div>;
};
