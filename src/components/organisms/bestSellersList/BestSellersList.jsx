import ProductCard from '@components/molecules/productCard/ProductCard';

import styles from './bestSellersList.module.scss';

const BestSellersList = ({ products, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <ul className={combinedClasses}>
            {products &&
                products.map((product) => <ProductCard key={product._id} product={product} />)}
        </ul>
    );
};

export default BestSellersList;
