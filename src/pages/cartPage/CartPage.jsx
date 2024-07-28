import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useMediaQuery from '@/hooks/useMediaQuery';
import { productsInCartSelector } from '@store/cart/cartSelectors';
import { fetchUserCart } from '@store/cart/CartSlice';

import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import BreadCrumbs from '@components/molecules/breadCrumbs/BreadCrumbs';
import CartHeader from '@components/molecules/cartHeader/CartHeader';
import CartItem from '@components/molecules/cartItem/CartItem';
import CartTotal from '@components/molecules/cartTotal/CartTotal';
import CouponCodeItem from '@components/molecules/couponCodeItem/CouponCodeItem';

import styles from './cartPage.module.scss';

const CartPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsInCartSelector);

    const isSmallMobile = useMediaQuery('(max-width: 360px)');

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        dispatch(fetchUserCart(userId));
    }, []);

    const cartTotal = products?.reduce((prev, product) => {
        let total;
        const price = product.productId.price;
        const discountedPrice = product.productId.discountedPrice;
        const quantity = product.quantity;

        if (discountedPrice) {
            total = discountedPrice;
        } else if (price) {
            total = price;
        }

        return prev + total * quantity;
    }, 0);

    const subTotal = products?.reduce((prev, product) => {
        const quantity = product.quantity;
        return prev + product.productId.price * quantity;
    }, 0);

    return (
        <>
            <Container>
                <BreadCrumbs activePage="Cart" />
                <section className={styles.section}>
                    <Flex className={styles.root} tagElement="section" flexDirection="column">
                        {!isSmallMobile && <CartHeader />}
                        <Flex
                            className={styles.list}
                            tagElement="ul"
                            flexDirection="column"
                            gap={30}>
                            {products &&
                                products.map((product) => {
                                    return (
                                        <CartItem
                                            key={product.productId._id}
                                            product={product.productId}
                                            quantity={product.quantity}
                                        />
                                    );
                                })}
                        </Flex>
                        <Flex justifyContent="space-between" className={styles.buttons}>
                            <Button
                                tagElement="link"
                                to="/catalog"
                                title="Return To Shop"
                                variant="transparent"
                            />
                            <Button title="Update Cart" variant="transparent" />
                        </Flex>
                        <div className={styles.block}>
                            <CouponCodeItem className={styles.coupon} />
                            <CartTotal subTotal={cartTotal} total={subTotal} />
                        </div>
                    </Flex>
                </section>
            </Container>
        </>
    );
};

export default CartPage;
