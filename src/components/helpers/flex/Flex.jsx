import styles from './flex.module.scss';

const Flex = ({
    tagElement = 'div',
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    className,
    children,
    ...props
}) => {
    const Component = tagElement;

    // Flex direction classes
    const directionClasses = [
        flexDirection === 'row' && styles.row,
        flexDirection === 'row-reverse' && styles.rowReverse,
        flexDirection === 'column' && styles.column,
        flexDirection === 'column-reverse' && styles.columnReverse,
    ]
        .filter(Boolean)
        .join(' ');

    // Flex wrap classes
    const wrapClasses = [
        flexWrap === 'nowrap' && styles.noWrap,
        flexWrap === 'wrap' && styles.wrap,
        flexWrap === 'wrap-reverse' && styles.wrapReverse,
    ]
        .filter(Boolean)
        .join(' ');

    // justify classes
    const justifyClasses = [
        justifyContent === 'flex-start' && styles.justifyStart,
        justifyContent === 'center' && styles.justifyCenter,
        justifyContent === 'flex-end' && styles.justifyEnd,
        justifyContent === 'space-between' && styles.justifySpaceBetween,
    ]
        .filter(Boolean)
        .join(' ');

    // align classes
    const alignClasses = [
        alignItems === 'flex-start' && styles.alignStart,
        alignItems === 'center' && styles.alignCenter,
        alignItems === 'flex-end' && styles.alignEnd,
    ]
        .filter(Boolean)
        .join(' ');

    // gap style
    const gapStyle = gap ? { gap: `${gap}px` } : {};

    const combinedClasses = [
        styles.root,
        className || '',
        directionClasses,
        wrapClasses,
        justifyClasses,
        alignClasses,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Component className={combinedClasses} style={gapStyle} {...props}>
            {children}
        </Component>
    );
};

export default Flex;
