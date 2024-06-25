import styles from './discountLabel.module.scss';

const DiscountLabel = ({ discount, className, props }) => {
    return (
        <div className={`${styles.wrapper} ${className}`} {...props}>
            -{discount}%
        </div>
    );
};

export default DiscountLabel;