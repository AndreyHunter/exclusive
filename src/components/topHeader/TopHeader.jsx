import { Link } from 'react-router-dom';

import Container from '../container/Container';
import LanguageSelect from '../languageSelect/LanguageSelect';

import styles from './topHeader.module.scss';

const TopHeader = () => {
    return (
        <section className={styles.bg}>
            <Container variant="default">
                <div className={styles.content}>
                    <div className={styles.message}>
                        <div className={styles.message_text}>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                        <Link className={styles.link}>ShopNow</Link>
                    </div>
                    <LanguageSelect />
                </div>
            </Container>
        </section>
    );
};

export default TopHeader;
