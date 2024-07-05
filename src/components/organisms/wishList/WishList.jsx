import Button from '../../atoms/button/Button';
import ProductCard from '../../molecules/productCard/ProductCard';

import Container from '../../helpers/container/Container';
import Flex from '../../helpers/flex/Flex';

import products from '../../../constants/products';

import styles from './wishList.module.scss';

const WishList = ({ list, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <Flex flexDirection="column" className={styles.content}>
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        className={styles.block}>
                        <div className={styles.title}>Wishlist {`(${list?.length || 0})`}</div>
                        <Button variant="transparent" title="Move All To Bag" />
                    </Flex>

                    <ul className={styles.grid}>
                        {products &&
                            products
                                .map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                                .splice(0, 4)}
                    </ul>
                </Flex>
            </Container>
        </section>
    );
};

export default WishList;
