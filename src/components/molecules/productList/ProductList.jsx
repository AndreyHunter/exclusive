import ProductCard from '@components/molecules/productCard/ProductCard';

import styles from './productList.module.scss';

const ProductsList = ({ products, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <ul className={combinedClasses}>
            {products &&
                products.map((product) => <ProductCard key={product._id} product={product} />)}
        </ul>
    );
};

export default ProductsList;
