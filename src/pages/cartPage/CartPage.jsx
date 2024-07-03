import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import Container from '../../components/helpers/container/Container';
import CartSection from '../../components/organisms/sections/cartSection/CartSectionContainer';

import styles from './cartPage.module.scss';

const CartPage = () => {
    return (
        <>
            <Container>
                <BreadCrumbs activePage="Cart" />
                <CartSection className={styles.section} />
            </Container>
        </>
    );
};

export default CartPage;
