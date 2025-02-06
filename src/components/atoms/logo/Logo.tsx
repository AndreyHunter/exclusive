import { Link } from 'react-router-dom';
import React from 'react';

import { ROUTES } from '@routes/routes';

import styles from './logo.module.scss';

interface LogoProps {
  color: string;
  className: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'black', className, ...props }) => {
  const combinedClasses = [
    styles.root,
    color === 'white' && styles.white,
    color === 'black' && styles.black,
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link to={ROUTES.INDEX} className={combinedClasses} {...props}>
      Exclusive
    </Link>
  );
};
