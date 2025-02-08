import React from 'react';
import { clsx } from 'clsx';

import styles from './boxWrapper.module.scss';

interface BowWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BoxWrapper: React.FC<BowWrapperProps> = ({ className, children, ...props }) => {
  const classes = clsx(styles.root, className);

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
