import TopHeader from '../../components/topHeader/TopHeader';

import Container from '../../components/container/Container';

import styles from './homePage.module.scss';

const HomePage = () => {
    return (
        <>
            <TopHeader />
            <Container variant="default" />
        </>
    );
};

export default HomePage;
