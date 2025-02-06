import React from 'react';
import { clsx } from 'clsx';

import styles from './circleCount.module.scss';

interface CircleCountProps {
  quantity: number;
  className?: string;
}

export const CircleCount: React.FC<CircleCountProps> = ({ quantity, className }) => {
  const classes = clsx(styles.root, className);
  return <div className={classes}>{quantity}</div>;
};
