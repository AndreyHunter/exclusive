import React from 'react';
import { clsx } from 'clsx';

import styles from './footerInfoTitle.module.scss';

interface FooterInfoTitleProps {
  title: string;
  className?: string;
}

export const FooterInfoTitle: React.FC<FooterInfoTitleProps> = ({ title, className }) => {
  const classes = clsx(styles.root, className);

  return <div className={classes}>{title}</div>;
};
