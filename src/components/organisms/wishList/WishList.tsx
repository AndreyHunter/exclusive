import { ProductCardContainer as ProductCard } from '@components/molecules/productCard/ProductCardContainer';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import type { Product } from 'types/index';

import styles from './wishList.module.scss';

interface WishListProps {
  products: Product[];
}

export const WishList = ({ products }: WishListProps) => {
  return (
    <section className={styles.root}>
      <Container>
        <Flex flexDirection="column" className={styles.content}>
          <Flex alignItems="center" justifyContent="space-between" className={styles.block}>
            <div className={styles.title}>Wishlist {`(${products?.length || 0})`}</div>
            <Button variant="transparent">Move All To Bag</Button>
          </Flex>
          <ul className={styles.grid}>
            {products.length &&
              products.map((product) => <ProductCard key={product._id} product={product} />)}
          </ul>
        </Flex>
      </Container>
    </section>
  );
};
