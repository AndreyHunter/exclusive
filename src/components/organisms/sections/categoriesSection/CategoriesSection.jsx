import Container from '@components/helpers/container/Container';
import SectionLabelWithTitle from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import CategorySlider from '@components/organisms/categorySlider/CategorySlider';

import styles from './categoriesSection.module.scss';

const CategoriesSection = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <SectionLabelWithTitle
                    label="Categories"
                    title="Browse By Category"
                    className={styles.block}
                />
                <CategorySlider />
            </Container>
        </section>
    );
};

export default CategoriesSection;
