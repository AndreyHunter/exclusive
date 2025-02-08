import React from 'react';
import { clsx } from 'clsx';

import styles from './loader.module.scss';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  small: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ small, ...props }) => {
  const classes = clsx(styles.root, small && styles.small);
  return <div {...props} className={classes}></div>;
};
