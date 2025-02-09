import React from 'react';
import { clsx } from 'clsx';

import styles from './container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'small' | 'large';
  children: React.ReactNode;
}

export const Container = ({
  variant = 'default',
  children,
  className,
  ...props
}: ContainerProps) => {
  const classes = clsx(styles.root, className, {
    [styles.default]: variant === 'default',
    [styles.small]: variant === 'small',
    [styles.large]: variant === 'large',
  });
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
