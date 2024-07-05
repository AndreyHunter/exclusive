import Container from '../../../helpers/container/Container';
import Flex from '../../../helpers/flex/Flex';

import aboutImage from '../../../../assets/images/about/two-african-females.png';

import styles from './ourStorySection.module.scss';

const OurStorySection = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <div className={styles.grid}>
                    <Flex flexDirection="column" className={styles.info}>
                        <h2 className={styles.title}>Our Story</h2>
                        <Flex flexDirection="column" gap={24}>
                            <p>
                                Launced in 2015, Exclusive is South Asia’s premier online shopping
                                makterplace with an active presense in Bangladesh. Supported by wide
                                range of tailored marketing, data and service solutions, Exclusive
                                has 10,500 sallers and 300 brands and serves 3 millioons customers
                                across the region.
                            </p>
                            <p>
                                Exclusive has more than 1 Million products to offer, growing at a
                                very fast. Exclusive offers a diverse assotment in categories
                                ranging from consumer.
                            </p>
                        </Flex>
                    </Flex>
                    <img src={aboutImage} alt="about-image" />
                </div>
            </Container>
        </section>
    );
};

export default OurStorySection;
