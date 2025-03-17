import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

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
import {
  selectAllFilters,
  setPriceRange,
  setSpecificFilter,
} from '@features/productFilters/productFiltersSlice';
import { Utils } from '@utils/index';

import ProductsPage from './ProductsPage';

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const bestSellers = useAppSelector(selectBestSellers);
  const flashSales = useAppSelector(selectFlashSales);
  const filters = useAppSelector(selectAllFilters);

  const loading = useAppSelector(selectProductsIsLoading);
  const error = useAppSelector(selectProductsError);

  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);

  const { pathname, search } = useLocation();
  const fullPath = pathname.replace('/products', '');
  const navigate = useNavigate();
  const [isFiltersLoaded, setIsFiltersLoaded] = useState(false);

  const categoryName = Utils.getCategoryName(fullPath);
  const breadCrumbs = Utils.generateBreadcrumbs(pathname);

  useEffect(() => {
    const params = queryString.parse(search, { arrayFormat: 'bracket' });
    if (params.minPrice && params.maxPrice) {
      dispatch(setPriceRange([Number(params.minPrice), Number(params.maxPrice)]));
    }

    Object.entries(params).forEach(([key, value]) => {
      if (key !== 'minPrice' && key !== 'maxPrice') {
        dispatch(setSpecificFilter({ key, value }));
      }
    });

    setIsFiltersLoaded(true);
  }, [dispatch, search]);

  useEffect(() => {
    const query = {
      minPrice: filters.priceRange[0],
      maxPrice: filters.priceRange[1],
      ...filters.specificFilters,
    };

    const newSearch = queryString.stringify(query, { arrayFormat: 'bracket' });

    navigate({ search: newSearch }, { replace: true });
  }, [filters, navigate]);

  useEffect(() => {
    if (isFiltersLoaded) {
      dispatch(clearProducts());
      if (pathname === '/products') {
        dispatch(fetchProducts({ limit, page, filters }));
      } else if (fullPath === '/best-sellers') {
        dispatch(fetchBestSellers({ limit, page, filters }));
      } else if (fullPath === '/flash-sales') {
        dispatch(fetchFlashSales({ limit, page, filters }));
      } else {
        dispatch(fetchProductsByCategories({ limit, page, filters, category: fullPath }));
      }
    }
  }, [dispatch, limit, page, filters, fullPath, pathname, isFiltersLoaded]);

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
