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
  selectBestSellers,
  fetchBestSellers,
  fetchFlashSales,
  selectFlashSales,
} from '@features/products/productsSlice';
import { Utils } from '@utils/index';

import ProductsPage from './ProductsPage';

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const bestSellers = useAppSelector(selectBestSellers);
  const flashSales = useAppSelector(selectFlashSales);
  const loading = useAppSelector(selectProductsIsLoading);
  const error = useAppSelector(selectProductsError);
  const [limit, setLimit] = useState(20);

  const { pathname } = useLocation();
  const fullPath = pathname.replace('/products', '');

  const categoryName = Utils.getCategoryName(fullPath);
  const breadCrumbs = Utils.generateBreadcrumbs(pathname);

  useEffect(() => {
    dispatch(clearProducts());
    if (pathname === '/products') {
      dispatch(fetchProducts({ limit }));
    } else if (fullPath === '/best-sellers') {
      dispatch(fetchBestSellers({ limit }));
    } else if (fullPath === '/flash-sales') {
      dispatch(fetchFlashSales({ limit }));
    } else {
      dispatch(fetchProductsByCategories({ limit, category: fullPath }));
    }
  }, [dispatch, limit, fullPath, pathname]);

  return (
    <ProductsPage
      products={bestSellers.length ? bestSellers : flashSales.length ? flashSales : products}
      error={error}
      loading={loading}
      breadCrumbs={breadCrumbs}
      categoryName={categoryName}
    />
  );
};

export default ProductPageContainer;
