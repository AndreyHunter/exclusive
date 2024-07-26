import { Link } from 'react-router-dom';

import GoogleIcon from '@assets/icons/google.svg?react';

import styles from './button.module.scss';

const Button = ({
    type = 'button',
    tagElement = 'button',
    to,
    variant = 'default',
    icon,
    title,
    className,
    activeClass = true,
    children,
    disabled,
    ...props
}) => {
    const combinedClasses = [
        styles.root,
        variant === 'transparent' && styles.transparent,
        variant === 'default' && styles.default,
        activeClass && !disabled && styles.active,
        className || '',
    ]
        .filter(Boolean)
        .join(' ')
        .trim();

    if (tagElement === 'link') {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                {icon && icon === 'google' && <GoogleIcon />}
                {title ? title : 'Link'}
            </Link>
        );
    }

    return (
        <button type={type} disabled={disabled} className={combinedClasses} {...props}>
            {icon && icon === 'google' && <GoogleIcon />}
            {title && title}
            {children}
        </button>
    );
};

export default Button;
