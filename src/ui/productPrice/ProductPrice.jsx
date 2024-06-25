import styles from './productPrice.module.scss';

const ProductPrice = ({ price, discountedPrice }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.price}>${price}</span>
            {discountedPrice && <span className={styles.discountedPrice}>${discountedPrice}</span>}
        </div>
    );
};

export default ProductPrice;