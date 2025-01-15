import styles from './container.module.scss';

const Container = ({ variant = 'default', children, className }) => {
    const combinedClasses = [
        `${styles.root} ${className || ''}`,
        variant === 'default' && styles.default,
        variant === 'small' && styles.small,
        variant === 'large' && styles.large,
    ]
        .filter(Boolean)
        .join(' ');
    return <div className={combinedClasses}>{children}</div>;
};
export default Container;
