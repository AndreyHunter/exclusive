import SectionLabelWithTitle from '../sectionLabelWithTitle/SectionLabelWithTitle';
import CategoryList from '../categoryList/CategoryList';

import Container from '../container/Container';

import styles from './categoriesSection.module.scss';

const CategoriesSection = ({ ...props }) => {
    return (
        <section {...props}>
            <Container>
                <SectionLabelWithTitle
                    label="Categories"
                    title="Browse By Category"
                    style={{ paddingBottom: 60 }}
                />
                <CategoryList />
            </Container>
        </section>
    );
};

export default CategoriesSection;