import React from 'react';
import { clsx } from 'clsx';

import styles from './formLabel.module.scss';

interface FormLabelProps {
  label: string;
  className?: string;
}

export const FormLabel: React.FC<FormLabelProps> = ({ label, className }) => {
  const classes = clsx(styles.root, className);
  return <div className={classes}>{label}</div>;
};
