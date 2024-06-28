import SectionLabelWithTitle from '../../components/sectionLabelWithTitle/SectionLabelWithTitle';
import FlexBlock from '../flexBlock/FlexBlock';
import ShopNowLink from '../../ui/shopNowLink/ShopNowLink';

import Container from '../container/Container';

import styles from './newArrivalSection.module.scss';

const NewArrivalSection = ({ className, ...props }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;

    return (
        <section className={combinedClassName} {...props}>
            <Container>
                <SectionLabelWithTitle
                    label="Featured"
                    title="New Arrival"
                    className={styles.block}
                />
                <div className={styles.grid}>
                    <div className={styles.large}>
                        <FlexBlock gap={16} className={styles.large_block} column>
                            <div className={styles.title}>PlayStation 5</div>
                            <p className={styles.desc}>
                                Black and White version of the PS5 coming out on sale.
                            </p>
                            <ShopNowLink className={styles.link} line />
                        </FlexBlock>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.full}>
                            <FlexBlock gap={16} className={styles.full_block} column>
                                <div className={styles.title}>Women’s Collections</div>
                                <p className={styles.desc}>
                                    Featured woman collections that give you another vibe.
                                </p>
                                <ShopNowLink className={styles.link} line />
                            </FlexBlock>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.half}>
                                <FlexBlock gap={8} className={styles.half_block} column>
                                    <div className={styles.title}>Speakers</div>
                                    <p className={styles.desc}>Amazon wireless speakers</p>
                                    <ShopNowLink className={styles.link} line />
                                </FlexBlock>
                                <div className={styles.ellipse}></div>
                            </div>
                            <div className={styles.half}>
                                <FlexBlock gap={8} className={styles.half_block} column>
                                    <div className={styles.title}>Perfume</div>
                                    <p className={styles.desc}>GUCCI INTENSE OUD EDP</p>
                                    <ShopNowLink className={styles.link} line />
                                </FlexBlock>
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
