import { Link } from 'react-router-dom';
import React from 'react';
import { clsx } from 'clsx';

import { ROUTES } from '@routes/routes';

import styles from './logo.module.scss';

export interface LogoProps {
  color: 'white' | 'black';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'black', className, ...props }) => {
  const classes = clsx(styles.root, className, {
    [styles.white]: color === 'white',
    [styles.black]: color === 'black',
  });

  return (
    <Link {...props} to={ROUTES.INDEX} className={classes}>
      Exclusive
    </Link>
  );
};
