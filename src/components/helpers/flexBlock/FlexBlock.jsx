import styles from './flexBlock.module.scss';

const FlexBlock = ({
    gap,
    column,
    center,
    justifyCenter,
    alignCenter,
    spaceBetween,
    tagElement = 'div',
    className,
    children,
    ...props
}) => {
    const Component = tagElement;

    const wrapperStyle = styles.wrapper;
    const additionalStyle = className || '';

    const columnStyle = column ? styles.column : '';
    const centerStyle = center ? styles.center : '';
    const justifyCenterStyle = justifyCenter ? styles.justifyCenter : '';
    const alignCenterStyle = alignCenter ? styles.alignCenter : '';
    const spaceBetweenStyle = spaceBetween ? styles.spaceBetween : '';

    const combinedClassName = [
        wrapperStyle,
        additionalStyle,
        columnStyle,
        centerStyle,
        justifyCenterStyle,
        alignCenterStyle,
        spaceBetweenStyle,
    ].join(' ');

    return (
        <Component className={combinedClassName} style={{ gap }} {...props}>
            {children}
        </Component>
    );
};

export default FlexBlock;