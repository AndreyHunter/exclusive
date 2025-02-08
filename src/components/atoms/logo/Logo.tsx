import { Link } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

import styles from './logo.module.scss';

export const Logo = ({ color = 'black', className, ...props }) => {
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
