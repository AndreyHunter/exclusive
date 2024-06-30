import Button from '../../ui/button/Button';
import productImage from '../../assets/images/products/jbl_boombox.png';
import Countdown from '../countdown/Countdown';

import Container from '../container/Container';

import styles from './promotionSection.module.scss';

const PromotionSection = ({ className, ...props }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;

    const promotionTime = new Date('2024-12-31T23:59:59');

    return (
        <section className={combinedClassName} {...props}>
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
