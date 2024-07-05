import { useState } from 'react';

import products from '../../constants/products';

import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import OrderForm from '../../components/organisms/orderForm/OrderForm';
import OrderSummary from '../../components/organisms/orderSummary/OrderSummary';
import CouponCodeItem from '../../components/molecules/couponCodeItem/CouponCodeItem';
import Container from '../../components/helpers/container/Container';
import FlexBlock from '../../components/helpers/flexBlock/FlexBlock';
import Button from '../../components/atoms/button/Button';
import RadioButton from '../../components/atoms/radioButton/RadioButton';
import BanksList from '../../components/molecules/banksList/BanksList';

import styles from './checkoutPage.module.scss';

const CheckoutPage = () => {
    const [radioButtons, setRadioButtons] = useState({ bank: false, cashOrDelivery: false });
    const [checked, setChecked] = useState(true);
    const checkout = products.slice(products.length - 2);

    const handleSetChecked = () => {
        setChecked(!checked);
    };

    const handleRadioButton = (e) => {
        const { name } = e.target;

        setRadioButtons((prev) => ({
            bank: false,
            cashOrDelivery: false,
            [name]: true,
        }));
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
                            <FlexBlock column className={styles.block}>
                                <OrderSummary products={checkout} />
                                <CouponCodeItem className={styles.coupon} />
                                <FlexBlock spaceBetween className={styles.banks}>
                                    <FlexBlock gap={12} alignCenter>
                                        <RadioButton
                                            name="bank"
                                            checked={radioButtons.bank}
                                            onChange={handleRadioButton}
                                        />
                                        <span>Bank</span>
                                    </FlexBlock>
                                    <BanksList />
                                </FlexBlock>
                                <FlexBlock>
                                    <FlexBlock gap={12} alignCenter>
                                        <RadioButton
                                            name="cashOrDelivery"
                                            checked={radioButtons.cashOrDelivery}
                                            onChange={handleRadioButton}
                                        />
                                        <span>Cash on delivery</span>
                                    </FlexBlock>
                                </FlexBlock>
                            </FlexBlock>
                            <Button title="Place Order" className={styles.button} />
                        </div>
                    </FlexBlock>
                </Container>
            </section>
        </>
    );
};

export default CheckoutPage