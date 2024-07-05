import SectionLabelWithTitle from '../../../molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import ProductSlider from '../../../organisms/productSlider/ProductSlider';
import Button from '../../../atoms/button/Button';
import Countdown from '../../../molecules/countdown/Countdown';

import Flex from '../../../helpers/flex/Flex';
import Container from '../../../helpers/container/Container';

import products from '../../../../constants/products';

import styles from './flashSalesSection.module.scss';

const FlashSalesSection = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();
    const flashSalesProducts = products.filter((product) => product.flashSales);

    return (
        <section className={combinedClasses}>
            <Container>
                <Flex className={styles.flex} alignItems="flex-end" flexWrap="wrap">
                    <SectionLabelWithTitle label="Today’s" title="Flash Sales" />
                    <Countdown variant="transparent" />
                </Flex>

                <ProductSlider products={flashSalesProducts} buttonsPosition="top" />
                <Flex justifyContent="center" className={styles.button}>
                    <Button  title="View All Products" />
                </Flex>
            </Container>
        </section>
    );
};

export default FlashSalesSection;