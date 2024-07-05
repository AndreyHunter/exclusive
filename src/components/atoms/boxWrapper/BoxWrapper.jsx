import styles from './boxWrapper.module.scss';

const BoxWrapper = ({ className, children, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <div className={combinedClasses} {...props}>
            {children}
        </div>
    );
};

export default BoxWrapper;