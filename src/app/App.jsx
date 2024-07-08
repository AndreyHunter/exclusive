import { useState } from 'react';
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
} from '@pages/';

import ScrollToTop from '@components/helpers/scrollToTop/scrollToTop';
import AccountTemplate from '@components/templates/accountTemplate/AccountTemplate';
import LayoutTemplate from '@components/templates/layoutTemplate/LayoutTemplate';

import styles from './app.module.scss';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={styles.app}>
            <ScrollToTop>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <LayoutTemplate handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
                        }>
                        <Route index element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route path="/wishlist" element={<WishListPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/product" element={<ProductPage />} />
                        <Route path="*" element={<NotFoundPage />} />

                        <Route path="/account" element={<AccountTemplate />}>
                            <Route index element={<ProfilePage />} />
                            <Route path="profile" element={<ProfilePage />} />
                        </Route>
                    </Route>
                </Routes>
            </ScrollToTop>
        </div>
    );
};

export default App;
