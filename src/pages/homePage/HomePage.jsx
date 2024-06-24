import TopHeader from '../../components/topHeader/TopHeader';
import Header from '../../components/header/Header';
import HeroSection from '../../components/heroSection/HeroSection';
import FlashSalesSection from '../../components/flashSalesSection/FlashSalesSection';

import Container from '../../components/container/Container';

import styles from './homePage.module.scss';

const HomePage = () => {
    return (
        <>
            <div style={{ paddingBottom: 45 }}>
                <TopHeader />
            </div>

            <Header />
            <div style={{ paddingTop: 23, borderBottom: '0.5px solid black', opacity: 0.3 }} />
            <div style={{ paddingBottom: 150 }}>
                <HeroSection />
            </div>
            <FlashSalesSection />
        </>
    );
};

export default HomePage;
