import styles from './flexBlock.module.scss';

const FlexBlock = ({
    gap = 16,
    column,
    center,
    tagElement = 'div',
    className,
    children,
    ...props
}) => {
    const Component = tagElement;
    const columnStyle = column ? styles.column : '';
    const centerStyle = center ? styles.center : '';

    return (
        <Component
            className={`${styles.wrapper || ''} ${className || ''} ${columnStyle} ${centerStyle}`}
            style={{ gap }}
            {...props}>
            {children}
        </Component>
    );
};

export default FlexBlock;