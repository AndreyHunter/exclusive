import { Link } from 'react-router-dom';
import React from 'react';
import { clsx } from 'clsx';

import { ROUTES } from '@routes/routes';

import styles from './logo.module.scss';

export interface LogoProps {
  color: 'white' | 'black';
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ color = 'black', className, onClick }: LogoProps) => {
  const classes = clsx(styles.root, className, {
    [styles.white]: color === 'white',
    [styles.black]: color === 'black',
  });

  return (
    <Link to={ROUTES.INDEX} className={classes} onClick={onClick}>
      Exclusive
    </Link>
  );
};
