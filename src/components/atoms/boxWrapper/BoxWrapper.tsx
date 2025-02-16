import React from 'react';
import { clsx } from 'clsx';

import styles from './boxWrapper.module.scss';

interface BowWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const BoxWrapper = ({ className, children }: BowWrapperProps) => {
  const classes = clsx(styles.root, className);
  return <div className={classes}>{children}</div>;
};
