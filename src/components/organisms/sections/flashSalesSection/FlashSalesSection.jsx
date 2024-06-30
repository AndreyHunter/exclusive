import SectionLabelWithTitle from '../../../molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import ProductSlider from '../../../organisms/productSlider/ProductSlider';
import Button from '../../../atoms/button/Button';
import Countdown from '../../../molecules/countdown/Countdown';

import FlexBlock from '../../../helpers/flexBlock/FlexBlock';
import Container from '../../../helpers/container/Container';

import styles from './flashSalesSection.module.scss';

const FlashSalesSection = ({ className, ...props }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;

    return (
        <section className={combinedClassName} {...props}>
            <Container>
                <FlexBlock className={styles.block}>
                    <SectionLabelWithTitle label="Today’s" title="Flash Sales" />
                    <Countdown variant="transparent" />
                </FlexBlock>

                <ProductSlider />
                <FlexBlock justifyCenter className={styles.button}>
                    <Button title="View All Products" />
                </FlexBlock>
            </Container>
        </section>
    );
};

export default FlashSalesSection;
