import { Link } from 'react-router-dom';
import ProductPrice from '../../ui/productPrice/ProductPrice';
import DiscountLabel from '../../ui/discountLabel/DiscountLabel';
import CardActionButton from '../../ui/cardActionButton/CardActionButton';
import FavoriteIcon from '../../ui/favoriteIcon/FavoriteIcon';
import CompareIcon from '../../ui/compareIcon/CompareIcon';
import AddToCardButton from '../../ui/addToCardButton/AddToCardButton';
import ProductRating from '../../components/productRating/ProductRating';

import styles from './producsCard.module.scss';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [rating, setRating] = useState(0);
    const [reviewsCount, setReviewsCount] = useState(0);

    const handleSetRating = (rating) => {
        setRating(rating);
        setReviewsCount((prev) => prev + 1);
    };

    return (
        <li className={styles.card}>
            <div className={styles.header}>
                <Link>
                    <img
                        src="src/assets/images/products/ak-900-wired-keyboard.png"
                        alt={product?.name}
                        className={styles.image}
                    />
                </Link>
                <DiscountLabel discount={35} className={styles.label} />
                <div className={styles.buttons}>
                    <CardActionButton icon={<FavoriteIcon />} />
                    <CardActionButton icon={<CompareIcon />} />
                </div>
                <AddToCardButton className={styles.button} />
            </div>
            <div className={styles.info}>
                <Link className={styles.title}>AK-900 Wired Keyboard</Link>
                <ProductPrice price={960} discountedPrice={1160} />
                <ProductRating
                    rating={rating}
                    setRating={handleSetRating}
                    reviewsCount={reviewsCount}
                />
            </div>
        </li>
    );
};

export default ProductCard;
