import SectionLabelWithTitle from '../../../molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import ProductSlider from '../../../organisms/productSlider/ProductSlider';
import Button from '../../../atoms/button/Button';
import Countdown from '../../../molecules/countdown/Countdown';

import FlexBlock from '../../../helpers/flexBlock/FlexBlock';
import Container from '../../../helpers/container/Container';

import products from '../../../../constants/products';

import styles from './flashSalesSection.module.scss';

const FlashSalesSection = ({ className, ...props }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`;
    const flashSalesProducts = products.filter((product) => product.flashSales);
    
    return (
        <section className={combinedClasses} {...props}>
            <Container>
                <FlexBlock className={styles.block}>
                    <SectionLabelWithTitle label="Today’s" title="Flash Sales" />
                    <Countdown variant="transparent" />
                </FlexBlock>

                <ProductSlider products={flashSalesProducts} buttonsPosition="top" />
                <FlexBlock justifyCenter className={styles.button}>
                    <Button title="View All Products" />
                </FlexBlock>
            </Container>
        </section>
    );
};

export default FlashSalesSection;