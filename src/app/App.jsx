import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, NotFoundPage, AboutPage, ContactsPage, ProfilePage } from '../pages';
import LayoutTemplate from '../components/templates/layoutTemplate/LayoutTemplate';
import AccountTemplate from '../components/templates/accountTemplate/AccountTemplate';

import ScrollToTop from '../components/helpers/scrollToTop/scrollToTop';

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