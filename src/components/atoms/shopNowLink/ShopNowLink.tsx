import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

import Arrow from '@assets/icons/right-arrow.svg?react';

import Line from './line.svg';
import styles from './showNowLink.module.scss';

interface ShopNowLinkProps {
  to: string;
  renderWith?: 'arrow' | 'line';
  direction?: 'row' | 'column';
}

export const ShopNowLink = ({
  renderWith = 'line',
  direction = 'column',
  to,
}: ShopNowLinkProps) => {
  const classes = clsx(styles.root, {
    [styles.row]: direction === 'row',
    [styles.column]: direction === 'column',
  });

  return (
    <div className={classes}>
      <Link to={to}>Shop Now</Link>
      {renderWith === 'arrow' && <Arrow />}
      {renderWith === 'line' && <img src={Line} alt="line" />}
    </div>
  );
};
