import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import ProductCard from '@components/molecules/productCard/ProductCard';

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
                        {true &&
                            []
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
