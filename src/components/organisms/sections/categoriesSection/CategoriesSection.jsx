import SectionLabelWithTitle from '../../../molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import CategorySlider from '../../categorySlider/CategorySlider';

import Container from '../../../helpers/container/Container';

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
