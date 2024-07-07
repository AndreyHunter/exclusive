import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import CategoryNav from '@components/organisms/categoryNav/CategoryNav';
import MainSlider from '@components/organisms/mainSlider/MainSlider';

import styles from './heroSection.module.scss';

const HeroSection = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <Flex>
                    <Flex className={styles.wrapper} justifyContent="space-between">
                        <div className={styles.block}>
                            <CategoryNav />
                        </div>
                        <div className={styles.line} />
                    </Flex>
                    <div className={styles.slider_block}>
                        <MainSlider />
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default HeroSection;
