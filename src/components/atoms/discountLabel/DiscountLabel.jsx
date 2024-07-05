import styles from './discountLabel.module.scss';

const DiscountLabel = ({ discount, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return <div>{discount && <div className={combinedClasses}>-{discount}%</div>}</div>;
};

export default DiscountLabel;
