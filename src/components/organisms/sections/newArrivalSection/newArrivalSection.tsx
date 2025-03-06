import { clsx } from 'clsx';

import { ShopNowLink } from '@components/atoms/shopNowLink/ShopNowLink';
import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { ROUTES } from '@routes/routes';

import styles from './newArrivalSection.module.scss';

interface NewArrivalSectionProps {
  className?: string;
}

export const NewArrivalSection = ({ className }: NewArrivalSectionProps) => {
  const classes = clsx(styles.root, className);

  return (
    <section className={classes}>
      <Container>
        <div className={styles.block}>
          <SectionLabelWithTitle label="Featured" title="New Arrival" />
        </div>
        <div className={styles.grid}>
          <div className={styles.large}>
            <Flex flexDirection="column" gap={16} className={styles.large_block}>
              <div className={styles.title}>PlayStation 5</div>
              <p className={styles.desc}>Black and White version of the PS5 coming out on sale.</p>
              <ShopNowLink to={`/${ROUTES.PRODUCT}/playstation`} />
            </Flex>
          </div>
          <div className={styles.row}>
            <div className={styles.full}>
              <Flex flexDirection="column" gap={16} className={styles.full_block}>
                <div className={styles.title}>Women’s Collections</div>
                <p className={styles.desc}>
                  Featured woman collections that give you another vibe.
                </p>
                <ShopNowLink to={`${ROUTES.PRODUCTS}/womans-fashion`} />
              </Flex>
            </div>
            <div className={styles.col}>
              <div className={styles.half}>
                <Flex flexDirection="column" gap={8} className={styles.half_block}>
                  <div className={styles.title}>Speakers</div>
                  <p className={styles.desc}>Amazon wireless speakers</p>
                  <ShopNowLink to={`/${ROUTES.PRODUCTS}/electronic/speakers`} />
                </Flex>
                <div className={styles.ellipse}></div>
              </div>
              <div className={styles.half}>
                <Flex flexDirection="column" gap={8} className={styles.half_block}>
                  <div className={styles.title}>Perfume</div>
                  <p className={styles.desc}>GUCCI INTENSE OUD EDP</p>
                  <ShopNowLink to={`/${ROUTES.PRODUCT}/perfume`} />
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
