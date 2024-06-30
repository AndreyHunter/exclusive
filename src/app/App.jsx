import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import TopHeader from '../components/topHeader/TopHeader';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Separator from '../ui/separator/Separator';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import ScrollToTopButton from '../components/scrollToTopButton/scrollToTopButton';
import ScrollToTop from '../components/scrollToTop/scrollToTop';

import { HomePage, NotFoundPage } from '../pages';

import styles from './app.module.scss';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={styles.app}>
            <ScrollToTop>
                <div className={styles.top_header}>
                    <TopHeader handleMenuOpen={handleMenuOpen} />
                </div>
                <Header className={styles.header} />
                <Separator />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer className={styles.footer} />
                <MobileMenu isOpen={isOpen} />
                <ScrollToTopButton />
            </ScrollToTop>
        </div>
    );
};

export default App;
