import { Container } from '@components/helpers/container/Container';
import { SectionLabelWithTitle } from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import { CategorySlider } from '@components/organisms/categorySlider/CategorySlider';

import styles from './categoriesSection.module.scss';

export const CategoriesSection = ({ className }) => {
  const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

  return (
    <section className={combinedClasses}>
      <Container>
        <div className={styles.block}>
          <SectionLabelWithTitle label="Categories" title="Browse By Category" />
        </div>
        <CategorySlider />
      </Container>
    </section>
  );
};
