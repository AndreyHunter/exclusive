import TopHeader from '../../components/topHeader/TopHeader';
import Header from '../../components/header/Header';
import CategoryNav from '../../components/categoryNav/CategoryNav';

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
            <section>
                <Container>
                    <CategoryNav />
                </Container>
            </section>
        </>
    );
};

export default HomePage;
