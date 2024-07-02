import styles from './button.module.scss';

const Button = ({ title, className, variant = 'default', ...props }) => {
    const isTransparent = variant === 'transparent';

    const transparentClass = styles.transparent;
    const defaultClass = styles.default;

    const combinedClasses = `${styles.root} ${isTransparent ? transparentClass : defaultClass} ${className || ''}`;

    return (
        <button type="button" className={combinedClasses} {...props}>
            {title ? title : 'Button'}
        </button>
    );
};

export default Button;