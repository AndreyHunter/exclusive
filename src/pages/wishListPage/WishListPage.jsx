import Container from '@components/helpers/container/Container';
import BreadCrumbs from '@components/molecules/breadCrumbs/BreadCrumbs';
import SuggestedProductsSection from '@components/organisms/sections/suggestedProductsSection/SuggestedProductsSection';
import WishList from '@components/organisms/wishList/WishList';

import styles from './wishListPage.module.scss';

const WishListPage = () => {
    return (
        <>
            <Container>
                <BreadCrumbs activePage="Wishlist" />
            </Container>
            <WishList className={styles.list} />
            <SuggestedProductsSection
                sectionTitle="Just For You"
                linkButtonTitle="See All"
                className={styles.section}
            />
        </>
    );
};

export default WishListPage;
