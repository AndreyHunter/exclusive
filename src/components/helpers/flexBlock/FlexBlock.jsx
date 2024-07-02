import styles from './flexBlock.module.scss';

const FlexBlock = ({
    gap,
    column,
    center,
    justifyCenter,
    alignCenter,
    spaceBetween,
    justifyEnd,
    tagElement = 'div',
    className,
    children,
    ...props
}) => {
    const Component = tagElement;

    const rootClass = styles.root;
    const additionalClass = className || '';

    const columnClass = column ? styles.column : '';
    const centerClass = center ? styles.center : '';
    const justifyCenterClass = justifyCenter ? styles.justifyCenter : '';
    const alignCenterClass = alignCenter ? styles.alignCenter : '';
    const spaceBetweenClass = spaceBetween ? styles.spaceBetween : '';
    const justifyEndClass = justifyEnd ? styles.justifyEnd : '';

    const combinedClasses = [
        rootClass,
        additionalClass,
        columnClass,
        centerClass,
        justifyCenterClass,
        alignCenterClass,
        spaceBetweenClass,
        justifyEndClass,
    ].join(' ');

    return (
        <Component className={combinedClasses} style={{ gap }} {...props}>
            {children}
        </Component>
    );
};

export default FlexBlock;
