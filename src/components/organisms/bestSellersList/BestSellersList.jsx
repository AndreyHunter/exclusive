import ProductCard from '../../molecules/productCard/ProductCard';

import products from '../../../constants/products';

import styles from './bestSellersList.module.scss';

const BestSellersList = () => {
    return (
        <ul className={styles.list}>
            {products &&
                products
                    .filter((product) => product.bestSelling)
                    .map((product) => <ProductCard key={product.id} product={product} />)}
        </ul>
    );
};

export default BestSellersList;
