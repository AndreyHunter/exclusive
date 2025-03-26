import { useState } from 'react';
import { clsx } from 'clsx';
import { useParams } from 'react-router-dom';

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
import type { ProductWithInfo } from 'types/index';

import styles from './productInfo.module.scss';

interface ProductInfoProps {
  product: ProductWithInfo;
  className?: string;
}

export const ProductInfo = ({ product, className }: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState('');
  const { count, increment, decrement } = useCounter({});
  const [loading, setLoading] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const classes = clsx(styles.root, className);

  const handleSetSize = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
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
        <div className={styles.title}>{product.name}</div>
        <Flex className={styles.reviews} gap={16} alignItems="center">
          <ProductRating
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            onSetRating={() => {}}
          />
          {product.inStock && <span>In Stock</span>}
        </Flex>
        <div className={styles.price}>${product.price}</div>
        <p className={styles.desc}>{product.description}</p>
        <Separator className={styles.separator} />

        {product.colors && product.colors.length > 0 && (
          <Flex gap={25} className={styles.colors}>
            <label>Colors:</label>
            <ColorsList colors={product.colors} />
          </Flex>
        )}
        {product.sizes && product.sizes.length > 0 && (
          <Flex gap={25} className={styles.sizes}>
            <label>Sizes:</label>
            <SizeList sizes={product.sizes} selectedSize={selectedSize} onChange={handleSetSize} />
          </Flex>
        )}

        <Flex gap={16} className={styles.add} alignItems="center">
          <Counter count={count} increment={increment} decrement={decrement} />
          <Button className={styles.btn} onClick={handleAddToCart} disabled={loading}>
            {showAddedMessage ? 'In cart' : 'By now'}
          </Button>
          <Flex alignItems="center" justifyContent="center" className={styles.wish}>
            <HeartIcon />
          </Flex>
        </Flex>
      </div>
      <DeliveryInfo />

      {product.characteristics && (
        <Flex tagElement="ul" flexDirection="column" gap={10} className={styles.characteristics}>
          {product.characteristics.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
