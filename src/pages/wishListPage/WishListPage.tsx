import { Container } from '@components/helpers/container/Container';
import { BreadCrumbs } from '@components/molecules/breadCrumbs/BreadCrumbs';
import { SuggestedProductsSectionContainer as SuggestedProductsSection } from '@components/organisms/sections/suggestedProductsSection/SuggestedProductsSectionContainer';
import { WishList } from '@components/organisms/wishList/WishList';

import styles from './wishListPage.module.scss';

const WishListPage = () => {
  return (
    <>
      <Container>
        <BreadCrumbs activePage="Wishlist" />
      </Container>
      <div className={styles.list}>
        <WishList products={[]} />
      </div>
      <SuggestedProductsSection sectionTitle="Just For You" className={styles.section} />
    </>
  );
};

export default WishListPage;
