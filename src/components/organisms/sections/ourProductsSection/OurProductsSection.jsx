import SectionLabelWithTitle from '../../../molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import Button from '../../../atoms/button/Button';
import ProductCard from '../../../molecules/productCard/ProductCard';

import Container from '../../../helpers/container/Container';

import products from '../../../../constants/products';

import styles from './ourProductsSection.module.scss';

const OurProductsSection = ({ className, ...props }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;

    return (
        <section className={combinedClassName} {...props}>
            <Container>
                <SectionLabelWithTitle
                    label="Our Products"
                    title="Explore Our Products"
                    className={styles.block}
                />
                <ul className={styles.list}>
                    {products &&
                        products
                            .filter((product) => !product.bestSelling && !product.flashSales)
                            .map((product) => <ProductCard key={product.id} product={product} />)}
                </ul>
                <div className={styles.button}>
                    <Button title="View All Products" />
                </div>
            </Container>
        </section>
    );
};

export default OurProductsSection;
