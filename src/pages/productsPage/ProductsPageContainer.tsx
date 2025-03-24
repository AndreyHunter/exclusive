import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  clearProducts,
  selectProducts,
  selectProductsError,
  selectProductsIsLoading,
  fetchProducts,
  selectHasMore,
} from '@features/products/productsSlice';
import type { SortBy } from '@features/productFilters/productFiltersSlice';
import {
  selectAllFilters,
  setPriceRange,
  setSortBy,
  setSpecificFilter,
  resetFilters,
} from '@features/productFilters/productFiltersSlice';
import { Utils } from '@utils/index';

import ProductsPage from './ProductsPage';

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectProductsIsLoading);
  const error = useAppSelector(selectProductsError);
  const filters = useAppSelector(selectAllFilters);

  const [page, setPage] = useState(1);
  const limit = 20;

  const { pathname, search } = useLocation();
  const fullPath = pathname.replace('/products', '');
  const navigate = useNavigate();
  const [isFiltersLoaded, setIsFiltersLoaded] = useState(false);
  const prevPathname = useRef(pathname);
  const isLoadingRef = useRef(false);
  const isFilterChangeRef = useRef(false);

  const lastItemRef = useRef<HTMLLIElement | null>(null);
  const hasMore = useAppSelector(selectHasMore);

  const categoryName = Utils.getCategoryName(fullPath);
  const breadCrumbs = Utils.generateBreadcrumbs(pathname);

  const loadProducts = useCallback(() => {
    if (isFiltersLoaded && hasMore && !isLoadingRef.current) {
      isLoadingRef.current = true;

      const params: any = { limit, page, filters };

      if (pathname === '/products') {
        params.type = 'products';
      } else if (fullPath === '/best-sellers') {
        params.type = 'best-sellers';
      } else if (fullPath === '/flash-sales') {
        params.type = 'flash-sales';
      } else {
        params.type = 'products-category';
        params.category = fullPath;
      }

      dispatch(fetchProducts(params))
        .then(() => {
          isLoadingRef.current = false;
        })
        .catch(() => {
          isLoadingRef.current = false;
        });
    }
  }, [dispatch, fullPath, filters, hasMore, isFiltersLoaded, limit, page, pathname]);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      dispatch(clearProducts());
      dispatch(resetFilters());
      setIsFiltersLoaded(false);
      setPage(1);
      prevPathname.current = pathname;
      navigate({ search: '' }, { replace: true });
    }
  }, [pathname, dispatch, navigate]);

  useEffect(() => {
    if (!isFiltersLoaded) {
      const params = queryString.parse(search, { arrayFormat: 'bracket' });
      if (params.minPrice && params.maxPrice) {
        dispatch(setPriceRange([Number(params.minPrice), Number(params.maxPrice)]));
      }

      if (params.sortBy) {
        dispatch(setSortBy(params.sortBy as SortBy));
      }

      Object.entries(params).forEach(([key, value]) => {
        if (key !== 'minPrice' && key !== 'maxPrice' && key !== 'sortBy') {
          dispatch(setSpecificFilter({ key, value }));
        }
      });

      setIsFiltersLoaded(true);
    }
  }, [dispatch, search, isFiltersLoaded]);

  useEffect(() => {
    if (isFiltersLoaded) {
      const query = {
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        sortBy: filters.sortBy,
        ...filters.specificFilters,
      };

      const newSearch = queryString.stringify(query, { arrayFormat: 'bracket' });

      if (newSearch !== search.substring(1)) {
        navigate({ search: newSearch }, { replace: true });
        isFilterChangeRef.current = true;
      }
    }
  }, [filters, navigate, isFiltersLoaded, search]);

  useEffect(() => {
    if (isFiltersLoaded && isFilterChangeRef.current) {
      dispatch(clearProducts());
      setPage(1);
      isFilterChangeRef.current = false;
    }
  }, [dispatch, isFiltersLoaded, filters]);

  useEffect(() => {
    if (isFiltersLoaded) {
      loadProducts();
    }
  }, [isFiltersLoaded, page, loadProducts]);

  useEffect(() => {
    if (loading) return;

    const currentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 },
    );

    const subscriber = lastItemRef.current;
    if (subscriber) {
      currentObserver.observe(subscriber);
    }

    return () => {
      if (subscriber) {
        currentObserver.disconnect();
      }
    };
  }, [loading, hasMore, products.length]);

  return (
    <ProductsPage
      products={products}
      error={error}
      loading={loading}
      breadCrumbs={breadCrumbs}
      categoryName={categoryName}
      ref={lastItemRef}
    />
  );
};

export default ProductPageContainer;
