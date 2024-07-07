import Separator from '@components/atoms/separator/Separator';
import AdvantagesSection from '@components/organisms/sections/advantagesSection/AdvantagesSection';
import BestSellersSection from '@components/organisms/sections/bestSellersSection/BestSellersSection';
import CategoriesSection from '@components/organisms/sections/categoriesSection/CategoriesSection';
import FlashSalesSection from '@components/organisms/sections/flashSalesSection/FlashSalesSection';
import HeroSection from '@components/organisms/sections/heroSection/HeroSection';
import NewArrivalSection from '@components/organisms/sections/newArrivalSection/newArrivalSection';
import OurProductsSection from '@components/organisms/sections/ourProductsSection/OurProductsSection';
import PromotionSection from '@components/organisms/sections/promotionSection/PromotionSection';

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
