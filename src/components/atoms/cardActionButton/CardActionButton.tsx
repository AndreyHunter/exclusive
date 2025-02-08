import React from 'react';
import { clsx } from 'clsx';

import styles from './cardActionButton.module.scss';

interface CardActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const CardActionButton: React.FC<CardActionButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const classes = clsx(styles.root, className);

  return (
    <button {...props} type="button" className={classes}>
      {children}
    </button>
  );
};
