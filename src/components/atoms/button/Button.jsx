import { Link } from 'react-router-dom';

import GoogleIcon from '@assets/icons/google.svg?react';

import styles from './button.module.scss';

const Button = ({ type = 'button', to, variant = 'default', icon, title, className, ...props }) => {
    const combinedClasses = [
        styles.root,
        variant === 'transparent' && styles.transparent,
        variant === 'default' && styles.default,
        className || '',
    ]
        .filter(Boolean)
        .join(' ')
        .trim();

    if (type === 'link') {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                {icon && icon === 'google' && <GoogleIcon />}
                {title ? title : 'Link'}
            </Link>
        );
    }

    return (
        <button type="button" className={combinedClasses} {...props}>
            {icon && icon === 'google' && <GoogleIcon />}
            {title ? title : 'Button'}
        </button>
    );
};

export default Button;
