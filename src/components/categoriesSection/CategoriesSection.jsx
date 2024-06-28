import SectionLabelWithTitle from '../sectionLabelWithTitle/SectionLabelWithTitle';
import CategorySlider from '../categorySlider/CategorySlider';

import Container from '../container/Container';

import styles from './categoriesSection.module.scss';

const CategoriesSection = ({ ...props }) => {
    return (
        <section {...props}>
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
