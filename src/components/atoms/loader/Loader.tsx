import React from 'react';

import styles from './loader.module.scss';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  small: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ small, ...props }) => {
  return <div {...props} className={`${styles.root} ${small && styles.small}`}></div>;
};
