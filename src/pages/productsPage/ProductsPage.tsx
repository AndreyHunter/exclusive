import { SectionTitle } from '@components/atoms/sectionTitle/SectionTitle';
import { Container } from '@components/helpers/container/Container';
import { BreadCrumbs } from '@components/molecules/breadCrumbs/BreadCrumbs';
import { ProductsList } from '@components/molecules/productList/ProductList';
import type { Product, BreadCrumbsType } from 'types/index';
import { Loader } from '@components/atoms/loader/Loader';

import styles from './productsPage.module.scss';

interface ProductsPageProps {
  products: Product[];
  error: string | null | undefined;
  loading: boolean;
  breadCrumbs: BreadCrumbsType[];
  categoryName: string;
}

const ProductsPage = ({
  products,
  error,
  loading,
  breadCrumbs,
  categoryName,
}: ProductsPageProps) => {
  return (
    <>
      <Container>
        <BreadCrumbs elements={breadCrumbs} />
        <SectionTitle className={styles.title}>{categoryName}</SectionTitle>
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
            <Loader />
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
