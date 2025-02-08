import React from 'react';
import { clsx } from 'clsx';

import ArrowIcon from '@assets/icons/arrow.svg?react';

import styles from './sliderButton.module.scss';

interface SliderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
  color?: string;
}

export const SliderButton: React.FC<SliderButtonProps> = ({
  direction = 'right',
  color = 'black',
  className,
  ...props
}) => {
  const classes = clsx(styles.root, className);
  const rotation = direction === 'right' ? 90 : -90;

  return (
    <button {...props} className={classes}>
      <ArrowIcon style={{ transform: `rotate(${rotation}deg)` }} stroke={color} />
    </button>
  );
};
