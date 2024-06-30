import styles from './container.module.scss';

const Container = ({ variant = 'default', children }) => {
    const isLarge = variant === 'large';
    const isSmall = variant === 'small';

    const clazz = isLarge ? styles.large : isSmall ? styles.small : styles.default;

    return <div className={`${styles.container} ${clazz}`}>{children}</div>;
};

export default Container;