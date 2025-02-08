import React from 'react';

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
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  tagElement = 'div',
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap,
  className,
  children,
  ...props
}) => {
  const Component = tagElement;

  // Flex direction classes
  const directionClasses = [
    flexDirection === 'row' && styles.row,
    flexDirection === 'row-reverse' && styles.rowReverse,
    flexDirection === 'column' && styles.column,
    flexDirection === 'column-reverse' && styles.columnReverse,
  ]
    .filter(Boolean)
    .join(' ');

  // Flex wrap classes
  const wrapClasses = [
    flexWrap === 'nowrap' && styles.noWrap,
    flexWrap === 'wrap' && styles.wrap,
    flexWrap === 'wrap-reverse' && styles.wrapReverse,
  ]
    .filter(Boolean)
    .join(' ');

  // justify classes
  const justifyClasses = [
    justifyContent === 'flex-start' && styles.justifyStart,
    justifyContent === 'center' && styles.justifyCenter,
    justifyContent === 'flex-end' && styles.justifyEnd,
    justifyContent === 'space-between' && styles.justifySpaceBetween,
  ]
    .filter(Boolean)
    .join(' ');

  // align classes
  const alignClasses = [
    alignItems === 'flex-start' && styles.alignStart,
    alignItems === 'center' && styles.alignCenter,
    alignItems === 'flex-end' && styles.alignEnd,
  ]
    .filter(Boolean)
    .join(' ');

  // gap style
  const gapStyle = gap ? { gap: `${gap}px` } : {};

  const combinedClasses = [
    styles.root,
    className || '',
    directionClasses,
    wrapClasses,
    justifyClasses,
    alignClasses,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={combinedClasses} style={gapStyle} {...props}>
      {children}
    </Component>
  );
};
