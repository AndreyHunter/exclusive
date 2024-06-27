import TopHeader from '../components/topHeader/TopHeader';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Separator from '../ui/separator/Separator';

import { HomePage } from '../pages';

import styles from './app.module.scss';

const App = () => {
    return (
        <>
            <div className={styles.top_header}>
                <TopHeader />
            </div>
            <Header />
            <div className={styles.line}>
                <Separator />
            </div>
            <HomePage />
            <Footer />
        </>
    );
};

export default App;