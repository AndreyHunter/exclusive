import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchUserCart } from '@store/cart/CartSlice';

import Loader from '@components/atoms/loader/Loader';
import Container from '@components/helpers/container/Container';
import PrivateRoute from '@components/helpers/privateRoute/PrivateRoute';
import ScrollToTop from '@components/helpers/scrollToTop/scrollToTop';
import LoginForm from '@components/organisms/loginForm/LoginForm';
import RegistrationForm from '@components/organisms/registrationForm/RegistrationForm';
import LayoutTemplate from '@components/templates/layoutTemplate/LayoutTemplate';

const HomePage = lazy(() => import('@pages/homePage/HomePage'));
const NotFoundPage = lazy(() => import('@pages/notFoundPage/NotFoundPage'));
const AboutPage = lazy(() => import('@pages/aboutPage/AboutPage'));
const ContactsPage = lazy(() => import('@pages/contactsPage/ContactsPage'));
const ProfilePage = lazy(() => import('@pages/profilePage/ProfilePage'));
const WishListPage = lazy(() => import('@pages/wishListPage/WishListPage'));
const CartPage = lazy(() => import('@pages/cartPage/CartPageContainer'));
const CheckoutPage = lazy(() => import('@pages/checkoutPage/CheckoutPage'));
const ProductPage = lazy(() => import('@pages/productPage/ProductPage'));
const ProductsPage = lazy(() => import('@pages/productsPage/ProductPageContainer'));

const AuthTemplate = lazy(() => import('@components/templates/authTemplate/AuthTemplate'));
const AccountTemplate = lazy(() => import('@components/templates/accountTemplate/AccountTemplate'));

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
                        <Route
                            index
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <HomePage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <AboutPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/contacts"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <ContactsPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/wishlist"
                            element={
                                <PrivateRoute>
                                    <Suspense
                                        fallback={
                                            <Container className={styles.padding}>
                                                <Loader />
                                            </Container>
                                        }>
                                        <WishListPage />
                                    </Suspense>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <CartPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/checkout"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <CheckoutPage />
                                </Suspense>
                            }
                        />

                        <Route
                            path="/category/*"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <ProductsPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/product"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <ProductPage />
                                </Suspense>
                            }
                        />

                        <Route
                            path="*"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <NotFoundPage />
                                </Suspense>
                            }
                        />

                        <Route
                            path="/account"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <AccountTemplate />
                                </Suspense>
                            }>
                            <Route index element={<ProfilePage />} />
                            <Route path="profile" element={<ProfilePage />} />
                        </Route>

                        <Route
                            path="/auth"
                            element={
                                <Suspense
                                    fallback={
                                        <Container className={styles.padding}>
                                            <Loader />
                                        </Container>
                                    }>
                                    <AuthTemplate />
                                </Suspense>
                            }>
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
