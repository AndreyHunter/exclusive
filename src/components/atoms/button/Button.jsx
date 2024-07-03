import { Link } from 'react-router-dom';

import styles from './button.module.scss';

const Button = ({ title, type = 'button', to, variant = 'default', className, ...props }) => {
    const isTransparent = variant === 'transparent';

    const transparentClass = styles.transparent;
    const defaultClass = styles.default;

    const combinedClasses = `${styles.root} ${isTransparent ? transparentClass : defaultClass} ${className || ''}`;

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
