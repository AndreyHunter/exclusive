import TopHeader from '../../components/topHeader/TopHeader';
import Header from '../../components/header/Header';
import HeroSection from '../../components/heroSection/HeroSection';
import FlashSalesSection from '../../components/flashSalesSection/FlashSalesSection';
import CategoriesSection from '../../components/categoriesSection/CategoriesSection';
import BestSellersSection from '../../components/bestSellersSection/BestSellersSection';
import PromotionSection from '../../components/promotionSection/PromotionSection';
import OurProductsSection from '../../components/ourProductsSection/OurProductsSection';
import NewArrivalSection from '../../components/newArrivalSection/NewArrivalSection';
import AdvantagesSection from '../../components/advantagesSection/AdvantagesSection';
import Footer from '../../components/footer/Footer';
import Separator from '../../ui/separator/Separator';

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
            <BestSellersSection className={styles.bestSellers} />
            <PromotionSection className={styles.promotion} />
            <OurProductsSection className={styles.ourProducts} />
            <NewArrivalSection className={styles.newArrival} />
            <AdvantagesSection className={styles.advantages} />
            <Footer />
        </>
    );
};

export default HomePage;