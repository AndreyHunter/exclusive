import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bestSellersSelector } from '@store/products/productsSelectors';
import { fetchBestSellers } from '@store/products/productsSlice';

import useMediaQuery from '@hooks/useMediaQuery';

import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import SectionLabelWithTitle from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import ProductSlider from '@components/organisms/productSlider/ProductSlider';

import styles from './bestSellersSection.module.scss';

const BestSellersSection = ({ className }) => {
    const dispatch = useDispatch();
    const products = useSelector(bestSellersSelector);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        dispatch(fetchBestSellers({ limit }));
    }, [dispatch]);

    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();
    const isMobile = useMediaQuery('(max-width: 668px)');

    return (
        <section className={combinedClasses}>
            <Container>
                <div className={styles.block}>
                    <SectionLabelWithTitle label="This Month" title="Best Selling Products" />
                    {!isMobile && <Button title="View All" />}
                </div>
                <ProductSlider products={products} />
                {isMobile && (
                    <Flex justifyContent="center" className={styles.button}>
                        <Button title="View All" />
                    </Flex>
                )}
            </Container>
        </section>
    );
};

export default BestSellersSection;
