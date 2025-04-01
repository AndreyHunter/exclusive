import { useState } from 'react';
import { clsx } from 'clsx';
import { useParams, useNavigate } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { addToCart } from '@features/cart/cartSlice';
import { useAppDispatch } from '@/app/hooks';
import { useCounter } from '@hooks/useCounter';
import { Button } from '@components/atoms/button/Button';
import { Separator } from '@components/atoms/separator/Separator';
import { Flex } from '@components/helpers/flex/Flex';
import { ColorsList } from '@components/molecules/colorsList/ColorsList';
import { Counter } from '@components/molecules/counter/Counter';
import { DeliveryInfo } from '@components/molecules/deliveryInfo/DeliveryInfo';
import { ProductRating } from '@components/molecules/productRating/ProductRating';
import { SizeList } from '@components/molecules/sizeList/SizeList';
import HeartIcon from '@assets/icons/heart.svg?react';
import type { ProductPageData } from 'types/index';

import styles from './productInfo.module.scss';

interface ProductInfoProps {
  product: ProductPageData;
  className?: string;
}

export const ProductInfo = ({ product, className }: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState(product.variation.size || '');
  const [selectedColor, setSelectedColor] = useState(product.variation.color || '');
  const { count, increment, decrement } = useCounter({});
  const [loading, setLoading] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = clsx(styles.root, className);

  const handleSetVariant = (type: 'size' | 'color', value: string) => {
    if (type === 'size') {
      setSelectedSize(value);
    } else {
      setSelectedColor(value);
    }
    const newSize = type === 'size' ? value : selectedSize;
    const newColor = type === 'color' ? value : selectedColor;
    const variant = product.variationsMap.find(
      (product) => product.size === newSize && product.color === newColor,
    );
    if (variant) {
      navigate(`/${ROUTES.PRODUCT}/${variant.productId}`);
    }
  };

  const handleAddToCart = async () => {
    if (!product.variation.inStock) return;

    setLoading(true);

    try {
      await dispatch(addToCart({ productId: String(id), quantity: count }));
      setShowAddedMessage(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 2000);
    }
  };

  return (
    <Flex flexDirection="column" gap={30} justifyContent="space-between" className={classes}>
      <div>
        <div className={styles.title}>{product.variation.name}</div>
        <Flex className={styles.reviews} gap={16} alignItems="center">
          <ProductRating
            rating={product.baseProduct.rating}
            reviewsCount={product.baseProduct.reviewsCount}
            onSetRating={() => {}}
          />
          {product.variation.inStock ? (
            <span className={styles.inStock}>In stock</span>
          ) : (
            <span className={styles.soldOut}>Sold out</span>
          )}
        </Flex>
        <div className={styles.price}>${product.variation.price}</div>
        <p className={styles.desc}>
          {product.variation.description || product.baseProduct.baseDescription}
        </p>
        <Separator className={styles.separator} />

        {product.options.colors && product.options.colors.length > 0 && (
          <Flex gap={25} className={styles.colors}>
            <label>Colors:</label>
            <ColorsList
              colors={product.options.colors}
              selectedColor={selectedColor}
              onSetColor={handleSetVariant}
            />
          </Flex>
        )}
        {product.options.sizes && product.options.sizes.length > 0 && (
          <Flex gap={25} className={styles.sizes}>
            <label>Sizes:</label>
            <SizeList
              sizes={product.options.sizes}
              selectedSize={selectedSize}
              onChange={handleSetVariant}
            />
          </Flex>
        )}

        <Flex gap={16} className={styles.add} alignItems="center">
          <Counter count={count} increment={increment} decrement={decrement} />
          <Button
            className={styles.btn}
            onClick={handleAddToCart}
            disabled={loading && !product.variation.inStock}>
            {showAddedMessage ? 'In cart' : 'By now'}
          </Button>
          <Flex alignItems="center" justifyContent="center" className={styles.wish}>
            <HeartIcon />
          </Flex>
        </Flex>
      </div>
      <DeliveryInfo />

      {product.variation.characteristics && product.variation.characteristics.length > 1 && (
        <Flex tagElement="ul" flexDirection="column" gap={10} className={styles.characteristics}>
          {product.variation.characteristics.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </Flex>
      )}

      {product.baseProduct.baseCharacteristics &&
        product.baseProduct.baseCharacteristics.length > 1 && (
          <Flex tagElement="ul" flexDirection="column" gap={10} className={styles.characteristics}>
            {product.baseProduct.baseCharacteristics.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </Flex>
        )}
    </Flex>
  );
};
