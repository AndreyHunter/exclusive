import { useEffect, useState } from 'react';

import { SectionTitle } from '@components/atoms/sectionTitle/SectionTitle';
import { Container } from '@components/helpers/container/Container';
import { BreadCrumbs } from '@components/molecules/breadCrumbs/BreadCrumbs';
import { ProductsList } from '@components/molecules/productList/ProductList';
import type { Product, BreadCrumbsType } from 'types/index';
import { Loader } from '@components/atoms/loader/Loader';
import { FilterPanel } from '@components/organisms/filterPanel/FilterPanel';
import { Flex } from '@/components/helpers/flex/Flex';
import { SortSelect } from '@components/molecules/sortSelect/SortSelect';

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
  const [prevProducts, setPrevProducts] = useState(products);

  useEffect(() => {
    if (!loading) {
      setPrevProducts(products);
    }
  }, [products, loading]);

  return (
    <>
      <Container>
        <BreadCrumbs elements={breadCrumbs} />
        <SectionTitle className={styles.title}>{categoryName}</SectionTitle>
        <Flex justifyContent="space-between" className={styles.panel}>
          <span>
            {loading
              ? `Found ${prevProducts.length} products`
              : `Found ${products.length} products`}
          </span>
          <SortSelect />
        </Flex>
        <div className={styles.content}>
          <FilterPanel />
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
