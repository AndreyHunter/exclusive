import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import Countdown from '@components/molecules/countdown/Countdown';

import productImage from '@assets/images/products/jbl_boombox.png';

import styles from './promotionSection.module.scss';

const PromotionSection = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    const promotionTime = new Date('2024-12-31T23:59:59');

    return (
        <section className={combinedClasses}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Enhance Your Music Experience</h2>
                        <Countdown
                            className={styles.timer}
                            variant="white"
                            endDate={promotionTime}
                        />
                        <Button title="Buy Now!" />
                    </div>
                    <div className={styles.image}>
                        <img src={productImage} alt="jbl_boombox" />
                        <div className={styles.ellipse}></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PromotionSection;
