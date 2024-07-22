import { Outlet } from 'react-router-dom';

import Separator from '@components/atoms/separator/Separator';
import ScrollToTopButton from '@components/molecules/scrollToTopButton/scrollToTopButton';
import Footer from '@components/organisms/footer/Footer';
import Header from '@components/organisms/header/Header';
import MobileMenu from '@components/organisms/mobileMenu/MobileMenu';
import TopHeader from '@components/organisms/topHeader/TopHeader';

import styles from './layoutTemplate.module.scss';

const LayoutTemplate = () => {
    return (
        <>
            <div className={styles.top_header}>
                <TopHeader />
            </div>
            <Header className={styles.header} />
            <Separator />
            <main>
                <Outlet />
            </main>
            <Footer className={styles.footer} />
            <MobileMenu />
            <ScrollToTopButton />
        </>
    );
};

export default LayoutTemplate;
