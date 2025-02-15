import React from 'react';
import { clsx } from 'clsx';

import { Loader } from '@components/atoms/loader/Loader';

import styles from './addToCartButton.module.scss';

export interface AddToCartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  showAddedMessage: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  className,
  loading,
  showAddedMessage,
  onClick,
  ...props
}) => {
  const classes = clsx(styles.root, className);

  return (
    <button
      {...props}
      type="button"
      className={classes}
      onClick={onClick}
      disabled={loading}
      aria-label="add-to-cart-btn">
      {loading ? (
        <Loader small data-testid="loader" />
      ) : showAddedMessage ? (
        'In cart'
      ) : (
        'Add to cart'
      )}
    </button>
  );
};
