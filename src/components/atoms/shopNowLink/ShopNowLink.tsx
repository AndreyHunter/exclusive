import React from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

import Arrow from '@assets/icons/right-arrow.svg?react';

import Line from './line.svg';
import styles from './showNowLink.module.scss';

interface ShopNowLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  arrow?: boolean;
  line?: boolean;
  direction?: 'row' | 'column';
  link: string;
}

export const ShopNowLink: React.FC<ShopNowLinkProps> = ({
  arrow = false,
  line = false,
  direction = 'column',
  link,
  className,
  ...props
}) => {
  const classes = clsx(styles.root, className, {
    [styles.row]: direction === 'row',
    [styles.column]: direction === 'column',
  });

  return (
    <div {...props} className={classes}>
      <Link to={link}>Shop Now</Link>
      {arrow && <Arrow />}
      {line && <img src={Line} alt="line" />}
    </div>
  );
};
