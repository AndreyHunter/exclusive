import styles from './discountLabel.module.scss';

const DiscountLabel = ({ discount, className, props }) => {
    return (
        <div>
            {discount && (
                <div className={`${styles.wrapper} ${className}`} {...props}>
                    -{discount}%
                </div>
            )}
        </div>
    );
};

export default DiscountLabel;
