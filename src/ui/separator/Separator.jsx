import styles from './separator.module.scss';

const Separator = ({ className, ...props }) => {
    const combinedClassName = `${styles.separator} ${className || ''}`;

    return <div className={combinedClassName} {...props} />;
};

export default Separator;