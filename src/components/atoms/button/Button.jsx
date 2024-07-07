import { Link } from 'react-router-dom';

import styles from './button.module.scss';

const Button = ({ title, type = 'button', to, variant = 'default', className, ...props }) => {
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
                {title ? title : 'Link'}
            </Link>
        );
    }

    return (
        <button type="button" className={combinedClasses} {...props}>
            {title ? title : 'Button'}
        </button>
    );
};

export default Button;
