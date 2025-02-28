import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import { ROUTES } from '@routes/routes';

import styles from './logo.module.scss';

export interface LogoProps {
  color?: 'white' | 'black';
  onClick?: () => void;
}

export const Logo = ({ color = 'black', onClick }: LogoProps) => {
  const classes = clsx(styles.root, {
    [styles.white]: color === 'white',
    [styles.black]: color === 'black',
  });

  return (
    <Link to={ROUTES.INDEX} className={classes} onClick={onClick}>
      Exclusive
    </Link>
  );
};
