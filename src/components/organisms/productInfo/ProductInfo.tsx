import { useState } from 'react';
import { clsx } from 'clsx';

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
  const [selectedColor, setSelectedColor] = useState('');
  const { count, increment, decrement } = useCounter(1);
  const classes = clsx(styles.root, className);

  const handleSetSize = (size: string) => {
    setSelectedSize(size);
  };

  const handleSetColor = (color: string) => {
    setSelectedColor(color);
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

        {product.colors && (
          <Flex gap={25} className={styles.colors}>
            <label>Colors:</label>
            <ColorsList
              colors={product.colors!}
              checked={selectedColor}
              onChange={handleSetColor}
            />
          </Flex>
        )}
        {product.sizes && (
          <Flex gap={25} className={styles.sizes}>
            <label>Sizes:</label>
            <SizeList sizes={product.sizes!} selectedSize={selectedSize} onChange={handleSetSize} />
          </Flex>
        )}

        <Flex gap={16} className={styles.add} alignItems="center">
          <Counter count={count} increment={increment} decrement={decrement} />
          <Button>Buy Now</Button>
          <Flex alignItems="center" justifyContent="center" className={styles.wish}>
            <HeartIcon />
          </Flex>
        </Flex>
      </div>
      <DeliveryInfo />
    </Flex>
  );
};
