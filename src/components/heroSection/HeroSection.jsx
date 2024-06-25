import CategoryNav from '../categoryNav/CategoryNav';
import MainSlider from '../mainSlider/MainSlider';

import Container from '../container/Container';

import styles from './heroSection.module.scss';

const HeroSection = () => {
    return (
        <section>
            <Container variant="default">
                <div className={styles.layout}>
                    <div className={styles.wrapper}>
                        <div className={styles.block}>
                            <CategoryNav />
                        </div>
                        <div className={styles.line} />
                    </div>
                    <div className={styles.slider_block}>
                        <MainSlider />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;