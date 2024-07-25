import SectionTitle from '@components/atoms/sectionTitle/SectionTitle';
import Container from '@components/helpers/container/Container';
import BreadCrumbs from '@components/molecules/breadCrumbs/BreadCrumbs';
import ProductsList from '@components/molecules/productList/ProductList';

import styles from './productsPage.module.scss';

const ProductsPage = ({ products, error, loading, breadCrumbs, categoryName }) => {
    return (
        <>
            <Container>
                <BreadCrumbs elements={breadCrumbs} />
                <SectionTitle title={categoryName} className={styles.title} />
                <div className={styles.content}>
                    <div>
                        <ul>
                            <li>filters</li>
                            <li>filters</li>
                            <li>filters</li>
                            <li>filters</li>
                        </ul>
                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <ProductsList products={products} />
                    )}
                </div>
            </Container>
        </>
    );
};

export default ProductsPage;
