import React from 'react';

import SectionLabelIcon from '@assets/icons/section-label.svg?react';

import styles from './sectionLabel.module.scss';

interface SectionLabelProps {
  children: React.ReactNode;
}

export const SectionLabel = ({ children }: SectionLabelProps) => {
  return (
    <div className={styles.root}>
      <SectionLabelIcon />
      {children}
    </div>
  );
};
