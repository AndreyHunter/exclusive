import React from 'react';
import { clsx } from 'clsx';

import SectionLabelIcon from '@assets/icons/section-label.svg?react';

import styles from './sectionLabel.module.scss';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ className, children }) => {
  const classes = clsx(styles.root, className);
  return (
    <div className={classes}>
      <SectionLabelIcon />
      {children}
    </div>
  );
};
