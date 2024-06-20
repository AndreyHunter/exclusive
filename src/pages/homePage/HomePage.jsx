import TopHeader from '../../components/topHeader/TopHeader';
import Header from '../../components/header/Header';

import Container from '../../components/container/Container';

import styles from './homePage.module.scss';

const HomePage = () => {
    return (
        <>
            <div style={{ paddingBottom: 45 }}>
                <TopHeader />
            </div>
            <Container variant="default">
                <Header />
            </Container>
        </>
    );
};

export default HomePage;
