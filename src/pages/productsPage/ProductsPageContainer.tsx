import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  fetchProductsByCategories,
  clearProducts,
  selectProducts,
  selectProductsError,
  selectProductsIsLoading,
  fetchProducts,
} from '@features/products/productsSlice';
import { Utils } from '@utils/index';

import ProductsPage from './ProductsPage';

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectProductsIsLoading);
  const error = useAppSelector(selectProductsError);
  const [limit, setLimit] = useState(20);

  const { pathname } = useLocation();
  const fullPath = pathname.replace('/products', '');

  const categoryName = Utils.getCategoryName(fullPath);
  const breadCrumbs = Utils.generateBreadcrumbs(pathname);

  useEffect(() => {
    if (fullPath) {
      dispatch(fetchProductsByCategories({ limit, category: fullPath }));
    } else {
      dispatch(fetchProducts({ limit }));
    }

    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch, limit, fullPath]);

  return (
    <ProductsPage
      products={products}
      error={error}
      loading={loading}
      breadCrumbs={breadCrumbs}
      categoryName={categoryName}
    />
  );
};

export default ProductPageContainer;
