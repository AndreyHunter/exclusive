import { useState } from 'react';

import useCounter from '@hooks/useCounter';

import Button from '@components/atoms/button/Button';
import Separator from '@components/atoms/separator/Separator';
import Flex from '@components/helpers/flex/Flex';
import ColorsList from '@components/molecules/colorsList/ColorsList';
import Counter from '@components/molecules/counter/Counter';
import DeliveryInfo from '@components/molecules/deliveryInfo/DeliveryInfo';
import ProductRating from '@components/molecules/productRating/ProductRating';
import SizeList from '@components/molecules/sizeList/SizeList';

import HeartIcon from '@assets/icons/heart.svg?react';

import styles from './productInfo.module.scss';

const ProductInfo = ({ product, className }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const { count, handleIncrement, handleDecrement } = useCounter();

    const handleSetSize = (size) => {
        setSelectedSize(size);
    };

    const handleSetColor = (color) => {
        setSelectedColor(color);
    };

    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    return (
        <Flex
            flexDirection="column"
            gap={30}
            justifyContent="space-between"
            className={combinedClasses}>
            <div>
                <div className={styles.title}>{product.name}</div>
                <Flex className={styles.reviews} gap={16} alignItems="center">
                    <ProductRating rating={product.rating} reviewsCount={product.reviewsCount} />
                    <span>In Stock</span>
                </Flex>
                <div className={styles.price}>$192.00</div>
                <p className={styles.desc}>
                    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for
                    easy bubble free install & mess free removal Pressure sensitive.
                </p>
                <Separator className={styles.separator} />

                <Flex gap={25} className={styles.colors}>
                    <label>Colors:</label>
                    <ColorsList
                        colors={product.colors}
                        checked={selectedColor}
                        onChange={handleSetColor}
                    />
                </Flex>
                <Flex gap={25} alignItems="center" className={styles.sizes}>
                    <label>Size:</label>
                    <SizeList
                        sizes={product.sizes}
                        selectedSize={selectedSize}
                        onChange={handleSetSize}
                    />
                </Flex>
                <Flex gap={16} className={styles.add} alignItems="center">
                    <Counter
                        count={count}
                        decrement={handleDecrement}
                        increment={handleIncrement}
                    />
                    <Button title="Buy Now" />
                    <Flex alignItems="center" justifyContent="center" className={styles.wish}>
                        <HeartIcon />
                    </Flex>
                </Flex>
            </div>
            <DeliveryInfo />
        </Flex>
    );
};

export default ProductInfo;