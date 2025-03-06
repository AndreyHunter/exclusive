import { clsx } from 'clsx';

import { Container } from '@components/helpers/container/Container';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { CategorySlider } from '@components/organisms/categorySlider/CategorySlider';

import styles from './categoriesSection.module.scss';

interface CategoriesSectionProps {
  className?: string;
}

export const CategoriesSection = ({ className }: CategoriesSectionProps) => {
  const classes = clsx(styles.root, className);
  return (
    <section className={classes}>
      <Container>
        <div className={styles.block}>
          <SectionLabelWithTitle label="Categories" title="Browse By Category" />
        </div>
        <CategorySlider />
      </Container>
    </section>
  );
};
