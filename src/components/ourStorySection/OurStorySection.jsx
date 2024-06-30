import Container from '../container/Container';
import FlexBlock from '../flexBlock/FlexBlock';

import aboutImage from '../../assets/images/about/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone.png';

import styles from './ourStorySection.module.scss';

const OurStorySection = ({ className }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;

    return (
        <section className={combinedClassName}>
            <Container>
                <div className={styles.grid}>
                    <FlexBlock column className={styles.info}>
                        <h2 className={styles.title}>Our Story</h2>
                        <FlexBlock gap={24} column>
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
                        </FlexBlock>
                    </FlexBlock>
                    <img src={aboutImage} alt="about-image" />
                </div>
            </Container>
        </section>
    );
};

export default OurStorySection;