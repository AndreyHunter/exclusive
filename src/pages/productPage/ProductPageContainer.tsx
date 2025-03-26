import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductService } from '@services/index';
import type { ProductWithInfo, BreadCrumbsType } from 'types/index';
import { ROUTES } from '@routes/routes';

import ProductsPage from './ProductPage';

const ProductPageContainer = () => {
  const [product, setProduct] = useState<ProductWithInfo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await ProductService.getProduct(String(id));
      setProduct(res);
    };

    getProduct();
  }, [id]);

  const category = product ? product.category.split('/')[0] : '';
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const breadCrumbs: BreadCrumbsType[] = [
    { path: `/${ROUTES.PRODUCTS}`, name: 'Products' },
    {
      name: categoryName,
      path: '',
    },
  ];

  return <ProductsPage product={product} breadCrumbs={breadCrumbs} />;
};

export default ProductPageContainer;
