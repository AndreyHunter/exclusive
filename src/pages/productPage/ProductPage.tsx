import { clsx } from 'clsx';

import type { ProductWithInfo, BreadCrumbsType } from 'types/index';
import { Container } from '@components/helpers/container/Container';
import { BreadCrumbs } from '@components/molecules/breadCrumbs/BreadCrumbs';
import { ProductInfo } from '@components/organisms/productInfo/ProductInfo';
import { ProductImagesSlider } from '@components/organisms/productImagesSlider/ProductImagesSlider';
import { SuggestedProductsSectionContainer as SuggestedProductsSection } from '@components/organisms/sections/suggestedProductsSection/SuggestedProductsSectionContainer';
import { Flex } from '@components/helpers/flex/Flex';

import styles from './productPage.module.scss';

interface ProductPageProps {
  product: ProductWithInfo | null;
  breadCrumbs?: BreadCrumbsType[];
}

const ProductPage = ({ product, breadCrumbs }: ProductPageProps) => {
  return (
    <>
      <Container>
        <Container>
          <BreadCrumbs elements={breadCrumbs} />
        </Container>
        <section className={clsx(styles.section, styles.padding)}>
          <Flex className={styles.flex}>
            {product && <ProductImagesSlider images={product.images} className={styles.slider} />}
            {product && <ProductInfo product={product} className={styles.info} />}
          </Flex>
        </section>
        <SuggestedProductsSection sectionTitle="Related Items" className={styles.section} />
      </Container>
    </>
  );
};

export default ProductPage;
