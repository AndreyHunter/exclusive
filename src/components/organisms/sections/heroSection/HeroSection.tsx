import { clsx } from 'clsx';

import { Container } from '@components/helpers/container/Container';
import { Flex } from '@components/helpers/flex/Flex';
import { CategoryNav } from '@components/organisms/categoryNav/CategoryNav';
import { MainSlider } from '@components/organisms/mainSlider/MainSlider';
import { categories } from '@constants/categories';

import styles from './heroSection.module.scss';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  const classes = clsx(styles.root, className);

  return (
    <section className={classes}>
      <Container>
        <Flex>
          <Flex className={styles.wrapper} justifyContent="space-between">
            <div className={styles.block}>
              <CategoryNav categories={categories} />
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
