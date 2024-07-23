import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { flashSalesSelector } from '@store/products/productsSelectors';
import { fetchFlashSales } from '@store/products/productsSlice';

import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import Countdown from '@components/molecules/countdown/Countdown';
import SectionLabelWithTitle from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import ProductSlider from '@components/organisms/productSlider/ProductSlider';

import styles from './flashSalesSection.module.scss';

const FlashSalesSection = ({ className }) => {
    const dispatch = useDispatch();
    const products = useSelector(flashSalesSelector);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        dispatch(fetchFlashSales({ limit }));
    }, [dispatch, limit]);

    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <Flex className={styles.flex} alignItems="flex-end" flexWrap="wrap">
                    <SectionLabelWithTitle label="Today’s" title="Flash Sales" />
                    <Countdown variant="transparent" />
                </Flex>

                <ProductSlider products={products} buttonsPosition="top" />
                <Flex justifyContent="center" className={styles.button}>
                    <Button title="View All Products" />
                </Flex>
            </Container>
        </section>
    );
};

export default FlashSalesSection;
