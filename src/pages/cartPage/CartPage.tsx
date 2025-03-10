import { useMediaQuery } from '@hooks/useMediaQuery';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { BreadCrumbs } from '@components/molecules/breadCrumbs/BreadCrumbs';
import { CartHeader } from '@components/molecules/cartHeader/CartHeader';
import { CartItemContainer as CartItem } from '@components/molecules/cartItem/CartItemContainer';
import { CartTotal } from '@components/molecules/cartTotal/CartTotal';
import { CouponCodeItem } from '@components/molecules/couponCodeItem/CouponCodeItem';
import { ROUTES } from '@routes/routes';
import type { Cart } from 'types/index';

import styles from './cartPage.module.scss';

interface CartPageProps {
  products: Cart;
  loading: boolean;
  subTotal: number;
  cartTotal: number;
  onUpdateCart: () => void;
  onDeleteProduct: (id: string) => void;
}

const CartPage = ({
  products,
  loading,
  subTotal,
  cartTotal,
  onUpdateCart,
  onDeleteProduct,
}: CartPageProps) => {
  const isSmallMobile = useMediaQuery('(max-width: 360px)');

  return (
    <>
      <Container>
        <BreadCrumbs activePage="Cart" />
        <section className={styles.section}>
          <Flex className={styles.root} flexDirection="column">
            {!isSmallMobile && <CartHeader />}
            <Flex className={styles.list} tagElement="ul" flexDirection="column" gap={30}>
              {products &&
                products.map((product) => {
                  return (
                    <CartItem
                      key={product.product._id}
                      product={product.product}
                      quantity={product.quantity}
                      onDeleteProduct={() => onDeleteProduct(product.product._id)}
                    />
                  );
                })}
            </Flex>
            <Flex justifyContent="space-between" className={styles.buttons}>
              <Button tagElement="link" to={`/${ROUTES.PRODUCTS}`} variant="transparent">
                Return To Shop
              </Button>
              <Button
                variant="transparent"
                onClick={onUpdateCart}
                loading={loading}
                disabled={!products.length}
                className={styles.updateButton}>
                Update Cart
              </Button>
            </Flex>
            <div className={styles.block}>
              <CouponCodeItem className={styles.coupon} />
              <CartTotal subTotal={subTotal} total={cartTotal} />
            </div>
          </Flex>
        </section>
      </Container>
    </>
  );
};

export default CartPage;
