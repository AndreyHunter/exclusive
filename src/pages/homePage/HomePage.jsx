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
            <HeroSection className={`${styles.section} ${styles.hero}`} />
            <FlashSalesSection className={styles.section} />
            <Separator />
            <CategoriesSection className={`${styles.section} ${styles.categories}`} />
            <Separator />
            <BestSellersSection className={`${styles.section} ${styles.bestSellers}`} />
            <PromotionSection className={styles.section} />
            <OurProductsSection className={styles.section} />
            <NewArrivalSection className={styles.section} />
            <AdvantagesSection className={styles.section} />
        </>
    );
};

export default HomePage;
