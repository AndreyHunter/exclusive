import SectionLabelWithTitle from '../../components/sectionLabelWithTitle/SectionLabelWithTitle';
import ProductSlider from '../productSlider/ProductSlider';
import Button from '../../ui/button/Button';

import Container from '../container/Container';

import styles from './flashSalesSection.module.scss';

const FlashSalesSection = ({ className, ...props }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;

    return (
        <section className={combinedClassName} {...props}>
            <Container>
                <SectionLabelWithTitle
                    label="Today’s"
                    title="Flash Sales"
                    style={{ paddingBottom: 30 }}
                />

                <ProductSlider />
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 60 }}>
                    <Button title="View All Products" />
                </div>
            </Container>
        </section>
    );
};

export default FlashSalesSection;