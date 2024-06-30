import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, NotFoundPage, AboutPage } from '../pages';
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
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </LayoutTemplate>
            </ScrollToTop>
        </div>
    );
};

export default App;
