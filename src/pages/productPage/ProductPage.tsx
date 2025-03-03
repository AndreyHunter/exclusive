import { useLocation } from 'react-router-dom';

import { Utils } from '@utils/index';
import { Container } from '@components/helpers/container/Container';
import { BreadCrumbs } from '@components/molecules/breadCrumbs/BreadCrumbs';
import { ProductInfo } from '@components/organisms/productInfo/ProductInfo';
import { ProductInfoSlider } from '@components/organisms/productInfoSlider/ProductInfoSlider';
import { SuggestedProductsSection } from '@components/organisms/sections/suggestedProductsSection/SuggestedProductsSection';
import type { ProductWithInfo } from 'types/index';
import { Flex } from '@components/helpers/flex/Flex';

import styles from './productPage.module.scss';

const product: ProductWithInfo = {
  _id: '1',
  name: 'Sony DualSense White',
  image:
    'https://eu-east-exclusive24.s3.eu-north-1.amazonaws.com/product-images/1721258221392-4d31381f7fe4841786f4511bd4849d87.png',
  images: [
    'https://eu-east-exclusive24.s3.eu-north-1.amazonaws.com/product-images/1721258221392-4d31381f7fe4841786f4511bd4849d87.png',
    'https://eu-east-exclusive24.s3.eu-north-1.amazonaws.com/product-images/1721258221396-9b23a76cbe02748d2090a0b9a11cf0a5.png',
    'https://eu-east-exclusive24.s3.eu-north-1.amazonaws.com/product-images/1721258221411-9e3950aed9181acb44510f859f50d850.png',
    'https://eu-east-exclusive24.s3.eu-north-1.amazonaws.com/product-images/1721258221416-a445f7c73ec2a2153e0e149e85ee9d28.png',
  ],
  inStock: true,
  category: 'electronics/headphones',
  price: 160,
  discountedPrice: 120,
  description: 'Sony DualSense White Wireless Headphones with Micro',
  rating: 5,
  reviewsCount: 88,
  flashSales: true,
  bestSelling: false,
  colors: [
    { name: 'ocean', color: '#A0BCE0' },
    { name: 'light-coral', color: '#E07575' },
  ],
  sizes: ['xl', 'l', 'm', 'xs'],
};

const ProductPage = () => {
  const location = useLocation();
  const breakCrumbs = Utils.generateBreadcrumbs(location.pathname);

  return (
    <>
      <Container>
        <BreadCrumbs elements={breakCrumbs} />
      </Container>
      <section className={`${styles.section} ${styles.padding}`}>
        <Container>
          <Flex className={styles.flex}>
            <ProductInfoSlider images={product.images} className={styles.slider} />
            <ProductInfo product={product} className={styles.info} />
          </Flex>
        </Container>
      </section>
      <SuggestedProductsSection sectionTitle="Related Item" className={styles.section} />
    </>
  );
};

export default ProductPage;
