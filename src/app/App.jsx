import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import {
    HomePage,
    NotFoundPage,
    AboutPage,
    ContactsPage,
    ProfilePage,
    WishListPage,
    CartPage,
    CheckoutPage,
    ProductPage,
    ProductsPage,
} from '@pages/';
import { fetchUserCart } from '@store/cart/CartSlice';

import PrivateRoute from '@components/helpers/privateRoute/PrivateRoute';
import ScrollToTop from '@components/helpers/scrollToTop/scrollToTop';
import LoginForm from '@components/organisms/loginForm/LoginForm';
import RegistrationForm from '@components/organisms/registrationForm/RegistrationForm';
import AccountTemplate from '@components/templates/accountTemplate/AccountTemplate';
import AuthTemplate from '@components/templates/authTemplate/AuthTemplate';
import LayoutTemplate from '@components/templates/layoutTemplate/LayoutTemplate';

import styles from './app.module.scss';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        dispatch(fetchUserCart({ userId }));
    }, []);

    return (
        <div className={styles.app}>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<LayoutTemplate />}>
                        <Route index element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route
                            path="/wishlist"
                            element={
                                <PrivateRoute>
                                    <WishListPage />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />

                        <Route path="/category/*" element={<ProductsPage />} />
                        <Route path="/product" element={<ProductPage />} />

                        <Route path="*" element={<NotFoundPage />} />

                        <Route path="/account" element={<AccountTemplate />}>
                            <Route index element={<ProfilePage />} />
                            <Route path="profile" element={<ProfilePage />} />
                        </Route>

                        <Route path="/auth" element={<AuthTemplate />}>
                            <Route index element={<RegistrationForm />} />
                            <Route path="signup" element={<RegistrationForm />} />
                            <Route path="signin" element={<LoginForm />} />
                        </Route>
                    </Route>
                </Routes>
            </ScrollToTop>
        </div>
    );
};

export default App;
