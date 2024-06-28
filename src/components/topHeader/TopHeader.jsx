import { Link } from 'react-router-dom';

import Container from '../container/Container';
import LanguageSelect from '../languageSelect/LanguageSelect';
import FlexBlock from '../flexBlock/FlexBlock';

import styles from './topHeader.module.scss';

const TopHeader = ({ className, ...props }) => {
    return (
        <section className={`${styles.bg || ''} ${className || ''}`} {...props}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.message}>
                        <div className={styles.message_text}>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                        <Link className={styles.link}>ShopNow</Link>
                    </div>

                    <div className={styles.flex}>
                        <LanguageSelect />
                        <div className={styles.burger}>HAHHAA</div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TopHeader;
