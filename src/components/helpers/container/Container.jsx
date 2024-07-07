import styles from './container.module.scss';

const Container = ({ variant = 'default', children }) => {
    const combinedClasses = [
        styles.root,
        variant === 'default' && styles.default,
        variant === 'small' && styles.small,
        variant === 'large' && styles.large,
    ]
        .filter(Boolean)
        .join(' ');
    return <div className={combinedClasses}>{children}</div>;
};
export default Container;
