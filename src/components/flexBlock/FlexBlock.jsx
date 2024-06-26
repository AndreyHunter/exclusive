import styles from './flexBlock.module.scss';

const FlexBlock = ({ gap = 16, column, className, children, ...props }) => {
    return (
        <div
            className={`${styles.wrapper} ${column ? styles.column : null} ${className}`}
            style={{ gap }}
            {...props}>
            {children}
        </div>
    );
};

export default FlexBlock;
