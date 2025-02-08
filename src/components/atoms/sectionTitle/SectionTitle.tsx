import React from 'react';
import { clsx } from 'clsx';

import styles from './sectionTitle.module.scss';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ className, children }) => {
  const classes = clsx(styles.root, className);
  return <h2 className={classes}>{children}</h2>;
};
