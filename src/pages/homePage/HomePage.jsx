import TopHeader from '../../components/topHeader/TopHeader';
import Header from '../../components/header/Header';
import HeroSection from '../../components/heroSection/HeroSection';

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
            <HeroSection />
        </>
    );
};

export default HomePage;
