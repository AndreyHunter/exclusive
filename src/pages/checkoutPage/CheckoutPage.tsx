import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@components/atoms/button/Button';
import { RadioButton } from '@components/atoms/radioButton/RadioButton';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { BanksList } from '@components/molecules/banksList/BanksList';
import { BreadCrumbs } from '@components/molecules/breadCrumbs/BreadCrumbs';
import { CouponCodeItem } from '@components/molecules/couponCodeItem/CouponCodeItem';
import { OrderSummary } from '@components/organisms/orderSummary/OrderSummary';
import { OrderForm } from '@components/organisms/orderForm/OrderForm';
import { fetchUserCart, selectProductsInCart } from '@features/cart/cartSlice';

import styles from './checkoutPage.module.scss';

const CheckoutPage = () => {
  const [radioButtons, setRadioButtons] = useState({ bank: false, cashOrDelivery: false });
  const [checked, setChecked] = useState(true);
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductsInCart);

  useEffect(() => {
    dispatch(fetchUserCart(true));
  }, [dispatch]);

  const handleSetChecked = () => {
    setChecked(!checked);
  };

  const handleRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setRadioButtons((prev) => ({
      bank: false,
      cashOrDelivery: false,
      [name]: true,
    }));
  };

  const checkoutProducts = products.map((product) => product.product);

  return (
    <>
      <Container>
        <BreadCrumbs activePage="Checkout" />
      </Container>
      <section className={styles.section}>
        <Container>
          <h2 className={styles.title}>Billing Details</h2>
          <Flex justifyContent="space-between" gap={30} className={styles.flex}>
            <OrderForm handleSetChecked={handleSetChecked} checked={checked} />
            <div className={styles.info}>
              <Flex flexDirection="column" className={styles.block}>
                <OrderSummary products={checkoutProducts} total={100} subtotal={120} />
                <CouponCodeItem className={styles.coupon} />
                <Flex justifyContent="space-between" className={styles.banks}>
                  <Flex alignItems="center" gap={12}>
                    <RadioButton
                      name="bank"
                      checked={radioButtons.bank}
                      onChange={handleRadioButton}
                    />
                    <span>Bank</span>
                  </Flex>
                  <BanksList />
                </Flex>
                <Flex>
                  <Flex alignItems="center" gap={12}>
                    <RadioButton
                      name="cashOrDelivery"
                      checked={radioButtons.cashOrDelivery}
                      onChange={handleRadioButton}
                    />
                    <span>Cash on delivery</span>
                  </Flex>
                </Flex>
              </Flex>
              <Button className={styles.button}>Place Order</Button>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default CheckoutPage;
