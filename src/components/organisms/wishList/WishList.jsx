import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import Button from '../../atoms/button/Button';
import ProductCard from '../../molecules/productCard/ProductCard';

import Container from '../../helpers/container/Container';

import products from '../../../constants/products';

import styles from './wishList.module.scss';

const WishList = ({ list, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <section className={combinedClasses}>
            <Container>
                <FlexBlock column className={styles.content}>
                    <FlexBlock alignCenter spaceBetween className={styles.block}>
                        <div className={styles.title}>Wishlist {`(${list?.length || 0})`}</div>
                        <Button variant="transparent" title="Move All To Bag" />
                    </FlexBlock>

                    <ul className={styles.grid}>
                        {products &&
                            products
                                .map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                                .splice(0, 4)}
                    </ul>
                </FlexBlock>
            </Container>
        </section>
    );
};

export default WishList;
