import TopHeader from '../../organisms/topHeader/TopHeader';
import Header from '../../organisms/header/Header';
import Footer from '../../organisms/footer/Footer';
import Separator from '../../atoms/separator/Separator';
import MobileMenu from '../../organisms/mobileMenu/MobileMenu';
import ScrollToTopButton from '../../molecules/scrollToTopButton/scrollToTopButton';

import styles from './layoutTemplate.module.scss';

const LayoutTemplate = ({ children, handleMenuOpen, isOpen }) => {
    return (
        <>
            <div className={styles.top_header}>
                <TopHeader handleMenuOpen={handleMenuOpen} />
            </div>
            <Header className={styles.header} />
            <Separator />
            <main>{children}</main>
            <Footer className={styles.footer} />
            <MobileMenu isOpen={isOpen} />
            <ScrollToTopButton />
        </>
    );
};

export default LayoutTemplate;
