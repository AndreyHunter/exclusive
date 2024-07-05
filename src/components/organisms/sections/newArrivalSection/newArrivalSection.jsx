import SectionLabelWithTitle from '../../../molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import ShopNowLink from '../../../atoms/shopNowLink/ShopNowLink';

import Container from '../../../helpers/container/Container';
import Flex from '../../../helpers/flex/Flex';

import styles from './newArrivalSection.module.scss';

const NewArrivalSection = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <SectionLabelWithTitle
                    label="Featured"
                    title="New Arrival"
                    className={styles.block}
                />
                <div className={styles.grid}>
                    <div className={styles.large}>
                        <Flex flexDirection="column" gap={16} className={styles.large_block}>
                            <div className={styles.title}>PlayStation 5</div>
                            <p className={styles.desc}>
                                Black and White version of the PS5 coming out on sale.
                            </p>
                            <ShopNowLink className={styles.link} line />
                        </Flex>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.full}>
                            <Flex flexDirection="column" gap={16} className={styles.full_block}>
                                <div className={styles.title}>Women’s Collections</div>
                                <p className={styles.desc}>
                                    Featured woman collections that give you another vibe.
                                </p>
                                <ShopNowLink className={styles.link} line />
                            </Flex>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.half}>
                                <Flex flexDirection="column" gap={8} className={styles.half_block}>
                                    <div className={styles.title}>Speakers</div>
                                    <p className={styles.desc}>Amazon wireless speakers</p>
                                    <ShopNowLink className={styles.link} line />
                                </Flex>
                                <div className={styles.ellipse}></div>
                            </div>
                            <div className={styles.half}>
                                <Flex flexDirection="column" gap={8} className={styles.half_block}>
                                    <div className={styles.title}>Perfume</div>
                                    <p className={styles.desc}>GUCCI INTENSE OUD EDP</p>
                                    <ShopNowLink className={styles.link} line />
                                </Flex>
                                <div className={styles.ellipse}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default NewArrivalSection;
