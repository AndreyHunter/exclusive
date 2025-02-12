import React from 'react';
import { clsx } from 'clsx';

import styles from './flex.module.scss';

interface FlexProps {
  tagElement?: React.ElementType;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch'
    | 'inherit'
    | 'initial'
    | 'unset';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Flex = ({
  tagElement = 'div',
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  gap,
  className,
  children,
  style = {},
  ...props
}: FlexProps) => {
  const Component = tagElement;

  // Flex direction classes
  const directionClasses = clsx(
    flexDirection === 'row' && styles.row,
    flexDirection === 'row-reverse' && styles.rowReverse,
    flexDirection === 'column' && styles.column,
    flexDirection === 'column-reverse' && styles.columnReverse,
  );

  // Flex wrap classes
  const wrapClasses = clsx(
    flexWrap === 'nowrap' && styles.noWrap,
    flexWrap === 'wrap' && styles.wrap,
    flexWrap === 'wrap-reverse' && styles.wrapReverse,
  );

  // justify classes
  const justifyClasses = clsx(
    justifyContent === 'flex-start' && styles.justifyStart,
    justifyContent === 'center' && styles.justifyCenter,
    justifyContent === 'flex-end' && styles.justifyEnd,
    justifyContent === 'space-between' && styles.justifySpaceBetween,
  );

  // align classes
  const alignClasses = clsx(
    alignItems === 'flex-start' && styles.alignStart,
    alignItems === 'center' && styles.alignCenter,
    alignItems === 'flex-end' && styles.alignEnd,
  );

  // gap style
  const classes = clsx(styles.root, className, [
    directionClasses,
    wrapClasses,
    justifyClasses,
    alignClasses,
  ]);

  const combinedStyle = {
    ...style,
    ...(gap !== undefined && { gap }),
  };

  return (
    <Component {...props} className={classes} style={combinedStyle}>
      {children}
    </Component>
  );
};
