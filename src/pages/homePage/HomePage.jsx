import TopHeader from '../../components/topHeader/TopHeader';
import Header from '../../components/header/Header';
import HeroSection from '../../components/heroSection/HeroSection';
import FlashSalesSection from '../../components/flashSalesSection/FlashSalesSection';
import CategoriesSection from '../../components/categoriesSection/CategoriesSection';
import Separator from '../../ui/separator/Separator';

import Container from '../../components/container/Container';

import styles from './homePage.module.scss';

const HomePage = () => {
    return (
        <>
            <div className={styles.top_header}>
                <TopHeader />
            </div>
            <Header />
            <div className={styles.line}>
                <Separator />
            </div>
            <HeroSection className={styles.hero} />
            <FlashSalesSection className={styles.flashSales} />
            <Separator />
            <CategoriesSection className={styles.categories} />
            <Separator />
        </>
    );
};

export default HomePage;
