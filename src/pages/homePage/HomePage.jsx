import HeroSection from '../../components/heroSection/HeroSection';
import FlashSalesSection from '../../components/flashSalesSection/FlashSalesSection';
import CategoriesSection from '../../components/categoriesSection/CategoriesSection';
import BestSellersSection from '../../components/bestSellersSection/BestSellersSection';
import PromotionSection from '../../components/promotionSection/PromotionSection';
import OurProductsSection from '../../components/ourProductsSection/OurProductsSection';
import NewArrivalSection from '../../components/newArrivalSection/NewArrivalSection';
import AdvantagesSection from '../../components/advantagesSection/AdvantagesSection';

import Separator from '../../ui/separator/Separator';

import styles from './homePage.module.scss';

const HomePage = () => {
    return (
        <>
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
        </>
    );
};

export default HomePage;