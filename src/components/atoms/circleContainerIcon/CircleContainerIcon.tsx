import React from 'react';
import { clsx } from 'clsx';

import styles from './circleContainerIcon.module.scss';

interface CircleContainerIconProps {
  children: React.ReactNode;
  className?: string;
}

export const CircleContainerIcon: React.FC<CircleContainerIconProps> = ({
  children,
  className,
}) => {
  const classes = clsx(styles.root, className);

  return (
    <div className={classes}>
      <div>{children}</div>
    </div>
  );
};
