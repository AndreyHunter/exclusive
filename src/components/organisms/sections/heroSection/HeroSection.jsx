import CategoryNav from '../../categoryNav/CategoryNav';
import MainSlider from '../../mainSlider/MainSlider';

import Container from '../../../helpers/container/Container';

import styles from './heroSection.module.scss';

const HeroSection = ({ className, ...props }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;

    return (
        <section className={combinedClassName} {...props}>
            <Container>
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
