import styles from './productPrice.module.scss';

const ProductPrice = ({ price, discountedPrice }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.price}>${discountedPrice || price}</span>
            {discountedPrice && <span className={styles.discountedPrice}>${price}</span>}
        </div>
    );
};

export default ProductPrice;
