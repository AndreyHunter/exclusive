import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, NotFoundPage, AboutPage, ContactsPage } from '../pages';
import LayoutTemplate from '../components/templates/layoutTemplate/LayoutTemplate';

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
                <LayoutTemplate handleMenuOpen={handleMenuOpen} isOpen={isOpen}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </LayoutTemplate>
            </ScrollToTop>
        </div>
    );
};

export default App;