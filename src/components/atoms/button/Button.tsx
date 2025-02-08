import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import { Loader } from '@components/atoms/loader/Loader';
import GoogleIcon from '@assets/icons/google.svg?react';

import styles from './button.module.scss';

interface ButtonProps {
  tagElement: 'link' | 'button';
  type: 'button' | 'submit';
  disabled: boolean;
  to: string;
  variant: 'default' | 'transparent';
  icon: 'google';
  title: string;
  loading: boolean;
  className: string;
  activeClass: boolean;
  children: React.ReactNode;
}

type PartialButtonProps = Partial<ButtonProps>;

export const Button: React.FC<PartialButtonProps> = ({
  tagElement = 'button',
  variant = 'default',
  type = 'button',
  activeClass = true,
  to,
  title,
  icon,
  className,
  disabled,
  loading,
  children,
  ...props
}) => {
  const classes = clsx(styles.root, className, {
    [styles.default]: variant === 'default',
    [styles.transparent]: variant === 'transparent',
    [styles.active]: activeClass && !disabled,
  });

  if (tagElement === 'link' && to) {
    return (
      <Link {...props} to={to} className={classes}>
        {icon && icon === 'google' && <GoogleIcon />}
        {title ? title : 'Link'}
      </Link>
    );
  }

  return (
    <button {...props} type={type} disabled={disabled} className={classes}>
      {icon && icon === 'google' && <GoogleIcon />}
      {loading && <Loader data-testid="button-loader" small />}
      {title && !loading && title}
      {children && !loading && children}
    </button>
  );
};
