import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { exploreOurProductsSelector } from '@store/products/productsSelectors';
import { fetchOurProducts } from '@store/products/productsSlice';

import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import ProductCard from '@components/molecules/productCard/ProductCard';
import SectionLabelWithTitle from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';

import styles from './ourProductsSection.module.scss';

const OurProductsSection = ({ className }) => {
    const dispatch = useDispatch();
    const products = useSelector(exploreOurProductsSelector);
    const [limit, setLimit] = useState(8);
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    useEffect(() => {
        dispatch(fetchOurProducts({ limit }));
    }, [dispatch, limit]);

    return (
        <section className={combinedClasses}>
            <Container>
                <SectionLabelWithTitle
                    label="Our Products"
                    title="Explore Our Products"
                    className={styles.block}
                />
                <ul className={styles.list}>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                </ul>
                <div className={styles.button}>
                    <Button title="View All Products" />
                </div>
            </Container>
        </section>
    );
};

export default OurProductsSection;
