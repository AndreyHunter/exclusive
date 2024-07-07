import products from '@constants/products';

import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import Countdown from '@components/molecules/countdown/Countdown';
import SectionLabelWithTitle from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import ProductSlider from '@components/organisms/productSlider/ProductSlider';

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
                    <Button title="View All Products" />
                </Flex>
            </Container>
        </section>
    );
};

export default FlashSalesSection;
