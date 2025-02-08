import React from 'react';
import { clsx } from 'clsx';

import styles from './separator.module.scss';

// eslint-disable-next-line
interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Separator: React.FC<SeparatorProps> = ({ className, ...props }) => {
  const classes = clsx(styles.root, className);
  return <div {...props} className={classes} />;
};
