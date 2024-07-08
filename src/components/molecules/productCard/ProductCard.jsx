import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Numbers } from '@utils/';

import AddToCardButton from '@components/atoms/addToCardButton/AddToCardButton';
import CardActionButton from '@components/atoms/cardActionButton/CardActionButton';
import CompareIcon from '@components/atoms/compareIcon/CompareIcon';
import DiscountLabel from '@components/atoms/discountLabel/DiscountLabel';
import ProductPrice from '@components/atoms/productPrice/ProductPrice';
import Flex from '@components/helpers/flex/Flex';
import ProductRating from '@components/molecules/productRating/ProductRating';

import FavoriteIcon from '@assets/icons/heart.svg?react';

import styles from './productsCard.module.scss';

const ProductCard = ({ product }) => {
    const [rating, setRating] = useState(product.rating);
    const [reviewsCount, setReviewsCount] = useState(product.reviewsCount);

    const handleSetRating = (rating) => {
        setRating(rating);
        setReviewsCount((prev) => prev + 1);
    };

    return (
        <li className={styles.card}>
            <Flex
                className={styles.header}
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
                <Link>
                    <img src={product.image} alt={product?.name} className={styles.image} />
                </Link>
                <DiscountLabel
                    discount={
                        product.discountedPrice &&
                        Numbers.calcDiscount(product.price, product.discountedPrice)
                    }
                    className={styles.label}
                />
                <div className={styles.buttons}>
                    <CardActionButton icon={<FavoriteIcon />} />
                    <CardActionButton icon={<CompareIcon />} />
                </div>
                <AddToCardButton className={styles.button} />
            </Flex>
            <Flex gap={8} flexDirection="column" className={styles.info}>
                <Link className={styles.title}>{product.name}</Link>
                <ProductPrice price={product.price} discountedPrice={product.discountedPrice} />
                <ProductRating
                    rating={rating}
                    setRating={handleSetRating}
                    reviewsCount={reviewsCount}
                />
            </Flex>
        </li>
    );
};

export default ProductCard;
