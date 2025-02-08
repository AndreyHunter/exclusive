import React from 'react';
import { clsx } from 'clsx';

import styles from './burgerButton.module.scss';

interface BurgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, ...props }) => {
  const classes = clsx(styles.root, isOpen && styles.open);

  return (
    <button {...props} type="button" className={classes}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
