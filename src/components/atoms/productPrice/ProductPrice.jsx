import styles from './productPrice.module.scss';

const ProductPrice = ({ price, discountedPrice, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <div className={combinedClasses}>
            <span className={styles.price}>${discountedPrice || price}</span>
            {discountedPrice && <span className={styles.discountedPrice}>${price}</span>}
        </div>
    );
};

export default ProductPrice;