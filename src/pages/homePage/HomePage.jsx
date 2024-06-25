import TopHeader from '../../components/topHeader/TopHeader';
import Header from '../../components/header/Header';
import HeroSection from '../../components/heroSection/HeroSection';
import FlashSalesSection from '../../components/flashSalesSection/FlashSalesSection';
import Separator from '../../ui/separator/Separator';

import Container from '../../components/container/Container';

import styles from './homePage.module.scss';

const HomePage = () => {
    return (
        <>
            <div style={{ paddingBottom: 45 }}>
                <TopHeader />
            </div>
            <Header />
            <Separator />
            <div style={{ paddingBottom: 150 }}>
                <HeroSection />
            </div>
            <FlashSalesSection />
            <div style={{ paddingBottom: 180 }}>
                <Separator />
            </div>
        </>
    );
};

export default HomePage;
