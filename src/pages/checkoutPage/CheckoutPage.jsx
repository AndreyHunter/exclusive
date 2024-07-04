import { useState } from 'react';

import products from '../../constants/products';

import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import OrderForm from '../../components/organisms/orderForm/OrderForm';
import OrderSummary from '../../components/organisms/orderSummary/OrderSummary';
import CouponCodeItem from '../../components/molecules/couponCodeItem/CouponCodeItem';
import Container from '../../components/helpers/container/Container';
import FlexBlock from '../../components/helpers/flexBlock/FlexBlock';
import Button from '../../components/atoms/button/Button';

import styles from './checkoutPage.module.scss';

const CheckoutPage = () => {
    const [checked, setChecked] = useState(true);
    const checkout = products.slice(products.length - 2);

    const handleSetChecked = () => {
        setChecked(!checked);
    };

    return (
        <>
            <Container>
                <BreadCrumbs activePage="Checkout" />
            </Container>
            <section className={styles.section}>
                <Container>
                    <h2 className={styles.title}>Billing Details</h2>
                    <FlexBlock className={styles.flex}>
                        <OrderForm
                            className={styles.form}
                            handleSetChecked={handleSetChecked}
                            checked={checked}
                        />
                        <div className={styles.info}>
                            <FlexBlock column gap={30} className={styles.block}>
                                <OrderSummary products={checkout} />
                                <CouponCodeItem className={styles.coupon} />
                            </FlexBlock>
                            <Button title="Place Order" className={styles.button} />
                        </div>
                    </FlexBlock>
                </Container>
            </section>
        </>
    );
};

export default CheckoutPage;