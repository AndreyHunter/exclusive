import styles from './discountLabel.module.scss';

const DiscountLabel = ({ discount, className, props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div>
            {discount && (
                <div className={combinedClasses} {...props}>
                    -{discount}%
                </div>
            )}
        </div>
    );
};

export default DiscountLabel;