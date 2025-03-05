import { clsx } from 'clsx';

import productImage from '@assets/images/products/jbl_boombox.png';
import { Button } from '@components/atoms/button/Button';
import { Container } from '@components/helpers/container/Container';
import { Countdown } from '@components/molecules/countdown/Countdown';
import { ROUTES } from '@routes/routes';

import styles from './promotionSection.module.scss';

const promotionTime = new Date('2025-04-31T23:59:59');

interface PromotionSectionProps {
  className?: string;
}

export const PromotionSection = ({ className }: PromotionSectionProps) => {
  const classes = clsx(styles.root, className);

  return (
    <section className={classes}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2 className={styles.title}>Enhance Your Music Experience</h2>
            <Countdown className={styles.timer} variant="white" endDate={promotionTime} />
            <Button tagElement="link" to={`${ROUTES.PRODUCT}/example`}>
              Buy Now!
            </Button>
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
