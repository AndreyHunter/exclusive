import SectionLabel from '../../ui/sectionLabel/SectionLabel';
import SectionTitle from '../../ui/sectionTitle/SectionTitle';
import ProductSlider from '../productSlider/ProductSlider';
import Button from '../../ui/button/Button';

import Container from '../container/Container';

import styles from './flashSalesSection.module.scss';

const FlashSalesSection = () => {
    return (
        <section>
            <Container>
                <div style={{ paddingBottom: 40 }}>
                    <div className={styles.titleBox}>
                        <SectionLabel label="Today’s" />
                        <SectionTitle title="Flash Sales" />
                    </div>
                </div>
                <ProductSlider />
                <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: 60 }}>
                    <Button title="View All Products" />
                </div>
            </Container>
        </section>
    );
};

export default FlashSalesSection;
