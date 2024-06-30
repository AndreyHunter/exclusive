import TopHeader from '../components/topHeader/TopHeader';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Separator from '../ui/separator/Separator';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import ScrollToTopButton from '../components/scrollToTopButton/scrollToTopButton';

import { HomePage } from '../pages';

import styles from './app.module.scss';
import { useState } from 'react';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div className={styles.top_header}>
                <TopHeader handleMenuOpen={handleMenuOpen} />
            </div>
            <Header />
            <div className={styles.line}>
                <Separator />
            </div>
            <main>
                <HomePage />
            </main>
            <Footer />
            <MobileMenu isOpen={isOpen} />
            <ScrollToTopButton />
        </>
    );
};

export default App;
