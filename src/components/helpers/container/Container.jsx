import styles from './container.module.scss';

const Container = ({ variant = 'default', children }) => {
    const isLarge = variant === 'large';
    const isSmall = variant === 'small';

    const rootClass = styles.root;

    const defaultClass = styles.default;
    const smallClass = styles.small;
    const largeClass = styles.large;
    const combinedClasses = `${rootClass} ${isLarge ? largeClass : isSmall ? smallClass : defaultClass}`;

    return <div className={combinedClasses}>{children}</div>;
};

export default Container;